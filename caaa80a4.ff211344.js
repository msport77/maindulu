(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["caaa80a4"],{"0c3a":function(t,a,e){"use strict";e.d(a,"a",function(){return s});e("6b54"),e("28a5"),e("a481");var s=function(){return{methods:{ucWords:function(t){return t?t.toLowerCase().replace(/\b[a-z]/g,function(t){return t.toUpperCase()}):""},convertToRupiah:function(t){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e="",s="",i=a?"Rp. ":"";if(t>0){s=t.toString().split("").reverse().join("");for(var n=0;n<s.length;n++)n%3===0&&(e+=s.substr(n,3)+".");return s=e.split("",e.length-1).reverse().join(""),"".concat(i).concat(s)}return"".concat(i,"0")}}}}},"250e":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bg-white"},[e("div",{staticClass:"banner-image"}),e("div",{staticClass:"row justify-center bg-white"},[e("div",{staticClass:"col-11 col-md-6"},[e("div",{staticClass:"item-center text-center posisi"},[t.mytrx?e("q-card",{staticClass:"q-ma-sm r-xs",attrs:{dark:""}},[e("q-list",{attrs:{"no-border":""}},[e("q-list-header",{staticClass:"text-center"},[this.pictureimgURL?e("img",{staticClass:"image-responsive",attrs:{src:this.pictureimgURL},on:{error:function(t){this.src="/assets/800x600/default_img.png"}}}):t._e(),this.pictureimgURL?t._e():e("img",{staticClass:"image-responsive",attrs:{src:"/assets/800x600/default_img.png"}}),e("h5",{staticClass:"aero text-primary q-ma-none"},[t._v(t._s(t.mytrx.cart.itemName))])]),e("q-item",{staticClass:"q-pa-none"},[e("div",{staticClass:"full-width bg-white"},[e("div",{staticClass:"row q-py-sm q-px-md"},[e("div",{staticClass:"col-xs-12 q-mb-md text-center"},[e("div",{staticStyle:{"word-break":"break-all"}},[t._v(t._s(t.mytrx.clientTransId))])])]),e("div",{staticClass:"row q-py-sm q-px-md q-mb-md"},[e("div",{staticClass:"col-xs-12 q-mb-sm text-weight-bold text-center"},[t._v(t._s(t.$t("gamePartner")))]),t.mytrx.companyId?e("div",{staticClass:"col-xs-12 text-center"},[t._v(t._s(t.mytrx.companyId.name))]):t._e()]),e("div",{staticClass:"row q-py-sm q-px-md q-mb-md"},[e("div",{staticClass:"col-xs-12 q-mb-sm text-center text-weight-bold"},[t._v(t._s(t.$t("trxDate")))]),e("div",{staticClass:"col-xs-12 text-center"},[t._v(t._s(t.dateFormat(t.mytrx.createdAt)))])]),e("div",{staticClass:"row q-py-sm q-px-md q-mb-md"},[e("div",{staticClass:"col-xs-12 q-mb-sm text-center text-weight-bold"},[t._v(t._s(t.$t("dueDate")))]),e("div",{staticClass:"col-xs-12 text-center"},[t._v(t._s(t.dateFormat(t.mytrx.duedate)))])]),0==t.mytrx.paidStatus&&t.checkDate(t.mytrx.duedate)>0?e("div",{staticClass:"row q-py-sm q-px-md q-mb-md"},[e("div",{staticClass:"col-xs-12 q-mb-sm text-center text-weight-bold"},[t._v("\n                    "+t._s(t.$t("gracePeriode"))+"\n                    "),e("q-icon",{attrs:{name:"far fa-question-circle cursor-pointer",color:"black"}},[e("q-tooltip",{staticClass:"bg-red",attrs:{anchor:"top middle",self:"bottom middle",offset:[10,10]}},[e("strong",[t._v("Apabila Anda tidak melakukan pembayaran hingga melampaui masa tenggang, "),e("br"),t._v("maka Akun Game Anda akan diblokir sampai anda melunasi pembayaran anda")])])],1)],1),e("div",{staticClass:"col-xs-12 text-center"},[t._v(t._s(t.dateFormat(t.mytrx.gracePeriod.end)))])]):t._e(),e("div",{staticClass:"row q-py-sm q-px-md q-mb-md"},[e("div",{staticClass:"col-xs-12 q-mb-sm text-center text-weight-bold"},[t._v(t._s(t.$t("status")))]),e("div",{staticClass:"col-xs-12 text-center text-weight-bold"},[e("div",{class:t.mytrx.statusColor},[t._v(t._s(t.mytrx.status))])])]),e("div",{staticClass:"row q-py-sm q-px-md q-mb-md"},[e("div",{staticClass:"col-xs-12 q-mb-sm text-center text-weight-bold"},[t._v(t._s(t.$t("paymentStatus")))]),e("div",{staticClass:"col-xs-12 text-center text-weight-bold"},[e("div",{class:t.mytrx.paidStatusTextColor},[t._v(t._s(t.mytrx.paidStatusText))])])]),e("div",{staticClass:"row q-py-sm q-px-md q-mb-md"},[e("div",{staticClass:"col-xs-12 q-mb-sm text-center text-weight-bold"},[t._v(t._s(t.$t("nominal")))]),e("div",{staticClass:"col-xs-12 text-center"},[t._v(t._s(t.convertToRupiah(t.mytrx.price)))])]),e("div",{staticClass:"row q-py-sm q-px-md"},[e("div",{staticClass:"col-xs-12 q-mb-sm text-center text-weight-bold"},[t._v("\n                    "+t._s(t.$t("uniqueCode"))+"\n                    "),e("q-icon",{attrs:{name:"far fa-question-circle cursor-pointer",color:"black"}},[e("q-tooltip",{staticClass:"bg-positive",attrs:{anchor:"top middle",self:"bottom middle",offset:[10,10]}},[e("strong",[t._v("Kode unik berfungsi sebagai kode verifikasi."),e("br"),t._v("Dengan melakukan transfer sesuai dengan kode unik,"),e("br"),t._v("proses verifikasi pembayaran lebih cepat")])])],1)],1),e("div",{staticClass:"col-xs-12 text-center text-weight-bold"},[t._v(t._s(t.convertToRupiah(t.mytrx.uniqueCode)))])]),e("div",{staticClass:"row q-py-sm q-px-md q-mb-md"},[e("div",{staticClass:"col-xs-12 q-mb-sm text-center text-weight-bold"},[t._v(t._s(t.$t("handlingFees")))]),e("div",{staticClass:"col-xs-12 text-center"},[t._v(t._s(t.convertToRupiah(t.mytrx.dueDateFee)))])]),["0","1","2"].indexOf(t.mytrx.paidStatus)>=0&&t.checkDate(t.mytrx.duedate)>0?e("div",{staticClass:"row q-py-sm q-px-md q-mb-md"},[e("div",{staticClass:"col-xs-12 q-mb-sm text-center text-weight-bold"},[t._v(t._s(t.$t("extraHandlingFee")))]),e("div",{staticClass:"col-xs-12 text-center"},[t._v(t._s(t.convertToRupiah(t.mytrx.graceFee)))])]):t._e(),"2"===t.mytrx.version&&(t.mytrx.price+t.mytrx.fine)%1e3!="0"?e("div",{staticClass:"row q-py-sm q-px-md text-negative"},[e("div",{staticClass:"col-xs-12 q-mb-sm text-center text-weight-bold"},[t._v(t._s(t.$t("roundedValue")))]),e("div",{staticClass:"col-xs-12 text-center"},[t._v(t._s(t.convertToRupiah((t.mytrx.price+t.mytrx.fine)%1e3)))])]):t._e(),t.mytrx.discount?e("div",{staticClass:"row q-py-sm q-px-md text-negative"},[e("div",{staticClass:"col-xs-12 q-mb-sm text-center text-weight-bold"},[t._v(t._s(t.$t("discount")))]),e("div",{staticClass:"col-xs-12 text-center"},[t._v(t._s(t.convertToRupiah(t.mytrx.discount)))])]):t._e(),e("div",{staticClass:"row q-px-none q-py-md bg-primary text-white text-weight-bold"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"row q-px-md"},[e("div",{staticClass:"col-xs-12 q-mb-sm text-center"},[t._v(t._s(t.$t("total")))]),e("div",{staticClass:"col-xs-12 text-center q-headline aero"},[t._v(t._s(t.convertToRupiah(t.mytrx.discount?t.mytrx.amountWithFee-t.mytrx.discount:t.mytrx.amountWithFee)))])])])]),e("div",{staticClass:"row q-py-sm q-px-md"},[0==t.mytrx.paidStatus&&t.checkDate(t.mytrx.duedate)>0?e("div",{staticClass:"col-12"},[e("small",[t._v("\n                      Sesuai Syarat dan Ketentuan Layanan Maindulu, jika Anda melakukan pembayaran melebihi tanggal jatuh tempo, maka biaya penanganan tambahan akan dibebankan selama masa tenggang dan diperhitungkan setiap harinya.\n                      "),e("br"),e("b",{staticClass:"text-red-14"},[t._v("Dan apabila Anda tidak melakukan pembayaran hingga melampaui masa tenggang, maka Akun Game Anda akan diblokir hingga Anda melunasi pembayaran Anda.")])])]):t._e()]),e("div",{staticClass:"row q-py-sm q-px-md"},[e("div",{staticClass:"col-4"},["3"===t.mytrx.paidStatus?e("q-btn",{staticClass:"glow negative",attrs:{rounded:"",icon:"clear",label:"Batalkan"},on:{click:function(a){t.trxModal(t.mytrx,{method:"0"})}}}):t._e()],1),e("div",{staticClass:"col-4 q-my-sm text-center"},[t._v(t._s(t.expDate))]),e("div",{staticClass:"col-4 text-right"},["1"!==t.$store.state.isBadDebth&&"3"===t.mytrx.paidStatus?e("q-btn",{staticClass:"glow positive",attrs:{rounded:"",icon:"shopping_cart",label:t.$t("continue"),disabled:t.buttonDisable},on:{click:function(a){t.confirmModal(t.mytrx,{method:"1"})}}}):t._e(),"0"===t.mytrx.paidStatus||"7"===t.mytrx.paidStatus?e("q-btn",{staticClass:"glow primary",attrs:{rounded:"",icon:"payment",label:t.mytrx.isRejected&&"1"===t.mytrx.isRejected?t.$t("payVerification"):t.$t("payNow")},on:{click:function(a){t.payConfirm(t.mytrx._id)}}}):t._e()],1)])])])],1)],1):t._e()],1)])]),e("div",[e("q-modal",{ref:"notifModal",attrs:{minimized:"","content-css":{minWidth:"20vw",width:"400px"},"no-backdrop-dismiss":""},model:{value:t.notifModal,callback:function(a){t.notifModal=a},expression:"notifModal"}},[e("div",{staticClass:"q-mb-md bg-maindulu q-pa-md text-center"},[e("h5",{staticClass:"q-ma-none text-white"},[t._v("Verifikasi")])]),e("div",{staticClass:"q-ma-md"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col text-center"},[e("p",[t._v("\n              Kami akan mengirim OTP/Kode Verifikasi via SMS\n              "),e("br"),t._v("ke no ponsel yang sudah Anda daftarkan\n            ")]),e("p",{staticClass:"q-display-1 text-primary q-ma-none"},[t._v(t._s(this.mytrx.userId.phoneNumber))]),e("router-link",{staticClass:"q-caption text-danger cursor-pointer q-ma-none q-ml-sm",attrs:{to:"/user/profile"}},[t._v("Ganti Nomer")]),e("p",{staticClass:"q-ma-none"},[t._v("Pastikan no ponsel Anda aktif.")])],1)]),e("div",{staticClass:"row q-mt-sm"},[e("div",{staticClass:"col-6 text-left"},[e("q-btn",{staticClass:"glow warning",attrs:{rounded:"",label:"Tutup"},on:{click:function(a){t.closeNotif()}}})],1),e("div",{staticClass:"col-6 text-right"},[e("q-btn",{staticClass:"glow positive",attrs:{rounded:"",label:"Lanjutkan"},on:{click:function(a){t.confirmNotif(t.mytrx,{method:"1"})}}})],1)]),e("div",{staticClass:"row q-mt-sm"},[e("div",{staticClass:"col-12 text-center"},[e("q-btn",{staticClass:"glow primary full-width",attrs:{rounded:"",transparent:"",label:"Sudah punya kode verifikasi"},on:{click:function(a){t.trxModal(t.mytrx,{method:"1"})}}})],1)])])])],1),e("div",[e("q-modal",{ref:"positionModal",attrs:{position:"right","content-css":{minWidth:"20vw",width:"400px",maxHeight:"100vh"},"no-backdrop-dismiss":""},model:{value:t.positionModal,callback:function(a){t.positionModal=a},expression:"positionModal"}},[e("div",{staticClass:"bg-maindulu text-center full-width",staticStyle:{height:"60px",position:"absolute",top:"0px"}},[e("div",{staticClass:"text-white"},[e("h5",{staticClass:"q-ma-md"},[t._v(t._s(t.$t("trxProcess")))])])]),e("div",{staticClass:"loading-posisi-modal"},[t.isSpinnerModal?e("q-spinner",{staticClass:"loading",attrs:{color:"info",size:60}}):t._e()],1),e("div",[e("div",{staticClass:"row gutter sm-column full-width",staticStyle:{"margin-top":"65px"}},[e("div",{staticClass:"box-content",staticStyle:{width:"100%"}},[e("div",{staticClass:"text-center fullwidth q-px-md"},[e("p",{class:this.message.color,staticStyle:{"font-size":"28px"}},[e("i",{staticClass:"material-icons"},[t._v(t._s(this.message.icon))]),t._v("\n                "+t._s(this.message.status)+"\n              ")]),e("p",[t._v(t._s(this.message.messageContent))])]),!this.isSpinnerModal&&t.modalDataShow?e("div",[e("q-list",{attrs:{"no-border":""}},[e("q-item",[e("div",{staticClass:"row gutter sm-column"},[e("div",{staticClass:"width-2of3 label-field"},[e("q-item-side"),e("q-item-main",[e("q-item-tile",{attrs:{label:""}},[t._v(t._s(t.$t("trxNumber")))]),e("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(this.modalData._id))])],1)],1)])]),e("q-item",[e("div",{staticClass:"row gutter sm-column"},[e("div",{staticClass:"width-2of3 label-field"},[e("q-item-side"),e("q-item-main",[e("q-item-tile",{attrs:{label:""}},[t._v(t._s(t.$t("payment")))]),e("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(this.modalData.purpose))])],1)],1)])]),e("q-item",[e("div",{staticClass:"row gutter sm-column"},[e("div",{staticClass:"width-2of3 label-field"},[e("q-item-side"),e("q-item-main",[e("q-item-tile",{attrs:{label:""}},[t._v(t._s(t.$t("itemName")))]),e("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(this.modalData.cart.itemName))])],1)],1)])]),e("q-item",[e("div",{staticClass:"row gutter sm-column"},[e("div",{staticClass:"width-2of3 label-field"},[e("q-item-side"),e("q-item-main",[e("q-item-tile",{attrs:{label:""}},[t._v(t._s(t.$t("nominal")))]),e("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(t.convertToRupiah(this.modalData.price)))])],1)],1)])]),e("q-item",[e("div",{staticClass:"row gutter sm-column"},[e("div",{staticClass:"width-2of3 label-field"},[e("q-item-side"),e("q-item-main",[e("q-item-tile",{attrs:{label:""}},[t._v(t._s(t.$t("uniqueCode")))]),e("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(t.convertToRupiah(this.modalData.uniqueCode)))])],1)],1)])]),e("q-item",[e("div",{staticClass:"row gutter sm-column"},[e("div",{staticClass:"width-2of3 label-field"},[e("q-item-side"),e("q-item-main",[e("q-item-tile",{attrs:{label:""}},[t._v(t._s(t.$t("total")))]),e("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(t.convertToRupiah(this.modalData.amountWithFee)))])],1)],1)])]),t.modalData.discount?e("q-item",[e("div",{staticClass:"row gutter sm-column"},[e("div",{staticClass:"width-2of3 label-field text-primary"},[e("q-item-side"),e("q-item-main",[e("q-item-tile",{attrs:{label:""}},[t._v(t._s(t.$t("discount")))]),e("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(t.convertToRupiah(t.modalData.discount)))])],1)],1)])]):t._e(),t.modalData.discount?e("q-item",[e("div",{staticClass:"row gutter sm-column"},[e("div",{staticClass:"width-2of3 label-field"},[e("q-item-side"),e("q-item-main",[e("q-item-tile",{attrs:{label:""}},[t._v(t._s(t.$t("totalPaid")))]),e("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(t.convertToRupiah(t.modalData.amountWithFee-t.modalData.discount)))])],1)],1)])]):t._e(),e("q-item",[e("div",{staticClass:"row gutter sm-column"},[e("div",{staticClass:"width-2of3 label-field"},[e("q-item-side"),e("q-item-main",[e("q-item-tile",{attrs:{label:""}},[t._v(t._s(t.$t("dueDate")))]),e("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(this.modalData.duedate))])],1)],1)])]),e("q-item",[e("div",{staticClass:"row gutter sm-column"},[e("div",{staticClass:"width-2of3 label-field"},[e("q-item-side"),e("q-item-main",[e("q-item-tile",{attrs:{label:""}},[t._v(t._s(t.$t("gracePeriode")))]),e("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(this.modalData.gracePeriod.start))]),e("q-item-tile",{attrs:{sublabel:""}},[t._v("S.D")]),e("q-item-tile",{attrs:{sublabel:""}},[t._v(t._s(this.modalData.gracePeriod.end))])],1)],1)])]),e("q-item",[e("div",{staticClass:"row gutter sm-column"},[e("div",{staticClass:"width-2of3 label-field"},[e("q-item-side"),e("q-item-main",[e("q-item-tile",{attrs:{label:""}},[t._v(t._s(t.$t("phone")))]),e("q-item-tile",{attrs:{sublabel:""}},[t._v("\n                          "+t._s(this.modalData.userId.phoneNumber)+"\n                          "),e("router-link",{staticClass:"text-danger cursor-pointer q-ma-none q-ml-sm",attrs:{to:"/user/profile"}},[t._v("\n                            Ganti Nomer\n                          ")])],1)],1)],1)])]),"1"===this.btnMethod?e("q-item",[e("div",{staticClass:"row gutter full-width"},[e("div",{staticClass:"full-width label-field"},[e("q-item-side"),e("q-item-main",[e("q-item-tile",{attrs:{label:""}},[t._v(t._s(t.$t("voucherCode")))]),e("q-item-tile",{attrs:{sublabel:""}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-10"},[e("q-input",{attrs:{clearable:"","upper-case":"",maxlength:"16",disable:t.disableVoucherCode},on:{keyup:function(a){t.checkVoucher()},input:function(a){t.checkVoucher()}},model:{value:t.voucherCode,callback:function(a){t.voucherCode=a},expression:"voucherCode"}})],1),e("div",{staticClass:"col-2"},[e("q-btn",{attrs:{round:"",flat:""},on:{click:function(a){t.voucherModal=!0}}},[e("q-tooltip",{staticClass:"bg-secondary",attrs:{anchor:"top middle",self:"bottom middle",offset:[10,10]}},[e("strong",[t._v("Pilih voucher")])]),e("span",{staticClass:"fa-stack"},[e("i",{staticClass:"fas fa-tags fa-stack-2x text-secondary"}),e("i",{staticClass:"fas fa-percentage fa-stack-1x text-white"})])],1)],1)])])],1)],1)]),e("q-modal",{ref:"voucherModalRef",attrs:{"no-route-dismiss":"","content-css":{minWidth:"20vw",width:"400px"}},model:{value:t.voucherModal,callback:function(a){t.voucherModal=a},expression:"voucherModal"}},[e("div",{staticClass:"full-width"},[e("div",{staticClass:"row"},[e("div",{staticClass:" col-12 q-px-sm"},[e("p",{staticClass:"text-center q-mb-none q-mt-sm"},[e("b",[t._v("Gunakan Vouchers")])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 q-py-sm"},[e("q-scroll-area",{staticStyle:{width:"400px",height:"300px"}},[e("div",{staticClass:"q-px-sm"},[e("q-list",{staticClass:"q-pa-none"},[0===t.voucherLog.length?e("p",{staticClass:"text-center text-negative"},[t._v("Saat ini Anda tidak memiliki voucher")]):t._e(),t._l(t.voucherLog,function(a,s){return e("button",{staticClass:"btn-card",on:{click:function(e){t.redeem(a)}}},[e("q-card",{attrs:{color:"secondary"}},[e("q-card-main",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 q-mb-xs q-subheading"},[t._v("\n                                        "+t._s(a.voucherCode)+"\n                                      ")]),e("div",{staticClass:"col-12 q-mb-xs q-title"},[e("b",[t._v(t._s(t.convertToRupiah(a.voucherId.discount)))])]),e("div",{staticClass:"col-12 q-mb-xs"},[t._v("\n                                        Periode: "+t._s(a.voucherId.startDate?t.formatDate(a.voucherId.startDate):"...")+" - "+t._s(a.voucherId.endDate?t.formatDate(a.voucherId.endDate):"...")+"\n                                      ")])])]),e("q-card-separator")],1)],1)})],2)],1)])],1)])])])],1):t._e(),"1"===t.btnMethod?e("q-item",[e("div",{staticClass:"row gutter full-width"},[e("div",{staticClass:"full-width label-field"},[e("q-item-side"),e("q-item-main",[e("q-item-tile",{attrs:{label:""}},[t._v(t._s(t.$t("confirmCode")))]),e("q-item-tile",{attrs:{sublabel:""}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("q-input",{attrs:{"upper-case":"",error:t.$v.confirmCode.$error,maxlength:"4"},on:{blur:t.$v.confirmCode.$touch},model:{value:t.confirmCode,callback:function(a){t.confirmCode=a},expression:"confirmCode"}})],1),e("div",{staticClass:"col-6 text-right"},[e("q-btn",{staticClass:"glow primary",attrs:{rounded:"",outline:"",disable:t.delay>0},on:{click:function(a){t.sendOTP()}}},[t.delay>0?e("q-icon",{attrs:{name:"fas fa-circle-notch fa-spin q-mr-sm"}}):t._e(),t._v("\n                                "+t._s(t.$t("resendOTP"))+"\n                              ")],1)],1)])])],1)],1)])]):t._e(),"1"===this.btnMethod?e("q-item",[e("q-item-side",[e("q-checkbox",{attrs:{"true-value":"yes","false-value":"no"},model:{value:t.customModel,callback:function(a){t.customModel=a},expression:"customModel"}})],1),e("q-item-main",[e("q-item-tile",{attrs:{label:""}},[e("p",{staticClass:"agree"},[t._v("\n                        "+t._s(t.$t("agreementFirst"))+"\n                        "),e("router-link",{staticClass:"text-primary cursor-pointer q-ma-none",attrs:{to:"/help?tag=term",target:"_blank"}},[t._v(t._s(t.$t("agreementMiddle")))]),t._v("\n                        "+t._s(t.$t("and"))+"\n                        "),e("router-link",{staticClass:"text-primary cursor-pointer q-ma-none",attrs:{to:"/help?tag=policy",target:"_blank"}},[t._v(t._s(t.$t("agreementMiddle2")))]),t._v("\n                        "+t._s(t.$t("agreementLast"))+"\n                      ")],1)])],1)],1):t._e()],1)],1):t._e()])]),e("div",{staticClass:"modal-btn"},["1"===this.btnMethod?e("q-btn",{staticClass:"glow positive q-ml-sm q-mb-md",attrs:{rounded:"",disable:!this.confirmCode||"no"===this.customModel,label:"Ya"},on:{click:function(a){t.doTrx()}}}):t._e(),"0"===this.btnMethod?e("q-btn",{staticClass:"glow negative q-ml-sm q-mb-md",attrs:{rounded:"",label:"Ya"},on:{click:function(a){t.cancelTrx()}}}):t._e(),"66"===this.btnMethod?e("q-btn",{staticClass:"glow q-ml-sm q-mb-md",attrs:{rounded:"",label:"Tutup"},on:{click:function(a){t.positionModal=!1}}}):t._e(),"0"===this.btnMethod||"1"===this.btnMethod?e("q-btn",{staticClass:"glow q-ml-sm q-mb-md",attrs:{rounded:"",label:"Tutup"},on:{click:function(a){t.positionModal=!1}}}):t._e()],1)])])],1)])},i=[];s._withStripped=!0;var n=e("3156"),o=e.n(n),r=(e("551c"),e("7514"),e("96cf"),e("c973")),l=e.n(r),c=e("9523"),d=e.n(c),m=e("0c3a"),u=(e("133b"),e("b5ae")),h=e("c1df"),p=e("2ef0"),v={mixins:[Object(m["a"])()],mounted:function(){var t=this;this.checkBadDebth(),this.countTime(),this.settingRules().then(function(a){a&&(t.getDetailTransactions(),t.getVoucher())}),this.$route.params.id?this.$axios.get("/epayment/".concat(this.$route.params.id)).then(function(a){if(console.log("route",t.$route.params.id),"1"===a.data.code){var e=a.data.data;t.$axios.post("/transactions",{userId:t.$store.state.userId,clientTransId:e.cart.transactionId,gameId:e.cart.gameId,price:e.cart.amount,uniqueCode:e.cart.uniqueCode,amount:e.cart.totalAmount,paidStatus:"3",purpose:e.cart.paymentPurpose,tempId:t.$route.params.id,clientId:e.cart.clientId,source:"epayment",vendor:"lyto",cart:{itemName:e.cart.itemName,clientId:e.cart.clientId}}).then(function(a){a?(t.$router.push({path:"/user/dashboard"}),t.filterStatus=777,t.settingRules().then(function(a){a&&t.getDetailTransactions()})):(t.isSpinner=!1,t.$router.push({path:"/user/dashboard"}))}).catch(function(a){t.isSpinner=!1,t.$q.dialog({title:"Notice",message:"Maaf!, Game Id Tidak Terdaftar",color:"negative",ok:!0}).then(function(){t.$router.push({path:"/user/transaction-detail/".concat(t.$route.params.id)}),t.filterStatus=777,t.settingRules().then(function(a){a&&t.getDetailTransactions()})})})}}):(this.filterStatus=777,this.settingRules().then(function(a){a&&t.getDetailTransactions()}))},data:function(){var t;return t={voucherLog:[],voucherModal:!1,product:[],pictureimgURL:"",isBadDebth:!1,buttonDisable:!0,expDate:null,minutes:14,sec:60,userId:this.$store.state.userId,sumOfTrns:null,totalOfTrns:0,itsPaid:0,itsUnpaid:0,itsCanceled:null,rules:{},loans:0,loansUniquecode:0,avaibleLoan:0,isSpinner:!0,isSpinnerModal:!1,mytransaction:[],dttransaction:[],filterStatus:777,positionModal:!1,notifModal:!1,btnMethod:"",cancelData:{},modalData:{},modalDataShow:!1,customModel:"no",modalPosition:"right",message:{trxStatus:"777",messageContent:"",color:"status-success",icon:"swap_vertical_circle",status:"ON PROCESS"},optionVouchers:[{label:"MAINDULU20",value:"maindulu20"},{label:"MAIN123",value:"main123"},{label:"MAINANAJA2",value:"mainaja2"}],mytrx:{createdAt:h().format("YYYY-MM-DD HH:mm:ss"),cart:{itemName:null},companyId:{name:null},userId:{phoneNumber:null},statusColor:null,status:null,paidStatusText:null,paidStatusTextColor:null}},d()(t,"product",{imgURL:null}),d()(t,"confirmCode",""),d()(t,"delay",0),d()(t,"voucherCode",""),d()(t,"disableVoucherCode",!1),d()(t,"validationVoucherCode",!0),t},validations:{confirmCode:{required:u["required"]}},methods:{checkVoucher:function(){var t=l()(regeneratorRuntime.mark(function t(a){var e,s,i,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.validationVoucherCode=!0,this.modalData.discount=0,16!==this.voucherCode.length){t.next=12;break}return this.disableVoucherCode=!0,t.next=6,this.$axios.get("voucher-logs",{params:{userId:this.$store.state.userId,voucherCode:this.voucherCode,redeemed:!1,$populate:[{path:"voucherId",model:"vouchers"}]}});case 6:e=t.sent,s=e.data,console.log("%c-check","color: yellow;",s),s.data.length>0?(i=s.data[0],this.validationVooucherCode=!0,this.$q.notify({message:"Voucher Valid",position:"bottom-right",color:"secondary",icon:"fas fa-check"}),this.modalData.discount=i.voucherId.discount):(this.validationVoucherCode=!1,this.$q.notify({message:"Voucher Tidak Valid",position:"bottom-right",color:"red-10",icon:"fas fa-exclamation-triangle"})),n=this,setTimeout(function(){n.disableVoucherCode=!1},2e3);case 12:case"end":return t.stop()}},t,this)}));return function(a){return t.apply(this,arguments)}}(),redeem:function(t){this.voucherCode=t.voucherCode,this.$refs.voucherModalRef.hide(),console.log("vouchers",t),this.checkVoucher()},pad:function(t,a){var e=String(t);while(e.length<(a||2))e="0"+e;return e},checkBadDebth:function(){var t=this;this.$axios.post("/transactions-bad-debth",{userId:this.userId}).then(function(a){a.data.length>0&&(t.isBadDebth=!0)})},getVoucher:function(){var t=this;this.$axios.get("/voucher-logs",{params:{userId:this.userId,redeemed:!1,$populate:[{path:"voucherId",model:"vouchers"}]}}).then(function(a){var e=a.data;console.log("voucher-log:",e);var s=e.data;t.voucherLog=s})},countTime:function(){var t=setInterval(function(){var a=this;if("3"===this.mytrx.paidStatus)if(this.isBadDebth){clearInterval(t),this.expDate=e,this.buttonDisable=!0;var e="Anda memiliki transaksi yang belum dibayar. \nSilahkan melakukan pembayaran terlebih dahulu. \nTransaksi ini akan di batalkan secara otomatis";this.$q.dialog({title:"Maaf",message:e,color:"warning",preventClose:!0});var s={trxId:this.mytrx._id};this.$axios.post("/cancel-trx",s).then(function(t){console.log("resp batal",t),a.getDetailTransactions()})}else{var i=h(this.mytrx.createdAt).add(14,"minutes").format("YYYY-MM-DD HH:mm:ss");i=new Date(i).getTime();var n=(new Date).getTime(),o=i-n,r=Math.floor(o%36e5/6e4),l=Math.floor(o%6e4/1e3);if(o<0){clearInterval(t),this.expDate="Transaksi kadaluarsa, sedang melakukan pembatalan otomatis.",this.buttonDisable=!0;var c={trxId:this.mytrx._id};this.$axios.post("/cancel-trx",c).then(function(t){a.getDetailTransactions()})}else this.expDate="Transaksi akan dibatalkan otomatis dalam waktu ".concat(this.pad(r,2)," : ").concat(this.pad(l,2)),this.buttonDisable=!1}}.bind(this),1e3)},formatDate:function(t){return t?h(t).format("DD-MM-YYYY"):"..."},backToTrans:function(){this.$router.push("/user/dashboard")},checkDate:function(t){var a=h(t,"YYYY-MM-DD h:mm"),e=h(),s=e.diff(a,"minutes");return s},gotoAgree:function(){var t=this.$router.resolve({name:"help",query:{tag:"term"}});window.open(t.href,"_blank")},duedate:function(t,a){var e="";return e=t===this.rules.rules.firtsStage.maxDays?h(a.updatedAt).add(this.rules.rules.secondStage.minDays,"days").format("YYYY-MM-DD HH:mm:ss"):t>=this.rules.rules.secondStage.minDays&&t<=this.rules.rules.secondStage.maxDays?h(a.updatedAt).add(this.rules.rules.thirdStage.minDays,"days").format("YYYY-MM-DD HH:mm:ss"):h(a.updatedAt).add(1,"M").format("YYYY-MM-DD HH:mm:ss"),e},dateFormat:function(t){return t?h(t).format("DD-MM-YYYY HH:mm:ss"):""},getDetailTransactions:function(){var t=this;return this.$axios.get("/transactions",{params:{_id:this.$route.params._id,userId:this.userId,$populate:[{path:"companyId",model:"gameCompanies"},{path:"userId",model:"users"},{path:"voucherLogsId",model:"voucherLogs",populate:{path:"voucherId",model:"vouchers"}}]}}).then(function(a){if(a){var e=a.data.data,s=[];e.map(function(a){var e="",i="",n=0,o=0,r=0,l=0,c="",d="",m="",u="",v="",g="";"1"===a.version&&(t.rules.rules.thirdStage.maxDays=29),"2"===a.paidStatus?(e=t.rules.rules.secondStage.maxDays,i=h(a.trxSuccessDate).add(e,"days").format("YYYY-MM-DD HH:mm:ss"),n={start:h(a.trxSuccessDate).add(t.rules.rules.thirdStage.minDays,"days").format("YYYY-MM-DD HH:mm:ss"),end:h(a.trxSuccessDate).add(t.rules.rules.thirdStage.maxDays,"days").format("YYYY-MM-DD HH:mm:ss")}):"0"===a.paidStatus?(e=t.rules.rules.secondStage.maxDays,i=h(a.trxSuccessDate).add(e,"days").format("YYYY-MM-DD HH:mm:ss"),n={start:i,end:h(i).add(t.rules.rules.thirdStage.maxDays,"days").format("YYYY-MM-DD HH:mm:ss")}):"1"===a.paidStatus?(e=t.rules.rules.secondStage.maxDays,i=h(a.trxSuccessDate).add(e,"days").format("YYYY-MM-DD HH:mm:ss"),n={start:i,end:h(i).add(t.rules.rules.thirdStage.maxDays,"days").format("YYYY-MM-DD HH:mm:ss")}):(e=t.rules.rules.secondStage.maxDays,i=h(new Date).add(e,"days").format("YYYY-MM-DD HH:mm:ss"),n={start:i,end:h(i).add(t.rules.rules.thirdStage.maxDays,"days").format("YYYY-MM-DD HH:mm:ss")}),3===a.paidStatus?(d="Menunggu Proses",m="text-amber-10"):4===a.paidStatus||5===a.paidStatus?(d="Gagal",m="text-red-14"):a.totalDays<=3?(d="Berhasil",m="text-primary"):"1"===a.version&&a.totalDays>33||"2"===a.version&&a.totalDays>18?(d="AKUN BLOKIR",m="text-red-14"):a.totalDays>3&&(d="TELAT BAYAR",m="text-amber-10"),"0"===a.paidStatus?(u=t.$t("status0"),v="text-negative"):"1"===a.paidStatus?(u=t.$t("status1"),v="text-positive"):"2"===a.paidStatus?(u=t.$t("status2"),v="text-positive"):"3"===a.paidStatus?(u="-",v="text-primary"):"4"===a.paidStatus?(u=t.$t("status4"),v="text-negative"):"5"===a.paidStatus?(u=t.$t("status5"),v="text-negative"):"6"===a.paidStatus?(u=t.$t("status6"),v="text-negative"):"7"===a.paidStatus&&(u=t.$t("status7"),v="text-warning");var x=p.find(a.feeDetail,["feeName","Extra Handling Fee"]);x&&(r=Math.round(x.fee));var f=p.find(a.feeDetail,["feeName","Handling Fee"]);f&&(o=Math.round(f.fee));var b=0;if("0"===a.paidStatus?b=h(new Date).diff(h(a.trxSuccessDate),"days"):"1"===a.paidStatus&&(b=h(new Date).diff(h(a.trxSuccessDate),"days")),b<=t.rules.rules.firtsStage.maxDays)c="No Fee";else if(b>=t.rules.rules.secondStage.minDays&&b<=t.rules.rules.secondStage.maxDays)l=t.rules.rules.secondStage.fine/100*a.price,l=l<2e3?2e3:l,c=new Date(i)===new Date?"Due Date":"";else{if("2"===a.version)l=t.rules.rules.thirdStage.fine/100*a.price;else{var C=a.totalDays>33?33:a.totalDays;l=C/30*(t.rules.rules.thirdStage.fine/100)*a.price}l=l<3e3?3e3:l,c="Grace Period"}"2"===a.version?a.amountWithFee=1e3*Math.floor((a.price+a.fine)/1e3)+a.uniqueCode:a.amountWithFee=a.amount+r+o,console.log("%c-row.voucherLogsId","color: yellow;",a.voucherLogsId),a.discount=a.voucherLogsId&&a.voucherLogsId.voucherId?a.voucherLogsId.voucherId.discount:0,a.duedate=i,a.gracePeriod=n,a.graceFee=r,a.late=e,a.dueDateFee=o,a.statusOnGoing=c,a.feeOnGoing=l,a.status=d,a.statusColor=m,a.paidStatusText=u,a.paidStatusTextColor=v,a.imgURL=g,s.push(a)}),t.mytransaction=s,t.mytransaction.map(function(a){t.dttransaction.push(a)}),t.isSpinner=!1}return t.mytransaction.map(function(a){t.mytrx=a,console.log("this.mytrx",t.mytrx),t.mytrx.paidStatus<"3"&&(t.mytrx.createdAt=t.mytrx.trxSuccessDate),"5"===t.mytrx.paidStatus&&(t.expDate=null)}),a.data}).then(function(a){console.log("ini data product",a.data[0]);var e=a.data[0];t.$axios.get("/products",{params:{gameId:e.gameId,companyId:e.companyId}}).then(function(a){a&&a.data&&(t.product=a.data.data[0].imgURL,t.pictureimgURL=t.product?"".concat(t.product):"",console.log("ini data product1",t.product))})})},settingRules:function(){var t=this;return new Promise(function(a){t.$axios.get("/settings?code=fine").then(function(e){t.rules=e.data.data[0],a(!!e.data.data[0])})})},confirmModal:function(){var t=l()(regeneratorRuntime.mark(function t(a,e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$refs.notifModal.show();case 2:case"end":return t.stop()}},t,this)}));return function(a,e){return t.apply(this,arguments)}}(),closeNotif:function(){this.notifModal=!1},confirmNotif:function(t,a){this.sendOTP(),this.trxModal(t,a)},trxModal:function(t,a){var e=this;this.confirmCode="",this.notifModal=!1,this.$nextTick(function(){e.positionModal=!0,e.modalDataShow=!0,"1"===a.method?(e.btnMethod="1",e.message={trxStatus:"1",messageContent:"",color:"status-cancel",icon:"error",status:"Konfirmasi Transaksi"},e.cancelData=t,e.modalData=t):(e.btnMethod="0",e.message={trxStatus:"1",messageContent:"Apakah anda yakin ingin membatalkan transaksi ini",color:"status-cancel",icon:"error",status:"Konfirmasi Pembatalan"},e.cancelData=t,e.modalData=t)})},doTrx:function(){var t=l()(regeneratorRuntime.mark(function t(){var a,e,s,i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=this.modalData,console.log(a),this.isSpinnerModal=!0,this.modalDataShow=!1,this.btnMethod="00",e={epaymentTemp:{transactionId:a.clientTransId,amount:a.price}},t.next=8,this.$axios.post("gamer-score",e).then(function(t){var a=t.data;a&&a.score&&a.scoreDetails&&i.$axios.patch("account/profile/".concat(i.$store.state.userId),a).then(function(t){var a=t.data;return a})});case 8:return s={clientTransId:a.transactionId,gameId:a.paymentPurpose,price:a.amount,uniqueCode:a.uniqueCode,amount:a.totalAmount,paidStatus:"",purpose:a.paymentPurpose,trxId:a._id,code:this.confirmCode,voucherCode:this.voucherCode},t.next=11,this.$axios.post("/epayment-trx",s).then(function(t){201===t.status?(i.message={trxStatus:"1",messageContent:"Selamat. Transaksi berhasil. Game coin akan ditambahkan ke Game Id Anda dalam waktu paling lama 15 menit",color:"status-success",icon:"check_circle",status:"SUCCESS"},i.isSpinnerModal=!1,i.modalDataShow=!0,i.settingRules().then(function(){var t=l()(regeneratorRuntime.mark(function t(a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,i.getDetailTransactions();case 3:console.log("%c-mytrx","color: yellow;",i.mytrx),i.modalData=o()({},i.mytrx);case 5:case"end":return t.stop()}},t,this)}));return function(a){return t.apply(this,arguments)}}()),i.filterStatus=0,i.btnMethod="66"):(i.message={trxStatus:"1",messageContent:"Selamat. Transaksi berhasil. Game coin akan ditambahkan ke Game Id anda dalam waktu kurang lebih 15 menit",color:"status-success",icon:"check_circle",status:"SUCCESS"},i.isSpinnerModal=!1,i.modalDataShow=!0,i.filterStatus=0,i.getDetailTransactions(),i.btnMethod="66"),i.expDate=null}).catch(function(t){console.log("YYY",t.response);var a=JSON.parse(t.response.data.message);a&&"4"===a.status?(i.message={trxStatus:"4",messageContent:"Mohon maaf. Transaksi anda telah gagal.",color:"status-failed",icon:"error",status:"FAILED"},i.lastTrxId=a.id):"5"===a.status?i.message={trxStatus:"5",messageContent:"Terima kasih. Anda telah membatalkan transaksi ini",color:"status-pending",icon:"error_outline",status:"CANCELED"}:"6"===a.status?i.message={trxStatus:"6",messageContent:"Mohon maaf. Transaksi anda telah gagal. account anda tidak memenuhi persyaratan. Silahkan lakukan pembayaran transaksi anda sebelumnya",color:"status-pending",icon:"warning",status:"FAILED"}:"403"===a.status?i.message={trxStatus:"6",messageContent:"Mohon maaf. Anda tidak dapat melakukan transaksi untuk saat ini, untuk dapat melakukan transaksi silahkan melakukan pembayaran atau hubungi customer service kami",color:"status-pending",icon:"warning",status:"FAILED"}:"404"===a.status&&(i.message={trxStatus:"6",messageContent:a.message,icon:"warning",status:"FAILED"}),i.isSpinnerModal=!1,i.modalDataShow=!0,i.filterStatus=777,i.getDetailTransactions(),i.btnMethod="66"});case 11:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),cancelTrx:function(){var t=this;this.isSpinnerModal=!0,this.modalDataShow=!1,this.btnMethod="00";var a={trxId:this.cancelData._id};this.$axios.post("/cancel-trx",a).then(function(a){t.message={trxStatus:"5",messageContent:"Terima kasih. Anda telah membatalkan transaksi ini",color:"status-pending",icon:"error_outline",status:"CANCELED"},t.isSpinnerModal=!1,t.modalDataShow=!0,t.filterStatus=5,t.getDetailTransactions(),t.btnMethod="66",t.expDate=null}).catch(function(a){console.log("error",a),t.message={trxStatus:"500",messageContent:"Oopsss. Ada Kesalahan",color:"status-pending",icon:"error_outline",status:"ERROR"},t.isSpinnerModal=!1,t.modalDataShow=!0,t.filterStatus=0,t.getDetailTransactions(),t.btnMethod="66"})},payConfirm:function(t){this.$router.push("/user/transaction-confirmation/".concat(t))},sendOTP:function(){var t=this;this.sendOTPMessage="",this.$axios.post("/sms-otp",{userId:this.userId,transactionId:this.$route.params._id}).then(function(a){t.delay=15,t.countDelay(),t.$q.notify({message:a.data.message,timeout:5e3,type:"info",color:"info",textColor:"white",position:"top-right"})})},countDelay:function(){var t=setInterval(function(){this.delay<=0?clearInterval(t):this.delay=this.delay-1}.bind(this),1e3)}}},g=v,x=(e("a7f1"),e("77ad"),e("2877")),f=Object(x["a"])(g,s,i,!1,null,"54b3d195",null);f.options.__file="TransactionDetail.page.vue";a["default"]=f.exports},"4cc3":function(t,a,e){},"77ad":function(t,a,e){"use strict";var s=e("4cc3"),i=e.n(s);i.a},"7c5e":function(t,a,e){},a7f1:function(t,a,e){"use strict";var s=e("7c5e"),i=e.n(s);i.a}}]);