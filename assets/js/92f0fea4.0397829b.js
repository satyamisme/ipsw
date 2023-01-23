"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8294],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>f});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=t.createContext({}),c=function(e){var r=t.useContext(a),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(a.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(a,".").concat(m)]||u[m]||d[m]||o;return n?t.createElement(f,l(l({ref:r},p),{},{components:n})):t.createElement(f,l({ref:r},p))}));function f(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s[u]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3876:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=n(7462),i=(n(7294),n(3905));const o={id:"version",title:"version",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"version",description:"Dump kernelcache version"},l=void 0,s={unversionedId:"cli/ipsw/kernel/version",id:"cli/ipsw/kernel/version",title:"version",description:"Dump kernelcache version",source:"@site/docs/cli/ipsw/kernel/version.md",sourceDirName:"cli/ipsw/kernel",slug:"/cli/ipsw/kernel/version",permalink:"/ipsw/docs/cli/ipsw/kernel/version",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/kernel/version.md",tags:[],version:"current",frontMatter:{id:"version",title:"version",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"version",description:"Dump kernelcache version"},sidebar:"cli",previous:{title:"syscall",permalink:"/ipsw/docs/cli/ipsw/kernel/syscall"},next:{title:"macho",permalink:"/ipsw/docs/cli/ipsw/macho/"}},a={},c=[{value:"ipsw kernel version",id:"ipsw-kernel-version",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:c};function u(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ipsw-kernel-version"},"ipsw kernel version"),(0,i.kt)("p",null,"Dump kernelcache version"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ipsw kernel version [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help   help for version\n  -j, --json   Output as JSON\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw/config.yaml)\n  -V, --verbose         verbose output\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/kernel"},"ipsw kernel"),"\t - Parse kernelcache")))}u.isMDXComponent=!0}}]);