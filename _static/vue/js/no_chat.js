(function(e){function t(t){for(var o,i,s=t[0],c=t[1],l=t[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={no_chat:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static/vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;r.push([3,"chunk-vendors"]),n()})({3:function(e,t,n){e.exports=n("9ac3")},"595e":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"m-3 content-card d-flex flex-column",attrs:{outlined:!e.enabled,flat:e.enabled}},[n("v-card-text",{staticClass:"content-text d-flex flex-column"},[n("v-card",{staticClass:"mb-3",attrs:{shaped:"",elevation:"24"}},[n("v-card-text",{staticClass:"m-3"},[n("div",{staticClass:"vignette-body light",domProps:{innerHTML:e._s(e.vignette&&e.vignette.body)}})])],1),n("div",{staticClass:"question-wrapper mt-3"},[n("h4",[e._v(e._s(e.vignette.q))]),n("input",{attrs:{type:"hidden",name:"answer"},domProps:{value:e.convertedAnswer}}),n("v-radio-group",{attrs:{mandatory:!1},model:{value:e.answer,callback:function(t){e.answer=t},expression:"answer"}},e._l(e.vignette.choices,(function(t,o){return n("v-radio",{key:o,attrs:{disabled:!e.enabled,label:t.text,value:t.value}})})),1),e.showConfidence?n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("h5",{staticClass:"text-center"},[e._v(" How confident you are in your answer at the scale from "+e._s(e.minConf)+" to "+e._s(e.maxConf)+" ")]),n("input",{attrs:{type:"hidden",name:"confidence"},domProps:{value:e.confidence}})]),n("div",{staticClass:"likert-wrapper"},[n("div",{staticClass:"likert-marker left"},[e._v("Very uncertain")]),n("v-btn-toggle",{model:{value:e.confidence,callback:function(t){e.confidence=t},expression:"confidence"}},e._l(e.confidenceLevels,(function(t,o){return n("v-btn",{key:o,attrs:{disabled:!e.enabled,value:t}},[e._v(" "+e._s(t)+" ")])})),1),n("div",{staticClass:"likert-marker right "},[e._v("Very confident")])],1)],1)],1)],1):e._e()],1)],1)],1)},a=[],r=n("2909"),i=n("2ef0"),s=n.n(i),c={props:{vignette:{type:Object,default:function(){}},enabled:{type:Boolean,default:!1},showConfidence:{type:Boolean,default:!0}},data:function(){return{confidenceLevels:s.a.range(11),confidence:null,answer:null}},computed:{minConf:function(){return Math.min.apply(Math,Object(r["a"])(this.confidenceLevels))},maxConf:function(){return Math.max.apply(Math,Object(r["a"])(this.confidenceLevels))},convertedAnswer:function(){var e={true:"True",false:"False"};return e[this.answer]}},watch:{confidence:function(e,t){this.$emit("confidence-changed",e)},answer:function(e,t){this.$emit("answer-changed",e)}},mounted:function(){},methods:{}},l=c,d=(n("ef7a"),n("2877")),u=n("6544"),f=n.n(u),g=n("8336"),v=n("a609"),p=n("b0af"),h=n("99d9"),m=n("62ad"),b=n("67b6"),w=n("43a6"),C=n("0fd9"),E=Object(d["a"])(l,o,a,!1,null,"3ab798e7",null);t["a"]=E.exports;f()(E,{VBtn:g["a"],VBtnToggle:v["a"],VCard:p["a"],VCardText:h["b"],VCol:m["a"],VRadio:b["a"],VRadioGroup:w["a"],VRow:C["a"]})},"69be":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(e){e.on,e.attrs;return[n("div")]}}]),model:{value:e.errorDialog,callback:function(t){e.errorDialog=t},expression:"errorDialog"}},[n("v-card",[n("v-card-title",{staticClass:"error"},[e._v(" Error! ")]),n("v-card-text",{staticClass:"my-3"},[e._v(" "+e._s(e.errorText)+" ")]),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){return e.toggleErrorDialog()}}},[e._v(" Ok ")])],1)],1)],1)],1)},a=[],r=n("5530"),i=n("2f62"),s={props:["errorText"],data:function(){return{dialog:!0}},computed:Object(r["a"])(Object(r["a"])({},Object(i["e"])({instoreErrDlg:"errorDialog"})),{},{errorDialog:{get:function(){return this.instoreErrDlg},set:function(){this.toggleErrorDialog()}}}),methods:Object(r["a"])({},Object(i["d"])(["toggleErrorDialog"]))},c=s,l=n("2877"),d=n("6544"),u=n.n(d),f=n("8336"),g=n("b0af"),v=n("99d9"),p=n("169a"),h=n("ce7e"),m=n("2fa4"),b=Object(l["a"])(c,o,a,!1,null,null,null);t["a"]=b.exports;u()(b,{VBtn:f["a"],VCard:g["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VDialog:p["a"],VDivider:h["a"],VSpacer:m["a"]})},"9ac3":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("a026"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("error-modal",{attrs:{"error-text":"Please check if you answer all the questions at this page"}}),n("v-main",[n("v-container",{staticClass:"main-container h-100 d-flex fill-height",attrs:{fluid:""}},[e.original_ego_answer?n("v-row",[n("v-col",[n("v-sheet",{attrs:{color:"white",elevation:"1",width:"100%",rounded:""}},[n("v-container",[n("v-row",[n("v-col",[n("div",{staticClass:"m-3"},[e._v(" When you first answered this question you chose an option: "),n("b",[e._v(e._s(e.original_ego_answer))])])])],1)],1)],1)],1)],1):e._e(),n("v-row",{staticClass:"limitoverflow h-100 fill-height",attrs:{align:"center",justify:"center","no-gutters":""}},[n("v-col",{staticClass:"content-col fill-height d-flex flex-column",attrs:{sm:"12"}},[n("v-card",{staticClass:"m-3 content-card d-flex flex-grow-1 flex-column",attrs:{outlined:""}},[n("v-card-text",{staticClass:"d-flex flex-grow-1 flex-column"},[e.vignette?n("formatted-vignette",{attrs:{vignette:e.vignette,enabled:!0},on:{"answer-changed":e.answerChanged,"confidence-changed":e.confidenceChanged}}):e._e()],1),n("v-card-actions",[n("v-btn",{attrs:{"x-large":"",color:"red"},on:{click:e.validateAndSubmit}},[e._v("Next")]),n("input",{attrs:{type:"hidden",name:"timezone"},domProps:{value:Intl.DateTimeFormat().resolvedOptions().timeZone}})],1)],1)],1)],1)],1)],1)],1)},r=[],i=(n("b0c0"),n("5530")),s=n("2f62"),c=n("69be"),l=n("595e"),d={name:"VignetteNoChat",components:{FormattedVignette:l["a"],ErrorModal:c["a"]},data:function(){return{vignette:null,original_ego_answer:window.original_ego_answer}},mounted:function(){var e=this,t=window.path_to_vignette;this.$http.get(t).then((function(t){e.vignette=t.data,console.debug("VIGNETTE",e.vignette)}))},computed:{currentRouteName:function(){return this.$route.name}},methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["sendDecision"])),{},{answerChanged:function(e){console.debug("ANSWER CHANGED!!!",e),this.sendDecision({decision_type:"answer",value:e})},confidenceChanged:function(e){console.debug("CONFIENDCE CHANGED!!!",e),this.sendDecision({decision_type:"confidence",value:e})},validateAndSubmit:function(){console.debug("new form"),document.getElementById("form").submit()}})},u=d,f=n("2877"),g=n("6544"),v=n.n(g),p=n("7496"),h=n("8336"),m=n("b0af"),b=n("99d9"),w=n("62ad"),C=n("a523"),E=n("f6c4"),_=n("0fd9"),O=n("8dd9"),x=Object(f["a"])(u,a,r,!1,null,null,null),y=x.exports;v()(x,{VApp:p["a"],VBtn:h["a"],VCard:m["a"],VCardActions:b["a"],VCardText:b["b"],VCol:w["a"],VContainer:C["a"],VMain:E["a"],VRow:_["a"],VSheet:O["a"]});n("d1e7"),n("5363");var V=n("ce5b"),j=n.n(V),S=n("2b27"),D=n.n(S),M=(n("bf40"),n("c0d6")),T=n("bc3a"),k=n.n(T);o["default"].prototype.$http=k.a,o["default"].use(j.a),o["default"].use(s["a"]),o["default"].use(D.a),o["default"].config.productionTip=!1,new o["default"]({store:M["a"],vuetify:new j.a({defaultAssets:{font:!0,icons:"mdi"},icons:{iconfont:"mdi"}}),render:function(e){return e(y)}}).$mount("#app")},c05a:function(e,t,n){},c0d6:function(e,t,n){"use strict";n("4160"),n("159b");var o=n("a026"),a=n("2f62"),r=n("2ef0"),i=n.n(r),s=n("b408"),c=n.n(s);o["default"].use(a["a"]);var l=new a["a"].Store({state:{id_in_group:window.id_in_group,messages:[],socket:{isConnected:!1,message:"",reconnectError:!1},chatEndModal:!1,saving:!1,djangoErrors:window.djangoErrors,errorDialog:!0!==i.a.isEmpty(window.djangoErrors),chatExitAllowed:!1,chatExitForced:!1,instructionsShow:!1,initiatorOfEnd:!1},getters:{status:function(e){return e.socket.isConnected},savingStatus:function(e){return e.saving},chatEndedByPartner:function(e){return!e.chatExitForced&&e.chatEndModal}},mutations:{setEndChatInitiator:function(e){e.initiatorOfEnd=!0},setEndChatModel:function(e,t){e.chatEndModal=t},toggleChatEndModal:function(e){return e.chatEndModal=!e.chatEndModal},allowExitPermission:function(e){return e.chatExitAllowed=!0},forceExit:function(e){return e.chatExitForced=!0},toggleErrorDialog:function(e){return e.errorDialog=!e.errorDialog},toggleInstructionsDialog:function(e){return e.instructionsShow=!e.instructionsShow},SAVING_INITIATED:function(e){e.saving=!0},SAVING_DONE:function(e){e.saving=!1},addMessage:function(e,t){var n=t.owner,o=e.messages[e.messages.length-1];if(o){var a=o.subgroup,r=o.owner;n===r?(t.subgroup=a,o.last=!1,t.last=!0):(t.subgroup=a+1,o.last=!0,t.first=!0,t.last=!0)}else t.subgroup=0,t.first=!0,t.last=!0;e.messages.push(t)},SOCKET_ONOPEN:function(e,t){o["default"].prototype.$socket=t.currentTarget,e.socket.isConnected=!0},SOCKET_ONCLOSE:function(e,t){e.socket.isConnected=!1},SOCKET_ONERROR:function(e,t){console.error(e,t)},SOCKET_ONMESSAGE:function(e,t){},SOCKET_RECONNECT:function(e,t){console.info(e,t)},SOCKET_RECONNECT_ERROR:function(e){e.socket.reconnectError=!0}},actions:{sendMessage:function(e,t){e.commit("addMessage",t),o["default"].prototype.$socket.sendObj(t)},incomingMessage:function(e,t){console.debug("INCOMING messagei incoming",t),e.commit("addMessage",t)},endOfChat:function(e,t){e.state.initiatorOfEnd||e.commit("setEndChatModel",{value:!0})},confirm:function(e,t){console.debug("messagei confirmed",t)},requestOldMessages:function(e){var t={request_old_messages:!0};o["default"].prototype.$socket.sendObj(t)},sendDecision:function(e,t){var n={decision:t};o["default"].prototype.$socket.sendObj(n)},PrevMessages:function(e,t){console.debug("previous messages received");var n=t.msgs,o=t.chatStatus;!1===o&&e.commit("forceExit"),n&&n.forEach((function(t){console.debug(t),e.commit("addMessage",t)}))},savingRequested:function(e){var t=e.commit;console.debug("saving request initiated"),t("SAVING_INITIATED")},savingStopRequested:function(e){var t=e.commit;console.debug("saving STOP request initiated"),t("SAVING_DONE")}}}),d="https:"===window.location.protocol?"wss":"ws",u=d+"://"+window.location.host+window.socket_path;o["default"].use(c.a,u,{store:l,format:"json",reconnection:!0,reconnectionAttempts:5,reconnectionDelay:3e3}),t["a"]=l},ef7a:function(e,t,n){"use strict";var o=n("c05a"),a=n.n(o);a.a}});