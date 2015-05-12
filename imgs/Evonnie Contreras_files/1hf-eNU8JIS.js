/*!CK:3810832512!*//*1430719580,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["YIJrk"]); }

__d("getScrollPosition",["getDocumentScrollElement","getUnboundedScrollPosition"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();'use strict';function i(j){var k=g();if(j===window)j=k;var l=h(j),m=j===k?document.documentElement:j,n=j.scrollWidth-m.clientWidth,o=j.scrollHeight-m.clientHeight;l.x=Math.max(0,Math.min(l.x,n));l.y=Math.max(0,Math.min(l.y,o));return l;}e.exports=i;},null);
__d("LitestandNewStoryController",["Animation","Arbiter","AsyncRequest","CSS","Event","LitestandMessages","LitestandStream","NavigationMessage","Run","Style","SubscriptionsHandler","TinyViewport","ge","getScrollPosition","memoize","$","queryThenMutateDOM","requestAnimationFrame","NewStoriesPillConfig"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){b.__markCompiled&&b.__markCompiled();var y=b('NewStoriesPillConfig').maintain_scroll_position,z=1,aa,ba,ca=500,da=600,ea,fa;function ga(){fa&&clearTimeout(fa);fa=null;}function ha(){fa=setTimeout(function(){fa=null;ia();},ca);}function ia(){var bb;w(function(){bb=m.canInsertNewerStories();},function(){if(bb){ya();}else ha();},'LitestandNewStoryController/tryShowingStories');}var ja=0,ka,la=true,ma;function na(){if(!ma){ma=new q();ma.addSubscriptions(h.subscribe(n.NAVIGATION_BEGIN,va),k.listen(window,'resize',oa),k.listen(window,'scroll',ta));o.onLeave(va);}}function oa(){if(!qa())va();}var pa=u(function(){var bb=s('blueBarNAXAnchor');return bb&&j.hasClass(bb,'fixed_elem');});function qa(){return pa()&&!r.isTiny();}function ra(bb,cb){var db=s(bb);if(db)db.style.marginTop=cb?cb+'px':'';}function sa(bb){if(!qa()){bb=0;}else bb=Math.max(bb,0);ja=bb;ra('rightCol',bb);ra('leftCol',bb);}function ta(){var bb=t(window).y;if(bb<=0){va();return;}if(bb<ja){la=false;sa(bb);}if(ba&&bb>ba+50&&aa){aa.hide();ba=null;}ba=bb;}function ua(){if(!la){ka&&ka.stop();ka=null;}}function va(){if(ma){ma&&ma.release();la=false;sa(0);ma=null;if(aa){aa.hide();ba=null;}}}function wa(bb,cb){ka=new g(bb).from('opacity',0).to('opacity',1).duration(da);if(cb){la=true;for(var db=0;db<z;db++)ka.checkpoint(1,ua).from('opacity',1).to('opacity',0).duration(da).checkpoint().from('opacity',0).to('opacity',1).duration(da);}ka.go();if(aa)aa.show();}function xa(bb){ga();if(!ea)return;if(bb)var cb=t(window),db=ea.nextSibling,eb=db.offsetTop,fb=function(){sa(cb.y+db.offsetTop-eb);window.scrollTo(cb.x,ja);};p.apply(ea,{height:'',left:'',overflow:'',position:'',width:''});if(bb){fb();var gb=ea;x(function(){na();fb();wa(gb,true);});}else wa(ea,false);h.inform(l.STORIES_INSERTED);h.inform(l.NEWER_STORIES_INSERTED);setTimeout(function(){h.inform('reflow');},0);new i().setURI('/ajax/litestand/update_filter_viewtime').setData({section_id:m.getSectionID()}).send();ea=null;h.inform(l.NEW_STORIES_DISPLAYED);}function ya(){xa(y&&qa());}function za(){xa(false);}var ab={waitForDisplay:function(bb){if(!ea)ea=v(bb);if(m.canInsertNewerStories()){ya();}else ha();},showStoriesNow:function(bb){ea=bb;za();},setNewStoryPill:function(bb){aa=bb;}};e.exports=ab;},null);
__d("LiveFeedBar",["Arbiter","BanzaiScuba","DOM","Event","Run","throttle","SubscriptionsHandler","LitestandMessages","LitestandNewStoryController","ViewportBounds","CurrentUser","getElementPosition","NavigationMessage","Vector","NewStoriesPillConfig","UserActivity","FbFeedViewportTracking","WaitBeforeNewStoryQE","ViewportAtFeedTop"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){b.__markCompiled&&b.__markCompiled();var z=null,aa=false,ba=0,ca=0,da,ea,fa=0,ga=1,ha=2,ia=fa,ja,ka=200,la,ma=function(ta,ua){ua=ua!==(void 0)?ua:-1;new h('feed_newstoriescard').addNormal('user_id',q.getID()).addNormal('event',ta).addInteger('time',Math.round(Date.now()/1000)).addInteger('bar_is_visible',aa?1:0).addInteger('story_count',ca).addInteger('stories_fetched',ua).addInteger('load_requests_before_click',ba).post();},na=function(){var ta=u.pill_story_cnt;if(!ta)ta=2;if(ca>=ta&&!aa){z.show();ma('render');aa=true;}},oa=function(){if(aa){z.hide();aa=false;}},pa={},qa=function(){var ta=false,ua=w.getInstance(),va=p.getTop();for(var wa in pa){if(ua.hasBeenVisible(wa)){delete pa[wa];continue;}var xa=pa[wa];if(va<=r(xa).y){ta=true;break;}}return ta;},ra=false,sa={init:function(ta){if(ra)return;ra=true;z=ta;ia=fa;this._scrollDownWaitTimeMs=u.scroll_down_wait_time_ms;this._scrollThrottleTimeMs=u.scroll_throttle_time_ms;ka=u.pill_scroll_threshold;this._subscriptions=new m();sa._scrollDownWaitTimeout();this._subscriptions.addSubscriptions(ta.subscribe('click',this._barClickHandler),g.subscribe(n.NEW_STORIES_DISPLAYED,function(){ca=0;}),g.subscribe('Stream/totalHeadLoadedStories',function(ua,va){this._liveUpdatesAvailable(va.hiddenCount,va.fblogo);}.bind(this)),j.listen(window,'scroll',l(this._handleScroll.bind(this),this._scrollThrottleTimeMs,this)),g.subscribe(n.PILL_PAGELET_REQUEST_SENT,function(){ba+=1;ma('load_request');}),g.subscribe(s.NAVIGATION_BEGIN,this._cleanup.bind(this)),g.subscribe(n.NEW_STORIES_CONTAINER_CREATED,function(ua,va){this._newStoryContainer=va;}));if(x.showPillAfterMove)this._subscriptions.addSubscriptions(j.listen(window,'focus',function(){sa._processStories(true);}));k.onLeave(this._cleanup.bind(this));},_handleScrollUp:function(){if(ia!==ga){ia=ga;ja=da;}else if(ja-da>ka)sa._processStories(true);},_handleScrollDown:function(){if(ia!==ha){ia=ha;ja=da;}else if(da-ja>ka)oa();},_handleScroll:function(){ea=da;da=t.getScrollPosition().y;if(ea!==(void 0)&&da!==(void 0))if(da<ea){this._handleScrollUp();}else this._handleScrollDown();},_barClickHandler:function(){ma('click');ba=0;ca=0;oa();la&&o.showStoriesNow(la);},_scrollDownWaitTimeout:function(){var ta=sa._scrollDownWaitTimeMs;if(!v.isActive(sa._scrollDownWaitTimeMs)){sa._processStories(false);}else{var ua=Date.now()-v.getLastActive();ta=sa._scrollDownWaitTimeMs-ua;}this._scrollDownTimeoutListener=setTimeout(sa._scrollDownWaitTimeout,ta);},_processStories:function(ta){if(ca>0)if(y.isTrue()){oa();if(ta){la&&o.showStoriesNow(la);}else la&&o.waitForDisplay(i.getID(la));}else if(ta||!qa())na();},_liveUpdatesAvailable:function(ta,ua){ma('load_response',ta-ca);ca=ta;if(ca>0)if(y.isTrue()){oa();if(ua){o.showStoriesNow(la);}else o.waitForDisplay(i.getID(la));}else if(!v.isActive(sa._scrollDownWaitTimeMs)&&!qa())na();},_cleanup:function(){this._subscriptions&&this._subscriptions.release();this._subscriptions=null;this._scrollDownTimeoutListener&&clearTimeout(this._scrollDownTimeoutListener);this._scrollDownTimeoutListener=null;ra=false;ia=fa;},insertUnseenStory:function(ta,ua){if(ta)pa[ta]=ua;},getStoryCount:function(){return ca;}};e.exports=sa;},null);
__d("FeedLiveUpdateBar",["ArbiterMixin","Animation","Ease","DOM","DOMScroll","Event","Vector","copyProperties","csx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p=300;function q(r){this.element=r;this.init();}n(q.prototype,g,{init:function(){if(!this.element)return;this.hide();var r=j.find(this.element,"._2f6b");l.listen(r,'click',this._handleClick.bind(this));},_handleClick:function(event){this.hide();var r=new m(m.getScrollPosition().x,0,'document');k.scrollTo(r,p,false,false,0,function(){k.scrollTo(r,0);this.inform('click');}.bind(this));event.kill();},hide:function(){new h(this.element).from('top',42).to('top',-50).ease(i.sineOut()).duration(250).hide().go();},show:function(){if(!this.element)return;new h(this.element).from('top',-50).to('top',42).ease(i.makePowerOut(3)).duration(400).show().go();}});e.exports=q;},null);