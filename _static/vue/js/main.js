(function(e){function t(t){for(var a,r,i=t[0],c=t[1],u=t[2],d=0,f=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={main:0},s=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/static/vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0227":function(e,t,n){},"034f":function(e,t,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"0d0b":function(e,t,n){"use strict";var a=n("10e9"),o=n.n(a);o.a},"10e9":function(e,t,n){},"1e3e":function(e,t,n){},"33e1":function(e,t,n){"use strict";var a=n("85d2"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("a026"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("error-modal"),n("v-system-bar",{attrs:{height:"30",app:""}},[n("timer",{attrs:{secsToEnd:e.secsTillAllowedExit,whatToDo:"allowExitPermission",progressMessage:e.msg_till_allowed_exit,color:"blue"}}),n("timer",{attrs:{secsToEnd:e.seconds_forced_exit,whatToDo:"forceExit",progressMessage:e.msg_forced_exit,color:"red"}})],1),n("v-navigation-drawer",{staticClass:"chatdrawer",attrs:{fixed:"",permanent:"",right:""}},[n("h1",[e._v("chat")]),n("chat")],1),n("v-main",{staticClass:"maincont"},[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-row",[n("v-col",[e.vignette?n("formatted-vignette",{attrs:{vignette:e.vignette,enabled:!1},on:{"answer-changed":e.answerChanged,"confidence-changed":e.confidenceChanged}}):e._e()],1)],1)],1)],1),n("v-footer",{attrs:{app:""}},[n("v-col",[n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animate__animated animate__backInDown","leave-active-class":"animate__animated animate__backOutDown",appear:""}},[e.chatExitAllowed?n("v-btn",{attrs:{large:"",color:"red"},on:{click:e.formSubmit}},[e._v(" Next ")]):e._e()],1)],1)],1)],1)},s=[],r=(n("d3b7"),n("ddb0"),n("5530")),i=n("2909"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chat-container"},[n("message-wrapper"),n("div",{staticClass:"input-block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],attrs:{type:"text",placeholder:"Type here..."},domProps:{value:e.content},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage(t)},keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()},input:function(t){t.target.composing||(e.content=t.target.value)}}}),n("v-btn",{staticClass:"send-btn",class:{"disable-events":e.emptyInput},attrs:{dark:"",fab:"",top:"",right:"",color:"blue",disabled:!e.status},on:{click:e.sendMessage}},[n("v-icon",[e._v("mdi-send")])],1)],1)],1)},u=[],l=(n("99af"),n("498a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message-block"},[n("div",{staticClass:"inner-message-block"},e._l(e.messages,(function(t,a){return n("div",{key:a,class:{message:!0,me:t.source===e.id_in_group,other:t.source!==e.id_in_group,last:t.last,first:t.first}},[e._v(" "+e._s(t.text)+" ")])})),0)])}),d=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" hellow ")])},v=[],g={data:function(){return{}}},m=g,p=(n("0d0b"),n("2877")),h=Object(p["a"])(m,f,v,!1,null,null,null),b=h.exports,_={components:{message:b},computed:{messages:function(){return this.$store.state.messages},id_in_group:function(){return this.$store.state.id_in_group}}},w=_,O=(n("33e1"),Object(p["a"])(w,l,d,!1,null,null,null)),x=O.exports,y=n("2f62"),E={components:{"message-wrapper":x},data:function(){return{content:""}},computed:Object(r["a"])({emptyInput:function(){return""===this.content.trim()},id_in_group:function(){return this.$store.state.id_in_group}},Object(y["d"])({status:function(e){return e.socket.isConnected}})),watch:{status:function(e,t){console.debug("Updating from ".concat(t," to ").concat(e)),e&&this.requestOldMessages()}},created:function(){},methods:Object(r["a"])(Object(r["a"])({},Object(y["b"])({send_message:"sendMessage",requestOldMessages:"requestOldMessages"})),{},{sendMessage:function(){if(""!==this.content.trim()){var e={text:this.content,source:id_in_group};this.send_message(e),this.content=""}}})},C=E,k=(n("f196"),n("6544")),j=n.n(k),T=n("8336"),V=n("132d"),D=Object(p["a"])(C,c,u,!1,null,null,null),S=D.exports;j()(D,{VBtn:T["a"],VIcon:V["a"]});var M=n("595e"),N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(e){e.on,e.attrs;return[n("div")]}}]),model:{value:e.chatOver,callback:function(t){e.chatOver=t},expression:"chatOver"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2"},[e._v(" Privacy Policy ")]),n("v-card-text",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")]),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" I accept ")])],1)],1)],1)],1)},A=[],$={data:function(){return{dialog:!0}},computed:{chatOver:function(){return this.$store.getters.isChatOver}}},P=$,I=n("b0af"),q=n("99d9"),R=n("169a"),L=n("ce7e"),B=n("2fa4"),F=Object(p["a"])(P,N,A,!1,null,null,null),G=F.exports;j()(F,{VBtn:T["a"],VCard:I["a"],VCardActions:q["a"],VCardText:q["b"],VCardTitle:q["c"],VDialog:R["a"],VDivider:L["a"],VSpacer:B["a"]});var H=n("69be"),K=(n("77ed"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("countdown",{style:{width:"100%"},attrs:{"end-time":e.endTime},on:{finish:function(t){return e.toDo()}},scopedSlots:e._u([{key:"process",fn:function(t){return[n("v-progress-linear",{attrs:{width:"100%",height:"25px",color:e.color,value:t.timeObj.leftTime/1e3/e.secsToEnd*100}},[e._v(" "+e._s(e.progressMessage)+": "+e._s(t.timeObj.m)+": "+e._s(t.timeObj.s)+" ")])]}},{key:"finish",fn:function(){return[n("span",[e._v("You can click 'Next' if you want to leave the chat early")])]},proxy:!0}])})}),J=[],U=(n("a9e3"),n("0adb")),W={name:"Timer",props:{secsToEnd:Number,progressMessage:String,whatToDo:String,color:String},data:function(){var e=Object(U["a"])(new Date,this.secsToEnd);return{endTime:e}},methods:{toDo:function(){this.$store.commit(this.whatToDo)}}},Y=W,z=n("8e36"),Q=Object(p["a"])(Y,K,J,!1,null,null,null),X=Q.exports;j()(Q,{VProgressLinear:z["a"]});var Z={name:"LayoutsDemosBaselineFlipped",props:{source:String},components:{Timer:X,chat:S,EndChat:G,ErrorModal:H["a"],FormattedVignette:M["a"]},data:function(){return{timeLeft:50,content:"",radios:"",choices:[],confidenceLevels:Object(i["a"])(Array(11).keys()),confidence:"",chatMessages:[],currentRef:{},loading:!1,totalChatHeight:0,vignette:"",secsTillAllowedExit:window.seconds_till_allow_to_leave,msg_till_allowed_exit:window.msg_till_allowed_exit,seconds_forced_exit:window.seconds_forced_exit,msg_forced_exit:window.msg_forced_exit}},computed:Object(r["a"])({},Object(y["d"])(["djangoErrors","chatExitAllowed","chatExitForced"])),watch:{confidence:function(e,t){console.debug("old value ".concat(t)),console.debug("new value ".concat(e))},"$store.state.chatExitForced":function(){this.formSubmit()}},mounted:function(){var e=this,t=window.path_to_vignette;console.debug("PATH",t),this.$http.get(t).then((function(t){e.vignette=t.data})).catch((function(e){return console.debug(e)}))},methods:Object(r["a"])(Object(r["a"])({answerChanged:function(e){console.debug("ANSWER CHANGED!!!",e),this.sendDecision({decision_type:"answer",value:e})},confidenceChanged:function(e){console.debug("CONFIENDCE CHANGED!!!",e),this.sendDecision({decision_type:"confidence",value:e})}},Object(y["b"])(["sendDecision"])),{},{chatEnded:function(){this.nextAvailable=!0},sendMessage:function(){""!==this.content&&(console.debug("new message:",this.content),this.content="")},formSubmit:function(){document.getElementById("form").submit()}})},ee=Z,te=(n("034f"),n("7496")),ne=n("62ad"),ae=n("a523"),oe=n("553a"),se=n("f6c4"),re=n("f774"),ie=n("0fd9"),ce=n("afd9"),ue=Object(p["a"])(ee,o,s,!1,null,null,null),le=ue.exports;j()(ue,{VApp:te["a"],VBtn:T["a"],VCol:ne["a"],VContainer:ae["a"],VFooter:oe["a"],VMain:se["a"],VNavigationDrawer:re["a"],VRow:ie["a"],VSystemBar:ce["a"]});n("d1e78"),n("5363");var de=n("ce5b"),fe=n.n(de),ve=(n("bf40"),n("bc3a")),ge=n.n(ve),me=n("c0d6"),pe=n("c986"),he=n.n(pe);a["default"].prototype.$http=ge.a,a["default"].use(fe.a),a["default"].config.productionTip=!1,a["default"].use(he.a,"vac"),new a["default"]({vuetify:new fe.a({defaultAssets:{font:!0,icons:"mdi"},icons:{iconfont:"mdi"}}),render:function(e){return e(le)},store:me["a"]}).$mount("#app")},"595e":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"m-3 content-card d-flex flex-column",attrs:{outlined:!e.enabled,flat:e.enabled}},[n("v-card-text",{staticClass:"content-text d-flex flex-column"},[n("v-card",{staticClass:"mb-3",attrs:{shaped:"",elevation:"24"}},[n("v-card-text",{staticClass:"m-3"},[n("div",{staticClass:"vignette-body light",domProps:{innerHTML:e._s(e.vignette&&e.vignette.body)}})])],1),n("div",{staticClass:"question-wrapper mt-3"},[n("h5",[e._v(e._s(e.vignette.question))]),n("input",{attrs:{type:"hidden",name:"answer"},domProps:{value:e.convertedAnswer}}),n("v-radio-group",{attrs:{mandatory:!1},model:{value:e.answer,callback:function(t){e.answer=t},expression:"answer"}},e._l(e.vignette.choices,(function(t,a){return n("v-radio",{key:a,attrs:{disabled:!e.enabled,label:t.text,value:t.value}})})),1),n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("h5",{staticClass:"text-center"},[e._v(" How confident you are in your answer at the scale from "+e._s(e.minConf)+" to "+e._s(e.maxConf)+" ")]),n("input",{attrs:{type:"hidden",name:"confidence"},domProps:{value:e.confidence}})]),n("v-btn-toggle",{model:{value:e.confidence,callback:function(t){e.confidence=t},expression:"confidence"}},e._l(e.confidenceLevels,(function(t,a){return n("v-btn",{key:a,attrs:{disabled:!e.enabled,value:t}},[e._v(" "+e._s(t)+" ")])})),1)],1)],1)],1)],1)],1)],1)},o=[],s=n("2909"),r=n("2ef0"),i=n.n(r),c={props:{vignette:{type:Object,default:function(){}},enabled:{type:Boolean,default:!1}},data:function(){return{confidenceLevels:i.a.range(11),confidence:null,answer:null}},computed:{minConf:function(){return Math.min.apply(Math,Object(s["a"])(this.confidenceLevels))},maxConf:function(){return Math.max.apply(Math,Object(s["a"])(this.confidenceLevels))},convertedAnswer:function(){var e={true:"True",false:"False"};return e[this.answer]}},watch:{confidence:function(e,t){this.$emit("confidence-changed",e)},answer:function(e,t){this.$emit("answer-changed",e)}},mounted:function(){},methods:{}},u=c,l=(n("7131"),n("2877")),d=n("6544"),f=n.n(d),v=n("8336"),g=n("a609"),m=n("b0af"),p=n("99d9"),h=n("62ad"),b=n("67b6"),_=n("43a6"),w=n("0fd9"),O=Object(l["a"])(u,a,o,!1,null,"e5cfdc2a",null);t["a"]=O.exports;f()(O,{VBtn:v["a"],VBtnToggle:g["a"],VCard:m["a"],VCardText:p["b"],VCol:h["a"],VRadio:b["a"],VRadioGroup:_["a"],VRow:w["a"]})},"69be":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(e){e.on,e.attrs;return[n("div")]}}]),model:{value:e.errorDialog,callback:function(t){e.errorDialog=t},expression:"errorDialog"}},[n("v-card",[n("v-card-title",{staticClass:"error"},[e._v(" Error! ")]),n("v-card-text",{staticClass:"my-3"},[e._v(" Please check if you answer all the questions at this page ")]),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){return e.toggleErrorDialog()}}},[e._v(" Ok ")])],1)],1)],1)],1)},o=[],s=n("5530"),r=n("2f62"),i={data:function(){return{dialog:!0}},computed:Object(s["a"])({},Object(r["d"])(["errorDialog"])),methods:Object(s["a"])({},Object(r["c"])(["toggleErrorDialog"]))},c=i,u=n("2877"),l=n("6544"),d=n.n(l),f=n("8336"),v=n("b0af"),g=n("99d9"),m=n("169a"),p=n("ce7e"),h=n("2fa4"),b=Object(u["a"])(c,a,o,!1,null,null,null);t["a"]=b.exports;d()(b,{VBtn:f["a"],VCard:v["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VDialog:m["a"],VDivider:p["a"],VSpacer:h["a"]})},7131:function(e,t,n){"use strict";var a=n("0227"),o=n.n(a);o.a},"85d2":function(e,t,n){},"85ec":function(e,t,n){},c0d6:function(e,t,n){"use strict";n("4160"),n("159b");var a=n("a026"),o=n("2f62"),s=n("2ef0"),r=n.n(s),i=n("b408"),c=n.n(i);a["default"].use(o["a"]);var u=new o["a"].Store({state:{id_in_group:window.id_in_group,messages:[],socket:{isConnected:!1,message:"",reconnectError:!1},chatOver:!1,saving:!1,djangoErrors:window.djangoErrors,errorDialog:!0!==r.a.isEmpty(window.djangoErrors),chatExitAllowed:!1,chatExitForced:!1},getters:{status:function(e){return e.socket.isConnected},isChatOver:function(e){return e.chatOver},savingStatus:function(e){return e.saving}},mutations:{allowExitPermission:function(e){return e.chatExitAllowed=!0},forceExit:function(e){return e.chatExitForced=!0},toggleErrorDialog:function(e){return e.errorDialog=!e.errorDialog},SAVING_INITIATED:function(e){e.saving=!0},SAVING_DONE:function(e){e.saving=!1},addMessage:function(e,t){var n=t.owner,a=e.messages[e.messages.length-1];if(a){var o=a.subgroup,s=a.owner;n===s?(t.subgroup=o,a.last=!1,t.last=!0):(t.subgroup=o+1,a.last=!0,t.first=!0,t.last=!0)}else t.subgroup=0,t.first=!0,t.last=!0;e.messages.push(t)},SOCKET_ONOPEN:function(e,t){a["default"].prototype.$socket=t.currentTarget,e.socket.isConnected=!0},SOCKET_ONCLOSE:function(e,t){e.socket.isConnected=!1},SOCKET_ONERROR:function(e,t){console.error(e,t)},SOCKET_ONMESSAGE:function(e,t){},SOCKET_RECONNECT:function(e,t){console.info(e,t)},SOCKET_RECONNECT_ERROR:function(e){e.socket.reconnectError=!0}},actions:{sendMessage:function(e,t){e.commit("addMessage",t),a["default"].prototype.$socket.sendObj(t)},incomingMessage:function(e,t){console.debug("INCOMING messagei incoming",t),e.commit("addMessage",t)},endOfChat:function(e,t){console.debug("SOMEWONE LEFT THE CHAT"),e.commit("forceExit")},confirm:function(e,t){console.debug("messagei confirmed",t)},requestOldMessages:function(e){var t={request_old_messages:!0};a["default"].prototype.$socket.sendObj(t)},sendDecision:function(e,t){var n={decision:t};a["default"].prototype.$socket.sendObj(n)},PrevMessages:function(e,t){console.debug("previous messages received");var n=t.msgs,a=t.chatStatus;!1===a&&e.commit("forceExit"),n&&n.forEach((function(t){console.debug(t),e.commit("addMessage",t)}))},savingRequested:function(e){var t=e.commit;console.debug("saving request initiated"),t("SAVING_INITIATED")},savingStopRequested:function(e){var t=e.commit;console.debug("saving STOP request initiated"),t("SAVING_DONE")}}}),l="https:"===window.location.protocol?"wss":"ws",d=l+"://"+window.location.host+window.socket_path;a["default"].use(c.a,d,{store:u,format:"json",reconnection:!0,reconnectionAttempts:5,reconnectionDelay:3e3}),t["a"]=u},f196:function(e,t,n){"use strict";var a=n("1e3e"),o=n.n(a);o.a}});