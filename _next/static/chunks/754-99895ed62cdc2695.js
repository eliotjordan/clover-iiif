"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[754],{4245:function(e,t,i){i.d(t,{Z:function(){return et}});var s=i(1527),r=i(959);let o={isLoaded:!1,options:{credentials:"omit"}},a=r.createContext(o),n=r.createContext(o);function l(e,t){if("updateIsLoaded"===t.type)return{...e,isLoaded:t.isLoaded};throw Error("Unhandled action type: ".concat(t.type))}let c=e=>{let{initialState:t=o,children:i}=e,[c,d]=r.useReducer(l,t);return(0,s.jsx)(a.Provider,{value:c,children:(0,s.jsx)(n.Provider,{value:d,children:i})})};function d(){let e=r.useContext(a);if(void 0===e)throw Error("useViewerState must be used within a ViewerProvider");return e}var p=i(1524),x=i(9710);let u=(0,x.zo)("div",{display:"flex",flexDirection:"column",alignItems:"center"}),m=(0,x.zo)("p",{fontWeight:"bold"}),h=(0,x.zo)("span",{});var g=e=>{let{error:t}=e,{message:i}=t;return(0,s.jsxs)(u,{role:"alert",children:[(0,s.jsx)(m,{"data-testid":"headline",children:"Something went wrong"}),i&&(0,s.jsxs)(h,{children:["Error message: ".concat(i)," "]})]})};let f=(0,x.zo)("div",{display:"flex",background:"none",border:"none",width:"2rem !important",height:"2rem !important",padding:"0",margin:"0",borderRadius:"2rem",backgroundColor:"$accent",color:"$secondary",cursor:"pointer",boxSizing:"content-box !important",transition:"$all",justifyContent:"center",alignItems:"center",svg:{height:"60%",width:"60%",fill:"$secondary",stroke:"$secondary",opacity:"1",filter:"drop-shadow(5px 5px 5px #000D)",transition:"$all"}}),v=(0,x.zo)("button",{zIndex:"1",border:"none",cursor:"pointer",background:"transparent",marginLeft:"$2",padding:"0","&:disabled":{["> ".concat(f)]:{backgroundColor:"$secondaryAlt",boxShadow:"none",svg:{fill:"$secondaryMuted",stroke:"$secondaryMuted",filter:"unset"}}},"&:hover:enabled":{["> ".concat(f)]:{backgroundColor:"$accentAlt",boxShadow:"3px 3px 11px #0003","&:disabled":{boxShadow:"unset"}}}}),b=(0,x.zo)("div",{display:"flex",flexDirection:"column"}),j=(0,x.zo)("div",{display:"flex",flexDirection:"row",alignItems:"center",paddingLeft:"$5",paddingRight:"$4","@xs":{width:"100%",justifyContent:"center",padding:"$4 $1 0 0"}}),w=(0,x.zo)("div",{display:"flex",flexDirection:"row",justifyContent:"space-between",paddingBottom:"$4",margin:"0",lineHeight:"1.4em",alignItems:"flex-end","@xs":{flexDirection:"column"},".clover-slider-header-homepage":{color:"$accent",textDecoration:"none"},".clover-slider-header-label":{fontSize:"1.25rem",fontWeight:"400"},".clover-slider-header-summary":{fontSize:"$4",marginTop:"$2"}});var k=i(9541);let y=()=>(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[(0,s.jsx)("title",{children:"Next"}),(0,s.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"45",d:"M268 112l144 144-144 144M392 256H100"})]}),z=()=>(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[(0,s.jsx)("title",{children:"Previous"}),(0,s.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"45",d:"M244 400L100 256l144-144M120 256h292"})]}),C=(0,x.zo)("span",{display:"flex",background:"none",height:"2rem !important",padding:"0 $3",margin:"0 0 0 $3",borderRadius:"2rem",backgroundColor:"$accent",color:"$secondary",cursor:"pointer",boxSizing:"content-box !important",transition:"$all",justifyContent:"center",alignItems:"center",fontSize:"0.8333rem",lineBreak:"none",whiteSpace:"nowrap","&:hover":{backgroundColor:"$accentAlt",boxShadow:"3px 3px 11px #0003","&:disabled":{boxShadow:"unset"}}});var I=()=>(0,s.jsx)(C,{children:"View All"}),$=e=>{let{homepage:t,instance:i,label:o,summary:a}=e,[n,l]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{t&&(null==t?void 0:t.length)>0&&l(!0)},[t]),(0,s.jsxs)(w,{"data-testid":"slider-header",children:[(0,s.jsxs)(b,{children:[n?(0,s.jsx)(k.bw,{homepage:t,className:"clover-slider-header-homepage",children:(0,s.jsx)(k.__,{label:o,as:"span",className:"clover-slider-header-label"})}):(0,s.jsx)(k.__,{label:o,as:"span",className:"clover-slider-header-label"}),a&&(0,s.jsx)(k.ER,{summary:a,as:"span",className:"clover-slider-header-summary"})]}),(0,s.jsxs)(j,{children:[(0,s.jsx)(v,{className:"clover-slider-previous-".concat(i),"aria-label":"previous",children:(0,s.jsx)(f,{children:(0,s.jsx)(z,{})})}),(0,s.jsx)(v,{className:"clover-slider-next-".concat(i),"aria-label":"next",children:(0,s.jsx)(f,{children:(0,s.jsx)(y,{})})}),n&&(0,s.jsx)(k.bw,{homepage:t,className:"clover-slider-header-view-all",children:(0,s.jsx)(I,{})})]})]})},S=i(6887),M=i(5675);let N=(0,x.zo)("a",{textDecoration:"none"}),F=(0,x.zo)("div",{position:"relative",zIndex:"0",borderRadius:"3px"});var P=i(4569);let R=(0,x.zo)("div",{position:"absolute",width:"100%",backgroundColor:"green"}),B=(0,x.zo)("figure",{display:"flex",flexDirection:"column",margin:"0 0 $2",flexGrow:"0",flexShrink:"0",borderRadius:"3px",transition:"$all",img:{position:"absolute",display:"flex",flexDirection:"column",objectFit:"cover",zIndex:"0",width:"100%",height:"100%",color:"transparent"},video:{position:"absolute",display:"flex",flexDirection:"column",objectFit:"cover",zIndex:"1",width:"100%",height:"100%",color:"transparent",opacity:"0",transition:"$load",borderRadius:"3px"},figcaption:{display:"flex",flexDirection:"column",padding:"$2 0",transition:"$all"},variants:{isFocused:{true:{video:{opacity:"1"},figcaption:{color:"$accent"}}}}}),E=(0,x.zo)("span",{display:"flex",position:"relative",width:"100%",height:"100%",overflow:"hidden",borderRadius:"3px",boxShadow:"none",transition:"$all"}),L=(0,x.zo)(k.__,{fontSize:"$3",fontWeight:"700"}),V=(0,x.zo)(k.ER,{fontSize:"$2",marginTop:"$1"}),Z=(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[(0,s.jsx)("title",{children:"Restricted Item"}),(0,s.jsx)("path",{d:"M368 192h-16v-80a96 96 0 10-192 0v80h-16a64.07 64.07 0 00-64 64v176a64.07 64.07 0 0064 64h224a64.07 64.07 0 0064-64V256a64.07 64.07 0 00-64-64zm-48 0H192v-80a64 64 0 11128 0z"})]}),D=(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[(0,s.jsx)("title",{children:"Unknown Status"}),(0,s.jsx)("path",{d:"M160 164s1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 298.36 248 324",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"40"}),(0,s.jsx)("circle",{cx:"248",cy:"399.99",r:"32"})]}),A=(0,x.zo)("div",{width:"2rem",height:"2rem",backgroundColor:"#fff",borderRadius:"50%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"absolute",zIndex:"1",bottom:"1rem",right:"1rem",margin:"-1rem 0 0 -1rem",boxShadow:"5px 5px 13px #0003",svg:{height:"1rem",width:"1rem",color:"$accent",fill:"$accent"}});var _=e=>{let{status:t}=e,[i,o]=(0,r.useState)((0,s.jsx)(s.Fragment,{}));return(0,r.useEffect)(()=>{403===t?o(Z):o(D)},[t]),(0,s.jsx)(A,{"data-testid":"status-icon",children:i})},T=e=>{let{isFocused:t,label:i,status:o,summary:a,thumbnail:n}=e,l=(0,r.useRef)(null);return(0,s.jsxs)(B,{isFocused:t,children:[(0,s.jsxs)(P.f,{ratio:1,children:[(0,s.jsx)(R,{ref:l}),(0,s.jsxs)(E,{children:[200!==o&&(0,s.jsx)(_,{status:o}),(0,s.jsx)(k.pl,{altAsLabel:i,thumbnail:n,"data-testid":"figure-thumbnail"})]})]}),(0,s.jsxs)("figcaption",{children:[(0,s.jsx)(L,{label:i}),a&&(0,s.jsx)(V,{summary:a})]})]})};let G=(0,x.zo)(P.f,{backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%",filter:"blur(3em)",opacity:"0.7"}),W=(0,x.zo)("div",{position:"absolute",width:"100%",overflow:"hidden",backgroundColor:"#716C6B"});var H=e=>{let{backgroundImage:t}=e;return(0,s.jsx)(W,{"data-testid":"slider-item-placeholder",children:(0,s.jsx)(G,{ratio:1,css:{backgroundImage:"url(".concat(t,")")}})})},U=i(2785),O=i(178);async function q(e,t){return e?fetch(null==e?void 0:e.id).then(e=>e.json()).then(O.upgrade).then(e=>{if((null==e?void 0:e.type)==="Manifest"){let i=(0,U.zH)(null==e?void 0:e.items[0]);if(i)return fetch(i,{method:"GET",headers:{accept:"image/*"},credentials:t}).then(e=>e.status).catch(e=>(console.log("error",e),e.status))}}).catch(e=>(console.log("error",e),e.status)):Promise.resolve(200)}var J=e=>{let{handleItemInteraction:t,index:i,item:o}=e,a=d(),{options:n}=a,{credentials:l}=n,[c,p]=(0,r.useState)(),[x,u]=(0,r.useState)(!1),[m,h]=(0,r.useState)(),[g,f]=(0,r.useState)(200),[v,b]=(0,r.useState)([]);(0,r.useEffect)(()=>{var e,t;if((null==o?void 0:o.thumbnail)&&(null==o?void 0:null===(e=o.thumbnail)||void 0===e?void 0:e.length)>0){q(o,l).then(e=>{f(e)});let{thumbnail:e}=o;h(e[0].id),b(e)}(null==o?void 0:o.homepage)&&(null===(t=o.homepage)||void 0===t?void 0:t.length)>0&&p(o.homepage[0].id)},[]);let j=()=>u(!0),w=()=>u(!1);return(0,s.jsx)(F,{"data-testid":"slider-item",children:(0,s.jsxs)(N,{"data-testid":"slider-item-anchor",href:c,onClick:e=>{t&&(e.preventDefault(),t(o))},tabIndex:0,onFocus:j,onBlur:w,onMouseEnter:j,onMouseLeave:w,children:[m&&(0,s.jsx)(H,{backgroundImage:""}),(0,s.jsx)(T,{"data-testid":"slider-item-figure",index:i,isFocused:x,label:o.label,summary:o.summary,status:g,thumbnail:v},o.id)]})})};let K=(0,x.zo)("div",{"& .swiper-slide":{}}),Q={640:{slidesPerView:2,slidesPerGroup:2,spaceBetween:20},768:{slidesPerView:3,slidesPerGroup:3,spaceBetween:30},1024:{slidesPerView:4,slidesPerGroup:4,spaceBetween:40},1366:{slidesPerView:5,slidesPerGroup:5,spaceBetween:50},1920:{slidesPerView:6,slidesPerGroup:6,spaceBetween:60}};var X=e=>{let{breakpoints:t=Q,handleItemInteraction:i,instance:o,items:a}=e,n=(0,r.useRef)(null);return(0,s.jsx)(K,{ref:n,children:(0,s.jsx)(M.tq,{a11y:{prevSlideMessage:"previous item",nextSlideMessage:"next item"},spaceBetween:31,modules:[S.W_,S.s5],navigation:{nextEl:".clover-slider-next-".concat(o),prevEl:".clover-slider-previous-".concat(o)},slidesPerView:2,slidesPerGroup:2,breakpoints:t,children:a.map((e,t)=>(0,s.jsx)(M.o5,{"data-index":t,"data-type":null==e?void 0:e.type.toLowerCase(),children:(0,s.jsx)(J,{handleItemInteraction:i,index:t,item:e})},"".concat(e.id,"-").concat(t)))})})},Y=e=>{var t=0,i=null==e?void 0:e.length,s=0;if(i>0)for(;s<i;)t=(t<<5)-t+e.charCodeAt(s++)|0;return t};let ee=e=>{let{collectionId:t,iiifContent:i,onItemInteraction:o}=e,a=d(),{options:n}=a,[l,c]=(0,r.useState)(),x=i;if(t&&(x=t),(0,r.useEffect)(()=>{x&&fetch(x).then(e=>e.json()).then(O.upgrade).then(e=>c(e)).catch(e=>{console.error("The IIIF Collection ".concat(x," failed to load: ").concat(e))})},[x]),(null==l?void 0:l.items.length)===0)return console.log("The IIIF Collection ".concat(x," does not contain items.")),(0,s.jsx)(s.Fragment,{});let u=Y(x);return l?(0,s.jsx)("div",{children:(0,s.jsxs)(p.SV,{FallbackComponent:g,children:[(0,s.jsx)($,{label:l.label,summary:l&&l.summary?l.summary:{none:[""]},homepage:l.homepage,instance:u}),(0,s.jsx)(X,{items:l.items,handleItemInteraction:o,instance:u,breakpoints:n.breakpoints})]})}):(0,s.jsx)(s.Fragment,{})};var et=e=>(0,s.jsx)(c,{initialState:{...o,options:{...e.options}},children:(0,s.jsx)(ee,{...e})})},2785:function(e,t,i){i.d(t,{AG:function(){return o},Er:function(){return r},zH:function(){return s}});let s=e=>{if(null==e?void 0:e.items){let t=null==e?void 0:e.items[0];if(null==t?void 0:t.items){let e=null==t?void 0:t.items[0].body;if(null==e?void 0:e.hasOwnProperty("id"))return e.id}}},r=e=>fetch("".concat(e.replace(/\/$/,""),"/info.json")).then(e=>e.json()).then(e=>e).catch(t=>{console.error("The IIIF tilesource ".concat(e.replace(/\/$/,""),"/info.json failed to load: ").concat(t))}),o=e=>{let t,i;return Array.isArray(e)&&(t=e[0])&&(i="@id"in t?t["@id"]:t.id),i}},9710:function(e,t,i){i.d(t,{BC:function(){return r},F4:function(){return n},zo:function(){return o}});var s=i(458);let r={xxs:"(max-width: 349px)",xs:"(max-width: 575px)",sm:"(max-width: 767px)",md:"(max-width: 991px)",lg:"(max-width: 90rem)",xl:"(min-width: calc(90rem + 1px))"},{styled:o,css:a,keyframes:n,createTheme:l}=(0,s.Th)({theme:{colors:{primary:"#1a1d1e",primaryMuted:"#26292b",primaryAlt:"#151718",accent:"hsl(".concat(209," 100% 45%)"),accentMuted:"hsl(".concat(209," 80% 61.8%)"),accentAlt:"hsl(".concat(209," 80% 38.2%)"),secondary:"#FFFFFF",secondaryMuted:"#e6e8eb",secondaryAlt:"#c1c8cd"},fontSizes:{1:"12px",2:"13px",3:"15px",4:"17px",5:"19px",6:"21px",7:"27px",8:"35px",9:"59px"},lineHeights:{1:"12px",2:"13px",3:"15px",4:"17px",5:"19px",6:"21px",7:"27px",8:"35px",9:"59px"},sizes:{1:"5px",2:"10px",3:"15px",4:"20px",5:"25px",6:"35px",7:"45px",8:"65px",9:"80px"},space:{1:"5px",2:"10px",3:"15px",4:"20px",5:"25px",6:"35px",7:"45px",8:"65px",9:"80px"},radii:{1:"4px",2:"6px",3:"8px",4:"12px",round:"50%",pill:"9999px"},transitions:{all:"all 300ms cubic-bezier(0.16, 1, 0.3, 1)"},zIndices:{1:"100",2:"200",3:"300",4:"400",max:"999"}},media:r})},4568:function(e,t,i){i.d(t,{Z:function(){return x}});var s=i(1527),r=i(977),o=i.n(r),a=i(959),n=i(1322),l=i(8452);let c="Clover IIIF",d="Showcase IIIF Manifests as interopable web content.",p={darkMode:!0,nextThemes:{defaultTheme:"system"},docsRepositoryBase:"https://github.com/samvera-labs/clover-iiif",footer:{text:"Extensible IIIF front-end toolkit and Manifest viewer. Accessible. Composable. Open Source."},useNextSeoProps(){let e=(0,n.ZR)(),t=e.frontMatter.title?"".concat(e.frontMatter.title," – ").concat(c):"".concat(c," – ").concat(d),i=e.frontMatter.description?e.frontMatter.description:d,{route:s}=(0,l.useRouter)(),r=(0,a.useMemo)(()=>new URL(s.endsWith("/")?s:"".concat(s,"/"),"https://samvera-labs.github.io/clover-iiif/").href,[s]);return{defaultTitle:"".concat(c," - ").concat(d),title:t,description:i,canonical:r,openGraph:{url:r,title:t,siteName:"".concat(c," - ").concat(d),images:[{url:"",type:"image/png",width:1200,height:675}]},twitter:{cardType:"summary_large_image"}}},logo:(0,s.jsx)(()=>(0,s.jsxs)("span",{className:"jsx-9d2954176cc7cae4",children:[(0,s.jsxs)("svg",{id:"clover-iiif-logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 45.11 8.15",fill:"none",className:"jsx-9d2954176cc7cae4",children:[(0,s.jsx)("path",{fill:"currentColor",d:"m5.66,6.02c-.21.11-.43.21-.65.3s-.51.13-.83.13c-.63,0-1.13-.18-1.48-.55-.36-.37-.53-.9-.53-1.61,0-.46.07-.85.22-1.17.15-.32.36-.57.65-.74.28-.17.63-.26,1.04-.26.31,0,.59.05.83.14.24.1.46.21.66.35.14-.09.26-.21.36-.37.1-.16.16-.33.16-.53,0-.25-.09-.47-.28-.66s-.45-.34-.79-.46c-.34-.11-.76-.17-1.25-.17-.69,0-1.32.15-1.89.45-.57.3-1.03.74-1.36,1.31-.34.57-.5,1.27-.5,2.11,0,.89.17,1.62.52,2.18.35.57.82.99,1.4,1.26.59.27,1.24.41,1.96.41.38,0,.7-.03.96-.1.26-.06.47-.13.61-.19.23-.1.4-.23.49-.38.1-.15.14-.32.14-.5,0-.21-.04-.39-.11-.55-.08-.16-.18-.29-.32-.4Z",className:"jsx-9d2954176cc7cae4"}),(0,s.jsx)("path",{fill:"currentColor",d:"m7.55,0c-.19,0-.37.01-.53.04s-.29.05-.38.07v6.96c0,.37.09.62.27.76.18.14.47.2.86.2.19,0,.37-.01.53-.04.16-.02.29-.05.38-.07V.96c0-.38-.09-.63-.26-.76-.18-.13-.46-.2-.86-.2Z",className:"jsx-9d2954176cc7cae4"}),(0,s.jsx)("path",{fill:"currentColor",d:"m13.93,2.3c-.47-.26-1.02-.38-1.65-.38s-1.17.13-1.64.38c-.47.25-.84.61-1.1,1.07-.26.46-.4,1.01-.4,1.64s.13,1.2.39,1.67c.26.46.63.82,1.1,1.07.47.25,1.02.37,1.66.37s1.19-.13,1.66-.38c.47-.25.83-.61,1.09-1.07.26-.46.39-1.02.39-1.66s-.13-1.17-.4-1.63c-.26-.46-.63-.82-1.1-1.08Zm-.87,3.83c-.18.26-.44.39-.78.39s-.6-.13-.78-.38c-.18-.26-.28-.63-.28-1.13s.09-.85.28-1.11c.19-.26.45-.39.77-.39s.59.13.77.4.28.63.28,1.1-.09.86-.28,1.12Z",className:"jsx-9d2954176cc7cae4"}),(0,s.jsx)("path",{fill:"currentColor",d:"m20.29,1.98c-.35,0-.67.08-.96.23-.14.69-.29,1.39-.46,2.12s-.33,1.38-.48,1.97h-.06c-.02-.11-.06-.25-.1-.42-.04-.17-.09-.36-.15-.57s-.12-.43-.18-.67l-.47-1.84c-.08-.32-.21-.54-.4-.65-.18-.12-.42-.17-.7-.17-.22,0-.43.04-.62.13s-.34.18-.45.29c.06.29.15.62.27,1.01.12.38.24.78.38,1.19.14.41.27.81.41,1.2.14.39.27.73.4,1.04.12.3.23.54.32.71.09.18.25.3.47.38.23.08.5.12.81.12.27,0,.52-.03.74-.09.22-.06.38-.13.49-.21.12-.22.26-.5.41-.85.15-.35.31-.73.46-1.15.16-.41.3-.82.43-1.21s.23-.75.31-1.06.12-.54.12-.7c0-.3-.1-.5-.29-.62s-.43-.18-.71-.18Z",className:"jsx-9d2954176cc7cae4"}),(0,s.jsx)("path",{fill:"currentColor",d:"m25.91,2.25c-.42-.22-.92-.33-1.49-.33-.38,0-.74.06-1.1.17-.36.12-.68.29-.97.53-.29.24-.52.55-.69.94-.17.38-.26.84-.26,1.37,0,.71.15,1.3.44,1.78.29.47.69.83,1.19,1.06.5.24,1.06.35,1.69.35.45,0,.84-.04,1.19-.12.34-.08.61-.21.81-.38.2-.17.29-.39.29-.65,0-.16-.04-.31-.13-.46-.09-.14-.2-.26-.32-.34-.18.1-.43.2-.73.29-.3.09-.62.13-.96.13s-.67-.07-.95-.22c-.23-.11-.37-.32-.47-.58l2.96-.44c.27-.04.48-.13.64-.28.15-.14.23-.35.23-.62,0-.5-.12-.93-.36-1.31-.24-.38-.57-.68-1-.9Zm-2.59,2.21c.04-.31.13-.56.31-.74.21-.21.48-.31.8-.31s.53.08.67.24c.14.16.22.32.24.48l-2.02.33Z",className:"jsx-9d2954176cc7cae4"}),(0,s.jsx)("path",{fill:"currentColor",d:"m30.59,1.93c-.4,0-.79.04-1.16.13-.38.09-.7.22-.98.38-.2.13-.36.28-.49.45-.12.17-.19.37-.19.61v3.56c0,.37.09.62.27.76.18.14.47.2.86.2.19,0,.37-.01.53-.04.16-.02.29-.05.38-.07V3.82c.17-.1.36-.17.59-.22.22-.05.44-.07.64-.07.14,0,.26,0,.37.01.11,0,.21.02.29.04.06-.09.1-.19.14-.32s.06-.26.06-.4c0-.62-.44-.92-1.31-.92Z",className:"jsx-9d2954176cc7cae4"}),(0,s.jsx)("path",{fill:"currentColor",d:"m33.91.56c-.12,0-.24.01-.35.03-.11.02-.2.04-.25.05v6.76c0,.22.06.37.17.46.11.09.29.14.53.14.12,0,.24,0,.35-.03.11-.02.19-.04.24-.07V1.16c0-.22-.05-.38-.16-.47-.11-.09-.28-.13-.52-.13Z",className:"jsx-9d2954176cc7cae4"}),(0,s.jsx)("path",{fill:"currentColor",d:"m36.24.56c-.12,0-.24.01-.35.03-.11.02-.2.04-.25.05v6.76c0,.22.06.37.17.46.11.09.29.14.53.14.12,0,.24,0,.35-.03.11-.02.19-.04.24-.07V1.16c0-.22-.05-.38-.16-.47-.11-.09-.28-.13-.52-.13Z",className:"jsx-9d2954176cc7cae4"}),(0,s.jsx)("path",{fill:"currentColor",d:"m38.57.56c-.12,0-.24.01-.35.03s-.2.04-.25.05v6.76c0,.22.06.37.17.46s.29.14.53.14c.12,0,.24,0,.35-.03.11-.02.19-.04.24-.07V1.16c0-.22-.05-.38-.16-.47s-.28-.13-.52-.13Z",className:"jsx-9d2954176cc7cae4"}),(0,s.jsx)("path",{fill:"currentColor",d:"m44.63,1.7c.15,0,.27-.05.35-.14.08-.1.13-.23.13-.41,0-.1-.02-.2-.05-.29-.03-.09-.06-.16-.1-.21h-3.98c-.21,0-.38.06-.5.19-.13.12-.19.29-.19.5v6.08c0,.21.06.36.17.45.12.09.29.14.53.14.12,0,.24,0,.35-.03.11-.02.19-.04.24-.05v-2.98h2.64c.15,0,.27-.05.35-.14.08-.1.12-.23.12-.41,0-.1-.01-.2-.04-.29-.03-.09-.06-.16-.09-.22h-2.98s-.01-.01-.01-.01V1.7h3.06Z",className:"jsx-9d2954176cc7cae4"})]}),(0,s.jsx)(o(),{id:"9d2954176cc7cae4",children:"svg.jsx-9d2954176cc7cae4{height:1rem}span.jsx-9d2954176cc7cae4{padding:.5rem .5rem .5rem 0;-webkit-mask-image:-webkit-linear-gradient(30deg,black 25%,rgba(0,0,0,.2)50%,black 75%);mask-image:-webkit-linear-gradient(30deg,black 25%,rgba(0,0,0,.2)50%,black 75%);mask-image:-moz-linear-gradient(30deg,black 25%,rgba(0,0,0,.2)50%,black 75%);mask-image:-o-linear-gradient(30deg,black 25%,rgba(0,0,0,.2)50%,black 75%);mask-image:linear-gradient(60deg,black 25%,rgba(0,0,0,.2)50%,black 75%);-webkit-mask-size:400%;mask-size:400%;-webkit-mask-position:0%;mask-position:0%}span.jsx-9d2954176cc7cae4:hover{-webkit-mask-position:100%;mask-position:100%;-webkit-transition:mask-position 1s ease,-webkit-mask-position 1s ease;-moz-transition:mask-position 1s ease,-webkit-mask-position 1s ease;-o-transition:mask-position 1s ease,-webkit-mask-position 1s ease;transition:mask-position 1s ease,-webkit-mask-position 1s ease}"})]}),{}),project:{link:"https://github.com/samvera-labs/clover-iiif"},primaryHue:209,sidebar:{autoCollapse:!0,defaultMenuCollapseLevel:1}};var x=p}}]);