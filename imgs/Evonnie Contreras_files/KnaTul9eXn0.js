/*!CK:84804958!*//*1430718874,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["w2Jwd"]); }

__d("MessagingRealtimeConstants",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={VIEWER_FBID:"realtime_viewer_fbid"};},null);
__d("SyncRequestStatusEnum",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={PENDING:0,ACCEPTED:1,REJECTED:2,EXPIRED:3,CANCELED:4,namesByValue:["PENDING","ACCEPTED","REJECTED","EXPIRED","CANCELED"]};},null);
__d("VideoPlayerReason",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={AUTOPLAY:"autoplay_initiated",USER:"user_initiated",PAGE_VISIBILITY:"page_visibility_initiated",SEEK:"seek_initiated"};},null);
__d("BanzaiNectar",["Banzai"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(j){return {log:function(k,l,m){var n={e:l,a:m};g.post('nectar:'+k,n,j);}};}var i=h();i.create=h;e.exports=i;},null);
__d("cancelAnimationFramePolyfill",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.mozCancelAnimationFrame||a.oCancelAnimationFrame||a.msCancelAnimationFrame||a.clearTimeout;e.exports=g;},null);
__d("escapeRegex",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h){return h.replace(/([.?*+\^$\[\]\\(){}|\-])/g,"\\$1");}e.exports=g;},null);
__d("cancelAnimationFrame",["cancelAnimationFramePolyfill"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();e.exports=g.bind(a);},null);
__d("tickerPhoteSnowLiftOpenStatus",["ArbiterMixin","copyProperties"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i='CheckIsOpen',j={registerOpenChecker:function(k){return j.subscribe(i,function(l,m){if(k())m.is_Open=true;});},checkIsOpen:function(){var k={is_Open:false};j.inform(i,k);return k.is_Open;}};h(j,g);e.exports=j;},null);
__d("LitestandMessages",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={NEWSFEED_LOAD:'LitestandMessages/NewsFeedLoad',LEAVE_HOME:'LitestandMessages/LeaveHome',UPDATE_HOME_COUNT:'LitestandMessages/UpdateHomeCount',STORIES_INSERTED:'LitestandMessages/StoriesInserted',NEWER_STORIES_INSERTED:'LitestandMessages/NewerStoriesInserted',NEW_STORIES_CONTAINER_CREATED:'LitestandMessages/NewStoriesContainer',NEW_STORIES_DISPLAYED:'LitestandMessages/NewStoriesDisplayed',RHC_RELOADED:'LitestandMessages/RHCReloaded',PILL_PAGELET_REQUEST_SENT:'LitestandMessages/PullPageletRequestSent'};e.exports=g;},null);
__d("AccessibilityLogger",["AsyncSignal","Cookie"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={COOKIE:'a11y',DECAY_MS:6*60*60*1000,DEFAULT:{sr:0,'sr-ts':Date.now(),jk:0,'jk-ts':Date.now(),kb:0,'kb-ts':Date.now(),hcm:0,'hcm-ts':Date.now()},getCookie:function(){var j=i.DEFAULT,k=h.get(i.COOKIE);if(k){k=JSON.parse(k);for(var l in j)if(l in k)j[l]=k[l];}return j;},logKey:function(j,k){var l=i.getCookie();l[j]++;var m=Date.now();if(m-l[j+'-ts']>i.DECAY_MS){new g('/ajax/accessibilitylogging',{eventName:k,times_pressed:l[j]}).send();l[j+'-ts']=m;l[j]=0;}h.set(i.COOKIE,JSON.stringify(l));},logHCM:function(){i.logKey('hcm','hcm_users');},logSRKey:function(){i.logKey('sr','sr_users');},logJKKey:function(){i.logKey('jk','jk_users');},logFocusIn:function(){i.logKey('kb','kb_users');}};e.exports=i;},null);
__d("ScriptPathState",["Arbiter"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h,i,j,k,l=100,m={setIsUIPageletRequest:function(n){j=n;},setUserURISampleRate:function(n){k=n;},reset:function(){h=null;i=false;j=false;},_shouldUpdateScriptPath:function(){return (i&&!j);},_shouldSendURI:function(){return (Math.random()<k);},getParams:function(){var n={};if(m._shouldUpdateScriptPath()){if(m._shouldSendURI()&&h!==null)n.user_uri=h.substring(0,l);}else n.no_script_path=1;return n;}};g.subscribe("pre_page_transition",function(n,o){i=true;h=o.to.getUnqualifiedURI().toString();});e.exports=a.ScriptPathState=m;},null);
__d("AjaxPipeRequest",["Arbiter","AsyncRequest","BigPipe","CSS","DOM","Env","PageEvents","PageletSet","ScriptPathState","URI","copyProperties","ge","goOrReplace","performance","performanceAbsoluteNow"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){b.__markCompiled&&b.__markCompiled();var v,w=0;function x(aa,ba){var ca=r(aa);if(!ca)return;if(!ba)ca.style.minHeight='100px';var da=n.getPageletIDs();for(var ea=0;ea<da.length;ea++){var fa=da[ea];if(k.contains(ca,fa))n.removePagelet(fa);}k.empty(ca);g.inform('pagelet/destroy',{id:null,root:ca});}function y(aa,ba){var ca=r(aa);if(ca&&!ba)ca.style.minHeight='100px';}function z(aa,ba){"use strict";this._uri=aa;this._query_data=ba;this._request=new h();this._canvas_id=null;this._allow_cross_page_transition=true;this._arbiter=new g();this._requestID=w++;}z.prototype.setCanvasId=function(aa){"use strict";this._canvas_id=aa;return this;};z.prototype.setURI=function(aa){"use strict";this._uri=aa;return this;};z.prototype.setData=function(aa){"use strict";this._query_data=aa;return this;};z.prototype.getData=function(aa){"use strict";return this._query_data;};z.prototype.setAllowCrossPageTransition=function(aa){"use strict";this._allow_cross_page_transition=aa;return this;};z.prototype.setAppend=function(aa){"use strict";this._append=aa;return this;};z.prototype.send=function(){"use strict";this._arbiter.inform(m.AJAXPIPE_SEND,{rid:this._requestID,quickling:!!this._isQuickling,ts:u()},g.BEHAVIOR_PERSISTENT);var aa={ajaxpipe:1,ajaxpipe_token:l.ajaxpipe_token};q(aa,o.getParams());o.reset();this._request.setOption('useIframeTransport',true).setURI(this._uri).setData(q(aa,this._query_data)).setPreBootloadHandler(this._preBootloadHandler.bind(this)).setInitialHandler(this._onInitialResponse.bind(this)).setHandler(this._onResponse.bind(this)).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(this._allow_cross_page_transition).setAllowIrrelevantRequests(this._allowIrrelevantRequests);if(this._automatic){this._relevantRequest=v;}else v=this._request;var ba=t.webkitClearResourceTimings||t.clearResourceTimings||null;if(ba)ba.call(t);this._request.send();return this;};z.prototype._preBootloadFirstResponse=function(aa){"use strict";return false;};z.prototype._fireDomContentCallback=function(){"use strict";this._arbiter.inform(m.AJAXPIPE_DOMREADY,true,g.BEHAVIOR_STATE);};z.prototype._fireOnloadCallback=function(){"use strict";this._arbiter.inform(m.AJAXPIPE_ONLOAD,{lid:this.pipe.lid,rid:this._requestID,ts:u()},g.BEHAVIOR_STATE);};z.prototype._isRelevant=function(aa){"use strict";return this._request==v||(this._automatic&&this._relevantRequest==v)||this._jsNonBlock||(v&&v._allowIrrelevantRequests);};z.prototype._preBootloadHandler=function(aa){"use strict";var ba=aa.getPayload();if(!ba||ba.redirect||!this._isRelevant(aa))return false;var ca=false;if(aa.is_first){!this._append&&!this._displayCallback&&x(this._canvas_id,this._constHeight);ca=this._preBootloadFirstResponse(aa);this.pipe=new i({arbiter:this._arbiter,rootNodeID:this._canvas_id,lid:this._request.lid,rid:this._requestID,isAjax:true,domContentCallback:this._fireDomContentCallback.bind(this),onloadCallback:this._fireOnloadCallback.bind(this),domContentEvt:m.AJAXPIPE_DOMREADY,onloadEvt:m.AJAXPIPE_ONLOAD,jsNonBlock:this._jsNonBlock,automatic:this._automatic,displayCallback:this._displayCallback,allowIrrelevantRequests:this._allowIrrelevantRequests});}return ca;};z.prototype._redirect=function(aa){"use strict";if(aa.redirect){if(aa.force||!this.isPageActive(aa.redirect)){var ba=['ajaxpipe','ajaxpipe_token'].concat(this.getSanitizedParameters());s(window.location,p(aa.redirect).removeQueryData(ba),true);}else{var ca=a.PageTransitions;ca.go(aa.redirect,true);}return true;}else return false;};z.prototype.isPageActive=function(aa){"use strict";return true;};z.prototype.getSanitizedParameters=function(){"use strict";return [];};z.prototype._versionCheck=function(aa){"use strict";return true;};z.prototype._onInitialResponse=function(aa){"use strict";var ba=aa.getPayload();if(!this._isRelevant(aa))return false;if(!ba)return true;if(this._redirect(ba)||!this._versionCheck(ba))return false;return true;};z.prototype._processFirstResponse=function(aa){"use strict";var ba=aa.getPayload();if(r(this._canvas_id)&&ba.canvas_class!=null)j.setClass(this._canvas_id,ba.canvas_class);};z.prototype.setFirstResponseCallback=function(aa){"use strict";this._firstResponseCallback=aa;return this;};z.prototype.setFirstResponseHandler=function(aa){"use strict";this._processFirstResponse=aa;return this;};z.prototype._onResponse=function(aa){"use strict";var ba=aa.payload;if(!this._isRelevant(aa))return h.suppressOnloadToken;if(aa.is_first){this._processFirstResponse(aa);this._firstResponseCallback&&this._firstResponseCallback();ba.provides=ba.provides||[];ba.provides.push('uipage_onload');if(this._append)ba.append=this._canvas_id;}if(ba){if('content' in ba.content&&this._canvas_id!==null&&this._canvas_id!='content'){ba.content[this._canvas_id]=ba.content.content;delete ba.content.content;}if(ba.secondFlushResources){this.pipe.setSecondFlushResources(ba.secondFlushResources);}else this.pipe.onPageletArrive(ba);}if(aa.is_last)y(this._canvas_id,this._constHeight);return h.suppressOnloadToken;};z.prototype.setNectarModuleDataSafe=function(aa){"use strict";this._request.setNectarModuleDataSafe(aa);return this;};z.prototype.setFinallyHandler=function(aa){"use strict";this._request.setFinallyHandler(aa);return this;};z.prototype.setErrorHandler=function(aa){"use strict";this._request.setErrorHandler(aa);return this;};z.prototype.abort=function(){"use strict";this._request.abort();if(v==this._request)v=null;this._request=null;return this;};z.prototype.setJSNonBlock=function(aa){"use strict";this._jsNonBlock=aa;return this;};z.prototype.setAutomatic=function(aa){"use strict";this._automatic=aa;return this;};z.prototype.setDisplayCallback=function(aa){"use strict";this._displayCallback=aa;return this;};z.prototype.setConstHeight=function(aa){"use strict";this._constHeight=aa;return this;};z.prototype.setAllowIrrelevantRequests=function(aa){"use strict";this._allowIrrelevantRequests=aa;return this;};z.prototype.getAsyncRequest=function(){"use strict";return this._request;};z.getCurrentRequest=function(){"use strict";return v;};z.setCurrentRequest=function(aa){"use strict";v=aa;};e.exports=z;},null);
__d("CSSClassTransition",["copyProperties"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=[];function i(){}g(i,{go:function(j,k,l,m){var n;for(var o=0;o<h.length;o++)if(h[o](j,k,l,m)===true)n=true;if(!n)j.className=k;},registerHandler:function(j){h.push(j);return {remove:function(){var k=h.indexOf(j);if(k>=0)h.splice(k,1);}};}});e.exports=i;},null);
__d("DocumentTitle",["Arbiter"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=document.title,i=null,j=1500,k=[],l=0,m=null,n=false;function o(){if(k.length>0){if(!n){p(k[l].title);l=++l%k.length;}else q();}else{clearInterval(m);m=null;q();}}function p(s){document.title=s;n=true;}function q(){r.set(i||h,true);n=false;}var r={get:function(){return h;},set:function(s,t){document.title=s;if(!t){h=s;i=null;g.inform('update_title',s);}else i=s;},blink:function(s){var t={title:s};k.push(t);if(m===null)m=setInterval(o,j);return {stop:function(){var u=k.indexOf(t);if(u>=0){k.splice(u,1);if(l>u){l--;}else if(l==u&&l==k.length)l=0;}}};}};e.exports=r;},null);
__d("Ease",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={makePowerOut:function(h){var i=g.makePowerIn(h);return function(j){return 1-i(1-j);};},makePowerIn:function(h){return function(i){var j=Math.pow(i,h);return (j*10000|0)/10000;};},makePowerInOut:function(h){var i=g.makePowerIn(h),j=g.makePowerOut(h);return function(k){return (k<.5)?.5*i(k*2):.5*j(k*2-1)+.5;};},expoOut:function(h){return 1-Math.pow(2,-10*h);},expoIn:function(h){return 1-g.expoOut(1-h);},expoInOut:function(h){return (h<.5)?.5*g.expoIn(h*2):.5*g.expoOut(h*2-1)+.5;},sineOut:function(h){return Math.sin(h*Math.PI*.5);},sineIn:function(h){return 1-Math.cos(h*Math.PI*.5);},sineInOut:function(h){return -.5*(Math.cos(Math.PI*h)-1);},circOut:function(h){return Math.sqrt(1-(--h)*h);},circIn:function(h){return 1-g.circOut(1-h);},circInOut:function(h){return (h<.5)?.5*g.circIn(h*2):.5*g.circOut(h*2-1)+.5;},bounceOut:function(h){if(h<1/2.75){return (7.5625*h*h);}else if(h<2/2.75){return (7.5625*(h-=1.5/2.75)*h+.75);}else if(h<2.5/2.75){return (7.5625*(h-=2.25/2.75)*h+.9375);}else return (7.5625*(h-=2.625/2.75)*h+.984375);},bounceIn:function(h){return 1-g.bounceOut(1-h);},bounceInOut:function(h){return (h<.5)?.5*g.bounceIn(h*2):.5*g.bounceOut(h*2-1)+.5;},makeBounceOut:function(h){h=h||1;return function(i){i=((1-Math.cos(i*Math.PI*h))*(1-i))+i;return 1-Math.abs(1-i);};},makeBounceIn:function(h){var i=g.makeBounceOut(h);return function(j){return 1-i(1-j);};},makeElasticOut:function(h,i){h<1&&(h=1);var j=Math.PI*2;return function(k){if(k===0||k===1)return k;var l=i/j*Math.asin(1/h);return h*Math.pow(2,-10*k)*Math.sin((k-l)*j/i)+1;};},makeElasticIn:function(h,i){var j=g.makeElasticOut(h,i);return function(k){return 1-j(1-k);};},makeElasticInOut:function(h,i){i*=1.5;var j=g.makeElasticIn(h,i),k=g.makeElasticOut(h,i);return function(l){return (l<.5)?.5*j(l*2):.5*k(l*2-1)+.5;};},makeBackOut:function(h){var i=g.makeBackIn(h);return function(j){return 1-i(1-j);};},makeBackIn:function(h){return function(i){return i*i*((h+1)*i-h);};},makeBackInOut:function(h){h*=1.525;var i=g.makeBackIn(h),j=g.makeBackOut(h);return function(k){return (k<.5)?.5*i(k*2):.5*j(k*2-1)+.5;};}};g.elasticOut=g.makeElasticOut(1,.3);g.elasticIn=g.makeElasticIn(1,.3);g.elasticInOut=g.makeElasticInOut(1,.3);g.backOut=g.makeBackOut(1.7);g.backIn=g.makeBackIn(1.7);g.backInOut=g.makeBackInOut(1.7);e.exports=g;},null);
__d("FullScreen",["Event","Arbiter","CSS","UserAgent","UserAgent_DEPRECATED","copyProperties","throttle","Keys"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();var o={},p=false,q=function(v){if(g.getKeyCode(v)===n.ESC)v.stopPropagation();},r=function(){if(!p){document.addEventListener('keydown',q,true);p=true;}},s=function(){if(p){document.removeEventListener('keydown',q,true);p=false;}},t=l(new h(),{listenForEvent:function(v){var w=m(this.onChange,0,this);if(!o[v.id]){o[v.id]=true;g.listen(v,{webkitfullscreenchange:w,mozfullscreenchange:w,MSFullscreenChange:w,fullscreenchange:w});}},enableFullScreen:function(v){this.listenForEvent(v);if(v.webkitRequestFullScreen){if(k.chrome()){v.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);}else v.webkitRequestFullScreen();}else if(v.mozRequestFullScreen){v.mozRequestFullScreen();}else if(v.msRequestFullscreen){r();v.msRequestFullscreen();}else if(v.requestFullScreen){v.requestFullScreen();}else return false;return true;},disableFullScreen:function(){if(document.webkitCancelFullScreen){document.webkitCancelFullScreen();}else if(document.mozCancelFullScreen){document.mozCancelFullScreen();}else if(document.msExitFullscreen){document.msExitFullscreen();}else if(document.cancelFullScreen){document.cancelFullScreen();}else if(document.exitFullScreen){document.exitFullScreen();}else return false;return true;},getFullScreenElement:function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;},isFullScreen:function(){return (document.webkitIsFullScreen||document.fullScreen||document.mozFullScreen||document.msFullscreenElement);},toggleFullScreen:function(v){if(this.isFullScreen()){this.disableFullScreen();return false;}else return this.enableFullScreen(v);return false;},onChange:function(){var v=this.isFullScreen();i.conditionClass(document.body,'fullScreen',v);this.inform('changed');if(!v)s();},isSupportedWithKeyboardInput:function(){return this.isSupported()&&!j.isBrowser('Safari');},isSupported:function(){var v=document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled||document.fullscreenEnabled;return v||document.webkitCancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.cancelFullScreen||document.exitFullScreen;}}),u=m(t.onChange,0,t);g.listen(document,{webkitfullscreenchange:u,mozfullscreenchange:u,MSFullscreenChange:u,fullscreenchange:u});e.exports=t;},null);
__d("MenuDeprecated",["Event","Arbiter","CSS","DataStore","DOM","HTML","Keys","Parent","Style","UserAgent_DEPRECATED","copyProperties","emptyFunction","Run"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){b.__markCompiled&&b.__markCompiled();var s='menu:mouseover',t=null;function u(ea){if(i.hasClass(ea,'uiMenuContainer'))return ea;return n.byClass(ea,'uiMenu');}function v(ea){return n.byClass(ea,'uiMenuItem');}function w(ea){if(document.activeElement){var fa=v(document.activeElement);return ea.indexOf(fa);}return -1;}function x(ea){return k.find(ea,'a.itemAnchor');}function y(ea){return i.hasClass(ea,'checked');}function z(ea){return !i.hasClass(ea,'disabled')&&o.get(ea,'display')!=='none';}function aa(event){var ea=document.activeElement;if(!ea||!n.byClass(ea,'uiMenu')||!k.isInputNode(ea)){var fa=v(event.getTarget());fa&&da.focusItem(fa);}}function ba(ea){p.firefox()&&x(ea).blur();da.inform('select',{menu:u(ea),item:ea});}var ca=function(){ca=r;var ea={};ea.click=function(event){var fa=v(event.getTarget());if(fa&&z(fa)){ba(fa);var ga=x(fa),ha=ga.href,ia=ga.getAttribute('rel');return (ia&&ia!=='ignore')||(ha&&ha.charAt(ha.length-1)!=='#');}};ea.keydown=function(event){var fa=event.getTarget();if(event.getModifiers().any)return;if(!t||k.isInputNode(fa))return;var ga=g.getKeyCode(event),ha;switch(ga){case m.UP:case m.DOWN:var ia=da.getEnabledItems(t);ha=w(ia);da.focusItem(ia[ha+(ga===m.UP?-1:1)]);return false;case m.SPACE:var ja=v(fa);if(ja){ba(ja);event.prevent();}break;default:var ka=String.fromCharCode(ga).toLowerCase(),la=da.getEnabledItems(t);ha=w(la);var ma=ha,na=la.length;while((~ha&&(ma=++ma%na)!==ha)||(!~ha&&++ma<na)){var oa=da.getItemLabel(la[ma]);if(oa&&oa.charAt(0).toLowerCase()===ka){da.focusItem(la[ma]);return false;}}}};g.listen(document.body,ea);},da=q(new h(),{focusItem:function(ea){if(ea&&z(ea)){this._removeSelected(u(ea));i.addClass(ea,'selected');x(ea).focus();}},getEnabledItems:function(ea){return da.getItems(ea).filter(z);},getCheckedItems:function(ea){return da.getItems(ea).filter(y);},getItems:function(ea){return k.scry(ea,'li.uiMenuItem');},getItemLabel:function(ea){return ea.getAttribute('data-label',2)||'';},isItemChecked:function(ea){return i.hasClass(ea,'checked');},autoregister:function(ea,fa,ga){ea.subscribe('show',function(){da.register(fa,ga);});ea.subscribe('hide',function(){da.unregister(fa);});},register:function(ea,fa){ea=u(ea);ca();if(!j.get(ea,s))j.set(ea,s,g.listen(ea,'mouseover',aa));if(fa!==false)t=ea;},setItemEnabled:function(ea,fa){if(!fa&&!k.scry(ea,'span.disabledAnchor')[0])k.appendContent(ea,k.create('span',{className:k.find(ea,'a').className+' disabledAnchor'},l(x(ea).innerHTML)));i.conditionClass(ea,'disabled',!fa);},toggleItem:function(ea){var fa=!da.isItemChecked(ea);da.setItemChecked(ea,fa);},setItemChecked:function(ea,fa){i.conditionClass(ea,'checked',fa);x(ea).setAttribute('aria-checked',fa);},unregister:function(ea){ea=u(ea);var fa=j.remove(ea,s);fa&&fa.remove();t=null;this._removeSelected(ea);},_removeSelected:function(ea){da.getItems(ea).filter(function(fa){return i.hasClass(fa,'selected');}).forEach(function(fa){i.removeClass(fa,'selected');});}});e.exports=da;},null);
__d("SelectorDeprecated",["Event","Arbiter","Button","ContextualLayer","CSS","DataStore","DOM","Focus","HTML","Keys","MenuDeprecated","Parent","Style","Toggler","Tooltip","URI","Vector","arrayContains","copyProperties","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){b.__markCompiled&&b.__markCompiled();var aa,ba,ca=[],da;function ea(pa){return r.byClass(pa,'uiSelector');}function fa(pa){return r.byClass(pa,'uiSelectorButton');}function ga(){if(!ba){ba=new j({position:'below'},m.create('div'));k.addClass(ba.getRoot(),'uiSelectorContextualLayer');}return ba;}function ha(pa){return m.scry(pa,'select')[0];}function ia(pa){return m.find(pa,'div.uiSelectorMenuWrapper');}function ja(){ja=z;q.subscribe('select',function(pa,qa){if(!aa||!qa||qa.menu!==oa.getSelectorMenu(aa))return;var ra=ka(aa),sa=la(qa.item);if(sa){var ta=aa,ua=oa.isOptionSelected(qa.item),va=oa.inform('select',{selector:ta,option:qa.item,clone:da});if(va===false)return;if(ra||!ua){oa.setSelected(ta,oa.getOptionValue(qa.item),!ua);oa.inform('toggle',{selector:ta,option:qa.item});oa.inform('change',{selector:ta});h.inform('Form/change',{node:ta});if(ma(ta))l.set(ta,'dirty',true);}}if(!ra||!sa)aa&&oa.toggle(aa);});}function ka(pa){return !!pa.getAttribute('data-multiple');}function la(pa){return k.hasClass(pa,'uiSelectorOption');}function ma(pa){return !!pa.getAttribute('data-autosubmit');}var na=function(){na=z;var pa={keydown:function(event){var qa=event.getTarget();if(m.isInputNode(qa))return;switch(g.getKeyCode(event)){case p.DOWN:case p.SPACE:case p.UP:if(fa(qa)){var ra=ea(qa);oa.toggle(ra);return false;}break;case p.ESC:if(aa){var sa=oa.getSelectorButton(aa);oa.toggle(aa);sa&&n.set(sa);return false;}break;}},mouseover:function(event){var qa=r.byAttribute(event.getTarget(),'ajaxify');if(qa&&k.hasClass(qa,'uiSelectorButton'))oa.loadMenu(ea(qa));}};g.listen(document.body,pa);};t.subscribe(['show','hide'],function(pa,qa){var ra=ea(qa.getActive());if(ra){na();ja();var sa=oa.getSelectorButton(ra),ta=oa.getSelectorMenu(ra),ua=pa==='show';sa.setAttribute('aria-expanded',ua?'true':'false');if(ua){aa=ra;if(k.hasClass(sa,'uiButtonDisabled')){oa.setEnabled(ra,false);return false;}ta=ta||oa.loadMenu(ra);var va=s.getScrollParent(ra),wa=va!==window&&va!==m.getDocumentScrollElement();if(wa||k.hasClass(ra,'uiSelectorUseLayer')){if(wa)ca.push(g.listen(va,'scroll',function(){qa.hide();}));da=m.create('div',{className:ra.className});k.addClass(da,'invisible_elem');w.getElementDimensions(ra).setElementDimensions(da);m.replace(ra,da);var xa=k.hasClass(ra,'uiSelectorRight'),ya=k.hasClass(ra,'uiSelectorBottomUp');ga().setContext(da).setContent(ra).setPosition(ya?'above':'below').setAlignment(xa?'right':'left').show();}q.register(ta);var za=q.getCheckedItems(ta);if(!za.length)za=q.getEnabledItems(ta);if(za.length)q.focusItem(za[0]);}else{aa=null;if(da){while(ca.length)ca.pop().remove();m.replace(da,ra);ga().hide();da=null;}ta&&q.unregister(ta);if(ma(ra)&&l.get(ra,'dirty')){var ab=m.scry(ra,'input.submitButton')[0];ab&&ab.click();l.remove(ra,'dirty');}}k.conditionClass(oa.getSelectorButton(ra),'selected',ua);oa.inform(ua?'open':'close',{selector:ra,clone:da});}});var oa=y(new h(),{attachMenu:function(pa,qa,ra){pa=ea(pa);if(pa){aa&&q.unregister(oa.getSelectorMenu(aa));m.setContent(ia(pa),qa);aa&&q.register(oa.getSelectorMenu(pa));da&&ga().updatePosition();if(ra){var sa=pa.getAttribute('data-name');sa&&ra.setAttribute('name',sa);if(!ka(pa))ra.setAttribute('multiple',false);var ta=ha(pa);if(ta){m.replace(ta,ra);}else m.insertAfter(pa.firstChild,ra);}return true;}},getOption:function(pa,qa){var ra=oa.getOptions(pa),sa=ra.length;while(sa--)if(qa===oa.getOptionValue(ra[sa]))return ra[sa];return null;},getOptions:function(pa){var qa=q.getItems(oa.getSelectorMenu(pa));return qa.filter(la);},getEnabledOptions:function(pa){var qa=q.getEnabledItems(oa.getSelectorMenu(pa));return qa.filter(la);},getSelectedOptions:function(pa){return q.getCheckedItems(oa.getSelectorMenu(pa));},getOptionText:function(pa){return q.getItemLabel(pa);},getOptionValue:function(pa){var qa=ea(pa),ra=ha(qa),sa=oa.getOptions(qa).indexOf(pa);return sa>=0?ra.options[sa+1].value:'';},getSelectorButton:function(pa){return m.find(pa,'a.uiSelectorButton');},getSelectorMenu:function(pa){return m.scry(pa,'div.uiSelectorMenu')[0];},getValue:function(pa){var qa=ha(pa);if(!qa)return null;if(!ka(pa))return qa.value;var ra=[],sa=qa.options;for(var ta=1,ua=sa.length;ta<ua;ta++)if(sa[ta].selected)ra.push(sa[ta].value);return ra;},isOptionSelected:function(pa){return q.isItemChecked(pa);},listen:function(pa,qa,ra){return this.subscribe(qa,function(sa,ta){if(ta.selector===pa)return ra(ta,sa);});},loadMenu:function(pa,qa){var ra=oa.getSelectorMenu(pa);if(!ra){var sa=oa.getSelectorButton(pa),ta=sa.getAttribute('ajaxify');if(ta){d(['AsyncRequest'],function(va){var wa=v(ta),xa=wa.getQueryData();wa.setQueryData({});var ya=new va(wa).setData(xa).setNectarModuleDataSafe(sa).setRelativeTo(sa);qa&&ya.setFinallyHandler(function(){setTimeout(qa,0);});ya.send();}.bind(this));var ua=o('<div class="uiSelectorMenuWrapper uiToggleFlyout">'+'<div class="uiMenu uiSelectorMenu loading">'+'<ul class="uiMenuInner">'+'<li><span></span></li>'+'</ul>'+'</div>'+'</div>');m.appendContent(sa.parentNode,ua);ra=oa.getSelectorMenu(pa);sa.removeAttribute('onmouseover');}}else qa&&qa();return ra;},setButtonLabel:function(pa,qa){var ra=oa.getSelectorButton(pa),sa=parseInt(ra.getAttribute('data-length'),10);qa=qa||ra.getAttribute('data-label')||'';i.setLabel(ra,qa);if(typeof qa==='string')if(sa&&qa.length>sa){ra.setAttribute('title',qa);}else ra.removeAttribute('title');},setButtonTooltip:function(pa,qa){var ra=oa.getSelectorButton(pa),sa=r.byTag(ra,'a');sa&&u.set(sa,qa||ra.getAttribute('data-tooltip')||'');},setEnabled:function(pa,qa){if(!qa&&aa&&ea(pa)===aa)oa.toggle(pa);i.setEnabled(oa.getSelectorButton(pa),qa);},setOptionEnabled:function(pa,qa){q.setItemEnabled(pa,qa);},setSelected:function(pa,qa,ra){ra=ra!==false;var sa=oa.getOption(pa,qa);if(!sa)return;var ta=oa.isOptionSelected(sa);if(ra!==ta){if(!ka(pa)&&!ta){var ua=oa.getSelectedOptions(pa)[0];ua&&q.toggleItem(ua);}q.toggleItem(sa);}oa.updateSelector(pa);},toggle:function(pa){t.toggle(m.scry(ea(pa),'div.wrap')[0]);},updateSelector:function(pa){var qa=oa.getOptions(pa),ra=oa.getSelectedOptions(pa),sa=ha(pa).options,ta=[],ua=[];for(var va=0,wa=qa.length;va<wa;va++){var xa=x(ra,qa[va]);sa[va+1].selected=xa;if(xa){var ya=oa.getOptionText(qa[va]);ta.push(ya);ua.push(qa[va].getAttribute('data-tooltip')||ya);}}sa[0].selected=!ra.length;var za=k.hasClass(pa,'uiSelectorDynamicLabel'),ab=k.hasClass(pa,'uiSelectorDynamicTooltip');if(za||ab){var bb='';if(ka(pa)){var cb=oa.getSelectorButton(pa);bb=cb.getAttribute('data-delimiter')||', ';}ta=ta.join(bb);ua=ua.join(bb);za&&oa.setButtonLabel(pa,ta);ab&&oa.setButtonTooltip(pa,ua);}}});e.exports=oa;},null);
__d("SystemEvents",["Arbiter","ErrorUtils","SystemEventsInitialData","UserAgent_DEPRECATED","copyProperties","setIntervalAcrossTransitions"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=new g(),n=[],o=1000;l(function(){for(var y=0;y<n.length;y++)n[y]();},o);function p(){return (/c_user=(\d+)/.test(document.cookie)&&RegExp.$1)||0;}function q(){return i.ORIGINAL_USER_ID;}var r=q(),s=navigator.onLine;function t(){if(!s){s=true;m.inform(m.ONLINE,s);}}function u(){if(s){s=false;m.inform(m.ONLINE,s);}}if(j.ie()){if(j.ie()>=11){window.addEventListener('online',t,false);window.addEventListener('offline',u,false);}else if(j.ie()>=8){window.attachEvent('onload',function(){document.body.ononline=t;document.body.onoffline=u;});}else n.push(function(){(navigator.onLine?t:u)();});}else if(window.addEventListener)if(!j.chrome()){window.addEventListener('online',t,false);window.addEventListener('offline',u,false);}var v=r;n.push(function(){var y=p();if(v!=y){m.inform(m.USER,y);v=y;}});var w=Date.now();function x(){var y=Date.now(),z=y-w,aa=z<0||z>10000;w=y;if(aa)m.inform(m.TIME_TRAVEL,z);return aa;}n.push(x);n.push(function(){if(window.onerror!=h.onerror)window.onerror=h.onerror;});k(m,{USER:'SystemEvents/USER',ONLINE:'SystemEvents/ONLINE',TIME_TRAVEL:'SystemEvents/TIME_TRAVEL',isPageOwner:function(y){return (y||p())==r;},isOnline:function(){return j.chrome()||s;},checkTimeTravel:x});e.exports=m;},null);
__d("reportData",["Banzai","SessionName"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={retry:true};function j(k,l){l=l||{};var m={ft:(l.ft||{}),gt:(l.gt||{})},n='-',o=[],p='r',q=[Date.now(),0,n,k,n,n,p,a.URI?a.URI.getRequestURI(true,true).getUnqualifiedURI().toString():location.pathname+location.search+location.hash,m,0,0,0,0].concat(o),r=[h.getName(),Date.now(),'act'];g.post('eagle_eye_event',Array.prototype.concat(r,q),i);}e.exports=j;},null);
__d("VideoPermalinkURI",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={isValid:function(h){return g.parse(h)!==null;},parse:function(h){if(this.isValidLegacy(h)){var i=h.getQueryData();if(i.v)return {video_id:i.v,set_token:i.set};return null;}var j=h.getPath();if(j[j.length-1]==='/')j=j.substring(0,j.length-1);var k=j.split('/');if(k.length>=3&&k[2]==='videos')if(k.length===4&&/^\d+$/.exec(k[3])!==null){return {video_id:k[3],set_token:null};}else if(k.length===5&&/^\d+$/.exec(k[4])!==null)return {video_id:k[4],set_token:k[3]};return null;},isValidLegacy:function(h){var i=h.getPath();if(i[i.length-1]==='/')i=i.substring(0,i.length-1);if(i==='/photo.php'||i==='/force_photo/photo.php'||i==='/photo'||i==='/force_photo/photo/index.php'||i==='/photo/index.php'||i==='/force_photo/photo'||i==='/video.php'||i==='/video/video.php')return true;return false;}};e.exports=g;},null);
__d("UIPageletContentCache",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={cache:{},getContent:function(h){if(h in this.cache)return this.cache[h];return null;},setContent:function(h,i){this.cache[h]=i;}};e.exports=g;},null);
__d("UIPagelet",["ActorURI","AjaxPipeRequest","AsyncRequest","DOM","HTML","ScriptPathState","UIPageletContentCache","URI","copyProperties","emptyFunction","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();function r(s,t,u){"use strict";var v=s&&j.isElementNode(s)?s.id:s;this._id=v||null;this._element=q(s||j.create('div'));this._src=t||null;this._context_data=u||{};this._data={};this._handler=p;this._request=null;this._use_ajaxpipe=false;this._use_post_request=false;this._is_bundle=true;this._allow_cross_page_transition=false;this._append=false;this._cache_content=false;this._content_cache_key='';}r.prototype.getElement=function(){"use strict";return this._element;};r.prototype.setHandler=function(s){"use strict";this._handler=s;return this;};r.prototype.go=function(s,t){"use strict";if(arguments.length>=2||typeof s=='string'){this._src=s;this._data=t||{};}else if(arguments.length==1)this._data=s;this.refresh();return this;};r.prototype.setAllowCrossPageTransition=function(s){"use strict";this._allow_cross_page_transition=s;return this;};r.prototype.setBundleOption=function(s){"use strict";this._is_bundle=s;return this;};r.prototype.setErrorHandler=function(s){"use strict";this._errorHandler=s;return this;};r.prototype.setTransportErrorHandler=function(s){"use strict";this.transportErrorHandler=s;return this;};r.prototype.refresh=function(){"use strict";if(this._use_ajaxpipe){l.setIsUIPageletRequest(true);this._request=new h();this._request.setCanvasId(this._id).setAppend(this._append).setConstHeight(this._constHeight).setJSNonBlock(this._jsNonblock).setAutomatic(this._automatic).setDisplayCallback(this._displayCallback).setFinallyHandler(this._finallyHandler).setAllowIrrelevantRequests(this._allowIrrelevantRequests);}else{if(this._cache_content){var s=m.getContent(this._content_cache_key);if(s!==null){this.handleContent(s);return this;}}var t=function(x){this._request=null;var y=k(x.getPayload());this.handleContent(y);if(this._cache_content)m.setContent(this._content_cache_key,y);}.bind(this),u=this._displayCallback,v=this._finallyHandler;this._request=new i().setMethod('GET').setReadOnly(true).setOption('bundle',this._is_bundle).setHandler(function(x){if(u){u(t.bind(null,x));}else t(x);v&&v();});if(this._errorHandler)this._request.setErrorHandler(this._errorHandler);if(this.transportErrorHandler)this._request.setTransportErrorHandler(this.transportErrorHandler);if(this._use_post_request)this._request.setMethod('POST');}var w={};o(w,this._context_data);o(w,this._data);if(this._actorID)w[g.PARAMETER_ACTOR]=this._actorID;this._request.setURI(this._src).setAllowCrossPageTransition(this._allow_cross_page_transition).setData({data:JSON.stringify(w)}).send();return this;};r.prototype.handleContent=function(s){"use strict";if(this._append){j.appendContent(this._element,s);}else j.setContent(this._element,s);this._handler();};r.prototype.cancel=function(){"use strict";if(this._request)this._request.abort();};r.prototype.setUseAjaxPipe=function(s){"use strict";this._use_ajaxpipe=!!s;return this;};r.prototype.setUsePostRequest=function(s){"use strict";this._use_post_request=!!s;return this;};r.prototype.setAppend=function(s){"use strict";this._append=!!s;return this;};r.prototype.setJSNonBlock=function(s){"use strict";this._jsNonblock=!!s;return this;};r.prototype.setAutomatic=function(s){"use strict";this._automatic=!!s;return this;};r.prototype.setDisplayCallback=function(s){"use strict";this._displayCallback=s;return this;};r.prototype.setConstHeight=function(s){"use strict";this._constHeight=!!s;return this;};r.prototype.setFinallyHandler=function(s){"use strict";this._finallyHandler=s;return this;};r.prototype.setAllowIrrelevantRequests=function(s){"use strict";this._allowIrrelevantRequests=s;return this;};r.prototype.setActorID=function(s){"use strict";this._actorID=s;return this;};r.prototype.setCacheContent=function(s){"use strict";this._cache_content=s;return this;};r.prototype.setContentCacheKey=function(s){"use strict";this._content_cache_key=s;return this;};r.appendToInline=function(s,t){"use strict";var u=q(s),v=q(t);if(u&&v){while(v.firstChild)j.appendContent(u,v.firstChild);j.remove(v);}};r.loadFromEndpoint=function(s,t,u,v){"use strict";v=v||{};var w='/ajax/pagelet/generic.php/'+s;if(v.intern)w='/intern'+w;var x=new n(w.replace(/\/+/g,'/'));if(v.subdomain)x.setSubdomain(v.subdomain);var y=false,z='';if(v.contentCacheKey){y=true;z=s+','+String(v.contentCacheKey);}var aa=new r(t,x,u).setUseAjaxPipe(v.usePipe).setBundleOption(v.bundle!==false).setAppend(v.append).setJSNonBlock(v.jsNonblock).setAutomatic(v.automatic).setDisplayCallback(v.displayCallback).setConstHeight(v.constHeight).setAllowCrossPageTransition(v.crossPage).setFinallyHandler(v.finallyHandler||p).setErrorHandler(v.errorHandler).setTransportErrorHandler(v.transportErrorHandler).setAllowIrrelevantRequests(v.allowIrrelevantRequests).setActorID(v.actorID).setCacheContent(y).setContentCacheKey(z).setUsePostRequest(v.usePostRequest);v.handler&&aa.setHandler(v.handler);aa.go();return aa;};e.exports=r;},null);
__d("XUIBadge",["CSS","DOM","cx","invariant"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(m){return parseInt(m,10)===m;}function l(m){"use strict";this.target=m.target;this.count=m.count;this.maxcount=m.maxcount;}l.prototype.getCount=function(){"use strict";return this.count;};l.prototype.setCount=function(m){"use strict";j(k(m));j(m>=0);this.count=m;g.conditionClass(this.target,'hidden_elem',this.count===0);if(m>this.maxcount){h.setContent(this.target,this.maxcount+'+');g.addClass(this.target,"_5ugi");}else{h.setContent(this.target,m);g.removeClass(this.target,"_5ugi");}};l.prototype.setLegacyContent=function(m){"use strict";if(typeof m==='string'){g.conditionClass(this.target,'hidden_elem',m==0);h.setContent(this.target,m);g.removeClass(this.target,"_5ugi");}else this.setCount(m);};l.prototype.increment=function(){"use strict";this.setCount(this.getCount()+1);};e.exports=l;},null);
__d("ContextualLayerUpdateOnScroll",["Event","copyProperties"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(j){"use strict";this._layer=j;}i.prototype.enable=function(){"use strict";this._subscriptions=[this._layer.subscribe('show',this._attachScrollListener.bind(this)),this._layer.subscribe('hide',this._removeScrollListener.bind(this))];};i.prototype.disable=function(){"use strict";while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();};i.prototype._attachScrollListener=function(){"use strict";if(this._listener)return;var j=this._layer.getContextScrollParent();this._listener=g.listen(j,'scroll',this._layer.updatePosition.bind(this._layer));};i.prototype._removeScrollListener=function(){"use strict";this._listener&&this._listener.remove();this._listener=null;};h(i.prototype,{_subscriptions:[]});e.exports=i;},null);