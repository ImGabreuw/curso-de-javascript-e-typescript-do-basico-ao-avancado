!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}t.r(e);var o=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.cpfEnviado=e,Object.defineProperty(this,"cpfLimpo",{writable:!1,enumerable:!1,configurable:!1,value:e.replace(/\D+/g,"")})}var e,t,o;return e=n,o=[{key:"gerarDigito",value:function(n){var e=n.length+1,t=11-Array.from(n).reduce((function(n,t){return n+=e*Number(t),e--,n}),0)%11;return t>9?"0":String(t)}}],(t=[{key:"isSequencia",value:function(){return this.cpfLimpo[0].repeat(this.cpfLimpo.length)===this.cpfLimpo}},{key:"gerarNovoCpf",value:function(){var e=this.cpfLimpo.slice(0,-2),t=n.gerarDigito(e);return e+t+n.gerarDigito(e+t)}},{key:"validar",value:function(){return void 0!==this.cpfLimpo&&11===this.cpfLimpo.length&&!this.isSequencia()&&!!this.gerarNovoCpf()&&this.gerarNovoCpf()===this.cpfLimpo}},{key:"printBonito",value:function(){return this.validar()?"CPF válido":"CPF inválido"}}])&&r(e.prototype,t),o&&r(e,o),n}();function i(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var a,u=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"rand",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.floor(Math.random()*(e-n)+n))}},{key:"gerarNovoCPF",value:function(){var n=this.rand(),e=o.gerarDigito(n),t=n+e+o.gerarDigito(n+e);return this.formatarCPF(t)}},{key:"formatarCPF",value:function(n){return n.slice(0,3)+"."+n.slice(3,6)+"."+n.slice(6,9)+"-"+n.slice(9,11)}}])&&i(e.prototype,t),r&&i(e,r),n}();t(2);a=new u,document.querySelector(".cpf-gerado").innerHTML=a.gerarNovoCPF()},,function(n,e,t){var r=t(3);"string"==typeof r&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1};t(5)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(e=n.exports=t(4)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);",""]),e.push([n.i,":root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n\n.container h1 {\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.cpf-gerado {\n  font-size: 2em;\n  color: var(--primary-color);\n  text-align: center;\n  font-weight: bold;\n  margin-bottom: 40px;\n  letter-spacing: 3px;\n}",""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,u,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<n.length;a++){var u=n[a];null!=u[0]&&r[u[0]]||(t&&!u[2]?u[2]=t:t&&(u[2]="(".concat(u[2],") and (").concat(t,")")),e.push(u))}},e}},function(n,e,t){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}();function u(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(u):t.push(r[a]={id:a,parts:[u]})}return t}function c(n,e){for(var t=0;t<n.length;t++){var r=n[t],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(g(r.parts[a],e))}else{for(var u=[];a<r.parts.length;a++)u.push(g(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:u}}}}function s(n){var e=document.createElement("style");if(void 0===n.attributes.nonce){var r=t.nc;r&&(n.attributes.nonce=r)}if(Object.keys(n.attributes).forEach((function(t){e.setAttribute(t,n.attributes[t])})),"function"==typeof n.insert)n.insert(e);else{var o=a(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var f,l=(f=[],function(n,e){return f[n]=e,f.filter(Boolean).join("\n")});function p(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function d(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o&&n.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var v=null,h=0;function g(n,e){var t,r,o;if(e.singleton){var i=h++;t=v||(v=s(e)),r=p.bind(null,t,i,!1),o=p.bind(null,t,i,!0)}else t=s(e),r=d.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=u(n,e);return c(t,e),function(n){for(var r=[],i=0;i<t.length;i++){var a=t[i],s=o[a.id];s&&(s.refs--,r.push(s))}n&&c(u(n,e),e);for(var f=0;f<r.length;f++){var l=r[f];if(0===l.refs){for(var p=0;p<l.parts.length;p++)l.parts[p]();delete o[l.id]}}}}}]);
//# sourceMappingURL=bundle.js.map