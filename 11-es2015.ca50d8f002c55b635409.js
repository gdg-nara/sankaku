(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{tmrb:function(t,i,e){"use strict";e.r(i),e.d(i,"Tab1PageModule",(function(){return W}));var s=e("TEn/"),c=e("ofXK"),h=e("3Pt+"),n=e("qtYk"),o=e("tyNb"),x=e("mrSG"),a=e("z1BV"),l=e("fXoL"),r=e("5+WD");const b=["canvas"],d=["canvas2"],v=["canvas3"],u=["canvas4"],k=["canvas5"],p=["canvas6"],g=["canvas7"],m=["canvas8"],T=["canvas9"],C=["canvas10"],P=["canvas11"],y=["canvas12"],f=[{path:"",component:(()=>{class t{constructor(t,i){this.document=t,this.modalController=i}presentModal(){return Object(x.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:a.a,cssClass:"my-custom-class",componentProps:{}});return yield t.present()}))}ngOnInit(){this.ctx1=this.canvas.nativeElement.getContext("2d"),this.ctx1.beginPath(),this.ctx1.moveTo(100,0),this.ctx1.lineTo(100,200),this.ctx1.strokeStyle="red",this.ctx1.lineWidth=4,this.ctx1.lineCap="round",this.ctx1.stroke(),this.ctx1.closePath(),this.ctx1.beginPath(),this.ctx1.moveTo(100,200),this.ctx1.lineTo(0,100),this.ctx1.lineWidth=4,this.ctx1.lineCap="round",this.ctx1.strokeStyle="blue",this.ctx1.stroke(),this.ctx1.beginPath(),this.ctx1.moveTo(0,100),this.ctx1.lineTo(100,0),this.ctx1.lineWidth=4,this.ctx1.lineCap="round",this.ctx1.strokeStyle="blue",this.ctx1.stroke(),this.ctx2=this.canvas2.nativeElement.getContext("2d"),this.ctx2.beginPath(),this.ctx2.moveTo(100,0),this.ctx2.lineTo(100,200),this.ctx2.strokeStyle="red",this.ctx2.lineWidth=4,this.ctx2.lineCap="round",this.ctx2.stroke(),this.ctx2.closePath(),this.ctx2.beginPath(),this.ctx2.moveTo(100,200),this.ctx2.lineTo(200,100),this.ctx2.lineWidth=4,this.ctx2.lineCap="round",this.ctx2.strokeStyle="blue",this.ctx2.stroke(),this.ctx2.beginPath(),this.ctx2.moveTo(200,100),this.ctx2.lineTo(100,0),this.ctx2.lineWidth=4,this.ctx2.lineCap="round",this.ctx2.strokeStyle="blue",this.ctx2.stroke(),this.ctx3=this.canvas3.nativeElement.getContext("2d"),this.ctx3.beginPath(),this.ctx3.moveTo(100,0),this.ctx3.lineTo(100,200),this.ctx3.strokeStyle="red",this.ctx3.lineWidth=4,this.ctx3.lineCap="round",this.ctx3.stroke(),this.ctx3.closePath(),this.ctx3.beginPath(),this.ctx3.moveTo(100,200),this.ctx3.lineTo(0,100),this.ctx3.lineWidth=4,this.ctx3.lineCap="round",this.ctx3.strokeStyle="blue",this.ctx3.stroke(),this.ctx3.beginPath(),this.ctx3.moveTo(0,100),this.ctx3.lineTo(100,0),this.ctx3.lineWidth=4,this.ctx3.lineCap="round",this.ctx3.strokeStyle="blue",this.ctx3.stroke(),this.ctx4=this.canvas4.nativeElement.getContext("2d"),this.ctx4.beginPath(),this.ctx4.moveTo(100,0),this.ctx4.lineTo(100,200),this.ctx4.strokeStyle="red",this.ctx4.lineWidth=4,this.ctx4.lineCap="round",this.ctx4.stroke(),this.ctx4.closePath(),this.ctx4.beginPath(),this.ctx4.moveTo(100,200),this.ctx4.lineTo(0,100),this.ctx4.lineWidth=4,this.ctx4.lineCap="round",this.ctx4.strokeStyle="blue",this.ctx4.stroke(),this.ctx4.beginPath(),this.ctx4.moveTo(0,100),this.ctx4.lineTo(100,0),this.ctx4.lineWidth=4,this.ctx4.lineCap="round",this.ctx4.strokeStyle="blue",this.ctx4.stroke(),this.ctx5=this.canvas5.nativeElement.getContext("2d"),this.ctx5.beginPath(),this.ctx5.moveTo(100,0),this.ctx5.lineTo(100,200),this.ctx5.strokeStyle="red",this.ctx5.lineWidth=4,this.ctx5.lineCap="round",this.ctx5.stroke(),this.ctx5.closePath(),this.ctx5.beginPath(),this.ctx5.moveTo(100,200),this.ctx5.lineTo(0,100),this.ctx5.lineWidth=4,this.ctx5.lineCap="round",this.ctx5.strokeStyle="blue",this.ctx5.stroke(),this.ctx5.beginPath(),this.ctx5.moveTo(0,100),this.ctx5.lineTo(100,0),this.ctx5.lineWidth=4,this.ctx5.lineCap="round",this.ctx5.strokeStyle="blue",this.ctx5.stroke(),this.ctx6=this.canvas6.nativeElement.getContext("2d"),this.ctx6.beginPath(),this.ctx6.moveTo(100,0),this.ctx6.lineTo(100,200),this.ctx6.strokeStyle="red",this.ctx6.lineWidth=4,this.ctx6.lineCap="round",this.ctx6.stroke(),this.ctx6.closePath(),this.ctx6.beginPath(),this.ctx6.moveTo(100,200),this.ctx6.lineTo(0,100),this.ctx6.lineWidth=4,this.ctx6.lineCap="round",this.ctx6.strokeStyle="blue",this.ctx6.stroke(),this.ctx6.beginPath(),this.ctx6.moveTo(0,100),this.ctx6.lineTo(100,0),this.ctx6.lineWidth=4,this.ctx6.lineCap="round",this.ctx6.strokeStyle="blue",this.ctx6.stroke(),this.ctx7=this.canvas7.nativeElement.getContext("2d"),this.ctx7.beginPath(),this.ctx7.moveTo(100,0),this.ctx7.lineTo(100,200),this.ctx7.strokeStyle="red",this.ctx7.lineWidth=4,this.ctx7.lineCap="round",this.ctx7.stroke(),this.ctx7.closePath(),this.ctx7.beginPath(),this.ctx7.moveTo(100,200),this.ctx7.lineTo(0,100),this.ctx7.lineWidth=4,this.ctx7.lineCap="round",this.ctx7.strokeStyle="blue",this.ctx7.stroke(),this.ctx7.beginPath(),this.ctx7.moveTo(0,100),this.ctx7.lineTo(100,0),this.ctx7.lineWidth=4,this.ctx7.lineCap="round",this.ctx7.strokeStyle="blue",this.ctx7.stroke(),this.ctx8=this.canvas8.nativeElement.getContext("2d"),this.ctx8.beginPath(),this.ctx8.moveTo(100,0),this.ctx8.lineTo(100,200),this.ctx8.strokeStyle="red",this.ctx8.lineWidth=4,this.ctx8.lineCap="round",this.ctx8.stroke(),this.ctx8.closePath(),this.ctx8.beginPath(),this.ctx8.moveTo(100,200),this.ctx8.lineTo(0,100),this.ctx8.lineWidth=4,this.ctx8.lineCap="round",this.ctx8.strokeStyle="blue",this.ctx8.stroke(),this.ctx8.beginPath(),this.ctx8.moveTo(0,100),this.ctx8.lineTo(100,0),this.ctx8.lineWidth=4,this.ctx8.lineCap="round",this.ctx8.strokeStyle="blue",this.ctx8.stroke(),this.ctx9=this.canvas9.nativeElement.getContext("2d"),this.ctx9.beginPath(),this.ctx9.moveTo(100,0),this.ctx9.lineTo(100,200),this.ctx9.strokeStyle="red",this.ctx9.lineWidth=4,this.ctx9.lineCap="round",this.ctx9.stroke(),this.ctx9.closePath(),this.ctx9.beginPath(),this.ctx9.moveTo(100,200),this.ctx9.lineTo(0,100),this.ctx9.lineWidth=4,this.ctx9.lineCap="round",this.ctx9.strokeStyle="blue",this.ctx9.stroke(),this.ctx9.beginPath(),this.ctx9.moveTo(0,100),this.ctx9.lineTo(100,0),this.ctx9.lineWidth=4,this.ctx9.lineCap="round",this.ctx9.strokeStyle="blue",this.ctx9.stroke(),this.ctx10=this.canvas10.nativeElement.getContext("2d"),this.ctx10.beginPath(),this.ctx10.moveTo(100,0),this.ctx10.lineTo(100,200),this.ctx10.strokeStyle="red",this.ctx10.lineWidth=4,this.ctx10.lineCap="round",this.ctx10.stroke(),this.ctx10.closePath(),this.ctx10.beginPath(),this.ctx10.moveTo(100,200),this.ctx10.lineTo(0,100),this.ctx10.lineWidth=4,this.ctx10.lineCap="round",this.ctx10.strokeStyle="blue",this.ctx10.stroke(),this.ctx10.beginPath(),this.ctx10.moveTo(0,100),this.ctx10.lineTo(100,0),this.ctx10.lineWidth=4,this.ctx10.lineCap="round",this.ctx10.strokeStyle="blue",this.ctx10.stroke(),this.ctx11=this.canvas11.nativeElement.getContext("2d"),this.ctx11.beginPath(),this.ctx11.moveTo(100,0),this.ctx11.lineTo(100,200),this.ctx11.strokeStyle="red",this.ctx11.lineWidth=4,this.ctx11.lineCap="round",this.ctx11.stroke(),this.ctx11.closePath(),this.ctx11.beginPath(),this.ctx11.moveTo(100,200),this.ctx11.lineTo(0,100),this.ctx11.lineWidth=4,this.ctx11.lineCap="round",this.ctx11.strokeStyle="blue",this.ctx11.stroke(),this.ctx11.beginPath(),this.ctx11.moveTo(0,100),this.ctx11.lineTo(100,0),this.ctx11.lineWidth=4,this.ctx11.lineCap="round",this.ctx11.strokeStyle="blue",this.ctx11.stroke(),this.ctx12=this.canvas12.nativeElement.getContext("2d"),this.ctx12.beginPath(),this.ctx12.moveTo(100,0),this.ctx12.lineTo(100,200),this.ctx12.strokeStyle="red",this.ctx12.lineWidth=4,this.ctx12.lineCap="round",this.ctx12.stroke(),this.ctx12.closePath(),this.ctx12.beginPath(),this.ctx12.moveTo(100,200),this.ctx12.lineTo(0,100),this.ctx12.lineWidth=4,this.ctx12.lineCap="round",this.ctx12.strokeStyle="blue",this.ctx12.stroke(),this.ctx12.beginPath(),this.ctx12.moveTo(0,100),this.ctx12.lineTo(100,0),this.ctx12.lineWidth=4,this.ctx12.lineCap="round",this.ctx12.strokeStyle="blue",this.ctx12.stroke()}}return t.\u0275fac=function(i){return new(i||t)(l.Ib(c.c),l.Ib(s.o))},t.\u0275cmp=l.Cb({type:t,selectors:[["app-tab1"]],viewQuery:function(t,i){var e;1&t&&(l.ac(b,!0),l.ac(d,!0),l.ac(v,!0),l.ac(u,!0),l.ac(k,!0),l.ac(p,!0),l.ac(g,!0),l.ac(m,!0),l.ac(T,!0),l.ac(C,!0),l.ac(P,!0),l.ac(y,!0)),2&t&&(l.Xb(e=l.Tb())&&(i.canvas=e.first),l.Xb(e=l.Tb())&&(i.canvas2=e.first),l.Xb(e=l.Tb())&&(i.canvas3=e.first),l.Xb(e=l.Tb())&&(i.canvas4=e.first),l.Xb(e=l.Tb())&&(i.canvas5=e.first),l.Xb(e=l.Tb())&&(i.canvas6=e.first),l.Xb(e=l.Tb())&&(i.canvas7=e.first),l.Xb(e=l.Tb())&&(i.canvas8=e.first),l.Xb(e=l.Tb())&&(i.canvas9=e.first),l.Xb(e=l.Tb())&&(i.canvas10=e.first),l.Xb(e=l.Tb())&&(i.canvas11=e.first),l.Xb(e=l.Tb())&&(i.canvas12=e.first))},decls:43,vars:1,consts:[[3,"fullscreen"],["id","wrapper"],["id","left-pane"],[2,"font-size","35px","margin","20px","font-weight","bold","width","250px","height","40px",3,"click"],[1,"example-boundary"],["id","sankaku1",1,"example-box"],["id","canvas1","width","200","height","200","cdkDrag",""],["canvas",""],["id","sankaku2",1,"example-box"],["id","canvas2","width","200","height","200","cdkDrag",""],["canvas2",""],["id","sankaku3",1,"example-box"],["width","200","height","200","cdkDrag",""],["canvas3",""],["id","sankaku4",1,"example-box"],["canvas4",""],["id","sankaku5",1,"example-box"],["canvas5",""],["id","sankaku6",1,"example-box"],["canvas6",""],["id","sankaku7",1,"example-box"],["canvas7",""],["id","sankaku8",1,"example-box"],["canvas8",""],["id","sankaku9",1,"example-box"],["canvas9",""],["id","sankaku10",1,"example-box"],["canvas10",""],["id","sankaku11",1,"example-box"],["canvas11",""],["id","sankaku12",1,"example-box"],["canvas12",""],["id","right-pane"]],template:function(t,i){1&t&&(l.Lb(0,"ion-content",0),l.Lb(1,"div",1),l.Lb(2,"div",2),l.Lb(3,"ion-button",3),l.Sb("click",(function(){return i.presentModal()})),l.cc(4,"\u4e09\u89d2\u5f62\u3092\u4f5c\u308b"),l.Kb(),l.Lb(5,"div",4),l.Lb(6,"div",5),l.Jb(7,"canvas",6,7),l.Kb(),l.Lb(9,"div",8),l.Jb(10,"canvas",9,10),l.Kb(),l.Lb(12,"div",11),l.Jb(13,"canvas",12,13),l.Kb(),l.Lb(15,"div",14),l.Jb(16,"canvas",12,15),l.Kb(),l.Lb(18,"div",16),l.Jb(19,"canvas",12,17),l.Kb(),l.Lb(21,"div",18),l.Jb(22,"canvas",12,19),l.Kb(),l.Lb(24,"div",20),l.Jb(25,"canvas",12,21),l.Kb(),l.Lb(27,"div",22),l.Jb(28,"canvas",12,23),l.Kb(),l.Lb(30,"div",24),l.Jb(31,"canvas",12,25),l.Kb(),l.Lb(33,"div",26),l.Jb(34,"canvas",12,27),l.Kb(),l.Lb(36,"div",28),l.Jb(37,"canvas",12,29),l.Kb(),l.Lb(39,"div",30),l.Jb(40,"canvas",12,31),l.Kb(),l.Kb(),l.Kb(),l.Jb(42,"div",32),l.Kb(),l.Kb()),2&t&&l.Wb("fullscreen",!0)},directives:[s.c,s.b,r.a],styles:["#wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;height:100%}#left-pane[_ngcontent-%COMP%]{width:67%;height:100%;background-color:#add8e6}#right-pane[_ngcontent-%COMP%]{width:33%;height:100%;background-color:#ffb6c1}canvas[_ngcontent-%COMP%]{z-index:2}.example-box[_ngcontent-%COMP%]{display:inline-flex;justify-content:center;align-items:center;font-size:50px;width:200px;height:200px;border:1px solid #ccc;color:rgba(0,0,0,.87);cursor:move;border-radius:50%;text-align:center;background:#fff;position:relative;z-index:1;box-sizing:border-box;padding:10px;transition:box-shadow .2s cubic-bezier(0,0,.2,1);background-size:104%;background-position:50%;background-image:url(circle.20cfbb3ce1be2979e687.png);margin:8px}.example-boundary[_ngcontent-%COMP%]{width:100%;height:100%;max-width:100%;border:2px dotted #ccc}"]}),t})()}];let S=(()=>{class t{}return t.\u0275mod=l.Gb({type:t}),t.\u0275inj=l.Fb({factory:function(i){return new(i||t)},imports:[[o.i.forChild(f)],o.i]}),t})(),W=(()=>{class t{}return t.\u0275mod=l.Gb({type:t}),t.\u0275inj=l.Fb({factory:function(i){return new(i||t)},imports:[[s.m,c.b,h.a,n.a,S,r.b]]}),t})()}}]);