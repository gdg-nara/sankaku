!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function i(t,e,n,i,o,r,s){try{var c=t[r](s),a=c.value}catch(h){return void n(h)}c.done?e(a):Promise.resolve(a).then(i,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var s=t.apply(e,n);function c(t){i(s,o,r,c,a,"next",t)}function a(t){i(s,o,r,c,a,"throw",t)}c(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("A36C"),o=n("iWo5"),r=n("qULd"),s=function(t,e){var n,s,c=function(t,i,o){if("undefined"!=typeof document){var r=document.elementFromPoint(t,i);r&&e(r)?r!==n&&(h(),a(r,o)):h()}},a=function(t,e){n=t,s||(s=n);var o=n;Object(i.f)((function(){return o.classList.add("ion-activated")})),e()},h=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(n){var e=n;Object(i.f)((function(){return e.classList.remove("ion-activated")})),t&&s!==n&&n.click(),n=void 0}};return Object(o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return c(t.currentX,t.currentY,r.a)},onMove:function(t){return c(t.currentX,t.currentY,r.b)},onEnd:function(){h(!0),Object(r.e)(),s=void 0}})}},"74mu":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return a}));var i=function(t,e){return null!==e.closest(t)},r=function(t,e){return"string"==typeof t&&t.length>0?Object.assign((o=!0,(i="ion-color-"+t)in(n={"ion-color":!0})?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o,n),e):e;var n,i,o},s=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},c=/^[a-z][a-z0-9+\-.]*:/,a=function(){var t=o(regeneratorRuntime.mark((function t(e,n,i,o){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e||"#"===e[0]||c.test(e)){t.next=4;break}if(!(r=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=n&&n.preventDefault(),r.push(e,i,o)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(e,n,i,o){return t.apply(this,arguments)}}()},"O04+":function(e,i,o){"use strict";o.d(i,"a",(function(){return s}));var r=o("fXoL"),s=function(){var e=function(){function e(){t(this,e),this.selectedDotsArray=[]}return n(e,[{key:"addSelectedDotsArray",value:function(t){3==Array.from(t).length&&(this.selectedDotsArray.push(Array.from(t)),console.log(Array.from(t)+"\u304c\u8ffd\u52a0\u3055\u308c\u307e\u3057\u305f"))}},{key:"syncDotsInfo",value:function(){return console.log("selectedDotsArray: ",this.selectedDotsArray),this.selectedDotsArray}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},ZaV5:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var i=function(){var t=o(regeneratorRuntime.mark((function t(e,n,i,o,r){var s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",e.attachViewToDom(n,i,r,o));case 2:if("string"==typeof i||i instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(s="string"==typeof i?n.ownerDocument&&n.ownerDocument.createElement(i):i,o&&o.forEach((function(t){return s.classList.add(t)})),r&&Object.assign(s,r),n.appendChild(s),t.t0=s.componentOnReady,!t.t0){t.next=12;break}return t.next=12,s.componentOnReady();case 12:return t.abrupt("return",s);case 13:case"end":return t.stop()}}),t)})));return function(e,n,i,o,r){return t.apply(this,arguments)}}(),r=function(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},h3R7:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={bubbles:{dur:1e3,circles:9,fn:function(t,e,n){var i=t*e/n-t+"ms",o=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:function(t,e,n){var i=e/n,o=t*i-t+"ms",r=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,e){return{r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,e,n){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":t*e/n-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,e,n){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":t*e/n-t+"ms"}}}}}},qULd:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c}));var i={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})}},notification:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=function(){i.selection()},r=function(){i.selectionStart()},s=function(){i.selectionChanged()},c=function(){i.selectionEnd()},a=function(t){i.impact(t)}},z1BV:function(e,i,o){"use strict";o.d(i,"a",(function(){return h}));var r=o("fXoL"),s=o("O04+"),c=o("TEn/"),a=["canvas"],h=function(){var e=function(){function e(n,i){t(this,e),this.syncDotsInfoService=n,this.modalController=i,this.selectedDots=new Set,this.radiusOfPie=92,this.centerPointX=100,this.centerPointY=100,this.shortLine=this.radiusOfPie/2,this.middleLine=this.shortLine*Math.sqrt(3),this.longLine=this.radiusOfPie,this.coordinates={dot1:{x:this.centerPointX,y:this.centerPointY-this.longLine},dot2:{x:this.centerPointX+this.shortLine,y:this.centerPointY-this.middleLine},dot3:{x:this.centerPointX+this.middleLine,y:this.centerPointY-this.shortLine},dot4:{x:this.centerPointX+this.longLine,y:this.centerPointY},dot5:{x:this.centerPointX+this.middleLine,y:this.centerPointY+this.shortLine},dot6:{x:this.centerPointX+this.shortLine,y:this.centerPointY+this.middleLine},dot7:{x:this.centerPointX,y:this.centerPointY+this.longLine},dot8:{x:this.centerPointX-this.shortLine,y:this.centerPointY+this.middleLine},dot9:{x:this.centerPointX-this.middleLine,y:this.centerPointY+this.shortLine},dot10:{x:this.centerPointX-this.longLine,y:this.centerPointY},dot11:{x:this.centerPointX-this.middleLine,y:this.centerPointY-this.shortLine},dot12:{x:this.centerPointX-this.shortLine,y:this.centerPointY-this.middleLine}}}return n(e,[{key:"syncDots",value:function(){this.syncDotsInfoService.addSelectedDotsArray(this.selectedDots),this.syncDotsInfoService.syncDotsInfo(),this.reset()}},{key:"countDots",value:function(){return this.syncDotsInfoService.selectedDotsArray.length<6?"\u3042\u3068".concat(6-this.syncDotsInfoService.selectedDotsArray.length,"\u500b\u3001\u4f5c\u308d\u3046!"):"\u5916\u5074\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044"}},{key:"reset",value:function(){for(var t in this.selectedDots.clear(),this.context.clearRect(0,0,200,200),this.context.beginPath(),this.context.fillStyle="white",this.context.fillRect(0,0,200,200),this.context.lineWidth=4,this.context.arc(100,100,92,0*Math.PI/180,360*Math.PI/180,!1),this.context.fillStyle="rgba(0,0,0,0)",this.context.fill(),this.context.strokeStyle="black",this.context.stroke(),this.coordinates)this.context.beginPath(),this.context.strokeStyle="black",this.context.arc(this.coordinates[t].x,this.coordinates[t].y,4,0*Math.PI/180,360*Math.PI/180,!1),this.context.fillStyle="rgba(0,0,0,0.7)",this.context.fill(),this.context.stroke()}},{key:"init",value:function(t){for(var e in this.context=this.canvas.nativeElement.getContext("2d"),t.target.getBoundingClientRect(),this.coordinates)t.offsetX>this.coordinates[e].x-15&&t.offsetX<this.coordinates[e].x+15&&t.offsetY>this.coordinates[e].y-15&&t.offsetY<this.coordinates[e].y+15&&(this.context.beginPath(),this.context.lineWidth=4,this.context.strokeStyle="black",this.context.arc(this.coordinates[e].x,this.coordinates[e].y,6,0*Math.PI/180,360*Math.PI/180,!1),this.context.fillStyle="rgba(255,200,0,0.8)",this.context.fill(),this.context.stroke(),this.selectedDots.add(e));if(2==this.selectedDots.size){var n=Array.from(this.selectedDots.values());this.context.beginPath(),this.context.lineWidth=4,this.setLineColor(n[0],n[1]),this.context.moveTo(this.coordinates[""+n[0]].x,this.coordinates[""+n[0]].y),this.context.lineTo(this.coordinates[""+n[1]].x,this.coordinates[""+n[1]].y),this.context.stroke()}if(3==this.selectedDots.size){var i=Array.from(this.selectedDots.values());this.context.beginPath(),this.setLineColor(i[1],i[2]),this.context.moveTo(this.coordinates[""+i[1]].x,this.coordinates[""+i[1]].y),this.context.lineTo(this.coordinates[""+i[2]].x,this.coordinates[""+i[2]].y),this.context.stroke(),this.context.beginPath(),this.setLineColor(i[2],i[0]),this.context.moveTo(this.coordinates[""+i[2]].x,this.coordinates[""+i[2]].y),this.context.lineTo(this.coordinates[""+i[0]].x,this.coordinates[""+i[0]].y),this.context.stroke()}this.selectedDots.size>3&&this.reset()}},{key:"getDistanceOf2Dots",value:function(t,e){return Math.round(Math.sqrt(Math.pow(this.coordinates[t].x-this.coordinates[e].x,2)+Math.pow(this.coordinates[t].y-this.coordinates[e].y,2)))}},{key:"setLineColor",value:function(t,e){var n=Math.round(Math.sqrt(Math.pow(this.coordinates[t].x-this.coordinates[e].x,2)+Math.pow(this.coordinates[t].y-this.coordinates[e].y,2)));n==this.getDistanceOf2Dots("dot1","dot2")?this.context.strokeStyle="red":n==this.getDistanceOf2Dots("dot1","dot3")?this.context.strokeStyle="blue":n==this.getDistanceOf2Dots("dot1","dot4")?this.context.strokeStyle="yellow":n==this.getDistanceOf2Dots("dot1","dot5")?this.context.strokeStyle="green":n==this.getDistanceOf2Dots("dot1","dot6")?this.context.strokeStyle="orange":n==this.getDistanceOf2Dots("dot1","dot7")&&(this.context.strokeStyle="pink")}},{key:"ngOnInit",value:function(){for(var t in this.context=this.canvas.nativeElement.getContext("2d"),this.context.beginPath(),this.context.fillStyle="white",this.context.fillRect(0,0,200,200),this.context.lineWidth=4,this.context.arc(100,100,92,0*Math.PI/180,360*Math.PI/180,!1),this.context.fillStyle="white",this.context.fill(),this.context.strokeStyle="black",this.context.lineWidth=4,this.context.lineCap="round",this.context.stroke(),this.context.closePath(),this.coordinates)this.context.beginPath(),this.context.strokeStyle="black",this.context.arc(this.coordinates[t].x,this.coordinates[t].y,4,0*Math.PI/180,360*Math.PI/180,!1),this.context.fillStyle="rgba(0,0,0,0.7)",this.context.fill(),this.context.stroke()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Ib(s.a),r.Ib(c.o))},e.\u0275cmp=r.Cb({type:e,selectors:[["app-semi-modal"]],viewQuery:function(t,e){var n;1&t&&r.ac(a,!0),2&t&&r.Xb(n=r.Tb())&&(e.canvas=n.first)},decls:11,vars:1,consts:[["width","200","height","200",1,"my-custom-class",3,"click"],["canvas",""],[2,"width","100%","height","30px","font-size","20px",3,"click"],[2,"text-align","center"]],template:function(t,e){1&t&&(r.Lb(0,"ion-header"),r.Lb(1,"ion-toolbar"),r.Lb(2,"ion-title"),r.cc(3,"\u4e09\u89d2\u5f62\u3092\u4f5c\u308b"),r.Kb(),r.Kb(),r.Kb(),r.Lb(4,"ion-content"),r.Lb(5,"canvas",0,1),r.Sb("click",(function(t){return e.init(t)})),r.Kb(),r.Lb(7,"ion-button",2),r.Sb("click",(function(){return e.syncDots()})),r.cc(8,"\u6c7a\u5b9a\u3059\u308b"),r.Kb(),r.Lb(9,"h4",3),r.cc(10),r.Kb(),r.Kb()),2&t&&(r.yb(10),r.dc(e.countDots()))},directives:[c.d,c.l,c.k,c.c,c.b],styles:[""]}),e}()}}])}();