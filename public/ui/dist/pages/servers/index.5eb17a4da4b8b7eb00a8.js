webpackJsonp([7],{"/LJZ":function(e,t,s){"use strict";var i=s("woOf"),r=s.n(i),a=s("Dd8w"),o=s.n(a),n=s("NYxO"),l=s("4swq"),d=s("mtWM"),c=s.n(d);t.a={middleware:[],components:{},computed:o()({},Object(n.mapGetters)({isAuthenticated:"auth/isAuthenticated",loggedUser:"auth/loggedUser",loggedToken:"auth/loggedToken"}),{formTitle:function(){return-1===this.editedIndex?"Add Server":"Edit Server"}}),data:function(){return{error:"",dialog:!1,headers:[{text:"Label",align:"left",value:"label"},{text:"Host",value:"host"},{text:"Secret",value:"secret"},{text:"Actions",value:"host",sortable:!1}],items:[],editedIndex:-1,editedItem:{host:"",secret:""},defaultItem:{host:"",secret:""}}},mounted:function(){this.initialize()},watch:{dialog:function(e){e||this.close()}},methods:{initialize:function(){this.items=this.$storage.get("servers")||[]},authItem:function(e){var t=this;this.editedIndex=this.items.indexOf(e),this.editedItem=r()({},e),c.a.post(e.host+"/auth",{label:e.label,server:e.host,secret:e.secret}).then(function(e){Object(l.c)(e.data.token),t.$router.replace("/")}).catch(function(e){e.response?401===e.response.status?t.error="Incorrect secret!":t.error="Failed to connect to host, check details.":e.request?t.error="Failed to connect to host, check details.":t.error=e.message})},editItem:function(e){this.editedIndex=this.items.indexOf(e),this.editedItem=r()({},e),this.dialog=!0},deleteItem:function(e){var t=this;this.$prompt.show({persistent:!0,width:400,toolbar:{color:"red darken-3",closable:!1},title:"Delete server?",text:"Are you sure you want to delete the <b>"+e.label+"</b> server?",buttons:[{title:"Yes",color:"success",handler:function(){var s=t.items.indexOf(e);t.items.splice(s,1),t.$storage.set("servers",t.items)}},{title:"No",color:"error"}]})},close:function(){var e=this;this.dialog=!1,setTimeout(function(){e.editedItem=r()({},e.defaultItem),e.editedIndex=-1},300)},save:function(){this.editedIndex>-1?r()(this.items[this.editedIndex],this.editedItem):this.items.push(this.editedItem),this.$storage.set("servers",this.items),this.close()}}}},MKgQ:function(e,t,s){(e.exports=s("FZ+f")(!1)).push([e.i,"",""])},RDx6:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("v-content",[s("v-container",{attrs:{fluid:"",tag:"section",id:"grid"}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{"d-flex":"",xs12:"","order-xs5":""}},[s("v-layout",{attrs:{column:""}},[s("v-flex",{staticClass:"display mb-2",attrs:{tag:"h1"}},[e._v("\n              My Servers\n              "),s("v-btn",{staticStyle:{float:"right"},attrs:{color:"success"},on:{click:function(t){e.dialog=!0}}},[e._v("Add Server")])],1),s("v-flex",[s("v-alert",{attrs:{type:"error",value:e.error}},[e._v("\n                "+e._s(e.error)+"\n              ")]),s("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[s("td",[s("a",{attrs:{href:"javascript:void(0)"},on:{click:function(s){e.authItem(t.item)}}},[e._v(e._s(t.item.label))])]),s("td",[s("a",{attrs:{href:t.item.host,target:"_blank",rel:"noopener"}},[e._v(e._s(t.item.host))])]),s("td",[e._v(e._s(t.item.secret))]),s("td",{staticClass:"justify-center layout px-0"},[s("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(s){e.editItem(t.item)}}},[s("v-icon",{attrs:{color:"teal"}},[e._v("edit")])],1),s("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(s){e.deleteItem(t.item)}}},[s("v-icon",{attrs:{color:"pink"}},[e._v("delete")])],1)],1)]}}])},[s("template",{slot:"no-data"},[e._v("\n                  You have not added any servers, add a new server to continue.\n                ")])],2),s("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),s("v-card-text",[s("v-alert",{attrs:{outline:"",color:"info",icon:"info",value:!0}},[e._v("\n                      Servers are securely stored in your browser for easy selection.\n                    ")]),s("v-container",{attrs:{"grid-list-md":""}},[s("v-text-field",{attrs:{label:"Label"},model:{value:e.editedItem.label,callback:function(t){e.$set(e.editedItem,"label",t)},expression:"editedItem.label"}}),s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[s("v-text-field",{attrs:{label:"Host"},model:{value:e.editedItem.host,callback:function(t){e.$set(e.editedItem,"host",t)},expression:"editedItem.host"}})],1),s("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[s("v-text-field",{attrs:{label:"Secret"},model:{value:e.editedItem.secret,callback:function(t){e.$set(e.editedItem,"secret",t)},expression:"editedItem.secret"}})],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){return e.close(t)}}},[e._v("Cancel")]),s("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){return e.save(t)}}},[e._v("Save")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)};i._withStripped=!0;var r={render:i,staticRenderFns:[]};t.a=r},aUfn:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("/LJZ"),r=s("RDx6"),a=!1;var o=function(e){a||s("gRt1")},n=s("VU/8")(i.a,r.a,!1,o,null,null);n.options.__file="pages/servers/index.vue",t.default=n.exports},gRt1:function(e,t,s){var i=s("MKgQ");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);s("rjj0")("bf32465e",i,!1,{sourceMap:!1})}});