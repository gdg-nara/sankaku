!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{hO9l:function(e,r,o){"use strict";o.r(r),o.d(r,"TabsPageModule",(function(){return w}));var a,i,c,u=o("TEn/"),l=o("ofXK"),s=o("3Pt+"),b=o("tyNb"),f=o("mrSG"),p=o("z1BV"),h=o("fXoL"),d=[{path:"tabs",component:(a=function(){function e(n){t(this,e),this.modalController=n}var r,o,a;return r=e,(o=[{key:"presentModal",value:function(){return Object(f.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:p.a,cssClass:"my-custom-class",componentProps:{}});case 2:return n=t.sent,t.next=5,n.present();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)})))}}])&&n(r.prototype,o),a&&n(r,a),e}(),a.\u0275fac=function(t){return new(t||a)(h.Ib(u.o))},a.\u0275cmp=h.Cb({type:a,selectors:[["app-tabs"]],decls:6,vars:0,consts:[["slot","bottom"],["tab","tab1",3,"click"],["name","triangle"]],template:function(t,n){1&t&&(h.Lb(0,"ion-tabs"),h.Lb(1,"ion-tab-bar",0),h.Lb(2,"ion-tab-button",1),h.Sb("click",(function(){return n.presentModal()})),h.Jb(3,"ion-icon",2),h.Lb(4,"ion-label"),h.cc(5,"\u4e09\u89d2\u5f62\u3092\u4f5c\u308b"),h.Kb(),h.Kb(),h.Kb(),h.Kb())},directives:[u.j,u.h,u.i,u.e,u.f],styles:[""]}),a),children:[{path:"tab1",loadChildren:function(){return Promise.all([o.e(0),o.e(11)]).then(o.bind(null,"tmrb")).then((function(t){return t.Tab1PageModule}))}},{path:"tab2",loadChildren:function(){return Promise.all([o.e(0),o.e(12)]).then(o.bind(null,"TUkU")).then((function(t){return t.Tab2PageModule}))}},{path:"tab3",loadChildren:function(){return Promise.all([o.e(0),o.e(13)]).then(o.bind(null,"k+ul")).then((function(t){return t.Tab3PageModule}))}},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}],m=((c=function n(){t(this,n)}).\u0275mod=h.Gb({type:c}),c.\u0275inj=h.Fb({factory:function(t){return new(t||c)},imports:[[b.i.forChild(d)],b.i]}),c),w=((i=function n(){t(this,n)}).\u0275mod=h.Gb({type:i}),i.\u0275inj=h.Fb({factory:function(t){return new(t||i)},imports:[[u.m,l.b,s.a,m]]}),i)}}])}();