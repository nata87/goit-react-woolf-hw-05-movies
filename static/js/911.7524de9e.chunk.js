"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[911],{911:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var r=e(439),u=e(396),c=e(791),a="Movies_section__+GVFD",o="Movies_input__mpzwV",s="Movies_button__sRc5b",i=e(126),f=e(87),l=e(184),p=function(){var t=(0,c.useState)([]),n=(0,r.Z)(t,2),e=n[0],p=n[1],h=(0,f.lr)(),v=(0,r.Z)(h,2),d=v[0],m=v[1],x=(0,c.useState)(d.get("query")||""),g=(0,r.Z)(x,2),Z=g[0],w=g[1],_=d.get("query")||"";(0,c.useEffect)((function(){_&&(0,u.qF)(_).then((function(t){p(t)}))}),[_]);return(0,l.jsxs)("section",{className:a,children:[(0,l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),Z.length>0&&m({query:Z})},children:[(0,l.jsx)("input",{className:o,onChange:function(t){w(t.target.value)}}),(0,l.jsx)("button",{className:s,type:"submit",children:"Search"})]}),(0,l.jsx)("div",{children:e.length?(0,l.jsx)(i.Z,{movies:e}):null})]})}},396:function(t,n,e){e.d(n,{HI:function(){return s},XT:function(){return o},qF:function(){return l},tx:function(){return f},zv:function(){return i}});var r=e(861),u=e(757),c=e.n(u),a=e(340);a.Z.defaults.baseURL="https://api.themoviedb.org/3/",a.Z.defaults.params={api_key:"da789e4046025628314fd46c966ce59e"};var o=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.Z.get("/trending/movie/day").then((function(t){return t.data.results})).catch((function(t){return console.log(t)}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.Z.get("/movie/".concat(n)).then((function(t){return t.data})).catch((function(t){return console.log(t)}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.Z.get("/movie/".concat(n,"/credits")).then((function(t){return t.data.cast})).catch((function(t){return console.log(t)}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.Z.get("/movie/".concat(n,"/reviews")).then((function(t){return t.data.results})).catch((function(t){return console.log(t)}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.Z.get("/search/movie?query=".concat(n)).then((function(t){return t.data.results})).catch((function(t){return console.log(t)}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},126:function(t,n,e){var r=e(689),u=e(87),c=e(184);n.Z=function(t){var n=t.movies,e=(0,r.TH)().pathname;return(0,c.jsx)("ul",{children:n.map((function(t){var n=t.id,r=t.original_title;return(0,c.jsx)("li",{children:(0,c.jsx)(u.rU,{to:"/movies/".concat(n),state:{from:e},children:r})},n)}))})}}}]);
//# sourceMappingURL=911.7524de9e.chunk.js.map