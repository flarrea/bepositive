(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{TEHB:function(o,t,e){"use strict";e.r(t),e.d(t,"ConceptosPageModule",(function(){return f}));var n=e("ofXK"),i=e("3Pt+"),c=e("TEn/"),r=e("tyNb"),s=e("mrSG"),a=e("pwt2"),b=e("LvDl"),p=e.n(b),l=e("fXoL"),h=e("H+bZ");function d(o,t){if(1&o&&(l.Nb(0,"ion-item"),l.Nb(1,"ion-card"),l.Nb(2,"ion-label"),l.Nb(3,"h2",8),l.ic(4),l.Mb(),l.Mb(),l.Lb(5,"ion-img",9),l.Nb(6,"ion-card-content"),l.ic(7),l.Mb(),l.Mb(),l.Mb()),2&o){const o=t.$implicit;l.Ab(4),l.jc(o.Nombre),l.Ab(1),l.bc("src",o.Imagen),l.Ab(2),l.kc(" ",o.Texto," ")}}const m=[{path:"",component:(()=>{class o{constructor(o,t,e){this.apiService=o,this.activatedRoute=t,this.modalCtrl=e,this.concepto=null}ngOnInit(){this.apiService.getConceptos().then(o=>this.conceptos=o)}search(o){let t=o.detail.value;this.conceptos=p.a.filter(this.apiService.conceptos),""!=t&&(this.conceptos=this.conceptos.filter(o=>o.Nombre.toLowerCase().indexOf(t.toLowerCase())>-1))}presentModal(){return Object(s.__awaiter)(this,void 0,void 0,(function*(){(yield this.modalCtrl.create({component:a.a,componentProps:this.concepto})).present()}))}}return o.\u0275fac=function(t){return new(t||o)(l.Kb(h.a),l.Kb(r.a),l.Kb(c.S))},o.\u0275cmp=l.Eb({type:o,selectors:[["app-conceptos"]],decls:13,vars:1,consts:[["color","primary"],["slot","end"],["src","https://firebasestorage.googleapis.com/v0/b/sophi-optimism-2020.appspot.com/o/imagenes%2Fimgsocial.png?alt=media&token=70bd5960-b560-415b-a90b-7cc1383d71ab"],[2,"font-weight","600","color","rgba(39, 39, 39, 0.81)","font-size","16px"],[2,"font-weight","600","color","rgb(133, 133, 133)","font-size","14px"],[1,"ion-padding"],["placeholder","Buscar","clearIcon","",3,"ionChange"],[4,"ngFor","ngForOf"],[1,"ion-text-wrap"],[3,"src"]],template:function(o,t){1&o&&(l.Nb(0,"ion-header"),l.Nb(1,"ion-toolbar",0),l.Nb(2,"ion-avatar",1),l.Lb(3,"img",2),l.Mb(),l.Nb(4,"ion-card-content"),l.Nb(5,"h4",3),l.ic(6," Conceptos "),l.Mb(),l.Nb(7,"h6",4),l.ic(8," Algunas ideas importantes. "),l.Mb(),l.Mb(),l.Mb(),l.Mb(),l.Nb(9,"ion-content",5),l.Nb(10,"ion-searchbar",6),l.Vb("ionChange",(function(o){return t.search(o)})),l.Mb(),l.Nb(11,"ion-list"),l.hc(12,d,8,3,"ion-item",7),l.Mb(),l.Mb()),2&o&&(l.Ab(12),l.ac("ngForOf",t.conceptos))},directives:[c.v,c.O,c.d,c.j,c.o,c.I,c.Y,c.D,n.h,c.z,c.i,c.C,c.x],styles:[""]}),o})()}];let u=(()=>{class o{}return o.\u0275mod=l.Ib({type:o}),o.\u0275inj=l.Hb({factory:function(t){return new(t||o)},imports:[[r.i.forChild(m)],r.i]}),o})(),f=(()=>{class o{}return o.\u0275mod=l.Ib({type:o}),o.\u0275inj=l.Hb({factory:function(t){return new(t||o)},imports:[[n.b,i.d,c.P,u]]}),o})()}}]);