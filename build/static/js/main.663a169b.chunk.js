(this.webpackJsonpreduxapp=this.webpackJsonpreduxapp||[]).push([[0],{46:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},56:function(e,t,s){},57:function(e,t,s){"use strict";s.r(t);var c=s(2);t.default=function(e){return Object(c.jsx)("div",{class:"card-footer",children:Object(c.jsx)("small",{class:"text-muted",children:"\u2605 \u2605 \u2605 \u2605 \u2606"})})}},58:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s(3),r=s.n(a),l=s(27),i=s.n(l),n=(s(46),s(5)),o=(s(47),s(18)),d=s(19),j=s(22),b=s(21),h=(s(48),s(15)),x=(s(31),{apiKey:"AIzaSyBuAam0_nL_5_xBkfabGEQSpMoiMe3HmbU",authDomain:"fiverr-demo-11784.firebaseapp.com",databaseURL:"https://fiverr-demo-11784.firebaseio.com",projectId:"fiverr-demo-11784",storageBucket:"fiverr-demo-11784.appspot.com",messagingSenderId:"800059146499",appId:"1:800059146499:web:dc133c172dcf99d223a936"}),u=function(){try{var e=h.a.initializeApp(x,"primary"),t=new h.a.auth.GoogleAuthProvider;t.setCustomParameters({prompt:"select_account"}),e.auth().signInWithPopup(t).then((function(t){alert("Welcome "+t.user.displayName),e.delete().then((function(){console.log("App deleted successfully")})).catch((function(e){console.log("Error deleting app:",e)}))})).catch((function(t){alert(t.message),e.delete().then((function(){console.log("App deleted successfully")})).catch((function(e){console.log("Error deleting app:",e)}))}))}catch(s){alert(s)}},m={apiKey:"AIzaSyBuAam0_nL_5_xBkfabGEQSpMoiMe3HmbU",authDomain:"fiverr-demo-11784.firebaseapp.com",databaseURL:"https://fiverr-demo-11784.firebaseio.com",projectId:"fiverr-demo-11784",storageBucket:"fiverr-demo-11784.appspot.com",messagingSenderId:"800059146499",appId:"1:800059146499:web:dc133c172dcf99d223a936"},p=function(){try{var e=h.a.initializeApp(m,"primary"),t=new h.a.auth.FacebookAuthProvider;t.setCustomParameters({display:"popup"}),e.auth().signInWithPopup(t).then((function(t){alert("Welcome "+t.user.displayName),e.delete()})).catch((function(t){alert(t.message),e.delete()}))}catch(s){alert(s)}},g=s(32),O=s.n(g),f=s(39),v={apiKey:"AIzaSyBuAam0_nL_5_xBkfabGEQSpMoiMe3HmbU",authDomain:"fiverr-demo-11784.firebaseapp.com",databaseURL:"https://fiverr-demo-11784.firebaseio.com",projectId:"fiverr-demo-11784",storageBucket:"fiverr-demo-11784.appspot.com",messagingSenderId:"800059146499",appId:"1:800059146499:web:dc133c172dcf99d223a936"},y=function(){var e=Object(f.a)(O.a.mark((function e(t,s){var c,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=h.a.initializeApp(v,"primary"),a=new Promise((function(e,a){c.auth().signInWithEmailAndPassword(t,s).then((function(t){e(t),c.delete()})).catch((function(e){alert(e),c.delete()}))})),e.abrupt("return",a);case 6:return e.prev=6,e.t0=e.catch(0),alert(e.t0),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,s){return e.apply(this,arguments)}}(),w="SIGNIN_USER",k="SIGNOUT_USER",S=s(20),P=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(o.a)(this,s);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={user:{email:"",displayName:"Umer Ibrahim",pictureURL:"",loggedinStatus:!1},redirectState:!1,Password:""},e.inputEmailHandler=function(t){e.setState({user:{email:t.target.value,displayName:e.state.user.displayName,pictureURL:"",loggedinStatus:!0}}),console.log(e.state)},e.inputPasswordHandler=function(t){e.setState({Password:t.target.value})},e}return Object(d.a)(s,[{key:"loginByEmailandPassword",value:function(){var e=this;this.props.login(this.state.user);var t=y(this.state.user.email,this.state.Password);null!==t&&t.then((function(t){e.setState({redirectState:!0})}))}},{key:"loginWithGoogle",value:function(){}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{class:"container",children:[this.state.redirectState?Object(c.jsx)(n.a,{to:"/"}):null,Object(c.jsx)("div",{class:"row justify-content-center",children:Object(c.jsx)("div",{class:"col-xl-10 col-lg-12 col-md-9",children:Object(c.jsx)("div",{class:"card o-hidden border-0 shadow-lg my-5",children:Object(c.jsx)("div",{class:"card-body p-0",children:Object(c.jsxs)("div",{class:"row",children:[Object(c.jsx)("div",{class:"col-lg-6 d-none d-lg-block bg-login-image"}),Object(c.jsx)("div",{class:"col-lg-6",children:Object(c.jsxs)("div",{class:"p-5",children:[Object(c.jsx)("div",{class:"text-center",children:Object(c.jsx)("h1",{class:"h4 text-gray-900 mb-4",children:"Welcome Back!"})}),Object(c.jsxs)("form",{class:"user",children:[Object(c.jsx)("div",{class:"form-group",children:Object(c.jsx)("input",{onChange:this.inputEmailHandler,type:"email",class:"form-control form-control-user",id:"exampleInputEmail","aria-describedby":"emailHelp",placeholder:"Enter Email Address..."})}),Object(c.jsx)("div",{class:"form-group",children:Object(c.jsx)("input",{onChange:this.inputPasswordHandler,type:"password",class:"form-control form-control-user",id:"exampleInputPassword",placeholder:"Password"})}),Object(c.jsx)("div",{class:"form-group",children:Object(c.jsxs)("div",{class:"custom-control custom-checkbox small",children:[Object(c.jsx)("input",{type:"checkbox",class:"custom-control-input",id:"customCheck"}),Object(c.jsx)("label",{class:"custom-control-label",for:"customCheck",children:"Remember Me"})]})}),Object(c.jsx)("a",{onClick:function(){return e.loginByEmailandPassword()},class:"btn btn-primary btn-user btn-block",children:"Login"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("a",{onClick:function(){return u()},class:"btn btn-google btn-user btn-block",children:[Object(c.jsx)("i",{class:"fab fa-google fa-fw"})," Login with Google"]}),Object(c.jsxs)("a",{onClick:function(){return p()},class:"btn btn-facebook btn-user btn-block",children:[Object(c.jsx)("i",{class:"fab fa-facebook-f fa-fw"})," Login with Facebook"]})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{class:"text-center",children:Object(c.jsx)("a",{class:"small",href:"forgot-password.html",children:"Forgot Password?"})}),Object(c.jsx)("div",{class:"text-center",children:Object(c.jsx)("a",{class:"small",href:"register.html",children:"Create an Account!"})})]})})]})})})})})]})}}]),s}(a.Component),I=Object(S.b)(null,(function(e){return{login:function(t){return e(function(e){return console.log("we are in dispatch Action"),{type:w,payload:e}}(t))}}}))(P),A=(s(56),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(c.jsx)("div",{class:"container",children:Object(c.jsx)("div",{class:"card o-hidden border-0 shadow-lg my-5",children:Object(c.jsx)("div",{class:"card-body p-0",children:Object(c.jsxs)("div",{class:"row",children:[Object(c.jsx)("div",{class:"col-lg-5 d-none d-lg-block bg-register-image"}),Object(c.jsx)("div",{class:"col-lg-7",children:Object(c.jsxs)("div",{class:"p-5",children:[Object(c.jsx)("div",{class:"text-center",children:Object(c.jsx)("h1",{class:"h4 text-gray-900 mb-4",children:"Create an Account!"})}),Object(c.jsxs)("form",{class:"user",children:[Object(c.jsxs)("div",{class:"form-group row",children:[Object(c.jsx)("div",{class:"col-sm-6 mb-3 mb-sm-0",children:Object(c.jsx)("input",{type:"text",class:"form-control form-control-user",id:"exampleFirstName",placeholder:"First Name"})}),Object(c.jsx)("div",{class:"col-sm-6",children:Object(c.jsx)("input",{type:"text",class:"form-control form-control-user",id:"exampleLastName",placeholder:"Last Name"})})]}),Object(c.jsx)("div",{class:"form-group",children:Object(c.jsx)("input",{type:"email",class:"form-control form-control-user",id:"exampleInputEmail",placeholder:"Email Address"})}),Object(c.jsxs)("div",{class:"form-group row",children:[Object(c.jsx)("div",{class:"col-sm-6 mb-3 mb-sm-0",children:Object(c.jsx)("input",{type:"password",class:"form-control form-control-user",id:"exampleInputPassword",placeholder:"Password"})}),Object(c.jsx)("div",{class:"col-sm-6",children:Object(c.jsx)("input",{type:"password",class:"form-control form-control-user",id:"exampleRepeatPassword",placeholder:"Repeat Password"})})]}),Object(c.jsx)("a",{onClick:function(){!function(e,t){try{var s=h.a.initializeApp(v,"primary");new Promise((function(c,a){s.auth().createUserWithEmailAndPassword(e,t).then((function(e){c(e),s.delete()})).catch((function(e){alert(e),s.delete()}))})).then((function(e){console.log(e)}))}catch(c){alert(c)}}("muiproma@gmail.com","...zaisha")},class:"btn btn-primary btn-user btn-block",children:"Register Account"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("a",{onClick:function(){return u()},class:"btn btn-google btn-user btn-block",children:[Object(c.jsx)("i",{class:"fab fa-google fa-fw"})," Register with Google"]}),Object(c.jsxs)("a",{onClick:function(){return p()},class:"btn btn-facebook btn-user btn-block",children:[Object(c.jsx)("i",{class:"fab fa-facebook-f fa-fw"})," Register with Facebook"]})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("div",{class:"text-center",children:Object(c.jsx)("a",{class:"small",href:"forgot-password.html",children:"Forgot Password?"})}),Object(c.jsx)("div",{class:"text-center",children:Object(c.jsx)("a",{class:"small",href:"login.html",children:"Already have an account? Login!"})})]})})]})})})})}}]),s}(a.Component)),N=s(14),C=function(e){return Object(c.jsxs)("li",{onClick:e.ChangeState,class:"nav-item dropdown no-arrow show",children:[Object(c.jsxs)("a",{class:"nav-link dropdown-toggle",href:"#",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true",children:[Object(c.jsx)("span",{class:"mr-2 d-none d-lg-inline fa fa-user"}),e.displayName,Object(c.jsx)("img",{class:"img-profile rounded-circle",src:e.pictureURL})]}),Object(c.jsxs)("div",{style:{display:e.ShowSate},class:"dropdown-menu dropdown-menu-right shadow animated--grow-in ","aria-labelledby":"userDropdown",children:[Object(c.jsxs)("a",{class:"dropdown-item",href:"#",children:[Object(c.jsx)("i",{class:"fas fa-user fa-sm fa-fw mr-2 text-gray-400"}),"Profile"]}),Object(c.jsxs)("a",{class:"dropdown-item",href:"#",children:[Object(c.jsx)("i",{class:"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"}),"Settings"]}),Object(c.jsxs)("a",{class:"dropdown-item",href:"#",children:[Object(c.jsx)("i",{class:"fas fa-list fa-sm fa-fw mr-2 text-gray-400"}),"Activity Log"]}),Object(c.jsx)("div",{class:"dropdown-divider"}),Object(c.jsxs)("a",{class:"dropdown-item",href:"#","data-toggle":"modal","data-target":"#logoutModal",children:[Object(c.jsx)("i",{class:"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"}),"Logout"]})]})]})},R=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("li",{class:"nav-item",children:Object(c.jsx)(N.b,{className:"btn bg-light p-1",style:{fontSize:"14px"},to:"/login",children:"Login"})}),Object(c.jsx)("li",{class:"nav-item",children:Object(c.jsx)(N.b,{className:"nav-link btn btn-light bg-dark ml-1 p-1",style:{fontSize:"14px"},to:"/register",children:"Register"})})]})},E=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(o.a)(this,s);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={notificationState:"none"},e.notifyBar=function(){return""===e.state.notificationState?e.setState({notificationState:"none"}):e.setState({notificationState:""})},e}return Object(d.a)(s,[{key:"render",value:function(){return console.log(this.props.user.displayName),Object(c.jsx)("nav",{class:" navbar-expand-lg navbar navbar-dark bg-dark fixed-top py-3",id:"mainNav",children:Object(c.jsxs)("div",{class:"container",children:[Object(c.jsx)("a",{class:"navbar-brand js-scroll-trigger",href:"#page-top",children:"Fiverr React Demo"}),Object(c.jsx)("button",{class:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(c.jsx)("span",{class:"navbar-toggler-icon"})}),Object(c.jsx)("div",{class:"collapse navbar-collapse",id:"navbarResponsive",children:Object(c.jsxs)("ul",{class:"navbar-nav ml-auto my-2 my-lg-0",children:[Object(c.jsx)("li",{class:"nav-item",children:Object(c.jsx)(N.b,{className:"nav-link js-scroll-trigger",to:"/",children:"Home"})}),Object(c.jsx)("li",{class:"nav-item",children:Object(c.jsx)(N.b,{className:"nav-link js-scroll-trigger",to:"/",children:"Portfollio"})}),Object(c.jsx)("li",{class:"nav-item",children:Object(c.jsx)(N.b,{className:"nav-link js-scroll-trigger",to:"/shop",children:"Shop"})}),Object(c.jsx)("li",{class:"nav-item",children:Object(c.jsx)(N.b,{className:"nav-link js-scroll-trigger",to:"/",children:"Contact Us"})}),this.props.user.loggedinStatus?Object(c.jsx)(C,{displayName:this.props.user.displayName,pictureURL:this.props.user.pictureURL}):Object(c.jsx)(R,{})]})})]})})}}]),s}(a.Component),U=Object(S.b)((function(e){return{user:e.loggedinUser}}),null)(E),L=function(e){return Object(c.jsx)("footer",{class:"bg-light py-5",children:Object(c.jsx)("div",{class:"container",children:Object(c.jsx)("div",{class:"small text-center text-muted",children:"Copyright \xa9 2020 - UmerIbrahim14 on Fiverr"})})})},F=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(U,{}),e.children,Object(c.jsx)(L,{})]})},B=function(){return Object(c.jsx)("header",{class:"masthead",children:Object(c.jsx)("div",{class:"container h-100",children:Object(c.jsxs)("div",{class:"row h-100 align-items-center justify-content-center text-center",children:[Object(c.jsxs)("div",{class:"col-lg-10 align-self-end",children:[Object(c.jsx)("h1",{class:"text-uppercase text-white font-weight-bold",children:"Yes! you Are at the Right Place can Develop any app according to your Idea"}),Object(c.jsx)("hr",{class:"divider my-4"})]}),Object(c.jsxs)("div",{class:"col-lg-8 align-self-baseline",children:[Object(c.jsx)("p",{class:"text-white-75 font-weight-light mb-5",children:"With REACTJS REDUX BOOTSTRAP ADMIN PAN FIREBASE WITH THIRD PIRTY API's AND YOUR OWN REST API's"}),Object(c.jsx)("a",{class:"btn btn-primary btn-xl js-scroll-trigger",href:"#about",children:"Find Out More"})]})]})})})},D=function(){return Object(c.jsx)("section",{class:"page-section bg-primary",id:"about",children:Object(c.jsx)("div",{class:"container",children:Object(c.jsx)("div",{class:"row justify-content-center",children:Object(c.jsxs)("div",{class:"col-lg-8 text-center",children:[Object(c.jsx)("h2",{class:"text-white mt-0",children:"We've got what you need!"}),Object(c.jsx)("hr",{class:"divider light my-4"}),Object(c.jsx)("p",{class:"text-white-50 mb-4",children:"Thats all about Fiverr Project Demostrations"}),Object(c.jsx)("a",{class:"btn btn-light btn-xl js-scroll-trigger",href:"/",children:"Get Started!"})]})})})})},z=function(){return Object(c.jsx)("section",{class:"page-section",style:{backgroundColor:"lightgray"},id:"services",children:Object(c.jsxs)("div",{class:"container",children:[Object(c.jsx)("h2",{class:"text-center mt-0",children:"At Your Service"}),Object(c.jsx)("hr",{class:"divider my-4"}),Object(c.jsxs)("div",{class:"row",children:[Object(c.jsx)("div",{class:"col-lg-3 col-md-6 text-center",children:Object(c.jsxs)("div",{class:"mt-5",children:[Object(c.jsx)("i",{class:"fas fa-4x fa-gem text-primary mb-4"}),Object(c.jsx)("h3",{class:"h4 mb-2",children:"Sturdy Themes"}),Object(c.jsx)("p",{class:"text-muted mb-0",children:"Our themes are updated regularly to keep them bug free!"})]})}),Object(c.jsx)("div",{class:"col-lg-3 col-md-6 text-center",children:Object(c.jsxs)("div",{class:"mt-5",children:[Object(c.jsx)("i",{class:"fas fa-4x fa-laptop-code text-primary mb-4"}),Object(c.jsx)("h3",{class:"h4 mb-2",children:"Up to Date"}),Object(c.jsx)("p",{class:"text-muted mb-0",children:"All dependencies are kept current to keep things fresh."})]})}),Object(c.jsx)("div",{class:"col-lg-3 col-md-6 text-center",children:Object(c.jsxs)("div",{class:"mt-5",children:[Object(c.jsx)("i",{class:"fas fa-4x fa-globe text-primary mb-4"}),Object(c.jsx)("h3",{class:"h4 mb-2",children:"Ready to Publish"}),Object(c.jsx)("p",{class:"text-muted mb-0",children:"You can use this design as is, or you can make changes!"})]})}),Object(c.jsx)("div",{class:"col-lg-3 col-md-6 text-center",children:Object(c.jsxs)("div",{class:"mt-5",children:[Object(c.jsx)("i",{class:"fas fa-4x fa-heart text-primary mb-4"}),Object(c.jsx)("h3",{class:"h4 mb-2",children:"Made with Love"}),Object(c.jsx)("p",{class:"text-muted mb-0",children:"Is it really open source if it's not made with love?"})]})})]})]})})},T=function(){return Object(c.jsx)("div",{id:"portfolio",children:Object(c.jsx)("div",{class:"container-fluid p-0",children:Object(c.jsxs)("div",{class:"row no-gutters",children:[Object(c.jsx)("div",{class:"col-lg-4 col-sm-6",children:Object(c.jsxs)("a",{class:"portfolio-box",href:"assets/img/portfolio/fullsize/1.jpg",children:[Object(c.jsx)("img",{class:"img-fluid",src:"assets/img/portfolio/thumbnails/1.jpg",alt:""}),Object(c.jsxs)("div",{class:"portfolio-box-caption",children:[Object(c.jsx)("div",{class:"project-category text-white-50",children:"Category"}),Object(c.jsx)("div",{class:"project-name",children:"Project Name"})]})]})}),Object(c.jsx)("div",{class:"col-lg-4 col-sm-6",children:Object(c.jsxs)("a",{class:"portfolio-box",href:"assets/img/portfolio/fullsize/2.jpg",children:[Object(c.jsx)("img",{class:"img-fluid",src:"assets/img/portfolio/thumbnails/2.jpg",alt:""}),Object(c.jsxs)("div",{class:"portfolio-box-caption",children:[Object(c.jsx)("div",{class:"project-category text-white-50",children:"Category"}),Object(c.jsx)("div",{class:"project-name",children:"Project Name"})]})]})}),Object(c.jsx)("div",{class:"col-lg-4 col-sm-6",children:Object(c.jsxs)("a",{class:"portfolio-box",href:"assets/img/portfolio/fullsize/3.jpg",children:[Object(c.jsx)("img",{class:"img-fluid",src:"assets/img/portfolio/thumbnails/3.jpg",alt:""}),Object(c.jsxs)("div",{class:"portfolio-box-caption",children:[Object(c.jsx)("div",{class:"project-category text-white-50",children:"Category"}),Object(c.jsx)("div",{class:"project-name",children:"Project Name"})]})]})}),Object(c.jsx)("div",{class:"col-lg-4 col-sm-6",children:Object(c.jsxs)("a",{class:"portfolio-box",href:"assets/img/portfolio/fullsize/4.jpg",children:[Object(c.jsx)("img",{class:"img-fluid",src:"assets/img/portfolio/thumbnails/4.jpg",alt:""}),Object(c.jsxs)("div",{class:"portfolio-box-caption",children:[Object(c.jsx)("div",{class:"project-category text-white-50",children:"Category"}),Object(c.jsx)("div",{class:"project-name",children:"Project Name"})]})]})}),Object(c.jsx)("div",{class:"col-lg-4 col-sm-6",children:Object(c.jsxs)("a",{class:"portfolio-box",href:"assets/img/portfolio/fullsize/5.jpg",children:[Object(c.jsx)("img",{class:"img-fluid",src:"assets/img/portfolio/thumbnails/5.jpg",alt:""}),Object(c.jsxs)("div",{class:"portfolio-box-caption",children:[Object(c.jsx)("div",{class:"project-category text-white-50",children:"Category"}),Object(c.jsx)("div",{class:"project-name",children:"Project Name"})]})]})}),Object(c.jsx)("div",{class:"col-lg-4 col-sm-6",children:Object(c.jsxs)("a",{class:"portfolio-box",href:"assets/img/portfolio/fullsize/6.jpg",children:[Object(c.jsx)("img",{class:"img-fluid",src:"assets/img/portfolio/thumbnails/6.jpg",alt:""}),Object(c.jsxs)("div",{class:"portfolio-box-caption p-3",children:[Object(c.jsx)("div",{class:"project-category text-white-50",children:"Category"}),Object(c.jsx)("div",{class:"project-name",children:"Project Name"})]})]})})]})})})},M=function(){return Object(c.jsx)("section",{class:"page-section bg-dark text-white",children:Object(c.jsxs)("div",{class:"container text-center",children:[Object(c.jsx)("h2",{class:"mb-4",children:"Free Download at Start Bootstrap!"}),Object(c.jsx)("a",{class:"btn btn-light btn-xl",href:"https://startbootstrap.com/theme/creative/",children:"Download Now!"})]})})},G=function(){return Object(c.jsx)("section",{class:"page-section",style:{backgroundColor:"lightgray"},id:"contact",children:Object(c.jsxs)("div",{class:"container",children:[Object(c.jsx)("div",{class:"row justify-content-center",children:Object(c.jsxs)("div",{class:"col-lg-8 text-center",children:[Object(c.jsx)("h2",{class:"mt-0",children:"Let's Get In Touch!"}),Object(c.jsx)("hr",{class:"divider my-4"}),Object(c.jsx)("p",{class:"text-muted mb-5",children:"Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!"})]})}),Object(c.jsxs)("div",{class:"row",children:[Object(c.jsxs)("div",{class:"col-lg-4 ml-auto text-center mb-5 mb-lg-0",children:[Object(c.jsx)("i",{class:"fas fa-phone fa-3x mb-3 text-muted"}),Object(c.jsx)("div",{children:"+1 (555) 123-4567 (Demo)"})]}),Object(c.jsxs)("div",{class:"col-lg-4 mr-auto text-center",children:[Object(c.jsx)("i",{class:"fas fa-envelope fa-3x mb-3 text-muted"}),Object(c.jsx)("a",{class:"d-block",href:"mailto:muiproma@gmail.com",children:"UmerIbrahim14"})]})]})]})})},W=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(F,{children:[Object(c.jsx)(B,{}),Object(c.jsx)(D,{}),Object(c.jsx)(z,{}),Object(c.jsx)(T,{}),Object(c.jsx)(M,{}),Object(c.jsx)(G,{})]})})},_=s.p+"static/media/back1.4125c166.jpg",H=s.p+"static/media/back2.2cdc0f51.jpg",Y=s.p+"static/media/7.096c850a.jpg",J=s(57).default,K=function(e){return Object(c.jsx)("div",{class:"col-lg-4 col-md-6 mb-4",children:Object(c.jsxs)("div",{class:"card h-100",children:[Object(c.jsx)("a",{href:"#",children:Object(c.jsx)("img",{class:"card-img-top",src:Y,alt:"AMAZON S3 Deploy"})}),Object(c.jsxs)("div",{class:"card-body",children:[Object(c.jsx)("h5",{class:"card-title",children:Object(c.jsx)("a",{href:"#",children:"Amazon Cloud S3"})}),Object(c.jsx)("h6",{children:"$24.99"}),Object(c.jsx)("p",{class:"card-text",children:"this is demo"})]}),Object(c.jsx)(J,{})]})})},Q=function(e){return Object(c.jsx)(K,{})},X=function(){return Object(c.jsxs)("div",{class:"col-lg-3",children:[Object(c.jsx)("h5",{class:"my-4",children:"Buy Services"}),Object(c.jsxs)("div",{class:"list-group",children:[Object(c.jsx)("a",{href:"#",class:"list-group-item",children:"Daily"}),Object(c.jsx)("a",{href:"#",class:"list-group-item",children:"Weekly"}),Object(c.jsx)("a",{href:"#",class:"list-group-item",children:"Monthly"})]})]})},Z=function(e){return Object(c.jsx)(F,{children:Object(c.jsx)("div",{class:"container-fluid mt-5",style:{backgroundColor:"LightGray"},children:Object(c.jsxs)("div",{class:"row pt-2",children:[Object(c.jsx)(X,{}),Object(c.jsxs)("div",{class:"col-lg-9",children:[Object(c.jsxs)("div",{id:"carouselExampleIndicators",class:"carousel slide my-4","data-ride":"carousel",children:[Object(c.jsxs)("ol",{class:"carousel-indicators",children:[Object(c.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",class:""}),Object(c.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1",class:""}),Object(c.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2",class:"active"})]}),Object(c.jsxs)("div",{class:"carousel-inner",role:"listbox",children:[Object(c.jsx)("div",{class:"carousel-item",children:Object(c.jsx)("img",{class:"d-block img-fluid",src:H,alt:"First slide"})}),Object(c.jsx)("div",{class:"carousel-item",children:Object(c.jsx)("img",{class:"d-block img-fluid",src:_,alt:"Second slide"})}),Object(c.jsx)("div",{class:"carousel-item active",children:Object(c.jsx)("img",{class:"d-block img-fluid",src:"http://placehold.it/900x350",alt:"Third slide"})})]}),Object(c.jsxs)("a",{class:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev",children:[Object(c.jsx)("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),Object(c.jsx)("span",{class:"sr-only",children:"Previous"})]}),Object(c.jsxs)("a",{class:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next",children:[Object(c.jsx)("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),Object(c.jsx)("span",{class:"sr-only",children:"Next"})]})]}),Object(c.jsx)("div",{class:"row",children:Object(c.jsx)(Q,{})})]})]})})})};var $=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(n.d,{children:[Object(c.jsx)(n.b,{path:"/shop",exact:!0,component:Z}),Object(c.jsx)(n.b,{path:"/",exact:!0,component:W}),Object(c.jsx)(n.b,{path:"/register",exact:!0,component:A}),Object(c.jsx)(n.b,{path:"/login",exact:!0,component:I})]})})},q=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,59)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,l=t.getTTFB;s(e),c(e),a(e),r(e),l(e)}))},V=s(25),ee=s(26),te={loggedinUser:{email:"",displayName:"",pictureURL:"",loggedinStatus:!1}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return console.log(t),Object(ee.a)(Object(ee.a)({},e),{},{loggedinUser:t.payload});case k:return Object(ee.a)(Object(ee.a)({},e),{},{loggedinUser:{email:"",displayName:"",pictureURL:"",loggedinStatus:!1}});default:return e}};var ce=Object(V.c)(se,Object(V.a)((function(e){return e.getState,function(e){return function(t){console.log("will dispatch",t);var s=e(t);return console.log("state after dispatch",t),s}}})));i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(N.a,{children:Object(c.jsx)(S.a,{store:ce,children:Object(c.jsx)($,{})})})}),document.getElementById("root")),q()}},[[58,1,2]]]);
//# sourceMappingURL=main.663a169b.chunk.js.map