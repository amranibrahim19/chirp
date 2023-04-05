import{b as m,r as u,c as ze,e as le,a as w,j as k,_ as Je}from"./app-2536e631.js";import{I as Ke}from"./InputError-04415f7a.js";import{I as Qe}from"./InputLabel-1495a04f.js";import{l as K,s as _,a as I,u as O,b as de,L as x,D as S,o as $,y as T,p as Ze,c as Q,f as xe,T as et,d as tt,j as we,C as nt,e as q,t as te}from"./transition-629e6ec5.js";import{T as rt}from"./TextInput-d9ac2dc5.js";var Ee;let H=(Ee=m.useId)!=null?Ee:function(){let e=K(),[t,n]=m.useState(e?()=>_.nextId():null);return I(()=>{t===null&&n(_.nextId())},[t]),t!=null?""+t:void 0};function Se(e){return _.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let ae=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var A=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(A||{}),Pe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Pe||{}),ot=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(ot||{});function lt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ae)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Te=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Te||{});function at(e,t=0){var n;return e===((n=Se(e))==null?void 0:n.body)?!1:O(t,{[0](){return e.matches(ae)},[1](){let r=e;for(;r!==null;){if(r.matches(ae))return!0;r=r.parentElement}return!1}})}function C(e){e==null||e.focus({preventScroll:!0})}let it=["textarea","input"].join(",");function ut(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,it))!=null?n:!1}function st(e,t=n=>n){return e.slice().sort((n,r)=>{let l=t(n),a=t(r);if(l===null||a===null)return 0;let o=l.compareDocumentPosition(a);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function X(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?n?st(e):e:lt(e);l.length>0&&o.length>1&&(o=o.filter(E=>!l.includes(E))),r=r??a.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(r))-1;if(t&4)return Math.max(0,o.indexOf(r))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,f=o.length,p;do{if(c>=f||c+f<=0)return 0;let E=s+c;if(t&16)E=(E+f)%f;else{if(E<0)return 3;if(E>=f)return 1}p=o[E],p==null||p.focus(d),c+=i}while(p!==a.activeElement);return t&6&&ut(p)&&p.select(),p.hasAttribute("tabindex")||p.setAttribute("tabindex","0"),2}function ne(e,t,n){let r=de(t);u.useEffect(()=>{function l(a){r.current(a)}return document.addEventListener(e,l,n),()=>document.removeEventListener(e,l,n)},[e,n])}function ct(e,t,n=!0){let r=u.useRef(!1);u.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function l(o,i){if(!r.current||o.defaultPrevented)return;let s=function c(f){return typeof f=="function"?c(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e),d=i(o);if(d!==null&&d.getRootNode().contains(d)){for(let c of s){if(c===null)continue;let f=c instanceof HTMLElement?c:c.current;if(f!=null&&f.contains(d)||o.composed&&o.composedPath().includes(f))return}return!at(d,Te.Loose)&&d.tabIndex!==-1&&o.preventDefault(),t(o,d)}}let a=u.useRef(null);ne("mousedown",o=>{var i,s;r.current&&(a.current=((s=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:s[0])||o.target)},!0),ne("click",o=>{a.current&&(l(o,()=>a.current),a.current=null)},!0),ne("blur",o=>l(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function dt(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&ft(n)?!1:r}function ft(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let pt="div";var z=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(z||{});function mt(e,t){let{features:n=1,...r}=e,l={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return S({ourProps:l,theirProps:r,slot:{},defaultTag:pt,name:"Hidden"})}let ie=x(mt);var De=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(De||{});function fe(e,t){let n=u.useRef([]),r=$(e);u.useEffect(()=>{let l=[...n.current];for(let[a,o]of t.entries())if(n.current[a]!==o){let i=r(t,l);return n.current=t,i}},[r,...t])}function gt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function ht(e,t,n){let r=de(t);u.useEffect(()=>{function l(a){r.current(a)}return window.addEventListener(e,l,n),()=>window.removeEventListener(e,l,n)},[e,n])}var j=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(j||{});function vt(){let e=u.useRef(0);return ht("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Z(...e){return u.useMemo(()=>Se(...e),[...e])}function Le(e,t,n,r){let l=de(n);u.useEffect(()=>{e=e??window;function a(o){l.current(o)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}function Fe(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let wt="div";var Ae=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ae||{});function Et(e,t){let n=u.useRef(null),r=T(n,t),{initialFocus:l,containers:a,features:o=30,...i}=e;K()||(o=1);let s=Z(n);$t({ownerDocument:s},!!(o&16));let d=xt({ownerDocument:s,container:n,initialFocus:l},!!(o&2));St({ownerDocument:s,container:n,containers:a,previousActiveElement:d},!!(o&8));let c=vt(),f=$(h=>{let P=n.current;P&&(L=>L())(()=>{O(c.current,{[j.Forwards]:()=>{X(P,A.First,{skipElements:[h.relatedTarget]})},[j.Backwards]:()=>{X(P,A.Last,{skipElements:[h.relatedTarget]})}})})}),p=Ze(),E=u.useRef(!1),D={ref:r,onKeyDown(h){h.key=="Tab"&&(E.current=!0,p.requestAnimationFrame(()=>{E.current=!1}))},onBlur(h){let P=Fe(a);n.current instanceof HTMLElement&&P.add(n.current);let L=h.relatedTarget;L instanceof HTMLElement&&L.dataset.headlessuiFocusGuard!=="true"&&(Ne(P,L)||(E.current?X(n.current,O(c.current,{[j.Forwards]:()=>A.Next,[j.Backwards]:()=>A.Previous})|A.WrapAround,{relativeTo:h.target}):h.target instanceof HTMLElement&&C(h.target)))}};return m.createElement(m.Fragment,null,!!(o&4)&&m.createElement(ie,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:z.Focusable}),S({ourProps:D,theirProps:i,defaultTag:wt,name:"FocusTrap"}),!!(o&4)&&m.createElement(ie,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:z.Focusable}))}let yt=x(Et),B=Object.assign(yt,{features:Ae}),F=[];if(typeof window<"u"&&typeof document<"u"){let e=function(t){t.target instanceof HTMLElement&&t.target!==document.body&&F[0]!==t.target&&(F.unshift(t.target),F=F.filter(n=>n!=null&&n.isConnected),F.splice(10))};window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})}function bt(e=!0){let t=u.useRef(F.slice());return fe(([n],[r])=>{r===!0&&n===!1&&Q(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=F.slice())},[e,F,t]),$(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function $t({ownerDocument:e},t){let n=bt(t);fe(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&C(n())},[t]);let r=u.useRef(!1);u.useEffect(()=>(r.current=!1,()=>{r.current=!0,Q(()=>{r.current&&C(n())})}),[])}function xt({ownerDocument:e,container:t,initialFocus:n},r){let l=u.useRef(null),a=xe();return fe(()=>{if(!r)return;let o=t.current;o&&Q(()=>{if(!a.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){l.current=i;return}}else if(o.contains(i)){l.current=i;return}n!=null&&n.current?C(n.current):X(o,A.First)===Pe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.current=e==null?void 0:e.activeElement})},[r]),l}function St({ownerDocument:e,container:t,containers:n,previousActiveElement:r},l){let a=xe();Le(e==null?void 0:e.defaultView,"focus",o=>{if(!l||!a.current)return;let i=Fe(n);t.current instanceof HTMLElement&&i.add(t.current);let s=r.current;if(!s)return;let d=o.target;d&&d instanceof HTMLElement?Ne(i,d)?(r.current=d,C(d)):(o.preventDefault(),o.stopPropagation(),C(s)):C(r.current)},!0)}function Ne(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Ce=u.createContext(!1);function Pt(){return u.useContext(Ce)}function ue(e){return m.createElement(Ce.Provider,{value:e.force},e.children)}function Tt(e){let t=Pt(),n=u.useContext(Re),r=Z(e),[l,a]=u.useState(()=>{if(!t&&n!==null||_.isServer)return null;let o=r==null?void 0:r.getElementById("headlessui-portal-root");if(o)return o;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return u.useEffect(()=>{l!==null&&(r!=null&&r.body.contains(l)||r==null||r.body.appendChild(l))},[l,r]),u.useEffect(()=>{t||n!==null&&a(n.current)},[n,a,t]),l}let Dt=u.Fragment;function Lt(e,t){let n=e,r=u.useRef(null),l=T(et(c=>{r.current=c}),t),a=Z(r),o=Tt(r),[i]=u.useState(()=>{var c;return _.isServer?null:(c=a==null?void 0:a.createElement("div"))!=null?c:null}),s=K(),d=u.useRef(!1);return I(()=>{if(d.current=!1,!(!o||!i))return o.contains(i)||(i.setAttribute("data-headlessui-portal",""),o.appendChild(i)),()=>{d.current=!0,Q(()=>{var c;d.current&&(!o||!i||(i instanceof Node&&o.contains(i)&&o.removeChild(i),o.childNodes.length<=0&&((c=o.parentElement)==null||c.removeChild(o))))})}},[o,i]),s?!o||!i?null:ze.createPortal(S({ourProps:{ref:l},theirProps:n,defaultTag:Dt,name:"Portal"}),i):null}let Ft=u.Fragment,Re=u.createContext(null);function At(e,t){let{target:n,...r}=e,l={ref:T(t)};return m.createElement(Re.Provider,{value:n},S({ourProps:l,theirProps:r,defaultTag:Ft,name:"Popover.Group"}))}let Nt=x(Lt),Ct=x(At),se=Object.assign(Nt,{Group:Ct}),Me=u.createContext(null);function ke(){let e=u.useContext(Me);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,ke),t}return e}function Rt(){let[e,t]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(n){let r=$(a=>(t(o=>[...o,a]),()=>t(o=>{let i=o.slice(),s=i.indexOf(a);return s!==-1&&i.splice(s,1),i}))),l=u.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return m.createElement(Me.Provider,{value:l},n.children)},[t])]}let Mt="p";function kt(e,t){let n=H(),{id:r=`headlessui-description-${n}`,...l}=e,a=ke(),o=T(t);I(()=>a.register(r),[r,a.register]);let i={ref:o,...a.props,id:r};return S({ourProps:i,theirProps:l,slot:a.slot||{},defaultTag:Mt,name:a.name||"Description"})}let Ot=x(kt),It=Object.assign(Ot,{}),pe=u.createContext(()=>{});pe.displayName="StackContext";var ce=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ce||{});function Ht(){return u.useContext(pe)}function Bt({children:e,onUpdate:t,type:n,element:r,enabled:l}){let a=Ht(),o=$((...i)=>{t==null||t(...i),a(...i)});return I(()=>{let i=l===void 0||l===!0;return i&&o(0,n,r),()=>{i&&o(1,n,r)}},[o,n,r,l]),m.createElement(pe.Provider,{value:o},e)}function Ut(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const jt=typeof Object.is=="function"?Object.is:Ut,{useState:_t,useEffect:Wt,useLayoutEffect:Yt,useDebugValue:Gt}=le;function Vt(e,t,n){const r=t(),[{inst:l},a]=_t({inst:{value:r,getSnapshot:t}});return Yt(()=>{l.value=r,l.getSnapshot=t,re(l)&&a({inst:l})},[e,r,t]),Wt(()=>(re(l)&&a({inst:l}),e(()=>{re(l)&&a({inst:l})})),[e]),Gt(r),r}function re(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!jt(n,r)}catch{return!0}}function qt(e,t,n){return t()}const Xt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zt=!Xt,Jt=zt?qt:Vt,Kt="useSyncExternalStore"in le?(e=>e.useSyncExternalStore)(le):Jt;function Qt(e){return Kt(e.subscribe,e.getSnapshot,e.getSnapshot)}function Zt(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...a){let o=t[l].call(n,...a);o&&(n=o,r.forEach(i=>i()))}}}function en(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,l=r.clientWidth-r.offsetWidth,a=e-l;n.style(r,"paddingRight",`${a}px`)}}}function tn(){if(!gt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function l(o){return r.containers.flatMap(i=>i()).some(i=>i.contains(o))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let a=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let i=o.target.closest("a");if(!i)return;let{hash:s}=new URL(i.href),d=t.querySelector(s);d&&!l(d)&&(a=d)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!l(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})}}}function nn(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function rn(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let N=Zt(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:tt(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:rn(n)},l=[tn(),en(),nn()];l.forEach(({before:a})=>a==null?void 0:a(r)),l.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});N.subscribe(()=>{let e=N.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&N.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&N.dispatch("TEARDOWN",n)}});function on(e,t,n){let r=Qt(N),l=e?r.get(e):void 0,a=l?l.count>0:!1;return I(()=>{if(!(!e||!t))return N.dispatch("PUSH",e,n),()=>N.dispatch("POP",e,n)},[t,e]),a}let oe=new Map,U=new Map;function ye(e,t=!0){I(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function l(){var o;if(!r)return;let i=(o=U.get(r))!=null?o:1;if(i===1?U.delete(r):U.set(r,i-1),i!==1)return;let s=oe.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,oe.delete(r))}let a=(n=U.get(r))!=null?n:0;return U.set(r,a+1),a!==0||(oe.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),l},[e,t])}var ln=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ln||{}),an=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(an||{});let un={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},J=u.createContext(null);J.displayName="DialogContext";function W(e){let t=u.useContext(J);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,W),n}return t}function sn(e,t,n=()=>[document.body]){on(e,t,r=>{var l;return{containers:[...(l=r.containers)!=null?l:[],n]}})}function cn(e,t){return O(t.type,un,e,t)}let dn="div",fn=we.RenderStrategy|we.Static;function pn(e,t){let n=H(),{id:r=`headlessui-dialog-${n}`,open:l,onClose:a,initialFocus:o,__demoMode:i=!1,...s}=e,[d,c]=u.useState(0),f=nt();l===void 0&&f!==null&&(l=(f&q.Open)===q.Open);let p=u.useRef(null),E=T(p,t),D=u.useRef(null),h=Z(p),P=e.hasOwnProperty("open")||f!==null,L=e.hasOwnProperty("onClose");if(!P&&!L)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!P)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!L)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof l!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`);if(typeof a!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let y=l?0:1,[R,Oe]=u.useReducer(cn,{titleId:null,descriptionId:null,panelRef:u.createRef()}),M=$(()=>a(!1)),me=$(g=>Oe({type:0,id:g})),Y=K()?i?!1:y===0:!1,G=d>1,ge=u.useContext(J)!==null,Ie=G?"parent":"leaf",he=f!==null?(f&q.Closing)===q.Closing:!1,He=(()=>ge||he?!1:Y)(),Be=u.useCallback(()=>{var g,b;return(b=Array.from((g=h==null?void 0:h.querySelectorAll("body > *"))!=null?g:[]).find(v=>v.id==="headlessui-portal-root"?!1:v.contains(D.current)&&v instanceof HTMLElement))!=null?b:null},[D]);ye(Be,He);let Ue=(()=>G?!0:Y)(),je=u.useCallback(()=>{var g,b;return(b=Array.from((g=h==null?void 0:h.querySelectorAll("[data-headlessui-portal]"))!=null?g:[]).find(v=>v.contains(D.current)&&v instanceof HTMLElement))!=null?b:null},[D]);ye(je,Ue);let ee=$(()=>{var g,b;return[...Array.from((g=h==null?void 0:h.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?g:[]).filter(v=>!(v===document.body||v===document.head||!(v instanceof HTMLElement)||v.contains(D.current)||R.panelRef.current&&v.contains(R.panelRef.current))),(b=R.panelRef.current)!=null?b:p.current]}),_e=(()=>!(!Y||G))();ct(()=>ee(),M,_e);let We=(()=>!(G||y!==0))();Le(h==null?void 0:h.defaultView,"keydown",g=>{We&&(g.defaultPrevented||g.key===De.Escape&&(g.preventDefault(),g.stopPropagation(),M()))});let Ye=(()=>!(he||y!==0||ge))();sn(h,Ye,ee),u.useEffect(()=>{if(y!==0||!p.current)return;let g=new ResizeObserver(b=>{for(let v of b){let V=v.target.getBoundingClientRect();V.x===0&&V.y===0&&V.width===0&&V.height===0&&M()}});return g.observe(p.current),()=>g.disconnect()},[y,p,M]);let[Ge,Ve]=Rt(),qe=u.useMemo(()=>[{dialogState:y,close:M,setTitleId:me},R],[y,R,M,me]),ve=u.useMemo(()=>({open:y===0}),[y]),Xe={ref:E,id:r,role:"dialog","aria-modal":y===0?!0:void 0,"aria-labelledby":R.titleId,"aria-describedby":Ge};return m.createElement(Bt,{type:"Dialog",enabled:y===0,element:p,onUpdate:$((g,b)=>{b==="Dialog"&&O(g,{[ce.Add]:()=>c(v=>v+1),[ce.Remove]:()=>c(v=>v-1)})})},m.createElement(ue,{force:!0},m.createElement(se,null,m.createElement(J.Provider,{value:qe},m.createElement(se.Group,{target:p},m.createElement(ue,{force:!1},m.createElement(Ve,{slot:ve,name:"Dialog.Description"},m.createElement(B,{initialFocus:o,containers:ee,features:Y?O(Ie,{parent:B.features.RestoreFocus,leaf:B.features.All&~B.features.FocusLock}):B.features.None},S({ourProps:Xe,theirProps:s,slot:ve,defaultTag:dn,features:fn,visible:y===0,name:"Dialog"})))))))),m.createElement(ie,{features:z.Hidden,ref:D}))}let mn="div";function gn(e,t){let n=H(),{id:r=`headlessui-dialog-overlay-${n}`,...l}=e,[{dialogState:a,close:o}]=W("Dialog.Overlay"),i=T(t),s=$(c=>{if(c.target===c.currentTarget){if(dt(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),o()}}),d=u.useMemo(()=>({open:a===0}),[a]);return S({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:s},theirProps:l,slot:d,defaultTag:mn,name:"Dialog.Overlay"})}let hn="div";function vn(e,t){let n=H(),{id:r=`headlessui-dialog-backdrop-${n}`,...l}=e,[{dialogState:a},o]=W("Dialog.Backdrop"),i=T(t);u.useEffect(()=>{if(o.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[o.panelRef]);let s=u.useMemo(()=>({open:a===0}),[a]);return m.createElement(ue,{force:!0},m.createElement(se,null,S({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:l,slot:s,defaultTag:hn,name:"Dialog.Backdrop"})))}let wn="div";function En(e,t){let n=H(),{id:r=`headlessui-dialog-panel-${n}`,...l}=e,[{dialogState:a},o]=W("Dialog.Panel"),i=T(t,o.panelRef),s=u.useMemo(()=>({open:a===0}),[a]),d=$(c=>{c.stopPropagation()});return S({ourProps:{ref:i,id:r,onClick:d},theirProps:l,slot:s,defaultTag:wn,name:"Dialog.Panel"})}let yn="h2";function bn(e,t){let n=H(),{id:r=`headlessui-dialog-title-${n}`,...l}=e,[{dialogState:a,setTitleId:o}]=W("Dialog.Title"),i=T(t);u.useEffect(()=>(o(r),()=>o(null)),[r,o]);let s=u.useMemo(()=>({open:a===0}),[a]);return S({ourProps:{ref:i,id:r},theirProps:l,slot:s,defaultTag:yn,name:"Dialog.Title"})}let $n=x(pn),xn=x(vn),Sn=x(En),Pn=x(gn),Tn=x(bn),be=Object.assign($n,{Backdrop:xn,Panel:Sn,Overlay:Pn,Title:Tn,Description:It});function $e({className:e="",disabled:t,children:n,...r}){return w("button",{...r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${t&&"opacity-25"} `+e,disabled:t,children:n})}function Dn({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:l=()=>{}}){const a=()=>{r&&l()},o={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return w(te,{show:t,as:u.Fragment,leave:"duration-200",children:k(be,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:a,children:[w(te.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:w("div",{className:"absolute inset-0 bg-gray-500/75"})}),w(te.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:w(be.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${o}`,children:e})})]})})}function Ln({type:e="button",className:t="",disabled:n,children:r,...l}){return w("button",{...l,type:e,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function Mn({className:e=""}){const[t,n]=u.useState(!1),r=u.useRef(),{data:l,setData:a,delete:o,processing:i,reset:s,errors:d}=Je({password:""}),c=()=>{n(!0)},f=E=>{E.preventDefault(),o(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>p(),onError:()=>r.current.focus(),onFinish:()=>s()})},p=()=>{n(!1),s()};return k("section",{className:`space-y-6 ${e}`,children:[k("header",{children:[w("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),w("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),w($e,{onClick:c,children:"Delete Account"}),w(Dn,{show:t,onClose:p,children:k("form",{onSubmit:f,className:"p-6",children:[w("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),w("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),k("div",{className:"mt-6",children:[w(Qe,{htmlFor:"password",value:"Password",className:"sr-only"}),w(rt,{id:"password",type:"password",name:"password",ref:r,value:l.password,onChange:E=>a("password",E.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),w(Ke,{message:d.password,className:"mt-2"})]}),k("div",{className:"mt-6 flex justify-end",children:[w(Ln,{onClick:p,children:"Cancel"}),w($e,{className:"ml-3",disabled:i,children:"Delete Account"})]})]})})]})}export{Mn as default};
