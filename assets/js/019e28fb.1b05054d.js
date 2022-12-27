"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3526],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),y=r,h=c["".concat(s,".").concat(y)]||c[y]||m[y]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},4690:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={description:"How to extract the files you need from OTAs.",hide_table_of_contents:!0},i="Parse OTAs",l={unversionedId:"guides/ota",id:"guides/ota",title:"Parse OTAs",description:"How to extract the files you need from OTAs.",source:"@site/docs/guides/ota.md",sourceDirName:"guides",slug:"/guides/ota",permalink:"/ipsw/docs/guides/ota",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/guides/ota.md",tags:[],version:"current",frontMatter:{description:"How to extract the files you need from OTAs.",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Parse dyld_shared_cache",permalink:"/ipsw/docs/guides/dyld"},next:{title:"Lookup DSC Symbols",permalink:"/ipsw/docs/guides/dump_dsc_syms"}},s={},p=[{value:"Download the <em>latest</em> beta OTA",id:"download-the-latest-beta-ota",level:4},{value:"Show OTA Info",id:"show-ota-info",level:4},{value:"List files in OTA",id:"list-files-in-ota",level:4},{value:"Extract file(s) from OTA payloads that match a regex pattern",id:"extract-files-from-ota-payloads-that-match-a-regex-pattern",level:4},{value:"Extract file(s) from OTA RIDIFF10 cryptex volumes",id:"extract-files-from-ota-ridiff10-cryptex-volumes",level:4},{value:"How to apply a RSR OTA patch",id:"how-to-apply-a-rsr-ota-patch",level:4}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"parse-otas"},"Parse OTAs"),(0,r.kt)("h4",{id:"download-the-latest-beta-ota"},"Download the ",(0,r.kt)("em",{parentName:"h4"},"latest")," beta OTA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw download ota --platform ios --device iPhone15,2 --beta\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If running on macOS you can also remotely extract the ",(0,r.kt)("inlineCode",{parentName:"p"},"dyld_shared_cache")," from the \ud83c\udd95 RIDIFF10 cryptex volume OTAs like so"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw download ota --platform ios --device iPhone15,2 --beta --dyld\n"))),(0,r.kt)("p",null,"To download the latest RSR (Rapid Security Release) OTA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\u276f ipsw download ota --platform ios --device iPhone15,2 --build 20C5049e --beta --rsr \n   \u2022 Getting iOS 16.2 OTA      build=20C7750490e device=iPhone15,2 model=D73AP type="iOS162BetaRSR" \n        92.97 MiB / 92.97 MiB [==========================================================| \u2705  ] 58.85 MiB/s\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--build")," flag is required for RSR OTAs")),(0,r.kt)("h4",{id:"show-ota-info"},"Show OTA Info"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw ota info iOS16.2_OTAs/iPhone15,2_1418867a3b673659e7bcd30c3823ff997b4ba990.zip\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"[OTA Info]\n==========\nVersion        = 16.2 \nBuildVersion   = 20C5058d\nOS Type        = Beta\nFileSystem     = 098-19014-027.dmg (Type: APFS)\n\nDevices\n-------\n\niPhone 14 Pro\n > iPhone15,2_D73AP_20C5058d\n   - TimeStamp: 14 Nov 2022 22:15:41 MST\n   - KernelCache: kernelcache.release.iphone15\n   - CPU: A16 Bionic (ARMv8.6-A), ID: t8120\n   - BootLoaders\n       * iBEC.d73.RELEASE.im4p\n       * iBoot.d73.RELEASE.im4p\n       * iBSS.d73.RELEASE.im4p\n       * LLB.d73.RELEASE.im4p\n       * sep-firmware.d73.RELEASE.im4p\n")),(0,r.kt)("h4",{id:"list-files-in-ota"},"List files in OTA"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw ota ls OTA.zip | head\n   \u2022 Listing files in OTA zip...\n[ OTA zip files ] --------------------------------------------------\n-rw-r--r-- 2022-11-28T05:58:49-07:00 3.9 kB Info.plist\n-rw-r--r-- 2022-11-28T05:41:25-07:00 29 MB  post.bom\n-rw-r--r-- 2022-11-28T05:41:25-07:00 35 kB  pre.bom\n-rw-r--r-- 2022-11-28T05:37:39-07:00 171 kB boot/BuildManifest.plist\n-r--r--r-- 2022-11-28T02:54:40-07:00 1.0 kB boot/Restore.plist\n-r--r--r-- 2022-11-28T00:43:23-07:00 386 B  boot/RestoreVersion.plist\n-r--r--r-- 2022-11-28T00:43:03-07:00 539 B  boot/SystemVersion.plist\n-rwxr--r-- 2022-11-18T01:59:39-07:00 20 MB  boot/kernelcache.release.iphone15\n-rw-r--r-- 2022-11-28T02:54:39-07:00 229 B  boot/Firmware/098-18456-028.dmg.root_hash\n")),(0,r.kt)("p",null,"See if ",(0,r.kt)("inlineCode",{parentName:"p"},"dyld")," is in the OTA files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw ota ls iPhone15,2_1418867a3b673659e7bcd30c3823ff997b4ba990.zip | grep dyld\n   \u2022 Listing files in OTA zip...\n   \u2022 Listing files in OTA payload...\n   \u2022 (OTA might not actually contain all these files if it is a partial update file)\n-rwxr-xr-x 2022-11-28T00:43:03-07:00 926 kB usr/lib/dyld\n")),(0,r.kt)("h4",{id:"extract-files-from-ota-payloads-that-match-a-regex-pattern"},"Extract file(s) from OTA payloads that match a regex pattern"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw ota extract OTA.zip '^System/Library/.*/dyld_shared_cache.*$'\n   \u2022 Extracting ^System/Library/.*/dyld_shared_cache.*$...\n      \u2022 Extracting -rwxr-xr-x   1.5 GB  /System/Library/Caches/com.apple.dyld/dyld_shared_cache_arm64e to iPhone14,2_D63AP_19C5026i/dyld_shared_cache_arm64e\n      \u2022 Extracting -rwxr-xr-x   787 MB  /System/Library/Caches/com.apple.dyld/dyld_shared_cache_arm64e.1 to iPhone14,2_D63AP_19C5026i/dyld_shared_cache_arm64e.1\n      \u2022 Extracting -rwxr-xr-x   480 MB  /System/Library/Caches/com.apple.dyld/dyld_shared_cache_arm64e.symbols to iPhone14,2_D63AP_19C5026i/dyld_shared_cache_arm64e.symbols\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\ud83c\udd95 iOS 16.x/macOS 13.x OTAs now contain a RIDIFF10 cryptex volumes that contain the ",(0,r.kt)("inlineCode",{parentName:"p"},"dyld_shared_cache")," files")),(0,r.kt)("h4",{id:"extract-files-from-ota-ridiff10-cryptex-volumes"},"Extract file(s) from OTA RIDIFF10 cryptex volumes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw ota patch iPhone15,2_1418867a3b673659e7bcd30c3823ff997b4ba990.zip --output /tmp/PATCHES\n   \u2022 Patching cryptex-app to /tmp/PATCHES/20C5058d__iPhone15,2/AppOS/098-19380-032.dmg\n   \u2022 Patching cryptex-system-arm64e to /tmp/PATCHES/20C5058d__iPhone15,2/SystemOS/098-18456-028.dmg\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f tree /tmp/PATCHES/20C5058d__iPhone15,2/\n/tmp/PATCHES/20C5058d__iPhone15,2/\n\u251c\u2500\u2500 AppOS\n\u2502   \u2514\u2500\u2500 098-19380-032.dmg\n\u2514\u2500\u2500 SystemOS\n    \u2514\u2500\u2500 098-18456-028.dmg\n\n3 directories, 2 files\n")),(0,r.kt)("p",null,"To extract the ",(0,r.kt)("inlineCode",{parentName:"p"},"dyld_shared_cache")," files from the cryptex volumes, you can now mount the volume and then copy the files out"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f open /tmp/PATCHES/20C5058d__iPhone15,2/SystemOS/098-18456-028.dmg # mount the volume\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\u276f find /Volumes/SydneyCSeed20C5058d.D73DeveloperSystemCryptex/ -name "dyld_shared_cache*" | head\n/Volumes/SydneyCSeed20C5058d.D73DeveloperSystemCryptex//System/DriverKit/System/Library/dyld/dyld_shared_cache_arm64e.symbols\n/Volumes/SydneyCSeed20C5058d.D73DeveloperSystemCryptex//System/DriverKit/System/Library/dyld/dyld_shared_cache_arm64e\n/Volumes/SydneyCSeed20C5058d.D73DeveloperSystemCryptex//System/Library/Caches/com.apple.dyld/dyld_shared_cache_arm64e.33\n/Volumes/SydneyCSeed20C5058d.D73DeveloperSystemCryptex//System/Library/Caches/com.apple.dyld/dyld_shared_cache_arm64e.34\n/Volumes/SydneyCSeed20C5058d.D73DeveloperSystemCryptex//System/Library/Caches/com.apple.dyld/dyld_shared_cache_arm64e.02\n/Volumes/SydneyCSeed20C5058d.D73DeveloperSystemCryptex//System/Library/Caches/com.apple.dyld/dyld_shared_cache_arm64e.05\n/Volumes/SydneyCSeed20C5058d.D73DeveloperSystemCryptex//System/Library/Caches/com.apple.dyld/dyld_shared_cache_arm64e.04\n/Volumes/SydneyCSeed20C5058d.D73DeveloperSystemCryptex//System/Library/Caches/com.apple.dyld/dyld_shared_cache_arm64e.03\n/Volumes/SydneyCSeed20C5058d.D73DeveloperSystemCryptex//System/Library/Caches/com.apple.dyld/dyld_shared_cache_arm64e.35\n/Volumes/SydneyCSeed20C5058d.D73DeveloperSystemCryptex//System/Library/Caches/com.apple.dyld/dyld_shared_cache_arm64e.32\n')),(0,r.kt)("h4",{id:"how-to-apply-a-rsr-ota-patch"},"How to apply a RSR OTA patch"),(0,r.kt)("p",null,'You must first download and "patch" the base OTA file'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw download ota --platform ios --device iPhone15,2 --beta\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw ota patch iPhone15,2_17280b5c6122ee9c11e60081a2610e9766e8b892.zip --output /tmp/PATCHES\n   \u2022 Patching cryptex-app to /tmp/PATCHES/20C5049e__iPhone15,2/AppOS/098-19380-026.dmg\n   \u2022 Patching cryptex-system-arm64e to /tmp/PATCHES/20C5049e__iPhone15,2/SystemOS/098-18456-023.dmg\n")),(0,r.kt)("p",null,"Now download the corresponding RSR OTA patch that belongs to the base OTA file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw download ota --platform ios --device iPhone15,2 --build 20D5024e --beta --rsr \n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To get the ",(0,r.kt)("inlineCode",{parentName:"p"},"--build")," value, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"ipsw download ota --show-latest-build")," like so"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\u276f ipsw download ota --platform ios --device iPhone15,2 --show-latest-build --beta\n"20D5024e"\n'))),(0,r.kt)("p",null,"First patch the base OTA file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw ota patch OTA_BASE.zip --output /tmp/PATCHES\n")),(0,r.kt)("p",null,"Now apply the patch to the base OTA file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f ipsw ota patch --input /tmp/PATCHES/20C5049e__iPhone15,2 --output /tmp/PATCHES/ iPhone15,2_f3e5bd99446db9c96e89f740560fdb4dd4e3a503.zip \n   \u2022 Patching cryptex-app to /tmp/PATCHES/20C7750490e__iPhone15,2/AppOS/098-50146-002.dmg\n   \u2022 Patching cryptex-system-arm64e to /tmp/PATCHES/20C7750490e__iPhone15,2/SystemOS/098-50080-002.dmg\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f tree /tmp/PATCHES/20C7750490e__iPhone15,2/\n/tmp/PATCHES/20C7750490e__iPhone15,2/\n\u251c\u2500\u2500 AppOS\n\u2502   \u2514\u2500\u2500 098-50146-002.dmg\n\u2514\u2500\u2500 SystemOS\n    \u2514\u2500\u2500 098-50080-002.dmg\n\n3 directories, 2 files\n")),(0,r.kt)("p",null,"Now you have the RSR patched files ready to start diffing \ud83d\ude0f \ud83c\udf89"),(0,r.kt)("admonition",{title:"NOTE",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"For now the ",(0,r.kt)("inlineCode",{parentName:"p"},"ipsw ota patch")," command will only work on ",(0,r.kt)("strong",{parentName:"p"},"macOS Ventura")," as it calls into a private API to apply the patch.  We plan on adding cross-platform support in the future.")))}c.isMDXComponent=!0}}]);