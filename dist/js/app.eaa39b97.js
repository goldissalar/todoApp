(function(){"use strict";var e={7405:function(e,t,a){var o=a(5130),s=(a(4114),a(6768)),i=a(144),r=a(782);const l={namespaced:!0,state:{loggedIn:!1,username:null!=localStorage.getItem("username")?localStorage.getItem("username"):null,id:null!=localStorage.getItem("id")?localStorage.getItem("id"):null},mutations:{setJWT(e){localStorage.setItem("authState",JSON.stringify(e))},logout(e){e.loggedIn=!1,e.username=null,e.id=null,localStorage.removeItem("authState")},getState(e){console.log(e);const t=JSON.parse(localStorage.getItem("authState"));t&&Object.assign(e,t)}}},n=(0,r.y$)({modules:{auth:l}});n.commit("auth/getState");var d=n,u=a(1387),c=a(4232),h=a(1969),m=a(3892),f=a(4189),g=a(1560),p=a(3813),b=a(6756),k=a(5526),v=a(3948);const y=(0,s.Lk)("h2",{class:"text-h2 mb-4"},"Login",-1);function D(e,t,a,o,i,r){return(0,s.uX)(),(0,s.Wv)(p.I,{class:"fill-height"},{default:(0,s.k6)((()=>[(0,s.bF)(b.L,{align:"center",justify:"center"},{default:(0,s.k6)((()=>[(0,s.bF)(k.B,{cols:"12",sm:"8",md:"6"},{default:(0,s.k6)((()=>[(0,s.bF)(f.J,{class:"elevation-12 pa-8"},{default:(0,s.k6)((()=>[i.loginSuccess?((0,s.uX)(),(0,s.Wv)(h.l,{key:0,type:"success",icon:"mdi-check-circle-outline",class:"mb-4"},{default:(0,s.k6)((()=>[(0,s.eW)("Login erfolgreich!")])),_:1})):(0,s.Q3)("",!0),i.loginFailed?((0,s.uX)(),(0,s.Wv)(h.l,{key:1,type:"error",icon:"mdi-alert-circle-outline",class:"mb-4"},{default:(0,s.k6)((()=>[(0,s.eW)("Login fehlgeschlagen!")])),_:1})):(0,s.Q3)("",!0),y,(0,s.bF)(g.n,{ref:"form"},{default:(0,s.k6)((()=>[(0,s.bF)(v.W,{type:"text",id:"username",modelValue:i.formData.username,"onUpdate:modelValue":t[0]||(t[0]=e=>i.formData.username=e),rules:[i.rules.required],label:"Benutzername"},null,8,["modelValue","rules"]),(0,s.bF)(v.W,{type:"password",id:"password",modelValue:i.formData.password,"onUpdate:modelValue":t[1]||(t[1]=e=>i.formData.password=e),rules:[i.rules.required],label:"Passwort"},null,8,["modelValue","rules"]),(0,s.bF)(m.D,{color:"#008000",dark:"",block:"",onClick:r.validateAndSubmitForm},{default:(0,s.k6)((()=>[(0,s.eW)("Anmelden")])),_:1},8,["onClick"]),i.validationError?((0,s.uX)(),(0,s.Wv)(h.l,{key:0,type:"error",class:"mt-4"},{default:(0,s.k6)((()=>[(0,s.eW)((0,c.v_)(i.validationError),1)])),_:1})):(0,s.Q3)("",!0)])),_:1},512)])),_:1})])),_:1})])),_:1})])),_:1})}var w={data(){return{formData:{username:"",password:""},loginSuccess:!1,loginFailed:!1,validationError:"",rules:{required:e=>!!e||"Dieses Feld ist erforderlich"}}},methods:{async validateAndSubmitForm(){this.loginSuccess=!1,this.loginFailed=!1,this.validationError="",this.$refs.form.validate()?this.submitForm():this.validationError="Bitte füllen Sie alle erforderlichen Felder aus."},async submitForm(){this.loginSuccess=!1,this.loginFailed=!1,this.validationError="",this.formData.username&&this.formData.password?fetch(`https://65c7a2b5e7c384aada6ec54f.mockapi.io/users?username=${this.formData.username}&password=${this.formData.password}`).then((e=>e.json())).then((e=>{if(e.length>0){const t=e[0];this.loginSuccess=!0,d.state.auth.loggedIn=!0,d.state.auth.username=t.username,d.state.auth.id=t.id,d.commit("auth/setJWT"),setTimeout((()=>{this.$router.push("/todos")}),500)}else console.log("Ungültige Anmeldeinformationen"),this.loginFailed=!0})).catch((e=>console.error("Error:",e))):this.validationError="Bitte füllen Sie alle erforderlichen Felder aus."}},created(){},name:"LoginForm"},F=a(1241);const _=(0,F.A)(w,[["render",D]]);var T=_;const W=(0,s.Lk)("h2",{class:"text-h2 mb-4"},"Registrieren",-1);function S(e,t,a,o,i,r){return(0,s.uX)(),(0,s.Wv)(p.I,{class:"fill-height"},{default:(0,s.k6)((()=>[(0,s.bF)(b.L,{align:"center",justify:"center"},{default:(0,s.k6)((()=>[(0,s.bF)(k.B,{cols:"12",sm:"8",md:"6"},{default:(0,s.k6)((()=>[(0,s.bF)(f.J,{class:"elevation-12 pa-8"},{default:(0,s.k6)((()=>[i.registrationSuccess?((0,s.uX)(),(0,s.Wv)(h.l,{key:0,type:"success",icon:"mdi-check-circle-outline",class:"mb-4"},{default:(0,s.k6)((()=>[(0,s.eW)("Registrierung erfolgreich!")])),_:1})):(0,s.Q3)("",!0),i.registrationFailed?((0,s.uX)(),(0,s.Wv)(h.l,{key:1,type:"error",icon:"mdi-alert-circle-outline",class:"mb-4"},{default:(0,s.k6)((()=>[(0,s.eW)("Registrierung fehlgeschlagen!")])),_:1})):(0,s.Q3)("",!0),W,(0,s.bF)(g.n,{ref:"form"},{default:(0,s.k6)((()=>[(0,s.bF)(v.W,{type:"text",id:"username",modelValue:i.formData.username,"onUpdate:modelValue":t[0]||(t[0]=e=>i.formData.username=e),rules:[i.rules.required],label:"Benutzername"},null,8,["modelValue","rules"]),(0,s.bF)(v.W,{type:"password",id:"password",modelValue:i.formData.password,"onUpdate:modelValue":t[1]||(t[1]=e=>i.formData.password=e),rules:[i.rules.required],label:"Passwort"},null,8,["modelValue","rules"]),(0,s.bF)(m.D,{color:"#008000",dark:"",block:"",onClick:r.submitForm},{default:(0,s.k6)((()=>[(0,s.eW)("Registrieren")])),_:1},8,["onClick"])])),_:1},512)])),_:1})])),_:1})])),_:1})])),_:1})}const A="https://65c7a2b5e7c384aada6ec54f.mockapi.io/users";var I={data(){return{formData:{username:"",password:"",createdAt:new Date},rules:{required:e=>!!e||"Dieses Feld ist erforderlich"},registrationSuccess:!1,registrationFailed:!1}},methods:{async submitForm(){this.registrationSuccess=!1,this.registrationFailed=!1;try{const e=await this.$axios.post(A,this.formData);e&&(this.registrationSuccess=!0,setTimeout((()=>{this.$router.push("/login")}),500))}catch(e){this.registrationFailed=!0}}},created(){},name:"RegistrationForm"};const L=(0,F.A)(I,[["render",S]]);var C=L,x=a(7524),V=a(7697),E=a(9669),O=a(105);const B=(0,s.Lk)("h1",{style:{"padding-bottom":"20px"}},"Meine Todos",-1),P={class:"text-wrapper"},X={class:"text-wrapper"},$={style:{"padding-bottom":"20px"}},j={style:{display:"flex"}},q=(0,s.Lk)("div",{style:{clear:"both"}},null,-1);function Q(e,t,a,i,r,l){return(0,s.uX)(),(0,s.CE)(s.FK,null,[r.success&&r.showAlert?((0,s.uX)(),(0,s.Wv)(h.l,{key:0,type:"success"},{default:(0,s.k6)((()=>[(0,s.eW)("Speichern erfolgreich!")])),_:1})):(0,s.Q3)("",!0),r.failed&&r.showAlert?((0,s.uX)(),(0,s.Wv)(h.l,{key:1,type:"error"},{default:(0,s.k6)((()=>[(0,s.eW)("Speichern fehlgeschlagen!")])),_:1})):(0,s.Q3)("",!0),r.deleteSuccess&&r.showAlert?((0,s.uX)(),(0,s.Wv)(h.l,{key:2,type:"success"},{default:(0,s.k6)((()=>[(0,s.eW)("Löschen erfolgreich!")])),_:1})):(0,s.Q3)("",!0),r.deleteFailed&&r.showAlert?((0,s.uX)(),(0,s.Wv)(h.l,{key:3,type:"error"},{default:(0,s.k6)((()=>[(0,s.eW)("Löschen fehlgeschlagen!")])),_:1})):(0,s.Q3)("",!0),r.selectedTodo?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(p.I,{key:4},{default:(0,s.k6)((()=>[B,(0,s.bF)(v.W,{modelValue:r.searchTerm,"onUpdate:modelValue":t[0]||(t[0]=e=>r.searchTerm=e),label:"Suche",onInput:l.searchTodos},null,8,["modelValue","onInput"]),(0,s.bF)(V.Py,{items:r.todos,headers:r.headers,"items-per-page":r.itemsPerPage,"server-items-length":r.totalTodos,"item-key":"title",loading:r.loading,"onUpdate:page":l.onPageChange},{item:(0,s.k6)((({item:e})=>[(0,s.Lk)("tr",{class:(0,c.C4)({"green-row":e.checked})},[(0,s.Lk)("td",P,(0,c.v_)(e.title),1),(0,s.Lk)("td",X,(0,c.v_)(e.description),1),(0,s.Lk)("td",null,(0,c.v_)(e.dueDateDisplay),1),(0,s.Lk)("td",null,[(0,s.bF)(E.w,{size:"small",class:"me-2",onClick:t=>l.editPriority(e),color:1==e.priority?"#dc3545":"#ffc107"},{default:(0,s.k6)((()=>[(0,s.eW)((0,c.v_)(1==e.priority?"mdi-chevron-double-up":"mdi-chevron-up"),1)])),_:2},1032,["onClick","color"])]),(0,s.Lk)("td",null,[(0,s.bF)(E.w,{size:"small",class:"me-2",onClick:t=>l.editTodo(e),color:"#008000"},{default:(0,s.k6)((()=>[(0,s.eW)(" mdi-pencil ")])),_:2},1032,["onClick"]),(0,s.bF)(E.w,{size:"small",class:"me-2",onClick:t=>l.deleteItem(e),color:"rgb(200, 35, 51)"},{default:(0,s.k6)((()=>[(0,s.eW)(" mdi-delete ")])),_:2},1032,["onClick"]),(0,s.bF)(E.w,{size:"small",onClick:t=>l.toggleCheck(e),color:"rgb(40,167,69)"},{default:(0,s.k6)((()=>[(0,s.eW)((0,c.v_)(e.checked?"mdi-checkbox-marked":"mdi-crop-square"),1)])),_:2},1032,["onClick"])])],2)])),_:1},8,["items","headers","items-per-page","server-items-length","loading","onUpdate:page"]),(0,s.bF)(m.D,{class:"text-none mb-4 create-btn",color:"#008000",onClick:t[1]||(t[1]=e=>l.createTodo()),style:{"margin-top":"10px"}},{default:(0,s.k6)((()=>[(0,s.eW)("Erstellen")])),_:1})])),_:1})),r.selectedTodo?((0,s.uX)(),(0,s.Wv)(p.I,{key:5},{default:(0,s.k6)((()=>[(0,s.Lk)("h1",$,(0,c.v_)(r.formData.id?"Todo bearbeiten":"Todo erstellen"),1),(0,s.bF)(g.n,{ref:"form",onSubmit:(0,o.D$)(l.submitForm,["prevent"])},{default:(0,s.k6)((()=>[(0,s.bF)(v.W,{type:"text",id:"title",modelValue:r.formData.title,"onUpdate:modelValue":t[2]||(t[2]=e=>r.formData.title=e),rules:[e=>!!e||"Bitte Titel eingeben"],required:"",label:"Titel"},null,8,["modelValue","rules"]),(0,s.bF)(v.W,{type:"text",id:"description",modelValue:r.formData.description,"onUpdate:modelValue":t[3]||(t[3]=e=>r.formData.description=e),rules:[e=>!!e||"Bitte Beschreibung eingeben"],required:"",label:"Beschreibung"},null,8,["modelValue","rules"]),(0,s.bF)(v.W,{type:"datetime-local",id:"dueDate",modelValue:r.formData.dueDate,"onUpdate:modelValue":t[4]||(t[4]=e=>r.formData.dueDate=e),rules:[e=>!!e||"Bitte Fälligkeitsdatum eingeben",e=>l.validateDueDate(e)||"Das Datum darf nicht vor dem aktuellen Datum liegen"],required:"",label:"Fälligkeitsdatum"},null,8,["modelValue","rules"]),(0,s.bF)(O.d4,{modelValue:r.formData.priority,"onUpdate:modelValue":t[5]||(t[5]=e=>r.formData.priority=e),label:"Priorität",items:r.priorityOptions,"item-title":"label","item-value":"value"},null,8,["modelValue","items"]),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.tagsDisplay,((e,t)=>((0,s.uX)(),(0,s.Wv)(x.x,{key:t,closable:"","onClick:close":e=>l.removeTag(t),class:"tag-chip"},{default:(0,s.k6)((()=>[(0,s.eW)((0,c.v_)(e),1)])),_:2},1032,["onClick:close"])))),128)),(0,s.Lk)("div",j,[(0,s.bF)(v.W,{modelValue:r.newTag,"onUpdate:modelValue":t[6]||(t[6]=e=>r.newTag=e),label:"Neuer Tag"},null,8,["modelValue"]),(0,s.bF)(k.B,{cols:"auto"},{default:(0,s.k6)((()=>[(0,s.bF)(m.D,{density:"compact",icon:"mdi-plus",color:"rgb(40,167,69)",onClick:t[7]||(t[7]=e=>l.addNewTag())})])),_:1})]),q,(0,s.Lk)("div",null,[(0,s.bF)(m.D,{type:"submit",class:"text-none mb-4 right-btn",color:"#008000"},{default:(0,s.k6)((()=>[(0,s.eW)("Speichern")])),_:1}),(0,s.bF)(m.D,{class:"text-none mb-4 left-btn",color:"#757575",onClick:t[8]||(t[8]=e=>l.cancelForm())},{default:(0,s.k6)((()=>[(0,s.eW)("Abbrechen")])),_:1})])])),_:1},8,["onSubmit"])])),_:1})):(0,s.Q3)("",!0)],64)}const U="https://65c7a2b5e7c384aada6ec54f.mockapi.io/todos";var N={data(){return{todos:[],headers:[{title:"Titel",value:"title",sortable:!0},{title:"Beschreibung",value:"description",sortable:!0},{title:"Fälligkeitsdatum",value:"dueDate",sortable:!0},{title:"Priorität",value:"priority",sortable:!0},{title:"Aktionen",key:"actions"}],itemsPerPage:5,totalTodos:0,loading:!1,selectedTodo:!1,formData:{title:"",description:"",userId:0,checked:!1,priority:1,tags:[]},tagsDisplay:[],success:!1,failed:!1,deleteSuccess:!1,deleteFailed:!1,showAlert:!1,myId:null,priorityOptions:[],newTag:"",searchTerm:""}},name:"TodoPage",components:{},methods:{fetchData(){this.loading=!0,this.$axios.get(U,{params:{sortBy:"title",order:"asc"}}).then((e=>{this.todos=e.data.filter((e=>e.userId==this.myId)),this.totalTodos=Number(e.headers["x-total-count"]),this.todos.forEach((e=>{e.dueDateDisplay=this.formatDate(e.dueDate);const t=new Date(e.dueDate),a=new Date(t.getTime()-6e4*t.getTimezoneOffset());e.dueDate=a.toISOString().slice(0,16)})),this.todos.actions="",this.loading=!1})).catch((e=>{console.error("Error fetching data:",e),this.loading=!1}))},formatDate(e){if(!e)return"";const t={day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"};let a=new Date(e).toLocaleDateString("de-DE",t);return a=a.replace(/[,]/g," "),a},onPageChange(e){this.$router.push({query:{page:e}}),this.fetchData()},createTodo(){this.selectedTodo=!0},editTodo(e){this.selectedTodo=!0;let t=this.todos.find((t=>t.id===e.id));this.formData={...t};for(let a=0;a<this.formData.tags.length;a++)this.tagsDisplay.push(this.formData.tags[a])},toggleCheck(e){let t=this.todos.find((t=>t.id===e.id));this.formData={...t},this.formData.checked=!e.checked,this.updateTodo()},editPriority(e){let t=this.todos.find((t=>t.id===e.id));this.formData={...t},this.formData.priority=1===e.priority?2:1,this.updateTodo()},validateDueDate(e){const t=new Date(e),a=new Date;return t>=a},addTag(e){this.tagsDisplay.push(e),this.formData.tags.push(e)},removeTag(e){this.formData.tags.splice(e,1)},addNewTag(){""!==this.newTag.trim()&&(this.addTag(this.newTag.trim()),this.newTag="")},searchTodos(){""===this.searchTerm.trim()?this.fetchData():this.todos=this.todos.filter((e=>e.title.toLowerCase().includes(this.searchTerm.toLowerCase())||e.description.toLowerCase().includes(this.searchTerm.toLowerCase())||e.tags.some((e=>e.toLowerCase().includes(this.searchTerm.toLowerCase())))))},async deleteItem(e){const t=window.confirm("Sind Sie sicher, dass Sie dieses Todo löschen möchten?");if(t){this.resetAlert();try{let t=await this.$axios.delete(U+"/"+e.id,{params:{}});t&&(this.deleteSuccess=!0,this.showAlert=!0,setTimeout((()=>{this.showAlert=!1}),2e3),this.fetchData())}catch(a){this.deleteFailed=!0,this.showAlert=!0,setTimeout((()=>{this.showAlert=!1}),2e3)}}},cancelForm(){this.selectedTodo=!1,this.formData={title:"",description:"",checked:!1,priority:1,tags:[]},this.tagsDisplay=[],this.fetchData()},async submitForm(){this.resetAlert();const e=await this.$refs.form.validate();if(e.valid)try{let e;this.formData.userId=this.myId,e=this.formData.id?await this.$axios.put(U+"/"+this.formData.id,this.formData,{params:{}}):await this.$axios.post(U,this.formData,{params:{}}),e&&(this.success=!0,this.showAlert=!0,setTimeout((()=>{this.showAlert=!1}),2e3),this.cancelForm(),this.fetchData())}catch(t){this.failed=!0,this.showAlert=!0,setTimeout((()=>{this.showAlert=!1}),2e3)}},async updateTodo(){this.resetAlert();try{let e;this.formData.userId=this.myId,e=this.formData.id?await this.$axios.put(U+"/"+this.formData.id,this.formData,{params:{}}):await this.$axios.post(U,this.formData,{params:{}}),e&&(this.success=!0,this.showAlert=!0,setTimeout((()=>{this.showAlert=!1}),2e3),this.cancelForm(),this.fetchData())}catch(e){this.failed=!0,this.showAlert=!0,setTimeout((()=>{this.showAlert=!1}),2e3)}},resetAlert(){this.success=!1,this.failed=!1,this.deleteSuccess=!1,this.deleteFailed=!1}},watch:{"$route.query.page"(){this.fetchData()}},created(){this.myId=d.state.auth.id,this.priorityOptions=[{value:1,label:"Hoch"},{value:2,label:"Niedrig"}],this.fetchData(),console.log(d.state.auth.loggedIn)}};const z=(0,F.A)(N,[["render",Q]]);var R=z;const J=[{path:"/",redirect:"/login"},{path:"/login",component:T},{path:"/register",component:C},{path:"/todos",component:R,meta:{requiresAuth:!0}}],M=(0,u.aE)({history:(0,u.Bt)(),routes:J});M.beforeEach(((e,t,a)=>{const o=e.meta.requiresAuth;console.log(o),console.log(d.state.auth.loggedIn),o&&!d.state.auth.loggedIn?a("/login"):a()}));var K=M,H=a(6450),Y=a(249),G=a(8477);const Z=(0,s.Lk)("img",{src:"/img/icons/check-big.png",alt:"Logo",class:"nav-icon",style:{"margin-right":"10px"}},null,-1),ee=(0,s.Lk)("p",{class:"version"},"Version 0 - Basic",-1);var te={__name:"App",setup(e){let t=(0,s.EW)((()=>d.state.auth.loggedIn));function a(){d.commit("auth/logout"),K.push("/login")}return(e,o)=>{const r=(0,s.g2)("router-link"),l=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.Wv)(H.E,null,{default:(0,s.k6)((()=>[(0,i.R1)(t)?((0,s.uX)(),(0,s.Wv)(Y.z,{key:0,app:"",color:"#008000",dark:""},{default:(0,s.k6)((()=>[(0,s.bF)(p.I,null,{default:(0,s.k6)((()=>[(0,s.bF)(b.L,{align:"center",justify:"space-between"},{default:(0,s.k6)((()=>[(0,s.bF)(k.B,null,{default:(0,s.k6)((()=>[(0,s.bF)(r,{to:"/todos",class:"nav-link"},{default:(0,s.k6)((()=>[(0,s.eW)("Todos")])),_:1}),(0,s.Lk)("button",{onClick:a,class:"button button--primary button_navigation nav-link right-btn"},"Logout")])),_:1})])),_:1})])),_:1})])),_:1})):(0,s.Q3)("",!0),(0,i.R1)(t)?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(Y.z,{key:1,app:"",color:"#008000",dark:""},{default:(0,s.k6)((()=>[(0,s.bF)(p.I,null,{default:(0,s.k6)((()=>[(0,s.bF)(b.L,{align:"center",justify:"space-between"},{default:(0,s.k6)((()=>[(0,s.bF)(k.B,{class:"nav-container"},{default:(0,s.k6)((()=>[Z,(0,s.bF)(r,{to:"/login",class:"nav-link"},{default:(0,s.k6)((()=>[(0,s.eW)("Login")])),_:1}),(0,s.bF)(r,{to:"/register",class:"nav-link"},{default:(0,s.k6)((()=>[(0,s.eW)("Registrieren")])),_:1}),ee])),_:1})])),_:1})])),_:1})])),_:1})),(0,s.bF)(G.Y,null,{default:(0,s.k6)((()=>[(0,s.bF)(p.I,null,{default:(0,s.k6)((()=>[(0,s.bF)(l)])),_:1})])),_:1})])),_:1})}}};const ae=te;var oe=ae,se=a(788),ie=a.n(se),re=(a(5524),a(7768)),le=a(1371),ne=a(5741),de=a(8600),ue=a(8221),ce=a(4458);(0,ce.k)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const he=(0,re.$N)({icons:{defaultSet:"mdi",aliases:ue.z,sets:{mdi:ue.r,fa:de.fa}},components:le,directives:ne}),me=(0,o.Ef)(oe);me.use(he),me.use(K),me.use(d),me.config.globalProperties.$axios=ie(),me.mount("#app")}},t={};function a(o){var s=t[o];if(void 0!==s)return s.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,o,s,i){if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],s=e[u][1],i=e[u][2];for(var l=!0,n=0;n<o.length;n++)(!1&i||r>=i)&&Object.keys(a.O).every((function(e){return a.O[e](o[n])}))?o.splice(n--,1):(l=!1,i<r&&(r=i));if(l){e.splice(u--,1);var d=s();void 0!==d&&(t=d)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,s,i]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,i,r=o[0],l=o[1],n=o[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(s in l)a.o(l,s)&&(a.m[s]=l[s]);if(n)var u=n(a)}for(t&&t(o);d<r.length;d++)i=r[d],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},o=self["webpackChunktodo_app"]=self["webpackChunktodo_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(7405)}));o=a.O(o)})();
//# sourceMappingURL=app.eaa39b97.js.map