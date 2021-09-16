(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={filter:"Filter_filter__2k_cC",filterName:"Filter_filterName__28_sP",input:"Filter_input__1MXre"}},11:function(t,e,n){t.exports={contactsItem:"ContactList_contactsItem__25AbN",contactsList:"ContactList_contactsList__CeEZf",listButton:"ContactList_listButton__5JM11"}},2:function(t,e,n){t.exports={form:"ContactForm_form__149ym",formNameNumber:"ContactForm_formNameNumber__G_HKo",input:"ContactForm_input__2QpkV",formButton:"ContactForm_formButton__2dFts"}},23:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a,c,r,i,o=n(0),s=n.n(o),l=n(15),u=n.n(l),m=(n(23),n(13)),d=n(5),b=n(6),h=n(9),j=n(8),p=n(29),f=n(14),x=n(7),O=n(2),g=n.n(O),C=n(1),v=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(x.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.formSubmitHandler(t.state),t.resetState()},t.resetState=function(){t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("form",{className:g.a.form,onSubmit:this.handleSubmit,children:[Object(C.jsxs)("label",{id:this.name,children:[Object(C.jsx)("p",{className:g.a.formNameNumber,children:"Name"}),Object(C.jsx)("input",{className:g.a.input,value:this.state.name,onChange:this.handleChange,type:"text",name:"name",placeholder:"add name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(C.jsxs)("label",{id:this.name,children:[Object(C.jsx)("p",{className:g.a.formNameNumber,children:"Number"}),Object(C.jsx)("input",{className:g.a.input,value:this.state.number,onChange:this.handleChange,type:"tel",name:"number",placeholder:"add number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(C.jsx)("button",{className:g.a.formButton,type:"submit",children:"Add contact"})]})}}]),n}(o.Component),_=v,N=n(10),S=n.n(N),k=function(t){var e=t.value,n=t.onChange;return Object(C.jsxs)("label",{htmlFor:e.id,className:S.a.filter,children:[Object(C.jsx)("p",{className:S.a.filterName,children:"Find contacts by name"}),Object(C.jsx)("input",{id:Object(p.a)(),className:S.a.input,value:e,onChange:n,type:"text",name:"filter",placeholder:"find"})]})},y=n(11),w=n.n(y),F=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(C.jsx)("ul",{className:w.a.contactsList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(C.jsxs)("li",{className:w.a.contactsItem,children:[Object(C.jsxs)("span",{children:[a,":"]}),Object(C.jsx)("span",{children:c}),Object(C.jsx)("span",{children:Object(C.jsx)("button",{className:w.a.listButton,type:"button",onClick:function(){return n(e)},children:"delete"})})]},e)}))})},A=n(3),L=n(4),B=L.a.div(a||(a=Object(A.a)(["\n  background: rgb(199 177 177);\n  border-radius: 5px;\n"]))),H=L.a.h2(c||(c=Object(A.a)(["\n  margin-top: 10px;\n  margin-bottom: 10px;\n  text-align: center;\n"]))),I=function(t){var e=t.title,n=t.children;return Object(C.jsxs)(B,{children:[e&&Object(C.jsx)(H,{children:e}),n]})},J=L.a.div(r||(r=Object(A.a)(["\n  display: block;\n\n  max-width: 400px;\n  min-width: 290px;\n\n  margin: 0 auto;\n\n  padding: 10px;\n\n  border: 1px solid black;\n  border-radius: 5px;\n\n  box-shadow: 3px 2px 10px 2px black;\n  background: rgb(217 196 196);\n"]))),D=L.a.h1(i||(i=Object(A.a)(["\n  text-align: center;\n"]))),M=function(t){var e=t.children,n=t.title;return Object(C.jsxs)(J,{children:[Object(C.jsx)(D,{children:n}),e]})},z=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.formSubmitHandler=function(e){var n={name:e.name,number:e.number,id:Object(p.a)()};t.setState((function(t){var a=t.contacts.find((function(t){return t.name.toLowerCase().includes(e.name.toLowerCase())}));return a&&a.name.length===e.name.length?(f.b.error("".concat(e.name," is already in contacts")),Object(m.a)(t.contacts)):{contacts:[n].concat(Object(m.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.getVisibleContacts();return Object(C.jsxs)(M,{title:"Phonebook",children:[Object(C.jsx)(I,{children:Object(C.jsx)(_,{formSubmitHandler:this.formSubmitHandler})}),Object(C.jsxs)(I,{title:"Contacts",children:[Object(C.jsx)(k,{onChange:this.changeFilter,value:this.state.filter}),Object(C.jsx)(F,{contacts:t,onDeleteContact:this.deleteContact})]}),Object(C.jsx)(f.a,{position:"top-right",reverseOrder:!1})]})}}]),n}(o.Component),Z=z;u.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(Z,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.0eb3c1c9.chunk.js.map