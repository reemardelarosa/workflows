!function t(e,n,r){function i(s,a){if(!n[s]){if(!e[s]){var h="function"==typeof require&&require;if(!a&&h)return h(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=n[s]={exports:{}};e[s][0].call(u.exports,function(t){var n=e[s][1][t];return i(n?n:t)},u,u.exports,t,e,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e,n){(function(){function t(t){var e=(window.innerWidth-t.width)/2,n=(window.innerHeight-t.height)/2;return t.style.top=n+"px",t.style.left=e+"px",t}for(var e=document.querySelectorAll(".pixgrid"),n=0;n<e.length;n++)e[n].addEventListener("click",function(e){if("IMG"===e.target.tagName){var n=document.createElement("div");n.id="overlay",document.body.appendChild(n),n.style.position="absolute",n.style.top=0,n.style.backgroundColor="rgba(0,0,0,0.7)",n.style.cursor="pointer",n.style.width=window.innerWidth+"px",n.style.height=window.innerHeight+"px",n.style.top=window.pageYOffset+"px",n.style.left=window.pageXOffset+"px";var r=e.target.src,i=document.createElement("img");i.id="largeImage",i.src=r.substr(0,r.length-7)+".jpg",i.style.display="block",i.style.position="absolute",i.addEventListener("load",function(){this.height>window.innerHeight&&(this.ratio=window.innerHeight/this.height,this.height=this.height*this.ratio,this.width=this.width*this.ratio),this.width>window.innerWidth&&(this.ratio=window.innerWidth/this.width,this.height=this.height*this.ratio,this.width=this.width*this.ratio),t(this),n.appendChild(i)}),i.addEventListener("click",function(){n&&(window.removeEventListener("resize",window,!1),window.removeEventListener("scroll",window,!1),n.parentNode.removeChild(n))},!1),window.addEventListener("scroll",function(){n&&(n.style.top=window.pageYOffset+"px",n.style.left=window.pageXOffset+"px")},!1),window.addEventListener("resize",function(){n&&(n.style.width=window.innerWidth+"px",n.style.height=window.innerHeight+"px",n.style.top=window.pageYOffset+"px",n.style.left=window.pageXOffset+"px",t(i))},!1)}},!1)})();$(function(){var e=t("mustache");$.getJSON("js/data.json",function(t){var n=$("#speakerstpl").html(),r=e.to_html(n,t);$("#speakers").html(r)})})},{mustache:2}],2:[function(t,e,n){!function(t,e){"object"==typeof n&&n&&"string"!=typeof n.nodeName?e(n):"function"==typeof define&&define.amd?define(["exports"],e):(t.Mustache={},e(Mustache))}(this,function(t){function e(t){return"function"==typeof t}function n(t){return w(t)?"array":typeof t}function r(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function i(t,e){return null!=t&&"object"==typeof t&&e in t}function o(t,e){return g.call(t,e)}function s(t){return!o(v,t)}function a(t){return String(t).replace(/[&<>"'\/]/g,function(t){return y[t]})}function h(e,n){function i(){if(v&&!y)for(;g.length;)delete d[g.pop()];else g=[];v=!1,y=!1}function o(t){if("string"==typeof t&&(t=t.split(x,2)),!w(t)||2!==t.length)throw new Error("Invalid tags: "+t);a=new RegExp(r(t[0])+"\\s*"),h=new RegExp("\\s*"+r(t[1])),p=new RegExp("\\s*"+r("}"+t[1]))}if(!e)return[];var a,h,p,f=[],d=[],g=[],v=!1,y=!1;o(n||t.tags);for(var U,C,O,j,T,S,L=new c(e);!L.eos();){if(U=L.pos,O=L.scanUntil(a))for(var q=0,I=O.length;I>q;++q)j=O.charAt(q),s(j)?g.push(d.length):y=!0,d.push(["text",j,U,U+1]),U+=1,"\n"===j&&i();if(!L.scan(a))break;if(v=!0,C=L.scan(E)||"name",L.scan(m),"="===C?(O=L.scanUntil(b),L.scan(b),L.scanUntil(h)):"{"===C?(O=L.scanUntil(p),L.scan(k),L.scanUntil(h),C="&"):O=L.scanUntil(h),!L.scan(h))throw new Error("Unclosed tag at "+L.pos);if(T=[C,O,U,L.pos],d.push(T),"#"===C||"^"===C)f.push(T);else if("/"===C){if(S=f.pop(),!S)throw new Error('Unopened section "'+O+'" at '+U);if(S[1]!==O)throw new Error('Unclosed section "'+S[1]+'" at '+U)}else"name"===C||"{"===C||"&"===C?y=!0:"="===C&&o(O)}if(S=f.pop())throw new Error('Unclosed section "'+S[1]+'" at '+L.pos);return l(u(d))}function u(t){for(var e,n,r=[],i=0,o=t.length;o>i;++i)e=t[i],e&&("text"===e[0]&&n&&"text"===n[0]?(n[1]+=e[1],n[3]=e[3]):(r.push(e),n=e));return r}function l(t){for(var e,n,r=[],i=r,o=[],s=0,a=t.length;a>s;++s)switch(e=t[s],e[0]){case"#":case"^":i.push(e),o.push(e),i=e[4]=[];break;case"/":n=o.pop(),n[5]=e[2],i=o.length>0?o[o.length-1][4]:r;break;default:i.push(e)}return r}function c(t){this.string=t,this.tail=t,this.pos=0}function p(t,e){this.view=t,this.cache={".":this.view},this.parent=e}function f(){this.cache={}}var d=Object.prototype.toString,w=Array.isArray||function(t){return"[object Array]"===d.call(t)},g=RegExp.prototype.test,v=/\S/,y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},m=/\s*/,x=/\s+/,b=/\s*=/,k=/\s*\}/,E=/#|\^|\/|>|\{|&|=|!/;c.prototype.eos=function(){return""===this.tail},c.prototype.scan=function(t){var e=this.tail.match(t);if(!e||0!==e.index)return"";var n=e[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},c.prototype.scanUntil=function(t){var e,n=this.tail.search(t);switch(n){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=e.length,e},p.prototype.push=function(t){return new p(t,this)},p.prototype.lookup=function(t){var n,r=this.cache;if(r.hasOwnProperty(t))n=r[t];else{for(var o,s,a=this,h=!1;a;){if(t.indexOf(".")>0)for(n=a.view,o=t.split("."),s=0;null!=n&&s<o.length;)s===o.length-1&&(h=i(n,o[s])),n=n[o[s++]];else n=a.view[t],h=i(a.view,t);if(h)break;a=a.parent}r[t]=n}return e(n)&&(n=n.call(this.view)),n},f.prototype.clearCache=function(){this.cache={}},f.prototype.parse=function(t,e){var n=this.cache,r=n[t];return null==r&&(r=n[t]=h(t,e)),r},f.prototype.render=function(t,e,n){var r=this.parse(t),i=e instanceof p?e:new p(e);return this.renderTokens(r,i,n,t)},f.prototype.renderTokens=function(t,e,n,r){for(var i,o,s,a="",h=0,u=t.length;u>h;++h)s=void 0,i=t[h],o=i[0],"#"===o?s=this.renderSection(i,e,n,r):"^"===o?s=this.renderInverted(i,e,n,r):">"===o?s=this.renderPartial(i,e,n,r):"&"===o?s=this.unescapedValue(i,e):"name"===o?s=this.escapedValue(i,e):"text"===o&&(s=this.rawValue(i)),void 0!==s&&(a+=s);return a},f.prototype.renderSection=function(t,n,r,i){function o(t){return s.render(t,n,r)}var s=this,a="",h=n.lookup(t[1]);if(h){if(w(h))for(var u=0,l=h.length;l>u;++u)a+=this.renderTokens(t[4],n.push(h[u]),r,i);else if("object"==typeof h||"string"==typeof h||"number"==typeof h)a+=this.renderTokens(t[4],n.push(h),r,i);else if(e(h)){if("string"!=typeof i)throw new Error("Cannot use higher-order sections without the original template");h=h.call(n.view,i.slice(t[3],t[5]),o),null!=h&&(a+=h)}else a+=this.renderTokens(t[4],n,r,i);return a}},f.prototype.renderInverted=function(t,e,n,r){var i=e.lookup(t[1]);return!i||w(i)&&0===i.length?this.renderTokens(t[4],e,n,r):void 0},f.prototype.renderPartial=function(t,n,r){if(r){var i=e(r)?r(t[1]):r[t[1]];return null!=i?this.renderTokens(this.parse(i),n,r,i):void 0}},f.prototype.unescapedValue=function(t,e){var n=e.lookup(t[1]);return null!=n?n:void 0},f.prototype.escapedValue=function(e,n){var r=n.lookup(e[1]);return null!=r?t.escape(r):void 0},f.prototype.rawValue=function(t){return t[1]},t.name="mustache.js",t.version="2.2.0",t.tags=["{{","}}"];var U=new f;t.clearCache=function(){return U.clearCache()},t.parse=function(t,e){return U.parse(t,e)},t.render=function(t,e,r){if("string"!=typeof t)throw new TypeError('Invalid template! Template should be a "string" but "'+n(t)+'" was given as the first argument for mustache#render(template, view, partials)');return U.render(t,e,r)},t.to_html=function(n,r,i,o){var s=t.render(n,r,i);return e(o)?void o(s):s},t.escape=a,t.Scanner=c,t.Context=p,t.Writer=f})},{}]},{},[1]);