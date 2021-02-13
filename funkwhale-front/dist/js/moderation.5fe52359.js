(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["moderation"],{"0580":function(t,e){var a=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],r=a.join(","),n="undefined"===typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function o(t,e){e=e||{};var a,o,s,c=[],u=[],l=t.querySelectorAll(r);for(e.includeContainer&&n.call(t,r)&&(l=Array.prototype.slice.apply(l),l.unshift(t)),a=0;a<l.length;a++)o=l[a],i(o)&&(s=d(o),0===s?c.push(o):u.push({documentOrder:a,tabIndex:s,node:o}));var f=u.sort(p).map((function(t){return t.node})).concat(c);return f}function i(t){return!(!c(t)||b(t)||d(t)<0)}function s(t){if(!t)throw new Error("No node provided");return!1!==n.call(t,r)&&i(t)}function c(t){return!(t.disabled||h(t)||w(t))}o.isTabbable=s,o.isFocusable=l;var u=a.concat("iframe").join(",");function l(t){if(!t)throw new Error("No node provided");return!1!==n.call(t,u)&&c(t)}function d(t){var e=parseInt(t.getAttribute("tabindex"),10);return isNaN(e)?f(t)?0:t.tabIndex:e}function p(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex}function f(t){return"true"===t.contentEditable}function m(t){return"INPUT"===t.tagName}function h(t){return m(t)&&"hidden"===t.type}function v(t){return m(t)&&"radio"===t.type}function b(t){return v(t)&&!y(t)}function g(t){for(var e=0;e<t.length;e++)if(t[e].checked)return t[e]}function y(t){if(!t.name)return!0;var e=t.ownerDocument.querySelectorAll('input[type="radio"][name="'+t.name+'"]'),a=g(e);return!a||a===t}function w(t){return null===t.offsetParent||"hidden"===getComputedStyle(t).visibility}t.exports=o},"343e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{show:t.$store.state.moderation.showReportModal},on:{"update:show":t.update}},[t.target?a("h2",{staticClass:"ui header"},[a("translate",{attrs:{"translate-context":"Popup/Moderation/Title/Verb"}},[t._v("Do you want to report this object?")]),a("div",{staticClass:"ui sub header"},[t._v(" "+t._s(t.target.typeLabel)+" - "+t._s(t.target.label)+" ")])],1):t._e(),a("div",{staticClass:"scrolling content"},[a("div",{staticClass:"description"},[t.errors.length>0?a("div",{staticClass:"ui negative message",attrs:{role:"alert"}},[a("h4",{staticClass:"header"},[a("translate",{attrs:{"translate-context":"Popup/Moderation/Error message"}},[t._v("Error while submitting report")])],1),a("ul",{staticClass:"list"},t._l(t.errors,(function(e){return a("li",[t._v(t._s(e))])})),0)]):t._e()]),a("p",[a("translate",{attrs:{"translate-context":"*/Moderation/Popup,Paragraph"}},[t._v("Use this form to submit a report to our moderation team.")])],1),t.canSubmit?a("form",{staticClass:"ui form",attrs:{id:"report-form"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("div",{staticClass:"fields"},[a("report-category-dropdown",{staticClass:"ui required eight wide field",attrs:{required:!0,empty:!0,"restrict-to":t.allowedCategories,label:!0},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}}),t.$store.state.auth.authenticated?t._e():a("div",{staticClass:"ui eight wide required field"},[a("label",{attrs:{for:"report-submitter-email"}},[a("translate",{attrs:{"translate-context":"Content/*/*/Noun"}},[t._v("Email")])],1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.submitterEmail,expression:"submitterEmail"}],attrs:{type:"email",name:"report-submitter-email",id:"report-submitter-email",required:""},domProps:{value:t.submitterEmail},on:{input:function(e){e.target.composing||(t.submitterEmail=e.target.value)}}}),a("p",[a("translate",{attrs:{"translate-context":"*/*/Field,Help"}},[t._v("We'll use this email if we need to contact you regarding this report.")])],1)])],1),a("div",{staticClass:"ui field"},[a("label",{attrs:{for:"report-summary"}},[a("translate",{attrs:{"translate-context":"*/*/Field.Label/Noun"}},[t._v("Message")])],1),a("p",[a("translate",{attrs:{"translate-context":"*/*/Field,Help"}},[t._v("Use this field to provide additional context to the moderator that will handle your report.")])],1),a("content-form",{attrs:{"field-id":"report-summary",rows:8},model:{value:t.summary,callback:function(e){t.summary=e},expression:"summary"}})],1),t.isLocal?t._e():a("div",{staticClass:"ui field"},[a("div",{staticClass:"ui checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.forward,expression:"forward"}],attrs:{id:"report-forward",type:"checkbox"},domProps:{checked:Array.isArray(t.forward)?t._i(t.forward,null)>-1:t.forward},on:{change:function(e){var a=t.forward,r=e.target,n=!!r.checked;if(Array.isArray(a)){var o=null,i=t._i(a,o);r.checked?i<0&&(t.forward=a.concat([o])):i>-1&&(t.forward=a.slice(0,i).concat(a.slice(i+1)))}else t.forward=n}}}),a("label",{attrs:{for:"report-forward"}},[a("strong",[a("translate",{attrs:{"translate-params":{domain:t.targetDomain},"translate-context":"*/*/Field.Label/Verb"}},[t._v("Forward to %{ domain} ")])],1),a("p",[a("translate",{attrs:{"translate-context":"*/*/Field,Help"}},[t._v("Forward an anonymized copy of your report to the server hosting this element.")])],1)])])]),a("div",{staticClass:"ui hidden divider"})]):t.isLoadingReportTypes?a("div",{staticClass:"ui inline active loader"}):a("div",{staticClass:"ui warning message",attrs:{role:"alert"}},[a("h4",{staticClass:"header"},[a("translate",{attrs:{"translate-context":"Popup/Moderation/Error message"}},[t._v("Anonymous reports are disabled, please sign-in to submit a report.")])],1)])]),a("div",{staticClass:"actions"},[a("button",{staticClass:"ui basic cancel button"},[a("translate",{attrs:{"translate-context":"*/*/Button.Label/Verb"}},[t._v("Cancel")])],1),t.canSubmit?a("button",{class:["ui","success",{loading:t.isLoading},"button"],attrs:{type:"submit",form:"report-form"}},[a("translate",{attrs:{"translate-context":"Popup/*/Button.Label"}},[t._v("Submit report")])],1):t._e()])])},n=[],o=(a("4de4"),a("d81d"),a("d3b7"),a("5530")),i=(a("ceb5"),a("bc3a")),s=a.n(i),c=a("2f62");a("3677");function u(t){var e=document.createElement("a");return e.href=t,e.hostname}var l={components:{ReportCategoryDropdown:function(){return a.e("reports").then(a.bind(null,"3b1b8"))},Modal:function(){return Promise.resolve().then(a.bind(null,"404d"))}},data:function(){return{formKey:String(new Date),errors:[],isLoading:!1,isLoadingReportTypes:!1,summary:"",submitterEmail:"",category:null,reportTypes:[],forward:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(c["d"])({target:function(t){return t.moderation.reportModalTarget}})),{},{allowedCategories:function(){return this.$store.state.auth.authenticated?[]:this.reportTypes.filter((function(t){return!0===t.anonymous})).map((function(t){return t.type}))},canSubmit:function(){return!!this.$store.state.auth.authenticated||this.allowedCategories.length>0},targetDomain:function(){if(this.target._obj){var t=this.target._obj.fid;return"channel"===this.target.type&&this.target._obj.actor&&(t=this.target._obj.actor.fid),t?u(t):this.$store.getters["instance/domain"]}},isLocal:function(){return this.$store.getters["instance/domain"]===this.targetDomain}}),methods:{update:function(t){this.$store.commit("moderation/showReportModal",t),this.errors=[]},submit:function(){var t=this,e=this;e.isLoading=!0;var a={target:Object(o["a"])(Object(o["a"])({},this.target),{},{_obj:null}),summary:this.summary,type:this.category,forward:this.forward};return this.$store.state.auth.authenticated||(a.submitter_email=this.submitterEmail),s.a.post("moderation/reports/",a).then((function(a){e.update(!1),e.isLoading=!1;var r=t.$pgettext("*/Moderation/Message","Report successfully submitted, thank you");e.$store.commit("moderation/contentFilter",a.data),e.$store.commit("ui/addMessage",{content:r,date:new Date}),e.summary="",e.category=""}),(function(t){e.errors=t.backendErrors,e.isLoading=!1}))}},watch:{"$store.state.moderation.showReportModal":function(t){if(t&&!this.$store.state.auth.authenticated){var e=this;e.isLoadingReportTypes=!0,s.a.get("instance/nodeinfo/2.0/").then((function(t){e.isLoadingReportTypes=!1,e.reportTypes=t.data.metadata.reportTypes||[]}),(function(t){e.isLoadingReportTypes=!1}))}}}},d=l,p=a("2877"),f=Object(p["a"])(d,r,n,!1,null,null,null);e["default"]=f.exports},"404d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["ui",{active:t.show},{"overlay fullscreen":t.fullscreen&&["phone","tablet"].indexOf(t.$store.getters["ui/windowSize"])>-1},"modal"]},[a("i",{staticClass:"close inside icon"}),t.show?t._t("default"):t._e()],2)},n=[],o=a("1157"),i=a.n(o),s=a("6c92"),c=a.n(s),u={props:{show:{type:Boolean,required:!0},fullscreen:{type:Boolean,default:!0}},data:function(){return{control:null,focusTrap:null}},mounted:function(){this.focusTrap=c()(this.$el)},beforeDestroy:function(){this.control&&i()(this.$el).modal("hide"),i()(this.$el).remove()},methods:{initModal:function(){this.control=i()(this.$el).modal({duration:100,onApprove:function(){this.$emit("approved")}.bind(this),onDeny:function(){this.$emit("deny")}.bind(this),onHidden:function(){this.$emit("update:show",!1)}.bind(this),onVisible:function(){this.focusTrap.activate(),this.focusTrap.unpause()}.bind(this)})}},watch:{show:{handler:function(t){t?(this.initModal(),this.$emit("show"),this.control.modal("show"),this.focusTrap.activate(),this.focusTrap.unpause()):this.control&&(this.$emit("hide"),this.control.modal("hide"),this.control.remove(),this.focusTrap.deactivate(),this.focusTrap.pause())}}}},l=u,d=a("2877"),p=Object(d["a"])(l,r,n,!1,null,null,null);e["default"]=p.exports},"53a8":function(t,e){t.exports=r;var a=Object.prototype.hasOwnProperty;function r(){for(var t={},e=0;e<arguments.length;e++){var r=arguments[e];for(var n in r)a.call(r,n)&&(t[n]=r[n])}return t}},"6c92":function(t,e,a){var r,n=a("0580"),o=a("53a8"),i=function(){var t=[];return{activateTrap:function(e){if(t.length>0){var a=t[t.length-1];a!==e&&a.pause()}var r=t.indexOf(e);-1===r||t.splice(r,1),t.push(e)},deactivateTrap:function(e){var a=t.indexOf(e);-1!==a&&t.splice(a,1),t.length>0&&t[t.length-1].unpause()}}}();function s(t,e){var a=document,s="string"===typeof t?a.querySelector(t):t,p=o({returnFocusOnDeactivate:!0,escapeDeactivates:!0},e),f={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},m={activate:h,deactivate:v,pause:b,unpause:g};return m;function h(t){if(!f.active){$(),f.active=!0,f.paused=!1,f.nodeFocusedBeforeActivation=a.activeElement;var e=t&&t.onActivate?t.onActivate:p.onActivate;return e&&e(),y(),m}}function v(t){if(f.active){clearTimeout(r),w(),f.active=!1,f.paused=!1,i.deactivateTrap(m);var e=t&&void 0!==t.onDeactivate?t.onDeactivate:p.onDeactivate;e&&e();var a=t&&void 0!==t.returnFocus?t.returnFocus:p.returnFocusOnDeactivate;return a&&d((function(){D(C(f.nodeFocusedBeforeActivation))})),m}}function b(){!f.paused&&f.active&&(f.paused=!0,w())}function g(){f.paused&&f.active&&(f.paused=!1,$(),y())}function y(){if(f.active)return i.activateTrap(m),r=d((function(){D(x())})),a.addEventListener("focusin",T,!0),a.addEventListener("mousedown",E,{capture:!0,passive:!1}),a.addEventListener("touchstart",E,{capture:!0,passive:!1}),a.addEventListener("click",M,{capture:!0,passive:!1}),a.addEventListener("keydown",L,{capture:!0,passive:!1}),m}function w(){if(f.active)return a.removeEventListener("focusin",T,!0),a.removeEventListener("mousedown",E,!0),a.removeEventListener("touchstart",E,!0),a.removeEventListener("click",M,!0),a.removeEventListener("keydown",L,!0),m}function _(t){var e=p[t],r=e;if(!e)return null;if("string"===typeof e&&(r=a.querySelector(e),!r))throw new Error("`"+t+"` refers to no known node");if("function"===typeof e&&(r=e(),!r))throw new Error("`"+t+"` did not return a node");return r}function x(){var t;if(t=null!==_("initialFocus")?_("initialFocus"):s.contains(a.activeElement)?a.activeElement:f.firstTabbableNode||_("fallbackFocus"),!t)throw new Error("Your focus-trap needs to have at least one focusable element");return t}function C(t){var e=_("setReturnFocus");return e||t}function E(t){s.contains(t.target)||(p.clickOutsideDeactivates?v({returnFocus:!n.isFocusable(t.target)}):p.allowOutsideClick&&p.allowOutsideClick(t)||t.preventDefault())}function T(t){s.contains(t.target)||t.target instanceof Document||(t.stopImmediatePropagation(),D(f.mostRecentlyFocusedNode||x()))}function L(t){if(!1!==p.escapeDeactivates&&u(t))return t.preventDefault(),void v();l(t)&&k(t)}function k(t){return $(),t.shiftKey&&t.target===f.firstTabbableNode?(t.preventDefault(),void D(f.lastTabbableNode)):t.shiftKey||t.target!==f.lastTabbableNode?void 0:(t.preventDefault(),void D(f.firstTabbableNode))}function M(t){p.clickOutsideDeactivates||s.contains(t.target)||p.allowOutsideClick&&p.allowOutsideClick(t)||(t.preventDefault(),t.stopImmediatePropagation())}function $(){var t=n(s);f.firstTabbableNode=t[0]||x(),f.lastTabbableNode=t[t.length-1]||x()}function D(t){t!==a.activeElement&&(t&&t.focus?(t.focus(),f.mostRecentlyFocusedNode=t,c(t)&&t.select()):D(x()))}}function c(t){return t.tagName&&"input"===t.tagName.toLowerCase()&&"function"===typeof t.select}function u(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}function l(t){return"Tab"===t.key||9===t.keyCode}function d(t){return setTimeout(t,0)}t.exports=s},b3d6:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("modal",{attrs:{show:t.$store.state.moderation.showFilterModal},on:{"update:show":t.update}},[a("h4",{staticClass:"header"},["artist"===t.type?a("translate",{key:"1",attrs:{"translate-context":"Popup/Moderation/Title/Verb","translate-params":{name:t.target.name}}},[t._v('Do you want to hide content from artist "%{ name }"?')]):t._e()],1),a("div",{staticClass:"scrolling content"},[a("div",{staticClass:"description"},[t.errors.length>0?a("div",{staticClass:"ui negative message",attrs:{role:"alert"}},[a("h4",{staticClass:"header"},[a("translate",{attrs:{"translate-context":"Popup/Moderation/Error message"}},[t._v("Error while creating filter")])],1),a("ul",{staticClass:"list"},t._l(t.errors,(function(e){return a("li",[t._v(t._s(e))])})),0)]):t._e(),"artist"===t.type?[a("p",[a("translate",{attrs:{"translate-context":"Popup/Moderation/Paragraph"}},[t._v(" You will not see tracks, albums and user activity linked to this artist any more: ")])],1),a("ul",[a("li",[a("translate",{attrs:{"translate-context":"Popup/Moderation/List item"}},[t._v("In other users favorites and listening history")])],1),a("li",[a("translate",{attrs:{"translate-context":"Popup/Moderation/List item"}},[t._v('In "Recently added" widget')])],1),a("li",[a("translate",{attrs:{"translate-context":"Popup/Moderation/List item"}},[t._v("In artists and album listings")])],1),a("li",[a("translate",{attrs:{"translate-context":"Popup/Moderation/List item"}},[t._v("In radio suggestions")])],1)]),a("p",[a("translate",{attrs:{"translate-context":"Popup/Moderation/Paragraph"}},[t._v(" You can manage and update your filters any time from your account settings. ")])],1)]:t._e()],2)]),a("div",{staticClass:"actions"},[a("button",{staticClass:"ui basic cancel button"},[a("translate",{attrs:{"translate-context":"*/*/Button.Label/Verb"}},[t._v("Cancel")])],1),a("button",{class:["ui","success",{loading:t.isLoading},"button"],on:{click:t.hide}},[a("translate",{attrs:{"translate-context":"Popup/*/Button.Label"}},[t._v("Hide content")])],1)])])},n=[],o=(a("99af"),a("5530")),i=(a("ceb5"),a("bc3a")),s=a.n(i),c=a("2f62"),u=a("3677"),l=a("404d"),d={components:{Modal:l["default"]},data:function(){return{formKey:String(new Date),errors:[],isLoading:!1}},computed:Object(o["a"])({},Object(c["d"])({type:function(t){return t.moderation.filterModalTarget.type},target:function(t){return t.moderation.filterModalTarget.target}})),methods:{update:function(t){this.$store.commit("moderation/showFilterModal",t),this.errors=[]},hide:function(){var t=this,e=this;e.isLoading=!0;var a={target:{type:this.type,id:this.target.id}};return s.a.post("moderation/content-filters/",a).then((function(a){u["a"].default.info("Successfully added track to playlist"),e.update(!1),e.$store.commit("moderation/lastUpdate",new Date),e.isLoading=!1;var r=t.$pgettext("*/Moderation/Message","Content filter successfully added");e.$store.commit("moderation/contentFilter",a.data),e.$store.commit("ui/addMessage",{content:r,date:new Date})}),(function(t){u["a"].default.error("Error while hiding ".concat(e.type," ").concat(e.target.id)),e.errors=t.backendErrors,e.isLoading=!1}))}}},p=d,f=a("2877"),m=Object(f["a"])(p,r,n,!1,null,null,null);e["default"]=m.exports}}]);