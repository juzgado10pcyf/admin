(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/admin/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"2a99":function(t,e,a){},"34ba":function(t,e,a){"use strict";var n=a("7dbb"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n,r=a("2b0e"),o=(a("386d"),a("6762"),a("2fdb"),a("96cf"),a("1da1")),i=a("15fd"),s=a("9767"),c=function(){return window.history.replaceState({},document.title,window.location.pathname)},l=function(){return n},u=function(t){var e=t.onRedirectCallback,a=void 0===e?c:e,l=t.redirectUri,u=void 0===l?window.location.origin+"/admin/":l,d=Object(i["a"])(t,["onRedirectCallback","redirectUri"]);return n||(n=new r["a"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.popupOpen=!0,t.prev=1,t.next=4,this.auth0Client.loginWithPopup(e);case 4:return t.next=6,this.auth0Client.getUser();case 6:return this.user=t.sent,t.next=9,this.auth0Client.isAuthenticated();case 9:this.isAuthenticated=t.sent,this.error=null,t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](1),console.error(t.t0),this.error=t.t0;case 17:return t.prev=17,this.popupOpen=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,this,[[1,13,17,20]])})));function e(e){return t.apply(this,arguments)}return e}(),handleRedirectCallback:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,this.auth0Client.handleRedirectCallback();case 4:return t.next=6,this.auth0Client.getUser();case 6:this.user=t.sent,this.isAuthenticated=!0,this.error=null,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),this.error=t.t0;case 14:return t.prev=14,this.loading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[1,11,14,17]])})));function e(){return t.apply(this,arguments)}return e}(),loginWithRedirect:function(t){return this.auth0Client.loginWithRedirect(t)},getIdTokenClaims:function(t){return this.auth0Client.getIdTokenClaims(t)},getTokenSilently:function(t){return this.auth0Client.getTokenSilently(t)},getTokenWithPopup:function(t){return this.auth0Client.getTokenWithPopup(t)},logout:function(t){return this.auth0Client.logout(t)}},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["a"])({domain:d.domain,client_id:d.clientId,audience:d.audience,redirect_uri:u});case 2:if(this.auth0Client=t.sent,t.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){t.next=11;break}return t.next=7,this.auth0Client.handleRedirectCallback();case 7:e=t.sent,n=e.appState,this.error=null,a(n);case 11:t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](3),this.error=t.t0;case 16:return t.prev=16,t.next=19,this.auth0Client.isAuthenticated();case 19:return this.isAuthenticated=t.sent,t.next=22,this.auth0Client.getUser();case 22:return this.user=t.sent,this.loading=!1,t.finish(16);case 25:case"end":return t.stop()}}),t,this,[[3,13,16,25]])})));function e(){return t.apply(this,arguments)}return e}()}),n)},d={install:function(t,e){t.prototype.$auth=u(e)}},p=function(t,e,a){var n=l(),r=function(){if(n.isAuthenticated)return a();n.loginWithRedirect({appState:{targetUrl:t.fullPath}})};if(!n.loading)return r();n.$watch("loading",(function(t){if(!1===t)return r()}))},m=a("9062"),f=a.n(m),h=a("5886"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column h-100",attrs:{id:"app"}},[a("nav-bar"),a("div",{staticClass:"container flex-grow-1"},[a("error"),a("div",{staticClass:"mt-3"},[a("router-view")],1)],1),t._m(0)],1)},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"bg-light text-center p-3"},[t._v("\n    Realizado por\n    "),a("a",{attrs:{href:"https://www.linkedin.com/in/sergiorazza/",target:"_blank"}},[a("strong",[t._v("Sergio Razza")])]),t._v("\n    para el Juzgado PCyF 10 -\n    "),a("a",{attrs:{href:"mailto:srazza@gmail.com"}},[t._v("srazza@gmail.com")])])}],b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-container mb-3"},[a("nav",{staticClass:"navbar navbar-expand-md navbar-light bg-light"},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-brand logo rounded-circle"}),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Inicio")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/resoluciones"}},[t._v("Resoluciones")])],1),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:t.$options.urlDashboard,target:"_blank"}},[t._v("\n              Tablero\n              "),a("font-awesome-icon",{attrs:{icon:"external-link-alt"}})],1)])]),a("ul",{staticClass:"navbar-nav d-none d-md-block"},[t.$auth.isAuthenticated||t.$auth.loading?t._e():a("li",{staticClass:"nav-item"},[a("button",{staticClass:"btn btn-primary btn-margin",attrs:{id:"qsLoginBtn"},on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("Ingresar")])]),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"profileDropDown","data-toggle":"dropdown"}},[a("img",{staticClass:"nav-user-profile rounded-circle",attrs:{src:t.$auth.user.picture,alt:"User's profile picture",width:"50"}})]),a("div",{staticClass:"dropdown-menu dropdown-menu-right"},[a("div",{staticClass:"dropdown-header"},[t._v(t._s(t.$auth.user.name))]),a("a",{staticClass:"dropdown-item",attrs:{id:"qsLogoutBtn",href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[a("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"power-off"}}),t._v("Salir\n              ")],1)])]):t._e()]),t.$auth.isAuthenticated||t.$auth.loading?t._e():a("ul",{staticClass:"navbar-nav d-md-none"},[a("button",{staticClass:"btn btn-primary btn-block",attrs:{id:"qsLoginBtn"},on:{click:t.login}},[t._v("Ingresar")])]),t.$auth.isAuthenticated?a("ul",{staticClass:"navbar-nav d-md-none d-flex",attrs:{id:"mobileAuthNavBar"}},[a("li",{staticClass:"nav-item"},[a("span",{staticClass:"user-info"},[a("img",{staticClass:"nav-user-profile d-inline-block rounded-circle mr-3",attrs:{src:t.$auth.user.picture,alt:"User's profile picture",width:"50"}}),a("h6",{staticClass:"d-inline-block"},[t._v(t._s(t.$auth.user.name))])])]),a("li",[a("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"user"}})],1),a("li",[a("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"power-off"}}),a("a",{attrs:{id:"qsLogoutBtn",href:"#"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Salir")])],1)]):t._e()])])])])},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],_="https://juzgado10pcyf.github.io/",w={urlDashboard:_,name:"NavBar",methods:{login:function(){this.$auth.loginWithRedirect()},logout:function(){this.$auth.logout({returnTo:window.location.origin+"/admin/"}),this.$router.push({path:"/"})}}},y=w,x=(a("34ba"),a("2877")),O=Object(x["a"])(y,b,C,!1,null,null,null),k=O.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.msg?a("div",{staticClass:"alert alert-danger alert-dismissible"},[t._v("\n  "+t._s(t.msg)+"\n  "),t._m(0)]):t._e()},j=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],P={name:"Error",computed:{msg:function(){return this.$auth.error}}},R=P,E=Object(x["a"])(R,$,j,!1,null,null,null),S=E.exports,A={components:{NavBar:k,Error:S}},T=A,z=(a("034f"),Object(x["a"])(T,v,g,!1,null,null,null)),D=z.exports,M=a("8c4f"),U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("hero")],1)},q=[],B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center hero"},[a("img",{staticClass:"mb-3 app-logo",attrs:{src:"logo.jpg",alt:"Juzgado 10 logo",width:"120"}}),a("h1",{staticClass:"mb-4"},[t._v("Juzgado PCyF 10")]),a("p",{staticClass:"lead"},[t._v("Plataforma de administración para portal de datos del Juzgado PCyF 10")])])}],I={name:"Hero"},L=I,V=Object(x["a"])(L,B,N,!1,null,null,null),J=V.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"next-steps"},[a("h2",{staticClass:"my-5 text-center"},[t._v("What can I do next?")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-5 mb-4"},[a("h6",{staticClass:"mb-3"},[a("a",{attrs:{href:"https://auth0.com/docs/connections"}},[a("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"link"}}),t._v("Configure other identity providers\n        ")],1)]),a("p",[t._v("Auth0 supports social providers as Facebook, Twitter, Instagram and 100+, Enterprise providers as Microsoft Office 365, Google Apps, Azure, and more. You can also use any OAuth2 Authorization Server.")])]),a("div",{staticClass:"col-md"}),a("div",{staticClass:"col-md-5 mb-4"},[a("h6",{staticClass:"mb-3"},[a("a",{attrs:{href:"https://auth0.com/docs/multifactor-authentication"}},[a("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"link"}}),t._v("Enable Multifactor Authentication\n        ")],1)]),a("p",[t._v("Add an extra layer of security by enabling Multi-factor Authentication, requiring your users to provide more than one piece of identifying information. Push notifications, authenticator apps, SMS, and DUO Security are supported.")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-5 mb-4"},[a("h6",{staticClass:"mb-3"},[a("a",{attrs:{href:"https://auth0.com/docs/anomaly-detection"}},[a("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"link"}}),t._v("Anomaly Detection\n        ")],1)]),a("p",[t._v("Auth0 can detect anomalies and stop malicious attempts to access your application. Anomaly detection can alert you and your users of suspicious activity, as well as block further login attempts.")])]),a("div",{staticClass:"col-md"}),a("div",{staticClass:"col-md-5 mb-4"},[a("h6",{staticClass:"mb-3"},[a("a",{attrs:{href:"https://auth0.com/docs/rules"}},[a("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"link"}}),t._v("Learn About Rules\n        ")],1)]),a("p",[t._v("Rules are JavaScript functions that execute when a user authenticates to your application. They run once the authentication process is complete, and you can use them to customize and extend Auth0's capabilities.")])])])])},G=[],F={name:"HomeContent"},H=F,Q=Object(x["a"])(H,W,G,!1,null,null,null),K=Q.exports,Z={name:"home",components:{Hero:J,HomeContent:K}},Y=Z,X=(a("66a0"),Object(x["a"])(Y,U,q,!1,null,"67900dd6",null)),tt=X.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center profile-header"},[a("div",{staticClass:"col-md-2 mb-3"},[a("img",{staticClass:"rounded-circle img-fluid profile-picture",attrs:{src:t.$auth.user.picture,alt:"User's profile picture"}})]),a("div",{staticClass:"col-md text-center text-md-left"},[a("h2",[t._v(t._s(t.$auth.user.name))]),a("p",{staticClass:"lead text-muted"},[t._v(t._s(t.$auth.user.email))])])]),a("div",{staticClass:"row"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:JSON.stringify(t.$auth.user,null,2),expression:"JSON.stringify($auth.user, null, 2)"}],staticClass:"rounded w-100"},[a("code",{staticClass:"json"})])])])},at=[],nt={},rt=Object(x["a"])(nt,et,at,!1,null,null,null),ot=rt.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.datosSelected?a("form",{staticClass:"needs-validation",attrs:{novalidate:""}},[a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-3"},[a("div",{staticClass:"input-group mb-3"},[t._m(0),a("select",{directives:[{name:"model",rawName:"v-model",value:t.yearSelected,expression:"yearSelected"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.yearSelected=e.target.multiple?a:a[0]}}},t._l(t.$options.years,(function(e){return a("option",{key:e,domProps:{value:e,selected:e==t.yearSelected}},[t._v(t._s(e))])})),0)])])]),a("Formulario",{attrs:{datosIniciales:t.datosSelected},on:{update:t.actualizar}})],1):t._e()])},st=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v("Año")])])}],ct=(a("7514"),a("8e6e"),a("ac6a"),a("456d"),a("ade3")),lt=a("bc3a"),ut=a.n(lt);function dt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function pt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?dt(Object(a),!0).forEach((function(e){Object(ct["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):dt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var mt="https://mxwotry8eg.execute-api.us-east-1.amazonaws.com/dev/resolucion",ft="V6RWPjQMg72aE3UGfIqUl1QjasmDRKSN92PL2drs";function ht(){return ut.a.get(mt,{headers:{"x-api-key":ft}}).then((function(t){return t.data}))}function vt(t,e){return ut.a.post(mt,pt({},e),{headers:{"x-api-key":ft,Authorization:"Bearer ".concat(t)}}).then((function(t){return t.data}))}var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"form-group"},[a("h6",[t._v("Datos Generales")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"input-group mb-3"},[t._m(0),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.datos.totalResoluciones,expression:"datos.totalResoluciones",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:t.datos.totalResoluciones},on:{input:function(e){e.target.composing||t.$set(t.datos,"totalResoluciones",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),a("div",{staticClass:"col-6"},[a("div",{staticClass:"input-group mb-3"},[t._m(1),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.datos.casosViolenciaGenero,expression:"datos.casosViolenciaGenero",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:t.datos.casosViolenciaGenero},on:{input:function(e){e.target.composing||t.$set(t.datos,"casosViolenciaGenero",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])])]),a("div",{staticClass:"form-group"},[a("h6",[t._v("Resoluciones por Mes (Total: "+t._s(t.totalMes)+")")]),a("div",{staticClass:"row"},t._l(t.$options.meses,(function(e){return a("div",{key:e,staticClass:"col-3"},[a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v(t._s(e.toString().padStart(2,"0")))])]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.datos.resolucionesPorMes.find((function(t){return t.mes==e})).cant,expression:"datos.resolucionesPorMes.find(x=> x.mes == mes).cant",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:t.datos.resolucionesPorMes.find((function(t){return t.mes==e})).cant},on:{input:function(a){a.target.composing||t.$set(t.datos.resolucionesPorMes.find((function(t){return t.mes==e})),"cant",t._n(a.target.value))},blur:function(e){return t.$forceUpdate()}}})])])})),0)]),a("div",{staticClass:"form-group"},[a("h6",[t._v("Tipos de Resoluciones (Total: "+t._s(t.totalTipoResolucion)+")")]),a("div",{staticClass:"row"},t._l(t.$options.tiposDeResoluciones,(function(e,n){return a("div",{key:n,staticClass:"col-6"},[a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v(t._s(e))])]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.datos.tipoResoluciones[e],expression:"datos.tipoResoluciones[tipoResolucion]",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:t.datos.tipoResoluciones[e]},on:{input:function(a){a.target.composing||t.$set(t.datos.tipoResoluciones,e,t._n(a.target.value))},blur:function(e){return t.$forceUpdate()}}})])])})),0)]),a("div",{staticClass:"form-group"},[a("h6",[t._v("Ranking de Articulos (Top #5 Total: "+t._s(t.totalArticulosTop5)+")")]),t._l(t.datos.rankingArticulos,(function(e,n){return a("div",{key:n,staticClass:"row"},[a("div",{staticClass:"input-group mb-3 col-3"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v("Articulo # "+t._s(n+1))])]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.articulo,expression:"articulo.articulo",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.articulo},on:{input:function(a){a.target.composing||t.$set(e,"articulo",a.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),a("div",{staticClass:"input-group mb-3 col-3"},[t._m(2,!0),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.cant,expression:"articulo.cant",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:e.cant},on:{input:function(a){a.target.composing||t.$set(e,"cant",t._n(a.target.value))},blur:function(e){return t.$forceUpdate()}}})]),a("div",{staticClass:"input-group mb-3 col-6"},[t._m(3,!0),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.conductaMasComun,expression:"articulo.conductaMasComun",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.conductaMasComun},on:{input:function(a){a.target.composing||t.$set(e,"conductaMasComun",a.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])])}))],2),0!=t.erroresValidacion.length?a("div",{staticClass:"alert alert-warning"},[a("ul",t._l(t.erroresValidacion,(function(e,n){return a("li",{key:n},[t._v(t._s(e))])})),0)]):t._e(),a("p",[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.validar}},[t._v("Actualizar Cambios")])])])},bt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v("Total Resoluciones")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v("Casos de Violencia de Genero")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v("Cantidad")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v("Conducta más común")])])}];a("8615");function Ct(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function _t(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Ct(Object(a),!0).forEach((function(e){Object(ct["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Ct(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var wt=["allanamiento_autonomo","amparo","contravencional","ejecucion_de_multa","faltas","habeas_corpus","penal"],yt=[1,2,3,4,5,6,7,8,9,10,11,12],xt={tiposDeResoluciones:wt,meses:yt,props:["datosIniciales"],watch:{datosIniciales:function(t){this.datos=_t({},t)}},computed:{totalMes:function(){return this.datos.resolucionesPorMes.reduce((function(t,e){return t+ +e.cant}),0)},totalTipoResolucion:function(){var t=Object.values(this.datos.tipoResoluciones);return t.reduce((function(t,e){return t+ +e}),0)},totalArticulosTop5:function(){return this.datos.rankingArticulos.reduce((function(t,e){return t+ +e.cant}),0)},erroresValidacion:function(){var t=[];return this.totalMes!=this.datos.totalResoluciones&&t.push("El total del mes no coincide con el total de resoluciones."),this.totalTipoResolucion!=this.datos.totalResoluciones&&t.push("El total del tipo de resolucion no coincide con el total de resoluciones."),this.totalArticulosTop5>this.datos.totalResoluciones&&t.push("El total del TOP 5 de articulos no puede ser mayor al total de resoluciones."),t}},data:function(){return{datos:_t({},this.datosIniciales)}},methods:{validar:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=document.getElementsByClassName("needs-validation")[0],!1!==e.checkValidity()){t.next=5;break}return e.classList.add("was-validated"),this.$swal({title:"Revise los datos",icon:"info",html:"Debe ingresar todos los datos requeridos para continuar.<br/>\n          En caso de que un número deba ir vacío poner <b>0</b> en su lugar.",allowOutsideClick:!1}),t.abrupt("return");case 5:if(!(this.erroresValidacion.length>0)){t.next=11;break}return t.next=8,this.$swal({title:"Cuidado",text:"Los numeros totales no coinciden con el total de resoluciones",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Continuar de todas formas",cancelButtonText:"Cancelar",allowOutsideClick:!1});case 8:if(a=t.sent,a.value){t.next=11;break}return t.abrupt("return");case 11:return t.next=13,this.$swal({title:"Atención",text:"Esta seguro que quiere actualizar los datos del tablero?",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Sí, actualizar",cancelButtonText:"Cancelar",allowOutsideClick:!1});case 13:if(n=t.sent,n.value){t.next=16;break}return t.abrupt("return");case 16:this.$emit("update",this.datos);case 17:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},Ot=xt,kt=Object(x["a"])(Ot,gt,bt,!1,null,null,null),$t=kt.exports,jt=[2020,2019,2018,2017,2016],Pt={years:jt,components:{Formulario:$t},data:function(){return{yearSelected:2020,datos:null}},mounted:function(){this.cargarDatos()},computed:{datosSelected:function(){var t=this;return this.datos?this.datos.find((function(e){return e.year==t.yearSelected})):null}},methods:{mensajeError:function(t){return console.error(t),this.$swal({title:"Error",html:"Ocurrio un error inesperado al realizar la operación.<br/>\n        Por favor, si el error persiste contacte al administrador del sistema.",icon:"error",allowOutsideClick:!1})},mensajeExito:function(){return this.$swal({title:"Exito",text:"La operación se realizo correctamente.",icon:"success",allowOutsideClick:!1})},cargarDatos:function(){var t=this,e=this.$loading.show();ht().then((function(e){t.datos=e.resoluciones})).catch((function(e){t.mensajeError(e)})).finally((function(){return e.hide()}))},actualizar:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var a,n,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.getTokenSilently();case 2:a=t.sent,n=this.$loading.show(),vt(a,e).then((function(){r.mensajeExito()})).catch((function(t){r.mensajeError(t)})).finally((function(){return n.hide()}));case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},Rt=Pt,Et=Object(x["a"])(Rt,it,st,!1,null,null,null),St=Et.exports;r["a"].use(M["a"]);var At=new M["a"]({mode:"history",base:"/admin/",routes:[{path:"/",name:"home",component:tt},{path:"/profile",name:"profile",component:ot,beforeEnter:p},{path:"/resoluciones",name:"Resoluciones",component:St,beforeEnter:p}]}),Tt=At,zt=a("a70e"),Dt=a.n(zt),Mt=a("5ad2"),Ut=a.n(Mt);a("6e2e");Dt.a.registerLanguage("json",Ut.a);var qt={deep:!0,bind:function(t,e){var a=t.querySelectorAll("code");a.forEach((function(t){e.value&&(t.textContent=e.value),Dt.a.highlightBlock(t)}))},componentUpdated:function(t,e){var a=t.querySelectorAll("code");a.forEach((function(t){e.value&&(t.textContent=e.value,Dt.a.highlightBlock(t))}))}},Bt=a("ecee"),Nt=a("c074"),It=a("ad3d"),Lt=a("8160");a("e40d"),a("4413");r["a"].config.productionTip=!1,r["a"].use(d,{domain:Lt["c"],clientId:Lt["b"],audience:Lt["a"],onRedirectCallback:function(t){Tt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),r["a"].use(f.a,{width:128,height:128,color:"blue",loader:"bars",canCancel:!0}),r["a"].use(h["a"]),r["a"].directive("highlightjs",qt),Bt["c"].add(Nt["b"],Nt["d"],Nt["c"],Nt["a"]),r["a"].component("font-awesome-icon",It["a"]),new r["a"]({router:Tt,render:function(t){return t(D)}}).$mount("#app")},"64a9":function(t,e,a){},"66a0":function(t,e,a){"use strict";var n=a("2a99"),r=a.n(n);r.a},"7dbb":function(t,e,a){},8160:function(t){t.exports=JSON.parse('{"c":"pcyf10.auth0.com","b":"Z5wDP3ra2gHxqVNQ9mKzIH0ECh8LLxZz","a":"https://mxwotry8eg.execute-api.us-east-1.amazonaws.com/dev/resolucion"}')}});
//# sourceMappingURL=app.35400ae7.js.map