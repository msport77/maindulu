(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["f7e0ed08"],{"013f":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-layout",{ref:"layout",attrs:{view:"lHh Lpr lFf"}},[r("q-page-container",{staticClass:"container-webpage"},[r("q-page",{staticClass:"noheader"},[r("div",{staticClass:"row justify-center"},[r("div",{staticClass:"col-10 col-md-8"},[r("div",{staticClass:"row q-mb-md"},[r("div",{staticClass:"col-xs-12 col-md-5 q-px-md row bg-white rounded-left"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"text-center"},[r("router-link",{attrs:{to:"/dashboard"}},[r("img",{staticClass:"logo-custom responsive",attrs:{src:"assets/MD-Logo-fix-1000px.png"}})])],1),r("div",{staticClass:"text-center"},[r("h3",{staticClass:"aero text-primary text-weight-bold q-my-sm"},[e._v("LOGIN")]),r("div",{staticClass:"q-my-md"},[r("q-list",{attrs:{"no-border":""}},[r("q-item",{staticClass:"q-py-none"},[r("q-item-main",[r("q-field",{attrs:{error:e.$v.email.$error,"error-label":e.$t("fieldRequired",{name:e.$t("email")})}},[r("q-input",{staticClass:"q-mb-md",attrs:{"float-label":e.$t("email")},on:{blur:e.$v.email.$touch},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1)],1),r("q-item",{staticClass:"q-py-none"},[r("q-item-main",[r("q-field",{attrs:{error:e.$v.password.$error,"error-label":e.$t("fieldRequired",{name:e.$t("password")})}},[r("q-input",{staticClass:"q-mb-md",attrs:{type:"password","float-label":e.$t("password")},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.doLogin(t):null},blur:e.$v.password.$touch},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1)],1),r("q-item",[r("q-item-main",[r("small",[r("q-checkbox",{attrs:{label:e.$t("keepLogin")},model:{value:e.rememberMe,callback:function(t){e.rememberMe=t},expression:"rememberMe"}})],1)]),r("router-link",{staticClass:"q-body-1 no-deco",attrs:{to:"/forgot"}},[e._v(e._s(e.$t("forgotPassword")))])],1),r("q-item",[r("q-item-main",{staticClass:"text-center"},[r("q-btn",{staticClass:"glow primary full-width",attrs:{rounded:""},on:{click:function(t){e.doLogin({email:e.email,password:e.password})}}},[e._v(e._s(e.$t("login")))])],1)],1)],1)],1)])])]),r("div",{staticClass:"col-xs-12 col-md-7"},[r("div",{staticClass:"fit login-img rounded-right"},[r("div",{staticClass:"login-title text-white"},[r("h4",{staticClass:"aero q-my-sm"},[e._v("Main Dulu"),r("br"),e._v("Bayar Nanti")]),r("div",{staticClass:"full-width"},[r("div",{staticClass:"text-weight-medium"},[e._v(e._s(e.$t("loginWithMDAccount")))])])])])])])])])])],1),r("q-layout-footer",{staticClass:"no-shadow",staticStyle:{"padding-bottom":"0px",left:"0",position:"absolute"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 bg-black q-toolbar row no-wrap items-center justify-center q-toolbar-normal text-white"},[r("p",{staticClass:"q-caption q-ma-none text-center"},[e._v("MAINDULU 2018. v"+e._s(e.version)+" Hak cipta dilindungi Undang-undang"),r("br"),r("small",[e._v("Untuk pengalaman terbaik, silakan gunakan Google Chrome atau Firefox.")])])])])])],1)},i=[];a._withStripped=!0;var n=r("6e87"),s=r("b5ae"),u={mounted:function(){this.alreadyVerified()},data:function(){return{version:this.$store.state.version,rememberMe:!0,email:"",password:""}},validations:{email:{required:s["required"]},password:{required:s["required"]}},methods:{alreadyVerified:function(){console.log(this.$route.query.alreadyVerified),this.$route.query&&this.$route.query.alreadyVerified&&this.$q.notify({message:"Akun Anda telah terverifikasi. Silahkan login menggunakan Email dan Password yang telah Anda registrasikan ke sistem kami.",position:"top",type:"positive",icon:"fas fa-exclamation-triangle"})},backHome:function(){this.$router.push("/dashboard")},doLogin:function(){var e=this;if(this.email=this.email.toLowerCase(),this.$v.$touch(),this.$v.$error)this.$q.notify({message:this.$t("email"),position:"top",type:"amber-10",icon:"fas fa-exclamation-triangle"});else{var t=this.email,r=this.password,a=this.rememberMe,i="local",s={email:t,password:r,strategy:i,remember_me:a};this.$store.dispatch(n["a"].DO_LOGIN,s,{root:!0}).then(function(t){e.$router.push("/user/dashboard")}).catch(function(t){console.log("YYY",t);var r=e.$t("datafNotNound");400===t.response.data.code&&"User's email is not yet verified."===t.response.data.message&&(r="Email belum diverifikasi. \nSilahkan cek email Anda."),e.$q.notify({message:r,position:"top",type:"amber-10",icon:"fas fa-exclamation-triangle"})})}}}},o=u,l=(r("da41"),r("2877")),d=Object(l["a"])(o,a,i,!1,null,null,null);d.options.__file="Login.vue";t["default"]=d.exports},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("78ef");t.default=function(e){return(0,a.withParams)({type:"maxLength",max:e},function(t){return!(0,a.req)(t)||(0,a.len)(t)<=e})}},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("78ef");t.default=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.withParams)({type:"and"},function(){for(var e=this,r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return t.length>0&&t.reduce(function(t,r){return t&&r.apply(e,a)},!0)})}},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("78ef");t.default=(0,a.regex)("alphaNum",/^[a-zA-Z0-9]*$/)},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("78ef");t.default=(0,a.regex)("numeric",/^[0-9]*$/)},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("78ef");t.default=function(e){return(0,a.withParams)({type:"maxValue",max:e},function(t){return!(0,a.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e})}},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("78ef"),i=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;t.default=(0,a.regex)("email",i)},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("78ef");t.default=function(e){return(0,a.withParams)({type:"minLength",min:e},function(t){return!(0,a.req)(t)||(0,a.len)(t)>=e})}},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("78ef");t.default=(0,a.regex)("alpha",/^[a-zA-Z]*$/)},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("78ef"),i=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;t.default=(0,a.regex)("url",i)},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.regex=t.ref=t.len=t.req=t.withParams=void 0;var a=r("8750"),i=n(a);function n(e){return e&&e.__esModule?e:{default:e}}t.withParams=i.default;var s=t.req=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e||!1===e)return!1;if(e instanceof Date)return!isNaN(e.getTime());if("object"===typeof e){for(var t in e)return!0;return!1}return!!String(e).length};t.len=function(e){return Array.isArray(e)?e.length:"object"===typeof e?Object.keys(e).length:String(e).length},t.ref=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]},t.regex=function(e,t){return(0,i.default)({type:e},function(e){return!s(e)||t.test(e)})}},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("0234").withParams;t.default=a},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("78ef");t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,a.withParams)({type:"macAddress"},function(t){if(!(0,a.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(i)})};var i=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("78ef");t.default=function(e){return(0,a.withParams)({type:"requiredIf",prop:e},function(t,r){return!(0,a.ref)(e,this,r)||(0,a.req)(t)})}},b5ae:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.maxValue=t.minValue=t.and=t.or=t.url=t.sameAs=t.requiredUnless=t.requiredIf=t.required=t.minLength=t.maxLength=t.macAddress=t.ipAddress=t.email=t.between=t.numeric=t.alphaNum=t.alpha=void 0;var a=r("6235"),i=I(a),n=r("3a54"),s=I(n),u=r("45b8"),o=I(u),l=r("ec11"),d=I(l),f=r("5d75"),c=I(f),m=r("c99d"),p=I(m),v=r("91d3"),h=I(v),y=r("2a12"),b=I(y),g=r("5db3"),q=I(g),_=r("d4f4"),w=I(_),$=r("aa82"),x=I($),P=r("e652"),C=I(P),k=r("b6cb"),M=I(k),j=r("772d"),A=I(j),O=r("d294"),L=I(O),N=r("3360"),V=I(N),z=r("eb66"),D=I(z),S=r("46bc"),U=I(S);function I(e){return e&&e.__esModule?e:{default:e}}t.alpha=i.default,t.alphaNum=s.default,t.numeric=o.default,t.between=d.default,t.email=c.default,t.ipAddress=p.default,t.macAddress=h.default,t.maxLength=b.default,t.minLength=q.default,t.required=w.default,t.requiredIf=x.default,t.requiredUnless=C.default,t.sameAs=M.default,t.url=A.default,t.or=L.default,t.and=V.default,t.minValue=D.default,t.maxValue=U.default},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("78ef");t.default=function(e){return(0,a.withParams)({type:"sameAs",eq:e},function(t,r){return t===(0,a.ref)(e,this,r)})}},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("78ef");t.default=(0,a.withParams)({type:"ipAddress"},function(e){if(!(0,a.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(i)});var i=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("78ef");t.default=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.withParams)({type:"or"},function(){for(var e=this,r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return t.length>0&&t.reduce(function(t,r){return t||r.apply(e,a)},!1)})}},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("78ef");t.default=(0,a.withParams)({type:"required"},a.req)},da41:function(e,t,r){"use strict";var a=r("f81e"),i=r.n(a);i.a},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("78ef");t.default=function(e){return(0,a.withParams)({type:"requiredUnless",prop:e},function(t,r){return!!(0,a.ref)(e,this,r)||(0,a.req)(t)})}},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("78ef");t.default=function(e){return(0,a.withParams)({type:"minValue",min:e},function(t){return!(0,a.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e})}},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("78ef");t.default=function(e,t){return(0,a.withParams)({type:"between",min:e,max:t},function(r){return!(0,a.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r})}},f81e:function(e,t,r){}}]);