"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=i.createContext({}),l=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(a.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,b=d["".concat(a,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(b,p(p({ref:t},c),{},{components:n})):i.createElement(b,p({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=m;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[d]="string"==typeof e?e:r,p[1]=s;for(var l=2;l<o;l++)p[l]=n[l];return i.createElement.apply(null,p)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const o={id:"springb",title:"springb",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"springb",description:"SpringBoard commands"},p=void 0,s={unversionedId:"cli/ipsw/idev/springb/springb",id:"cli/ipsw/idev/springb/springb",title:"springb",description:"SpringBoard commands",source:"@site/docs/cli/ipsw/idev/springb/springb.md",sourceDirName:"cli/ipsw/idev/springb",slug:"/cli/ipsw/idev/springb/",permalink:"/ipsw/docs/cli/ipsw/idev/springb/",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/idev/springb/springb.md",tags:[],version:"current",frontMatter:{id:"springb",title:"springb",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"springb",description:"SpringBoard commands"},sidebar:"cli",previous:{title:"screen",permalink:"/ipsw/docs/cli/ipsw/idev/screen"},next:{title:"icon",permalink:"/ipsw/docs/cli/ipsw/idev/springb/icon"}},a={},l=[{value:"ipsw idev springb",id:"ipsw-idev-springb",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ipsw-idev-springb"},"ipsw idev springb"),(0,r.kt)("p",null,"SpringBoard commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ipsw idev springb [flags]\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -h, --help   help for springb\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw/config.yaml)\n  -u, --udid string     Device UniqueDeviceID to connect to\n  -V, --verbose         verbose output\n")),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev"},"ipsw idev"),"\t - USB connected device commands"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/springb/icon"},"ipsw idev springb icon"),"\t - Dump application icon as PNG"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/springb/orient"},"ipsw idev springb orient"),"\t - Get screen orientation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/springb/wallpaper"},"ipsw idev springb wallpaper"),"\t - Dump wallpaper as PNG")))}d.isMDXComponent=!0}}]);