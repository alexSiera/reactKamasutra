(this["webpackJsonpsocial-network-project"]=this["webpackJsonpsocial-network-project"]||[]).push([[5],{299:function(e,t,n){},300:function(e,t,n){e.exports={oneNewListItem:"OneNew_oneNewListItem__172pT",oneNewImg:"OneNew_oneNewImg__1ky8X"}},301:function(e,t,n){},311:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(100),m=(n(299),n(300)),s=n.n(m),l=function(e){var t=e.id,n=e.img,a=e.author,c=e.message;return r.a.createElement("li",{id:t,className:s.a.oneNewListItem},r.a.createElement("h1",null,"AuthorName: ".concat(a)),r.a.createElement("p",null,c),r.a.createElement("img",{className:s.a.oneNewImg,src:n}))},o=n(301),u=n.n(o),i=n(86),w=n(131),N=n(60),d=n(24),E=Object(N.a)(10),f=Object(w.a)({form:"newsForm"})((function(e){var t=e.handleSubmit;return r.a.createElement("form",{onSubmit:t},r.a.createElement(i.a,{component:d.b,name:"newNewsText",className:u.a.textArea,validate:[N.b,E]}),r.a.createElement("button",null,"Add news"))})),g=function(e){var t=e.newsPage,n=e.addNews,a=t.newsData;return r.a.createElement("div",null,r.a.createElement("ul",null,a.map((function(e){var t=e.id,n=e.img,c=e.author,m=e.message;return r.a.createElement(l,{key:t,img:n,author:c,newsData:a,message:m})})),r.a.createElement("div",null,r.a.createElement("h4",null,"Please Enter New News"),r.a.createElement(f,{onSubmit:function(e){var t=e.newNewsText;n(t)}}))))},b=n(13);t.default=Object(b.b)((function(e){return{newsPage:e.newsPage}}),{addNews:c.a.addNewsAC})((function(e){return r.a.createElement(g,e)}))}}]);
//# sourceMappingURL=5.f7376c2c.chunk.js.map