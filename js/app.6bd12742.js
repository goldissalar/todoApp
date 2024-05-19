(function(){"use strict";var e={704:function(e,t,a){var o=a(7764),l=(a(3248),a(4108)),s=a(2500),i=a(7192);const r={namespaced:!0,state:{loggedIn:!1,username:null!=localStorage.getItem("username")?localStorage.getItem("username"):null,id:null!=localStorage.getItem("id")?localStorage.getItem("id"):null},mutations:{setJWT(e){localStorage.setItem("authState",JSON.stringify(e))},logout(e){e.loggedIn=!1,e.username=null,e.id=null,localStorage.removeItem("authState")},getState(e){console.log(e);const t=JSON.parse(localStorage.getItem("authState"));t&&Object.assign(e,t)}}},n=(0,i.eC)({modules:{auth:r}});n.commit("auth/getState");var d=n,c=a(7464),u=a(9096),m=a(3740),h=a(4448),f=a(6030),g=a(1884),p=a(4019),y=a(7136),D=a(8163),b=a(6912);const v=(0,l.QD)("h2",{class:"text-h2 mb-4"},"Login",-1);function w(e,t,a,o,s,i){return(0,l.Wz)(),(0,l.Az)(p.K,{class:"fill-height"},{default:(0,l.Ql)((()=>[(0,l.K2)(y.s,{align:"center",justify:"center"},{default:(0,l.Ql)((()=>[(0,l.K2)(D.m,{cols:"12",sm:"8",md:"6"},{default:(0,l.Ql)((()=>[(0,l.K2)(f.S,{class:"elevation-12 pa-8"},{default:(0,l.Ql)((()=>[s.loginSuccess?((0,l.Wz)(),(0,l.Az)(m.U,{key:0,type:"success",icon:"mdi-check-circle-outline",class:"mb-4"},{default:(0,l.Ql)((()=>[(0,l.mY)("Login erfolgreich!")])),_:1})):(0,l.g1)("",!0),s.loginFailed?((0,l.Wz)(),(0,l.Az)(m.U,{key:1,type:"error",icon:"mdi-alert-circle-outline",class:"mb-4"},{default:(0,l.Ql)((()=>[(0,l.mY)("Login fehlgeschlagen!")])),_:1})):(0,l.g1)("",!0),v,(0,l.K2)(g.q,{ref:"form"},{default:(0,l.Ql)((()=>[(0,l.K2)(b.y,{type:"text",id:"username",modelValue:s.formData.username,"onUpdate:modelValue":t[0]||(t[0]=e=>s.formData.username=e),rules:[s.rules.required],label:"Benutzername"},null,8,["modelValue","rules"]),(0,l.K2)(b.y,{type:"password",id:"password",modelValue:s.formData.password,"onUpdate:modelValue":t[1]||(t[1]=e=>s.formData.password=e),rules:[s.rules.required],label:"Passwort"},null,8,["modelValue","rules"]),(0,l.K2)(h.i,{color:"#008000",dark:"",block:"",onClick:i.validateAndSubmitForm},{default:(0,l.Ql)((()=>[(0,l.mY)("Anmelden")])),_:1},8,["onClick"]),s.validationError?((0,l.Wz)(),(0,l.Az)(m.U,{key:0,type:"error",class:"mt-4"},{default:(0,l.Ql)((()=>[(0,l.mY)((0,u.WA)(s.validationError),1)])),_:1})):(0,l.g1)("",!0)])),_:1},512)])),_:1})])),_:1})])),_:1})])),_:1})}var k={data(){return{formData:{username:"",password:""},loginSuccess:!1,loginFailed:!1,validationError:"",rules:{required:e=>!!e||"Dieses Feld ist erforderlich"}}},methods:{async validateAndSubmitForm(){this.loginSuccess=!1,this.loginFailed=!1,this.validationError="",this.$refs.form.validate()?this.submitForm():this.validationError="Bitte füllen Sie alle erforderlichen Felder aus."},async submitForm(){this.loginSuccess=!1,this.loginFailed=!1,this.validationError="",this.formData.username&&this.formData.password?fetch(`https://65c7a2b5e7c384aada6ec54f.mockapi.io/users?username=${this.formData.username}&password=${this.formData.password}`).then((e=>e.json())).then((e=>{if(e.length>0){const t=e[0];this.loginSuccess=!0,d.state.auth.loggedIn=!0,d.state.auth.username=t.username,d.state.auth.id=t.id,d.commit("auth/setJWT"),setTimeout((()=>{this.$router.push("/todos")}),500)}else console.log("Ungültige Anmeldeinformationen"),this.loginFailed=!0})).catch((e=>console.error("Error:",e))):this.validationError="Bitte füllen Sie alle erforderlichen Felder aus."}},created(){},name:"LoginForm"},Q=a(4100);const T=(0,Q.c)(k,[["render",w]]);var _=T;const A=(0,l.QD)("h2",{class:"text-h2 mb-4"},"Registrieren",-1);function K(e,t,a,o,s,i){return(0,l.Wz)(),(0,l.Az)(p.K,{class:"fill-height"},{default:(0,l.Ql)((()=>[(0,l.K2)(y.s,{align:"center",justify:"center"},{default:(0,l.Ql)((()=>[(0,l.K2)(D.m,{cols:"12",sm:"8",md:"6"},{default:(0,l.Ql)((()=>[(0,l.K2)(f.S,{class:"elevation-12 pa-8"},{default:(0,l.Ql)((()=>[s.registrationSuccess?((0,l.Wz)(),(0,l.Az)(m.U,{key:0,type:"success",icon:"mdi-check-circle-outline",class:"mb-4"},{default:(0,l.Ql)((()=>[(0,l.mY)("Registrierung erfolgreich!")])),_:1})):(0,l.g1)("",!0),s.registrationFailed?((0,l.Wz)(),(0,l.Az)(m.U,{key:1,type:"error",icon:"mdi-alert-circle-outline",class:"mb-4"},{default:(0,l.Ql)((()=>[(0,l.mY)("Registrierung fehlgeschlagen!")])),_:1})):(0,l.g1)("",!0),A,(0,l.K2)(g.q,{ref:"form"},{default:(0,l.Ql)((()=>[(0,l.K2)(b.y,{type:"text",id:"username",modelValue:s.formData.username,"onUpdate:modelValue":t[0]||(t[0]=e=>s.formData.username=e),rules:[s.rules.required],label:"Benutzername"},null,8,["modelValue","rules"]),(0,l.K2)(b.y,{type:"password",id:"password",modelValue:s.formData.password,"onUpdate:modelValue":t[1]||(t[1]=e=>s.formData.password=e),rules:[s.rules.required],label:"Passwort"},null,8,["modelValue","rules"]),(0,l.K2)(h.i,{color:"#008000",dark:"",block:"",onClick:i.submitForm},{default:(0,l.Ql)((()=>[(0,l.mY)("Registrieren")])),_:1},8,["onClick"])])),_:1},512)])),_:1})])),_:1})])),_:1})])),_:1})}const S="https://65c7a2b5e7c384aada6ec54f.mockapi.io/users";var z={data(){return{formData:{username:"",password:"",createdAt:new Date},rules:{required:e=>!!e||"Dieses Feld ist erforderlich"},registrationSuccess:!1,registrationFailed:!1}},methods:{async submitForm(){this.registrationSuccess=!1,this.registrationFailed=!1;try{const e=await this.$axios.post(S,this.formData);e&&(this.registrationSuccess=!0,setTimeout((()=>{this.$router.push("/login")}),500))}catch(e){this.registrationFailed=!0}}},created(){},name:"RegistrationForm"};const F=(0,Q.c)(z,[["render",K]]);var V=F,W=a(6208),C=a(9788),x=a(5400),I=a(9292);const Y=(0,l.QD)("h1",{style:{"padding-bottom":"20px"}},"Meine Todos",-1),O={class:"text-wrapper"},U={class:"text-wrapper"},q={style:{"padding-bottom":"20px"}},P={style:{display:"flex"}},E=(0,l.QD)("div",{style:{clear:"both"}},null,-1);function $(e,t,a,s,i,r){return(0,l.Wz)(),(0,l.An)(l.ae,null,[i.success&&i.showAlert?((0,l.Wz)(),(0,l.Az)(m.U,{key:0,type:"success"},{default:(0,l.Ql)((()=>[(0,l.mY)("Speichern erfolgreich!")])),_:1})):(0,l.g1)("",!0),i.failed&&i.showAlert?((0,l.Wz)(),(0,l.Az)(m.U,{key:1,type:"error"},{default:(0,l.Ql)((()=>[(0,l.mY)("Speichern fehlgeschlagen!")])),_:1})):(0,l.g1)("",!0),i.deleteSuccess&&i.showAlert?((0,l.Wz)(),(0,l.Az)(m.U,{key:2,type:"success"},{default:(0,l.Ql)((()=>[(0,l.mY)("Löschen erfolgreich!")])),_:1})):(0,l.g1)("",!0),i.deleteFailed&&i.showAlert?((0,l.Wz)(),(0,l.Az)(m.U,{key:3,type:"error"},{default:(0,l.Ql)((()=>[(0,l.mY)("Löschen fehlgeschlagen!")])),_:1})):(0,l.g1)("",!0),i.selectedTodo?(0,l.g1)("",!0):((0,l.Wz)(),(0,l.Az)(p.K,{key:4},{default:(0,l.Ql)((()=>[Y,(0,l.K2)(b.y,{modelValue:i.searchTerm,"onUpdate:modelValue":t[0]||(t[0]=e=>i.searchTerm=e),label:"Suche",onInput:r.searchTodos},null,8,["modelValue","onInput"]),(0,l.K2)(C.I7,{items:i.todos,headers:i.headers,"items-per-page":i.itemsPerPage,"server-items-length":i.totalTodos,"item-key":"title",loading:i.loading,"onUpdate:page":r.onPageChange},{item:(0,l.Ql)((({item:e})=>[(0,l.QD)("tr",{class:(0,u.WN)({"green-row":e.checked})},[(0,l.QD)("td",O,(0,u.WA)(e.title),1),(0,l.QD)("td",U,(0,u.WA)(e.description),1),(0,l.QD)("td",null,(0,u.WA)(e.dueDateDisplay),1),(0,l.QD)("td",null,[(0,l.K2)(x.G,{size:"small",class:"me-2",onClick:t=>r.editPriority(e),color:1==e.priority?"#dc3545":"#ffc107"},{default:(0,l.Ql)((()=>[(0,l.mY)((0,u.WA)(1==e.priority?"mdi-chevron-double-up":"mdi-chevron-up"),1)])),_:2},1032,["onClick","color"])]),(0,l.QD)("td",null,[(0,l.K2)(x.G,{size:"small",class:"me-2",onClick:t=>r.editTodo(e),color:"#008000"},{default:(0,l.Ql)((()=>[(0,l.mY)(" mdi-pencil ")])),_:2},1032,["onClick"]),(0,l.K2)(x.G,{size:"small",class:"me-2",onClick:t=>r.deleteItem(e),color:"rgb(200, 35, 51)"},{default:(0,l.Ql)((()=>[(0,l.mY)(" mdi-delete ")])),_:2},1032,["onClick"]),(0,l.K2)(x.G,{size:"small",onClick:t=>r.toggleCheck(e),color:"rgb(40,167,69)"},{default:(0,l.Ql)((()=>[(0,l.mY)((0,u.WA)(e.checked?"mdi-checkbox-marked":"mdi-crop-square"),1)])),_:2},1032,["onClick"])])],2)])),_:1},8,["items","headers","items-per-page","server-items-length","loading","onUpdate:page"]),(0,l.K2)(h.i,{class:"text-none mb-4 create-btn",color:"#008000",onClick:t[1]||(t[1]=e=>r.createTodo()),style:{"margin-top":"10px"}},{default:(0,l.Ql)((()=>[(0,l.mY)("Erstellen")])),_:1})])),_:1})),i.selectedTodo?((0,l.Wz)(),(0,l.Az)(p.K,{key:5},{default:(0,l.Ql)((()=>[(0,l.QD)("h1",q,(0,u.WA)(i.formData.id?"Todo bearbeiten":"Todo erstellen"),1),(0,l.K2)(g.q,{ref:"form",onSubmit:(0,o.Y7)(r.submitForm,["prevent"])},{default:(0,l.Ql)((()=>[(0,l.K2)(b.y,{type:"text",id:"title",modelValue:i.formData.title,"onUpdate:modelValue":t[2]||(t[2]=e=>i.formData.title=e),rules:[e=>!!e||"Bitte Titel eingeben"],required:"",label:"Titel"},null,8,["modelValue","rules"]),(0,l.K2)(b.y,{type:"text",id:"description",modelValue:i.formData.description,"onUpdate:modelValue":t[3]||(t[3]=e=>i.formData.description=e),rules:[e=>!!e||"Bitte Beschreibung eingeben"],required:"",label:"Beschreibung"},null,8,["modelValue","rules"]),(0,l.K2)(b.y,{type:"datetime-local",id:"dueDate",modelValue:i.formData.dueDate,"onUpdate:modelValue":t[4]||(t[4]=e=>i.formData.dueDate=e),rules:[e=>!!e||"Bitte Fälligkeitsdatum eingeben",e=>r.validateDueDate(e)||"Das Datum darf nicht vor dem aktuellen Datum liegen"],required:"",label:"Fälligkeitsdatum"},null,8,["modelValue","rules"]),(0,l.K2)(I.qq,{modelValue:i.formData.priority,"onUpdate:modelValue":t[5]||(t[5]=e=>i.formData.priority=e),label:"Priorität",items:i.priorityOptions,"item-title":"label","item-value":"value"},null,8,["modelValue","items"]),((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(i.tagsDisplay,((e,t)=>((0,l.Wz)(),(0,l.Az)(W.s,{key:t,closable:"","onClick:close":e=>r.removeTag(t),class:"tag-chip"},{default:(0,l.Ql)((()=>[(0,l.mY)((0,u.WA)(e),1)])),_:2},1032,["onClick:close"])))),128)),(0,l.QD)("div",P,[(0,l.K2)(b.y,{modelValue:i.newTag,"onUpdate:modelValue":t[6]||(t[6]=e=>i.newTag=e),label:"Neuer Tag"},null,8,["modelValue"]),(0,l.K2)(D.m,{cols:"auto"},{default:(0,l.Ql)((()=>[(0,l.K2)(h.i,{density:"compact",icon:"mdi-plus",color:"rgb(40,167,69)",onClick:t[7]||(t[7]=e=>r.addNewTag())})])),_:1})]),E,(0,l.QD)("div",null,[(0,l.K2)(h.i,{type:"submit",class:"text-none mb-4 right-btn",color:"#008000"},{default:(0,l.Ql)((()=>[(0,l.mY)("Speichern")])),_:1}),(0,l.K2)(h.i,{class:"text-none mb-4 left-btn",color:"#757575",onClick:t[8]||(t[8]=e=>r.cancelForm())},{default:(0,l.Ql)((()=>[(0,l.mY)("Abbrechen")])),_:1})])])),_:1},8,["onSubmit"])])),_:1})):(0,l.g1)("",!0)],64)}const L="https://65c7a2b5e7c384aada6ec54f.mockapi.io/todos";var j={data(){return{todos:[],headers:[{title:"Titel",value:"title",sortable:!0},{title:"Beschreibung",value:"description",sortable:!0},{title:"Fälligkeitsdatum",value:"dueDate",sortable:!0},{title:"Priorität",value:"priority",sortable:!0},{title:"Aktionen",key:"actions"}],itemsPerPage:5,totalTodos:0,loading:!1,selectedTodo:!1,formData:{title:"",description:"",userId:0,checked:!1,priority:1,tags:[]},tagsDisplay:[],success:!1,failed:!1,deleteSuccess:!1,deleteFailed:!1,showAlert:!1,myId:null,priorityOptions:[],newTag:"",searchTerm:""}},name:"TodoPage",components:{},methods:{fetchData(){this.loading=!0,this.$axios.get(L,{params:{sortBy:"title",order:"asc"}}).then((e=>{this.todos=e.data.filter((e=>e.userId==this.myId)),this.totalTodos=Number(e.headers["x-total-count"]),this.todos.forEach((e=>{e.dueDateDisplay=this.formatDate(e.dueDate);const t=new Date(e.dueDate),a=new Date(t.getTime()-6e4*t.getTimezoneOffset());e.dueDate=a.toISOString().slice(0,16)})),this.todos.actions="",this.loading=!1})).catch((e=>{console.error("Error fetching data:",e),this.loading=!1}))},formatDate(e){if(!e)return"";const t={day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"};let a=new Date(e).toLocaleDateString("de-DE",t);return a=a.replace(/[,]/g," "),a},onPageChange(e){this.$router.push({query:{page:e}}),this.fetchData()},createTodo(){this.selectedTodo=!0},editTodo(e){this.selectedTodo=!0;let t=this.todos.find((t=>t.id===e.id));this.formData={...t};for(let a=0;a<this.formData.tags.length;a++)this.tagsDisplay.push(this.formData.tags[a])},toggleCheck(e){let t=this.todos.find((t=>t.id===e.id));this.formData={...t},this.formData.checked=!e.checked,this.updateTodo()},editPriority(e){let t=this.todos.find((t=>t.id===e.id));this.formData={...t},this.formData.priority=1===e.priority?2:1,this.updateTodo()},validateDueDate(e){const t=new Date(e),a=new Date;return t>=a},addTag(e){this.tagsDisplay.push(e),this.formData.tags.push(e)},removeTag(e){this.formData.tags.splice(e,1)},addNewTag(){""!==this.newTag.trim()&&(this.addTag(this.newTag.trim()),this.newTag="")},searchTodos(){""===this.searchTerm.trim()?this.fetchData():this.todos=this.todos.filter((e=>e.title.toLowerCase().includes(this.searchTerm.toLowerCase())||e.description.toLowerCase().includes(this.searchTerm.toLowerCase())||e.tags.some((e=>e.toLowerCase().includes(this.searchTerm.toLowerCase())))))},async deleteItem(e){const t=window.confirm("Sind Sie sicher, dass Sie dieses Todo löschen möchten?");if(t){this.resetAlert();try{let t=await this.$axios.delete(L+"/"+e.id,{params:{}});t&&(this.deleteSuccess=!0,this.showAlert=!0,setTimeout((()=>{this.showAlert=!1}),2e3),this.fetchData())}catch(a){this.deleteFailed=!0,this.showAlert=!0,setTimeout((()=>{this.showAlert=!1}),2e3)}}},cancelForm(){this.selectedTodo=!1,this.formData={title:"",description:"",checked:!1,priority:1,tags:[]},this.tagsDisplay=[],this.fetchData()},async submitForm(){this.resetAlert();const e=await this.$refs.form.validate();if(e.valid)try{let e;this.formData.userId=this.myId,e=this.formData.id?await this.$axios.put(L+"/"+this.formData.id,this.formData,{params:{}}):await this.$axios.post(L,this.formData,{params:{}}),e&&(this.success=!0,this.showAlert=!0,setTimeout((()=>{this.showAlert=!1}),2e3),this.cancelForm(),this.fetchData())}catch(t){this.failed=!0,this.showAlert=!0,setTimeout((()=>{this.showAlert=!1}),2e3)}},async updateTodo(){this.resetAlert();try{let e;this.formData.userId=this.myId,e=this.formData.id?await this.$axios.put(L+"/"+this.formData.id,this.formData,{params:{}}):await this.$axios.post(L,this.formData,{params:{}}),e&&(this.success=!0,this.showAlert=!0,setTimeout((()=>{this.showAlert=!1}),2e3),this.cancelForm(),this.fetchData())}catch(e){this.failed=!0,this.showAlert=!0,setTimeout((()=>{this.showAlert=!1}),2e3)}},resetAlert(){this.success=!1,this.failed=!1,this.deleteSuccess=!1,this.deleteFailed=!1}},watch:{"$route.query.page"(){this.fetchData()}},created(){this.myId=d.state.auth.id,this.priorityOptions=[{value:1,label:"Hoch"},{value:2,label:"Niedrig"}],this.fetchData(),console.log(d.state.auth.loggedIn)}};const B=(0,Q.c)(j,[["render",$]]);var N=B;const M=[{path:"/",redirect:"/login"},{path:"/login",component:_},{path:"/register",component:V},{path:"/todos",component:N,meta:{requiresAuth:!0}}],R=(0,c.gv)({history:(0,c.Ow)(),routes:M});R.beforeEach(((e,t,a)=>{const o=e.meta.requiresAuth;console.log(o),console.log(d.state.auth.loggedIn),o&&!d.state.auth.loggedIn?a("/login"):a()}));var G=R,J=a(2386),H=a(4246),X=a(3464);const Z=(0,l.QD)("p",{class:"version"},"Version 0 - Basic",-1);var ee={__name:"App",setup(e){let t=(0,l.S6)((()=>d.state.auth.loggedIn));function a(){d.commit("auth/logout"),G.push("/login")}return(e,o)=>{const i=(0,l.E1)("router-link"),r=(0,l.E1)("router-view");return(0,l.Wz)(),(0,l.Az)(J.m,null,{default:(0,l.Ql)((()=>[(0,s.KV)(t)?((0,l.Wz)(),(0,l.Az)(H.M,{key:0,app:"",color:"#008000",dark:""},{default:(0,l.Ql)((()=>[(0,l.K2)(p.K,null,{default:(0,l.Ql)((()=>[(0,l.K2)(y.s,{align:"center",justify:"space-between"},{default:(0,l.Ql)((()=>[(0,l.K2)(D.m,null,{default:(0,l.Ql)((()=>[(0,l.K2)(i,{to:"/todos",class:"nav-link"},{default:(0,l.Ql)((()=>[(0,l.mY)("Todos")])),_:1}),(0,l.QD)("button",{onClick:a,class:"button button--primary button_navigation nav-link right-btn"},"Logout")])),_:1})])),_:1})])),_:1})])),_:1})):(0,l.g1)("",!0),(0,s.KV)(t)?(0,l.g1)("",!0):((0,l.Wz)(),(0,l.Az)(H.M,{key:1,app:"",color:"#008000",dark:""},{default:(0,l.Ql)((()=>[(0,l.K2)(p.K,null,{default:(0,l.Ql)((()=>[(0,l.K2)(y.s,{align:"center",justify:"space-between"},{default:(0,l.Ql)((()=>[(0,l.K2)(D.m,{class:"nav-container"},{default:(0,l.Ql)((()=>[(0,l.K2)(i,{to:"/login",class:"nav-link"},{default:(0,l.Ql)((()=>[(0,l.mY)("Login")])),_:1}),(0,l.K2)(i,{to:"/register",class:"nav-link"},{default:(0,l.Ql)((()=>[(0,l.mY)("Registrieren")])),_:1}),Z])),_:1})])),_:1})])),_:1})])),_:1})),(0,l.K2)(X.m,null,{default:(0,l.Ql)((()=>[(0,l.K2)(p.K,null,{default:(0,l.Ql)((()=>[(0,l.K2)(r)])),_:1})])),_:1})])),_:1})}}};const te=ee;var ae=te,oe=a(2336),le=a.n(oe),se=(a(8985),a(7820)),ie=a(4788),re=a(6332),ne=a(4224),de=a(3373);const ce=(0,se.W_)({icons:{defaultSet:"mdi",aliases:de._,sets:{mdi:de.H,fa:ne.fa}},components:ie,directives:re}),ue=(0,o.W0)(ae);ue.use(ce),ue.use(G),ue.use(d),ue.config.globalProperties.$axios=le(),ue.mount("#app")}},t={};function a(o){var l=t[o];if(void 0!==l)return l.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,o,l,s){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],l=e[c][1],s=e[c][2];for(var r=!0,n=0;n<o.length;n++)(!1&s||i>=s)&&Object.keys(a.O).every((function(e){return a.O[e](o[n])}))?o.splice(n--,1):(r=!1,s<i&&(i=s));if(r){e.splice(c--,1);var d=l();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[o,l,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var l,s,i=o[0],r=o[1],n=o[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(l in r)a.o(r,l)&&(a.m[l]=r[l]);if(n)var c=n(a)}for(t&&t(o);d<i.length;d++)s=i[d],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(c)},o=self["webpackChunktodo_app"]=self["webpackChunktodo_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[999],(function(){return a(704)}));o=a.O(o)})();
//# sourceMappingURL=app.6bd12742.js.map