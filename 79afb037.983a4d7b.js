(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["79afb037"],{"0676":function(t,a){function e(){throw new TypeError("Invalid attempt to spread non-iterable instance")}t.exports=e},"102d":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"products-edit"},[e("q-card",[e("q-card-main",[e("q-btn",{attrs:{flat:""},on:{click:function(a){t.$router.replace(t.baseRoute+"/list")}}},[t._v("Back to List")])],1),e("q-card-main",[e("q-input",{attrs:{"stack-label":"SDK"},model:{value:t.data.productSKD,callback:function(a){t.$set(t.data,"productSKD",a)},expression:"data.productSKD"}}),e("q-item",[e("q-item-side",[e("q-item-tile",[e("img",{attrs:{src:t.data.imgURL,width:"80px",height:"80px"}})])],1),e("q-item-main",[e("q-uploader",{attrs:{"stack-label":"Image",url:t.urlUpload,method:"POST","auto-expand":!0},on:{uploaded:t.postUpload}})],1)],1),e("q-input",{attrs:{"stack-label":"Name"},model:{value:t.data.productName,callback:function(a){t.$set(t.data,"productName",a)},expression:"data.productName"}}),e("q-input",{attrs:{"stack-label":"Price"},model:{value:t.data.productPrice,callback:function(a){t.$set(t.data,"productPrice",a)},expression:"data.productPrice"}}),e("q-input",{attrs:{"stack-label":"Available Units"},model:{value:t.data.productAvailUnits,callback:function(a){t.$set(t.data,"productAvailUnits",a)},expression:"data.productAvailUnits"}}),e("q-select",{attrs:{"stack-label":"Category",options:t.categories},model:{value:t.data.productCategories,callback:function(a){t.$set(t.data,"productCategories",a)},expression:"data.productCategories"}}),e("q-select",{attrs:{"stack-label":"Vendor",options:t.vendors},model:{value:t.data.productVendor,callback:function(a){t.$set(t.data,"productVendor",a)},expression:"data.productVendor"}})],1),e("q-card-separator"),e("q-card-actions",{attrs:{align:"end"}},[e("q-btn",{attrs:{color:"primary"},on:{click:t.save}},[t._v("Save")])],1)],1)],1)},n=[];r._withStripped=!0;e("a481");var o=e("b93b"),i=e("bc3a"),s=e.n(i),c="admin",u="products",d="/".concat(c,"/").concat(u),l={mixins:[Object(o["a"])(u)],mounted:function(){this.getDropItems();var t=this.$route.params.id;t&&this.doGet(t).then(function(t){console.log(t)})},data:function(){return{baseRoute:d,categories:[],vendors:[],str:"",postBody:{},urlUpload:s.a.defaults.baseURL+"/uploads/"}},methods:{postUpload:function(t){this.data.imgURL=this.urlUpload+JSON.parse(t.xhr.response).id,console.log("postUpload",this.data.imgURL)},getDropItems:function(){var t=this;console.log("urlUploads",s.a.defaults.baseURL),this.postBody={type:"parallel",call:[["categories::find",{}],["vendors::find",{}]]},s.a.post(s.a.defaults.baseURL+"/batch",this.postBody).then(function(a){t.categories=a.data.data[0][1].data,t.str=JSON.stringify(t.categories),t.str=t.str.replace(/categoryName/g,"label"),t.str=t.str.replace(/_id/g,"value"),t.categories=JSON.parse(t.str),t.vendors=a.data.data[1][1].data,t.str=JSON.stringify(t.vendors),t.str=t.str.replace(/vendorName/g,"label"),t.str=t.str.replace(/_id/g,"value"),t.vendors=JSON.parse(t.str)}).catch(function(a){t.errors.push(a)})},save:function(){var t=this;this.$route.params.id?this.doPatch(this.$route.params.id).then(function(){t.$router.go(-1)}):this.doPost().then(function(){t.$router.go(-1)})}}},p=l,f=(e("5c40"),e("2877")),g=Object(f["a"])(p,r,n,!1,null,"329f0860",null);g.options.__file="Products.edit.vue";a["default"]=g.exports},"11b0":function(t,a,e){var r=e("2a06"),n=e("883d");function o(t){if(n(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}t.exports=o},"20fd":function(t,a,e){"use strict";var r=e("d9f6"),n=e("aebd");t.exports=function(t,a,e){a in t?r.f(t,a,n(0,e)):t[a]=e}},2236:function(t,a){function e(t){if(Array.isArray(t)){for(var a=0,e=new Array(t.length);a<t.length;a++)e[a]=t[a];return e}}t.exports=e},"2a06":function(t,a,e){t.exports=e("d2d5")},"38f9":function(t,a,e){},"448a":function(t,a,e){var r=e("2236"),n=e("11b0"),o=e("0676");function i(t){return r(t)||n(t)||o()}t.exports=i},"549b":function(t,a,e){"use strict";var r=e("d864"),n=e("63b6"),o=e("241e"),i=e("b0dc"),s=e("3702"),c=e("b447"),u=e("20fd"),d=e("7cd6");n(n.S+n.F*!e("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var a,e,n,l,p=o(t),f="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,v=void 0!==h,m=0,b=d(p);if(v&&(h=r(h,g>2?arguments[2]:void 0,2)),void 0==b||f==Array&&s(b))for(a=c(p.length),e=new f(a);a>m;m++)u(e,m,v?h(p[m],m):p[m]);else for(l=b.call(p),e=new f;!(n=l.next()).done;m++)u(e,m,v?i(l,h,[n.value,m],!0):n.value);return e.length=m,e}})},"54a1":function(t,a,e){e("6c1c"),e("1654"),t.exports=e("95d5")},"5c40":function(t,a,e){"use strict";var r=e("38f9"),n=e.n(r);n.a},"883d":function(t,a,e){t.exports=e("54a1")},"95d5":function(t,a,e){var r=e("40c3"),n=e("5168")("iterator"),o=e("481b");t.exports=e("584a").isIterable=function(t){var a=Object(t);return void 0!==a[n]||"@@iterator"in a||o.hasOwnProperty(r(a))}},b93b:function(t,a,e){"use strict";e.d(a,"b",function(){return l}),e.d(a,"a",function(){return p}),e.d(a,"c",function(){return f}),e.d(a,"d",function(){return g}),e.d(a,"e",function(){return h});e("f559"),e("cadf"),e("456d"),e("ac6a");var r=e("448a"),n=e.n(r),o=e("9523"),i=e.n(o),s=e("3156"),c=e.n(s),u=function(t,a){return{data:function(){return{uri:t,query:a.query||{},data:[],pagination:{page:1,rowsNumber:0,rowsPerPage:50},filter:"",selected:[],loading:!1}},methods:{filterHandler:function(t){return{}},doFind:function(t){var a=this,e=t||this,r=e.pagination,n=e.filter;this.pagination=r;var o=r.rowsPerPage,s=((r.page>0?r.page:1)-1)*r.rowsPerPage,u=r.page,d=c()({$limit:o,$skip:s},this.query),l={};r.sortBy&&(d.$sort=i()({},r.sortBy,r.descending?-1:1)),l=this.filterHandler(n);var p=c()({},d,l);return this.loading=!0,this.$axios.get(this.uri,{params:p}).then(function(t){var e=t.data;return a.pagination.rowsNumber=e.total,a.pagination.rowsPerPage=o,a.pagination.page=u,a.data=e.data,a.loading=!1,e})}}}},d=function(t,a){return{data:function(){return{toObjectIdMap:[],toISODateMap:[],uri:t,aggregate:a.aggregate||[],data:[],pagination:{page:1,rowsNumber:0,rowsPerPage:50},filter:"",selected:[],loading:!1}},methods:{filterHandler:function(t){return{}},doFind:function(t){var a=this,e=t||this,r=e.pagination,o=e.filter,s=[];s.push.apply(s,n()(this.aggregate));var c=r.rowsPerPage,u=((r.page>0?r.page:1)-1)*r.rowsPerPage,d=r.page;o&&s.push(this.filterHandler(o)),r.sortBy&&s.push({$sort:i()({},r.sortBy,r.descending?-1:1)});var l={total:[{$count:"count"}],data:[{$skip:u}]};r.rowsPerPage&&l.data.push({$limit:c}),s.push({$facet:l}),s.push.apply(s,[{$unwind:"$total"},{$project:{data:1,total:"$total.count"}}]),this.loading=!0;var p=this.uri;console.log(s);var f=this.toObjectIdMap.length?this.toObjectIdMap:[],g=this.toISODateMap.length?this.toISODateMap:[],h={resource:p,aggregate:s,toObjectIdMap:f,toISODateMap:g};return this.$axios.post("aggregate",h).then(function(t){var e=t.data[0];return a.pagination=r,a.pagination.rowsNumber=e&&e.total?e.total:0,a.data=e&&e.data?e.data:[],a.pagination.rowsPerPage=c,a.pagination.page=d,a.loading=!1,e})}}}},l=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e?d(t,a):u(t,a)},p=function(t){return{data:function(){return{uri:t,data:{}}},methods:{doGet:function(t,a){var e=this;return this.$axios.get("".concat(this.uri,"/").concat(t),a).then(function(t){return e.data=t.data,t})},doPost:function(t){var a=this.data;return this.$axios.post(this.uri,a,t).then(function(t){return t})},doPatch:function(t,a){var e=this.data;return this.$axios.patch("".concat(this.uri,"/").concat(t),e,a).then(function(t){return t})}}}},f=function(t){return{data:function(){return{uri:t}},methods:{doRemove:function(t,a){return this.$axios.delete("".concat(this.uri,"/").concat(t),a).then(function(t){return t})}}}},g=function(){return{data:function(){return{errorMessages:{},columnName:{}}},methods:{showError:function(t){var a=this,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.errorMessages={},Object.keys(t).forEach(function(e){e.startsWith("$")||(t[e]["$error"],Object.keys(t[e]).forEach(function(r){if(!r.startsWith("$")&&"boolean"===typeof t[e][r]&&!t[e][r]){var n=c()({field:a.columnName&&a.columnName[e]?a.columnName[e]:e},t[e].$params[r]);a.errorMessages[e]=a.$t("ErrorMessage.".concat(r),n)}}))}),e&&t.$error&&this.$q.notify({message:this.$t("ReviewForm"),color:"red-10",icon:"warning",position:"top-right"})}}}},h=function(t){return"undefined"===typeof t||null===t||""===t||/^[.a-zA-Z -]*$/.test(t)}},d2d5:function(t,a,e){e("1654"),e("549b"),t.exports=e("584a").Array.from}}]);