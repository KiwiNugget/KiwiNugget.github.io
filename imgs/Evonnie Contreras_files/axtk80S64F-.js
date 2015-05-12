/*!CK:348554455!*//*1430719801,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["\/Rocc"]); }

__d("CurationCaretNux",["csx","cx","ge","tidyEvent","Arbiter","AsyncRequest","CSS","DataStore","DOM","Event","NavigationMessage","Parent","Rect"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){b.__markCompiled&&b.__markCompiled();var t="div._1zpr",u="_5jmm",v='CurationCaretNux_instance',w='CurationCaretNux_caretMenuLoaded',x=100,y="caret_nux",z="save_option_nux",aa="seen",ba="dismissed",ca="focus",da="click",ea="scroll",fa=false;function ga(ha,ia,ja,ka){"use strict";var la=i(ka);if(la){this.container=la;this.caret=ja;this.caretNux=ha.instance;this.caretNuxData=ha;this.saveOptionNux=ia.instance;this.saveOptionNuxData=ia;this.popoverTriggered=false;var ma=r.byClass(la,u);n.set(ma,v,this);this.$CurationCaretNux0();k.subscribeOnce(q.NAVIGATION_BEGIN,function(){this.caretNux&&this.caretNux.hide();this.saveOptionNux&&this.saveOptionNux.hide();}.bind(this));}}ga.prototype.$CurationCaretNux0=function(){"use strict";var ha=o.scry(this.container,t);if(ha.length>0)j([p.listen(ha[0],'click',function(){if(fa)return;this.caretNux.subscribe('show',function(){this.$CurationCaretNux1();}.bind(this));this.caretNux.subscribe('hide',function(){this.$CurationCaretNux2();if(fa){this.$CurationCaretNux3(y,aa);this.$CurationCaretNux3(y,ba);}}.bind(this));this.$CurationCaretNux4();this.interactionTime=0;setTimeout(function(){if(!this.$CurationCaretNux5()){fa=true;this.caretNux.show();}}.bind(this),this.caretNuxData.min_consume_duration);setTimeout(function(){if(!this.$CurationCaretNux5()){fa=false;this.caretNux.hide();}}.bind(this),this.caretNuxData.max_consume_duration);var ia=Date.now();setTimeout(function(){this.$CurationCaretNux6(function(){if(!this.interactionTime)this.interactionTime=Date.now()-ia;}.bind(this));}.bind(this),0);}.bind(this))]);};ga.prototype.$CurationCaretNux5=function(){"use strict";return this.interactionTime&&this.interactionTime>0;};ga.prototype.$CurationCaretNux1=function(){"use strict";this.caretClickListener=p.listen(this.caret,'click',function(){this.caretNux.hide();if(this.saveOptionNux){this.popoverTriggered=true;this.$CurationCaretNux7();}}.bind(this));var ha=false;this.$CurationCaretNux6(function(ia){if(ha||ia===da||!this.caretNux.isShown())return;var ja=s.getViewportWithoutScrollbarsBounds(),ka=s.getElementBounds(this.caretNux.getContentRoot());ka=ka.sub(0,x);if(ja.contains(ka)){this.$CurationCaretNux3(y,aa);ha=true;}}.bind(this));};ga.prototype.$CurationCaretNux2=function(){"use strict";this.caretClickListener.remove();this.$CurationCaretNux8();};ga.prototype.$CurationCaretNux7=function(){"use strict";if(this.$CurationCaretNux9()&&this.popoverTriggered)setTimeout(function(){var ha=o.scry(document,"li.save_caret_menu_item");for(var ia=0;ia<ha.length;ia++){var ja=ha[ia],ka=r.byClass(ja,"uiLayer");if(ka&&m.shown(ka)){this.saveOptionNux.setContext(ja);break;}}this.saveOptionNux.show();this.$CurationCaretNux3(z,aa);var la=n.get(this.caret,'Popover');la&&la.subscribeOnce('hide',function(){this.saveOptionNux.hide();}.bind(this));}.bind(this),0);};ga.prototype.$CurationCaretNux3=function(ha,ia){"use strict";var ja;if(ha===y){ja=this.caretNuxData;}else if(ha===z){ja=this.saveOptionNuxData;}else throw "Invalid nux type";var ka;if(ia===aa){ka=ja.seen_uri;ja.seen_uri=null;}else if(ia===ba){ka=ja.dismiss_uri;ja.dismiss_uri=null;}else throw "Invalid impression type";if(ka){var la=new l(ka);if(this.interactionTime&&ha===y)la.setData({interaction_time:this.interactionTime});la.send();}};ga.prototype.$CurationCaretNux6=function(ha){"use strict";this.$CurationCaretNuxa.push(ha);};ga.prototype.$CurationCaretNuxb=function(ha){"use strict";this.$CurationCaretNuxa.forEach(function(ia){ia.call(this,ha);},this);};ga.prototype.$CurationCaretNux4=function(){"use strict";if(!this.$CurationCaretNuxc){this.$CurationCaretNuxa=[];this.$CurationCaretNuxc=[p.listen(window,'click',this.$CurationCaretNuxb.bind(this,da)),p.listen(window,'focus',this.$CurationCaretNuxb.bind(this,ca)),p.listen(window,'scroll',this.$CurationCaretNuxb.bind(this,ea))];}};ga.prototype.$CurationCaretNux8=function(ha){"use strict";if(this.$CurationCaretNuxc){while(this.$CurationCaretNuxc.length)this.$CurationCaretNuxc.pop().remove();this.$CurationCaretNuxc=null;this.$CurationCaretNuxa=null;}};ga.prototype.$CurationCaretNux9=function(){"use strict";var ha=r.byClass(this.container,u);return n.get(ha,w)===true;};ga.saveOptionLoaded=function(ha){"use strict";var ia=i(ha);if(ia){var ja=r.byClass(ia,u);n.set(ja,w,true);var ka=n.get(ja,v);ka&&ka.$CurationCaretNux7();}};e.exports=ga;},null);
__d("XGiveThanksFriendSelectAsyncController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/thanks\/select\/",{});},null);