(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8],{64104:function(e){var t=/[\\\/\-_+.# \t"@\[\(\{&]/,n=/[\\\/\-_+.# \t"@\[\(\{&]/g;e.exports=function(e,r){return function e(r,o,l,u,a,i){if(i===o.length)return a===r.length?1:.99;for(var c,s,d,f=u.charAt(i),v=l.indexOf(f,a),m=0;v>=0;)(c=e(r,o,l,u,v+1,i+1))>m&&(v===a?c*=1:t.test(r.charAt(v-1))?(c*=.9,(d=r.slice(a,v-1).match(n))&&a>0&&(c*=Math.pow(.999,d.length))):t.test(r.slice(a,v-1))?(c*=0,a>0&&(c*=Math.pow(.999,v-a))):(c*=.3,a>0&&(c*=Math.pow(.999,v-a))),r.charAt(v)!==o.charAt(i)&&(c*=.9999)),c<.1&&l.charAt(v-1)===u.charAt(i+1)&&l.charAt(v-1)!==u.charAt(i)&&.1*(s=e(r,o,l,u,v+1,i+2))>c&&(c=.1*s),c>m&&(m=c),v=l.indexOf(f,v+1);return m}(e,r,e.toLowerCase(),r.toLowerCase(),0,0)}},98364:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(61750);let o=(0,r.Z)("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]])},96785:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(61750);let o=(0,r.Z)("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]])},87594:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(61750);let o=(0,r.Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},18178:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(61750);let o=(0,r.Z)("X",[["line",{x1:"18",x2:"6",y1:"6",y2:"18",key:"15jfxm"}],["line",{x1:"6",x2:"18",y1:"6",y2:"18",key:"d1lma3"}]])},29040:function(e,t,n){"use strict";n.d(t,{Dx:function(){return Y},VY:function(){return q},aV:function(){return B},dk:function(){return X},fC:function(){return j},h_:function(){return z},x8:function(){return H},xz:function(){return $}});var r=n(40431),o=n(86006),l=n(1928),u=n(81084),a=n(38899),i=n(70757),c=n(85740),s=n(36841),d=n(63961),f=n(187),v=n(51868),m=n(76899),p=n(76808),h=n(34182),E=n(472),g=n(1095);let b="Dialog",[y,w]=(0,a.b)(b),[C,R]=y(b),D=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...a}=e,i=R("DialogTrigger",n),c=(0,u.e)(t,i.triggerRef);return(0,o.createElement)(m.WV.button,(0,r.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":K(i.open)},a,{ref:c,onClick:(0,l.M)(e.onClick,i.onOpenToggle)}))}),k="DialogPortal",[S,O]=y(k,{forceMount:void 0}),_="DialogOverlay",P=(0,o.forwardRef)((e,t)=>{let n=O(_,e.__scopeDialog),{forceMount:l=n.forceMount,...u}=e,a=R(_,e.__scopeDialog);return a.modal?(0,o.createElement)(v.z,{present:l||a.open},(0,o.createElement)(I,(0,r.Z)({},u,{ref:t}))):null}),I=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...l}=e,u=R(_,n);return(0,o.createElement)(h.Z,{as:g.g7,allowPinchZoom:!0,shards:[u.contentRef]},(0,o.createElement)(m.WV.div,(0,r.Z)({"data-state":K(u.open)},l,{ref:t,style:{pointerEvents:"auto",...l.style}})))}),M="DialogContent",N=(0,o.forwardRef)((e,t)=>{let n=O(M,e.__scopeDialog),{forceMount:l=n.forceMount,...u}=e,a=R(M,e.__scopeDialog);return(0,o.createElement)(v.z,{present:l||a.open},a.modal?(0,o.createElement)(L,(0,r.Z)({},u,{ref:t})):(0,o.createElement)(A,(0,r.Z)({},u,{ref:t})))}),L=(0,o.forwardRef)((e,t)=>{let n=R(M,e.__scopeDialog),a=(0,o.useRef)(null),i=(0,u.e)(t,n.contentRef,a);return(0,o.useEffect)(()=>{let e=a.current;if(e)return(0,E.Ry)(e)},[]),(0,o.createElement)(x,(0,r.Z)({},e,{ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,l.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,l.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;r&&e.preventDefault()}),onFocusOutside:(0,l.M)(e.onFocusOutside,e=>e.preventDefault())}))}),A=(0,o.forwardRef)((e,t)=>{let n=R(M,e.__scopeDialog),l=(0,o.useRef)(!1),u=(0,o.useRef)(!1);return(0,o.createElement)(x,(0,r.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,o;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(l.current||null===(o=n.triggerRef.current)||void 0===o||o.focus(),t.preventDefault()),l.current=!1,u.current=!1},onInteractOutside:t=>{var r,o;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(l.current=!0,"pointerdown"!==t.detail.originalEvent.type||(u.current=!0));let a=t.target,i=null===(o=n.triggerRef.current)||void 0===o?void 0:o.contains(a);i&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&u.current&&t.preventDefault()}}))}),x=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:l,onOpenAutoFocus:a,onCloseAutoFocus:i,...c}=e,f=R(M,n),v=(0,o.useRef)(null),m=(0,u.e)(t,v);return(0,p.EW)(),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(d.M,{asChild:!0,loop:!0,trapped:l,onMountAutoFocus:a,onUnmountAutoFocus:i},(0,o.createElement)(s.XB,(0,r.Z)({role:"dialog",id:f.contentId,"aria-describedby":f.descriptionId,"aria-labelledby":f.titleId,"data-state":K(f.open)},c,{ref:m,onDismiss:()=>f.onOpenChange(!1)}))),!1)}),F="DialogTitle",T=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...l}=e,u=R(F,n);return(0,o.createElement)(m.WV.h2,(0,r.Z)({id:u.titleId},l,{ref:t}))}),Z=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...l}=e,u=R("DialogDescription",n);return(0,o.createElement)(m.WV.p,(0,r.Z)({id:u.descriptionId},l,{ref:t}))}),W=(0,o.forwardRef)((e,t)=>{let{__scopeDialog:n,...u}=e,a=R("DialogClose",n);return(0,o.createElement)(m.WV.button,(0,r.Z)({type:"button"},u,{ref:t,onClick:(0,l.M)(e.onClick,()=>a.onOpenChange(!1))}))});function K(e){return e?"open":"closed"}let[U,V]=(0,a.k)("DialogTitleWarning",{contentName:M,titleName:F,docsSlug:"dialog"}),j=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:l,onOpenChange:u,modal:a=!0}=e,s=(0,o.useRef)(null),d=(0,o.useRef)(null),[f=!1,v]=(0,c.T)({prop:r,defaultProp:l,onChange:u});return(0,o.createElement)(C,{scope:t,triggerRef:s,contentRef:d,contentId:(0,i.M)(),titleId:(0,i.M)(),descriptionId:(0,i.M)(),open:f,onOpenChange:v,onOpenToggle:(0,o.useCallback)(()=>v(e=>!e),[v]),modal:a},n)},$=D,z=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:l}=e,u=R(k,t);return(0,o.createElement)(S,{scope:t,forceMount:n},o.Children.map(r,e=>(0,o.createElement)(v.z,{present:n||u.open},(0,o.createElement)(f.h,{asChild:!0,container:l},e))))},B=P,q=N,Y=T,X=Z,H=W},10211:function(e,t,n){"use strict";n.d(t,{f:function(){return a}});var r=n(40431),o=n(86006),l=n(76899);let u=(0,o.forwardRef)((e,t)=>(0,o.createElement)(l.WV.label,(0,r.Z)({},e,{ref:t,onMouseDown:t=>{var n;null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}}))),a=u},28373:function(e,t,n){"use strict";let r,o;n.d(t,{mY:function(){return e0}});var l=n(40431),u=n(86006),a=n.t(u,2);function i(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}function c(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function s(...e){return(0,u.useCallback)(c(...e),e)}let d=(null==globalThis?void 0:globalThis.document)?u.useLayoutEffect:()=>{},f=a["useId".toString()]||(()=>void 0),v=0;function m(e){let[t,n]=u.useState(f());return d(()=>{e||n(e=>null!=e?e:String(v++))},[e]),e||(t?`radix-${t}`:"")}function p(e){let t=(0,u.useRef)(e);return(0,u.useEffect)(()=>{t.current=e}),(0,u.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}var h=n(8431);let E=(0,u.forwardRef)((e,t)=>{let{children:n,...r}=e,o=u.Children.toArray(n),a=o.find(y);if(a){let e=a.props.children,n=o.map(t=>t!==a?t:u.Children.count(e)>1?u.Children.only(null):(0,u.isValidElement)(e)?e.props.children:null);return(0,u.createElement)(g,(0,l.Z)({},r,{ref:t}),(0,u.isValidElement)(e)?(0,u.cloneElement)(e,void 0,n):null)}return(0,u.createElement)(g,(0,l.Z)({},r,{ref:t}),n)});E.displayName="Slot";let g=(0,u.forwardRef)((e,t)=>{let{children:n,...r}=e;return(0,u.isValidElement)(n)?(0,u.cloneElement)(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],l=t[r],u=/^on[A-Z]/.test(r);u?n[r]=(...e)=>{null==l||l(...e),null==o||o(...e)}:"style"===r?n[r]={...o,...l}:"className"===r&&(n[r]=[o,l].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:c(t,n.ref)}):u.Children.count(n)>1?u.Children.only(null):null});g.displayName="SlotClone";let b=({children:e})=>(0,u.createElement)(u.Fragment,null,e);function y(e){return(0,u.isValidElement)(e)&&e.type===b}let w=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,u.forwardRef)((e,n)=>{let{asChild:r,...o}=e,a=r?E:t;return(0,u.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,u.createElement)(a,(0,l.Z)({},o,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),C="dismissableLayer.update",R=(0,u.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),D=(0,u.forwardRef)((e,t)=>{let{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:o,onPointerDownOutside:a,onFocusOutside:c,onInteractOutside:d,onDismiss:f,...v}=e,m=(0,u.useContext)(R),[h,E]=(0,u.useState)(null),[,g]=(0,u.useState)({}),b=s(t,e=>E(e)),y=Array.from(m.layers),[D]=[...m.layersWithOutsidePointerEventsDisabled].slice(-1),O=y.indexOf(D),_=h?y.indexOf(h):-1,P=m.layersWithOutsidePointerEventsDisabled.size>0,I=_>=O,M=function(e){let t=p(e),n=(0,u.useRef)(!1),r=(0,u.useRef)(()=>{});return(0,u.useEffect)(()=>{let e=e=>{if(e.target&&!n.current){let n={originalEvent:e};function o(){S("dismissableLayer.pointerDownOutside",t,n,{discrete:!0})}"touch"===e.pointerType?(document.removeEventListener("click",r.current),r.current=o,document.addEventListener("click",r.current,{once:!0})):o()}n.current=!1},o=window.setTimeout(()=>{document.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(o),document.removeEventListener("pointerdown",e),document.removeEventListener("click",r.current)}},[t]),{onPointerDownCapture:()=>n.current=!0}}(e=>{let t=e.target,n=[...m.branches].some(e=>e.contains(t));!I||n||(null==a||a(e),null==d||d(e),e.defaultPrevented||null==f||f())}),N=function(e){let t=p(e),n=(0,u.useRef)(!1);return(0,u.useEffect)(()=>{let e=e=>{e.target&&!n.current&&S("dismissableLayer.focusOutside",t,{originalEvent:e},{discrete:!1})};return document.addEventListener("focusin",e),()=>document.removeEventListener("focusin",e)},[t]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}(e=>{let t=e.target,n=[...m.branches].some(e=>e.contains(t));n||(null==c||c(e),null==d||d(e),e.defaultPrevented||null==f||f())});return!function(e){let t=p(e);(0,u.useEffect)(()=>{let e=e=>{"Escape"===e.key&&t(e)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[t])}(e=>{let t=_===m.layers.size-1;t&&(null==o||o(e),!e.defaultPrevented&&f&&(e.preventDefault(),f()))}),(0,u.useEffect)(()=>{if(h)return n&&(0===m.layersWithOutsidePointerEventsDisabled.size&&(r=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),m.layersWithOutsidePointerEventsDisabled.add(h)),m.layers.add(h),k(),()=>{n&&1===m.layersWithOutsidePointerEventsDisabled.size&&(document.body.style.pointerEvents=r)}},[h,n,m]),(0,u.useEffect)(()=>()=>{h&&(m.layers.delete(h),m.layersWithOutsidePointerEventsDisabled.delete(h),k())},[h,m]),(0,u.useEffect)(()=>{let e=()=>g({});return document.addEventListener(C,e),()=>document.removeEventListener(C,e)},[]),(0,u.createElement)(w.div,(0,l.Z)({},v,{ref:b,style:{pointerEvents:P?I?"auto":"none":void 0,...e.style},onFocusCapture:i(e.onFocusCapture,N.onFocusCapture),onBlurCapture:i(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:i(e.onPointerDownCapture,M.onPointerDownCapture)}))});function k(){let e=new CustomEvent(C);document.dispatchEvent(e)}function S(e,t,n,{discrete:r}){let o=n.originalEvent.target,l=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});(t&&o.addEventListener(e,t,{once:!0}),r)?o&&(0,h.flushSync)(()=>o.dispatchEvent(l)):o.dispatchEvent(l)}let O="focusScope.autoFocusOnMount",_="focusScope.autoFocusOnUnmount",P={bubbles:!1,cancelable:!0},I=(0,u.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...i}=e,[c,d]=(0,u.useState)(null),f=p(o),v=p(a),m=(0,u.useRef)(null),h=s(t,e=>d(e)),E=(0,u.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,u.useEffect)(()=>{if(r){function e(e){if(E.paused||!c)return;let t=e.target;c.contains(t)?m.current=t:L(m.current,{select:!0})}function t(e){E.paused||!c||c.contains(e.relatedTarget)||L(m.current,{select:!0})}return document.addEventListener("focusin",e),document.addEventListener("focusout",t),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t)}}},[r,c,E.paused]),(0,u.useEffect)(()=>{if(c){A.add(E);let e=document.activeElement,t=c.contains(e);if(!t){let t=new CustomEvent(O,P);c.addEventListener(O,f),c.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(L(r,{select:t}),document.activeElement!==n)return}(M(c).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&L(c))}return()=>{c.removeEventListener(O,f),setTimeout(()=>{let t=new CustomEvent(_,P);c.addEventListener(_,v),c.dispatchEvent(t),t.defaultPrevented||L(null!=e?e:document.body,{select:!0}),c.removeEventListener(_,v),A.remove(E)},0)}}},[c,f,v,E]);let g=(0,u.useCallback)(e=>{if(!n&&!r||E.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,l]=function(e){let t=M(e),n=N(t,e),r=N(t.reverse(),e);return[n,r]}(t),u=r&&l;u?e.shiftKey||o!==l?e.shiftKey&&o===r&&(e.preventDefault(),n&&L(l,{select:!0})):(e.preventDefault(),n&&L(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,E.paused]);return(0,u.createElement)(w.div,(0,l.Z)({tabIndex:-1},i,{ref:h,onKeyDown:g}))});function M(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function N(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function L(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let A=(o=[],{add(e){let t=o[0];e!==t&&(null==t||t.pause()),(o=x(o,e)).unshift(e)},remove(e){var t;null===(t=(o=x(o,e))[0])||void 0===t||t.resume()}});function x(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}let F=(0,u.forwardRef)((e,t)=>{var n;let{container:r=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...o}=e;return r?h.createPortal((0,u.createElement)(w.div,(0,l.Z)({},o,{ref:t})),r):null}),T=e=>{let{present:t,children:n}=e,r=function(e){var t;let[n,r]=(0,u.useState)(),o=(0,u.useRef)({}),l=(0,u.useRef)(e),a=(0,u.useRef)("none"),i=e?"mounted":"unmounted",[c,s]=(t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,u.useReducer)((e,n)=>{let r=t[e][n];return null!=r?r:e},i));return(0,u.useEffect)(()=>{let e=Z(o.current);a.current="mounted"===c?e:"none"},[c]),d(()=>{let t=o.current,n=l.current,r=n!==e;if(r){let r=a.current,o=Z(t);e?s("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?s("UNMOUNT"):n&&r!==o?s("ANIMATION_OUT"):s("UNMOUNT"),l.current=e}},[e,s]),d(()=>{if(n){let e=e=>{let t=Z(o.current),r=t.includes(e.animationName);e.target===n&&r&&(0,h.flushSync)(()=>s("ANIMATION_END"))},t=e=>{e.target===n&&(a.current=Z(o.current))};return n.addEventListener("animationstart",t),n.addEventListener("animationcancel",e),n.addEventListener("animationend",e),()=>{n.removeEventListener("animationstart",t),n.removeEventListener("animationcancel",e),n.removeEventListener("animationend",e)}}s("ANIMATION_END")},[n,s]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:(0,u.useCallback)(e=>{e&&(o.current=getComputedStyle(e)),r(e)},[])}}(t),o="function"==typeof n?n({present:r.isPresent}):u.Children.only(n),l=s(r.ref,o.ref),a="function"==typeof n;return a||r.isPresent?(0,u.cloneElement)(o,{ref:l}):null};function Z(e){return(null==e?void 0:e.animationName)||"none"}T.displayName="Presence";let W=0;function K(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var U=n(78466),V=n(61555),j=n(83940),$=(0,n(37445)._)(),z=function(){},B=u.forwardRef(function(e,t){var n=u.useRef(null),r=u.useState({onScrollCapture:z,onWheelCapture:z,onTouchMoveCapture:z}),o=r[0],l=r[1],a=e.forwardProps,i=e.children,c=e.className,s=e.removeScrollBar,d=e.enabled,f=e.shards,v=e.sideCar,m=e.noIsolation,p=e.inert,h=e.allowPinchZoom,E=e.as,g=void 0===E?"div":E,b=(0,U._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),y=(0,j.q)([n,t]),w=(0,U.pi)((0,U.pi)({},b),o);return u.createElement(u.Fragment,null,d&&u.createElement(v,{sideCar:$,removeScrollBar:s,shards:f,noIsolation:m,inert:p,setCallbacks:l,allowPinchZoom:!!h,lockRef:n}),a?u.cloneElement(u.Children.only(i),(0,U.pi)((0,U.pi)({},w),{ref:y})):u.createElement(g,(0,U.pi)({},w,{className:c,ref:y}),i))});B.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},B.classNames={fullWidth:V.zi,zeroRight:V.pF};var q=n(11503),Y=n(90450),X=n(85481),H=!1;if("undefined"!=typeof window)try{var G=Object.defineProperty({},"passive",{get:function(){return H=!0,!0}});window.addEventListener("test",G,G),window.removeEventListener("test",G,G)}catch(e){H=!1}var J=!!H&&{passive:!1},Q=function(e){var t=window.getComputedStyle(e);return"hidden"!==t.overflowY&&!(t.overflowY===t.overflowX&&"visible"===t.overflowY)},ee=function(e){var t=window.getComputedStyle(e);return"hidden"!==t.overflowX&&!(t.overflowY===t.overflowX&&"visible"===t.overflowX)},et=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),en(e,n)){var r=er(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},en=function(e,t){return"v"===e?Q(t):ee(t)},er=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},eo=function(e,t,n,r,o){var l,u=(l=window.getComputedStyle(t).direction,"h"===e&&"rtl"===l?-1:1),a=u*r,i=n.target,c=t.contains(i),s=!1,d=a>0,f=0,v=0;do{var m=er(e,i),p=m[0],h=m[1]-m[2]-u*p;(p||h)&&en(e,i)&&(f+=h,v+=p),i=i.parentNode}while(!c&&i!==document.body||c&&(t.contains(i)||t===i));return d&&(o&&0===f||!o&&a>f)?s=!0:!d&&(o&&0===v||!o&&-a>v)&&(s=!0),s},el=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},eu=function(e){return[e.deltaX,e.deltaY]},ea=function(e){return e&&"current"in e?e.current:e},ei=0,ec=[],es=(0,q.L)($,function(e){var t=u.useRef([]),n=u.useRef([0,0]),r=u.useRef(),o=u.useState(ei++)[0],l=u.useState(function(){return(0,X.Ws)()})[0],a=u.useRef(e);u.useEffect(function(){a.current=e},[e]),u.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(0,U.ev)([e.lockRef.current],(e.shards||[]).map(ea),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var i=u.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!a.current.allowPinchZoom;var o,l=el(e),u=n.current,i="deltaX"in e?e.deltaX:u[0]-l[0],c="deltaY"in e?e.deltaY:u[1]-l[1],s=e.target,d=Math.abs(i)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=et(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=et(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(i||c)&&(r.current=o),!o)return!0;var v=r.current||o;return eo(v,t,e,"h"===v?i:c,!0)},[]),c=u.useCallback(function(e){if(ec.length&&ec[ec.length-1]===l){var n="deltaY"in e?eu(e):el(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.preventDefault();return}if(!r){var o=(a.current.shards||[]).map(ea).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?i(e,o[0]):!a.current.noIsolation)&&e.preventDefault()}}},[]),s=u.useCallback(function(e,n,r,o){var l={name:e,delta:n,target:r,should:o};t.current.push(l),setTimeout(function(){t.current=t.current.filter(function(e){return e!==l})},1)},[]),d=u.useCallback(function(e){n.current=el(e),r.current=void 0},[]),f=u.useCallback(function(t){s(t.type,eu(t),t.target,i(t,e.lockRef.current))},[]),v=u.useCallback(function(t){s(t.type,el(t),t.target,i(t,e.lockRef.current))},[]);u.useEffect(function(){return ec.push(l),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",c,J),document.addEventListener("touchmove",c,J),document.addEventListener("touchstart",d,J),function(){ec=ec.filter(function(e){return e!==l}),document.removeEventListener("wheel",c,J),document.removeEventListener("touchmove",c,J),document.removeEventListener("touchstart",d,J)}},[]);var m=e.removeScrollBar,p=e.inert;return u.createElement(u.Fragment,null,p?u.createElement(l,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,m?u.createElement(Y.jp,{gapMode:"margin"}):null)}),ed=u.forwardRef(function(e,t){return u.createElement(B,(0,U.pi)({},e,{ref:t,sideCar:es}))});ed.classNames=B.classNames;var ef=n(472);let ev="Dialog",[em,ep]=function(e,t=[]){let n=[],r=()=>{let t=n.map(e=>(0,u.createContext)(e));return function(n){let r=(null==n?void 0:n[e])||t;return(0,u.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let o=(0,u.createContext)(r),l=n.length;function a(t){let{scope:n,children:r,...a}=t,i=(null==n?void 0:n[e][l])||o,c=(0,u.useMemo)(()=>a,Object.values(a));return(0,u.createElement)(i.Provider,{value:c},r)}return n=[...n,r],a.displayName=t+"Provider",[a,function(n,a){let i=(null==a?void 0:a[e][l])||o,c=(0,u.useContext)(i);if(c)return c;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e),l=o[`__scope${r}`];return{...t,...l}},{});return(0,u.useMemo)(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}(ev),[eh,eE]=em(ev),eg="DialogPortal",[eb,ey]=em(eg,{forceMount:void 0}),ew="DialogOverlay",eC=(0,u.forwardRef)((e,t)=>{let n=ey(ew,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=eE(ew,e.__scopeDialog);return a.modal?(0,u.createElement)(T,{present:r||a.open},(0,u.createElement)(eR,(0,l.Z)({},o,{ref:t}))):null}),eR=(0,u.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=eE(ew,n);return(0,u.createElement)(ed,{as:E,allowPinchZoom:!0,shards:[o.contentRef]},(0,u.createElement)(w.div,(0,l.Z)({"data-state":eP(o.open)},r,{ref:t,style:{pointerEvents:"auto",...r.style}})))}),eD="DialogContent",ek=(0,u.forwardRef)((e,t)=>{let n=ey(eD,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=eE(eD,e.__scopeDialog);return(0,u.createElement)(T,{present:r||a.open},a.modal?(0,u.createElement)(eS,(0,l.Z)({},o,{ref:t})):(0,u.createElement)(eO,(0,l.Z)({},o,{ref:t})))}),eS=(0,u.forwardRef)((e,t)=>{let n=eE(eD,e.__scopeDialog),r=(0,u.useRef)(null),o=s(t,n.contentRef,r);return(0,u.useEffect)(()=>{let e=r.current;if(e)return(0,ef.Ry)(e)},[]),(0,u.createElement)(e_,(0,l.Z)({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:i(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:i(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;r&&e.preventDefault()}),onFocusOutside:i(e.onFocusOutside,e=>e.preventDefault())}))}),eO=(0,u.forwardRef)((e,t)=>{let n=eE(eD,e.__scopeDialog),r=(0,u.useRef)(!1);return(0,u.createElement)(e_,(0,l.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,l;null===(o=e.onCloseAutoFocus)||void 0===o||o.call(e,t),t.defaultPrevented||(r.current||null===(l=n.triggerRef.current)||void 0===l||l.focus(),t.preventDefault()),r.current=!1},onInteractOutside:t=>{var o,l;null===(o=e.onInteractOutside)||void 0===o||o.call(e,t),t.defaultPrevented||(r.current=!0);let u=t.target,a=null===(l=n.triggerRef.current)||void 0===l?void 0:l.contains(u);a&&t.preventDefault()}}))}),e_=(0,u.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...i}=e,c=eE(eD,n),d=(0,u.useRef)(null),f=s(t,d);return(0,u.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:K()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:K()),W++,()=>{1===W&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),W--}},[]),(0,u.createElement)(u.Fragment,null,(0,u.createElement)(I,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a},(0,u.createElement)(D,(0,l.Z)({role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":eP(c.open)},i,{ref:f,onDismiss:()=>c.onOpenChange(!1)}))),!1)});function eP(e){return e?"open":"closed"}let[eI,eM]=function(e,t){let n=(0,u.createContext)(t);function r(e){let{children:t,...r}=e,o=(0,u.useMemo)(()=>r,Object.values(r));return(0,u.createElement)(n.Provider,{value:o},t)}return r.displayName=e+"Provider",[r,function(r){let o=(0,u.useContext)(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${r}\` must be used within \`${e}\``)}]}("DialogTitleWarning",{contentName:eD,titleName:"DialogTitle",docsSlug:"dialog"}),eN=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:l,modal:a=!0}=e,i=(0,u.useRef)(null),c=(0,u.useRef)(null),[s=!1,d]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,o]=function({defaultProp:e,onChange:t}){let n=(0,u.useState)(e),[r]=n,o=(0,u.useRef)(r),l=p(t);return(0,u.useEffect)(()=>{o.current!==r&&(l(r),o.current=r)},[r,o,l]),n}({defaultProp:t,onChange:n}),l=void 0!==e,a=l?e:r,i=p(n),c=(0,u.useCallback)(t=>{if(l){let n="function"==typeof t?t(e):t;n!==e&&i(n)}else o(t)},[l,e,o,i]);return[a,c]}({prop:r,defaultProp:o,onChange:l});return(0,u.createElement)(eh,{scope:t,triggerRef:i,contentRef:c,contentId:m(),titleId:m(),descriptionId:m(),open:s,onOpenChange:d,onOpenToggle:(0,u.useCallback)(()=>d(e=>!e),[d]),modal:a},n)},eL=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,l=eE(eg,t);return(0,u.createElement)(eb,{scope:t,forceMount:n},u.Children.map(r,e=>(0,u.createElement)(T,{present:n||l.open},(0,u.createElement)(F,{asChild:!0,container:o},e))))};var eA=n(64104),ex='[cmdk-group=""]',eF='[cmdk-group-items=""]',eT='[cmdk-item=""]',eZ=`${eT}:not([aria-disabled="true"])`,eW="cmdk-item-select",eK="data-value",eU=(e,t)=>eA(e,t),eV=u.createContext(void 0),ej=()=>u.useContext(eV),e$=u.createContext(void 0),ez=()=>u.useContext(e$),eB=u.createContext(void 0),eq=u.forwardRef((e,t)=>{let n=u.useRef(null),r=e9(()=>({search:"",value:"",filtered:{count:0,items:new Map,groups:new Set}})),o=e9(()=>new Set),l=e9(()=>new Map),a=e9(()=>new Map),i=e9(()=>new Set),c=e1(e),{label:s,children:d,value:f,onValueChange:v,filter:m,shouldFilter:p,...h}=e,E=u.useId(),g=u.useId(),b=u.useId(),y=e2();e8(()=>{if(void 0!==f){let e=f.trim().toLowerCase();r.current.value=e,y(6,O),w.emit()}},[f]);let w=u.useMemo(()=>({subscribe:e=>(i.current.add(e),()=>i.current.delete(e)),snapshot:()=>r.current,setState:(e,t,n)=>{var o,l,u;if(!Object.is(r.current[e],t)){if(r.current[e]=t,"search"===e)S(),D(),y(1,k);else if("value"===e){if((null==(o=c.current)?void 0:o.value)!==void 0){null==(u=(l=c.current).onValueChange)||u.call(l,t);return}n||y(5,O)}w.emit()}},emit:()=>{i.current.forEach(e=>e())}}),[]),C=u.useMemo(()=>({value:(e,t)=>{t!==a.current.get(e)&&(a.current.set(e,t),r.current.filtered.items.set(e,R(t)),y(2,()=>{D(),w.emit()}))},item:(e,t)=>(o.current.add(e),t&&(l.current.has(t)?l.current.get(t).add(e):l.current.set(t,new Set([e]))),y(3,()=>{S(),D(),r.current.value||k(),w.emit()}),()=>{a.current.delete(e),o.current.delete(e),r.current.filtered.items.delete(e),y(4,()=>{S(),k(),w.emit()})}),group:e=>(l.current.has(e)||l.current.set(e,new Set),()=>{a.current.delete(e),l.current.delete(e)}),filter:()=>c.current.shouldFilter,label:s||e["aria-label"],listId:E,inputId:b,labelId:g}),[]);function R(e){var t;let n=(null==(t=c.current)?void 0:t.filter)??eU;return e?n(e,r.current.search):0}function D(){if(!n.current||!r.current.search||!1===c.current.shouldFilter)return;let e=r.current.filtered.items,t=[];r.current.filtered.groups.forEach(n=>{let r=l.current.get(n),o=0;r.forEach(t=>{o=Math.max(e.get(t),o)}),t.push([n,o])});let o=n.current.querySelector('[cmdk-list-sizer=""]');P().sort((t,n)=>{let r=t.getAttribute(eK),o=n.getAttribute(eK);return(e.get(o)??0)-(e.get(r)??0)}).forEach(e=>{let t=e.closest(eF);t?t.appendChild(e.parentElement===t?e:e.closest(`${eF} > *`)):o.appendChild(e.parentElement===o?e:e.closest(`${eF} > *`))}),t.sort((e,t)=>t[1]-e[1]).forEach(e=>{let t=n.current.querySelector(`${ex}[${eK}="${e[0]}"]`);null==t||t.parentElement.appendChild(t)})}function k(){let e=P().find(e=>!e.ariaDisabled),t=null==e?void 0:e.getAttribute(eK);w.setState("value",t||void 0)}function S(){if(!r.current.search||!1===c.current.shouldFilter){r.current.filtered.count=o.current.size;return}r.current.filtered.groups=new Set;let e=0;for(let t of o.current){let n=R(a.current.get(t));r.current.filtered.items.set(t,n),n>0&&e++}for(let[e,t]of l.current)for(let n of t)if(r.current.filtered.items.get(n)>0){r.current.filtered.groups.add(e);break}r.current.filtered.count=e}function O(){var e,t,n;let r=_();r&&((null==(e=r.parentElement)?void 0:e.firstChild)===r&&(null==(n=null==(t=r.closest(ex))?void 0:t.querySelector('[cmdk-group-heading=""]'))||n.scrollIntoView({block:"nearest"})),r.scrollIntoView({block:"nearest"}))}function _(){return n.current.querySelector(`${eT}[aria-selected="true"]`)}function P(){return Array.from(n.current.querySelectorAll(eZ))}function I(e){let t=P()[e];t&&w.setState("value",t.getAttribute(eK))}function M(e){var t;let n=_(),r=P(),o=r.findIndex(e=>e===n),l=r[o+e];null!=(t=c.current)&&t.loop&&(l=o+e<0?r[r.length-1]:o+e===r.length?r[0]:r[o+e]),l&&w.setState("value",l.getAttribute(eK))}function N(e){let t=_(),n=null==t?void 0:t.closest(ex),r;for(;n&&!r;)r=null==(n=e>0?function(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return n;n=n.nextElementSibling}}(n,ex):function(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return n;n=n.previousElementSibling}}(n,ex))?void 0:n.querySelector(eZ);r?w.setState("value",r.getAttribute(eK)):M(e)}let L=()=>I(P().length-1),A=e=>{e.preventDefault(),e.metaKey?L():e.altKey?N(1):M(1)},x=e=>{e.preventDefault(),e.metaKey?I(0):e.altKey?N(-1):M(-1)};return u.createElement("div",{ref:e4([n,t]),...h,"cmdk-root":"",onKeyDown:e=>{var t;if(null==(t=h.onKeyDown)||t.call(h,e),!e.defaultPrevented)switch(e.key){case"n":case"j":e.ctrlKey&&A(e);break;case"ArrowDown":A(e);break;case"p":case"k":e.ctrlKey&&x(e);break;case"ArrowUp":x(e);break;case"Home":e.preventDefault(),I(0);break;case"End":e.preventDefault(),L();break;case"Enter":{e.preventDefault();let t=_();if(t){let e=new Event(eW);t.dispatchEvent(e)}}}}},u.createElement("label",{"cmdk-label":"",htmlFor:C.inputId,id:C.labelId,style:e7},s),u.createElement(e$.Provider,{value:w},u.createElement(eV.Provider,{value:C},d)))}),eY=u.forwardRef((e,t)=>{let n=u.useId(),r=u.useRef(null),o=u.useContext(eB),l=ej(),a=e1(e);e8(()=>l.item(n,o),[]);let i=e5(n,r,[e.value,e.children,r]),c=ez(),s=e6(e=>e.value&&e.value===i.current),d=e6(e=>!1===l.filter()||!e.search||e.filtered.items.get(n)>0);function f(){var e,t;null==(t=(e=a.current).onSelect)||t.call(e,i.current)}if(u.useEffect(()=>{let t=r.current;if(!(!t||e.disabled))return t.addEventListener(eW,f),()=>t.removeEventListener(eW,f)},[d,e.onSelect,e.disabled]),!d)return null;let{disabled:v,value:m,onSelect:p,...h}=e;return u.createElement("div",{ref:e4([r,t]),...h,"cmdk-item":"",role:"option","aria-disabled":v||void 0,"aria-selected":s||void 0,"data-selected":s||void 0,onPointerMove:v?void 0:function(){c.setState("value",i.current,!0)},onClick:v?void 0:f},e.children)}),eX=u.forwardRef((e,t)=>{let{heading:n,children:r,...o}=e,l=u.useId(),a=u.useRef(null),i=u.useRef(null),c=u.useId(),s=ej(),d=e6(e=>!1===s.filter()||!e.search||e.filtered.groups.has(l));e8(()=>s.group(l),[]),e5(l,a,[e.value,e.heading,i]);let f=u.createElement(eB.Provider,{value:l},r);return u.createElement("div",{ref:e4([a,t]),...o,"cmdk-group":"",role:"presentation",hidden:!d||void 0},n&&u.createElement("div",{ref:i,"cmdk-group-heading":"","aria-hidden":!0,id:c},n),u.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":n?c:void 0},f))}),eH=u.forwardRef((e,t)=>{let{alwaysRender:n,...r}=e,o=u.useRef(null),l=e6(e=>!e.search);return n||l?u.createElement("div",{ref:e4([o,t]),...r,"cmdk-separator":"",role:"separator"}):null}),eG=u.forwardRef((e,t)=>{let{onValueChange:n,...r}=e,o=null!=e.value,l=ez(),a=e6(e=>e.search),i=ej();return u.useEffect(()=>{null!=e.value&&l.setState("search",e.value)},[e.value]),u.createElement("input",{ref:t,...r,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":i.listId,"aria-labelledby":i.labelId,id:i.inputId,type:"text",value:o?e.value:a,onChange:e=>{o||l.setState("search",e.target.value),null==n||n(e.target.value)}})}),eJ=u.forwardRef((e,t)=>{let{children:n,...r}=e,o=u.useRef(null),l=u.useRef(null),a=ej();return u.useEffect(()=>{if(l.current&&o.current){let e=l.current,t=o.current,n,r=new ResizeObserver(()=>{n=requestAnimationFrame(()=>{let n=e.getBoundingClientRect().height;t.style.setProperty("--cmdk-list-height",n.toFixed(1)+"px")})});return r.observe(e),()=>{cancelAnimationFrame(n),r.unobserve(e)}}},[]),u.createElement("div",{ref:e4([o,t]),...r,"cmdk-list":"",role:"listbox","aria-label":"Suggestions",id:a.listId,"aria-labelledby":a.inputId},u.createElement("div",{ref:l,"cmdk-list-sizer":""},n))}),eQ=u.forwardRef((e,t)=>{let{open:n,onOpenChange:r,container:o,...l}=e;return u.createElement(eN,{open:n,onOpenChange:r},u.createElement(eL,{container:o},u.createElement(eC,{"cmdk-overlay":""}),u.createElement(ek,{"aria-label":e.label,"cmdk-dialog":""},u.createElement(eq,{ref:t,...l}))))}),e0=Object.assign(eq,{List:eJ,Item:eY,Input:eG,Group:eX,Separator:eH,Dialog:eQ,Empty:u.forwardRef((e,t)=>{let n=u.useRef(!0),r=e6(e=>0===e.filtered.count);return u.useEffect(()=>{n.current=!1},[]),n.current||!r?null:u.createElement("div",{ref:t,...e,"cmdk-empty":"",role:"presentation"})}),Loading:u.forwardRef((e,t)=>{let{progress:n,children:r,...o}=e;return u.createElement("div",{ref:t,...o,"cmdk-loading":"",role:"progressbar","aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Loading..."},u.createElement("div",{"aria-hidden":!0},r))})});function e1(e){let t=u.useRef(e);return e8(()=>{t.current=e}),t}var e8=typeof window>"u"?u.useEffect:u.useLayoutEffect;function e9(e){let t=u.useRef();return void 0===t.current&&(t.current=e()),t}function e4(e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}}function e6(e){let t=ez(),n=()=>e(t.snapshot());return u.useSyncExternalStore(t.subscribe,n,n)}function e5(e,t,n){let r=u.useRef(),o=ej();return e8(()=>{var l;let u=(()=>{var e;for(let t of n){if("string"==typeof t)return t.trim().toLowerCase();if("object"==typeof t&&"current"in t&&t.current)return null==(e=t.current.textContent)?void 0:e.trim().toLowerCase()}})();o.value(e,u),null==(l=t.current)||l.setAttribute(eK,u),r.current=u}),r}var e2=()=>{let[e,t]=u.useState(),n=e9(()=>new Map);return e8(()=>{n.current.forEach(e=>e()),n.current=new Map},[e]),(e,r)=>{n.current.set(e,r),t({})}},e7={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"}}}]);