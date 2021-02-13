(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["favorites"],{1799:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.maxPage>1?n("div",{staticClass:"ui pagination menu component-pagination",attrs:{role:"navigation","aria-label":t.labels.pagination}},[n("a",{class:[{disabled:t.current-1<1},"item"],attrs:{href:"",disabled:t.current-1<1,role:"button","aria-label":t.labels.previousPage},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.selectPage(t.current-1)}}},[n("i",{staticClass:"angle left icon"})]),t.compact?t._e():t._l(t.pages,(function(e){return"skip"!==e?n("a",{class:[{active:e===t.current},"item"],attrs:{href:""},on:{click:function(n){return n.preventDefault(),n.stopPropagation(),t.selectPage(e)}}},[t._v(" "+t._s(e)+" ")]):n("div",{staticClass:"disabled item"},[t._v(" … ")])})),n("a",{class:[{disabled:t.current+1>t.maxPage},"item"],attrs:{href:"",disabled:t.current+1>t.maxPage,role:"button","aria-label":t.labels.nextPage},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.selectPage(t.current+1)}}},[n("i",{staticClass:"angle right icon"})])],2):t._e()},a=[],r=(n("99af"),n("4160"),n("fb6a"),n("a9e3"),n("159b"),n("ceb5")),s={props:{current:{type:Number,default:1},paginateBy:{type:Number,default:25},total:{type:Number},compact:{type:Boolean,default:!1}},computed:{labels:function(){return{pagination:this.$pgettext("Content/*/Hidden text/Noun","Pagination"),previousPage:this.$pgettext("Content/*/Link","Previous Page"),nextPage:this.$pgettext("Content/*/Link","Next Page")}},pages:function(){var t=2,e=this.current,n=r["a"].range(1,Math.min(this.maxPage,1+t)),i=r["a"].range(Math.max(1,e-t+1),Math.min(this.maxPage,e+t)),a=r["a"].range(this.maxPage,Math.max(1,this.maxPage-t)),s=n.concat(i,a);s=r["a"].uniq(s),s=r["a"].sortBy(s,[function(t){return t}]);var o=[];return s.forEach((function(t){var e=o.slice(-1)[0],n=!0;n="skip"!==e&&(!e||e+1===t),n?o.push(t):"skip"!==t&&(o.push("skip"),o.push(t))})),o},maxPage:function(){return Math.ceil(this.total/this.paginateBy)}},methods:{selectPage:function(t){t>this.maxPage||t<1||this.current!==t&&this.$emit("page-changed",t)}}},o=s,l=n("2877"),c=Object(l["a"])(o,i,a,!1,null,null,null);e["a"]=c.exports},"20be":function(t,e,n){"use strict";n("a15b"),n("fb6a"),n("b0c0"),n("ac1f"),n("1276");var i,a,r={props:{defaultOrdering:{type:String,required:!1},orderingConfigName:{type:String,required:!1}},computed:{orderingConfig:function(){return this.$store.state.ui.routePreferences[this.orderingConfigName||this.$route.name]},paginateBy:{set:function(t){this.$store.commit("ui/paginateBy",{route:this.$route.name,value:t})},get:function(){return this.orderingConfig.paginateBy}},ordering:{set:function(t){this.$store.commit("ui/ordering",{route:this.$route.name,value:t})},get:function(){return this.orderingConfig.ordering}},orderingDirection:{set:function(t){this.$store.commit("ui/orderingDirection",{route:this.$route.name,value:t})},get:function(){return this.orderingConfig.orderingDirection}}},methods:{getOrderingFromString:function(t){var e=t.split("-");return e.length>1?{direction:"-",field:e.slice(1).join("-")}:{direction:"+",field:t}},getOrderingAsString:function(){var t=this.orderingDirection;return"+"===t&&(t=""),[t,this.ordering].join("")}}},s=r,o=n("2877"),l=Object(o["a"])(s,i,a,!1,null,null,null);e["a"]=l.exports},"38b2":function(t,e,n){"use strict";var i,a,r={props:{defaultPage:{required:!1,default:1},defaultPaginateBy:{required:!1}}},s=r,o=n("2877"),l=Object(o["a"])(s,i,a,!1,null,null,null);e["a"]=l.exports},"4a71":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{directives:[{name:"title",rawName:"v-title",value:t.labels.title,expression:"labels.title"}],staticClass:"main pusher"},[n("section",{staticClass:"ui vertical center aligned stripe segment"},[n("div",{class:["ui",{active:t.isLoading},"inverted","dimmer"]},[n("div",{staticClass:"ui text loader"},[n("translate",{attrs:{"translate-context":"Content/Favorites/Message"}},[t._v("Loading your favorites…")])],1)]),t.results?n("h2",{staticClass:"ui center aligned icon header"},[n("i",{staticClass:"circular inverted heart pink icon"}),n("translate",{attrs:{"translate-plural":"%{ count } favorites","translate-n":t.$store.state.favorites.count,"translate-params":{count:t.results.count},"translate-context":"Content/Favorites/Title"}},[t._v(" %{ count } favorite ")])],1):t._e(),t.hasFavorites?n("radio-button",{attrs:{type:"favorites"}}):t._e()],1),t.hasFavorites?n("section",{staticClass:"ui vertical stripe segment"},[n("div",{class:["ui",{loading:t.isLoading},"form"]},[n("div",{staticClass:"fields"},[n("div",{staticClass:"field"},[n("label",{attrs:{for:"favorites-ordering"}},[n("translate",{attrs:{"translate-context":"Content/Search/Dropdown.Label/Noun"}},[t._v("Ordering")])],1),n("select",{directives:[{name:"model",rawName:"v-model",value:t.ordering,expression:"ordering"}],staticClass:"ui dropdown",attrs:{id:"favorites-ordering"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.ordering=e.target.multiple?n:n[0]}}},t._l(t.orderingOptions,(function(e){return n("option",{domProps:{value:e[0]}},[t._v(" "+t._s(t.sharedLabels.filters[e[1]])+" ")])})),0)]),n("div",{staticClass:"field"},[n("label",{attrs:{for:"favorites-ordering-direction"}},[n("translate",{attrs:{"translate-context":"Content/Search/Dropdown.Label/Noun"}},[t._v("Order")])],1),n("select",{directives:[{name:"model",rawName:"v-model",value:t.orderingDirection,expression:"orderingDirection"}],staticClass:"ui dropdown",attrs:{id:"favorites-ordering-direction"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.orderingDirection=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"+"}},[n("translate",{attrs:{"translate-context":"Content/Search/Dropdown"}},[t._v("Ascending")])],1),n("option",{attrs:{value:"-"}},[n("translate",{attrs:{"translate-context":"Content/Search/Dropdown"}},[t._v("Descending")])],1)])]),n("div",{staticClass:"field"},[n("label",{attrs:{for:"favorites-results"}},[n("translate",{attrs:{"translate-context":"Content/Search/Dropdown.Label/Noun"}},[t._v("Results per page")])],1),n("select",{directives:[{name:"model",rawName:"v-model",value:t.paginateBy,expression:"paginateBy"}],staticClass:"ui dropdown",attrs:{id:"favorites-results"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.paginateBy=e.target.multiple?n:n[0]}}},[n("option",{domProps:{value:parseInt(12)}},[t._v("12")]),n("option",{domProps:{value:parseInt(25)}},[t._v("25")]),n("option",{domProps:{value:parseInt(50)}},[t._v("50")])])])])]),t.results?n("track-table",{attrs:{tracks:t.results.results}}):t._e(),n("div",{staticClass:"ui center aligned basic segment"},[t.results&&t.results.count>t.paginateBy?n("pagination",{attrs:{current:t.page,"paginate-by":t.paginateBy,total:t.results.count},on:{"page-changed":t.selectPage}}):t._e()],1)],1):n("div",{staticClass:"ui placeholder segment"},[n("div",{staticClass:"ui icon header"},[n("i",{staticClass:"broken heart icon"}),n("translate",{attrs:{"translate-context":"Content/Home/Placeholder"}},[t._v("No tracks have been added to your favorites yet")])],1),n("router-link",{staticClass:"ui success labeled icon button",attrs:{to:"/library"}},[n("i",{staticClass:"headphones icon"}),n("translate",{attrs:{"translate-context":"Content/*/Verb"}},[t._v("Browse the library")])],1)],1)])},a=[],r=(n("4160"),n("e25e"),n("ac1f"),n("5319"),n("159b"),n("bc3a")),s=n.n(r),o=n("1157"),l=n.n(o),c=n("3677"),u=n("5a65"),p=n("d4fd"),d=n("1799"),g=n("20be"),h=n("38b2"),f=n("64c4"),v=n("025e"),m="tracks/",x={mixins:[g["a"],h["a"],f["a"]],components:{TrackTable:u["a"],RadioButton:p["a"],Pagination:d["a"]},data:function(){return{results:null,isLoading:!1,nextLink:null,previousLink:null,page:parseInt(this.defaultPage),orderingOptions:[["creation_date","creation_date"],["title","track_title"],["album__title","album_title"],["artist__name","artist_name"]]}},created:function(){Object(v["a"])(this.$store,this.$router),this.fetchFavorites(m)},mounted:function(){l()(".ui.dropdown").dropdown()},computed:{labels:function(){return{title:this.$pgettext("Head/Favorites/Title","Your Favorites")}},hasFavorites:function(){return this.$store.state.favorites.count>0}},methods:{updateQueryString:function(){this.$router.replace({query:{page:this.page,paginateBy:this.paginateBy,ordering:this.getOrderingAsString()}}),this.fetchFavorites(m)},fetchFavorites:function(t){var e=this;this.isLoading=!0;var n={favorites:"true",page:this.page,page_size:this.paginateBy,ordering:this.getOrderingAsString()};c["a"].default.time("Loading user favorites"),s.a.get(t,{params:n}).then((function(t){e.results=t.data,e.nextLink=t.data.next,e.previousLink=t.data.previous,e.results.results.forEach((function(t){e.$store.commit("favorites/track",{id:t.id,value:!0})})),c["a"].default.timeEnd("Loading user favorites"),e.isLoading=!1}))},selectPage:function(t){this.page=t}},watch:{page:function(){this.updateQueryString()},paginateBy:function(){this.updateQueryString()},orderingDirection:function(){this.updateQueryString()},ordering:function(){this.updateQueryString()}}},b=x,C=n("2877"),$=Object(C["a"])(b,i,a,!1,null,null,null);e["default"]=$.exports},"64c4":function(t,e,n){"use strict";var i,a,r={computed:{sharedLabels:function(){return{fields:{privacy_level:{label:this.$pgettext("Content/Settings/Dropdown.Label/Noun","Activity visibility"),help:this.$pgettext("Content/Settings/Dropdown.Help text","Determine the visibility level of your activity"),choices:{me:this.$pgettext("Content/Settings/Dropdown","Nobody except me"),instance:this.$pgettext("Content/Settings/Dropdown","Everyone on this instance"),everyone:this.$pgettext("Content/Settings/Dropdown","Everyone, across all instances")},shortChoices:{me:this.$pgettext("Content/Settings/Dropdown/Short","Private"),instance:this.$pgettext("Content/Settings/Dropdown/Short","Instance"),everyone:this.$pgettext("Content/Settings/Dropdown/Short","Everyone")}},import_status:{detailTitle:this.$pgettext("Content/Library/Link.Title","Click to display more information about the import process for this upload"),choices:{skipped:{label:this.$pgettext("Content/Library/*","Skipped"),help:this.$pgettext("Content/Library/Help text","This track is already present in one of your libraries")},draft:{label:this.$pgettext("Content/Library/*/Short","Draft"),help:this.$pgettext("Content/Library/Help text","This track has been uploaded, but hasn't been scheduled for processing yet")},pending:{label:this.$pgettext("Content/Library/*/Short","Pending"),help:this.$pgettext("Content/Library/Help text","This track has been uploaded, but hasn't been processed by the server yet")},errored:{label:this.$pgettext("Content/Library/Table/Short","Errored"),help:this.$pgettext("Content/Library/Help text","This track could not be processed, please make sure it is tagged correctly")},finished:{label:this.$pgettext("Content/Library/*","Finished"),help:this.$pgettext("Content/Library/Help text","Imported")}}},report_type:{label:this.$pgettext("*/*/*","Category"),choices:{takedown_request:this.$pgettext("Content/Moderation/Dropdown","Takedown request"),invalid_metadata:this.$pgettext("Popup/Import/Error.Label","Invalid metadata"),illegal_content:this.$pgettext("Content/Moderation/Dropdown","Illegal content"),offensive_content:this.$pgettext("Content/Moderation/Dropdown","Offensive content"),other:this.$pgettext("Content/Moderation/Dropdown","Other")}},summary:{label:this.$pgettext("Content/Account/*","Bio")},content_category:{label:this.$pgettext("Content/*/Dropdown.Label/Noun","Content category"),choices:{podcast:this.$pgettext("Content/*/Dropdown","Podcast"),music:this.$pgettext("*/*/*","Music"),other:this.$pgettext("*/*/*","Other")}}},filters:{creation_date:this.$pgettext("Content/*/*/Noun","Creation date"),release_date:this.$pgettext("Content/*/*/Noun","Release date"),accessed_date:this.$pgettext("Content/*/*/Noun","Accessed date"),first_seen:this.$pgettext("Content/Moderation/Dropdown/Noun","First seen date"),last_seen:this.$pgettext("Content/Moderation/Dropdown/Noun","Last seen date"),modification_date:this.$pgettext("Content/Playlist/Dropdown/Noun","Modification date"),expiration_date:this.$pgettext("Content/Admin/Table.Label/Noun","Expiration date"),track_title:this.$pgettext("Content/*/Dropdown/Noun","Track name"),album_title:this.$pgettext("Content/*/Dropdown/Noun","Album name"),artist_name:this.$pgettext("Content/*/Dropdown/Noun","Artist name"),name:this.$pgettext("*/*/*/Noun","Name"),length:this.$pgettext("*/*/*/Noun","Length"),items_count:this.$pgettext("*/*/*/Noun","Items"),size:this.$pgettext("Content/*/*/Noun","Size"),bitrate:this.$pgettext("Content/Track/*/Noun","Bitrate"),duration:this.$pgettext("Content/*/*","Duration"),date_joined:this.$pgettext("Content/Admin/Table.Label/Noun","Sign-up date"),last_activity:this.$pgettext("Content/Profile/Table.Label/Short, Noun (Value is a date)","Last activity"),username:this.$pgettext("Content/*/*","Username"),domain:this.$pgettext("Content/Moderation/*/Noun","Domain"),users:this.$pgettext("*/*/*/Noun","Users"),received_messages:this.$pgettext("Content/Moderation/*/Noun","Received messages"),uploads:this.$pgettext("*/*/*","Uploads"),followers:this.$pgettext("Content/Federation/*/Noun","Followers")},scopes:{profile:{label:this.$pgettext("Content/OAuth Scopes/Label","Profile"),description:this.$pgettext("Content/OAuth Scopes/Paragraph","Access to email, username, and profile information")},libraries:{label:this.$pgettext("Content/OAuth Scopes/Label","Libraries and uploads"),description:this.$pgettext("Content/OAuth Scopes/Paragraph","Access to audio files, libraries, artists, albums and tracks")},favorites:{label:this.$pgettext("Sidebar/Favorites/List item.Link/Noun","Favorites"),description:this.$pgettext("Content/OAuth Scopes/Paragraph","Access to favorites")},listenings:{label:this.$pgettext("*/*/*/Noun","Listenings"),description:this.$pgettext("Content/OAuth Scopes/Paragraph","Access to listening history")},follows:{label:this.$pgettext("Content/OAuth Scopes/Label","Follows"),description:this.$pgettext("Content/OAuth Scopes/Paragraph","Access to follows")},playlists:{label:this.$pgettext("*/*/*","Playlists"),description:this.$pgettext("Content/OAuth Scopes/Paragraph","Access to playlists")},radios:{label:this.$pgettext("*/*/*","Radios"),description:this.$pgettext("Content/OAuth Scopes/Paragraph","Access to radios")},filters:{label:this.$pgettext("Content/Settings/Title/Noun","Content filters"),description:this.$pgettext("Content/OAuth Scopes/Paragraph","Access to content filters")},notifications:{label:this.$pgettext("*/Notifications/*","Notifications"),description:this.$pgettext("Content/OAuth Scopes/Paragraph","Access to notifications")},edits:{label:this.$pgettext("*/Admin/*/Noun","Edits"),description:this.$pgettext("Content/OAuth Scopes/Paragraph","Access to edits")},security:{label:this.$pgettext("*/Admin/*/Noun","Security"),description:this.$pgettext("Content/OAuth Scopes/Paragraph","Access to security settings such as password and authorization")},reports:{label:this.$pgettext("*/Moderation/*/Noun","Reports"),description:this.$pgettext("Content/OAuth Scopes/Paragraph","Access to moderation reports")}}}}}},s=r,o=n("2877"),l=Object(o["a"])(s,i,a,!1,null,null,null);e["a"]=l.exports}}]);