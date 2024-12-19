from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,B=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,L=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,D=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${N} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${B} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${L} 0.15s ease-out forwards;
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
`,F=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${U} 1s linear infinite;
`,z=y`
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
}`,V=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,H=w("div")`
  position: absolute;
`,q=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,K=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${K} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,$=({toast:t})=>{let{icon:e,type:r,iconTheme:i}=t;return void 0!==e?"string"==typeof e?n.createElement(W,null,e):e:"blank"===r?null:n.createElement(q,null,n.createElement(F,{...i}),"loading"!==r&&n.createElement(H,null,"error"===r?n.createElement(D,{...i}):n.createElement(V,{...i})))},Z=t=>`\n0% {transform: translate3d(0,${-200*t}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,G=t=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*t}%,-1px) scale(.6); opacity:0;}\n`,Q=w("div")`
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
`,J=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Y=n.memo((({toast:t,position:e,style:r,children:i})=>{let s=t.height?((t,e)=>{let r=t.includes("top")?1:-1,[n,i]=_()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Z(r),G(r)];return{animation:e?`${y(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||e||"top-center",t.visible):{opacity:0},o=n.createElement($,{toast:t}),a=n.createElement(J,{...t.ariaProps},v(t.message,t));return n.createElement(Q,{className:t.className,style:{...s,...r,...t.style}},"function"==typeof i?i({icon:o,message:a}):n.createElement(n.Fragment,null,o,a))}));!function(t,e,r,n){c.p=e,p=t,m=r,g=n}(n.createElement);var X=({id:t,className:e,style:r,onHeightUpdate:i,children:s})=>{let o=n.useCallback((e=>{if(e){let r=()=>{let r=e.getBoundingClientRect().height;i(t,r)};r(),new MutationObserver(r).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[t,i]);return n.createElement("div",{ref:o,className:e,style:r},s)},tt=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,et=({reverseOrder:t,position:e="top-center",toastOptions:r,gutter:i,children:s,containerStyle:o,containerClassName:a})=>{let{toasts:u,handlers:c}=O(r);return n.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:a,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map((r=>{let o=r.position||e,a=((t,e)=>{let r=t.includes("top"),n=r?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:_()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(r?1:-1)}px)`,...n,...i}})(o,c.calculateOffset(r,{reverseOrder:t,gutter:i,defaultPosition:e}));return n.createElement(X,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?tt:"",style:a},"custom"===r.type?v(r.message,r):s?s(r):n.createElement(Y,{toast:r,position:o}))})))},rt=R},2573:(t,e,r)=>{"use strict";function n(t,e,r){return e<=t&&t<=r}function i(t){if(void 0===t)return{};if(t===Object(t))return t;throw TypeError("Could not convert argument to dictionary")}r.r(e),r.d(e,{TextDecoder:()=>c,TextEncoder:()=>l});function s(t){this.tokens=[].slice.call(t)}s.prototype={endOfStream:function(){return!this.tokens.length},read:function(){return this.tokens.length?this.tokens.shift():-1},prepend:function(t){if(Array.isArray(t))for(var e=t;e.length;)this.tokens.unshift(e.pop());else this.tokens.unshift(t)},push:function(t){if(Array.isArray(t))for(var e=t;e.length;)this.tokens.push(e.shift());else this.tokens.push(t)}};var o=-1;function a(t,e){if(t)throw TypeError("Decoder error");return e||65533}var u="utf-8";function c(t,e){if(!(this instanceof c))return new c(t,e);if((t=void 0!==t?String(t).toLowerCase():u)!==u)throw new Error("Encoding not supported. Only utf-8 is supported");e=i(e),this._streaming=!1,this._BOMseen=!1,this._decoder=null,this._fatal=Boolean(e.fatal),this._ignoreBOM=Boolean(e.ignoreBOM),Object.defineProperty(this,"encoding",{value:"utf-8"}),Object.defineProperty(this,"fatal",{value:this._fatal}),Object.defineProperty(this,"ignoreBOM",{value:this._ignoreBOM})}function l(t,e){if(!(this instanceof l))return new l(t,e);if((t=void 0!==t?String(t).toLowerCase():u)!==u)throw new Error("Encoding not supported. Only utf-8 is supported");e=i(e),this._streaming=!1,this._encoder=null,this._options={fatal:Boolean(e.fatal)},Object.defineProperty(this,"encoding",{value:"utf-8"})}function h(t){var e=t.fatal,r=0,i=0,s=0,u=128,c=191;this.handler=function(t,l){if(-1===l&&0!==s)return s=0,a(e);if(-1===l)return o;if(0===s){if(n(l,0,127))return l;if(n(l,194,223))s=1,r=l-192;else if(n(l,224,239))224===l&&(u=160),237===l&&(c=159),s=2,r=l-224;else{if(!n(l,240,244))return a(e);240===l&&(u=144),244===l&&(c=143),s=3,r=l-240}return r<<=6*s,null}if(!n(l,u,c))return r=s=i=0,u=128,c=191,t.prepend(l),a(e);if(u=128,c=191,r+=l-128<<6*(s-(i+=1)),i!==s)return null;var h=r;return r=s=i=0,h}}function d(t){t.fatal;this.handler=function(t,e){if(-1===e)return o;if(n(e,0,127))return e;var r,i;n(e,128,2047)?(r=1,i=192):n(e,2048,65535)?(r=2,i=224):n(e,65536,1114111)&&(r=3,i=240);for(var s=[(e>>6*r)+i];r>0;){var a=e>>6*(r-1);s.push(128|63&a),r-=1}return s}}c.prototype={decode:function(t,e){var r;r="object"==typeof t&&t instanceof ArrayBuffer?new Uint8Array(t):"object"==typeof t&&"buffer"in t&&t.buffer instanceof ArrayBuffer?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(0),e=i(e),this._streaming||(this._decoder=new h({fatal:this._fatal}),this._BOMseen=!1),this._streaming=Boolean(e.stream);for(var n,a=new s(r),u=[];!a.endOfStream()&&(n=this._decoder.handler(a,a.read()))!==o;)null!==n&&(Array.isArray(n)?u.push.apply(u,n):u.push(n));if(!this._streaming){do{if((n=this._decoder.handler(a,a.read()))===o)break;null!==n&&(Array.isArray(n)?u.push.apply(u,n):u.push(n))}while(!a.endOfStream());this._decoder=null}return u.length&&(-1===["utf-8"].indexOf(this.encoding)||this._ignoreBOM||this._BOMseen||(65279===u[0]?(this._BOMseen=!0,u.shift()):this._BOMseen=!0)),function(t){for(var e="",r=0;r<t.length;++r){var n=t[r];n<=65535?e+=String.fromCharCode(n):(n-=65536,e+=String.fromCharCode(55296+(n>>10),56320+(1023&n)))}return e}(u)}},l.prototype={encode:function(t,e){t=t?String(t):"",e=i(e),this._streaming||(this._encoder=new d(this._options)),this._streaming=Boolean(e.stream);for(var r,n=[],a=new s(function(t){for(var e=String(t),r=e.length,n=0,i=[];n<r;){var s=e.charCodeAt(n);if(s<55296||s>57343)i.push(s);else if(56320<=s&&s<=57343)i.push(65533);else if(55296<=s&&s<=56319)if(n===r-1)i.push(65533);else{var o=t.charCodeAt(n+1);if(56320<=o&&o<=57343){var a=1023&s,u=1023&o;i.push(65536+(a<<10)+u),n+=1}else i.push(65533)}n+=1}return i}(t));!a.endOfStream()&&(r=this._encoder.handler(a,a.read()))!==o;)Array.isArray(r)?n.push.apply(n,r):n.push(r);if(!this._streaming){for(;(r=this._encoder.handler(a,a.read()))!==o;)Array.isArray(r)?n.push.apply(n,r):n.push(r);this._encoder=null}return new Uint8Array(n)}}},4283:(t,e,r)=>{"use strict";function n(t,e,r){return e<=t&&t<=r}function i(t){if(void 0===t)return{};if(t===Object(t))return t;throw TypeError("Could not convert argument to dictionary")}r.r(e),r.d(e,{TextDecoder:()=>c,TextEncoder:()=>l});function s(t){this.tokens=[].slice.call(t)}s.prototype={endOfStream:function(){return!this.tokens.length},read:function(){return this.tokens.length?this.tokens.shift():-1},prepend:function(t){if(Array.isArray(t))for(var e=t;e.length;)this.tokens.unshift(e.pop());else this.tokens.unshift(t)},push:function(t){if(Array.isArray(t))for(var e=t;e.length;)this.tokens.push(e.shift());else this.tokens.push(t)}};var o=-1;function a(t,e){if(t)throw TypeError("Decoder error");return e||65533}var u="utf-8";function c(t,e){if(!(this instanceof c))return new c(t,e);if((t=void 0!==t?String(t).toLowerCase():u)!==u)throw new Error("Encoding not supported. Only utf-8 is supported");e=i(e),this._streaming=!1,this._BOMseen=!1,this._decoder=null,this._fatal=Boolean(e.fatal),this._ignoreBOM=Boolean(e.ignoreBOM),Object.defineProperty(this,"encoding",{value:"utf-8"}),Object.defineProperty(this,"fatal",{value:this._fatal}),Object.defineProperty(this,"ignoreBOM",{value:this._ignoreBOM})}function l(t,e){if(!(this instanceof l))return new l(t,e);if((t=void 0!==t?String(t).toLowerCase():u)!==u)throw new Error("Encoding not supported. Only utf-8 is supported");e=i(e),this._streaming=!1,this._encoder=null,this._options={fatal:Boolean(e.fatal)},Object.defineProperty(this,"encoding",{value:"utf-8"})}function h(t){var e=t.fatal,r=0,i=0,s=0,u=128,c=191;this.handler=function(t,l){if(-1===l&&0!==s)return s=0,a(e);if(-1===l)return o;if(0===s){if(n(l,0,127))return l;if(n(l,194,223))s=1,r=l-192;else if(n(l,224,239))224===l&&(u=160),237===l&&(c=159),s=2,r=l-224;else{if(!n(l,240,244))return a(e);240===l&&(u=144),244===l&&(c=143),s=3,r=l-240}return r<<=6*s,null}if(!n(l,u,c))return r=s=i=0,u=128,c=191,t.prepend(l),a(e);if(u=128,c=191,r+=l-128<<6*(s-(i+=1)),i!==s)return null;var h=r;return r=s=i=0,h}}function d(t){t.fatal;this.handler=function(t,e){if(-1===e)return o;if(n(e,0,127))return e;var r,i;n(e,128,2047)?(r=1,i=192):n(e,2048,65535)?(r=2,i=224):n(e,65536,1114111)&&(r=3,i=240);for(var s=[(e>>6*r)+i];r>0;){var a=e>>6*(r-1);s.push(128|63&a),r-=1}return s}}c.prototype={decode:function(t,e){var r;r="object"==typeof t&&t instanceof ArrayBuffer?new Uint8Array(t):"object"==typeof t&&"buffer"in t&&t.buffer instanceof ArrayBuffer?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(0),e=i(e),this._streaming||(this._decoder=new h({fatal:this._fatal}),this._BOMseen=!1),this._streaming=Boolean(e.stream);for(var n,a=new s(r),u=[];!a.endOfStream()&&(n=this._decoder.handler(a,a.read()))!==o;)null!==n&&(Array.isArray(n)?u.push.apply(u,n):u.push(n));if(!this._streaming){do{if((n=this._decoder.handler(a,a.read()))===o)break;null!==n&&(Array.isArray(n)?u.push.apply(u,n):u.push(n))}while(!a.endOfStream());this._decoder=null}return u.length&&(-1===["utf-8"].indexOf(this.encoding)||this._ignoreBOM||this._BOMseen||(65279===u[0]?(this._BOMseen=!0,u.shift()):this._BOMseen=!0)),function(t){for(var e="",r=0;r<t.length;++r){var n=t[r];n<=65535?e+=String.fromCharCode(n):(n-=65536,e+=String.fromCharCode(55296+(n>>10),56320+(1023&n)))}return e}(u)}},l.prototype={encode:function(t,e){t=t?String(t):"",e=i(e),this._streaming||(this._encoder=new d(this._options)),this._streaming=Boolean(e.stream);for(var r,n=[],a=new s(function(t){for(var e=String(t),r=e.length,n=0,i=[];n<r;){var s=e.charCodeAt(n);if(s<55296||s>57343)i.push(s);else if(56320<=s&&s<=57343)i.push(65533);else if(55296<=s&&s<=56319)if(n===r-1)i.push(65533);else{var o=t.charCodeAt(n+1);if(56320<=o&&o<=57343){var a=1023&s,u=1023&o;i.push(65536+(a<<10)+u),n+=1}else i.push(65533)}n+=1}return i}(t));!a.endOfStream()&&(r=this._encoder.handler(a,a.read()))!==o;)Array.isArray(r)?n.push.apply(n,r):n.push(r);if(!this._streaming){for(;(r=this._encoder.handler(a,a.read()))!==o;)Array.isArray(r)?n.push.apply(n,r):n.push(r);this._encoder=null}return new Uint8Array(n)}}}},t=>{var e;e=2447,t(t.s=e)}]);