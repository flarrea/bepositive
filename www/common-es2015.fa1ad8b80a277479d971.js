(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return s}));const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=()=>{i.selection()},r=()=>{i.selectionStart()},a=()=>{i.selectionChanged()},s=()=>{i.selectionEnd()},c=t=>{i.impact(t)}},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=t*e/n-t+"ms",o=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,o=t*i-t+"ms",r=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},"8OAK":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),a=n("fXoL");let s=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},imports:[[i.b,o.d,r.P,o.k]]}),t})()},NKIX:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("QX1p"),o=n("ItpF"),r=n("2c9M");const a=(t,e)=>{let n,a;const s=(t,i,o)=>{if("undefined"==typeof document)return;const r=document.elementFromPoint(t,i);r&&e(r)?r!==n&&(l(),c(r,o)):l()},c=(t,e)=>{n=t,a||(a=n);const o=n;Object(i.n)(()=>o.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;Object(i.n)(()=>e.classList.remove("ion-activated")),t&&a!==n&&n.click(),n=void 0};return Object(o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>s(t.currentX,t.currentY,r.a),onMove:t=>s(t.currentX,t.currentY,r.b),onEnd:()=>{l(!0),Object(r.e)(),a=void 0}})}},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));const i=async(t,e,n,i,o)=>{if(t)return t.attachViewToDom(e,n,o,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>r.classList.add(t)),o&&Object.assign(r,o),e.appendChild(r),r.componentOnReady&&await r.componentOnReady(),r},o=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},euSA:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("fXoL"),o=n("TEn/"),r=n("3Pt+");let a=(()=>{class t{constructor(t,e){this.modalCtrl=t,this.navParams=e,this.consejo={},this.request={},this.consejo=e.data}ngOnInit(){let t=new Date,e=new Date(t.getTime()+1728e5);this.day_after_tomorrow=e.toISOString().slice(0,10);let n=new Date(e.getTime()+63072e6);this.two_years_later=n.toISOString().slice(0,10)}send(){console.log("Solicitud de contacto",this.request.Date,this.request.Time),console.log("por",this.request.FirstName,this.request.LastName,this.request.Email)}cancel(){this.modalCtrl.dismiss()}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(o.S),i.Kb(o.T))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-pregunta"]],decls:58,vars:9,consts:[["color","primary"],["slot","start"],["slot","end"],[3,"click"],[2,"font-weight","600","color","rgb(133, 133, 133)","font-size","14px"],[2,"font-weight","600","color","rgba(39, 39, 39, 0.81)","font-size","16px"],[1,"ion-padding"],[3,"src"],["text-wrap",""],["display-format","DDD, MMMM DD YYYY","picker-format","MMMM DD YYYY","placeholder","Seleccione una fecha!",3,"ngModel","min","max","ngModelChange"],["hourValues","9,10,11,12,13,14,15,16,17","minuteValues","0,15,30,45","display-format","hh:mm A","picker-format","h mm","placeholder","Seleccione una hora!",3,"ngModel","ngModelChange"],["type","text",3,"ngModel","ngModelChange"],["type","email",3,"ngModel","ngModelChange"],["expand","block",3,"click"]],template:function(t,e){1&t&&(i.Nb(0,"ion-header"),i.Nb(1,"ion-toolbar",0),i.Nb(2,"ion-buttons",1),i.Lb(3,"ion-back-button"),i.Mb(),i.Nb(4,"ion-buttons",2),i.Nb(5,"ion-button",3),i.Vb("click",(function(){return e.cancel()})),i.Nb(6,"h6",4),i.ic(7," Cerrar "),i.Mb(),i.Mb(),i.Mb(),i.Nb(8,"ion-card-content"),i.Nb(9,"h4",5),i.ic(10," Pregunta "),i.Mb(),i.Nb(11,"h6",4),i.ic(12," Solicita una llamada de consulta. "),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Nb(13,"ion-content",6),i.Nb(14,"ion-list"),i.Nb(15,"ion-item-group"),i.Nb(16,"ion-item-divider"),i.Nb(17,"ion-label"),i.ic(18,"Consejos"),i.Mb(),i.Mb(),i.Nb(19,"ion-item"),i.Nb(20,"ion-thumbnail",1),i.Lb(21,"img",7),i.Mb(),i.Nb(22,"ion-label"),i.Nb(23,"h2",8),i.ic(24),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Nb(25,"ion-item-group"),i.Nb(26,"ion-item-divider"),i.Nb(27,"ion-label"),i.ic(28,"Agenda un posible contacto."),i.Mb(),i.Mb(),i.Nb(29,"ion-item"),i.Nb(30,"ion-label"),i.ic(31,"Fecha"),i.Mb(),i.Nb(32,"ion-datetime",9),i.Vb("ngModelChange",(function(t){return e.request.Date=t})),i.Mb(),i.Mb(),i.Nb(33,"ion-item"),i.Nb(34,"ion-label"),i.ic(35,"Hora"),i.Mb(),i.Nb(36,"ion-datetime",10),i.Vb("ngModelChange",(function(t){return e.request.Time=t})),i.Mb(),i.Mb(),i.Mb(),i.Nb(37,"ion-item-group"),i.Nb(38,"ion-item-divider"),i.Nb(39,"ion-label"),i.ic(40,"Informaci\xf3n de Contacto"),i.Mb(),i.Mb(),i.Nb(41,"ion-item"),i.Nb(42,"ion-label"),i.ic(43,"Nombre"),i.Mb(),i.Nb(44,"ion-input",11),i.Vb("ngModelChange",(function(t){return e.request.FirstName=t})),i.Mb(),i.Mb(),i.Nb(45,"ion-item"),i.Nb(46,"ion-label"),i.ic(47,"Apellido"),i.Mb(),i.Nb(48,"ion-input",11),i.Vb("ngModelChange",(function(t){return e.request.LastName=t})),i.Mb(),i.Mb(),i.Nb(49,"ion-item"),i.Nb(50,"ion-label"),i.ic(51,"Email"),i.Mb(),i.Nb(52,"ion-input",12),i.Vb("ngModelChange",(function(t){return e.request.Email=t})),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Nb(53,"ion-footer",6),i.Nb(54,"ion-button",13),i.Vb("click",(function(){return e.cancel()})),i.ic(55,"Volver a Detalles"),i.Mb(),i.Nb(56,"ion-button",13),i.Vb("click",(function(){return e.send()})),i.ic(57,"Enviar Solicitud"),i.Mb(),i.Mb()),2&t&&(i.Ab(21),i.bc("src",e.consejo.Imagen,i.fc),i.Ab(3),i.jc(e.consejo.Nombre),i.Ab(8),i.bc("min",e.day_after_tomorrow),i.bc("max",e.two_years_later),i.ac("ngModel",e.request.Date),i.Ab(4),i.ac("ngModel",e.request.Time),i.Ab(8),i.ac("ngModel",e.request.FirstName),i.Ab(4),i.ac("ngModel",e.request.LastName),i.Ab(4),i.ac("ngModel",e.request.Email))},directives:[o.v,o.O,o.h,o.e,o.f,o.g,o.j,o.o,o.D,o.B,o.A,o.C,o.z,o.N,o.p,o.X,r.g,r.j,o.y,o.Y,o.t],styles:[""]}),t})()},hcCc:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return s}));const i=(t,e)=>null!==e.closest(t),o=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,["ion-color-"+t]:!0}:void 0,r=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},a=/^[a-z][a-z0-9+\-.]*:/,s=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!a.test(t)){const o=document.querySelector("ion-router");if(o)return null!=e&&e.preventDefault(),o.push(t,n,i)}return!1}},pwt2:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("fXoL"),o=n("TEn/"),r=n("3Pt+");let a=(()=>{class t{constructor(t,e){this.modalCtrl=t,this.navParams=e}ngOnInit(){}cancel(){this.modalCtrl.dismiss()}send(){console.log("Encuesta enviada")}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(o.S),i.Kb(o.T))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-encuesta"]],decls:60,vars:0,consts:[["color","primary"],["slot","start"],["slot","end"],[3,"click"],[2,"font-weight","600","color","rgb(133, 133, 133)","font-size","14px"],[2,"font-weight","600","color","rgba(39, 39, 39, 0.81)","font-size","16px"],["padding",""],["value","biff"],["slot","start","value","biff"],["src","https://firebasestorage.googleapis.com/v0/b/sophi-optimism-2020v2.appspot.com/o/imagenes%2Ffaces_positive.png?alt=media&token=0443fb69-712b-4aec-bd8b-d5f1d8369df5"],["slot","start","value","griff"],["src","https://firebasestorage.googleapis.com/v0/b/sophi-optimism-2020v2.appspot.com/o/imagenes%2Ffaces_neutral.png?alt=media&token=5afa0575-f2e8-4c60-b199-ff2e3d5b0784"],["slot","start","value","buford"],["src","https://firebasestorage.googleapis.com/v0/b/sophi-optimism-2020v2.appspot.com/o/imagenes%2Ffaces_negative.png?alt=media&token=f20b5d55-d90d-41d1-9311-6a8e04154f51"],["stacked",""],["type","text","placeholder","\xbfC\xf3mo te sientes hoy?"],["type","text","placeholder","\xbfHay alg\xfan pensamiento positivo?"],["type","text","placeholder","\xbfCu\xe1l?"],["type","text","placeholder","\xbfQu\xe9 pensamiento positivo eligirias para hoy?"],["expand","block",3,"click"]],template:function(t,e){1&t&&(i.Nb(0,"ion-header"),i.Nb(1,"ion-toolbar",0),i.Nb(2,"ion-buttons",1),i.Lb(3,"ion-back-button"),i.Mb(),i.Nb(4,"ion-buttons",2),i.Nb(5,"ion-button",3),i.Vb("click",(function(){return e.cancel()})),i.Nb(6,"h6",4),i.ic(7," Cerrar "),i.Mb(),i.Mb(),i.Mb(),i.Nb(8,"ion-card-content"),i.Nb(9,"h4",5),i.ic(10," Ecuesta "),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Nb(11,"ion-content",6),i.Nb(12,"ion-list"),i.Nb(13,"form"),i.Nb(14,"ion-item-group"),i.Nb(15,"ion-item-divider"),i.Nb(16,"ion-label"),i.ic(17,"Selecciona una carita"),i.Mb(),i.Mb(),i.Nb(18,"ion-list"),i.Nb(19,"ion-radio-group",7),i.Nb(20,"ion-item"),i.Nb(21,"ion-label"),i.ic(22,"Optimista"),i.Mb(),i.Lb(23,"ion-radio",8),i.Nb(24,"ion-avatar"),i.Lb(25,"img",9),i.Mb(),i.Mb(),i.Nb(26,"ion-item"),i.Nb(27,"ion-label"),i.ic(28,"Indeciso"),i.Mb(),i.Lb(29,"ion-radio",10),i.Nb(30,"ion-avatar"),i.Lb(31,"img",11),i.Mb(),i.Mb(),i.Nb(32,"ion-item"),i.Nb(33,"ion-label"),i.ic(34,"Pesimista"),i.Mb(),i.Lb(35,"ion-radio",12),i.Nb(36,"ion-avatar"),i.Lb(37,"img",13),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Nb(38,"ion-item-group"),i.Nb(39,"ion-item-divider"),i.Nb(40,"ion-label"),i.ic(41,"Algunas preguntas"),i.Mb(),i.Mb(),i.Nb(42,"ion-item"),i.Nb(43,"ion-label",14),i.ic(44,"1."),i.Mb(),i.Lb(45,"ion-input",15),i.Mb(),i.Nb(46,"ion-item"),i.Nb(47,"ion-label",14),i.ic(48,"2."),i.Mb(),i.Lb(49,"ion-input",16),i.Mb(),i.Nb(50,"ion-item"),i.Nb(51,"ion-label",14),i.ic(52,"3."),i.Mb(),i.Lb(53,"ion-input",17),i.Mb(),i.Nb(54,"ion-item"),i.Nb(55,"ion-label",14),i.ic(56,"4."),i.Mb(),i.Lb(57,"ion-textarea",18),i.Mb(),i.Nb(58,"ion-button",19),i.Vb("click",(function(){return e.send()})),i.ic(59,"Enviar"),i.Mb(),i.Mb(),i.Mb(),i.Mb(),i.Mb())},directives:[o.v,o.O,o.h,o.e,o.f,o.g,o.j,o.o,o.D,r.m,r.h,r.i,o.B,o.A,o.C,o.F,o.X,o.z,o.E,o.V,o.d,o.y,o.Y,o.M],styles:[""]}),t})()},qtgk:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("mrSG"),o=n("fXoL"),r=n("3Pt+"),a=n("TEn/"),s=n("ofXK");function c(t,e){1&t&&(o.Nb(0,"ion-item",6),o.Nb(1,"ion-label"),o.ic(2,"Por favor, ingrese un email v\xe1lido."),o.Mb(),o.Mb())}function l(t,e){if(1&t&&(o.Nb(0,"ion-item"),o.Nb(1,"ion-label",1),o.ic(2,"Password"),o.Mb(),o.Lb(3,"ion-input",7),o.Mb()),2&t){const t=o.Xb();o.Ab(3),o.Cb("invalid",!t.authForm.controls.password.valid&&t.authForm.controls.password.touched)}}function b(t,e){1&t&&(o.Nb(0,"ion-item",6),o.Nb(1,"ion-label"),o.ic(2,"Su password necesita m\xe1s de 6 caracteres."),o.Mb(),o.Mb())}let u=(()=>{class t{constructor(t,e,n){this.formBuilder=t,this.loadingCtrl=e,this.alertCtrl=n,this.isPasswordResetPage=!1,this.formSubmitted=new o.n,this.authForm=this.formBuilder.group({email:["",r.l.compose([r.l.required,r.l.email])],password:["",r.l.minLength(6)]})}ngOnInit(){}submitCredentials(t){t.valid?(this.showLoading(),this.formSubmitted.emit({email:t.value.email,password:t.value.password})):console.log("El formulario a\xfan no es v\xe1lido, valor actual:",t.value)}showLoading(){return Object(i.__awaiter)(this,void 0,void 0,(function*(){try{this.loading=yield this.loadingCtrl.create(),yield this.loading.present()}catch(t){this.handleError(t)}}))}hideLoading(){return this.loading.dismiss()}handleError(t){return Object(i.__awaiter)(this,void 0,void 0,(function*(){const e=yield this.alertCtrl.create({message:t.message,buttons:[{text:"Ok",role:"cancel"}]});yield e.present()}))}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(r.a),o.Kb(a.R),o.Kb(a.b))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-auth-form"]],inputs:{actionButtonText:"actionButtonText",isPasswordResetPage:"isPasswordResetPage"},outputs:{formSubmitted:"formSubmitted"},decls:10,vars:8,consts:[[3,"formGroup"],["position","stacked"],["formControlName","email","type","email","placeholder","Su email"],["class","error-message",4,"ngIf"],[4,"ngIf"],["expand","block",3,"disabled","click"],[1,"error-message"],["formControlName","password","type","password","placeholder","Su password"]],template:function(t,e){1&t&&(o.Nb(0,"form",0),o.Nb(1,"ion-item"),o.Nb(2,"ion-label",1),o.ic(3,"Email"),o.Mb(),o.Lb(4,"ion-input",2),o.Mb(),o.hc(5,c,3,0,"ion-item",3),o.hc(6,l,4,2,"ion-item",4),o.hc(7,b,3,0,"ion-item",3),o.Nb(8,"ion-button",5),o.Vb("click",(function(){return e.submitCredentials(e.authForm)})),o.ic(9),o.Mb(),o.Mb()),2&t&&(o.ac("formGroup",e.authForm),o.Ab(4),o.Cb("invalid",!e.authForm.controls.email.valid&&e.authForm.controls.email.touched),o.Ab(1),o.ac("ngIf",!e.authForm.controls.email.valid&&e.authForm.controls.email.touched),o.Ab(1),o.ac("ngIf",!e.isPasswordResetPage),o.Ab(1),o.ac("ngIf",!e.authForm.controls.password.valid&&e.authForm.controls.password.touched&&!e.isPasswordResetPage),o.Ab(1),o.ac("disabled",!e.authForm.valid),o.Ab(1),o.kc(" ",e.actionButtonText," "))},directives:[r.m,r.h,r.c,a.z,a.C,a.y,a.Y,r.g,r.b,s.i,a.g],styles:["form[_ngcontent-%COMP%]{padding:12px;margin-bottom:32px}form[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-top:30px}p[_ngcontent-%COMP%]{font-size:.8em;color:#d2d2d2}ion-label[_ngcontent-%COMP%]{margin-left:5px}ion-input[_ngcontent-%COMP%]{padding:5px}.invalid[_ngcontent-%COMP%]{border-bottom:1px solid #ff6153}.error-message[_ngcontent-%COMP%]{min-height:2.2rem}.error-message[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:2px 0;font-size:60%;color:#ff6153}.error-message[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{border-bottom:0}"]}),t})()}}]);