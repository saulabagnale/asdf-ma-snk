(this["webpackJsonpmanganyaa-snk-react"]=this["webpackJsonpmanganyaa-snk-react"]||[]).push([[10],{131:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a(0),r=a(34),s=a(90),i=a.n(s);var o=function(e,t){var a;clearTimeout(a),a=setTimeout(e,t)},u=a(31),l=a(19),j=a(13),f=(a(131),a(1));function h(e,t){return e[2]<t[2]?1:e[2]>t[2]?-1:0}t.default=function(e){var t=e.setShowSearch,a=Object(c.useContext)(j.a),s=a.siteMetadata,d=a.mocks,b=Object(c.useState)(!1),m=Object(n.a)(b,2),v=m[0],g=m[1],O=Object(c.useState)([]),p=Object(n.a)(O,2),k=p[0],x=p[1],N=Object(c.useRef)(null);Object(c.useEffect)((function(){v||fetch("/jsons/mangaNames.json").then((function(e){return e.json()})).then((function(e){return g(e)}))}),[]),Object(c.useEffect)((function(){N&&N.current&&N.current.focus()}),[N]);return Object(f.jsx)("div",{className:"search-container ".concat(!v&&"search-loader-container"),children:v?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"search-input-container",children:[Object(f.jsx)(l.a,{icon:Object(f.jsx)(i.a,{alt:""}),name:"back",click:function(){return t(!1)}}),Object(f.jsx)("input",{className:"search-input",placeholder:'"Tonikaku", "Shingeki", "Boku", etc',onChange:function(e){return o((function(){var t=e.target.value.toLowerCase();if(e.target.value.length>3){for(var a=t.split(" ").filter((function(e){return e.length>3})),c=[],r=0;r<v.length;r++){var s=v[r],i=Object(n.a)(s,2),o=i[0],u=i[1];if(u&&o){for(var l=0,j=0;j<a.length;j++){var f=a[j];u.toLowerCase().includes(f)&&(l+=1)}l>0&&c.push([o,u,l])}else console.error("serie absent values: ",s)}var d=c.sort(h);x(d)}0===e.target.value.length&&0!==k.length&&x([])}),750)},ref:N})]}),Object(f.jsx)("div",{className:"search-results-container",children:k.map((function(e){var t=Object(n.a)(e,2),a=t[0],c=t[1],i=u.find((function(e){return e.name===c}))||{};return Object(f.jsxs)(r.a,{className:"search-result",to:Object(j.d)(s.lang,a,i.subdomain),children:[Object(f.jsx)("img",{src:d&&d.descriptionImg?d.descriptionImg:"".concat(s.storage.fullPath).concat(a,"/description/1.jpg"),alt:"",className:"lazy search-result-img"}),Object(f.jsx)("h4",{children:c})]})}))})]}):Object(f.jsx)("div",{className:"loader",style:{marginTop:0}})})}},90:function(e,t,a){"use strict";var n=a(15),c=a(16);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a(0)),s=(0,n(a(17)).default)(r.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=s}}]);