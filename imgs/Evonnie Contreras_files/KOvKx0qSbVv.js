/*!CK:3620971749!*//*1430719801,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["A6nUv"]); }

__d("SaveCaretMenuItem",["Banzai","CSS","DOM","EntstreamFeedObject","EntstreamFeedObjectFollowup","Event","MenuItem","SaveState","SaveStateHandler","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();var r='saved_for_later:caret_action',s='click',t='imp';for(var u in m)if(m.hasOwnProperty(u))w[u]=m[u];var v=m===null?null:m.prototype;w.prototype=Object.create(v);w.prototype.constructor=w;w.__superConstructor__=m;function w(x){"use strict";m.call(this,x);this._updateData();this.getRoot();l.listen(this._anchor,'error',this.handleError.bind(this));o.listen(x.ogobjectids,function(y){this._updateData();this._doRender(y);}.bind(this));}w.prototype.handleClick=function(){"use strict";var x=v.handleClick.call(this),y=this._data.logdata;g.post(r,{action:s,collection_id:y.collection_id,surface:y.surface,story_id:y.story_id,is_save:this._data.isSaveAction,is_multi:y.is_multi});var z=j.getRoot(q(this._data.storydomid));if(this._data.isSaveAction){o.saving(this._data.ogobjectids);z&&k.addFollowup(z,this._data.savefollowupmarkup,"_521o");}else{o.unsaving(this._data.ogobjectids);var aa=k.getFollowup(z);aa&&k.removeFollowup(z);}return x;};w.prototype.handleError=function(){"use strict";if(this._data.isSaveAction){o.saved(this._data.ogobjectids);}else o.unsaved(this._data.ogobjectids);};w.prototype._updateData=function(){"use strict";this._data.isSaveAction=o.isSaveAction(this._data.ogobjectids);if(this._data.isSaveAction){this._data.markup=this._data.savemarkup;this._data.ajaxify=this._data.saveajaxify;this._data.title=this._data.savetitle;}else{this._data.markup=this._data.unsavemarkup;this._data.ajaxify=this._data.unsaveajaxify;this._data.title=this._data.unsavetitle;}};w.prototype._doRender=function(x){"use strict";if(!this._root)return;switch(x){case n.SAVING:case n.UNSAVING:h.addClass(this._root,"_5arm");setTimeout(this.disable.bind(this),10);break;case n.SAVED:case n.UNSAVED:h.removeClass(this._root,"_5arm");setTimeout(this.enable.bind(this),10);break;}i.replace(this._anchor,this._renderItemContent());l.listen(this._anchor,'error',this.handleError.bind(this));};w.prototype.onShow=function(){"use strict";var x=this._data.logdata;g.post(r,{action:t,collection_id:x.collection_id,surface:x.surface,story_id:x.story_id,is_save:this._data.isSaveAction,is_multi:x.is_multi});};e.exports=w;},null);
__d("XPartnersReviewChangeJobStatusAsyncController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/review\/ajax\/change_job_status\/",{});},null);