!function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function e(t,n,e,i,r,o,c){try{var s=t[o](c),a=s.value}catch(u){return void e(u)}s.done?n(a):Promise.resolve(a).then(i,r)}function i(t){return function(){var n=this,i=arguments;return new Promise((function(r,o){var c=t.apply(n,i);function s(t){e(c,r,o,s,a,"next",t)}function a(t){e(c,r,o,s,a,"throw",t)}s(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var i=e("A36C"),r=e("iWo5"),o=e("qULd"),c=function(t,n){var e,c,s=function(t,i,r){if("undefined"!=typeof document){var o=document.elementFromPoint(t,i);o&&n(o)?o!==e&&(u(),a(o,r)):u()}},a=function(t,n){e=t,c||(c=e);var r=e;Object(i.f)((function(){return r.classList.add("ion-activated")})),n()},u=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var n=e;Object(i.f)((function(){return n.classList.remove("ion-activated")})),t&&c!==e&&e.click(),e=void 0}};return Object(r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return s(t.currentX,t.currentY,o.a)},onMove:function(t){return s(t.currentX,t.currentY,o.b)},onEnd:function(){u(!0),Object(o.e)(),c=void 0}})}},"74mu":function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return r})),e.d(n,"d",(function(){return a}));var r=function(t,n){return null!==n.closest(t)},o=function(t,n){return"string"==typeof t&&t.length>0?Object.assign((r=!0,(i="ion-color-"+t)in(e={"ion-color":!0})?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e),n):n;var e,i,r},c=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return n[t]=!0})),n},s=/^[a-z][a-z0-9+\-.]*:/,a=function(){var t=i(regeneratorRuntime.mark((function t(n,e,i,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==n||"#"===n[0]||s.test(n)){t.next=4;break}if(!(o=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=e&&e.preventDefault(),o.push(n,i,r)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(n,e,i,r){return t.apply(this,arguments)}}()},ZaV5:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o}));var r=function(){var t=i(regeneratorRuntime.mark((function t(n,e,i,r,o){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",n.attachViewToDom(e,i,o,r));case 2:if("string"==typeof i||i instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(c="string"==typeof i?e.ownerDocument&&e.ownerDocument.createElement(i):i,r&&r.forEach((function(t){return c.classList.add(t)})),o&&Object.assign(c,o),e.appendChild(c),t.t0=c.componentOnReady,!t.t0){t.next=12;break}return t.next=12,c.componentOnReady();case 12:return t.abrupt("return",c);case 13:case"end":return t.stop()}}),t)})));return function(n,e,i,r,o){return t.apply(this,arguments)}}(),o=function(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},h3R7:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var i={bubbles:{dur:1e3,circles:9,fn:function(t,n,e){var i=t*n/e-t+"ms",r=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:function(t,n,e){var i=n/e,r=t*i-t+"ms",o=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,n){return{r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,n,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,n,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}}}},qULd:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return r})),e.d(n,"d",(function(){return a})),e.d(n,"e",(function(){return s}));var i={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})}},notification:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=function(){i.selection()},o=function(){i.selectionStart()},c=function(){i.selectionChanged()},s=function(){i.selectionEnd()},a=function(t){i.impact(t)}},qtYk:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var r=i("ofXK"),o=i("3Pt+"),c=i("TEn/"),s=i("fXoL"),a=function(){var t=function t(){n(this,t)};return t.\u0275mod=s.Gb({type:t}),t.\u0275inj=s.Fb({factory:function(n){return new(n||t)},imports:[[r.b,o.a,c.m]]}),t}()},z1BV:function(e,i,r){"use strict";r.d(i,"a",(function(){return a}));var o=r("fXoL"),c=r("TEn/"),s=["canvas"],a=function(){var e=function(){function e(){n(this,e),this.radiusOfPie=92,this.centerPointX=100,this.centerPointY=100,this.shortLine=this.radiusOfPie/2,this.middleLine=this.shortLine*Math.sqrt(3),this.longLine=this.radiusOfPie,this.coordinates={dot1:{x:this.centerPointX,y:this.centerPointY-this.longLine},dot2:{x:this.centerPointX+this.shortLine,y:this.centerPointY-this.middleLine},dot3:{x:this.centerPointX+this.middleLine,y:this.centerPointY-this.shortLine},dot4:{x:this.centerPointX+this.longLine,y:this.centerPointY},dot5:{x:this.centerPointX+this.middleLine,y:this.centerPointY+this.shortLine},dot6:{x:this.centerPointX+this.shortLine,y:this.centerPointY+this.middleLine},dot7:{x:this.centerPointX,y:this.centerPointY+this.longLine},dot8:{x:this.centerPointX-this.shortLine,y:this.centerPointY+this.middleLine},dot9:{x:this.centerPointX-this.middleLine,y:this.centerPointY+this.shortLine},dot10:{x:this.centerPointX-this.longLine,y:this.centerPointY},dot11:{x:this.centerPointX-this.middleLine,y:this.centerPointY-this.shortLine},dot12:{x:this.centerPointX-this.shortLine,y:this.centerPointY-this.middleLine}}}var i,r,o;return i=e,(r=[{key:"hoge",value:function(t){console.log(t.clientX),console.log(t.clientY)}},{key:"ngOnInit",value:function(){for(var t in this.ctx=this.canvas.nativeElement.getContext("2d"),this.ctx.beginPath(),this.ctx.fillStyle="white",this.ctx.fillRect(0,0,200,200),this.ctx.lineWidth=2.5,this.ctx.arc(100,100,92,0*Math.PI/180,360*Math.PI/180,!1),this.ctx.fillStyle="white",this.ctx.fill(),this.ctx.strokeStyle="black",this.ctx.lineWidth=4,this.ctx.lineCap="round",this.ctx.stroke(),this.ctx.closePath(),this.coordinates)this.ctx.beginPath(),this.ctx.strokeStyle="black",this.ctx.arc(this.coordinates[t].x,this.coordinates[t].y,4,0*Math.PI/180,360*Math.PI/180,!1),this.ctx.fillStyle="rgba(0,0,0,0.7)",this.ctx.fill(),this.ctx.stroke()}}])&&t(i.prototype,r),o&&t(i,o),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Cb({type:e,selectors:[["app-semi-modal"]],viewQuery:function(t,n){var e;1&t&&o.ac(s,!0),2&t&&o.Xb(e=o.Tb())&&(n.canvas=e.first)},inputs:{firstName:"firstName",lastName:"lastName",middleInitial:"middleInitial"},decls:9,vars:0,consts:[["width","200","height","200",1,"my-custom-class",3,"click"],["canvas",""],[2,"width","100%","height","50px","font-size","30px"]],template:function(t,n){1&t&&(o.Lb(0,"ion-header"),o.Lb(1,"ion-toolbar"),o.Lb(2,"ion-title"),o.cc(3,"\u4e09\u89d2\u5f62\u3092\u4f5c\u308b"),o.Kb(),o.Kb(),o.Kb(),o.Lb(4,"ion-content"),o.Lb(5,"canvas",0,1),o.Sb("click",(function(t){return n.hoge(t)})),o.Kb(),o.Lb(7,"ion-button",2),o.cc(8,"\u6c7a\u5b9a\u3059\u308b"),o.Kb(),o.Kb())},directives:[c.d,c.l,c.k,c.c,c.b],styles:[""]}),e}()}}])}();