(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["3926e9ee"],{"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("78ef");t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e})}},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("78ef");t.default=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},function(){for(var e=this,r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce(function(t,r){return t&&r.apply(e,n)},!0)})}},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("78ef");t.default=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/)},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("78ef");t.default=(0,n.regex)("numeric",/^[0-9]*$/)},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("78ef");t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e})}},"4a89":function(e,t,r){!function(t,r){e.exports=r()}(0,function(){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=9)}([function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,r){e.exports=!r(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){var r=e.exports={version:"2.5.1"};"number"==typeof __e&&(__e=r)},function(e,t,r){var n=r(6),a=r(7);e.exports=function(e){return n(a(e))}},function(e,t,r){var n=r(30);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Avatar=void 0;var n=r(10),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.Avatar=a.default,t.default=a.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(12),a=r.n(n),i=r(41),o=r(11),s=o(a.a,i.a,!1,null,null,null);t.default=s.exports},function(e,t){e.exports=function(e,t,r,n,a,i){var o,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(o=e,s=e.default);var c,l="function"==typeof s?s.options:s;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),r&&(l.functional=!0),a&&(l._scopeId=a),i?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=c):n&&(c=n),c){var f=l.functional,d=f?l.render:l.beforeCreate;f?(l._injectStyles=c,l.render=function(e,t){return c.call(t),d(e,t)}):l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:o,exports:s,options:l}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(13),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={name:"avatar",props:{username:{type:String},initials:{type:String},backgroundColor:{type:String},color:{type:String},customStyle:{type:Object},inline:{type:Boolean},size:{type:Number,default:50},src:{type:String},rounded:{type:Boolean,default:!0},lighten:{type:Number,default:80}},data:function(){return{backgroundColors:["#F44336","#FF4081","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B"]}},mounted:function(){this.isImage||this.$emit("avatar-initials",this.username,this.userInitial)},computed:{background:function(){if(!this.isImage)return this.backgroundColor||this.randomBackgroundColor(this.username.length,this.backgroundColors)},fontColor:function(){if(!this.isImage)return this.color||this.lightenColor(this.background,this.lighten)},isImage:function(){return Boolean(this.src)},style:function(){var e={display:this.inline?"inline-flex":"flex",width:this.size+"px",height:this.size+"px",borderRadius:this.rounded?"50%":0,lineHeight:this.size+Math.floor(this.size/20)+"px",fontWeight:"bold",alignItems:"center",justifyContent:"center",textAlign:"center"},t={background:"transparent url('"+this.src+"') no-repeat scroll 0% 0% / "+this.size+"px "+this.size+"px content-box border-box"},r={backgroundColor:this.background,font:Math.floor(this.size/2.5)+"px/"+this.size+"px Helvetica, Arial, sans-serif",color:this.fontColor},n=this.isImage?t:r;return(0,a.default)(e,n),e},userInitial:function(){return this.isImage?"":this.initials||this.initial(this.username)}},methods:{initial:function(e){for(var t=e.split(/[ -]/),r="",n=0;n<t.length;n++)r+=t[n].charAt(0);return r.length>3&&-1!==r.search(/[A-Z]/)&&(r=r.replace(/[a-z]+/g,"")),r.substr(0,3).toUpperCase()},randomBackgroundColor:function(e,t){return t[e%t.length]},lightenColor:function(e,t){var r=!1;"#"===e[0]&&(e=e.slice(1),r=!0);var n=parseInt(e,16),a=(n>>16)+t;a>255?a=255:a<0&&(a=0);var i=(n>>8&255)+t;i>255?i=255:i<0&&(i=0);var o=(255&n)+t;return o>255?o=255:o<0&&(o=0),(r?"#":"")+(o|i<<8|a<<16).toString(16)}}}},function(e,t,r){e.exports={default:r(14),__esModule:!0}},function(e,t,r){r(15),e.exports=r(4).Object.assign},function(e,t,r){var n=r(16);n(n.S+n.F,"Object",{assign:r(26)})},function(e,t,r){var n=r(0),a=r(4),i=r(17),o=r(19),s=function(e,t,r){var u,c,l,f=e&s.F,d=e&s.G,p=e&s.S,h=e&s.P,m=e&s.B,v=e&s.W,g=d?a:a[t]||(a[t]={}),y=g.prototype,b=d?n:p?n[t]:(n[t]||{}).prototype;for(u in d&&(r=t),r)(c=!f&&b&&void 0!==b[u])&&u in g||(l=c?b[u]:r[u],g[u]=d&&"function"!=typeof b[u]?r[u]:m&&c?i(l,n):v&&b[u]==l?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((g.virtual||(g.virtual={}))[u]=l,e&s.R&&y&&!y[u]&&o(y,u,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},function(e,t,r){var n=r(18);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,a){return e.call(t,r,n,a)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,r){var n=r(20),a=r(25);e.exports=r(2)?function(e,t,r){return n.f(e,t,a(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t,r){var n=r(21),a=r(22),i=r(24),o=Object.defineProperty;t.f=r(2)?Object.defineProperty:function(e,t,r){if(n(e),t=i(t,!0),n(r),a)try{return o(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},function(e,t,r){var n=r(1);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},function(e,t,r){e.exports=!r(2)&&!r(3)(function(){return 7!=Object.defineProperty(r(23)("div"),"a",{get:function(){return 7}}).a})},function(e,t,r){var n=r(1),a=r(0).document,i=n(a)&&n(a.createElement);e.exports=function(e){return i?a.createElement(e):{}}},function(e,t,r){var n=r(1);e.exports=function(e,t){if(!n(e))return e;var r,a;if(t&&"function"==typeof(r=e.toString)&&!n(a=r.call(e)))return a;if("function"==typeof(r=e.valueOf)&&!n(a=r.call(e)))return a;if(!t&&"function"==typeof(r=e.toString)&&!n(a=r.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){"use strict";var n=r(27),a=r(38),i=r(39),o=r(40),s=r(6),u=Object.assign;e.exports=!u||r(3)(function(){var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach(function(e){t[e]=e}),7!=u({},e)[r]||Object.keys(u({},t)).join("")!=n})?function(e,t){for(var r=o(e),u=arguments.length,c=1,l=a.f,f=i.f;u>c;)for(var d,p=s(arguments[c++]),h=l?n(p).concat(l(p)):n(p),m=h.length,v=0;m>v;)f.call(p,d=h[v++])&&(r[d]=p[d]);return r}:u},function(e,t,r){var n=r(28),a=r(37);e.exports=Object.keys||function(e){return n(e,a)}},function(e,t,r){var n=r(29),a=r(5),i=r(31)(!1),o=r(34)("IE_PROTO");e.exports=function(e,t){var r,s=a(e),u=0,c=[];for(r in s)r!=o&&n(s,r)&&c.push(r);for(;t.length>u;)n(s,r=t[u++])&&(~i(c,r)||c.push(r));return c}},function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t,r){var n=r(5),a=r(32),i=r(33);e.exports=function(e){return function(t,r,o){var s,u=n(t),c=a(u.length),l=i(o,c);if(e&&r!=r){for(;c>l;)if((s=u[l++])!=s)return!0}else for(;c>l;l++)if((e||l in u)&&u[l]===r)return e||l||0;return!e&&-1}}},function(e,t,r){var n=r(8),a=Math.min;e.exports=function(e){return e>0?a(n(e),9007199254740991):0}},function(e,t,r){var n=r(8),a=Math.max,i=Math.min;e.exports=function(e,t){return e=n(e),e<0?a(e+t,0):i(e,t)}},function(e,t,r){var n=r(35)("keys"),a=r(36);e.exports=function(e){return n[e]||(n[e]=a(e))}},function(e,t,r){var n=r(0),a=n["__core-js_shared__"]||(n["__core-js_shared__"]={});e.exports=function(e){return a[e]||(a[e]={})}},function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+n).toString(36))}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,r){var n=r(7);e.exports=function(e){return Object(n(e))}},function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vue-avatar--wrapper",style:[e.style,e.customStyle],attrs:{"aria-hidden":"true"}},[r("span",{directives:[{name:"show",rawName:"v-show",value:!this.isImage,expression:"!this.isImage"}]},[e._v(e._s(e.userInitial))])])},a=[],i={render:n,staticRenderFns:a};t.a=i}])})},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("78ef"),a=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;t.default=(0,n.regex)("email",a)},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("78ef");t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e})}},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("78ef");t.default=(0,n.regex)("alpha",/^[a-zA-Z]*$/)},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("78ef"),a=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;t.default=(0,n.regex)("url",a)},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.regex=t.ref=t.len=t.req=t.withParams=void 0;var n=r("8750"),a=i(n);function i(e){return e&&e.__esModule?e:{default:e}}t.withParams=a.default;var o=t.req=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e||!1===e)return!1;if(e instanceof Date)return!isNaN(e.getTime());if("object"===typeof e){for(var t in e)return!0;return!1}return!!String(e).length};t.len=function(e){return Array.isArray(e)?e.length:"object"===typeof e?Object.keys(e).length:String(e).length},t.ref=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]},t.regex=function(e,t){return(0,a.default)({type:e},function(e){return!o(e)||t.test(e)})}},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("0234").withParams;t.default=n},"888e":function(e,t,r){},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("78ef");t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(a)})};var a=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},"96a1":function(e,t,r){"use strict";var n=r("a60d");t["a"]=function(e,t){if(n["a"].is.cordova&&navigator&&navigator.app)return navigator.app.loadUrl(e,{openExternal:!0});var r=window.open(e,"_blank");if(r)return r.focus(),r;t()}},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("78ef");t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)})}},b4de:function(e,t,r){"use strict";var n=r("888e"),a=r.n(n);a.a},b5ae:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.maxValue=t.minValue=t.and=t.or=t.url=t.sameAs=t.requiredUnless=t.requiredIf=t.required=t.minLength=t.maxLength=t.macAddress=t.ipAddress=t.email=t.between=t.numeric=t.alphaNum=t.alpha=void 0;var n=r("6235"),a=R(n),i=r("3a54"),o=R(i),s=r("45b8"),u=R(s),c=r("ec11"),l=R(c),f=r("5d75"),d=R(f),p=r("c99d"),h=R(p),m=r("91d3"),v=R(m),g=r("2a12"),y=R(g),b=r("5db3"),_=R(b),x=r("d4f4"),w=R(x),C=r("aa82"),q=R(C),O=r("e652"),M=R(O),j=r("b6cb"),P=R(j),k=r("772d"),S=R(k),$=r("d294"),A=R($),I=r("3360"),E=R(I),z=r("eb66"),F=R(z),N=r("46bc"),B=R(N);function R(e){return e&&e.__esModule?e:{default:e}}t.alpha=a.default,t.alphaNum=o.default,t.numeric=u.default,t.between=l.default,t.email=d.default,t.ipAddress=h.default,t.macAddress=v.default,t.maxLength=y.default,t.minLength=_.default,t.required=w.default,t.requiredIf=q.default,t.requiredUnless=M.default,t.sameAs=P.default,t.url=S.default,t.or=A.default,t.and=E.default,t.minValue=F.default,t.maxValue=B.default},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("78ef");t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},function(t,r){return t===(0,n.ref)(e,this,r)})}},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("78ef");t.default=(0,n.withParams)({type:"ipAddress"},function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(a)});var a=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("78ef");t.default=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},function(){for(var e=this,r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce(function(t,r){return t||r.apply(e,n)},!1)})}},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("78ef");t.default=(0,n.withParams)({type:"required"},n.req)},dde6:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-layout",{staticStyle:{"padding-bottom":"-100px"},attrs:{view:"lHh Lpr lFf"}},[r("div",{class:this.headerStyle+" bg-black bb-maindulu"},[r("div",{staticClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12 header-box"},[r("div",{staticClass:"row header-row"},[r("div",{staticClass:"col-xs-5 col-sm-6 col-md-6 col-lg-6 header-logo"},[r("div",[r("router-link",{attrs:{to:"/dashboard"}},[r("img",{staticClass:"logo responsive",attrs:{src:"assets/MD-Logo-fix-1000px.png"}})])],1)]),r("div",{staticClass:"col-xs-7 col-sm-6 col-md-6 col-lg-6 header-info"},[r("div",{staticClass:"row",staticStyle:{float:"right"}},[r("div",{class:"q-mr-xs q-py-md "+e.classUser},[e.loginStatus?e._e():r("q-btn",{staticClass:"glow primary",attrs:{rounded:"",label:"LOGIN"},on:{click:function(t){e.login()}}})],1),r("div",{staticClass:"q-py-md "},[e.loginStatus?r("q-btn",{staticClass:"glow primary text-white",attrs:{rounded:"","icon-right":"account circle",flat:""}},[e._v(e._s(this.me.username)+"\n                "),r("q-popover",{attrs:{anchor:"bottom right",self:"top right"}},[r("q-list",{staticClass:"list-custom scroll q-pa-sm",attrs:{dark:"",link:""}},[r("q-item",{nativeOn:{click:function(t){e.$router.push("/user/dashboard")}}},[r("q-item-main",{attrs:{label:e.$t("myTrans")}})],1),r("q-item",{nativeOn:{click:function(t){e.$router.push("/user/profile")}}},[r("q-item-main",{attrs:{label:e.$t("profile")}})],1),r("q-item",{nativeOn:{click:function(t){e.$router.push("/user/history")}}},[r("q-item-main",{attrs:{label:"Riwayat"}})],1),r("q-item",{nativeOn:{click:function(t){return e.doLogout(t)}}},[r("q-item-main",{attrs:{label:e.$t("logout")}})],1)],1)],1)],1):e._e()],1)])])])])]),r("q-page-container",{staticClass:"container-webpage bg-image"},[r("q-page",[r("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[r("router-view")],1)],1)],1),r("q-layout-footer",{staticClass:"no-shadow",staticStyle:{"padding-bottom":"0px",left:"0",position:"absolute"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 bg-black q-toolbar row no-wrap items-center justify-center q-toolbar-normal text-white"},[r("p",{staticClass:"q-caption q-ma-none text-center"},[e._v("MAINDULU 2018. v"+e._s(e.version)+" Hak cipta dilindungi Undang-undang"),r("br"),r("small",[e._v("Untuk pengalaman terbaik, silakan gunakan Google Chrome atau Firefox.")])])])])]),e.loginStatus?r("q-btn",{staticClass:"fixed-bottom-right z-top q-mr-md q-mb-md",attrs:{round:"",color:"orange",size:"lg",icon:"far fa-comments"}},[e.messageBadge>0?r("q-chip",{attrs:{color:"secondary",floating:""}},[e._v(e._s(e.messageBadge>10?"9+":e.messageBadge))]):e._e(),r("q-popover",{staticStyle:{"overflow-y":"hidden",width:"290px"},attrs:{anchor:"bottom right",self:"bottom right"},on:{show:function(t){e.showPopover()}},model:{value:e.showing,callback:function(t){e.showing=t},expression:"showing"}},[r("div",{staticClass:"full-width"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 text-white bg-primary q-pa-xs q-px-sm",staticStyle:{height:"45px"}},[r("div",{staticClass:"float-left q-pt-sm"},[e._v("Customer Service")]),r("q-btn",{staticClass:"float-right",attrs:{color:"white",dense:"",flat:"",icon:"minimize"},on:{click:function(t){e.showing=!1}}})],1)]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"full-width",on:{mouseover:function(t){e.messageBadge=0}}},[r("q-scroll-area",{ref:"chatContainer",staticClass:"q-pa-sm",staticStyle:{height:"300px"}},e._l(this.messages,function(t,n){return r("q-chat-message",{key:n,attrs:{name:t.fullName,text:t.text,sent:t.sent,stamp:e.chatTime(t.stamp)}},[r("q-icon",{staticClass:"q-px-sm",attrs:{slot:"avatar"},slot:"avatar"},[r("avatar",{attrs:{username:t.fullName}})],1)],1)})),r("div",{staticClass:"q-px-sm"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("q-field",{attrs:{error:e.$v.userMessage.$pending}},[r("q-input",{attrs:{placeholder:"Type message.."},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.sendMessage(t):null},blur:e.$v.userMessage.$touch},model:{value:e.userMessage,callback:function(t){e.userMessage=t},expression:"userMessage"}})],1)],1),r("div",{staticClass:"col-auto text-right"},[r("q-btn",{attrs:{flat:"",round:"",color:"primary"},on:{click:function(t){e.sendMessage()}}},[r("i",{staticClass:"fas fa-paper-plane fa-lg"})])],1)])])],1)])])])])],1):e._e()],1)},a=[];n._withStripped=!0;var i=r("3156"),o=r.n(i),s=(r("96cf"),r("c973")),u=r.n(s),c=r("4a89"),l=r.n(c),f=r("c1df"),d=r.n(f),p=r("6e87"),h=r("2f62"),m=r("96a1"),v=r("b5ae"),g={components:{Avatar:l.a},name:"LayoutUser",data:function(){return{version:this.$store.state.version,loginStatus:!0,profilePicture:"",classUser:"username-info",headerStyle:"row header header-fix",me:{},showing:!1,name:"",username:"",messages:[],userMessage:"",messageBadge:0,to:""}},created:function(){var e=u()(regeneratorRuntime.mark(function e(){var t,r,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return window.addEventListener("scroll",this.handleScroll),e.next=3,this.getAccount();case 3:return this.socket.emit("join",this.me),this.socket.on("sendMessage",function(e){console.log("[36m%s[0m",">>> data :",[e.from,n.me._id]),e.from===n.me._id?e.sent=!0:(n.messageBadge++,e.sent=!1),n.messages.push(e),n.scrollDown()}),this.socket.on("reconnect",function(e){console.log("%c-reconnectionAttempts","color: yellow;",e),console.log("%c-reconnect","color: yellow;",n.me._id),n.socket.emit("join",n.me)}),e.next=8,this.$axios.get("chat");case 8:t=e.sent,r=t.data,r.map(function(e){e.read||n.messageBadge++;var t={name:e.senderId.username,fullName:e.senderId.fullName,text:[e.message],sent:n.me._id===e.senderId._id,stamp:d()(e.createdAt).format(),from:e.senderId,to:e.senderId};n.messages.unshift(t)});case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),methods:o()({backHome:function(){this.$router.push("/dashboard")},openURL:m["a"]},Object(h["b"])({doLogout:p["a"].DO_LOGOUT}),{getAccount:function(){var e=this;return this.$axios.get("account/profile/".concat(this.$store.state.userId)).then(function(t){e.me=t.data})},handleScroll:function(e){this.headerStyle="row header header-fix header-scrol-fixed"},sendMessage:function(){var e=u()(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.$v.$touch(),!this.$v.$pending&&!this.$v.$error){e.next=3;break}return e.abrupt("return");case 3:if(!this.userMessage){e.next=11;break}return t={name:this.me.username,fullName:this.me.fullName,text:[this.userMessage],sent:!0,stamp:d()().format(),from:this.me._id,to:this.me._id},e.next=7,this.$axios.post("messages",{message:this.userMessage});case 7:this.socket.emit("sendMessage",t),this.messages.push(t),this.userMessage="",this.scrollDown();case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),scrollDown:function(){var e=u()(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=1500,r=this.$refs.chatContainer,r.setScrollPosition(r.scrollHeight,t);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),chatTime:function(e){return d()(e).fromNow()},showPopover:function(){var e=u()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$axios.patch("chat");case 2:this.scrollDown();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}),validations:{userMessage:{required:v["required"]}}},y=g,b=(r("b4de"),r("2877")),_=Object(b["a"])(y,n,a,!1,null,null,null);_.options.__file="User.layout.vue";t["default"]=_.exports},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("78ef");t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)})}},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("78ef");t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e})}},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("78ef");t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r})}}}]);