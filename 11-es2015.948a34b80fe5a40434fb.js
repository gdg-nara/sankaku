(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{tmrb:function(t,e,i){"use strict";i.r(e),i.d(e,"Tab1PageModule",(function(){return L}));var n=i("TEn/"),s=i("ofXK"),o=i("3Pt+"),a=i("tyNb"),c=i("mrSG"),r=i("z1BV"),h=i("fXoL"),d=i("O04+"),b=i("5+WD");const l=["canvas1"],x=["canvas2"],v=["canvas3"],g=["canvas4"],p=["canvas5"],u=["canvas6"],f=["canvas7"],y=["canvas8"],m=["canvas9"],k=[{path:"",component:(()=>{class t{constructor(t,e){this.syncDotsInfoService=t,this.modalController=e,this.radiusOfPie=92,this.centerPointX=100,this.centerPointY=100,this.shortLine=this.radiusOfPie/2,this.middleLine=this.shortLine*Math.sqrt(3),this.longLine=this.radiusOfPie,this.coordinates={dot1:{x:this.centerPointX,y:this.centerPointY-this.longLine},dot2:{x:this.centerPointX+this.shortLine,y:this.centerPointY-this.middleLine},dot3:{x:this.centerPointX+this.middleLine,y:this.centerPointY-this.shortLine},dot4:{x:this.centerPointX+this.longLine,y:this.centerPointY},dot5:{x:this.centerPointX+this.middleLine,y:this.centerPointY+this.shortLine},dot6:{x:this.centerPointX+this.shortLine,y:this.centerPointY+this.middleLine},dot7:{x:this.centerPointX,y:this.centerPointY+this.longLine},dot8:{x:this.centerPointX-this.shortLine,y:this.centerPointY+this.middleLine},dot9:{x:this.centerPointX-this.middleLine,y:this.centerPointY+this.shortLine},dot10:{x:this.centerPointX-this.longLine,y:this.centerPointY},dot11:{x:this.centerPointX-this.middleLine,y:this.centerPointY-this.shortLine},dot12:{x:this.centerPointX-this.shortLine,y:this.centerPointY-this.middleLine}}}presentModal(){return Object(c.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:r.a,cssClass:"my-custom-class"});return yield t.present()}))}drawCircle(t,e){let i=t;i=e.nativeElement.getContext("2d"),i.beginPath(),i.lineWidth=4,i.arc(100,100,92,0*Math.PI/180,360*Math.PI/180,!1),i.fillStyle="white",i.fill(),i.strokeStyle="black",i.lineWidth=4,i.stroke()}getDistanceOf2Dots(t,e){return Math.round(Math.sqrt(Math.pow(this.coordinates[""+t].x-this.coordinates[""+e].x,2)+Math.pow(this.coordinates[""+t].y-this.coordinates[""+e].y,2)))}setLineColor(t,e,i){let n=Math.round(Math.sqrt(Math.pow(this.coordinates[t].x-this.coordinates[e].x,2)+Math.pow(this.coordinates[t].y-this.coordinates[e].y,2)));console.log("dots:",t,e),console.log(n),n==this.getDistanceOf2Dots("dot1","dot2")?i.strokeStyle="red":n==this.getDistanceOf2Dots("dot1","dot3")?i.strokeStyle="blue":n==this.getDistanceOf2Dots("dot1","dot4")?i.strokeStyle="yellow":n==this.getDistanceOf2Dots("dot1","dot5")?i.strokeStyle="green":n==this.getDistanceOf2Dots("dot1","dot6")?i.strokeStyle="orange":n==this.getDistanceOf2Dots("dot1","dot7")&&(i.strokeStyle="pink")}drawTriangles(){let t=this.contexes,e=this.syncDotsInfoService.syncDotsInfo();for(let i=0;i<e.length;i++)t[i]=this.canvases[i].nativeElement.getContext("2d"),t[i].lineWidth=4,t[i].beginPath(),this.setLineColor(""+e[i][0],""+e[i][1],this.contexes[i]),t[i].moveTo(this.coordinates[""+e[i][0]].x,this.coordinates[""+e[i][0]].y),t[i].lineTo(this.coordinates[""+e[i][1]].x,this.coordinates[""+e[i][1]].y),t[i].stroke(),t[i].beginPath(),this.setLineColor(e[i][1],e[i][2],this.contexes[i]),t[i].moveTo(this.coordinates[""+e[i][1]].x,this.coordinates[""+e[i][1]].y),t[i].lineTo(this.coordinates[""+e[i][2]].x,this.coordinates[""+e[i][2]].y),t[i].stroke(),t[i].beginPath(),this.setLineColor(e[i][2],e[i][0],this.contexes[i]),t[i].moveTo(this.coordinates[""+e[i][2]].x,this.coordinates[""+e[i][2]].y),t[i].lineTo(this.coordinates[""+e[i][0]].x,this.coordinates[""+e[i][0]].y),t[i].stroke()}ngOnInit(){this.canvases=[this.canvas1,this.canvas2,this.canvas3,this.canvas4,this.canvas5,this.canvas6,this.canvas7,this.canvas8,this.canvas9],this.contexes=[this.context1,this.context2,this.context3,this.context4,this.context5,this.context6,this.context7,this.context8,this.context9];for(let t=0;this.canvases.length>t;t++)this.drawCircle(this.contexes[t],this.canvases[t]);this.syncDotsInfoService.observedDots.subscribe(t=>{console.log(t),this.drawTriangles()})}ngOnDestroy(){this.syncDotsInfoService.observedDots.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(h.Ib(d.a),h.Ib(n.k))},t.\u0275cmp=h.Cb({type:t,selectors:[["app-tab1"]],viewQuery:function(t,e){var i;1&t&&(h.ac(l,!0),h.ac(x,!0),h.ac(v,!0),h.ac(g,!0),h.ac(p,!0),h.ac(u,!0),h.ac(f,!0),h.ac(y,!0),h.ac(m,!0)),2&t&&(h.Xb(i=h.Tb())&&(e.canvas1=i.first),h.Xb(i=h.Tb())&&(e.canvas2=i.first),h.Xb(i=h.Tb())&&(e.canvas3=i.first),h.Xb(i=h.Tb())&&(e.canvas4=i.first),h.Xb(i=h.Tb())&&(e.canvas5=i.first),h.Xb(i=h.Tb())&&(e.canvas6=i.first),h.Xb(i=h.Tb())&&(e.canvas7=i.first),h.Xb(i=h.Tb())&&(e.canvas8=i.first),h.Xb(i=h.Tb())&&(e.canvas9=i.first))},decls:44,vars:1,consts:[[3,"fullscreen"],["id","wrapper"],["id","left-pane"],[1,"example-boundary"],[2,"width","95%","height","30px","font-size","20px","font-weight","bold","color","black",3,"click"],["id","right1"],["id","right2"],["cdkDrag","",1,"input-box"],["id","sankaku1","cdkDrag","",1,"example-box"],["id","canvas1","width","200","height","200"],["canvas1",""],["id","sankaku2","cdkDrag","",1,"example-box"],["id","canvas2","width","200","height","200"],["canvas2",""],["id","sankaku3","cdkDrag","",1,"example-box"],["width","200","height","200"],["canvas3",""],["id","sankaku4","cdkDrag","",1,"example-box"],["canvas4",""],["id","sankaku5","cdkDrag","",1,"example-box"],["canvas5",""],["id","sankaku6","cdkDrag","",1,"example-box"],["canvas6",""],["id","sankaku7","cdkDrag","",1,"example-box"],["canvas7",""],["id","sankaku8","cdkDrag","",1,"example-box"],["canvas8",""],["id","sankaku9","cdkDrag","",1,"example-box"],["canvas9",""],["id","right-pane"]],template:function(t,e){1&t&&(h.Lb(0,"ion-content",0),h.Lb(1,"div",1),h.Lb(2,"div",2),h.Lb(3,"div",3),h.Lb(4,"ion-button",4),h.Sb("click",(function(){return e.presentModal()})),h.cc(5,"Step 1. make triangles"),h.Kb(),h.Lb(6,"ion-button",4),h.Sb("click",(function(){return e.drawTriangles()})),h.cc(7,"Step 2. display triangles you made in Step 1"),h.Kb(),h.Lb(8,"div",5),h.cc(9,"Step3. move the triangles you made and name them some groups "),h.Kb(),h.Lb(10,"div",6),h.Jb(11,"textarea",7),h.Jb(12,"textarea",7),h.Jb(13,"textarea",7),h.Jb(14,"textarea",7),h.Jb(15,"textarea",7),h.Kb(),h.Lb(16,"div",8),h.Jb(17,"canvas",9,10),h.Kb(),h.Lb(19,"div",11),h.Jb(20,"canvas",12,13),h.Kb(),h.Lb(22,"div",14),h.Jb(23,"canvas",15,16),h.Kb(),h.Lb(25,"div",17),h.Jb(26,"canvas",15,18),h.Kb(),h.Lb(28,"div",19),h.Jb(29,"canvas",15,20),h.Kb(),h.Lb(31,"div",21),h.Jb(32,"canvas",15,22),h.Kb(),h.Lb(34,"div",23),h.Jb(35,"canvas",15,24),h.Kb(),h.Lb(37,"div",25),h.Jb(38,"canvas",15,26),h.Kb(),h.Lb(40,"div",27),h.Jb(41,"canvas",15,28),h.Kb(),h.Kb(),h.Kb(),h.Jb(43,"div",29),h.Kb(),h.Kb()),2&t&&h.Wb("fullscreen",!0)},directives:[n.c,n.b,b.a],styles:["#wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;height:100%}#left-pane[_ngcontent-%COMP%], #right-pane[_ngcontent-%COMP%]{width:50%;height:100%;background-color:#add8e6}#right-pane[_ngcontent-%COMP%]{padding-left:10px}#right1[_ngcontent-%COMP%]{height:35px;width:95%;color:#000;font-size:20px;font-weight:700;text-align:center;margin-top:5px;margin-bottom:5px;background-color:#428cff;border-radius:5px}#right2[_ngcontent-%COMP%]{height:50px}canvas[_ngcontent-%COMP%]{z-index:2}.example-box[_ngcontent-%COMP%]{display:inline-flex;justify-content:center;align-items:center;border-radius:50%;text-align:center;background:#fff;margin:2px;position:relative;z-index:1}.example-boundary[_ngcontent-%COMP%]{width:100%;height:100%;max-width:100%;border:2px dotted #ccc}.input-box[_ngcontent-%COMP%]{color:#000;text-align:center;font-size:15px;height:40px;margin:5px;width:130px;resize:none}"]}),t})()}];let P=(()=>{class t{}return t.\u0275mod=h.Gb({type:t}),t.\u0275inj=h.Fb({factory:function(e){return new(e||t)},imports:[[a.i.forChild(k)],a.i]}),t})(),L=(()=>{class t{}return t.\u0275mod=h.Gb({type:t}),t.\u0275inj=h.Fb({factory:function(e){return new(e||t)},imports:[[n.i,s.b,o.a,P,b.b]]}),t})()}}]);