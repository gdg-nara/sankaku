(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i("A36C"),s=i("iWo5"),o=i("qULd");const c=(t,e)=>{let i,c;const r=(t,n,s)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(t,n);o&&e(o)?o!==i&&(a(),h(o,s)):a()},h=(t,e)=>{i=t,c||(c=i);const s=i;Object(n.f)(()=>s.classList.add("ion-activated")),e()},a=(t=!1)=>{if(!i)return;const e=i;Object(n.f)(()=>e.classList.remove("ion-activated")),t&&c!==i&&i.click(),i=void 0};return Object(s.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>r(t.currentX,t.currentY,o.a),onMove:t=>r(t.currentX,t.currentY,o.b),onEnd:()=>{a(!0),Object(o.e)(),c=void 0}})}},"74mu":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"d",(function(){return r}));const n=(t,e)=>null!==e.closest(t),s=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},e):e,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},c=/^[a-z][a-z0-9+\-.]*:/,r=async(t,e,i,n)=>{if(null!=t&&"#"!==t[0]&&!c.test(t)){const s=document.querySelector("ion-router");if(s)return null!=e&&e.preventDefault(),s.push(t,i,n)}return!1}},"O04+":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i("fXoL");let s=(()=>{class t{constructor(){this.selectedDotsArray=[]}addSelectedDotsArray(t){3==Array.from(t).length&&(this.selectedDotsArray.push(Array.from(t)),console.log(Array.from(t)+"\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3057\u305f"))}syncDotsInfo(){return console.log("selectedDotsArray: ",this.selectedDotsArray),this.selectedDotsArray}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},ZaV5:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return s}));const n=async(t,e,i,n,s)=>{if(t)return t.attachViewToDom(e,i,s,n);if("string"!=typeof i&&!(i instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof i?e.ownerDocument&&e.ownerDocument.createElement(i):i;return n&&n.forEach(t=>o.classList.add(t)),s&&Object.assign(o,s),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},s=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},h3R7:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));const n={bubbles:{dur:1e3,circles:9,fn:(t,e,i)=>{const n=t*e/i-t+"ms",s=2*Math.PI*e/i;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(t,e,i)=>{const n=e/i,s=t*n-t+"ms",o=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/i-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/i-t+"ms"}})}}},qULd:function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return c})),i.d(e,"c",(function(){return s})),i.d(e,"d",(function(){return h})),i.d(e,"e",(function(){return r}));const n={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:i})},notification(t){const e=this.getEngine();if(!e)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:i})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},s=()=>{n.selection()},o=()=>{n.selectionStart()},c=()=>{n.selectionChanged()},r=()=>{n.selectionEnd()},h=t=>{n.impact(t)}},z1BV:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i("fXoL"),s=i("O04+"),o=i("TEn/");const c=["canvas"];let r=(()=>{class t{constructor(t){this.syncDotsInfoService=t,this.selectedDots=new Set,this.radiusOfPie=92,this.centerPointX=100,this.centerPointY=100,this.shortLine=this.radiusOfPie/2,this.middleLine=this.shortLine*Math.sqrt(3),this.longLine=this.radiusOfPie,this.coordinates={dot1:{x:this.centerPointX,y:this.centerPointY-this.longLine},dot2:{x:this.centerPointX+this.shortLine,y:this.centerPointY-this.middleLine},dot3:{x:this.centerPointX+this.middleLine,y:this.centerPointY-this.shortLine},dot4:{x:this.centerPointX+this.longLine,y:this.centerPointY},dot5:{x:this.centerPointX+this.middleLine,y:this.centerPointY+this.shortLine},dot6:{x:this.centerPointX+this.shortLine,y:this.centerPointY+this.middleLine},dot7:{x:this.centerPointX,y:this.centerPointY+this.longLine},dot8:{x:this.centerPointX-this.shortLine,y:this.centerPointY+this.middleLine},dot9:{x:this.centerPointX-this.middleLine,y:this.centerPointY+this.shortLine},dot10:{x:this.centerPointX-this.longLine,y:this.centerPointY},dot11:{x:this.centerPointX-this.middleLine,y:this.centerPointY-this.shortLine},dot12:{x:this.centerPointX-this.shortLine,y:this.centerPointY-this.middleLine}}}syncDots(){this.syncDotsInfoService.addSelectedDotsArray(this.selectedDots),this.syncDotsInfoService.syncDotsInfo(),this.reset()}reset(){this.selectedDots.clear(),this.context.clearRect(0,0,200,200),this.context.beginPath(),this.context.fillStyle="white",this.context.fillRect(0,0,200,200),this.context.lineWidth=4,this.context.arc(100,100,92,0*Math.PI/180,360*Math.PI/180,!1),this.context.fillStyle="rgba(0,0,0,0)",this.context.fill(),this.context.strokeStyle="black",this.context.stroke();for(let t in this.coordinates)this.context.beginPath(),this.context.strokeStyle="black",this.context.arc(this.coordinates[t].x,this.coordinates[t].y,4,0*Math.PI/180,360*Math.PI/180,!1),this.context.fillStyle="rgba(0,0,0,0.7)",this.context.fill(),this.context.stroke()}init(t){this.context=this.canvas.nativeElement.getContext("2d"),t.target.getBoundingClientRect();for(let e in this.coordinates)t.offsetX>this.coordinates[e].x-15&&t.offsetX<this.coordinates[e].x+15&&t.offsetY>this.coordinates[e].y-15&&t.offsetY<this.coordinates[e].y+15&&(this.context.beginPath(),this.context.lineWidth=4,this.context.strokeStyle="black",this.context.arc(this.coordinates[e].x,this.coordinates[e].y,6,0*Math.PI/180,360*Math.PI/180,!1),this.context.fillStyle="rgba(255,200,0,0.8)",this.context.fill(),this.context.stroke(),this.selectedDots.add(e));if(2==this.selectedDots.size){let t=Array.from(this.selectedDots.values());this.context.beginPath(),this.context.lineWidth=4,this.setLineColor(t[0],t[1]),this.context.moveTo(this.coordinates[""+t[0]].x,this.coordinates[""+t[0]].y),this.context.lineTo(this.coordinates[""+t[1]].x,this.coordinates[""+t[1]].y),this.context.stroke()}if(3==this.selectedDots.size){let t=Array.from(this.selectedDots.values());this.context.beginPath(),this.setLineColor(t[1],t[2]),this.context.moveTo(this.coordinates[""+t[1]].x,this.coordinates[""+t[1]].y),this.context.lineTo(this.coordinates[""+t[2]].x,this.coordinates[""+t[2]].y),this.context.stroke(),this.context.beginPath(),this.setLineColor(t[2],t[0]),this.context.moveTo(this.coordinates[""+t[2]].x,this.coordinates[""+t[2]].y),this.context.lineTo(this.coordinates[""+t[0]].x,this.coordinates[""+t[0]].y),this.context.stroke()}this.selectedDots.size>3&&this.reset()}getDistanceOf2Dots(t,e){return Math.round(Math.sqrt(Math.pow(this.coordinates[t].x-this.coordinates[e].x,2)+Math.pow(this.coordinates[t].y-this.coordinates[e].y,2)))}setLineColor(t,e){let i=Math.round(Math.sqrt(Math.pow(this.coordinates[t].x-this.coordinates[e].x,2)+Math.pow(this.coordinates[t].y-this.coordinates[e].y,2)));i==this.getDistanceOf2Dots("dot1","dot2")?this.context.strokeStyle="red":i==this.getDistanceOf2Dots("dot1","dot3")?this.context.strokeStyle="blue":i==this.getDistanceOf2Dots("dot1","dot4")?this.context.strokeStyle="yellow":i==this.getDistanceOf2Dots("dot1","dot5")?this.context.strokeStyle="green":i==this.getDistanceOf2Dots("dot1","dot6")?this.context.strokeStyle="orange":i==this.getDistanceOf2Dots("dot1","dot7")&&(this.context.strokeStyle="pink")}ngOnInit(){this.context=this.canvas.nativeElement.getContext("2d"),this.context.beginPath(),this.context.fillStyle="white",this.context.fillRect(0,0,200,200),this.context.lineWidth=4,this.context.arc(100,100,92,0*Math.PI/180,360*Math.PI/180,!1),this.context.fillStyle="white",this.context.fill(),this.context.strokeStyle="black",this.context.lineWidth=4,this.context.lineCap="round",this.context.stroke(),this.context.closePath();for(let t in this.coordinates)this.context.beginPath(),this.context.strokeStyle="black",this.context.arc(this.coordinates[t].x,this.coordinates[t].y,4,0*Math.PI/180,360*Math.PI/180,!1),this.context.fillStyle="rgba(0,0,0,0.7)",this.context.fill(),this.context.stroke()}}return t.\u0275fac=function(e){return new(e||t)(n.Ib(s.a))},t.\u0275cmp=n.Cb({type:t,selectors:[["app-semi-modal"]],viewQuery:function(t,e){var i;1&t&&n.ac(c,!0),2&t&&n.Xb(i=n.Tb())&&(e.canvas=i.first)},decls:9,vars:0,consts:[["width","200","height","200",1,"my-custom-class",3,"click"],["canvas",""],[2,"width","100%","height","50px","font-size","30px",3,"click"]],template:function(t,e){1&t&&(n.Lb(0,"ion-header"),n.Lb(1,"ion-toolbar"),n.Lb(2,"ion-title"),n.cc(3,"\u4e09\u89d2\u5f62\u3092\u4f5c\u308b"),n.Kb(),n.Kb(),n.Kb(),n.Lb(4,"ion-content"),n.Lb(5,"canvas",0,1),n.Sb("click",(function(t){return e.init(t)})),n.Kb(),n.Lb(7,"ion-button",2),n.Sb("click",(function(){return e.syncDots()})),n.cc(8,"\u6c7a\u5b9a\u3059\u308b"),n.Kb(),n.Kb())},directives:[o.d,o.l,o.k,o.c,o.b],styles:[""]}),t})()}}]);