(function(t){function e(e){for(var a,o,s=e[0],c=e[1],u=e[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={instructions:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static/vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([2,"chunk-vendors"]),n()})({"0ed0":function(t,e,n){"use strict";var a=n("5e45"),r=n.n(a);r.a},2:function(t,e,n){t.exports=n("33eb")},"33eb":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("a026"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"","clipped-right":"",color:"blue",dark:""}},[n("v-toolbar-title",[n("v-btn-toggle",[n("v-btn",{attrs:{color:"warning",href:"/"}},[t._v(" back to oTree")]),n("v-btn",{attrs:{text:"",outlined:"",to:{name:"home"}}},[t._v(" Instruction Manager")])],1)],1),n("v-spacer")],1),n("v-main",{attrs:{dark:""}},[n("v-container",{staticClass:"fill-height"},[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",[n("router-view")],1)],1)],1)],1)],1)},i=[],o=(n("b0c0"),{name:"InstructionManager",data:function(){return{}},computed:{currentRouteName:function(){return this.$route.name}},methods:{}}),s=o,c=n("2877"),u=n("6544"),l=n.n(u),d=n("7496"),f=n("40dc"),p=n("8336"),h=n("a609"),v=n("62ad"),m=n("a523"),b=n("f6c4"),g=n("0fd9"),y=n("2fa4"),w=n("2a7f"),_=Object(c["a"])(s,r,i,!1,null,null,null),k=_.exports;l()(_,{VApp:d["a"],VAppBar:f["a"],VBtn:p["a"],VBtnToggle:h["a"],VCol:v["a"],VContainer:m["a"],VMain:b["a"],VRow:g["a"],VSpacer:y["a"],VToolbarTitle:w["a"]});var x=n("2f62"),V=(n("d1e7"),n("5363"),n("ce5b")),j=n.n(V),O=(n("bf40"),n("8c4f")),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{outlined:""}},[n("v-card-title",{staticClass:"headline"},[t._v("Instructions")]),n("v-card-text",[n("v-list",{attrs:{rounded:""}},t._l(t.instructions,(function(e,a){return n("v-list-item",{key:a,staticClass:"slightlyrounded",attrs:{color:"red",to:{name:"single_instruction",params:{id:e.id}}}},[t._v(" Instruction: "),n("span",{staticClass:"vignette-title"},[t._v(" "+t._s(e.name))])])})),1)],1)],1)},C=[],T=n("bc3a"),P=n.n(T),S={data:function(){return{instructions:[]}},mounted:function(){var t=this;P.a.get("/api/params/").then((function(e){return t.instructions=e.data}))}},I=S,M=(n("0ed0"),n("b0af")),Z=n("99d9"),A=n("8860"),B=n("da13"),E=Object(c["a"])(I,$,C,!1,null,"1755b70e",null),J=E.exports;l()(E,{VCard:M["a"],VCardText:Z["b"],VCardTitle:Z["c"],VList:A["a"],VListItem:B["a"]});var N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form",on:{submit:function(t){t.preventDefault()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("editor",{attrs:{apiKey:"dd5t8ihbpp4aoey9nk77duse46qy5wjekpnb87wdivh44fw5",init:{plugins:"image",height:500,width:"100%",menubar:"file edit view insert format tools table tc help",toolbar:"undo redo | image | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment",selector:"textarea",file_picker_types:"file image media"}},model:{value:t.instruction.body,callback:function(e){t.$set(t.instruction,"body",e)},expression:"instruction.body"}}),n("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"success"},on:{click:t.saveInstructions}},[t._v(" Save ")])],1)},R=[],D=n("ca72"),F={components:{editor:D["a"]},props:["id"],data:function(){return{valid:!0,axiosType:"patch",instruction:{}}},computed:{url:function(){return"/api/params/".concat(this.id,"/")}},watch:{},created:function(){var t=this;this.$http.defaults.xsrfHeaderName="X-CSRFToken",this.$http.defaults.xsrfCookieName="csrftoken",this.$http.get("/api/params/".concat(this.id)).then((function(e){t.instruction=e.data}))},methods:{saveInstructions:function(){var t=this;this.$refs.form.validate(),this.valid&&(console.debug("JOPKA",this.instruction),this.$http[this.axiosType](this.url,this.instruction).then((function(e){console.debug("PIDZZZZZ",e),e.data&&e.data.id&&t.$router.push({name:"home"})})).catch((function(e){var n=e.response,a=n.data,r=n.status;r>=300&&(t.valid=!1,t.errorMessages=a)})))}}},K=F,L=n("4bd4"),q=Object(c["a"])(K,N,R,!1,null,null,null),z=q.exports;l()(q,{VBtn:p["a"],VForm:L["a"]}),a["default"].use(O["a"]);var H=new O["a"]({mode:"history",base:"/instructions",routes:[{path:"/",name:"home",components:{default:J}},{path:"/:id",name:"single_instruction",components:{default:z},props:{default:!0}}]});a["default"].use(x["a"]);var X=new x["a"].Store({state:{},getters:{},mutations:{},actions:{}}),G=X;a["default"].prototype.$http=P.a,a["default"].use(j.a),a["default"].use(x["a"]),a["default"].config.productionTip=!1,new a["default"]({router:H,store:G,vuetify:new j.a({defaultAssets:{font:!0,icons:"mdi"},icons:{iconfont:"mdi"}}),render:function(t){return t(k)}}).$mount("#app")},"5e45":function(t,e,n){}});