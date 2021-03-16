(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{12:function(e,t,s){},13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s(7),r=s.n(c),i=(s(12),s(13),s(2)),o=s(6),a=s(17),u=function(e,t){switch(t.type){case"ADD_LESSON":return[].concat(Object(o.a)(e),[{title:t.lesson.title,professor:t.lesson.professor,id:Object(a.a)()}]);case"REMOVE_LESSON":return e.filter((function(e){return e.id!==t.id}));case"EDIT_LESSON":var s=Object(o.a)(e);return s.map((function(e){e.id===t.id&&(e.title=t.title,e.professor=t.professor)})),s;default:return e}},l=s(0),j=Object(n.createContext)(),b=function(e){var t=Object(n.useReducer)(u,[],(function(){var e=localStorage.getItem("lessons");return e?JSON.parse(e):[]})),s=Object(i.a)(t,2),c=s[0],r=s[1];return Object(n.useEffect)((function(){localStorage.setItem("lessons",JSON.stringify(c))}),[c]),Object(l.jsx)(j.Provider,{value:{lessons:c,dispatch:r},children:e.children})},O=function(e){var t=e.lesson,s=Object(n.useContext)(j).dispatch,c=Object(n.useState)(!1),r=Object(i.a)(c,2),o=r[0],a=r[1],u=Object(n.useState)(t.title),b=Object(i.a)(u,2),O=b[0],d=b[1],p=Object(n.useState)(t.professor),f=Object(i.a)(p,2),x=f[0],h=f[1];return o?Object(l.jsx)("li",{className:"edit-lesson",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s({type:"EDIT_LESSON",id:t.id,title:O,professor:x}),a(!1)},children:[Object(l.jsx)("input",{type:"text",value:O,onChange:function(e){return d(e.target.value)}}),Object(l.jsx)("input",{type:"text",value:x,onChange:function(e){return h(e.target.value)}}),Object(l.jsx)("input",{type:"submit"})]})}):Object(l.jsxs)("li",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"title",children:t.title}),Object(l.jsx)("div",{className:"professor",children:t.professor})]}),Object(l.jsxs)("div",{className:"button-box",children:[Object(l.jsx)("button",{className:"edit",onClick:function(){return a(!0)},children:"Edit"}),Object(l.jsx)("button",{className:"delete",onClick:function(){return s({type:"REMOVE_LESSON",id:t.id})},children:"X"})]})]})},d=function(){var e=Object(n.useContext)(j).lessons;return e.length?Object(l.jsx)("div",{className:"lesson-list",children:Object(l.jsx)("ul",{children:e.map((function(e){return Object(l.jsx)(O,{lesson:e},e.id)}))})}):Object(l.jsx)("div",{className:"empty",children:"\u039e\u03b5\u03ba\u03af\u03bd\u03b1 \u03bd\u03b1 \u03b2\u03ac\u03b6\u03b5\u03b9\u03c2 \u03bc\u03b1\u03b8\u03ae\u03bc\u03b1\u03c4\u03b1 \u03c3\u03c4\u03b7 \u03b4\u03ae\u03bb\u03c9\u03c3\u03ae \u03c3\u03bf\u03c5."})},p=function(){var e=Object(n.useContext)(j).lessons;return Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)("h2",{children:"\u0394\u03ae\u03bb\u03c9\u03c3\u03b7 \u039c\u03b1\u03b8\u03b7\u03bc\u03ac\u03c4\u03c9\u03bd"}),Object(l.jsxs)("p",{children:["\u0388\u03c7\u03b5\u03b9\u03c2 ",e.length," \u03bc\u03b1\u03b8\u03ae\u03bc\u03b1\u03c4\u03b1 \u03c3\u03c4\u03b7 \u03b4\u03ae\u03bb\u03c9\u03c3\u03ae \u03c3\u03bf\u03c5."]})]})},f=function(){var e=Object(n.useContext)(j).dispatch,t=Object(n.useState)(""),s=Object(i.a)(t,2),c=s[0],r=s[1],o=Object(n.useState)(""),a=Object(i.a)(o,2),u=a[0],b=a[1];return Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({type:"ADD_LESSON",lesson:{title:c,professor:u}}),r(""),b("")},children:[Object(l.jsx)("input",{type:"text",placeholder:"Lesson...",value:c,onChange:function(e){return r(e.target.value)},required:!0}),Object(l.jsx)("input",{type:"text",placeholder:"Professor...",value:u,onChange:function(e){return b(e.target.value)},required:!0}),Object(l.jsx)("input",{type:"submit",value:"Add new lesson"})]})},x=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(b,{children:[Object(l.jsx)(p,{}),Object(l.jsx)(d,{}),Object(l.jsx)(f,{})]})})};r.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.de47a118.chunk.js.map