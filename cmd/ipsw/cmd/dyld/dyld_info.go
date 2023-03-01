/*
Copyright © 2018-2023 blacktop

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
package dyld

import (
	"encoding/json"
	"fmt"
	"math"
	"os"
	"path/filepath"
	"sort"
	"strings"
	"text/tabwriter"

	"github.com/apex/log"
	"github.com/blacktop/go-macho"
	"github.com/blacktop/go-macho/pkg/codesign"
	"github.com/blacktop/ipsw/internal/utils"
	"github.com/blacktop/ipsw/pkg/dyld"
	"github.com/fullsailor/pkcs7"
	"github.com/pkg/errors"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

func init() {
	DyldCmd.AddCommand(dyldInfoCmd)
	dyldInfoCmd.Flags().BoolP("closures", "c", false, "Dump program launch closures")
	dyldInfoCmd.Flags().BoolP("dlopen", "d", false, "Dump all dylibs and bundles with dlopen closures")
	dyldInfoCmd.Flags().BoolP("dylibs", "l", false, "List dylibs and their versions")
	dyldInfoCmd.Flags().BoolP("sig", "s", false, "Print code signature")
	dyldInfoCmd.Flags().BoolP("json", "j", false, "Output as JSON")
	dyldInfoCmd.Flags().Bool("diff", false, "Diff two DSC's images")
	dyldInfoCmd.Flags().Bool("delta", false, "Delta two DSC's image's versions")
	viper.BindPFlag("dyld.info.closures", dyldSearchCmd.Flags().Lookup("closures"))
	viper.BindPFlag("dyld.info.dlopen", dyldSearchCmd.Flags().Lookup("dlopen"))
	viper.BindPFlag("dyld.info.dylibs", dyldSearchCmd.Flags().Lookup("dylibs"))
	viper.BindPFlag("dyld.info.sig", dyldSearchCmd.Flags().Lookup("sig"))
	viper.BindPFlag("dyld.info.json", dyldSearchCmd.Flags().Lookup("json"))
	viper.BindPFlag("dyld.info.diff", dyldSearchCmd.Flags().Lookup("diff"))
	viper.BindPFlag("dyld.info.delta", dyldSearchCmd.Flags().Lookup("delta"))

	dyldInfoCmd.MarkZshCompPositionalArgumentFile(1, "dyld_shared_cache*")
}

type dylib struct {
	Index       int    `json:"index,omitempty"`
	Name        string `json:"name,omitempty"`
	Version     string `json:"version,omitempty"`
	UUID        string `json:"uuid,omitempty"`
	LoadAddress uint64 `json:"load_address,omitempty"`
}

type dyldInfo struct {
	Magic              string                                      `json:"magic,omitempty"`
	UUID               string                                      `json:"uuid,omitempty"`
	Platform           string                                      `json:"platform,omitempty"`
	MaxSlide           int                                         `json:"max_slide,omitempty"`
	SubCacheArrayCount int                                         `json:"num_sub_caches,omitempty"`
	SubCacheGroupID    int                                         `json:"sub_cache_group_id,omitempty"`
	SymSubCacheUUID    string                                      `json:"sym_sub_cache_uuid,omitempty"`
	Mappings           map[string][]dyld.CacheMappingWithSlideInfo `json:"mappings,omitempty"`
	CodeSignature      map[string]codesign.CodeSignature           `json:"code_signature,omitempty"`
	Dylibs             []dylib                                     `json:"dylibs,omitempty"`
}

// dyldInfoCmd represents the info command
var dyldInfoCmd = &cobra.Command{
	Use:           "info <dyld_shared_cache>",
	Aliases:       []string{"i"},
	Short:         "Parse dyld_shared_cache",
	SilenceUsage:  true,
	SilenceErrors: true,
	Args:          cobra.MinimumNArgs(1),
	RunE: func(cmd *cobra.Command, args []string) error {
		if viper.GetBool("verbose") {
			log.SetLevel(log.DebugLevel)
		}

		// flags
		// showHeader := viper.GetBool("header")
		showDylibs := viper.GetBool("dylibs")
		showClosures := viper.GetBool("closures")
		showDlopenOthers := viper.GetBool("dlopen")
		showSignature := viper.GetBool("sig")
		outAsJSON := viper.GetBool("json")
		diff := viper.GetBool("diff")
		delta := viper.GetBool("delta")
		// validate flags
		if !showDylibs && (diff || delta) {
			return errors.New("you must specify --dylibs to use --diff or --delta")
		} else if outAsJSON && (diff || delta) {
			return errors.New("you cannot use --json with --diff or --delta")
		}

		dscPath := filepath.Clean(args[0])

		fileInfo, err := os.Lstat(dscPath)
		if err != nil {
			return fmt.Errorf("file %s does not exist", dscPath)
		}

		// Check if file is a symlink
		if fileInfo.Mode()&os.ModeSymlink != 0 {
			symlinkPath, err := os.Readlink(dscPath)
			if err != nil {
				return errors.Wrapf(err, "failed to read symlink %s", dscPath)
			}
			// TODO: this seems like it would break
			linkParent := filepath.Dir(dscPath)
			linkRoot := filepath.Dir(linkParent)

			dscPath = filepath.Join(linkRoot, symlinkPath)
		}

		// TODO: check for
		// if ( dylibInfo->isAlias )
		//   	printf("[alias] %s\n", dylibInfo->path);

		f, err := dyld.Open(dscPath)
		if err != nil {
			return err
		}
		defer f.Close()

		if outAsJSON {
			dinfo := dyldInfo{
				Magic:    f.Headers[f.UUID].Magic.String(),
				UUID:     f.UUID.String(),
				Platform: f.Headers[f.UUID].Platform.String(),
				MaxSlide: int(f.Headers[f.UUID].MaxSlide),
			}

			dinfo.Mappings = make(map[string][]dyld.CacheMappingWithSlideInfo)

			for u, mp := range f.MappingsWithSlideInfo {
				for _, m := range mp {
					dinfo.Mappings[u.String()] = append(dinfo.Mappings[u.String()], *m)
				}
			}

			dinfo.CodeSignature = make(map[string]codesign.CodeSignature)

			if showSignature {
				for u, cs := range f.CodeSignatures {
					dinfo.CodeSignature[u.String()] = *cs
				}
			}

			if showDylibs {
				for idx, img := range f.Images {
					m, err := img.GetPartialMacho()
					if err != nil {
						continue
						// return fmt.Errorf("failed to create partial MachO for image %s: %v", img.Name, err)
					}
					dinfo.Dylibs = append(dinfo.Dylibs, dylib{
						Index:       idx + 1,
						Name:        img.Name,
						Version:     m.SourceVersion().Version.String(),
						UUID:        m.UUID().String(),
						LoadAddress: img.Info.Address,
					})
					m.Close()
				}
			}

			j, err := json.Marshal(dinfo)
			if err != nil {
				return err
			}

			fmt.Println(string(j))

			return nil
		}

		if !diff && !delta {
			// print HEADER info
			fmt.Println(f.String(viper.GetBool("verbose")))
		}

		if showSignature {
			fmt.Println("Code Signature")
			fmt.Println("==============")
			if f.CodeSignatures != nil {
				for u, cs := range f.CodeSignatures {
					if f.IsDyld4 {
						fmt.Printf("\n> SubCache %s\n\n", u)
					}
					cds := cs.CodeDirectories
					if len(cds) > 0 {
						for _, cd := range cds {
							var teamID string
							if len(cd.TeamID) > 0 {
								teamID = fmt.Sprintf("\tTeamID:      %s\n", cd.TeamID)
							}
							fmt.Printf("Code Directory (%d bytes)\n", cd.Length)
							fmt.Printf("\tVersion:     %s\n"+
								"\tFlags:       %s\n"+
								"\tCodeLimit:   0x%x\n"+
								"\tIdentifier:  %s (@0x%x)\n"+
								"%s"+
								"\tCDHash:      %s (computed)\n"+
								"\t# of hashes: %d code (%d pages) + %d special\n"+
								"\tHashes @%d size: %d Type: %s\n",
								cd.Header.Version,
								cd.Header.Flags,
								cd.Header.CodeLimit,
								cd.ID,
								cd.Header.IdentOffset,
								teamID,
								cd.CDHash,
								cd.Header.NCodeSlots,
								int(math.Pow(2, float64(cd.Header.PageSize))),
								cd.Header.NSpecialSlots,
								cd.Header.HashOffset,
								cd.Header.HashSize,
								cd.Header.HashType)
							if viper.GetBool("verbose") {
								for _, sslot := range cd.SpecialSlots {
									fmt.Printf("\t\t%s\n", sslot.Desc)
								}
								for _, cslot := range cd.CodeSlots {
									fmt.Printf("\t\t%s\n", cslot.Desc)
								}
							}
						}
					}
					reqs := cs.Requirements
					if len(reqs) > 0 {
						fmt.Printf("Requirement Set (%d bytes) with %d requirement\n",
							reqs[0].Length, // TODO: fix this (needs to be length - sizeof(header))
							len(reqs))
						for idx, req := range reqs {
							fmt.Printf("\t%d: %s (@%d, %d bytes): %s\n",
								idx,
								req.Type,
								req.Offset,
								req.Length,
								req.Detail)
						}
					}
					if len(cs.CMSSignature) > 0 {
						fmt.Println("CMS (RFC3852) signature:")
						p7, err := pkcs7.Parse(cs.CMSSignature)
						if err != nil {
							return err
						}
						w := tabwriter.NewWriter(os.Stdout, 0, 0, 1, ' ', 0)
						for _, cert := range p7.Certificates {
							var ou string
							if cert.Issuer.Organization != nil {
								ou = cert.Issuer.Organization[0]
							}
							if cert.Issuer.OrganizationalUnit != nil {
								ou = cert.Issuer.OrganizationalUnit[0]
							}
							fmt.Fprintf(w, "        OU: %s\tCN: %s\t(%s thru %s)\n",
								ou,
								cert.Subject.CommonName,
								cert.NotBefore.Format("02Jan2006 15:04:05"),
								cert.NotAfter.Format("02Jan2006 15:04:05"))
						}
						w.Flush()
					}
				}
			} else {
				fmt.Println("  - no code signature data")
			}
			fmt.Println()
		}

		if showDylibs {
			if diff || delta {
				if len(args) < 2 {
					return fmt.Errorf("please provide two dyld_shared_cache files to diff")
				}

				dylib2ver1 := make(map[string]string)
				for _, img := range f.Images {
					m, err := img.GetPartialMacho()
					if err != nil {
						return fmt.Errorf("failed to create partial MachO for image %s: %v", img.Name, err)
					}
					dylib2ver1[img.Name] = m.SourceVersion().Version.String()
				}

				f2, err := dyld.Open(filepath.Clean(args[1]))
				if err != nil {
					return err
				}
				defer f.Close()

				if delta {
					dylib2ver2 := make(map[string]string)
					for _, img := range f2.Images {
						m, err := img.GetPartialMacho()
						if err != nil {
							return fmt.Errorf("failed to create partial MachO for image %s: %v", img.Name, err)
						}
						dylib2ver2[img.Name] = m.SourceVersion().Version.String()
					}

					var new []string
					var gone []string

					for d1, v1 := range dylib2ver1 {
						if _, ok := dylib2ver2[d1]; !ok {
							gone = append(gone, fmt.Sprintf("%s\t(%s)", d1, v1))
						}
					}

					var diffs []utils.MachoVersion
					for d2, v2 := range dylib2ver2 {
						if v1, ok := dylib2ver1[d2]; ok {
							if v1 != v2 {
								verdiff, err := utils.DiffVersion(v2, v1)
								if err != nil {
									return err
								}
								diffs = append(diffs, utils.MachoVersion{
									Name:    d2,
									Version: verdiff,
								})
								// fmt.Printf("%s\t(%s -> %s) %s\n", d2, v2, v1, verdiff)
							}
						} else {
							new = append(new, fmt.Sprintf("%s\t(%s)", d2, v2))
						}
					}

					sort.Strings(new)
					fmt.Printf("### 🆕 dylibs\n\n")
					for _, d := range new {
						fmt.Printf("- %s\n", d)
					}
					fmt.Println()
					sort.Strings(gone)
					fmt.Printf("### ❌ removed dylibs\n\n")
					for _, d := range gone {
						fmt.Printf("- %s\n", d)
					}
					fmt.Println()
					fmt.Printf("### ⬆️ (delta) updated dylibs\n\n")
					utils.SortMachoVersions(diffs)
					w := tabwriter.NewWriter(os.Stdout, 0, 0, 1, ' ', 0)
					var prev string
					for _, d := range diffs {
						if len(prev) > 0 && prev != d.Version {
							fmt.Fprintf(w, "\n---\n\n")
						}
						fmt.Fprintf(w, "- (%s)\t`%s`  \n", d.Version, d.Name)
						prev = d.Version
					}
					w.Flush()
				}

				if diff {
					var dout1 []string
					for _, img := range f.Images {
						m, err := img.GetPartialMacho()
						if err != nil {
							return fmt.Errorf("failed to create partial MachO for image %s: %v", img.Name, err)
						}
						dout1 = append(dout1, fmt.Sprintf("%s\t(%s)", img.Name, m.SourceVersion().Version))
					}
					sort.Strings(dout1)

					var dout2 []string
					for _, img := range f2.Images {
						m, err := img.GetPartialMacho()
						if err != nil {
							return fmt.Errorf("failed to create partial MachO for image %s: %v", img.Name, err)
						}
						dout2 = append(dout2, fmt.Sprintf("%s\t(%s)", img.Name, m.SourceVersion().Version))
					}
					sort.Strings(dout2)

					out, err := utils.GitDiff(
						strings.Join(dout1, "\n")+"\n",
						strings.Join(dout2, "\n")+"\n",
						&utils.GitDiffConfig{Color: viper.GetBool("color"), Tool: viper.GetString("diff-tool")})
					if err != nil {
						return err
					}

					if len(out) == 0 {
						log.Info("No differences found")
					} else {
						log.Info("Differences found")
						fmt.Println(out)
					}
				}
			} else {
				fmt.Println("Images")
				fmt.Println("======")
				w := tabwriter.NewWriter(os.Stdout, 0, 0, 2, ' ', 0)
				for idx, img := range f.Images {
					if f.Headers[f.UUID].FormatVersion.IsDylibsExpectedOnDisk() {
						m, err := macho.Open(img.Name)
						if err != nil {
							if serr, ok := err.(*macho.FormatError); !ok {
								return errors.Wrapf(serr, "failed to open MachO %s", img.Name)
							}
							fat, err := macho.OpenFat(img.Name)
							if err != nil {
								return errors.Wrapf(err, "failed to open Fat MachO %s", img.Name)
							}
							fmt.Fprintf(w, "%4d: %#x\t(%s)\t%s\n", idx+1, img.Info.Address, fat.Arches[0].SourceVersion().Version, img.Name)
							fat.Close()
							continue
						}
						if m.SourceVersion() != nil {
							fmt.Fprintf(w, "%4d: %#x\t(%s)\t%s\n", idx+1, img.Info.Address, m.SourceVersion().Version, img.Name)
						} else {
							fmt.Fprintf(w, "%4d: %#x\t(%s)\t%s\n", idx+1, img.Info.Address, "No SourceVersion", img.Name)
						}
						m.Close()
					} else {
						m, err := img.GetPartialMacho()
						if err != nil {
							return fmt.Errorf("failed to create partial MachO for image %s: %v", img.Name, err)
						}
						srcVer := "No SourceVersion"
						if m.SourceVersion() != nil {
							srcVer = m.SourceVersion().Version.String()
						}
						if viper.GetBool("verbose") {
							fmt.Fprintf(w, "%4d: %#x\t%s\t(%s)\t%s\n", idx+1, img.Info.Address, m.UUID(), srcVer, img.Name)
						} else {
							fmt.Fprintf(w, "%4d: (%s)\t%s\n", idx+1, srcVer, img.Name)
						}
						m.Close()
					}
				}
				w.Flush()
			}
		}

		if showClosures {
			fmt.Println("Prog Closure Offsets")
			fmt.Println("====================")
			var pclosureAddr uint64
			if f.Headers[f.UUID].ProgClosuresTrieAddr != 0 {
				pclosureAddr = f.Headers[f.UUID].ProgClosuresAddr
			} else {
				pclosureAddr = f.Headers[f.UUID].ProgramsPblSetPoolAddr
			}
			pcs, err := f.GetProgClosuresOffsets()
			if err != nil {
				return err
			}
			for _, pc := range pcs {
				fmt.Printf("%#x\t%s\n", pclosureAddr+pc.Offset, string(pc.Data))
			}
		}

		if showDlopenOthers {
			fmt.Println("dlopen(s) Image/Bundle IDs")
			fmt.Println("==========================")
			oo, err := f.GetDlopenOtherImages()
			if err != nil {
				return err
			}
			for _, o := range oo {
				fmt.Printf("%4d: %s\n", o.Offset, string(o.Data))
			}
		}

		return nil
	},
}
