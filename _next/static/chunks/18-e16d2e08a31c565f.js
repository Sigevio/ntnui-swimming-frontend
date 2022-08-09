"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18],{3018:function(t,r,a){a.d(r,{pT:function(){return Mt}});var e=a(7294),n=(a(8357),a(4880)),o=(a(8679),a(8137),a(5893)),s=o.Fragment;function i(t,r,a){return n.h.call(r,"css")?(0,o.jsx)(n.E,(0,n.c)(t,r),a):(0,o.jsx)(t,r,a)}var c=a(917);function m(){return m=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])}return t},m.apply(this,arguments)}const f=new Map,l=new WeakMap;let d,p=0;function u(t){return Object.keys(t).sort().filter((r=>void 0!==t[r])).map((r=>{return`${r}_${"root"===r?(a=t.root,a?(l.has(a)||(p+=1,l.set(a,p.toString())),l.get(a)):"0"):t[r]}`;var a})).toString()}function y(t,r,a={},e=d){if("undefined"===typeof window.IntersectionObserver&&void 0!==e){const n=t.getBoundingClientRect();return r(e,{isIntersecting:e,target:t,intersectionRatio:"number"===typeof a.threshold?a.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:o,elements:s}=function(t){let r=u(t),a=f.get(r);if(!a){const e=new Map;let n;const o=new IntersectionObserver((r=>{r.forEach((r=>{var a;const o=r.isIntersecting&&n.some((t=>r.intersectionRatio>=t));t.trackVisibility&&"undefined"===typeof r.isVisible&&(r.isVisible=o),null==(a=e.get(r.target))||a.forEach((t=>{t(o,r)}))}))}),t);n=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),a={id:r,observer:o,elements:e},f.set(r,a)}return a}(a);let i=s.get(t)||[];return s.has(t)||s.set(t,i),i.push(r),o.observe(t),function(){i.splice(i.indexOf(r),1),0===i.length&&(s.delete(t),o.unobserve(t)),0===s.size&&(o.disconnect(),f.delete(n))}}const g=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function h(t){return"function"!==typeof t.children}class b extends e.Component{constructor(t){super(t),this.node=null,this._unobserveCb=null,this.handleNode=t=>{this.node&&(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()},this.handleChange=(t,r)=>{t&&this.props.triggerOnce&&this.unobserve(),h(this.props)||this.setState({inView:t,entry:r}),this.props.onChange&&this.props.onChange(t,r)},this.state={inView:!!t.initialInView,entry:void 0}}componentDidUpdate(t){t.rootMargin===this.props.rootMargin&&t.root===this.props.root&&t.threshold===this.props.threshold&&t.skip===this.props.skip&&t.trackVisibility===this.props.trackVisibility&&t.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:r,rootMargin:a,trackVisibility:e,delay:n,fallbackInView:o}=this.props;this._unobserveCb=y(this.node,this.handleChange,{threshold:t,root:r,rootMargin:a,trackVisibility:e,delay:n},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){if(!h(this.props)){const{inView:t,entry:r}=this.state;return this.props.children({inView:t,entry:r,ref:this.handleNode})}const t=this.props,{children:r,as:a}=t,n=function(t,r){if(null==t)return{};var a,e,n={},o=Object.keys(t);for(e=0;e<o.length;e++)a=o[e],r.indexOf(a)>=0||(n[a]=t[a]);return n}(t,g);return e.createElement(a||"div",m({ref:this.handleNode},n),r)}}function v({threshold:t,delay:r,trackVisibility:a,rootMargin:n,root:o,triggerOnce:s,skip:i,initialInView:c,fallbackInView:m,onChange:f}={}){var l;const[d,p]=e.useState(null),u=e.useRef(),[g,h]=e.useState({inView:!!c,entry:void 0});u.current=f,e.useEffect((()=>{if(i||!d)return;let e=y(d,((t,r)=>{h({inView:t,entry:r}),u.current&&u.current(t,r),r.isIntersecting&&s&&e&&(e(),e=void 0)}),{root:o,rootMargin:n,threshold:t,trackVisibility:a,delay:r},m);return()=>{e&&e()}}),[Array.isArray(t)?t.toString():t,d,o,n,s,i,a,m,r]);const b=null==(l=g.entry)?void 0:l.target;e.useEffect((()=>{d||!b||s||i||h({inView:!!c,entry:void 0})}),[d,b,s,i,c]);const v=[p,g.inView,g.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}var x=a(9864);function F(t,r){return Object.keys(r).forEach((function(a){"default"===a||"__esModule"===a||t.hasOwnProperty(a)||Object.defineProperty(t,a,{enumerable:!0,get:function(){return r[a]}})})),t}function k(t,r,a,e){Object.defineProperty(t,r,{get:a,set:e,enumerable:!0,configurable:!0})}var w={},O={};k(O,"AttentionSeeker",(()=>nt));const V=c.F4`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,Y=c.F4`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,C=c.F4`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,X=c.F4`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,z=c.F4`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,N=c.F4`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,M=c.F4`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,S=c.F4`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,I=c.F4`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,_=c.F4`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,j=c.F4`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,E=c.F4`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,R=c.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k({},"Reveal",(()=>rt));const $=c.F4`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,B=c.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,A=c.F4`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,T=c.F4`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,D=c.F4`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,P=c.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,U=c.F4`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,W=c.F4`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,H=c.F4`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,J=c.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Z=c.F4`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,q=c.F4`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,G=c.F4`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function K({duration:t=1e3,delay:r=0,timingFunction:a="ease",keyframes:e=P,iterationCount:n=1}){return c.iv`
    animation-duration: ${t}ms;
    animation-timing-function: ${a};
    animation-delay: ${r}ms;
    animation-name: ${e};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${n};
  `}function L(t){return"string"===typeof t||"number"===typeof t||"boolean"===typeof t}const Q=c.iv`
  opacity: 0;
