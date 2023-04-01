"use strict";(self["webpackChunkvue_hf4"]=self["webpackChunkvue_hf4"]||[]).push([[980],{5980:(e,t,n)=>{n.d(t,{c:()=>y});var i=n(6587),o=n(6645);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
let a;const r=e=>(e.forEach((e=>{for(const t in e)if(e.hasOwnProperty(t)){const n=e[t];if("easing"===t){const i="animation-timing-function";e[i]=n,delete e[t]}else{const i=s(t);i!==t&&(e[i]=n,delete e[t])}}})),e),s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f=e=>{if(void 0===a){const t=void 0!==e.style.animationName,n=void 0!==e.style.webkitAnimationName;a=!t&&n?"-webkit-":""}return a},l=(e,t,n)=>{const i=t.startsWith("animation")?f(e):"";e.style.setProperty(i+t,n)},c=(e,t)=>{const n=t.startsWith("animation")?f(e):"";e.style.removeProperty(n+t)},d=(e,t)=>{let n;const i={passive:!0},o=()=>{n&&n()},a=n=>{e===n.target&&(o(),t(n))};return e&&(e.addEventListener("webkitAnimationEnd",a,i),e.addEventListener("animationend",a,i),n=()=>{e.removeEventListener("webkitAnimationEnd",a,i),e.removeEventListener("animationend",a,i)}),o},m=(e=[])=>e.map((e=>{const t=e.offset,n=[];for(const i in e)e.hasOwnProperty(i)&&"offset"!==i&&n.push(`${i}: ${e[i]};`);return`${100*t}% { ${n.join(" ")} }`})).join(" "),h=[],u=e=>{let t=h.indexOf(e);return t<0&&(t=h.push(e)-1),`ion-animation-${t}`},p=e=>{const t=void 0!==e.getRootNode?e.getRootNode():e;return t.head||t},g=(e,t,n)=>{var i;const o=p(n),a=f(n),r=o.querySelector("#"+e);if(r)return r;const s=(null!==(i=n.ownerDocument)&&void 0!==i?i:document).createElement("style");return s.id=e,s.textContent=`@${a}keyframes ${e} { ${t} } @${a}keyframes ${e}-alt { ${t} }`,o.appendChild(s),s},v=(e=[],t)=>{if(void 0!==t){const n=Array.isArray(t)?t:[t];return[...e,...n]}return e},y=e=>{let t,n,a,s,f,h,p,y,E,$,A,b,C,w=[],k=[],T=[],S=!1,D={},L=[],P=[],R={},F=0,N=!1,O=!1,W=!0,K=!1,x=!0,I=!1;const j=e,M=[],_=[],q=[],z=[],Z=[],B=[],G=[],H=[],J=[],Q=[],U="function"===typeof AnimationEffect||void 0!==o.w&&"function"===typeof o.w.AnimationEffect,V="function"===typeof Element&&"function"===typeof Element.prototype.animate&&U,X=100,Y=()=>Q,ee=e=>(z.forEach((t=>{t.destroy(e)})),te(e),q.length=0,z.length=0,w.length=0,ae(),S=!1,x=!0,C),te=e=>{re(),e&&se()},ne=()=>{N=!1,O=!1,x=!0,E=void 0,$=void 0,A=void 0,F=0,K=!1,W=!0,I=!1},ie=()=>0!==F&&!I,oe=(e,t)=>{const n=(null===t||void 0===t?void 0:t.oneTimeCallback)?_:M;return n.push({c:e,o:t}),C},ae=()=>(M.length=0,_.length=0,C),re=()=>{if(V)Q.forEach((e=>{e.cancel()})),Q.length=0;else{const e=q.slice();(0,i.r)((()=>{e.forEach((e=>{c(e,"animation-name"),c(e,"animation-duration"),c(e,"animation-timing-function"),c(e,"animation-iteration-count"),c(e,"animation-delay"),c(e,"animation-play-state"),c(e,"animation-fill-mode"),c(e,"animation-direction")}))}))}},se=()=>{Z.forEach((e=>{(null===e||void 0===e?void 0:e.parentNode)&&e.parentNode.removeChild(e)})),Z.length=0},fe=e=>(B.push(e),C),le=e=>(G.push(e),C),ce=e=>(H.push(e),C),de=e=>(J.push(e),C),me=e=>(k=v(k,e),C),he=e=>(T=v(T,e),C),ue=(e={})=>(D=e,C),pe=(e=[])=>{for(const t of e)D[t]="";return C},ge=e=>(L=v(L,e),C),ve=e=>(P=v(P,e),C),ye=(e={})=>(R=e,C),Ee=(e=[])=>{for(const t of e)R[t]="";return C},$e=()=>void 0!==f?f:p?p.getFill():"both",Ae=()=>void 0!==E?E:void 0!==h?h:p?p.getDirection():"normal",be=()=>N?"linear":void 0!==a?a:p?p.getEasing():"linear",Ce=()=>O?0:void 0!==$?$:void 0!==n?n:p?p.getDuration():0,we=()=>void 0!==s?s:p?p.getIterations():1,ke=()=>void 0!==A?A:void 0!==t?t:p?p.getDelay():0,Te=()=>w,Se=e=>(h=e,He(!0),C),De=e=>(f=e,He(!0),C),Le=e=>(t=e,He(!0),C),Pe=e=>(a=e,He(!0),C),Re=e=>(V||0!==e||(e=1),n=e,He(!0),C),Fe=e=>(s=e,He(!0),C),Ne=e=>(p=e,C),Oe=e=>{if(null!=e)if(1===e.nodeType)q.push(e);else if(e.length>=0)for(let t=0;t<e.length;t++)q.push(e[t]);else console.error("Invalid addElement value");return C},We=e=>{if(null!=e)if(Array.isArray(e))for(const t of e)t.parent(C),z.push(t);else e.parent(C),z.push(e);return C},Ke=e=>{const t=w!==e;return w=e,t&&xe(w),C},xe=e=>{V?Y().forEach((t=>{if(t.effect.setKeyframes)t.effect.setKeyframes(e);else{const n=new KeyframeEffect(t.effect.target,e,t.effect.getTiming());t.effect=n}})):_e()},Ie=()=>{B.forEach((e=>e())),G.forEach((e=>e()));const e=k,t=T,n=D;q.forEach((i=>{const o=i.classList;e.forEach((e=>o.add(e))),t.forEach((e=>o.remove(e)));for(const e in n)n.hasOwnProperty(e)&&l(i,e,n[e])}))},je=()=>{et(),H.forEach((e=>e())),J.forEach((e=>e()));const e=W?1:0,t=L,n=P,i=R;q.forEach((e=>{const o=e.classList;t.forEach((e=>o.add(e))),n.forEach((e=>o.remove(e)));for(const t in i)i.hasOwnProperty(t)&&l(e,t,i[t])})),M.forEach((t=>t.c(e,C))),_.forEach((t=>t.c(e,C))),_.length=0,x=!0,W&&(K=!0),W=!0},Me=()=>{0!==F&&(F--,0===F&&(je(),p&&p.animationFinish()))},_e=(t=!0)=>{se();const n=r(w);q.forEach((o=>{if(n.length>0){const a=m(n);b=void 0!==e?e:u(a);const r=g(b,a,o);Z.push(r),l(o,"animation-duration",`${Ce()}ms`),l(o,"animation-timing-function",be()),l(o,"animation-delay",`${ke()}ms`),l(o,"animation-fill-mode",$e()),l(o,"animation-direction",Ae());const s=we()===1/0?"infinite":we().toString();l(o,"animation-iteration-count",s),l(o,"animation-play-state","paused"),t&&l(o,"animation-name",`${r.id}-alt`),(0,i.r)((()=>{l(o,"animation-name",r.id||null)}))}}))},qe=()=>{q.forEach((e=>{const t=e.animate(w,{id:j,delay:ke(),duration:Ce(),easing:be(),iterations:we(),fill:$e(),direction:Ae()});t.pause(),Q.push(t)})),Q.length>0&&(Q[0].onfinish=()=>{Me()})},ze=(e=!0)=>{Ie(),w.length>0&&(V?qe():_e(e)),S=!0},Ze=e=>{if(e=Math.min(Math.max(e,0),.9999),V)Q.forEach((t=>{t.currentTime=t.effect.getComputedTiming().delay+Ce()*e,t.pause()}));else{const t=`-${Ce()*e}ms`;q.forEach((e=>{w.length>0&&(l(e,"animation-delay",t),l(e,"animation-play-state","paused"))}))}},Be=e=>{Q.forEach((e=>{e.effect.updateTiming({delay:ke(),duration:Ce(),easing:be(),iterations:we(),fill:$e(),direction:Ae()})})),void 0!==e&&Ze(e)},Ge=(e=!0,t)=>{(0,i.r)((()=>{q.forEach((n=>{l(n,"animation-name",b||null),l(n,"animation-duration",`${Ce()}ms`),l(n,"animation-timing-function",be()),l(n,"animation-delay",void 0!==t?`-${t*Ce()}ms`:`${ke()}ms`),l(n,"animation-fill-mode",$e()||null),l(n,"animation-direction",Ae()||null);const o=we()===1/0?"infinite":we().toString();l(n,"animation-iteration-count",o),e&&l(n,"animation-name",`${b}-alt`),(0,i.r)((()=>{l(n,"animation-name",b||null)}))}))}))},He=(e=!1,t=!0,n)=>(e&&z.forEach((i=>{i.update(e,t,n)})),V?Be(n):Ge(t,n),C),Je=(e=!1,t)=>(z.forEach((n=>{n.progressStart(e,t)})),Ve(),N=e,S||ze(),He(!1,!0,t),C),Qe=e=>(z.forEach((t=>{t.progressStep(e)})),Ze(e),C),Ue=(e,t,n)=>(N=!1,z.forEach((i=>{i.progressEnd(e,t,n)})),void 0!==n&&($=n),K=!1,W=!0,0===e?(E="reverse"===Ae()?"normal":"reverse","reverse"===E&&(W=!1),V?(He(),Ze(1-t)):(A=(1-t)*Ce()*-1,He(!1,!1))):1===e&&(V?(He(),Ze(t)):(A=t*Ce()*-1,He(!1,!1))),void 0!==e&&(oe((()=>{$=void 0,E=void 0,A=void 0}),{oneTimeCallback:!0}),p||at()),C),Ve=()=>{S&&(V?Q.forEach((e=>{e.pause()})):q.forEach((e=>{l(e,"animation-play-state","paused")})),I=!0)},Xe=()=>(z.forEach((e=>{e.pause()})),Ve(),C),Ye=()=>{y=void 0,Me()},et=()=>{y&&clearTimeout(y)},tt=()=>{if(et(),(0,i.r)((()=>{q.forEach((e=>{w.length>0&&l(e,"animation-play-state","running")}))})),0===w.length||0===q.length)Me();else{const e=ke()||0,t=Ce()||0,n=we()||1;isFinite(n)&&(y=setTimeout(Ye,e+t*n+X)),d(q[0],(()=>{et(),(0,i.r)((()=>{nt(),(0,i.r)(Me)}))}))}},nt=()=>{q.forEach((e=>{c(e,"animation-duration"),c(e,"animation-delay"),c(e,"animation-play-state")}))},it=()=>{Q.forEach((e=>{e.play()})),0!==w.length&&0!==q.length||Me()},ot=()=>{V?(Ze(0),Be()):Ge()},at=e=>new Promise((t=>{(null===e||void 0===e?void 0:e.sync)&&(O=!0,oe((()=>O=!1),{oneTimeCallback:!0})),S||ze(),K&&(ot(),K=!1),x&&(F=z.length+1,x=!1),oe((()=>t()),{oneTimeCallback:!0}),z.forEach((e=>{e.play()})),V?it():tt(),I=!1})),rt=()=>{z.forEach((e=>{e.stop()})),S&&(re(),S=!1),ne()},st=(e,t)=>{const n=w[0];return void 0===n||void 0!==n.offset&&0!==n.offset?w=[{offset:0,[e]:t},...w]:n[e]=t,C},ft=(e,t)=>{const n=w[w.length-1];return void 0===n||void 0!==n.offset&&1!==n.offset?w=[...w,{offset:1,[e]:t}]:n[e]=t,C},lt=(e,t,n)=>st(e,t).to(e,n);return C={parentAnimation:p,elements:q,childAnimations:z,id:j,animationFinish:Me,from:st,to:ft,fromTo:lt,parent:Ne,play:at,pause:Xe,stop:rt,destroy:ee,keyframes:Ke,addAnimation:We,addElement:Oe,update:He,fill:De,direction:Se,iterations:Fe,duration:Re,easing:Pe,delay:Le,getWebAnimations:Y,getKeyframes:Te,getFill:$e,getDirection:Ae,getDelay:ke,getIterations:we,getEasing:be,getDuration:Ce,afterAddRead:ce,afterAddWrite:de,afterClearStyles:Ee,afterStyles:ye,afterRemoveClass:ve,afterAddClass:ge,beforeAddRead:fe,beforeAddWrite:le,beforeClearStyles:pe,beforeStyles:ue,beforeRemoveClass:he,beforeAddClass:me,onFinish:oe,isRunning:ie,progressStart:Je,progressStep:Qe,progressEnd:Ue}}}}]);
//# sourceMappingURL=980-legacy.73d6425b.js.map