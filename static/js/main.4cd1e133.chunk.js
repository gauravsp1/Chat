(this.webpackJsonpchathouse=this.webpackJsonpchathouse||[]).push([[0],{553:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a(11),c=a.n(o),i=a(14),r=a(10),l=a(76),s=a.n(l),d=a(114),j="SET_AUTHENTICATED",b="SET_UNAUTHENTICATED",u="SET_USER",O="LOADING_USER",m="MARK_NOTIFICATIONS_READ",h="EDIT_PROFILE",p="SET_ERRORS",x="LOADING_UI",g="CLEAR_ERRORS",v="LOADING_DATA",f="STOP_LOADING_DATA",y="STOP_LOADING_UI",C="SET_POSTS",N="SET_POST",S="LIKE_POST",w="UNLIKE_POST",I="POST_POST",T=a(40),k=a.n(T),A=function(e,t){return function(e){e({type:x}),e({type:g}),setTimeout((function(){e({type:y}),t.push("/Chat/home")}),2e3)}},E=function(e,t){return function(){var e=Object(d.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({type:x}),a({type:g}),setTimeout((function(){a({type:y}),t.push("/Chat/home")}),2e3);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},P=function(e){return function(t){e.push("/Chat/"),localStorage.removeItem("Token"),delete k.a.defaults.headers.common.Authorization,t({type:b})}},_=function(e){return function(t){t({type:h,payload:e})}},F=function(e){return function(t){t({type:x});var a=(new Date).toLocaleDateString(),n=Math.floor(100*Math.random()+10);console.log("screamId",n);var o={screamId:n,today:a,body:e.body};setTimeout((function(){t({type:I,payload:o}),t({type:y})}),1e3)}},L=function(e){return function(t){t({type:S,payload:e})}},U=function(e){return function(t){t({type:w,payload:e})}},D=a(611),R=a(595),H=a(589),B=a(206),W=a.n(B),G=a(207),M=a.n(G),K=a(2),X=Object(H.a)({likesButton:{right:"10%"}});var z=function(e){var t=X(),a=Object(r.b)(),n=Object(r.c)((function(e){return null===e||void 0===e?void 0:e.user})),o=(null===n||void 0===n?void 0:n.likes.find((function(t){return t.screamId===e.id})))?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(D.a,{title:"Undo like",placement:"top",className:t.likesButton,children:Object(K.jsx)(R.a,{onClick:function(){a(U(e.id))},className:"button",children:Object(K.jsx)(W.a,{color:"primary"})})}),Object(K.jsx)("span",{children:"Liked"})]}):Object(K.jsx)(K.Fragment,{children:Object(K.jsx)(D.a,{title:"Like",placement:"top",className:t.likesButton,children:Object(K.jsx)(R.a,{onClick:function(){a(L(e.id))},className:"button",children:Object(K.jsx)(M.a,{color:"primary"})})})});return Object(K.jsx)(K.Fragment,{children:o})},J=a(23),V=a(610),q=a(597),Q=a(598),Y=a(596);a(208),Object(H.a)({deleteButton:{position:"absolute",left:"85%",top:"5%"}});var Z=a(31),$=a(8),ee=a(608),te=a(599);Object(H.a)({});a(209),Object(H.a)({});var ae=a(600),ne=a(602),oe=a(601),ce=a(217),ie=Object(H.a)({card:{position:"relative",display:"flex",marginBottom:20,width:"500px"},image:{minWidth:200},content:{objectFit:"cover"},body:{width:"200px",overflow:"auto"}});var re=function(e){var t=e.post,a=ie();return Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)(ae.a,{className:a.card,children:[Object(K.jsx)(oe.a,{image:t.image,title:"Profile image",className:a.image}),Object(K.jsxs)(ne.a,{className:a.content,children:[Object(K.jsx)(ce.a,{className:a.title,color:"textSecondary",gutterBottom:!0,children:null===t||void 0===t?void 0:t.userHandle}),Object(K.jsx)(ce.a,{multiline:!0,className:a.body,variant:"body1",children:t.body}),Object(K.jsx)(z,{id:t.screamId}),Object(K.jsxs)(ce.a,{variant:"body2",color:"textSecondary",children:[Object(K.jsx)("b",{children:"Created At:"}),null===t||void 0===t?void 0:t.createdAt]})]})]})})},le=(a(254),a(46)),se=a(119),de=a.n(se),je=Object(H.a)({});var be=function(){var e=je(),t=Object(r.b)(),a=Object(r.c)((function(e){return null===e||void 0===e?void 0:e.user}));console.log("user",a);var o=Object(n.useState)({bio:a.credentials.bio,location:a.credentials.location,open:!1}),c=Object(J.a)(o,2),i=c[0],l=c[1];function s(){l((function(e){return Object($.a)(Object($.a)({},e),{},{open:!1})}))}function d(e){var t=e.target,a=t.name,n=t.value;l((function(e){return Object($.a)(Object($.a)({},e),{},Object(Z.a)({},a,n))}))}return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(D.a,{title:"Edit Bio",placement:"top",children:Object(K.jsx)(R.a,{onClick:function(){l((function(e){return Object($.a)(Object($.a)({},e),{},{open:!0})}))},className:"button",children:Object(K.jsx)(de.a,{color:"primary"})})}),Object(K.jsxs)(V.a,{open:i.open,onClose:s,fullWidth:!0,maxWidth:"xs",children:[Object(K.jsx)(Y.a,{children:"Edit your details"}),Object(K.jsx)(te.a,{children:Object(K.jsxs)("form",{children:[Object(K.jsx)(ee.a,{name:"bio",tpye:"text",label:"Bio",multiline:!0,placeholder:"A short bio about yourself...",className:e.textField,value:i.bio,onChange:d,fullWidth:!0}),Object(K.jsx)(ee.a,{name:"location",tpye:"text",label:"Location",placeholder:"Where you live...",className:e.textField,value:i.location,onChange:d,fullWidth:!0})]})}),Object(K.jsxs)(q.a,{children:[Object(K.jsx)(Q.a,{onClick:s,color:"primary",children:"Cancel"}),Object(K.jsx)(Q.a,{onClick:function(){i.bio&&i.location?(t(_(i)),s()):le.a.error("Please fill all fields")},color:"primary",children:"Save"})]})]})]})},ue=a(216),Oe=a(210),me=a.n(Oe),he=a(211),pe=a.n(he),xe=Object(H.a)({profile:{"& .image-wrapper":{textAlign:"center",position:"relative","& button":{position:"absolute",top:"80%",left:"70%"}},"& .profile-image":{width:200,height:200,objectFit:"cover",maxWidth:"100%",borderRadius:"50%",margin:"10px"},"& .profile-details":{textAlign:"center","& span, svg":{verticalAlign:"middle"},"& a":{color:"#00bcd4"}},"& hr":{border:"none",margin:"0 0 10px 0"},"& svg.button":{"&:hover":{cursor:"pointer"}}}});var ge=function(e){var t,a,n,o,c,l,s,d,j=xe(),b=(Object(i.f)(),Object(r.b)(),Object(r.c)((function(e){return null===e||void 0===e?void 0:e.user}))||[]);return Object(K.jsx)("div",{children:Object(K.jsx)(ue.a,{className:j.paper,children:Object(K.jsxs)("div",{className:j.profile,children:[Object(K.jsxs)("div",{className:"image-wrapper",children:[Object(K.jsx)("img",{src:"./images/Profile.jpeg",alt:"profile",className:"profile-image"}),Object(K.jsx)("input",{type:"file",id:"imageInput",hidden:"hidden",onChange:function(e){var t=e.target.files[0];(new FormData).append("image",t,t.name)}}),Object(K.jsx)(D.a,{title:"Edit profile picture",placement:"top",children:Object(K.jsx)(R.a,{onClick:function(){document.getElementById("imageInput").click()},className:"button",children:Object(K.jsx)(de.a,{color:"primary"})})})]}),Object(K.jsx)("hr",{}),Object(K.jsxs)("div",{className:"profile-details",children:[Object(K.jsxs)(ce.a,{variant:"body2",children:[Object(K.jsx)("b",{children:"Handle:- "}),null!==(t=null===b||void 0===b||null===(a=b.credentials)||void 0===a?void 0:a.handle)&&void 0!==t?t:"NA"]}),Object(K.jsx)("hr",{}),Object(K.jsxs)(ce.a,{variant:"body2",children:[Object(K.jsx)("b",{children:"Bio:- "}),null!==(n=null===b||void 0===b||null===(o=b.credentials)||void 0===o?void 0:o.bio)&&void 0!==n?n:"NA"]}),Object(K.jsx)("hr",{}),Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(me.a,{color:"primary"})," ",Object(K.jsxs)("span",{children:[Object(K.jsx)("b",{children:"Location:- "}),null!==(c=null===b||void 0===b||null===(l=b.credentials)||void 0===l?void 0:l.location)&&void 0!==c?c:"NA"]}),Object(K.jsx)("hr",{})]}),Object(K.jsx)(pe.a,{color:"primary"})," ",Object(K.jsxs)("span",{children:[Object(K.jsx)("b",{children:"Joined "}),null!==(s=null===b||void 0===b||null===(d=b.credentials)||void 0===d?void 0:d.createdAt)&&void 0!==s?s:"NA"]})]}),Object(K.jsx)(be,{})]})})})},ve=a(604),fe=a(603),ye=Object(H.a)({Dialogss:{height:"50px",minwidth:"500px"},Progress:{height:"5px",position:"absolute"},Button:{margin:"5px",position:"relative"}});var Ce=function(e){var t=Object(r.b)(),a=(Object(r.c)((function(e){return null===e||void 0===e?void 0:e.user})),Object(r.c)((function(e){return null===e||void 0===e?void 0:e.UI}))),o=ye(),c=Object(n.useState)(!1),i=Object(J.a)(c,2),l=i[0],s=i[1],d=Object(n.useState)({body:""}),j=Object(J.a)(d,2),b=j[0],u=j[1],O=function(){s(!1),u({body:""})};return Object(K.jsx)("div",{children:Object(K.jsxs)("div",{children:[Object(K.jsxs)(Q.a,{onClick:function(){s(!0)},variant:"contained",color:"primary",disabled:a.loading,children:["Add a Post",a.loading?Object(K.jsx)(fe.a,{className:o.Progress}):null]}),Object(K.jsxs)(V.a,{fullWidth:!0,open:l,onClose:O,"aria-labelledby":"form-dialog-title",children:[Object(K.jsx)(Y.a,{id:"form-dialog-title",children:"New Post"}),Object(K.jsxs)(te.a,{children:[Object(K.jsx)(ve.a,{children:"Share what's on your Mind!!!"}),Object(K.jsx)(ee.a,{autoFocus:!0,margin:"dense",id:"text",label:"Post...",onChange:function(e){!function(e){var t=e.target,a=t.name,n=t.value;u((function(e){return Object($.a)(Object($.a)({},e),{},Object(Z.a)({},a,n))}))}(e)},name:"body",value:b.body,type:"text",multiline:!0,fullWidth:!0})]}),Object(K.jsxs)(q.a,{children:[Object(K.jsx)(Q.a,{onClick:O,color:"primary",children:"Cancel"}),Object(K.jsx)(Q.a,{onClick:function(){b.body?(t(F(b)),u({body:""}),s(!1)):le.a.error("Please write a post")},color:"primary",children:"Post"})]})]})]})})},Ne=a(32);a(605),a(212),Object(H.a)({});var Se=a(606),we=a(607),Ie=a(6),Te=Object(Ie.a)({root:{boxShadow:"none",textTransform:"none",fontSize:16,"margin-left":"15px",padding:"6px 12px",border:"1px solid",lineHeight:1.5,backgroundColor:"#0063cc",borderColor:"#0063cc",fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{backgroundColor:"#0069d9",borderColor:"#0062cc",boxShadow:"#0062cc"},"&:active":{boxShadow:"none",backgroundColor:"#0062cc",borderColor:"#005cbf"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}}})(Q.a),ke=Object(H.a)((function(e){return{margin:{}}}));var Ae=function(e){var t=ke(),a=Object(i.f)(),n=Object(r.b)();return Object(K.jsx)("div",{className:"List",children:Object(K.jsx)(Se.a,{children:Object(K.jsxs)(we.a,{className:"nav-container",children:[Object(K.jsx)(ce.a,{variant:"h6",className:t.title,children:"Chat-House"}),Object(K.jsxs)("div",{className:"TitleBar",children:[Object(K.jsx)(Te,{id:"Home",variant:"contained",color:"inherit",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},component:Ne.b,to:"/Chat/home",disableRipple:!0,className:t.margin,children:"Home"}),Object(K.jsx)(Te,{onClick:function(){n(P(a))},id:"Logout",variant:"contained",color:"inherit",disableRipple:!0,className:t.margin,children:"Logout"})]})]})})})};var Ee=function(){Object(r.b)();var e=Object(r.c)((function(e){return null===e||void 0===e?void 0:e.data.posts})),t=Object(r.c)((function(e){return null===e||void 0===e?void 0:e.data.loading}));return console.log("posts",e),Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(Ae,{}),Object(K.jsxs)("div",{className:"HomeContainer",children:[Object(K.jsx)("div",{className:"AddPost",children:Object(K.jsx)(Ce,{})}),Object(K.jsx)("div",{className:"DisplayBox",children:t?"Loading":null===e||void 0===e?void 0:e.map((function(e){return Object(K.jsx)(re,{post:e})}))}),Object(K.jsx)("div",{className:"Profile",children:Object(K.jsx)(ge,{})})]})]})},Pe=Object(Ie.a)({root:{boxShadow:"none",textTransform:"none",fontSize:16,left:950,padding:"6px 12px",border:"1px solid",lineHeight:1.5,backgroundColor:"#0063cc",borderColor:"#0063cc",fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{backgroundColor:"#0069d9",borderColor:"#0062cc",boxShadow:"#0062cc"},"&:active":{boxShadow:"none",backgroundColor:"#0062cc",borderColor:"#005cbf"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}}})(Q.a),_e=Object(H.a)((function(e){return{margin:{margin:e.spacing(1)}}}));var Fe=function(){var e=_e();return Object(K.jsx)("div",{className:"List",children:Object(K.jsx)(Se.a,{children:Object(K.jsxs)(we.a,{className:"nav-container",children:[Object(K.jsx)(ce.a,{variant:"h6",className:e.title,children:"Chat-House"}),Object(K.jsx)(Pe,{id:"Login",variant:"contained",color:"inherit",component:Ne.b,to:"/Chat/",disableRipple:!0,className:e.margin,children:"Login"}),Object(K.jsx)(Pe,{id:"SignUp",variant:"contained",color:"inherit",component:Ne.b,to:"/Chat/signup",disableRipple:!0,className:e.margin,children:"SignUp"})]})})})},Le=Object(H.a)({TextField:{margin:"20px",width:"300px"},Progress:{height:"5px",position:"absolute"},Button:{margin:"5px",position:"relative"}});var Ue=function(e){var t=Le(),a=Object(n.useState)({email:"",password:""}),o=Object(J.a)(a,2),c=o[0],l=o[1],s=Object(i.f)(),d=Object(r.b)(),j=Object(r.c)((function(e){return null===e||void 0===e?void 0:e.UI}))||[];function b(e){var t=e.target,a=t.name,n=t.value;l((function(e){return Object($.a)(Object($.a)({},e),{},Object(Z.a)({},a,n))}))}return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(Fe,{}),Object(K.jsxs)("div",{className:"Login",children:[Object(K.jsx)("h2",{children:"Login"}),Object(K.jsx)(ee.a,{type:"email",id:"email",label:"E-mail",className:t.TextField,onChange:function(e){b(e)},name:"email",value:c.email}),Object(K.jsx)(ee.a,{type:"password",id:"password",label:"Password",className:t.TextField,onChange:function(e){b(e)},name:"password",value:c.password}),j.errors?Object(K.jsxs)("h4",{style:{color:"red"},children:["*",j.errors,"*"]}):null,Object(K.jsxs)(Q.a,{type:"submit",onClick:function(e){!function(e){e.preventDefault(),""===c.email?alert("Enter Email"):""===c.password?alert("Enter Password"):d(A(c,s))}(e)},disabled:j.loading,variant:"contained",color:"primary",className:t.Button,children:[" Login",j.loading?Object(K.jsx)(fe.a,{className:t.Progress}):null]}),Object(K.jsxs)("h5",{children:["Don't have an account?Sign Up ",Object(K.jsx)(Ne.b,{to:"/Chat/signup",children:"here"})," "]})]})]})},De=Object(H.a)({TextField:{margin:"20px",width:"300px"},Progress:{height:"5px",position:"absolute"},Button:{margin:"5px",position:"relative"}});var Re=function(e){var t=De(),a=Object(n.useState)({email:"",password:"",confirmPassword:"",handle:""}),o=Object(J.a)(a,2),c=o[0],l=o[1],s=Object(i.f)(),d=Object(r.b)(),j=Object(r.c)((function(e){return null===e||void 0===e?void 0:e.UI}))||[];function b(e){var t=e.target,a=t.name,n=t.value;l((function(e){return Object($.a)(Object($.a)({},e),{},Object(Z.a)({},a,n))}))}return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(Fe,{}),Object(K.jsxs)("div",{className:"SignUp",children:[Object(K.jsx)("h2",{children:"Sign Up"}),Object(K.jsx)(ee.a,{type:"email",id:"email",label:"E-mail",className:t.TextField,onChange:function(e){b(e)},name:"email",value:c.email}),Object(K.jsx)(ee.a,{type:"password",id:"password",label:"Password",className:t.TextField,onChange:function(e){b(e)},name:"password",value:c.password}),Object(K.jsx)(ee.a,{type:"password",id:"standard-basic",label:"Confirm password",className:t.TextField,onChange:function(e){b(e)},name:"confirmPassword",value:c.confirmPassword}),Object(K.jsx)(ee.a,{type:"text",id:"text",label:"Handle name",className:t.TextField,onChange:function(e){b(e)},name:"handle",value:c.handle}),j.errors?Object(K.jsxs)("h4",{style:{color:"red"},children:["*",j.errors,"*"]}):null,Object(K.jsxs)(Q.a,{type:"submit",disabled:j.loading,onClick:function(){c.email&&c.password&&c.confirmPassword&&c.handle?c.password.length<7?le.a.error("Password length should be greater than 6"):c.password!==c.confirmPassword?le.a.error("Password don't match"):d(E(c,s)):le.a.error("Please fill all fields")},variant:"contained",color:"primary",className:t.Button,children:["Sign Up",j.loading?Object(K.jsx)(fe.a,{className:t.Progress}):null]}),Object(K.jsxs)("h5",{children:["Have an account?Login ",Object(K.jsx)(Ne.b,{to:"/Chat/",children:"here"})," "]})]})]})},He=a(79),Be=a(145),We=a(120),Ge={posts:[{screamId:1,body:"What's the plan??",userHandle:"Ritesh",image:"./images/First.jpg",commentCount:5,likeCount:50,createdAt:"29/09/2020"},{screamId:2,body:"Let's meet at the Park.",userHandle:"Shubham",image:"./images/Second.jpeg",commentCount:88,likeCount:500,createdAt:"29/09/2020"},{screamId:3,body:"Hi All !!!",userHandle:"Varun",image:"./images/Third.jpg",commentCount:5,likeCount:50,createdAt:"29/09/2020"},{screamId:4,body:"Great to see you all...",userHandle:"Ankit",image:"./images/Fourth.jpeg",commentCount:88,likeCount:500,createdAt:"29/09/2020"}],post:{},loading:!1},Me={authenticated:!1,loading:!1,likes:[{screamId:1},{screamId:3}],credentials:{handle:"Gaurav",bio:"Coder, Artist and much more...",location:"Karad",createdAt:"1/10/2021"}},Ke={loading:!1,errors:null},Xe=Object(He.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object($.a)(Object($.a)({},e),{},{authenticated:!0});case b:return Me;case u:return Object($.a)({authenticated:!0,loading:!1},t.payload);case O:return Object($.a)(Object($.a)({},e),{},{loading:!0});case S:return Object($.a)(Object($.a)({},e),{},{likes:[].concat(Object(We.a)(e.likes),[{screamId:t.payload}])});case w:return Object($.a)(Object($.a)({},e),{},{likes:e.likes.filter((function(e){return e.screamId!==t.payload}))});case m:return e.notifications.forEach((function(e){return e.read=!0})),Object($.a)({},e);case h:return Object($.a)(Object($.a)({},e),{},{credentials:{handle:"Gaurav",bio:t.payload.bio,location:t.payload.location,createdAt:"1/10/2021"}});default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object($.a)(Object($.a)({},e),{},{loading:!0});case f:return Object($.a)(Object($.a)({},e),{},{loading:!1});case C:return Object($.a)(Object($.a)({},e),{},{posts:t.payload,loading:!1});case N:return Object($.a)(Object($.a)({},e),{},{post:t.payload});case I:return Object($.a)(Object($.a)({},e),{},{posts:[{screamId:t.payload.screamId,body:t.payload.body,userHandle:"Gaurav",image:"./images/Profile.jpeg",commentCount:5,likeCount:50,createdAt:t.payload.today}].concat(Object(We.a)(e.posts))});default:return e}},UI:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object($.a)(Object($.a)({},e),{},{loading:!1,errors:t.payload});case g:return Object($.a)(Object($.a)({},e),{},{errors:null});case x:return Object($.a)(Object($.a)({},e),{},{loading:!0});case y:return Object($.a)(Object($.a)({},e),{},{loading:!1});default:return e}}}),ze=Object(He.d)(Xe,Object(He.c)(Object(He.a)(Be.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));a(256),localStorage.Token;var Je=function(){return Object(K.jsx)("div",{className:"App",children:Object(K.jsx)(r.a,{store:ze,children:Object(K.jsxs)(i.c,{children:[Object(K.jsx)(i.a,{exact:!0,path:"/Chat/home",component:Ee}),Object(K.jsx)(i.a,{exact:!0,path:"/Chat/",component:Ue}),Object(K.jsx)(i.a,{exact:!0,path:"/Chat/signup",component:Re})]})})})};a(257),a(258);le.a.configure(),c.a.render(Object(K.jsx)(Ne.a,{children:Object(K.jsx)(Je,{})}),document.getElementById("root"))}},[[553,1,2]]]);
//# sourceMappingURL=main.4cd1e133.chunk.js.map