`,tt=c.iv`
  display: inline-block;
  white-space: pre;
`,rt=t=>{const{cascade:r=!1,damping:a=.5,delay:n=0,duration:o=1e3,fraction:m=0,keyframes:f=P,triggerOnce:l=!1,css:d,className:p,style:u,childClassName:y,childStyle:g,children:h,onVisibilityChange:v}=t,F=(0,e.useMemo)((()=>K({keyframes:f,duration:o})),[o,f]);return null===(k=h)||void 0===k?null:L(h)?i(at,{...t,animationStyles:F,children:String(h)}):(0,x.isFragment)(h)?i(et,{...t,animationStyles:F}):i(s,{children:e.Children.map(h,((s,f)=>{if(!(0,e.isValidElement)(s))return null;const h=[d,F],x=n+(r?f*o*a:0);switch(s.type){case"ol":case"ul":return i(c.ms,{children:({cx:r})=>i(s.type,{...s.props,className:r(p,s.props.className),style:{...u,...s.props.style},children:i(rt,{...t,children:s.props.children})})});case"li":return i(b,{threshold:m,triggerOnce:l,onChange:v,children:({inView:t,ref:r})=>i(c.ms,{children:({cx:a})=>i(s.type,{...s.props,ref:r,className:a(y,s.props.className),css:t?h:Q,style:{...g,...s.props.style,animationDelay:x+"ms"}})})});default:return i(b,{threshold:m,triggerOnce:l,onChange:v,children:({inView:t,ref:r})=>i("div",{ref:r,className:p,css:t?h:Q,style:{...u,animationDelay:x+"ms"},children:i(c.ms,{children:({cx:t})=>i(s.type,{...s.props,className:t(y,s.props.className),style:{...g,...s.props.style}})})})})}}))});var k},at=t=>{const{animationStyles:r,cascade:a=!1,damping:e=.5,delay:n=0,duration:o=1e3,fraction:s=0,triggerOnce:c=!1,css:m,className:f,style:l,children:d,onVisibilityChange:p}=t,{ref:u,inView:y}=v({triggerOnce:c,threshold:s,onChange:p});return a?i("div",{ref:u,className:f,css:[m,tt],style:l,children:d.split("").map(((t,a)=>i("span",{css:y?r:Q,style:{animationDelay:n+a*o*e+"ms"},children:t},a)))}):i(rt,{...t,children:d})},et=t=>{const{animationStyles:r,fraction:a=0,triggerOnce:e=!1,css:n,className:o,style:s,children:c,onVisibilityChange:m}=t,{ref:f,inView:l}=v({triggerOnce:e,threshold:a,onChange:m});return i("div",{ref:f,className:o,css:l?[n,r]:Q,style:s,children:c})};const nt=t=>{const{effect:r="bounce",...a}=t,[n,o]=(0,e.useMemo)((()=>function(t){switch(t){case"flash":return[Y];case"headShake":return[C,{animationTimingFunction:"ease-in-out"}];case"heartBeat":return[X,{animationTimingFunction:"ease-in-out"}];case"jello":return[z,{transformOrigin:"center"}];case"pulse":return[N,{animationTimingFunction:"ease-in-out"}];case"rubberBand":return[M];case"shake":return[S];case"shakeX":return[I];case"shakeY":return[_];case"swing":return[j,{transformOrigin:"top center"}];case"tada":return[E];case"wobble":return[R];default:return[V,{transformOrigin:"center bottom"}]}}(r)),[r]);return i(rt,{keyframes:n,css:o,...a})};var ot={};k(ot,"Bounce",(()=>gt));const st=c.F4`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,it=c.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ct=c.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,mt=c.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ft=c.F4`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,lt=c.F4`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,dt=c.F4`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,pt=c.F4`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,ut=c.F4`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,yt=c.F4`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const gt=t=>{const{direction:r,reverse:a=!1,...n}=t,o=(0,e.useMemo)((()=>function(t,r){switch(r){case"down":return t?dt:it;case"left":return t?pt:ct;case"right":return t?ut:mt;case"up":return t?yt:ft;default:return t?lt:st}}(a,r)),[r,a]);return i(rt,{keyframes:o,...n})};var ht={};k(ht,"Fade",(()=>Mt));const bt=c.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,vt=c.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,xt=c.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Ft=c.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,kt=c.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,wt=c.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Ot=c.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Vt=c.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Yt=c.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Ct=c.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Xt=c.F4`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,zt=c.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Nt=c.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;const Mt=t=>{const{big:r=!1,direction:a,reverse:n=!1,...o}=t,s=(0,e.useMemo)((()=>function(t,r,a){switch(a){case"bottom-left":return r?vt:B;case"bottom-right":return r?xt:A;case"down":return t?r?kt:D:r?Ft:T;case"left":return t?r?Ot:U:r?wt:P;case"right":return t?r?Yt:H:r?Vt:W;case"top-left":return r?Ct:J;case"top-right":return r?Xt:Z;case"up":return t?r?Nt:G:r?zt:q;default:return r?bt:$}}(r,n,a)),[r,a,n]);return i(rt,{keyframes:s,...o})};var St={};k(St,"Flip",(()=>Bt));const It=c.F4`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,_t=c.F4`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,jt=c.F4`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,Et=c.F4`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,Rt=c.F4`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;const $t=c.iv`
  backface-visibility: visible;
`,Bt=t=>{const{direction:r,reverse:a=!1,...n}=t,o=(0,e.useMemo)((()=>function(t,r){switch(r){case"horizontal":return t?Et:_t;case"vertical":return t?Rt:jt;default:return It}}(a,r)),[r,a]);return i(rt,{css:$t,keyframes:o,...n})};var At={};k(At,"Hinge",(()=>Ht));const Tt=c.F4`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,Dt=c.F4`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,Pt=c.F4`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ut=c.F4`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,Wt=c.iv`
  transform-origin: top left;
`,Ht=t=>i(rt,{css:Wt,keyframes:Tt,...t});var Jt={};k(Jt,"JackInTheBox",(()=>Zt));const Zt=t=>i(rt,{keyframes:Dt,...t});var qt={};k(qt,"Roll",(()=>Gt));const Gt=t=>{const{reverse:r=!1,...a}=t,n=(0,e.useMemo)((()=>function(t){return t?Ut:Pt}(r)),[r]);return i(rt,{keyframes:n,...a})};var Kt={};k(Kt,"Rotate",(()=>cr));const Lt=c.F4`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Qt=c.F4`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,tr=c.F4`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,rr=c.F4`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,ar=c.F4`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,er=c.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,nr=c.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,or=c.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,sr=c.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,ir=c.F4`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const cr=t=>{const{direction:r,reverse:a=!1,...n}=t,[o,s]=(0,e.useMemo)((()=>function(t,r){switch(r){case"bottom-left":return t?[nr,{transformOrigin:"left bottom"}]:[Qt,{transformOrigin:"left bottom"}];case"bottom-right":return t?[or,{transformOrigin:"right bottom"}]:[tr,{transformOrigin:"right bottom"}];case"top-left":return t?[sr,{transformOrigin:"left bottom"}]:[rr,{transformOrigin:"left bottom"}];case"top-right":return t?[ir,{transformOrigin:"right bottom"}]:[ar,{transformOrigin:"right bottom"}];default:return t?[er,{transformOrigin:"center"}]:[Lt,{transformOrigin:"center"}]}}(a,r)),[r,a]);return i(rt,{css:s,keyframes:o,...n})};var mr={};k(mr,"Slide",(()=>br));const fr=c.F4`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,lr=c.F4`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,dr=c.F4`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,pr=c.F4`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ur=c.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,yr=c.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,gr=c.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,hr=c.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;const br=t=>{const{direction:r,reverse:a=!1,...n}=t,o=(0,e.useMemo)((()=>function(t,r){switch(r){case"down":return t?ur:fr;case"right":return t?gr:dr;case"up":return t?hr:pr;default:return t?yr:lr}}(a,r)),[r,a]);return i(rt,{keyframes:o,...n})};var vr={};k(vr,"Zoom",(()=>Nr));const xr=c.F4`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,Fr=c.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,kr=c.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,wr=c.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Or=c.F4`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Vr=c.F4`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,Yr=c.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Cr=c.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,Xr=c.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,zr=c.F4`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const Nr=t=>{const{direction:r,reverse:a=!1,...n}=t,o=(0,e.useMemo)((()=>function(t,r){switch(r){case"down":return t?Yr:Fr;case"left":return t?Cr:kr;case"right":return t?Xr:wr;case"up":return t?zr:Or;default:return t?Vr:xr}}(a,r)),[r,a]);return i(rt,{keyframes:o,...n})};F(w,O),F(w,ot),F(w,ht),F(w,St),F(w,At),F(w,Jt),F(w,qt),F(w,Kt),F(w,mr),F(w,vr)}}]);