(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ec729bda"],{"0676":function(e,t){function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}e.exports=a},"11b0":function(e,t,a){var r=a("2a06"),n=a("883d");function i(e){if(n(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}e.exports=i},"20e0":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"products-edit"},[a("q-card",[a("q-card-main",[a("q-btn",{attrs:{flat:""},on:{click:function(t){e.$router.replace(e.baseRoute+"/list")}}},[e._v("Back to List")])],1),a("q-card-main",[a("p",{staticClass:"caption"},[e._v(e._s(e.$t("paymentDate")))]),a("q-field",{attrs:{error:e.$v.data.paymentDate.$error,"error-label":e.$t("fieldRequired",{name:e.$t("paymentDate")})}},[a("q-datetime",{staticClass:"input",attrs:{type:"date",inverted:"",color:"clear"},model:{value:e.data.paymentDate,callback:function(t){e.$set(e.data,"paymentDate",t)},expression:"data.paymentDate"}})],1)],1),a("q-card-main",[a("p",{staticClass:"caption"},[e._v(e._s(e.$t("bankName")))]),a("q-field",{attrs:{error:e.$v.data.bankName.$error,"error-label":e.$t("fieldRequired",{name:e.$t("bankName")})}},[a("q-input",{staticClass:"q-mb-md input",attrs:{inverted:"",color:"clear"},on:{blur:e.$v.data.bankName.$touch},model:{value:e.data.bankName,callback:function(t){e.$set(e.data,"bankName",t)},expression:"data.bankName"}})],1)],1),a("q-card-main",[a("p",{staticClass:"caption"},[e._v(e._s(e.$t("accountNumber")))]),a("q-field",{attrs:{error:e.$v.data.accountNumber.$error,"error-label":e.$t("fieldRequired",{name:e.$t("accountNumber")})}},[a("q-input",{staticClass:"q-mb-md input",attrs:{inverted:"",color:"clear"},on:{blur:e.$v.data.accountNumber.$touch},model:{value:e.data.accountNumber,callback:function(t){e.$set(e.data,"accountNumber",t)},expression:"data.accountNumber"}})],1)],1),a("q-card-main",[a("p",{staticClass:"caption"},[e._v(e._s(e.$t("accountName")))]),a("q-field",{attrs:{error:e.$v.data.accountName.$error,"error-label":e.$t("fieldRequired",{name:e.$t("accountName")})}},[a("q-input",{staticClass:"q-mb-md input",attrs:{inverted:"",color:"clear"},on:{blur:e.$v.data.accountName.$touch},model:{value:e.data.accountName,callback:function(t){e.$set(e.data,"accountName",t)},expression:"data.accountName"}})],1)],1),a("q-card-main",[a("p",{staticClass:"caption"},[e._v(e._s(e.$t("uploadReceipt")))]),a("q-field",{attrs:{error:e.$v.data.receiptImageUrl.$error,"error-label":e.$t("fieldRequired",{name:e.$t("uploadReceipt")})}},[a("q-input",{staticClass:"q-mb-md",staticStyle:{display:"none"},on:{blur:e.$v.data.receiptImageUrl.$touch},model:{value:e.data.receiptImageUrl,callback:function(t){e.$set(e.data,"receiptImageUrl",t)},expression:"data.receiptImageUrl"}}),a("q-uploader",{ref:"profilePictureUploader",staticClass:"pic",attrs:{url:e.urlUpload,"auto-expand":!0,multiple:!1,"hide-upload-button":!0,inverted:"",color:"clear"},on:{add:e.pickProfilePicture,uploaded:e.profilePictureUploaded,fail:e.profilePictureUploadFail}})],1)],1),a("q-card-separator"),a("q-card-actions",[e.confirmBtnVisible?a("q-btn",{staticClass:"glow primary",attrs:{rounded:""},on:{click:e.save}},[e._v("Confirmation")]):e._e()],1)],1)],1)},n=[];r._withStripped=!0;a("a481");var i=a("b93b"),o=a("b5ae"),u=a("bc3a"),s=a.n(u),c="user",d="transactions",l="/".concat(c,"/").concat(d),f={mixins:[Object(i["a"])(d)],mounted:function(){var e=this.$route.params.id;e?this.doGet(e):this.$router.replace(l+"/list")},data:function(){return{baseRoute:l,urlUpload:"".concat(s.a.defaults.baseURL,"/post-images"),data:{paymentDate:"",receiptImageUrl:"",bankName:"",accountNumber:"",accountName:""}}},validations:{data:{paymentDate:{required:o["required"]},receiptImageUrl:{required:o["required"]},bankName:{required:o["required"]},accountNumber:{required:o["required"]},accountName:{required:o["required"]}}},methods:{save:function(){var e=this;this.$v.data.$touch(),this.$v.data.$error?this.$q.notify("Please review fields again."):this.$route.params.id?s.a.post("/payment-confirmation",{trxId:this.$route.params.id,confirmationData:{receiptImageUrl:this.data.receiptImageUrl,date:new Date,bankName:this.data.bankName,accountNumber:this.data.accountNumber,accountName:this.data.accountName}}).then(function(t){201===t.status?(e.$q.notify({message:t.data.message,position:"center",type:"positive"}),e.$router.replace(l+"/list")):e.$q.notify("Please review fields again.")}):this.$q.notify("Please review fields again.")},pickProfilePicture:function(e){console.log(s.a.defaults.baseURL),console.log(e),this.selectedFiles=e.length,this.$refs.profilePictureUploader.upload()},profilePictureUploaded:function(e){var t=JSON.parse(e.xhr.responseText);this.data.receiptImageUrl=t.id,console.log(this.data.receiptImageUrl),this.receiptImageUrlUploadStatus=!0},profilePictureUploadFail:function(e){console.log(e.xhr.responseText),this.$q.notify({message:this.$t("generalError",{name:"Upload ".concat(this.$t("ture"))}),position:"top",type:"negative"})}},computed:{confirmBtnVisible:function(){return"0"===this.data.paidStatus}}},p=f,m=(a("d391"),a("2877")),h=Object(m["a"])(p,r,n,!1,null,"43ca45c8",null);h.options.__file="Transaction.confirm.vue";t["default"]=h.exports},"20fd":function(e,t,a){"use strict";var r=a("d9f6"),n=a("aebd");e.exports=function(e,t,a){t in e?r.f(e,t,n(0,a)):e[t]=a}},2236:function(e,t){function a(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}e.exports=a},"2a06":function(e,t,a){e.exports=a("d2d5")},"2a12":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("78ef");t.default=function(e){return(0,r.withParams)({type:"maxLength",max:e},function(t){return!(0,r.req)(t)||(0,r.len)(t)<=e})}},3360:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("78ef");t.default=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.withParams)({type:"and"},function(){for(var e=this,a=arguments.length,r=Array(a),n=0;n<a;n++)r[n]=arguments[n];return t.length>0&&t.reduce(function(t,a){return t&&a.apply(e,r)},!0)})}},"3a54":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("78ef");t.default=(0,r.regex)("alphaNum",/^[a-zA-Z0-9]*$/)},"448a":function(e,t,a){var r=a("2236"),n=a("11b0"),i=a("0676");function o(e){return r(e)||n(e)||i()}e.exports=o},"45b8":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("78ef");t.default=(0,r.regex)("numeric",/^[0-9]*$/)},"46bc":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("78ef");t.default=function(e){return(0,r.withParams)({type:"maxValue",max:e},function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e})}},"549b":function(e,t,a){"use strict";var r=a("d864"),n=a("63b6"),i=a("241e"),o=a("b0dc"),u=a("3702"),s=a("b447"),c=a("20fd"),d=a("7cd6");n(n.S+n.F*!a("4ee1")(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,n,l,f=i(e),p="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,v=void 0!==h,g=0,b=d(f);if(v&&(h=r(h,m>2?arguments[2]:void 0,2)),void 0==b||p==Array&&u(b))for(t=s(f.length),a=new p(t);t>g;g++)c(a,g,v?h(f[g],g):f[g]);else for(l=b.call(f),a=new p;!(n=l.next()).done;g++)c(a,g,v?o(l,h,[n.value,g],!0):n.value);return a.length=g,a}})},"54a1":function(e,t,a){a("6c1c"),a("1654"),e.exports=a("95d5")},"5d75":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("78ef"),n=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;t.default=(0,r.regex)("email",n)},"5db3":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("78ef");t.default=function(e){return(0,r.withParams)({type:"minLength",min:e},function(t){return!(0,r.req)(t)||(0,r.len)(t)>=e})}},6235:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("78ef");t.default=(0,r.regex)("alpha",/^[a-zA-Z]*$/)},"772d":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("78ef"),n=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;t.default=(0,r.regex)("url",n)},"78ef":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.regex=t.ref=t.len=t.req=t.withParams=void 0;var r=a("8750"),n=i(r);function i(e){return e&&e.__esModule?e:{default:e}}t.withParams=n.default;var o=t.req=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e||!1===e)return!1;if(e instanceof Date)return!isNaN(e.getTime());if("object"===typeof e){for(var t in e)return!0;return!1}return!!String(e).length};t.len=function(e){return Array.isArray(e)?e.length:"object"===typeof e?Object.keys(e).length:String(e).length},t.ref=function(e,t,a){return"function"===typeof e?e.call(t,a):a[e]},t.regex=function(e,t){return(0,n.default)({type:e},function(e){return!o(e)||t.test(e)})}},8750:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("0234").withParams;t.default=r},"883d":function(e,t,a){e.exports=a("54a1")},"91d3":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("78ef");t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},function(t){if(!(0,r.req)(t))return!0;if("string"!==typeof t)return!1;var a="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==a&&(6===a.length||8===a.length)&&a.every(n)})};var n=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},"95d5":function(e,t,a){var r=a("40c3"),n=a("5168")("iterator"),i=a("481b");e.exports=a("584a").isIterable=function(e){var t=Object(e);return void 0!==t[n]||"@@iterator"in t||i.hasOwnProperty(r(t))}},aa82:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("78ef");t.default=function(e){return(0,r.withParams)({type:"requiredIf",prop:e},function(t,a){return!(0,r.ref)(e,this,a)||(0,r.req)(t)})}},b5ae:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.maxValue=t.minValue=t.and=t.or=t.url=t.sameAs=t.requiredUnless=t.requiredIf=t.required=t.minLength=t.maxLength=t.macAddress=t.ipAddress=t.email=t.between=t.numeric=t.alphaNum=t.alpha=void 0;var r=a("6235"),n=L(r),i=a("3a54"),o=L(i),u=a("45b8"),s=L(u),c=a("ec11"),d=L(c),l=a("5d75"),f=L(l),p=a("c99d"),m=L(p),h=a("91d3"),v=L(h),g=a("2a12"),b=L(g),y=a("5db3"),$=L(y),q=a("d4f4"),P=L(q),_=a("aa82"),w=L(_),N=a("e652"),x=L(N),O=a("b6cb"),j=L(O),M=a("772d"),A=L(M),k=a("d294"),U=L(k),I=a("3360"),D=L(I),S=a("eb66"),C=L(S),R=a("46bc"),z=L(R);function L(e){return e&&e.__esModule?e:{default:e}}t.alpha=n.default,t.alphaNum=o.default,t.numeric=s.default,t.between=d.default,t.email=f.default,t.ipAddress=m.default,t.macAddress=v.default,t.maxLength=b.default,t.minLength=$.default,t.required=P.default,t.requiredIf=w.default,t.requiredUnless=x.default,t.sameAs=j.default,t.url=A.default,t.or=U.default,t.and=D.default,t.minValue=C.default,t.maxValue=z.default},b6cb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("78ef");t.default=function(e){return(0,r.withParams)({type:"sameAs",eq:e},function(t,a){return t===(0,r.ref)(e,this,a)})}},b93b:function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"a",function(){return f}),a.d(t,"c",function(){return p}),a.d(t,"d",function(){return m}),a.d(t,"e",function(){return h});a("f559"),a("cadf"),a("456d"),a("ac6a");var r=a("448a"),n=a.n(r),i=a("9523"),o=a.n(i),u=a("3156"),s=a.n(u),c=function(e,t){return{data:function(){return{uri:e,query:t.query||{},data:[],pagination:{page:1,rowsNumber:0,rowsPerPage:50},filter:"",selected:[],loading:!1}},methods:{filterHandler:function(e){return{}},doFind:function(e){var t=this,a=e||this,r=a.pagination,n=a.filter;this.pagination=r;var i=r.rowsPerPage,u=((r.page>0?r.page:1)-1)*r.rowsPerPage,c=r.page,d=s()({$limit:i,$skip:u},this.query),l={};r.sortBy&&(d.$sort=o()({},r.sortBy,r.descending?-1:1)),l=this.filterHandler(n);var f=s()({},d,l);return this.loading=!0,this.$axios.get(this.uri,{params:f}).then(function(e){var a=e.data;return t.pagination.rowsNumber=a.total,t.pagination.rowsPerPage=i,t.pagination.page=c,t.data=a.data,t.loading=!1,a})}}}},d=function(e,t){return{data:function(){return{toObjectIdMap:[],toISODateMap:[],uri:e,aggregate:t.aggregate||[],data:[],pagination:{page:1,rowsNumber:0,rowsPerPage:50},filter:"",selected:[],loading:!1}},methods:{filterHandler:function(e){return{}},doFind:function(e){var t=this,a=e||this,r=a.pagination,i=a.filter,u=[];u.push.apply(u,n()(this.aggregate));var s=r.rowsPerPage,c=((r.page>0?r.page:1)-1)*r.rowsPerPage,d=r.page;i&&u.push(this.filterHandler(i)),r.sortBy&&u.push({$sort:o()({},r.sortBy,r.descending?-1:1)});var l={total:[{$count:"count"}],data:[{$skip:c}]};r.rowsPerPage&&l.data.push({$limit:s}),u.push({$facet:l}),u.push.apply(u,[{$unwind:"$total"},{$project:{data:1,total:"$total.count"}}]),this.loading=!0;var f=this.uri;console.log(u);var p=this.toObjectIdMap.length?this.toObjectIdMap:[],m=this.toISODateMap.length?this.toISODateMap:[],h={resource:f,aggregate:u,toObjectIdMap:p,toISODateMap:m};return this.$axios.post("aggregate",h).then(function(e){var a=e.data[0];return t.pagination=r,t.pagination.rowsNumber=a&&a.total?a.total:0,t.data=a&&a.data?a.data:[],t.pagination.rowsPerPage=s,t.pagination.page=d,t.loading=!1,a})}}}},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a?d(e,t):c(e,t)},f=function(e){return{data:function(){return{uri:e,data:{}}},methods:{doGet:function(e,t){var a=this;return this.$axios.get("".concat(this.uri,"/").concat(e),t).then(function(e){return a.data=e.data,e})},doPost:function(e){var t=this.data;return this.$axios.post(this.uri,t,e).then(function(e){return e})},doPatch:function(e,t){var a=this.data;return this.$axios.patch("".concat(this.uri,"/").concat(e),a,t).then(function(e){return e})}}}},p=function(e){return{data:function(){return{uri:e}},methods:{doRemove:function(e,t){return this.$axios.delete("".concat(this.uri,"/").concat(e),t).then(function(e){return e})}}}},m=function(){return{data:function(){return{errorMessages:{},columnName:{}}},methods:{showError:function(e){var t=this,a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.errorMessages={},Object.keys(e).forEach(function(a){a.startsWith("$")||(e[a]["$error"],Object.keys(e[a]).forEach(function(r){if(!r.startsWith("$")&&"boolean"===typeof e[a][r]&&!e[a][r]){var n=s()({field:t.columnName&&t.columnName[a]?t.columnName[a]:a},e[a].$params[r]);t.errorMessages[a]=t.$t("ErrorMessage.".concat(r),n)}}))}),a&&e.$error&&this.$q.notify({message:this.$t("ReviewForm"),color:"red-10",icon:"warning",position:"top-right"})}}}},h=function(e){return"undefined"===typeof e||null===e||""===e||/^[.a-zA-Z -]*$/.test(e)}},c99d:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("78ef");t.default=(0,r.withParams)({type:"ipAddress"},function(e){if(!(0,r.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(n)});var n=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},d294:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("78ef");t.default=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.withParams)({type:"or"},function(){for(var e=this,a=arguments.length,r=Array(a),n=0;n<a;n++)r[n]=arguments[n];return t.length>0&&t.reduce(function(t,a){return t||a.apply(e,r)},!1)})}},d2d5:function(e,t,a){a("1654"),a("549b"),e.exports=a("584a").Array.from},d391:function(e,t,a){"use strict";var r=a("d75b"),n=a.n(r);n.a},d4f4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("78ef");t.default=(0,r.withParams)({type:"required"},r.req)},d75b:function(e,t,a){},e652:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("78ef");t.default=function(e){return(0,r.withParams)({type:"requiredUnless",prop:e},function(t,a){return!!(0,r.ref)(e,this,a)||(0,r.req)(t)})}},eb66:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("78ef");t.default=function(e){return(0,r.withParams)({type:"minValue",min:e},function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e})}},ec11:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("78ef");t.default=function(e,t){return(0,r.withParams)({type:"between",min:e,max:t},function(a){return!(0,r.req)(a)||(!/\s/.test(a)||a instanceof Date)&&+e<=+a&&+t>=+a})}}}]);