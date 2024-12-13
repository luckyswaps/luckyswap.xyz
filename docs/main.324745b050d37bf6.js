from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,L=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,D=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,B=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${O} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${L} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${D} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,U=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,F=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${U} 1s linear infinite;
`,V=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,j=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,z=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${V} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${j} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,q=v("div")`
  position: absolute;
`,W=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,$=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,H=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${$} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,K=({toast:e})=>{let{icon:t,type:n,iconTheme:i}=e;return void 0!==t?"string"==typeof t?r.createElement(H,null,t):t:"blank"===n?null:r.createElement(W,null,r.createElement(F,{...i}),"loading"!==n&&r.createElement(q,null,"error"===n?r.createElement(B,{...i}):r.createElement(z,{...i})))},G=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,Q=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,Z=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,J=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Y=r.memo((({toast:e,position:t,style:n,children:i})=>{let s=e.height?((e,t)=>{let n=e.includes("top")?1:-1,[r,i]=_()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(n),Q(n)];return{animation:t?`${y(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},o=r.createElement(K,{toast:e}),a=r.createElement(J,{...e.ariaProps},w(e.message,e));return r.createElement(Z,{className:e.className,style:{...s,...n,...e.style}},"function"==typeof i?i({icon:o,message:a}):r.createElement(r.Fragment,null,o,a))}));!function(e,t,n,r){c.p=t,p=e,m=n,g=r}(r.createElement);var X=({id:e,className:t,style:n,onHeightUpdate:i,children:s})=>{let o=r.useCallback((t=>{if(t){let n=()=>{let n=t.getBoundingClientRect().height;i(e,n)};n(),new MutationObserver(n).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,i]);return r.createElement("div",{ref:o,className:t,style:n},s)},ee=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,te=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:i,children:s,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:c}=N(n);return r.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:a,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map((n=>{let o=n.position||t,a=((e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:_()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...i}})(o,c.calculateOffset(n,{reverseOrder:e,gutter:i,defaultPosition:t}));return r.createElement(X,{id:n.id,key:n.id,onHeightUpdate:c.updateHeight,className:n.visible?ee:"",style:a},"custom"===n.type?w(n.message,n):s?s(n):r.createElement(Y,{toast:n,position:o}))})))},ne=P},2573:(e,t,n)=>{"use strict";function r(e,t,n){return t<=e&&e<=n}function i(e){if(void 0===e)return{};if(e===Object(e))return e;throw TypeError("Could not convert argument to dictionary")}n.r(t),n.d(t,{TextDecoder:()=>c,TextEncoder:()=>u});function s(e){this.tokens=[].slice.call(e)}s.prototype={endOfStream:function(){return!this.tokens.length},read:function(){return this.tokens.length?this.tokens.shift():-1},prepend:function(e){if(Array.isArray(e))for(var t=e;t.length;)this.tokens.unshift(t.pop());else this.tokens.unshift(e)},push:function(e){if(Array.isArray(e))for(var t=e;t.length;)this.tokens.push(t.shift());else this.tokens.push(e)}};var o=-1;function a(e,t){if(e)throw TypeError("Decoder error");return t||65533}var l="utf-8";function c(e,t){if(!(this instanceof c))return new c(e,t);if((e=void 0!==e?String(e).toLowerCase():l)!==l)throw new Error("Encoding not supported. Only utf-8 is supported");t=i(t),this._streaming=!1,this._BOMseen=!1,this._decoder=null,this._fatal=Boolean(t.fatal),this._ignoreBOM=Boolean(t.ignoreBOM),Object.defineProperty(this,"encoding",{value:"utf-8"}),Object.defineProperty(this,"fatal",{value:this._fatal}),Object.defineProperty(this,"ignoreBOM",{value:this._ignoreBOM})}function u(e,t){if(!(this instanceof u))return new u(e,t);if((e=void 0!==e?String(e).toLowerCase():l)!==l)throw new Error("Encoding not supported. Only utf-8 is supported");t=i(t),this._streaming=!1,this._encoder=null,this._options={fatal:Boolean(t.fatal)},Object.defineProperty(this,"encoding",{value:"utf-8"})}function h(e){var t=e.fatal,n=0,i=0,s=0,l=128,c=191;this.handler=function(e,u){if(-1===u&&0!==s)return s=0,a(t);if(-1===u)return o;if(0===s){if(r(u,0,127))return u;if(r(u,194,223))s=1,n=u-192;else if(r(u,224,239))224===u&&(l=160),237===u&&(c=159),s=2,n=u-224;else{if(!r(u,240,244))return a(t);240===u&&(l=144),244===u&&(c=143),s=3,n=u-240}return n<<=6*s,null}if(!r(u,l,c))return n=s=i=0,l=128,c=191,e.prepend(u),a(t);if(l=128,c=191,n+=u-128<<6*(s-(i+=1)),i!==s)return null;var h=n;return n=s=i=0,h}}function d(e){e.fatal;this.handler=function(e,t){if(-1===t)return o;if(r(t,0,127))return t;var n,i;r(t,128,2047)?(n=1,i=192):r(t,2048,65535)?(n=2,i=224):r(t,65536,1114111)&&(n=3,i=240);for(var s=[(t>>6*n)+i];n>0;){var a=t>>6*(n-1);s.push(128|63&a),n-=1}return s}}c.prototype={decode:function(e,t){var n;n="object"==typeof e&&e instanceof ArrayBuffer?new Uint8Array(e):"object"==typeof e&&"buffer"in e&&e.buffer instanceof ArrayBuffer?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(0),t=i(t),this._streaming||(this._decoder=new h({fatal:this._fatal}),this._BOMseen=!1),this._streaming=Boolean(t.stream);for(var r,a=new s(n),l=[];!a.endOfStream()&&(r=this._decoder.handler(a,a.read()))!==o;)null!==r&&(Array.isArray(r)?l.push.apply(l,r):l.push(r));if(!this._streaming){do{if((r=this._decoder.handler(a,a.read()))===o)break;null!==r&&(Array.isArray(r)?l.push.apply(l,r):l.push(r))}while(!a.endOfStream());this._decoder=null}return l.length&&(-1===["utf-8"].indexOf(this.encoding)||this._ignoreBOM||this._BOMseen||(65279===l[0]?(this._BOMseen=!0,l.shift()):this._BOMseen=!0)),function(e){for(var t="",n=0;n<e.length;++n){var r=e[n];r<=65535?t+=String.fromCharCode(r):(r-=65536,t+=String.fromCharCode(55296+(r>>10),56320+(1023&r)))}return t}(l)}},u.prototype={encode:function(e,t){e=e?String(e):"",t=i(t),this._streaming||(this._encoder=new d(this._options)),this._streaming=Boolean(t.stream);for(var n,r=[],a=new s(function(e){for(var t=String(e),n=t.length,r=0,i=[];r<n;){var s=t.charCodeAt(r);if(s<55296||s>57343)i.push(s);else if(56320<=s&&s<=57343)i.push(65533);else if(55296<=s&&s<=56319)if(r===n-1)i.push(65533);else{var o=e.charCodeAt(r+1);if(56320<=o&&o<=57343){var a=1023&s,l=1023&o;i.push(65536+(a<<10)+l),r+=1}else i.push(65533)}r+=1}return i}(e));!a.endOfStream()&&(n=this._encoder.handler(a,a.read()))!==o;)Array.isArray(n)?r.push.apply(r,n):r.push(n);if(!this._streaming){for(;(n=this._encoder.handler(a,a.read()))!==o;)Array.isArray(n)?r.push.apply(r,n):r.push(n);this._encoder=null}return new Uint8Array(r)}}}},e=>{var t;t=2447,e(e.s=t)}]);