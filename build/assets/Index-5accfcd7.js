import{t as _,r as s,a as jt}from"./app-0afdb542.js";import{A as Ar}from"./AuthenticatedLayout-e71bb712.js";import"./ApplicationLogo-f886d233.js";import"./transition-044ad304.js";var lt={},Pr={get exports(){return lt},set exports(e){lt=e}},Y={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yt=Symbol.for("react.element"),Ut=Symbol.for("react.portal"),gt=Symbol.for("react.fragment"),ft=Symbol.for("react.strict_mode"),ht=Symbol.for("react.profiler"),mt=Symbol.for("react.provider"),bt=Symbol.for("react.context"),Dr=Symbol.for("react.server_context"),wt=Symbol.for("react.forward_ref"),yt=Symbol.for("react.suspense"),vt=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),Ir=Symbol.for("react.offscreen"),Mn;Mn=Symbol.for("react.module.reference");function we(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Yt:switch(e=e.type,e){case gt:case ht:case ft:case yt:case vt:return e;default:switch(e=e&&e.$$typeof,e){case Dr:case bt:case wt:case Ct:case xt:case mt:return e;default:return t}}case Ut:return t}}}Y.ContextConsumer=bt;Y.ContextProvider=mt;Y.Element=Yt;Y.ForwardRef=wt;Y.Fragment=gt;Y.Lazy=Ct;Y.Memo=xt;Y.Portal=Ut;Y.Profiler=ht;Y.StrictMode=ft;Y.Suspense=yt;Y.SuspenseList=vt;Y.isAsyncMode=function(){return!1};Y.isConcurrentMode=function(){return!1};Y.isContextConsumer=function(e){return we(e)===bt};Y.isContextProvider=function(e){return we(e)===mt};Y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yt};Y.isForwardRef=function(e){return we(e)===wt};Y.isFragment=function(e){return we(e)===gt};Y.isLazy=function(e){return we(e)===Ct};Y.isMemo=function(e){return we(e)===xt};Y.isPortal=function(e){return we(e)===Ut};Y.isProfiler=function(e){return we(e)===ht};Y.isStrictMode=function(e){return we(e)===ft};Y.isSuspense=function(e){return we(e)===yt};Y.isSuspenseList=function(e){return we(e)===vt};Y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===gt||e===ht||e===ft||e===yt||e===vt||e===Ir||typeof e=="object"&&e!==null&&(e.$$typeof===Ct||e.$$typeof===xt||e.$$typeof===mt||e.$$typeof===bt||e.$$typeof===wt||e.$$typeof===Mn||e.getModuleId!==void 0)};Y.typeOf=we;(function(e){e.exports=Y})(Pr);function Tr(e){function t(h,g,f,$,i){for(var N=0,u=0,X=0,z=0,T,S,q=0,oe=0,L,ne=L=T=0,W=0,I=0,Ie=0,ee=0,Te=f.length,ke=Te-1,fe,R="",Z="",Ue="",Fe="",be;W<Te;){if(S=f.charCodeAt(W),W===ke&&u+z+X+N!==0&&(u!==0&&(S=u===47?10:47),z=X=N=0,Te++,ke++),u+z+X+N===0){if(W===ke&&(0<I&&(R=R.replace(j,"")),0<R.trim().length)){switch(S){case 32:case 9:case 59:case 13:case 10:break;default:R+=f.charAt(W)}S=59}switch(S){case 123:for(R=R.trim(),T=R.charCodeAt(0),L=1,ee=++W;W<Te;){switch(S=f.charCodeAt(W)){case 123:L++;break;case 125:L--;break;case 47:switch(S=f.charCodeAt(W+1)){case 42:case 47:e:{for(ne=W+1;ne<ke;++ne)switch(f.charCodeAt(ne)){case 47:if(S===42&&f.charCodeAt(ne-1)===42&&W+2!==ne){W=ne+1;break e}break;case 10:if(S===47){W=ne+1;break e}}W=ne}}break;case 91:S++;case 40:S++;case 34:case 39:for(;W++<ke&&f.charCodeAt(W)!==S;);}if(L===0)break;W++}switch(L=f.substring(ee,W),T===0&&(T=(R=R.replace(y,"").trim()).charCodeAt(0)),T){case 64:switch(0<I&&(R=R.replace(j,"")),S=R.charCodeAt(1),S){case 100:case 109:case 115:case 45:I=g;break;default:I=me}if(L=t(g,I,L,S,i+1),ee=L.length,0<ue&&(I=n(me,R,Ie),be=c(3,L,I,g,G,J,ee,S,i,$),R=I.join(""),be!==void 0&&(ee=(L=be.trim()).length)===0&&(S=0,L="")),0<ee)switch(S){case 115:R=R.replace(Q,l);case 100:case 109:case 45:L=R+"{"+L+"}";break;case 107:R=R.replace(x,"$1 $2"),L=R+"{"+L+"}",L=te===1||te===2&&a("@"+L,3)?"@-webkit-"+L+"@"+L:"@"+L;break;default:L=R+L,$===112&&(L=(Z+=L,""))}else L="";break;default:L=t(g,n(g,R,Ie),L,$,i+1)}Ue+=L,L=Ie=I=ne=T=0,R="",S=f.charCodeAt(++W);break;case 125:case 59:if(R=(0<I?R.replace(j,""):R).trim(),1<(ee=R.length))switch(ne===0&&(T=R.charCodeAt(0),T===45||96<T&&123>T)&&(ee=(R=R.replace(" ",":")).length),0<ue&&(be=c(1,R,g,h,G,J,Z.length,$,i,$))!==void 0&&(ee=(R=be.trim()).length)===0&&(R="\0\0"),T=R.charCodeAt(0),S=R.charCodeAt(1),T){case 0:break;case 64:if(S===105||S===99){Fe+=R+f.charAt(W);break}default:R.charCodeAt(ee-1)!==58&&(Z+=o(R,T,S,R.charCodeAt(2)))}Ie=I=ne=T=0,R="",S=f.charCodeAt(++W)}}switch(S){case 13:case 10:u===47?u=0:1+T===0&&$!==107&&0<R.length&&(I=1,R+="\0"),0<ue*xe&&c(0,R,g,h,G,J,Z.length,$,i,$),J=1,G++;break;case 59:case 125:if(u+z+X+N===0){J++;break}default:switch(J++,fe=f.charAt(W),S){case 9:case 32:if(z+N+u===0)switch(q){case 44:case 58:case 9:case 32:fe="";break;default:S!==32&&(fe=" ")}break;case 0:fe="\\0";break;case 12:fe="\\f";break;case 11:fe="\\v";break;case 38:z+u+N===0&&(I=Ie=1,fe="\f"+fe);break;case 108:if(z+u+N+de===0&&0<ne)switch(W-ne){case 2:q===112&&f.charCodeAt(W-3)===58&&(de=q);case 8:oe===111&&(de=oe)}break;case 58:z+u+N===0&&(ne=W);break;case 44:u+X+z+N===0&&(I=1,fe+="\r");break;case 34:case 39:u===0&&(z=z===S?0:z===0?S:z);break;case 91:z+u+X===0&&N++;break;case 93:z+u+X===0&&N--;break;case 41:z+u+N===0&&X--;break;case 40:if(z+u+N===0){if(T===0)switch(2*q+3*oe){case 533:break;default:T=1}X++}break;case 64:u+X+z+N+ne+L===0&&(L=1);break;case 42:case 47:if(!(0<z+N+X))switch(u){case 0:switch(2*S+3*f.charCodeAt(W+1)){case 235:u=47;break;case 220:ee=W,u=42}break;case 42:S===47&&q===42&&ee+2!==W&&(f.charCodeAt(ee+2)===33&&(Z+=f.substring(ee,W+1)),fe="",u=0)}}u===0&&(R+=fe)}oe=q,q=S,W++}if(ee=Z.length,0<ee){if(I=g,0<ue&&(be=c(2,Z,I,h,G,J,ee,$,i,$),be!==void 0&&(Z=be).length===0))return Fe+Z+Ue;if(Z=I.join(",")+"{"+Z+"}",te*de!==0){switch(te!==2||a(Z,2)||(de=0),de){case 111:Z=Z.replace(A,":-moz-$1")+Z;break;case 112:Z=Z.replace(P,"::-webkit-input-$1")+Z.replace(P,"::-moz-$1")+Z.replace(P,":-ms-input-$1")+Z}de=0}}return Fe+Z+Ue}function n(h,g,f){var $=g.trim().split(b);g=$;var i=$.length,N=h.length;switch(N){case 0:case 1:var u=0;for(h=N===0?"":h[0]+" ";u<i;++u)g[u]=r(h,g[u],f).trim();break;default:var X=u=0;for(g=[];u<i;++u)for(var z=0;z<N;++z)g[X++]=r(h[z]+" ",$[u],f).trim()}return g}function r(h,g,f){var $=g.charCodeAt(0);switch(33>$&&($=(g=g.trim()).charCodeAt(0)),$){case 38:return g.replace(O,"$1"+h.trim());case 58:return h.trim()+g.replace(O,"$1"+h.trim());default:if(0<1*f&&0<g.indexOf("\f"))return g.replace(O,(h.charCodeAt(0)===58?"":"$1")+h.trim())}return h+g}function o(h,g,f,$){var i=h+";",N=2*g+3*f+4*$;if(N===944){h=i.indexOf(":",9)+1;var u=i.substring(h,i.length-1).trim();return u=i.substring(0,h).trim()+u+";",te===1||te===2&&a(u,1)?"-webkit-"+u+u:u}if(te===0||te===2&&!a(i,1))return i;switch(N){case 1015:return i.charCodeAt(10)===97?"-webkit-"+i+i:i;case 951:return i.charCodeAt(3)===116?"-webkit-"+i+i:i;case 963:return i.charCodeAt(5)===110?"-webkit-"+i+i:i;case 1009:if(i.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+i+i;case 978:return"-webkit-"+i+"-moz-"+i+i;case 1019:case 983:return"-webkit-"+i+"-moz-"+i+"-ms-"+i+i;case 883:if(i.charCodeAt(8)===45)return"-webkit-"+i+i;if(0<i.indexOf("image-set(",11))return i.replace(ce,"$1-webkit-$2")+i;break;case 932:if(i.charCodeAt(4)===45)switch(i.charCodeAt(5)){case 103:return"-webkit-box-"+i.replace("-grow","")+"-webkit-"+i+"-ms-"+i.replace("grow","positive")+i;case 115:return"-webkit-"+i+"-ms-"+i.replace("shrink","negative")+i;case 98:return"-webkit-"+i+"-ms-"+i.replace("basis","preferred-size")+i}return"-webkit-"+i+"-ms-"+i+i;case 964:return"-webkit-"+i+"-ms-flex-"+i+i;case 1023:if(i.charCodeAt(8)!==99)break;return u=i.substring(i.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+u+"-webkit-"+i+"-ms-flex-pack"+u+i;case 1005:return v.test(i)?i.replace(D,":-webkit-")+i.replace(D,":-moz-")+i:i;case 1e3:switch(u=i.substring(13).trim(),g=u.indexOf("-")+1,u.charCodeAt(0)+u.charCodeAt(g)){case 226:u=i.replace(F,"tb");break;case 232:u=i.replace(F,"tb-rl");break;case 220:u=i.replace(F,"lr");break;default:return i}return"-webkit-"+i+"-ms-"+u+i;case 1017:if(i.indexOf("sticky",9)===-1)break;case 975:switch(g=(i=h).length-10,u=(i.charCodeAt(g)===33?i.substring(0,g):i).substring(h.indexOf(":",7)+1).trim(),N=u.charCodeAt(0)+(u.charCodeAt(7)|0)){case 203:if(111>u.charCodeAt(8))break;case 115:i=i.replace(u,"-webkit-"+u)+";"+i;break;case 207:case 102:i=i.replace(u,"-webkit-"+(102<N?"inline-":"")+"box")+";"+i.replace(u,"-webkit-"+u)+";"+i.replace(u,"-ms-"+u+"box")+";"+i}return i+";";case 938:if(i.charCodeAt(5)===45)switch(i.charCodeAt(6)){case 105:return u=i.replace("-items",""),"-webkit-"+i+"-webkit-box-"+u+"-ms-flex-"+u+i;case 115:return"-webkit-"+i+"-ms-flex-item-"+i.replace(M,"")+i;default:return"-webkit-"+i+"-ms-flex-line-pack"+i.replace("align-content","").replace(M,"")+i}break;case 973:case 989:if(i.charCodeAt(3)!==45||i.charCodeAt(4)===122)break;case 931:case 953:if(K.test(h)===!0)return(u=h.substring(h.indexOf(":")+1)).charCodeAt(0)===115?o(h.replace("stretch","fill-available"),g,f,$).replace(":fill-available",":stretch"):i.replace(u,"-webkit-"+u)+i.replace(u,"-moz-"+u.replace("fill-",""))+i;break;case 962:if(i="-webkit-"+i+(i.charCodeAt(5)===102?"-ms-"+i:"")+i,f+$===211&&i.charCodeAt(13)===105&&0<i.indexOf("transform",10))return i.substring(0,i.indexOf(";",27)+1).replace(C,"$1-webkit-$2")+i}return i}function a(h,g){var f=h.indexOf(g===1?":":"{"),$=h.substring(0,g!==3?f:10);return f=h.substring(f+1,h.length-1),Ee(g!==2?$:$.replace(re,"$1"),f,g)}function l(h,g){var f=o(g,g.charCodeAt(0),g.charCodeAt(1),g.charCodeAt(2));return f!==g+";"?f.replace(V," or ($1)").substring(4):"("+g+")"}function c(h,g,f,$,i,N,u,X,z,T){for(var S=0,q=g,oe;S<ue;++S)switch(oe=se[S].call(m,h,q,f,$,i,N,u,X,z,T)){case void 0:case!1:case!0:case null:break;default:q=oe}if(q!==g)return q}function p(h){switch(h){case void 0:case null:ue=se.length=0;break;default:if(typeof h=="function")se[ue++]=h;else if(typeof h=="object")for(var g=0,f=h.length;g<f;++g)p(h[g]);else xe=!!h|0}return p}function w(h){return h=h.prefix,h!==void 0&&(Ee=null,h?typeof h!="function"?te=1:(te=2,Ee=h):te=0),w}function m(h,g){var f=h;if(33>f.charCodeAt(0)&&(f=f.trim()),$e=f,f=[$e],0<ue){var $=c(-1,g,f,f,G,J,0,0,0,0);$!==void 0&&typeof $=="string"&&(g=$)}var i=t(me,f,g,0,0);return 0<ue&&($=c(-2,i,f,f,G,J,i.length,0,0,0),$!==void 0&&(i=$)),$e="",de=0,J=G=1,i}var y=/^\0+/g,j=/[\0\r\f]/g,D=/: */g,v=/zoo|gra/,C=/([,: ])(transform)/g,b=/,\r+?/g,O=/([\t\r\n ])*\f?&/g,x=/@(k\w+)\s*(\S*)\s*/,P=/::(place)/g,A=/:(read-only)/g,F=/[svh]\w+-[tblr]{2}/,Q=/\(\s*(.*)\s*\)/g,V=/([\s\S]*?);/g,M=/-self|flex-/g,re=/[^]*?(:[rp][el]a[\w-]+)[^]*/,K=/stretch|:\s*\w+\-(?:conte|avail)/,ce=/([^-])(image-set\()/,J=1,G=1,de=0,te=1,me=[],se=[],ue=0,Ee=null,xe=0,$e="";return m.use=p,m.set=w,e!==void 0&&w(e),m}var jr={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function _r(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Hr=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,yn=_r(function(e){return Hr.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Mt={},Fr={get exports(){return Mt},set exports(e){Mt=e}},U={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var le=typeof Symbol=="function"&&Symbol.for,Xt=le?Symbol.for("react.element"):60103,Zt=le?Symbol.for("react.portal"):60106,St=le?Symbol.for("react.fragment"):60107,Rt=le?Symbol.for("react.strict_mode"):60108,Et=le?Symbol.for("react.profiler"):60114,$t=le?Symbol.for("react.provider"):60109,kt=le?Symbol.for("react.context"):60110,Qt=le?Symbol.for("react.async_mode"):60111,Ot=le?Symbol.for("react.concurrent_mode"):60111,At=le?Symbol.for("react.forward_ref"):60112,Pt=le?Symbol.for("react.suspense"):60113,Mr=le?Symbol.for("react.suspense_list"):60120,Dt=le?Symbol.for("react.memo"):60115,It=le?Symbol.for("react.lazy"):60116,Lr=le?Symbol.for("react.block"):60121,Nr=le?Symbol.for("react.fundamental"):60117,zr=le?Symbol.for("react.responder"):60118,Wr=le?Symbol.for("react.scope"):60119;function he(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xt:switch(e=e.type,e){case Qt:case Ot:case St:case Et:case Rt:case Pt:return e;default:switch(e=e&&e.$$typeof,e){case kt:case At:case It:case Dt:case $t:return e;default:return t}}case Zt:return t}}}function Ln(e){return he(e)===Ot}U.AsyncMode=Qt;U.ConcurrentMode=Ot;U.ContextConsumer=kt;U.ContextProvider=$t;U.Element=Xt;U.ForwardRef=At;U.Fragment=St;U.Lazy=It;U.Memo=Dt;U.Portal=Zt;U.Profiler=Et;U.StrictMode=Rt;U.Suspense=Pt;U.isAsyncMode=function(e){return Ln(e)||he(e)===Qt};U.isConcurrentMode=Ln;U.isContextConsumer=function(e){return he(e)===kt};U.isContextProvider=function(e){return he(e)===$t};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xt};U.isForwardRef=function(e){return he(e)===At};U.isFragment=function(e){return he(e)===St};U.isLazy=function(e){return he(e)===It};U.isMemo=function(e){return he(e)===Dt};U.isPortal=function(e){return he(e)===Zt};U.isProfiler=function(e){return he(e)===Et};U.isStrictMode=function(e){return he(e)===Rt};U.isSuspense=function(e){return he(e)===Pt};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===St||e===Ot||e===Et||e===Rt||e===Pt||e===Mr||typeof e=="object"&&e!==null&&(e.$$typeof===It||e.$$typeof===Dt||e.$$typeof===$t||e.$$typeof===kt||e.$$typeof===At||e.$$typeof===Nr||e.$$typeof===zr||e.$$typeof===Wr||e.$$typeof===Lr)};U.typeOf=he;(function(e){e.exports=U})(Fr);var Kt=Mt,Br={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Gr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Vr={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jt={};Jt[Kt.ForwardRef]=Vr;Jt[Kt.Memo]=Nn;function vn(e){return Kt.isMemo(e)?Nn:Jt[e.$$typeof]||Br}var Yr=Object.defineProperty,Ur=Object.getOwnPropertyNames,xn=Object.getOwnPropertySymbols,Xr=Object.getOwnPropertyDescriptor,Zr=Object.getPrototypeOf,Cn=Object.prototype;function zn(e,t,n){if(typeof t!="string"){if(Cn){var r=Zr(t);r&&r!==Cn&&zn(e,r,n)}var o=Ur(t);xn&&(o=o.concat(xn(t)));for(var a=vn(e),l=vn(t),c=0;c<o.length;++c){var p=o[c];if(!Gr[p]&&!(n&&n[p])&&!(l&&l[p])&&!(a&&a[p])){var w=Xr(t,p);try{Yr(e,p,w)}catch{}}}}return e}var Qr=zn;function Re(){return(Re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Sn=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},Lt=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!lt.typeOf(e)},ct=Object.freeze([]),Pe=Object.freeze({});function ze(e){return typeof e=="function"}function Rn(e){return e.displayName||e.name||"Component"}function qt(e){return e&&typeof e.styledComponentId=="string"}var We=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",en=typeof window<"u"&&"HTMLElement"in window,Kr=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function He(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Jr=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,a=o.length,l=a;n>=l;)(l<<=1)<0&&He(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(o),this.length=l;for(var c=a;c<l;c++)this.groupSizes[c]=0}for(var p=this.indexOfGroup(n+1),w=0,m=r.length;w<m;w++)this.tag.insertRule(p,r[w])&&(this.groupSizes[n]++,p++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),a=o+r;this.groupSizes[n]=0;for(var l=o;l<a;l++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],a=this.indexOfGroup(n),l=a+o,c=a;c<l;c++)r+=this.tag.getRule(c)+`/*!sc*/
`;return r},e}(),it=new Map,dt=new Map,Qe=1,nt=function(e){if(it.has(e))return it.get(e);for(;dt.has(Qe);)Qe++;var t=Qe++;return it.set(e,t),dt.set(t,e),t},qr=function(e){return dt.get(e)},eo=function(e,t){t>=Qe&&(Qe=t+1),it.set(e,t),dt.set(t,e)},to="style["+We+'][data-styled-version="5.3.9"]',no=new RegExp("^"+We+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ro=function(e,t,n){for(var r,o=n.split(","),a=0,l=o.length;a<l;a++)(r=o[a])&&e.registerName(t,r)},oo=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,a=n.length;o<a;o++){var l=n[o].trim();if(l){var c=l.match(no);if(c){var p=0|parseInt(c[1],10),w=c[2];p!==0&&(eo(w,p),ro(e,w,c[3]),e.getTag().insertRules(p,r)),r.length=0}else r.push(l)}}},ao=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Wn=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(c){for(var p=c.childNodes,w=p.length;w>=0;w--){var m=p[w];if(m&&m.nodeType===1&&m.hasAttribute(We))return m}}(n),a=o!==void 0?o.nextSibling:null;r.setAttribute(We,"active"),r.setAttribute("data-styled-version","5.3.9");var l=ao();return l&&r.setAttribute("nonce",l),n.insertBefore(r,a),r},io=function(){function e(n){var r=this.element=Wn(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var a=document.styleSheets,l=0,c=a.length;l<c;l++){var p=a[l];if(p.ownerNode===o)return p}He(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),so=function(){function e(n){var r=this.element=Wn(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),a=this.nodes[n];return this.element.insertBefore(o,a||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),lo=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),En=en,co={isServer:!en,useCSSOMInjection:!Kr},Bn=function(){function e(n,r,o){n===void 0&&(n=Pe),r===void 0&&(r={}),this.options=Re({},co,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&en&&En&&(En=!1,function(a){for(var l=document.querySelectorAll(to),c=0,p=l.length;c<p;c++){var w=l[c];w&&w.getAttribute(We)!=="active"&&(oo(a,w),w.parentNode&&w.parentNode.removeChild(w))}}(this))}e.registerId=function(n){return nt(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Re({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,a=r.useCSSOMInjection,l=r.target,n=o?new lo(l):a?new io(l):new so(l),new Jr(n)));var n,r,o,a,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(nt(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(nt(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(nt(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,a="",l=0;l<o;l++){var c=qr(l);if(c!==void 0){var p=n.names.get(c),w=r.getGroup(l);if(p&&w&&p.size){var m=We+".g"+l+'[id="'+c+'"]',y="";p!==void 0&&p.forEach(function(j){j.length>0&&(y+=j+",")}),a+=""+w+m+'{content:"'+y+`"}/*!sc*/
`}}}return a}(this)},e}(),uo=/(a)(d)/gi,$n=function(e){return String.fromCharCode(e+(e>25?39:97))};function Nt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=$n(t%52)+n;return($n(t%52)+n).replace(uo,"$1-$2")}var Ne=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Gn=function(e){return Ne(5381,e)};function po(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ze(n)&&!qt(n))return!1}return!0}var go=Gn("5.3.9"),fo=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&po(t),this.componentId=n,this.baseHash=Ne(go,n),this.baseStyle=r,Bn.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))a.push(this.staticRulesId);else{var l=Be(this.rules,t,n,r).join(""),c=Nt(Ne(this.baseHash,l)>>>0);if(!n.hasNameForId(o,c)){var p=r(l,"."+c,void 0,o);n.insertRules(o,c,p)}a.push(c),this.staticRulesId=c}else{for(var w=this.rules.length,m=Ne(this.baseHash,r.hash),y="",j=0;j<w;j++){var D=this.rules[j];if(typeof D=="string")y+=D;else if(D){var v=Be(D,t,n,r),C=Array.isArray(v)?v.join(""):v;m=Ne(m,C+j),y+=C}}if(y){var b=Nt(m>>>0);if(!n.hasNameForId(o,b)){var O=r(y,"."+b,void 0,o);n.insertRules(o,b,O)}a.push(b)}}return a.join(" ")},e}(),ho=/^\s*\/\/.*$/gm,mo=[":","[",".","#"];function bo(e){var t,n,r,o,a=e===void 0?Pe:e,l=a.options,c=l===void 0?Pe:l,p=a.plugins,w=p===void 0?ct:p,m=new Tr(c),y=[],j=function(C){function b(O){if(O)try{C(O+"}")}catch{}}return function(O,x,P,A,F,Q,V,M,re,K){switch(O){case 1:if(re===0&&x.charCodeAt(0)===64)return C(x+";"),"";break;case 2:if(M===0)return x+"/*|*/";break;case 3:switch(M){case 102:case 112:return C(P[0]+x),"";default:return x+(K===0?"/*|*/":"")}case-2:x.split("/*|*/}").forEach(b)}}}(function(C){y.push(C)}),D=function(C,b,O){return b===0&&mo.indexOf(O[n.length])!==-1||O.match(o)?C:"."+t};function v(C,b,O,x){x===void 0&&(x="&");var P=C.replace(ho,""),A=b&&O?O+" "+b+" { "+P+" }":P;return t=x,n=b,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),m(O||!b?"":b,A)}return m.use([].concat(w,[function(C,b,O){C===2&&O.length&&O[0].lastIndexOf(n)>0&&(O[0]=O[0].replace(r,D))},j,function(C){if(C===-2){var b=y;return y=[],b}}])),v.hash=w.length?w.reduce(function(C,b){return b.name||He(15),Ne(C,b.name)},5381).toString():"",v}var Vn=_.createContext();Vn.Consumer;var Yn=_.createContext(),wo=(Yn.Consumer,new Bn),zt=bo();function yo(){return s.useContext(Vn)||wo}function vo(){return s.useContext(Yn)||zt}var xo=function(){function e(t,n){var r=this;this.inject=function(o,a){a===void 0&&(a=zt);var l=r.name+a.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,a(r.rules,l,"@keyframes"))},this.toString=function(){return He(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=zt),this.name+t.hash},e}(),Co=/([A-Z])/,So=/([A-Z])/g,Ro=/^ms-/,Eo=function(e){return"-"+e.toLowerCase()};function kn(e){return Co.test(e)?e.replace(So,Eo).replace(Ro,"-ms-"):e}var On=function(e){return e==null||e===!1||e===""};function Be(e,t,n,r){if(Array.isArray(e)){for(var o,a=[],l=0,c=e.length;l<c;l+=1)(o=Be(e[l],t,n,r))!==""&&(Array.isArray(o)?a.push.apply(a,o):a.push(o));return a}if(On(e))return"";if(qt(e))return"."+e.styledComponentId;if(ze(e)){if(typeof(w=e)!="function"||w.prototype&&w.prototype.isReactComponent||!t)return e;var p=e(t);return Be(p,t,n,r)}var w;return e instanceof xo?n?(e.inject(n,r),e.getName(r)):e:Lt(e)?function m(y,j){var D,v,C=[];for(var b in y)y.hasOwnProperty(b)&&!On(y[b])&&(Array.isArray(y[b])&&y[b].isCss||ze(y[b])?C.push(kn(b)+":",y[b],";"):Lt(y[b])?C.push.apply(C,m(y[b],b)):C.push(kn(b)+": "+(D=b,(v=y[b])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||D in jr?String(v).trim():v+"px")+";"));return j?[j+" {"].concat(C,["}"]):C}(e):e.toString()}var An=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ie(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return ze(e)||Lt(e)?An(Be(Sn(ct,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:An(Be(Sn(e,n)))}var $o=function(e,t,n){return n===void 0&&(n=Pe),e.theme!==n.theme&&e.theme||t||n.theme},ko=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Oo=/(^-|-$)/g;function _t(e){return e.replace(ko,"-").replace(Oo,"")}var Ao=function(e){return Nt(Gn(e)>>>0)};function rt(e){return typeof e=="string"&&!0}var Wt=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Po=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Do(e,t,n){var r=e[n];Wt(t)&&Wt(r)?Un(r,t):e[n]=t}function Un(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,a=n;o<a.length;o++){var l=a[o];if(Wt(l))for(var c in l)Po(c)&&Do(e,l[c],c)}return e}var ut=_.createContext();ut.Consumer;function Io(e){var t=s.useContext(ut),n=s.useMemo(function(){return function(r,o){if(!r)return He(14);if(ze(r)){var a=r(o);return a}return Array.isArray(r)||typeof r!="object"?He(8):o?Re({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?_.createElement(ut.Provider,{value:n},e.children):null}var Ht={};function Xn(e,t,n){var r=qt(e),o=!rt(e),a=t.attrs,l=a===void 0?ct:a,c=t.componentId,p=c===void 0?function(x,P){var A=typeof x!="string"?"sc":_t(x);Ht[A]=(Ht[A]||0)+1;var F=A+"-"+Ao("5.3.9"+A+Ht[A]);return P?P+"-"+F:F}(t.displayName,t.parentComponentId):c,w=t.displayName,m=w===void 0?function(x){return rt(x)?"styled."+x:"Styled("+Rn(x)+")"}(e):w,y=t.displayName&&t.componentId?_t(t.displayName)+"-"+t.componentId:t.componentId||p,j=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,D=t.shouldForwardProp;r&&e.shouldForwardProp&&(D=t.shouldForwardProp?function(x,P,A){return e.shouldForwardProp(x,P,A)&&t.shouldForwardProp(x,P,A)}:e.shouldForwardProp);var v,C=new fo(n,y,r?e.componentStyle:void 0),b=C.isStatic&&l.length===0,O=function(x,P){return function(A,F,Q,V){var M=A.attrs,re=A.componentStyle,K=A.defaultProps,ce=A.foldedComponentIds,J=A.shouldForwardProp,G=A.styledComponentId,de=A.target,te=function($,i,N){$===void 0&&($=Pe);var u=Re({},i,{theme:$}),X={};return N.forEach(function(z){var T,S,q,oe=z;for(T in ze(oe)&&(oe=oe(u)),oe)u[T]=X[T]=T==="className"?(S=X[T],q=oe[T],S&&q?S+" "+q:S||q):oe[T]}),[u,X]}($o(F,s.useContext(ut),K)||Pe,F,M),me=te[0],se=te[1],ue=function($,i,N,u){var X=yo(),z=vo(),T=i?$.generateAndInjectStyles(Pe,X,z):$.generateAndInjectStyles(N,X,z);return T}(re,V,me),Ee=Q,xe=se.$as||F.$as||se.as||F.as||de,$e=rt(xe),h=se!==F?Re({},F,{},se):F,g={};for(var f in h)f[0]!=="$"&&f!=="as"&&(f==="forwardedAs"?g.as=h[f]:(J?J(f,yn,xe):!$e||yn(f))&&(g[f]=h[f]));return F.style&&se.style!==F.style&&(g.style=Re({},F.style,{},se.style)),g.className=Array.prototype.concat(ce,G,ue!==G?ue:null,F.className,se.className).filter(Boolean).join(" "),g.ref=Ee,s.createElement(xe,g)}(v,x,P,b)};return O.displayName=m,(v=_.forwardRef(O)).attrs=j,v.componentStyle=C,v.displayName=m,v.shouldForwardProp=D,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ct,v.styledComponentId=y,v.target=r?e.target:e,v.withComponent=function(x){var P=t.componentId,A=function(Q,V){if(Q==null)return{};var M,re,K={},ce=Object.keys(Q);for(re=0;re<ce.length;re++)M=ce[re],V.indexOf(M)>=0||(K[M]=Q[M]);return K}(t,["componentId"]),F=P&&P+"-"+(rt(x)?x:_t(Rn(x)));return Xn(x,Re({},A,{attrs:j,componentId:F}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?Un({},e.defaultProps,x):x}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),o&&Qr(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var Bt=function(e){return function t(n,r,o){if(o===void 0&&(o=Pe),!lt.isValidElementType(r))return He(1,String(r));var a=function(){return n(r,o,ie.apply(void 0,arguments))};return a.withConfig=function(l){return t(n,r,Re({},o,{},l))},a.attrs=function(l){return t(n,r,Re({},o,{attrs:Array.prototype.concat(o.attrs,l).filter(Boolean)}))},a}(Xn,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Bt[e]=Bt(e)});const H=Bt;var De;function Ge(e,t){return e[t]}function Gt(e,t){return t.split(".").reduce((n,r)=>{const o=r.match(/[^\]\\[.]+/g);if(o&&o.length>1)for(let a=0;a<o.length;a++)return n[o[a]][o[a+1]];return n[r]},e)}function To(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function jo(e=[],t,n="id"){const r=e.slice(),o=Ge(t,n);return o?r.splice(r.findIndex(a=>Ge(a,n)===o),1):r.splice(r.findIndex(a=>a===t),1),r}function Pn(e){return e.map((t,n)=>{const r=Object.assign(Object.assign({},t),{sortable:t.sortable||!!t.sortFunction||void 0});return t.id||(r.id=n+1),r})}function Ke(e,t){return Math.ceil(e/t)}function Ft(e,t){return Math.min(e,t)}(function(e){e.ASC="asc",e.DESC="desc"})(De||(De={}));const ae=()=>null;function Zn(e,t=[],n=[]){let r={},o=[...n];return t.length&&t.forEach(a=>{if(!a.when||typeof a.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');a.when(e)&&(r=a.style||{},a.classNames&&(o=[...o,...a.classNames]),typeof a.style=="function"&&(r=a.style(e)||{}))}),{style:r,classNames:o.join(" ")}}function st(e,t=[],n="id"){const r=Ge(e,n);return r?t.some(o=>Ge(o,n)===r):t.some(o=>o===e)}function ot(e,t){return t?e.findIndex(n=>Je(n.id,t)):-1}function Je(e,t){return e==t}function _o(e,t){const n=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:r,rows:o,rowCount:a,mergeSelections:l}=t,c=!e.allSelected,p=!e.toggleOnSelectedRowsChange;if(l){const w=c?[...e.selectedRows,...o.filter(m=>!st(m,e.selectedRows,r))]:e.selectedRows.filter(m=>!st(m,o,r));return Object.assign(Object.assign({},e),{allSelected:c,selectedCount:w.length,selectedRows:w,toggleOnSelectedRowsChange:p})}return Object.assign(Object.assign({},e),{allSelected:c,selectedCount:c?a:0,selectedRows:c?o:[],toggleOnSelectedRowsChange:p})}case"SELECT_SINGLE_ROW":{const{keyField:r,row:o,isSelected:a,rowCount:l,singleSelect:c}=t;return c?a?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[o],toggleOnSelectedRowsChange:n}):a?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:jo(e.selectedRows,o,r),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===l,selectedRows:To(e.selectedRows,o),toggleOnSelectedRowsChange:n})}case"SELECT_MULTIPLE_ROWS":{const{keyField:r,selectedRows:o,totalRows:a,mergeSelections:l}=t;if(l){const c=[...e.selectedRows,...o.filter(p=>!st(p,e.selectedRows,r))];return Object.assign(Object.assign({},e),{selectedCount:c.length,allSelected:!1,selectedRows:c,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:o.length,allSelected:o.length===a,selectedRows:o,toggleOnSelectedRowsChange:n})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:r}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:r})}case"SORT_CHANGE":{const{sortDirection:r,selectedColumn:o,clearSelectedOnSort:a}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:o,sortDirection:r,currentPage:1}),a&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:r,paginationServer:o,visibleOnly:a,persistSelectedOnPageChange:l}=t,c=o&&l,p=o&&!l||a;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:r}),c&&{allSelected:!1}),p&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:r,page:o}=t;return Object.assign(Object.assign({},e),{currentPage:o,rowsPerPage:r})}}}const Ho=ie`
	pointer-events: none;
	opacity: 0.4;
`,Fo=H.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&Ho};
	${({theme:e})=>e.table.style};
`,Mo=ie`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,Lo=H.div`
	display: flex;
	width: 100%;
	${({fixedHeader:e})=>e&&Mo};
	${({theme:e})=>e.head.style};
`,No=H.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,Qn=(e,...t)=>ie`
		@media screen and (max-width: ${599}px) {
			${ie(e,...t)}
		}
	`,zo=(e,...t)=>ie`
		@media screen and (max-width: ${959}px) {
			${ie(e,...t)}
		}
	`,Wo=(e,...t)=>ie`
		@media screen and (max-width: ${1280}px) {
			${ie(e,...t)}
		}
	`,Bo=e=>(t,...n)=>ie`
				@media screen and (max-width: ${e}px) {
					${ie(t,...n)}
				}
			`,Ye=H.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,headCell:t})=>e[t?"headCells":"cells"].style};
	${({noPadding:e})=>e&&"padding: 0"};
`,Kn=H(Ye)`
	flex-grow: ${({button:e,grow:t})=>t===0||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&ie`
			min-width: ${e};
			max-width: ${e};
		`};
	${({right:e})=>e&&"justify-content: flex-end"};
	${({button:e,center:t})=>(t||e)&&"justify-content: center"};
	${({compact:e,button:t})=>(e||t)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:e})=>e&&e==="sm"&&Qn`
    display: none;
  `};
	${({hide:e})=>e&&e==="md"&&zo`
    display: none;
  `};
	${({hide:e})=>e&&e==="lg"&&Wo`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&Bo(e)`
    display: none;
  `};
`,Go=ie`
	div:first-child {
		white-space: ${({wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,Vo=H(Kn).attrs(e=>({style:e.style}))`
	${({renderAsCell:e})=>!e&&Go};
	${({theme:e,isDragging:t})=>t&&e.cells.draggingStyle};
	${({cellStyle:e})=>e};
`;var Yo=s.memo(function({id:e,column:t,row:n,rowIndex:r,dataTag:o,isDragging:a,onDragStart:l,onDragOver:c,onDragEnd:p,onDragEnter:w,onDragLeave:m}){const{style:y,classNames:j}=Zn(n,t.conditionalCellStyles,["rdt_TableCell"]);return s.createElement(Vo,{id:e,"data-column-id":t.id,role:"cell",className:j,"data-tag":o,cellStyle:t.style,renderAsCell:!!t.cell,allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,wrapCell:t.wrap,style:y,isDragging:a,onDragStart:l,onDragOver:c,onDragEnd:p,onDragEnter:w,onDragLeave:m},!t.cell&&s.createElement("div",{"data-tag":o},function(D,v,C,b){if(!v)return null;if(typeof v!="string"&&typeof v!="function")throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return C&&typeof C=="function"?C(D,b):v&&typeof v=="function"?v(D,b):Gt(D,v)}(n,t.selector,t.format,r)),t.cell&&t.cell(n,r,t,e))}),Jn=s.memo(function({name:e,component:t="input",componentOptions:n={style:{}},indeterminate:r=!1,checked:o=!1,disabled:a=!1,onClick:l=ae}){const c=t,p=c!=="input"?n.style:(m=>Object.assign(Object.assign({fontSize:"18px"},!m&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(a),w=s.useMemo(()=>function(m,...y){let j;return Object.keys(m).map(D=>m[D]).forEach((D,v)=>{typeof D=="function"&&(j=Object.assign(Object.assign({},m),{[Object.keys(m)[v]]:D(...y)}))}),j||m}(n,r),[n,r]);return s.createElement(c,Object.assign({type:"checkbox",ref:m=>{m&&(m.indeterminate=r)},style:p,onClick:a?ae:l,name:e,"aria-label":e,checked:o,disabled:a},w,{onChange:ae}))});const Uo=H(Ye)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function Xo({name:e,keyField:t,row:n,rowCount:r,selected:o,selectableRowsComponent:a,selectableRowsComponentProps:l,selectableRowsSingle:c,selectableRowDisabled:p,onSelectedRow:w}){const m=!(!p||!p(n));return s.createElement(Uo,{onClick:y=>y.stopPropagation(),className:"rdt_TableCell",noPadding:!0},s.createElement(Jn,{name:e,component:a,componentOptions:l,checked:o,"aria-checked":o,onClick:()=>{w({type:"SELECT_SINGLE_ROW",row:n,isSelected:o,keyField:t,rowCount:r,singleSelect:c})},disabled:m}))}const Zo=H.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function Qo({disabled:e=!1,expanded:t=!1,expandableIcon:n,id:r,row:o,onToggled:a}){const l=t?n.expanded:n.collapsed;return s.createElement(Zo,{"aria-disabled":e,onClick:()=>a&&a(o),"data-testid":`expander-button-${r}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},l)}const Ko=H(Ye)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function Jo({row:e,expanded:t=!1,expandableIcon:n,id:r,onToggled:o,disabled:a=!1}){return s.createElement(Ko,{onClick:l=>l.stopPropagation(),noPadding:!0},s.createElement(Qo,{id:r,row:e,expanded:t,expandableIcon:n,disabled:a,onToggled:o}))}const qo=H.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({extendedRowStyle:e})=>e};
`;var ea=s.memo(function({data:e,ExpanderComponent:t,expanderComponentProps:n,extendedRowStyle:r,extendedClassNames:o}){const a=["rdt_ExpanderRow",...o.split(" ").filter(l=>l!=="rdt_TableRow")].join(" ");return s.createElement(qo,{className:a,extendedRowStyle:r},s.createElement(t,Object.assign({data:e},n)))}),pt,Vt,Dn;(function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"})(pt||(pt={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"}(Vt||(Vt={})),function(e){e.SM="sm",e.MD="md",e.LG="lg"}(Dn||(Dn={}));const ta=ie`
	&:hover {
		${({highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,na=ie`
	&:hover {
		cursor: pointer;
	}
`,ra=H.div.attrs(e=>({style:e.style}))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({highlightOnHover:e})=>e&&ta};
	${({pointerOnHover:e})=>e&&na};
	${({selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
`;function oa({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:n=!1,defaultExpanderDisabled:r=!1,dense:o=!1,expandableIcon:a,expandableRows:l=!1,expandableRowsComponent:c,expandableRowsComponentProps:p,expandableRowsHideExpander:w,expandOnRowClicked:m=!1,expandOnRowDoubleClicked:y=!1,highlightOnHover:j=!1,id:D,expandableInheritConditionalStyles:v,keyField:C,onRowClicked:b=ae,onRowDoubleClicked:O=ae,onRowMouseEnter:x=ae,onRowMouseLeave:P=ae,onRowExpandToggled:A=ae,onSelectedRow:F=ae,pointerOnHover:Q=!1,row:V,rowCount:M,rowIndex:re,selectableRowDisabled:K=null,selectableRows:ce=!1,selectableRowsComponent:J,selectableRowsComponentProps:G,selectableRowsHighlight:de=!1,selectableRowsSingle:te=!1,selected:me,striped:se=!1,draggingColumnId:ue,onDragStart:Ee,onDragOver:xe,onDragEnd:$e,onDragEnter:h,onDragLeave:g}){const[f,$]=s.useState(n);s.useEffect(()=>{$(n)},[n]);const i=s.useCallback(()=>{$(!f),A(!f,V)},[f,A,V]),N=Q||l&&(m||y),u=s.useCallback(I=>{I.target&&I.target.getAttribute("data-tag")==="allowRowEvents"&&(b(V,I),!r&&l&&m&&i())},[r,m,l,i,b,V]),X=s.useCallback(I=>{I.target&&I.target.getAttribute("data-tag")==="allowRowEvents"&&(O(V,I),!r&&l&&y&&i())},[r,y,l,i,O,V]),z=s.useCallback(I=>{x(V,I)},[x,V]),T=s.useCallback(I=>{P(V,I)},[P,V]),S=Ge(V,C),{style:q,classNames:oe}=Zn(V,t,["rdt_TableRow"]),L=de&&me,ne=v?q:{},W=se&&re%2==0;return s.createElement(s.Fragment,null,s.createElement(ra,{id:`row-${D}`,role:"row",striped:W,highlightOnHover:j,pointerOnHover:!r&&N,dense:o,onClick:u,onDoubleClick:X,onMouseEnter:z,onMouseLeave:T,className:oe,selected:L,style:q},ce&&s.createElement(Xo,{name:`select-row-${S}`,keyField:C,row:V,rowCount:M,selected:me,selectableRowsComponent:J,selectableRowsComponentProps:G,selectableRowDisabled:K,selectableRowsSingle:te,onSelectedRow:F}),l&&!w&&s.createElement(Jo,{id:S,expandableIcon:a,expanded:f,row:V,onToggled:i,disabled:r}),e.map(I=>I.omit?null:s.createElement(Yo,{id:`cell-${I.id}-${S}`,key:`cell-${I.id}-${S}`,dataTag:I.ignoreRowClick||I.button?null:"allowRowEvents",column:I,row:V,rowIndex:re,isDragging:Je(ue,I.id),onDragStart:Ee,onDragOver:xe,onDragEnd:$e,onDragEnter:h,onDragLeave:g}))),l&&f&&s.createElement(ea,{key:`expander-${S}`,data:V,extendedRowStyle:ne,extendedClassNames:oe,ExpanderComponent:c,expanderComponentProps:p}))}const aa=H.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({sortDirection:e})=>e==="desc"&&"transform: rotate(180deg)"};
`,ia=({sortActive:e,sortDirection:t})=>_.createElement(aa,{sortActive:e,sortDirection:t},"▲"),sa=H(Kn)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,isDragging:t})=>t&&e.headCells.draggingStyle};
`,la=ie`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({sortActive:e})=>!e&&ie`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,ca=H.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&la};
`,da=H.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var ua=s.memo(function({column:e,disabled:t,draggingColumnId:n,selectedColumn:r={},sortDirection:o,sortIcon:a,sortServer:l,pagination:c,paginationServer:p,persistSelectedOnSort:w,selectableRowsVisibleOnly:m,onSort:y,onDragStart:j,onDragOver:D,onDragEnd:v,onDragEnter:C,onDragLeave:b}){s.useEffect(()=>{typeof e.selector=="string"&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[O,x]=s.useState(!1),P=s.useRef(null);if(s.useEffect(()=>{P.current&&x(P.current.scrollWidth>P.current.clientWidth)},[O]),e.omit)return null;const A=()=>{if(!e.sortable&&!e.selector)return;let G=o;Je(r.id,e.id)&&(G=o===De.ASC?De.DESC:De.ASC),y({type:"SORT_CHANGE",sortDirection:G,selectedColumn:e,clearSelectedOnSort:c&&p&&!w||l||m})},F=G=>s.createElement(ia,{sortActive:G,sortDirection:o}),Q=()=>s.createElement("span",{className:[o,"__rdt_custom_sort_icon__"].join(" ")},a),V=!(!e.sortable||!Je(r.id,e.id)),M=!e.sortable||t,re=e.sortable&&!a&&!e.right,K=e.sortable&&!a&&e.right,ce=e.sortable&&a&&!e.right,J=e.sortable&&a&&e.right;return s.createElement(sa,{"data-column-id":e.id,className:"rdt_TableCol",headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,isDragging:Je(e.id,n),onDragStart:j,onDragOver:D,onDragEnd:v,onDragEnter:C,onDragLeave:b},e.name&&s.createElement(ca,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:M?void 0:A,onKeyPress:M?void 0:G=>{G.key==="Enter"&&A()},sortActive:!M&&V,disabled:M},!M&&J&&Q(),!M&&K&&F(V),typeof e.name=="string"?s.createElement(da,{title:O?e.name:void 0,ref:P,"data-column-id":e.id},e.name):e.name,!M&&ce&&Q(),!M&&re&&F(V)))});const pa=H(Ye)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function ga({headCell:e=!0,rowData:t,keyField:n,allSelected:r,mergeSelections:o,selectedRows:a,selectableRowsComponent:l,selectableRowsComponentProps:c,selectableRowDisabled:p,onSelectAllRows:w}){const m=a.length>0&&!r,y=p?t.filter(v=>!p(v)):t,j=y.length===0,D=Math.min(t.length,y.length);return s.createElement(pa,{className:"rdt_TableCol",headCell:e,noPadding:!0},s.createElement(Jn,{name:"select-all-rows",component:l,componentOptions:c,onClick:()=>{w({type:"SELECT_ALL_ROWS",rows:y,rowCount:D,mergeSelections:o,keyField:n})},checked:r,indeterminate:m,disabled:j}))}function qn(e=pt.AUTO){const t=typeof window=="object",[n,r]=s.useState(!1);return s.useEffect(()=>{if(t)if(e!=="auto")r(e==="rtl");else{const o=!(!window.document||!window.document.createElement),a=document.getElementsByTagName("BODY")[0],l=document.getElementsByTagName("HTML")[0],c=a.dir==="rtl"||l.dir==="rtl";r(o&&c)}},[e,t]),n}const fa=H.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,ha=H.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,In=H.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({rtl:e})=>e&&"direction: rtl"};
	${({theme:e})=>e.contextMenu.style};
	${({theme:e,visible:t})=>t&&e.contextMenu.activeStyle};
`;function ma({contextMessage:e,contextActions:t,contextComponent:n,selectedCount:r,direction:o}){const a=qn(o),l=r>0;return n?s.createElement(In,{visible:l},s.cloneElement(n,{selectedCount:r})):s.createElement(In,{visible:l,rtl:a},s.createElement(fa,null,((c,p,w)=>{if(p===0)return null;const m=p===1?c.singular:c.plural;return w?`${p} ${c.message||""} ${m}`:`${p} ${m} ${c.message||""}`})(e,r,a)),s.createElement(ha,null,t))}const ba=H.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:e})=>e.header.style}
`,wa=H.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,ya=H.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,va=({title:e,actions:t=null,contextMessage:n,contextActions:r,contextComponent:o,selectedCount:a,direction:l,showMenu:c=!0})=>s.createElement(ba,{className:"rdt_TableHeader",role:"heading","aria-level":1},s.createElement(wa,null,e),t&&s.createElement(ya,null,t),c&&s.createElement(ma,{contextMessage:n,contextActions:r,contextComponent:o,direction:l,selectedCount:a}));function er(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}const xa={left:"flex-start",right:"flex-end",center:"center"},Ca=H.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>xa[e]};
	flex-wrap: ${({wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,Sa=e=>{var{align:t="right",wrapContent:n=!0}=e,r=er(e,["align","wrapContent"]);return s.createElement(Ca,Object.assign({align:t,wrapContent:n},r))},Ra=H.div`
	display: flex;
	flex-direction: column;
`,Ea=H.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({responsive:e,fixedHeader:t})=>e&&ie`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({fixedHeader:e=!1,fixedHeaderScrollHeight:t="100vh"})=>e&&ie`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,Tn=H.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,$a=H.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,ka=H(Ye)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,Oa=H.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,Aa=()=>_.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},_.createElement("path",{d:"M7 10l5 5 5-5z"}),_.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),Pa=H.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,Da=H.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`,Ia=e=>{var{defaultValue:t,onChange:n}=e,r=er(e,["defaultValue","onChange"]);return s.createElement(Da,null,s.createElement(Pa,Object.assign({onChange:n,defaultValue:t},r)),s.createElement(Aa,null))},d={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return _.createElement("div",null,"To add an expander pass in a component instance via ",_.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:_.createElement(()=>_.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},_.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),_.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:_.createElement(()=>_.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},_.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),_.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:_.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:_.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:Vt.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:_.createElement(()=>_.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},_.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),_.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:_.createElement(()=>_.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},_.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),_.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:_.createElement(()=>_.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},_.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),_.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:_.createElement(()=>_.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},_.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),_.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:pt.AUTO,onChangePage:ae,onChangeRowsPerPage:ae,onRowClicked:ae,onRowDoubleClicked:ae,onRowMouseEnter:ae,onRowMouseLeave:ae,onRowExpandToggled:ae,onSelectedRowsChange:ae,onSort:ae,onColumnOrderChange:ae},Ta={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},ja=H.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,at=H.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,_a=H.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${Qn`
    width: 100%;
    justify-content: space-around;
  `};
`,tr=H.span`
	flex-shrink: 1;
	user-select: none;
`,Ha=H(tr)`
	margin: 0 24px;
`,Fa=H(tr)`
	margin: 0 4px;
`;var Ma=s.memo(function({rowsPerPage:e,rowCount:t,currentPage:n,direction:r=d.direction,paginationRowsPerPageOptions:o=d.paginationRowsPerPageOptions,paginationIconLastPage:a=d.paginationIconLastPage,paginationIconFirstPage:l=d.paginationIconFirstPage,paginationIconNext:c=d.paginationIconNext,paginationIconPrevious:p=d.paginationIconPrevious,paginationComponentOptions:w=d.paginationComponentOptions,onChangeRowsPerPage:m=d.onChangeRowsPerPage,onChangePage:y=d.onChangePage}){const j=(()=>{const G=typeof window=="object";function de(){return{width:G?window.innerWidth:void 0,height:G?window.innerHeight:void 0}}const[te,me]=s.useState(de);return s.useEffect(()=>{if(!G)return()=>null;function se(){me(de())}return window.addEventListener("resize",se),()=>window.removeEventListener("resize",se)},[]),te})(),D=qn(r),v=j.width&&j.width>599,C=Ke(t,e),b=n*e,O=b-e+1,x=n===1,P=n===C,A=Object.assign(Object.assign({},Ta),w),F=n===C?`${O}-${t} ${A.rangeSeparatorText} ${t}`:`${O}-${b} ${A.rangeSeparatorText} ${t}`,Q=s.useCallback(()=>y(n-1),[n,y]),V=s.useCallback(()=>y(n+1),[n,y]),M=s.useCallback(()=>y(1),[y]),re=s.useCallback(()=>y(Ke(t,e)),[y,t,e]),K=s.useCallback(G=>m(Number(G.target.value),n),[n,m]),ce=o.map(G=>s.createElement("option",{key:G,value:G},G));A.selectAllRowsItem&&ce.push(s.createElement("option",{key:-1,value:t},A.selectAllRowsItemText));const J=s.createElement(Ia,{onChange:K,defaultValue:e,"aria-label":A.rowsPerPageText},ce);return s.createElement(ja,{className:"rdt_Pagination"},!A.noRowsPerPage&&v&&s.createElement(s.Fragment,null,s.createElement(Fa,null,A.rowsPerPageText),J),v&&s.createElement(Ha,null,F),s.createElement(_a,null,s.createElement(at,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":x,onClick:M,disabled:x,isRTL:D},l),s.createElement(at,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":x,onClick:Q,disabled:x,isRTL:D},p),!v&&J,s.createElement(at,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":P,onClick:V,disabled:P,isRTL:D},c),s.createElement(at,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":P,onClick:re,disabled:P,isRTL:D},a)))});const _e=(e,t)=>{const n=s.useRef(!0);s.useEffect(()=>{n.current?n.current=!1:e()},t)};var La=function(e){return function(t){return!!t&&typeof t=="object"}(e)&&!function(t){var n=Object.prototype.toString.call(t);return n==="[object RegExp]"||n==="[object Date]"||function(r){return r.$$typeof===Na}(t)}(e)},Na=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function qe(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Ve((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function za(e,t,n){return e.concat(t).map(function(r){return qe(r,n)})}function jn(e){return Object.keys(e).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(n){return t.propertyIsEnumerable(n)}):[]}(e))}function _n(e,t){try{return t in e}catch{return!1}}function Wa(e,t,n){var r={};return n.isMergeableObject(e)&&jn(e).forEach(function(o){r[o]=qe(e[o],n)}),jn(t).forEach(function(o){(function(a,l){return _n(a,l)&&!(Object.hasOwnProperty.call(a,l)&&Object.propertyIsEnumerable.call(a,l))})(e,o)||(_n(e,o)&&n.isMergeableObject(t[o])?r[o]=function(a,l){if(!l.customMerge)return Ve;var c=l.customMerge(a);return typeof c=="function"?c:Ve}(o,n)(e[o],t[o],n):r[o]=qe(t[o],n))}),r}function Ve(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||za,n.isMergeableObject=n.isMergeableObject||La,n.cloneUnlessOtherwiseSpecified=qe;var r=Array.isArray(t);return r===Array.isArray(e)?r?n.arrayMerge(e,t,n):Wa(e,t,n):qe(t,n)}Ve.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(n,r){return Ve(n,r,t)},{})};var Ba=Ve;const Hn={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},Fn={default:Hn,light:Hn,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function Ga(e,t,n,r){const[o,a]=s.useState(()=>Pn(e)),[l,c]=s.useState(""),p=s.useRef("");_e(()=>{a(Pn(e))},[e]);const w=s.useCallback(b=>{var O,x,P;const{attributes:A}=b.target,F=(O=A.getNamedItem("data-column-id"))===null||O===void 0?void 0:O.value;F&&(p.current=((P=(x=o[ot(o,F)])===null||x===void 0?void 0:x.id)===null||P===void 0?void 0:P.toString())||"",c(p.current))},[o]),m=s.useCallback(b=>{var O;const{attributes:x}=b.target,P=(O=x.getNamedItem("data-column-id"))===null||O===void 0?void 0:O.value;if(P&&p.current&&P!==p.current){const A=ot(o,p.current),F=ot(o,P),Q=[...o];Q[A]=o[F],Q[F]=o[A],a(Q),t(Q)}},[t,o]),y=s.useCallback(b=>{b.preventDefault()},[]),j=s.useCallback(b=>{b.preventDefault()},[]),D=s.useCallback(b=>{b.preventDefault(),p.current="",c("")},[]),v=function(b=!1){return b?De.ASC:De.DESC}(r),C=s.useMemo(()=>o[ot(o,n==null?void 0:n.toString())]||{},[n,o]);return{tableColumns:o,draggingColumnId:l,handleDragStart:w,handleDragEnter:m,handleDragOver:y,handleDragLeave:j,handleDragEnd:D,defaultSortDirection:v,defaultSortColumn:C}}var Va=s.memo(function(e){const{data:t=d.data,columns:n=d.columns,title:r=d.title,actions:o=d.actions,keyField:a=d.keyField,striped:l=d.striped,highlightOnHover:c=d.highlightOnHover,pointerOnHover:p=d.pointerOnHover,dense:w=d.dense,selectableRows:m=d.selectableRows,selectableRowsSingle:y=d.selectableRowsSingle,selectableRowsHighlight:j=d.selectableRowsHighlight,selectableRowsNoSelectAll:D=d.selectableRowsNoSelectAll,selectableRowsVisibleOnly:v=d.selectableRowsVisibleOnly,selectableRowSelected:C=d.selectableRowSelected,selectableRowDisabled:b=d.selectableRowDisabled,selectableRowsComponent:O=d.selectableRowsComponent,selectableRowsComponentProps:x=d.selectableRowsComponentProps,onRowExpandToggled:P=d.onRowExpandToggled,onSelectedRowsChange:A=d.onSelectedRowsChange,expandableIcon:F=d.expandableIcon,onChangeRowsPerPage:Q=d.onChangeRowsPerPage,onChangePage:V=d.onChangePage,paginationServer:M=d.paginationServer,paginationServerOptions:re=d.paginationServerOptions,paginationTotalRows:K=d.paginationTotalRows,paginationDefaultPage:ce=d.paginationDefaultPage,paginationResetDefaultPage:J=d.paginationResetDefaultPage,paginationPerPage:G=d.paginationPerPage,paginationRowsPerPageOptions:de=d.paginationRowsPerPageOptions,paginationIconLastPage:te=d.paginationIconLastPage,paginationIconFirstPage:me=d.paginationIconFirstPage,paginationIconNext:se=d.paginationIconNext,paginationIconPrevious:ue=d.paginationIconPrevious,paginationComponent:Ee=d.paginationComponent,paginationComponentOptions:xe=d.paginationComponentOptions,responsive:$e=d.responsive,progressPending:h=d.progressPending,progressComponent:g=d.progressComponent,persistTableHead:f=d.persistTableHead,noDataComponent:$=d.noDataComponent,disabled:i=d.disabled,noTableHead:N=d.noTableHead,noHeader:u=d.noHeader,fixedHeader:X=d.fixedHeader,fixedHeaderScrollHeight:z=d.fixedHeaderScrollHeight,pagination:T=d.pagination,subHeader:S=d.subHeader,subHeaderAlign:q=d.subHeaderAlign,subHeaderWrap:oe=d.subHeaderWrap,subHeaderComponent:L=d.subHeaderComponent,noContextMenu:ne=d.noContextMenu,contextMessage:W=d.contextMessage,contextActions:I=d.contextActions,contextComponent:Ie=d.contextComponent,expandableRows:ee=d.expandableRows,onRowClicked:Te=d.onRowClicked,onRowDoubleClicked:ke=d.onRowDoubleClicked,onRowMouseEnter:fe=d.onRowMouseEnter,onRowMouseLeave:R=d.onRowMouseLeave,sortIcon:Z=d.sortIcon,onSort:Ue=d.onSort,sortFunction:Fe=d.sortFunction,sortServer:be=d.sortServer,expandableRowsComponent:nr=d.expandableRowsComponent,expandableRowsComponentProps:rr=d.expandableRowsComponentProps,expandableRowDisabled:tn=d.expandableRowDisabled,expandableRowsHideExpander:nn=d.expandableRowsHideExpander,expandOnRowClicked:or=d.expandOnRowClicked,expandOnRowDoubleClicked:ar=d.expandOnRowDoubleClicked,expandableRowExpanded:rn=d.expandableRowExpanded,expandableInheritConditionalStyles:ir=d.expandableInheritConditionalStyles,defaultSortFieldId:sr=d.defaultSortFieldId,defaultSortAsc:lr=d.defaultSortAsc,clearSelectedRows:on=d.clearSelectedRows,conditionalRowStyles:cr=d.conditionalRowStyles,theme:an=d.theme,customStyles:sn=d.customStyles,direction:Xe=d.direction,onColumnOrderChange:dr=d.onColumnOrderChange,className:ur}=e,{tableColumns:ln,draggingColumnId:cn,handleDragStart:dn,handleDragEnter:un,handleDragOver:pn,handleDragLeave:gn,handleDragEnd:fn,defaultSortDirection:pr,defaultSortColumn:gr}=Ga(n,dr,sr,lr),[{rowsPerPage:Oe,currentPage:ye,selectedRows:Tt,allSelected:hn,selectedCount:mn,selectedColumn:Ce,sortDirection:Me,toggleOnSelectedRowsChange:fr},je]=s.useReducer(_o,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:gr,toggleOnSelectedRowsChange:!1,sortDirection:pr,currentPage:ce,rowsPerPage:G,selectedRowsFlag:!1,contextMessage:d.contextMessage}),{persistSelectedOnSort:bn=!1,persistSelectedOnPageChange:et=!1}=re,wn=!(!M||!et&&!bn),hr=T&&!h&&t.length>0,mr=Ee||Ma,br=s.useMemo(()=>((k={},B="default",ge="default")=>{const ve=Fn[B]?B:ge;return Ba({table:{style:{color:(E=Fn[ve]).text.primary,backgroundColor:E.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:E.text.primary,backgroundColor:E.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:E.background.default,minHeight:"52px"}},head:{style:{color:E.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:E.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:E.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:E.context.background,fontSize:"18px",fontWeight:400,color:E.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:E.text.primary,backgroundColor:E.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:E.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:E.selected.text,backgroundColor:E.selected.default,borderBottomColor:E.background.default}},highlightOnHoverStyle:{color:E.highlightOnHover.text,backgroundColor:E.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:E.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:E.background.default},stripedStyle:{color:E.striped.text,backgroundColor:E.striped.default}},expanderRow:{style:{color:E.text.primary,backgroundColor:E.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:E.button.default,fill:E.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:E.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:E.button.hover},"&:focus":{outline:"none",backgroundColor:E.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:E.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:E.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:E.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:E.button.default,fill:E.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:E.button.disabled,fill:E.button.disabled},"&:hover:not(:disabled)":{backgroundColor:E.button.hover},"&:focus":{outline:"none",backgroundColor:E.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:E.text.primary,backgroundColor:E.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:E.text.primary,backgroundColor:E.background.default}}},k);var E})(sn,an),[sn,an]),wr=s.useMemo(()=>Object.assign({},Xe!=="auto"&&{dir:Xe}),[Xe]),pe=s.useMemo(()=>{if(be)return t;if(Ce!=null&&Ce.sortFunction&&typeof Ce.sortFunction=="function"){const k=Ce.sortFunction,B=Me===De.ASC?k:(ge,ve)=>-1*k(ge,ve);return[...t].sort(B)}return function(k,B,ge,ve){return B?ve&&typeof ve=="function"?ve(k.slice(0),B,ge):k.slice(0).sort((E,tt)=>{let Ae,Se;if(typeof B=="string"?(Ae=Gt(E,B),Se=Gt(tt,B)):(Ae=B(E),Se=B(tt)),ge==="asc"){if(Ae<Se)return-1;if(Ae>Se)return 1}if(ge==="desc"){if(Ae>Se)return-1;if(Ae<Se)return 1}return 0}):k}(t,Ce==null?void 0:Ce.selector,Me,Fe)},[be,Ce,Me,t,Fe]),Ze=s.useMemo(()=>{if(T&&!M){const k=ye*Oe,B=k-Oe;return pe.slice(B,k)}return pe},[ye,T,M,Oe,pe]),yr=s.useCallback(k=>{je(k)},[]),vr=s.useCallback(k=>{je(k)},[]),xr=s.useCallback(k=>{je(k)},[]),Cr=s.useCallback((k,B)=>Te(k,B),[Te]),Sr=s.useCallback((k,B)=>ke(k,B),[ke]),Rr=s.useCallback((k,B)=>fe(k,B),[fe]),Er=s.useCallback((k,B)=>R(k,B),[R]),Le=s.useCallback(k=>je({type:"CHANGE_PAGE",page:k,paginationServer:M,visibleOnly:v,persistSelectedOnPageChange:et}),[M,et,v]),$r=s.useCallback(k=>{const B=Ke(K||Ze.length,k),ge=Ft(ye,B);M||Le(ge),je({type:"CHANGE_ROWS_PER_PAGE",page:ge,rowsPerPage:k})},[ye,Le,M,K,Ze.length]);if(T&&!M&&pe.length>0&&Ze.length===0){const k=Ke(pe.length,Oe),B=Ft(ye,k);Le(B)}_e(()=>{A({allSelected:hn,selectedCount:mn,selectedRows:Tt.slice(0)})},[fr]),_e(()=>{Ue(Ce,Me,pe.slice(0))},[Ce,Me]),_e(()=>{V(ye,K||pe.length)},[ye]),_e(()=>{Q(Oe,ye)},[Oe]),_e(()=>{Le(ce)},[ce,J]),_e(()=>{if(T&&M&&K>0){const k=Ke(K,Oe),B=Ft(ye,k);ye!==B&&Le(B)}},[K]),s.useEffect(()=>{je({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:on})},[y,on]),s.useEffect(()=>{if(!C)return;const k=pe.filter(ge=>C(ge)),B=y?k.slice(0,1):k;je({type:"SELECT_MULTIPLE_ROWS",keyField:a,selectedRows:B,totalRows:pe.length,mergeSelections:wn})},[t,C]);const kr=v?Ze:pe,Or=et||y||D;return s.createElement(Io,{theme:br},!u&&(!!r||!!o)&&s.createElement(va,{title:r,actions:o,showMenu:!ne,selectedCount:mn,direction:Xe,contextActions:I,contextComponent:Ie,contextMessage:W}),S&&s.createElement(Sa,{align:q,wrapContent:oe},L),s.createElement(Ea,Object.assign({responsive:$e,fixedHeader:X,fixedHeaderScrollHeight:z,className:ur},wr),s.createElement($a,null,h&&!f&&s.createElement(Tn,null,g),s.createElement(Fo,{disabled:i,className:"rdt_Table",role:"table"},!N&&(!!f||pe.length>0&&!h)&&s.createElement(Lo,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:X},s.createElement(No,{className:"rdt_TableHeadRow",role:"row",dense:w},m&&(Or?s.createElement(Ye,{style:{flex:"0 0 48px"}}):s.createElement(ga,{allSelected:hn,selectedRows:Tt,selectableRowsComponent:O,selectableRowsComponentProps:x,selectableRowDisabled:b,rowData:kr,keyField:a,mergeSelections:wn,onSelectAllRows:vr})),ee&&!nn&&s.createElement(ka,null),ln.map(k=>s.createElement(ua,{key:k.id,column:k,selectedColumn:Ce,disabled:h||pe.length===0,pagination:T,paginationServer:M,persistSelectedOnSort:bn,selectableRowsVisibleOnly:v,sortDirection:Me,sortIcon:Z,sortServer:be,onSort:yr,onDragStart:dn,onDragOver:pn,onDragEnd:fn,onDragEnter:un,onDragLeave:gn,draggingColumnId:cn})))),!pe.length&&!h&&s.createElement(Oa,null,$),h&&f&&s.createElement(Tn,null,g),!h&&pe.length>0&&s.createElement(Ra,{className:"rdt_TableBody",role:"rowgroup"},Ze.map((k,B)=>{const ge=Ge(k,a),ve=function(Se=""){return typeof Se!="number"&&(!Se||Se.length===0)}(ge)?B:ge,E=st(k,Tt,a),tt=!!(ee&&rn&&rn(k)),Ae=!!(ee&&tn&&tn(k));return s.createElement(oa,{id:ve,key:ve,keyField:a,"data-row-id":ve,columns:ln,row:k,rowCount:pe.length,rowIndex:B,selectableRows:m,expandableRows:ee,expandableIcon:F,highlightOnHover:c,pointerOnHover:p,dense:w,expandOnRowClicked:or,expandOnRowDoubleClicked:ar,expandableRowsComponent:nr,expandableRowsComponentProps:rr,expandableRowsHideExpander:nn,defaultExpanderDisabled:Ae,defaultExpanded:tt,expandableInheritConditionalStyles:ir,conditionalRowStyles:cr,selected:E,selectableRowsHighlight:j,selectableRowsComponent:O,selectableRowsComponentProps:x,selectableRowDisabled:b,selectableRowsSingle:y,striped:l,onRowExpandToggled:P,onRowClicked:Cr,onRowDoubleClicked:Sr,onRowMouseEnter:Rr,onRowMouseLeave:Er,onSelectedRow:xr,draggingColumnId:cn,onDragStart:dn,onDragOver:pn,onDragEnd:fn,onDragEnter:un,onDragLeave:gn})}))))),hr&&s.createElement("div",null,s.createElement(mr,{onChangePage:Le,onChangeRowsPerPage:$r,rowCount:K||pe.length,currentPage:ye,rowsPerPage:Oe,direction:Xe,paginationRowsPerPageOptions:de,paginationIconLastPage:te,paginationIconFirstPage:me,paginationIconNext:se,paginationIconPrevious:ue,paginationComponentOptions:xe})))});const Ya=[{name:"Title",selector:e=>e.title,sortable:!0},{name:"Year",selector:e=>e.year,sortable:!0}],Ua=[{id:1,title:"Beetlejuice",year:"1988"},{id:2,title:"Ghostbusters",year:"1984"}];function Ja({auth:e,chirps:t}){return jt(Ar,{user:e.user,header:jt("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Table"}),children:jt(Va,{className:"table-auto",columns:Ya,data:Ua})})}export{Ja as default};
