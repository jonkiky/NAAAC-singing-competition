(this.webpackJsonptriphub=this.webpackJsonptriphub||[]).push([[0],{355:function(e,t,n){e.exports=n(658)},568:function(e,t){},570:function(e,t){},582:function(e,t){},584:function(e,t){},611:function(e,t){},613:function(e,t){},614:function(e,t){},619:function(e,t){},621:function(e,t){},640:function(e,t){},652:function(e,t){},655:function(e,t){},658:function(e,t,n){"use strict";n.r(t);n(356),n(366);var a=n(0),r=n.n(a),c=n(161),o=n.n(c),i=n(350),l=n(46).a(),u=n(22),s=r.a.createContext({}),m=n(30);var d,f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("p",null,"Page No Found"))},p=n(26),h=n(339),b=n(340),g=n(351),v=n(130),E=n(5),w=n.n(E),y=n(8),x=n(672),j=function(){var e=Object(x.a)(["authToken"]),t=Object(p.a)(e,3),n=t[0],a=t[1],r=t[2];return[n.authToken,function(e){return a("authToken",e)},function(){return r("authToken")}]},O=Object(g.a)(d||(d=Object(b.a)(["\n  mutation login($email: String!, $code: String!) {\n    login(input: { email: $email,code:$code }) {\n      token\n    }\n  }\n"])));var k=function(e){var t=function(){var e=Object(u.g)(),t=j(),n=Object(p.a)(t,3),a=(n[0],n[1]),r=n[2],c=Object(v.b)(O,{onCompleted:function(t){if(null!==t.login){a(t.login.token);e.push("/list")}else{e.push("/?warning")}}}),o=Object(p.a)(c,2),i=o[0];return[function(e,t){return r(),i({variables:{email:e,code:t}})},o[1]]}(),n=Object(p.a)(t,2),a=n[0],c=n[1],o=Object(h.a)({shouldUseNativeValidation:!0}),i=o.handleSubmit,l=o.register,s=c.loading;return r.a.createElement("section",{class:"hero d-flex flex-column justify-content-center align-items-center",id:"home"},r.a.createElement("div",{class:"bg-overlay"}),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-lg-8 col-md-10 mx-auto col-12"},r.a.createElement("div",{class:"hero-text mt-5 text-center"},r.a.createElement("h6",{"data-aos":"fade-up","data-aos-delay":"300"},"Welcome to NAAAC-North America Alumni Alliance Cup Singing Competition Ranking System"),r.a.createElement("h1",{class:"text-white","data-aos":"fade-up","data-aos-delay":"500"},"NAAAC"),e.warning?r.a.createElement("h6",{"data-aos":"fade-up","data-aos-delay":"400",style:{color:"red"}},"Email or Code is incorrect!"):"",r.a.createElement("form",{onSubmit:i((function(e){return a(e.email,e.code)}))},">",r.a.createElement("input",Object.assign({type:"email",class:"form-control",name:"cf-name",placeholder:"Email"},l("email",{required:"Please enter your email."}))),r.a.createElement("input",Object.assign({type:"text",class:"form-control",name:"cf-email",placeholder:"Code"},l("code",{required:"Please enter your code."}))),r.a.createElement("button",{disabled:s,type:"submit",class:"form-control",id:"submit-button",name:"submit"},"Sign in ")))))))};var A=function(e){var t=null===new URLSearchParams(Object(u.h)().search).get("warning");return r.a.createElement(k,{warning:!t})};var S=function(e){return r.a.createElement("section",{class:"d-flex flex-column justify-content-center align-items-center"},r.a.createElement("div",{class:"bg-overlay"}),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-lg-8 col-md-10 mx-auto col-12"},r.a.createElement("div",{class:"hero-text mt-5 text-center"},r.a.createElement("h1",{class:"text-white","data-aos":"fade-up","data-aos-delay":"500"},"This is list page"))))))};var C={settings:{layout:{}},routes:[{path:"/home",component:A},{path:"/list",component:function(e){return r.a.createElement(S,null)}},{path:"/errors/404",component:f}]},N=[].concat(Object(m.a)(C.routes),[{path:"/",exact:!0,component:A},{component:function(){return r.a.createElement(u.a,{to:"/errors/404"})}}]),T=n(345),P=n(103);var U=function(e){return r.a.createElement(s.Consumer,null,(function(e){var t=e.routes;return r.a.createElement("div",null,r.a.createElement(P.a,null,Object(T.a)(t)))}))},$=n(38),q=n(220),B=n(669),W=n(670),I=n(671),J=new q.a("naaac-app-ugrsu");function L(){return R.apply(this,arguments)}function R(){return(R=Object(y.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(J.currentUser){e.next=5;break}return e.next=3,J.logIn(q.b.anonymous());case 3:e.next=7;break;case 5:return e.next=7,J.currentUser.refreshCustomData();case 7:return e.abrupt("return",J.currentUser.accessToken);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=new B.a({link:new W.a({uri:"https://us-west-2.aws.realm.mongodb.com/api/client/v2.0/app/naaac-app-ugrsu/graphql",fetch:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=Object(y.a)(w.a.mark((function e(t,n){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:return a=e.sent,n.headers.Authorization="Bearer ".concat(a),e.abrupt("return",fetch(t,n));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}),cache:new I.a}),D=function(){return r.a.createElement($.a,{client:z},r.a.createElement(s.Provider,{value:{routes:N}},r.a.createElement(u.c,{history:l},r.a.createElement(U,null))))},F=n(222),M=n(348),V=n(349),G=Object(V.createLogger)(),H=Object(F.b)(Object(F.a)(M.a,G));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:H},r.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[355,1,2]]]);
//# sourceMappingURL=main.fbef1886.chunk.js.map