(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{C6g5:function(t,e,r){"use strict";var o=r("q1tI"),n=r.n(o),i=r("qKvR");function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=Object(o.forwardRef)((function(t,e){var r=t.color,o=void 0===r?"currentColor":r,i=t.size,s=void 0===i?24:i,c=l(t,["color","size"]);return n.a.createElement("svg",a({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.a.createElement("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}))}));s.displayName="Filter";var c=s,d={name:"2yla9f",styles:"margin-left:10px;margin-right:10px;stroke:var(--color-interactive-dark);&:hover{fill:var(--color-interactive-dark);cursor:pointer;},"};e.a=function(t){var e=t.checked,r=t.setChecked;return Object(i.d)("button",{"aria-label":"Filter Blog Posts",css:Object(i.c)("display:inline-block;width:40px;height:35px;float:right;& svg{fill:",e?"var(--color-interactive-dark)":"none",";}"),onClick:function(t){r(!e)}},Object(i.d)(c,{css:d,size:30,strokeWidth:2.8}))}},E6xs:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return h})),r.d(e,"query",(function(){return v}));var o=r("q1tI"),n=r.n(o),i=r("qKvR"),a=r("Bl7J"),l=r("KR5v"),s=r("C6g5"),c=r("NysD"),d=r("vrFN"),p={name:"58z4w",styles:"display:inline-block;padding-bottom:10px;"},u={name:"v49mw0",styles:"display:inline-block;margin-top:8.5px;margin-right:10px;color:var(--color-off-text);float:right;"},f={name:"1ux2u9g",styles:"margin-right:20px;font-weight:bold;"},g={name:"1xn3edc",styles:"margin-bottom:30px;"},b={name:"1fwh4v",styles:"display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));grid-gap:50px;"};function h(t){var e=t.data,r=n.a.useState(!1),o=r[0],h=r[1],v=n.a.useState({allPosts:e.allMdx.edges,filteredData:[],query:{}}),m=v[0],x=v[1],y=m.filteredData.length?m.filteredData:m.allPosts;return Object(i.d)(a.a,null,Object(i.d)(d.a,{title:"Portfolio : TCBR"}),Object(i.d)("h1",{css:p},"Portfolio"),Object(i.d)(s.a,{checked:o,setChecked:h}),Object(i.d)("h5",{css:u},e.allMdx.totalCount," Posts"),Object(i.d)("h5",{css:Object(i.c)("display:",m.filteredData.length?"inline-block":"none",";;margin-top:8.5px;margin-right:5px;color:var(--color-off-text);float:right;")}," ( filtered ) ",m.filteredData.length," /"),Object(i.d)("ul",{css:Object(i.c)("display:",o?"block":"none",";list-style-type:none;margin:0;margin-bottom:20px;")},Object(i.d)("label",{css:f},"Tags:"),e.tagsGroup.group.map((function(t){var e=t.fieldValue;return Object(i.d)(c.a,{tag:e,setState:x,state:m})}))),Object(i.d)("p",{css:g},"Here you'll find the projects I have worked on in the past, or that I'm currently working on. Click the filter icon to see the different subjects."),Object(i.d)("section",{css:b},y.map((function(t){var e=t.node;return Object(i.d)(l.a,{node:e})}))))}var v="4272225865"},KR5v:function(t,e,r){"use strict";r("q1tI");var o=r("Wbzz"),n=r("qKvR"),i=r("Eb9h"),a={name:"terk5q",styles:"background:var(--color-accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;"},l={name:"1upilqn",styles:"margin-bottom:12px;"},s={name:"1c9f2zm",styles:"position:relative;&:hover{& h3{color:var(--color-interactive-light);transition:all 100ms linear;-webkit-transition:all 100ms linear;}}"},c={name:"nkrblr",styles:"position:relative;display:flex;text-decoration:none;color:var(--color-text);height:450px;overflow:hidden;"},d={name:"1oo79ui",styles:"width:100%;padding-left:30px;padding-right:30px;height:200px;z-index:2;position:absolute;top:0px;left 0px;"},p={name:"jg1u50",styles:"position:relative;top:30%;width:100%;background:var(--color-primary);padding:15px;"},u={name:"1flkuon",styles:"position:absolute;bottom:27%;right 10px;letter-spacing:1.3px;"},f={name:"116m6yf",styles:"position:relative;top:15%;height:200px;overflow:hidden;"};e.a=function(t){return Object(n.d)("article",{css:s},Object(n.d)(o.Link,{css:c,to:t.node.fields.slug},Object(n.d)("div",{css:d},Object(n.d)(i.a,{fluid:t.node.frontmatter.thumbnail.childImageSharp.fluid})),Object(n.d)("div",{css:p},Object(n.d)("h6",{css:u},t.node.frontmatter.date),Object(n.d)("div",{css:f},Object(n.d)("h3",{css:Object(n.c)(l,";")},t.node.frontmatter.title),Object(n.d)("h4",{css:Object(n.c)(a,";",l,";")},t.node.frontmatter.description),Object(n.d)("p",{css:Object(n.c)()},t.node.excerpt)))))}},NysD:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var o=r("q1tI"),n=r.n(o),i=r("qKvR"),a={name:"15doqgx",styles:"background:var(--color-interactive-light);color:var(--color-text-negative);&:hover{cursor:pointer;color:var(--color-text);transition:all 100ms linear;-webkit-transition:all 100ms linear;}"},l={name:"1baulvz",styles:"display:inline-block;"};function s(t){var e=t.tag,r=t.setState,o=t.state,s=n.a.useState(!1),c=s[0],d=s[1];return Object(i.d)("li",{css:l},Object(i.d)("button",{"aria-label":"Blog Post Topic Tag",css:Object(i.c)("padding:8px;padding-left:13px;padding-right:13px;font-weight:bold;color:var(--color-text);margin-right:20px;font-size:14px;background:var(--color-lighter-primary);border-radius:5px;&:hover{cursor:pointer;color:var(--color-interactive-light);transition:all 100ms linear;-webkit-transition:all 100ms linear;}",c&&a),onClick:function(t){d(!c);var n=o.query;n[e]=!c;var i=o.allPosts.filter((function(t){return t.node.frontmatter.tags.some((function(t){return o.query[t]}))}));r({checked:o.checked,allPosts:o.allPosts,filteredData:i,query:n})}},e))}}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-0b5b3441d9cdf6d2965a.js.map