(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[594],{6010:function(e,t,n){"use strict";t.Z=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r}},9749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageLoaderProps",{enumerable:!0,get:function(){return c.ImageLoaderProps}}),t.default=function(e){let t,n;var o,{src:i,sizes:h,unoptimized:E=!1,priority:b=!1,loading:w,className:y,quality:T,width:P,height:S,fill:C,style:F,onLoad:R,onLoadingComplete:x,placeholder:A="empty",blurDataURL:O,layout:k,objectFit:L,objectPosition:D,lazyBoundary:N,lazyRoot:j}=e,M=l(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let z=u.useContext(d.ImageConfigContext),I=u.useMemo(()=>{let e=p||z||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[z]),H=M,_=H.loader||f.default;if(delete H.loader,"__next_img_default"in _){if("custom"===I.loader)throw Error('Image with src "'.concat(i,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let Y=_;_=e=>{let{config:t}=e,n=l(e,["config"]);return Y(n)}}if(k){"fill"===k&&(C=!0);let V={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];V&&(F=r({},F,V));let B={responsive:"100vw",fill:"100vw"}[k];B&&!h&&(h=B)}let $="",U=v(P),q=v(S);if("object"==typeof(o=i)&&(m(o)||void 0!==o.src)){let W=m(i)?i.default:i;if(!W.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(W)));if(!W.height||!W.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(W)));if(t=W.blurWidth,n=W.blurHeight,O=O||W.blurDataURL,$=W.src,!C){if(U||q){if(U&&!q){let Z=U/W.width;q=Math.round(W.height*Z)}else if(!U&&q){let G=q/W.height;U=Math.round(W.width*G)}}else U=W.width,q=W.height}}let J=!b&&("lazy"===w||void 0===w);((i="string"==typeof i?i:$).startsWith("data:")||i.startsWith("blob:"))&&(E=!0,J=!1),I.unoptimized&&(E=!0);let[K,Q]=u.useState(!1),[X,ee]=u.useState(!1),et=v(T),en=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:L,objectPosition:D}:{},X?{}:{color:"transparent"},F),er="blur"===A&&O&&!K?{backgroundSize:en.objectFit||"cover",backgroundPosition:en.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(s.getImageBlurSvg({widthInt:U,heightInt:q,blurWidth:t,blurHeight:n,blurDataURL:O}),'")')}:{},eo=function(e){let{config:t,src:n,unoptimized:r,width:o,quality:i,sizes:l,loader:u}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:a,kind:s}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){let i=/(^|\s)(1?\d?\d)vw/g,l=[];for(let u;u=i.exec(n);u)l.push(parseInt(u[2]));if(l.length){let a=.01*Math.min(...l);return{widths:o.filter(e=>e>=r[0]*a),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let s=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:s,kind:"x"}}(t,o,l),c=a.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:a.map((e,r)=>"".concat(u({config:t,src:n,quality:i,width:e})," ").concat("w"===s?e:r+1).concat(s)).join(", "),src:u({config:t,src:n,quality:i,width:a[c]})}}({config:I,src:i,unoptimized:E,width:U,quality:et,sizes:h,loader:_}),ei=i,el={imageSrcSet:eo.srcSet,imageSizes:eo.sizes,crossOrigin:H.crossOrigin},eu=u.useRef(R);u.useEffect(()=>{eu.current=R},[R]);let ea=u.useRef(x);u.useEffect(()=>{ea.current=x},[x]);let es=r({isLazy:J,imgAttributes:eo,heightInt:q,widthInt:U,qualityInt:et,className:y,imgStyle:en,blurStyle:er,loading:w,config:I,fill:C,unoptimized:E,placeholder:A,loader:_,srcString:ei,onLoadRef:eu,onLoadingCompleteRef:ea,setBlurComplete:Q,setShowAltText:ee},H);return u.default.createElement(u.default.Fragment,null,u.default.createElement(g,Object.assign({},es)),b?u.default.createElement(a.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+eo.src+eo.srcSet+eo.sizes,rel:"preload",as:"image",href:eo.srcSet?void 0:eo.src},el))):null)};var r=n(6495).Z,o=n(2648).Z,i=n(1598).Z,l=n(7273).Z,u=i(n(7294)),a=o(n(3121)),s=n(2675),c=n(139),d=n(8730);n(7238);var f=o(n(9824));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e){return void 0!==e.default}function v(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,n,o,i,l,u){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&l(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let u=!1,a=!1;o.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>u,isPropagationStopped:()=>a,persist(){},preventDefault(){u=!0,t.preventDefault()},stopPropagation(){a=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let g=e=>{var{imgAttributes:t,heightInt:n,widthInt:o,qualityInt:i,className:a,imgStyle:s,blurStyle:c,isLazy:d,fill:f,placeholder:p,loading:m,srcString:v,config:g,unoptimized:E,loader:b,onLoadRef:w,onLoadingCompleteRef:y,setBlurComplete:T,setShowAltText:P,onLoad:S,onError:C}=e,F=l(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=d?"lazy":m,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},F,t,{width:o,height:n,decoding:"async","data-nimg":f?"fill":"1",className:a,loading:m,style:r({},s,c),ref:u.useCallback(e=>{e&&(C&&(e.src=e.src),e.complete&&h(e,v,p,w,y,T,E))},[v,p,w,y,T,C,E]),onLoad(e){let t=e.currentTarget;h(t,v,p,w,y,T,E)},onError(e){P(!0),"blur"===p&&T(!0),C&&C(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:i}=e,l=r||t,u=o||n,a=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&u?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(u,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&o?"1":"20","'/%3E").concat(a,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(i,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:o}=e;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){n(9749)},728:function(e,t,n){"use strict";n.d(t,{V:function(){return ey}});var r,o,i,l,u,a,s,c,d,f,p,m,v=n(7294),h=n(2984),g=n(2351),E=n(3784),b=((r=b||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r),w=n(6723),y=n(2180);let T=0;function P(){return++T}let S=null!=(m=v.useId)?m:function(){let e=(0,y.H)(),[t,n]=v.useState(e?P:null);return(0,w.e)(()=>{null===t&&n(P())},[t]),null!=t?""+t:void 0};var C=((o=C||{})[o.None=1]="None",o[o.Focusable=2]="Focusable",o[o.Hidden=4]="Hidden",o);let F=(0,g.yV)(function(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,g.sY)({ourProps:o,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})});var R=n(3393);function x(e){return R.s?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let A=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var O=((i=O||{})[i.First=1]="First",i[i.Previous=2]="Previous",i[i.Next=4]="Next",i[i.Last=8]="Last",i[i.WrapAround=16]="WrapAround",i[i.NoScroll=32]="NoScroll",i),k=((l=k||{})[l.Error=0]="Error",l[l.Overflow=1]="Overflow",l[l.Success=2]="Success",l[l.Underflow=3]="Underflow",l),L=((u=L||{})[u.Previous=-1]="Previous",u[u.Next=1]="Next",u),D=((a=D||{})[a.Strict=0]="Strict",a[a.Loose=1]="Loose",a);function N(e){null==e||e.focus({preventScroll:!0})}function j(e,t,n=!0,r=null){var o,i,l;let u=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,a=Array.isArray(e)?n?function(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let i=r.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}(e):e:function(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(A))}(e);r=null!=r?r:u.activeElement;let s=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,a.indexOf(r))-1;if(4&t)return Math.max(0,a.indexOf(r))+1;if(8&t)return a.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=32&t?{preventScroll:!0}:{},f=0,p=a.length,m;do{if(f>=p||f+p<=0)return 0;let v=c+f;if(16&t)v=(v+p)%p;else{if(v<0)return 3;if(v>=p)return 1}null==(m=a[v])||m.focus(d),f+=s}while(m!==u.activeElement);return 6&t&&null!=(l=null==(i=null==(o=m)?void 0:o.matches)?void 0:i.call(o,"textarea,input"))&&l&&m.select(),m.hasAttribute("tabindex")||m.setAttribute("tabindex","0"),2}var M=n(3781),z=n(3855),I=((s=I||{})[s.Forwards=0]="Forwards",s[s.Backwards=1]="Backwards",s),H=n(4879);function _(...e){return(0,v.useMemo)(()=>x(...e),[...e])}function Y(e,t,n,r){let o=(0,z.E)(n);(0,v.useEffect)(()=>{function n(e){o.current(e)}return(e=null!=e?e:window).addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)},[e,t,r])}var V=n(1021);function B(e,t){let n=(0,v.useRef)([]),r=(0,M.z)(e);(0,v.useEffect)(()=>{let e=[...n.current];for(let[o,i]of t.entries())if(n.current[o]!==i){let l=r(t,e);return n.current=t,l}},[r,...t])}var $=((c=$||{})[c.None=1]="None",c[c.InitialFocus=2]="InitialFocus",c[c.TabLock=4]="TabLock",c[c.FocusLock=8]="FocusLock",c[c.RestoreFocus=16]="RestoreFocus",c[c.All=30]="All",c);let U=Object.assign((0,g.yV)(function(e,t){var n,r;let o,i,l=(0,v.useRef)(null),u=(0,E.T)(l,t),{initialFocus:a,containers:s,features:c=30,...d}=e;(0,y.H)()||(c=1);let f=_(l);!function({ownerDocument:e},t){let n=(0,v.useRef)(null);Y(null==e?void 0:e.defaultView,"focusout",e=>{!t||n.current||(n.current=e.target)},!0),B(()=>{t||((null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&N(n.current),n.current=null)},[t]);let r=(0,v.useRef)(!1);(0,v.useEffect)(()=>(r.current=!1,()=>{r.current=!0,(0,V.Y)(()=>{r.current&&(N(n.current),n.current=null)})}),[])}({ownerDocument:f},Boolean(16&c));let p=function({ownerDocument:e,container:t,initialFocus:n},r){let o=(0,v.useRef)(null),i=(0,H.t)();return B(()=>{if(!r)return;let l=t.current;l&&(0,V.Y)(()=>{if(!i.current)return;let t=null==e?void 0:e.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===t){o.current=t;return}}else if(l.contains(t)){o.current=t;return}null!=n&&n.current?N(n.current):j(l,O.First)===k.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=null==e?void 0:e.activeElement})},[r]),o}({ownerDocument:f,container:l,initialFocus:a},Boolean(2&c));!function({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let i=(0,H.t)();Y(null==e?void 0:e.defaultView,"focus",e=>{if(!o||!i.current)return;let l=new Set(null==n?void 0:n.current);l.add(t);let u=r.current;if(!u)return;let a=e.target;a&&a instanceof HTMLElement?function(e,t){var n;for(let r of e)if(null!=(n=r.current)&&n.contains(t))return!0;return!1}(l,a)?(r.current=a,N(a)):(e.preventDefault(),e.stopPropagation(),N(u)):N(r.current)},!0)}({ownerDocument:f,container:l,containers:s,previousActiveElement:p},Boolean(8&c));let m=(o=(0,v.useRef)(0),n="keydown",r=e=>{"Tab"===e.key&&(o.current=e.shiftKey?1:0)},i=(0,z.E)(r),(0,v.useEffect)(()=>{function e(e){i.current(e)}return window.addEventListener(n,e,!0),()=>window.removeEventListener(n,e,!0)},[n,!0]),o),b=(0,M.z)(()=>{let e=l.current;e&&(0,h.E)(m.current,{[I.Forwards]:()=>j(e,O.First),[I.Backwards]:()=>j(e,O.Last)})});return v.createElement(v.Fragment,null,Boolean(4&c)&&v.createElement(F,{as:"button",type:"button",onFocus:b,features:C.Focusable}),(0,g.sY)({ourProps:{ref:u},theirProps:d,defaultTag:"div",name:"FocusTrap"}),Boolean(4&c)&&v.createElement(F,{as:"button",type:"button",onFocus:b,features:C.Focusable}))}),{features:$}),q=new Set,W=new Map;function Z(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function G(e){let t=W.get(e);t&&(null===t["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}var J=n(3935);let K=(0,v.createContext)(!1);function Q(e){return v.createElement(K.Provider,{value:e.force},e.children)}let X=v.Fragment,ee=(0,g.yV)(function(e,t){let n=(0,v.useRef)(null),r=(0,E.T)((0,E.h)(e=>{n.current=e}),t),o=_(n),i=function(e){let t=(0,v.useContext)(K),n=(0,v.useContext)(en),r=_(e),[o,i]=(0,v.useState)(()=>{if(!t&&null!==n||R.s)return null;let e=null==r?void 0:r.getElementById("headlessui-portal-root");if(e)return e;if(null===r)return null;let o=r.createElement("div");return o.setAttribute("id","headlessui-portal-root"),r.body.appendChild(o)});return(0,v.useEffect)(()=>{null!==o&&(null!=r&&r.body.contains(o)||null==r||r.body.appendChild(o))},[o,r]),(0,v.useEffect)(()=>{t||null!==n&&i(n.current)},[n,i,t]),o}(n),[l]=(0,v.useState)(()=>{var e;return R.s?null:null!=(e=null==o?void 0:o.createElement("div"))?e:null}),u=(0,y.H)(),a=(0,v.useRef)(!1);return(0,w.e)(()=>{if(a.current=!1,!(!i||!l))return i.contains(l)||(l.setAttribute("data-headlessui-portal",""),i.appendChild(l)),()=>{a.current=!0,(0,V.Y)(()=>{var e;a.current&&i&&l&&(i.removeChild(l),i.childNodes.length<=0&&(null==(e=i.parentElement)||e.removeChild(i)))})}},[i,l]),u&&i&&l?(0,J.createPortal)((0,g.sY)({ourProps:{ref:r},theirProps:e,defaultTag:X,name:"Portal"}),l):null}),et=v.Fragment,en=(0,v.createContext)(null),er=Object.assign(ee,{Group:(0,g.yV)(function(e,t){let{target:n,...r}=e,o={ref:(0,E.T)(t)};return v.createElement(en.Provider,{value:n},(0,g.sY)({ourProps:o,theirProps:r,defaultTag:et,name:"Popover.Group"}))})}),eo=(0,v.createContext)(null),ei=(0,g.yV)(function(e,t){let n=function e(){let t=(0,v.useContext)(eo);if(null===t){let n=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return t}(),r=`headlessui-description-${S()}`,o=(0,E.T)(t);(0,w.e)(()=>n.register(r),[r,n.register]);let i={ref:o,...n.props,id:r};return(0,g.sY)({ourProps:i,theirProps:e,slot:n.slot||{},defaultTag:"p",name:n.name||"Description"})});var el=n(6567);let eu=(0,v.createContext)(()=>{});eu.displayName="StackContext";var ea=((d=ea||{})[d.Add=0]="Add",d[d.Remove=1]="Remove",d);function es({children:e,onUpdate:t,type:n,element:r,enabled:o}){let i=(0,v.useContext)(eu),l=(0,M.z)((...e)=>{null==t||t(...e),i(...e)});return(0,w.e)(()=>{let e=void 0===o||!0===o;return e&&l(0,n,r),()=>{e&&l(1,n,r)}},[l,n,r,o]),v.createElement(eu.Provider,{value:l},e)}function ec(e,t,n){let r=(0,z.E)(t);(0,v.useEffect)(()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}var ed=n(9362),ef=((f=ef||{})[f.Open=0]="Open",f[f.Closed=1]="Closed",f),ep=((p=ep||{})[p.SetTitleId=0]="SetTitleId",p);let em={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},ev=(0,v.createContext)(null);function eh(e){let t=(0,v.useContext)(ev);if(null===t){let n=Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,eh),n}return t}function eg(e,t){return(0,h.E)(t.type,em,e,t)}ev.displayName="DialogContext";let eE=g.AN.RenderStrategy|g.AN.Static,eb=(0,g.yV)(function(e,t){var n;let{open:r,onClose:o,initialFocus:i,__demoMode:l=!1,...u}=e,[a,s]=(0,v.useState)(0),c=(0,el.oJ)();void 0===r&&null!==c&&(r=(0,h.E)(c,{[el.ZM.Open]:!0,[el.ZM.Closed]:!1}));let d=(0,v.useRef)(new Set),f=(0,v.useRef)(null),p=(0,E.T)(f,t),m=(0,v.useRef)(null),T=_(f),P=e.hasOwnProperty("open")||null!==c,R=e.hasOwnProperty("onClose");if(!P&&!R)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!P)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!R)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof r)throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${r}`);if("function"!=typeof o)throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let O=r?0:1,[k,L]=(0,v.useReducer)(eg,{titleId:null,descriptionId:null,panelRef:(0,v.createRef)()}),N=(0,M.z)(()=>o(!1)),j=(0,M.z)(e=>L({type:0,id:e})),z=!!(0,y.H)()&&!l&&0===O,I=a>1,H=null!==(0,v.useContext)(ev);(function(e,t=!0){(0,w.e)(()=>{if(!t||!e.current)return;let n=e.current,r=x(n);if(r){for(let o of(q.add(n),W.keys()))o.contains(n)&&(G(o),W.delete(o));return r.querySelectorAll("body > *").forEach(e=>{if(e instanceof HTMLElement){for(let t of q)if(e.contains(t))return;1===q.size&&(W.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),Z(e))}}),()=>{if(q.delete(n),q.size>0)r.querySelectorAll("body > *").forEach(e=>{if(e instanceof HTMLElement&&!W.has(e)){for(let t of q)if(e.contains(t))return;W.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),Z(e)}});else for(let e of W.keys())G(e),W.delete(e)}}},[t])})(f,!!I&&z),function(e,t,n=!0){let r=(0,v.useRef)(!1);function o(n,o){if(!r.current||n.defaultPrevented)return;let i=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),l=o(n);if(null!==l&&l.getRootNode().contains(l)){for(let u of i){if(null===u)continue;let a=u instanceof HTMLElement?u:u.current;if(null!=a&&a.contains(l))return}return!function(e,t=0){var n;return e!==(null==(n=x(e))?void 0:n.body)&&(0,h.E)(t,{0:()=>e.matches(A),1(){let t=e;for(;null!==t;){if(t.matches(A))return!0;t=t.parentElement}return!1}})}(l,D.Loose)&&-1!==l.tabIndex&&n.preventDefault(),t(n,l)}}(0,v.useEffect)(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);let i=(0,v.useRef)(null);ec("mousedown",e=>{var t,n;r.current&&(i.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),ec("click",e=>{i.current&&(o(e,()=>i.current),i.current=null)},!0),ec("blur",e=>o(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}(()=>{var e,t;return[...Array.from(null!=(e=null==T?void 0:T.querySelectorAll("body > *, [data-headlessui-portal]"))?e:[]).filter(e=>!(!(e instanceof HTMLElement)||e.contains(m.current)||k.panelRef.current&&e.contains(k.panelRef.current))),null!=(t=k.panelRef.current)?t:f.current]},N,z&&!I),Y(null==T?void 0:T.defaultView,"keydown",e=>{e.defaultPrevented||e.key===b.Escape&&0===O&&(I||(e.preventDefault(),e.stopPropagation(),N()))}),n=0===O&&!H,(0,v.useEffect)(()=>{var e;if(!n||!T)return;let t=(0,ed.k)();function r(e,n,r){let o=e.style.getPropertyValue(n);return Object.assign(e.style,{[n]:r}),t.add(()=>{Object.assign(e.style,{[n]:o})})}let o=T.documentElement,i=(null!=(e=T.defaultView)?e:window).innerWidth-o.clientWidth;if(r(o,"overflow","hidden"),i>0){let l=o.clientWidth-o.offsetWidth;r(o,"paddingRight",`${i-l}px`)}if(/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0){let u=window.pageYOffset;r(o,"position","fixed"),r(o,"marginTop",`-${u}px`),r(o,"width","100%"),t.add(()=>window.scrollTo(0,u))}return t.dispose},[T,n]),(0,v.useEffect)(()=>{if(0!==O||!f.current)return;let e=new IntersectionObserver(e=>{for(let t of e)0===t.boundingClientRect.x&&0===t.boundingClientRect.y&&0===t.boundingClientRect.width&&0===t.boundingClientRect.height&&N()});return e.observe(f.current),()=>e.disconnect()},[O,f,N]);let[V,B]=function(){let[e,t]=(0,v.useState)([]);return[e.length>0?e.join(" "):void 0,(0,v.useMemo)(()=>function(e){let n=(0,M.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),r=(0,v.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return v.createElement(eo.Provider,{value:r},e.children)},[t])]}(),$=`headlessui-dialog-${S()}`,J=(0,v.useMemo)(()=>[{dialogState:O,close:N,setTitleId:j},k],[O,k,N,j]),K=(0,v.useMemo)(()=>({open:0===O}),[O]),X={ref:p,id:$,role:"dialog","aria-modal":0===O||void 0,"aria-labelledby":k.titleId,"aria-describedby":V};return v.createElement(es,{type:"Dialog",enabled:0===O,element:f,onUpdate:(0,M.z)((e,t,n)=>{"Dialog"===t&&(0,h.E)(e,{[ea.Add](){d.current.add(n),s(e=>e+1)},[ea.Remove](){d.current.add(n),s(e=>e-1)}})})},v.createElement(Q,{force:!0},v.createElement(er,null,v.createElement(ev.Provider,{value:J},v.createElement(er.Group,{target:f},v.createElement(Q,{force:!1},v.createElement(B,{slot:K,name:"Dialog.Description"},v.createElement(U,{initialFocus:i,containers:d,features:z?(0,h.E)(I?"parent":"leaf",{parent:U.features.RestoreFocus,leaf:U.features.All&~U.features.FocusLock}):U.features.None},(0,g.sY)({ourProps:X,theirProps:u,slot:K,defaultTag:"div",features:eE,visible:0===O,name:"Dialog"})))))))),v.createElement(F,{features:C.Hidden,ref:m}))}),ew=(0,g.yV)(function(e,t){let[{dialogState:n,close:r}]=eh("Dialog.Overlay"),o=(0,E.T)(t),i=`headlessui-dialog-overlay-${S()}`,l=(0,M.z)(e=>{if(e.target===e.currentTarget){if(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),r()}}),u=(0,v.useMemo)(()=>({open:0===n}),[n]);return(0,g.sY)({ourProps:{ref:o,id:i,"aria-hidden":!0,onClick:l},theirProps:e,slot:u,defaultTag:"div",name:"Dialog.Overlay"})}),ey=Object.assign(eb,{Backdrop:(0,g.yV)(function(e,t){let[{dialogState:n},r]=eh("Dialog.Backdrop"),o=(0,E.T)(t),i=`headlessui-dialog-backdrop-${S()}`;(0,v.useEffect)(()=>{if(null===r.panelRef.current)throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[r.panelRef]);let l=(0,v.useMemo)(()=>({open:0===n}),[n]);return v.createElement(Q,{force:!0},v.createElement(er,null,(0,g.sY)({ourProps:{ref:o,id:i,"aria-hidden":!0},theirProps:e,slot:l,defaultTag:"div",name:"Dialog.Backdrop"})))}),Panel:(0,g.yV)(function(e,t){let[{dialogState:n},r]=eh("Dialog.Panel"),o=(0,E.T)(t,r.panelRef),i=`headlessui-dialog-panel-${S()}`,l=(0,v.useMemo)(()=>({open:0===n}),[n]),u=(0,M.z)(e=>{e.stopPropagation()});return(0,g.sY)({ourProps:{ref:o,id:i,onClick:u},theirProps:e,slot:l,defaultTag:"div",name:"Dialog.Panel"})}),Overlay:ew,Title:(0,g.yV)(function(e,t){let[{dialogState:n,setTitleId:r}]=eh("Dialog.Title"),o=`headlessui-dialog-title-${S()}`,i=(0,E.T)(t);(0,v.useEffect)(()=>(r(o),()=>r(null)),[o,r]);let l=(0,v.useMemo)(()=>({open:0===n}),[n]);return(0,g.sY)({ourProps:{ref:i,id:o},theirProps:e,slot:l,defaultTag:"h2",name:"Dialog.Title"})}),Description:ei})},4829:function(e,t,n){"use strict";n.d(t,{u:function(){return D}});var r,o,i=n(7294),l=n(2351),u=n(6567),a=n(2984),s=n(4879),c=n(6723),d=n(3855),f=n(2180),p=n(3784),m=n(9362);function v(e,...t){e&&t.length>0&&e.classList.add(...t)}function h(e,...t){e&&t.length>0&&e.classList.remove(...t)}var g=((r=g||{}).Ended="ended",r.Cancelled="cancelled",r);function E(){let[e]=(0,i.useState)(m.k);return(0,i.useEffect)(()=>()=>e.dispose(),[e]),e}var b=n(3781);function w(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let y=(0,i.createContext)(null);y.displayName="TransitionContext";var T=((o=T||{}).Visible="visible",o.Hidden="hidden",o);let P=(0,i.createContext)(null);function S(e){return"children"in e?S(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function C(e,t){let n=(0,d.E)(e),r=(0,i.useRef)([]),o=(0,s.t)(),u=E(),c=(0,b.z)((e,t=l.l4.Hidden)=>{let i=r.current.findIndex(({el:t})=>t===e);-1!==i&&((0,a.E)(t,{[l.l4.Unmount](){r.current.splice(i,1)},[l.l4.Hidden](){r.current[i].state="hidden"}}),u.microTask(()=>{var e;!S(r)&&o.current&&(null==(e=n.current)||e.call(n))}))}),f=(0,b.z)(e=>{let t=r.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>c(e,l.l4.Unmount)}),p=(0,i.useRef)([]),m=(0,i.useRef)(Promise.resolve()),v=(0,i.useRef)({enter:[],leave:[],idle:[]}),h=(0,b.z)((e,n,r)=>{p.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{p.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(v.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?m.current=m.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),g=(0,b.z)((e,t,n)=>{Promise.all(v.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=p.current.shift())||e()}).then(()=>n(t))});return(0,i.useMemo)(()=>({children:r,register:f,unregister:c,onStart:h,onStop:g,wait:m,chains:v}),[f,c,r,h,g,v,m])}function F(){}P.displayName="NestingContext";let R=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function x(e){var t;let n={};for(let r of R)n[r]=null!=(t=e[r])?t:F;return n}let A=l.AN.RenderStrategy,O=(0,l.yV)(function(e,t){var n;let r,{beforeEnter:o,afterEnter:T,beforeLeave:F,afterLeave:R,enter:O,enterFrom:k,enterTo:L,entered:D,leave:N,leaveFrom:j,leaveTo:M,...z}=e,I=(0,i.useRef)(null),H=(0,p.T)(I,t),_=z.unmount?l.l4.Unmount:l.l4.Hidden,{show:Y,appear:V,initial:B}=function(){let e=(0,i.useContext)(y);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[$,U]=(0,i.useState)(Y?"visible":"hidden"),q=function(){let e=(0,i.useContext)(P);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:W,unregister:Z}=q,G=(0,i.useRef)(null);(0,i.useEffect)(()=>W(I),[W,I]),(0,i.useEffect)(()=>{if(_===l.l4.Hidden&&I.current){if(Y&&"visible"!==$){U("visible");return}return(0,a.E)($,{hidden:()=>Z(I),visible:()=>W(I)})}},[$,I,W,Z,Y,_]);let J=(0,d.E)({enter:w(O),enterFrom:w(k),enterTo:w(L),entered:w(D),leave:w(N),leaveFrom:w(j),leaveTo:w(M)}),K=(n={beforeEnter:o,afterEnter:T,beforeLeave:F,afterLeave:R},r=(0,i.useRef)(x(n)),(0,i.useEffect)(()=>{r.current=x(n)},[n]),r),Q=(0,f.H)();(0,i.useEffect)(()=>{if(Q&&"visible"===$&&null===I.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[I,$,Q]);let X=B&&!V,ee=!Q||X||G.current===Y?"idle":Y?"enter":"leave",et=(0,b.z)(e=>(0,a.E)(e,{enter:()=>K.current.beforeEnter(),leave:()=>K.current.beforeLeave(),idle(){}})),en=(0,b.z)(e=>(0,a.E)(e,{enter:()=>K.current.afterEnter(),leave:()=>K.current.afterLeave(),idle(){}})),er=C(()=>{U("hidden"),Z(I)},q);return function({container:e,direction:t,classes:n,onStart:r,onStop:o}){let i=(0,s.t)(),l=E(),u=(0,d.E)(t);(0,c.e)(()=>{let t=(0,m.k)();l.add(t.dispose);let s=e.current;if(s&&"idle"!==u.current&&i.current){var c,d,f,p;let E,b,w,y,T,P,S;return t.dispose(),r.current(u.current),t.add((c=s,d=n.current,f="enter"===u.current,p=e=>{t.dispose(),(0,a.E)(e,{[g.Ended](){o.current(u.current)},[g.Cancelled](){}})},b=f?"enter":"leave",w=(0,m.k)(),y=void 0!==p?(E={called:!1},(...e)=>{if(!E.called)return E.called=!0,p(...e)}):()=>{},"enter"===b&&(c.removeAttribute("hidden"),c.style.display=""),T=(0,a.E)(b,{enter:()=>d.enter,leave:()=>d.leave}),P=(0,a.E)(b,{enter:()=>d.enterTo,leave:()=>d.leaveTo}),S=(0,a.E)(b,{enter:()=>d.enterFrom,leave:()=>d.leaveFrom}),h(c,...d.enter,...d.enterTo,...d.enterFrom,...d.leave,...d.leaveFrom,...d.leaveTo,...d.entered),v(c,...T,...S),w.nextFrame(()=>{h(c,...S),v(c,...P),function(e,t){let n=(0,m.k)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[i,l]=[r,o].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t});if(i+l!==0){let u=[];u.push(n.addEventListener(e,"transitionrun",r=>{r.target===r.currentTarget&&(u.splice(0).forEach(e=>e()),u.push(n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t("ended"),u.splice(0).forEach(e=>e()))}),n.addEventListener(e,"transitioncancel",e=>{e.target===e.currentTarget&&(t("cancelled"),u.splice(0).forEach(e=>e()))})))}))}else t("ended");n.add(()=>t("cancelled")),n.dispose}(c,e=>("ended"===e&&(h(c,...T),v(c,...d.entered)),y(e)))}),w.dispose)),t.dispose}},[t])}({container:I,classes:J,direction:ee,onStart:(0,d.E)(e=>{er.onStart(I,e,et)}),onStop:(0,d.E)(e=>{er.onStop(I,e,en),"leave"!==e||S(er)||(U("hidden"),Z(I))})}),(0,i.useEffect)(()=>{X&&(_===l.l4.Hidden?G.current=null:G.current=Y)},[Y,X,$]),i.createElement(P.Provider,{value:er},i.createElement(u.up,{value:(0,a.E)($,{visible:u.ZM.Open,hidden:u.ZM.Closed})},(0,l.sY)({ourProps:{ref:H},theirProps:z,defaultTag:"div",features:A,visible:"visible"===$,name:"Transition.Child"})))}),k=(0,l.yV)(function(e,t){let{show:n,appear:r=!1,unmount:o,...s}=e,d=(0,i.useRef)(null),m=(0,p.T)(d,t);(0,f.H)();let v=(0,u.oJ)();if(void 0===n&&null!==v&&(n=(0,a.E)(v,{[u.ZM.Open]:!0,[u.ZM.Closed]:!1})),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[h,g]=(0,i.useState)(n?"visible":"hidden"),E=C(()=>{g("hidden")}),[b,w]=(0,i.useState)(!0),T=(0,i.useRef)([n]);(0,c.e)(()=>{!1!==b&&T.current[T.current.length-1]!==n&&(T.current.push(n),w(!1))},[T,n]);let F=(0,i.useMemo)(()=>({show:n,appear:r,initial:b}),[n,r,b]);(0,i.useEffect)(()=>{if(n)g("visible");else if(S(E)){let e=d.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&g("hidden")}else g("hidden")},[n,E]);let R={unmount:o};return i.createElement(P.Provider,{value:E},i.createElement(y.Provider,{value:F},(0,l.sY)({ourProps:{...R,as:i.Fragment,children:i.createElement(O,{ref:m,...R,...s})},theirProps:{},defaultTag:i.Fragment,features:A,visible:"visible"===h,name:"Transition"})))}),L=(0,l.yV)(function(e,t){let n=null!==(0,i.useContext)(y),r=null!==(0,u.oJ)();return i.createElement(i.Fragment,null,!n&&r?i.createElement(k,{ref:t,...e}):i.createElement(O,{ref:t,...e}))}),D=Object.assign(k,{Child:L,Root:k})},3781:function(e,t,n){"use strict";n.d(t,{z:function(){return i}});var r=n(7294),o=n(3855);let i=function(e){let t=(0,o.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},4879:function(e,t,n){"use strict";n.d(t,{t:function(){return i}});var r=n(7294),o=n(6723);function i(){let e=(0,r.useRef)(!1);return(0,o.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}},6723:function(e,t,n){"use strict";n.d(t,{e:function(){return o}});var r=n(7294);let o=n(3393).s?r.useEffect:r.useLayoutEffect},3855:function(e,t,n){"use strict";n.d(t,{E:function(){return i}});var r=n(7294),o=n(6723);function i(e){let t=(0,r.useRef)(e);return(0,o.e)(()=>{t.current=e},[e]),t}},2180:function(e,t,n){"use strict";n.d(t,{H:function(){return i}});var r=n(7294);let o={serverHandoffComplete:!1};function i(){let[e,t]=(0,r.useState)(o.serverHandoffComplete);return(0,r.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,r.useEffect)(()=>{!1===o.serverHandoffComplete&&(o.serverHandoffComplete=!0)},[]),e}},3784:function(e,t,n){"use strict";n.d(t,{T:function(){return u},h:function(){return l}});var r=n(7294),o=n(3781);let i=Symbol();function l(e,t=!0){return Object.assign(e,{[i]:t})}function u(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,o.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[i]))?void 0:n}},6567:function(e,t,n){"use strict";n.d(t,{ZM:function(){return l},oJ:function(){return u},up:function(){return a}});var r,o=n(7294);let i=(0,o.createContext)(null);i.displayName="OpenClosedContext";var l=((r=l||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r);function u(){return(0,o.useContext)(i)}function a({value:e,children:t}){return o.createElement(i.Provider,{value:e},t)}},9362:function(e,t,n){"use strict";n.d(t,{k:function(){return o}});var r=n(1021);function o(){let e=[],t=[],n={enqueue(e){t.push(e)},addEventListener:(e,t,r,o)=>(e.addEventListener(t,r,o),n.add(()=>e.removeEventListener(t,r,o))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add(()=>cancelAnimationFrame(t))},nextFrame:(...e)=>n.requestAnimationFrame(()=>n.requestAnimationFrame(...e)),setTimeout(...e){let t=setTimeout(...e);return n.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return(0,r.Y)(()=>{t.current&&e[0]()}),n.add(()=>{t.current=!1})},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0){let[r]=e.splice(n,1);r()}}),dispose(){for(let t of e.splice(0))t()},async workQueue(){for(let e of t.splice(0))await e()}};return n}},2984:function(e,t,n){"use strict";function r(e,t,...n){if(e in t){let o=t[e];return"function"==typeof o?o(...n):o}let i=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,r),i}n.d(t,{E:function(){return r}})},1021:function(e,t,n){"use strict";function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}n.d(t,{Y:function(){return r}})},2351:function(e,t,n){"use strict";n.d(t,{AN:function(){return u},l4:function(){return a},sY:function(){return s},yV:function(){return f}});var r,o,i=n(7294),l=n(2984),u=((r=u||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),a=((o=a||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function s({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:i=!0,name:u}){let a=d(t,e);if(i)return c(a,n,r,u);let s=null!=o?o:0;if(2&s){let{static:f=!1,...p}=a;if(f)return c(p,n,r,u)}if(1&s){let{unmount:m=!0,...v}=a;return(0,l.E)(m?0:1,{0:()=>null,1:()=>c({...v,hidden:!0,style:{display:"none"}},n,r,u)})}return c(a,n,r,u)}function c(e,t={},n,r){let{as:o=n,children:l,refName:u="ref",...a}=m(e,["unmount","static"]),s=void 0!==e.ref?{[u]:e.ref}:{},c="function"==typeof l?l(t):l;a.className&&"function"==typeof a.className&&(a.className=a.className(t));let f={};if(t){let v=!1,h=[];for(let[g,E]of Object.entries(t))"boolean"==typeof E&&(v=!0),!0===E&&h.push(g);v&&(f["data-headlessui-state"]=h.join(" "))}if(o===i.Fragment&&Object.keys(p(a)).length>0){if(!(0,i.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));return(0,i.cloneElement)(c,Object.assign({},d(c.props,p(m(a,["ref"]))),f,s,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(c.ref,s.ref)))}return(0,i.createElement)(o,Object.assign({},m(a,["ref"]),o!==i.Fragment&&s,o!==i.Fragment&&f),c)}function d(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&"function"==typeof r[o]?(null!=n[o]||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let i in n)Object.assign(t,{[i](e,...t){let r=n[i];for(let o of r){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;o(e,...t)}}});return t}function f(e){var t;return Object.assign((0,i.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function m(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}},3393:function(e,t,n){"use strict";n.d(t,{s:function(){return r}});let r="undefined"==typeof window||"undefined"==typeof document}}]);