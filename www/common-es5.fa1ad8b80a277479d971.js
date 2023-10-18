function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function asyncGeneratorStep(e,t,n,i,o,r,a){try{var c=e[r](a),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(i,o)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var r=e.apply(t,n);function a(e){asyncGeneratorStep(r,i,o,a,c,"next",e)}function c(e){asyncGeneratorStep(r,i,o,a,c,"throw",e)}a(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return c}));var i={getEngine:function(){var e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(e){var t=this.getEngine();if(t){var n=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:n})}},notification:function(e){var t=this.getEngine();if(t){var n=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:n})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd:function(){var e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},o=function(){i.selection()},r=function(){i.selectionStart()},a=function(){i.selectionChanged()},c=function(){i.selectionEnd()},s=function(e){i.impact(e)}},"6i10":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i={bubbles:{dur:1e3,circles:9,fn:function(e,t,n){var i=e*t/n-e+"ms",o=2*Math.PI*t/n;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:function(e,t,n){var i=t/n,o=e*i-e+"ms",r=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,t){return{r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(e,t,n){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":e*t/n-e+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(e,t,n){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":e*t/n-e+"ms"}}}}}},"8OAK":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),a=n("fXoL"),c=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(t){return new(t||e)},imports:[[i.b,o.d,r.P,o.k]]}),e}()},NKIX:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("QX1p"),o=n("ItpF"),r=n("2c9M"),a=function(e,t){var n,a,c=function(e,i,o){if("undefined"!=typeof document){var r=document.elementFromPoint(e,i);r&&t(r)?r!==n&&(u(),s(r,o)):u()}},s=function(e,t){n=e,a||(a=n);var o=n;Object(i.n)((function(){return o.classList.add("ion-activated")})),t()},u=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(n){var t=n;Object(i.n)((function(){return t.classList.remove("ion-activated")})),e&&a!==n&&n.click(),n=void 0}};return Object(o.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:function(e){return c(e.currentX,e.currentY,r.a)},onMove:function(e){return c(e.currentX,e.currentY,r.b)},onEnd:function(){u(!0),Object(r.e)(),a=void 0}})}},NqGI:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var i=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n,i,o,r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",t.attachViewToDom(n,i,r,o));case 2:if("string"==typeof i||i instanceof HTMLElement){e.next=4;break}throw new Error("framework delegate is missing");case 4:if(a="string"==typeof i?n.ownerDocument&&n.ownerDocument.createElement(i):i,o&&o.forEach((function(e){return a.classList.add(e)})),r&&Object.assign(a,r),n.appendChild(a),e.t0=a.componentOnReady,!e.t0){e.next=12;break}return e.next=12,a.componentOnReady();case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})));return function(t,n,i,o,r){return e.apply(this,arguments)}}(),o=function(e,t){if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},euSA:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("fXoL"),o=n("TEn/"),r=n("3Pt+"),a=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this.modalCtrl=t,this.navParams=n,this.consejo={},this.request={},this.consejo=n.data}return _createClass(e,[{key:"ngOnInit",value:function(){var e=new Date,t=new Date(e.getTime()+1728e5);this.day_after_tomorrow=t.toISOString().slice(0,10);var n=new Date(t.getTime()+63072e6);this.two_years_later=n.toISOString().slice(0,10)}},{key:"send",value:function(){console.log("Solicitud de contacto",this.request.Date,this.request.Time),console.log("por",this.request.FirstName,this.request.LastName,this.request.Email)}},{key:"cancel",value:function(){this.modalCtrl.dismiss()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.Kb(o.S),i.Kb(o.T))},e.\u0275cmp=i.Eb({type:e,selectors:[["app-pregunta"]],decls:58,vars:9,consts:[["color","primary"],["slot","start"],["slot","end"],[3,"click"],[2,"font-weight","600","color","rgb(133, 133, 133)","font-size","14px"],[2,"font-weight","600","color","rgba(39, 39, 39, 0.81)","font-size","16px"],[1,"ion-padding"],[3,"src"],["text-wrap",""],["display-format","DDD, MMMM DD YYYY","picker-format","MMMM DD YYYY","placeholder","Seleccione una fecha!",3,"ngModel","min","max","ngModelChange"],["hourValues","9,10,11,12,13,14,15,16,17","minuteValues","0,15,30,45","display-format","hh:mm A","picker-format","h mm","placeholder","Seleccione una hora!",3,"ngModel","ngModelChange"],["type","text",3,"ngModel","ngModelChange"],["type","email",3,"ngModel","ngModelChange"],["expand","block",3,"click"]],template:function(e,t){1&e&&(i.Nb(0,"ion-header"),i.Nb(1,"ion-toolbar",0),i.Nb(2,"ion-buttons",1),i.Lb(3,"ion-back-button"),i.Mb(),i.Nb(4,"ion-buttons",2),i.Nb(5,"ion-button",3),i.Vb("click",(function(){return t.cancel()})),i.Nb(6,"h6",4),i.ic(7," Cerrar "),i.Mb(),i.Mb(),i.Mb(),i.Nb(8,"ion-card-content"),i.Nb(9,"h4",5),i.ic(10," Pregunta "),i.Mb(),i.Nb(11,"h6",4),i.ic(12," Solicita una llamada de consulta. "),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Nb(13,"ion-content",6),i.Nb(14,"ion-list"),i.Nb(15,"ion-item-group"),i.Nb(16,"ion-item-divider"),i.Nb(17,"ion-label"),i.ic(18,"Consejos"),i.Mb(),i.Mb(),i.Nb(19,"ion-item"),i.Nb(20,"ion-thumbnail",1),i.Lb(21,"img",7),i.Mb(),i.Nb(22,"ion-label"),i.Nb(23,"h2",8),i.ic(24),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Nb(25,"ion-item-group"),i.Nb(26,"ion-item-divider"),i.Nb(27,"ion-label"),i.ic(28,"Agenda un posible contacto."),i.Mb(),i.Mb(),i.Nb(29,"ion-item"),i.Nb(30,"ion-label"),i.ic(31,"Fecha"),i.Mb(),i.Nb(32,"ion-datetime",9),i.Vb("ngModelChange",(function(e){return t.request.Date=e})),i.Mb(),i.Mb(),i.Nb(33,"ion-item"),i.Nb(34,"ion-label"),i.ic(35,"Hora"),i.Mb(),i.Nb(36,"ion-datetime",10),i.Vb("ngModelChange",(function(e){return t.request.Time=e})),i.Mb(),i.Mb(),i.Mb(),i.Nb(37,"ion-item-group"),i.Nb(38,"ion-item-divider"),i.Nb(39,"ion-label"),i.ic(40,"Informaci\xf3n de Contacto"),i.Mb(),i.Mb(),i.Nb(41,"ion-item"),i.Nb(42,"ion-label"),i.ic(43,"Nombre"),i.Mb(),i.Nb(44,"ion-input",11),i.Vb("ngModelChange",(function(e){return t.request.FirstName=e})),i.Mb(),i.Mb(),i.Nb(45,"ion-item"),i.Nb(46,"ion-label"),i.ic(47,"Apellido"),i.Mb(),i.Nb(48,"ion-input",11),i.Vb("ngModelChange",(function(e){return t.request.LastName=e})),i.Mb(),i.Mb(),i.Nb(49,"ion-item"),i.Nb(50,"ion-label"),i.ic(51,"Email"),i.Mb(),i.Nb(52,"ion-input",12),i.Vb("ngModelChange",(function(e){return t.request.Email=e})),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Nb(53,"ion-footer",6),i.Nb(54,"ion-button",13),i.Vb("click",(function(){return t.cancel()})),i.ic(55,"Volver a Detalles"),i.Mb(),i.Nb(56,"ion-button",13),i.Vb("click",(function(){return t.send()})),i.ic(57,"Enviar Solicitud"),i.Mb(),i.Mb()),2&e&&(i.Ab(21),i.bc("src",t.consejo.Imagen,i.fc),i.Ab(3),i.jc(t.consejo.Nombre),i.Ab(8),i.bc("min",t.day_after_tomorrow),i.bc("max",t.two_years_later),i.ac("ngModel",t.request.Date),i.Ab(4),i.ac("ngModel",t.request.Time),i.Ab(8),i.ac("ngModel",t.request.FirstName),i.Ab(4),i.ac("ngModel",t.request.LastName),i.Ab(4),i.ac("ngModel",t.request.Email))},directives:[o.v,o.O,o.h,o.e,o.f,o.g,o.j,o.o,o.D,o.B,o.A,o.C,o.z,o.N,o.p,o.X,r.g,r.j,o.y,o.Y,o.t],styles:[""]}),e}()},hcCc:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return c}));var i=function(e,t){return null!==t.closest(e)},o=function(e){return"string"==typeof e&&e.length>0?_defineProperty({"ion-color":!0},"ion-color-"+e,!0):void 0},r=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},a=/^[a-z][a-z0-9+\-.]*:/,c=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n,i,o){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t||"#"===t[0]||a.test(t)){e.next=4;break}if(!(r=document.querySelector("ion-router"))){e.next=4;break}return e.abrupt("return",(null!=n&&n.preventDefault(),r.push(t,i,o)));case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e)})));return function(t,n,i,o){return e.apply(this,arguments)}}()},pwt2:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("fXoL"),o=n("TEn/"),r=n("3Pt+"),a=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this.modalCtrl=t,this.navParams=n}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"cancel",value:function(){this.modalCtrl.dismiss()}},{key:"send",value:function(){console.log("Encuesta enviada")}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.Kb(o.S),i.Kb(o.T))},e.\u0275cmp=i.Eb({type:e,selectors:[["app-encuesta"]],decls:60,vars:0,consts:[["color","primary"],["slot","start"],["slot","end"],[3,"click"],[2,"font-weight","600","color","rgb(133, 133, 133)","font-size","14px"],[2,"font-weight","600","color","rgba(39, 39, 39, 0.81)","font-size","16px"],["padding",""],["value","biff"],["slot","start","value","biff"],["src","https://firebasestorage.googleapis.com/v0/b/sophi-optimism-2020v2.appspot.com/o/imagenes%2Ffaces_positive.png?alt=media&token=0443fb69-712b-4aec-bd8b-d5f1d8369df5"],["slot","start","value","griff"],["src","https://firebasestorage.googleapis.com/v0/b/sophi-optimism-2020v2.appspot.com/o/imagenes%2Ffaces_neutral.png?alt=media&token=5afa0575-f2e8-4c60-b199-ff2e3d5b0784"],["slot","start","value","buford"],["src","https://firebasestorage.googleapis.com/v0/b/sophi-optimism-2020v2.appspot.com/o/imagenes%2Ffaces_negative.png?alt=media&token=f20b5d55-d90d-41d1-9311-6a8e04154f51"],["stacked",""],["type","text","placeholder","\xbfC\xf3mo te sientes hoy?"],["type","text","placeholder","\xbfHay alg\xfan pensamiento positivo?"],["type","text","placeholder","\xbfCu\xe1l?"],["type","text","placeholder","\xbfQu\xe9 pensamiento positivo eligirias para hoy?"],["expand","block",3,"click"]],template:function(e,t){1&e&&(i.Nb(0,"ion-header"),i.Nb(1,"ion-toolbar",0),i.Nb(2,"ion-buttons",1),i.Lb(3,"ion-back-button"),i.Mb(),i.Nb(4,"ion-buttons",2),i.Nb(5,"ion-button",3),i.Vb("click",(function(){return t.cancel()})),i.Nb(6,"h6",4),i.ic(7," Cerrar "),i.Mb(),i.Mb(),i.Mb(),i.Nb(8,"ion-card-content"),i.Nb(9,"h4",5),i.ic(10," Ecuesta "),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Nb(11,"ion-content",6),i.Nb(12,"ion-list"),i.Nb(13,"form"),i.Nb(14,"ion-item-group"),i.Nb(15,"ion-item-divider"),i.Nb(16,"ion-label"),i.ic(17,"Selecciona una carita"),i.Mb(),i.Mb(),i.Nb(18,"ion-list"),i.Nb(19,"ion-radio-group",7),i.Nb(20,"ion-item"),i.Nb(21,"ion-label"),i.ic(22,"Optimista"),i.Mb(),i.Lb(23,"ion-radio",8),i.Nb(24,"ion-avatar"),i.Lb(25,"img",9),i.Mb(),i.Mb(),i.Nb(26,"ion-item"),i.Nb(27,"ion-label"),i.ic(28,"Indeciso"),i.Mb(),i.Lb(29,"ion-radio",10),i.Nb(30,"ion-avatar"),i.Lb(31,"img",11),i.Mb(),i.Mb(),i.Nb(32,"ion-item"),i.Nb(33,"ion-label"),i.ic(34,"Pesimista"),i.Mb(),i.Lb(35,"ion-radio",12),i.Nb(36,"ion-avatar"),i.Lb(37,"img",13),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Nb(38,"ion-item-group"),i.Nb(39,"ion-item-divider"),i.Nb(40,"ion-label"),i.ic(41,"Algunas preguntas"),i.Mb(),i.Mb(),i.Nb(42,"ion-item"),i.Nb(43,"ion-label",14),i.ic(44,"1."),i.Mb(),i.Lb(45,"ion-input",15),i.Mb(),i.Nb(46,"ion-item"),i.Nb(47,"ion-label",14),i.ic(48,"2."),i.Mb(),i.Lb(49,"ion-input",16),i.Mb(),i.Nb(50,"ion-item"),i.Nb(51,"ion-label",14),i.ic(52,"3."),i.Mb(),i.Lb(53,"ion-input",17),i.Mb(),i.Nb(54,"ion-item"),i.Nb(55,"ion-label",14),i.ic(56,"4."),i.Mb(),i.Lb(57,"ion-textarea",18),i.Mb(),i.Nb(58,"ion-button",19),i.Vb("click",(function(){return t.send()})),i.ic(59,"Enviar"),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb())},directives:[o.v,o.O,o.h,o.e,o.f,o.g,o.j,o.o,o.D,r.m,r.h,r.i,o.B,o.A,o.C,o.F,o.X,o.z,o.E,o.V,o.d,o.y,o.Y,o.M],styles:[""]}),e}()},qtgk:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var i=n("mrSG"),o=n("fXoL"),r=n("3Pt+"),a=n("TEn/"),c=n("ofXK");function s(e,t){1&e&&(o.Nb(0,"ion-item",6),o.Nb(1,"ion-label"),o.ic(2,"Por favor, ingrese un email v\xe1lido."),o.Mb(),o.Mb())}function u(e,t){if(1&e&&(o.Nb(0,"ion-item"),o.Nb(1,"ion-label",1),o.ic(2,"Password"),o.Mb(),o.Lb(3,"ion-input",7),o.Mb()),2&e){var n=o.Xb();o.Ab(3),o.Cb("invalid",!n.authForm.controls.password.valid&&n.authForm.controls.password.touched)}}function l(e,t){1&e&&(o.Nb(0,"ion-item",6),o.Nb(1,"ion-label"),o.ic(2,"Su password necesita m\xe1s de 6 caracteres."),o.Mb(),o.Mb())}var b=function(){var e=function(){function e(t,n,i){_classCallCheck(this,e),this.formBuilder=t,this.loadingCtrl=n,this.alertCtrl=i,this.isPasswordResetPage=!1,this.formSubmitted=new o.n,this.authForm=this.formBuilder.group({email:["",r.l.compose([r.l.required,r.l.email])],password:["",r.l.minLength(6)]})}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"submitCredentials",value:function(e){e.valid?(this.showLoading(),this.formSubmitted.emit({email:e.value.email,password:e.value.password})):console.log("El formulario a\xfan no es v\xe1lido, valor actual:",e.value)}},{key:"showLoading",value:function(){return Object(i.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.loadingCtrl.create();case 3:return this.loading=e.sent,e.next=6,this.loading.present();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.handleError(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})))}},{key:"hideLoading",value:function(){return this.loading.dismiss()}},{key:"handleError",value:function(e){return Object(i.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertCtrl.create({message:e.message,buttons:[{text:"Ok",role:"cancel"}]});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}}),t,this)})))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.Kb(r.a),o.Kb(a.R),o.Kb(a.b))},e.\u0275cmp=o.Eb({type:e,selectors:[["app-auth-form"]],inputs:{actionButtonText:"actionButtonText",isPasswordResetPage:"isPasswordResetPage"},outputs:{formSubmitted:"formSubmitted"},decls:10,vars:8,consts:[[3,"formGroup"],["position","stacked"],["formControlName","email","type","email","placeholder","Su email"],["class","error-message",4,"ngIf"],[4,"ngIf"],["expand","block",3,"disabled","click"],[1,"error-message"],["formControlName","password","type","password","placeholder","Su password"]],template:function(e,t){1&e&&(o.Nb(0,"form",0),o.Nb(1,"ion-item"),o.Nb(2,"ion-label",1),o.ic(3,"Email"),o.Mb(),o.Lb(4,"ion-input",2),o.Mb(),o.hc(5,s,3,0,"ion-item",3),o.hc(6,u,4,2,"ion-item",4),o.hc(7,l,3,0,"ion-item",3),o.Nb(8,"ion-button",5),o.Vb("click",(function(){return t.submitCredentials(t.authForm)})),o.ic(9),o.Mb(),o.Mb()),2&e&&(o.ac("formGroup",t.authForm),o.Ab(4),o.Cb("invalid",!t.authForm.controls.email.valid&&t.authForm.controls.email.touched),o.Ab(1),o.ac("ngIf",!t.authForm.controls.email.valid&&t.authForm.controls.email.touched),o.Ab(1),o.ac("ngIf",!t.isPasswordResetPage),o.Ab(1),o.ac("ngIf",!t.authForm.controls.password.valid&&t.authForm.controls.password.touched&&!t.isPasswordResetPage),o.Ab(1),o.ac("disabled",!t.authForm.valid),o.Ab(1),o.kc(" ",t.actionButtonText," "))},directives:[r.m,r.h,r.c,a.z,a.C,a.y,a.Y,r.g,r.b,c.i,a.g],styles:["form[_ngcontent-%COMP%]{padding:12px;margin-bottom:32px}form[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-top:30px}p[_ngcontent-%COMP%]{font-size:.8em;color:#d2d2d2}ion-label[_ngcontent-%COMP%]{margin-left:5px}ion-input[_ngcontent-%COMP%]{padding:5px}.invalid[_ngcontent-%COMP%]{border-bottom:1px solid #ff6153}.error-message[_ngcontent-%COMP%]{min-height:2.2rem}.error-message[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:2px 0;font-size:60%;color:#ff6153}.error-message[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{border-bottom:0}"]}),e}()}}]);