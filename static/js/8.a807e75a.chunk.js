(window.webpackJsonp=window.webpackJsonp||[]).push([[8,9],{224:function(e,a,t){"use strict";var n=t(244),l=t.n(n),s=t(1),c=t.n(s);a.a=function(e){return c.a.createElement(l.a,{checked:e.ischeked,onChange:e.willChange,onColor:"#86d3ff",onHandleColor:"#2693e6",handleDiameter:30,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)",height:20,width:48,name:e.RadioBtn,className:"react-switch crm-switch"})}},225:function(e,a,t){"use strict";t.d(a,"c",function(){return l}),t.d(a,"b",function(){return s}),t.d(a,"a",function(){return c});var n=t(6),l=function(e){return{type:n.p,entityID:e}},s=function(e){return{type:n.t,entityID:e}},c=function(e){return{type:n.a,formData:e}}},306:function(e,a,t){"use strict";t.r(a);var n=t(24),l=t(25),s=t(27),c=t(26),r=t(11),o=t(28),m=t(1),i=t.n(m),u=t(263),d=t(264),p=t(207),h=t(265),E=t(473),f=t(266),b=t(205),g=t(203),v=t(204),C=t(206),N=t(88),y=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).notes=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"crm-tab-options text-right"},i.a.createElement("i",{className:"fa fa-plus-circle"}," ")),i.a.createElement("div",{className:"crm-note-list"},t.noteList()))},t.timeline=function(){return i.a.createElement(u.a,null,i.a.createElement(d.a,{md:6},i.a.createElement("div",{className:"form-inline"},i.a.createElement("label",{className:"crm-label"}," Created: "),i.a.createElement("span",null," ",t.props.profile.dateCreated," "))),i.a.createElement(d.a,{md:6},i.a.createElement("div",{className:"form-inline"},i.a.createElement("label",{className:"crm-label"}," Last updated: "),i.a.createElement("span",null,"  ",t.props.profile.dateUpdated," "))))},t.noteList=function(){var e=t.props.profile.note;return e?i.a.createElement("p",null,e):i.a.createElement("span",{className:"crm-empty-label"},"Empty...")},t.toggle=function(e,a){var n=t.state.activeTab.slice();n[e]=a,t.setState({activeTab:n})},t.tabPane=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{tabId:"1"},t.timeline()),i.a.createElement(p.a,{tabId:"2"},t.notes()))},t.state={activeTab:new Array(2).fill("1")},t.toggle=t.toggle.bind(Object(r.a)(t)),t}return Object(o.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.props.profile;console.log(this.props);var t=a.firstName+" "+a.lastName;return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"fa fa-arrow-left",onClick:function(){return e.props.isComponent(void 0)}}),i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(u.a,null,i.a.createElement(d.a,{xs:"3",sm:"3"},i.a.createElement(h.a,null,i.a.createElement(E.a,null,i.a.createElement("span",{className:"fa fa-pencil crm-profule-update"}),i.a.createElement("div",{className:"crm-profile-pic"},i.a.createElement(N.a,{name:t,round:"90px",size:125}),i.a.createElement("div",{className:"crm-container-topName "},i.a.createElement("h2",null," ",t," ")),i.a.createElement("span",null," ",a.position," "),i.a.createElement("br",null),i.a.createElement("h4",null," ",a.company," ")),i.a.createElement("hr",null),i.a.createElement("div",{className:"crm-profile-status red"},i.a.createElement("span",{className:"crm-label"}," Lead Status: ")," ",a.leadStatus)),i.a.createElement(f.a,null,i.a.createElement("div",{className:"form-inline"},i.a.createElement("span",{className:"crm-label"},"Owner:"),a.createdBy),i.a.createElement("hr",null),i.a.createElement("div",{className:"form-group"},i.a.createElement("h4",null,"Tags"),i.a.createElement("div",{className:"crm-tag-list"},i.a.createElement("span",{className:"fa fa-plus-circle crm-label"}," tag "))),i.a.createElement("h4",null,"Contact Information"),i.a.createElement(u.a,null,i.a.createElement(d.a,{md:6},i.a.createElement("div",{className:"form-group"},i.a.createElement("span",{className:"crm-label"},"Business Phone #:"),i.a.createElement("br",null),i.a.createElement("label",null," ",i.a.createElement("a",{href:"tel:".concat(a.businessPhone)},"  ",a.businessPhone," ")," "))),i.a.createElement(d.a,{md:6},i.a.createElement("div",{className:"form-group"},i.a.createElement("span",{className:"crm-label"},"Personal Phone #:"),i.a.createElement("br",null),i.a.createElement("label",null," ",i.a.createElement("a",{href:"tel:".concat(a.mobilePhone)},"  ",a.mobilePhone," ")," ")))),i.a.createElement("div",{className:"form-group"},i.a.createElement("span",{className:"crm-label"},"Business Email"),i.a.createElement("br",null),i.a.createElement("label",null," ",i.a.createElement("a",{href:"mailto:"+a.personalEmail}," ",a.personalEmail," "))),i.a.createElement("div",{className:"form-group"},i.a.createElement("span",{className:"crm-label"},"Personal Email"),i.a.createElement("br",null),i.a.createElement("label",null," ",i.a.createElement("a",{href:"mailto:"+a.businessEmail}," ",a.businessEmail," "))),i.a.createElement("h4",null,"Address"),i.a.createElement("div",{className:"form-group"},i.a.createElement("p",null,"  ",a.homeAddress," "))))),i.a.createElement(d.a,{xs:"9",sm:"9"},i.a.createElement(b.a,{tabs:!0},i.a.createElement(g.a,null,i.a.createElement(v.a,{active:"1"===this.state.activeTab[0],onClick:function(){e.toggle(0,"1")}},"Timeline")),i.a.createElement(g.a,null,i.a.createElement(v.a,{active:"2"===this.state.activeTab[0],onClick:function(){e.toggle(0,"2")}},"Notes"))),i.a.createElement(C.a,{activeTab:this.state.activeTab[0]},this.tabPane())))))}}]),a}(i.a.Component);a.default=y},307:function(e,a,t){"use strict";t.r(a);var n=t(24),l=t(25),s=t(27),c=t(26),r=t(11),o=t(28),m=t(1),i=t.n(m),u=t(262),d=t(263),p=t(264),h=t(265),E=t(473),f=t(128),b=t(266),g=t(497),v=t(493),C=t(494),N=t(85),y=t(224),k=t(491),w=t(492),j=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).onTextChange=function(e){var a=e.target.value,n=t.setNames(t.props.list);console.log(t.props.list[0]);var l=[];if(a.length>0){var s=new RegExp("".concat(a),"i");l=n.sort().filter(function(e){return s.test(e)})}t.setState(function(){return{suggestions:l,text:a}}),t.props.value(a)},t.items=t.props.list,t.state={suggestions:[],text:""},t}return Object(o.a)(a,e),Object(l.a)(a,[{key:"setNames",value:function(e){var a=[];return e.map(function(e){a.push(e.name)}),a}},{key:"suggestionSelectedValue",value:function(e,a){this.setState(function(){return{text:e,suggestions:[]}}),this.props.value(e),this.props.companyId(a)}},{key:"renderSuggestions",value:function(){var e=this,a=this.state.suggestions;return 0===a.length?null:(console.log(a),i.a.createElement("ul",{className:"crm-linked-style"},a.map(function(a,t){return i.a.createElement("li",{className:"crm-linked-list",key:t,onClick:function(){return e.suggestionSelectedValue(a,a)}}," ",a," ")})))}},{key:"render",value:function(){var e=this.state.text;return i.a.createElement("div",null,i.a.createElement("input",{type:"text",className:"form-control",placeholder:this.props.placeholder,onChange:this.onTextChange,value:e||""}),this.renderSuggestions())}}]),a}(i.a.Component),O=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).handleSubmit=function(e){e.preventDefault(),t.props.setform(t.state)},t.state={firstName:"",lastName:"",position:"",businessEmail:"",personalEmail:"",businessPhone:"",mobilePhone:"",skype:"",whatsApp:"",homeAddress:"",note:"",isActive:!0,createdBy:0,crmContactCompanies:[],crmContactCompanyProjects:[]},t.leads={none:!1,attemptedContact:!1,contactFuture:!1,contacted:!1,junkedLead:!1,lostLead:!1},t.source={zoomInfo:!1,google:!1,likedIn:!1},t.handleChange=t.handleChange.bind(Object(r.a)(t)),t.onCompanChange=t.onCompanChange.bind(Object(r.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(r.a)(t)),t}return Object(o.a)(a,e),Object(l.a)(a,[{key:"handleChange",value:function(e){var a=e.target.name;this.setState(Object(N.a)({},a,e.target.value))}},{key:"handleRadioStates",value:function(e){this.setState(e)}},{key:"onCompanChange",value:function(e){this.setState({company:e})}},{key:"handleCompanyId",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this,a=this.state.firstName.toLowerCase().replace(/(?<= )[^\s]|^./g,function(e){return e.toUpperCase()}),t=this.state.lastName.toLowerCase().replace(/(?<= )[^\s]|^./g,function(e){return e.toUpperCase()}),n=this.state.homeAddress.toLowerCase().replace(/(?<= )[^\s]|^./g,function(e){return e.toUpperCase()}),l=this.state.position.toUpperCase();return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement(d.a,null,i.a.createElement(p.a,{xs:"6"},i.a.createElement(k.a,null,i.a.createElement(w.a,{type:"text",name:"firstName",placeholder:"First Name",value:a,onChange:this.handleChange}))),i.a.createElement(p.a,{xs:"6"},i.a.createElement(k.a,null,i.a.createElement(w.a,{type:"text",name:"lastName",placeholder:"Last Name",value:t,onChange:this.handleChange}))),i.a.createElement(p.a,{xs:"12"},i.a.createElement(k.a,null,i.a.createElement(w.a,{type:"text",name:"position",placeholder:"Position",value:l,onChange:this.handleChange}))),i.a.createElement(p.a,{xs:"6"},i.a.createElement(k.a,null,i.a.createElement(w.a,{type:"email",name:"businessEmail",placeholder:"Business Email",value:this.state.businessEmail,onChange:this.handleChange}))),i.a.createElement(p.a,{xs:"6"},i.a.createElement(k.a,null,i.a.createElement(w.a,{type:"email",name:"personalEmail",placeholder:"Personal Email",value:this.state.personalEmail,onChange:this.handleChange}))),i.a.createElement(p.a,{xs:"6"},i.a.createElement(k.a,null,i.a.createElement(w.a,{type:"number",name:"businessPhone",placeholder:"Business Phone",value:this.state.businessPhone,onChange:this.handleChange}))),i.a.createElement(p.a,{xs:"6"},i.a.createElement(k.a,null,i.a.createElement(w.a,{type:"number",name:"mobilePhone",placeholder:"Mobile Phone",value:this.state.mobilePhone,onChange:this.handleChange}))),i.a.createElement(p.a,{xs:"6"},i.a.createElement(k.a,null,i.a.createElement(w.a,{type:"text",name:"skype",placeholder:"Skype",value:this.state.skype,onChange:this.handleChange}))),i.a.createElement(p.a,{xs:"6"},i.a.createElement(k.a,null,i.a.createElement(w.a,{type:"text",name:"whatsApp",placeholder:"What's App",value:this.state.whatsApp,onChange:this.handleChange}))),i.a.createElement(p.a,{xs:"12"},i.a.createElement(k.a,null,i.a.createElement(j,{value:this.onCompanChange,companyId:this.handleCompanyId,placeholder:"Company",list:this.props.list}))),i.a.createElement(p.a,{xs:"12"},i.a.createElement(k.a,null,i.a.createElement(w.a,{type:"text",name:"homeAddress",placeholder:"Home Address",value:n,onChange:this.handleChange})))),i.a.createElement(d.a,null,i.a.createElement(p.a,{xs:12},i.a.createElement("div",{className:"form-group"},i.a.createElement("h4",null," Lead Status "),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement(y.a,{ischeked:this.leads.none,willChange:function(a){e.handleRadioStates({none:!e.leads.none})}}),i.a.createElement("span",{className:"crm-label"}," None ")),i.a.createElement("div",{className:"form-group"},i.a.createElement(y.a,{ischeked:this.leads.attemptedContact,willChange:function(a){e.handleRadioStates({attemptedContact:!e.leads.attemptedContact})}}),i.a.createElement("span",{className:"crm-label"}," Attempted Contact ")),i.a.createElement("div",{className:"form-group"},i.a.createElement(y.a,{ischeked:this.leads.contactFuture,willChange:function(a){e.handleRadioStates({contactFuture:!e.leads.contactFuture})}}),i.a.createElement("span",{className:"crm-label"}," Contact in the Future "))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement(y.a,{ischeked:this.leads.contacted,willChange:function(a){e.handleRadioStates({contacted:!e.leads.contacted})}}),i.a.createElement("span",{className:"crm-label"}," Contacted ")),i.a.createElement("div",{className:"form-group"},i.a.createElement(y.a,{ischeked:this.leads.junkedLead,willChange:function(a){e.handleRadioStates({junkedLead:!e.leads.junkedLead})}}),i.a.createElement("span",{className:"crm-label"}," Junked Lead ")),i.a.createElement("div",{className:"form-group"},i.a.createElement(y.a,{ischeked:this.leads.lostLead||!1,willChange:function(a){e.handleRadioStates({lostLead:!e.leads.lostLead})}}),i.a.createElement("span",null,"Lost Lead "))))))),i.a.createElement(d.a,null,i.a.createElement(p.a,{xs:12},i.a.createElement("div",{className:"form-group"},i.a.createElement("h4",null," Lead Source "),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-4"},i.a.createElement("div",{className:"form-group"},i.a.createElement(y.a,{ischeked:this.source.zoomInfo,willChange:function(a){e.handleRadioStates({zoomInfo:!e.source.zoomInfo})}}),i.a.createElement("span",{className:"crm-label"}," Zoominfo "))),i.a.createElement("div",{className:"col-md-4"},i.a.createElement("div",{className:"form-group"},i.a.createElement(y.a,{ischeked:this.source.google,willChange:function(a){e.handleRadioStates({google:!e.source.google})}}),i.a.createElement("span",{className:"crm-label"}," Google "))),i.a.createElement("div",{className:"col-md-4"},i.a.createElement("div",{className:"form-group"},i.a.createElement(y.a,{ischeked:this.source.likedIn,willChange:function(a){e.handleRadioStates({likedIn:!e.source.likedIn})}}),i.a.createElement("span",{className:"crm-label"}," Linked In "))))))),i.a.createElement(d.a,null,i.a.createElement(p.a,{xs:"12"},i.a.createElement(k.a,null,i.a.createElement(w.a,Object(N.a)({type:"textarea",name:"",placeholder:"Add a note",value:this.state.note,onChange:this.handleChange},"name","note"))))),i.a.createElement(d.a,null,i.a.createElement(p.a,{md:12,className:"text-right"},i.a.createElement(f.a,{color:"primary",className:"crm-btn"}," Submit "),i.a.createElement(f.a,{color:"secondary",className:"crm-btn",onClick:this.props.onAddContact}," Cancel ")))))}}]),a}(i.a.Component),x=t(225),S=t(40),L=(t(245),function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).list={columns:[{label:"Name",field:"contactName",sort:"asc",width:150},{label:"Address",field:"address",sort:"asc",width:270},{label:"Business Email",field:"businessEmail",sort:"asc",width:100},{label:"Personal Email",field:"personalEmail",sort:"asc",width:150},{label:"Mobile Phone",field:"mobilePhone",sort:"asc",width:100},{label:"Business Phone",field:"BusinessPhone",sort:"asc",width:100},{label:"Lead Status",field:"status",sort:"asc",width:100},{label:"",field:"action",sort:"asc",width:100}]},t.state={dropdownOpen:new Array(19).fill(!1),isModalActive:!1,isInfo:!1},t.toggle=t.toggle.bind(Object(r.a)(t)),t.modalToggle=t.modalToggle.bind(Object(r.a)(t)),t.onSubmitContact=t.onSubmitContact.bind(Object(r.a)(t)),t}return Object(o.a)(a,e),Object(l.a)(a,[{key:"toggle",value:function(e){var a=this.state.dropdownOpen.map(function(a,t){return t===e&&!a});this.setState({dropdownOpen:a})}},{key:"modalToggle",value:function(e){this.setState({modal:!this.state.modal}),this.setState({isModalActive:!this.state.isModalActive}),this.state.isModalActive||this.props.getCopanyNameList(1)}},{key:"rowProfile",value:function(e){console.log(e);return i.a.createElement("div",{className:"crm_profile_modal",style:{position:"absolute"}},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("i",{className:"fa fa-user"}),i.a.createElement("label",null," info.contact_name ")),i.a.createElement("div",{className:"form-group"},i.a.createElement("i",{className:"fa fa-mail"}),i.a.createElement("label",null," info.email")),i.a.createElement("div",{className:"form-group"},i.a.createElement("i",{className:"fa fa-map"}),i.a.createElement("label",null," info.address ")),i.a.createElement("div",{className:"form-group"},i.a.createElement("i",{className:"fa fa-phone"}),i.a.createElement("label",null," info.number ")),i.a.createElement("div",{className:"form-group"},i.a.createElement("i",{className:"fa fa-plus"}),i.a.createElement("label",null," Tag "))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("label",null,"Admin"))))}},{key:"onSubmitContact",value:function(e){this.props.addNewContact(e),this.setState({modal:!this.state.modal})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(d.a,null,i.a.createElement(p.a,{xs:"12",sm:"12"},i.a.createElement(h.a,null,i.a.createElement(E.a,null,i.a.createElement("strong",null," Contact List "),i.a.createElement("small",null," "),i.a.createElement("div",{className:"crm-contact-options"},i.a.createElement("div",{className:"form-inline"},i.a.createElement(f.a,{size:"md",className:"btn-brand mr-1 mb-1",onClick:this.modalToggle},i.a.createElement("i",{className:" fa fa-plus"}),i.a.createElement("span",null," Add Contacts ")),i.a.createElement(f.a,{outline:!0,className:"mr-1 mb-1",color:"primary"},"Export")))),i.a.createElement(b.a,null,i.a.createElement(u.a,{striped:!0,bordered:!0,hover:!0,data:function(){var a=e.props.data||[],t={columns:e.list.columns,rows:[]},n=[];return a.length>=1&&a.map(function(a,l){n={contactName:i.a.createElement("div",{className:"crm-profile-link",onClick:function(){return e.props.isComponent(a.contactId)}}," ",a.firstName,"  ",a.lastName,"  "),address:a.homeAddress,businessEmail:a.businessEmail,personalEmail:a.personalEmail,mobilePhone:i.a.createElement("a",{href:"tel:"+a.mobilePhone}," ",a.mobilePhone," "),BusinessPhone:i.a.createElement("a",{href:"tel:"+a.businessPhone}," ",a.businessPhone," "),status:a.leadStatus,action:i.a.createElement("div",{className:"form-inline "},i.a.createElement("i",{className:"fas fa-pencil-alt crm_btn_table"}),i.a.createElement("i",{className:"fas fa-trash-alt crm_btn_table"}))},t.rows.push(n)}),t}()||[]}))))),i.a.createElement(g.a,{isOpen:this.state.modal,toggle:this.modalToggle,className:"modal-md "+this.props.className},i.a.createElement(v.a,{toggle:this.modalToggle}," ",i.a.createElement("i",{className:"fa fa-phone"}," ")," New Contact "),i.a.createElement(C.a,null,i.a.createElement(O,{list:this.props.nameList,setform:this.onSubmitContact,onAddContact:this.modalToggle}))))}}]),a}(i.a.Component));a.default=Object(S.b)(function(e){return{nameList:e.entityReducer.list}},function(e){return{getCopanyNameList:function(a){return e(Object(x.b)(a))},addNewContact:function(a){return e(Object(x.a)(a))}}})(L)},495:function(e,a,t){"use strict";t.r(a);var n=t(24),l=t(25),s=t(27),c=t(26),r=t(11),o=t(28),m=t(1),i=t.n(m),u=t(40),d=t(225),p=t(307),h=t(306),E=t(131),f=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).updateComponentToLoad=function(e){t.setState({activeComponent:!t.state.activeComponent}),void 0!==e&&t.getProfile(e)},t.getProfile=function(e){console.log(e);var a=E.propEq("contactId",e),n=E.filter(a)(t.props.data);t.setState({setProfileData:n})},t.componentToLoad=function(){return t.state.activeComponent?i.a.createElement(p.default,{isComponent:t.updateComponentToLoad,data:t.props.data}):i.a.createElement(h.default,{isComponent:t.updateComponentToLoad,profile:t.state.setProfileData[0]})},t.state={activeComponent:!0,setProfileData:[]},t.updateComponentToLoad=t.updateComponentToLoad.bind(Object(r.a)(t)),t}return Object(o.a)(a,e),Object(l.a)(a,[{key:"componentWillMount",value:function(){this.props.getContactList()}},{key:"render",value:function(){return i.a.createElement("div",null,this.componentToLoad())}}]),a}(i.a.Component);a.default=Object(u.b)(function(e){return console.log(e),{data:e.entityReducer.data}},function(e){return{getCopanyNameList:function(a){return e(Object(d.b)(a))},getContactList:function(a){return e(Object(d.c)(1))}}})(f)}}]);
//# sourceMappingURL=8.a807e75a.chunk.js.map