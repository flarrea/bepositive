(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{hIfv:function(o,n,t){"use strict";t.r(n),t.d(n,"FavoritosPageModule",(function(){return m}));var i=t("ofXK"),e=t("3Pt+"),r=t("TEn/"),c=t("tyNb"),s=t("fXoL"),a=t("EAfB");const b=function(o){return["/tabs/","detalle",o]};function f(o,n){if(1&o&&(s.Nb(0,"ion-item",8),s.Nb(1,"ion-thumbnail",9),s.Lb(2,"img",10),s.Mb(),s.Nb(3,"ion-label"),s.Nb(4,"h2",11),s.ic(5),s.Mb(),s.Mb(),s.Mb()),2&o){const o=n.$implicit;s.ac("routerLink",s.cc(3,b,o.ID)),s.Ab(2),s.bc("src",o.Imagen,s.fc),s.Ab(3),s.jc(o.Nombre)}}function l(o,n){1&o&&(s.Nb(0,"ion-item"),s.ic(1," \xa1A\xfan no eliges ning\xfan favorito! "),s.Mb())}const p=[{path:"",component:(()=>{class o{constructor(o){this.favService=o}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)(s.Kb(a.a))},o.\u0275cmp=s.Eb({type:o,selectors:[["app-favoritos"]],decls:13,vars:2,consts:[["color","primary"],["slot","end"],["src","https://firebasestorage.googleapis.com/v0/b/sophi-optimism-2020.appspot.com/o/imagenes%2Fimgsocial.png?alt=media&token=70bd5960-b560-415b-a90b-7cc1383d71ab"],[2,"font-weight","600","color","rgba(39, 39, 39, 0.81)","font-size","16px"],[2,"font-weight","600","color","rgb(133, 133, 133)","font-size","14px"],[1,"ion-padding"],[3,"routerLink",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"routerLink"],["slot","start"],[3,"src"],[1,"ion-text-wrap"]],template:function(o,n){1&o&&(s.Nb(0,"ion-header"),s.Nb(1,"ion-toolbar",0),s.Nb(2,"ion-avatar",1),s.Lb(3,"img",2),s.Mb(),s.Nb(4,"ion-card-content"),s.Nb(5,"h4",3),s.ic(6," Favoritos "),s.Mb(),s.Nb(7,"h6",4),s.ic(8," Algunas ideas importantes. "),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(9,"ion-content",5),s.Nb(10,"ion-list"),s.hc(11,f,6,5,"ion-item",6),s.hc(12,l,2,0,"ion-item",7),s.Mb(),s.Mb()),2&o&&(s.Ab(11),s.ac("ngForOf",n.favService.favConsejos),s.Ab(1),s.ac("ngIf",0==(null==n.favService.favConsejos?null:n.favService.favConsejos.length)))},directives:[r.v,r.O,r.d,r.j,r.o,r.D,i.h,i.i,r.z,r.W,c.h,r.N,r.C],styles:[""]}),o})()}];let u=(()=>{class o{}return o.\u0275mod=s.Ib({type:o}),o.\u0275inj=s.Hb({factory:function(n){return new(n||o)},imports:[[c.i.forChild(p)],c.i]}),o})(),m=(()=>{class o{}return o.\u0275mod=s.Ib({type:o}),o.\u0275inj=s.Hb({factory:function(n){return new(n||o)},imports:[[i.b,e.d,r.P,u]]}),o})()}}]);