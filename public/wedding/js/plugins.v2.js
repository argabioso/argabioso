/*!
    * rolly.js v0.4.0
    * (c) 2020 Mickael Chanrion
    * Released under the MIT license
    */
var rolly=function(){"use strict";var l=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var e=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach(function(t){s[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},s)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,s,n=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),o=1;o<arguments.length;o++){for(var r in i=Object(arguments[o]))h.call(i,r)&&(n[r]=i[r]);if(l){s=l(i);for(var a=0;a<s.length;a++)c.call(i,s[a])&&(n[s[a]]=i[s[a]])}}return n};function t(){}t.prototype={on:function(t,e,i){var s=this.e||(this.e={});return(s[t]||(s[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var s=this;function n(){s.off(t,n),e.apply(i,arguments)}return n._=e,this.on(t,n,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),s=0,n=i.length;s<n;s++)i[s].fn.apply(i[s].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),s=i[t],n=[];if(s&&e)for(var o=0,r=s.length;o<r;o++)s[o].fn!==e&&s[o].fn._!==e&&n.push(s[o]);return n.length?i[t]=n:delete i[t],this}};var i=t,s="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var n,o=(function(t,e){(function(){(null!==e?e:this).Lethargy=function(){function t(t,e,i,s){this.stability=null!=t?Math.abs(t):8,this.sensitivity=null!=e?1+Math.abs(e):100,this.tolerance=null!=i?1+Math.abs(i):1.1,this.delay=null!=s?s:150,this.lastUpDeltas=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:e<=t;1<=e?t++:t--)i.push(null);return i}.call(this),this.lastDownDeltas=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:e<=t;1<=e?t++:t--)i.push(null);return i}.call(this),this.deltasTimestamp=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:e<=t;1<=e?t++:t--)i.push(null);return i}.call(this)}return t.prototype.check=function(t){var e;return null!=(t=t.originalEvent||t).wheelDelta?e=t.wheelDelta:null!=t.deltaY?e=-40*t.deltaY:null==t.detail&&0!==t.detail||(e=-40*t.detail),this.deltasTimestamp.push(Date.now()),this.deltasTimestamp.shift(),0<e?(this.lastUpDeltas.push(e),this.lastUpDeltas.shift(),this.isInertia(1)):(this.lastDownDeltas.push(e),this.lastDownDeltas.shift(),this.isInertia(-1))},t.prototype.isInertia=function(t){var e,i,s,n,o,r,a;return null===(e=-1===t?this.lastDownDeltas:this.lastUpDeltas)[0]?t:!(this.deltasTimestamp[2*this.stability-2]+this.delay>Date.now()&&e[0]===e[2*this.stability-1])&&(s=e.slice(0,this.stability),i=e.slice(this.stability,2*this.stability),a=s.reduce(function(t,e){return t+e}),o=i.reduce(function(t,e){return t+e}),r=a/s.length,n=o/i.length,Math.abs(r)<Math.abs(n*this.tolerance)&&this.sensitivity<Math.abs(n)&&t)},t.prototype.showLastUpDeltas=function(){return this.lastUpDeltas},t.prototype.showLastDownDeltas=function(){return this.lastDownDeltas},t}()}).call(s)}(n={exports:{}},n.exports),n.exports),r={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in document,hasTouchWin:navigator.msMaxTouchPoints&&1<navigator.msMaxTouchPoints,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:-1<navigator.userAgent.indexOf("Firefox")},a=Object.prototype.toString,u=Object.prototype.hasOwnProperty;function p(t,e){return function(){return t.apply(e,arguments)}}var d=o.Lethargy,v="virtualscroll",f=S,g=37,m=38,y=39,b=40,w=32;function S(t){!function(t){if(!t)return console.warn("bindAll requires at least one argument.");var e=Array.prototype.slice.call(arguments,1);if(0===e.length)for(var i in t)u.call(t,i)&&"function"==typeof t[i]&&"[object Function]"==a.call(t[i])&&e.push(i);for(var s=0;s<e.length;s++){var n=e[s];t[n]=p(t[n],t)}}(this,"_onWheel","_onMouseWheel","_onTouchStart","_onTouchMove","_onKeyDown"),this.el=window,t&&t.el&&(this.el=t.el,delete t.el),this.options=e({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",limitInertia:!1,useKeyboard:!0,useTouch:!0},t),this.options.limitInertia&&(this._lethargy=new d),this._emitter=new i,this._event={y:0,x:0,deltaX:0,deltaY:0},this.touchStartX=null,this.touchStartY=null,this.bodyTouchAction=null,void 0!==this.options.passive&&(this.listenerOptions={passive:this.options.passive})}S.prototype._notify=function(t){var e=this._event;e.x+=e.deltaX,e.y+=e.deltaY,this._emitter.emit(v,{x:e.x,y:e.y,deltaX:e.deltaX,deltaY:e.deltaY,originalEvent:t})},S.prototype._onWheel=function(t){var e=this.options;if(!this._lethargy||!1!==this._lethargy.check(t)){var i=this._event;i.deltaX=t.wheelDeltaX||-1*t.deltaX,i.deltaY=t.wheelDeltaY||-1*t.deltaY,r.isFirefox&&1==t.deltaMode&&(i.deltaX*=e.firefoxMultiplier,i.deltaY*=e.firefoxMultiplier),i.deltaX*=e.mouseMultiplier,i.deltaY*=e.mouseMultiplier,this._notify(t)}},S.prototype._onMouseWheel=function(t){if(!this.options.limitInertia||!1!==this._lethargy.check(t)){var e=this._event;e.deltaX=t.wheelDeltaX?t.wheelDeltaX:0,e.deltaY=t.wheelDeltaY?t.wheelDeltaY:t.wheelDelta,this._notify(t)}},S.prototype._onTouchStart=function(t){var e=t.targetTouches?t.targetTouches[0]:t;this.touchStartX=e.pageX,this.touchStartY=e.pageY},S.prototype._onTouchMove=function(t){var e=this.options;e.preventTouch&&!t.target.classList.contains(e.unpreventTouchClass)&&t.preventDefault();var i=this._event,s=t.targetTouches?t.targetTouches[0]:t;i.deltaX=(s.pageX-this.touchStartX)*e.touchMultiplier,i.deltaY=(s.pageY-this.touchStartY)*e.touchMultiplier,this.touchStartX=s.pageX,this.touchStartY=s.pageY,this._notify(t)},S.prototype._onKeyDown=function(t){var e=this._event;e.deltaX=e.deltaY=0;var i=window.innerHeight-40;switch(t.keyCode){case g:case m:e.deltaY=this.options.keyStep;break;case y:case b:e.deltaY=-this.options.keyStep;break;case t.shiftKey:e.deltaY=i;break;case w:e.deltaY=-i;break;default:return}this._notify(t)},S.prototype._bind=function(){r.hasWheelEvent&&this.el.addEventListener("wheel",this._onWheel,this.listenerOptions),r.hasMouseWheelEvent&&this.el.addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),r.hasTouch&&this.options.useTouch&&(this.el.addEventListener("touchstart",this._onTouchStart,this.listenerOptions),this.el.addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),r.hasPointer&&r.hasTouchWin&&(this.bodyTouchAction=document.body.style.msTouchAction,document.body.style.msTouchAction="none",this.el.addEventListener("MSPointerDown",this._onTouchStart,!0),this.el.addEventListener("MSPointerMove",this._onTouchMove,!0)),r.hasKeyDown&&this.options.useKeyboard&&document.addEventListener("keydown",this._onKeyDown)},S.prototype._unbind=function(){r.hasWheelEvent&&this.el.removeEventListener("wheel",this._onWheel),r.hasMouseWheelEvent&&this.el.removeEventListener("mousewheel",this._onMouseWheel),r.hasTouch&&(this.el.removeEventListener("touchstart",this._onTouchStart),this.el.removeEventListener("touchmove",this._onTouchMove)),r.hasPointer&&r.hasTouchWin&&(document.body.style.msTouchAction=this.bodyTouchAction,this.el.removeEventListener("MSPointerDown",this._onTouchStart,!0),this.el.removeEventListener("MSPointerMove",this._onTouchMove,!0)),r.hasKeyDown&&this.options.useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)},S.prototype.on=function(t,e){this._emitter.on(v,t,e);var i=this._emitter.e;i&&i[v]&&1===i[v].length&&this._bind()},S.prototype.off=function(t,e){this._emitter.off(v,t,e);var i=this._emitter.e;(!i[v]||i[v].length<=0)&&this._unbind()},S.prototype.reset=function(){var t=this._event;t.x=0,t.y=0},S.prototype.destroy=function(){this._emitter.off(),this._unbind()};var M="undefined"!=typeof document?document.createElement("p").style:{},D=["O","ms","Moz","Webkit"],O=/([A-Z])/g,T={};function x(t){if(t=t.replace(/-([a-z])/g,function(t,e){return e.toUpperCase()}),void 0!==M[t])return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),i=D.length;i--;){var s=D[i]+e;if(void 0!==M[s])return s}return t}var k=function(t){return t in T?T[t]:T[t]=x(t)},F=function(t){return t=x(t),O.test(t)&&(t="-"+t.replace(O,"-$1"),O.lastIndex=0),t.toLowerCase()};k.dash=F;var _=function(t,e){return e?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)"},L=function(t,e){return void 0===e&&(e=document),Array.from(e.querySelectorAll(t))};var E=function(t,e){this.options=e,this.state={caching:!1,cache:null,inView:!1,active:!1,progress:0,progressInView:0},this.DOM={context:t}};E.prototype.cache=function(g){var m=this;return new Promise(function(t,e){m.state.caching=!0;var i=m.options.vertical,s=i?g.height:g.width,n=m.DOM.context;n.style.display=null;var o=window.getComputedStyle(n);"none"===o.display&&(m.state.cache=null,t(m.state.cache)),"inline"===o.display&&(n.style.display="block"),n.style[g.transformPrefix]=null;var r=n.getBoundingClientRect(),a=n.getAttribute("data-scene"),l=m.options.scenes,h=l[a]||{},c={context:n,type:a,top:i?r.top+0:r.top,bottom:i?r.bottom+0:r.bottom,left:i?r.left:r.left+0,right:i?r.right:r.right+0,size:i?r.height:r.width,speed:parseFloat(n.getAttribute("data-speed"))||h.speed||l.speed,trigger:n.getAttribute("data-trigger")||h.trigger||l.trigger},u=c.trigger,p=0;"middle"===u?p=s/2:"end"===u?p=s:"px"===u.slice(-2)?p=parseFloat(u):"%"===u.slice(-1)&&(p=s*parseFloat(u)/100),c.triggerOffset=p;var d=i?c.top+c.size/2-g.height/2:c.left+c.size/2-g.width/2;c.offset=d-d*c.speed;var v=h.cache||l.cache;if(v&&v){var f=v.call(m,{cache:c,globalState:g,sceneState:m.state});c=Object.assign({},c,f)}m.state.cache=c,m.state.caching=!1,t(m.state.cache)})},E.prototype.change=function(t){if(!this.state.cache||this.state.caching)return!1;var e=this.options.vertical?t.height:t.width,i=this.state,s=i.cache,n=i.active,o=this.calc(t),r=o.inView,a=o.transform,l=o.start;this.state.progress=this.getProgress(a),this.state.progressInView=this.getProgressInView(l,e);var h=this.options.scenes,c=h[s.type],u=function(t,e){var i={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&-1===e.indexOf(s)&&(i[s]=t[s]);return i}(h,[s.type]);c||(c={});var p={globalState:t,sceneState:this.state,transform:a};if(this.state.inView!==r){var d=r?"appear":"disappear";c[d]?c[d].call(this,p):u[d]&&u[d].call(this,p),this.state.inView=r}return r?(this.DOM.context.style.willChange="transform",c.change?c.change.call(this,p):u.change&&u.change.call(this,p),this.checkEnter(n,this.state.progress)?(this.state.active=!0,c.enter?c.enter.call(this,p):u.enter&&u.enter.call(this,p)):this.checkLeave(n,this.state.progress)&&(this.state.active=!1,c.leave?c.leave.call(this,p):u.leave&&u.leave.call(this,p)),c.transform?c.transform.call(this,p):u.transform?u.transform.call(this,p):this.DOM.context.style[t.transformPrefix]=_(a,this.options.vertical)):(this.DOM.context.style[t.transformPrefix]=_(Math.max(t.bounding,e+50),this.options.vertical),this.DOM.context.style.willChange=null),!0},E.prototype.calc=function(t){var e=this.options.vertical,i=this.state.cache,s=i.top,n=i.right,o=i.bottom,r=i.left,a=i.speed,l=i.offset,h=t.width,c=t.height,u=t.current*-a-l,p=Math.round((e?s:r)+u),d=Math.round((e?o:n)+u);return{transform:u,start:p,end:d,inView:0<d&&p<(e?c:h)}},E.prototype.getProgress=function(t){var e=this.options.vertical,i=this.state.cache,s=(-t+i.triggerOffset-(e?i.top:i.left))/i.size;return s<0||1<s?-1:s},E.prototype.getProgressInView=function(t,e){return(e-t)/(e+this.state.cache.size)},E.prototype.checkEnter=function(t,e){return!t&&0<=e&&e<=1},E.prototype.checkLeave=function(t,e){return t&&-1===e};var A=function(t,e,i,s){this.options=s,this.DOM=this.render(t),this.state={clicked:!1,thumb:{size:0}},this.cache(e),this.setTarget=i},Y={thumbSize:{configurable:!0}};A.prototype.cache=function(t){this.state.cache={bounding:t.bounding,viewSize:this.options.vertical?t.height:t.width},this.updateThumbSize()},A.prototype.change=function(t){var e=t.current,i=t.transformPrefix,s=this.state.cache,n=s.bounding,o=s.viewSize,r=this.thumbSize,a=Math.abs(e)/(n/(o-r))+r/.5-r,l=Math.max(0,Math.min(a-r,a+r));this.DOM.thumb.style[i]=_(l.toFixed(2),this.options.vertical)},A.prototype.calc=function(t){return t*(this.state.cache.bounding/this.state.cache.viewSize)},A.prototype.render=function(t){var e=document.createElement("div"),i=this.options.vertical?"y":"x";e.className="rolly-scroll-bar "+i+"-scroll";var s=document.createElement("div");return s.className="rolly-scroll-bar-thumb",e.appendChild(s),t.appendChild(e),{parent:t,context:e,thumb:s}},A.prototype.on=function(){this.boundFns={click:this.click.bind(this),mouseDown:this.mouseDown.bind(this),mouseMove:this.mouseMove.bind(this),mouseUp:this.mouseUp.bind(this)},this.DOM.context.addEventListener("click",this.boundFns.click),this.DOM.context.addEventListener("mousedown",this.boundFns.mouseDown),document.addEventListener("mousemove",this.boundFns.mouseMove),document.addEventListener("mouseup",this.boundFns.mouseUp)},A.prototype.off=function(){return!!this.boundFns&&(this.DOM.context.removeEventListener("click",this.boundFns.click),this.DOM.context.removeEventListener("mousedown",this.boundFns.mouseDown),document.removeEventListener("mousemove",this.boundFns.mouseMove),document.removeEventListener("mouseup",this.boundFns.mouseUp),delete this.boundFns,!0)},A.prototype.click=function(t){var e=this.calc(this.options.vertical?t.clientY:t.clientX);this.setTarget(e)},A.prototype.mouseDown=function(t){t.preventDefault(),1===t.which&&(this.state.clicked=!0),this.DOM.parent.classList.add("is-dragging-scroll-bar")},A.prototype.mouseMove=function(t){if(this.state.clicked){var e=this.calc(this.options.vertical?t.clientY:t.clientX);this.setTarget(e)}},A.prototype.mouseUp=function(t){this.state.clicked=!1,this.DOM.parent.classList.remove("is-dragging-scroll-bar")},Y.thumbSize.get=function(){return this.state.thumb.size},Y.thumbSize.set=function(t){this.state.thumb.size=t;var e=this.options.vertical?"height":"width";this.DOM.thumb.style[e]=t+"px"},A.prototype.updateThumbSize=function(){var t=this.state.cache.bounding;if(t<=0)return this.DOM.context.classList.add("is-hidden"),void(this.thumbSize=0);this.DOM.context.classList.remove("is-hidden");var e=this.state.cache.viewSize;this.thumbSize=e*(e/(t+e))},A.prototype.destroy=function(){this.off(),this.DOM.parent.removeChild(this.DOM.context)},Object.defineProperties(A.prototype,Y);var z={getBoundFns:function(){var e=this,i={};return["resize","debounceScroll","virtualScroll"].map(function(t){return i[t]=z[t].bind(e)}),i},initState:function(){this.state={current:0,previous:0,target:null,width:window.innerWidth,height:window.innerHeight,bounding:0,ready:!1,preLoaded:!1,changing:!1,transformPrefix:k("transform")},this.privateState={rAF:void 0,isRAFCanceled:!1,debounceScroll:{timer:null,tick:!1},scrollTo:{}}},initScenes:function(){var e=this;this.scenes=[],L(this.options.scenes.selector,this.DOM.view).forEach(function(t){return e.scenes.push(new E(t,e.options))})},change:function(){var e=this;if(!this.privateState.isRAFCanceled){z.rAF.call(this);var t=this.state.target-this.state.current,i=t*this.options.ease;Math.abs(t)<.1?(z.cAF.call(this),i=0,this.state.current=this.state.target,this.state.changing&&(this.state.changing=!1,this.options.changeEnd(this.state))):(this.state.current+=i,this.state.changing||(this.state.changing=!0,this.options.changeStart(this.state))),Math.abs(t)<10&&this.privateState.scrollTo.callback&&(this.privateState.scrollTo.callback(this.state),this.privateState.scrollTo.callback=null),this.scrollBar&&this.scrollBar.change(this.state),this.options.change(this.state),this.scenes.forEach(function(t){return t.change(e.state)}),this.state.previous=this.state.current}},rAF:function(){this.privateState.isRAFCanceled=!1,this.privateState.rAF=requestAnimationFrame(z.change.bind(this))},cAF:function(){this.privateState.isRAFCanceled=!0,this.privateState.rAF=cancelAnimationFrame(this.privateState.rAF)},ready:function(){return!(!this.state.ready||this.options.preload&&!this.state.preLoaded)&&(this.options.ready(this.state),!0)},virtualScroll:function(t){if(!this.privateState.scrollTo.callback){var e=this.options.vertical?t.deltaY:t.deltaX;z.setTarget.call(this,this.state.target+-1*e)}},debounceScroll:function(t){var e=this;if(!this.privateState.scrollTo.callback){var i,s=this.DOM.listener===document.body;i=this.options.vertical?s?window.scrollY||window.pageYOffset:this.DOM.listener.scrollTop:s?window.scrollX||window.pageXOffset:this.DOM.listener.scrollLeft,z.setTarget.call(this,i),clearTimeout(this.privateState.debounceScroll.timer),this.privateState.debounceScroll.tick||(this.privateState.debounceScroll.tick=!0,this.DOM.listener.classList.add("is-scrolling")),this.privateState.debounceScroll.timer=setTimeout(function(){e.privateState.debounceScroll.tick=!1,e.DOM.listener.classList.remove("is-scrolling")},200)}},resize:function(t){var e=this,i=this.options.vertical?"height":"width";this.state.height=window.innerHeight,this.state.width=window.innerWidth;var s=this.options,n=s.native,o=s.vertical,r=this.DOM.view.getBoundingClientRect();this.state.bounding=o?r.height-(n?0:this.state.height):r.right-(n?0:this.state.width),this.scrollBar?this.scrollBar.cache(this.state):n&&(this.DOM.scroll.style[i]=this.state.bounding+"px"),z.setTarget.call(this,this.state.target),this.scenes.forEach(function(t){return t.cache(e.state)})},extendOptions:function(t){var e=this.options?this.options:z.getDefaults.call(this);return t.virtualScroll=Object.assign({},e.virtualScroll,t.virtualScroll),t.scenes=Object.assign({},e.scenes,t.scenes),Object.assign({},e,t)},preloadImages:function(i){var s=L("img",this.DOM.listener);s.length?s.forEach(function(t){var e=document.createElement("img");e.onload=function(){s.splice(s.indexOf(t),1),0===s.length&&i()},e.src=t.currentSrc||t.src}):i&&i()},addFakeScrollHeight:function(){var t=document.createElement("div");t.className="rolly-scroll-view",this.DOM.scroll=t,this.DOM.listener.appendChild(this.DOM.scroll)},removeFakeScrollHeight:function(){this.DOM.listener.removeChild(this.DOM.scroll)},addFakeScrollBar:function(){this.scrollBar=new A(this.DOM.listener,this.state,z.setTarget.bind(this),this.options)},removeFakeScrollBar:function(){this.scrollBar.destroy()},getDefaults:function(){return{vertical:!0,listener:document.body,view:L(".rolly-view")[0]||null,native:!0,preload:!0,autoUpdate:!0,ready:function(){},change:function(){},changeStart:function(){},changeEnd:function(){},ease:.075,virtualScroll:{limitInertia:!1,mouseMultiplier:.5,touchMultiplier:1.5,firefoxMultiplier:30,preventTouch:!0},noScrollBar:!1,scenes:{selector:"[data-scene]",speed:1,trigger:"middle"}}},getNodeListener:function(){return this.DOM.listener===document.body?window:this.DOM.listener},setTarget:function(t){this.state.target=Math.round(Math.max(0,Math.min(t,this.state.bounding))),!this.privateState.rAF&&z.rAF.call(this)}},j=function(t){void 0===t&&(t={}),this.boundFns=z.getBoundFns.call(this),this.options=z.extendOptions.call(this,t),this.DOM={listener:this.options.listener,view:this.options.view},z.initScenes.call(this)};j.prototype.init=function(){var t=this;this.virtualScroll=this.options.native?null:new f(this.options.virtualScroll),z.initState.call(this);var e=this.options.native?"native":"virtual",i=this.options.vertical?"y":"x";this.DOM.listener.classList.add("is-"+e+"-scroll"),this.DOM.listener.classList.add(i+"-scroll"),this.DOM.view.classList.add("rolly-view"),this.options.native?z.addFakeScrollHeight.call(this):!this.options.noScrollBar&&z.addFakeScrollBar.call(this),this.options.preload&&z.preloadImages.call(this,function(){t.state.preLoaded=!0,t.boundFns.resize(),z.ready.call(t)}),this.on()},j.prototype.on=function(t){(void 0===t&&(t=!0),this.options.native)?z.getNodeListener.call(this).addEventListener("scroll",this.boundFns.debounceScroll):this.virtualScroll&&this.virtualScroll.on(this.boundFns.virtualScroll);this.scrollBar&&this.scrollBar.on(),t&&z.rAF.call(this),z.resize.call(this),this.options.autoUpdate&&window.addEventListener("resize",this.boundFns.resize),this.state.ready=!0,z.ready.call(this)},j.prototype.off=function(t){(void 0===t&&(t=!0),this.options.native)?z.getNodeListener.call(this).removeEventListener("scroll",this.boundFns.debounceScroll):this.virtualScroll&&this.virtualScroll.off(this.boundFns.virtualScroll);this.scrollBar&&this.scrollBar.off(),t&&z.cAF.call(this),this.options.autoUpdate&&window.removeEventListener("resize",this.boundFns.resize),this.state.ready=!1},j.prototype.destroy=function(){var t=this.options.native?"native":"virtual",e=this.options.vertical?"y":"x";this.DOM.listener.classList.remove("is-"+t+"-scroll"),this.DOM.listener.classList.remove(e+"-scroll"),this.DOM.view.classList.remove("rolly-view"),this.virtualScroll&&(this.virtualScroll.destroy(),this.virtualScroll=null),this.off(),this.options.native?z.removeFakeScrollHeight.call(this):!this.options.noScrollBar&&z.removeFakeScrollBar.call(this)},j.prototype.reload=function(t){void 0===t&&(t=this.options),this.destroy(),this.boundFns=z.getBoundFns.call(this),this.options=z.extendOptions.call(this,t);var e=this.DOM;this.DOM=Object.assign({},e,{listener:this.options.listener,view:this.options.view}),z.initScenes.call(this),this.init()},j.prototype.scrollTo=function(t,e){e=Object.assign({},{offset:0,position:"start",callback:null},e);var i=this.options.vertical,s=null,n=this.state.current+e.offset;switch("string"==typeof t&&(t=L(t)[0]),typeof t){case"number":default:n=t;break;case"object":if(!t)return;s=t.getBoundingClientRect(),n+=i?s.top:s.left}switch(e.position){case"center":default:n-=i?this.state.height/2:this.state.width/2;break;case"end":n-=i?this.state.height:this.state.width}e.callback&&(this.privateState.scrollTo.callback=e.callback),this.options.native?this.options.vertical?window.scrollTo(0,n):window.scrollTo(n,0):z.setTarget.call(this,n)},j.prototype.update=function(){z.resize.call(this)};return function(t){return new j(t)}}();