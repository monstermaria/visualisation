(this.webpackJsonpvisualisation=this.webpackJsonpvisualisation||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(3),c=n.n(a),s=(n(9),n(10),n(4)),i=(n(11),n(0));var l=function e(t){var n=Object(o.useState)(!1),r=Object(s.a)(n,2),a=r[0],c=r[1],l=[],u="",m=a?"show":"hide";for(var b in t.subTree){var h=Object(i.jsx)(e,{name:b,subTree:t.subTree[b]},b);l.push(h)}return l.sort((function(e,t){var n=Object.keys(e.props.subTree).length>0,o=Object.keys(t.props.subTree).length>0;return n&&!o?-1:o&&!n?1:e.key.localeCompare(t.key)})),a&&(u="open"),0===l.length&&(u="file"),Object(i.jsxs)("li",{className:u,onClick:function(e){e.stopPropagation(),c(!a)},children:[t.name,l.length>0?Object(i.jsx)("ul",{className:m,children:l}):""]})},u=["marvel/black_widow/bw.png","marvel/drdoom/the-doctor.png","fact_marvel_beats_dc.txt","dc/aquaman/mmmmmomoa.png","marvel/black_widow/why-the-widow-is-awesome.txt","dc/aquaman/movie-review-collection.txt","marvel/marvel_logo.png","dc/character_list.txt"];var m=function(){var e=function(e){var t={};return e.forEach((function(e){for(var n=e.split("/"),o=t,r=0;r<n.length;){var a=n[r];o[a]||(o[a]={}),o=o[a],r++}})),t}(u);return console.log(e),Object(i.jsx)("ul",{children:Object(i.jsx)(l,{name:"root",subTree:e})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),o(e),r(e),a(e),c(e)}))};c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),b()}],[[13,1,2]]]);
//# sourceMappingURL=main.ac41e9bf.chunk.js.map