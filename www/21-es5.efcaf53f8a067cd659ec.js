function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,e,o){return e&&_defineProperties(n.prototype,e),o&&_defineProperties(n,o),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{hIfv:function(n,e,o){"use strict";o.r(e),o.d(e,"FavoritosPageModule",(function(){return g}));var i=o("ofXK"),t=o("3Pt+"),r=o("TEn/"),a=o("tyNb"),c=o("fXoL"),s=o("EAfB"),b=function(n){return["/tabs/","detalle",n]};function f(n,e){if(1&n&&(c.Nb(0,"ion-item",8),c.Nb(1,"ion-thumbnail",9),c.Lb(2,"img",10),c.Mb(),c.Nb(3,"ion-label"),c.Nb(4,"h2",11),c.ic(5),c.Mb(),c.Mb(),c.Mb()),2&n){var o=e.$implicit;c.ac("routerLink",c.cc(3,b,o.ID)),c.Ab(2),c.bc("src",o.Imagen,c.fc),c.Ab(3),c.jc(o.Nombre)}}function l(n,e){1&n&&(c.Nb(0,"ion-item"),c.ic(1," \xa1A\xfan no eliges ning\xfan favorito! "),c.Mb())}var u,p,h,m=[{path:"",component:(u=function(){function n(e){_classCallCheck(this,n),this.favService=e}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),u.\u0275fac=function(n){return new(n||u)(c.Kb(s.a))},u.\u0275cmp=c.Eb({type:u,selectors:[["app-favoritos"]],decls:13,vars:2,consts:[["color","primary"],["slot","end"],["src","https://firebasestorage.googleapis.com/v0/b/sophi-optimism-2020.appspot.com/o/imagenes%2Fimgsocial.png?alt=media&token=70bd5960-b560-415b-a90b-7cc1383d71ab"],[2,"font-weight","600","color","rgba(39, 39, 39, 0.81)","font-size","16px"],[2,"font-weight","600","color","rgb(133, 133, 133)","font-size","14px"],[1,"ion-padding"],[3,"routerLink",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"routerLink"],["slot","start"],[3,"src"],[1,"ion-text-wrap"]],template:function(n,e){1&n&&(c.Nb(0,"ion-header"),c.Nb(1,"ion-toolbar",0),c.Nb(2,"ion-avatar",1),c.Lb(3,"img",2),c.Mb(),c.Nb(4,"ion-card-content"),c.Nb(5,"h4",3),c.ic(6," Favoritos "),c.Mb(),c.Nb(7,"h6",4),c.ic(8," Algunas ideas importantes. "),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Nb(9,"ion-content",5),c.Nb(10,"ion-list"),c.hc(11,f,6,5,"ion-item",6),c.hc(12,l,2,0,"ion-item",7),c.Mb(),c.Mb()),2&n&&(c.Ab(11),c.ac("ngForOf",e.favService.favConsejos),c.Ab(1),c.ac("ngIf",0==(null==e.favService.favConsejos?null:e.favService.favConsejos.length)))},directives:[r.v,r.O,r.d,r.j,r.o,r.D,i.h,i.i,r.z,r.W,a.h,r.N,r.C],styles:[""]}),u)}],v=((h=function n(){_classCallCheck(this,n)}).\u0275mod=c.Ib({type:h}),h.\u0275inj=c.Hb({factory:function(n){return new(n||h)},imports:[[a.i.forChild(m)],a.i]}),h),g=((p=function n(){_classCallCheck(this,n)}).\u0275mod=c.Ib({type:p}),p.\u0275inj=c.Hb({factory:function(n){return new(n||p)},imports:[[i.b,t.d,r.P,v]]}),p)}}]);