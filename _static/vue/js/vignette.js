(function(e){function t(t){for(var a,i,s=t[0],c=t[1],l=t[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={vignette:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static/vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([1,"chunk-vendors"]),n()})({"0202":function(e,t,n){},"0227":function(e,t,n){},1:function(e,t,n){e.exports=n("ac1d")},"595e":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"m-3 content-card d-flex flex-column",attrs:{outlined:!e.enabled,flat:e.enabled}},[n("v-card-text",{staticClass:"content-text d-flex flex-column"},[n("v-card",{staticClass:"mb-3",attrs:{shaped:"",elevation:"24"}},[n("v-card-text",{staticClass:"m-3"},[n("div",{staticClass:"vignette-body light",domProps:{innerHTML:e._s(e.vignette&&e.vignette.body)}})])],1),n("div",{staticClass:"question-wrapper mt-3"},[n("h5",[e._v(e._s(e.vignette.question))]),n("input",{attrs:{type:"hidden",name:"answer"},domProps:{value:e.convertedAnswer}}),n("v-radio-group",{attrs:{mandatory:!1},model:{value:e.answer,callback:function(t){e.answer=t},expression:"answer"}},e._l(e.vignette.choices,(function(t,a){return n("v-radio",{key:a,attrs:{disabled:!e.enabled,label:t.text,value:t.value}})})),1),n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("h5",{staticClass:"text-center"},[e._v(" How confident you are in your answer at the scale from "+e._s(e.minConf)+" to "+e._s(e.maxConf)+" ")]),n("input",{attrs:{type:"hidden",name:"confidence"},domProps:{value:e.confidence}})]),n("v-btn-toggle",{model:{value:e.confidence,callback:function(t){e.confidence=t},expression:"confidence"}},e._l(e.confidenceLevels,(function(t,a){return n("v-btn",{key:a,attrs:{disabled:!e.enabled,value:t}},[e._v(" "+e._s(t)+" ")])})),1)],1)],1)],1)],1)],1)],1)},r=[],o=n("2909"),i=n("2ef0"),s=n.n(i),c={props:{vignette:{type:Object,default:function(){}},enabled:{type:Boolean,default:!1}},data:function(){return{confidenceLevels:s.a.range(11),confidence:null,answer:null}},computed:{minConf:function(){return Math.min.apply(Math,Object(o["a"])(this.confidenceLevels))},maxConf:function(){return Math.max.apply(Math,Object(o["a"])(this.confidenceLevels))},convertedAnswer:function(){var e={true:"True",false:"False"};return e[this.answer]}},watch:{confidence:function(e,t){this.$emit("confidence-changed",e)},answer:function(e,t){this.$emit("answer-changed",e)}},mounted:function(){},methods:{}},l=c,u=(n("7131"),n("2877")),d=n("6544"),f=n.n(d),v=n("8336"),p=n("a609"),g=n("b0af"),m=n("99d9"),b=n("62ad"),h=n("67b6"),_=n("43a6"),y=n("0fd9"),x=Object(u["a"])(l,a,r,!1,null,"e5cfdc2a",null);t["a"]=x.exports;f()(x,{VBtn:v["a"],VBtnToggle:p["a"],VCard:g["a"],VCardText:m["b"],VCol:b["a"],VRadio:h["a"],VRadioGroup:_["a"],VRow:y["a"]})},7131:function(e,t,n){"use strict";var a=n("0227"),r=n.n(a);r.a},"90eb":function(e,t,n){"use strict";var a=n("0202"),r=n.n(a);r.a},ac1d:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("a026"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-app-bar",{attrs:{app:"","clipped-right":"",color:"blue",dark:""}},[n("v-toolbar-title",[n("v-btn-toggle",[n("v-btn",{attrs:{color:"warning",href:"/"}},[e._v(" back to oTree")]),n("v-btn",{attrs:{text:"",outlined:"",to:{name:"home"}}},[e._v(" Vignette Manager")])],1)],1),n("v-spacer"),n("router-view",{attrs:{name:"extrabtns"}})],1),n("v-main",{attrs:{dark:""}},[n("v-container",{staticClass:"fill-height"},[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",[n("router-view")],1)],1)],1)],1)],1)},o=[],i=(n("b0c0"),{name:"Vignette",data:function(){return{}},computed:{currentRouteName:function(){return this.$route.name}},methods:{}}),s=i,c=n("2877"),l=n("6544"),u=n.n(l),d=n("7496"),f=n("40dc"),v=n("8336"),p=n("a609"),g=n("62ad"),m=n("a523"),b=n("f6c4"),h=n("0fd9"),_=n("2fa4"),y=n("2a7f"),x=Object(c["a"])(s,r,o,!1,null,null,null),w=x.exports;u()(x,{VApp:d["a"],VAppBar:f["a"],VBtn:v["a"],VBtnToggle:p["a"],VCol:g["a"],VContainer:m["a"],VMain:b["a"],VRow:h["a"],VSpacer:_["a"],VToolbarTitle:y["a"]});var V=n("2f62"),O=(n("d1e78"),n("5363"),n("ce5b")),j=n.n(O),k=n("2b27"),T=n.n(k),C=(n("bf40"),n("96cf"),n("1da1")),E=n("8c4f"),$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{outlined:""}},[n("v-card-title",{staticClass:"headline"},[e._v("Vignettes")]),n("v-card-text",[n("v-list",{attrs:{rounded:""}},e._l(e.vignettes,(function(t,a){return n("v-list-item",{key:a,staticClass:"slightlyrounded",class:{redback:a%2===1},attrs:{color:"red",to:{name:"vignette",params:{id:t.id}}}},[e._v(" Vignette: "),n("span",{staticClass:"vignette-title"},[e._v(" "+e._s(t.title))])])})),1)],1)],1)},M=[],R=n("bc3a"),B=n.n(R),N={data:function(){return{vignettes:[]}},mounted:function(){var e=this;B.a.get("/api/vignettes/").then((function(t){return e.vignettes=t.data}))}},S=N,F=(n("90eb"),n("b0af")),q=n("99d9"),A=n("8860"),I=n("da13"),P=Object(c["a"])(S,$,M,!1,null,"6c2b44f9",null),D=P.exports;u()(P,{VCard:F["a"],VCardText:q["b"],VCardTitle:q["c"],VList:A["a"],VListItem:I["a"]});var G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",[n("v-col",{attrs:{sm:"12"}},[e.vignette?n("formatted-vignette",{attrs:{vignette:e.vignette}}):e._e(),n("v-btn-toggle",{staticClass:"my-3",attrs:{rounded:""}},[n("v-btn",{attrs:{color:"warning"},on:{click:e.setAndRedirect}},[e._v(" Copy to new ")]),n("v-btn",{attrs:{color:"primary",to:{name:"edit_vignette",params:{id:e.id}}}},[e._v("Edit")]),n("v-btn",{attrs:{color:"success"},on:{click:function(t){return e.deleteVignette(e.id)}}},[e._v("Delete")])],1)],1)],1)],1)},L=[],H=n("5530"),U=n("595e"),Y={props:["id"],components:{FormattedVignette:U["a"]},data:function(){return{vignette:null}},mounted:function(){var e=this;this.$http.get("/api/vignettes/".concat(this.id)).then((function(t){var n=t.data;n.choices=[{text:n.yes_option,value:!0},{text:n.no_option,value:!1}],e.vignette=n}))},methods:Object(H["a"])(Object(H["a"])({},Object(V["b"])(["deleteVignette","setBuffer"])),{},{setAndRedirect:function(){this.setBuffer(this.vignette),this.$router.push({name:"create_vignette"})}})},z=Y,J=Object(c["a"])(z,G,L,!1,null,null,null),K=J.exports;u()(J,{VBtn:v["a"],VBtnToggle:p["a"],VCol:g["a"],VContainer:m["a"],VRow:h["a"]});var Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Title",placeholder:"Title",outlined:"",required:"","error-messages":e.errorMessages&&e.errorMessages.title||""},on:{input:function(t){return e.resetError("title")}},model:{value:e.vignette.title,callback:function(t){e.$set(e.vignette,"title",t)},expression:"vignette.title"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",md:"12"}},[n("editor",{attrs:{apiKey:"dd5t8ihbpp4aoey9nk77duse46qy5wjekpnb87wdivh44fw5",init:{plugins:"image",height:300,width:"100%",menubar:"file edit view insert format tools table tc help",toolbar:"undo redo | image | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment",selector:"textarea",file_picker_types:"file image media"}},model:{value:e.vignette.body,callback:function(t){e.$set(e.vignette,"body",t)},expression:"vignette.body"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Question",placeholder:"Type question text here",required:"",outlined:"","error-messages":e.errorMessages&&e.errorMessages.question||""},on:{input:function(t){return e.resetError("question")}},model:{value:e.vignette.question,callback:function(t){e.$set(e.vignette,"question",t)},expression:"vignette.question"}})],1),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Option for 'yes'",placeholder:"Option for 'Yes'",outlined:"","error-messages":e.errorMessages&&e.errorMessages.yes_option||""},on:{input:function(t){return e.resetError("yes_option")}},model:{value:e.vignette.yes_option,callback:function(t){e.$set(e.vignette,"yes_option",t)},expression:"vignette.yes_option"}})],1),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Option for 'No'",placeholder:"Option for 'No'",outlined:"","error-messages":e.errorMessages&&e.errorMessages.no_option||""},on:{input:function(t){return e.resetError("no_option")}},model:{value:e.vignette.no_option,callback:function(t){e.$set(e.vignette,"no_option",t)},expression:"vignette.no_option"}})],1)],1),n("v-row",[n("v-col",[n("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.saveVignette}},[e._v(" Save ")])],1)],1)],1)],1)},W=[],X=(n("a9e3"),n("53ca")),Z=n("ca72"),ee={components:{editor:Z["a"]},props:{id:{type:[String,Number],default:null,required:!1}},data:function(){return{valid:!1,body:"",vignette:{body:"",title:"",question:"",yes_option:"",no_option:""},errorMessages:"",title:"",yesOption:"",noOption:"",url:"/api/vignettes/",axiosType:"post",nameRules:[function(e){return!!e||"Vignette body is required"},function(e){return e.length>=10||"Vignette text must be at least  10 characters"}]}},computed:Object(H["a"])({},Object(V["d"])(["saving","bufferForNew"])),watch:{saving:function(e,t){console.debug("SAVING INNITATED - CHECKING WITHING!!"),this.savingStopRequested(),this.saveVignette()}},mounted:function(){var e=this;this.id?(this.url="/api/vignettes/".concat(this.id,"/"),this.axiosType="patch",this.$http.get("/api/vignettes/".concat(this.id)).then((function(t){e.vignette=t.data}))):this.bufferForNew&&(this.vignette=this.bufferForNew,this.vignette.title+=" 1",this.emptyBuffer())},created:function(){this.$http.defaults.xsrfHeaderName="X-CSRFToken",this.$http.defaults.xsrfCookieName="csrftoken"},methods:Object(H["a"])(Object(H["a"])({},Object(V["b"])(["savingStopRequested","emptyBuffer"])),{},{resetError:function(e){"object"===Object(X["a"])(this.errorMessages)&&null!==this.errorMessages&&(this.errorMessages[e]="")},saveVignette:function(){var e=this,t=this.$refs.form.validate();t&&(this.valid=!0,this.$http[this.axiosType](this.url,this.vignette).then((function(t){t.data&&t.data.id&&e.$router.push({name:"vignette",params:{id:t.data.id}})})).catch((function(t){var n=t.response,a=n.data,r=n.status;r>=300&&(e.valid=!1,e.errorMessages=a)})))}})},te=ee,ne=n("4bd4"),ae=n("8654"),re=Object(c["a"])(te,Q,W,!1,null,null,null),oe=re.exports;u()(re,{VBtn:v["a"],VCol:g["a"],VContainer:m["a"],VForm:ne["a"],VRow:h["a"],VTextField:ae["a"]});var ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-btn",[e._v(" OPA OPA ")])],1)},se=[],ce={data:function(){return{}},mounted:function(){},methods:{}},le=ce,ue=Object(c["a"])(le,ie,se,!1,null,null,null);ue.exports;u()(ue,{VBtn:v["a"]});var de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-btn",{on:{click:e.savingRequested}},[e._v(" Save ")])],1)},fe=[],ve={data:function(){return{}},mounted:function(){},methods:Object(H["a"])({},Object(V["b"])(["savingRequested"])),created:function(){}},pe=ve,ge=Object(c["a"])(pe,de,fe,!1,null,null,null),me=ge.exports;u()(ge,{VBtn:v["a"]});var be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn-toggle",{attrs:{rounded:""}},[n("v-btn",{attrs:{color:"warning"},on:{click:function(t){return e.copyVignette(e.id)}}},[e._v(" Copy to new ")]),n("v-btn",{attrs:{to:{name:"edit_vignette",params:{id:e.id}},color:"primary"}},[e._v(" Edit ")]),n("v-btn",{attrs:{color:"success"},on:{click:e.onDelete}},[e._v(" Delete ")])],1)},he=[],_e={props:["id"],data:function(){return{}},mounted:function(){},methods:Object(H["a"])(Object(H["a"])({},Object(V["b"])(["deleteVignette","copyVignette"])),{},{onEdit:function(){},onDelete:function(){console.debug("DELTETE",this.id),this.deleteVignette(this.id)}})},ye=_e,xe=Object(c["a"])(ye,be,he,!1,null,null,null),we=xe.exports;u()(xe,{VBtn:v["a"],VBtnToggle:p["a"]});var Ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-btn",{attrs:{to:{name:"create_vignette"}}},[e._v(" Create ")])],1)},Oe=[],je={data:function(){return{}},mounted:function(){},methods:{}},ke=je,Te=Object(c["a"])(ke,Ve,Oe,!1,null,null,null),Ce=Te.exports;u()(Te,{VBtn:v["a"]}),a["default"].use(E["a"]);var Ee=new E["a"]({mode:"history",base:"/vignettemanager",routes:[{path:"/",name:"home",components:{default:D,extrabtns:Ce}},{path:"/view/vignette/:id",name:"vignette",components:{default:K,extrabtns:we},props:{default:!0,extrabtns:!0}},{path:"/create/vignette/",name:"create_vignette",components:{default:oe,extrabtns:me},props:{default:!0,extrabtns:!0}},{path:"/edit/vignette/:id",name:"edit_vignette",components:{default:oe,extrabtns:me},props:{default:!0,extrabtns:!0}}]});a["default"].use(V["a"]);var $e=new V["a"].Store({state:{saving:!1,bufferForNew:{}},getters:{savingStatus:function(e){return e.saving}},mutations:{SAVING_INITIATED:function(e){e.saving=!0},SAVING_DONE:function(e){e.saving=!1},SET_BUFFER:function(e,t){e.bufferForNew=t},EMPTY_BUFFER:function(e){e.bufferForNew={}}},actions:{setBuffer:function(e,t){var n=e.commit;n("SET_BUFFER",t)},emptyBuffer:function(e){var t=e.commit;t("EMPTY_BUFFER")},savingRequested:function(e){var t=e.commit;t("SAVING_INITIATED")},savingStopRequested:function(e){var t=e.commit;t("SAVING_DONE")},deleteVignette:function(e,t){return Object(C["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.prev=1,n.next=4,B.a.delete("/api/vignettes/".concat(t,"/"));case 4:Ee.push({name:"home"}),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](1),console.debug(n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,7]])})))()},copyVignette:function(e,t){return Object(C["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.prev=1,n.next=4,B.a.get("/api/vignettes/".concat(t,"/"));case 4:r=n.sent,a("SET_BUFFER",r.data),Ee.push({name:"create_vignette"}),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](1),console.debug(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()}}}),Me=$e;a["default"].prototype.$http=B.a,a["default"].use(j.a),a["default"].use(V["a"]),a["default"].use(T.a),a["default"].config.productionTip=!1,new a["default"]({router:Ee,store:Me,vuetify:new j.a({defaultAssets:{font:!0,icons:"mdi"},icons:{iconfont:"mdi"}}),render:function(e){return e(w)}}).$mount("#app")}});