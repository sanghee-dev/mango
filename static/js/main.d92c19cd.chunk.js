(this.webpackJsonpmango=this.webpackJsonpmango||[]).push([[0],{55:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(0),s=a.n(i),c=a(28),r=a.n(c),o=a(8),l=a(2),j=a(17),h=a.n(j),d=a(29),m=a(11),u=a(12),b=a(14),v=a(13),g=a(30),O=a.n(g);a(55);function _(e){if(e.length<80)return e;for(var t=80;t>0;t--)if(" "===e.slice(t,t+1))return e.slice(0,t)+"..."}function x(e){return e<=7?"\u25cf\u25cf":e<=8?"\u25cf\u25cf\u25cf":e<=9?"\u25cf\u25cf\u25cf\u25cf":e<=10?"\u25cf\u25cf\u25cf\u25cf\u25cf":void 0}var p=function(e){var t=e.id,a=e.year,i=e.title,s=e.rating,c=e.genres,r=e.summary,l=e.poster;return Object(n.jsx)(o.b,{className:"movies",to:{pathname:"/movie/".concat(t),state:{year:a,title:i,rating:s,genres:c,summary:r,poster:l}},children:Object(n.jsxs)("div",{className:"movie",style:{backgroundImage:"url(".concat(l,")")},children:[Object(n.jsx)("h3",{className:"movie__title highlighter",children:i}),Object(n.jsx)("h5",{className:"movie__year highlighter",children:a}),Object(n.jsx)("h5",{className:"movie__rating",children:x(s)}),Object(n.jsx)("h5",{className:"movie__genres highlighter",children:c.filter((function(e,t){return t<2})).map((function(e){return e+" "}))}),Object(n.jsx)("p",{className:"movie__summary highlighter",children:_(r)})]})})},f=(a(64),function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(h.a.mark((function t(){var a,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({isLoading:!1,movies:n});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(n.jsx)("section",{className:"container",children:t?Object(n.jsxs)("div",{className:"loader__container",children:[Object(n.jsx)("h1",{children:"..."}),Object(n.jsx)("div",{className:"loader"})]}):Object(n.jsx)("div",{className:"movies",children:a.map((function(e){return Object(n.jsx)(p,{id:e.id,year:e.year,title:e.title,rating:e.rating,genres:e.genres,summary:e.summary,poster:e.large_cover_image},e.id)}))})})}}]),a}(s.a.Component));a(65);var N=function(){return Object(n.jsxs)("div",{className:"about__container",children:[Object(n.jsx)("div",{className:"about_dots__container",children:Object(n.jsx)("div",{className:"about__dots",children:"\u25cf\u25cf\u25cf"})}),Object(n.jsxs)("h5",{children:["That's what I love about music.",Object(n.jsx)("br",{}),"All these banalities suddenly turn into beautiful pearls."]}),Object(n.jsx)("h5",{children:"begin again, 2013"})]})};a(66);var y=function(){return Object(n.jsxs)("div",{className:"navigation",children:[Object(n.jsx)("div",{className:"navigation__dots",children:"\u25cf"}),Object(n.jsx)("h1",{className:"navigation__title",children:"MANGO MOVIE"}),Object(n.jsxs)("div",{className:"navigations",children:[Object(n.jsx)(o.b,{to:"/",className:"navigation__home",children:"Home"}),Object(n.jsx)(o.b,{to:"/about",className:"navigation__about",children:"About"})]}),Object(n.jsx)("div",{className:"navigation__dots",children:"\u25cf"})]})},k=(a(67),function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location.state,t=e.year,a=e.title,i=(e.rating,e.genres),s=e.summary,c=e.poster;return Object(n.jsxs)("div",{className:"detail__container",children:[Object(n.jsx)("img",{className:"detail__poster",src:c}),Object(n.jsxs)("div",{className:"detail__data",children:[Object(n.jsxs)("div",{className:"detail__data__main",children:[Object(n.jsxs)("h5",{className:"detail__title highlighter",children:[a,", ",t]}),Object(n.jsx)("h5",{className:"detail__genres highlighter",children:i.filter((function(e,t){return t<2})).map((function(e){return e+" "}))})]}),Object(n.jsx)("h5",{className:"detail__summary highlighter",children:s})]})]})}}]),a}(s.a.Component));a(68);var M=function(){return Object(n.jsxs)(o.a,{children:[Object(n.jsx)(y,{}),Object(n.jsx)(l.a,{path:"/",exact:!0,component:f}),Object(n.jsx)(l.a,{path:"/about",component:N}),Object(n.jsx)(l.a,{path:"/movie/:id",component:k})]})};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(M,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.d92c19cd.chunk.js.map