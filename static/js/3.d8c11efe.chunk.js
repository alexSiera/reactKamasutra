(this["webpackJsonpcamasutra-project"]=this["webpackJsonpcamasutra-project"]||[]).push([[3],{293:function(e,t,a){e.exports={descriptionBlock:"ProfileData_descriptionBlock__3yskL",imgMain:"ProfileData_imgMain__1MR6q",profileInfoInput:"ProfileData_profileInfoInput__2rINX",aboutMe:"ProfileData_aboutMe__13OZj",contactsLists:"ProfileData_contactsLists__3tXCf",contactsHeading:"ProfileData_contactsHeading__3roC_",contactsData:"ProfileData_contactsData__2NQVb",formSubmitBtn:"ProfileData_formSubmitBtn__2-c6l",profileDataForm:"ProfileData_profileDataForm__2Q3iv",formDataItems:"ProfileData_formDataItems__1HgwS",formDataItemsInput:"ProfileData_formDataItemsInput__XmnVs"}},300:function(e,t,a){},301:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__gOOQY",imgMain:"ProfileInfo_imgMain__19Z2q",profileInfoInput:"ProfileInfo_profileInfoInput__3YmSw",aboutMe:"ProfileInfo_aboutMe__1JWq9",profileAvatar:"ProfileInfo_profileAvatar__3f9ob",photosInputContainer:"ProfileInfo_photosInputContainer__39sJ5",photosInput:"ProfileInfo_photosInput__2YQVh"}},302:function(e,t,a){e.exports={descriptionBlock:"ProfileStatus_descriptionBlock__1debn",profileStatusBlock:"ProfileStatus_profileStatusBlock__35DzV",imgMain:"ProfileStatus_imgMain__31jQr",profileInfoInput:"ProfileStatus_profileInfoInput__3_b7c",aboutMe:"ProfileStatus_aboutMe__3jBhs"}},303:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__1cAL4",postsBlockText:"MyPosts_postsBlockText__3e_AC"}},304:function(e,t,a){e.exports={item:"Post_item__2yzXq"}},310:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=(a(300),a(93)),r=a(301),s=a.n(r),i=a(34),c=a(302),u=a.n(c),m=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)(e.status),c=Object(l.a)(i,2),m=c[0],f=c[1];Object(n.useEffect)((function(){f(e.status)}),[e.status]);var p=function(){e.isOwner&&(r?(s(!1),e.updateUserStatus(m)):s(!0))};return o.a.createElement("div",{className:u.a.profileStatusBlock},!r&&o.a.createElement("div",null,o.a.createElement("span",{onDoubleClick:p},o.a.createElement("b",null,"Status:")," ",e.status)),r&&o.a.createElement("div",{className:u.a.profileInfoInput},o.a.createElement("input",{autoFocus:!0,onChange:function(e){f(e.target.value)},onBlur:p,value:m})))},f=a(293),p=a.n(f),b=function(e){var t=e.contactTitle,a=e.contactValue;return o.a.createElement("div",{className:p.a.contactsData},o.a.createElement("b",null,t),": ",a)},E=function(e){var t=e.profileData,a=e.isOwner,n=e.goToEditMode;return o.a.createElement("div",{className:p.a.descriptionBlock},o.a.createElement("h2",null,"Profile Info"),a&&o.a.createElement("div",null,o.a.createElement("button",{onClick:n},"Edit information")),o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("b",null,"Full name:")," ",t.fullName?t.fullName:"No info"),o.a.createElement("div",{className:p.a.aboutMe},o.a.createElement("b",null,"About me:")," ",t.aboutMe?t.aboutMe:"No info"),t.lookingForAJob&&o.a.createElement("div",{className:p.a.aboutMe},o.a.createElement("div",{className:p.a.aboutMe},o.a.createElement("b",null,"Job status:")," Yes I'am looking for a job."),o.a.createElement("b",null,"My professional skills:"),t.lookingForAJobDescription?t.lookingForAJobDescription:"No one"),!t.lookingForAJob&&o.a.createElement("div",{className:p.a.aboutMe},o.a.createElement("b",null,"Job status:")," I'am not looking for a job right now."),o.a.createElement("div",null,o.a.createElement("b",null,"Contacts: ",Object.keys(t.contacts).map((function(e){return o.a.createElement(b,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))))},_=a(32),d=a(127),v=a(65),I=Object(d.a)({form:"profileData"})((function(e){var t=e.handleSubmit,a=(e.profileData,Object(v.a)(15));return o.a.createElement("form",{className:p.a.profileDataForm,onSubmit:t},o.a.createElement("h4",null,"Profile Data Form"),o.a.createElement("div",{className:p.a.formDataItems},o.a.createElement("label",null,o.a.createElement("b",null,"Full name:")," "),o.a.createElement("div",{className:p.a.formDataItemsInput},Object(_.c)("Enter full name","fullName",[a],_.a,{type:"text"}))),o.a.createElement("div",{className:p.a.formDataItems},o.a.createElement("label",null,o.a.createElement("b",null,"About me:")," "),o.a.createElement("div",{className:p.a.formDataItemsInput},Object(_.c)("Enter about me info","aboutMe",[a],_.a,{type:"text"}))),o.a.createElement("div",{className:p.a.formDataItems},o.a.createElement("label",null,o.a.createElement("b",null,"Skills:")," "),o.a.createElement("div",{className:p.a.formDataItemsInput},Object(_.c)("Enter you skills","lookingForAJobDescription",[a],_.b,{type:"text"}))),o.a.createElement("div",{className:p.a.formDataItems},o.a.createElement("label",null,o.a.createElement("b",null,"Are you looking for a job ?")," "),o.a.createElement("div",{className:p.a.formDataItemsInput},Object(_.c)("Enter job status","lookingForAJob",[],_.a,{type:"checkbox"}))),o.a.createElement("div",{className:p.a.formSubmitBtn},o.a.createElement("button",null,"Save profile data")))})),D=a(116),g=a.n(D),P=function(e){var t=e.profileData,a=e.updateUserStatus,r=e.status,c=e.isOwner,u=e.savePhoto,f=e.saveProfileData,p=Object(n.useState)(!1),b=Object(l.a)(p,2),_=b[0],d=b[1];if(!t)return o.a.createElement(i.a,null);var v=function(e){if(e.target.files.length){var t=e.target.files[0];u(t)}};return o.a.createElement("div",null,o.a.createElement("div",{className:s.a.profileAvatar},o.a.createElement("img",{src:t.photos.large?t.photos.large:g.a,className:s.a.imgMain}),c&&o.a.createElement("span",{className:s.a.photosInputContainer},o.a.createElement("input",{className:s.a.photosInput,type:"file",onChange:v,accept:"image/*"}),o.a.createElement("label",{htmlFor:"file"},"Update photo"))),_&&o.a.createElement(I,{initialValues:t,onSubmit:function(e){d(!1),f(e)},savePhoto:v,profileData:t}),!_&&o.a.createElement(E,{profileData:t,isOwner:c,goToEditMode:function(){return d(!0)}}),o.a.createElement(m,{isOwner:c,status:r,updateUserStatus:a}))},h=a(92),k=a(303),N=a.n(k),S=a(304),O=a.n(S),j=function(e){var t=e.message,a=e.name;return o.a.createElement("div",{className:O.a.item},o.a.createElement("img",{src:"https://f0.pngfuel.com/png/439/19/avatar-user-profile-icon-women-wear-frock-png-clip-art.png"}),a," - ",t,o.a.createElement("div",null,o.a.createElement("span",null," like"),o.a.createElement("span",null," dislike")))},M=a(82),B=Object(v.a)(10),y=Object(d.a)({form:"mypost"})((function(e){var t=e.handleSubmit;return o.a.createElement("form",{onSubmit:t},o.a.createElement(M.a,{component:_.b,placeholder:"Please Enter New Post",name:"textbox",validate:[v.b,B]}),o.a.createElement("div",null,o.a.createElement("button",null,"Send Post")))})),w=o.a.memo((function(e){var t=e.posts,a=e.addPost,n=t.map((function(e){return o.a.createElement(j,{key:e.id,message:e.message,likesCount:e.likesCount})}));return o.a.createElement("div",{className:N.a.postsBlock},o.a.createElement("h3",null,"My post"),o.a.createElement("div",{className:N.a.postsBlockText},o.a.createElement(y,{onSubmit:function(e){a(e.textbox)}})),o.a.createElement("div",{className:N.a.posts},n))})),x=a(12),A=Object(x.b)((function(e){return e.profilePage}),{addPost:h.a})(w),F=function(e){return o.a.createElement("div",null,o.a.createElement(P,{saveProfileData:e.saveProfileData,savePhoto:e.savePhoto,isOwner:e.isOwner,profileData:e.profileData,updateUserStatus:e.updateUserStatus,status:e.status}),o.a.createElement(A,null))},C=a(29),U=a(9);t.default=Object(U.compose)(Object(x.b)((function(e){var t=e.profilePage,a=e.auth;return{profileData:t.profileData,status:t.status,autorizedUid:a.userId,isAuth:a.isAuth}}),{getUserProfile:h.c,getUserStatus:h.d,updateUserStatus:h.g,savePhoto:h.e,saveProfileData:h.f}),C.f)((function(e){return Object(n.useEffect)((function(){!function(){var t=parseInt(e.match.params.userId);t||(t=e.autorizedUid)||e.history.push("/login"),e.getUserProfile(t),e.getUserStatus(t)}()}),[e.match.params.userId]),o.a.createElement(F,Object.assign({},e,{isOwner:!e.match.params.userId,savePhoto:e.savePhoto,saveProfileData:e.saveProfileData}))}))}}]);
//# sourceMappingURL=3.d8c11efe.chunk.js.map