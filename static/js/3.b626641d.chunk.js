(this["webpackJsonpcamasutra-project"]=this["webpackJsonpcamasutra-project"]||[]).push([[3],{295:function(e,t,a){e.exports={descriptionBlock:"ProfileData_descriptionBlock__3yskL",imgMain:"ProfileData_imgMain__1MR6q",profileInfoInput:"ProfileData_profileInfoInput__2rINX",aboutMe:"ProfileData_aboutMe__13OZj",contactsLists:"ProfileData_contactsLists__3tXCf",contactsHeading:"ProfileData_contactsHeading__3roC_",contactsData:"ProfileData_contactsData__2NQVb",formSubmitBtn:"ProfileData_formSubmitBtn__2-c6l",profileDataForm:"ProfileData_profileDataForm__2Q3iv",formDataItems:"ProfileData_formDataItems__1HgwS",formDataItemsInput:"ProfileData_formDataItemsInput__XmnVs"}},302:function(e,t,a){},303:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__gOOQY",imgMain:"ProfileInfo_imgMain__19Z2q",profileInfoInput:"ProfileInfo_profileInfoInput__3YmSw",aboutMe:"ProfileInfo_aboutMe__1JWq9",profileAvatar:"ProfileInfo_profileAvatar__3f9ob",photosInputContainer:"ProfileInfo_photosInputContainer__39sJ5",photosInput:"ProfileInfo_photosInput__2YQVh"}},304:function(e,t,a){e.exports={descriptionBlock:"ProfileStatus_descriptionBlock__1debn",profileStatusBlock:"ProfileStatus_profileStatusBlock__35DzV",imgMain:"ProfileStatus_imgMain__31jQr",profileInfoInput:"ProfileStatus_profileInfoInput__3_b7c",aboutMe:"ProfileStatus_aboutMe__3jBhs"}},305:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__1cAL4",postsBlockText:"MyPosts_postsBlockText__3e_AC"}},306:function(e,t,a){e.exports={item:"Post_item__2yzXq"}},312:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=(a(302),a(94)),r=a(303),s=a.n(r),c=a(35),i=a(304),u=a.n(i),m=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(e.status),i=Object(l.a)(c,2),m=i[0],f=i[1];Object(n.useEffect)((function(){f(e.status)}),[e.status]);var p=function(){e.isOwner&&(r?(s(!1),e.updateUserStatus(m)):s(!0))};return o.a.createElement("div",{className:u.a.profileStatusBlock},!r&&o.a.createElement("div",null,o.a.createElement("span",{onDoubleClick:p},o.a.createElement("b",null,"Status:")," ",e.status)),r&&o.a.createElement("div",{className:u.a.profileInfoInput},o.a.createElement("input",{autoFocus:!0,onChange:function(e){f(e.target.value)},onBlur:p,value:m})))},f=a(295),p=a.n(f),b=function(e){var t=e.contactTitle,a=e.contactValue;return o.a.createElement("div",{className:p.a.contactsData},o.a.createElement("b",null,t),": ",a)},E=function(e){var t=e.profileData,a=e.isOwner,n=e.goToEditMode;return o.a.createElement("div",{className:p.a.descriptionBlock},o.a.createElement("h2",null,"Profile Info"),a&&o.a.createElement("div",null,o.a.createElement("button",{onClick:n},"Edit information")),o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("b",null,"Full name:")," ",t.fullName?t.fullName:"No info"),o.a.createElement("div",{className:p.a.aboutMe},o.a.createElement("b",null,"About me:")," ",t.aboutMe?t.aboutMe:"No info"),t.lookingForAJob&&o.a.createElement("div",{className:p.a.aboutMe},o.a.createElement("div",{className:p.a.aboutMe},o.a.createElement("b",null,"Job status:")," Yes I'am looking for a job."),o.a.createElement("b",null,"My professional skills:"),t.lookingForAJobDescription?t.lookingForAJobDescription:"No one"),!t.lookingForAJob&&o.a.createElement("div",{className:p.a.aboutMe},o.a.createElement("b",null,"Job status:")," I'am not looking for a job right now."),o.a.createElement("div",null,o.a.createElement("b",null,"Contacts: ",Object.keys(t.contacts).map((function(e){return o.a.createElement(b,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))))},d=a(33),_=a(129),v=a(60),I=a.n(v),g=Object(_.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.error,n=e.profileData;return console.log(a),o.a.createElement("form",{className:p.a.profileDataForm,onSubmit:t},a,o.a.createElement("h4",null,"Profile Data Form"),o.a.createElement("div",{className:p.a.formDataItems},o.a.createElement("label",null,o.a.createElement("b",null,"Full name:")," "),o.a.createElement("div",{className:p.a.formDataItemsInput},Object(d.c)("Enter full name","fullName",[],d.a,{type:"text"}))),o.a.createElement("div",{className:p.a.formDataItems},o.a.createElement("label",null,o.a.createElement("b",null,"About me:")," "),o.a.createElement("div",{className:p.a.formDataItemsInput},Object(d.c)("Enter about me info","aboutMe",[],d.a,{type:"text"}))),o.a.createElement("div",{className:p.a.formDataItems},o.a.createElement("label",null,o.a.createElement("b",null,"Skills:")," "),o.a.createElement("div",{className:p.a.formDataItemsInput},Object(d.c)("Enter you skills","lookingForAJobDescription",[],d.b,{type:"text"}))),o.a.createElement("div",{className:p.a.formDataItems},o.a.createElement("label",null,o.a.createElement("b",null,"Are you looking for a job ?")," "),o.a.createElement("div",{className:p.a.formDataItemsInput},Object(d.c)("Enter job status","lookingForAJob",[],d.a,{type:"checkbox"}))),o.a.createElement("div",null,o.a.createElement("b",null,"Contacts: ",Object.keys(n.contacts).map((function(e){return o.a.createElement("div",{key:e,className:p.a.contact},o.a.createElement("b",null,e,":")," ",o.a.createElement("span",null,Object(d.c)(e,"contacts[".concat(e,"]"),[],d.a)))})))),o.a.createElement("div",{className:p.a.formSubmitBtn},o.a.createElement("button",null,"Save profile data")),o.a.createElement("div",null,a&&o.a.createElement("div",{className:I.a.formSummaryError},a)))})),D=a(117),P=a.n(D),S=function(e){var t=e.profileData,a=e.updateUserStatus,r=e.status,i=e.isOwner,u=e.savePhoto,f=e.saveProfileData,p=(e.profileUpdateStatusSuccess,Object(n.useState)(!1)),b=Object(l.a)(p,2),d=b[0],_=b[1];if(!t)return o.a.createElement(c.a,null);var v=function(e){if(e.target.files.length){var t=e.target.files[0];u(t)}};return o.a.createElement("div",null,o.a.createElement("div",{className:s.a.profileAvatar},o.a.createElement("img",{src:t.photos.large?t.photos.large:P.a,className:s.a.imgMain}),i&&o.a.createElement("span",{className:s.a.photosInputContainer},o.a.createElement("input",{className:s.a.photosInput,type:"file",onChange:v,accept:"image/*"}),o.a.createElement("label",{htmlFor:"file"},"Update photo"))),d&&o.a.createElement(g,{initialValues:t,onSubmit:function(e){f(e).then((function(){_(!1)})).catch((function(e){return console.log(e)}))},savePhoto:v,profileData:t}),!d&&o.a.createElement(E,{profileData:t,isOwner:i,goToEditMode:function(){return _(!0)}}),o.a.createElement(m,{isOwner:i,status:r,updateUserStatus:a}))},k=a(93),h=a(305),N=a.n(h),O=a(306),j=a.n(O),M=function(e){var t=e.message,a=e.name;return o.a.createElement("div",{className:j.a.item},o.a.createElement("img",{src:"https://f0.pngfuel.com/png/439/19/avatar-user-profile-icon-women-wear-frock-png-clip-art.png"}),a," - ",t,o.a.createElement("div",null,o.a.createElement("span",null," like"),o.a.createElement("span",null," dislike")))},y=a(82),B=a(65),U=Object(B.a)(10),w=Object(_.a)({form:"mypost"})((function(e){var t=e.handleSubmit;return o.a.createElement("form",{onSubmit:t},o.a.createElement(y.a,{component:d.b,placeholder:"Please Enter New Post",name:"textbox",validate:[B.b,U]}),o.a.createElement("div",null,o.a.createElement("button",null,"Send Post")))})),x=o.a.memo((function(e){var t=e.posts,a=e.addPost,n=t.map((function(e){return o.a.createElement(M,{key:e.id,message:e.message,likesCount:e.likesCount})}));return o.a.createElement("div",{className:N.a.postsBlock},o.a.createElement("h3",null,"My post"),o.a.createElement("div",{className:N.a.postsBlockText},o.a.createElement(w,{onSubmit:function(e){a(e.textbox)}})),o.a.createElement("div",{className:N.a.posts},n))})),A=a(12),C=Object(A.b)((function(e){return e.profilePage}),{addPost:k.a})(x),F=function(e){return o.a.createElement("div",null,o.a.createElement(S,{profileUpdateStatusSuccess:e.profileUpdateStatusSuccess,saveProfileData:e.saveProfileData,savePhoto:e.savePhoto,isOwner:e.isOwner,profileData:e.profileData,updateUserStatus:e.updateUserStatus,status:e.status}),o.a.createElement(C,null))},J=a(28),T=a(9),V=function(e){return e.profileData},Q=function(e){return e.status},q=function(e){return e.profileUpdateStatusSuccess},z=a(128);t.default=Object(T.compose)(Object(A.b)((function(e){var t=e.profilePage,a=e.auth;return{profileData:V(t),status:Q(t),profileUpdateStatusSuccess:q(t),autorizedUid:Object(z.b)(a),isAuth:Object(z.a)(a)}}),{getUserProfile:k.c,getUserStatus:k.d,updateUserStatus:k.g,savePhoto:k.e,saveProfileData:k.f}),J.f)((function(e){return Object(n.useEffect)((function(){!function(){var t=parseInt(e.match.params.userId);t||(t=e.autorizedUid)||e.history.push("/login"),e.getUserProfile(t),e.getUserStatus(t)}()}),[e.match.params.userId]),o.a.createElement(F,Object.assign({},e,{profileUpdateStatusSuccess:e.profileUpdateStatusSuccess,isOwner:!e.match.params.userId,savePhoto:e.savePhoto,saveProfileData:e.saveProfileData}))}))}}]);
//# sourceMappingURL=3.b626641d.chunk.js.map