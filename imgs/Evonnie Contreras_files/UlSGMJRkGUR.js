/*!CK:104064983!*//*1425869132,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["CWXZo"]); }

__d("SemiInlineSuggestion",["$","Arbiter","csx","CSS","DOM","Event","HighConfidenceSuggestionLogger","SuggestionLoggingUserActions"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();function o(p){"use strict";this.$SemiInlineSuggestion0=p;this.$SemiInlineSuggestion1=null;this.$SemiInlineSuggestion2=null;this.$SemiInlineSuggestion3=true;this.$SemiInlineSuggestion4=false;this.$SemiInlineSuggestion5();}o.prototype.$SemiInlineSuggestion5=function(){"use strict";h.subscribe('semiinline/DOMReady',function(){return this.$SemiInlineSuggestion6();}.bind(this));h.subscribe('topictargeting/link_scraped',function(){return this.$SemiInlineSuggestion7();}.bind(this));h.subscribe('showOGTagger',function(){return this.$SemiInlineSuggestion8();}.bind(this));};o.prototype.$SemiInlineSuggestion6=function(){"use strict";if(!this.$SemiInlineSuggestion1)return;this.$SemiInlineSuggestion9=g('bootloadSemiinlineRoot');j.show(this.$SemiInlineSuggestion9);m.log(n.IMPRESSION,this.$SemiInlineSuggestiona,this.$SemiInlineSuggestion1,this.$SemiInlineSuggestion0);this.$SemiInlineSuggestionb(this.$SemiInlineSuggestion9);this.$SemiInlineSuggestion4=true;};o.prototype.$SemiInlineSuggestion7=function(){"use strict";if(this.$SemiInlineSuggestion4){this.$SemiInlineSuggestionc();}else h.subscribe('semiinline/DOMReady',function(){return this.$SemiInlineSuggestionc();}.bind(this));};o.prototype.$SemiInlineSuggestionc=function(){"use strict";this.$SemiInlineSuggestiond=g('linkscrapeSemiinlineRoot');var p=k.scry(this.$SemiInlineSuggestiond,'#linkscrapeSuggestionPlaceholder'),q=k.scry(g('bootloadSemiinlineRoot'),'#semiinline_suggestion_placeholder');if(p&&p.length>0&&q&&q.length>0)k.replace(p[0],q[0].cloneNode(true));j.show(this.$SemiInlineSuggestiond);this.$SemiInlineSuggestionb(this.$SemiInlineSuggestiond);};o.prototype.$SemiInlineSuggestionb=function(p){"use strict";var q=k.scry(p,"._1ljz")[0],r=k.scry(p,"._1lj-")[0];if(q)l.listen(q,'click',function(){m.log(n.XOUT,this.$SemiInlineSuggestiona,this.$SemiInlineSuggestion1,this.$SemiInlineSuggestion0);this.$SemiInlineSuggestion8();}.bind(this));if(r)l.listen(r,'click',function(){this.$SemiInlineSuggestione();m.log(n.ADD,this.$SemiInlineSuggestiona,this.$SemiInlineSuggestion1,this.$SemiInlineSuggestion0);}.bind(this));};o.prototype.update=function(p,q){"use strict";if(q&&q[0]){this.$SemiInlineSuggestion1=q[0];this.$SemiInlineSuggestion2=p;}else{this.$SemiInlineSuggestion1=null;this.$SemiInlineSuggestion8();this.$SemiInlineSuggestion2=null;}};o.prototype.isShown=function(){"use strict";return !!this.$SemiInlineSuggestion1;};o.prototype.isActive=function(){"use strict";return this.$SemiInlineSuggestion3;};o.prototype.$SemiInlineSuggestion8=function(){"use strict";if(this.$SemiInlineSuggestion1){this.$SemiInlineSuggestion1=null;if(this.$SemiInlineSuggestiond)j.hide(this.$SemiInlineSuggestiond);if(this.$SemiInlineSuggestion9)j.hide(this.$SemiInlineSuggestion9);this.$SemiInlineSuggestion3=false;}};o.prototype.$SemiInlineSuggestione=function(){"use strict";if(this.$SemiInlineSuggestion1){var p={};p.type='page';p.uid=this.$SemiInlineSuggestion1.blob.objectid;p.at_id=this.$SemiInlineSuggestion1.blob.actiontypeid;p.suggestion_mechanism=this.$SemiInlineSuggestion1.mechanism;p.text=this.$SemiInlineSuggestion2;var q={};q.config=this.$SemiInlineSuggestiona;q.suggestion=this.$SemiInlineSuggestion1;q.csid=this.$SemiInlineSuggestion0;p.suggestion_config=q;h.inform('structuredSuggestion/add',p);if(this.$SemiInlineSuggestiond)j.hide(this.$SemiInlineSuggestiond);if(this.$SemiInlineSuggestion9)j.hide(this.$SemiInlineSuggestion9);}};o.prototype.setConfigNameForLogging=function(p){"use strict";this.$SemiInlineSuggestiona=p;};o.prototype.getDisplayingSuggestion=function(){"use strict";return this.$SemiInlineSuggestion1;};e.exports=o;},null);