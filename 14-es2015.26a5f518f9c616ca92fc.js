(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{hO9l:function(t,n,e){"use strict";e.r(n),e.d(n,"TabsPageModule",(function(){return d}));var o=e("TEn/"),a=e("ofXK"),r=e("3Pt+"),l=e("tyNb"),b=e("mrSG"),c=e("z1BV"),i=e("fXoL");const s=[{path:"tabs",component:(()=>{class t{constructor(t){this.modalController=t}presentModal(){return Object(b.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:c.a,cssClass:"my-custom-class",componentProps:{}});return yield t.present()}))}}return t.\u0275fac=function(n){return new(n||t)(i.Ib(o.o))},t.\u0275cmp=i.Cb({type:t,selectors:[["app-tabs"]],decls:6,vars:0,consts:[["slot","bottom"],["tab","tab1",3,"click"],["name","triangle"]],template:function(t,n){1&t&&(i.Lb(0,"ion-tabs"),i.Lb(1,"ion-tab-bar",0),i.Lb(2,"ion-tab-button",1),i.Sb("click",(function(){return n.presentModal()})),i.Jb(3,"ion-icon",2),i.Lb(4,"ion-label"),i.cc(5,"\u4e09\u89d2\u5f62\u3092\u4f5c\u308b"),i.Kb(),i.Kb(),i.Kb(),i.Kb())},directives:[o.j,o.h,o.i,o.e,o.f],styles:[""]}),t})(),children:[{path:"tab1",loadChildren:()=>e.e(11).then(e.bind(null,"tmrb")).then(t=>t.Tab1PageModule)},{path:"tab2",loadChildren:()=>e.e(12).then(e.bind(null,"TUkU")).then(t=>t.Tab2PageModule)},{path:"tab3",loadChildren:()=>e.e(13).then(e.bind(null,"k+ul")).then(t=>t.Tab3PageModule)},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}];let u=(()=>{class t{}return t.\u0275mod=i.Gb({type:t}),t.\u0275inj=i.Fb({factory:function(n){return new(n||t)},imports:[[l.i.forChild(s)],l.i]}),t})(),d=(()=>{class t{}return t.\u0275mod=i.Gb({type:t}),t.\u0275inj=i.Fb({factory:function(n){return new(n||t)},imports:[[o.m,a.b,r.a,u]]}),t})()}}]);