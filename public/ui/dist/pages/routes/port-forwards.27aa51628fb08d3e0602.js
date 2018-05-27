webpackJsonp([13],{G0xc:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},H43E:function(t,e,a){var r=a("G0xc");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("9fed20a6",r,!1,{sourceMap:!1})},"QB/c":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("QHB4"),i=a("pMge"),s=!1;var o=function(t){s||a("H43E")},n=a("VU/8")(r.a,i.a,!1,o,null,null);n.options.__file="pages/routes/port-forwards.vue",e.default=n.exports},QHB4:function(t,e,a){"use strict";var r=a("woOf"),i=a.n(r),s=a("Xxa5"),o=a.n(s),n=a("exGp"),l=a.n(n),d=a("Dd8w"),c=a.n(d),u=a("NYxO"),v=(a("4swq"),a("mtWM")),p=a.n(v);e.a={middleware:["authenticated"],components:{},computed:c()({},Object(u.mapGetters)({isAuthenticated:"auth/isAuthenticated",loggedUser:"auth/loggedUser",loggedToken:"auth/loggedToken"})),data:function(){return{error:"",snackbar:!1,snackbarColor:"green",snackbarText:"",snackbarTimeout:5e3,items:[],tableLoading:!0,tableNoData:"You have not added any port forwards.",tableHeaders:[{text:"Label",value:"label"},{text:"IP",value:"ip"},{text:"External Port",value:"port"},{text:"Internal Port",value:"srv_port"},{text:"Actions",value:"name",sortable:!1,align:"right"}],itemActions:[{title:"Start"},{title:"Stop"},{title:"Delete"}],dialog:!1,editingIndex:-1,editingItem:{id:-1,label:"",ip:"",port:"",srv_type:"",srv_port:""},defaultItem:{id:-1,label:"",ip:"",port:"",srv_type:"",srv_port:""},valid:!0,labelRule:[function(t){return!!t||"Label is required"},function(t){return t&&t.length<=100||"Label must be less than 100 characters"}]}},mounted:function(){this.initialize()},watch:{dialog:function(t){t||this.close()}},methods:{initialize:function(){var t=l()(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loggedUser||this.$router.replace("/servers"),p.a.defaults.headers.common.Authorization="Bearer "+this.loggedToken,t.next=5,p.a.get(this.loggedUser.sub+"/api/routes/port-forwards");case 5:e=t.sent,this.items=e.data.data,t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),this.tableNoData="No data.",this.error="Could not fetch data from server.";case 13:this.tableLoading=!1;case 14:case"end":return t.stop()}},t,this,[[0,9]])}));return function(){return t.apply(this,arguments)}}(),editItem:function(t){this.editingIndex=this.items.indexOf(t),this.editingItem=i()({},t),this.dialog=!0},deleteItem:function(){var t=l()(o.a.mark(function t(e){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.items.indexOf(e),this.items.splice(a,1),t.prev=2,this.loggedUser||this.$router.replace("/servers"),p.a.defaults.headers.common.Authorization="Bearer "+this.loggedToken,t.next=7,p.a.delete(this.loggedUser.sub+"/api/routes/port-forwards",{data:e});case 7:t.sent,this.snackbar=!0,this.snackbarText="Port forward successfully deleted.",t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),this.error="Could not delete port forward from server.";case 15:case"end":return t.stop()}},t,this,[[2,12]])}));return function(e){return t.apply(this,arguments)}}(),save:function(){var t=l()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$refs.form.validate()){t.next=17;break}return this.editingIndex>-1?i()(this.items[this.editingIndex],this.editingItem):this.items.push(i()({},this.editingItem)),t.prev=2,this.loggedUser||this.$router.replace("/servers"),p.a.defaults.headers.common.Authorization="Bearer "+this.loggedToken,t.next=7,p.a.post(this.loggedUser.sub+"/api/routes/port-forwards",this.editingItem);case 7:t.sent,this.snackbar=!0,this.snackbarText="Port forward successfully saved.",t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),this.error="Could not save port forward to server.";case 15:this.initialize(),this.close();case 17:case"end":return t.stop()}},t,this,[[2,12]])}));return function(){return t.apply(this,arguments)}}(),close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.editingItem=i()({},t.defaultItem),t.editingIndex=-1},300)}}}},pMge:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-snackbar",{attrs:{top:"",timeout:t.snackbarTimeout,color:t.snackbarColor},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.snackbarText)+"\n    "),a("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1),a("v-content",[a("v-container",{attrs:{fluid:"",tag:"section",id:"grid"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"d-flex":"",xs12:"","order-xs5":""}},[a("v-layout",{attrs:{column:""}},[a("v-flex",{staticClass:"display mb-2",attrs:{tag:"h1"}},[t._v("\n              Routes - Port Forwards\n              "),a("v-btn",{staticStyle:{float:"right"},attrs:{color:"success"},on:{click:function(e){t.dialog=!0}}},[t._v("New Forward")])],1),a("v-flex",[a("v-alert",{attrs:{type:"error",value:t.error}},[t._v("\n                "+t._s(t.error)+"\n              ")]),a("p",[t._v("Port forwards allow you to route TCP/UDP traffic into containers.")]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.tableHeaders,items:t.items,"hide-actions":"",loading:t.tableLoading},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){a.stopPropagation(),t.editItem(e.item)}}},[t._v(t._s(e.item.label))])]),a("td",[t._v(t._s(e.item.ip))]),a("td",[t._v(t._s(e.item.port))]),a("td",[t._v(t._s(e.item.srv_port))]),a("td",[a("v-btn",{staticClass:"mx-0",staticStyle:{float:"right"},attrs:{icon:""},on:{click:function(a){t.deleteItem(e.item)}}},[a("v-icon",{attrs:{color:"pink"}},[t._v("delete")])],1)],1)]}}])},[a("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}),a("template",{slot:"no-data"},[t._v("\n                  "+t._s(t.tableLoading?"Fetching data, please wait...":t.tableNoData)+"\n                ")])],2)],1)],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"600px",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{tile:""}},[a("v-toolbar",{attrs:{card:"",dark:"",color:"light-blue darken-3"}},[a("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("close")])],1),a("v-toolbar-title",[t._v(t._s(-1===t.editingIndex?"New":"Edit")+" Port Forward")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.save()}}},[t._v("Save")])],1)],1),a("v-card-text",{staticStyle:{padding:"0px"}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{rules:t.labelRule,label:"Label:",placeholder:"",required:"",hint:"Enter a label for the port forward."},model:{value:t.editingItem.label,callback:function(e){t.$set(t.editingItem,"label",e)},expression:"editingItem.label"}}),a("v-text-field",{attrs:{label:"IP:",placeholder:"",required:"",hint:"Enter the IP address for the port forward."},model:{value:t.editingItem.ip,callback:function(e){t.$set(t.editingItem,"ip",e)},expression:"editingItem.ip"}}),a("v-text-field",{attrs:{label:"External Port:",placeholder:"",required:"",hint:"Enter the external port to forward."},model:{value:t.editingItem.port,callback:function(e){t.$set(t.editingItem,"port",e)},expression:"editingItem.port"}}),a("v-text-field",{attrs:{label:"Internal Port:",placeholder:"",required:"",hint:"Enter the internal port to forward"},model:{value:t.editingItem.srv_port,callback:function(e){t.$set(t.editingItem,"srv_port",e)},expression:"editingItem.srv_port"}})],1)],1)],1)],1),a("div",{staticStyle:{flex:"1 1 auto"}})],1)],1)],1)],1)};r._withStripped=!0;var i={render:r,staticRenderFns:[]};e.a=i}});