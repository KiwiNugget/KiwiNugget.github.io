/*!CK:436405796!*//*1430719318,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["0647u"]); }

__d("XAYMTPanelSaveSettingsController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/ads\/growth\/aymt\/homepage_panel\/save_settings\/",{time_range:{type:"Enum",enumType:1},ad_account_id:{type:"Int"},promoted_object:{type:"Int"},collapsed:{type:"Int"},dismiss_nux:{type:"Bool",defaultValue:false},flash_insights_dismiss_nux:{type:"Bool",defaultValue:false},refresh_panel:{type:"Bool",defaultValue:false}});},null);
__d("AdvertiserHomePagelet",["AsyncRequest","DOM","URI","XAYMTPanelSaveSettingsController","$"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l={init:function(m,n){var o=j.getURIBuilder().setBool('refresh_panel',true).getURI();o.addQueryData(i.getRequestURI().getQueryData());new g().setURI(o).setStatusElement(n).setErrorHandler(function(p){h.setContent(k('pagelet_advertiser_panel'),'');}).send();}};e.exports=l;},null);
__d("BookmarkPopoverMenu.react",["Arbiter","Link.react","MenuSeparator.react","PopoverMenu.react","React","ReactXUIMenu","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();'use strict';var o=l.Item,p=k.createClass({displayName:"BookmarkPopoverMenu",render:function(){var q=this._renderMenuContent();if(q.length===0)return null;var r=k.createElement(l,null,q),s=n._("Edit"),t=(k.createElement(h,{href:"#",title:s,"aria-label":s,onClick:this.props.loadPopupModules,className:"_1wc5 _26tg accessible_elem"}));return (k.createElement("div",{className:"buttonWrap"},k.createElement(j,{ref:"popovermenu",className:"uiSideNavEditButton",menu:r},t)));},_renderMenuContent:function(){var q=this.props.navItem,r=this.props.navSection,s=this.props.editmenu,t=q.props.model.pinned,u=r.props.id==='pinnedNav',v=[];if(s.favoriteOption){var w=t?s.favoriteOption.title.unfavorite:s.favoriteOption.title.favorite;v.push(k.createElement(o,{onclick:this._toggleFavorite,key:"menu_favorite"},w));}if(u&&s.rearrangeOption)v.push(k.createElement(o,{onclick:this._toggleEditMode,key:"menu_edit"},s.rearrangeOption.title));if(s.hideOption)v.push(this._renderAjaxMenuItem(s.hideOption,'menu_hide_option'));if(s.editOption)v.push(this._renderAjaxMenuItem(s.editOption,'menu_edit_option'));if(s.deleteOption){if(v.length!==0)v.push(k.createElement(i,{key:"menu_sep"}));v.push(this._renderAjaxMenuItem(s.deleteOption,'menu_delete_option'));}return v;},_renderAjaxMenuItem:function(q,r){return (k.createElement(o,{href:q.href,ajaxify:q.ajaxify,rel:q.rel,key:r},q.title));},_toggleFavorite:function(){var q=this.props.navItem;g.inform('LeftNavController/toggleFavorite',q.props.model.id);},_toggleEditMode:function(){g.inform('LeftNavDragController/toggleEditMode',{section:this.props.navSection});}});e.exports=p;},null);
__d("LeftNavItemClassicDraggableContainer.react",["React"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();'use strict';var h=g,i=h.PropTypes,j=g.createClass({displayName:"LeftNavItemClassicDraggableContainer",propTypes:{itemID:i.oneOfType([i.string,i.number]).isRequired,section:i.object.isRequired,sortable:i.bool.isRequired,draggableBound:i.object,ItemDraggableBehavior:i.func},render:function(){return (g.createElement("div",{"data-itemid":this.props.itemID},this.props.children));},componentDidMount:function(){if(this.props.sortable)this.createDraggable(this.props);},componentWillReceiveProps:function(k){var l=k,m=l.sortable;if(m){this.createDraggable(k);}else if(!m&&this.draggable){this.draggable.destroy();this.draggable=null;}},createDraggable:function(k){var l=k,m=l.section,n=l.itemID,o=l.draggableBound,p=l.ItemDraggableBehavior;if(p&&!this.draggable)this.draggable=new p(g.findDOMNode(this),m,n,o);}});e.exports=j;},null);
__d("LeftNavItem.react",["Arbiter","DOMContainer.react","Image.react","LeftNavItemClassicDraggableContainer.react","React","XUISpinner.react","cx","joinClasses","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();'use strict';var p='\u00A0',q='\u00B7',r=k.createClass({displayName:"LeftNavItem",render:function(){var s=this.props,t=s.model,u=s.section,v=t.keys.some(function(z){return z===s.selectedKey;}),w=t.keys.some(function(z){return z===s.loadingKey;}),x=u.props.id==='pinnedNav',y=(("sideNavItem")+(' '+"stat_elem")+(v?' '+"selectedItem":'')+(w?' '+"_5afd":''));return (k.createElement("li",{key:t.id,className:y,"data-sortable":t.sortable,id:"navItem_"+t.id},k.createElement(j,{itemID:t.id,section:u,sortable:x&&s.inEditMode&&t.sortable,draggableBound:this.props.draggableBound,ItemDraggableBehavior:this.props.ItemDraggableBehavior},this._renderBookmarkContent())));},_renderBookmarkContent:function(){var s=this.props.model,t=this.props.section,u=t.props.id==='pinnedNav',v=t.props.id==='bookmarksSeeAllEntSection',w=s.count>0,x=s.auxcontent?k.createElement(h,{key:"auxpopover"},s.auxcontent):null,y=this._renderCounter(s.count,v),z=n('linkWrap',w?'hasCount':'noCount'),aa=(("_5afe")+(u&&s.sortable?' '+"sortableItem":'')),ba=t.props.id==='foldNav'||t.props.id==='aboveFoldNav',ca=this.props.PopupMenu,da=null;if(!ba&&ca)da=k.createElement(ca,{key:"popover",navSection:t,navItem:this,editmenu:s.editmenu,loadPopupModules:this.props.loadPopupModules});var ea=null;if(v&&s.subtitle)ea=k.createElement("div",{className:"_1xmt"},p+p+q+p+p,k.createElement(h,null,s.subtitle));var fa=[x,da,k.createElement("div",{key:"link",className:"clearfix"},k.createElement("a",{"data-testid":'left_nav_item_'+s.link.title,className:aa,"data-gt":s.datagt,title:s.link.title,rel:s.link.rel,href:s.link.href,ajaxify:s.link.ajaxify,draggable:"false",onClick:function(){return g.inform('LeftNavController/setItemCount',{item:s,count:0});}},k.createElement("div",{className:"rfloat"},k.createElement(l,{className:"uiSideNavSpinner",showOnAsync:true}),v?null:y,u&&s.sortable?k.createElement("span",{className:"_upa"}):null),k.createElement("span",{className:"imgWrap"},k.createElement(i,{src:s.image,height:"16",width:"16",draggable:"false",alt:""})),k.createElement("div",{className:z},s.name,v?y:null)),ea)];return fa;},_renderCounter:function(s,t){var u=s>0,v=(("count")+(' '+"_5aff")+(!u?' '+"hidden_elem":'')+(t?' '+"mlm":''));return (k.createElement("span",{className:v},k.createElement("span",{className:"countValue fss"},s<=20?s:'20+')));}});e.exports=r;},null);
__d("LeftNavItemPlaceholder.react",["React","cx"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();'use strict';var i=g.createClass({displayName:"LeftNavItemPlaceholder",render:function(){return (g.createElement("li",{className:"sideNavItem stat_elem"},g.createElement("a",{className:"_5afe clearfix sortableItem"})));}});e.exports=i;},null);
__d("LeftNavSection.react",["Arbiter","Bootloader","InlineBlock.react","LeftNavItem.react","LeftNavItemPlaceholder.react","LeftRight.react","Link.react","React","ReactLayeredComponentMixin","Run","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){b.__markCompiled&&b.__markCompiled();'use strict';var s=null,t=n.createClass({displayName:"LeftNavSection",mixins:[o],getInitialState:function(){return {dragged:false,inEditMode:false,glowingType:null,draggableBound:null,placeholderIdx:-1};},renderLayers:function(){var u=this.props.id==='bookmarksSeeAllEntSection';if(u)return {dragNUX:null};if(!s)p.onLoad(function(){h.loadModules(["LeftNavDragNUX.react"],function(x){if(!s)s=x;setTimeout(this.forceUpdate.bind(this),0);}.bind(this));}.bind(this));var v=this.state.glowingType,w=null;if(v==='add'||v==='sort')if(s)w=n.createElement(s,{contextRef:"sectionBody",nuxType:v,position:"above",alignment:"center"});return {dragNUX:w};},render:function(){var u=this,v=this.props,w=v.selectedKey,x=v.loadingKey,y=v.loadPopupModules,z=v.model,aa=v.ItemDraggableBehavior,ba=v.PopupMenu,ca=z.items,da=this.state,ea=da.inEditMode,fa=da.draggableBound;if(ca.length===0)return null;var ga=1,ha=ca.map(function(na){return (n.createElement(j,{key:na.id,model:na,section:u,selectedKey:w,loadingKey:x,inEditMode:ea,draggableBound:fa,rank:ga++,loadPopupModules:y,ItemDraggableBehavior:aa,PopupMenu:ba}));});if(this.state.placeholderIdx>=0)ha.splice(this.state.placeholderIdx,0,n.createElement(k,{key:"itemplaceholder",ref:"placeholder"}));var ia=this.state.glowingType,ja=(("homeSideNav")+(ia==='add'?' '+"_1492":'')+(ia==='sort'?' '+"_1493":'')+(ia==='remove'?' '+"_1494":'')),ka=(("_bui")+(this._isPinnedSection()?' '+"droppableNav":'')+(!this._isPinnedSection()?' '+"nonDroppableNav":'')+(' '+"_3-8w")+(!ea?' '+"_3-96":'')),la=this._isPinnedSection()?n.createElement("div",{className:"_3hge stat_elem"},n.createElement(m,{className:"navEditDone",onClick:function(){h.loadModules(["LeftNavDragController"],function(){g.inform('LeftNavDragController/toggleEditMode',{section:u});});}},n.createElement("span",{className:"_3hgf"},r._("Done")))):null,ma={nav_items_count:ca.length.toString(),nav_section:this.props.id.toString(),bm_sec:this.props.id.toString()};return (n.createElement("div",{id:this.props.id,className:ja,"data-ft":z.dataft,ref:"sectionBody"},this._renderHeader(),n.createElement("ul",{className:ka,"data-gt":JSON.stringify(ma),"data-ft":z.dataft},ha),la));},_renderHeader:function(){var u=this.props.model,v;if(u.title){var w=u.seeallhref?n.createElement(m,{href:u.seeallhref},n.createElement(l,null,n.createElement("span",{className:"sectionDragHandle"},u.title),u.remainingcount&&!this.state.dragged?n.createElement(i,{className:"_3-91"},n.createElement("div",{className:"_1cwg _5ol3"},u.seealltext)):null)):n.createElement("span",{className:"sectionDragHandle"},u.title);v=n.createElement("h4",{className:"navHeader"},w);}else v=null;return v;},_isPinnedSection:function(){return this.props.id==='pinnedNav';}});e.exports=t;},null);
__d("LeftNavSectionPlaceholder.react",["React","cx"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();'use strict';var i=g.createClass({displayName:"LeftNavSectionPlaceholder",render:function(){var j={height:this.props.height+'px',width:this.props.width+'px'};return (g.createElement("div",{className:"homeSideNav",style:j},g.createElement("ul",{className:"_bui"})));}});e.exports=i;},null);
__d("LeftNavContainer.react",["Bootloader","LeftNavSection.react","LeftNavSectionPlaceholder.react","React","emptyFunction","invariant"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();'use strict';function m(o){o.setState({loadPopupModules:k});g.loadModules(["LeftNavDragController","LeftNavItemDraggableBehavior"],function(p,q){p.subscribe();o.setState({DragController:p,ItemDraggableBehavior:q});});}var n=j.createClass({displayName:"LeftNavContainer",getDefaultProps:function(){return {showSections:true};},getInitialState:function(){return {placeholderIdx:-1,placeholderWidth:0,placeholderHeight:0,loadPopupModules:function(){return m(this);}.bind(this),DragController:null,ItemDraggableBehavior:null};},getDragController:function(){return this.props.DragController||this.state.DragController;},getItemDraggableBehavior:function(){return this.props.ItemDraggableBehavior||this.state.ItemDraggableBehavior;},componentDidMount:function(){var o=this.getDragController();if(o)o.subscribe();},componentWillUnmount:function(){var o=this.getDragController();if(o)o.unsubscribe();},render:function(){var o=this.props.model,p=j.createElement(h,{selectedKey:o.selectedKey,loadingKey:o.loadingKey,model:o.pinnedSection,key:"pinnedNav",id:"pinnedNav",ref:"pinnedNav",loadPopupModules:this.state.loadPopupModules,ItemDraggableBehavior:this.getItemDraggableBehavior(),PopupMenu:this.props.PopupMenu}),q=o.sections,r;if(this.props.showSections)r=q.map(function(s){return j.createElement(h,{selectedKey:o.selectedKey,loadingKey:o.loadingKey,model:s,key:s.id,id:s.id,loadPopupModules:this.state.loadPopupModules,ItemDraggableBehavior:this.getItemDraggableBehavior(),PopupMenu:this.props.PopupMenu});}.bind(this));if(this.state.placeholderIdx>-1)r.splice(this.state.placeholderIdx,0,j.createElement(i,{key:"placeholder",width:this.state.placeholderWidth,height:this.state.placeholderHeight}));return (j.createElement("div",null,p,r));},getPinnedSection:function(){var o=this.refs.pinnedNav;l(o);return o;}});e.exports=n;},null);
__d("LeftNavController",["Arbiter","AsyncRequest","ChannelConstants","LeftNavConfig","ModulePerformanceGating","NavigationMessage","React","Run","SubscriptionsHandler","URI","copyProperties","CSS","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){b.__markCompiled&&b.__markCompiled();'use strict';var t,u,v=null,w,x=null,y,z,aa={init:function(db,eb){w=db;u=eb;var fb=j,gb=fb.Container,hb=fb.DragController,ib=fb.ItemDraggableBehavior;y=new o();y.addSubscriptions(g.subscribe('LeftNavController/toggleFavorite',pa),g.subscribe('LeftNavController/updatePinnedSection',qa),g.subscribe('LeftNavController/setItemCount',function(lb,mb){var nb=mb.item,ob=mb.count;return ea(nb,ob);}),g.subscribe(i.getArbiterType('nav_update_counts'),fa),g.subscribeOnce('AsyncLayout/initialized',function(){return z=true;}),g.subscribe(l.NAVIGATION_ITEM_REMOVED,ga),g.subscribe(l.NAVIGATION_COMPLETED,ma),g.subscribe(l.NAVIGATION_FAILED,na),g.subscribe(l.NAVIGATION_COUNT_UPDATE,oa),g.subscribe(l.NAVIGATION_SELECT,la),g.subscribe('LeftNavController/updateSectionOrder',ra),g.subscribe('LeftNavDragController/toggleEditMode',function(){return r.toggleClass(w,"_2ryg");}));var jb=ya(u.selectedKey);if(jb)jb.count=0;var kb=function(lb){t=m.render(m.createElement(gb,{model:u,DragController:hb,ItemDraggableBehavior:ib,PopupMenu:j.PopupMenu,showSections:lb}),w);};if(k.js_module_defer_left_nav_section_bookmarks){kb(false);n.onAfterLoad(function(){kb(true);});}else kb(true);n.onLeave(this.uninstall.bind(this));},uninstall:function(){z=false;y.release();if(t.componentWillUnmount)t.componentWillUnmount();},initAdditionalItems:function(db){v=db.items;},initPageTransitions:function(db){db.registerHandler(function(eb){return z&&ha(eb);},6);},mountSeeAllPayload:function(db){x=db;}};function ba(){t.forceUpdate();}function ca(db){u.loadingKey=null;u.selectedKey=db||u.defaultKey;ba();}function da(db){u.loadingKey=db;ba();}function ea(db,eb){db.count=eb;ba();}function fa(db,eb){var fb=eb.obj,gb=fb.items;gb.forEach(function(hb){var ib=ya(hb.key);if(ib)ib.count=ib.count+hb.count;});ba();}function ga(db,eb){var fb;function gb(ib,jb){return ib.keys.some(function(kb){return kb===jb;});}for(var hb=0;hb<u.sections.length;hb++){fb=bb(u.sections[hb].items,function(ib){return gb(ib,eb);});if(fb)break;}bb(u.pinnedSection.items,function(ib){return gb(ib,eb);});ba();}function ha(db){var eb=za(db);return eb&&eb.endpoint&&ia(eb,db);}function ia(db,eb){da(db.keys[0]);ea(db,0);ka(db.endpoint,q(ja(db,eb),eb.getQueryData()));return true;}function ja(db,eb){var fb={};fb.sidecol=true;fb.path=eb.getPath();var gb=ab(db.keys);gb=gb.text?gb.text:gb.numeric;fb.sk=gb;fb.key=gb;return fb;}function ka(db,eb){eb.endpoint=db;g.inform(l.NAVIGATION_BEGIN,{useAjaxPipe:true,params:eb});}function la(db,eb){var fb=eb.sk;if(eb.asLoading){da(fb);}else ca(fb);}function ma(db,eb){var fb=u.loadingKey;ca(fb);}function na(db,eb){da(null);}function oa(db,eb){var fb=ya(eb&&eb.key);if(fb)ea(fb,eb.hide?0:fb.count+eb.count);}function pa(db,eb){var fb=va(eb),gb=u.pinnedSection;if(!fb){if(!x)return;fb=x.find(function(kb){return kb.id===eb;});if(!fb)return;fb=q({},fb);fb.pinned=true;gb.items.push(fb);new h().setURI('/ajax/bookmark/add/').setData({id:fb.keys[0]}).send();}else{var hb=ua(fb);if(wa(eb)){fb.pinned=false;var ib=gb.items.findIndex(function(kb){return kb.id===fb.id;});if(ib>=0){gb.items.splice(ib,1);if(hb)hb.items.unshift(fb);new h().setURI('/ajax/bookmark/delete/').setData({id:fb.keys[0]}).send();}}else{fb.pinned=true;var jb=hb.items.findIndex(function(kb){return kb.id===fb.id;});if(hb&&jb>=0){hb.items.splice(jb,1);gb.items.push(fb);new h().setURI('/ajax/bookmark/add/').setData({id:fb.keys[0]}).send();}}}ba();}function qa(db,eb){var fb=eb.idOrder,gb=u.pinnedSection,hb=gb.items.filter(function(jb){return !jb.sortable;});fb.forEach(function(jb){var kb=gb.items.find(function(mb){return mb.id===jb;});if(kb){hb.push(kb);}else if(kb=va(jb)){var lb=ua(kb);bb(lb.items,function(mb){return mb.id===kb.id;});hb.push(kb);kb.pinned=true;}});gb.items=hb;var ib=hb.map(function(jb){return jb.keys[0];});new h().setURI('/ajax/bookmark/edit/').setData({ids:ib}).send();ba();}function ra(db,eb){var fb=eb.idOrder,gb=u.sections;u.sections=fb.reduce(function(hb,ib){var jb=gb.find(function(kb){return kb.id===ib;});if(jb)hb.push(jb);return hb;},[]);new h().setURI('/bookmark/section/edit/').setData({nav_section_names:fb}).send();ba();}function sa(db){var eb=p.getRequestURI();return ((db.getDomain()===eb.getDomain())&&(db.getPath()==='/'||db.getPath()==='/home.php'));}function ta(db){if(db==='pinnedNav'){return u.pinnedSection;}else return (u.sections.filter(function(eb){return eb.id===db;})[0]);}function ua(db){return ta(cb[db.type]);}function va(db){db=db.toString();return xa(function(eb){return eb.id?eb.id.toString()===db:null;});}function wa(db){db=db.toString();var eb=ta('pinnedNav');return eb.items.some(function(fb){return fb.id.toString()===db;});}function xa(db){var eb;for(var fb=0;fb<u.sections.length;fb++){eb=u.sections[fb].items.find(db);if(eb)return eb;}if(v){eb=v.find(db);if(eb)return eb;}return u.pinnedSection.items.find(db)||(u.foldSection&&u.foldSection.items.find(db));}function ya(db){return xa(function(eb){return eb.keys.some(function(fb){return fb===db;});});}function za(db){var eb=db.getQueryData().sk;if(eb){return ya(eb);}else if(sa(db)){return ya(u.defaultKey);}else return xa(function(fb){return fb.path&&fb.path.some(function(gb){if(typeof gb==='object'&&gb.regex)return db.getPath().match(gb.regex);return gb===db.getPath();});});}function ab(db){var eb=/^(app|group|fl)_/,fb={};for(var gb=0;gb<db.length;gb++){var hb=eb.test(db[gb]);if(hb&&!fb.numeric){fb.numeric=db[gb];}else if(!hb&&!fb.text)fb.text=db[gb];if(fb.numeric&&fb.text)break;}return fb;}function bb(db,eb){for(var fb=0;fb<db.length;fb++)if(eb(db[fb])){var gb=db[fb];db.splice(fb,1);return gb;}return (void 0);}var cb={favorites:'pinnedNav',profiles:'pinnedNav',company:'companyNav',apps:'appsNav',groups:'groupsNav',pages:'pagesNav',lists:'listsNav',interests:'interestsNav',connect_apps:'connectNav',type_user:'pinnedNav',type_group:'groupsNav',type_company:'companyNav',type_page:'pagesNav',type_friend_list:'listsNav',type_interest_list:'interestsNav',type_non_canvas_app:'appsNav',type_facebook_app:'appsNav',type_canvas_app_game:'appsNav',type_canvas_app_non_game:'appsNav',type_curated_feed:'interestsNav',type_game_tool:'appsNav',type_page_tool:'pagesNav',type_pinnable_page_tool:'pagesNav',type_developer:'developerNav',type_developer_tool:'developerNav'};e.exports=aa;},null);
__d("XEventImpressionLoggerAsyncController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/events\/{eventid}\/ajax\/impression\/",{eventid:{type:"Int",required:true},acontext:{type:"StringToStringMap",required:true}});},null);
__d("EventImpressionLogger",["Arbiter","AsyncRequest","OnVisible","Scroll","XEventImpressionLoggerAsyncController","copyProperties"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();function m(n,o){"use strict";this.elem=n;this.options=o;this.initListeners();this.listener=new i(this.elem,this.$EventImpressionLogger0.bind(this),true,0);}m.prototype.initListeners=function(){"use strict";var n=this.options;this.$EventImpressionLogger1=!n.start_signal;if(n.start_signal)g.subscribe(n.start_signal,function(o,p){this.$EventImpressionLogger2=p;this.$EventImpressionLogger1=true;if(this.$EventImpressionLogger2){this.$EventImpressionLogger0();}else if(!this.logged){this.listener.reset();this.listener.checkBuffer();}}.bind(this));if(n.stop_signal)g.subscribe(n.stop_signal,function(){this.$EventImpressionLogger2=null;this.$EventImpressionLogger1=false;}.bind(this));if(n.check_signal)g.subscribe(n.check_signal,function(o,p){this.$EventImpressionLogger2=p;if(this.$EventImpressionLogger2){this.$EventImpressionLogger0();}else if(!this.logged){this.listener.reset();this.listener.checkBuffer();}}.bind(this));};m.prototype.$EventImpressionLogger0=function(){"use strict";var n=this.options;if(!this.$EventImpressionLogger1)return;if(this.logged)return;if(!document.documentElement.contains(this.elem))return;if(this.$EventImpressionLogger2&&this.$EventImpressionLogger2.rect){var o=this.elem.getBoundingClientRect(),p=this.$EventImpressionLogger2.rect,q=0;if(j.getTop(this.$EventImpressionLogger2))q=j.getTop(this.$EventImpressionLogger2);if(p.left&&p.left>o.left)return;if(p.right&&p.right<o.right)return;if(p.top&&p.top>o.top-q)return;if(p.bottom&&p.bottom<o.bottom-q)return;}this.logged=true;var r=k.getURIBuilder().setInt('eventid',n.event_id).setStringToStringMap('acontext',n.action_context).getURI();new h(r).send();};l(m,{init:function(n,o){return new m(n,o);}});e.exports=m;},null);