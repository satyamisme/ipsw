"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[152],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=i(a),d=n,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return a?r.createElement(k,s(s({ref:t},c),{},{components:a})):r.createElement(k,s({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var i=2;i<l;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3441:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>w,default:()=>_,frontMatter:()=>h,metadata:()=>f,toc:()=>v});var r=a(7462),n=a(7294),l=a(3905),s=a(6010),o=a(2389),p=a(7392),i=a(7094),c=a(2466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){const{lazy:t,block:a,defaultValue:l,values:o,groupId:d,className:k}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=o??b.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),h=(0,p.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===l?l:l??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==w&&!g.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:N}=(0,i.U)(),[v,y]=(0,n.useState)(w),_=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=d){const e=f[d];null!=e&&e!==v&&g.some((t=>t.value===e))&&y(e)}const O=e=>{const t=e.currentTarget,a=_.indexOf(t),r=g[a].value;r!==v&&(x(t),y(r),null!=d&&N(d,String(r)))},T=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const a=_.indexOf(e.currentTarget)+1;t=_[a]??_[0];break}case"ArrowLeft":{const a=_.indexOf(e.currentTarget)-1;t=_[a]??_[_.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},k)},g.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>_.push(e),onKeyDown:T,onClick:O},l,{className:(0,s.Z)("tabs__item",m,l?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,n.cloneElement)(b.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function k(e){const t=(0,o.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}const b="tabItem_Ymn6";function g(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(b,r),hidden:a},t)}const h={description:"How to install ipsw locally."},w="Installation",f={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"How to install ipsw locally.",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/ipsw/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/getting-started/installation.md",tags:[],version:"current",frontMatter:{description:"How to install ipsw locally."},sidebar:"docs",previous:{title:"Getting Started",permalink:"/ipsw/docs/category/getting-started"},next:{title:"Building",permalink:"/ipsw/docs/getting-started/building"}},N={},v=[],y={toc:v};function _(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"How to install ipsw locally, and start a parsing IPSWs in no time.")),(0,l.kt)(k,{mdxType:"Tabs"},(0,l.kt)(g,{value:"macOS",mdxType:"TabItem"},(0,l.kt)("p",null,"Via ",(0,l.kt)("a",{parentName:"p",href:"https://brew.sh"},"homebrew")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install blacktop/tap/ipsw\n")),(0,l.kt)("p",null,"Via binary from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/blacktop/ipsw/releases"},"releases")," page"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/blacktop/ipsw/releases/download/v3.1.199/ipsw_3.1.199_macOS_universal.tar.gz\ntar xzf ipsw_3.1.199_macOS_universal.tar.gz\n")),(0,l.kt)("p",null,"Want to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"ipsw dyld emu")," ",(0,l.kt)("em",{parentName:"p"},"(w/ ",(0,l.kt)("a",{parentName:"em",href:"https://www.unicorn-engine.org"},"unicorn")," emulator)")," or the ",(0,l.kt)("inlineCode",{parentName:"p"},"ipsw idev")," cmds that require ",(0,l.kt)("inlineCode",{parentName:"p"},"libusb")," ? ",(0,l.kt)("em",{parentName:"p"},"(grab the ",(0,l.kt)("strong",{parentName:"em"},"extras")," version from the ",(0,l.kt)("a",{parentName:"em",href:"https://github.com/blacktop/ipsw/releases"},"releases")," page)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/blacktop/ipsw/releases/download/v3.1.220/ipsw_3.1.221_macOS_arm64_extras.tar.gz\ntar xzf ipsw_3.1.221_macOS_arm64_extras.tar.gz\n")),(0,l.kt)("p",null,"Want to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"ipsw frida")," cmd to trace ObjC methods ? ",(0,l.kt)("em",{parentName:"p"},"(grab the ",(0,l.kt)("strong",{parentName:"em"},"frida")," version from the ",(0,l.kt)("a",{parentName:"em",href:"https://github.com/blacktop/ipsw/releases"},"releases")," page)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/blacktop/ipsw/releases/download/v3.1.221/ipsw_3.1.221_macOS_arm64_frida.tar.gz\ntar xzf ipsw_3.1.221_macOS_arm64_frida.tar.gz\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("strong",{parentName:"p"},"extras")," and ",(0,l.kt)("strong",{parentName:"p"},"frida")," versions or ",(0,l.kt)("inlineCode",{parentName:"p"},"ipsw")," only support macOS for now. ",(0,l.kt)("em",{parentName:"p"},"(Please let the author know if you want them supported on your platform)")))),(0,l.kt)(g,{value:"Linux",mdxType:"TabItem"},(0,l.kt)("p",null,"Via ",(0,l.kt)("a",{parentName:"p",href:"https://snapcraft.io/ipsw"},"snapcraft")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo snap install ipsw\n")),(0,l.kt)("p",null,"Via ",(0,l.kt)("inlineCode",{parentName:"p"},"deb"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"rpm"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"apk")," debian packages in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/blacktop/ipsw/releases"},"releases")," page"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/blacktop/ipsw/releases/download/v3.1.199/ipsw_3.1.199_linux_x86_64.deb\nsudo dpkg -i ipsw_3.1.199_linux_x86_64.deb\n")),(0,l.kt)("p",null,"Install ",(0,l.kt)("a",{parentName:"p",href:"https://aur.archlinux.org/packages/ipsw-bin/"},"archlinux")," package from AUR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pacman -U ipsw-bin\n")),(0,l.kt)("p",null,"Via binary from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/blacktop/ipsw/releases"},"releases")," page"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/blacktop/ipsw/releases/download/v3.1.199/ipsw_3.1.199_linux_x86_64.tar.gz\ntar xzf ipsw_3.1.199_linux_x86_64.tar.gz\n"))),(0,l.kt)(g,{value:"Docker",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/blacktop/ipsw/"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/stars/blacktop/ipsw.svg",alt:"Docker Stars"}))," ",(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/blacktop/ipsw/"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/pulls/blacktop/ipsw.svg",alt:"Docker Pulls"}))," ",(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/blacktop/ipsw/"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/docker%20image-114MB-blue.svg",alt:"Docker Image"}))),(0,l.kt)("p",null,"Download docker image"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker pull blacktop/ipsw\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"NOTE:")," the docker image also includes ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/sgan81/apfs-fuse"},"apfs-fuse")," which allows you to extract ",(0,l.kt)("inlineCode",{parentName:"p"},"dyld_shared_caches")," from the APFS dmgs in the ipsw(s) pre ",(0,l.kt)("strong",{parentName:"p"},"iOS16.x"))),(0,l.kt)("p",null,"Create ",(0,l.kt)("inlineCode",{parentName:"p"},"alias")," to use like a binary"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ alias ipsw='docker run -it --rm -v $(pwd):/data blacktop/ipsw'\n"))),(0,l.kt)(g,{value:"Windows",mdxType:"TabItem"},(0,l.kt)("p",null,"Via ",(0,l.kt)("a",{parentName:"p",href:"https://scoop.sh"},"scoop")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scoop bucket add blacktop https://github.com/blacktop/scoop-bucket.git \nscoop install blacktop/ipsw\n")),(0,l.kt)("p",null,"Via binary from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/blacktop/ipsw/releases"},"releases")," page"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/blacktop/ipsw/releases/download/v3.1.199/ipsw_3.1.199_windows_x86_64.tar.gz\ntar xzf ipsw_3.1.199_windows_x86_64.tar.gz\n")))))}_.isMDXComponent=!0}}]);