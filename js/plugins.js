parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"d5ui":[function(require,module,exports) {
function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(n)}function n(e,n){return o(e)||r(e,n)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function r(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return t}function o(e){if(Array.isArray(e))return e}var a={INSTALL_OLD:"DITA-OT 3.1 and older",INSTALL_CURRENT:"DITA-OT 3.2 and newer",LICENSE:"License",HOMEPAGE:"Homepage",KEYWORDS:"Keywords",INSTALL:"Install",FILTER_PLACEHOLDER:"Filter plugins",FILTER_ANY_VERSION:"Any version",FILTER_VERSION_LABEL:"DITA-OT version",NO_MATCHES:"No matches found.",DEPENDENCIES:"Dependencies",VERSIONS:"Versions",VERSION_NOT_FOUND:"Plugin {} version {} not found.",NOT_FOUND:"Plugin {} not found.",FOUND:"Found {} matches."};function i(e){return arguments.length>1?Array.prototype.slice.call(arguments).slice(1).reduce(function(e,n){return e.replace("{}",n)},a[e]):a[e]}var c="https://plugins.dita-ot.org/_all.json",l=["3.2","3.1","3.0","2.5","2.4","2.3","2.2","2.1","2.0","1.8"],u=null;function s(e){u=e,Object.values(u).filter(function(e){return!!e}).forEach(function(e){e.alias||e.forEach(function(e){var n=e.name+" "+(e.description&&e.description)+" "+(e.keywords&&e.keywords.join(" "));e.search=n.toLocaleLowerCase().replace(/\W/g," ").replace(/\s+/g," ")})}),window.onpopstate=function(e){f(location.hash)},f(location.hash)}function f(e){var t=null;if(e){var r=n(e.substr(1).split("/"),2),o=r[0],a=r[1],i=u[o].slice();i.sort(R),t=S(i,a)||p(o,a)}else t=L(u);var c=document.getElementById("plugins");C(c),b(c,t),e||y()}function p(e,n){return A("p",n?i("VERSION_NOT_FOUND",e,n):i("NOT_FOUND",e))}document.addEventListener("DOMContentLoaded",function(e){fetch(c).then(function(e){return e.json()}).then(s).catch(function(e){console.error("Failed to fetch plugins: "+e)})});var d={freetext:null,version:null};function m(e){d.freetext=e.target.value.toLocaleLowerCase().replace(/\W/g," ").replace(/\s+/g," ").trim(),y()}function h(e){d.version=e.target.value,y()}function y(){if(d.freetext||d.version){var e=0;document.querySelectorAll("#list > li").forEach(function(n){v(u[n.id][0])?(e++,n.style.display="list-item"):n.style.display="none"});var n=document.querySelector("#empty"),t=document.querySelector("#hits");0===e?(n.style.display="block",t.style.display="none",C(t)):(n.style.display="none",t.style.display="block",C(t),t.appendChild(document.createTextNode(i("FOUND",e))))}else E()}function v(e){var n=!d.freetext;d.freetext&&e.search.match(d.freetext)&&(n=!0);var t=!d.version,r=e.deps.find(function(e){return"org.dita.base"===e.name});return d.version&&r&&F(d.version,r.req)&&(t=!0),n&&t}function E(){document.querySelectorAll("#list > li").forEach(function(e){e.style.display="list-item"}),document.querySelector("#hits").style.display="none"}function N(e){27===e.keyCode&&(document.querySelector("#query").value="",d.freetext="",y())}function g(){var e=A("input",{id:"query",value:d.freetext||"",type:"text",class:"form-control",placeholder:i("FILTER_PLACEHOLDER"),size:50},void 0);e.oninput=m,e.onkeypress=N;var n=l.map(function(e){var n={value:e};return e===d.version&&(n.selected="selected"),A("option",n,e)}),t=A("select",{id:"version",class:"form-control"},[A("option",{value:""},i("FILTER_ANY_VERSION"))].concat(n));return t.onchange=h,A("div",{class:"form-inline"},[A("div",{class:"form-group"},e)," ",A("div",{class:"form-group"},t)])}function L(e){return[g(),A("p",{id:"empty",style:"display: none; margin-top: 1em",class:"alert alert-info"},i("NO_MATCHES")),A("p",{id:"hits",style:"display: none; margin-top: 1em"},""),A("ul",{class:"list-unstyled",id:"list"},Object.values(e).filter(function(e){return!!e&&!e.alias}).sort(function(e,n){return e[0].name.localeCompare(n[0].name)}).map(function(e){return e[0]}).map(function(e){return A("li",{id:e.name},[A("h3",A("a",{href:"#".concat(e.name)},e.name)),A("p",e.description),A("p",(e.keywords||[]).flatMap(function(e){return[A("code",{class:"small"},e),"  "]}))])}))]}function S(e,n){var t=n?e.find(function(e){return e.vers===n}):e[0];if(!t)return null;var r=document.createElement("div");r.appendChild(A("h2",["".concat(t.name),A("small"," ".concat(t.vers))])),t.description&&b(r,A("p",{class:"shortdesc"},t.description)),t.keywords&&0!==t.keywords.length&&b(r,[A("h3",i("KEYWORDS")),A("p",t.keywords.flatMap(function(e){return[A("code",e),"  "]}))]),t.license&&b(r,[A("h3",i("LICENSE")),A("p",I(t.license))]),t.homepage&&b(r,[A("h3",i("HOMEPAGE")),A("p",A("a",{href:t.homepage},T(t.homepage)))]),b(r,[A("h3",i("INSTALL")),A("p",{class:"small"},i("INSTALL_CURRENT")),A("pre","dita --install ".concat(t.name)),A("p",{class:"small"},i("INSTALL_OLD")),A("pre","dita --install ".concat(t.url))]);var o=t.deps;return o.sort(function(e,n){return e.name.localeCompare(n.name)}),b(r,[A("h3",i("DEPENDENCIES")),A("ul",o.filter(function(e){return"org.dita.base"===e.name}).map(function(e){return A("li","DITA-OT ".concat(O(e.req)||""))})),A("ul",o.filter(function(e){return"org.dita.base"!==e.name}).map(function(e){return A("li","".concat(e.name," ").concat(O(e.req)||""))}))]),b(r,[A("h3",i("VERSIONS")),A("ul",e.map(function(e){return A("li",A("a",{href:"#".concat(t.name,"/").concat(e.vers)},e.vers))}))]),r}function I(e){switch(e){case"Apache-2.0":return A("a",{href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache License 2.0");case"MIT":return A("a",{href:"https://opensource.org/licenses/MIT"},"MIT License");case"UNLICENSED":return"Unlicensed";default:return e}}function O(e){return e.startsWith("=")?"".concat(e.substr(1)):e.startsWith(">=")?"".concat(e.substr(2)," or newer"):e.startsWith("<=")?"".concat(e.substr(2)," or older"):e}function T(e){return e.replace(/^\w+:\/\/([^\/]+?)(\/.*)?$/,"$1")}function A(){var e=arguments[0],n=3===arguments.length?arguments[1]:{},t=3===arguments.length?arguments[2]:arguments[1],r=document.createElement(e);return Object.keys(n).forEach(function(e){r.setAttribute(e,n[e])}),b(r,t),r}function b(n,t){if(null!=t)switch(e(t)){case"string":n.appendChild(document.createTextNode(t));break;case"object":if(Array.isArray(t)){t.forEach(function(e){b(n,e)});break}default:n.appendChild(t)}}function C(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function D(e){var n=e.replace(/\./g,"").replace(/[^=<>.]/g,""),t=e.replace(/[=<>]/g,"").split(".").map(function(e){return Number.parseInt(e)});if(t.length<3)for(var r=t.length;r<3;r++)t.push(0);return{op:n||null,tokens:t}}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e===n?0:e<n?1:-1}function _(e,n){return e.map(function(e,t){return[e,n[t]]})}function R(e,n){try{var t=D(e),r=D(n);return k(_(t.tokens,r.tokens).map(function(e){return w(e[0],e[1])}))}catch(o){return 0}}function k(e,n){var t=e.reduce(function(e,n){return 0!==e?e:n},0);return">="===n?t<=0:">"===n?t<0:"<="===n?t>=0:"<"===n?t>0:0===t}function F(e,n){try{var t=D(e),r=D(n);return k(_(t.tokens,r.tokens).map(function(e){return w(e[0],e[1])}),r.op)}catch(o){return!1}}
},{}]},{},["d5ui"], null)
//# sourceMappingURL=/plugins.map