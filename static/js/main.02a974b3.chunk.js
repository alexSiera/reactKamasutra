(this["webpackJsonpcamasutra-project"]=this["webpackJsonpcamasutra-project"]||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var a=n(4),r=n.n(a),s=n(130),o=s.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"abed2ab8-bf99-446c-a8e5-087db1f9035f"}}),c={getUsers:function(){var e,t,n,a=arguments;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,t=a.length>1&&void 0!==a[1]?a[1]:10,s.prev=2,s.next=5,r.a.awrap(o.get("users?page=".concat(e,"&count=").concat(t)));case 5:return n=s.sent,s.abrupt("return",n.data);case 9:s.prev=9,s.t0=s.catch(2),console.log(s.t0);case 12:case"end":return s.stop()}}),null,null,[[2,9]])},subscribe:function(e){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.a.awrap(o.post("follow/".concat(e)));case 3:return t=n.sent,n.abrupt("return",t.data.resultCode);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),null,null,[[0,7]])},unSubscribe:function(e){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.a.awrap(o.delete("follow/".concat(e)));case 3:return t=n.sent,n.abrupt("return",t.data.resultCode);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),null,null,[[0,7]])}},i={getUserProfile:function(){var e,t,n=arguments;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:2,a.prev=1,a.next=4,r.a.awrap(o.get("profile/".concat(e)));case 4:return t=a.sent,a.abrupt("return",t.data);case 8:a.prev=8,a.t0=a.catch(1),console.log(a.t0);case 11:case"end":return a.stop()}}),null,null,[[1,8]])},getStatus:function(){var e,t,n=arguments;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:2,a.prev=1,a.next=4,r.a.awrap(o.get("profile/status/".concat(e)));case 4:return t=a.sent,a.abrupt("return",t.data);case 8:a.prev=8,a.t0=a.catch(1),console.log(a.t0);case 11:case"end":return a.stop()}}),null,null,[[1,8]])},updateStatus:function(e){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.a.awrap(o.put("profile/status",{status:e}));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),null,null,[[0,7]])},savePhoto:function(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,(t=new FormData).append("image",e),a.next=5,r.a.awrap(o.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}));case 5:return n=a.sent,a.abrupt("return",n);case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),null,null,[[0,9]])},saveProfileData:function(e){var t,n,a,s,c;return r.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,t=e.aboutMe,n=e.fullName,a=e.lookingForAJob,s=e.lookingForAJobDescription,i.next=4,r.a.awrap(o.put("profile",{aboutMe:t,lookingForAJob:a,lookingForAJobDescription:s,fullName:n}));case 4:return c=i.sent,i.abrupt("return",c);case 8:i.prev=8,i.t0=i.catch(0),console.log(i.t0);case 11:case"end":return i.stop()}}),null,null,[[0,8]])}},u={getAuthMe:function(){var e;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.a.awrap(o.get("auth/me"));case 3:if(0!==(e=t.sent).data.resultCode){t.next=6;break}return t.abrupt("return",e.data.data);case 6:return t.abrupt("return",{});case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),null,null,[[0,9]])},login:function(e,t){var n,a=arguments;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return n=a.length>2&&void 0!==a[2]&&a[2],s.prev=1,s.next=4,r.a.awrap(o.post("/auth/login",{email:e,password:t,rememberMe:n}));case 4:return s.abrupt("return",s.sent);case 7:s.prev=7,s.t0=s.catch(1),console.log(s.t0);case 10:case"end":return s.stop()}}),null,null,[[1,7]])},logOut:function(){var e;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.a.awrap(o.delete("/auth/login"));case 3:return e=t.sent,t.abrupt("return",e.data.resultCode);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),null,null,[[0,7]])}}},116:function(e,t,n){e.exports=n.p+"static/media/maleAvatar.88fc734d.jpg"},129:function(e,t,n){e.exports=n.p+"static/media/preloader.c4474245.svg"},13:function(e,t,n){e.exports={nav:"Navbar_nav__3cHYR",item:"Navbar_item__3Icao",active:"Navbar_active__21R_N"}},137:function(e,t,n){e.exports={formContainer:"Login_formContainer__mHwUs",formMainHeading:"Login_formMainHeading__3BUCI"}},163:function(e,t,n){e.exports=n(292)},168:function(e,t,n){},169:function(e,t,n){},252:function(e,t,n){e.exports={usersContainer:"Users_usersContainer__3zKO4",usersContainerItemRight:"Users_usersContainerItemRight__2IlGH",usersAvatarImg:"Users_usersAvatarImg__3AkTF",paginationBlock:"Users_paginationBlock__34-W-",pageNum:"Users_pageNum__2YAUS",selectedPage:"Users_selectedPage__16HiA"}},292:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(57),o=n.n(s),c=(n(168),n(169),n(34)),i=n(9),u=n(128),l=n(95),p=n(96),d=n(92),m=[{id:11351,img:"https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568252-stock-illustration-female-face-avatar-round-flat.jpg",name:"Andrew"},{id:1233,img:"https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568102-stock-illustration-female-face-avatar-round-flat.jpg",name:"Alisa"},{id:31312,img:"https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568116-stock-illustration-female-face-avatar-round-flat.jpg",name:"Milka"}],f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;arguments.length>1&&arguments[1];return e},g=n(4),v=n.n(g),h=n(27),b=n(7),E=n(11),_=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(b.a)({},e,{},a):e}))},w="users/FOLLOW",S={users:[],pageSize:5,totalUsersCount:0,currentSelectedPage:1,isFetching:!1,followingInProgress:[]},O=function(e){return{type:w,userId:e}},C=function(e){return{type:"users/UNFOLLOW",userId:e}},x=function(e){return{type:"users/SET_USERS",users:e}},y=function(e){return{type:"users/SELECT_PAGE",pageNum:e}},P=function(e){return{type:"users/SET_TOTAL-USERS_COUNT",totalUsersCount:e}},I=function(e){return{type:"users/TOGGLE_IS_FETCHING",fetching:e}},N=function(e,t){return{type:"users/TOGGLE_IS_FOLLOWING_IN_PROGRESS",userId:e,isFetching:t}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(b.a)({},e,{users:_(e.users,t.userId,"id",{followed:!0})});case"users/UNFOLLOW":return Object(b.a)({},e,{users:_(e.users,t.userId,"id",{followed:!1})});case"users/SET_USERS":return Object(b.a)({},e,{users:t.users});case"users/SELECT_PAGE":return Object(b.a)({},e,{currentSelectedPage:t.pageNum});case"users/SET_TOTAL-USERS_COUNT":return Object(b.a)({},e,{totalUsersCount:t.totalUsersCount});case"users/TOGGLE_IS_FETCHING":return!0===t.fetching?Object(b.a)({},e,{isFetching:!0}):Object(b.a)({},e,{isFetching:!1});case"users/TOGGLE_IS_FOLLOWING_IN_PROGRESS":return Object(b.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(h.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},k=function(e,t,n,a){return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e(N(t,!0)),r.next=4,v.a.awrap(n(t));case 4:0===r.sent&&e(a(t)),e(N(t,!1)),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),console.log(r.t0);case 12:case"end":return r.stop()}}),null,null,[[0,9]])},A=n(40),U={userId:null,email:null,login:null,isAuth:!1},T=function(e,t,n){return{type:"auth/SET-USER-DATA",data:{userId:e,email:t,login:n}}},D=function(){return function(e){var t,n,a,r;return v.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,v.a.awrap(E.a.getAuthMe());case 3:if((t=s.sent)&&0!==Object.keys(t).length){s.next=6;break}throw new Error("You loggin is not pass");case 6:n=t.id,a=t.email,r=t.login,e(T(n,a,r)),s.next=13;break;case 10:s.prev=10,s.t0=s.catch(0),console.log(s.t0);case 13:case"end":return s.stop()}}),null,null,[[0,10]])}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET-USER-DATA":return Object(b.a)({},e,{},t.data,{isAuth:!0});case"auth/CLEAR_USER_DATA":return Object(b.a)({},e,{userId:null,email:null,login:null,isAuth:!1});default:return e}},M=n(131),F={initialized:!1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return Object(b.a)({},e,{initialized:!0});default:return e}},B=n(132),H=Object(i.combineReducers)({dialogsPage:l.b,newsPage:p.b,profilePage:d.b,sidebarData:f,usersPage:j,auth:L,form:u.a,app:R}),z=Object(i.createStore)(H,Object(B.composeWithDevTools)(Object(i.applyMiddleware)(M.a)));window.__store__=z;var G=z,W=n(12),J=n(29),q=n(14),K=(n(252),n(93)),Y=n(39),V=n.n(Y),Q=function(e){var t=e.id,n=e.onPageChanged,a=e.currentSelectedPage;return r.a.createElement("span",{key:t,id:t,onClick:function(){return n(t)},className:t===a?"".concat(V.a.selectedPage," ").concat(V.a.pageNum):V.a.pageNum},t)},Z=function(e){for(var t=e.onPageChanged,n=e.currentSelectedPage,s=e.totalItemsCount,o=e.pageSize,c=e.portionSize,i=void 0===c?10:c,u=Math.ceil(s/o),l=[],p=1;p<u;p++)l.push(p);var d=Math.ceil(u/i),m=Object(a.useState)(1),f=Object(K.a)(m,2),g=f[0],v=f[1],h=(g-1)*i+1,b=g*i;return r.a.createElement("div",{className:V.a.paginationBlock},r.a.createElement("div",{className:V.a.paginator},g>1&&r.a.createElement("button",{onClick:function(){v(g-1)}},"PREV"),l.filter((function(e){return e>=h&&e<=b})).map((function(e){return r.a.createElement(Q,{id:e,key:e,onPageChanged:t,currentSelectedPage:n})})),d>g&&r.a.createElement("button",{onClick:function(){v(g+1)}},"NEXT")))},X=n(48),$=n.n(X),ee=n(116),te=n.n(ee),ne=function(e){var t=e.followed,n=e.id,a=e.name,s=e.status,o=e.photos,c=e.subscribe,i=e.unSubscribe,u=e.followingInProgress;return r.a.createElement("div",null,r.a.createElement("span",{className:$.a.usersContainer},r.a.createElement("span",null,r.a.createElement("div",null,a),r.a.createElement("div",null,s)),r.a.createElement("span",{className:$.a.usersContainerItemRight},r.a.createElement("div",null,"Russia"),r.a.createElement("div",null,"Rostov on"))),r.a.createElement("span",{className:$.a.usersContainerItemLeft},r.a.createElement("div",null,r.a.createElement(q.c,{to:"/profile/".concat(n)},r.a.createElement("img",{className:$.a.usersAvatarImg,src:o.small?o.small:te.a}))),r.a.createElement("div",null,t?r.a.createElement("button",{disabled:u.some((function(e){return e===n})),onClick:function(){i(n)}},"Unfollow"):r.a.createElement("button",{disabled:u.some((function(e){return e===n})),onClick:function(){c(n)}},"Follow"))))},ae=function(e){var t=e.users,n=e.subscribe,a=e.unSubscribe,s=e.totalUsersCount,o=e.pageSize,c=e.onPageChanged,i=e.currentSelectedPage,u=e.followingInProgress;return r.a.createElement("div",null,r.a.createElement(Z,{onPageChanged:c,currentSelectedPage:i,totalItemsCount:s,pageSize:o}),t.map((function(e){return r.a.createElement(ne,Object.assign({key:e.id},e,{followingInProgress:u,subscribe:n,unSubscribe:a}))})))},re=n(136),se=function(e){return e.usersPage.users},oe=function(e){return e.usersPage.pageSize},ce=function(e){return e.usersPage.totalUsersCount},ie=function(e){return e.usersPage.currentSelectedPage},ue=function(e){return e.usersPage.isFetching},le=function(e){return e.usersPage.followingInProgress},pe=(Object(re.a)(se,ue,(function(e,t){return e})),Object(W.b)((function(e){return{users:se(e),pageSize:oe(e),totalUsersCount:ce(e),currentSelectedPage:ie(e),isFetching:ue(e),followingInProgress:le(e)}}),{selectPage:y,getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return function(n){var a;return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n(y(e)),n(I(!0)),r.prev=2,r.next=5,v.a.awrap(E.c.getUsers(e,t));case 5:a=r.sent,n(I(!1)),n(x(a.items)),n(P(a.totalCount)),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(2),console.log(r.t0);case 14:case"end":return r.stop()}}),null,null,[[2,11]])}},follow:function(e){return function(t){return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:try{k(t,e,E.c.subscribe.bind(E.c),O)}catch(a){console.log(a)}case 1:case"end":return n.stop()}}))}},unfollow:function(e){return function(t){return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:try{k(t,e,E.c.unSubscribe.bind(E.c),C)}catch(a){console.log(a)}case 1:case"end":return n.stop()}}))}}})((function(e){return Object(a.useEffect)((function(){e.getUsers(e.currentSelectedPage,e.pageSize)}),[e.currentSelectedPage,e.pageSize]),r.a.createElement(r.a.Fragment,null,e.isFetching?r.a.createElement(c.a,null):null,r.a.createElement(ae,Object.assign({},e,{onPageChanged:function(t){e.getUsers(t,e.pageSize)},subscribe:function(t){e.follow(t)},unSubscribe:function(t){e.unfollow(t)}})))}))),de=n(86),me=n.n(de),fe=function(e){return r.a.createElement("header",{className:me.a.header},r.a.createElement("img",{src:"https://logomaster.ai/static/media/gallery002.936afb9d.png"}),r.a.createElement("div",{className:me.a.loginBlock},e.isAuth?r.a.createElement("span",null,e.login," ",r.a.createElement("a",{onClick:e.logOut},"Logout")):r.a.createElement(q.b,{to:"/login"},"Login")))},ge=Object(W.b)((function(e){var t=e.auth;return Object(b.a)({},t)}),{setAuthUserData:T,logOut:function(){return function(e){return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.awrap(E.a.logOut());case 3:0===t.sent&&e({type:"auth/CLEAR_USER_DATA"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),null,null,[[0,7]])}}})((function(e){return r.a.createElement(fe,e)})),ve=n(137),he=n.n(ve),be=n(87),Ee=n.n(be),_e=n(127),we=n(32),Se=n(65),Oe=Object(_e.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{className:Ee.a.formContainer},Object(we.c)("Login","login",[Se.b],we.a),Object(we.c)("Password","password",[Se.b],we.a,{type:"password"}),Object(we.c)(null,"rememberMe",null,we.a,{type:"checkbox"},"remember me"),n&&r.a.createElement("div",{className:Ee.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login"))))})),Ce=function(e){var t=e.loginMe;return e.isAuth?r.a.createElement(J.a,{to:"profile"}):r.a.createElement("div",null,r.a.createElement("h1",{className:he.a.formMainHeading},"Login"),r.a.createElement(Oe,{onSubmit:function(e){var n=e.login,a=e.password,r=e.rememberMe;t(n,a,r)}}))},xe=Object(W.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginMe:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(a){var r,s;return v.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,v.a.awrap(E.a.login(e,t,n));case 3:0===(r=o.sent).data.resultCode?a(D()):(s=r.data.messages.length>0?r.data.messages[0]:"Some error",a(Object(A.a)("login",{_error:s}))),o.next=10;break;case 7:o.prev=7,o.t0=o.catch(0),console.log(o.t0);case 10:case"end":return o.stop()}}),null,null,[[0,7]])}}})((function(e){var t=e.loginMe,n=e.isAuth;return r.a.createElement(Ce,{isAuth:n,loginMe:t})})),ye=n(13),Pe=n.n(ye),Ie=n(62),Ne=n.n(Ie),je=n(90),ke=n.n(je),Ae=function(e){var t=e.name,n=e.img,a=e.id;return r.a.createElement("li",{className:ke.a.sideBarList},r.a.createElement("img",{className:ke.a.sideBarImg,src:n,id:a}),r.a.createElement("div",null,t))},Ue=function(e){var t=e.sidebarData;return r.a.createElement("div",null,r.a.createElement("h1",{className:Ne.a.sidebarMainHeading},"Friends"),r.a.createElement("div",{className:Ne.a.sidebarItemsContainer},t.map((function(e){return r.a.createElement(Ae,{name:e.name,img:e.img,key:e.id})}))))},Te=Object(W.b)((function(e){return{sidebarData:e.sidebarData}}),null)(Ue),De=function(){return r.a.createElement("nav",{className:Pe.a.nav},r.a.createElement("div",{className:Pe.a.item},r.a.createElement(q.c,{to:"/profile",activeClassName:Pe.a.active},"Profile")),r.a.createElement("div",{className:Pe.a.item},r.a.createElement(q.c,{to:"/dialogs",activeClassName:Pe.a.active},"Messages")),r.a.createElement("div",{className:Pe.a.item},r.a.createElement(q.c,{to:"/news",activeClassName:Pe.a.active},"News ")),r.a.createElement("div",{className:Pe.a.item},r.a.createElement(q.c,{to:"/music",activeClassName:Pe.a.active},"Music")),r.a.createElement("div",{className:Pe.a.item},r.a.createElement(q.c,{to:"/settings",activeClassName:Pe.a.active},"Settings")),r.a.createElement("div",{className:Pe.a.item},r.a.createElement(q.c,{to:"/users",activeClassName:Pe.a.active},"Users")),r.a.createElement("div",{className:Pe.a.item},r.a.createElement(Te,null)))},Le=function(e){return function(t){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(c.a,null)},r.a.createElement(e,t))}},Me=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,309))})),Fe=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,311))})),Re=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,310))})),Be=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,307))})),He=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,308))})),ze=Object(i.compose)(J.f,Object(W.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){return v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.awrap(e(D()));case 3:t.sent,e({type:"app/INITIALIZED_SUCCESS"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),null,null,[[0,7]])}}}))((function(e){var t=e.initializeApp,n=e.initialized;return Object(a.useEffect)((function(){t()}),[]),n?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(ge,null),r.a.createElement(De,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(J.b,{path:"/dialogs",render:Le(Me)}),r.a.createElement(J.b,{path:"/profile/:userId?",render:Le(Re)}),r.a.createElement(J.b,{path:"/users",render:function(){return r.a.createElement(pe,null)}}),r.a.createElement(J.b,{path:"/music",render:Le(He)}),r.a.createElement(J.b,{path:"/news",render:Le(Fe)}),r.a.createElement(J.b,{path:"/settings",render:Le(Be)}),r.a.createElement(J.b,{path:"/login",render:function(){return r.a.createElement(xe,null)}}))):r.a.createElement(c.a,null)})),Ge=function(e){return r.a.createElement(q.a,null,r.a.createElement(W.a,{store:G},r.a.createElement(ze,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return d}));var a=n(91),r=n(0),s=n.n(r),o=n(63),c=n.n(o),i=n(82),u=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,o=n&&a;return s.a.createElement("div",{className:o?"".concat(c.a.formControl," ").concat(c.a.error):c.a.formControl},s.a.createElement("div",null,r),o?s.a.createElement("span",null,a):null)},l=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return s.a.createElement(u,e,s.a.createElement("textarea",Object.assign({},t,n)))},p=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return s.a.createElement(u,e,s.a.createElement("input",Object.assign({},t,n)))},d=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return s.a.createElement("div",null,s.a.createElement(i.a,Object.assign({placeholder:e,name:t,component:a,validate:n},r)),o)}},34:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(129),o=n.n(s);t.a=function(){return r.a.createElement("img",{src:o.a})}},39:function(e,t,n){e.exports={paginator:"Pagination_paginator__Wuj8v",paginationBlock:"Pagination_paginationBlock__1XwSu",pageNum:"Pagination_pageNum__27StT",selectedPage:"Pagination_selectedPage__3-sdR"}},48:function(e,t,n){e.exports={usersContainer:"User_usersContainer__3qJ_I",usersContainerItemRight:"User_usersContainerItemRight__2HfOq",usersAvatarImg:"User_usersAvatarImg__2eAwm",paginationBlock:"User_paginationBlock__23FUO",pageNum:"User_pageNum__1bJYP",selectedPage:"User_selectedPage__3jYB1"}},62:function(e,t,n){e.exports={sidebarItemsContainer:"Sidebar_sidebarItemsContainer__3qGQ8",sidebarMainHeading:"Sidebar_sidebarMainHeading__3YEkT"}},63:function(e,t,n){e.exports={formControl:"FormControls_formControl__1nSru",error:"FormControls_error__1ESZK",formSummaryError:"FormControls_formSummaryError__17O59"}},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},86:function(e,t,n){e.exports={header:"Header_header__1v0yI",loginBlock:"Header_loginBlock__3g_eP"}},87:function(e,t,n){e.exports={formContainer:"LoginForm_formContainer__3b5VO",formMainHeading:"LoginForm_formMainHeading__3mWrZ",formSummaryError:"LoginForm_formSummaryError__2dNse"}},90:function(e,t,n){e.exports={sideBarImg:"SidebarItem_sideBarImg__1MUvK",sideBarList:"SidebarItem_sideBarList__39XTP"}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"g",(function(){return f})),n.d(t,"e",(function(){return g})),n.d(t,"f",(function(){return v}));var a=n(4),r=n.n(a),s=n(27),o=n(7),c=n(11),i="profile/ADD_POST",u={posts:[{id:113,message:"Hi how are you ?",likesCount:12},{id:2123,message:"It's my first post",likesCount:11},{id:3221,message:"Blabla",likesCount:13},{id:4332,message:"Dada",likesCount:15}],profileData:null,status:""},l=function(e){return{type:i,newPost:e}},p=function(e){return{type:"profile/SET_USER_STATUS",status:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:var n={id:Math.floor(100*Math.random()),message:t.newPost,likesCount:Math.floor(100*Math.random())};return Object(o.a)({},e,{posts:[].concat(Object(s.a)(e.posts),[n])});case"profile/SET_USER_PROFILE":return Object(o.a)({},e,{profileData:t.profileData});case"profile/SET_USER_STATUS":return Object(o.a)({},e,{status:t.status});case"profile/DELETE_POST":return Object(o.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.id}))});case"profile/SAVE_PHOTO_SUCCESS":return Object(o.a)({},e,{profileData:Object(o.a)({},e.profileData,{photos:t.photos})});default:return e}};var d=function(e){return function(t){var n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,r.a.awrap(c.b.getUserProfile(e));case 3:n=a.sent,t({type:"profile/SET_USER_PROFILE",profileData:n}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0);case 10:case"end":return a.stop()}}),null,null,[[0,7]])}},m=function(e){return function(t){var n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,r.a.awrap(c.b.getStatus(e));case 3:n=a.sent,t(p(n)),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0);case 10:case"end":return a.stop()}}),null,null,[[0,7]])}},f=function(e){return function(t){return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.a.awrap(c.b.updateStatus(e));case 3:0===n.sent.data.resultCode&&t(p(e)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),null,null,[[0,7]])}},g=function(e){return function(t){var n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,r.a.awrap(c.b.savePhoto(e));case 3:0===(n=a.sent).data.resultCode&&t({type:"profile/SAVE_PHOTO_SUCCESS",photos:n.data.data.photos}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0);case 10:case"end":return a.stop()}}),null,null,[[0,7]])}},v=function(e){return function(t,n){var a;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,a=n().auth.userId,s.next=4,r.a.awrap(c.b.saveProfileData(e));case 4:0===s.sent.data.resultCode&&t(d(a)),s.next=11;break;case 8:s.prev=8,s.t0=s.catch(0),console.log(s.t0);case 11:case"end":return s.stop()}}),null,null,[[0,8]])}}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(27),r=n(7),s={messagesData:[{id:121,message:"Ok!",likesCount:12},{id:2221,message:"Sure!",likesCount:12},{id:3121,message:"Hi dos",likesCount:12},{id:4214,message:"Killer",likesCount:12}],dialogsData:[{id:1321,name:"Dimych"},{id:2311,name:"Alex"},{id:3432,name:"Anya"},{id:412,name:"Killer"}]},o=function(e){return{type:"dialogs/ADD_DIALOG",newMessage:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD_DIALOG":var n={id:Math.floor(100*Math.random()),message:t.newMessage,likesCount:Math.floor(300*Math.random())};return Object(r.a)({},e,{messagesData:[].concat(Object(a.a)(e.messagesData),[n])});default:return e}}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(27),r=n(7),s={newsData:[{id:1131,img:"https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",author:"Andrew",message:"BBC News provides trusted World and UK news as well as local and regional perspectives. ... The latest global news, sport, weather and documentaries."},{id:2456,img:"https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",author:"Nike",message:"View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com."},{id:343,img:"https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",author:"Micle",message:"Latest breaking news, including politics, crime and celebrity. Find stories, updates and expert opinion."}]},o=function(e){return{type:"news/ADD_NEWS",newNewsText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"news/ADD_NEWS":var n={id:Math.floor(100*Math.random()),img:"http://ldfl.ru/wp-content/uploads/2017/09/news.jpg",author:"Someone",message:t.newNewsText};return Object(r.a)({},e,{newsData:[].concat(Object(a.a)(e.newsData),[n])});default:return e}}}},[[163,1,2]]]);
//# sourceMappingURL=main.02a974b3.chunk.js.map