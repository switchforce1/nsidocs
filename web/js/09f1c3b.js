/*! jQuery v2.2.3 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,
e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/* @license
morris.js v0.5.0
Copyright 2014 Olly Smith All rights reserved.
Licensed under the BSD-2-Clause License.
*/
(function(){var a,b,c,d,e=[].slice,f=function(a,b){return function(){return a.apply(b,arguments)}},g={}.hasOwnProperty,h=function(a,b){function c(){this.constructor=a}for(var d in b)g.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},i=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=window.Morris={},a=jQuery,b.EventEmitter=function(){function a(){}return a.prototype.on=function(a,b){return null==this.handlers&&(this.handlers={}),null==this.handlers[a]&&(this.handlers[a]=[]),this.handlers[a].push(b),this},a.prototype.fire=function(){var a,b,c,d,f,g,h;if(c=arguments[0],a=2<=arguments.length?e.call(arguments,1):[],null!=this.handlers&&null!=this.handlers[c]){for(g=this.handlers[c],h=[],d=0,f=g.length;f>d;d++)b=g[d],h.push(b.apply(null,a));return h}},a}(),b.commas=function(a){var b,c,d,e;return null!=a?(d=0>a?"-":"",b=Math.abs(a),c=Math.floor(b).toFixed(0),d+=c.replace(/(?=(?:\d{3})+$)(?!^)/g,","),e=b.toString(),e.length>c.length&&(d+=e.slice(c.length)),d):"-"},b.pad2=function(a){return(10>a?"0":"")+a},b.Grid=function(c){function d(b){this.resizeHandler=f(this.resizeHandler,this);var c=this;if(this.el="string"==typeof b.element?a(document.getElementById(b.element)):a(b.element),null==this.el||0===this.el.length)throw new Error("Graph container element not found");"static"===this.el.css("position")&&this.el.css("position","relative"),this.options=a.extend({},this.gridDefaults,this.defaults||{},b),"string"==typeof this.options.units&&(this.options.postUnits=b.units),this.raphael=new Raphael(this.el[0]),this.elementWidth=null,this.elementHeight=null,this.dirty=!1,this.selectFrom=null,this.init&&this.init(),this.setData(this.options.data),this.el.bind("mousemove",function(a){var b,d,e,f,g;return d=c.el.offset(),g=a.pageX-d.left,c.selectFrom?(b=c.data[c.hitTest(Math.min(g,c.selectFrom))]._x,e=c.data[c.hitTest(Math.max(g,c.selectFrom))]._x,f=e-b,c.selectionRect.attr({x:b,width:f})):c.fire("hovermove",g,a.pageY-d.top)}),this.el.bind("mouseleave",function(){return c.selectFrom&&(c.selectionRect.hide(),c.selectFrom=null),c.fire("hoverout")}),this.el.bind("touchstart touchmove touchend",function(a){var b,d;return d=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0],b=c.el.offset(),c.fire("hovermove",d.pageX-b.left,d.pageY-b.top)}),this.el.bind("click",function(a){var b;return b=c.el.offset(),c.fire("gridclick",a.pageX-b.left,a.pageY-b.top)}),this.options.rangeSelect&&(this.selectionRect=this.raphael.rect(0,0,0,this.el.innerHeight()).attr({fill:this.options.rangeSelectColor,stroke:!1}).toBack().hide(),this.el.bind("mousedown",function(a){var b;return b=c.el.offset(),c.startRange(a.pageX-b.left)}),this.el.bind("mouseup",function(a){var b;return b=c.el.offset(),c.endRange(a.pageX-b.left),c.fire("hovermove",a.pageX-b.left,a.pageY-b.top)})),this.options.resize&&a(window).bind("resize",function(){return null!=c.timeoutId&&window.clearTimeout(c.timeoutId),c.timeoutId=window.setTimeout(c.resizeHandler,100)}),this.el.css("-webkit-tap-highlight-color","rgba(0,0,0,0)"),this.postInit&&this.postInit()}return h(d,c),d.prototype.gridDefaults={dateFormat:null,axes:!0,grid:!0,gridLineColor:"#aaa",gridStrokeWidth:.5,gridTextColor:"#888",gridTextSize:12,gridTextFamily:"sans-serif",gridTextWeight:"normal",hideHover:!1,yLabelFormat:null,xLabelAngle:0,numLines:5,padding:25,parseTime:!0,postUnits:"",preUnits:"",ymax:"auto",ymin:"auto 0",goals:[],goalStrokeWidth:1,goalLineColors:["#666633","#999966","#cc6666","#663333"],events:[],eventStrokeWidth:1,eventLineColors:["#005a04","#ccffbb","#3a5f0b","#005502"],rangeSelect:null,rangeSelectColor:"#eef",resize:!1},d.prototype.setData=function(a,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;return null==c&&(c=!0),this.options.data=a,null==a||0===a.length?(this.data=[],this.raphael.clear(),null!=this.hover&&this.hover.hide(),void 0):(o=this.cumulative?0:null,p=this.cumulative?0:null,this.options.goals.length>0&&(h=Math.min.apply(Math,this.options.goals),g=Math.max.apply(Math,this.options.goals),p=null!=p?Math.min(p,h):h,o=null!=o?Math.max(o,g):g),this.data=function(){var c,d,g;for(g=[],f=c=0,d=a.length;d>c;f=++c)j=a[f],i={src:j},i.label=j[this.options.xkey],this.options.parseTime?(i.x=b.parseDate(i.label),this.options.dateFormat?i.label=this.options.dateFormat(i.x):"number"==typeof i.label&&(i.label=new Date(i.label).toString())):(i.x=f,this.options.xLabelFormat&&(i.label=this.options.xLabelFormat(i))),l=0,i.y=function(){var a,b,c,d;for(c=this.options.ykeys,d=[],e=a=0,b=c.length;b>a;e=++a)n=c[e],q=j[n],"string"==typeof q&&(q=parseFloat(q)),null!=q&&"number"!=typeof q&&(q=null),null!=q&&(this.cumulative?l+=q:null!=o?(o=Math.max(q,o),p=Math.min(q,p)):o=p=q),this.cumulative&&null!=l&&(o=Math.max(l,o),p=Math.min(l,p)),d.push(q);return d}.call(this),g.push(i);return g}.call(this),this.options.parseTime&&(this.data=this.data.sort(function(a,b){return(a.x>b.x)-(b.x>a.x)})),this.xmin=this.data[0].x,this.xmax=this.data[this.data.length-1].x,this.events=[],this.options.events.length>0&&(this.events=this.options.parseTime?function(){var a,c,e,f;for(e=this.options.events,f=[],a=0,c=e.length;c>a;a++)d=e[a],f.push(b.parseDate(d));return f}.call(this):this.options.events,this.xmax=Math.max(this.xmax,Math.max.apply(Math,this.events)),this.xmin=Math.min(this.xmin,Math.min.apply(Math,this.events))),this.xmin===this.xmax&&(this.xmin-=1,this.xmax+=1),this.ymin=this.yboundary("min",p),this.ymax=this.yboundary("max",o),this.ymin===this.ymax&&(p&&(this.ymin-=1),this.ymax+=1),((r=this.options.axes)===!0||"both"===r||"y"===r||this.options.grid===!0)&&(this.options.ymax===this.gridDefaults.ymax&&this.options.ymin===this.gridDefaults.ymin?(this.grid=this.autoGridLines(this.ymin,this.ymax,this.options.numLines),this.ymin=Math.min(this.ymin,this.grid[0]),this.ymax=Math.max(this.ymax,this.grid[this.grid.length-1])):(k=(this.ymax-this.ymin)/(this.options.numLines-1),this.grid=function(){var a,b,c,d;for(d=[],m=a=b=this.ymin,c=this.ymax;k>0?c>=a:a>=c;m=a+=k)d.push(m);return d}.call(this))),this.dirty=!0,c?this.redraw():void 0)},d.prototype.yboundary=function(a,b){var c,d;return c=this.options["y"+a],"string"==typeof c?"auto"===c.slice(0,4)?c.length>5?(d=parseInt(c.slice(5),10),null==b?d:Math[a](b,d)):null!=b?b:0:parseInt(c,10):c},d.prototype.autoGridLines=function(a,b,c){var d,e,f,g,h,i,j,k,l;return h=b-a,l=Math.floor(Math.log(h)/Math.log(10)),j=Math.pow(10,l),e=Math.floor(a/j)*j,d=Math.ceil(b/j)*j,i=(d-e)/(c-1),1===j&&i>1&&Math.ceil(i)!==i&&(i=Math.ceil(i),d=e+i*(c-1)),0>e&&d>0&&(e=Math.floor(a/i)*i,d=Math.ceil(b/i)*i),1>i?(g=Math.floor(Math.log(i)/Math.log(10)),f=function(){var a,b;for(b=[],k=a=e;i>0?d>=a:a>=d;k=a+=i)b.push(parseFloat(k.toFixed(1-g)));return b}()):f=function(){var a,b;for(b=[],k=a=e;i>0?d>=a:a>=d;k=a+=i)b.push(k);return b}(),f},d.prototype._calc=function(){var a,b,c,d,e,f,g,h;return e=this.el.width(),c=this.el.height(),(this.elementWidth!==e||this.elementHeight!==c||this.dirty)&&(this.elementWidth=e,this.elementHeight=c,this.dirty=!1,this.left=this.options.padding,this.right=this.elementWidth-this.options.padding,this.top=this.options.padding,this.bottom=this.elementHeight-this.options.padding,((g=this.options.axes)===!0||"both"===g||"y"===g)&&(f=function(){var a,c,d,e;for(d=this.grid,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(this.measureText(this.yAxisFormat(b)).width);return e}.call(this),this.left+=Math.max.apply(Math,f)),((h=this.options.axes)===!0||"both"===h||"x"===h)&&(a=function(){var a,b,c;for(c=[],d=a=0,b=this.data.length;b>=0?b>a:a>b;d=b>=0?++a:--a)c.push(this.measureText(this.data[d].text,-this.options.xLabelAngle).height);return c}.call(this),this.bottom-=Math.max.apply(Math,a)),this.width=Math.max(1,this.right-this.left),this.height=Math.max(1,this.bottom-this.top),this.dx=this.width/(this.xmax-this.xmin),this.dy=this.height/(this.ymax-this.ymin),this.calc)?this.calc():void 0},d.prototype.transY=function(a){return this.bottom-(a-this.ymin)*this.dy},d.prototype.transX=function(a){return 1===this.data.length?(this.left+this.right)/2:this.left+(a-this.xmin)*this.dx},d.prototype.redraw=function(){return this.raphael.clear(),this._calc(),this.drawGrid(),this.drawGoals(),this.drawEvents(),this.draw?this.draw():void 0},d.prototype.measureText=function(a,b){var c,d;return null==b&&(b=0),d=this.raphael.text(100,100,a).attr("font-size",this.options.gridTextSize).attr("font-family",this.options.gridTextFamily).attr("font-weight",this.options.gridTextWeight).rotate(b),c=d.getBBox(),d.remove(),c},d.prototype.yAxisFormat=function(a){return this.yLabelFormat(a)},d.prototype.yLabelFormat=function(a){return"function"==typeof this.options.yLabelFormat?this.options.yLabelFormat(a):""+this.options.preUnits+b.commas(a)+this.options.postUnits},d.prototype.drawGrid=function(){var a,b,c,d,e,f,g,h;if(this.options.grid!==!1||(e=this.options.axes)===!0||"both"===e||"y"===e){for(f=this.grid,h=[],c=0,d=f.length;d>c;c++)a=f[c],b=this.transY(a),((g=this.options.axes)===!0||"both"===g||"y"===g)&&this.drawYAxisLabel(this.left-this.options.padding/2,b,this.yAxisFormat(a)),this.options.grid?h.push(this.drawGridLine("M"+this.left+","+b+"H"+(this.left+this.width))):h.push(void 0);return h}},d.prototype.drawGoals=function(){var a,b,c,d,e,f,g;for(f=this.options.goals,g=[],c=d=0,e=f.length;e>d;c=++d)b=f[c],a=this.options.goalLineColors[c%this.options.goalLineColors.length],g.push(this.drawGoal(b,a));return g},d.prototype.drawEvents=function(){var a,b,c,d,e,f,g;for(f=this.events,g=[],c=d=0,e=f.length;e>d;c=++d)b=f[c],a=this.options.eventLineColors[c%this.options.eventLineColors.length],g.push(this.drawEvent(b,a));return g},d.prototype.drawGoal=function(a,b){return this.raphael.path("M"+this.left+","+this.transY(a)+"H"+this.right).attr("stroke",b).attr("stroke-width",this.options.goalStrokeWidth)},d.prototype.drawEvent=function(a,b){return this.raphael.path("M"+this.transX(a)+","+this.bottom+"V"+this.top).attr("stroke",b).attr("stroke-width",this.options.eventStrokeWidth)},d.prototype.drawYAxisLabel=function(a,b,c){return this.raphael.text(a,b,c).attr("font-size",this.options.gridTextSize).attr("font-family",this.options.gridTextFamily).attr("font-weight",this.options.gridTextWeight).attr("fill",this.options.gridTextColor).attr("text-anchor","end")},d.prototype.drawGridLine=function(a){return this.raphael.path(a).attr("stroke",this.options.gridLineColor).attr("stroke-width",this.options.gridStrokeWidth)},d.prototype.startRange=function(a){return this.hover.hide(),this.selectFrom=a,this.selectionRect.attr({x:a,width:0}).show()},d.prototype.endRange=function(a){var b,c;return this.selectFrom?(c=Math.min(this.selectFrom,a),b=Math.max(this.selectFrom,a),this.options.rangeSelect.call(this.el,{start:this.data[this.hitTest(c)].x,end:this.data[this.hitTest(b)].x}),this.selectFrom=null):void 0},d.prototype.resizeHandler=function(){return this.timeoutId=null,this.raphael.setSize(this.el.width(),this.el.height()),this.redraw()},d}(b.EventEmitter),b.parseDate=function(a){var b,c,d,e,f,g,h,i,j,k,l;return"number"==typeof a?a:(c=a.match(/^(\d+) Q(\d)$/),e=a.match(/^(\d+)-(\d+)$/),f=a.match(/^(\d+)-(\d+)-(\d+)$/),h=a.match(/^(\d+) W(\d+)$/),i=a.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/),j=a.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/),c?new Date(parseInt(c[1],10),3*parseInt(c[2],10)-1,1).getTime():e?new Date(parseInt(e[1],10),parseInt(e[2],10)-1,1).getTime():f?new Date(parseInt(f[1],10),parseInt(f[2],10)-1,parseInt(f[3],10)).getTime():h?(k=new Date(parseInt(h[1],10),0,1),4!==k.getDay()&&k.setMonth(0,1+(4-k.getDay()+7)%7),k.getTime()+6048e5*parseInt(h[2],10)):i?i[6]?(g=0,"Z"!==i[6]&&(g=60*parseInt(i[8],10)+parseInt(i[9],10),"+"===i[7]&&(g=0-g)),Date.UTC(parseInt(i[1],10),parseInt(i[2],10)-1,parseInt(i[3],10),parseInt(i[4],10),parseInt(i[5],10)+g)):new Date(parseInt(i[1],10),parseInt(i[2],10)-1,parseInt(i[3],10),parseInt(i[4],10),parseInt(i[5],10)).getTime():j?(l=parseFloat(j[6]),b=Math.floor(l),d=Math.round(1e3*(l-b)),j[8]?(g=0,"Z"!==j[8]&&(g=60*parseInt(j[10],10)+parseInt(j[11],10),"+"===j[9]&&(g=0-g)),Date.UTC(parseInt(j[1],10),parseInt(j[2],10)-1,parseInt(j[3],10),parseInt(j[4],10),parseInt(j[5],10)+g,b,d)):new Date(parseInt(j[1],10),parseInt(j[2],10)-1,parseInt(j[3],10),parseInt(j[4],10),parseInt(j[5],10),b,d).getTime()):new Date(parseInt(a,10),0,1).getTime())},b.Hover=function(){function c(c){null==c&&(c={}),this.options=a.extend({},b.Hover.defaults,c),this.el=a("<div class='"+this.options["class"]+"'></div>"),this.el.hide(),this.options.parent.append(this.el)}return c.defaults={"class":"morris-hover morris-default-style"},c.prototype.update=function(a,b,c){return a?(this.html(a),this.show(),this.moveTo(b,c)):this.hide()},c.prototype.html=function(a){return this.el.html(a)},c.prototype.moveTo=function(a,b){var c,d,e,f,g,h;return g=this.options.parent.innerWidth(),f=this.options.parent.innerHeight(),d=this.el.outerWidth(),c=this.el.outerHeight(),e=Math.min(Math.max(0,a-d/2),g-d),null!=b?(h=b-c-10,0>h&&(h=b+10,h+c>f&&(h=f/2-c/2))):h=f/2-c/2,this.el.css({left:e+"px",top:parseInt(h)+"px"})},c.prototype.show=function(){return this.el.show()},c.prototype.hide=function(){return this.el.hide()},c}(),b.Line=function(a){function c(a){return this.hilight=f(this.hilight,this),this.onHoverOut=f(this.onHoverOut,this),this.onHoverMove=f(this.onHoverMove,this),this.onGridClick=f(this.onGridClick,this),this instanceof b.Line?(c.__super__.constructor.call(this,a),void 0):new b.Line(a)}return h(c,a),c.prototype.init=function(){return"always"!==this.options.hideHover?(this.hover=new b.Hover({parent:this.el}),this.on("hovermove",this.onHoverMove),this.on("hoverout",this.onHoverOut),this.on("gridclick",this.onGridClick)):void 0},c.prototype.defaults={lineWidth:3,pointSize:4,lineColors:["#0b62a4","#7A92A3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],pointStrokeWidths:[1],pointStrokeColors:["#ffffff"],pointFillColors:[],smooth:!0,xLabels:"auto",xLabelFormat:null,xLabelMargin:24,hideHover:!1},c.prototype.calc=function(){return this.calcPoints(),this.generatePaths()},c.prototype.calcPoints=function(){var a,b,c,d,e,f;for(e=this.data,f=[],c=0,d=e.length;d>c;c++)a=e[c],a._x=this.transX(a.x),a._y=function(){var c,d,e,f;for(e=a.y,f=[],c=0,d=e.length;d>c;c++)b=e[c],null!=b?f.push(this.transY(b)):f.push(b);return f}.call(this),f.push(a._ymax=Math.min.apply(Math,[this.bottom].concat(function(){var c,d,e,f;for(e=a._y,f=[],c=0,d=e.length;d>c;c++)b=e[c],null!=b&&f.push(b);return f}())));return f},c.prototype.hitTest=function(a){var b,c,d,e,f;if(0===this.data.length)return null;for(f=this.data.slice(1),b=d=0,e=f.length;e>d&&(c=f[b],!(a<(c._x+this.data[b]._x)/2));b=++d);return b},c.prototype.onGridClick=function(a,b){var c;return c=this.hitTest(a),this.fire("click",c,this.data[c].src,a,b)},c.prototype.onHoverMove=function(a){var b;return b=this.hitTest(a),this.displayHoverForRow(b)},c.prototype.onHoverOut=function(){return this.options.hideHover!==!1?this.displayHoverForRow(null):void 0},c.prototype.displayHoverForRow=function(a){var b;return null!=a?((b=this.hover).update.apply(b,this.hoverContentForRow(a)),this.hilight(a)):(this.hover.hide(),this.hilight())},c.prototype.hoverContentForRow=function(a){var b,c,d,e,f,g,h;for(d=this.data[a],b="<div class='morris-hover-row-label'>"+d.label+"</div>",h=d.y,c=f=0,g=h.length;g>f;c=++f)e=h[c],b+="<div class='morris-hover-point' style='color: "+this.colorFor(d,c,"label")+"'>\n  "+this.options.labels[c]+":\n  "+this.yLabelFormat(e)+"\n</div>";return"function"==typeof this.options.hoverCallback&&(b=this.options.hoverCallback(a,this.options,b,d.src)),[b,d._x,d._ymax]},c.prototype.generatePaths=function(){var a,c,d,e;return this.paths=function(){var f,g,h,j;for(j=[],c=f=0,g=this.options.ykeys.length;g>=0?g>f:f>g;c=g>=0?++f:--f)e="boolean"==typeof this.options.smooth?this.options.smooth:(h=this.options.ykeys[c],i.call(this.options.smooth,h)>=0),a=function(){var a,b,e,f;for(e=this.data,f=[],a=0,b=e.length;b>a;a++)d=e[a],void 0!==d._y[c]&&f.push({x:d._x,y:d._y[c]});return f}.call(this),a.length>1?j.push(b.Line.createPath(a,e,this.bottom)):j.push(null);return j}.call(this)},c.prototype.draw=function(){var a;return((a=this.options.axes)===!0||"both"===a||"x"===a)&&this.drawXAxis(),this.drawSeries(),this.options.hideHover===!1?this.displayHoverForRow(this.data.length-1):void 0},c.prototype.drawXAxis=function(){var a,c,d,e,f,g,h,i,j,k,l=this;for(h=this.bottom+this.options.padding/2,f=null,e=null,a=function(a,b){var c,d,g,i,j;return c=l.drawXAxisLabel(l.transX(b),h,a),j=c.getBBox(),c.transform("r"+-l.options.xLabelAngle),d=c.getBBox(),c.transform("t0,"+d.height/2+"..."),0!==l.options.xLabelAngle&&(i=-.5*j.width*Math.cos(l.options.xLabelAngle*Math.PI/180),c.transform("t"+i+",0...")),d=c.getBBox(),(null==f||f>=d.x+d.width||null!=e&&e>=d.x)&&d.x>=0&&d.x+d.width<l.el.width()?(0!==l.options.xLabelAngle&&(g=1.25*l.options.gridTextSize/Math.sin(l.options.xLabelAngle*Math.PI/180),e=d.x-g),f=d.x-l.options.xLabelMargin):c.remove()},d=this.options.parseTime?1===this.data.length&&"auto"===this.options.xLabels?[[this.data[0].label,this.data[0].x]]:b.labelSeries(this.xmin,this.xmax,this.width,this.options.xLabels,this.options.xLabelFormat):function(){var a,b,c,d;for(c=this.data,d=[],a=0,b=c.length;b>a;a++)g=c[a],d.push([g.label,g.x]);return d}.call(this),d.reverse(),k=[],i=0,j=d.length;j>i;i++)c=d[i],k.push(a(c[0],c[1]));return k},c.prototype.drawSeries=function(){var a,b,c,d,e,f;for(this.seriesPoints=[],a=b=d=this.options.ykeys.length-1;0>=d?0>=b:b>=0;a=0>=d?++b:--b)this._drawLineFor(a);for(f=[],a=c=e=this.options.ykeys.length-1;0>=e?0>=c:c>=0;a=0>=e?++c:--c)f.push(this._drawPointFor(a));return f},c.prototype._drawPointFor=function(a){var b,c,d,e,f,g;for(this.seriesPoints[a]=[],f=this.data,g=[],d=0,e=f.length;e>d;d++)c=f[d],b=null,null!=c._y[a]&&(b=this.drawLinePoint(c._x,c._y[a],this.colorFor(c,a,"point"),a)),g.push(this.seriesPoints[a].push(b));return g},c.prototype._drawLineFor=function(a){var b;return b=this.paths[a],null!==b?this.drawLinePath(b,this.colorFor(null,a,"line"),a):void 0},c.createPath=function(a,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;for(k="",c&&(g=b.Line.gradients(a)),l={y:null},h=q=0,r=a.length;r>q;h=++q)e=a[h],null!=e.y&&(null!=l.y?c?(f=g[h],j=g[h-1],i=(e.x-l.x)/4,m=l.x+i,o=Math.min(d,l.y+i*j),n=e.x-i,p=Math.min(d,e.y-i*f),k+="C"+m+","+o+","+n+","+p+","+e.x+","+e.y):k+="L"+e.x+","+e.y:c&&null==g[h]||(k+="M"+e.x+","+e.y)),l=e;return k},c.gradients=function(a){var b,c,d,e,f,g,h,i;for(c=function(a,b){return(a.y-b.y)/(a.x-b.x)},i=[],d=g=0,h=a.length;h>g;d=++g)b=a[d],null!=b.y?(e=a[d+1]||{y:null},f=a[d-1]||{y:null},null!=f.y&&null!=e.y?i.push(c(f,e)):null!=f.y?i.push(c(f,b)):null!=e.y?i.push(c(b,e)):i.push(null)):i.push(null);return i},c.prototype.hilight=function(a){var b,c,d,e,f;if(null!==this.prevHilight&&this.prevHilight!==a)for(b=c=0,e=this.seriesPoints.length-1;e>=0?e>=c:c>=e;b=e>=0?++c:--c)this.seriesPoints[b][this.prevHilight]&&this.seriesPoints[b][this.prevHilight].animate(this.pointShrinkSeries(b));if(null!==a&&this.prevHilight!==a)for(b=d=0,f=this.seriesPoints.length-1;f>=0?f>=d:d>=f;b=f>=0?++d:--d)this.seriesPoints[b][a]&&this.seriesPoints[b][a].animate(this.pointGrowSeries(b));return this.prevHilight=a},c.prototype.colorFor=function(a,b,c){return"function"==typeof this.options.lineColors?this.options.lineColors.call(this,a,b,c):"point"===c?this.options.pointFillColors[b%this.options.pointFillColors.length]||this.options.lineColors[b%this.options.lineColors.length]:this.options.lineColors[b%this.options.lineColors.length]},c.prototype.drawXAxisLabel=function(a,b,c){return this.raphael.text(a,b,c).attr("font-size",this.options.gridTextSize).attr("font-family",this.options.gridTextFamily).attr("font-weight",this.options.gridTextWeight).attr("fill",this.options.gridTextColor)},c.prototype.drawLinePath=function(a,b,c){return this.raphael.path(a).attr("stroke",b).attr("stroke-width",this.lineWidthForSeries(c))},c.prototype.drawLinePoint=function(a,b,c,d){return this.raphael.circle(a,b,this.pointSizeForSeries(d)).attr("fill",c).attr("stroke-width",this.pointStrokeWidthForSeries(d)).attr("stroke",this.pointStrokeColorForSeries(d))},c.prototype.pointStrokeWidthForSeries=function(a){return this.options.pointStrokeWidths[a%this.options.pointStrokeWidths.length]},c.prototype.pointStrokeColorForSeries=function(a){return this.options.pointStrokeColors[a%this.options.pointStrokeColors.length]},c.prototype.lineWidthForSeries=function(a){return this.options.lineWidth instanceof Array?this.options.lineWidth[a%this.options.lineWidth.length]:this.options.lineWidth},c.prototype.pointSizeForSeries=function(a){return this.options.pointSize instanceof Array?this.options.pointSize[a%this.options.pointSize.length]:this.options.pointSize},c.prototype.pointGrowSeries=function(a){return Raphael.animation({r:this.pointSizeForSeries(a)+3},25,"linear")},c.prototype.pointShrinkSeries=function(a){return Raphael.animation({r:this.pointSizeForSeries(a)},25,"linear")},c}(b.Grid),b.labelSeries=function(c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r;if(j=200*(d-c)/e,i=new Date(c),n=b.LABEL_SPECS[f],void 0===n)for(r=b.AUTO_LABEL_ORDER,p=0,q=r.length;q>p;p++)if(k=r[p],m=b.LABEL_SPECS[k],j>=m.span){n=m;break}for(void 0===n&&(n=b.LABEL_SPECS.second),g&&(n=a.extend({},n,{fmt:g})),h=n.start(i),l=[];(o=h.getTime())<=d;)o>=c&&l.push([n.fmt(h),o]),n.incr(h);return l},c=function(a){return{span:60*a*1e3,start:function(a){return new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours())},fmt:function(a){return""+b.pad2(a.getHours())+":"+b.pad2(a.getMinutes())},incr:function(b){return b.setUTCMinutes(b.getUTCMinutes()+a)}}},d=function(a){return{span:1e3*a,start:function(a){return new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes())},fmt:function(a){return""+b.pad2(a.getHours())+":"+b.pad2(a.getMinutes())+":"+b.pad2(a.getSeconds())},incr:function(b){return b.setUTCSeconds(b.getUTCSeconds()+a)}}},b.LABEL_SPECS={decade:{span:1728e8,start:function(a){return new Date(a.getFullYear()-a.getFullYear()%10,0,1)},fmt:function(a){return""+a.getFullYear()},incr:function(a){return a.setFullYear(a.getFullYear()+10)}},year:{span:1728e7,start:function(a){return new Date(a.getFullYear(),0,1)},fmt:function(a){return""+a.getFullYear()},incr:function(a){return a.setFullYear(a.getFullYear()+1)}},month:{span:24192e5,start:function(a){return new Date(a.getFullYear(),a.getMonth(),1)},fmt:function(a){return""+a.getFullYear()+"-"+b.pad2(a.getMonth()+1)},incr:function(a){return a.setMonth(a.getMonth()+1)}},week:{span:6048e5,start:function(a){return new Date(a.getFullYear(),a.getMonth(),a.getDate())},fmt:function(a){return""+a.getFullYear()+"-"+b.pad2(a.getMonth()+1)+"-"+b.pad2(a.getDate())},incr:function(a){return a.setDate(a.getDate()+7)}},day:{span:864e5,start:function(a){return new Date(a.getFullYear(),a.getMonth(),a.getDate())},fmt:function(a){return""+a.getFullYear()+"-"+b.pad2(a.getMonth()+1)+"-"+b.pad2(a.getDate())},incr:function(a){return a.setDate(a.getDate()+1)}},hour:c(60),"30min":c(30),"15min":c(15),"10min":c(10),"5min":c(5),minute:c(1),"30sec":d(30),"15sec":d(15),"10sec":d(10),"5sec":d(5),second:d(1)},b.AUTO_LABEL_ORDER=["decade","year","month","week","day","hour","30min","15min","10min","5min","minute","30sec","15sec","10sec","5sec","second"],b.Area=function(c){function d(c){var f;return this instanceof b.Area?(f=a.extend({},e,c),this.cumulative=!f.behaveLikeLine,"auto"===f.fillOpacity&&(f.fillOpacity=f.behaveLikeLine?.8:1),d.__super__.constructor.call(this,f),void 0):new b.Area(c)}var e;return h(d,c),e={fillOpacity:"auto",behaveLikeLine:!1},d.prototype.calcPoints=function(){var a,b,c,d,e,f,g;for(f=this.data,g=[],d=0,e=f.length;e>d;d++)a=f[d],a._x=this.transX(a.x),b=0,a._y=function(){var d,e,f,g;for(f=a.y,g=[],d=0,e=f.length;e>d;d++)c=f[d],this.options.behaveLikeLine?g.push(this.transY(c)):(b+=c||0,g.push(this.transY(b)));return g}.call(this),g.push(a._ymax=Math.max.apply(Math,a._y));return g},d.prototype.drawSeries=function(){var a,b,c,d,e,f,g,h;for(this.seriesPoints=[],b=this.options.behaveLikeLine?function(){f=[];for(var a=0,b=this.options.ykeys.length-1;b>=0?b>=a:a>=b;b>=0?a++:a--)f.push(a);return f}.apply(this):function(){g=[];for(var a=e=this.options.ykeys.length-1;0>=e?0>=a:a>=0;0>=e?a++:a--)g.push(a);return g}.apply(this),h=[],c=0,d=b.length;d>c;c++)a=b[c],this._drawFillFor(a),this._drawLineFor(a),h.push(this._drawPointFor(a));return h},d.prototype._drawFillFor=function(a){var b;return b=this.paths[a],null!==b?(b+="L"+this.transX(this.xmax)+","+this.bottom+"L"+this.transX(this.xmin)+","+this.bottom+"Z",this.drawFilledPath(b,this.fillForSeries(a))):void 0},d.prototype.fillForSeries=function(a){var b;return b=Raphael.rgb2hsl(this.colorFor(this.data[a],a,"line")),Raphael.hsl(b.h,this.options.behaveLikeLine?.9*b.s:.75*b.s,Math.min(.98,this.options.behaveLikeLine?1.2*b.l:1.25*b.l))},d.prototype.drawFilledPath=function(a,b){return this.raphael.path(a).attr("fill",b).attr("fill-opacity",this.options.fillOpacity).attr("stroke","none")},d}(b.Line),b.Bar=function(c){function d(c){return this.onHoverOut=f(this.onHoverOut,this),this.onHoverMove=f(this.onHoverMove,this),this.onGridClick=f(this.onGridClick,this),this instanceof b.Bar?(d.__super__.constructor.call(this,a.extend({},c,{parseTime:!1})),void 0):new b.Bar(c)}return h(d,c),d.prototype.init=function(){return this.cumulative=this.options.stacked,"always"!==this.options.hideHover?(this.hover=new b.Hover({parent:this.el}),this.on("hovermove",this.onHoverMove),this.on("hoverout",this.onHoverOut),this.on("gridclick",this.onGridClick)):void 0},d.prototype.defaults={barSizeRatio:.75,barGap:3,barColors:["#0b62a4","#7a92a3","#4da74d","#afd8f8","#edc240","#cb4b4b","#9440ed"],barOpacity:1,barRadius:[0,0,0,0],xLabelMargin:50},d.prototype.calc=function(){var a;return this.calcBars(),this.options.hideHover===!1?(a=this.hover).update.apply(a,this.hoverContentForRow(this.data.length-1)):void 0},d.prototype.calcBars=function(){var a,b,c,d,e,f,g;for(f=this.data,g=[],a=d=0,e=f.length;e>d;a=++d)b=f[a],b._x=this.left+this.width*(a+.5)/this.data.length,g.push(b._y=function(){var a,d,e,f;for(e=b.y,f=[],a=0,d=e.length;d>a;a++)c=e[a],null!=c?f.push(this.transY(c)):f.push(null);return f}.call(this));return g},d.prototype.draw=function(){var a;return((a=this.options.axes)===!0||"both"===a||"x"===a)&&this.drawXAxis(),this.drawSeries()},d.prototype.drawXAxis=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m;for(j=this.bottom+(this.options.xAxisLabelTopPadding||this.options.padding/2),g=null,f=null,m=[],a=k=0,l=this.data.length;l>=0?l>k:k>l;a=l>=0?++k:--k)h=this.data[this.data.length-1-a],b=this.drawXAxisLabel(h._x,j,h.label),i=b.getBBox(),b.transform("r"+-this.options.xLabelAngle),c=b.getBBox(),b.transform("t0,"+c.height/2+"..."),0!==this.options.xLabelAngle&&(e=-.5*i.width*Math.cos(this.options.xLabelAngle*Math.PI/180),b.transform("t"+e+",0...")),(null==g||g>=c.x+c.width||null!=f&&f>=c.x)&&c.x>=0&&c.x+c.width<this.el.width()?(0!==this.options.xLabelAngle&&(d=1.25*this.options.gridTextSize/Math.sin(this.options.xLabelAngle*Math.PI/180),f=c.x-d),m.push(g=c.x-this.options.xLabelMargin)):m.push(b.remove());return m},d.prototype.drawSeries=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;return c=this.width/this.options.data.length,h=this.options.stacked?1:this.options.ykeys.length,a=(c*this.options.barSizeRatio-this.options.barGap*(h-1))/h,this.options.barSize&&(a=Math.min(a,this.options.barSize)),l=c-a*h-this.options.barGap*(h-1),g=l/2,o=this.ymin<=0&&this.ymax>=0?this.transY(0):null,this.bars=function(){var h,l,p,q;for(p=this.data,q=[],d=h=0,l=p.length;l>h;d=++h)i=p[d],e=0,q.push(function(){var h,l,p,q;for(p=i._y,q=[],j=h=0,l=p.length;l>h;j=++h)n=p[j],null!==n?(o?(m=Math.min(n,o),b=Math.max(n,o)):(m=n,b=this.bottom),f=this.left+d*c+g,this.options.stacked||(f+=j*(a+this.options.barGap)),k=b-m,this.options.verticalGridCondition&&this.options.verticalGridCondition(i.x)&&this.drawBar(this.left+d*c,this.top,c,Math.abs(this.top-this.bottom),this.options.verticalGridColor,this.options.verticalGridOpacity,this.options.barRadius),this.options.stacked&&(m-=e),this.drawBar(f,m,a,k,this.colorFor(i,j,"bar"),this.options.barOpacity,this.options.barRadius),q.push(e+=k)):q.push(null);return q}.call(this));return q}.call(this)},d.prototype.colorFor=function(a,b,c){var d,e;return"function"==typeof this.options.barColors?(d={x:a.x,y:a.y[b],label:a.label},e={index:b,key:this.options.ykeys[b],label:this.options.labels[b]},this.options.barColors.call(this,d,e,c)):this.options.barColors[b%this.options.barColors.length]},d.prototype.hitTest=function(a){return 0===this.data.length?null:(a=Math.max(Math.min(a,this.right),this.left),Math.min(this.data.length-1,Math.floor((a-this.left)/(this.width/this.data.length))))},d.prototype.onGridClick=function(a,b){var c;return c=this.hitTest(a),this.fire("click",c,this.data[c].src,a,b)},d.prototype.onHoverMove=function(a){var b,c;return b=this.hitTest(a),(c=this.hover).update.apply(c,this.hoverContentForRow(b))},d.prototype.onHoverOut=function(){return this.options.hideHover!==!1?this.hover.hide():void 0},d.prototype.hoverContentForRow=function(a){var b,c,d,e,f,g,h,i;for(d=this.data[a],b="<div class='morris-hover-row-label'>"+d.label+"</div>",i=d.y,c=g=0,h=i.length;h>g;c=++g)f=i[c],b+="<div class='morris-hover-point' style='color: "+this.colorFor(d,c,"label")+"'>\n  "+this.options.labels[c]+":\n  "+this.yLabelFormat(f)+"\n</div>";return"function"==typeof this.options.hoverCallback&&(b=this.options.hoverCallback(a,this.options,b,d.src)),e=this.left+(a+.5)*this.width/this.data.length,[b,e]},d.prototype.drawXAxisLabel=function(a,b,c){var d;return d=this.raphael.text(a,b,c).attr("font-size",this.options.gridTextSize).attr("font-family",this.options.gridTextFamily).attr("font-weight",this.options.gridTextWeight).attr("fill",this.options.gridTextColor)},d.prototype.drawBar=function(a,b,c,d,e,f,g){var h,i;return h=Math.max.apply(Math,g),i=0===h||h>d?this.raphael.rect(a,b,c,d):this.raphael.path(this.roundedRect(a,b,c,d,g)),i.attr("fill",e).attr("fill-opacity",f).attr("stroke","none")},d.prototype.roundedRect=function(a,b,c,d,e){return null==e&&(e=[0,0,0,0]),["M",a,e[0]+b,"Q",a,b,a+e[0],b,"L",a+c-e[1],b,"Q",a+c,b,a+c,b+e[1],"L",a+c,b+d-e[2],"Q",a+c,b+d,a+c-e[2],b+d,"L",a+e[3],b+d,"Q",a,b+d,a,b+d-e[3],"Z"]},d}(b.Grid),b.Donut=function(c){function d(c){this.resizeHandler=f(this.resizeHandler,this),this.select=f(this.select,this),this.click=f(this.click,this);var d=this;if(!(this instanceof b.Donut))return new b.Donut(c);if(this.options=a.extend({},this.defaults,c),this.el="string"==typeof c.element?a(document.getElementById(c.element)):a(c.element),null===this.el||0===this.el.length)throw new Error("Graph placeholder not found.");void 0!==c.data&&0!==c.data.length&&(this.raphael=new Raphael(this.el[0]),this.options.resize&&a(window).bind("resize",function(){return null!=d.timeoutId&&window.clearTimeout(d.timeoutId),d.timeoutId=window.setTimeout(d.resizeHandler,100)}),this.setData(c.data))}return h(d,c),d.prototype.defaults={colors:["#0B62A4","#3980B5","#679DC6","#95BBD7","#B0CCE1","#095791","#095085","#083E67","#052C48","#042135"],backgroundColor:"#FFFFFF",labelColor:"#000000",formatter:b.commas,resize:!1},d.prototype.redraw=function(){var a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;for(this.raphael.clear(),c=this.el.width()/2,d=this.el.height()/2,n=(Math.min(c,d)-10)/3,l=0,u=this.values,o=0,r=u.length;r>o;o++)m=u[o],l+=m;for(i=5/(2*n),a=1.9999*Math.PI-i*this.data.length,g=0,f=0,this.segments=[],v=this.values,e=p=0,s=v.length;s>p;e=++p)m=v[e],j=g+i+a*(m/l),k=new b.DonutSegment(c,d,2*n,n,g,j,this.data[e].color||this.options.colors[f%this.options.colors.length],this.options.backgroundColor,f,this.raphael),k.render(),this.segments.push(k),k.on("hover",this.select),k.on("click",this.click),g=j,f+=1;for(this.text1=this.drawEmptyDonutLabel(c,d-10,this.options.labelColor,15,800),this.text2=this.drawEmptyDonutLabel(c,d+10,this.options.labelColor,14),h=Math.max.apply(Math,this.values),f=0,w=this.values,x=[],q=0,t=w.length;t>q;q++){if(m=w[q],m===h){this.select(f);
break}x.push(f+=1)}return x},d.prototype.setData=function(a){var b;return this.data=a,this.values=function(){var a,c,d,e;for(d=this.data,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(parseFloat(b.value));return e}.call(this),this.redraw()},d.prototype.click=function(a){return this.fire("click",a,this.data[a])},d.prototype.select=function(a){var b,c,d,e,f,g;for(g=this.segments,e=0,f=g.length;f>e;e++)c=g[e],c.deselect();return d=this.segments[a],d.select(),b=this.data[a],this.setLabels(b.label,this.options.formatter(b.value,b))},d.prototype.setLabels=function(a,b){var c,d,e,f,g,h,i,j;return c=2*(Math.min(this.el.width()/2,this.el.height()/2)-10)/3,f=1.8*c,e=c/2,d=c/3,this.text1.attr({text:a,transform:""}),g=this.text1.getBBox(),h=Math.min(f/g.width,e/g.height),this.text1.attr({transform:"S"+h+","+h+","+(g.x+g.width/2)+","+(g.y+g.height)}),this.text2.attr({text:b,transform:""}),i=this.text2.getBBox(),j=Math.min(f/i.width,d/i.height),this.text2.attr({transform:"S"+j+","+j+","+(i.x+i.width/2)+","+i.y})},d.prototype.drawEmptyDonutLabel=function(a,b,c,d,e){var f;return f=this.raphael.text(a,b,"").attr("font-size",d).attr("fill",c),null!=e&&f.attr("font-weight",e),f},d.prototype.resizeHandler=function(){return this.timeoutId=null,this.raphael.setSize(this.el.width(),this.el.height()),this.redraw()},d}(b.EventEmitter),b.DonutSegment=function(a){function b(a,b,c,d,e,g,h,i,j,k){this.cx=a,this.cy=b,this.inner=c,this.outer=d,this.color=h,this.backgroundColor=i,this.index=j,this.raphael=k,this.deselect=f(this.deselect,this),this.select=f(this.select,this),this.sin_p0=Math.sin(e),this.cos_p0=Math.cos(e),this.sin_p1=Math.sin(g),this.cos_p1=Math.cos(g),this.is_long=g-e>Math.PI?1:0,this.path=this.calcSegment(this.inner+3,this.inner+this.outer-5),this.selectedPath=this.calcSegment(this.inner+3,this.inner+this.outer),this.hilight=this.calcArc(this.inner)}return h(b,a),b.prototype.calcArcPoints=function(a){return[this.cx+a*this.sin_p0,this.cy+a*this.cos_p0,this.cx+a*this.sin_p1,this.cy+a*this.cos_p1]},b.prototype.calcSegment=function(a,b){var c,d,e,f,g,h,i,j,k,l;return k=this.calcArcPoints(a),c=k[0],e=k[1],d=k[2],f=k[3],l=this.calcArcPoints(b),g=l[0],i=l[1],h=l[2],j=l[3],"M"+c+","+e+("A"+a+","+a+",0,"+this.is_long+",0,"+d+","+f)+("L"+h+","+j)+("A"+b+","+b+",0,"+this.is_long+",1,"+g+","+i)+"Z"},b.prototype.calcArc=function(a){var b,c,d,e,f;return f=this.calcArcPoints(a),b=f[0],d=f[1],c=f[2],e=f[3],"M"+b+","+d+("A"+a+","+a+",0,"+this.is_long+",0,"+c+","+e)},b.prototype.render=function(){var a=this;return this.arc=this.drawDonutArc(this.hilight,this.color),this.seg=this.drawDonutSegment(this.path,this.color,this.backgroundColor,function(){return a.fire("hover",a.index)},function(){return a.fire("click",a.index)})},b.prototype.drawDonutArc=function(a,b){return this.raphael.path(a).attr({stroke:b,"stroke-width":2,opacity:0})},b.prototype.drawDonutSegment=function(a,b,c,d,e){return this.raphael.path(a).attr({fill:b,stroke:c,"stroke-width":3}).hover(d).click(e)},b.prototype.select=function(){return this.selected?void 0:(this.seg.animate({path:this.selectedPath},150,"<>"),this.arc.animate({opacity:1},150,"<>"),this.selected=!0)},b.prototype.deselect=function(){return this.selected?(this.seg.animate({path:this.path},150,"<>"),this.arc.animate({opacity:0},150,"<>"),this.selected=!1):void 0},b}(b.EventEmitter)}).call(this);
/* jquery.sparkline 2.1.2 - http://omnipotent.net/jquery.sparkline/ 
** Licensed under the New BSD License - see above site for details */

(function(a,b,c){(function(a){typeof define=="function"&&define.amd?define(["jquery"],a):jQuery&&!jQuery.fn.sparkline&&a(jQuery)})(function(d){"use strict";var e={},f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L=0;f=function(){return{common:{type:"line",lineColor:"#00f",fillColor:"#cdf",defaultPixelsPerValue:3,width:"auto",height:"auto",composite:!1,tagValuesAttribute:"values",tagOptionsPrefix:"spark",enableTagOptions:!1,enableHighlight:!0,highlightLighten:1.4,tooltipSkipNull:!0,tooltipPrefix:"",tooltipSuffix:"",disableHiddenCheck:!1,numberFormatter:!1,numberDigitGroupCount:3,numberDigitGroupSep:",",numberDecimalMark:".",disableTooltips:!1,disableInteraction:!1},line:{spotColor:"#f80",highlightSpotColor:"#5f5",highlightLineColor:"#f22",spotRadius:1.5,minSpotColor:"#f80",maxSpotColor:"#f80",lineWidth:1,normalRangeMin:c,normalRangeMax:c,normalRangeColor:"#ccc",drawNormalOnTop:!1,chartRangeMin:c,chartRangeMax:c,chartRangeMinX:c,chartRangeMaxX:c,tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')},bar:{barColor:"#3366cc",negBarColor:"#f44",stackedBarColor:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],zeroColor:c,nullColor:c,zeroAxis:!0,barWidth:4,barSpacing:1,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,colorMap:c,tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')},tristate:{barWidth:4,barSpacing:1,posBarColor:"#6f6",negBarColor:"#f44",zeroBarColor:"#999",colorMap:{},tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),tooltipValueLookups:{map:{"-1":"Loss",0:"Draw",1:"Win"}}},discrete:{lineHeight:"auto",thresholdColor:c,thresholdValue:0,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,tooltipFormat:new h("{{prefix}}{{value}}{{suffix}}")},bullet:{targetColor:"#f33",targetWidth:3,performanceColor:"#33f",rangeColors:["#d3dafe","#a8b6ff","#7f94ff"],base:c,tooltipFormat:new h("{{fieldkey:fields}} - {{value}}"),tooltipValueLookups:{fields:{r:"Range",p:"Performance",t:"Target"}}},pie:{offset:0,sliceColors:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],borderWidth:0,borderColor:"#000",tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')},box:{raw:!1,boxLineColor:"#000",boxFillColor:"#cdf",whiskerColor:"#000",outlierLineColor:"#333",outlierFillColor:"#fff",medianColor:"#f00",showOutliers:!0,outlierIQR:1.5,spotRadius:1.5,target:c,targetColor:"#4a2",chartRangeMax:c,chartRangeMin:c,tooltipFormat:new h("{{field:fields}}: {{value}}"),tooltipFormatFieldlistKey:"field",tooltipValueLookups:{fields:{lq:"Lower Quartile",med:"Median",uq:"Upper Quartile",lo:"Left Outlier",ro:"Right Outlier",lw:"Left Whisker",rw:"Right Whisker"}}}}},E='.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}',g=function(){var a,b;return a=function(){this.init.apply(this,arguments)},arguments.length>1?(arguments[0]?(a.prototype=d.extend(new arguments[0],arguments[arguments.length-1]),a._super=arguments[0].prototype):a.prototype=arguments[arguments.length-1],arguments.length>2&&(b=Array.prototype.slice.call(arguments,1,-1),b.unshift(a.prototype),d.extend.apply(d,b))):a.prototype=arguments[0],a.prototype.cls=a,a},d.SPFormatClass=h=g({fre:/\{\{([\w.]+?)(:(.+?))?\}\}/g,precre:/(\w+)\.(\d+)/,init:function(a,b){this.format=a,this.fclass=b},render:function(a,b,d){var e=this,f=a,g,h,i,j,k;return this.format.replace(this.fre,function(){var a;return h=arguments[1],i=arguments[3],g=e.precre.exec(h),g?(k=g[2],h=g[1]):k=!1,j=f[h],j===c?"":i&&b&&b[i]?(a=b[i],a.get?b[i].get(j)||j:b[i][j]||j):(n(j)&&(d.get("numberFormatter")?j=d.get("numberFormatter")(j):j=s(j,k,d.get("numberDigitGroupCount"),d.get("numberDigitGroupSep"),d.get("numberDecimalMark"))),j)})}}),d.spformat=function(a,b){return new h(a,b)},i=function(a,b,c){return a<b?b:a>c?c:a},j=function(a,c){var d;return c===2?(d=b.floor(a.length/2),a.length%2?a[d]:(a[d-1]+a[d])/2):a.length%2?(d=(a.length*c+c)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1]):(d=(a.length*c+2)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1])},k=function(a){var b;switch(a){case"undefined":a=c;break;case"null":a=null;break;case"true":a=!0;break;case"false":a=!1;break;default:b=parseFloat(a),a==b&&(a=b)}return a},l=function(a){var b,c=[];for(b=a.length;b--;)c[b]=k(a[b]);return c},m=function(a,b){var c,d,e=[];for(c=0,d=a.length;c<d;c++)a[c]!==b&&e.push(a[c]);return e},n=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},s=function(a,b,c,e,f){var g,h;a=(b===!1?parseFloat(a).toString():a.toFixed(b)).split(""),g=(g=d.inArray(".",a))<0?a.length:g,g<a.length&&(a[g]=f);for(h=g-c;h>0;h-=c)a.splice(h,0,e);return a.join("")},o=function(a,b,c){var d;for(d=b.length;d--;){if(c&&b[d]===null)continue;if(b[d]!==a)return!1}return!0},p=function(a){var b=0,c;for(c=a.length;c--;)b+=typeof a[c]=="number"?a[c]:0;return b},r=function(a){return d.isArray(a)?a:[a]},q=function(b){var c;a.createStyleSheet?a.createStyleSheet().cssText=b:(c=a.createElement("style"),c.type="text/css",a.getElementsByTagName("head")[0].appendChild(c),c[typeof a.body.style.WebkitAppearance=="string"?"innerText":"innerHTML"]=b)},d.fn.simpledraw=function(b,e,f,g){var h,i;if(f&&(h=this.data("_jqs_vcanvas")))return h;if(d.fn.sparkline.canvas===!1)return!1;if(d.fn.sparkline.canvas===c){var j=a.createElement("canvas");if(!j.getContext||!j.getContext("2d")){if(!a.namespaces||!!a.namespaces.v)return d.fn.sparkline.canvas=!1,!1;a.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML"),d.fn.sparkline.canvas=function(a,b,c,d){return new J(a,b,c)}}else d.fn.sparkline.canvas=function(a,b,c,d){return new I(a,b,c,d)}}return b===c&&(b=d(this).innerWidth()),e===c&&(e=d(this).innerHeight()),h=d.fn.sparkline.canvas(b,e,this,g),i=d(this).data("_jqs_mhandler"),i&&i.registerCanvas(h),h},d.fn.cleardraw=function(){var a=this.data("_jqs_vcanvas");a&&a.reset()},d.RangeMapClass=t=g({init:function(a){var b,c,d=[];for(b in a)a.hasOwnProperty(b)&&typeof b=="string"&&b.indexOf(":")>-1&&(c=b.split(":"),c[0]=c[0].length===0?-Infinity:parseFloat(c[0]),c[1]=c[1].length===0?Infinity:parseFloat(c[1]),c[2]=a[b],d.push(c));this.map=a,this.rangelist=d||!1},get:function(a){var b=this.rangelist,d,e,f;if((f=this.map[a])!==c)return f;if(b)for(d=b.length;d--;){e=b[d];if(e[0]<=a&&e[1]>=a)return e[2]}return c}}),d.range_map=function(a){return new t(a)},u=g({init:function(a,b){var c=d(a);this.$el=c,this.options=b,this.currentPageX=0,this.currentPageY=0,this.el=a,this.splist=[],this.tooltip=null,this.over=!1,this.displayTooltips=!b.get("disableTooltips"),this.highlightEnabled=!b.get("disableHighlight")},registerSparkline:function(a){this.splist.push(a),this.over&&this.updateDisplay()},registerCanvas:function(a){var b=d(a.canvas);this.canvas=a,this.$canvas=b,b.mouseenter(d.proxy(this.mouseenter,this)),b.mouseleave(d.proxy(this.mouseleave,this)),b.click(d.proxy(this.mouseclick,this))},reset:function(a){this.splist=[],this.tooltip&&a&&(this.tooltip.remove(),this.tooltip=c)},mouseclick:function(a){var b=d.Event("sparklineClick");b.originalEvent=a,b.sparklines=this.splist,this.$el.trigger(b)},mouseenter:function(b){d(a.body).unbind("mousemove.jqs"),d(a.body).bind("mousemove.jqs",d.proxy(this.mousemove,this)),this.over=!0,this.currentPageX=b.pageX,this.currentPageY=b.pageY,this.currentEl=b.target,!this.tooltip&&this.displayTooltips&&(this.tooltip=new v(this.options),this.tooltip.updatePosition(b.pageX,b.pageY)),this.updateDisplay()},mouseleave:function(){d(a.body).unbind("mousemove.jqs");var b=this.splist,c=b.length,e=!1,f,g;this.over=!1,this.currentEl=null,this.tooltip&&(this.tooltip.remove(),this.tooltip=null);for(g=0;g<c;g++)f=b[g],f.clearRegionHighlight()&&(e=!0);e&&this.canvas.render()},mousemove:function(a){this.currentPageX=a.pageX,this.currentPageY=a.pageY,this.currentEl=a.target,this.tooltip&&this.tooltip.updatePosition(a.pageX,a.pageY),this.updateDisplay()},updateDisplay:function(){var a=this.splist,b=a.length,c=!1,e=this.$canvas.offset(),f=this.currentPageX-e.left,g=this.currentPageY-e.top,h,i,j,k,l;if(!this.over)return;for(j=0;j<b;j++)i=a[j],k=i.setRegionHighlight(this.currentEl,f,g),k&&(c=!0);if(c){l=d.Event("sparklineRegionChange"),l.sparklines=this.splist,this.$el.trigger(l);if(this.tooltip){h="";for(j=0;j<b;j++)i=a[j],h+=i.getCurrentRegionTooltip();this.tooltip.setContent(h)}this.disableHighlight||this.canvas.render()}k===null&&this.mouseleave()}}),v=g({sizeStyle:"position: static !important;display: block !important;visibility: hidden !important;float: left !important;",init:function(b){var c=b.get("tooltipClassname","jqstooltip"),e=this.sizeStyle,f;this.container=b.get("tooltipContainer")||a.body,this.tooltipOffsetX=b.get("tooltipOffsetX",10),this.tooltipOffsetY=b.get("tooltipOffsetY",12),d("#jqssizetip").remove(),d("#jqstooltip").remove(),this.sizetip=d("<div/>",{id:"jqssizetip",style:e,"class":c}),this.tooltip=d("<div/>",{id:"jqstooltip","class":c}).appendTo(this.container),f=this.tooltip.offset(),this.offsetLeft=f.left,this.offsetTop=f.top,this.hidden=!0,d(window).unbind("resize.jqs scroll.jqs"),d(window).bind("resize.jqs scroll.jqs",d.proxy(this.updateWindowDims,this)),this.updateWindowDims()},updateWindowDims:function(){this.scrollTop=d(window).scrollTop(),this.scrollLeft=d(window).scrollLeft(),this.scrollRight=this.scrollLeft+d(window).width(),this.updatePosition()},getSize:function(a){this.sizetip.html(a).appendTo(this.container),this.width=this.sizetip.width()+1,this.height=this.sizetip.height(),this.sizetip.remove()},setContent:function(a){if(!a){this.tooltip.css("visibility","hidden"),this.hidden=!0;return}this.getSize(a),this.tooltip.html(a).css({width:this.width,height:this.height,visibility:"visible"}),this.hidden&&(this.hidden=!1,this.updatePosition())},updatePosition:function(a,b){if(a===c){if(this.mousex===c)return;a=this.mousex-this.offsetLeft,b=this.mousey-this.offsetTop}else this.mousex=a-=this.offsetLeft,this.mousey=b-=this.offsetTop;if(!this.height||!this.width||this.hidden)return;b-=this.height+this.tooltipOffsetY,a+=this.tooltipOffsetX,b<this.scrollTop&&(b=this.scrollTop),a<this.scrollLeft?a=this.scrollLeft:a+this.width>this.scrollRight&&(a=this.scrollRight-this.width),this.tooltip.css({left:a,top:b})},remove:function(){this.tooltip.remove(),this.sizetip.remove(),this.sizetip=this.tooltip=c,d(window).unbind("resize.jqs scroll.jqs")}}),F=function(){q(E)},d(F),K=[],d.fn.sparkline=function(b,e){return this.each(function(){var f=new d.fn.sparkline.options(this,e),g=d(this),h,i;h=function(){var e,h,i,j,k,l,m;if(b==="html"||b===c){m=this.getAttribute(f.get("tagValuesAttribute"));if(m===c||m===null)m=g.html();e=m.replace(/(^\s*<!--)|(-->\s*$)|\s+/g,"").split(",")}else e=b;h=f.get("width")==="auto"?e.length*f.get("defaultPixelsPerValue"):f.get("width");if(f.get("height")==="auto"){if(!f.get("composite")||!d.data(this,"_jqs_vcanvas"))j=a.createElement("span"),j.innerHTML="a",g.html(j),i=d(j).innerHeight()||d(j).height(),d(j).remove(),j=null}else i=f.get("height");f.get("disableInteraction")?k=!1:(k=d.data(this,"_jqs_mhandler"),k?f.get("composite")||k.reset():(k=new u(this,f),d.data(this,"_jqs_mhandler",k)));if(f.get("composite")&&!d.data(this,"_jqs_vcanvas")){d.data(this,"_jqs_errnotify")||(alert("Attempted to attach a composite sparkline to an element with no existing sparkline"),d.data(this,"_jqs_errnotify",!0));return}l=new(d.fn.sparkline[f.get("type")])(this,e,f,h,i),l.render(),k&&k.registerSparkline(l)};if(d(this).html()&&!f.get("disableHiddenCheck")&&d(this).is(":hidden")||!d(this).parents("body").length){if(!f.get("composite")&&d.data(this,"_jqs_pending"))for(i=K.length;i;i--)K[i-1][0]==this&&K.splice(i-1,1);K.push([this,h]),d.data(this,"_jqs_pending",!0)}else h.call(this)})},d.fn.sparkline.defaults=f(),d.sparkline_display_visible=function(){var a,b,c,e=[];for(b=0,c=K.length;b<c;b++)a=K[b][0],d(a).is(":visible")&&!d(a).parents().is(":hidden")?(K[b][1].call(a),d.data(K[b][0],"_jqs_pending",!1),e.push(b)):!d(a).closest("html").length&&!d.data(a,"_jqs_pending")&&(d.data(K[b][0],"_jqs_pending",!1),e.push(b));for(b=e.length;b;b--)K.splice(e[b-1],1)},d.fn.sparkline.options=g({init:function(a,b){var c,f,g,h;this.userOptions=b=b||{},this.tag=a,this.tagValCache={},f=d.fn.sparkline.defaults,g=f.common,this.tagOptionsPrefix=b.enableTagOptions&&(b.tagOptionsPrefix||g.tagOptionsPrefix),h=this.getTagSetting("type"),h===e?c=f[b.type||g.type]:c=f[h],this.mergedOptions=d.extend({},g,c,b)},getTagSetting:function(a){var b=this.tagOptionsPrefix,d,f,g,h;if(b===!1||b===c)return e;if(this.tagValCache.hasOwnProperty(a))d=this.tagValCache.key;else{d=this.tag.getAttribute(b+a);if(d===c||d===null)d=e;else if(d.substr(0,1)==="["){d=d.substr(1,d.length-2).split(",");for(f=d.length;f--;)d[f]=k(d[f].replace(/(^\s*)|(\s*$)/g,""))}else if(d.substr(0,1)==="{"){g=d.substr(1,d.length-2).split(","),d={};for(f=g.length;f--;)h=g[f].split(":",2),d[h[0].replace(/(^\s*)|(\s*$)/g,"")]=k(h[1].replace(/(^\s*)|(\s*$)/g,""))}else d=k(d);this.tagValCache.key=d}return d},get:function(a,b){var d=this.getTagSetting(a),f;return d!==e?d:(f=this.mergedOptions[a])===c?b:f}}),d.fn.sparkline._base=g({disabled:!1,init:function(a,b,e,f,g){this.el=a,this.$el=d(a),this.values=b,this.options=e,this.width=f,this.height=g,this.currentRegion=c},initTarget:function(){var a=!this.options.get("disableInteraction");(this.target=this.$el.simpledraw(this.width,this.height,this.options.get("composite"),a))?(this.canvasWidth=this.target.pixelWidth,this.canvasHeight=this.target.pixelHeight):this.disabled=!0},render:function(){return this.disabled?(this.el.innerHTML="",!1):!0},getRegion:function(a,b){},setRegionHighlight:function(a,b,d){var e=this.currentRegion,f=!this.options.get("disableHighlight"),g;return b>this.canvasWidth||d>this.canvasHeight||b<0||d<0?null:(g=this.getRegion(a,b,d),e!==g?(e!==c&&f&&this.removeHighlight(),this.currentRegion=g,g!==c&&f&&this.renderHighlight(),!0):!1)},clearRegionHighlight:function(){return this.currentRegion!==c?(this.removeHighlight(),this.currentRegion=c,!0):!1},renderHighlight:function(){this.changeHighlight(!0)},removeHighlight:function(){this.changeHighlight(!1)},changeHighlight:function(a){},getCurrentRegionTooltip:function(){var a=this.options,b="",e=[],f,g,i,j,k,l,m,n,o,p,q,r,s,t;if(this.currentRegion===c)return"";f=this.getCurrentRegionFields(),q=a.get("tooltipFormatter");if(q)return q(this,a,f);a.get("tooltipChartTitle")&&(b+='<div class="jqs jqstitle">'+a.get("tooltipChartTitle")+"</div>\n"),g=this.options.get("tooltipFormat");if(!g)return"";d.isArray(g)||(g=[g]),d.isArray(f)||(f=[f]),m=this.options.get("tooltipFormatFieldlist"),n=this.options.get("tooltipFormatFieldlistKey");if(m&&n){o=[];for(l=f.length;l--;)p=f[l][n],(t=d.inArray(p,m))!=-1&&(o[t]=f[l]);f=o}i=g.length,s=f.length;for(l=0;l<i;l++){r=g[l],typeof r=="string"&&(r=new h(r)),j=r.fclass||"jqsfield";for(t=0;t<s;t++)if(!f[t].isNull||!a.get("tooltipSkipNull"))d.extend(f[t],{prefix:a.get("tooltipPrefix"),suffix:a.get("tooltipSuffix")}),k=r.render(f[t],a.get("tooltipValueLookups"),a),e.push('<div class="'+j+'">'+k+"</div>")}return e.length?b+e.join("\n"):""},getCurrentRegionFields:function(){},calcHighlightColor:function(a,c){var d=c.get("highlightColor"),e=c.get("highlightLighten"),f,g,h,j;if(d)return d;if(e){f=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a)||/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a);if(f){h=[],g=a.length===4?16:1;for(j=0;j<3;j++)h[j]=i(b.round(parseInt(f[j+1],16)*g*e),0,255);return"rgb("+h.join(",")+")"}}return a}}),w={changeHighlight:function(a){var b=this.currentRegion,c=this.target,e=this.regionShapes[b],f;e&&(f=this.renderRegion(b,a),d.isArray(f)||d.isArray(e)?(c.replaceWithShapes(e,f),this.regionShapes[b]=d.map(f,function(a){return a.id})):(c.replaceWithShape(e,f),this.regionShapes[b]=f.id))},render:function(){var a=this.values,b=this.target,c=this.regionShapes,e,f,g,h;if(!this.cls._super.render.call(this))return;for(g=a.length;g--;){e=this.renderRegion(g);if(e)if(d.isArray(e)){f=[];for(h=e.length;h--;)e[h].append(),f.push(e[h].id);c[g]=f}else e.append(),c[g]=e.id;else c[g]=null}b.render()}},d.fn.sparkline.line=x=g(d.fn.sparkline._base,{type:"line",init:function(a,b,c,d,e){x._super.init.call(this,a,b,c,d,e),this.vertices=[],this.regionMap=[],this.xvalues=[],this.yvalues=[],this.yminmax=[],this.hightlightSpotId=null,this.lastShapeId=null,this.initTarget()},getRegion:function(a,b,d){var e,f=this.regionMap;for(e=f.length;e--;)if(f[e]!==null&&b>=f[e][0]&&b<=f[e][1])return f[e][2];return c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.yvalues[a]===null,x:this.xvalues[a],y:this.yvalues[a],color:this.options.get("lineColor"),fillColor:this.options.get("fillColor"),offset:a}},renderHighlight:function(){var a=this.currentRegion,b=this.target,d=this.vertices[a],e=this.options,f=e.get("spotRadius"),g=e.get("highlightSpotColor"),h=e.get("highlightLineColor"),i,j;if(!d)return;f&&g&&(i=b.drawCircle(d[0],d[1],f,c,g),this.highlightSpotId=i.id,b.insertAfterShape(this.lastShapeId,i)),h&&(j=b.drawLine(d[0],this.canvasTop,d[0],this.canvasTop+this.canvasHeight,h),this.highlightLineId=j.id,b.insertAfterShape(this.lastShapeId,j))},removeHighlight:function(){var a=this.target;this.highlightSpotId&&(a.removeShapeId(this.highlightSpotId),this.highlightSpotId=null),this.highlightLineId&&(a.removeShapeId(this.highlightLineId),this.highlightLineId=null)},scanValues:function(){var a=this.values,c=a.length,d=this.xvalues,e=this.yvalues,f=this.yminmax,g,h,i,j,k;for(g=0;g<c;g++)h=a[g],i=typeof a[g]=="string",j=typeof a[g]=="object"&&a[g]instanceof Array,k=i&&a[g].split(":"),i&&k.length===2?(d.push(Number(k[0])),e.push(Number(k[1])),f.push(Number(k[1]))):j?(d.push(h[0]),e.push(h[1]),f.push(h[1])):(d.push(g),a[g]===null||a[g]==="null"?e.push(null):(e.push(Number(h)),f.push(Number(h))));this.options.get("xvalues")&&(d=this.options.get("xvalues")),this.maxy=this.maxyorg=b.max.apply(b,f),this.miny=this.minyorg=b.min.apply(b,f),this.maxx=b.max.apply(b,d),this.minx=b.min.apply(b,d),this.xvalues=d,this.yvalues=e,this.yminmax=f},processRangeOptions:function(){var a=this.options,b=a.get("normalRangeMin"),d=a.get("normalRangeMax");b!==c&&(b<this.miny&&(this.miny=b),d>this.maxy&&(this.maxy=d)),a.get("chartRangeMin")!==c&&(a.get("chartRangeClip")||a.get("chartRangeMin")<this.miny)&&(this.miny=a.get("chartRangeMin")),a.get("chartRangeMax")!==c&&(a.get("chartRangeClip")||a.get("chartRangeMax")>this.maxy)&&(this.maxy=a.get("chartRangeMax")),a.get("chartRangeMinX")!==c&&(a.get("chartRangeClipX")||a.get("chartRangeMinX")<this.minx)&&(this.minx=a.get("chartRangeMinX")),a.get("chartRangeMaxX")!==c&&(a.get("chartRangeClipX")||a.get("chartRangeMaxX")>this.maxx)&&(this.maxx=a.get("chartRangeMaxX"))},drawNormalRange:function(a,d,e,f,g){var h=this.options.get("normalRangeMin"),i=this.options.get("normalRangeMax"),j=d+b.round(e-e*((i-this.miny)/g)),k=b.round(e*(i-h)/g);this.target.drawRect(a,j,f,k,c,this.options.get("normalRangeColor")).append()},render:function(){var a=this.options,e=this.target,f=this.canvasWidth,g=this.canvasHeight,h=this.vertices,i=a.get("spotRadius"),j=this.regionMap,k,l,m,n,o,p,q,r,s,u,v,w,y,z,A,B,C,D,E,F,G,H,I,J,K;if(!x._super.render.call(this))return;this.scanValues(),this.processRangeOptions(),I=this.xvalues,J=this.yvalues;if(!this.yminmax.length||this.yvalues.length<2)return;n=o=0,k=this.maxx-this.minx===0?1:this.maxx-this.minx,l=this.maxy-this.miny===0?1:this.maxy-this.miny,m=this.yvalues.length-1,i&&(f<i*4||g<i*4)&&(i=0);if(i){G=a.get("highlightSpotColor")&&!a.get("disableInteraction");if(G||a.get("minSpotColor")||a.get("spotColor")&&J[m]===this.miny)g-=b.ceil(i);if(G||a.get("maxSpotColor")||a.get("spotColor")&&J[m]===this.maxy)g-=b.ceil(i),n+=b.ceil(i);if(G||(a.get("minSpotColor")||a.get("maxSpotColor"))&&(J[0]===this.miny||J[0]===this.maxy))o+=b.ceil(i),f-=b.ceil(i);if(G||a.get("spotColor")||a.get("minSpotColor")||a.get("maxSpotColor")&&(J[m]===this.miny||J[m]===this.maxy))f-=b.ceil(i)}g--,a.get("normalRangeMin")!==c&&!a.get("drawNormalOnTop")&&this.drawNormalRange(o,n,g,f,l),q=[],r=[q],z=A=null,B=J.length;for(K=0;K<B;K++)s=I[K],v=I[K+1],u=J[K],w=o+b.round((s-this.minx)*(f/k)),y=K<B-1?o+b.round((v-this.minx)*(f/k)):f,A=w+(y-w)/2,j[K]=[z||0,A,K],z=A,u===null?K&&(J[K-1]!==null&&(q=[],r.push(q)),h.push(null)):(u<this.miny&&(u=this.miny),u>this.maxy&&(u=this.maxy),q.length||q.push([w,n+g]),p=[w,n+b.round(g-g*((u-this.miny)/l))],q.push(p),h.push(p));C=[],D=[],E=r.length;for(K=0;K<E;K++)q=r[K],q.length&&(a.get("fillColor")&&(q.push([q[q.length-1][0],n+g]),D.push(q.slice(0)),q.pop()),q.length>2&&(q[0]=[q[0][0],q[1][1]]),C.push(q));E=D.length;for(K=0;K<E;K++)e.drawShape(D[K],a.get("fillColor"),a.get("fillColor")).append();a.get("normalRangeMin")!==c&&a.get("drawNormalOnTop")&&this.drawNormalRange(o,n,g,f,l),E=C.length;for(K=0;K<E;K++)e.drawShape(C[K],a.get("lineColor"),c,a.get("lineWidth")).append();if(i&&a.get("valueSpots")){F=a.get("valueSpots"),F.get===c&&(F=new t(F));for(K=0;K<B;K++)H=F.get(J[K]),H&&e.drawCircle(o+b.round((I[K]-this.minx)*(f/k)),n+b.round(g-g*((J[K]-this.miny)/l)),i,c,H).append()}i&&a.get("spotColor")&&J[m]!==null&&e.drawCircle(o+b.round((I[I.length-1]-this.minx)*(f/k)),n+b.round(g-g*((J[m]-this.miny)/l)),i,c,a.get("spotColor")).append(),this.maxy!==this.minyorg&&(i&&a.get("minSpotColor")&&(s=I[d.inArray(this.minyorg,J)],e.drawCircle(o+b.round((s-this.minx)*(f/k)),n+b.round(g-g*((this.minyorg-this.miny)/l)),i,c,a.get("minSpotColor")).append()),i&&a.get("maxSpotColor")&&(s=I[d.inArray(this.maxyorg,J)],e.drawCircle(o+b.round((s-this.minx)*(f/k)),n+b.round(g-g*((this.maxyorg-this.miny)/l)),i,c,a.get("maxSpotColor")).append())),this.lastShapeId=e.getLastShapeId(),this.canvasTop=n,e.render()}}),d.fn.sparkline.bar=y=g(d.fn.sparkline._base,w,{type:"bar",init:function(a,e,f,g,h){var j=parseInt(f.get("barWidth"),10),n=parseInt(f.get("barSpacing"),10),o=f.get("chartRangeMin"),p=f.get("chartRangeMax"),q=f.get("chartRangeClip"),r=Infinity,s=-Infinity,u,v,w,x,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R;y._super.init.call(this,a,e,f,g,h);for(A=0,B=e.length;A<B;A++){O=e[A],u=typeof O=="string"&&O.indexOf(":")>-1;if(u||d.isArray(O))J=!0,u&&(O=e[A]=l(O.split(":"))),O=m(O,null),v=b.min.apply(b,O),w=b.max.apply(b,O),v<r&&(r=v),w>s&&(s=w)}this.stacked=J,this.regionShapes={},this.barWidth=j,this.barSpacing=n,this.totalBarWidth=j+n,this.width=g=e.length*j+(e.length-1)*n,this.initTarget(),q&&(H=o===c?-Infinity:o,I=p===c?Infinity:p),z=[],x=J?[]:z;var S=[],T=[];for(A=0,B=e.length;A<B;A++)if(J){K=e[A],e[A]=N=[],S[A]=0,x[A]=T[A]=0;for(L=0,M=K.length;L<M;L++)O=N[L]=q?i(K[L],H,I):K[L],O!==null&&(O>0&&(S[A]+=O),r<0&&s>0?O<0?T[A]+=b.abs(O):x[A]+=O:x[A]+=b.abs(O-(O<0?s:r)),z.push(O))}else O=q?i(e[A],H,I):e[A],O=e[A]=k(O),O!==null&&z.push(O);this.max=G=b.max.apply(b,z),this.min=F=b.min.apply(b,z),this.stackMax=s=J?b.max.apply(b,S):G,this.stackMin=r=J?b.min.apply(b,z):F,f.get("chartRangeMin")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMin")<F)&&(F=f.get("chartRangeMin")),f.get("chartRangeMax")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMax")>G)&&(G=f.get("chartRangeMax")),this.zeroAxis=D=f.get("zeroAxis",!0),F<=0&&G>=0&&D?E=0:D==0?E=F:F>0?E=F:E=G,this.xaxisOffset=E,C=J?b.max.apply(b,x)+b.max.apply(b,T):G-F,this.canvasHeightEf=D&&F<0?this.canvasHeight-2:this.canvasHeight-1,F<E?(Q=J&&G>=0?s:G,P=(Q-E)/C*this.canvasHeight,P!==b.ceil(P)&&(this.canvasHeightEf-=2,P=b.ceil(P))):P=this.canvasHeight,this.yoffset=P,d.isArray(f.get("colorMap"))?(this.colorMapByIndex=f.get("colorMap"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=f.get("colorMap"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new t(this.colorMapByValue))),this.range=C},getRegion:function(a,d,e){var f=b.floor(d/this.totalBarWidth);return f<0||f>=this.values.length?c:f},getCurrentRegionFields:function(){var a=this.currentRegion,b=r(this.values[a]),c=[],d,e;for(e=b.length;e--;)d=b[e],c.push({isNull:d===null,value:d,color:this.calcColor(e,d,a),offset:a});return c},calcColor:function(a,b,e){var f=this.colorMapByIndex,g=this.colorMapByValue,h=this.options,i,j;return this.stacked?i=h.get("stackedBarColor"):i=b<0?h.get("negBarColor"):h.get("barColor"),b===0&&h.get("zeroColor")!==c&&(i=h.get("zeroColor")),g&&(j=g.get(b))?i=j:f&&f.length>e&&(i=f[e]),d.isArray(i)?i[a%i.length]:i},renderRegion:function(a,e){var f=this.values[a],g=this.options,h=this.xaxisOffset,i=[],j=this.range,k=this.stacked,l=this.target,m=a*this.totalBarWidth,n=this.canvasHeightEf,p=this.yoffset,q,r,s,t,u,v,w,x,y,z;f=d.isArray(f)?f:[f],w=f.length,x=f[0],t=o(null,f),z=o(h,f,!0);if(t)return g.get("nullColor")?(s=e?g.get("nullColor"):this.calcHighlightColor(g.get("nullColor"),g),q=p>0?p-1:p,l.drawRect(m,q,this.barWidth-1,0,s,s)):c;u=p;for(v=0;v<w;v++){x=f[v];if(k&&x===h){if(!z||y)continue;y=!0}j>0?r=b.floor(n*(b.abs(x-h)/j))+1:r=1,x<h||x===h&&p===0?(q=u,u+=r):(q=p-r,p-=r),s=this.calcColor(v,x,a),e&&(s=this.calcHighlightColor(s,g)),i.push(l.drawRect(m,q,this.barWidth-1,r-1,s,s))}return i.length===1?i[0]:i}}),d.fn.sparkline.tristate=z=g(d.fn.sparkline._base,w,{type:"tristate",init:function(a,b,e,f,g){var h=parseInt(e.get("barWidth"),10),i=parseInt(e.get("barSpacing"),10);z._super.init.call(this,a,b,e,f,g),this.regionShapes={},this.barWidth=h,this.barSpacing=i,this.totalBarWidth=h+i,this.values=d.map(b,Number),this.width=f=b.length*h+(b.length-1)*i,d.isArray(e.get("colorMap"))?(this.colorMapByIndex=e.get("colorMap"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=e.get("colorMap"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new t(this.colorMapByValue))),this.initTarget()},getRegion:function(a,c,d){return b.floor(c/this.totalBarWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],color:this.calcColor(this.values[a],a),offset:a}},calcColor:function(a,b){var c=this.values,d=this.options,e=this.colorMapByIndex,f=this.colorMapByValue,g,h;return f&&(h=f.get(a))?g=h:e&&e.length>b?g=e[b]:c[b]<0?g=d.get("negBarColor"):c[b]>0?g=d.get("posBarColor"):g=d.get("zeroBarColor"),g},renderRegion:function(a,c){var d=this.values,e=this.options,f=this.target,g,h,i,j,k,l;g=f.pixelHeight,i=b.round(g/2),j=a*this.totalBarWidth,d[a]<0?(k=i,h=i-1):d[a]>0?(k=0,h=i-1):(k=i-1,h=2),l=this.calcColor(d[a],a);if(l===null)return;return c&&(l=this.calcHighlightColor(l,e)),f.drawRect(j,k,this.barWidth-1,h-1,l,l)}}),d.fn.sparkline.discrete=A=g(d.fn.sparkline._base,w,{type:"discrete",init:function(a,e,f,g,h){A._super.init.call(this,a,e,f,g,h),this.regionShapes={},this.values=e=d.map(e,Number),this.min=b.min.apply(b,e),this.max=b.max.apply(b,e),this.range=this.max-this.min,this.width=g=f.get("width")==="auto"?e.length*2:this.width,this.interval=b.floor(g/e.length),this.itemWidth=g/e.length,f.get("chartRangeMin")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMin")<this.min)&&(this.min=f.get("chartRangeMin")),f.get("chartRangeMax")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMax")>this.max)&&(this.max=f.get("chartRangeMax")),this.initTarget(),this.target&&(this.lineHeight=f.get("lineHeight")==="auto"?b.round(this.canvasHeight*.3):f.get("lineHeight"))},getRegion:function(a,c,d){return b.floor(c/this.itemWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],offset:a}},renderRegion:function(a,c){var d=this.values,e=this.options,f=this.min,g=this.max,h=this.range,j=this.interval,k=this.target,l=this.canvasHeight,m=this.lineHeight,n=l-m,o,p,q,r;return p=i(d[a],f,g),r=a*j,o=b.round(n-n*((p-f)/h)),q=e.get("thresholdColor")&&p<e.get("thresholdValue")?e.get("thresholdColor"):e.get("lineColor"),c&&(q=this.calcHighlightColor(q,e)),k.drawLine(r,o,r,o+m,q)}}),d.fn.sparkline.bullet=B=g(d.fn.sparkline._base,{type:"bullet",init:function(a,d,e,f,g){var h,i,j;B._super.init.call(this,a,d,e,f,g),this.values=d=l(d),j=d.slice(),j[0]=j[0]===null?j[2]:j[0],j[1]=d[1]===null?j[2]:j[1],h=b.min.apply(b,d),i=b.max.apply(b,d),e.get("base")===c?h=h<0?h:0:h=e.get("base"),this.min=h,this.max=i,this.range=i-h,this.shapes={},this.valueShapes={},this.regiondata={},this.width=f=e.get("width")==="auto"?"4.0em":f,this.target=this.$el.simpledraw(f,g,e.get("composite")),d.length||(this.disabled=!0),this.initTarget()},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{fieldkey:a.substr(0,1),value:this.values[a.substr(1)],region:a}},changeHighlight:function(a){var b=this.currentRegion,c=this.valueShapes[b],d;delete this.shapes[c];switch(b.substr(0,1)){case"r":d=this.renderRange(b.substr(1),a);break;case"p":d=this.renderPerformance(a);break;case"t":d=this.renderTarget(a)}this.valueShapes[b]=d.id,this.shapes[d.id]=b,this.target.replaceWithShape(c,d)},renderRange:function(a,c){var d=this.values[a],e=b.round(this.canvasWidth*((d-this.min)/this.range)),f=this.options.get("rangeColors")[a-2];return c&&(f=this.calcHighlightColor(f,this.options)),this.target.drawRect(0,0,e-1,this.canvasHeight-1,f,f)},renderPerformance:function(a){var c=this.values[1],d=b.round(this.canvasWidth*((c-this.min)/this.range)),e=this.options.get("performanceColor");return a&&(e=this.calcHighlightColor(e,this.options)),this.target.drawRect(0,b.round(this.canvasHeight*.3),d-1,b.round(this.canvasHeight*.4)-1,e,e)},renderTarget:function(a){var c=this.values[0],d=b.round(this.canvasWidth*((c-this.min)/this.range)-this.options.get("targetWidth")/2),e=b.round(this.canvasHeight*.1),f=this.canvasHeight-e*2,g=this.options.get("targetColor");return a&&(g=this.calcHighlightColor(g,this.options)),this.target.drawRect(d,e,this.options.get("targetWidth")-1,f-1,g,g)},render:function(){var a=this.values.length,b=this.target,c,d;if(!B._super.render.call(this))return;for(c=2;c<a;c++)d=this.renderRange(c).append(),this.shapes[d.id]="r"+c,this.valueShapes["r"+c]=d.id;this.values[1]!==null&&(d=this.renderPerformance().append(),this.shapes[d.id]="p1",this.valueShapes.p1=d.id),this.values[0]!==null&&(d=this.renderTarget().append(),this.shapes[d.id]="t0",this.valueShapes.t0=d.id),b.render()}}),d.fn.sparkline.pie=C=g(d.fn.sparkline._base,{type:"pie",init:function(a,c,e,f,g){var h=0,i;C._super.init.call(this,a,c,e,f,g),this.shapes={},this.valueShapes={},this.values=c=d.map(c,Number),e.get("width")==="auto"&&(this.width=this.height);if(c.length>0)for(i=c.length;i--;)h+=c[i];this.total=h,this.initTarget(),this.radius=b.floor(b.min(this.canvasWidth,this.canvasHeight)/2)},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],percent:this.values[a]/this.total*100,color:this.options.get("sliceColors")[a%this.options.get("sliceColors").length],offset:a}},changeHighlight:function(a){var b=this.currentRegion,c=this.renderSlice(b,a),d=this.valueShapes[b];delete this.shapes[d],this.target.replaceWithShape(d,c),this.valueShapes[b]=c.id,this.shapes[c.id]=b},renderSlice:function(a,d){var e=this.target,f=this.options,g=this.radius,h=f.get("borderWidth"),i=f.get("offset"),j=2*b.PI,k=this.values,l=this.total,m=i?2*b.PI*(i/360):0,n,o,p,q,r;q=k.length;for(p=0;p<q;p++){n=m,o=m,l>0&&(o=m+j*(k[p]/l));if(a===p)return r=f.get("sliceColors")[p%f.get("sliceColors").length],d&&(r=this.calcHighlightColor(r,f)),e.drawPieSlice(g,g,g-h,n,o,c,r);m=o}},render:function(){var a=this.target,d=this.values,e=this.options,f=this.radius,g=e.get("borderWidth"),h,i;if(!C._super.render.call(this))return;g&&a.drawCircle(f,f,b.floor(f-g/2),e.get("borderColor"),c,g).append();for(i=d.length;i--;)d[i]&&(h=this.renderSlice(i).append(),this.valueShapes[i]=h.id,this.shapes[h.id]=i);a.render()}}),d.fn.sparkline.box=D=g(d.fn.sparkline._base,{type:"box",init:function(a,b,c,e,f){D._super.init.call(this,a,b,c,e,f),this.values=d.map(b,Number),this.width=c.get("width")==="auto"?"4.0em":e,this.initTarget(),this.values.length||(this.disabled=1)},getRegion:function(){return 1},getCurrentRegionFields:function(){var a=[{field:"lq",value:this.quartiles[0]},{field:"med",value:this.quartiles
[1]},{field:"uq",value:this.quartiles[2]}];return this.loutlier!==c&&a.push({field:"lo",value:this.loutlier}),this.routlier!==c&&a.push({field:"ro",value:this.routlier}),this.lwhisker!==c&&a.push({field:"lw",value:this.lwhisker}),this.rwhisker!==c&&a.push({field:"rw",value:this.rwhisker}),a},render:function(){var a=this.target,d=this.values,e=d.length,f=this.options,g=this.canvasWidth,h=this.canvasHeight,i=f.get("chartRangeMin")===c?b.min.apply(b,d):f.get("chartRangeMin"),k=f.get("chartRangeMax")===c?b.max.apply(b,d):f.get("chartRangeMax"),l=0,m,n,o,p,q,r,s,t,u,v,w;if(!D._super.render.call(this))return;if(f.get("raw"))f.get("showOutliers")&&d.length>5?(n=d[0],m=d[1],p=d[2],q=d[3],r=d[4],s=d[5],t=d[6]):(m=d[0],p=d[1],q=d[2],r=d[3],s=d[4]);else{d.sort(function(a,b){return a-b}),p=j(d,1),q=j(d,2),r=j(d,3),o=r-p;if(f.get("showOutliers")){m=s=c;for(u=0;u<e;u++)m===c&&d[u]>p-o*f.get("outlierIQR")&&(m=d[u]),d[u]<r+o*f.get("outlierIQR")&&(s=d[u]);n=d[0],t=d[e-1]}else m=d[0],s=d[e-1]}this.quartiles=[p,q,r],this.lwhisker=m,this.rwhisker=s,this.loutlier=n,this.routlier=t,w=g/(k-i+1),f.get("showOutliers")&&(l=b.ceil(f.get("spotRadius")),g-=2*b.ceil(f.get("spotRadius")),w=g/(k-i+1),n<m&&a.drawCircle((n-i)*w+l,h/2,f.get("spotRadius"),f.get("outlierLineColor"),f.get("outlierFillColor")).append(),t>s&&a.drawCircle((t-i)*w+l,h/2,f.get("spotRadius"),f.get("outlierLineColor"),f.get("outlierFillColor")).append()),a.drawRect(b.round((p-i)*w+l),b.round(h*.1),b.round((r-p)*w),b.round(h*.8),f.get("boxLineColor"),f.get("boxFillColor")).append(),a.drawLine(b.round((m-i)*w+l),b.round(h/2),b.round((p-i)*w+l),b.round(h/2),f.get("lineColor")).append(),a.drawLine(b.round((m-i)*w+l),b.round(h/4),b.round((m-i)*w+l),b.round(h-h/4),f.get("whiskerColor")).append(),a.drawLine(b.round((s-i)*w+l),b.round(h/2),b.round((r-i)*w+l),b.round(h/2),f.get("lineColor")).append(),a.drawLine(b.round((s-i)*w+l),b.round(h/4),b.round((s-i)*w+l),b.round(h-h/4),f.get("whiskerColor")).append(),a.drawLine(b.round((q-i)*w+l),b.round(h*.1),b.round((q-i)*w+l),b.round(h*.9),f.get("medianColor")).append(),f.get("target")&&(v=b.ceil(f.get("spotRadius")),a.drawLine(b.round((f.get("target")-i)*w+l),b.round(h/2-v),b.round((f.get("target")-i)*w+l),b.round(h/2+v),f.get("targetColor")).append(),a.drawLine(b.round((f.get("target")-i)*w+l-v),b.round(h/2),b.round((f.get("target")-i)*w+l+v),b.round(h/2),f.get("targetColor")).append()),a.render()}}),G=g({init:function(a,b,c,d){this.target=a,this.id=b,this.type=c,this.args=d},append:function(){return this.target.appendShape(this),this}}),H=g({_pxregex:/(\d+)(px)?\s*$/i,init:function(a,b,c){if(!a)return;this.width=a,this.height=b,this.target=c,this.lastShapeId=null,c[0]&&(c=c[0]),d.data(c,"_jqs_vcanvas",this)},drawLine:function(a,b,c,d,e,f){return this.drawShape([[a,b],[c,d]],e,f)},drawShape:function(a,b,c,d){return this._genShape("Shape",[a,b,c,d])},drawCircle:function(a,b,c,d,e,f){return this._genShape("Circle",[a,b,c,d,e,f])},drawPieSlice:function(a,b,c,d,e,f,g){return this._genShape("PieSlice",[a,b,c,d,e,f,g])},drawRect:function(a,b,c,d,e,f){return this._genShape("Rect",[a,b,c,d,e,f])},getElement:function(){return this.canvas},getLastShapeId:function(){return this.lastShapeId},reset:function(){alert("reset not implemented")},_insert:function(a,b){d(b).html(a)},_calculatePixelDims:function(a,b,c){var e;e=this._pxregex.exec(b),e?this.pixelHeight=e[1]:this.pixelHeight=d(c).height(),e=this._pxregex.exec(a),e?this.pixelWidth=e[1]:this.pixelWidth=d(c).width()},_genShape:function(a,b){var c=L++;return b.unshift(c),new G(this,c,a,b)},appendShape:function(a){alert("appendShape not implemented")},replaceWithShape:function(a,b){alert("replaceWithShape not implemented")},insertAfterShape:function(a,b){alert("insertAfterShape not implemented")},removeShapeId:function(a){alert("removeShapeId not implemented")},getShapeAt:function(a,b,c){alert("getShapeAt not implemented")},render:function(){alert("render not implemented")}}),I=g(H,{init:function(b,e,f,g){I._super.init.call(this,b,e,f),this.canvas=a.createElement("canvas"),f[0]&&(f=f[0]),d.data(f,"_jqs_vcanvas",this),d(this.canvas).css({display:"inline-block",width:b,height:e,verticalAlign:"top"}),this._insert(this.canvas,f),this._calculatePixelDims(b,e,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,this.interact=g,this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c,d(this.canvas).css({width:this.pixelWidth,height:this.pixelHeight})},_getContext:function(a,b,d){var e=this.canvas.getContext("2d");return a!==c&&(e.strokeStyle=a),e.lineWidth=d===c?1:d,b!==c&&(e.fillStyle=b),e},reset:function(){var a=this._getContext();a.clearRect(0,0,this.pixelWidth,this.pixelHeight),this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c},_drawShape:function(a,b,d,e,f){var g=this._getContext(d,e,f),h,i;g.beginPath(),g.moveTo(b[0][0]+.5,b[0][1]+.5);for(h=1,i=b.length;h<i;h++)g.lineTo(b[h][0]+.5,b[h][1]+.5);d!==c&&g.stroke(),e!==c&&g.fill(),this.targetX!==c&&this.targetY!==c&&g.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawCircle:function(a,d,e,f,g,h,i){var j=this._getContext(g,h,i);j.beginPath(),j.arc(d,e,f,0,2*b.PI,!1),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a),g!==c&&j.stroke(),h!==c&&j.fill()},_drawPieSlice:function(a,b,d,e,f,g,h,i){var j=this._getContext(h,i);j.beginPath(),j.moveTo(b,d),j.arc(b,d,e,f,g,!1),j.lineTo(b,d),j.closePath(),h!==c&&j.stroke(),i&&j.fill(),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b+d,c],[b+d,c+e],[b,c+e],[b,c]],f,g)},appendShape:function(a){return this.shapes[a.id]=a,this.shapeseq.push(a.id),this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c=this.shapeseq,d;this.shapes[b.id]=b;for(d=c.length;d--;)c[d]==a&&(c[d]=b.id);delete this.shapes[a]},replaceWithShapes:function(a,b){var c=this.shapeseq,d={},e,f,g;for(f=a.length;f--;)d[a[f]]=!0;for(f=c.length;f--;)e=c[f],d[e]&&(c.splice(f,1),delete this.shapes[e],g=f);for(f=b.length;f--;)c.splice(g,0,b[f].id),this.shapes[b[f].id]=b[f]},insertAfterShape:function(a,b){var c=this.shapeseq,d;for(d=c.length;d--;)if(c[d]===a){c.splice(d+1,0,b.id),this.shapes[b.id]=b;return}},removeShapeId:function(a){var b=this.shapeseq,c;for(c=b.length;c--;)if(b[c]===a){b.splice(c,1);break}delete this.shapes[a]},getShapeAt:function(a,b,c){return this.targetX=b,this.targetY=c,this.render(),this.currentTargetShapeId},render:function(){var a=this.shapeseq,b=this.shapes,c=a.length,d=this._getContext(),e,f,g;d.clearRect(0,0,this.pixelWidth,this.pixelHeight);for(g=0;g<c;g++)e=a[g],f=b[e],this["_draw"+f.type].apply(this,f.args);this.interact||(this.shapes={},this.shapeseq=[])}}),J=g(H,{init:function(b,c,e){var f;J._super.init.call(this,b,c,e),e[0]&&(e=e[0]),d.data(e,"_jqs_vcanvas",this),this.canvas=a.createElement("span"),d(this.canvas).css({display:"inline-block",position:"relative",overflow:"hidden",width:b,height:c,margin:"0px",padding:"0px",verticalAlign:"top"}),this._insert(this.canvas,e),this._calculatePixelDims(b,c,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,f='<v:group coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'"'+' style="position:absolute;top:0;left:0;width:'+this.pixelWidth+"px;height="+this.pixelHeight+'px;"></v:group>',this.canvas.insertAdjacentHTML("beforeEnd",f),this.group=d(this.canvas).children()[0],this.rendered=!1,this.prerender=""},_drawShape:function(a,b,d,e,f){var g=[],h,i,j,k,l,m,n;for(n=0,m=b.length;n<m;n++)g[n]=""+b[n][0]+","+b[n][1];return h=g.splice(0,1),f=f===c?1:f,i=d===c?' stroked="false" ':' strokeWeight="'+f+'px" strokeColor="'+d+'" ',j=e===c?' filled="false"':' fillColor="'+e+'" filled="true" ',k=g[0]===g[g.length-1]?"x ":"",l='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+a+'" '+i+j+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+h+" l "+g.join(", ")+" "+k+'e">'+" </v:shape>",l},_drawCircle:function(a,b,d,e,f,g,h){var i,j,k;return b-=e,d-=e,i=f===c?' stroked="false" ':' strokeWeight="'+h+'px" strokeColor="'+f+'" ',j=g===c?' filled="false"':' fillColor="'+g+'" filled="true" ',k='<v:oval  id="jqsshape'+a+'" '+i+j+' style="position:absolute;top:'+d+"px; left:"+b+"px; width:"+e*2+"px; height:"+e*2+'px"></v:oval>',k},_drawPieSlice:function(a,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r;if(g===h)return"";h-g===2*b.PI&&(g=0,h=2*b.PI),l=d+b.round(b.cos(g)*f),m=e+b.round(b.sin(g)*f),n=d+b.round(b.cos(h)*f),o=e+b.round(b.sin(h)*f);if(l===n&&m===o){if(h-g<b.PI)return"";l=n=d+f,m=o=e}return l===n&&m===o&&h-g<b.PI?"":(k=[d-f,e-f,d+f,e+f,l,m,n,o],p=i===c?' stroked="false" ':' strokeWeight="1px" strokeColor="'+i+'" ',q=j===c?' filled="false"':' fillColor="'+j+'" filled="true" ',r='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+a+'" '+p+q+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+d+","+e+" wa "+k.join(", ")+' x e">'+" </v:shape>",r)},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b,c+e],[b+d,c+e],[b+d,c],[b,c]],f,g)},reset:function(){this.group.innerHTML=""},appendShape:function(a){var b=this["_draw"+a.type].apply(this,a.args);return this.rendered?this.group.insertAdjacentHTML("beforeEnd",b):this.prerender+=b,this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c=d("#jqsshape"+a),e=this["_draw"+b.type].apply(this,b.args);c[0].outerHTML=e},replaceWithShapes:function(a,b){var c=d("#jqsshape"+a[0]),e="",f=b.length,g;for(g=0;g<f;g++)e+=this["_draw"+b[g].type].apply(this,b[g].args);c[0].outerHTML=e;for(g=1;g<a.length;g++)d("#jqsshape"+a[g]).remove()},insertAfterShape:function(a,b){var c=d("#jqsshape"+a),e=this["_draw"+b.type].apply(this,b.args);c[0].insertAdjacentHTML("afterEnd",e)},removeShapeId:function(a){var b=d("#jqsshape"+a);this.group.removeChild(b[0])},getShapeAt:function(a,b,c){var d=a.id.substr(8);return d},render:function(){this.rendered||(this.group.innerHTML=this.prerender,this.rendered=!0)}})})})(document,Math);
/**
* @version: 2.1.19
* @author: Dan Grossman http://www.dangrossman.info/
* @copyright: Copyright (c) 2012-2015 Dan Grossman. All rights reserved.
* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
* @website: https://www.improvely.com/
*/

(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['moment', 'jquery', 'exports'], function(momentjs, $, exports) {
      root.daterangepicker = factory(root, exports, momentjs, $);
    });

  } else if (typeof exports !== 'undefined') {
      var momentjs = require('moment');
      var jQuery = (typeof window != 'undefined') ? window.jQuery : undefined;  //isomorphic issue
      if (!jQuery) {
          try {
              jQuery = require('jquery');
              if (!jQuery.fn) jQuery.fn = {}; //isomorphic issue
          } catch (err) {
              if (!jQuery) throw new Error('jQuery dependency not found');
          }
      }

    factory(root, exports, momentjs, jQuery);

  // Finally, as a browser global.
  } else {
    root.daterangepicker = factory(root, {}, root.moment || moment, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this || {}, function(root, daterangepicker, moment, $) { // 'this' doesn't exist on a server

    var DateRangePicker = function(element, options, cb) {

        //default settings for options
        this.parentEl = 'body';
        this.element = $(element);
        this.startDate = moment().startOf('day');
        this.endDate = moment().endOf('day');
        this.minDate = false;
        this.maxDate = false;
        this.dateLimit = false;
        this.autoApply = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.linkedCalendars = true;
        this.autoUpdateInput = true;
        this.alwaysShowCalendars = false;
        this.ranges = {};

        this.opens = 'right';
        if (this.element.hasClass('pull-right'))
            this.opens = 'left';

        this.drops = 'down';
        if (this.element.hasClass('dropup'))
            this.drops = 'up';

        this.buttonClasses = 'btn btn-sm';
        this.applyClass = 'btn-success';
        this.cancelClass = 'btn-default';

        this.locale = {
            format: 'MM/DD/YYYY',
            separator: ' - ',
            applyLabel: 'Apply',
            cancelLabel: 'Cancel',
            weekLabel: 'W',
            customRangeLabel: 'Custom Range',
            daysOfWeek: moment.weekdaysMin(),
            monthNames: moment.monthsShort(),
            firstDay: moment.localeData().firstDayOfWeek()
        };

        this.callback = function() { };

        //some state information
        this.isShowing = false;
        this.leftCalendar = {};
        this.rightCalendar = {};

        //custom options from user
        if (typeof options !== 'object' || options === null)
            options = {};

        //allow setting options with data attributes
        //data-api options will be overwritten with custom javascript options
        options = $.extend(this.element.data(), options);

        //html template for the picker UI
        if (typeof options.template !== 'string' && !(options.template instanceof $))
            options.template = '<div class="daterangepicker dropdown-menu">' +
                '<div class="calendar left">' +
                    '<div class="daterangepicker_input">' +
                      '<input class="input-mini" type="text" name="daterangepicker_start" value="" />' +
                      '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' +
                      '<div class="calendar-time">' +
                        '<div></div>' +
                        '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' +
                      '</div>' +
                    '</div>' +
                    '<div class="calendar-table"></div>' +
                '</div>' +
                '<div class="calendar right">' +
                    '<div class="daterangepicker_input">' +
                      '<input class="input-mini" type="text" name="daterangepicker_end" value="" />' +
                      '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' +
                      '<div class="calendar-time">' +
                        '<div></div>' +
                        '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' +
                      '</div>' +
                    '</div>' +
                    '<div class="calendar-table"></div>' +
                '</div>' +
                '<div class="ranges">' +
                    '<div class="range_inputs">' +
                        '<button class="applyBtn" disabled="disabled" type="button"></button> ' +
                        '<button class="cancelBtn" type="button"></button>' +
                    '</div>' +
                '</div>' +
            '</div>';

        this.parentEl = (options.parentEl && $(options.parentEl).length) ? $(options.parentEl) : $(this.parentEl);
        this.container = $(options.template).appendTo(this.parentEl);

        //
        // handle all the possible options overriding defaults
        //

        if (typeof options.locale === 'object') {

            if (typeof options.locale.format === 'string')
                this.locale.format = options.locale.format;

            if (typeof options.locale.separator === 'string')
                this.locale.separator = options.locale.separator;

            if (typeof options.locale.daysOfWeek === 'object')
                this.locale.daysOfWeek = options.locale.daysOfWeek.slice();

            if (typeof options.locale.monthNames === 'object')
              this.locale.monthNames = options.locale.monthNames.slice();

            if (typeof options.locale.firstDay === 'number')
              this.locale.firstDay = options.locale.firstDay;

            if (typeof options.locale.applyLabel === 'string')
              this.locale.applyLabel = options.locale.applyLabel;

            if (typeof options.locale.cancelLabel === 'string')
              this.locale.cancelLabel = options.locale.cancelLabel;

            if (typeof options.locale.weekLabel === 'string')
              this.locale.weekLabel = options.locale.weekLabel;

            if (typeof options.locale.customRangeLabel === 'string')
              this.locale.customRangeLabel = options.locale.customRangeLabel;

        }

        if (typeof options.startDate === 'string')
            this.startDate = moment(options.startDate, this.locale.format);

        if (typeof options.endDate === 'string')
            this.endDate = moment(options.endDate, this.locale.format);

        if (typeof options.minDate === 'string')
            this.minDate = moment(options.minDate, this.locale.format);

        if (typeof options.maxDate === 'string')
            this.maxDate = moment(options.maxDate, this.locale.format);

        if (typeof options.startDate === 'object')
            this.startDate = moment(options.startDate);

        if (typeof options.endDate === 'object')
            this.endDate = moment(options.endDate);

        if (typeof options.minDate === 'object')
            this.minDate = moment(options.minDate);

        if (typeof options.maxDate === 'object')
            this.maxDate = moment(options.maxDate);

        // sanity check for bad options
        if (this.minDate && this.startDate.isBefore(this.minDate))
            this.startDate = this.minDate.clone();

        // sanity check for bad options
        if (this.maxDate && this.endDate.isAfter(this.maxDate))
            this.endDate = this.maxDate.clone();

        if (typeof options.applyClass === 'string')
            this.applyClass = options.applyClass;

        if (typeof options.cancelClass === 'string')
            this.cancelClass = options.cancelClass;

        if (typeof options.dateLimit === 'object')
            this.dateLimit = options.dateLimit;

        if (typeof options.opens === 'string')
            this.opens = options.opens;

        if (typeof options.drops === 'string')
            this.drops = options.drops;

        if (typeof options.showWeekNumbers === 'boolean')
            this.showWeekNumbers = options.showWeekNumbers;

        if (typeof options.showISOWeekNumbers === 'boolean')
            this.showISOWeekNumbers = options.showISOWeekNumbers;

        if (typeof options.buttonClasses === 'string')
            this.buttonClasses = options.buttonClasses;

        if (typeof options.buttonClasses === 'object')
            this.buttonClasses = options.buttonClasses.join(' ');

        if (typeof options.showDropdowns === 'boolean')
            this.showDropdowns = options.showDropdowns;

        if (typeof options.singleDatePicker === 'boolean') {
            this.singleDatePicker = options.singleDatePicker;
            if (this.singleDatePicker)
                this.endDate = this.startDate.clone();
        }

        if (typeof options.timePicker === 'boolean')
            this.timePicker = options.timePicker;

        if (typeof options.timePickerSeconds === 'boolean')
            this.timePickerSeconds = options.timePickerSeconds;

        if (typeof options.timePickerIncrement === 'number')
            this.timePickerIncrement = options.timePickerIncrement;

        if (typeof options.timePicker24Hour === 'boolean')
            this.timePicker24Hour = options.timePicker24Hour;

        if (typeof options.autoApply === 'boolean')
            this.autoApply = options.autoApply;

        if (typeof options.autoUpdateInput === 'boolean')
            this.autoUpdateInput = options.autoUpdateInput;

        if (typeof options.linkedCalendars === 'boolean')
            this.linkedCalendars = options.linkedCalendars;

        if (typeof options.isInvalidDate === 'function')
            this.isInvalidDate = options.isInvalidDate;

        if (typeof options.alwaysShowCalendars === 'boolean')
            this.alwaysShowCalendars = options.alwaysShowCalendars;

        // update day names order to firstDay
        if (this.locale.firstDay != 0) {
            var iterator = this.locale.firstDay;
            while (iterator > 0) {
                this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                iterator--;
            }
        }

        var start, end, range;

        //if no start/end dates set, check if an input element contains initial values
        if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
            if ($(this.element).is('input[type=text]')) {
                var val = $(this.element).val(),
                    split = val.split(this.locale.separator);

                start = end = null;

                if (split.length == 2) {
                    start = moment(split[0], this.locale.format);
                    end = moment(split[1], this.locale.format);
                } else if (this.singleDatePicker && val !== "") {
                    start = moment(val, this.locale.format);
                    end = moment(val, this.locale.format);
                }
                if (start !== null && end !== null) {
                    this.setStartDate(start);
                    this.setEndDate(end);
                }
            }
        }

        if (typeof options.ranges === 'object') {
            for (range in options.ranges) {

                if (typeof options.ranges[range][0] === 'string')
                    start = moment(options.ranges[range][0], this.locale.format);
                else
                    start = moment(options.ranges[range][0]);

                if (typeof options.ranges[range][1] === 'string')
                    end = moment(options.ranges[range][1], this.locale.format);
                else
                    end = moment(options.ranges[range][1]);

                // If the start or end date exceed those allowed by the minDate or dateLimit
                // options, shorten the range to the allowable period.
                if (this.minDate && start.isBefore(this.minDate))
                    start = this.minDate.clone();

                var maxDate = this.maxDate;
                if (this.dateLimit && start.clone().add(this.dateLimit).isAfter(maxDate))
                    maxDate = start.clone().add(this.dateLimit);
                if (maxDate && end.isAfter(maxDate))
                    end = maxDate.clone();

                // If the end of the range is before the minimum or the start of the range is
                // after the maximum, don't display this range option at all.
                if ((this.minDate && end.isBefore(this.minDate)) || (maxDate && start.isAfter(maxDate)))
                    continue;
                
                //Support unicode chars in the range names.
                var elem = document.createElement('textarea');
                elem.innerHTML = range;
                var rangeHtml = elem.value;

                this.ranges[rangeHtml] = [start, end];
            }

            var list = '<ul>';
            for (range in this.ranges) {
                list += '<li>' + range + '</li>';
            }
            list += '<li>' + this.locale.customRangeLabel + '</li>';
            list += '</ul>';
            this.container.find('.ranges').prepend(list);
        }

        if (typeof cb === 'function') {
            this.callback = cb;
        }

        if (!this.timePicker) {
            this.startDate = this.startDate.startOf('day');
            this.endDate = this.endDate.endOf('day');
            this.container.find('.calendar-time').hide();
        }

        //can't be used together for now
        if (this.timePicker && this.autoApply)
            this.autoApply = false;

        if (this.autoApply && typeof options.ranges !== 'object') {
            this.container.find('.ranges').hide();
        } else if (this.autoApply) {
            this.container.find('.applyBtn, .cancelBtn').addClass('hide');
        }

        if (this.singleDatePicker) {
            this.container.addClass('single');
            this.container.find('.calendar.left').addClass('single');
            this.container.find('.calendar.left').show();
            this.container.find('.calendar.right').hide();
            this.container.find('.daterangepicker_input input, .daterangepicker_input i').hide();
            if (!this.timePicker) {
                this.container.find('.ranges').hide();
            }
        }

        if ((typeof options.ranges === 'undefined' && !this.singleDatePicker) || this.alwaysShowCalendars) {
            this.container.addClass('show-calendar');
        }

        this.container.addClass('opens' + this.opens);

        //swap the position of the predefined ranges if opens right
        if (typeof options.ranges !== 'undefined' && this.opens == 'right') {
            var ranges = this.container.find('.ranges');
            var html = ranges.clone();
            ranges.remove();
            this.container.find('.calendar.left').parent().prepend(html);
        }

        //apply CSS classes and labels to buttons
        this.container.find('.applyBtn, .cancelBtn').addClass(this.buttonClasses);
        if (this.applyClass.length)
            this.container.find('.applyBtn').addClass(this.applyClass);
        if (this.cancelClass.length)
            this.container.find('.cancelBtn').addClass(this.cancelClass);
        this.container.find('.applyBtn').html(this.locale.applyLabel);
        this.container.find('.cancelBtn').html(this.locale.cancelLabel);

        //
        // event listeners
        //

        this.container.find('.calendar')
            .on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this))
            .on('click.daterangepicker', '.next', $.proxy(this.clickNext, this))
            .on('click.daterangepicker', 'td.available', $.proxy(this.clickDate, this))
            .on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this))
            .on('mouseleave.daterangepicker', 'td.available', $.proxy(this.updateFormInputs, this))
            .on('change.daterangepicker', 'select.yearselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.monthselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.timeChanged, this))
            .on('click.daterangepicker', '.daterangepicker_input input', $.proxy(this.showCalendars, this))
            //.on('keyup.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsChanged, this))
            .on('change.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsChanged, this));

        this.container.find('.ranges')
            .on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this))
            .on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this))
            .on('click.daterangepicker', 'li', $.proxy(this.clickRange, this))
            .on('mouseenter.daterangepicker', 'li', $.proxy(this.hoverRange, this))
            .on('mouseleave.daterangepicker', 'li', $.proxy(this.updateFormInputs, this));

        if (this.element.is('input')) {
            this.element.on({
                'click.daterangepicker': $.proxy(this.show, this),
                'focus.daterangepicker': $.proxy(this.show, this),
                'keyup.daterangepicker': $.proxy(this.elementChanged, this),
                'keydown.daterangepicker': $.proxy(this.keydown, this)
            });
        } else {
            this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
        }

        //
        // if attached to a text input, set the initial value
        //

        if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
            this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
            this.element.trigger('change');
        } else if (this.element.is('input') && this.autoUpdateInput) {
            this.element.val(this.startDate.format(this.locale.format));
            this.element.trigger('change');
        }

    };

    DateRangePicker.prototype = {

        constructor: DateRangePicker,

        setStartDate: function(startDate) {
            if (typeof startDate === 'string')
                this.startDate = moment(startDate, this.locale.format);

            if (typeof startDate === 'object')
                this.startDate = moment(startDate);

            if (!this.timePicker)
                this.startDate = this.startDate.startOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.minDate && this.startDate.isBefore(this.minDate))
                this.startDate = this.minDate;

            if (this.maxDate && this.startDate.isAfter(this.maxDate))
                this.startDate = this.maxDate;

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        setEndDate: function(endDate) {
            if (typeof endDate === 'string')
                this.endDate = moment(endDate, this.locale.format);

            if (typeof endDate === 'object')
                this.endDate = moment(endDate);

            if (!this.timePicker)
                this.endDate = this.endDate.endOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.endDate.isBefore(this.startDate))
                this.endDate = this.startDate.clone();

            if (this.maxDate && this.endDate.isAfter(this.maxDate))
                this.endDate = this.maxDate;

            if (this.dateLimit && this.startDate.clone().add(this.dateLimit).isBefore(this.endDate))
                this.endDate = this.startDate.clone().add(this.dateLimit);

            this.previousRightTime = this.endDate.clone();

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        isInvalidDate: function() {
            return false;
        },

        updateView: function() {
            if (this.timePicker) {
                this.renderTimePicker('left');
                this.renderTimePicker('right');
                if (!this.endDate) {
                    this.container.find('.right .calendar-time select').attr('disabled', 'disabled').addClass('disabled');
                } else {
                    this.container.find('.right .calendar-time select').removeAttr('disabled').removeClass('disabled');
                }
            }
            if (this.endDate) {
                this.container.find('input[name="daterangepicker_end"]').removeClass('active');
                this.container.find('input[name="daterangepicker_start"]').addClass('active');
            } else {
                this.container.find('input[name="daterangepicker_end"]').addClass('active');
                this.container.find('input[name="daterangepicker_start"]').removeClass('active');
            }
            this.updateMonthsInView();
            this.updateCalendars();
            this.updateFormInputs();
        },

        updateMonthsInView: function() {
            if (this.endDate) {

                //if both dates are visible already, do nothing
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month &&
                    (this.startDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    &&
                    (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    ) {
                    return;
                }

                this.leftCalendar.month = this.startDate.clone().date(2);
                if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
                    this.rightCalendar.month = this.endDate.clone().date(2);
                } else {
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }
                
            } else {
                if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM')) {
                    this.leftCalendar.month = this.startDate.clone().date(2);
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }
            }
        },

        updateCalendars: function() {

            if (this.timePicker) {
                var hour, minute, second;
                if (this.endDate) {
                    hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                } else {
                    hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                }
                this.leftCalendar.month.hour(hour).minute(minute).second(second);
                this.rightCalendar.month.hour(hour).minute(minute).second(second);
            }

            this.renderCalendar('left');
            this.renderCalendar('right');

            //highlight any predefined range matching the current start and end dates
            this.container.find('.ranges li').removeClass('active');
            if (this.endDate == null) return;

            this.calculateChosenLabel();
        },

        renderCalendar: function(side) {

            //
            // Build the matrix of dates that will populate the calendar
            //

            var calendar = side == 'left' ? this.leftCalendar : this.rightCalendar;
            var month = calendar.month.month();
            var year = calendar.month.year();
            var hour = calendar.month.hour();
            var minute = calendar.month.minute();
            var second = calendar.month.second();
            var daysInMonth = moment([year, month]).daysInMonth();
            var firstDay = moment([year, month, 1]);
            var lastDay = moment([year, month, daysInMonth]);
            var lastMonth = moment(firstDay).subtract(1, 'month').month();
            var lastYear = moment(firstDay).subtract(1, 'month').year();
            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
            var dayOfWeek = firstDay.day();

            //initialize a 6 rows x 7 columns array for the calendar
            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;

            for (var i = 0; i < 6; i++) {
                calendar[i] = [];
            }

            //populate the calendar with date objects
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            if (startDay > daysInLastMonth)
                startDay -= 7;

            if (dayOfWeek == this.locale.firstDay)
                startDay = daysInLastMonth - 6;

            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);

            var col, row;
            for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
                if (i > 0 && col % 7 === 0) {
                    col = 0;
                    row++;
                }
                calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
                curDate.hour(12);

                if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') {
                    calendar[row][col] = this.minDate.clone();
                }

                if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') {
                    calendar[row][col] = this.maxDate.clone();
                }

            }

            //make the calendar object available to hoverDate/clickDate
            if (side == 'left') {
                this.leftCalendar.calendar = calendar;
            } else {
                this.rightCalendar.calendar = calendar;
            }

            //
            // Display the calendar
            //

            var minDate = side == 'left' ? this.minDate : this.startDate;
            var maxDate = this.maxDate;
            var selected = side == 'left' ? this.startDate : this.endDate;

            var html = '<table class="table-condensed">';
            html += '<thead>';
            html += '<tr>';

            // add empty cell for week number
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th></th>';

            if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == 'left')) {
                html += '<th class="prev available"><i class="fa fa-chevron-left glyphicon glyphicon-chevron-left"></i></th>';
            } else {
                html += '<th></th>';
            }

            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

            if (this.showDropdowns) {
                var currentMonth = calendar[1][1].month();
                var currentYear = calendar[1][1].year();
                var maxYear = (maxDate && maxDate.year()) || (currentYear + 5);
                var minYear = (minDate && minDate.year()) || (currentYear - 50);
                var inMinYear = currentYear == minYear;
                var inMaxYear = currentYear == maxYear;

                var monthHtml = '<select class="monthselect">';
                for (var m = 0; m < 12; m++) {
                    if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            ">" + this.locale.monthNames[m] + "</option>";
                    } else {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
                    }
                }
                monthHtml += "</select>";

                var yearHtml = '<select class="yearselect">';
                for (var y = minYear; y <= maxYear; y++) {
                    yearHtml += '<option value="' + y + '"' +
                        (y === currentYear ? ' selected="selected"' : '') +
                        '>' + y + '</option>';
                }
                yearHtml += '</select>';

                dateHtml = monthHtml + yearHtml;
            }

            html += '<th colspan="5" class="month">' + dateHtml + '</th>';
            if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == 'right' || this.singleDatePicker)) {
                html += '<th class="next available"><i class="fa fa-chevron-right glyphicon glyphicon-chevron-right"></i></th>';
            } else {
                html += '<th></th>';
            }

            html += '</tr>';
            html += '<tr>';

            // add week number label
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th class="week">' + this.locale.weekLabel + '</th>';

            $.each(this.locale.daysOfWeek, function(index, dayOfWeek) {
                html += '<th>' + dayOfWeek + '</th>';
            });

            html += '</tr>';
            html += '</thead>';
            html += '<tbody>';

            //adjust maxDate to reflect the dateLimit setting in order to
            //grey out end dates beyond the dateLimit
            if (this.endDate == null && this.dateLimit) {
                var maxLimit = this.startDate.clone().add(this.dateLimit).endOf('day');
                if (!maxDate || maxLimit.isBefore(maxDate)) {
                    maxDate = maxLimit;
                }
            }

            for (var row = 0; row < 6; row++) {
                html += '<tr>';

                // add week number
                if (this.showWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].week() + '</td>';
                else if (this.showISOWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].isoWeek() + '</td>';

                for (var col = 0; col < 7; col++) {

                    var classes = [];

                    //highlight today's date
                    if (calendar[row][col].isSame(new Date(), "day"))
                        classes.push('today');

                    //highlight weekends
                    if (calendar[row][col].isoWeekday() > 5)
                        classes.push('weekend');

                    //grey out the dates in other months displayed at beginning and end of this calendar
                    if (calendar[row][col].month() != calendar[1][1].month())
                        classes.push('off');

                    //don't allow selection of dates before the minimum date
                    if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of dates after the maximum date
                    if (maxDate && calendar[row][col].isAfter(maxDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of date if a custom function decides it's invalid
                    if (this.isInvalidDate(calendar[row][col]))
                        classes.push('off', 'disabled');

                    //highlight the currently selected start date
                    if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD'))
                        classes.push('active', 'start-date');

                    //highlight the currently selected end date
                    if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD'))
                        classes.push('active', 'end-date');

                    //highlight dates in-between the selected dates
                    if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate)
                        classes.push('in-range');

                    var cname = '', disabled = false;
                    for (var i = 0; i < classes.length; i++) {
                        cname += classes[i] + ' ';
                        if (classes[i] == 'disabled')
                            disabled = true;
                    }
                    if (!disabled)
                        cname += 'available';

                    html += '<td class="' + cname.replace(/^\s+|\s+$/g, '') + '" data-title="' + 'r' + row + 'c' + col + '">' + calendar[row][col].date() + '</td>';

                }
                html += '</tr>';
            }

            html += '</tbody>';
            html += '</table>';

            this.container.find('.calendar.' + side + ' .calendar-table').html(html);

        },

        renderTimePicker: function(side) {

            var html, selected, minDate, maxDate = this.maxDate;

            if (this.dateLimit && (!this.maxDate || this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate)))
                maxDate = this.startDate.clone().add(this.dateLimit);

            if (side == 'left') {
                selected = this.startDate.clone();
                minDate = this.minDate;
            } else if (side == 'right') {
                selected = this.endDate ? this.endDate.clone() : this.previousRightTime.clone();
                minDate = this.startDate;

                //Preserve the time already selected
                var timeSelector = this.container.find('.calendar.right .calendar-time div');
                if (timeSelector.html() != '') {

                    selected.hour(timeSelector.find('.hourselect option:selected').val() || selected.hour());
                    selected.minute(timeSelector.find('.minuteselect option:selected').val() || selected.minute());
                    selected.second(timeSelector.find('.secondselect option:selected').val() || selected.second());

                    if (!this.timePicker24Hour) {
                        var ampm = timeSelector.find('.ampmselect option:selected').val();
                        if (ampm === 'PM' && selected.hour() < 12)
                            selected.hour(selected.hour() + 12);
                        if (ampm === 'AM' && selected.hour() === 12)
                            selected.hour(0);
                    }

                    if (selected.isBefore(this.startDate))
                        selected = this.startDate.clone();

                    if (selected.isAfter(maxDate))
                        selected = maxDate.clone();

                }
            }

            //
            // hours
            //

            html = '<select class="hourselect">';

            var start = this.timePicker24Hour ? 0 : 1;
            var end = this.timePicker24Hour ? 23 : 12;

            for (var i = start; i <= end; i++) {
                var i_in_24 = i;
                if (!this.timePicker24Hour)
                    i_in_24 = selected.hour() >= 12 ? (i == 12 ? 12 : i + 12) : (i == 12 ? 0 : i);

                var time = selected.clone().hour(i_in_24);
                var disabled = false;
                if (minDate && time.minute(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.minute(0).isAfter(maxDate))
                    disabled = true;

                if (i_in_24 == selected.hour() && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + i + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + '</option>';
                } else {
                    html += '<option value="' + i + '">' + i + '</option>';
                }
            }

            html += '</select> ';

            //
            // minutes
            //

            html += ': <select class="minuteselect">';

            for (var i = 0; i < 60; i += this.timePickerIncrement) {
                var padded = i < 10 ? '0' + i : i;
                var time = selected.clone().minute(i);

                var disabled = false;
                if (minDate && time.second(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.second(0).isAfter(maxDate))
                    disabled = true;

                if (selected.minute() == i && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                } else {
                    html += '<option value="' + i + '">' + padded + '</option>';
                }
            }

            html += '</select> ';

            //
            // seconds
            //

            if (this.timePickerSeconds) {
                html += ': <select class="secondselect">';

                for (var i = 0; i < 60; i++) {
                    var padded = i < 10 ? '0' + i : i;
                    var time = selected.clone().second(i);

                    var disabled = false;
                    if (minDate && time.isBefore(minDate))
                        disabled = true;
                    if (maxDate && time.isAfter(maxDate))
                        disabled = true;

                    if (selected.second() == i && !disabled) {
                        html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                    } else if (disabled) {
                        html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                    } else {
                        html += '<option value="' + i + '">' + padded + '</option>';
                    }
                }

                html += '</select> ';
            }

            //
            // AM/PM
            //

            if (!this.timePicker24Hour) {
                html += '<select class="ampmselect">';

                var am_html = '';
                var pm_html = '';

                if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate))
                    am_html = ' disabled="disabled" class="disabled"';

                if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate))
                    pm_html = ' disabled="disabled" class="disabled"';

                if (selected.hour() >= 12) {
                    html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + '>PM</option>';
                } else {
                    html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + '>PM</option>';
                }

                html += '</select>';
            }

            this.container.find('.calendar.' + side + ' .calendar-time div').html(html);

        },

        updateFormInputs: function() {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
                return;

            this.container.find('input[name=daterangepicker_start]').val(this.startDate.format(this.locale.format));
            if (this.endDate)
                this.container.find('input[name=daterangepicker_end]').val(this.endDate.format(this.locale.format));

            if (this.singleDatePicker || (this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)))) {
                this.container.find('button.applyBtn').removeAttr('disabled');
            } else {
                this.container.find('button.applyBtn').attr('disabled', 'disabled');
            }

        },

        move: function() {
            var parentOffset = { top: 0, left: 0 },
                containerTop;
            var parentRightEdge = $(window).width();
            if (!this.parentEl.is('body')) {
                parentOffset = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                };
                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
            }

            if (this.drops == 'up')
                containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;
            else
                containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
            this.container[this.drops == 'up' ? 'addClass' : 'removeClass']('dropup');

            if (this.opens == 'left') {
                this.container.css({
                    top: containerTop,
                    right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
                    left: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else if (this.opens == 'center') {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2
                            - this.container.outerWidth() / 2,
                    right: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left,
                    right: 'auto'
                });
                if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
                    this.container.css({
                        left: 'auto',
                        right: 0
                    });
                }
            }
        },

        show: function(e) {
            if (this.isShowing) return;

            // Create a click proxy that is private to this instance of datepicker, for unbinding
            this._outsideClickProxy = $.proxy(function(e) { this.outsideClick(e); }, this);

            // Bind global datepicker mousedown for hiding and
            $(document)
              .on('mousedown.daterangepicker', this._outsideClickProxy)
              // also support mobile devices
              .on('touchend.daterangepicker', this._outsideClickProxy)
              // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
              .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy)
              // and also close when focus changes to outside the picker (eg. tabbing between controls)
              .on('focusin.daterangepicker', this._outsideClickProxy);

            // Reposition the picker if the window is resized while it's open
            $(window).on('resize.daterangepicker', $.proxy(function(e) { this.move(e); }, this));

            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.previousRightTime = this.endDate.clone();

            this.updateView();
            this.container.show();
            this.move();
            this.element.trigger('show.daterangepicker', this);
            this.isShowing = true;
        },

        hide: function(e) {
            if (!this.isShowing) return;

            //incomplete date selection, revert to last values
            if (!this.endDate) {
                this.startDate = this.oldStartDate.clone();
                this.endDate = this.oldEndDate.clone();
            }

            //if a new date range was selected, invoke the user callback function
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate))
                this.callback(this.startDate, this.endDate, this.chosenLabel);

            //if picker is attached to a text input, update it
            this.updateElement();

            $(document).off('.daterangepicker');
            $(window).off('.daterangepicker');
            this.container.hide();
            this.element.trigger('hide.daterangepicker', this);
            this.isShowing = false;
        },

        toggle: function(e) {
            if (this.isShowing) {
                this.hide();
            } else {
                this.show();
            }
        },

        outsideClick: function(e) {
            var target = $(e.target);
            // if the page is clicked anywhere except within the daterangerpicker/button
            // itself then call this.hide()
            if (
                // ie modal dialog fix
                e.type == "focusin" ||
                target.closest(this.element).length ||
                target.closest(this.container).length ||
                target.closest('.calendar-table').length
                ) return;
            this.hide();
        },

        showCalendars: function() {
            this.container.addClass('show-calendar');
            this.move();
            this.element.trigger('showCalendar.daterangepicker', this);
        },

        hideCalendars: function() {
            this.container.removeClass('show-calendar');
            this.element.trigger('hideCalendar.daterangepicker', this);
        },

        hoverRange: function(e) {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
                return;

            var label = e.target.innerHTML;
            if (label == this.locale.customRangeLabel) {
                this.updateView();
            } else {
                var dates = this.ranges[label];
                this.container.find('input[name=daterangepicker_start]').val(dates[0].format(this.locale.format));
                this.container.find('input[name=daterangepicker_end]').val(dates[1].format(this.locale.format));
            }
            
        },

        clickRange: function(e) {
            var label = e.target.innerHTML;
            this.chosenLabel = label;
            if (label == this.locale.customRangeLabel) {
                this.showCalendars();
            } else {
                var dates = this.ranges[label];
                this.startDate = dates[0];
                this.endDate = dates[1];

                if (!this.timePicker) {
                    this.startDate.startOf('day');
                    this.endDate.endOf('day');
                }

                if (!this.alwaysShowCalendars)
                    this.hideCalendars();
                this.clickApply();
            }
        },

        clickPrev: function(e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.subtract(1, 'month');
                if (this.linkedCalendars)
                    this.rightCalendar.month.subtract(1, 'month');
            } else {
                this.rightCalendar.month.subtract(1, 'month');
            }
            this.updateCalendars();
        },

        clickNext: function(e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.add(1, 'month');
            } else {
                this.rightCalendar.month.add(1, 'month');
                if (this.linkedCalendars)
                    this.leftCalendar.month.add(1, 'month');
            }
            this.updateCalendars();
        },

        hoverDate: function(e) {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
                return;

            //ignore dates that can't be selected
            if (!$(e.target).hasClass('available')) return;

            //have the text inputs above calendars reflect the date being hovered over
            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            if (this.endDate) {
                this.container.find('input[name=daterangepicker_start]').val(date.format(this.locale.format));
            } else {
                this.container.find('input[name=daterangepicker_end]').val(date.format(this.locale.format));
            }

            //highlight the dates between the start date and the date being hovered as a potential end date
            var leftCalendar = this.leftCalendar;
            var rightCalendar = this.rightCalendar;
            var startDate = this.startDate;
            if (!this.endDate) {
                this.container.find('.calendar td').each(function(index, el) {

                    //skip week numbers, only look at dates
                    if ($(el).hasClass('week')) return;

                    var title = $(el).attr('data-title');
                    var row = title.substr(1, 1);
                    var col = title.substr(3, 1);
                    var cal = $(el).parents('.calendar');
                    var dt = cal.hasClass('left') ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];

                    if (dt.isAfter(startDate) && dt.isBefore(date)) {
                        $(el).addClass('in-range');
                    } else {
                        $(el).removeClass('in-range');
                    }

                });
            }

        },

        clickDate: function(e) {

            if (!$(e.target).hasClass('available')) return;

            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            //
            // this function needs to do a few things:
            // * alternate between selecting a start and end date for the range,
            // * if the time picker is enabled, apply the hour/minute/second from the select boxes to the clicked date
            // * if autoapply is enabled, and an end date was chosen, apply the selection
            // * if single date picker mode, and time picker isn't enabled, apply the selection immediately
            //

            if (this.endDate || date.isBefore(this.startDate, 'day')) {
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.endDate = null;
                this.setStartDate(date.clone());
            } else if (!this.endDate && date.isBefore(this.startDate)) {
                //special case: clicking the same date for start/end, 
                //but the time of the end date is before the start date
                this.setEndDate(this.startDate.clone());
            } else {
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.setEndDate(date.clone());
                if (this.autoApply) {
                  this.calculateChosenLabel();
                  this.clickApply();
                }
            }

            if (this.singleDatePicker) {
                this.setEndDate(this.startDate);
                if (!this.timePicker)
                    this.clickApply();
            }

            this.updateView();

        },

        calculateChosenLabel: function() {
          var customRange = true;
          var i = 0;
          for (var range in this.ranges) {
              if (this.timePicker) {
                  if (this.startDate.isSame(this.ranges[range][0]) && this.endDate.isSame(this.ranges[range][1])) {
                      customRange = false;
                      this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
                      break;
                  }
              } else {
                  //ignore times when comparing dates if time picker is not enabled
                  if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
                      customRange = false;
                      this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
                      break;
                  }
              }
              i++;
          }
          if (customRange) {
              this.chosenLabel = this.container.find('.ranges li:last').addClass('active').html();
              this.showCalendars();
          }
        },

        clickApply: function(e) {
            this.hide();
            this.element.trigger('apply.daterangepicker', this);
        },

        clickCancel: function(e) {
            this.startDate = this.oldStartDate;
            this.endDate = this.oldEndDate;
            this.hide();
            this.element.trigger('cancel.daterangepicker', this);
        },

        monthOrYearChanged: function(e) {
            var isLeft = $(e.target).closest('.calendar').hasClass('left'),
                leftOrRight = isLeft ? 'left' : 'right',
                cal = this.container.find('.calendar.'+leftOrRight);

            // Month must be Number for new moment versions
            var month = parseInt(cal.find('.monthselect').val(), 10);
            var year = cal.find('.yearselect').val();

            if (!isLeft) {
                if (year < this.startDate.year() || (year == this.startDate.year() && month < this.startDate.month())) {
                    month = this.startDate.month();
                    year = this.startDate.year();
                }
            }

            if (this.minDate) {
                if (year < this.minDate.year() || (year == this.minDate.year() && month < this.minDate.month())) {
                    month = this.minDate.month();
                    year = this.minDate.year();
                }
            }

            if (this.maxDate) {
                if (year > this.maxDate.year() || (year == this.maxDate.year() && month > this.maxDate.month())) {
                    month = this.maxDate.month();
                    year = this.maxDate.year();
                }
            }

            if (isLeft) {
                this.leftCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
            } else {
                this.rightCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
            }
            this.updateCalendars();
        },

        timeChanged: function(e) {

            var cal = $(e.target).closest('.calendar'),
                isLeft = cal.hasClass('left');

            var hour = parseInt(cal.find('.hourselect').val(), 10);
            var minute = parseInt(cal.find('.minuteselect').val(), 10);
            var second = this.timePickerSeconds ? parseInt(cal.find('.secondselect').val(), 10) : 0;

            if (!this.timePicker24Hour) {
                var ampm = cal.find('.ampmselect').val();
                if (ampm === 'PM' && hour < 12)
                    hour += 12;
                if (ampm === 'AM' && hour === 12)
                    hour = 0;
            }

            if (isLeft) {
                var start = this.startDate.clone();
                start.hour(hour);
                start.minute(minute);
                start.second(second);
                this.setStartDate(start);
                if (this.singleDatePicker) {
                    this.endDate = this.startDate.clone();
                } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
                    this.setEndDate(start.clone());
                }
            } else if (this.endDate) {
                var end = this.endDate.clone();
                end.hour(hour);
                end.minute(minute);
                end.second(second);
                this.setEndDate(end);
            }

            //update the calendars so all clickable dates reflect the new time component
            this.updateCalendars();

            //update the form inputs above the calendars with the new time
            this.updateFormInputs();

            //re-render the time pickers because changing one selection can affect what's enabled in another
            this.renderTimePicker('left');
            this.renderTimePicker('right');

        },

        formInputsChanged: function(e) {
            var isRight = $(e.target).closest('.calendar').hasClass('right');
            var start = moment(this.container.find('input[name="daterangepicker_start"]').val(), this.locale.format);
            var end = moment(this.container.find('input[name="daterangepicker_end"]').val(), this.locale.format);

            if (start.isValid() && end.isValid()) {

                if (isRight && end.isBefore(start))
                    start = end.clone();

                this.setStartDate(start);
                this.setEndDate(end);

                if (isRight) {
                    this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format));
                } else {
                    this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format));
                }

            }

            this.updateCalendars();
            if (this.timePicker) {
                this.renderTimePicker('left');
                this.renderTimePicker('right');
            }
        },

        elementChanged: function() {
            if (!this.element.is('input')) return;
            if (!this.element.val().length) return;
            if (this.element.val().length < this.locale.format.length) return;

            var dateString = this.element.val().split(this.locale.separator),
                start = null,
                end = null;

            if (dateString.length === 2) {
                start = moment(dateString[0], this.locale.format);
                end = moment(dateString[1], this.locale.format);
            }

            if (this.singleDatePicker || start === null || end === null) {
                start = moment(this.element.val(), this.locale.format);
                end = start;
            }

            if (!start.isValid() || !end.isValid()) return;

            this.setStartDate(start);
            this.setEndDate(end);
            this.updateView();
        },

        keydown: function(e) {
            //hide on tab or enter
            if ((e.keyCode === 9) || (e.keyCode === 13)) {
                this.hide();
            }
        },

        updateElement: function() {
            if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
                this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
                this.element.trigger('change');
            } else if (this.element.is('input') && this.autoUpdateInput) {
                this.element.val(this.startDate.format(this.locale.format));
                this.element.trigger('change');
            }
        },

        remove: function() {
            this.container.remove();
            this.element.off('.daterangepicker');
            this.element.removeData();
        }

    };

    $.fn.daterangepicker = function(options, callback) {
        this.each(function() {
            var el = $(this);
            if (el.data('daterangepicker'))
                el.data('daterangepicker').remove();
            el.data('daterangepicker', new DateRangePicker(el, options, callback));
        });
        return this;
    };
    
    return DateRangePicker;

}));

/* =========================================================
 * bootstrap-datepicker.js
 * Repo: https://github.com/eternicode/bootstrap-datepicker/
 * Demo: http://eternicode.github.io/bootstrap-datepicker/
 * Docs: http://bootstrap-datepicker.readthedocs.org/
 * Forked from http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Started by Stefan Petre; improvements by Andrew Rowls + contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

(function($, undefined){

	var $window = $(window);

	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function alias(method){
		return function(){
			return this[method].apply(this, arguments);
		};
	}

	var DateArray = (function(){
		var extras = {
			get: function(i){
				return this.slice(i)[0];
			},
			contains: function(d){
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i=0, l=this.length; i < l; i++)
					if (this[i].valueOf() === val)
						return i;
				return -1;
			},
			remove: function(i){
				this.splice(i,1);
			},
			replace: function(new_array){
				if (!new_array)
					return;
				if (!$.isArray(new_array))
					new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function(){
				this.splice(0);
			},
			copy: function(){
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function(){
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	})();


	// Picker object

	var Datepicker = function(element, options){
		this.dates = new DateArray();
		this.viewDate = UTCToday();
		this.focusDate = null;

		this._process_options(options);

		this.element = $(element);
		this.isInline = false;
		this.isInput = this.element.is('input');
		this.component = this.element.is('.date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
		this.hasInput = this.component && this.element.find('input').length;
		if (this.component && this.component.length === 0)
			this.component = false;

		this.picker = $(DPGlobal.template);
		this._buildEvents();
		this._attachEvents();

		if (this.isInline){
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		}
		else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl){
			this.picker.addClass('datepicker-rtl');
		}

		this.viewMode = this.o.startView;

		if (this.o.calendarWeeks)
			this.picker.find('tfoot th.today')
						.attr('colspan', function(i, val){
							return parseInt(val) + 1;
						});

		this._allow_update = false;

		this.setStartDate(this._o.startDate);
		this.setEndDate(this._o.endDate);
		this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);

		this.fillDow();
		this.fillMonths();

		this._allow_update = true;

		this.update();
		this.showMode();

		if (this.isInline){
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_process_options: function(opts){
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = defaults.language;
			}
			o.language = lang;

			switch (o.startView){
				case 2:
				case 'decade':
					o.startView = 2;
					break;
				case 1:
				case 'year':
					o.startView = 1;
					break;
				default:
					o.startView = 0;
			}

			switch (o.minViewMode){
				case 1:
				case 'months':
					o.minViewMode = 1;
					break;
				case 2:
				case 'years':
					o.minViewMode = 2;
					break;
				default:
					o.minViewMode = 0;
			}

			o.startView = Math.max(o.startView, o.minViewMode);

			// true, false, or Number > 0
			if (o.multidate !== true){
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false)
					o.multidate = Math.max(0, o.multidate);
				else
					o.multidate = 1;
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = ((o.weekStart + 6) % 7);

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity){
				if (!!o.startDate){
					if (o.startDate instanceof Date)
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));
					else
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language);
				}
				else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity){
				if (!!o.endDate){
					if (o.endDate instanceof Date)
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));
					else
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language);
				}
				else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = o.daysOfWeekDisabled||[];
			if (!$.isArray(o.daysOfWeekDisabled))
				o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
			o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function(d){
				return parseInt(d, 10);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
				_plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function(word){
				return (/^auto|left|right|top|bottom$/).test(word);
			});
			o.orientation = {x: 'auto', y: 'auto'};
			if (!_plc || _plc === 'auto')
				; // no action
			else if (plc.length === 1){
				switch (plc[0]){
					case 'top':
					case 'bottom':
						o.orientation.y = plc[0];
						break;
					case 'left':
					case 'right':
						o.orientation.x = plc[0];
						break;
				}
			}
			else {
				_plc = $.grep(plc, function(word){
					return (/^left|right$/).test(word);
				});
				o.orientation.x = _plc[0] || 'auto';

				_plc = $.grep(plc, function(word){
					return (/^top|bottom$/).test(word);
				});
				o.orientation.y = _plc[0] || 'auto';
			}
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function(evs){
			for (var i=0, el, ch, ev; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function(evs){
			for (var i=0, el, ev, ch; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function(){
			if (this.isInput){ // single input
				this._events = [
					[this.element, {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(function(e){
							if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)
								this.update();
						}, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			else if (this.component && this.hasInput){ // component: input + button
				this._events = [
					// For components that are not readonly, allow keyboard nav
					[this.element.find('input'), {
						focus: $.proxy(this.show, this),
						keyup: $.proxy(function(e){
							if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)
								this.update();
						}, this),
						keydown: $.proxy(this.keydown, this)
					}],
					[this.component, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			else if (this.element.is('div')){  // inline datepicker
				this.isInline = true;
			}
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this)
					}]
				];
			}
			this._events.push(
				// Component: listen for blur on element descendants
				[this.element, '*', {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}],
				// Input: listen for blur on element
				[this.element, {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}]
			);

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					'mousedown touchstart': $.proxy(function(e){
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).length ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).length
						)){
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function(){
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function(event, altdate){
			var date = altdate || this.dates.get(-1),
				local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function(ix, format){
					if (arguments.length === 0){
						ix = this.dates.length - 1;
						format = this.o.format;
					}
					else if (typeof ix === 'string'){
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function(){
			if (!this.isInline)
				this.picker.appendTo('body');
			this.picker.show();
			this.place();
			this._attachSecondaryEvents();
			this._trigger('show');
		},

		hide: function(){
			if (this.isInline)
				return;
			if (!this.picker.is(':visible'))
				return;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.viewMode = this.o.startView;
			this.showMode();

			if (
				this.o.forceParse &&
				(
					this.isInput && this.element.val() ||
					this.hasInput && this.element.find('input').val()
				)
			)
				this.setValue();
			this._trigger('hide');
		},

		remove: function(){
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput){
				delete this.element.data().date;
			}
		},

		_utc_to_local: function(utc){
			return utc && new Date(utc.getTime() + (utc.getTimezoneOffset()*60000));
		},
		_local_to_utc: function(local){
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
		},
		_zero_time: function(local){
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function(utc){
			return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
		},

		getDates: function(){
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function(){
			return $.map(this.dates, function(d){
				return new Date(d);
			});
		},

		getDate: function(){
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function(){
			return new Date(this.dates.get(-1));
		},

		setDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
		},

		setUTCDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, $.map(args, this._utc_to_local));
			this._trigger('changeDate');
			this.setValue();
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),

		setValue: function(){
			var formatted = this.getFormattedDate();
			if (!this.isInput){
				if (this.component){
					this.element.find('input').val(formatted).change();
				}
			}
			else {
				this.element.val(formatted).change();
			}
		},

		getFormattedDate: function(format){
			if (format === undefined)
				format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function(d){
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			this.updateNavArrows();
		},

		place: function(){
			if (this.isInline)
				return;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				windowWidth = $window.width(),
				windowHeight = $window.height(),
				scrollTop = $window.scrollTop();

			var zIndex = parseInt(this.element.parents().filter(function(){
					return $(this).css('z-index') !== 'auto';
				}).first().css('z-index'))+10;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left,
				top = offset.top;

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom '+
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto'){
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				// Default to left
				this.picker.addClass('datepicker-orient-left');
				if (offset.left < 0)
					left -= offset.left - visualPadding;
				else if (offset.left + calendarWidth > windowWidth)
					left = windowWidth - calendarWidth - visualPadding;
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow, bottom_overflow;
			if (yorient === 'auto'){
				top_overflow = -scrollTop + offset.top - calendarHeight;
				bottom_overflow = scrollTop + windowHeight - (offset.top + height + calendarHeight);
				if (Math.max(top_overflow, bottom_overflow) === bottom_overflow)
					yorient = 'top';
				else
					yorient = 'bottom';
			}
			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top += height;
			else
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));

			this.picker.css({
				top: top,
				left: left,
				zIndex: zIndex
			});
		},

		_allow_update: true,
		update: function(){
			if (!this._allow_update)
				return;

			var oldDates = this.dates.copy(),
				dates = [],
				fromArgs = false;
			if (arguments.length){
				$.each(arguments, $.proxy(function(i, date){
					if (date instanceof Date)
						date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			}
			else {
				dates = this.isInput
						? this.element.val()
						: this.element.data('date') || this.element.find('input').val();
				if (dates && this.o.multidate)
					dates = dates.split(this.o.multidateSeparator);
				else
					dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function(date){
				return DPGlobal.parseDate(date, this.o.format, this.o.language);
			}, this));
			dates = $.grep(dates, $.proxy(function(date){
				return (
					date < this.o.startDate ||
					date > this.o.endDate ||
					!date
				);
			}, this), true);
			this.dates.replace(dates);

			if (this.dates.length)
				this.viewDate = new Date(this.dates.get(-1));
			else if (this.viewDate < this.o.startDate)
				this.viewDate = new Date(this.o.startDate);
			else if (this.viewDate > this.o.endDate)
				this.viewDate = new Date(this.o.endDate);

			if (fromArgs){
				// setting date by clicking
				this.setValue();
			}
			else if (dates.length){
				// setting date by typing
				if (String(oldDates) !== String(this.dates))
					this._trigger('changeDate');
			}
			if (!this.dates.length && oldDates.length)
				this._trigger('clearDate');

			this.fill();
		},

		fillDow: function(){
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks){
				var cell = '<th class="cw">&nbsp;</th>';
				html += cell;
				this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);
			}
			while (dowCnt < this.o.weekStart + 7){
				html += '<th class="dow">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},

		fillMonths: function(){
			var html = '',
			i = 0;
			while (i < 12){
				html += '<span class="month">'+dates[this.o.language].monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){
					return d.valueOf();
				});
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				today = new Date();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
				cls.push('old');
			}
			else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
				cls.push('focused');
			// Compare internal UTC date with local today, not UTC today
			if (this.o.todayHighlight &&
				date.getUTCFullYear() === today.getFullYear() &&
				date.getUTCMonth() === today.getMonth() &&
				date.getUTCDate() === today.getDate()){
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1)
				cls.push('active');
			if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate ||
				$.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1){
				cls.push('disabled');
			}
			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1){
					cls.push('selected');
				}
			}
			return cls;
		},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
				tooltip;
			this.picker.find('.datepicker-days thead th.datepicker-switch')
						.text(dates[this.o.language].months[month]+' '+year);
			this.picker.find('tfoot th.today')
						.text(todaytxt)
						.toggle(this.o.todayBtn !== false);
			this.picker.find('tfoot th.clear')
						.text(cleartxt)
						.toggle(this.o.clearBtn !== false);
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month-1, 28),
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while (prevMonth.valueOf() < nextMonth){
				if (prevMonth.getUTCDay() === this.o.weekStart){
					html.push('<tr>');
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek =  (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');

					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				if (this.o.beforeShowDay !== $.noop){
					var before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof(before) === 'boolean')
						before = {enabled: before};
					else if (typeof(before) === 'string')
						before = {classes: before};
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
				}

				clsName = $.unique(clsName);
				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>'+prevMonth.getUTCDate() + '</td>');
				if (prevMonth.getUTCDay() === this.o.weekEnd){
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));

			var months = this.picker.find('.datepicker-months')
						.find('th:eq(1)')
							.text(year)
							.end()
						.find('span').removeClass('active');

			$.each(this.dates, function(i, d){
				if (d.getUTCFullYear() === year)
					months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear){
				months.addClass('disabled');
			}
			if (year === startYear){
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear){
				months.slice(endMonth+1).addClass('disabled');
			}

			html = '';
			year = parseInt(year/10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
								.find('th:eq(1)')
									.text(year + '-' + (year + 9))
									.end()
								.find('td');
			year -= 1;
			var years = $.map(this.dates, function(d){
					return d.getUTCFullYear();
				}),
				classes;
			for (var i = -1; i < 11; i++){
				classes = ['year'];
				if (i === -1)
					classes.push('old');
				else if (i === 10)
					classes.push('new');
				if ($.inArray(year, years) !== -1)
					classes.push('active');
				if (year < startYear || year > endYear)
					classes.push('disabled');
				html += '<span class="' + classes.join(' ') + '">'+year+'</span>';
				year += 1;
			}
			yearCont.html(html);
		},

		updateNavArrows: function(){
			if (!this._allow_update)
				return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth();
			switch (this.viewMode){
				case 0:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
				case 1:
				case 2:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
			}
		},

		click: function(e){
			e.preventDefault();
			var target = $(e.target).closest('span, td, th'),
				year, month, day;
			if (target.length === 1){
				switch (target[0].nodeName.toLowerCase()){
					case 'th':
						switch (target[0].className){
							case 'datepicker-switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1);
								switch (this.viewMode){
									case 0:
										this.viewDate = this.moveMonth(this.viewDate, dir);
										this._trigger('changeMonth', this.viewDate);
										break;
									case 1:
									case 2:
										this.viewDate = this.moveYear(this.viewDate, dir);
										if (this.viewMode === 1)
											this._trigger('changeYear', this.viewDate);
										break;
								}
								this.fill();
								break;
							case 'today':
								var date = new Date();
								date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);

								this.showMode(-2);
								var which = this.o.todayBtn === 'linked' ? null : 'view';
								this._setDate(date, which);
								break;
							case 'clear':
								var element;
								if (this.isInput)
									element = this.element;
								else if (this.component)
									element = this.element.find('input');
								if (element)
									element.val("").change();
								this.update();
								this._trigger('changeDate');
								if (this.o.autoclose)
									this.hide();
								break;
						}
						break;
					case 'span':
						if (!target.is('.disabled')){
							this.viewDate.setUTCDate(1);
							if (target.is('.month')){
								day = 1;
								month = target.parent().find('span').index(target);
								year = this.viewDate.getUTCFullYear();
								this.viewDate.setUTCMonth(month);
								this._trigger('changeMonth', this.viewDate);
								if (this.o.minViewMode === 1){
									this._setDate(UTCDate(year, month, day));
								}
							}
							else {
								day = 1;
								month = 0;
								year = parseInt(target.text(), 10)||0;
								this.viewDate.setUTCFullYear(year);
								this._trigger('changeYear', this.viewDate);
								if (this.o.minViewMode === 2){
									this._setDate(UTCDate(year, month, day));
								}
							}
							this.showMode(-1);
							this.fill();
						}
						break;
					case 'td':
						if (target.is('.day') && !target.is('.disabled')){
							day = parseInt(target.text(), 10)||1;
							year = this.viewDate.getUTCFullYear();
							month = this.viewDate.getUTCMonth();
							if (target.is('.old')){
								if (month === 0){
									month = 11;
									year -= 1;
								}
								else {
									month -= 1;
								}
							}
							else if (target.is('.new')){
								if (month === 11){
									month = 0;
									year += 1;
								}
								else {
									month += 1;
								}
							}
							this._setDate(UTCDate(year, month, day));
						}
						break;
				}
			}
			if (this.picker.is(':visible') && this._focused_from){
				$(this._focused_from).focus();
			}
			delete this._focused_from;
		},

		_toggle_multidate: function(date){
			var ix = this.dates.contains(date);
			if (!date){
				this.dates.clear();
			}
			else if (ix !== -1){
				this.dates.remove(ix);
			}
			else {
				this.dates.push(date);
			}
			if (typeof this.o.multidate === 'number')
				while (this.dates.length > this.o.multidate)
					this.dates.remove(0);
		},

		_setDate: function(date, which){
			if (!which || which === 'date')
				this._toggle_multidate(date && new Date(date));
			if (!which || which  === 'view')
				this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			this._trigger('changeDate');
			var element;
			if (this.isInput){
				element = this.element;
			}
			else if (this.component){
				element = this.element.find('input');
			}
			if (element){
				element.change();
			}
			if (this.o.autoclose && (!which || which === 'date')){
				this.hide();
			}
		},

		moveMonth: function(date, dir){
			if (!date)
				return undefined;
			if (!dir)
				return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1){
				test = dir === -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){
						return new_date.getUTCMonth() === month;
					}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){
						return new_date.getUTCMonth() !== new_month;
					};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				if (new_month < 0 || new_month > 11)
					new_month = (new_month + 12) % 12;
			}
			else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (this.picker.is(':not(:visible)')){
				if (e.keyCode === 27) // allow escape to hide and re-show picker
					this.show();
				return;
			}
			var dateChanged = false,
				dir, newDate, newViewDate,
				focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode){
				case 27: // escape
					if (this.focusDate){
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					}
					else
						this.hide();
					e.preventDefault();
					break;
				case 37: // left
				case 39: // right
					if (!this.o.keyboardNavigation)
						break;
					dir = e.keyCode === 37 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveYear(focusDate, dir);
						this._trigger('changeYear', this.viewDate);
					}
					else if (e.shiftKey){
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveMonth(focusDate, dir);
						this._trigger('changeMonth', this.viewDate);
					}
					else {
						newDate = new Date(this.dates.get(-1) || UTCToday());
						newDate.setUTCDate(newDate.getUTCDate() + dir);
						newViewDate = new Date(focusDate);
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir);
					}
					if (this.dateWithinRange(newDate)){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 38: // up
				case 40: // down
					if (!this.o.keyboardNavigation)
						break;
					dir = e.keyCode === 38 ? -1 : 1;
					if (e.ctrlKey){
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveYear(focusDate, dir);
						this._trigger('changeYear', this.viewDate);
					}
					else if (e.shiftKey){
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
						newViewDate = this.moveMonth(focusDate, dir);
						this._trigger('changeMonth', this.viewDate);
					}
					else {
						newDate = new Date(this.dates.get(-1) || UTCToday());
						newDate.setUTCDate(newDate.getUTCDate() + dir * 7);
						newViewDate = new Date(focusDate);
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir * 7);
					}
					if (this.dateWithinRange(newDate)){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 32: // spacebar
					// Spacebar is used in manually typing dates in some formats.
					// As such, its behavior should not be hijacked.
					break;
				case 13: // enter
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					this._toggle_multidate(focusDate);
					dateChanged = true;
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')){
						e.preventDefault();
						if (this.o.autoclose)
							this.hide();
					}
					break;
				case 9: // tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged){
				if (this.dates.length)
					this._trigger('changeDate');
				else
					this._trigger('clearDate');
				var element;
				if (this.isInput){
					element = this.element;
				}
				else if (this.component){
					element = this.element.find('input');
				}
				if (element){
					element.change();
				}
			}
		},

		showMode: function(dir){
			if (dir){
				this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + dir));
			}
			this.picker
				.find('>div')
				.hide()
				.filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName)
					.css('display', 'block');
			this.updateNavArrows();
		}
	};

	var DateRangePicker = function(element, options){
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		$(this.inputs)
			.datepicker(options)
			.bind('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){
			return $(i).data('datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){
				return d.valueOf();
			});
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		dateUpdated: function(e){
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating)
				return;
			this.updating = true;

			var dp = $(e.target).data('datepicker'),
				new_date = dp.getUTCDate(),
				i = $.inArray(e.target, this.inputs),
				l = this.inputs.length;
			if (i === -1)
				return;

			$.each(this.pickers, function(i, p){
				if (!p.getUTCDate())
					p.setUTCDate(new_date);
			});

			if (new_date < this.dates[i]){
				// Date being moved earlier/left
				while (i >= 0 && new_date < this.dates[i]){
					this.pickers[i--].setUTCDate(new_date);
				}
			}
			else if (new_date > this.dates[i]){
				// Date being moved later/right
				while (i < l && new_date > this.dates[i]){
					this.pickers[i++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		remove: function(){
			$.map(this.pickers, function(p){ p.remove(); });
			delete this.element.data().datepicker;
		}
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_,a){
			return a.toLowerCase();
		}
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]){
			lang = lang.split('-')[0];
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	$.fn.datepicker = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function(){
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data){
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.is('.input-daterange') || opts.inputs){
					var ropts = {
						inputs: opts.inputs || $this.find('input').toArray()
					};
					$this.data('datepicker', (data = new DateRangePicker(this, $.extend(opts, ropts))));
				}
				else {
					$this.data('datepicker', (data = new Datepicker(this, opts)));
				}
			}
			if (typeof option === 'string' && typeof data[option] === 'function'){
				internal_return = data[option].apply(data, args);
				if (internal_return !== undefined)
					return false;
			}
		});
		if (internal_return !== undefined)
			return internal_return;
		else
			return this;
	};

	var defaults = $.fn.datepicker.defaults = {
		autoclose: false,
		beforeShowDay: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		daysOfWeekDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		weekStart: 0
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear"
		}
	};

	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
		}],
		isLeapYear: function(year){
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
		},
		getDaysInMonth: function(year, month){
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			// IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language){
			if (!date)
				return undefined;
			if (date instanceof Date)
				return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			var part_re = /([\-+]\d+)([dmwy])/,
				parts = date.match(/([\-+]\d+)([dmwy])/g),
				part, dir, i;
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
				date = new Date();
				for (i=0; i < parts.length; i++){
					part = part_re.exec(parts[i]);
					dir = parseInt(part[1]);
					switch (part[2]){
						case 'd':
							date.setUTCDate(date.getUTCDate() + dir);
							break;
						case 'm':
							date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
							break;
						case 'w':
							date.setUTCDate(date.getUTCDate() + dir * 7);
							break;
						case 'y':
							date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
							break;
					}
				}
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
			}
			parts = date && date.match(this.nonpunctuation) || [];
			date = new Date();
			var parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){
						return d.setUTCFullYear(v);
					},
					yy: function(d,v){
						return d.setUTCFullYear(2000+v);
					},
					m: function(d,v){
						if (isNaN(d))
							return d;
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() !== v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){
						return d.setUTCDate(v);
					}
				},
				val, filtered;
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length){
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part(){
				var m = this.slice(0, parts[i].length),
					p = parts[i].slice(0, m.length);
				return m === p;
			}
			if (parts.length === fparts.length){
				var cnt;
				for (i=0, cnt = fparts.length; i < cnt; i++){
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)){
						switch (part){
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i=0; i < setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])){
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date))
							date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			if (!date)
				return '';
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
							'<tr>'+
								'<th class="prev">&laquo;</th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next">&raquo;</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class="table table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function(){
		$.fn.datepicker = old;
		return this;
	};


	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function(e){
			var $this = $(this);
			if ($this.data('datepicker'))
				return;
			e.preventDefault();
			// component click requires us to explicitly show it
			$this.datepicker('show');
		}
	);
	$(function(){
		$('[data-provide="datepicker-inline"]').datepicker();
	});

}(window.jQuery));

/*! bootstrap3-wysihtml5-bower 2014-09-26 */
var wysihtml5,Base,Handlebars;Object.defineProperty&&Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(Element.prototype,"textContent")&&!Object.getOwnPropertyDescriptor(Element.prototype,"textContent").get&&!function(){var a=Object.getOwnPropertyDescriptor(Element.prototype,"innerText");Object.defineProperty(Element.prototype,"textContent",{get:function(){return a.get.call(this)},set:function(b){return a.set.call(this,b)}})}(),Array.isArray||(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)}),wysihtml5={version:"0.4.15",commands:{},dom:{},quirks:{},toolbar:{},lang:{},selection:{},views:{},INVISIBLE_SPACE:"﻿",EMPTY_FUNCTION:function(){},ELEMENT_NODE:1,TEXT_NODE:3,BACKSPACE_KEY:8,ENTER_KEY:13,ESCAPE_KEY:27,SPACE_KEY:32,DELETE_KEY:46},function(a,b){"function"==typeof define&&define.amd?define(a):b.rangy=a()}(function(){function a(a,b){var c=typeof a[b];return c==x||!(c!=w||!a[b])||"unknown"==c}function b(a,b){return!(typeof a[b]!=w||!a[b])}function c(a,b){return typeof a[b]!=y}function d(a){return function(b,c){for(var d=c.length;d--;)if(!a(b,c[d]))return!1;return!0}}function e(a){return a&&D(a,C)&&F(a,B)}function f(a){return b(a,"body")?a.body:a.getElementsByTagName("body")[0]}function g(c){b(window,"console")&&a(window.console,"log")&&window.console.log(c)}function h(a,b){b?window.alert(a):g(a)}function i(a){H.initialized=!0,H.supported=!1,h("Rangy is not supported on this page in your browser. Reason: "+a,H.config.alertOnFail)}function j(a){h("Rangy warning: "+a,H.config.alertOnWarn)}function k(a){return a.message||a.description||a+""}function l(){var b,c,d,h,j,l,m,o,p;if(!H.initialized){if(c=!1,d=!1,a(document,"createRange")&&(b=document.createRange(),D(b,A)&&F(b,z)&&(c=!0)),h=f(document),!h||"body"!=h.nodeName.toLowerCase())return i("No body element found"),void 0;if(h&&a(h,"createTextRange")&&(b=h.createTextRange(),e(b)&&(d=!0)),!c&&!d)return i("Neither Range nor TextRange are available"),void 0;H.initialized=!0,H.features={implementsDomRange:c,implementsTextRange:d};for(m in G)(j=G[m])instanceof n&&j.init(j,H);for(o=0,p=s.length;p>o;++o)try{s[o](H)}catch(q){l="Rangy init listener threw an exception. Continuing. Detail: "+k(q),g(l)}}}function m(a){a=a||window,l();for(var b=0,c=t.length;c>b;++b)t[b](a)}function n(a,b,c){this.name=a,this.dependencies=b,this.initialized=!1,this.supported=!1,this.initializer=c}function o(a,b,c,d){var e=new n(b,c,function(a){if(!a.initialized){a.initialized=!0;try{d(H,a),a.supported=!0}catch(c){var e="Module '"+b+"' failed to load: "+k(c);g(e)}}});G[b]=e}function p(){}function q(){}var r,s,t,u,v,w="object",x="function",y="undefined",z=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],A=["setStart","setStartBefore","setStartAfter","setEnd","setEndBefore","setEndAfter","collapse","selectNode","selectNodeContents","compareBoundaryPoints","deleteContents","extractContents","cloneContents","insertNode","surroundContents","cloneRange","toString","detach"],B=["boundingHeight","boundingLeft","boundingTop","boundingWidth","htmlText","text"],C=["collapse","compareEndPoints","duplicate","moveToElementText","parentElement","select","setEndPoint","getBoundingClientRect"],D=d(a),E=d(b),F=d(c),G={},H={version:"1.3alpha.20140804",initialized:!1,supported:!0,util:{isHostMethod:a,isHostObject:b,isHostProperty:c,areHostMethods:D,areHostObjects:E,areHostProperties:F,isTextRange:e,getBody:f},features:{},modules:G,config:{alertOnFail:!0,alertOnWarn:!1,preferTextRange:!1,autoInitialize:typeof rangyAutoInitialize==y?!0:rangyAutoInitialize}};return H.fail=i,H.warn=j,{}.hasOwnProperty?H.util.extend=function(a,b,c){var d,e,f;for(f in b)b.hasOwnProperty(f)&&(d=a[f],e=b[f],c&&null!==d&&"object"==typeof d&&null!==e&&"object"==typeof e&&H.util.extend(d,e,!0),a[f]=e);return b.hasOwnProperty("toString")&&(a.toString=b.toString),a}:i("hasOwnProperty not supported"),function(){var a,b,c=document.createElement("div");c.appendChild(document.createElement("span")),a=[].slice;try{1==a.call(c.childNodes,0)[0].nodeType&&(b=function(b){return a.call(b,0)})}catch(d){}b||(b=function(a){var b,c,d=[];for(b=0,c=a.length;c>b;++b)d[b]=a[b];return d}),H.util.toArray=b}(),a(document,"addEventListener")?r=function(a,b,c){a.addEventListener(b,c,!1)}:a(document,"attachEvent")?r=function(a,b,c){a.attachEvent("on"+b,c)}:i("Document does not have required addEventListener or attachEvent method"),H.util.addListener=r,s=[],H.init=l,H.addInitListener=function(a){H.initialized?a(H):s.push(a)},t=[],H.addShimListener=function(a){t.push(a)},H.shim=H.createMissingNativeApi=m,n.prototype={init:function(){var a,b,c,d,e=this.dependencies||[];for(a=0,b=e.length;b>a;++a){if(d=e[a],c=G[d],!(c&&c instanceof n))throw Error("required module '"+d+"' not found");if(c.init(),!c.supported)throw Error("required module '"+d+"' not supported")}this.initializer(this)},fail:function(a){throw this.initialized=!0,this.supported=!1,Error("Module '"+this.name+"' failed to load: "+a)},warn:function(a){H.warn("Module "+this.name+": "+a)},deprecationNotice:function(a,b){H.warn("DEPRECATED: "+a+" in module "+this.name+"is deprecated. Please use "+b+" instead")},createError:function(a){return Error("Error in Rangy "+this.name+" module: "+a)}},H.createModule=function(a){var b,c,d;2==arguments.length?(b=arguments[1],c=[]):(b=arguments[2],c=arguments[1]),d=o(!1,a,c,b),H.initialized&&d.init()},H.createCoreModule=function(a,b,c){o(!0,a,b,c)},H.RangePrototype=p,H.rangePrototype=new p,H.selectionPrototype=new q,u=!1,v=function(){u||(u=!0,!H.initialized&&H.config.autoInitialize&&l())},typeof window==y?(i("No window found"),void 0):typeof document==y?(i("No document found"),void 0):(a(document,"addEventListener")&&document.addEventListener("DOMContentLoaded",v,!1),r(window,"load",v),H.createCoreModule("DomUtil",[],function(a,b){function c(a){var b;return typeof a.namespaceURI==I||null===(b=a.namespaceURI)||"http://www.w3.org/1999/xhtml"==b}function d(a){var b=a.parentNode;return 1==b.nodeType?b:null}function e(a){for(var b=0;a=a.previousSibling;)++b;return b}function f(a){switch(a.nodeType){case 7:case 10:return 0;case 3:case 8:return a.length;default:return a.childNodes.length}}function g(a,b){var c,d=[];for(c=a;c;c=c.parentNode)d.push(c);for(c=b;c;c=c.parentNode)if(F(d,c))return c;return null}function h(a,b,c){for(var d=c?b:b.parentNode;d;){if(d===a)return!0;d=d.parentNode}return!1}function i(a,b){return h(a,b,!0)}function j(a,b,c){for(var d,e=c?a:a.parentNode;e;){if(d=e.parentNode,d===b)return e;e=d}return null}function k(a){var b=a.nodeType;return 3==b||4==b||8==b}function l(a){if(!a)return!1;var b=a.nodeType;return 3==b||8==b}function m(a,b){var c=b.nextSibling,d=b.parentNode;return c?d.insertBefore(a,c):d.appendChild(a),a}function n(a,b,c){var d,f,g=a.cloneNode(!1);if(g.deleteData(0,b),a.deleteData(b,a.length-b),m(g,a),c)for(d=0;f=c[d++];)f.node==a&&f.offset>b?(f.node=g,f.offset-=b):f.node==a.parentNode&&f.offset>e(a)&&++f.offset;return g}function o(a){if(9==a.nodeType)return a;if(typeof a.ownerDocument!=I)return a.ownerDocument;if(typeof a.document!=I)return a.document;if(a.parentNode)return o(a.parentNode);throw b.createError("getDocument: no document found for node")}function p(a){var c=o(a);if(typeof c.defaultView!=I)return c.defaultView;if(typeof c.parentWindow!=I)return c.parentWindow;throw b.createError("Cannot get a window object for node")}function q(a){if(typeof a.contentDocument!=I)return a.contentDocument;if(typeof a.contentWindow!=I)return a.contentWindow.document;throw b.createError("getIframeDocument: No Document object found for iframe element")}function r(a){if(typeof a.contentWindow!=I)return a.contentWindow;if(typeof a.contentDocument!=I)return a.contentDocument.defaultView;throw b.createError("getIframeWindow: No Window object found for iframe element")}function s(a){return a&&J.isHostMethod(a,"setTimeout")&&J.isHostObject(a,"document")}function t(a,b,c){var d;if(a?J.isHostProperty(a,"nodeType")?d=1==a.nodeType&&"iframe"==a.tagName.toLowerCase()?q(a):o(a):s(a)&&(d=a.document):d=document,!d)throw b.createError(c+"(): Parameter must be a Window object or DOM node");return d}function u(a){for(var b;b=a.parentNode;)a=b;return a}function v(a,c,d,f){var h,i,k,l,m;if(a==d)return c===f?0:f>c?-1:1;if(h=j(d,a,!0))return c<=e(h)?-1:1;if(h=j(a,d,!0))return e(h)<f?-1:1;if(i=g(a,d),!i)throw Error("comparePoints error: nodes have no common ancestor");if(k=a===i?i:j(a,i,!0),l=d===i?i:j(d,i,!0),k===l)throw b.createError("comparePoints got to case 4 and childA and childB are the same!");for(m=i.firstChild;m;){if(m===k)return-1;if(m===l)return 1;m=m.nextSibling}}function w(a){var b;try{return b=a.parentNode,!1}catch(c){return!0}}function x(a){if(!a)return"[No node]";if(G&&w(a))return"[Broken node]";if(k(a))return'"'+a.data+'"';if(1==a.nodeType){var b=a.id?' id="'+a.id+'"':"";return"<"+a.nodeName+b+">[index:"+e(a)+",length:"+a.childNodes.length+"]["+(a.innerHTML||"[innerHTML not supported]").slice(0,25)+"]"}return a.nodeName}function y(a){for(var b,c=o(a).createDocumentFragment();b=a.firstChild;)c.appendChild(b);return c}function z(a){this.root=a,this._next=a}function A(a){return new z(a)}function B(a,b){this.node=a,this.offset=b}function C(a){this.code=this[a],this.codeName=a,this.message="DOMException: "+this.codeName}var D,E,F,G,H,I="undefined",J=a.util;J.areHostMethods(document,["createDocumentFragment","createElement","createTextNode"])||b.fail("document missing a Node creation method"),J.isHostMethod(document,"getElementsByTagName")||b.fail("document missing getElementsByTagName method"),D=document.createElement("div"),J.areHostMethods(D,["insertBefore","appendChild","cloneNode"]||!J.areHostObjects(D,["previousSibling","nextSibling","childNodes","parentNode"]))||b.fail("Incomplete Element implementation"),J.isHostProperty(D,"innerHTML")||b.fail("Element is missing innerHTML property"),E=document.createTextNode("test"),J.areHostMethods(E,["splitText","deleteData","insertData","appendData","cloneNode"]||!J.areHostObjects(D,["previousSibling","nextSibling","childNodes","parentNode"])||!J.areHostProperties(E,["data"]))||b.fail("Incomplete Text Node implementation"),F=function(a,b){for(var c=a.length;c--;)if(a[c]===b)return!0;return!1},G=!1,function(){var b,c=document.createElement("b");c.innerHTML="1",b=c.firstChild,c.innerHTML="<br>",G=w(b),a.features.crashyTextNodes=G}(),typeof window.getComputedStyle!=I?H=function(a,b){return p(a).getComputedStyle(a,null)[b]}:typeof document.documentElement.currentStyle!=I?H=function(a,b){return a.currentStyle[b]}:b.fail("No means of obtaining computed style properties found"),z.prototype={_current:null,hasNext:function(){return!!this._next},next:function(){var a,b,c=this._current=this._next;if(this._current)if(a=c.firstChild,a)this._next=a;else{for(b=null;c!==this.root&&!(b=c.nextSibling);)c=c.parentNode;this._next=b}return this._current},detach:function(){this._current=this._next=this.root=null}},B.prototype={equals:function(a){return!!a&&this.node===a.node&&this.offset==a.offset},inspect:function(){return"[DomPosition("+x(this.node)+":"+this.offset+")]"},toString:function(){return this.inspect()}},C.prototype={INDEX_SIZE_ERR:1,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INVALID_STATE_ERR:11,INVALID_NODE_TYPE_ERR:24},C.prototype.toString=function(){return this.message},a.dom={arrayContains:F,isHtmlNamespace:c,parentElement:d,getNodeIndex:e,getNodeLength:f,getCommonAncestor:g,isAncestorOf:h,isOrIsAncestorOf:i,getClosestAncestorIn:j,isCharacterDataNode:k,isTextOrCommentNode:l,insertAfter:m,splitDataNode:n,getDocument:o,getWindow:p,getIframeWindow:r,getIframeDocument:q,getBody:J.getBody,isWindow:s,getContentDocument:t,getRootContainer:u,comparePoints:v,isBrokenNode:w,inspectNode:x,getComputedStyleProperty:H,fragmentFromNodeChildren:y,createIterator:A,DomPosition:B},a.DOMException=C}),H.createCoreModule("DomRange",["DomUtil"],function(a){function b(a,b){return 3!=a.nodeType&&(gb(a,b.startContainer)||gb(a,b.endContainer))}function c(a){return a.document||hb(a.startContainer)}function d(a){return new cb(a.parentNode,fb(a))}function e(a){return new cb(a.parentNode,fb(a)+1)}function f(a,b,c){var d=11==a.nodeType?a.firstChild:a;return eb(b)?c==b.length?ab.insertAfter(a,b):b.parentNode.insertBefore(a,0==c?b:jb(b,c)):c>=b.childNodes.length?b.appendChild(a):b.insertBefore(a,b.childNodes[c]),d}function g(a,b,d){if(y(a),y(b),c(b)!=c(a))throw new db("WRONG_DOCUMENT_ERR");var e=ib(a.startContainer,a.startOffset,b.endContainer,b.endOffset),f=ib(a.endContainer,a.endOffset,b.startContainer,b.startOffset);return d?0>=e&&f>=0:0>e&&f>0}function h(a){var b,d,e,f;for(e=c(a.range).createDocumentFragment();d=a.next();){if(b=a.isPartiallySelectedSubtree(),d=d.cloneNode(!b),b&&(f=a.getSubtreeIterator(),d.appendChild(h(f)),f.detach()),10==d.nodeType)throw new db("HIERARCHY_REQUEST_ERR");e.appendChild(d)}return e}function i(a,b,c){var d,e,f,g;for(c=c||{stop:!1};f=a.next();)if(a.isPartiallySelectedSubtree()){if(b(f)===!1)return c.stop=!0,void 0;if(g=a.getSubtreeIterator(),i(g,b,c),g.detach(),c.stop)return}else for(d=ab.createIterator(f);e=d.next();)if(b(e)===!1)return c.stop=!0,void 0}function j(a){for(var b;a.next();)a.isPartiallySelectedSubtree()?(b=a.getSubtreeIterator(),j(b),b.detach()):a.remove()}function k(a){for(var b,d,e=c(a.range).createDocumentFragment();b=a.next();){if(a.isPartiallySelectedSubtree()?(b=b.cloneNode(!1),d=a.getSubtreeIterator(),b.appendChild(k(d)),d.detach()):a.remove(),10==b.nodeType)throw new db("HIERARCHY_REQUEST_ERR");e.appendChild(b)}return e}function l(a,b,c){var d,e,f=!(!b||!b.length),g=!!c;return f&&(d=RegExp("^("+b.join("|")+")$")),e=[],i(new n(a,!1),function(b){var h,i;(!f||d.test(b.nodeType))&&(!g||c(b))&&(h=a.startContainer,b==h&&eb(h)&&a.startOffset==h.length||(i=a.endContainer,b==i&&eb(i)&&0==a.endOffset||e.push(b)))}),e}function m(a){var b=void 0===a.getName?"Range":a.getName();return"["+b+"("+ab.inspectNode(a.startContainer)+":"+a.startOffset+", "+ab.inspectNode(a.endContainer)+":"+a.endOffset+")]"}function n(a,b){if(this.range=a,this.clonePartiallySelectedTextNodes=b,!a.collapsed){this.sc=a.startContainer,this.so=a.startOffset,this.ec=a.endContainer,this.eo=a.endOffset;var c=a.commonAncestorContainer;this.sc===this.ec&&eb(this.sc)?(this.isSingleCharacterDataNode=!0,this._first=this._last=this._next=this.sc):(this._first=this._next=this.sc!==c||eb(this.sc)?kb(this.sc,c,!0):this.sc.childNodes[this.so],this._last=this.ec!==c||eb(this.ec)?kb(this.ec,c,!0):this.ec.childNodes[this.eo-1])}}function o(a){return function(b,c){for(var d,e=c?b:b.parentNode;e;){if(d=e.nodeType,mb(a,d))return e;e=e.parentNode}return null}}function p(a,b){if(P(a,b))throw new db("INVALID_NODE_TYPE_ERR")}function q(a,b){if(!mb(b,a.nodeType))throw new db("INVALID_NODE_TYPE_ERR")}function r(a,b){if(0>b||b>(eb(a)?a.length:a.childNodes.length))throw new db("INDEX_SIZE_ERR")}function s(a,b){if(N(a,!0)!==N(b,!0))throw new db("WRONG_DOCUMENT_ERR")}function t(a){if(O(a,!0))throw new db("NO_MODIFICATION_ALLOWED_ERR")}function u(a,b){if(!a)throw new db(b)}function v(a){return ob&&ab.isBrokenNode(a)||!mb(J,a.nodeType)&&!N(a,!0)}function w(a,b){return b<=(eb(a)?a.length:a.childNodes.length)}function x(a){return!!a.startContainer&&!!a.endContainer&&!v(a.startContainer)&&!v(a.endContainer)&&w(a.startContainer,a.startOffset)&&w(a.endContainer,a.endOffset)}function y(a){if(!x(a))throw Error("Range error: Range is no longer valid after DOM mutation ("+a.inspect()+")")}function z(a,b){var c,d,e,f,g;y(a),c=a.startContainer,d=a.startOffset,e=a.endContainer,f=a.endOffset,g=c===e,eb(e)&&f>0&&f<e.length&&jb(e,f,b),eb(c)&&d>0&&d<c.length&&(c=jb(c,d,b),g?(f-=d,e=c):e==c.parentNode&&f>=fb(c)&&f++,d=0),a.setStartAndEnd(c,d,e,f)}function A(a){y(a);var b=a.commonAncestorContainer.parentNode.cloneNode(!1);return b.appendChild(a.cloneContents()),b.innerHTML}function B(a){a.START_TO_START=U,a.START_TO_END=V,a.END_TO_END=W,a.END_TO_START=X,a.NODE_BEFORE=Y,a.NODE_AFTER=Z,a.NODE_BEFORE_AND_AFTER=$,a.NODE_INSIDE=_}function C(a){B(a),B(a.prototype)}function D(a,b){return function(){var c,d,f,g,h,j,k;return y(this),c=this.startContainer,d=this.startOffset,f=this.commonAncestorContainer,g=new n(this,!0),c!==f&&(h=kb(c,f,!0),j=e(h),c=j.node,d=j.offset),i(g,t),g.reset(),k=a(g),g.detach(),b(this,c,d,c,d),k}}function E(c,f){function g(a,b){return function(c){q(c,I),q(nb(c),J);var f=(a?d:e)(c);(b?h:i)(this,f.node,f.offset)}}function h(a,b,c){var d=a.endContainer,e=a.endOffset;(b!==a.startContainer||c!==a.startOffset)&&((nb(b)!=nb(d)||1==ib(b,c,d,e))&&(d=b,e=c),f(a,b,c,d,e))}function i(a,b,c){var d=a.startContainer,e=a.startOffset;(b!==a.endContainer||c!==a.endOffset)&&((nb(b)!=nb(d)||-1==ib(b,c,d,e))&&(d=b,e=c),f(a,d,e,b,c))}var l=function(){};l.prototype=a.rangePrototype,c.prototype=new l,bb.extend(c.prototype,{setStart:function(a,b){p(a,!0),r(a,b),h(this,a,b)},setEnd:function(a,b){p(a,!0),r(a,b),i(this,a,b)},setStartAndEnd:function(){var a=arguments,b=a[0],c=a[1],d=b,e=c;switch(a.length){case 3:e=a[2];break;case 4:d=a[2],e=a[3]}f(this,b,c,d,e)},setBoundary:function(a,b,c){this["set"+(c?"Start":"End")](a,b)},setStartBefore:g(!0,!0),setStartAfter:g(!1,!0),setEndBefore:g(!0,!1),setEndAfter:g(!1,!1),collapse:function(a){y(this),a?f(this,this.startContainer,this.startOffset,this.startContainer,this.startOffset):f(this,this.endContainer,this.endOffset,this.endContainer,this.endOffset)},selectNodeContents:function(a){p(a,!0),f(this,a,0,a,lb(a))},selectNode:function(a){p(a,!1),q(a,I);var b=d(a),c=e(a);f(this,b.node,b.offset,c.node,c.offset)},extractContents:D(k,f),deleteContents:D(j,f),canSurroundContents:function(){var a,c;return y(this),t(this.startContainer),t(this.endContainer),a=new n(this,!0),c=a._first&&b(a._first,this)||a._last&&b(a._last,this),a.detach(),!c},splitBoundaries:function(){z(this)},splitBoundariesPreservingPositions:function(a){z(this,a)},normalizeBoundaries:function(){var a,b,c,d,e,g,h,i,j;y(this),a=this.startContainer,b=this.startOffset,c=this.endContainer,d=this.endOffset,e=function(a){var b=a.nextSibling;b&&b.nodeType==a.nodeType&&(c=a,d=a.length,a.appendData(b.data),b.parentNode.removeChild(b))},g=function(e){var f,g,h=e.previousSibling;h&&h.nodeType==e.nodeType&&(a=e,f=e.length,b=h.length,e.insertData(0,h.data),h.parentNode.removeChild(h),a==c?(d+=b,c=a):c==e.parentNode&&(g=fb(e),d==g?(c=e,d=f):d>g&&d--))},h=!0,eb(c)?c.length==d&&e(c):(d>0&&(i=c.childNodes[d-1],i&&eb(i)&&e(i)),h=!this.collapsed),h?eb(a)?0==b&&g(a):b<a.childNodes.length&&(j=a.childNodes[b],j&&eb(j)&&g(j)):(a=c,b=d),f(this,a,b,c,d)},collapseToPoint:function(a,b){p(a,!0),r(a,b),this.setStartAndEnd(a,b)}}),C(c)}function F(a){a.collapsed=a.startContainer===a.endContainer&&a.startOffset===a.endOffset,a.commonAncestorContainer=a.collapsed?a.startContainer:ab.getCommonAncestor(a.startContainer,a.endContainer)}function G(a,b,c,d,e){a.startContainer=b,a.startOffset=c,a.endContainer=d,a.endOffset=e,a.document=ab.getDocument(b),F(a)}function H(a){this.startContainer=a,this.startOffset=0,this.endContainer=a,this.endOffset=0,this.document=a,F(this)}var I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab=a.dom,bb=a.util,cb=ab.DomPosition,db=a.DOMException,eb=ab.isCharacterDataNode,fb=ab.getNodeIndex,gb=ab.isOrIsAncestorOf,hb=ab.getDocument,ib=ab.comparePoints,jb=ab.splitDataNode,kb=ab.getClosestAncestorIn,lb=ab.getNodeLength,mb=ab.arrayContains,nb=ab.getRootContainer,ob=a.features.crashyTextNodes;n.prototype={_current:null,_next:null,_first:null,_last:null,isSingleCharacterDataNode:!1,reset:function(){this._current=null,this._next=this._first},hasNext:function(){return!!this._next},next:function(){var a=this._current=this._next;return a&&(this._next=a!==this._last?a.nextSibling:null,eb(a)&&this.clonePartiallySelectedTextNodes&&(a===this.ec&&(a=a.cloneNode(!0)).deleteData(this.eo,a.length-this.eo),this._current===this.sc&&(a=a.cloneNode(!0)).deleteData(0,this.so))),a},remove:function(){var a,b,c=this._current;!eb(c)||c!==this.sc&&c!==this.ec?c.parentNode&&c.parentNode.removeChild(c):(a=c===this.sc?this.so:0,b=c===this.ec?this.eo:c.length,a!=b&&c.deleteData(a,b-a))},isPartiallySelectedSubtree:function(){var a=this._current;return b(a,this.range)},getSubtreeIterator:function(){var a,b,d,e,f,g;return this.isSingleCharacterDataNode?(a=this.range.cloneRange(),a.collapse(!1)):(a=new H(c(this.range)),b=this._current,d=b,e=0,f=b,g=lb(b),gb(b,this.sc)&&(d=this.sc,e=this.so),gb(b,this.ec)&&(f=this.ec,g=this.eo),G(a,d,e,f,g)),new n(a,this.clonePartiallySelectedTextNodes)},detach:function(){this.range=this._current=this._next=this._first=this._last=this.sc=this.so=this.ec=this.eo=null}},I=[1,3,4,5,7,8,10],J=[2,9,11],K=[5,6,10,12],L=[1,3,4,5,7,8,10,11],M=[1,3,4,5,7,8],N=o([9,11]),O=o(K),P=o([6,10,12]),Q=document.createElement("style"),R=!1;try{Q.innerHTML="<b>x</b>",R=3==Q.firstChild.nodeType}catch(pb){}a.features.htmlParsingConforms=R,S=R?function(a){var b,c=this.startContainer,d=hb(c);if(!c)throw new db("INVALID_STATE_ERR");return b=null,1==c.nodeType?b=c:eb(c)&&(b=ab.parentElement(c)),b=null===b||"HTML"==b.nodeName&&ab.isHtmlNamespace(hb(b).documentElement)&&ab.isHtmlNamespace(b)?d.createElement("body"):b.cloneNode(!1),b.innerHTML=a,ab.fragmentFromNodeChildren(b)}:function(a){var b=c(this),d=b.createElement("body");return d.innerHTML=a,ab.fragmentFromNodeChildren(d)},T=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],U=0,V=1,W=2,X=3,Y=0,Z=1,$=2,_=3,bb.extend(a.rangePrototype,{compareBoundaryPoints:function(a,b){var c,d,e,f,g,h;return y(this),s(this.startContainer,b.startContainer),g=a==X||a==U?"start":"end",h=a==V||a==U?"start":"end",c=this[g+"Container"],d=this[g+"Offset"],e=b[h+"Container"],f=b[h+"Offset"],ib(c,d,e,f)},insertNode:function(a){if(y(this),q(a,L),t(this.startContainer),gb(a,this.startContainer))throw new db("HIERARCHY_REQUEST_ERR");var b=f(a,this.startContainer,this.startOffset);this.setStartBefore(b)},cloneContents:function(){var a,b,d;return y(this),this.collapsed?c(this).createDocumentFragment():this.startContainer===this.endContainer&&eb(this.startContainer)?(a=this.startContainer.cloneNode(!0),a.data=a.data.slice(this.startOffset,this.endOffset),b=c(this).createDocumentFragment(),b.appendChild(a),b):(d=new n(this,!0),a=h(d),d.detach(),a)},canSurroundContents:function(){var a,c;return y(this),t(this.startContainer),t(this.endContainer),a=new n(this,!0),c=a._first&&b(a._first,this)||a._last&&b(a._last,this),a.detach(),!c},surroundContents:function(a){if(q(a,M),!this.canSurroundContents())throw new db("INVALID_STATE_ERR");var b=this.extractContents();if(a.hasChildNodes())for(;a.lastChild;)a.removeChild(a.lastChild);f(a,this.startContainer,this.startOffset),a.appendChild(b),this.selectNode(a)},cloneRange:function(){var a,b,d;for(y(this),a=new H(c(this)),b=T.length;b--;)d=T[b],a[d]=this[d];return a},toString:function(){var a,b,c;return y(this),a=this.startContainer,a===this.endContainer&&eb(a)?3==a.nodeType||4==a.nodeType?a.data.slice(this.startOffset,this.endOffset):"":(b=[],c=new n(this,!0),i(c,function(a){(3==a.nodeType||4==a.nodeType)&&b.push(a.data)}),c.detach(),b.join(""))},compareNode:function(a){var b,c,d,e;if(y(this),b=a.parentNode,c=fb(a),!b)throw new db("NOT_FOUND_ERR");return d=this.comparePoint(b,c),e=this.comparePoint(b,c+1),0>d?e>0?$:Y:e>0?Z:_},comparePoint:function(a,b){return y(this),u(a,"HIERARCHY_REQUEST_ERR"),s(a,this.startContainer),ib(a,b,this.startContainer,this.startOffset)<0?-1:ib(a,b,this.endContainer,this.endOffset)>0?1:0},createContextualFragment:S,toHtml:function(){return A(this)},intersectsNode:function(a,b){var d,e,f,g;return y(this),u(a,"NOT_FOUND_ERR"),hb(a)!==c(this)?!1:(d=a.parentNode,e=fb(a),u(d,"NOT_FOUND_ERR"),f=ib(d,e,this.endContainer,this.endOffset),g=ib(d,e+1,this.startContainer,this.startOffset),b?0>=f&&g>=0:0>f&&g>0)},isPointInRange:function(a,b){return y(this),u(a,"HIERARCHY_REQUEST_ERR"),s(a,this.startContainer),ib(a,b,this.startContainer,this.startOffset)>=0&&ib(a,b,this.endContainer,this.endOffset)<=0},intersectsRange:function(a){return g(this,a,!1)},intersectsOrTouchesRange:function(a){return g(this,a,!0)},intersection:function(a){var b,c,d;return this.intersectsRange(a)?(b=ib(this.startContainer,this.startOffset,a.startContainer,a.startOffset),c=ib(this.endContainer,this.endOffset,a.endContainer,a.endOffset),d=this.cloneRange(),-1==b&&d.setStart(a.startContainer,a.startOffset),1==c&&d.setEnd(a.endContainer,a.endOffset),d):null},union:function(a){if(this.intersectsOrTouchesRange(a)){var b=this.cloneRange();return-1==ib(a.startContainer,a.startOffset,this.startContainer,this.startOffset)&&b.setStart(a.startContainer,a.startOffset),1==ib(a.endContainer,a.endOffset,this.endContainer,this.endOffset)&&b.setEnd(a.endContainer,a.endOffset),b}throw new db("Ranges do not intersect")},containsNode:function(a,b){return b?this.intersectsNode(a,!1):this.compareNode(a)==_},containsNodeContents:function(a){return this.comparePoint(a,0)>=0&&this.comparePoint(a,lb(a))<=0},containsRange:function(a){var b=this.intersection(a);return null!==b&&a.equals(b)},containsNodeText:function(a){var b,c,d=this.cloneRange();return d.selectNode(a),b=d.getNodes([3]),b.length>0?(d.setStart(b[0],0),c=b.pop(),d.setEnd(c,c.length),this.containsRange(d)):this.containsNodeContents(a)},getNodes:function(a,b){return y(this),l(this,a,b)},getDocument:function(){return c(this)},collapseBefore:function(a){this.setEndBefore(a),this.collapse(!1)},collapseAfter:function(a){this.setStartAfter(a),this.collapse(!0)},getBookmark:function(b){var d,e,f,g=c(this),h=a.createRange(g);return b=b||ab.getBody(g),h.selectNodeContents(b),d=this.intersection(h),e=0,f=0,d&&(h.setEnd(d.startContainer,d.startOffset),e=(""+h).length,f=e+(""+d).length),{start:e,end:f,containerNode:b}},moveToBookmark:function(a){var b,c,d,e,f,g,h,i=a.containerNode,j=0;for(this.setStart(i,0),this.collapse(!0),b=[i],d=!1,e=!1;!e&&(c=b.pop());)if(3==c.nodeType)f=j+c.length,!d&&a.start>=j&&a.start<=f&&(this.setStart(c,a.start-j),d=!0),d&&a.end>=j&&a.end<=f&&(this.setEnd(c,a.end-j),e=!0),j=f;else for(h=c.childNodes,g=h.length;g--;)b.push(h[g])},getName:function(){return"DomRange"},equals:function(a){return H.rangesEqual(this,a)},isValid:function(){return x(this)},inspect:function(){return m(this)},detach:function(){}}),E(H,G),bb.extend(H,{rangeProperties:T,RangeIterator:n,copyComparisonConstants:C,createPrototypeRange:E,inspect:m,toHtml:A,getRangeDocument:c,rangesEqual:function(a,b){return a.startContainer===b.startContainer&&a.startOffset===b.startOffset&&a.endContainer===b.endContainer&&a.endOffset===b.endOffset}}),a.DomRange=H}),H.createCoreModule("WrappedRange",["DomRange"],function(a,b){var c,d,e,f,g,h,i,j,k=a.dom,l=a.util,m=k.DomPosition,n=a.DomRange,o=k.getBody,p=k.getContentDocument,q=k.isCharacterDataNode;a.features.implementsDomRange&&!function(){function d(a){for(var b,c=s.length;c--;)b=s[c],a[b]=a.nativeRange[b];a.collapsed=a.startContainer===a.endContainer&&a.startOffset===a.endOffset}function e(a,b,c,d,e){var f=a.startContainer!==b||a.startOffset!=c,g=a.endContainer!==d||a.endOffset!=e,h=!a.equals(a.nativeRange);(f||g||h)&&(a.setEnd(d,e),a.setStart(b,c))}var f,g,h,i,j,m,q,r,s=n.rangeProperties;c=function(a){if(!a)throw b.createError("WrappedRange: Range must be specified");this.nativeRange=a,d(this)},n.createPrototypeRange(c,e),f=c.prototype,f.selectNode=function(a){this.nativeRange.selectNode(a),d(this)},f.cloneContents=function(){return this.nativeRange.cloneContents()},f.surroundContents=function(a){this.nativeRange.surroundContents(a),d(this)},f.collapse=function(a){this.nativeRange.collapse(a),d(this)},f.cloneRange=function(){return new c(this.nativeRange.cloneRange())},f.refresh=function(){d(this)},f.toString=function(){return""+this.nativeRange},h=document.createTextNode("test"),o(document).appendChild(h),i=document.createRange(),i.setStart(h,0),i.setEnd(h,0);try{i.setStart(h,1),f.setStart=function(a,b){this.nativeRange.setStart(a,b),d(this)},f.setEnd=function(a,b){this.nativeRange.setEnd(a,b),d(this)},g=function(a){return function(b){this.nativeRange[a](b),d(this)}}}catch(t){f.setStart=function(a,b){try{this.nativeRange.setStart(a,b)}catch(c){this.nativeRange.setEnd(a,b),this.nativeRange.setStart(a,b)}d(this)},f.setEnd=function(a,b){try{this.nativeRange.setEnd(a,b)}catch(c){this.nativeRange.setStart(a,b),this.nativeRange.setEnd(a,b)}d(this)},g=function(a,b){return function(c){try{this.nativeRange[a](c)}catch(e){this.nativeRange[b](c),this.nativeRange[a](c)}d(this)}}}f.setStartBefore=g("setStartBefore","setEndBefore"),f.setStartAfter=g("setStartAfter","setEndAfter"),f.setEndBefore=g("setEndBefore","setStartBefore"),f.setEndAfter=g("setEndAfter","setStartAfter"),f.selectNodeContents=function(a){this.setStartAndEnd(a,0,k.getNodeLength(a))},i.selectNodeContents(h),i.setEnd(h,3),j=document.createRange(),j.selectNodeContents(h),j.setEnd(h,4),j.setStart(h,2),f.compareBoundaryPoints=-1==i.compareBoundaryPoints(i.START_TO_END,j)&&1==i.compareBoundaryPoints(i.END_TO_START,j)?function(a,b){return b=b.nativeRange||b,a==b.START_TO_END?a=b.END_TO_START:a==b.END_TO_START&&(a=b.START_TO_END),this.nativeRange.compareBoundaryPoints(a,b)}:function(a,b){return this.nativeRange.compareBoundaryPoints(a,b.nativeRange||b)},m=document.createElement("div"),m.innerHTML="123",q=m.firstChild,r=o(document),r.appendChild(m),i.setStart(q,1),i.setEnd(q,2),i.deleteContents(),"13"==q.data&&(f.deleteContents=function(){this.nativeRange.deleteContents(),d(this)},f.extractContents=function(){var a=this.nativeRange.extractContents();return d(this),a}),r.removeChild(m),r=null,l.isHostMethod(i,"createContextualFragment")&&(f.createContextualFragment=function(a){return this.nativeRange.createContextualFragment(a)}),o(document).removeChild(h),f.getName=function(){return"WrappedRange"},a.WrappedRange=c,a.createNativeRange=function(a){return a=p(a,b,"createNativeRange"),a.createRange()}}(),a.features.implementsTextRange&&(e=function(a){var b,c,d,e=a.parentElement(),f=a.duplicate();return f.collapse(!0),b=f.parentElement(),f=a.duplicate(),f.collapse(!1),c=f.parentElement(),d=b==c?b:k.getCommonAncestor(b,c),d==e?d:k.getCommonAncestor(e,d)},f=function(a){return 0==a.compareEndPoints("StartToEnd",a)},g=function(a,b,c,d,e){var f,g,h,i,j,l,n,o,p,r,s,t,u,v,w,x,y=a.duplicate();if(y.collapse(c),f=y.parentElement(),k.isOrIsAncestorOf(b,f)||(f=b),!f.canHaveHTML)return g=new m(f.parentNode,k.getNodeIndex(f)),{boundaryPosition:g,nodeInfo:{nodeIndex:g.offset,containerElement:g.node}};for(h=k.getDocument(f).createElement("span"),h.parentNode&&h.parentNode.removeChild(h),j=c?"StartToStart":"StartToEnd",r=e&&e.containerElement==f?e.nodeIndex:0,s=f.childNodes.length,t=s,u=t;;){if(u==s?f.appendChild(h):f.insertBefore(h,f.childNodes[u]),y.moveToElementText(h),i=y.compareEndPoints(j,a),0==i||r==t)break;if(-1==i){if(t==r+1)break;r=u}else t=t==r+1?r:u;u=Math.floor((r+t)/2),f.removeChild(h)}if(p=h.nextSibling,-1==i&&p&&q(p)){if(y.setEndPoint(c?"EndToStart":"EndToEnd",a),/[\r\n]/.test(p.data))for(w=y.duplicate(),x=w.text.replace(/\r\n/g,"\r").length,v=w.moveStart("character",x);-1==(i=w.compareEndPoints("StartToEnd",w));)v++,w.moveStart("character",1);else v=y.text.length;o=new m(p,v)}else l=(d||!c)&&h.previousSibling,n=(d||c)&&h.nextSibling,o=n&&q(n)?new m(n,0):l&&q(l)?new m(l,l.data.length):new m(f,k.getNodeIndex(h));return h.parentNode.removeChild(h),{boundaryPosition:o,nodeInfo:{nodeIndex:u,containerElement:f}}},h=function(a,b){var c,d,e,f,g=a.offset,h=k.getDocument(a.node),i=o(h).createTextRange(),j=q(a.node);return j?(c=a.node,d=c.parentNode):(f=a.node.childNodes,c=g<f.length?f[g]:null,d=a.node),e=h.createElement("span"),e.innerHTML="&#feff;",c?d.insertBefore(e,c):d.appendChild(e),i.moveToElementText(e),i.collapse(!b),d.removeChild(e),j&&i[b?"moveStart":"moveEnd"]("character",g),i},d=function(a){this.textRange=a,this.refresh()},d.prototype=new n(document),d.prototype.refresh=function(){var a,b,c,d=e(this.textRange);
f(this.textRange)?b=a=g(this.textRange,d,!0,!0).boundaryPosition:(c=g(this.textRange,d,!0,!1),a=c.boundaryPosition,b=g(this.textRange,d,!1,!1,c.nodeInfo).boundaryPosition),this.setStart(a.node,a.offset),this.setEnd(b.node,b.offset)},d.prototype.getName=function(){return"WrappedTextRange"},n.copyComparisonConstants(d),i=function(a){var b,c,d;return a.collapsed?h(new m(a.startContainer,a.startOffset),!0):(b=h(new m(a.startContainer,a.startOffset),!0),c=h(new m(a.endContainer,a.endOffset),!1),d=o(n.getRangeDocument(a)).createTextRange(),d.setEndPoint("StartToStart",b),d.setEndPoint("EndToEnd",c),d)},d.rangeToTextRange=i,d.prototype.toTextRange=function(){return i(this)},a.WrappedTextRange=d,(!a.features.implementsDomRange||a.config.preferTextRange)&&(j=function(){return this}(),void 0===j.Range&&(j.Range=d),a.createNativeRange=function(a){return a=p(a,b,"createNativeRange"),o(a).createTextRange()},a.WrappedRange=d)),a.createRange=function(c){return c=p(c,b,"createRange"),new a.WrappedRange(a.createNativeRange(c))},a.createRangyRange=function(a){return a=p(a,b,"createRangyRange"),new n(a)},a.createIframeRange=function(c){return b.deprecationNotice("createIframeRange()","createRange(iframeEl)"),a.createRange(c)},a.createIframeRangyRange=function(c){return b.deprecationNotice("createIframeRangyRange()","createRangyRange(iframeEl)"),a.createRangyRange(c)},a.addShimListener(function(b){var c=b.document;void 0===c.createRange&&(c.createRange=function(){return a.createRange(c)}),c=b=null})}),H.createCoreModule("WrappedSelection",["DomRange","WrappedRange"],function(a,b){function c(a){return"string"==typeof a?/^backward(s)?$/i.test(a):!!a}function d(a,c){if(a){if(A.isWindow(a))return a;if(a instanceof r)return a.win;var d=A.getContentDocument(a,b,c);return A.getWindow(d)}return window}function e(a){return d(a,"getWinSelection").getSelection()}function f(a){return d(a,"getDocSelection").document.selection}function g(a){var b=!1;return a.anchorNode&&(b=1==A.comparePoints(a.anchorNode,a.anchorOffset,a.focusNode,a.focusOffset)),b}function h(a,b,c){var d=c?"end":"start",e=c?"start":"end";a.anchorNode=b[d+"Container"],a.anchorOffset=b[d+"Offset"],a.focusNode=b[e+"Container"],a.focusOffset=b[e+"Offset"]}function i(a){var b=a.nativeSelection;a.anchorNode=b.anchorNode,a.anchorOffset=b.anchorOffset,a.focusNode=b.focusNode,a.focusOffset=b.focusOffset}function j(a){a.anchorNode=a.focusNode=null,a.anchorOffset=a.focusOffset=0,a.rangeCount=0,a.isCollapsed=!0,a._ranges.length=0}function k(b){var c;return b instanceof D?(c=a.createNativeRange(b.getDocument()),c.setEnd(b.endContainer,b.endOffset),c.setStart(b.startContainer,b.startOffset)):b instanceof E?c=b.nativeRange:J.implementsDomRange&&b instanceof A.getWindow(b.startContainer).Range&&(c=b),c}function l(a){if(!a.length||1!=a[0].nodeType)return!1;for(var b=1,c=a.length;c>b;++b)if(!A.isAncestorOf(a[0],a[b]))return!1;return!0}function m(a){var c=a.getNodes();if(!l(c))throw b.createError("getSingleElementFromRange: range "+a.inspect()+" did not consist of a single element");return c[0]}function n(a){return!!a&&void 0!==a.text}function o(a,b){var c=new E(b);a._ranges=[c],h(a,c,!1),a.rangeCount=1,a.isCollapsed=c.collapsed}function p(b){var c,d,e,f;if(b._ranges.length=0,"None"==b.docSelection.type)j(b);else if(c=b.docSelection.createRange(),n(c))o(b,c);else{for(b.rangeCount=c.length,e=L(c.item(0)),f=0;f<b.rangeCount;++f)d=a.createRange(e),d.selectNode(c.item(f)),b._ranges.push(d);b.isCollapsed=1==b.rangeCount&&b._ranges[0].collapsed,h(b,b._ranges[b.rangeCount-1],!1)}}function q(a,c){var d,e,f=a.docSelection.createRange(),g=m(c),h=L(f.item(0)),i=M(h).createControlRange();for(d=0,e=f.length;e>d;++d)i.add(f.item(d));try{i.add(g)}catch(j){throw b.createError("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)")}i.select(),p(a)}function r(a,b,c){this.nativeSelection=a,this.docSelection=b,this._ranges=[],this.win=c,this.refresh()}function s(a){a.win=a.anchorNode=a.focusNode=a._ranges=null,a.rangeCount=a.anchorOffset=a.focusOffset=0,a.detached=!0}function t(a,b){for(var c,d,e=bb.length;e--;)if(c=bb[e],d=c.selection,"deleteAll"==b)s(d);else if(c.win==a)return"delete"==b?(bb.splice(e,1),!0):d;return"deleteAll"==b&&(bb.length=0),null}function u(a,c){var d,e,f,g=L(c[0].startContainer),h=M(g).createControlRange();for(d=0,f=c.length;f>d;++d){e=m(c[d]);try{h.add(e)}catch(i){throw b.createError("setRanges(): Element within one of the specified Ranges could not be added to control selection (does it have layout?)")}}h.select(),p(a)}function v(a,b){if(a.win.document!=L(b))throw new F("WRONG_DOCUMENT_ERR")}function w(b){return function(c,d){var e;this.rangeCount?(e=this.getRangeAt(0),e["set"+(b?"Start":"End")](c,d)):(e=a.createRange(this.win.document),e.setStartAndEnd(c,d)),this.setSingleRange(e,this.isBackward())}}function x(a){var b,c,d=[],e=new G(a.anchorNode,a.anchorOffset),f=new G(a.focusNode,a.focusOffset),g="function"==typeof a.getName?a.getName():"Selection";if(void 0!==a.rangeCount)for(b=0,c=a.rangeCount;c>b;++b)d[b]=D.inspect(a.getRangeAt(b));return"["+g+"(Ranges: "+d.join(", ")+")(anchor: "+e.inspect()+", focus: "+f.inspect()+"]"}var y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb;if(a.config.checkSelectionRanges=!0,y="boolean",z="number",A=a.dom,B=a.util,C=B.isHostMethod,D=a.DomRange,E=a.WrappedRange,F=a.DOMException,G=A.DomPosition,J=a.features,K="Control",L=A.getDocument,M=A.getBody,N=D.rangesEqual,O=C(window,"getSelection"),P=B.isHostObject(document,"selection"),J.implementsWinGetSelection=O,J.implementsDocSelection=P,Q=P&&(!O||a.config.preferTextRange),Q?(H=f,a.isSelectionValid=function(a){var b=d(a,"isSelectionValid").document,c=b.selection;return"None"!=c.type||L(c.createRange().parentElement())==b}):O?(H=e,a.isSelectionValid=function(){return!0}):b.fail("Neither document.selection or window.getSelection() detected."),a.getNativeSelection=H,R=H(),S=a.createNativeRange(document),T=M(document),U=B.areHostProperties(R,["anchorNode","focusNode","anchorOffset","focusOffset"]),J.selectionHasAnchorAndFocus=U,V=C(R,"extend"),J.selectionHasExtend=V,W=typeof R.rangeCount==z,J.selectionHasRangeCount=W,X=!1,Y=!0,Z=V?function(b,c){var d=D.getRangeDocument(c),e=a.createRange(d);e.collapseToPoint(c.endContainer,c.endOffset),b.addRange(k(e)),b.extend(c.startContainer,c.startOffset)}:null,B.areHostMethods(R,["addRange","getRangeAt","removeAllRanges"])&&typeof R.rangeCount==z&&J.implementsDomRange&&!function(){var b,c,d,e,f,h,i,j,k,l,m,n=window.getSelection();if(n){for(b=n.rangeCount,c=b>1,d=[],e=g(n),f=0;b>f;++f)d[f]=n.getRangeAt(f);for(h=M(document),i=h.appendChild(document.createElement("div")),i.contentEditable="false",j=i.appendChild(document.createTextNode("   ")),k=document.createRange(),k.setStart(j,1),k.collapse(!0),n.addRange(k),Y=1==n.rangeCount,n.removeAllRanges(),c||(l=window.navigator.appVersion.match(/Chrome\/(.*?) /),l&&parseInt(l[1])>=36?X=!1:(m=k.cloneRange(),k.setStart(j,0),m.setEnd(j,3),m.setStart(j,2),n.addRange(k),n.addRange(m),X=2==n.rangeCount)),h.removeChild(i),n.removeAllRanges(),f=0;b>f;++f)0==f&&e?Z?Z(n,d[f]):(a.warn("Rangy initialization: original selection was backwards but selection has been restored forwards because the browser does not support Selection.extend"),n.addRange(d[f])):n.addRange(d[f])}}(),J.selectionSupportsMultipleRanges=X,J.collapsedNonEditableSelectionsSupported=Y,$=!1,T&&C(T,"createControlRange")&&(_=T.createControlRange(),B.areHostProperties(_,["item","add"])&&($=!0)),J.implementsControlRange=$,I=U?function(a){return a.anchorNode===a.focusNode&&a.anchorOffset===a.focusOffset}:function(a){return a.rangeCount?a.getRangeAt(a.rangeCount-1).collapsed:!1},C(R,"getRangeAt")?ab=function(a,b){try{return a.getRangeAt(b)}catch(c){return null}}:U&&(ab=function(b){var c=L(b.anchorNode),d=a.createRange(c);return d.setStartAndEnd(b.anchorNode,b.anchorOffset,b.focusNode,b.focusOffset),d.collapsed!==this.isCollapsed&&d.setStartAndEnd(b.focusNode,b.focusOffset,b.anchorNode,b.anchorOffset),d}),r.prototype=a.selectionPrototype,bb=[],cb=function(a){var b,c,e;return a&&a instanceof r?(a.refresh(),a):(a=d(a,"getNativeSelection"),b=t(a),c=H(a),e=P?f(a):null,b?(b.nativeSelection=c,b.docSelection=e,b.refresh()):(b=new r(c,e,a),bb.push({win:a,selection:b})),b)},a.getSelection=cb,a.getIframeSelection=function(c){return b.deprecationNotice("getIframeSelection()","getSelection(iframeEl)"),a.getSelection(A.getIframeWindow(c))},db=r.prototype,!Q&&U&&B.areHostMethods(R,["removeAllRanges","addRange"]))db.removeAllRanges=function(){this.nativeSelection.removeAllRanges(),j(this)},eb=function(a,b){Z(a.nativeSelection,b),a.refresh()},db.addRange=W?function(b,d){var e,f;$&&P&&this.docSelection.type==K?q(this,b):c(d)&&V?eb(this,b):(X?e=this.rangeCount:(this.removeAllRanges(),e=0),this.nativeSelection.addRange(k(b).cloneRange()),this.rangeCount=this.nativeSelection.rangeCount,this.rangeCount==e+1?(a.config.checkSelectionRanges&&(f=ab(this.nativeSelection,this.rangeCount-1),f&&!N(f,b)&&(b=new E(f))),this._ranges[this.rangeCount-1]=b,h(this,b,hb(this.nativeSelection)),this.isCollapsed=I(this)):this.refresh())}:function(a,b){c(b)&&V?eb(this,a):(this.nativeSelection.addRange(k(a)),this.refresh())},db.setRanges=function(a){if($&&P&&a.length>1)u(this,a);else{this.removeAllRanges();for(var b=0,c=a.length;c>b;++b)this.addRange(a[b])}};else{if(!(C(R,"empty")&&C(S,"select")&&$&&Q))return b.fail("No means of selecting a Range or TextRange was found"),!1;db.removeAllRanges=function(){var a,b,c;try{this.docSelection.empty(),"None"!=this.docSelection.type&&(this.anchorNode?a=L(this.anchorNode):this.docSelection.type==K&&(b=this.docSelection.createRange(),b.length&&(a=L(b.item(0)))),a&&(c=M(a).createTextRange(),c.select(),this.docSelection.empty()))}catch(d){}j(this)},db.addRange=function(b){this.docSelection.type==K?q(this,b):(a.WrappedTextRange.rangeToTextRange(b).select(),this._ranges[0]=b,this.rangeCount=1,this.isCollapsed=this._ranges[0].collapsed,h(this,b,!1))},db.setRanges=function(a){this.removeAllRanges();var b=a.length;b>1?u(this,a):b&&this.addRange(a[0])}}if(db.getRangeAt=function(a){if(0>a||a>=this.rangeCount)throw new F("INDEX_SIZE_ERR");return this._ranges[a].cloneRange()},Q)fb=function(b){var c;a.isSelectionValid(b.win)?c=b.docSelection.createRange():(c=M(b.win.document).createTextRange(),c.collapse(!0)),b.docSelection.type==K?p(b):n(c)?o(b,c):j(b)};else if(C(R,"getRangeAt")&&typeof R.rangeCount==z)fb=function(b){if($&&P&&b.docSelection.type==K)p(b);else if(b._ranges.length=b.rangeCount=b.nativeSelection.rangeCount,b.rangeCount){for(var c=0,d=b.rangeCount;d>c;++c)b._ranges[c]=new a.WrappedRange(b.nativeSelection.getRangeAt(c));h(b,b._ranges[b.rangeCount-1],hb(b.nativeSelection)),b.isCollapsed=I(b)}else j(b)};else{if(!U||typeof R.isCollapsed!=y||typeof S.collapsed!=y||!J.implementsDomRange)return b.fail("No means of obtaining a Range or TextRange from the user's selection was found"),!1;fb=function(a){var b,c=a.nativeSelection;c.anchorNode?(b=ab(c,0),a._ranges=[b],a.rangeCount=1,i(a),a.isCollapsed=I(a)):j(a)}}db.refresh=function(a){var b,c=a?this._ranges.slice(0):null,d=this.anchorNode,e=this.anchorOffset;if(fb(this),a){if(b=c.length,b!=this._ranges.length)return!0;if(this.anchorNode!=d||this.anchorOffset!=e)return!0;for(;b--;)if(!N(c[b],this._ranges[b]))return!0;return!1}},gb=function(a,b){var c,d,e=a.getAllRanges();for(a.removeAllRanges(),c=0,d=e.length;d>c;++c)N(b,e[c])||a.addRange(e[c]);a.rangeCount||j(a)},db.removeRange=$&&P?function(a){var b,c,d,e,f,g,h,i;if(this.docSelection.type==K){for(b=this.docSelection.createRange(),c=m(a),d=L(b.item(0)),e=M(d).createControlRange(),g=!1,h=0,i=b.length;i>h;++h)f=b.item(h),f!==c||g?e.add(b.item(h)):g=!0;e.select(),p(this)}else gb(this,a)}:function(a){gb(this,a)},!Q&&U&&J.implementsDomRange?(hb=g,db.isBackward=function(){return hb(this)}):hb=db.isBackward=function(){return!1},db.isBackwards=db.isBackward,db.toString=function(){var a,b,c=[];for(a=0,b=this.rangeCount;b>a;++a)c[a]=""+this._ranges[a];return c.join("")},db.collapse=function(b,c){v(this,b);var d=a.createRange(b);d.collapseToPoint(b,c),this.setSingleRange(d),this.isCollapsed=!0},db.collapseToStart=function(){if(!this.rangeCount)throw new F("INVALID_STATE_ERR");var a=this._ranges[0];this.collapse(a.startContainer,a.startOffset)},db.collapseToEnd=function(){if(!this.rangeCount)throw new F("INVALID_STATE_ERR");var a=this._ranges[this.rangeCount-1];this.collapse(a.endContainer,a.endOffset)},db.selectAllChildren=function(b){v(this,b);var c=a.createRange(b);c.selectNodeContents(b),this.setSingleRange(c)},db.deleteFromDocument=function(){var a,b,c,d,e;if($&&P&&this.docSelection.type==K){for(a=this.docSelection.createRange();a.length;)b=a.item(0),a.remove(b),b.parentNode.removeChild(b);this.refresh()}else if(this.rangeCount&&(c=this.getAllRanges(),c.length)){for(this.removeAllRanges(),d=0,e=c.length;e>d;++d)c[d].deleteContents();this.addRange(c[e-1])}},db.eachRange=function(a,b){for(var c=0,d=this._ranges.length;d>c;++c)if(a(this.getRangeAt(c)))return b},db.getAllRanges=function(){var a=[];return this.eachRange(function(b){a.push(b)}),a},db.setSingleRange=function(a,b){this.removeAllRanges(),this.addRange(a,b)},db.callMethodOnEachRange=function(a,b){var c=[];return this.eachRange(function(d){c.push(d[a].apply(d,b))}),c},db.setStart=w(!0),db.setEnd=w(!1),a.rangePrototype.select=function(a){cb(this.getDocument()).setSingleRange(this,a)},db.changeEachRange=function(a){var b=[],c=this.isBackward();this.eachRange(function(c){a(c),b.push(c)}),this.removeAllRanges(),c&&1==b.length?this.addRange(b[0],"backward"):this.setRanges(b)},db.containsNode=function(a,b){return this.eachRange(function(c){return c.containsNode(a,b)},!0)||!1},db.getBookmark=function(a){return{backward:this.isBackward(),rangeBookmarks:this.callMethodOnEachRange("getBookmark",[a])}},db.moveToBookmark=function(b){var c,d,e,f=[];for(c=0;d=b.rangeBookmarks[c++];)e=a.createRange(this.win),e.moveToBookmark(d),f.push(e);b.backward?this.setSingleRange(f[0],"backward"):this.setRanges(f)},db.toHtml=function(){var a=[];return this.eachRange(function(b){a.push(D.toHtml(b))}),a.join("")},J.implementsTextRange&&(db.getNativeTextRange=function(){var c,d;if(c=this.docSelection){if(d=c.createRange(),n(d))return d;throw b.createError("getNativeTextRange: selection is a control selection")}if(this.rangeCount>0)return a.WrappedTextRange.rangeToTextRange(this.getRangeAt(0));throw b.createError("getNativeTextRange: selection contains no range")}),db.getName=function(){return"WrappedSelection"},db.inspect=function(){return x(this)},db.detach=function(){t(this.win,"delete"),s(this)},r.detachAll=function(){t(null,"deleteAll")},r.inspect=x,r.isDirectionBackward=c,a.Selection=r,a.selectionPrototype=db,a.addShimListener(function(a){void 0===a.getSelection&&(a.getSelection=function(){return cb(a)}),a=null})}),H)},this),function(a,b){"function"==typeof define&&define.amd?define(["rangy"],a):a(b.rangy)}(function(a){a.createModule("SaveRestore",["WrappedRange"],function(a,b){function c(a,b){return(b||document).getElementById(a)}function d(a,b){var c,d="selectionBoundary_"+ +new Date+"_"+(""+Math.random()).slice(2),e=o.getDocument(a.startContainer),f=a.cloneRange();return f.collapse(b),c=e.createElement("span"),c.id=d,c.style.lineHeight="0",c.style.display="none",c.className="rangySelectionBoundary",c.appendChild(e.createTextNode(p)),f.insertNode(c),c}function e(a,d,e,f){var g=c(e,a);g?(d[f?"setStartBefore":"setEndBefore"](g),g.parentNode.removeChild(g)):b.warn("Marker element has been removed. Cannot restore selection.")}function f(a,b){return b.compareBoundaryPoints(a.START_TO_START,a)}function g(b,c){var e,f,g=a.DomRange.getRangeDocument(b),h=""+b;return b.collapsed?(f=d(b,!1),{document:g,markerId:f.id,collapsed:!0}):(f=d(b,!1),e=d(b,!0),{document:g,startMarkerId:e.id,endMarkerId:f.id,collapsed:!1,backward:c,toString:function(){return"original text: '"+h+"', new text: '"+b+"'"}})}function h(d,f){var g,h,i,j=d.document;return void 0===f&&(f=!0),g=a.createRange(j),d.collapsed?(h=c(d.markerId,j),h?(h.style.display="inline",i=h.previousSibling,i&&3==i.nodeType?(h.parentNode.removeChild(h),g.collapseToPoint(i,i.length)):(g.collapseBefore(h),h.parentNode.removeChild(h))):b.warn("Marker element has been removed. Cannot restore selection.")):(e(j,g,d.startMarkerId,!0),e(j,g,d.endMarkerId,!1)),f&&g.normalizeBoundaries(),g}function i(b,d){var e,h,i,j,k=[];for(b=b.slice(0),b.sort(f),i=0,j=b.length;j>i;++i)k[i]=g(b[i],d);for(i=j-1;i>=0;--i)e=b[i],h=a.DomRange.getRangeDocument(e),e.collapsed?e.collapseAfter(c(k[i].markerId,h)):(e.setEndBefore(c(k[i].endMarkerId,h)),e.setStartAfter(c(k[i].startMarkerId,h)));return k}function j(c){var d,e,f,g;return a.isSelectionValid(c)?(d=a.getSelection(c),e=d.getAllRanges(),f=1==e.length&&d.isBackward(),g=i(e,f),f?d.setSingleRange(e[0],"backward"):d.setRanges(e),{win:c,rangeInfos:g,restored:!1}):(b.warn("Cannot save selection. This usually happens when the selection is collapsed and the selection document has lost focus."),null)}function k(a){var b,c=[],d=a.length;for(b=d-1;b>=0;b--)c[b]=h(a[b],!0);return c}function l(b,c){var d,e,f,g;b.restored||(d=b.rangeInfos,e=a.getSelection(b.win),f=k(d),g=d.length,1==g&&c&&a.features.selectionHasExtend&&d[0].backward?(e.removeAllRanges(),e.addRange(f[0],!0)):e.setRanges(f),b.restored=!0)}function m(a,b){var d=c(b,a);d&&d.parentNode.removeChild(d)}function n(a){var b,c,d,e=a.rangeInfos;for(b=0,c=e.length;c>b;++b)d=e[b],d.collapsed?m(a.doc,d.markerId):(m(a.doc,d.startMarkerId),m(a.doc,d.endMarkerId))}var o=a.dom,p="﻿";a.util.extend(a,{saveRange:g,restoreRange:h,saveRanges:i,restoreRanges:k,saveSelection:j,restoreSelection:l,removeMarkerElement:m,removeMarkers:n})})},this),Base=function(){},Base.extend=function(a,b){var c,d,e,f=Base.prototype.extend;return Base._prototyping=!0,c=new this,f.call(c,a),c.base=function(){},delete Base._prototyping,d=c.constructor,e=c.constructor=function(){if(!Base._prototyping)if(this._constructing||this.constructor==e)this._constructing=!0,d.apply(this,arguments),delete this._constructing;else if(null!=arguments[0])return(arguments[0].extend||f).call(arguments[0],c)},e.ancestor=this,e.extend=this.extend,e.forEach=this.forEach,e.implement=this.implement,e.prototype=c,e.toString=this.toString,e.valueOf=function(a){return"object"==a?e:d.valueOf()},f.call(e,b),"function"==typeof e.init&&e.init(),e},Base.prototype={extend:function(a,b){var c,d,e,f,g,h,i;if(arguments.length>1)c=this[a],!c||"function"!=typeof b||c.valueOf&&c.valueOf()==b.valueOf()||!/\bbase\b/.test(b)||(d=b.valueOf(),b=function(){var a,b=this.base||Base.prototype.base;return this.base=c,a=d.apply(this,arguments),this.base=b,a},b.valueOf=function(a){return"object"==a?b:d},b.toString=Base.toString),this[a]=b;else if(a){for(e=Base.prototype.extend,Base._prototyping||"function"==typeof this||(e=this.extend||e),f={toSource:null},g=["constructor","toString","valueOf"],h=Base._prototyping?0:1;i=g[h++];)a[i]!=f[i]&&e.call(this,i,a[i]);for(i in a)f[i]||e.call(this,i,a[i])}return this}},Base=Base.extend({constructor:function(){this.extend(arguments[0])}},{ancestor:Object,version:"1.1",forEach:function(a,b,c){for(var d in a)void 0===this.prototype[d]&&b.call(c,a[d],d,a)},implement:function(){for(var a=0;a<arguments.length;a++)"function"==typeof arguments[a]?arguments[a](this.prototype):this.prototype.extend(arguments[a]);return this},toString:function(){return this.valueOf()+""}}),wysihtml5.browser=function(){function a(a){return+(/ipad|iphone|ipod/.test(a)&&a.match(/ os (\d+).+? like mac os x/)||[void 0,0])[1]}function b(a){return+(a.match(/android (\d+)/)||[void 0,0])[1]}function c(a,b){var c,d=-1;return"Microsoft Internet Explorer"==navigator.appName?c=RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"):"Netscape"==navigator.appName&&(c=RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})")),c&&null!=c.exec(navigator.userAgent)&&(d=parseFloat(RegExp.$1)),-1===d?!1:a?b?"<"===b?d>a:">"===b?a>d:"<="===b?d>=a:">="===b?a>=d:void 0:a===d:!0}var d=navigator.userAgent,e=document.createElement("div"),f=-1!==d.indexOf("Gecko")&&-1===d.indexOf("KHTML"),g=-1!==d.indexOf("AppleWebKit/"),h=-1!==d.indexOf("Chrome/"),i=-1!==d.indexOf("Opera/");return{USER_AGENT:d,supported:function(){var c=this.USER_AGENT.toLowerCase(),d="contentEditable"in e,f=document.execCommand&&document.queryCommandSupported&&document.queryCommandState,g=document.querySelector&&document.querySelectorAll,h=this.isIos()&&a(c)<5||this.isAndroid()&&b(c)<4||-1!==c.indexOf("opera mobi")||-1!==c.indexOf("hpwos/");return d&&f&&g&&!h},isTouchDevice:function(){return this.supportsEvent("touchmove")},isIos:function(){return/ipad|iphone|ipod/i.test(this.USER_AGENT)},isAndroid:function(){return-1!==this.USER_AGENT.indexOf("Android")},supportsSandboxedIframes:function(){return c()},throwsMixedContentWarningWhenIframeSrcIsEmpty:function(){return!("querySelector"in document)},displaysCaretInEmptyContentEditableCorrectly:function(){return c()},hasCurrentStyleProperty:function(){return"currentStyle"in e},hasHistoryIssue:function(){return f&&"Mac"===navigator.platform.substr(0,3)},insertsLineBreaksOnReturn:function(){return f},supportsPlaceholderAttributeOn:function(a){return"placeholder"in a},supportsEvent:function(a){return"on"+a in e||function(){return e.setAttribute("on"+a,"return;"),"function"==typeof e["on"+a]}()},supportsEventsInIframeCorrectly:function(){return!i},supportsHTML5Tags:function(a){var b=a.createElement("div"),c="<article>foo</article>";return b.innerHTML=c,b.innerHTML.toLowerCase()===c},supportsCommand:function(){var a={formatBlock:c(10,"<="),insertUnorderedList:c(),insertOrderedList:c()},b={insertHTML:f};return function(c,d){var e=a[d];if(!e){try{return c.queryCommandSupported(d)}catch(f){}try{return c.queryCommandEnabled(d)}catch(g){return!!b[d]}}return!1}}(),doesAutoLinkingInContentEditable:function(){return c()},canDisableAutoLinking:function(){return this.supportsCommand(document,"AutoUrlDetect")},clearsContentEditableCorrectly:function(){return f||i||g},supportsGetAttributeCorrectly:function(){var a=document.createElement("td");return"1"!=a.getAttribute("rowspan")},canSelectImagesInContentEditable:function(){return f||c()||i},autoScrollsToCaret:function(){return!g},autoClosesUnclosedTags:function(){var a,b,c=e.cloneNode(!1);return c.innerHTML="<p><div></div>",b=c.innerHTML.toLowerCase(),a="<p></p><div></div>"===b||"<p><div></div></p>"===b,this.autoClosesUnclosedTags=function(){return a},a},supportsNativeGetElementsByClassName:function(){return-1!==(document.getElementsByClassName+"").indexOf("[native code]")},supportsSelectionModify:function(){return"getSelection"in window&&"modify"in window.getSelection()},needsSpaceAfterLineBreak:function(){return i},supportsSpeechApiOn:function(a){var b=d.match(/Chrome\/(\d+)/)||[void 0,0];return b[1]>=11&&("onwebkitspeechchange"in a||"speech"in a)},crashesWhenDefineProperty:function(a){return c(9)&&("XMLHttpRequest"===a||"XDomainRequest"===a)},doesAsyncFocus:function(){return c()},hasProblemsSettingCaretAfterImg:function(){return c()},hasUndoInContextMenu:function(){return f||h||i},hasInsertNodeIssue:function(){return i},hasIframeFocusIssue:function(){return c()},createsNestedInvalidMarkupAfterPaste:function(){return g},supportsMutationEvents:function(){return"MutationEvent"in window},supportsModenPaste:function(){return!("clipboardData"in window)}}}(),wysihtml5.lang.array=function(a){return{contains:function(b){if(Array.isArray(b)){for(var c=b.length;c--;)if(-1!==wysihtml5.lang.array(a).indexOf(b[c]))return!0;return!1}return-1!==wysihtml5.lang.array(a).indexOf(b)},indexOf:function(b){if(a.indexOf)return a.indexOf(b);for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},without:function(b){b=wysihtml5.lang.array(b);for(var c=[],d=0,e=a.length;e>d;d++)b.contains(a[d])||c.push(a[d]);return c},get:function(){for(var b=0,c=a.length,d=[];c>b;b++)d.push(a[b]);return d},map:function(b,c){if(Array.prototype.map)return a.map(b,c);for(var d=a.length>>>0,e=Array(d),f=0;d>f;f++)e[f]=b.call(c,a[f],f,a);return e},unique:function(){for(var b=[],c=a.length,d=0;c>d;)wysihtml5.lang.array(b).contains(a[d])||b.push(a[d]),d++;return b}}},wysihtml5.lang.Dispatcher=Base.extend({on:function(a,b){return this.events=this.events||{},this.events[a]=this.events[a]||[],this.events[a].push(b),this},off:function(a,b){this.events=this.events||{};var c,d,e=0;if(a){for(c=this.events[a]||[],d=[];e<c.length;e++)c[e]!==b&&b&&d.push(c[e]);this.events[a]=d}else this.events={};return this},fire:function(a,b){this.events=this.events||{};for(var c=this.events[a]||[],d=0;d<c.length;d++)c[d].call(this,b);return this},observe:function(){return this.on.apply(this,arguments)},stopObserving:function(){return this.off.apply(this,arguments)}}),wysihtml5.lang.object=function(a){return{merge:function(b){for(var c in b)a[c]=b[c];return this},get:function(){return a},clone:function(b){var c,d={};if(null===a||!wysihtml5.lang.object(a).isPlainObject())return a;for(c in a)a.hasOwnProperty(c)&&(d[c]=b?wysihtml5.lang.object(a[c]).clone(b):a[c]);return d},isArray:function(){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(){return"[object Function]"===Object.prototype.toString.call(a)},isPlainObject:function(){return"[object Object]"===Object.prototype.toString.call(a)}}},function(){var a=/^\s+/,b=/\s+$/,c=/[&<>\t"]/g,d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","	":"&nbsp; "};wysihtml5.lang.string=function(e){return e+="",{trim:function(){return e.replace(a,"").replace(b,"")},interpolate:function(a){for(var b in a)e=this.replace("#{"+b+"}").by(a[b]);return e},replace:function(a){return{by:function(b){return e.split(a).join(b)}}},escapeHTML:function(a,b){var f=e.replace(c,function(a){return d[a]});return a&&(f=f.replace(/(?:\r\n|\r|\n)/g,"<br />")),b&&(f=f.replace(/  /gi,"&nbsp; ")),f}}}}(),function(a){function b(a,b){return f(a,b)?a:(a===a.ownerDocument.documentElement&&(a=a.ownerDocument.body),g(a,b))}function c(a){return a.replace(i,function(a,b){var c,d,e=(b.match(j)||[])[1]||"",f=l[e];return b=b.replace(j,""),b.split(f).length>b.split(e).length&&(b+=e,e=""),c=b,d=b,b.length>k&&(d=d.substr(0,k)+"..."),"www."===c.substr(0,4)&&(c="http://"+c),'<a href="'+c+'">'+d+"</a>"+e})}function d(a){var b=a._wysihtml5_tempElement;return b||(b=a._wysihtml5_tempElement=a.createElement("div")),b}function e(b){var e=b.parentNode,f=a.lang.string(b.data).escapeHTML(),g=d(e.ownerDocument);for(g.innerHTML="<span></span>"+c(f),g.removeChild(g.firstChild);g.firstChild;)e.insertBefore(g.firstChild,b);e.removeChild(b)}function f(b,c){for(var d;b.parentNode;){if(b=b.parentNode,d=b.nodeName,b.className&&a.lang.array(b.className.split(" ")).contains(c))return!0;if(h.contains(d))return!0;if("body"===d)return!1}return!1}function g(b,c){if(!(h.contains(b.nodeName)||b.className&&a.lang.array(b.className.split(" ")).contains(c))){if(b.nodeType===a.TEXT_NODE&&b.data.match(i))return e(b),void 0;for(var d=a.lang.array(b.childNodes).get(),f=d.length,j=0;f>j;j++)g(d[j],c);return b}}var h=a.lang.array(["CODE","PRE","A","SCRIPT","HEAD","TITLE","STYLE"]),i=/((https?:\/\/|www\.)[^\s<]{3,})/gi,j=/([^\w\/\-](,?))$/i,k=100,l={")":"(","]":"[","}":"{"};a.dom.autoLink=b,a.dom.autoLink.URL_REG_EXP=i}(wysihtml5),function(a){var b=a.dom;b.addClass=function(a,c){var d=a.classList;return d?d.add(c):(b.hasClass(a,c)||(a.className+=" "+c),void 0)},b.removeClass=function(a,b){var c=a.classList;return c?c.remove(b):(a.className=a.className.replace(RegExp("(^|\\s+)"+b+"(\\s+|$)")," "),void 0)},b.hasClass=function(a,b){var c,d=a.classList;return d?d.contains(b):(c=a.className,c.length>0&&(c==b||RegExp("(^|\\s)"+b+"(\\s|$)").test(c)))}}(wysihtml5),wysihtml5.dom.contains=function(){var a=document.documentElement;return a.contains?function(a,b){return b.nodeType!==wysihtml5.ELEMENT_NODE&&(b=b.parentNode),a!==b&&a.contains(b)}:a.compareDocumentPosition?function(a,b){return!!(16&a.compareDocumentPosition(b))}:void 0}(),wysihtml5.dom.convertToList=function(){function a(a,b){var c=a.createElement("li");return b.appendChild(c),c}function b(a,b){return a.createElement(b)}function c(c,d,e){if("UL"===c.nodeName||"OL"===c.nodeName||"MENU"===c.nodeName)return c;var f,g,h,i,j,k,l,m,n,o=c.ownerDocument,p=b(o,d),q=c.querySelectorAll("br"),r=q.length;for(n=0;r>n;n++)for(i=q[n];(j=i.parentNode)&&j!==c&&j.lastChild===i;){if("block"===wysihtml5.dom.getStyle("display").from(j)){j.removeChild(i);break}wysihtml5.dom.insert(i).after(i.parentNode)}for(f=wysihtml5.lang.array(c.childNodes).get(),g=f.length,n=0;g>n;n++)m=m||a(o,p),h=f[n],k="block"===wysihtml5.dom.getStyle("display").from(h),l="BR"===h.nodeName,!k||e&&wysihtml5.dom.hasClass(h,e)?l?m=m.firstChild?null:m:m.appendChild(h):(m=m.firstChild?a(o,p):m,m.appendChild(h),m=null);return 0===f.length&&a(o,p),c.parentNode.replaceChild(p,c),p}return c}(),wysihtml5.dom.copyAttributes=function(a){return{from:function(b){return{to:function(c){for(var d,e=0,f=a.length;f>e;e++)d=a[e],void 0!==b[d]&&""!==b[d]&&(c[d]=b[d]);return{andTo:arguments.callee}}}}}},function(a){var b=["-webkit-box-sizing","-moz-box-sizing","-ms-box-sizing","box-sizing"],c=function(b){return d(b)?parseInt(a.getStyle("width").from(b),10)<b.offsetWidth:!1},d=function(c){for(var d=0,e=b.length;e>d;d++)if("border-box"===a.getStyle(b[d]).from(c))return b[d]};a.copyStyles=function(d){return{from:function(e){c(e)&&(d=wysihtml5.lang.array(d).without(b));for(var f,g="",h=d.length,i=0;h>i;i++)f=d[i],g+=f+":"+a.getStyle(f).from(e)+";";return{to:function(b){return a.setStyles(g).on(b),{andTo:arguments.callee}}}}}}}(wysihtml5.dom),function(a){a.dom.delegate=function(b,c,d,e){return a.dom.observe(b,d,function(d){for(var f=d.target,g=a.lang.array(b.querySelectorAll(c));f&&f!==b;){if(g.contains(f)){e.call(f,d);break}f=f.parentNode}})}}(wysihtml5),function(a){a.dom.domNode=function(b){var c=[a.ELEMENT_NODE,a.TEXT_NODE],d=function(b){return b.nodeType===a.TEXT_NODE&&/^\s*$/g.test(b.data)};return{prev:function(e){var f=b.previousSibling,g=e&&e.nodeTypes?e.nodeTypes:c;return f?!a.lang.array(g).contains(f.nodeType)||e&&e.ignoreBlankTexts&&d(f)?a.dom.domNode(f).prev(e):f:null},next:function(e){var f=b.nextSibling,g=e&&e.nodeTypes?e.nodeTypes:c;return f?!a.lang.array(g).contains(f.nodeType)||e&&e.ignoreBlankTexts&&d(f)?a.dom.domNode(f).next(e):f:null}}}}(wysihtml5),wysihtml5.dom.getAsDom=function(){var a=function(a,b){var c=b.createElement("div");c.style.display="none",b.body.appendChild(c);try{c.innerHTML=a}catch(d){}return b.body.removeChild(c),c},b=function(a){if(!a._wysihtml5_supportsHTML5Tags){for(var b=0,d=c.length;d>b;b++)a.createElement(c[b]);a._wysihtml5_supportsHTML5Tags=!0}},c=["abbr","article","aside","audio","bdi","canvas","command","datalist","details","figcaption","figure","footer","header","hgroup","keygen","mark","meter","nav","output","progress","rp","rt","ruby","svg","section","source","summary","time","track","video","wbr"];return function(c,d){d=d||document;var e;return"object"==typeof c&&c.nodeType?(e=d.createElement("div"),e.appendChild(c)):wysihtml5.browser.supportsHTML5Tags(d)?(e=d.createElement("div"),e.innerHTML=c):(b(d),e=a(c,d)),e}}(),wysihtml5.dom.getParentElement=function(){function a(a,b){return b&&b.length?"string"==typeof b?a===b:wysihtml5.lang.array(b).contains(a):!0}function b(a){return a.nodeType===wysihtml5.ELEMENT_NODE}function c(a,b,c){var d=(a.className||"").match(c)||[];return b?d[d.length-1]===b:!!d.length}function d(a,b,c){var d=(a.getAttribute("style")||"").match(c)||[];return b?d[d.length-1]===b:!!d.length}return function(e,f,g,h){var i=f.cssStyle||f.styleRegExp,j=f.className||f.classRegExp;for(g=g||50;g--&&e&&"BODY"!==e.nodeName&&(!h||e!==h);){if(b(e)&&a(e.nodeName,f.nodeName)&&(!i||d(e,f.cssStyle,f.styleRegExp))&&(!j||c(e,f.className,f.classRegExp)))return e;e=e.parentNode}return null}}(),wysihtml5.dom.getStyle=function(){function a(a){return a.replace(c,function(a){return a.charAt(1).toUpperCase()
})}var b={"float":"styleFloat"in document.createElement("div").style?"styleFloat":"cssFloat"},c=/\-[a-z]/g;return function(c){return{from:function(d){var e,f,g,h,i,j,k,l,m;if(d.nodeType===wysihtml5.ELEMENT_NODE){if(e=d.ownerDocument,f=b[c]||a(c),g=d.style,h=d.currentStyle,i=g[f],i)return i;if(h)try{return h[f]}catch(n){}return j=e.defaultView||e.parentWindow,k=("height"===c||"width"===c)&&"TEXTAREA"===d.nodeName,j.getComputedStyle?(k&&(l=g.overflow,g.overflow="hidden"),m=j.getComputedStyle(d,null).getPropertyValue(c),k&&(g.overflow=l||""),m):void 0}}}}}(),wysihtml5.dom.getTextNodes=function(a,b){var c=[];for(a=a.firstChild;a;a=a.nextSibling)3==a.nodeType?b&&/^\s*$/.test(a.innerText||a.textContent)||c.push(a):c=c.concat(wysihtml5.dom.getTextNodes(a,b));return c},wysihtml5.dom.hasElementWithTagName=function(){function a(a){return a._wysihtml5_identifier||(a._wysihtml5_identifier=c++)}var b={},c=1;return function(c,d){var e=a(c)+":"+d,f=b[e];return f||(f=b[e]=c.getElementsByTagName(d)),f.length>0}}(),function(a){function b(a){return a._wysihtml5_identifier||(a._wysihtml5_identifier=d++)}var c={},d=1;a.dom.hasElementWithClassName=function(d,e){if(!a.browser.supportsNativeGetElementsByClassName())return!!d.querySelector("."+e);var f=b(d)+":"+e,g=c[f];return g||(g=c[f]=d.getElementsByClassName(e)),g.length>0}}(wysihtml5),wysihtml5.dom.insert=function(a){return{after:function(b){b.parentNode.insertBefore(a,b.nextSibling)},before:function(b){b.parentNode.insertBefore(a,b)},into:function(b){b.appendChild(a)}}},wysihtml5.dom.insertCSS=function(a){return a=a.join("\n"),{into:function(b){var c,d,e=b.createElement("style");return e.type="text/css",e.styleSheet?e.styleSheet.cssText=a:e.appendChild(b.createTextNode(a)),c=b.querySelector("head link"),c?(c.parentNode.insertBefore(e,c),void 0):(d=b.querySelector("head"),d&&d.appendChild(e),void 0)}}},function(a){a.dom.lineBreaks=function(b){function c(a){return"BR"===a.nodeName}function d(b){return c(b)?!0:"block"===a.dom.getStyle("display").from(b)?!0:!1}return{add:function(){var c=b.ownerDocument,e=a.dom.domNode(b).next({ignoreBlankTexts:!0}),f=a.dom.domNode(b).prev({ignoreBlankTexts:!0});e&&!d(e)&&a.dom.insert(c.createElement("br")).after(b),f&&!d(f)&&a.dom.insert(c.createElement("br")).before(b)},remove:function(){var d=a.dom.domNode(b).next({ignoreBlankTexts:!0}),e=a.dom.domNode(b).prev({ignoreBlankTexts:!0});d&&c(d)&&d.parentNode.removeChild(d),e&&c(e)&&e.parentNode.removeChild(e)}}}}(wysihtml5),wysihtml5.dom.observe=function(a,b,c){b="string"==typeof b?[b]:b;for(var d,e,f=0,g=b.length;g>f;f++)e=b[f],a.addEventListener?a.addEventListener(e,c,!1):(d=function(b){"target"in b||(b.target=b.srcElement),b.preventDefault=b.preventDefault||function(){this.returnValue=!1},b.stopPropagation=b.stopPropagation||function(){this.cancelBubble=!0},c.call(a,b)},a.attachEvent("on"+e,d));return{stop:function(){for(var e,f=0,g=b.length;g>f;f++)e=b[f],a.removeEventListener?a.removeEventListener(e,c,!1):a.detachEvent("on"+e,d)}}},wysihtml5.dom.parse=function(a,b){function c(a,b){var c,f,g,h,i,j,k,l,m;for(wysihtml5.lang.object(t).merge(s).merge(b.rules).get(),c=b.context||a.ownerDocument||document,f=c.createDocumentFragment(),g="string"==typeof a,h=!1,b.clearInternals===!0&&(h=!0),i=g?wysihtml5.dom.getAsDom(a,c):a,t.selectors&&e(i,t.selectors);i.firstChild;)k=i.firstChild,j=d(k,b.cleanUp,h,b.uneditableClass),j&&f.appendChild(j),k!==j&&i.removeChild(k);if(b.unjoinNbsps)for(l=wysihtml5.dom.getTextNodes(f),m=l.length;m--;)l[m].nodeValue=l[m].nodeValue.replace(/([\S\u00A0])\u00A0/gi,"$1 ");return i.innerHTML="",i.appendChild(f),g?wysihtml5.quirks.getCorrectInnerHTML(i):i}function d(a,b,c,e){var f,g,h,i=a.nodeType,j=a.childNodes,k=j.length,l=p[i],m=0;if(e&&1===i&&wysihtml5.dom.hasClass(a,e))return a;if(g=l&&l(a,c),!g){if(g===!1){for(f=a.ownerDocument.createDocumentFragment(),m=k;m--;)j[m]&&(h=d(j[m],b,c,e),h&&(j[m]===h&&m--,f.insertBefore(h,f.firstChild)));return"block"===wysihtml5.dom.getStyle("display").from(a)&&f.appendChild(a.ownerDocument.createElement("br")),wysihtml5.lang.array(["div","pre","p","table","td","th","ul","ol","li","dd","dl","footer","header","section","h1","h2","h3","h4","h5","h6"]).contains(a.nodeName.toLowerCase())&&a.parentNode.lastChild!==a&&(a.nextSibling&&3===a.nextSibling.nodeType&&/^\s/.test(a.nextSibling.nodeValue)||f.appendChild(a.ownerDocument.createTextNode(" "))),f.normalize&&f.normalize(),f}return null}for(m=0;k>m;m++)j[m]&&(h=d(j[m],b,c,e),h&&(j[m]===h&&m--,g.appendChild(h)));if(b&&g.nodeName.toLowerCase()===q&&(!g.childNodes.length||/^\s*$/gi.test(g.innerHTML)&&(c||"_wysihtml5-temp-placeholder"!==a.className&&"rangySelectionBoundary"!==a.className)||!g.attributes.length)){for(f=g.ownerDocument.createDocumentFragment();g.firstChild;)f.appendChild(g.firstChild);return f.normalize&&f.normalize(),f}return g.normalize&&g.normalize(),g}function e(a,b){var c,d,e,f;for(c in b)if(b.hasOwnProperty(c))for(wysihtml5.lang.object(b[c]).isFunction()?d=b[c]:"string"==typeof b[c]&&z[b[c]]&&(d=z[b[c]]),e=a.querySelectorAll(c),f=e.length;f--;)d(e[f])}function f(a,b){var c,d,e,f=t.tags,h=a.nodeName.toLowerCase(),j=a.scopeName;if(a._wysihtml5)return null;if(a._wysihtml5=1,"wysihtml5-temp"===a.className)return null;if(j&&"HTML"!=j&&(h=j+":"+h),"outerHTML"in a&&(wysihtml5.browser.autoClosesUnclosedTags()||"P"!==a.nodeName||"</p>"===a.outerHTML.slice(-4).toLowerCase()||(h="div")),h in f){if(c=f[h],!c||c.remove)return null;if(c.unwrap)return!1;c="string"==typeof c?{rename_tag:c}:c}else{if(!a.firstChild)return null;c={rename_tag:q}}if(c.one_of_type&&!g(a,t,c.one_of_type,b)){if(!c.remove_action)return null;if("unwrap"===c.remove_action)return!1;if("rename"!==c.remove_action)return null;e=c.remove_action_rename_to||q}return d=a.ownerDocument.createElement(e||c.rename_tag||h),m(a,d,c,b),i(a,d,c),a=null,d.normalize&&d.normalize(),d}function g(a,b,c,d){var e,f;if("SPAN"===a.nodeName&&!d&&("_wysihtml5-temp-placeholder"===a.className||"rangySelectionBoundary"===a.className))return!0;for(f in c)if(c.hasOwnProperty(f)&&b.type_definitions&&b.type_definitions[f]&&(e=b.type_definitions[f],h(a,e)))return!0;return!1}function h(a,b){var c,d,e,f,g,h,i,j,k=a.getAttribute("class"),l=a.getAttribute("style");if(b.methods)for(h in b.methods)if(b.methods.hasOwnProperty(h)&&y[h]&&y[h](a))return!0;if(k&&b.classes)for(k=k.replace(/^\s+/g,"").replace(/\s+$/g,"").split(r),c=k.length,i=0;c>i;i++)if(b.classes[k[i]])return!0;if(l&&b.styles){l=l.split(";");for(d in b.styles)if(b.styles.hasOwnProperty(d))for(j=l.length;j--;)if(g=l[j].split(":"),g[0].replace(/\s/g,"").toLowerCase()===d&&(b.styles[d]===!0||1===b.styles[d]||wysihtml5.lang.array(b.styles[d]).contains(g[1].replace(/\s/g,"").toLowerCase())))return!0}if(b.attrs)for(e in b.attrs)if(b.attrs.hasOwnProperty(e)&&(f=wysihtml5.dom.getAttribute(a,e),"string"==typeof f&&f.search(b.attrs[e])>-1))return!0;return!1}function i(a,b,c){var d,e;if(c&&c.keep_styles)for(d in c.keep_styles)if(c.keep_styles.hasOwnProperty(d)){if(e="float"===d?a.style.styleFloat||a.style.cssFloat:a.style[d],c.keep_styles[d]instanceof RegExp&&!c.keep_styles[d].test(e))continue;"float"===d?b.style[a.style.styleFloat?"styleFloat":"cssFloat"]=e:a.style[d]&&(b.style[d]=e)}}function j(a,b){var c,d=[];for(c in b)b.hasOwnProperty(c)&&0===c.indexOf(a)&&d.push(c);return d}function k(a,b,c,d){var e,f=v[c];return f&&(b||"alt"===a&&"IMG"==d)&&(e=f(b),"string"==typeof e)?e:!1}function l(a,b){var c,d,e,f,g,h=wysihtml5.lang.object(t.attributes||{}).clone(),i=wysihtml5.lang.object(h).merge(wysihtml5.lang.object(b||{}).clone()).get(),l={},m=wysihtml5.dom.getAttributes(a);for(c in i)if(/\*$/.test(c))for(e=j(c.slice(0,-1),m),f=0,g=e.length;g>f;f++)d=k(e[f],m[e[f]],i[c],a.nodeName),d!==!1&&(l[e[f]]=d);else d=k(c,m[c],i[c],a.nodeName),d!==!1&&(l[c]=d);return l}function m(a,b,c,d){var e,f,g,h,i,j={},k=c.set_class,m=c.add_class,n=c.add_style,o=c.set_attributes,p=t.classes,q=0,s=[],u=[],v=[],y=[];if(o&&(j=wysihtml5.lang.object(o).clone()),j=wysihtml5.lang.object(j).merge(l(a,c.check_attributes)).get(),k&&s.push(k),m)for(h in m)i=x[m[h]],i&&(g=i(wysihtml5.dom.getAttribute(a,h)),"string"==typeof g&&s.push(g));if(n)for(h in n)i=w[n[h]],i&&(newStyle=i(wysihtml5.dom.getAttribute(a,h)),"string"==typeof newStyle&&u.push(newStyle));if("string"==typeof p&&"any"===p&&a.getAttribute("class"))if(t.classes_blacklist){for(y=a.getAttribute("class"),y&&(s=s.concat(y.split(r))),e=s.length;e>q;q++)f=s[q],t.classes_blacklist[f]||v.push(f);v.length&&(j["class"]=wysihtml5.lang.array(v).unique().join(" "))}else j["class"]=a.getAttribute("class");else{for(d||(p["_wysihtml5-temp-placeholder"]=1,p._rangySelectionBoundary=1,p["wysiwyg-tmp-selected-cell"]=1),y=a.getAttribute("class"),y&&(s=s.concat(y.split(r))),e=s.length;e>q;q++)f=s[q],p[f]&&v.push(f);v.length&&(j["class"]=wysihtml5.lang.array(v).unique().join(" "))}j["class"]&&d&&(j["class"]=j["class"].replace("wysiwyg-tmp-selected-cell",""),/^\s*$/g.test(j["class"])&&delete j["class"]),u.length&&(j.style=wysihtml5.lang.array(u).unique().join(" "));for(h in j)try{b.setAttribute(h,j[h])}catch(z){}j.src&&(void 0!==j.width&&b.setAttribute("width",j.width),void 0!==j.height&&b.setAttribute("height",j.height))}function n(a){var b,c=a.nextSibling;return c&&c.nodeType===wysihtml5.TEXT_NODE?(c.data=a.data.replace(u,"")+c.data.replace(u,""),void 0):(b=a.data.replace(u,""),a.ownerDocument.createTextNode(b))}function o(a){return t.comments?a.ownerDocument.createComment(a.nodeValue):void 0}var p={1:f,3:n,8:o},q="span",r=/\s+/,s={tags:{},classes:{}},t={},u=/\uFEFF/g,v={url:function(){var a=/^https?:\/\//i;return function(b){return b&&b.match(a)?b.replace(a,function(a){return a.toLowerCase()}):null}}(),src:function(){var a=/^(\/|https?:\/\/)/i;return function(b){return b&&b.match(a)?b.replace(a,function(a){return a.toLowerCase()}):null}}(),href:function(){var a=/^(#|\/|https?:\/\/|mailto:)/i;return function(b){return b&&b.match(a)?b.replace(a,function(a){return a.toLowerCase()}):null}}(),alt:function(){var a=/[^ a-z0-9_\-]/gi;return function(b){return b?b.replace(a,""):""}}(),numbers:function(){var a=/\D/g;return function(b){return b=(b||"").replace(a,""),b||null}}(),any:function(){return function(a){return a}}()},w={align_text:function(){var a={left:"text-align: left;",right:"text-align: right;",center:"text-align: center;"};return function(b){return a[(b+"").toLowerCase()]}}()},x={align_img:function(){var a={left:"wysiwyg-float-left",right:"wysiwyg-float-right"};return function(b){return a[(b+"").toLowerCase()]}}(),align_text:function(){var a={left:"wysiwyg-text-align-left",right:"wysiwyg-text-align-right",center:"wysiwyg-text-align-center",justify:"wysiwyg-text-align-justify"};return function(b){return a[(b+"").toLowerCase()]}}(),clear_br:function(){var a={left:"wysiwyg-clear-left",right:"wysiwyg-clear-right",both:"wysiwyg-clear-both",all:"wysiwyg-clear-both"};return function(b){return a[(b+"").toLowerCase()]}}(),size_font:function(){var a={1:"wysiwyg-font-size-xx-small",2:"wysiwyg-font-size-small",3:"wysiwyg-font-size-medium",4:"wysiwyg-font-size-large",5:"wysiwyg-font-size-x-large",6:"wysiwyg-font-size-xx-large",7:"wysiwyg-font-size-xx-large","-":"wysiwyg-font-size-smaller","+":"wysiwyg-font-size-larger"};return function(b){return a[(b+"").charAt(0)]}}()},y={has_visible_contet:function(){var a,b=["img","video","picture","br","script","noscript","style","table","iframe","object","embed","audio","svg","input","button","select","textarea","canvas"];return function(c){if(a=(c.innerText||c.textContent).replace(/\s/g,""),a&&a.length>0)return!0;for(var d=b.length;d--;)if(c.querySelector(b[d]))return!0;return c.offsetWidth&&c.offsetWidth>0&&c.offsetHeight&&c.offsetHeight>0?!0:!1}}()},z={unwrap:function(a){wysihtml5.dom.unwrap(a)},remove:function(a){a.parentNode.removeChild(a)}};return c(a,b)},wysihtml5.dom.removeEmptyTextNodes=function(a){for(var b,c=wysihtml5.lang.array(a.childNodes).get(),d=c.length,e=0;d>e;e++)b=c[e],b.nodeType===wysihtml5.TEXT_NODE&&""===b.data&&b.parentNode.removeChild(b)},wysihtml5.dom.renameElement=function(a,b){for(var c,d=a.ownerDocument.createElement(b);c=a.firstChild;)d.appendChild(c);return wysihtml5.dom.copyAttributes(["align","className"]).from(a).to(d),a.parentNode.replaceChild(d,a),d},wysihtml5.dom.replaceWithChildNodes=function(a){if(a.parentNode){if(!a.firstChild)return a.parentNode.removeChild(a),void 0;for(var b=a.ownerDocument.createDocumentFragment();a.firstChild;)b.appendChild(a.firstChild);a.parentNode.replaceChild(b,a),a=b=null}},function(a){function b(b){return"block"===a.getStyle("display").from(b)}function c(a){return"BR"===a.nodeName}function d(a){var b=a.ownerDocument.createElement("br");a.appendChild(b)}function e(a,e){if(a.nodeName.match(/^(MENU|UL|OL)$/)){var f,g,h,i,j,k,l=a.ownerDocument,m=l.createDocumentFragment(),n=wysihtml5.dom.domNode(a).prev({ignoreBlankTexts:!0});if(e)for(!n||b(n)||c(n)||d(m);k=a.firstElementChild||a.firstChild;){for(g=k.lastChild;f=k.firstChild;)h=f===g,i=h&&!b(f)&&!c(f),m.appendChild(f),i&&d(m);k.parentNode.removeChild(k)}else for(;k=a.firstElementChild||a.firstChild;){if(k.querySelector&&k.querySelector("div, p, ul, ol, menu, blockquote, h1, h2, h3, h4, h5, h6"))for(;f=k.firstChild;)m.appendChild(f);else{for(j=l.createElement("p");f=k.firstChild;)j.appendChild(f);m.appendChild(j)}k.parentNode.removeChild(k)}a.parentNode.replaceChild(m,a)}}a.resolveList=e}(wysihtml5.dom),function(a){var b=document,c=["parent","top","opener","frameElement","frames","localStorage","globalStorage","sessionStorage","indexedDB"],d=["open","close","openDialog","showModalDialog","alert","confirm","prompt","openDatabase","postMessage","XMLHttpRequest","XDomainRequest"],e=["referrer","write","open","close"];a.dom.Sandbox=Base.extend({constructor:function(b,c){this.callback=b||a.EMPTY_FUNCTION,this.config=a.lang.object({}).merge(c).get(),this.editableArea=this._createIframe()},insertInto:function(a){"string"==typeof a&&(a=b.getElementById(a)),a.appendChild(this.editableArea)},getIframe:function(){return this.editableArea},getWindow:function(){this._readyError()},getDocument:function(){this._readyError()},destroy:function(){var a=this.getIframe();a.parentNode.removeChild(a)},_readyError:function(){throw Error("wysihtml5.Sandbox: Sandbox iframe isn't loaded yet")},_createIframe:function(){var c=this,d=b.createElement("iframe");return d.className="wysihtml5-sandbox",a.dom.setAttributes({security:"restricted",allowtransparency:"true",frameborder:0,width:0,height:0,marginwidth:0,marginheight:0}).on(d),a.browser.throwsMixedContentWarningWhenIframeSrcIsEmpty()&&(d.src="javascript:'<html></html>'"),d.onload=function(){d.onreadystatechange=d.onload=null,c._onLoadIframe(d)},d.onreadystatechange=function(){/loaded|complete/.test(d.readyState)&&(d.onreadystatechange=d.onload=null,c._onLoadIframe(d))},d},_onLoadIframe:function(f){var g,h,i,j,k,l,m;if(a.dom.contains(b.documentElement,f)){if(g=this,h=f.contentWindow,i=f.contentWindow.document,j=b.characterSet||b.charset||"utf-8",k=this._getHtml({charset:j,stylesheets:this.config.stylesheets}),i.open("text/html","replace"),i.write(k),i.close(),this.getWindow=function(){return f.contentWindow},this.getDocument=function(){return f.contentWindow.document},h.onerror=function(a,b,c){throw Error("wysihtml5.Sandbox: "+a,b,c)},!a.browser.supportsSandboxedIframes()){for(l=0,m=c.length;m>l;l++)this._unset(h,c[l]);for(l=0,m=d.length;m>l;l++)this._unset(h,d[l],a.EMPTY_FUNCTION);for(l=0,m=e.length;m>l;l++)this._unset(i,e[l]);this._unset(i,"cookie","",!0)}this.loaded=!0,setTimeout(function(){g.callback(g)},0)}},_getHtml:function(b){var c,d=b.stylesheets,e="",f=0;if(d="string"==typeof d?[d]:d,d)for(c=d.length;c>f;f++)e+='<link rel="stylesheet" href="'+d[f]+'">';return b.stylesheets=e,a.lang.string('<!DOCTYPE html><html><head><meta charset="#{charset}">#{stylesheets}</head><body></body></html>').interpolate(b)},_unset:function(b,c,d,e){try{b[c]=d}catch(f){}try{b.__defineGetter__(c,function(){return d})}catch(f){}if(e)try{b.__defineSetter__(c,function(){})}catch(f){}if(!a.browser.crashesWhenDefineProperty(c))try{var g={get:function(){return d}};e&&(g.set=function(){}),Object.defineProperty(b,c,g)}catch(f){}}})}(wysihtml5),function(a){var b=document;a.dom.ContentEditableArea=Base.extend({getContentEditable:function(){return this.element},getWindow:function(){return this.element.ownerDocument.defaultView},getDocument:function(){return this.element.ownerDocument},constructor:function(b,c,d){this.callback=b||a.EMPTY_FUNCTION,this.config=a.lang.object({}).merge(c).get(),this.element=d?this._bindElement(d):this._createElement()},_createElement:function(){var a=b.createElement("div");return a.className="wysihtml5-sandbox",this._loadElement(a),a},_bindElement:function(a){return a.className=a.className&&""!=a.className?a.className+" wysihtml5-sandbox":"wysihtml5-sandbox",this._loadElement(a,!0),a},_loadElement:function(a,b){var c,d=this;b||(c=this._getHtml(),a.innerHTML=c),this.getWindow=function(){return a.ownerDocument.defaultView},this.getDocument=function(){return a.ownerDocument},this.loaded=!0,setTimeout(function(){d.callback(d)},0)},_getHtml:function(){return""}})}(wysihtml5),function(){var a={className:"class"};wysihtml5.dom.setAttributes=function(b){return{on:function(c){for(var d in b)c.setAttribute(a[d]||d,b[d])}}}}(),wysihtml5.dom.setStyles=function(a){return{on:function(b){var c,d=b.style;if("string"==typeof a)return d.cssText+=";"+a,void 0;for(c in a)"float"===c?(d.cssFloat=a[c],d.styleFloat=a[c]):d[c]=a[c]}}},function(a){a.simulatePlaceholder=function(b,c,d){var e="placeholder",f=function(){var b=c.element.offsetWidth>0&&c.element.offsetHeight>0;c.hasPlaceholderSet()&&(c.clear(),c.element.focus(),b&&setTimeout(function(){var a=c.selection.getSelection();a.focusNode&&a.anchorNode||c.selection.selectNode(c.element.firstChild||c.element)},0)),c.placeholderSet=!1,a.removeClass(c.element,e)},g=function(){c.isEmpty()&&(c.placeholderSet=!0,c.setValue(d),a.addClass(c.element,e))};b.on("set_placeholder",g).on("unset_placeholder",f).on("focus:composer",f).on("paste:composer",f).on("blur:composer",g),g()}}(wysihtml5.dom),function(a){var b=document.documentElement;"textContent"in b?(a.setTextContent=function(a,b){a.textContent=b},a.getTextContent=function(a){return a.textContent}):"innerText"in b?(a.setTextContent=function(a,b){a.innerText=b},a.getTextContent=function(a){return a.innerText}):(a.setTextContent=function(a,b){a.nodeValue=b},a.getTextContent=function(a){return a.nodeValue})}(wysihtml5.dom),wysihtml5.dom.getAttribute=function(a,b){var c,d,e,f=!wysihtml5.browser.supportsGetAttributeCorrectly();return b=b.toLowerCase(),c=a.nodeName,"IMG"==c&&"src"==b&&wysihtml5.dom.isLoadedImage(a)===!0?a.src:f&&"outerHTML"in a?(d=a.outerHTML.toLowerCase(),e=-1!=d.indexOf(" "+b+"="),e?a.getAttribute(b):null):a.getAttribute(b)},wysihtml5.dom.getAttributes=function(a){var b,c=!wysihtml5.browser.supportsGetAttributeCorrectly(),d=a.nodeName,e=[];for(b in a.attributes)(a.attributes.hasOwnProperty&&a.attributes.hasOwnProperty(b)||!a.attributes.hasOwnProperty&&Object.prototype.hasOwnProperty.call(a.attributes,b))&&a.attributes[b].specified&&("IMG"==d&&"src"==a.attributes[b].name.toLowerCase()&&wysihtml5.dom.isLoadedImage(a)===!0?e.src=a.src:wysihtml5.lang.array(["rowspan","colspan"]).contains(a.attributes[b].name.toLowerCase())&&c?1!==a.attributes[b].value&&(e[a.attributes[b].name]=a.attributes[b].value):e[a.attributes[b].name]=a.attributes[b].value);return e},wysihtml5.dom.isLoadedImage=function(a){try{return a.complete&&!a.mozMatchesSelector(":-moz-broken")}catch(b){if(a.complete&&"complete"===a.readyState)return!0}},function(a){function b(a,b){var c,d,e,f,g=[];for(d=0,e=a.length;e>d;d++)if(c=a[d].querySelectorAll(b),c)for(f=c.length;f--;g.unshift(c[f]));return g}function d(a){a.parentNode.removeChild(a)}function e(a,b){a.parentNode.insertBefore(b,a.nextSibling)}function f(a,b){for(var c=a.nextSibling;1!=c.nodeType;)if(c=c.nextSibling,!b||b==c.tagName.toLowerCase())return c;return null}var g=a.dom,h=function(a){this.el=a,this.isColspan=!1,this.isRowspan=!1,this.firstCol=!0,this.lastCol=!0,this.firstRow=!0,this.lastRow=!0,this.isReal=!0,this.spanCollection=[],this.modified=!1},i=function(a,b){a?(this.cell=a,this.table=g.getParentElement(a,{nodeName:["TABLE"]})):b&&(this.table=b,this.cell=this.table.querySelectorAll("th, td")[0])};i.prototype={addSpannedCellToMap:function(a,b,c,d,e,f){var g,i,j=[],k=c+(f?parseInt(f,10)-1:0),l=d+(e?parseInt(e,10)-1:0);for(g=c;k>=g;g++)for(void 0===b[g]&&(b[g]=[]),i=d;l>=i;i++)b[g][i]=new h(a),b[g][i].isColspan=e&&parseInt(e,10)>1,b[g][i].isRowspan=f&&parseInt(f,10)>1,b[g][i].firstCol=i==d,b[g][i].lastCol=i==l,b[g][i].firstRow=g==c,b[g][i].lastRow=g==k,b[g][i].isReal=i==d&&g==c,b[g][i].spanCollection=j,j.push(b[g][i])},setCellAsModified:function(a){if(a.modified=!0,a.spanCollection.length>0)for(var b=0,c=a.spanCollection.length;c>b;b++)a.spanCollection[b].modified=!0},setTableMap:function(){var a,b,c,d,e,f,i,j,k=[],l=this.getTableRows();for(a=0;a<l.length;a++)for(b=l[a],c=this.getRowCells(b),f=0,void 0===k[a]&&(k[a]=[]),d=0;d<c.length;d++){for(e=c[d];void 0!==k[a][f];)f++;i=g.getAttribute(e,"colspan"),j=g.getAttribute(e,"rowspan"),i||j?(this.addSpannedCellToMap(e,k,a,f,i,j),f+=i?parseInt(i,10):1):(k[a][f]=new h(e),f++)}return this.map=k,k},getRowCells:function(c){var d=this.table.querySelectorAll("table"),e=d?b(d,"th, td"):[],f=c.querySelectorAll("th, td"),g=e.length>0?a.lang.array(f).without(e):f;return g},getTableRows:function(){var c=this.table.querySelectorAll("table"),d=c?b(c,"tr"):[],e=this.table.querySelectorAll("tr"),f=d.length>0?a.lang.array(e).without(d):e;return f},getMapIndex:function(a){var b,c,d=this.map.length,e=this.map&&this.map[0]?this.map[0].length:0;for(b=0;d>b;b++)for(c=0;e>c;c++)if(this.map[b][c].el===a)return{row:b,col:c};return!1},getElementAtIndex:function(a){return this.setTableMap(),this.map[a.row]&&this.map[a.row][a.col]&&this.map[a.row][a.col].el?this.map[a.row][a.col].el:null},getMapElsTo:function(a){var b,c,d,e,f,g,h=[];if(this.setTableMap(),this.idx_start=this.getMapIndex(this.cell),this.idx_end=this.getMapIndex(a),(this.idx_start.row>this.idx_end.row||this.idx_start.row==this.idx_end.row&&this.idx_start.col>this.idx_end.col)&&(b=this.idx_start,this.idx_start=this.idx_end,this.idx_end=b),this.idx_start.col>this.idx_end.col&&(c=this.idx_start.col,this.idx_start.col=this.idx_end.col,this.idx_end.col=c),null!=this.idx_start&&null!=this.idx_end)for(d=this.idx_start.row,e=this.idx_end.row;e>=d;d++)for(f=this.idx_start.col,g=this.idx_end.col;g>=f;f++)h.push(this.map[d][f].el);return h},orderSelectionEnds:function(a){var b,c;return this.setTableMap(),this.idx_start=this.getMapIndex(this.cell),this.idx_end=this.getMapIndex(a),(this.idx_start.row>this.idx_end.row||this.idx_start.row==this.idx_end.row&&this.idx_start.col>this.idx_end.col)&&(b=this.idx_start,this.idx_start=this.idx_end,this.idx_end=b),this.idx_start.col>this.idx_end.col&&(c=this.idx_start.col,this.idx_start.col=this.idx_end.col,this.idx_end.col=c),{start:this.map[this.idx_start.row][this.idx_start.col].el,end:this.map[this.idx_end.row][this.idx_end.col].el}},createCells:function(a,b,c){var d,e,f,g=this.table.ownerDocument,h=g.createDocumentFragment();for(e=0;b>e;e++){if(d=g.createElement(a),c)for(f in c)c.hasOwnProperty(f)&&d.setAttribute(f,c[f]);d.appendChild(document.createTextNode(" ")),h.appendChild(d)}return h},correctColIndexForUnreals:function(a,b){var c,d,e=this.map[b],f=-1;for(c=0,d=a;a>c;c++)e[c].isReal&&f++;return f},getLastNewCellOnRow:function(a,b){var c,d,e,f,g=this.getRowCells(a);for(e=0,f=g.length;f>e;e++)if(c=g[e],d=this.getMapIndex(c),d===!1||void 0!==b&&d.row!=b)return c;return null},removeEmptyTable:function(){var a=this.table.querySelectorAll("td, th");return a&&0!=a.length?!1:(d(this.table),!0)},splitRowToCells:function(a){var b,c,d;a.isColspan&&(b=parseInt(g.getAttribute(a.el,"colspan")||1,10),c=a.el.tagName.toLowerCase(),b>1&&(d=this.createCells(c,b-1),e(a.el,d)),a.el.removeAttribute("colspan"))},getRealRowEl:function(a,b){var c,d,e=null,f=null;for(b=b||this.idx,c=0,d=this.map[b.row].length;d>c;c++)if(f=this.map[b.row][c],f.isReal&&(e=g.getParentElement(f.el,{nodeName:["TR"]}),e))return e;return null===e&&a&&(e=g.getParentElement(this.map[b.row][b.col].el,{nodeName:["TR"]})||null),e},injectRowAt:function(a,b,c,d,f){var h,i,j=this.getRealRowEl(!1,{row:a,col:b}),k=this.createCells(d,c);j?(h=this.correctColIndexForUnreals(b,a),h>=0?e(this.getRowCells(j)[h],k):j.insertBefore(k,j.firstChild)):(i=this.table.ownerDocument.createElement("tr"),i.appendChild(k),e(g.getParentElement(f.el,{nodeName:["TR"]}),i))},canMerge:function(a){var b,c,d,e,f,g;for(this.to=a,this.setTableMap(),this.idx_start=this.getMapIndex(this.cell),this.idx_end=this.getMapIndex(this.to),(this.idx_start.row>this.idx_end.row||this.idx_start.row==this.idx_end.row&&this.idx_start.col>this.idx_end.col)&&(b=this.idx_start,this.idx_start=this.idx_end,this.idx_end=b),this.idx_start.col>this.idx_end.col&&(c=this.idx_start.col,this.idx_start.col=this.idx_end.col,this.idx_end.col=c),d=this.idx_start.row,e=this.idx_end.row;e>=d;d++)for(f=this.idx_start.col,g=this.idx_end.col;g>=f;f++)if(this.map[d][f].isColspan||this.map[d][f].isRowspan)return!1;return!0},decreaseCellSpan:function(a,b){var c=parseInt(g.getAttribute(a.el,b),10)-1;c>=1?a.el.setAttribute(b,c):(a.el.removeAttribute(b),"colspan"==b&&(a.isColspan=!1),"rowspan"==b&&(a.isRowspan=!1),a.firstCol=!0,a.lastCol=!0,a.firstRow=!0,a.lastRow=!0,a.isReal=!0)},removeSurplusLines:function(){var a,b,c,e,f,h,i,j;if(this.setTableMap(),this.map){for(c=0,e=this.map.length;e>c;c++){for(a=this.map[c],i=!0,f=0,h=a.length;h>f;f++)if(b=a[f],!(g.getAttribute(b.el,"rowspan")&&parseInt(g.getAttribute(b.el,"rowspan"),10)>1&&b.firstRow!==!0)){i=!1;break}if(i)for(f=0;h>f;f++)this.decreaseCellSpan(a[f],"rowspan")}for(j=this.getTableRows(),c=0,e=j.length;e>c;c++)a=j[c],0==a.childNodes.length&&/^\s*$/.test(a.textContent||a.innerText)&&d(a)}},fillMissingCells:function(){var a,b,c,d=0,f=0,g=null;if(this.setTableMap(),this.map){for(d=this.map.length,a=0;d>a;a++)this.map[a].length>f&&(f=this.map[a].length);for(b=0;d>b;b++)for(c=0;f>c;c++)this.map[b]&&!this.map[b][c]&&c>0&&(this.map[b][c]=new h(this.createCells("td",1)),g=this.map[b][c-1],g&&g.el&&g.el.parent&&e(this.map[b][c-1].el,this.map[b][c].el))}},rectify:function(){return this.removeEmptyTable()?!1:(this.removeSurplusLines(),this.fillMissingCells(),!0)},unmerge:function(){var a,b,c,d,e,f;if(this.rectify()&&(this.setTableMap(),this.idx=this.getMapIndex(this.cell),this.idx)){if(a=this.map[this.idx.row][this.idx.col],b=g.getAttribute(a.el,"colspan")?parseInt(g.getAttribute(a.el,"colspan"),10):1,c=a.el.tagName.toLowerCase(),a.isRowspan){if(d=parseInt(g.getAttribute(a.el,"rowspan"),10),d>1)for(e=1,f=d-1;f>=e;e++)this.injectRowAt(this.idx.row+e,this.idx.col,b,c,a);a.el.removeAttribute("rowspan")}this.splitRowToCells(a)}},merge:function(a){var b,c,e,f,g,h;if(this.rectify())if(this.canMerge(a)){for(b=this.idx_end.row-this.idx_start.row+1,c=this.idx_end.col-this.idx_start.col+1,e=this.idx_start.row,f=this.idx_end.row;f>=e;e++)for(g=this.idx_start.col,h=this.idx_end.col;h>=g;g++)e==this.idx_start.row&&g==this.idx_start.col?(b>1&&this.map[e][g].el.setAttribute("rowspan",b),c>1&&this.map[e][g].el.setAttribute("colspan",c)):(/^\s*<br\/?>\s*$/.test(this.map[e][g].el.innerHTML.toLowerCase())||(this.map[this.idx_start.row][this.idx_start.col].el.innerHTML+=" "+this.map[e][g].el.innerHTML),d(this.map[e][g].el));this.rectify()}else window.console&&void 0},collapseCellToNextRow:function(a){var b,c,d,f=this.getMapIndex(a.el),h=f.row+1,i={row:h,col:f.col};h<this.map.length&&(b=this.getRealRowEl(!1,i),null!==b&&(c=this.correctColIndexForUnreals(i.col,i.row),c>=0?e(this.getRowCells(b)[c],a.el):(d=this.getLastNewCellOnRow(b,h),null!==d?e(d,a.el):b.insertBefore(a.el,b.firstChild)),parseInt(g.getAttribute(a.el,"rowspan"),10)>2?a.el.setAttribute("rowspan",parseInt(g.getAttribute(a.el,"rowspan"),10)-1):a.el.removeAttribute("rowspan")))},removeRowCell:function(a){a.isReal?a.isRowspan?this.collapseCellToNextRow(a):d(a.el):parseInt(g.getAttribute(a.el,"rowspan"),10)>2?a.el.setAttribute("rowspan",parseInt(g.getAttribute(a.el,"rowspan"),10)-1):a.el.removeAttribute("rowspan")},getRowElementsByCell:function(){var a,b,c,d=[];if(this.setTableMap(),this.idx=this.getMapIndex(this.cell),this.idx!==!1)for(a=this.map[this.idx.row],b=0,c=a.length;c>b;b++)a[b].isReal&&d.push(a[b].el);return d},getColumnElementsByCell:function(){var a,b,c=[];if(this.setTableMap(),this.idx=this.getMapIndex(this.cell),this.idx!==!1)for(a=0,b=this.map.length;b>a;a++)this.map[a][this.idx.col]&&this.map[a][this.idx.col].isReal&&c.push(this.map[a][this.idx.col].el);return c},removeRow:function(){var a,b,c,e=g.getParentElement(this.cell,{nodeName:["TR"]});if(e){if(this.setTableMap(),this.idx=this.getMapIndex(this.cell),this.idx!==!1)for(a=this.map[this.idx.row],b=0,c=a.length;c>b;b++)a[b].modified||(this.setCellAsModified(a[b]),this.removeRowCell(a[b]));d(e)}},removeColCell:function(a){a.isColspan?parseInt(g.getAttribute(a.el,"colspan"),10)>2?a.el.setAttribute("colspan",parseInt(g.getAttribute(a.el,"colspan"),10)-1):a.el.removeAttribute("colspan"):a.isReal&&d(a.el)},removeColumn:function(){if(this.setTableMap(),this.idx=this.getMapIndex(this.cell),this.idx!==!1)for(var a=0,b=this.map.length;b>a;a++)this.map[a][this.idx.col].modified||(this.setCellAsModified(this.map[a][this.idx.col]),this.removeColCell(this.map[a][this.idx.col]))},remove:function(a){if(this.rectify()){switch(a){case"row":this.removeRow();break;case"column":this.removeColumn()}this.rectify()}},addRow:function(a){var b,c,d,f,h,i=this.table.ownerDocument;if(this.setTableMap(),this.idx=this.getMapIndex(this.cell),"below"==a&&g.getAttribute(this.cell,"rowspan")&&(this.idx.row=this.idx.row+parseInt(g.getAttribute(this.cell,"rowspan"),10)-1),this.idx!==!1){for(b=this.map[this.idx.row],c=i.createElement("tr"),d=0,f=b.length;f>d;d++)b[d].modified||(this.setCellAsModified(b[d]),this.addRowCell(b[d],c,a));switch(a){case"below":e(this.getRealRowEl(!0),c);break;case"above":h=g.getParentElement(this.map[this.idx.row][this.idx.col].el,{nodeName:["TR"]}),h&&h.parentNode.insertBefore(c,h)}}},addRowCell:function(a,b,d){var e=a.isColspan?{colspan:g.getAttribute(a.el,"colspan")}:null;a.isReal?"above"!=d&&a.isRowspan?a.el.setAttribute("rowspan",parseInt(g.getAttribute(a.el,"rowspan"),10)+1):b.appendChild(this.createCells("td",1,e)):"above"!=d&&a.isRowspan&&a.lastRow?b.appendChild(this.createCells("td",1,e)):c.isRowspan&&a.el.attr("rowspan",parseInt(g.getAttribute(a.el,"rowspan"),10)+1)},add:function(a){this.rectify()&&(("below"==a||"above"==a)&&this.addRow(a),("before"==a||"after"==a)&&this.addColumn(a))},addColCell:function(a,b,d){var f,h=a.el.tagName.toLowerCase();switch(d){case"before":f=!a.isColspan||a.firstCol;break;case"after":f=!a.isColspan||a.lastCol||a.isColspan&&c.el==this.cell}if(f){switch(d){case"before":a.el.parentNode.insertBefore(this.createCells(h,1),a.el);break;case"after":e(a.el,this.createCells(h,1))}a.isRowspan&&this.handleCellAddWithRowspan(a,b+1,d)}else a.el.setAttribute("colspan",parseInt(g.getAttribute(a.el,"colspan"),10)+1)},addColumn:function(a){var b,c,d,e;if(this.setTableMap(),this.idx=this.getMapIndex(this.cell),"after"==a&&g.getAttribute(this.cell,"colspan")&&(this.idx.col=this.idx.col+parseInt(g.getAttribute(this.cell,"colspan"),10)-1),this.idx!==!1)for(d=0,e=this.map.length;e>d;d++)b=this.map[d],b[this.idx.col]&&(c=b[this.idx.col],c.modified||(this.setCellAsModified(c),this.addColCell(c,d,a)))},handleCellAddWithRowspan:function(a,b,c){var d,h,i,j,k=parseInt(g.getAttribute(this.cell,"rowspan"),10)-1,l=g.getParentElement(a.el,{nodeName:["TR"]}),m=a.el.tagName.toLowerCase(),n=this.table.ownerDocument;for(j=0;k>j;j++)if(d=this.correctColIndexForUnreals(this.idx.col,b+j),l=f(l,"tr"),l)if(d>0)switch(c){case"before":h=this.getRowCells(l),d>0&&this.map[b+j][this.idx.col].el!=h[d]&&d==h.length-1?e(h[d],this.createCells(m,1)):h[d].parentNode.insertBefore(this.createCells(m,1),h[d]);
break;case"after":e(this.getRowCells(l)[d],this.createCells(m,1))}else l.insertBefore(this.createCells(m,1),l.firstChild);else i=n.createElement("tr"),i.appendChild(this.createCells(m,1)),this.table.appendChild(i)}},g.table={getCellsBetween:function(a,b){var c=new i(a);return c.getMapElsTo(b)},addCells:function(a,b){var c=new i(a);c.add(b)},removeCells:function(a,b){var c=new i(a);c.remove(b)},mergeCellsBetween:function(a,b){var c=new i(a);c.merge(b)},unmergeCell:function(a){var b=new i(a);b.unmerge()},orderSelectionEnds:function(a,b){var c=new i(a);return c.orderSelectionEnds(b)},indexOf:function(a){var b=new i(a);return b.setTableMap(),b.getMapIndex(a)},findCell:function(a,b){var c=new i(null,a);return c.getElementAtIndex(b)},findRowByCell:function(a){var b=new i(a);return b.getRowElementsByCell()},findColumnByCell:function(a){var b=new i(a);return b.getColumnElementsByCell()},canMerge:function(a,b){var c=new i(a);return c.canMerge(b)}}}(wysihtml5),wysihtml5.dom.query=function(a,b){var c,d,e,f,g=[];for(a.nodeType&&(a=[a]),d=0,e=a.length;e>d;d++)if(c=a[d].querySelectorAll(b),c)for(f=c.length;f--;g.unshift(c[f]));return g},wysihtml5.dom.compareDocumentPosition=function(){var a=document.documentElement;return a.compareDocumentPosition?function(a,b){return a.compareDocumentPosition(b)}:function(a,b){var c,d,e,f,g,h,i,j,k;if(c=9===a.nodeType?a:a.ownerDocument,d=9===b.nodeType?b:b.ownerDocument,a===b)return 0;if(a===b.ownerDocument)return 20;if(a.ownerDocument===b)return 10;if(c!==d)return 1;if(2===a.nodeType&&a.childNodes&&-1!==wysihtml5.lang.array(a.childNodes).indexOf(b))return 20;if(2===b.nodeType&&b.childNodes&&-1!==wysihtml5.lang.array(b.childNodes).indexOf(a))return 10;for(e=a,f=[],g=null;e;){if(e==b)return 10;f.push(e),e=e.parentNode}for(e=b,g=null;e;){if(e==a)return 20;if(h=wysihtml5.lang.array(f).indexOf(e),-1!==h)return i=f[h],j=wysihtml5.lang.array(i.childNodes).indexOf(f[h-1]),k=wysihtml5.lang.array(i.childNodes).indexOf(g),j>k?2:4;g=e,e=e.parentNode}return 1}}(),wysihtml5.dom.unwrap=function(a){if(a.parentNode){for(;a.lastChild;)wysihtml5.dom.insert(a.lastChild).after(a);a.parentNode.removeChild(a)}},wysihtml5.dom.getPastedHtml=function(a){var b;return a.clipboardData&&(wysihtml5.lang.array(a.clipboardData.types).contains("text/html")?b=a.clipboardData.getData("text/html"):wysihtml5.lang.array(a.clipboardData.types).contains("text/plain")&&(b=wysihtml5.lang.string(a.clipboardData.getData("text/plain")).escapeHTML(!0,!0))),b},wysihtml5.dom.getPastedHtmlWithDiv=function(a,b){var c=a.selection.getBookmark(),d=a.element.ownerDocument,e=d.createElement("DIV");d.body.appendChild(e),e.style.width="1px",e.style.height="1px",e.style.overflow="hidden",e.setAttribute("contenteditable","true"),e.focus(),setTimeout(function(){a.selection.setBookmark(c),b(e.innerHTML),e.parentNode.removeChild(e)},0)},wysihtml5.quirks.cleanPastedHTML=function(){var a=function(a){var b=wysihtml5.lang.string(a).trim(),c=b.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");return RegExp("^((?!^"+c+"$).)*$","i")},b=function(b,c){var d,e,f=wysihtml5.lang.object(b).clone(!0);for(d in f.tags)if(f.tags.hasOwnProperty(d)&&f.tags[d].keep_styles)for(e in f.tags[d].keep_styles)f.tags[d].keep_styles.hasOwnProperty(e)&&c[e]&&(f.tags[d].keep_styles[e]=a(c[e]));return f},c=function(a,b){var c,d,e;if(!a)return null;for(d=0,e=a.length;e>d;d++)if(a[d].condition||(c=a[d].set),a[d].condition&&a[d].condition.test(b))return a[d].set;return c};return function(a,d){var e,f={color:wysihtml5.dom.getStyle("color").from(d.referenceNode),fontSize:wysihtml5.dom.getStyle("font-size").from(d.referenceNode)},g=b(c(d.rules,a)||{},f);return e=wysihtml5.dom.parse(a,{rules:g,cleanUp:!0,context:d.referenceNode.ownerDocument,uneditableClass:d.uneditableClass,clearInternals:!0,unjoinNbsps:!0}),e}}(),wysihtml5.quirks.ensureProperClearing=function(){var a=function(){var a=this;setTimeout(function(){var b=a.innerHTML.toLowerCase();("<p>&nbsp;</p>"==b||"<p>&nbsp;</p><p>&nbsp;</p>"==b)&&(a.innerHTML="")},0)};return function(b){wysihtml5.dom.observe(b.element,["cut","keydown"],a)}}(),function(a){var b="%7E";a.quirks.getCorrectInnerHTML=function(c){var d,e,f,g,h,i=c.innerHTML;if(-1===i.indexOf(b))return i;for(d=c.querySelectorAll("[href*='~'], [src*='~']"),h=0,g=d.length;g>h;h++)e=d[h].href||d[h].src,f=a.lang.string(e).replace("~").by(b),i=a.lang.string(i).replace(f).by(e);return i}}(wysihtml5),function(a){var b="wysihtml5-quirks-redraw";a.quirks.redraw=function(c){a.dom.addClass(c,b),a.dom.removeClass(c,b);try{var d=c.ownerDocument;d.execCommand("italic",!1,null),d.execCommand("italic",!1,null)}catch(e){}}}(wysihtml5),wysihtml5.quirks.tableCellsSelection=function(a,b){function c(){return k.observe(a,"mousedown",function(a){var b=wysihtml5.dom.getParentElement(a.target,{nodeName:["TD","TH"]});b&&d(b)}),l}function d(c){l.start=c,l.end=c,l.cells=[c],l.table=k.getParentElement(l.start,{nodeName:["TABLE"]}),l.table&&(e(),k.addClass(c,m),n=k.observe(a,"mousemove",g),o=k.observe(a,"mouseup",h),b.fire("tableselectstart").fire("tableselectstart:composer"))}function e(){var b,c;if(a&&(b=a.querySelectorAll("."+m),b.length>0))for(c=0;c<b.length;c++)k.removeClass(b[c],m)}function f(a){for(var b=0;b<a.length;b++)k.addClass(a[b],m)}function g(a){var c,d=null,g=k.getParentElement(a.target,{nodeName:["TD","TH"]});g&&l.table&&l.start&&(d=k.getParentElement(g,{nodeName:["TABLE"]}),d&&d===l.table&&(e(),c=l.end,l.end=g,l.cells=k.table.getCellsBetween(l.start,g),l.cells.length>1&&b.composer.selection.deselect(),f(l.cells),l.end!==c&&b.fire("tableselectchange").fire("tableselectchange:composer")))}function h(){n.stop(),o.stop(),b.fire("tableselect").fire("tableselect:composer"),setTimeout(function(){i()},0)}function i(){var c=k.observe(a.ownerDocument,"click",function(a){c.stop(),k.getParentElement(a.target,{nodeName:["TABLE"]})!=l.table&&(e(),l.table=null,l.start=null,l.end=null,b.fire("tableunselect").fire("tableunselect:composer"))})}function j(a,c){l.start=a,l.end=c,l.table=k.getParentElement(l.start,{nodeName:["TABLE"]}),selectedCells=k.table.getCellsBetween(l.start,l.end),f(selectedCells),i(),b.fire("tableselect").fire("tableselect:composer")}var k=wysihtml5.dom,l={table:null,start:null,end:null,cells:null,select:j},m="wysiwyg-tmp-selected-cell",n=null,o=null;return c()},function(a){var b=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([\d\.]+)\s*\)/i,c=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/i,d=/^#([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])/i,e=/^#([0-9a-f])([0-9a-f])([0-9a-f])/i,f=function(a){return RegExp("(^|\\s|;)"+a+"\\s*:\\s*[^;$]+","gi")};a.quirks.styleParser={parseColor:function(g,h){var i,j,k,l=f(h),m=g.match(l),n=10;if(m){for(k=m.length;k--;)m[k]=a.lang.string(m[k].split(":")[1]).trim();if(i=m[m.length-1],b.test(i))j=i.match(b);else if(c.test(i))j=i.match(c);else if(d.test(i))j=i.match(d),n=16;else if(e.test(i))return j=i.match(e),j.shift(),j.push(1),a.lang.array(j).map(function(a,b){return 3>b?16*parseInt(a,16)+parseInt(a,16):parseFloat(a)});if(j)return j.shift(),j[3]||j.push(1),a.lang.array(j).map(function(a,b){return 3>b?parseInt(a,n):parseFloat(a)})}return!1},unparseColor:function(a,b){if(b){if("hex"==b)return a[0].toString(16).toUpperCase()+a[1].toString(16).toUpperCase()+a[2].toString(16).toUpperCase();if("hash"==b)return"#"+a[0].toString(16).toUpperCase()+a[1].toString(16).toUpperCase()+a[2].toString(16).toUpperCase();if("rgb"==b)return"rgb("+a[0]+","+a[1]+","+a[2]+")";if("rgba"==b)return"rgba("+a[0]+","+a[1]+","+a[2]+","+a[3]+")";if("csv"==b)return a[0]+","+a[1]+","+a[2]+","+a[3]}return a[3]&&1!==a[3]?"rgba("+a[0]+","+a[1]+","+a[2]+","+a[3]+")":"rgb("+a[0]+","+a[1]+","+a[2]+")"},parseFontSize:function(b){var c=b.match(f("font-size"));return c?a.lang.string(c[c.length-1].split(":")[1]).trim():!1}}}(wysihtml5),function(a){function b(a){var b=0;if(a.parentNode)do b+=a.offsetTop||0,a=a.offsetParent;while(a);return b}function c(a,b){for(var c=0;b!==a;)if(c++,b=b.parentNode,!b)throw Error("not a descendant of ancestor!");return c}function d(a){if(!a.canSurroundContents())for(var b=a.commonAncestorContainer,d=c(b,a.startContainer),e=c(b,a.endContainer);!a.canSurroundContents();)d>e?(a.setStartBefore(a.startContainer),d=c(b,a.startContainer)):(a.setEndAfter(a.endContainer),e=c(b,a.endContainer))}var e=a.dom;a.Selection=Base.extend({constructor:function(a,b,c){window.rangy.init(),this.editor=a,this.composer=a.composer,this.doc=this.composer.doc,this.contain=b,this.unselectableClass=c||!1},getBookmark:function(){var a=this.getRange();return a&&d(a),a&&a.cloneRange()},setBookmark:function(a){a&&this.setSelection(a)},setBefore:function(a){var b=rangy.createRange(this.doc);return b.setStartBefore(a),b.setEndBefore(a),this.setSelection(b)},setAfter:function(a){var b=rangy.createRange(this.doc);return b.setStartAfter(a),b.setEndAfter(a),this.setSelection(b)},selectNode:function(b,c){var d=rangy.createRange(this.doc),f=b.nodeType===a.ELEMENT_NODE,g="canHaveHTML"in b?b.canHaveHTML:"IMG"!==b.nodeName,h=f?b.innerHTML:b.data,i=""===h||h===a.INVISIBLE_SPACE,j=e.getStyle("display").from(b),k="block"===j||"list-item"===j;if(i&&f&&g&&!c)try{b.innerHTML=a.INVISIBLE_SPACE}catch(l){}g?d.selectNodeContents(b):d.selectNode(b),g&&i&&f?d.collapse(k):g&&i&&(d.setStartAfter(b),d.setEndAfter(b)),this.setSelection(d)},getSelectedNode:function(a){var b,c;return a&&this.doc.selection&&"Control"===this.doc.selection.type&&(c=this.doc.selection.createRange(),c&&c.length)?c.item(0):(b=this.getSelection(this.doc),b.focusNode===b.anchorNode?b.focusNode:(c=this.getRange(this.doc),c?c.commonAncestorContainer:this.doc.body))},fixSelBorders:function(){var a=this.getRange();d(a),this.setSelection(a)},getSelectedOwnNodes:function(){var a,b,c=this.getOwnRanges(),d=[];for(a=0,b=c.length;b>a;a++)d.push(c[a].commonAncestorContainer||this.doc.body);return d},findNodesInSelection:function(b){var c,d,e,f=this.getOwnRanges(),g=[];for(d=0,e=f.length;e>d;d++)c=f[d].getNodes([1],function(c){return a.lang.array(b).contains(c.nodeName)}),g=g.concat(c);return g},containsUneditable:function(){var a,b,c=this.getOwnUneditables(),d=this.getSelection();for(a=0,b=c.length;b>a;a++)if(d.containsNode(c[a]))return!0;return!1},deleteContents:function(){var a,b=this.getOwnRanges();for(a=b.length;a--;)b[a].deleteContents();this.setSelection(b[0])},getPreviousNode:function(b,c){var d,e,f;return b||(d=this.getSelection(),b=d.anchorNode),b===this.contain?!1:(e=b.previousSibling,e===this.contain?!1:(e&&3!==e.nodeType&&1!==e.nodeType?e=this.getPreviousNode(e,c):e&&3===e.nodeType&&/^\s*$/.test(e.textContent)?e=this.getPreviousNode(e,c):c&&e&&1===e.nodeType&&!a.lang.array(["BR","HR","IMG"]).contains(e.nodeName)&&/^[\s]*$/.test(e.innerHTML)?e=this.getPreviousNode(e,c):e||b===this.contain||(f=b.parentNode,f!==this.contain&&(e=this.getPreviousNode(f,c))),e!==this.contain?e:!1))},getSelectionParentsByTag:function(){var b,c,d,e=this.getSelectedOwnNodes(),f=[];for(c=0,d=e.length;d>c;c++)b=e[c].nodeName&&"LI"===e[c].nodeName?e[c]:a.dom.getParentElement(e[c],{nodeName:["LI"]},!1,this.contain),b&&f.push(b);return f.length?f:null},getRangeToNodeEnd:function(){if(this.isCollapsed()){var a=this.getRange(),b=a.startContainer,c=a.startOffset,d=rangy.createRange(this.doc);return d.selectNodeContents(b),d.setStart(b,c),d}},caretIsLastInSelection:function(){var a=(rangy.createRange(this.doc),this.getSelection(),this.getRangeToNodeEnd().cloneContents()),b=a.textContent;return/^\s*$/.test(b)},caretIsFirstInSelection:function(){var b=rangy.createRange(this.doc),c=this.getSelection(),d=this.getRange(),e=d.startContainer;return e.nodeType===a.TEXT_NODE?this.isCollapsed()&&e.nodeType===a.TEXT_NODE&&/^\s*$/.test(e.data.substr(0,d.startOffset)):(b.selectNodeContents(this.getRange().commonAncestorContainer),b.collapse(!0),this.isCollapsed()&&(b.startContainer===c.anchorNode||b.endContainer===c.anchorNode)&&b.startOffset===c.anchorOffset)},caretIsInTheBeginnig:function(b){var c=this.getSelection(),d=c.anchorNode,e=c.anchorOffset;return b?0===e&&(d.nodeName&&d.nodeName===b.toUpperCase()||a.dom.getParentElement(d.parentNode,{nodeName:b},1)):0===e&&!this.getPreviousNode(d,!0)},caretIsBeforeUneditable:function(){var a,b,c,d,e=this.getSelection(),f=e.anchorNode,g=e.anchorOffset;if(0===g&&(a=this.getPreviousNode(f,!0),a))for(b=this.getOwnUneditables(),c=0,d=b.length;d>c;c++)if(a===b[c])return b[c];return!1},executeAndRestoreRangy:function(a){var b=this.doc.defaultView||this.doc.parentWindow,c=rangy.saveSelection(b);if(c)try{a()}catch(d){setTimeout(function(){throw d},0)}else a();rangy.restoreSelection(c)},executeAndRestore:function(b,c){var d,f,g,h,i,j,k,l,m,n=this.doc.body,o=c&&n.scrollTop,p=c&&n.scrollLeft,q="_wysihtml5-temp-placeholder",r='<span class="'+q+'">'+a.INVISIBLE_SPACE+"</span>",s=this.getRange(!0);if(!s)return b(n,n),void 0;s.collapsed||(k=s.cloneRange(),j=k.createContextualFragment(r),k.collapse(!1),k.insertNode(j),k.detach()),i=s.createContextualFragment(r),s.insertNode(i),j&&(d=this.contain.querySelectorAll("."+q),s.setStartBefore(d[0]),s.setEndAfter(d[d.length-1])),this.setSelection(s);try{b(s.startContainer,s.endContainer)}catch(t){setTimeout(function(){throw t},0)}if(d=this.contain.querySelectorAll("."+q),d&&d.length)for(l=rangy.createRange(this.doc),g=d[0].nextSibling,d.length>1&&(h=d[d.length-1].previousSibling),h&&g?(l.setStartBefore(g),l.setEndAfter(h)):(f=this.doc.createTextNode(a.INVISIBLE_SPACE),e.insert(f).after(d[0]),l.setStartBefore(f),l.setEndAfter(f)),this.setSelection(l),m=d.length;m--;)d[m].parentNode.removeChild(d[m]);else this.contain.focus();c&&(n.scrollTop=o,n.scrollLeft=p);try{d.parentNode.removeChild(d)}catch(u){}},set:function(a,b){var c=rangy.createRange(this.doc);c.setStart(a,b||0),this.setSelection(c)},insertHTML:function(a){var b,c=(rangy.createRange(this.doc),this.doc.createElement("DIV")),d=this.doc.createDocumentFragment();for(c.innerHTML=a,b=c.lastChild;c.firstChild;)d.appendChild(c.firstChild);this.insertNode(d),b&&this.setAfter(b)},insertNode:function(a){var b=this.getRange();b&&b.insertNode(a)},surround:function(a){var b,c,d=this.getOwnRanges(),e=[];if(0==d.length)return e;for(c=d.length;c--;){b=this.doc.createElement(a.nodeName),e.push(b),a.className&&(b.className=a.className),a.cssStyle&&b.setAttribute("style",a.cssStyle);try{d[c].surroundContents(b),this.selectNode(b)}catch(f){b.appendChild(d[c].extractContents()),d[c].insertNode(b)}}return e},deblockAndSurround:function(b){var c,d,e,f=this.doc.createElement("div"),g=rangy.createRange(this.doc);if(f.className=b.className,this.composer.commands.exec("formatBlock",b.nodeName,b.className),c=this.contain.querySelectorAll("."+b.className),c[0])for(c[0].parentNode.insertBefore(f,c[0]),g.setStartBefore(c[0]),g.setEndAfter(c[c.length-1]),d=g.extractContents();d.firstChild;)if(e=d.firstChild,1==e.nodeType&&a.dom.hasClass(e,b.className)){for(;e.firstChild;)f.appendChild(e.firstChild);"BR"!==e.nodeName&&f.appendChild(this.doc.createElement("br")),d.removeChild(e)}else f.appendChild(e);else f=null;return f},scrollIntoView:function(){var c,d=this.doc,e=5,f=d.documentElement.scrollHeight>d.documentElement.offsetHeight,g=d._wysihtml5ScrollIntoViewElement=d._wysihtml5ScrollIntoViewElement||function(){var b=d.createElement("span");return b.innerHTML=a.INVISIBLE_SPACE,b}();f&&(this.insertNode(g),c=b(g),g.parentNode.removeChild(g),c>=d.body.scrollTop+d.documentElement.offsetHeight-e&&(d.body.scrollTop=c))},selectLine:function(){a.browser.supportsSelectionModify()?this._selectLine_W3C():this.doc.selection&&this._selectLine_MSIE()},_selectLine_W3C:function(){var a=this.doc.defaultView,b=a.getSelection();b.modify("move","left","lineboundary"),b.modify("extend","right","lineboundary")},_selectLine_MSIE:function(){var a,b,c,d,e,f=this.doc.selection.createRange(),g=f.boundingTop,h=this.doc.body.scrollWidth;if(f.moveToPoint){for(0===g&&(c=this.doc.createElement("span"),this.insertNode(c),g=c.offsetTop,c.parentNode.removeChild(c)),g+=1,d=-10;h>d;d+=2)try{f.moveToPoint(d,g);break}catch(i){}for(a=g,b=this.doc.selection.createRange(),e=h;e>=0;e--)try{b.moveToPoint(e,a);break}catch(j){}f.setEndPoint("EndToEnd",b),f.select()}},getText:function(){var a=this.getSelection();return a?""+a:""},getNodes:function(a,b){var c=this.getRange();return c?c.getNodes([a],b):[]},fixRangeOverflow:function(a){var b,c;this.contain&&this.contain.firstChild&&a&&(b=a.compareNode(this.contain),2!==b?(1===b&&a.setStartBefore(this.contain.firstChild),0===b&&a.setEndAfter(this.contain.lastChild),3===b&&(a.setStartBefore(this.contain.firstChild),a.setEndAfter(this.contain.lastChild))):this._detectInlineRangeProblems(a)&&(c=a.endContainer.previousElementSibling,c&&a.setEnd(c,this._endOffsetForNode(c))))},_endOffsetForNode:function(a){var b=document.createRange();return b.selectNodeContents(a),b.endOffset},_detectInlineRangeProblems:function(a){var b=e.compareDocumentPosition(a.startContainer,a.endContainer);return 0==a.endOffset&&4&b},getRange:function(a){var b=this.getSelection(),c=b&&b.rangeCount&&b.getRangeAt(0);return a!==!0&&this.fixRangeOverflow(c),c},getOwnUneditables:function(){var b=e.query(this.contain,"."+this.unselectableClass),c=e.query(b,"."+this.unselectableClass);return a.lang.array(b).without(c)},getOwnRanges:function(){var a,b,c,d,e,f,g,h=[],i=this.getRange();if(i&&h.push(i),this.unselectableClass&&this.contain&&i&&(b=this.getOwnUneditables(),b.length>0))for(d=0,e=b.length;e>d;d++)for(a=[],f=0,g=h.length;g>f;f++){if(h[f])switch(h[f].compareNode(b[d])){case 2:break;case 3:c=h[f].cloneRange(),c.setEndBefore(b[d]),a.push(c),c=h[f].cloneRange(),c.setStartAfter(b[d]),a.push(c);break;default:a.push(h[f])}h=a}return h},getSelection:function(){return rangy.getSelection(this.doc.defaultView||this.doc.parentWindow)},setSelection:function(a){var b=this.doc.defaultView||this.doc.parentWindow,c=rangy.getSelection(b);return c.setSingleRange(a)},createRange:function(){return rangy.createRange(this.doc)},isCollapsed:function(){return this.getSelection().isCollapsed},getHtml:function(){return this.getSelection().toHtml()},isEndToEndInNode:function(b){var c=this.getRange(),d=c.commonAncestorContainer,e=c.startContainer,f=c.endContainer;if(d.nodeType===a.TEXT_NODE&&(d=d.parentNode),e.nodeType===a.TEXT_NODE&&!/^\s*$/.test(e.data.substr(c.startOffset)))return!1;if(f.nodeType===a.TEXT_NODE&&!/^\s*$/.test(f.data.substr(c.endOffset)))return!1;for(;e&&e!==d;){if(e.nodeType!==a.TEXT_NODE&&!a.dom.contains(d,e))return!1;if(a.dom.domNode(e).prev({ignoreBlankTexts:!0}))return!1;e=e.parentNode}for(;f&&f!==d;){if(f.nodeType!==a.TEXT_NODE&&!a.dom.contains(d,f))return!1;if(a.dom.domNode(f).next({ignoreBlankTexts:!0}))return!1;f=f.parentNode}return a.lang.array(b).contains(d.nodeName)?d:!1},deselect:function(){var a=this.getSelection();a&&a.removeAllRanges()}})}(wysihtml5),function(a,b){function c(a,b,c){if(!a.className)return!1;var d=a.className.match(c)||[];return d[d.length-1]===b}function d(a,b){if(!a.getAttribute||!a.getAttribute("style"))return!1;a.getAttribute("style").match(b);return a.getAttribute("style").match(b)?!0:!1}function e(a,b,c){a.getAttribute("style")?(h(a,c),a.getAttribute("style")&&!/^\s*$/.test(a.getAttribute("style"))?a.setAttribute("style",b+";"+a.getAttribute("style")):a.setAttribute("style",b)):a.setAttribute("style",b)}function f(a,b,c){a.className?(g(a,c),a.className+=" "+b):a.className=b}function g(a,b){a.className&&(a.className=a.className.replace(b,""))}function h(a,b){var c,d,e=[];if(a.getAttribute("style")){for(c=a.getAttribute("style").split(";"),d=c.length;d--;)c[d].match(b)||/^\s*$/.test(c[d])||e.push(c[d]);e.length?a.setAttribute("style",e.join(";")):a.removeAttribute("style")}}function i(a,b){var c,d,e,f=[],g=b.split(";"),h=a.getAttribute("style");if(h){for(h=h.replace(/\s/gi,"").toLowerCase(),f.push(RegExp("(^|\\s|;)"+b.replace(/\s/gi,"").replace(/([\(\)])/gi,"\\$1").toLowerCase().replace(";",";?").replace(/rgb\\\((\d+),(\d+),(\d+)\\\)/gi,"\\s?rgb\\($1,\\s?$2,\\s?$3\\)"),"gi")),c=g.length;c-->0;)/^\s*$/.test(g[c])||f.push(RegExp("(^|\\s|;)"+g[c].replace(/\s/gi,"").replace(/([\(\)])/gi,"\\$1").toLowerCase().replace(";",";?").replace(/rgb\\\((\d+),(\d+),(\d+)\\\)/gi,"\\s?rgb\\($1,\\s?$2,\\s?$3\\)"),"gi"));for(d=0,e=f.length;e>d;d++)if(h.match(f[d]))return f[d]}return!1}function j(c,d,e,f){return e?i(c,e):f?a.dom.hasClass(c,f):b.dom.arrayContains(d,c.tagName.toLowerCase())}function k(a,b,c,d){for(var e=a.length;e--;)if(!j(a[e],b,c,d))return!1;return a.length?!0:!1}function l(a,b,c){var d=i(a,b);return d?(h(a,d),"remove"):(e(a,b,c),"change")}function m(a,b){return a.className.replace(u," ")==b.className.replace(u," ")}function n(a){for(var b=a.parentNode;a.firstChild;)b.insertBefore(a.firstChild,a);b.removeChild(a)}function o(a,b){if(a.attributes.length!=b.attributes.length)return!1;for(var c,d,e,f=0,g=a.attributes.length;g>f;++f)if(c=a.attributes[f],e=c.name,"class"!=e){if(d=b.attributes.getNamedItem(e),c.specified!=d.specified)return!1;if(c.specified&&c.nodeValue!==d.nodeValue)return!1}return!0}function p(a,c){return b.dom.isCharacterDataNode(a)?0==c?!!a.previousSibling:c==a.length?!!a.nextSibling:!0:c>0&&c<a.childNodes.length}function q(a,c,d,e){var f,g;if(b.dom.isCharacterDataNode(c)&&(0==d?(d=b.dom.getNodeIndex(c),c=c.parentNode):d==c.length?(d=b.dom.getNodeIndex(c)+1,c=c.parentNode):f=b.dom.splitDataNode(c,d)),!(f||e&&c===e)){for(f=c.cloneNode(!1),f.id&&f.removeAttribute("id");g=c.childNodes[d];)f.appendChild(g);b.dom.insertAfter(f,c)}return c==a?f:q(a,f.parentNode,b.dom.getNodeIndex(f),e)}function r(b){this.isElementMerge=b.nodeType==a.ELEMENT_NODE,this.firstTextNode=this.isElementMerge?b.lastChild:b,this.textNodes=[this.firstTextNode]}function s(a,b,c,d,e,f,g){this.tagNames=a||[t],this.cssClass=b||(b===!1?!1:""),this.similarClassRegExp=c,this.cssStyle=e||"",this.similarStyleRegExp=f,this.normalize=d,this.applyToAnyTagName=!1,this.container=g}var t="span",u=/\s+/g;r.prototype={doMerge:function(){var a,b,c,d,e,f=[];for(d=0,e=this.textNodes.length;e>d;++d)a=this.textNodes[d],b=a.parentNode,f[d]=a.data,d&&(b.removeChild(a),b.hasChildNodes()||b.parentNode.removeChild(b));return this.firstTextNode.data=c=f.join(""),c},getLength:function(){for(var a=this.textNodes.length,b=0;a--;)b+=this.textNodes[a].length;return b},toString:function(){var a,b,c=[];for(a=0,b=this.textNodes.length;b>a;++a)c[a]="'"+this.textNodes[a].data+"'";return"[Merge("+c.join(",")+")]"}},s.prototype={getAncestorWithClass:function(d){for(var e;d;){if(e=this.cssClass?c(d,this.cssClass,this.similarClassRegExp):""!==this.cssStyle?!1:!0,d.nodeType==a.ELEMENT_NODE&&"false"!=d.getAttribute("contenteditable")&&b.dom.arrayContains(this.tagNames,d.tagName.toLowerCase())&&e)return d;d=d.parentNode}return!1},getAncestorWithStyle:function(c){for(var e;c;){if(e=this.cssStyle?d(c,this.similarStyleRegExp):!1,c.nodeType==a.ELEMENT_NODE&&"false"!=c.getAttribute("contenteditable")&&b.dom.arrayContains(this.tagNames,c.tagName.toLowerCase())&&e)return c;c=c.parentNode}return!1},getMatchingAncestor:function(a){var b=this.getAncestorWithClass(a),c=!1;return b?this.cssStyle&&(c="class"):(b=this.getAncestorWithStyle(a),b&&(c="style")),{element:b,type:c}},postApply:function(a,b){var c,d,e,f,g,h,i=a[0],j=a[a.length-1],k=[],l=i,m=j,n=0,o=j.length;for(f=0,g=a.length;g>f;++f)d=a[f],e=null,d&&d.parentNode&&(e=this.getAdjacentMergeableTextNode(d.parentNode,!1)),e?(c||(c=new r(e),k.push(c)),c.textNodes.push(d),d===i&&(l=c.firstTextNode,n=l.length),d===j&&(m=c.firstTextNode,o=c.getLength())):c=null;if(j&&j.parentNode&&(h=this.getAdjacentMergeableTextNode(j.parentNode,!0),h&&(c||(c=new r(j),k.push(c)),c.textNodes.push(h))),k.length){for(f=0,g=k.length;g>f;++f)k[f].doMerge();b.setStart(l,n),b.setEnd(m,o)}},getAdjacentMergeableTextNode:function(b,c){var d,e=b.nodeType==a.TEXT_NODE,f=e?b.parentNode:b,g=c?"nextSibling":"previousSibling";if(e){if(d=b[g],d&&d.nodeType==a.TEXT_NODE)return d}else if(d=f[g],d&&this.areElementsMergeable(b,d))return d[c?"firstChild":"lastChild"];return null},areElementsMergeable:function(a,c){return b.dom.arrayContains(this.tagNames,(a.tagName||"").toLowerCase())&&b.dom.arrayContains(this.tagNames,(c.tagName||"").toLowerCase())&&m(a,c)&&o(a,c)},createContainer:function(a){var b=a.createElement(this.tagNames[0]);return this.cssClass&&(b.className=this.cssClass),this.cssStyle&&b.setAttribute("style",this.cssStyle),b},applyToTextNode:function(a){var c,d=a.parentNode;1==d.childNodes.length&&b.dom.arrayContains(this.tagNames,d.tagName.toLowerCase())?(this.cssClass&&f(d,this.cssClass,this.similarClassRegExp),this.cssStyle&&e(d,this.cssStyle,this.similarStyleRegExp)):(c=this.createContainer(b.dom.getDocument(a)),a.parentNode.insertBefore(c,a),c.appendChild(a))},isRemovable:function(c){return b.dom.arrayContains(this.tagNames,c.tagName.toLowerCase())&&""===a.lang.string(c.className).trim()&&(!c.getAttribute("style")||""===a.lang.string(c.getAttribute("style")).trim())},undoToTextNode:function(a,b,c,d){var e,f=c?!1:!0,h=c||d,i=!1;b.containsNode(h)||(e=b.cloneRange(),e.selectNode(h),e.isPointInRange(b.endContainer,b.endOffset)&&p(b.endContainer,b.endOffset)&&(q(h,b.endContainer,b.endOffset,this.container),b.setEndAfter(h)),e.isPointInRange(b.startContainer,b.startOffset)&&p(b.startContainer,b.startOffset)&&(h=q(h,b.startContainer,b.startOffset,this.container))),!f&&this.similarClassRegExp&&g(h,this.similarClassRegExp),f&&this.similarStyleRegExp&&(i="change"===l(h,this.cssStyle,this.similarStyleRegExp)),this.isRemovable(h)&&!i&&n(h)},applyToRange:function(b){var c,d,e,f,g,h;for(d=b.length;d--;){if(c=b[d].getNodes([a.TEXT_NODE]),!c.length)try{return e=this.createContainer(b[d].endContainer.ownerDocument),b[d].surroundContents(e),this.selectNode(b[d],e),void 0}catch(i){}if(b[d].splitBoundaries(),c=b[d].getNodes([a.TEXT_NODE]),c.length){for(g=0,h=c.length;h>g;++g)f=c[g],this.getMatchingAncestor(f).element||this.applyToTextNode(f);b[d].setStart(c[0],0),f=c[c.length-1],b[d].setEnd(f,f.length),this.normalize&&this.postApply(c,b[d])}}},undoToRange:function(b){var c,d,e,f,g,h,i,j;for(f=b.length;f--;){for(c=b[f].getNodes([a.TEXT_NODE]),c.length?(b[f].splitBoundaries(),c=b[f].getNodes([a.TEXT_NODE])):(g=b[f].endContainer.ownerDocument,h=g.createTextNode(a.INVISIBLE_SPACE),b[f].insertNode(h),b[f].selectNode(h),c=[h]),i=0,j=c.length;j>i;++i)b[f].isValid()&&(d=c[i],e=this.getMatchingAncestor(d),"style"===e.type?this.undoToTextNode(d,b[f],!1,e.element):e.element&&this.undoToTextNode(d,b[f],e.element));1==j?this.selectNode(b[f],c[0]):(b[f].setStart(c[0],0),d=c[c.length-1],b[f].setEnd(d,d.length),this.normalize&&this.postApply(c,b[f]))}},selectNode:function(b,c){var d=c.nodeType===a.ELEMENT_NODE,e="canHaveHTML"in c?c.canHaveHTML:!0,f=d?c.innerHTML:c.data,g=""===f||f===a.INVISIBLE_SPACE;if(g&&d&&e)try{c.innerHTML=a.INVISIBLE_SPACE}catch(h){}b.selectNodeContents(c),g&&d?b.collapse(!1):g&&(b.setStartAfter(c),b.setEndAfter(c))},getTextSelectedByRange:function(a,b){var c,d,e=b.cloneRange();return e.selectNodeContents(a),c=e.intersection(b),d=c?""+c:"",e.detach(),d},isAppliedToRange:function(b){var c,d,e,f,g,h,i=[],j="full";for(e=b.length;e--;){if(d=b[e].getNodes([a.TEXT_NODE]),!d.length)return c=this.getMatchingAncestor(b[e].startContainer).element,c?{elements:[c],coverage:j}:!1;for(f=0,g=d.length;g>f;++f)h=this.getTextSelectedByRange(d[f],b[e]),c=this.getMatchingAncestor(d[f]).element,c&&""!=h?(i.push(c),1===a.dom.getTextNodes(c,!0).length?j="full":"full"===j&&(j="inline")):c||(j="partial")}return i.length?{elements:i,coverage:j}:!1},toggleRange:function(a){var b,c=this.isAppliedToRange(a);c?"full"===c.coverage?this.undoToRange(a):"inline"===c.coverage?(b=k(c.elements,this.tagNames,this.cssStyle,this.cssClass),this.undoToRange(a),b||this.applyToRange(a)):(k(c.elements,this.tagNames,this.cssStyle,this.cssClass)||this.undoToRange(a),this.applyToRange(a)):this.applyToRange(a)}},a.selection.HTMLApplier=s}(wysihtml5,rangy),wysihtml5.Commands=Base.extend({constructor:function(a){this.editor=a,this.composer=a.composer,this.doc=this.composer.doc},support:function(a){return wysihtml5.browser.supportsCommand(this.doc,a)},exec:function(a,b){var c=wysihtml5.commands[a],d=wysihtml5.lang.array(arguments).get(),e=c&&c.exec,f=null;if(this.editor.fire("beforecommand:composer"),e)d.unshift(this.composer),f=e.apply(c,d);else try{f=this.doc.execCommand(a,!1,b)}catch(g){}return this.editor.fire("aftercommand:composer"),f},state:function(a){var b=wysihtml5.commands[a],c=wysihtml5.lang.array(arguments).get(),d=b&&b.state;if(d)return c.unshift(this.composer),d.apply(b,c);try{return this.doc.queryCommandState(a)}catch(e){return!1}},stateValue:function(a){var b=wysihtml5.commands[a],c=wysihtml5.lang.array(arguments).get(),d=b&&b.stateValue;return d?(c.unshift(this.composer),d.apply(b,c)):!1}}),wysihtml5.commands.bold={exec:function(a,b){wysihtml5.commands.formatInline.execWithToggle(a,b,"b")},state:function(a,b){return wysihtml5.commands.formatInline.state(a,b,"b")}},function(a){function b(b,c){var g,h,i,j,k,l,m,n,o,p=b.doc,q="_wysihtml5-temp-"+ +new Date,r=/non-matching-class/g,s=0;for(a.commands.formatInline.exec(b,d,e,q,r,d,d,!0,!0),h=p.querySelectorAll(e+"."+q),g=h.length;g>s;s++){i=h[s],i.removeAttribute("class");for(o in c)"text"!==o&&i.setAttribute(o,c[o])}l=i,1===g&&(m=f.getTextContent(i),j=!!i.querySelector("*"),k=""===m||m===a.INVISIBLE_SPACE,!j&&k&&(f.setTextContent(i,c.text||i.href),n=p.createTextNode(" "),b.selection.setAfter(i),f.insert(n).after(i),l=n)),b.selection.setAfter(l)}function c(a,b,c){var d,e,f,g;for(e=b.length;e--;){for(d=b[e].attributes,f=d.length;f--;)b[e].removeAttribute(d.item(f).name);for(g in c)c.hasOwnProperty(g)&&b[e].setAttribute(g,c[g])}}var d,e="A",f=a.dom;a.commands.createLink={exec:function(a,d,e){var f=this.state(a,d);f?a.selection.executeAndRestore(function(){c(a,f,e)}):(e="object"==typeof e?e:{href:e},b(a,e))},state:function(b,c){return a.commands.formatInline.state(b,c,"A")}}}(wysihtml5),function(a){function b(a,b){for(var d,e,f,g=b.length,h=0;g>h;h++)d=b[h],e=c.getParentElement(d,{nodeName:"code"}),f=c.getTextContent(d),f.match(c.autoLink.URL_REG_EXP)&&!e?e=c.renameElement(d,"code"):c.replaceWithChildNodes(d)}var c=a.dom;a.commands.removeLink={exec:function(a,c){var d=this.state(a,c);d&&a.selection.executeAndRestore(function(){b(a,d)})},state:function(b,c){return a.commands.formatInline.state(b,c,"A")}}}(wysihtml5),function(a){var b=/wysiwyg-font-size-[0-9a-z\-]+/g;a.commands.fontSize={exec:function(c,d,e){a.commands.formatInline.execWithToggle(c,d,"span","wysiwyg-font-size-"+e,b)},state:function(c,d,e){return a.commands.formatInline.state(c,d,"span","wysiwyg-font-size-"+e,b)}}}(wysihtml5),function(a){var b=/(\s|^)font-size\s*:\s*[^;\s]+;?/gi;a.commands.fontSizeStyle={exec:function(c,d,e){e="object"==typeof e?e.size:e,/^\s*$/.test(e)||a.commands.formatInline.execWithToggle(c,d,"span",!1,!1,"font-size:"+e,b)},state:function(c,d){return a.commands.formatInline.state(c,d,"span",!1,!1,"font-size",b)},stateValue:function(b,c){var d,e=this.state(b,c);return e&&a.lang.object(e).isArray()&&(e=e[0]),e&&(d=e.getAttribute("style"),d)?a.quirks.styleParser.parseFontSize(d):!1}}}(wysihtml5),function(a){var b=/wysiwyg-color-[0-9a-z]+/g;a.commands.foreColor={exec:function(c,d,e){a.commands.formatInline.execWithToggle(c,d,"span","wysiwyg-color-"+e,b)},state:function(c,d,e){return a.commands.formatInline.state(c,d,"span","wysiwyg-color-"+e,b)}}}(wysihtml5),function(a){var b=/(\s|^)color\s*:\s*[^;\s]+;?/gi;a.commands.foreColorStyle={exec:function(c,d,e){var f,g=a.quirks.styleParser.parseColor("object"==typeof e?"color:"+e.color:"color:"+e,"color");g&&(f="color: rgb("+g[0]+","+g[1]+","+g[2]+");",1!==g[3]&&(f+="color: rgba("+g[0]+","+g[1]+","+g[2]+","+g[3]+");"),a.commands.formatInline.execWithToggle(c,d,"span",!1,!1,f,b))},state:function(c,d){return a.commands.formatInline.state(c,d,"span",!1,!1,"color",b)},stateValue:function(b,c,d){var e,f=this.state(b,c);return f&&a.lang.object(f).isArray()&&(f=f[0]),f&&(e=f.getAttribute("style"),e&&e)?(val=a.quirks.styleParser.parseColor(e,"color"),a.quirks.styleParser.unparseColor(val,d)):!1
}}}(wysihtml5),function(a){var b=/(\s|^)background-color\s*:\s*[^;\s]+;?/gi;a.commands.bgColorStyle={exec:function(c,d,e){var f,g=a.quirks.styleParser.parseColor("object"==typeof e?"background-color:"+e.color:"background-color:"+e,"background-color");g&&(f="background-color: rgb("+g[0]+","+g[1]+","+g[2]+");",1!==g[3]&&(f+="background-color: rgba("+g[0]+","+g[1]+","+g[2]+","+g[3]+");"),a.commands.formatInline.execWithToggle(c,d,"span",!1,!1,f,b))},state:function(c,d){return a.commands.formatInline.state(c,d,"span",!1,!1,"background-color",b)},stateValue:function(b,c,d){var e,f=this.state(b,c),g=!1;return f&&a.lang.object(f).isArray()&&(f=f[0]),f&&(e=f.getAttribute("style"),e)?(g=a.quirks.styleParser.parseColor(e,"background-color"),a.quirks.styleParser.unparseColor(g,d)):!1}}}(wysihtml5),function(a){function b(b,c,e){b.className?(d(b,e),b.className=a.lang.string(b.className+" "+c).trim()):b.className=c}function c(b,c,d){e(b,d),b.getAttribute("style")?b.setAttribute("style",a.lang.string(b.getAttribute("style")+" "+c).trim()):b.setAttribute("style",c)}function d(b,c){var d=c.test(b.className);return b.className=b.className.replace(c,""),""==a.lang.string(b.className).trim()&&b.removeAttribute("class"),d}function e(b,c){var d=c.test(b.getAttribute("style"));return b.setAttribute("style",(b.getAttribute("style")||"").replace(c,"")),""==a.lang.string(b.getAttribute("style")||"").trim()&&b.removeAttribute("style"),d}function f(a){var b=a.lastChild;b&&g(b)&&b.parentNode.removeChild(b)}function g(a){return"BR"===a.nodeName}function h(b,c){var d,e,g;for(b.selection.isCollapsed()&&b.selection.selectLine(),d=b.selection.surround(c),e=0,g=d.length;g>e;e++)a.dom.lineBreaks(d[e]).remove(),f(d[e])}function i(b){return!!a.lang.string(b.className).trim()}function j(b){return!!a.lang.string(b.getAttribute("style")||"").trim()}var k=a.dom,l=["H1","H2","H3","H4","H5","H6","P","PRE","DIV"];a.commands.formatBlock={exec:function(f,g,m,n,o,p,q){var r,s,t,u,v,w=(f.doc,this.state(f,g,m,n,o,p,q)),x=f.config.useLineBreaks,y=x?"DIV":"P";return m="string"==typeof m?m.toUpperCase():m,w.length?(f.selection.executeAndRestoreRangy(function(){var b,c,f;for(b=w.length;b--;){if(o&&(s=d(w[b],o)),q&&(u=e(w[b],q)),(u||s)&&null===m&&w[b].nodeName!=y)return;c=i(w[b]),f=j(w[b]),c||f||!x&&"P"!==m?k.renameElement(w[b],"P"===m?"DIV":y):(a.dom.lineBreaks(w[b]).add(),k.replaceWithChildNodes(w[b]))}}),void 0):((null!==m&&!a.lang.array(l).contains(m)||(r=f.selection.findNodesInSelection(l).concat(f.selection.getSelectedOwnNodes()),f.selection.executeAndRestoreRangy(function(){for(var a=r.length;a--;)v=k.getParentElement(r[a],{nodeName:l}),v==f.element&&(v=null),v&&(m&&(v=k.renameElement(v,m)),n&&b(v,n,o),p&&c(v,p,q),t=!0)}),!t))&&h(f,{nodeName:m||y,className:n||null,cssStyle:p||null}),void 0)},state:function(b,c,d,e,f,g,h){var i,j,l,m=b.selection.getSelectedOwnNodes(),n=[];for(d="string"==typeof d?d.toUpperCase():d,j=0,l=m.length;l>j;j++)i=k.getParentElement(m[j],{nodeName:d,className:e,classRegExp:f,cssStyle:g,styleRegExp:h}),i&&-1==a.lang.array(n).indexOf(i)&&n.push(i);return 0==n.length?!1:n}}}(wysihtml5),wysihtml5.commands.formatCode={exec:function(a,b,c){var d,e,f,g=this.state(a);g?a.selection.executeAndRestore(function(){d=g.querySelector("code"),wysihtml5.dom.replaceWithChildNodes(g),d&&wysihtml5.dom.replaceWithChildNodes(d)}):(e=a.selection.getRange(),f=e.extractContents(),g=a.doc.createElement("pre"),d=a.doc.createElement("code"),c&&(d.className=c),g.appendChild(d),d.appendChild(f),e.insertNode(g),a.selection.selectNode(g))},state:function(a){var b=a.selection.getSelectedNode();return b&&b.nodeName&&"PRE"==b.nodeName&&b.firstChild&&b.firstChild.nodeName&&"CODE"==b.firstChild.nodeName?b:wysihtml5.dom.getParentElement(b,{nodeName:"CODE"})&&wysihtml5.dom.getParentElement(b,{nodeName:"PRE"})}},function(a){function b(a){var b=d[a];return b?[a.toLowerCase(),b.toLowerCase()]:[a.toLowerCase()]}function c(c,d,f,g,h,i){var j=c;return d&&(j+=":"+d),g&&(j+=":"+g),e[j]||(e[j]=new a.selection.HTMLApplier(b(c),d,f,!0,g,h,i)),e[j]}var d={strong:"b",em:"i",b:"strong",i:"em"},e={};a.commands.formatInline={exec:function(a,b,d,e,f,g,h,i,j){var k=a.selection.createRange(),l=a.selection.getOwnRanges();return l&&0!=l.length?(a.selection.getSelection().removeAllRanges(),c(d,e,f,g,h,a.element).toggleRange(l),i?j||a.cleanUp():(k.setStart(l[0].startContainer,l[0].startOffset),k.setEnd(l[l.length-1].endContainer,l[l.length-1].endOffset),a.selection.setSelection(k),a.selection.executeAndRestore(function(){j||a.cleanUp()},!0,!0)),void 0):!1},execWithToggle:function(b,c,d,e,f,g,h){var i,j=this;this.state(b,c,d,e,f,g,h)&&b.selection.isCollapsed()&&!b.selection.caretIsLastInSelection()&&!b.selection.caretIsFirstInSelection()?(i=j.state(b,c,d,e,f)[0],b.selection.executeAndRestoreRangy(function(){i.parentNode;b.selection.selectNode(i,!0),a.commands.formatInline.exec(b,c,d,e,f,g,h,!0,!0)})):this.state(b,c,d,e,f,g,h)&&!b.selection.isCollapsed()?b.selection.executeAndRestoreRangy(function(){a.commands.formatInline.exec(b,c,d,e,f,g,h,!0,!0)}):a.commands.formatInline.exec(b,c,d,e,f,g,h)},state:function(b,e,f,g,h,i,j){var k,l,m=b.doc,n=d[f]||f;return a.dom.hasElementWithTagName(m,f)||a.dom.hasElementWithTagName(m,n)?g&&!a.dom.hasElementWithClassName(m,g)?!1:(k=b.selection.getOwnRanges(),k&&0!==k.length?(l=c(f,g,h,i,j,b.element).isAppliedToRange(k),l&&l.elements?l.elements:!1):!1):!1}}}(wysihtml5),function(a){a.commands.insertBlockQuote={exec:function(b,c){var d=this.state(b,c),e=b.selection.isEndToEndInNode(["H1","H2","H3","H4","H5","H6","P"]);b.selection.executeAndRestore(function(){if(d)b.config.useLineBreaks&&a.dom.lineBreaks(d).add(),a.dom.unwrap(d);else if(b.selection.isCollapsed()&&b.selection.selectLine(),e){var c=e.ownerDocument.createElement("blockquote");a.dom.insert(c).after(e),c.appendChild(e)}else b.selection.surround({nodeName:"blockquote"})})},state:function(b){var c=b.selection.getSelectedNode(),d=a.dom.getParentElement(c,{nodeName:"BLOCKQUOTE"},!1,b.element);return d?d:!1}}}(wysihtml5),wysihtml5.commands.insertHTML={exec:function(a,b,c){a.commands.support(b)?a.doc.execCommand(b,!1,c):a.selection.insertHTML(c)},state:function(){return!1}},function(a){var b="IMG";a.commands.insertImage={exec:function(c,d,e){var f,g,h,i,j;if(e="object"==typeof e?e:{src:e},f=c.doc,g=this.state(c),g)return c.selection.setBefore(g),i=g.parentNode,i.removeChild(g),a.dom.removeEmptyTextNodes(i),"A"!==i.nodeName||i.firstChild||(c.selection.setAfter(i),i.parentNode.removeChild(i)),a.quirks.redraw(c.element),void 0;g=f.createElement(b);for(j in e)g.setAttribute("className"===j?"class":j,e[j]);c.selection.insertNode(g),a.browser.hasProblemsSettingCaretAfterImg()?(h=f.createTextNode(a.INVISIBLE_SPACE),c.selection.insertNode(h),c.selection.setAfter(h)):c.selection.setAfter(g)},state:function(c){var d,e,f,g=c.doc;return a.dom.hasElementWithTagName(g,b)?(d=c.selection.getSelectedNode(),d?d.nodeName===b?d:d.nodeType!==a.ELEMENT_NODE?!1:(e=c.selection.getText(),e=a.lang.string(e).trim(),e?!1:(f=c.selection.getNodes(a.ELEMENT_NODE,function(a){return"IMG"===a.nodeName}),1!==f.length?!1:f[0])):!1):!1}}}(wysihtml5),function(a){var b="<br>"+(a.browser.needsSpaceAfterLineBreak()?" ":"");a.commands.insertLineBreak={exec:function(c,d){c.commands.support(d)?(c.doc.execCommand(d,!1,null),a.browser.autoScrollsToCaret()||c.selection.scrollIntoView()):c.commands.exec("insertHTML",b)},state:function(){return!1}}}(wysihtml5),wysihtml5.commands.insertOrderedList={exec:function(a,b){wysihtml5.commands.insertList.exec(a,b,"OL")},state:function(a,b){return wysihtml5.commands.insertList.state(a,b,"OL")}},wysihtml5.commands.insertUnorderedList={exec:function(a,b){wysihtml5.commands.insertList.exec(a,b,"UL")},state:function(a,b){return wysihtml5.commands.insertList.state(a,b,"UL")}},wysihtml5.commands.insertList=function(a){var b=function(a,b){if(a&&a.nodeName){"string"==typeof b&&(b=[b]);for(var c=b.length;c--;)if(a.nodeName===b[c])return!0}return!1},c=function(c,d,e){var f,g,h={el:null,other:!1};return c&&(f=a.dom.getParentElement(c,{nodeName:"LI"}),g="UL"===d?"OL":"UL",b(c,d)?h.el=c:b(c,g)?h={el:c,other:!0}:f&&(b(f.parentNode,d)?h.el=f.parentNode:b(f.parentNode,g)&&(h={el:f.parentNode,other:!0}))),h.el&&!e.element.contains(h.el)&&(h.el=null),h},d=function(b,c,d){var e,g="UL"===c?"OL":"UL";d.selection.executeAndRestore(function(){var h,i,j=f(g,d);if(j.length)for(h=j.length;h--;)a.dom.renameElement(j[h],c.toLowerCase());else{for(e=f(["OL","UL"],d),i=e.length;i--;)a.dom.resolveList(e[i],d.config.useLineBreaks);a.dom.resolveList(b,d.config.useLineBreaks)}})},e=function(b,c,d){var e="UL"===c?"OL":"UL";d.selection.executeAndRestore(function(){var g,h=[b].concat(f(e,d));for(g=h.length;g--;)a.dom.renameElement(h[g],c.toLowerCase())})},f=function(a,c){var d,e=c.selection.getOwnRanges(),f=[];for(d=e.length;d--;)f=f.concat(e[d].getNodes([1],function(c){return b(c,a)}));return f},g=function(b,c){c.selection.executeAndRestoreRangy(function(){var d,e,f="_wysihtml5-temp-"+(new Date).getTime(),g=c.selection.deblockAndSurround({nodeName:"div",className:f}),h=/\uFEFF/g;g.innerHTML=g.innerHTML.replace(h,""),g&&(d=a.lang.array(["","<br>",a.INVISIBLE_SPACE]).contains(g.innerHTML),e=a.dom.convertToList(g,b.toLowerCase(),c.parent.config.uneditableContainerClassname),d&&c.selection.selectNode(e.querySelector("li"),!0))})};return{exec:function(a,b,f){var h=a.doc,i="OL"===f?"insertOrderedList":"insertUnorderedList",j=a.selection.getSelectedNode(),k=c(j,f,a);k.el?k.other?e(k.el,f,a):d(k.el,f,a):a.commands.support(i)?h.execCommand(i,!1,null):g(f,a)},state:function(a,b,d){var e=a.selection.getSelectedNode(),f=c(e,d,a);return f.el&&!f.other?f.el:!1}}}(wysihtml5),wysihtml5.commands.italic={exec:function(a,b){wysihtml5.commands.formatInline.execWithToggle(a,b,"i")},state:function(a,b){return wysihtml5.commands.formatInline.state(a,b,"i")}},function(a){var b="wysiwyg-text-align-center",c=/wysiwyg-text-align-[0-9a-z]+/g;a.commands.justifyCenter={exec:function(d){return a.commands.formatBlock.exec(d,"formatBlock",null,b,c)},state:function(d){return a.commands.formatBlock.state(d,"formatBlock",null,b,c)}}}(wysihtml5),function(a){var b="wysiwyg-text-align-left",c=/wysiwyg-text-align-[0-9a-z]+/g;a.commands.justifyLeft={exec:function(d){return a.commands.formatBlock.exec(d,"formatBlock",null,b,c)},state:function(d){return a.commands.formatBlock.state(d,"formatBlock",null,b,c)}}}(wysihtml5),function(a){var b="wysiwyg-text-align-right",c=/wysiwyg-text-align-[0-9a-z]+/g;a.commands.justifyRight={exec:function(d){return a.commands.formatBlock.exec(d,"formatBlock",null,b,c)},state:function(d){return a.commands.formatBlock.state(d,"formatBlock",null,b,c)}}}(wysihtml5),function(a){var b="wysiwyg-text-align-justify",c=/wysiwyg-text-align-[0-9a-z]+/g;a.commands.justifyFull={exec:function(d){return a.commands.formatBlock.exec(d,"formatBlock",null,b,c)},state:function(d){return a.commands.formatBlock.state(d,"formatBlock",null,b,c)}}}(wysihtml5),function(a){var b="text-align: right;",c=/(\s|^)text-align\s*:\s*[^;\s]+;?/gi;a.commands.alignRightStyle={exec:function(d){return a.commands.formatBlock.exec(d,"formatBlock",null,null,null,b,c)},state:function(d){return a.commands.formatBlock.state(d,"formatBlock",null,null,null,b,c)}}}(wysihtml5),function(a){var b="text-align: left;",c=/(\s|^)text-align\s*:\s*[^;\s]+;?/gi;a.commands.alignLeftStyle={exec:function(d){return a.commands.formatBlock.exec(d,"formatBlock",null,null,null,b,c)},state:function(d){return a.commands.formatBlock.state(d,"formatBlock",null,null,null,b,c)}}}(wysihtml5),function(a){var b="text-align: center;",c=/(\s|^)text-align\s*:\s*[^;\s]+;?/gi;a.commands.alignCenterStyle={exec:function(d){return a.commands.formatBlock.exec(d,"formatBlock",null,null,null,b,c)},state:function(d){return a.commands.formatBlock.state(d,"formatBlock",null,null,null,b,c)}}}(wysihtml5),wysihtml5.commands.redo={exec:function(a){return a.undoManager.redo()},state:function(){return!1}},wysihtml5.commands.underline={exec:function(a,b){wysihtml5.commands.formatInline.execWithToggle(a,b,"u")},state:function(a,b){return wysihtml5.commands.formatInline.state(a,b,"u")}},wysihtml5.commands.undo={exec:function(a){return a.undoManager.undo()},state:function(){return!1}},wysihtml5.commands.createTable={exec:function(a,b,c){var d,e,f;if(c&&c.cols&&c.rows&&parseInt(c.cols,10)>0&&parseInt(c.rows,10)>0){for(f=c.tableStyle?'<table style="'+c.tableStyle+'">':"<table>",f+="<tbody>",e=0;e<c.rows;e++){for(f+="<tr>",d=0;d<c.cols;d++)f+="<td>&nbsp;</td>";f+="</tr>"}f+="</tbody></table>",a.commands.exec("insertHTML",f)}},state:function(){return!1}},wysihtml5.commands.mergeTableCells={exec:function(a,b){a.tableSelection&&a.tableSelection.start&&a.tableSelection.end&&(this.state(a,b)?wysihtml5.dom.table.unmergeCell(a.tableSelection.start):wysihtml5.dom.table.mergeCellsBetween(a.tableSelection.start,a.tableSelection.end))},state:function(a){if(a.tableSelection){var b=a.tableSelection.start,c=a.tableSelection.end;if(b&&c&&b==c&&(wysihtml5.dom.getAttribute(b,"colspan")&&parseInt(wysihtml5.dom.getAttribute(b,"colspan"),10)>1||wysihtml5.dom.getAttribute(b,"rowspan")&&parseInt(wysihtml5.dom.getAttribute(b,"rowspan"),10)>1))return[b]}return!1}},wysihtml5.commands.addTableCells={exec:function(a,b,c){if(a.tableSelection&&a.tableSelection.start&&a.tableSelection.end){var d=wysihtml5.dom.table.orderSelectionEnds(a.tableSelection.start,a.tableSelection.end);"before"==c||"above"==c?wysihtml5.dom.table.addCells(d.start,c):("after"==c||"below"==c)&&wysihtml5.dom.table.addCells(d.end,c),setTimeout(function(){a.tableSelection.select(d.start,d.end)},0)}},state:function(){return!1}},wysihtml5.commands.deleteTableCells={exec:function(a,b,c){if(a.tableSelection&&a.tableSelection.start&&a.tableSelection.end){var d,e=wysihtml5.dom.table.orderSelectionEnds(a.tableSelection.start,a.tableSelection.end),f=wysihtml5.dom.table.indexOf(e.start),g=a.tableSelection.table;wysihtml5.dom.table.removeCells(e.start,c),setTimeout(function(){d=wysihtml5.dom.table.findCell(g,f),d||("row"==c&&(d=wysihtml5.dom.table.findCell(g,{row:f.row-1,col:f.col})),"column"==c&&(d=wysihtml5.dom.table.findCell(g,{row:f.row,col:f.col-1}))),d&&a.tableSelection.select(d,d)},0)}},state:function(){return!1}},wysihtml5.commands.indentList={exec:function(a){var b=a.selection.getSelectionParentsByTag("LI");return b?this.tryToPushLiLevel(b,a.selection):!1},state:function(){return!1},tryToPushLiLevel:function(a,b){var c,d,e,f,g,h=!1;return b.executeAndRestoreRangy(function(){for(var b=a.length;b--;)f=a[b],c="OL"===f.parentNode.nodeName?"OL":"UL",d=f.ownerDocument.createElement(c),e=wysihtml5.dom.domNode(f).prev({nodeTypes:[wysihtml5.ELEMENT_NODE]}),g=e?e.querySelector("ul, ol"):null,e&&(g?g.appendChild(f):(d.appendChild(f),e.appendChild(d)),h=!0)}),h}},wysihtml5.commands.outdentList={exec:function(a){var b=a.selection.getSelectionParentsByTag("LI");return b?this.tryToPullLiLevel(b,a):!1},state:function(){return!1},tryToPullLiLevel:function(a,b){var c,d,e,f,g,h=!1,i=this;return b.selection.executeAndRestoreRangy(function(){var j,k;for(j=a.length;j--;)if(f=a[j],f.parentNode&&(c=f.parentNode,"OL"===c.tagName||"UL"===c.tagName)){if(h=!0,d=wysihtml5.dom.getParentElement(c.parentNode,{nodeName:["OL","UL"]},!1,b.element),e=wysihtml5.dom.getParentElement(c.parentNode,{nodeName:["LI"]},!1,b.element),d&&e)f.nextSibling&&(g=i.getAfterList(c,f),f.appendChild(g)),d.insertBefore(f,e.nextSibling);else{for(f.nextSibling&&(g=i.getAfterList(c,f),f.appendChild(g)),k=f.childNodes.length;k--;)c.parentNode.insertBefore(f.childNodes[k],c.nextSibling);c.parentNode.insertBefore(document.createElement("br"),c.nextSibling),f.parentNode.removeChild(f)}0===c.childNodes.length&&c.parentNode.removeChild(c)}}),h},getAfterList:function(a,b){for(var c=a.nodeName,d=document.createElement(c);b.nextSibling;)d.appendChild(b.nextSibling);return d}},function(a){var b=90,c=89,d=8,e=46,f=25,g="data-wysihtml5-selection-node",h="data-wysihtml5-selection-offset",i=('<span id="_wysihtml5-undo" class="_wysihtml5-temp">'+a.INVISIBLE_SPACE+"</span>",'<span id="_wysihtml5-redo" class="_wysihtml5-temp">'+a.INVISIBLE_SPACE+"</span>",a.dom);a.UndoManager=a.lang.Dispatcher.extend({constructor:function(a){this.editor=a,this.composer=a.composer,this.element=this.composer.element,this.position=0,this.historyStr=[],this.historyDom=[],this.transact(),this._observe()},_observe:function(){{var a,f=this;this.composer.sandbox.getDocument()}i.observe(this.element,"keydown",function(a){if(!a.altKey&&(a.ctrlKey||a.metaKey)){var d=a.keyCode,e=d===b&&!a.shiftKey,g=d===b&&a.shiftKey||d===c;e?(f.undo(),a.preventDefault()):g&&(f.redo(),a.preventDefault())}}),i.observe(this.element,"keydown",function(b){var c=b.keyCode;c!==a&&(a=c,(c===d||c===e)&&f.transact())}),this.editor.on("newword:composer",function(){f.transact()}).on("beforecommand:composer",function(){f.transact()})},transact:function(){var b,c,d,e,i,j,k,l=this.historyStr[this.position-1],m=this.composer.getValue(!1,!1),n=this.element.offsetWidth>0&&this.element.offsetHeight>0;m!==l&&(j=this.historyStr.length=this.historyDom.length=this.position,j>f&&(this.historyStr.shift(),this.historyDom.shift(),this.position--),this.position++,n&&(b=this.composer.selection.getRange(),c=b&&b.startContainer?b.startContainer:this.element,d=b&&b.startOffset?b.startOffset:0,c.nodeType===a.ELEMENT_NODE?e=c:(e=c.parentNode,i=this.getChildNodeIndex(e,c)),e.setAttribute(h,d),void 0!==i&&e.setAttribute(g,i)),k=this.element.cloneNode(!!m),this.historyDom.push(k),this.historyStr.push(m),e&&(e.removeAttribute(h),e.removeAttribute(g)))},undo:function(){this.transact(),this.undoPossible()&&(this.set(this.historyDom[--this.position-1]),this.editor.fire("undo:composer"))},redo:function(){this.redoPossible()&&(this.set(this.historyDom[++this.position-1]),this.editor.fire("redo:composer"))},undoPossible:function(){return this.position>1},redoPossible:function(){return this.position<this.historyStr.length},set:function(a){var b,c,d,e,f,i;for(this.element.innerHTML="",b=0,c=a.childNodes,d=a.childNodes.length;d>b;b++)this.element.appendChild(c[b].cloneNode(!0));a.hasAttribute(h)?(e=a.getAttribute(h),i=a.getAttribute(g),f=this.element):(f=this.element.querySelector("["+h+"]")||this.element,e=f.getAttribute(h),i=f.getAttribute(g),f.removeAttribute(h),f.removeAttribute(g)),null!==i&&(f=this.getChildNodeByIndex(f,+i)),this.composer.selection.set(f,e)},getChildNodeIndex:function(a,b){for(var c=0,d=a.childNodes,e=d.length;e>c;c++)if(d[c]===b)return c},getChildNodeByIndex:function(a,b){return a.childNodes[b]}})}(wysihtml5),wysihtml5.views.View=Base.extend({constructor:function(a,b,c){this.parent=a,this.element=b,this.config=c,this.config.noTextarea||this._observeViewChange()},_observeViewChange:function(){var a=this;this.parent.on("beforeload",function(){a.parent.on("change_view",function(b){b===a.name?(a.parent.currentView=a,a.show(),setTimeout(function(){a.focus()},0)):a.hide()})})},focus:function(){if(this.element.ownerDocument.querySelector(":focus")!==this.element)try{this.element.focus()}catch(a){}},hide:function(){this.element.style.display="none"},show:function(){this.element.style.display=""},disable:function(){this.element.setAttribute("disabled","disabled")},enable:function(){this.element.removeAttribute("disabled")}}),function(a){var b=a.dom,c=a.browser;a.views.Composer=a.views.View.extend({name:"composer",CARET_HACK:"<br>",constructor:function(a,b,c){this.base(a,b,c),this.config.noTextarea?this.editableArea=b:this.textarea=this.parent.textarea,this.config.contentEditableMode?this._initContentEditableArea():this._initSandbox()},clear:function(){this.element.innerHTML=c.displaysCaretInEmptyContentEditableCorrectly()?"":this.CARET_HACK},getValue:function(b,c){var d=this.isEmpty()?"":a.quirks.getCorrectInnerHTML(this.element);return b!==!1&&(d=this.parent.parse(d,c===!1?!1:!0)),d},setValue:function(a,b){b&&(a=this.parent.parse(a));try{this.element.innerHTML=a}catch(c){this.element.innerText=a}},cleanUp:function(){this.parent.parse(this.element)},show:function(){this.editableArea.style.display=this._displayStyle||"",this.config.noTextarea||this.textarea.element.disabled||(this.disable(),this.enable())},hide:function(){this._displayStyle=b.getStyle("display").from(this.editableArea),"none"===this._displayStyle&&(this._displayStyle=null),this.editableArea.style.display="none"},disable:function(){this.parent.fire("disable:composer"),this.element.removeAttribute("contentEditable")},enable:function(){this.parent.fire("enable:composer"),this.element.setAttribute("contentEditable","true")},focus:function(b){a.browser.doesAsyncFocus()&&this.hasPlaceholderSet()&&this.clear(),this.base();var c=this.element.lastChild;b&&c&&this.selection&&("BR"===c.nodeName?this.selection.setBefore(this.element.lastChild):this.selection.setAfter(this.element.lastChild))},getTextContent:function(){return b.getTextContent(this.element)},hasPlaceholderSet:function(){return this.getTextContent()==(this.config.noTextarea?this.editableArea.getAttribute("data-placeholder"):this.textarea.element.getAttribute("placeholder"))&&this.placeholderSet},isEmpty:function(){var a=this.element.innerHTML.toLowerCase();return/^(\s|<br>|<\/br>|<p>|<\/p>)*$/i.test(a)||""===a||"<br>"===a||"<p></p>"===a||"<p><br></p>"===a||this.hasPlaceholderSet()},_initContentEditableArea:function(){var a=this;this.config.noTextarea?this.sandbox=new b.ContentEditableArea(function(){a._create()},{},this.editableArea):(this.sandbox=new b.ContentEditableArea(function(){a._create()}),this.editableArea=this.sandbox.getContentEditable(),b.insert(this.editableArea).after(this.textarea.element),this._createWysiwygFormField())},_initSandbox:function(){var a,c=this;this.sandbox=new b.Sandbox(function(){c._create()},{stylesheets:this.config.stylesheets}),this.editableArea=this.sandbox.getIframe(),a=this.textarea.element,b.insert(this.editableArea).after(a),this._createWysiwygFormField()},_createWysiwygFormField:function(){if(this.textarea.element.form){var a=document.createElement("input");a.type="hidden",a.name="_wysihtml5_mode",a.value=1,b.insert(a).after(this.textarea.element)}},_create:function(){var d,e,f=this;this.doc=this.sandbox.getDocument(),this.element=this.config.contentEditableMode?this.sandbox.getContentEditable():this.doc.body,this.config.noTextarea?this.cleanUp():(this.textarea=this.parent.textarea,this.element.innerHTML=this.textarea.getValue(!0,!1)),this.selection=new a.Selection(this.parent,this.element,this.config.uneditableContainerClassname),this.commands=new a.Commands(this.parent),this.config.noTextarea||b.copyAttributes(["className","spellcheck","title","lang","dir","accessKey"]).from(this.textarea.element).to(this.element),b.addClass(this.element,this.config.composerClassName),this.config.style&&!this.config.contentEditableMode&&this.style(),this.observe(),d=this.config.name,d&&(b.addClass(this.element,d),this.config.contentEditableMode||b.addClass(this.editableArea,d)),this.enable(),!this.config.noTextarea&&this.textarea.element.disabled&&this.disable(),e="string"==typeof this.config.placeholder?this.config.placeholder:this.config.noTextarea?this.editableArea.getAttribute("data-placeholder"):this.textarea.element.getAttribute("placeholder"),e&&b.simulatePlaceholder(this.parent,this,e),this.commands.exec("styleWithCSS",!1),this._initAutoLinking(),this._initObjectResizing(),this._initUndoManager(),this._initLineBreaking(),this.config.noTextarea||!this.textarea.element.hasAttribute("autofocus")&&document.querySelector(":focus")!=this.textarea.element||c.isIos()||setTimeout(function(){f.focus(!0)},100),c.clearsContentEditableCorrectly()||a.quirks.ensureProperClearing(this),this.initSync&&this.config.sync&&this.initSync(),this.config.noTextarea||this.textarea.hide(),this.parent.fire("beforeload").fire("load")},_initAutoLinking:function(){var d,e,f,g=this,h=c.canDisableAutoLinking(),i=c.doesAutoLinkingInContentEditable();h&&this.commands.exec("autoUrlDetect",!1),this.config.autoLink&&((!i||i&&h)&&(this.parent.on("newword:composer",function(){b.getTextContent(g.element).match(b.autoLink.URL_REG_EXP)&&g.selection.executeAndRestore(function(c,d){var e,f=g.element.querySelectorAll("."+g.config.uneditableContainerClassname),h=!1;for(e=f.length;e--;)a.dom.contains(f[e],d)&&(h=!0);h||b.autoLink(d.parentNode,[g.config.uneditableContainerClassname])})}),b.observe(this.element,"blur",function(){b.autoLink(g.element,[g.config.uneditableContainerClassname])})),d=this.sandbox.getDocument().getElementsByTagName("a"),e=b.autoLink.URL_REG_EXP,f=function(c){var d=a.lang.string(b.getTextContent(c)).trim();return"www."===d.substr(0,4)&&(d="http://"+d),d},b.observe(this.element,"keydown",function(a){if(d.length){var c,h=g.selection.getSelectedNode(a.target.ownerDocument),i=b.getParentElement(h,{nodeName:"A"},4);i&&(c=f(i),setTimeout(function(){var a=f(i);a!==c&&a.match(e)&&i.setAttribute("href",a)},0))}}))},_initObjectResizing:function(){if(this.commands.exec("enableObjectResizing",!0),c.supportsEvent("resizeend")){var d=["width","height"],e=d.length,f=this.element;b.observe(f,"resizeend",function(b){var c,g=b.target||b.srcElement,h=g.style,i=0;if("IMG"===g.nodeName){for(;e>i;i++)c=d[i],h[c]&&(g.setAttribute(c,parseInt(h[c],10)),h[c]="");a.quirks.redraw(f)}})}},_initUndoManager:function(){this.undoManager=new a.UndoManager(this.parent)},_initLineBreaking:function(){function d(a){var c=b.getParentElement(a,{nodeName:["P","DIV"]},2);c&&b.contains(e.element,c)&&e.selection.executeAndRestore(function(){e.config.useLineBreaks?b.replaceWithChildNodes(c):"P"!==c.nodeName&&b.renameElement(c,"p")})}var e=this,f=["LI","P","H1","H2","H3","H4","H5","H6"],g=["UL","OL","MENU"];this.config.useLineBreaks||b.observe(this.element,["focus","keydown"],function(){if(e.isEmpty()){var a=e.doc.createElement("P");e.element.innerHTML="",e.element.appendChild(a),c.displaysCaretInEmptyContentEditableCorrectly()?e.selection.selectNode(a,!0):(a.innerHTML="<br>",e.selection.setBefore(a.firstChild))}}),b.observe(this.element,"keydown",function(c){var h,i=c.keyCode;if(!c.shiftKey&&(i===a.ENTER_KEY||i===a.BACKSPACE_KEY))return h=b.getParentElement(e.selection.getSelectedNode(),{nodeName:f},4),h?(setTimeout(function(){var c,f=e.selection.getSelectedNode();if("LI"===h.nodeName){if(!f)return;c=b.getParentElement(f,{nodeName:g},2),c||d(f)}i===a.ENTER_KEY&&h.nodeName.match(/^H[1-6]$/)&&d(f)},0),void 0):(e.config.useLineBreaks&&i===a.ENTER_KEY&&!a.browser.insertsLineBreaksOnReturn()&&(c.preventDefault(),e.commands.exec("insertLineBreak")),void 0)})}})}(wysihtml5),function(a){var b=a.dom,c=document,d=window,e=c.createElement("div"),f=["background-color","color","cursor","font-family","font-size","font-style","font-variant","font-weight","line-height","letter-spacing","text-align","text-decoration","text-indent","text-rendering","word-break","word-wrap","word-spacing"],g=["background-color","border-collapse","border-bottom-color","border-bottom-style","border-bottom-width","border-left-color","border-left-style","border-left-width","border-right-color","border-right-style","border-right-width","border-top-color","border-top-style","border-top-width","clear","display","float","margin-bottom","margin-left","margin-right","margin-top","outline-color","outline-offset","outline-width","outline-style","padding-left","padding-right","padding-top","padding-bottom","position","top","left","right","bottom","z-index","vertical-align","text-align","-webkit-box-sizing","-moz-box-sizing","-ms-box-sizing","box-sizing","-webkit-box-shadow","-moz-box-shadow","-ms-box-shadow","box-shadow","-webkit-border-top-right-radius","-moz-border-radius-topright","border-top-right-radius","-webkit-border-bottom-right-radius","-moz-border-radius-bottomright","border-bottom-right-radius","-webkit-border-bottom-left-radius","-moz-border-radius-bottomleft","border-bottom-left-radius","-webkit-border-top-left-radius","-moz-border-radius-topleft","border-top-left-radius","width","height"],h=["html                 { height: 100%; }","body                 { height: 100%; padding: 1px 0 0 0; margin: -1px 0 0 0; }","body > p:first-child { margin-top: 0; }","._wysihtml5-temp     { display: none; }",a.browser.isGecko?"body.placeholder { color: graytext !important; }":"body.placeholder { color: #a9a9a9 !important; }","img:-moz-broken      { -moz-force-broken-image-icon: 1; height: 24px; width: 24px; }"],i=function(a){if(a.setActive)try{a.setActive()}catch(e){}else{var f=a.style,g=c.documentElement.scrollTop||c.body.scrollTop,h=c.documentElement.scrollLeft||c.body.scrollLeft,i={position:f.position,top:f.top,left:f.left,WebkitUserSelect:f.WebkitUserSelect};b.setStyles({position:"absolute",top:"-99999px",left:"-99999px",WebkitUserSelect:"none"}).on(a),a.focus(),b.setStyles(i).on(a),d.scrollTo&&d.scrollTo(h,g)}};a.views.Composer.prototype.style=function(){var d,j,k=this,l=c.querySelector(":focus"),m=this.textarea.element,n=m.hasAttribute("placeholder"),o=n&&m.getAttribute("placeholder"),p=m.style.display,q=m.disabled;return this.focusStylesHost=e.cloneNode(!1),this.blurStylesHost=e.cloneNode(!1),this.disabledStylesHost=e.cloneNode(!1),n&&m.removeAttribute("placeholder"),m===l&&m.blur(),m.disabled=!1,m.style.display=d="none",(m.getAttribute("rows")&&"auto"===b.getStyle("height").from(m)||m.getAttribute("cols")&&"auto"===b.getStyle("width").from(m))&&(m.style.display=d=p),b.copyStyles(g).from(m).to(this.editableArea).andTo(this.blurStylesHost),b.copyStyles(f).from(m).to(this.element).andTo(this.blurStylesHost),b.insertCSS(h).into(this.element.ownerDocument),m.disabled=!0,b.copyStyles(g).from(m).to(this.disabledStylesHost),b.copyStyles(f).from(m).to(this.disabledStylesHost),m.disabled=q,m.style.display=p,i(m),m.style.display=d,b.copyStyles(g).from(m).to(this.focusStylesHost),b.copyStyles(f).from(m).to(this.focusStylesHost),m.style.display=p,b.copyStyles(["display"]).from(m).to(this.editableArea),j=a.lang.array(g).without(["display"]),l?l.focus():m.blur(),n&&m.setAttribute("placeholder",o),this.parent.on("focus:composer",function(){b.copyStyles(j).from(k.focusStylesHost).to(k.editableArea),b.copyStyles(f).from(k.focusStylesHost).to(k.element)}),this.parent.on("blur:composer",function(){b.copyStyles(j).from(k.blurStylesHost).to(k.editableArea),b.copyStyles(f).from(k.blurStylesHost).to(k.element)}),this.parent.observe("disable:composer",function(){b.copyStyles(j).from(k.disabledStylesHost).to(k.editableArea),b.copyStyles(f).from(k.disabledStylesHost).to(k.element)}),this.parent.observe("enable:composer",function(){b.copyStyles(j).from(k.blurStylesHost).to(k.editableArea),b.copyStyles(f).from(k.blurStylesHost).to(k.element)}),this}}(wysihtml5),function(a){var b=a.dom,c=a.browser,d={66:"bold",73:"italic",85:"underline"},e=function(a,b,c){var d,e=a.getPreviousNode(b,!0),f=a.getSelectedNode();if(1!==f.nodeType&&f.parentNode!==c&&(f=f.parentNode),e)if(1==f.nodeType){if(d=f.firstChild,1==e.nodeType)for(;f.firstChild;)e.appendChild(f.firstChild);else for(;f.firstChild;)b.parentNode.insertBefore(f.firstChild,b);f.parentNode&&f.parentNode.removeChild(f),a.setBefore(d)}else 1==e.nodeType?e.appendChild(f):b.parentNode.insertBefore(f,b),a.setBefore(f)},f=function(a,b,c,d){var f,g,h;b.isCollapsed()?b.caretIsInTheBeginnig("LI")?(a.preventDefault(),d.commands.exec("outdentList")):b.caretIsInTheBeginnig()?a.preventDefault():(b.caretIsFirstInSelection()&&b.getPreviousNode()&&b.getPreviousNode().nodeName&&/^H\d$/gi.test(b.getPreviousNode().nodeName)&&(f=b.getPreviousNode(),a.preventDefault(),/^\s*$/.test(f.textContent||f.innerText)?f.parentNode.removeChild(f):(g=f.ownerDocument.createRange(),g.selectNodeContents(f),g.collapse(!1),b.setSelection(g))),h=b.caretIsBeforeUneditable(),h&&(a.preventDefault(),e(b,h,c))):b.containsUneditable()&&(a.preventDefault(),b.deleteContents())},g=function(a){if(a.selection.isCollapsed()){if(a.selection.caretIsInTheBeginnig("LI")&&a.commands.exec("indentList"))return}else a.selection.deleteContents();
a.commands.exec("insertHTML","&emsp;")};a.views.Composer.prototype.observe=function(){var e,h,i=this,j=this.getValue(!1,!1),k=this.sandbox.getIframe?this.sandbox.getIframe():this.sandbox.getContentEditable(),l=this.element,m=c.supportsEventsInIframeCorrectly()||this.sandbox.getContentEditable?l:this.sandbox.getWindow(),n=["drop","paste","beforepaste"],o=["drop","paste","mouseup","focus","keyup"];b.observe(k,"DOMNodeRemoved",function(){clearInterval(e),i.parent.fire("destroy:composer")}),c.supportsMutationEvents()||(e=setInterval(function(){b.contains(document.documentElement,k)||(clearInterval(e),i.parent.fire("destroy:composer"))},250)),b.observe(m,o,function(){setTimeout(function(){i.parent.fire("interaction").fire("interaction:composer")},0)}),this.config.handleTables&&(!this.tableClickHandle&&this.doc.execCommand&&a.browser.supportsCommand(this.doc,"enableObjectResizing")&&a.browser.supportsCommand(this.doc,"enableInlineTableEditing")&&(this.sandbox.getIframe?this.tableClickHandle=b.observe(k,["focus","mouseup","mouseover"],function(){i.doc.execCommand("enableObjectResizing",!1,"false"),i.doc.execCommand("enableInlineTableEditing",!1,"false"),i.tableClickHandle.stop()}):setTimeout(function(){i.doc.execCommand("enableObjectResizing",!1,"false"),i.doc.execCommand("enableInlineTableEditing",!1,"false")},0)),this.tableSelection=a.quirks.tableCellsSelection(l,i.parent)),b.observe(m,"focus",function(a){i.parent.fire("focus",a).fire("focus:composer",a),setTimeout(function(){j=i.getValue(!1,!1)},0)}),b.observe(m,"blur",function(a){if(j!==i.getValue(!1,!1)){var b=a;"function"==typeof Object.create&&(b=Object.create(a,{type:{value:"change"}})),i.parent.fire("change",b).fire("change:composer",b)}i.parent.fire("blur",a).fire("blur:composer",a)}),b.observe(l,"dragenter",function(){i.parent.fire("unset_placeholder")}),b.observe(l,n,function(a){i.parent.fire(a.type,a).fire(a.type+":composer",a)}),this.config.copyedFromMarking&&b.observe(l,"copy",function(a){a.clipboardData&&(a.clipboardData.setData("text/html",i.config.copyedFromMarking+i.selection.getHtml()),a.preventDefault()),i.parent.fire(a.type,a).fire(a.type+":composer",a)}),b.observe(l,"keyup",function(b){var c=b.keyCode;(c===a.SPACE_KEY||c===a.ENTER_KEY)&&i.parent.fire("newword:composer")}),this.parent.on("paste:composer",function(){setTimeout(function(){i.parent.fire("newword:composer")},0)}),c.canSelectImagesInContentEditable()||b.observe(l,"mousedown",function(b){var c=b.target,d=l.querySelectorAll("img"),e=l.querySelectorAll("."+i.config.uneditableContainerClassname+" img"),f=a.lang.array(d).without(e);"IMG"===c.nodeName&&a.lang.array(f).contains(c)&&i.selection.selectNode(c)}),c.canSelectImagesInContentEditable()||b.observe(l,"drop",function(){setTimeout(function(){i.selection.getSelection().removeAllRanges()},0)}),c.hasHistoryIssue()&&c.supportsSelectionModify()&&b.observe(l,"keydown",function(a){if(a.metaKey||a.ctrlKey){var b=a.keyCode,c=l.ownerDocument.defaultView,d=c.getSelection();(37===b||39===b)&&(37===b&&(d.modify("extend","left","lineboundary"),a.shiftKey||d.collapseToStart()),39===b&&(d.modify("extend","right","lineboundary"),a.shiftKey||d.collapseToEnd()),a.preventDefault())}}),b.observe(l,"keydown",function(a){var b=a.keyCode,c=d[b];(a.ctrlKey||a.metaKey)&&!a.altKey&&c&&(i.commands.exec(c),a.preventDefault()),8===b?f(a,i.selection,l,i):i.config.handleTabKey&&9===b&&(a.preventDefault(),g(i,l))}),b.observe(l,"keydown",function(b){var c,d=i.selection.getSelectedNode(!0),e=b.keyCode;!d||"IMG"!==d.nodeName||e!==a.BACKSPACE_KEY&&e!==a.DELETE_KEY||(c=d.parentNode,c.removeChild(d),"A"!==c.nodeName||c.firstChild||c.parentNode.removeChild(c),setTimeout(function(){a.quirks.redraw(l)},0),b.preventDefault())}),!this.config.contentEditableMode&&c.hasIframeFocusIssue()&&(b.observe(k,"focus",function(){setTimeout(function(){i.doc.querySelector(":focus")!==i.element&&i.focus()},0)}),b.observe(this.element,"blur",function(){setTimeout(function(){i.selection.getSelection().removeAllRanges()},0)})),h={IMG:"Image: ",A:"Link: "},b.observe(l,"mouseover",function(a){var b,c,d=a.target,e=d.nodeName;("A"===e||"IMG"===e)&&(c=d.hasAttribute("title"),c||(b=h[e]+(d.getAttribute("href")||d.getAttribute("src")),d.setAttribute("title",b)))})}}(wysihtml5),function(a){var b=400;a.views.Synchronizer=Base.extend({constructor:function(a,b,c){this.editor=a,this.textarea=b,this.composer=c,this._observe()},fromComposerToTextarea:function(b){this.textarea.setValue(a.lang.string(this.composer.getValue(!1,!1)).trim(),b)},fromTextareaToComposer:function(a){var b=this.textarea.getValue(!1,!1);b?this.composer.setValue(b,a):(this.composer.clear(),this.editor.fire("set_placeholder"))},sync:function(a){"textarea"===this.editor.currentView.name?this.fromTextareaToComposer(a):this.fromComposerToTextarea(a)},_observe:function(){var c,d=this,e=this.textarea.element.form,f=function(){c=setInterval(function(){d.fromComposerToTextarea()},b)},g=function(){clearInterval(c),c=null};f(),e&&(a.dom.observe(e,"submit",function(){d.sync(!0)}),a.dom.observe(e,"reset",function(){setTimeout(function(){d.fromTextareaToComposer()},0)})),this.editor.on("change_view",function(a){"composer"!==a||c?"textarea"===a&&(d.fromComposerToTextarea(!0),g()):(d.fromTextareaToComposer(!0),f())}),this.editor.on("destroy:composer",g)}})}(wysihtml5),wysihtml5.views.Textarea=wysihtml5.views.View.extend({name:"textarea",constructor:function(a,b,c){this.base(a,b,c),this._observe()},clear:function(){this.element.value=""},getValue:function(a){var b=this.isEmpty()?"":this.element.value;return a!==!1&&(b=this.parent.parse(b)),b},setValue:function(a,b){b&&(a=this.parent.parse(a)),this.element.value=a},cleanUp:function(){var a=this.parent.parse(this.element.value);this.element.value=a},hasPlaceholderSet:function(){var a=wysihtml5.browser.supportsPlaceholderAttributeOn(this.element),b=this.element.getAttribute("placeholder")||null,c=this.element.value,d=!c;return a&&d||c===b},isEmpty:function(){return!wysihtml5.lang.string(this.element.value).trim()||this.hasPlaceholderSet()},_observe:function(){var a=this.element,b=this.parent,c={focusin:"focus",focusout:"blur"},d=wysihtml5.browser.supportsEvent("focusin")?["focusin","focusout","change"]:["focus","blur","change"];b.on("beforeload",function(){wysihtml5.dom.observe(a,d,function(a){var d=c[a.type]||a.type;b.fire(d).fire(d+":textarea")}),wysihtml5.dom.observe(a,["paste","drop"],function(){setTimeout(function(){b.fire("paste").fire("paste:textarea")},0)})})}}),function(a){var b,c={name:b,style:!0,toolbar:b,showToolbarAfterInit:!0,autoLink:!0,handleTables:!0,handleTabKey:!0,parserRules:{tags:{br:{},span:{},div:{},p:{}},classes:{}},pasteParserRulesets:null,parser:a.dom.parse,composerClassName:"wysihtml5-editor",bodyClassName:"wysihtml5-supported",useLineBreaks:!0,stylesheets:[],placeholderText:b,supportTouchDevices:!0,cleanUp:!0,contentEditableMode:!1,uneditableContainerClassname:"wysihtml5-uneditable-container",copyedFromMarking:'<meta name="copied-from" content="wysihtml5">'};a.Editor=a.lang.Dispatcher.extend({constructor:function(b,d){if(this.editableElement="string"==typeof b?document.getElementById(b):b,this.config=a.lang.object({}).merge(c).merge(d).get(),this._isCompatible=a.browser.supported(),"textarea"!=this.editableElement.nodeName.toLowerCase()&&(this.config.contentEditableMode=!0,this.config.noTextarea=!0),this.config.noTextarea||(this.textarea=new a.views.Textarea(this,this.editableElement,this.config),this.currentView=this.textarea),!this._isCompatible||!this.config.supportTouchDevices&&a.browser.isTouchDevice()){var e=this;return setTimeout(function(){e.fire("beforeload").fire("load")},0),void 0}a.dom.addClass(document.body,this.config.bodyClassName),this.composer=new a.views.Composer(this,this.editableElement,this.config),this.currentView=this.composer,"function"==typeof this.config.parser&&this._initParser(),this.on("beforeload",this.handleBeforeLoad)},handleBeforeLoad:function(){this.config.noTextarea||(this.synchronizer=new a.views.Synchronizer(this,this.textarea,this.composer)),this.config.toolbar&&(this.toolbar=new a.toolbar.Toolbar(this,this.config.toolbar,this.config.showToolbarAfterInit))},isCompatible:function(){return this._isCompatible},clear:function(){return this.currentView.clear(),this},getValue:function(a,b){return this.currentView.getValue(a,b)},setValue:function(a,b){return this.fire("unset_placeholder"),a?(this.currentView.setValue(a,b),this):this.clear()},cleanUp:function(){this.currentView.cleanUp()},focus:function(a){return this.currentView.focus(a),this},disable:function(){return this.currentView.disable(),this},enable:function(){return this.currentView.enable(),this},isEmpty:function(){return this.currentView.isEmpty()},hasPlaceholderSet:function(){return this.currentView.hasPlaceholderSet()},parse:function(b,c){var d=this.config.contentEditableMode?document:this.composer?this.composer.sandbox.getDocument():null,e=this.config.parser(b,{rules:this.config.parserRules,cleanUp:this.config.cleanUp,context:d,uneditableClass:this.config.uneditableContainerClassname,clearInternals:c});return"object"==typeof b&&a.quirks.redraw(b),e},_initParser:function(){var b,c=this;a.browser.supportsModenPaste()?this.on("paste:composer",function(d){d.preventDefault(),b=a.dom.getPastedHtml(d),b&&c._cleanAndPaste(b)}):this.on("beforepaste:composer",function(b){b.preventDefault(),a.dom.getPastedHtmlWithDiv(c.composer,function(a){a&&c._cleanAndPaste(a)})})},_cleanAndPaste:function(b){var c=a.quirks.cleanPastedHTML(b,{referenceNode:this.composer.element,rules:this.config.pasteParserRulesets||[{set:this.config.parserRules}],uneditableClass:this.config.uneditableContainerClassname});this.composer.selection.deleteContents(),this.composer.selection.insertHTML(c)}})}(wysihtml5),function(a){var b=a.dom,c="wysihtml5-command-dialog-opened",d="input, select, textarea",e="[data-wysihtml5-dialog-field]",f="data-wysihtml5-dialog-field";a.toolbar.Dialog=a.lang.Dispatcher.extend({constructor:function(a,b){this.link=a,this.container=b},_observe:function(){var e,f,g,h,i,j;if(!this._observed){for(e=this,f=function(a){var b=e._serialize();b==e.elementToChange?e.fire("edit",b):e.fire("save",b),e.hide(),a.preventDefault(),a.stopPropagation()},b.observe(e.link,"click",function(){b.hasClass(e.link,c)&&setTimeout(function(){e.hide()},0)}),b.observe(this.container,"keydown",function(b){var c=b.keyCode;c===a.ENTER_KEY&&f(b),c===a.ESCAPE_KEY&&(e.fire("cancel"),e.hide())}),b.delegate(this.container,"[data-wysihtml5-dialog-action=save]","click",f),b.delegate(this.container,"[data-wysihtml5-dialog-action=cancel]","click",function(a){e.fire("cancel"),e.hide(),a.preventDefault(),a.stopPropagation()}),g=this.container.querySelectorAll(d),h=0,i=g.length,j=function(){clearInterval(e.interval)};i>h;h++)b.observe(g[h],"change",j);this._observed=!0}},_serialize:function(){for(var a=this.elementToChange||{},b=this.container.querySelectorAll(e),c=b.length,d=0;c>d;d++)a[b[d].getAttribute(f)]=b[d].value;return a},_interpolate:function(a){for(var b,c,d,g=document.querySelector(":focus"),h=this.container.querySelectorAll(e),i=h.length,j=0;i>j;j++)b=h[j],b!==g&&(a&&"hidden"===b.type||(c=b.getAttribute(f),d=this.elementToChange&&"boolean"!=typeof this.elementToChange?this.elementToChange.getAttribute(c)||"":b.defaultValue,b.value=d))},show:function(a){if(!b.hasClass(this.link,c)){var e=this,f=this.container.querySelector(d);if(this.elementToChange=a,this._observe(),this._interpolate(),a&&(this.interval=setInterval(function(){e._interpolate(!0)},500)),b.addClass(this.link,c),this.container.style.display="",this.fire("show"),f&&!a)try{f.focus()}catch(g){}}},hide:function(){clearInterval(this.interval),this.elementToChange=null,b.removeClass(this.link,c),this.container.style.display="none",this.fire("hide")}})}(wysihtml5),function(a){var b=a.dom,c={position:"relative"},d={left:0,margin:0,opacity:0,overflow:"hidden",padding:0,position:"absolute",top:0,zIndex:1},e={cursor:"inherit",fontSize:"50px",height:"50px",marginTop:"-25px",outline:0,padding:0,position:"absolute",right:"-4px",top:"50%"},f={"x-webkit-speech":"",speech:""};a.toolbar.Speech=function(g,h){var i,j,k,l=document.createElement("input");return a.browser.supportsSpeechApiOn(l)?(i=g.editor.textarea.element.getAttribute("lang"),i&&(f.lang=i),j=document.createElement("div"),a.lang.object(d).merge({width:h.offsetWidth+"px",height:h.offsetHeight+"px"}),b.insert(l).into(j),b.insert(j).into(h),b.setStyles(e).on(l),b.setAttributes(f).on(l),b.setStyles(d).on(j),b.setStyles(c).on(h),k="onwebkitspeechchange"in l?"webkitspeechchange":"speechchange",b.observe(l,k,function(){g.execCommand("insertText",l.value),l.value=""}),b.observe(l,"click",function(a){b.hasClass(h,"wysihtml5-command-disabled")&&a.preventDefault(),a.stopPropagation()}),void 0):(h.style.display="none",void 0)}}(wysihtml5),function(a){var b="wysihtml5-command-disabled",c="wysihtml5-commands-disabled",d="wysihtml5-command-active",e="wysihtml5-action-active",f=a.dom;a.toolbar.Toolbar=Base.extend({constructor:function(f,g,h){this.editor=f,this.container="string"==typeof g?document.getElementById(g):g,this.composer=f.composer,this._getLinks("command"),this._getLinks("action"),this._observe(),h&&this.show(),null!=f.config.classNameCommandDisabled&&(b=f.config.classNameCommandDisabled),null!=f.config.classNameCommandsDisabled&&(c=f.config.classNameCommandsDisabled),null!=f.config.classNameCommandActive&&(d=f.config.classNameCommandActive),null!=f.config.classNameActionActive&&(e=f.config.classNameActionActive);for(var i=this.container.querySelectorAll("[data-wysihtml5-command=insertSpeech]"),j=i.length,k=0;j>k;k++)new a.toolbar.Speech(this,i[k])},_getLinks:function(b){for(var c,d,e,f,g,h=this[b+"Links"]=a.lang.array(this.container.querySelectorAll("[data-wysihtml5-"+b+"]")).get(),i=h.length,j=0,k=this[b+"Mapping"]={};i>j;j++)c=h[j],e=c.getAttribute("data-wysihtml5-"+b),f=c.getAttribute("data-wysihtml5-"+b+"-value"),d=this.container.querySelector("[data-wysihtml5-"+b+"-group='"+e+"']"),g=this._getDialog(c,e),k[e+":"+f]={link:c,group:d,name:e,value:f,dialog:g,state:!1}},_getDialog:function(b,c){var d,e,f=this,g=this.container.querySelector("[data-wysihtml5-dialog='"+c+"']");return g&&(d=a.toolbar["Dialog_"+c]?new a.toolbar["Dialog_"+c](b,g):new a.toolbar.Dialog(b,g),d.on("show",function(){e=f.composer.selection.getBookmark(),f.editor.fire("show:dialog",{command:c,dialogContainer:g,commandLink:b})}),d.on("save",function(a){e&&f.composer.selection.setBookmark(e),f._execCommand(c,a),f.editor.fire("save:dialog",{command:c,dialogContainer:g,commandLink:b})}),d.on("cancel",function(){f.editor.focus(!1),f.editor.fire("cancel:dialog",{command:c,dialogContainer:g,commandLink:b})})),d},execCommand:function(a,b){if(!this.commandsDisabled){var c=this.commandMapping[a+":"+b];c&&c.dialog&&!c.state?c.dialog.show():this._execCommand(a,b)}},_execCommand:function(a,b){this.editor.focus(!1),this.composer.commands.exec(a,b),this._updateLinkStates()},execAction:function(a){var b=this.editor;"change_view"===a&&b.textarea&&(b.currentView===b.textarea?b.fire("change_view","composer"):b.fire("change_view","textarea")),"showSource"==a&&b.fire("showSource")},_observe:function(){for(var a=this,b=this.editor,d=this.container,e=this.commandLinks.concat(this.actionLinks),g=e.length,h=0;g>h;h++)"A"===e[h].nodeName?f.setAttributes({href:"javascript:;",unselectable:"on"}).on(e[h]):f.setAttributes({unselectable:"on"}).on(e[h]);f.delegate(d,"[data-wysihtml5-command], [data-wysihtml5-action]","mousedown",function(a){a.preventDefault()}),f.delegate(d,"[data-wysihtml5-command]","click",function(b){var c=this,d=c.getAttribute("data-wysihtml5-command"),e=c.getAttribute("data-wysihtml5-command-value");a.execCommand(d,e),b.preventDefault()}),f.delegate(d,"[data-wysihtml5-action]","click",function(b){var c=this.getAttribute("data-wysihtml5-action");a.execAction(c),b.preventDefault()}),b.on("interaction:composer",function(){a._updateLinkStates()}),b.on("focus:composer",function(){a.bookmark=null}),this.editor.config.handleTables&&(b.on("tableselect:composer",function(){a.container.querySelectorAll('[data-wysihtml5-hiddentools="table"]')[0].style.display=""}),b.on("tableunselect:composer",function(){a.container.querySelectorAll('[data-wysihtml5-hiddentools="table"]')[0].style.display="none"})),b.on("change_view",function(e){b.textarea&&setTimeout(function(){a.commandsDisabled="composer"!==e,a._updateLinkStates(),a.commandsDisabled?f.addClass(d,c):f.removeClass(d,c)},0)})},_updateLinkStates:function(){var c,g,h,i,j=this.commandMapping,k=this.actionMapping;for(c in j)i=j[c],this.commandsDisabled?(g=!1,f.removeClass(i.link,d),i.group&&f.removeClass(i.group,d),i.dialog&&i.dialog.hide()):(g=this.composer.commands.state(i.name,i.value),f.removeClass(i.link,b),i.group&&f.removeClass(i.group,b)),i.state!==g&&(i.state=g,g?(f.addClass(i.link,d),i.group&&f.addClass(i.group,d),i.dialog&&("object"==typeof g||a.lang.object(g).isArray()?(!i.dialog.multiselect&&a.lang.object(g).isArray()&&(g=1===g.length?g[0]:!0,i.state=g),i.dialog.show(g)):i.dialog.hide())):(f.removeClass(i.link,d),i.group&&f.removeClass(i.group,d),i.dialog&&i.dialog.hide()));for(c in k)h=k[c],"change_view"===h.name&&(h.state=this.editor.currentView===this.editor.textarea,h.state?f.addClass(h.link,e):f.removeClass(h.link,e))},show:function(){this.container.style.display=""},hide:function(){this.container.style.display="none"}})}(wysihtml5),function(a){a.toolbar.Dialog_createTable=a.toolbar.Dialog.extend({show:function(a){this.base(a)}})}(wysihtml5),function(a){var b=(a.dom,"[data-wysihtml5-dialog-field]"),c="data-wysihtml5-dialog-field";a.toolbar.Dialog_foreColorStyle=a.toolbar.Dialog.extend({multiselect:!0,_serialize:function(){for(var a={},d=this.container.querySelectorAll(b),e=d.length,f=0;e>f;f++)a[d[f].getAttribute(c)]=d[f].value;return a},_interpolate:function(d){for(var e,f=document.querySelector(":focus"),g=this.container.querySelectorAll(b),h=g.length,i=0,j=this.elementToChange?a.lang.object(this.elementToChange).isArray()?this.elementToChange[0]:this.elementToChange:null,k=j?j.getAttribute("style"):null,l=k?a.quirks.styleParser.parseColor(k,"color"):null;h>i;i++)e=g[i],e!==f&&(d&&"hidden"===e.type||"color"===e.getAttribute(c)&&(e.value=l?l[3]&&1!=l[3]?"rgba("+l[0]+","+l[1]+","+l[2]+","+l[3]+");":"rgb("+l[0]+","+l[1]+","+l[2]+");":"rgb(0,0,0);"))}})}(wysihtml5),function(a){a.dom;a.toolbar.Dialog_fontSizeStyle=a.toolbar.Dialog.extend({multiselect:!0,_serialize:function(){return{size:this.container.querySelector('[data-wysihtml5-dialog-field="size"]').value}},_interpolate:function(){var b=document.querySelector(":focus"),c=this.container.querySelector("[data-wysihtml5-dialog-field='size']"),d=this.elementToChange?a.lang.object(this.elementToChange).isArray()?this.elementToChange[0]:this.elementToChange:null,e=d?d.getAttribute("style"):null,f=e?a.quirks.styleParser.parseFontSize(e):null;c&&c!==b&&f&&!/^\s*$/.test(f)&&(c.value=f)}})}(wysihtml5),Handlebars=function(){var a=function(){"use strict";function a(a){this.string=a}var b;return a.prototype.toString=function(){return""+this.string},b=a}(),b=function(a){"use strict";function b(a){return k[a]||"&amp;"}function c(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])}function d(a){return a instanceof j?""+a:a||0===a?(a=""+a,m.test(a)?a.replace(l,b):a):""}function e(a){return a||0===a?h(a)&&0===a.length?!0:!1:!0}var f,g,h,i={},j=a,k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},l=/[&<>"'`]/g,m=/[&<>"'`]/;return i.extend=c,f=Object.prototype.toString,i.toString=f,g=function(a){return"function"==typeof a},g(/x/)&&(g=function(a){return"function"==typeof a&&"[object Function]"===f.call(a)}),i.isFunction=g,h=Array.isArray||function(a){return a&&"object"==typeof a?"[object Array]"===f.call(a):!1},i.isArray=h,i.escapeExpression=d,i.isEmpty=e,i}(a),c=function(){"use strict";function a(a,b){var d,e,f;for(b&&b.firstLine&&(d=b.firstLine,a+=" - "+d+":"+b.firstColumn),e=Error.prototype.constructor.call(this,a),f=0;f<c.length;f++)this[c[f]]=e[c[f]];d&&(this.lineNumber=d,this.column=b.firstColumn)}var b,c=["description","fileName","lineNumber","message","name","number","stack"];return a.prototype=Error(),b=a}(),d=function(a,b){"use strict";function c(a,b){this.helpers=a||{},this.partials=b||{},d(this)}function d(a){a.registerHelper("helperMissing",function(a){if(2===arguments.length)return void 0;throw new p("Missing helper: '"+a+"'")}),a.registerHelper("blockHelperMissing",function(b,c){var d=c.inverse||function(){},e=c.fn;return i(b)&&(b=b.call(this)),b===!0?e(this):b===!1||null==b?d(this):h(b)?b.length>0?a.helpers.each(b,c):d(this):e(b)}),a.registerHelper("each",function(a,b){var c,d,e,f=b.fn,g=b.inverse,j=0,k="";if(i(a)&&(a=a.call(this)),b.data&&(c=m(b.data)),a&&"object"==typeof a)if(h(a))for(d=a.length;d>j;j++)c&&(c.index=j,c.first=0===j,c.last=j===a.length-1),k+=f(a[j],{data:c});else for(e in a)a.hasOwnProperty(e)&&(c&&(c.key=e,c.index=j,c.first=0===j),k+=f(a[e],{data:c}),j++);return 0===j&&(k=g(this)),k}),a.registerHelper("if",function(a,b){return i(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||o.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})}),a.registerHelper("with",function(a,b){return i(a)&&(a=a.call(this)),o.isEmpty(a)?void 0:b.fn(a)}),a.registerHelper("log",function(b,c){var d=c.data&&null!=c.data.level?parseInt(c.data.level,10):1;a.log(d,b)})}function e(a,b){l.log(a,b)}var f,g,h,i,j,k,l,m,n={},o=a,p=b,q="1.3.0";return n.VERSION=q,f=4,n.COMPILER_REVISION=f,g={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"},n.REVISION_CHANGES=g,h=o.isArray,i=o.isFunction,j=o.toString,k="[object Object]",n.HandlebarsEnvironment=c,c.prototype={constructor:c,logger:l,log:e,registerHelper:function(a,b,c){if(j.call(a)===k){if(c||b)throw new p("Arg not supported with multiple helpers");o.extend(this.helpers,a)}else c&&(b.not=c),this.helpers[a]=b},registerPartial:function(a,b){j.call(a)===k?o.extend(this.partials,a):this.partials[a]=b}},l={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(a,b){if(l.level<=a){var c=l.methodMap[a];"undefined"!=typeof console&&console[c]&&console[c].call(console,b)}}},n.logger=l,n.log=e,m=function(a){var b={};return o.extend(b,a),b},n.createFrame=m,n}(b,c),e=function(a,b,c){"use strict";function d(a){var b,c,d=a&&a[0]||1,e=m;if(d!==e){if(e>d)throw b=n[e],c=n[d],new l("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+b+") or downgrade your runtime to an older version ("+c+").");throw new l("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){if(!b)throw new l("No environment passed to template");var c=function(a,c,d,e,f,g){var h,i=b.VM.invokePartial.apply(this,arguments);if(null!=i)return i;if(b.compile)return h={helpers:e,partials:f,data:g},f[c]=b.compile(a,{data:void 0!==g},b),f[c](d,h);throw new l("The partial "+c+" could not be compiled when running in runtime-only mode")},d={escapeExpression:k.escapeExpression,invokePartial:c,programs:[],program:function(a,b,c){var d=this.programs[a];return c?d=g(a,b,c):d||(d=this.programs[a]=g(a,b)),d},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c={},k.extend(c,b),k.extend(c,a)),c},programWithDepth:b.VM.programWithDepth,noop:b.VM.noop,compilerInfo:null};return function(c,e){var f,g,h,i;return e=e||{},h=e.partial?e:b,e.partial||(f=e.helpers,g=e.partials),i=a.call(d,h,c,f,g,e.data),e.partial||b.VM.checkRevision(d.compilerInfo),i}}function f(a,b,c){var d=Array.prototype.slice.call(arguments,3),e=function(a,e){return e=e||{},b.apply(this,[a,e.data||c].concat(d))};return e.program=a,e.depth=d.length,e}function g(a,b,c){var d=function(a,d){return d=d||{},b(a,d.data||c)};return d.program=a,d.depth=0,d}function h(a,b,c,d,e,f){var g={partial:!0,helpers:d,partials:e,data:f};if(void 0===a)throw new l("The partial "+b+" could not be found");return a instanceof Function?a(c,g):void 0}function i(){return""}var j={},k=a,l=b,m=c.COMPILER_REVISION,n=c.REVISION_CHANGES;return j.checkRevision=d,j.template=e,j.programWithDepth=f,j.program=g,j.invokePartial=h,j.noop=i,j}(b,c,d),f=function(a,b,c,d,e){"use strict";var f,g=a,h=b,i=c,j=d,k=e,l=function(){var a=new g.HandlebarsEnvironment;return j.extend(a,g),a.SafeString=h,a.Exception=i,a.Utils=j,a.VM=k,a.template=function(b){return k.template(b,a)},a},m=l();return m.create=l,f=m}(d,a,c,b,e);return f}(),this.wysihtml5=this.wysihtml5||{},this.wysihtml5.tpl=this.wysihtml5.tpl||{},this.wysihtml5.tpl.blockquote=Handlebars.template(function(a,b,c,d,e){function f(a){var b,c="";return c+="btn-"+l((b=a&&a.options,b=null==b||b===!1?b:b.toolbar,b=null==b||b===!1?b:b.size,typeof b===k?b.apply(a):b)),c}function g(){return' \n      <span class="fa fa-quote-left"></span>\n    '}function h(){return'\n      <span class="glyphicon glyphicon-quote"></span>\n    '}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var i,j="",k="function",l=this.escapeExpression,m=this;return j+='<li>\n  <a class="btn ',i=c["if"].call(b,(i=b&&b.options,i=null==i||i===!1?i:i.toolbar,null==i||i===!1?i:i.size),{hash:{},inverse:m.noop,fn:m.program(1,f,e),data:e}),(i||0===i)&&(j+=i),j+=' btn-default" data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="blockquote" data-wysihtml5-display-format-name="false" tabindex="-1">\n    ',i=c["if"].call(b,(i=b&&b.options,i=null==i||i===!1?i:i.toolbar,null==i||i===!1?i:i.fa),{hash:{},inverse:m.program(5,h,e),fn:m.program(3,g,e),data:e}),(i||0===i)&&(j+=i),j+="\n  </a>\n</li>\n",j}),this.wysihtml5.tpl.color=Handlebars.template(function(a,b,c,d,e){function f(a){var b,c="";return c+="btn-"+j((b=a&&a.options,b=null==b||b===!1?b:b.toolbar,b=null==b||b===!1?b:b.size,typeof b===i?b.apply(a):b)),c}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h="",i="function",j=this.escapeExpression,k=this;return h+='<li class="dropdown">\n  <a class="btn btn-default dropdown-toggle ',g=c["if"].call(b,(g=b&&b.options,g=null==g||g===!1?g:g.toolbar,null==g||g===!1?g:g.size),{hash:{},inverse:k.noop,fn:k.program(1,f,e),data:e}),(g||0===g)&&(h+=g),h+='" data-toggle="dropdown" tabindex="-1">\n    <span class="current-color">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.black,typeof g===i?g.apply(b):g))+'</span>\n    <b class="caret"></b>\n  </a>\n  <ul class="dropdown-menu">\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="black"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="black">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.black,typeof g===i?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="silver"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="silver">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.silver,typeof g===i?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="gray"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="gray">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.gray,typeof g===i?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="maroon"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="maroon">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.maroon,typeof g===i?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="red"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="red">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.red,typeof g===i?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="purple"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="purple">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.purple,typeof g===i?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="green"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="green">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.green,typeof g===i?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="olive"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="olive">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.olive,typeof g===i?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="navy"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="navy">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.navy,typeof g===i?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="blue"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="blue">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.blue,typeof g===i?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="orange"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="orange">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.orange,typeof g===i?g.apply(b):g))+"</a></li>\n  </ul>\n</li>\n",h}),this.wysihtml5.tpl.emphasis=Handlebars.template(function(a,b,c,d,e){function f(a){var b,c="";return c+="btn-"+k((b=a&&a.options,b=null==b||b===!1?b:b.toolbar,b=null==b||b===!1?b:b.size,typeof b===j?b.apply(a):b)),c}function g(a,b){var d,e="";return e+='\n    <a class="btn ',d=c["if"].call(a,(d=a&&a.options,d=null==d||d===!1?d:d.toolbar,null==d||d===!1?d:d.size),{hash:{},inverse:l.noop,fn:l.program(1,f,b),data:b}),(d||0===d)&&(e+=d),e+=' btn-default" data-wysihtml5-command="small" title="CTRL+S" tabindex="-1">'+k((d=a&&a.locale,d=null==d||d===!1?d:d.emphasis,d=null==d||d===!1?d:d.small,typeof d===j?d.apply(a):d))+"</a>\n    ",e}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var h,i="",j="function",k=this.escapeExpression,l=this;return i+='<li>\n  <div class="btn-group">\n    <a class="btn ',h=c["if"].call(b,(h=b&&b.options,h=null==h||h===!1?h:h.toolbar,null==h||h===!1?h:h.size),{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+=' btn-default" data-wysihtml5-command="bold" title="CTRL+B" tabindex="-1">'+k((h=b&&b.locale,h=null==h||h===!1?h:h.emphasis,h=null==h||h===!1?h:h.bold,typeof h===j?h.apply(b):h))+'</a>\n    <a class="btn ',h=c["if"].call(b,(h=b&&b.options,h=null==h||h===!1?h:h.toolbar,null==h||h===!1?h:h.size),{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+=' btn-default" data-wysihtml5-command="italic" title="CTRL+I" tabindex="-1">'+k((h=b&&b.locale,h=null==h||h===!1?h:h.emphasis,h=null==h||h===!1?h:h.italic,typeof h===j?h.apply(b):h))+'</a>\n    <a class="btn ',h=c["if"].call(b,(h=b&&b.options,h=null==h||h===!1?h:h.toolbar,null==h||h===!1?h:h.size),{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+=' btn-default" data-wysihtml5-command="underline" title="CTRL+U" tabindex="-1">'+k((h=b&&b.locale,h=null==h||h===!1?h:h.emphasis,h=null==h||h===!1?h:h.underline,typeof h===j?h.apply(b):h))+"</a>\n    ",h=c["if"].call(b,(h=b&&b.options,h=null==h||h===!1?h:h.toolbar,h=null==h||h===!1?h:h.emphasis,null==h||h===!1?h:h.small),{hash:{},inverse:l.noop,fn:l.program(3,g,e),data:e}),(h||0===h)&&(i+=h),i+="\n  </div>\n</li>\n",i
}),this.wysihtml5.tpl["font-styles"]=Handlebars.template(function(a,b,c,d,e){function f(a){var b,c="";return c+="btn-"+l((b=a&&a.options,b=null==b||b===!1?b:b.toolbar,b=null==b||b===!1?b:b.size,typeof b===k?b.apply(a):b)),c}function g(){return'\n      <span class="fa fa-font"></span>\n    '}function h(){return'\n      <span class="glyphicon glyphicon-font"></span>\n    '}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var i,j="",k="function",l=this.escapeExpression,m=this;return j+='<li class="dropdown">\n  <a class="btn btn-default dropdown-toggle ',i=c["if"].call(b,(i=b&&b.options,i=null==i||i===!1?i:i.toolbar,null==i||i===!1?i:i.size),{hash:{},inverse:m.noop,fn:m.program(1,f,e),data:e}),(i||0===i)&&(j+=i),j+='" data-toggle="dropdown">\n    ',i=c["if"].call(b,(i=b&&b.options,i=null==i||i===!1?i:i.toolbar,null==i||i===!1?i:i.fa),{hash:{},inverse:m.program(5,h,e),fn:m.program(3,g,e),data:e}),(i||0===i)&&(j+=i),j+='\n    <span class="current-font">'+l((i=b&&b.locale,i=null==i||i===!1?i:i.font_styles,i=null==i||i===!1?i:i.normal,typeof i===k?i.apply(b):i))+'</span>\n    <b class="caret"></b>\n  </a>\n  <ul class="dropdown-menu">\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="p" tabindex="-1">'+l((i=b&&b.locale,i=null==i||i===!1?i:i.font_styles,i=null==i||i===!1?i:i.normal,typeof i===k?i.apply(b):i))+'</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h1" tabindex="-1">'+l((i=b&&b.locale,i=null==i||i===!1?i:i.font_styles,i=null==i||i===!1?i:i.h1,typeof i===k?i.apply(b):i))+'</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h2" tabindex="-1">'+l((i=b&&b.locale,i=null==i||i===!1?i:i.font_styles,i=null==i||i===!1?i:i.h2,typeof i===k?i.apply(b):i))+'</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h3" tabindex="-1">'+l((i=b&&b.locale,i=null==i||i===!1?i:i.font_styles,i=null==i||i===!1?i:i.h3,typeof i===k?i.apply(b):i))+'</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h4" tabindex="-1">'+l((i=b&&b.locale,i=null==i||i===!1?i:i.font_styles,i=null==i||i===!1?i:i.h4,typeof i===k?i.apply(b):i))+'</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h5" tabindex="-1">'+l((i=b&&b.locale,i=null==i||i===!1?i:i.font_styles,i=null==i||i===!1?i:i.h5,typeof i===k?i.apply(b):i))+'</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h6" tabindex="-1">'+l((i=b&&b.locale,i=null==i||i===!1?i:i.font_styles,i=null==i||i===!1?i:i.h6,typeof i===k?i.apply(b):i))+"</a></li>\n  </ul>\n</li>\n",j}),this.wysihtml5.tpl.html=Handlebars.template(function(a,b,c,d,e){function f(a){var b,c="";return c+="btn-"+l((b=a&&a.options,b=null==b||b===!1?b:b.toolbar,b=null==b||b===!1?b:b.size,typeof b===k?b.apply(a):b)),c}function g(){return'\n        <span class="fa fa-pencil"></span>\n      '}function h(){return'\n        <span class="glyphicon glyphicon-pencil"></span>\n      '}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var i,j="",k="function",l=this.escapeExpression,m=this;return j+='<li>\n  <div class="btn-group">\n    <a class="btn ',i=c["if"].call(b,(i=b&&b.options,i=null==i||i===!1?i:i.toolbar,null==i||i===!1?i:i.size),{hash:{},inverse:m.noop,fn:m.program(1,f,e),data:e}),(i||0===i)&&(j+=i),j+=' btn-default" data-wysihtml5-action="change_view" title="'+l((i=b&&b.locale,i=null==i||i===!1?i:i.html,i=null==i||i===!1?i:i.edit,typeof i===k?i.apply(b):i))+'" tabindex="-1">\n      ',i=c["if"].call(b,(i=b&&b.options,i=null==i||i===!1?i:i.toolbar,null==i||i===!1?i:i.fa),{hash:{},inverse:m.program(5,h,e),fn:m.program(3,g,e),data:e}),(i||0===i)&&(j+=i),j+="\n    </a>\n  </div>\n</li>\n",j}),this.wysihtml5.tpl.image=Handlebars.template(function(a,b,c,d,e){function f(){return"modal-sm"}function g(a){var b,c="";return c+="btn-"+m((b=a&&a.options,b=null==b||b===!1?b:b.toolbar,b=null==b||b===!1?b:b.size,typeof b===l?b.apply(a):b)),c}function h(){return'\n      <span class="fa fa-file-image-o"></span>\n    '}function i(){return'\n      <span class="glyphicon glyphicon-picture"></span>\n    '}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var j,k="",l="function",m=this.escapeExpression,n=this;return k+='<li>\n  <div class="bootstrap-wysihtml5-insert-image-modal modal fade" data-wysihtml5-dialog="insertImage">\n    <div class="modal-dialog ',j=c["if"].call(b,(j=b&&b.options,j=null==j||j===!1?j:j.toolbar,null==j||j===!1?j:j.smallmodals),{hash:{},inverse:n.noop,fn:n.program(1,f,e),data:e}),(j||0===j)&&(k+=j),k+='">\n      <div class="modal-content">\n        <div class="modal-header">\n          <a class="close" data-dismiss="modal">&times;</a>\n          <h3>'+m((j=b&&b.locale,j=null==j||j===!1?j:j.image,j=null==j||j===!1?j:j.insert,typeof j===l?j.apply(b):j))+'</h3>\n        </div>\n        <div class="modal-body">\n          <div class="form-group">\n            <input value="http://" class="bootstrap-wysihtml5-insert-image-url form-control" data-wysihtml5-dialog-field="src">\n          </div> \n        </div>\n        <div class="modal-footer">\n          <a class="btn btn-default" data-dismiss="modal" data-wysihtml5-dialog-action="cancel" href="#">'+m((j=b&&b.locale,j=null==j||j===!1?j:j.image,j=null==j||j===!1?j:j.cancel,typeof j===l?j.apply(b):j))+'</a>\n          <a class="btn btn-primary" data-dismiss="modal"  data-wysihtml5-dialog-action="save" href="#">'+m((j=b&&b.locale,j=null==j||j===!1?j:j.image,j=null==j||j===!1?j:j.insert,typeof j===l?j.apply(b):j))+'</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class="btn ',j=c["if"].call(b,(j=b&&b.options,j=null==j||j===!1?j:j.toolbar,null==j||j===!1?j:j.size),{hash:{},inverse:n.noop,fn:n.program(3,g,e),data:e}),(j||0===j)&&(k+=j),k+=' btn-default" data-wysihtml5-command="insertImage" title="'+m((j=b&&b.locale,j=null==j||j===!1?j:j.image,j=null==j||j===!1?j:j.insert,typeof j===l?j.apply(b):j))+'" tabindex="-1">\n    ',j=c["if"].call(b,(j=b&&b.options,j=null==j||j===!1?j:j.toolbar,null==j||j===!1?j:j.fa),{hash:{},inverse:n.program(7,i,e),fn:n.program(5,h,e),data:e}),(j||0===j)&&(k+=j),k+="\n  </a>\n</li>\n",k}),this.wysihtml5.tpl.link=Handlebars.template(function(a,b,c,d,e){function f(){return"modal-sm"}function g(a){var b,c="";return c+="btn-"+m((b=a&&a.options,b=null==b||b===!1?b:b.toolbar,b=null==b||b===!1?b:b.size,typeof b===l?b.apply(a):b)),c}function h(){return'\n      <span class="fa fa-share-square-o"></span>\n    '}function i(){return'\n      <span class="glyphicon glyphicon-share"></span>\n    '}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var j,k="",l="function",m=this.escapeExpression,n=this;return k+='<li>\n  <div class="bootstrap-wysihtml5-insert-link-modal modal fade" data-wysihtml5-dialog="createLink">\n    <div class="modal-dialog ',j=c["if"].call(b,(j=b&&b.options,j=null==j||j===!1?j:j.toolbar,null==j||j===!1?j:j.smallmodals),{hash:{},inverse:n.noop,fn:n.program(1,f,e),data:e}),(j||0===j)&&(k+=j),k+='">\n      <div class="modal-content">\n        <div class="modal-header">\n          <a class="close" data-dismiss="modal">&times;</a>\n          <h3>'+m((j=b&&b.locale,j=null==j||j===!1?j:j.link,j=null==j||j===!1?j:j.insert,typeof j===l?j.apply(b):j))+'</h3>\n        </div>\n        <div class="modal-body">\n          <div class="form-group">\n            <input value="http://" class="bootstrap-wysihtml5-insert-link-url form-control" data-wysihtml5-dialog-field="href">\n          </div> \n          <div class="checkbox">\n            <label> \n              <input type="checkbox" class="bootstrap-wysihtml5-insert-link-target" checked>'+m((j=b&&b.locale,j=null==j||j===!1?j:j.link,j=null==j||j===!1?j:j.target,typeof j===l?j.apply(b):j))+'\n            </label>\n          </div>\n        </div>\n        <div class="modal-footer">\n          <a class="btn btn-default" data-dismiss="modal" data-wysihtml5-dialog-action="cancel" href="#">'+m((j=b&&b.locale,j=null==j||j===!1?j:j.link,j=null==j||j===!1?j:j.cancel,typeof j===l?j.apply(b):j))+'</a>\n          <a href="#" class="btn btn-primary" data-dismiss="modal" data-wysihtml5-dialog-action="save">'+m((j=b&&b.locale,j=null==j||j===!1?j:j.link,j=null==j||j===!1?j:j.insert,typeof j===l?j.apply(b):j))+'</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class="btn ',j=c["if"].call(b,(j=b&&b.options,j=null==j||j===!1?j:j.toolbar,null==j||j===!1?j:j.size),{hash:{},inverse:n.noop,fn:n.program(3,g,e),data:e}),(j||0===j)&&(k+=j),k+=' btn-default" data-wysihtml5-command="createLink" title="'+m((j=b&&b.locale,j=null==j||j===!1?j:j.link,j=null==j||j===!1?j:j.insert,typeof j===l?j.apply(b):j))+'" tabindex="-1">\n    ',j=c["if"].call(b,(j=b&&b.options,j=null==j||j===!1?j:j.toolbar,null==j||j===!1?j:j.fa),{hash:{},inverse:n.program(7,i,e),fn:n.program(5,h,e),data:e}),(j||0===j)&&(k+=j),k+="\n  </a>\n</li>\n",k}),this.wysihtml5.tpl.lists=Handlebars.template(function(a,b,c,d,e){function f(a){var b,c="";return c+="btn-"+r((b=a&&a.options,b=null==b||b===!1?b:b.toolbar,b=null==b||b===!1?b:b.size,typeof b===q?b.apply(a):b)),c}function g(){return'\n      <span class="fa fa-list-ul"></span>\n    '}function h(){return'\n      <span class="glyphicon glyphicon-list"></span>\n    '}function i(){return'\n      <span class="fa fa-list-ol"></span>\n    '}function j(){return'\n      <span class="glyphicon glyphicon-th-list"></span>\n    '}function k(){return'\n      <span class="fa fa-outdent"></span>\n    '}function l(){return'\n      <span class="glyphicon glyphicon-indent-right"></span>\n    '}function m(){return'\n      <span class="fa fa-indent"></span>\n    '}function n(){return'\n      <span class="glyphicon glyphicon-indent-left"></span>\n    '}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var o,p="",q="function",r=this.escapeExpression,s=this;return p+='<li>\n  <div class="btn-group">\n    <a class="btn ',o=c["if"].call(b,(o=b&&b.options,o=null==o||o===!1?o:o.toolbar,null==o||o===!1?o:o.size),{hash:{},inverse:s.noop,fn:s.program(1,f,e),data:e}),(o||0===o)&&(p+=o),p+=' btn-default" data-wysihtml5-command="insertUnorderedList" title="'+r((o=b&&b.locale,o=null==o||o===!1?o:o.lists,o=null==o||o===!1?o:o.unordered,typeof o===q?o.apply(b):o))+'" tabindex="-1">\n    ',o=c["if"].call(b,(o=b&&b.options,o=null==o||o===!1?o:o.toolbar,null==o||o===!1?o:o.fa),{hash:{},inverse:s.program(5,h,e),fn:s.program(3,g,e),data:e}),(o||0===o)&&(p+=o),p+='\n    </a>\n    <a class="btn ',o=c["if"].call(b,(o=b&&b.options,o=null==o||o===!1?o:o.toolbar,null==o||o===!1?o:o.size),{hash:{},inverse:s.noop,fn:s.program(1,f,e),data:e}),(o||0===o)&&(p+=o),p+=' btn-default" data-wysihtml5-command="insertOrderedList" title="'+r((o=b&&b.locale,o=null==o||o===!1?o:o.lists,o=null==o||o===!1?o:o.ordered,typeof o===q?o.apply(b):o))+'" tabindex="-1">\n    ',o=c["if"].call(b,(o=b&&b.options,o=null==o||o===!1?o:o.toolbar,null==o||o===!1?o:o.fa),{hash:{},inverse:s.program(9,j,e),fn:s.program(7,i,e),data:e}),(o||0===o)&&(p+=o),p+='\n    </a>\n    <a class="btn ',o=c["if"].call(b,(o=b&&b.options,o=null==o||o===!1?o:o.toolbar,null==o||o===!1?o:o.size),{hash:{},inverse:s.noop,fn:s.program(1,f,e),data:e}),(o||0===o)&&(p+=o),p+=' btn-default" data-wysihtml5-command="Outdent" title="'+r((o=b&&b.locale,o=null==o||o===!1?o:o.lists,o=null==o||o===!1?o:o.outdent,typeof o===q?o.apply(b):o))+'" tabindex="-1">\n    ',o=c["if"].call(b,(o=b&&b.options,o=null==o||o===!1?o:o.toolbar,null==o||o===!1?o:o.fa),{hash:{},inverse:s.program(13,l,e),fn:s.program(11,k,e),data:e}),(o||0===o)&&(p+=o),p+='\n    </a>\n    <a class="btn ',o=c["if"].call(b,(o=b&&b.options,o=null==o||o===!1?o:o.toolbar,null==o||o===!1?o:o.size),{hash:{},inverse:s.noop,fn:s.program(1,f,e),data:e}),(o||0===o)&&(p+=o),p+=' btn-default" data-wysihtml5-command="Indent" title="'+r((o=b&&b.locale,o=null==o||o===!1?o:o.lists,o=null==o||o===!1?o:o.indent,typeof o===q?o.apply(b):o))+'" tabindex="-1">\n    ',o=c["if"].call(b,(o=b&&b.options,o=null==o||o===!1?o:o.toolbar,null==o||o===!1?o:o.fa),{hash:{},inverse:s.program(17,n,e),fn:s.program(15,m,e),data:e}),(o||0===o)&&(p+=o),p+="\n    </a>\n  </div>\n</li>\n",p}),function(a){"use strict";"function"==typeof define&&define.amd?define("bootstrap.wysihtml5",["jquery","wysihtml5","bootstrap","bootstrap.wysihtml5.templates","bootstrap.wysihtml5.commands"],a):a(jQuery,wysihtml5)}(function(a,b){"use strict";var c=function(a,b){var c,d,e,f=function(a,c,d){return b.tpl[a]?b.tpl[a]({locale:c,options:d}):void 0},g=function(c,e){var f,g;this.el=c,f=a.extend(!0,{},d,e);for(g in f.customTemplates)f.customTemplates.hasOwnProperty(g)&&(b.tpl[g]=f.customTemplates[g]);this.toolbar=this.createToolbar(c,f),this.editor=this.createEditor(f)};g.prototype={constructor:g,createEditor:function(b){b=b||{},b=a.extend(!0,{},b),b.toolbar=this.toolbar[0],this.initializeEditor(this.el[0],b)},initializeEditor:function(a,c){var d,e=new b.Editor(this.el[0],c);if(e.on("beforeload",this.syncBootstrapDialogEvents),e.on("beforeload",this.loadParserRules),e.composer.editableArea.contentDocument?this.addMoreShortcuts(e,e.composer.editableArea.contentDocument.body||e.composer.editableArea.contentDocument,c.shortcuts):this.addMoreShortcuts(e,e.composer.editableArea,c.shortcuts),c&&c.events)for(d in c.events)c.events.hasOwnProperty(d)&&e.on(d,c.events[d]);return e},loadParserRules:function(){"string"===a.type(this.config.parserRules)&&a.ajax({dataType:"json",url:this.config.parserRules,context:this,error:function(a,b,c){void 0},success:function(a){this.config.parserRules=a,void 0}}),this.config.pasteParserRulesets&&"string"===a.type(this.config.pasteParserRulesets)&&a.ajax({dataType:"json",url:this.config.pasteParserRulesets,context:this,error:function(a,b,c){void 0},success:function(a){this.config.pasteParserRulesets=a}})},syncBootstrapDialogEvents:function(){var b=this;a.map(this.toolbar.commandMapping,function(a){return[a]}).filter(function(a){return a.dialog}).map(function(a){return a.dialog}).forEach(function(c){c.on("show",function(){a(this.container).modal("show")}),c.on("hide",function(){a(this.container).modal("hide"),setTimeout(b.composer.focus,0)}),a(c.container).on("shown.bs.modal",function(){a(this).find("input, select, textarea").first().focus()})}),this.on("change_view",function(){a(this.toolbar.container.children).find("a.btn").not('[data-wysihtml5-action="change_view"]').toggleClass("disabled")})},createToolbar:function(b,c){var g,h,i=this,j=a("<ul/>",{"class":"wysihtml5-toolbar",style:"display:none"}),k=c.locale||d.locale||"en";e.hasOwnProperty(k)||(void 0,k="en"),g=a.extend(!0,{},e.en,e[k]);for(h in c.toolbar)c.toolbar[h]&&j.append(f(h,g,c));return j.find('a[data-wysihtml5-command="formatBlock"]').click(function(b){var c=b.delegateTarget||b.target||b.srcElement,d=a(c),e=d.data("wysihtml5-display-format-name"),f=d.data("wysihtml5-format-name")||d.html();(void 0===e||"true"===e)&&i.toolbar.find(".current-font").text(f)}),j.find('a[data-wysihtml5-command="foreColor"]').click(function(b){var c=b.target||b.srcElement,d=a(c);i.toolbar.find(".current-color").text(d.html())}),this.el.before(j),j},addMoreShortcuts:function(a,c,d){b.dom.observe(c,"keydown",function(c){var e,f=c.keyCode,g=d[f];(c.ctrlKey||c.metaKey||c.altKey)&&g&&b.commands[g]&&(e=a.toolbar.commandMapping[g+":null"],e&&e.dialog&&!e.state?e.dialog.show():b.commands[g].exec(a.composer,g),c.preventDefault())})}},c={resetDefaults:function(){a.fn.wysihtml5.defaultOptions=a.extend(!0,{},a.fn.wysihtml5.defaultOptionsCache)},bypassDefaults:function(b){return this.each(function(){var c=a(this);c.data("wysihtml5",new g(c,b))})},shallowExtend:function(b){var d=a.extend({},a.fn.wysihtml5.defaultOptions,b||{},a(this).data()),e=this;return c.bypassDefaults.apply(e,[d])},deepExtend:function(b){var d=a.extend(!0,{},a.fn.wysihtml5.defaultOptions,b||{}),e=this;return c.bypassDefaults.apply(e,[d])},init:function(a){var b=this;return c.shallowExtend.apply(b,[a])}},a.fn.wysihtml5=function(b){return c[b]?c[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?(a.error("Method "+b+" does not exist on jQuery.wysihtml5"),void 0):c.init.apply(this,arguments)},a.fn.wysihtml5.Constructor=g,d=a.fn.wysihtml5.defaultOptions={toolbar:{"font-styles":!0,color:!1,emphasis:{small:!0},blockquote:!0,lists:!0,html:!1,link:!0,image:!0,smallmodals:!1},useLineBreaks:!1,parserRules:{classes:{"wysiwyg-color-silver":1,"wysiwyg-color-gray":1,"wysiwyg-color-white":1,"wysiwyg-color-maroon":1,"wysiwyg-color-red":1,"wysiwyg-color-purple":1,"wysiwyg-color-fuchsia":1,"wysiwyg-color-green":1,"wysiwyg-color-lime":1,"wysiwyg-color-olive":1,"wysiwyg-color-yellow":1,"wysiwyg-color-navy":1,"wysiwyg-color-blue":1,"wysiwyg-color-teal":1,"wysiwyg-color-aqua":1,"wysiwyg-color-orange":1},tags:{b:{},i:{},strong:{},em:{},p:{},br:{},ol:{},ul:{},li:{},h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},blockquote:{},u:1,img:{check_attributes:{width:"numbers",alt:"alt",src:"url",height:"numbers"}},a:{check_attributes:{href:"url"},set_attributes:{target:"_blank",rel:"nofollow"}},span:1,div:1,small:1,code:1,pre:1}},locale:"en",shortcuts:{83:"small",75:"createLink"}},void 0===a.fn.wysihtml5.defaultOptionsCache&&(a.fn.wysihtml5.defaultOptionsCache=a.extend(!0,{},a.fn.wysihtml5.defaultOptions)),e=a.fn.wysihtml5.locale={}};c(a,b)}),function(a){a.commands.small={exec:function(b,c){return a.commands.formatInline.exec(b,c,"small")},state:function(b,c){return a.commands.formatInline.state(b,c,"small")}}}(wysihtml5),function(a){"function"==typeof define&&define.amd?define("bootstrap.wysihtml5.en-US",["jquery","bootstrap.wysihtml5"],a):a(jQuery)}(function(a){a.fn.wysihtml5.locale.en=a.fn.wysihtml5.locale["en-US"]={font_styles:{normal:"Normal text",h1:"Heading 1",h2:"Heading 2",h3:"Heading 3",h4:"Heading 4",h5:"Heading 5",h6:"Heading 6"},emphasis:{bold:"Bold",italic:"Italic",underline:"Underline",small:"Small"},lists:{unordered:"Unordered list",ordered:"Ordered list",outdent:"Outdent",indent:"Indent"},link:{insert:"Insert link",cancel:"Cancel",target:"Open link in new window"},image:{insert:"Insert image",cancel:"Cancel"},html:{edit:"Edit HTML"},colours:{black:"Black",silver:"Silver",gray:"Grey",maroon:"Maroon",red:"Red",purple:"Purple",green:"Green",olive:"Olive",navy:"Navy",blue:"Blue",orange:"Orange"}}});
/*! AdminLTE app.js
 * ================
 * Main JS application file for AdminLTE v2. This file
 * should be included in all pages. It controls some layout
 * options and implements exclusive AdminLTE plugins.
 *
 * @Author  Almsaeed Studio
 * @Support <http://www.almsaeedstudio.com>
 * @Email   <abdullah@almsaeedstudio.com>
 * @version 2.3.8
 * @license MIT <http://opensource.org/licenses/MIT>
 */
function _init(){"use strict";$.AdminLTE.layout={activate:function(){var a=this;a.fix(),a.fixSidebar(),$("body, html, .wrapper").css("height","auto"),$(window,".wrapper").resize(function(){a.fix(),a.fixSidebar()})},fix:function(){$(".layout-boxed > .wrapper").css("overflow","hidden");var a=$(".main-footer").outerHeight()||0,b=$(".main-header").outerHeight()+a,c=$(window).height(),d=$(".sidebar").height()||0;if($("body").hasClass("fixed"))$(".content-wrapper, .right-side").css("min-height",c-a);else{var e;c>=d?($(".content-wrapper, .right-side").css("min-height",c-b),e=c-b):($(".content-wrapper, .right-side").css("min-height",d),e=d);var f=$($.AdminLTE.options.controlSidebarOptions.selector);"undefined"!=typeof f&&f.height()>e&&$(".content-wrapper, .right-side").css("min-height",f.height())}},fixSidebar:function(){return $("body").hasClass("fixed")?("undefined"==typeof $.fn.slimScroll&&window.console&&window.console.error("Error: the fixed layout requires the slimscroll plugin!"),void($.AdminLTE.options.sidebarSlimScroll&&"undefined"!=typeof $.fn.slimScroll&&($(".sidebar").slimScroll({destroy:!0}).height("auto"),$(".sidebar").slimScroll({height:$(window).height()-$(".main-header").height()+"px",color:"rgba(0,0,0,0.2)",size:"3px"})))):void("undefined"!=typeof $.fn.slimScroll&&$(".sidebar").slimScroll({destroy:!0}).height("auto"))}},$.AdminLTE.pushMenu={activate:function(a){var b=$.AdminLTE.options.screenSizes;$(document).on("click",a,function(a){a.preventDefault(),$(window).width()>b.sm-1?$("body").hasClass("sidebar-collapse")?$("body").removeClass("sidebar-collapse").trigger("expanded.pushMenu"):$("body").addClass("sidebar-collapse").trigger("collapsed.pushMenu"):$("body").hasClass("sidebar-open")?$("body").removeClass("sidebar-open").removeClass("sidebar-collapse").trigger("collapsed.pushMenu"):$("body").addClass("sidebar-open").trigger("expanded.pushMenu")}),$(".content-wrapper").click(function(){$(window).width()<=b.sm-1&&$("body").hasClass("sidebar-open")&&$("body").removeClass("sidebar-open")}),($.AdminLTE.options.sidebarExpandOnHover||$("body").hasClass("fixed")&&$("body").hasClass("sidebar-mini"))&&this.expandOnHover()},expandOnHover:function(){var a=this,b=$.AdminLTE.options.screenSizes.sm-1;$(".main-sidebar").hover(function(){$("body").hasClass("sidebar-mini")&&$("body").hasClass("sidebar-collapse")&&$(window).width()>b&&a.expand()},function(){$("body").hasClass("sidebar-mini")&&$("body").hasClass("sidebar-expanded-on-hover")&&$(window).width()>b&&a.collapse()})},expand:function(){$("body").removeClass("sidebar-collapse").addClass("sidebar-expanded-on-hover")},collapse:function(){$("body").hasClass("sidebar-expanded-on-hover")&&$("body").removeClass("sidebar-expanded-on-hover").addClass("sidebar-collapse")}},$.AdminLTE.tree=function(a){var b=this,c=$.AdminLTE.options.animationSpeed;$(document).off("click",a+" li a").on("click",a+" li a",function(a){var d=$(this),e=d.next();if(e.is(".treeview-menu")&&e.is(":visible")&&!$("body").hasClass("sidebar-collapse"))e.slideUp(c,function(){e.removeClass("menu-open")}),e.parent("li").removeClass("active");else if(e.is(".treeview-menu")&&!e.is(":visible")){var f=d.parents("ul").first(),g=f.find("ul:visible").slideUp(c);g.removeClass("menu-open");var h=d.parent("li");e.slideDown(c,function(){e.addClass("menu-open"),f.find("li.active").removeClass("active"),h.addClass("active"),b.layout.fix()})}e.is(".treeview-menu")&&a.preventDefault()})},$.AdminLTE.controlSidebar={activate:function(){var a=this,b=$.AdminLTE.options.controlSidebarOptions,c=$(b.selector),d=$(b.toggleBtnSelector);d.on("click",function(d){d.preventDefault(),c.hasClass("control-sidebar-open")||$("body").hasClass("control-sidebar-open")?a.close(c,b.slide):a.open(c,b.slide)});var e=$(".control-sidebar-bg");a._fix(e),$("body").hasClass("fixed")?a._fixForFixed(c):$(".content-wrapper, .right-side").height()<c.height()&&a._fixForContent(c)},open:function(a,b){b?a.addClass("control-sidebar-open"):$("body").addClass("control-sidebar-open")},close:function(a,b){b?a.removeClass("control-sidebar-open"):$("body").removeClass("control-sidebar-open")},_fix:function(a){var b=this;if($("body").hasClass("layout-boxed")){if(a.css("position","absolute"),a.height($(".wrapper").height()),b.hasBindedResize)return;$(window).resize(function(){b._fix(a)}),b.hasBindedResize=!0}else a.css({position:"fixed",height:"auto"})},_fixForFixed:function(a){a.css({position:"fixed","max-height":"100%",overflow:"auto","padding-bottom":"50px"})},_fixForContent:function(a){$(".content-wrapper, .right-side").css("min-height",a.height())}},$.AdminLTE.boxWidget={selectors:$.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,icons:$.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,animationSpeed:$.AdminLTE.options.animationSpeed,activate:function(a){var b=this;a||(a=document),$(a).on("click",b.selectors.collapse,function(a){a.preventDefault(),b.collapse($(this))}),$(a).on("click",b.selectors.remove,function(a){a.preventDefault(),b.remove($(this))})},collapse:function(a){var b=this,c=a.parents(".box").first(),d=c.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");c.hasClass("collapsed-box")?(a.children(":first").removeClass(b.icons.open).addClass(b.icons.collapse),d.slideDown(b.animationSpeed,function(){c.removeClass("collapsed-box")})):(a.children(":first").removeClass(b.icons.collapse).addClass(b.icons.open),d.slideUp(b.animationSpeed,function(){c.addClass("collapsed-box")}))},remove:function(a){var b=a.parents(".box").first();b.slideUp(this.animationSpeed)}}}if("undefined"==typeof jQuery)throw new Error("AdminLTE requires jQuery");$.AdminLTE={},$.AdminLTE.options={navbarMenuSlimscroll:!0,navbarMenuSlimscrollWidth:"3px",navbarMenuHeight:"200px",animationSpeed:500,sidebarToggleSelector:"[data-toggle='offcanvas']",sidebarPushMenu:!0,sidebarSlimScroll:!0,sidebarExpandOnHover:!1,enableBoxRefresh:!0,enableBSToppltip:!0,BSTooltipSelector:"[data-toggle='tooltip']",enableFastclick:!1,enableControlTreeView:!0,enableControlSidebar:!0,controlSidebarOptions:{toggleBtnSelector:"[data-toggle='control-sidebar']",selector:".control-sidebar",slide:!0},enableBoxWidget:!0,boxWidgetOptions:{boxWidgetIcons:{collapse:"fa-minus",open:"fa-plus",remove:"fa-times"},boxWidgetSelectors:{remove:'[data-widget="remove"]',collapse:'[data-widget="collapse"]'}},directChat:{enable:!0,contactToggleSelector:'[data-widget="chat-pane-toggle"]'},colors:{lightBlue:"#3c8dbc",red:"#f56954",green:"#00a65a",aqua:"#00c0ef",yellow:"#f39c12",blue:"#0073b7",navy:"#001F3F",teal:"#39CCCC",olive:"#3D9970",lime:"#01FF70",orange:"#FF851B",fuchsia:"#F012BE",purple:"#8E24AA",maroon:"#D81B60",black:"#222222",gray:"#d2d6de"},screenSizes:{xs:480,sm:768,md:992,lg:1200}},$(function(){"use strict";$("body").removeClass("hold-transition"),"undefined"!=typeof AdminLTEOptions&&$.extend(!0,$.AdminLTE.options,AdminLTEOptions);var a=$.AdminLTE.options;_init(),$.AdminLTE.layout.activate(),a.enableControlTreeView&&$.AdminLTE.tree(".sidebar"),a.enableControlSidebar&&$.AdminLTE.controlSidebar.activate(),a.navbarMenuSlimscroll&&"undefined"!=typeof $.fn.slimscroll&&$(".navbar .menu").slimscroll({height:a.navbarMenuHeight,alwaysVisible:!1,size:a.navbarMenuSlimscrollWidth}).css("width","100%"),a.sidebarPushMenu&&$.AdminLTE.pushMenu.activate(a.sidebarToggleSelector),a.enableBSToppltip&&$("body").tooltip({selector:a.BSTooltipSelector,container:"body"}),a.enableBoxWidget&&$.AdminLTE.boxWidget.activate(),a.enableFastclick&&"undefined"!=typeof FastClick&&FastClick.attach(document.body),a.directChat.enable&&$(document).on("click",a.directChat.contactToggleSelector,function(){var a=$(this).parents(".direct-chat").first();a.toggleClass("direct-chat-contacts-open")}),$('.btn-group[data-toggle="btn-toggle"]').each(function(){var a=$(this);$(this).find(".btn").on("click",function(b){a.find(".btn.active").removeClass("active"),$(this).addClass("active"),b.preventDefault()})})}),function(a){"use strict";a.fn.boxRefresh=function(b){function c(a){a.append(f),e.onLoadStart.call(a)}function d(a){a.find(f).remove(),e.onLoadDone.call(a)}var e=a.extend({trigger:".refresh-btn",source:"",onLoadStart:function(a){return a},onLoadDone:function(a){return a}},b),f=a('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');return this.each(function(){if(""===e.source)return void(window.console&&window.console.log("Please specify a source first - boxRefresh()"));var b=a(this),f=b.find(e.trigger).first();f.on("click",function(a){a.preventDefault(),c(b),b.find(".box-body").load(e.source,function(){d(b)})})})}}(jQuery),function(a){"use strict";a.fn.activateBox=function(){a.AdminLTE.boxWidget.activate(this)},a.fn.toggleBox=function(){var b=a(a.AdminLTE.boxWidget.selectors.collapse,this);a.AdminLTE.boxWidget.collapse(b)},a.fn.removeBox=function(){var b=a(a.AdminLTE.boxWidget.selectors.remove,this);a.AdminLTE.boxWidget.remove(b)}}(jQuery),function(a){"use strict";a.fn.todolist=function(b){var c=a.extend({onCheck:function(a){return a},onUncheck:function(a){return a}},b);return this.each(function(){"undefined"!=typeof a.fn.iCheck?(a("input",this).on("ifChecked",function(){var b=a(this).parents("li").first();b.toggleClass("done"),c.onCheck.call(b)}),a("input",this).on("ifUnchecked",function(){var b=a(this).parents("li").first();b.toggleClass("done"),c.onUncheck.call(b)})):a("input",this).on("change",function(){var b=a(this).parents("li").first();b.toggleClass("done"),a("input",b).is(":checked")?c.onCheck.call(b):c.onUncheck.call(b)})})}}(jQuery);
/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

  "use strict";

  //Make the dashboard widgets sortable Using jquery UI
  $(".connectedSortable").sortable({
    placeholder: "sort-highlight",
    connectWith: ".connectedSortable",
    handle: ".box-header, .nav-tabs",
    forcePlaceholderSize: true,
    zIndex: 999999
  });
  $(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");

  //jQuery UI sortable for the todo list
  $(".todo-list").sortable({
    placeholder: "sort-highlight",
    handle: ".handle",
    forcePlaceholderSize: true,
    zIndex: 999999
  });

  //bootstrap WYSIHTML5 - text editor
  $(".textarea").wysihtml5();

  $('.daterange').daterangepicker({
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    startDate: moment().subtract(29, 'days'),
    endDate: moment()
  }, function (start, end) {
    window.alert("You chose: " + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  });

  /* jQueryKnob */
  $(".knob").knob();

  //jvectormap data
  var visitorsData = {
    "US": 398, //USA
    "SA": 400, //Saudi Arabia
    "CA": 1000, //Canada
    "DE": 500, //Germany
    "FR": 760, //France
    "CN": 300, //China
    "AU": 700, //Australia
    "BR": 600, //Brazil
    "IN": 800, //India
    "GB": 320, //Great Britain
    "RU": 3000 //Russia
  };
  //World map by jvectormap
  $('#world-map').vectorMap({
    map: 'world_mill_en',
    backgroundColor: "transparent",
    regionStyle: {
      initial: {
        fill: '#e4e4e4',
        "fill-opacity": 1,
        stroke: 'none',
        "stroke-width": 0,
        "stroke-opacity": 1
      }
    },
    series: {
      regions: [{
        values: visitorsData,
        scale: ["#92c1dc", "#ebf4f9"],
        normalizeFunction: 'polynomial'
      }]
    },
    onRegionLabelShow: function (e, el, code) {
      if (typeof visitorsData[code] != "undefined")
        el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
    }
  });

  //Sparkline charts
  var myvalues = [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021];
  $('#sparkline-1').sparkline(myvalues, {
    type: 'line',
    lineColor: '#92c1dc',
    fillColor: "#ebf4f9",
    height: '50',
    width: '80'
  });
  myvalues = [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921];
  $('#sparkline-2').sparkline(myvalues, {
    type: 'line',
    lineColor: '#92c1dc',
    fillColor: "#ebf4f9",
    height: '50',
    width: '80'
  });
  myvalues = [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21];
  $('#sparkline-3').sparkline(myvalues, {
    type: 'line',
    lineColor: '#92c1dc',
    fillColor: "#ebf4f9",
    height: '50',
    width: '80'
  });

  //The Calender
  $("#calendar").datepicker();

  //SLIMSCROLL FOR CHAT WIDGET
  $('#chat-box').slimScroll({
    height: '250px'
  });

  /* Morris.js Charts */
  // Sales chart
  var area = new Morris.Area({
    element: 'revenue-chart',
    resize: true,
    data: [
      {y: '2011 Q1', item1: 2666, item2: 2666},
      {y: '2011 Q2', item1: 2778, item2: 2294},
      {y: '2011 Q3', item1: 4912, item2: 1969},
      {y: '2011 Q4', item1: 3767, item2: 3597},
      {y: '2012 Q1', item1: 6810, item2: 1914},
      {y: '2012 Q2', item1: 5670, item2: 4293},
      {y: '2012 Q3', item1: 4820, item2: 3795},
      {y: '2012 Q4', item1: 15073, item2: 5967},
      {y: '2013 Q1', item1: 10687, item2: 4460},
      {y: '2013 Q2', item1: 8432, item2: 5713}
    ],
    xkey: 'y',
    ykeys: ['item1', 'item2'],
    labels: ['Item 1', 'Item 2'],
    lineColors: ['#a0d0e0', '#3c8dbc'],
    hideHover: 'auto'
  });
  var line = new Morris.Line({
    element: 'line-chart',
    resize: true,
    data: [
      {y: '2011 Q1', item1: 2666},
      {y: '2011 Q2', item1: 2778},
      {y: '2011 Q3', item1: 4912},
      {y: '2011 Q4', item1: 3767},
      {y: '2012 Q1', item1: 6810},
      {y: '2012 Q2', item1: 5670},
      {y: '2012 Q3', item1: 4820},
      {y: '2012 Q4', item1: 15073},
      {y: '2013 Q1', item1: 10687},
      {y: '2013 Q2', item1: 8432}
    ],
    xkey: 'y',
    ykeys: ['item1'],
    labels: ['Item 1'],
    lineColors: ['#efefef'],
    lineWidth: 2,
    hideHover: 'auto',
    gridTextColor: "#fff",
    gridStrokeWidth: 0.4,
    pointSize: 4,
    pointStrokeColors: ["#efefef"],
    gridLineColor: "#efefef",
    gridTextFamily: "Open Sans",
    gridTextSize: 10
  });

  //Donut Chart
  var donut = new Morris.Donut({
    element: 'sales-chart',
    resize: true,
    colors: ["#3c8dbc", "#f56954", "#00a65a"],
    data: [
      {label: "Download Sales", value: 12},
      {label: "In-Store Sales", value: 30},
      {label: "Mail-Order Sales", value: 20}
    ],
    hideHover: 'auto'
  });

  //Fix for charts under tabs
  $('.box ul.nav a').on('shown.bs.tab', function () {
    area.redraw();
    donut.redraw();
    line.redraw();
  });

  /* The todo list plugin */
  $(".todo-list").todolist({
    onCheck: function (ele) {
      window.console.log("The element has been checked");
      return ele;
    },
    onUncheck: function (ele) {
      window.console.log("The element has been unchecked");
      return ele;
    }
  });

});

/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */
(function ($, AdminLTE) {

  "use strict";

  /**
   * List of all the available skins
   *
   * @type Array
   */
  var my_skins = [
    "skin-blue",
    "skin-black",
    "skin-red",
    "skin-yellow",
    "skin-purple",
    "skin-green",
    "skin-blue-light",
    "skin-black-light",
    "skin-red-light",
    "skin-yellow-light",
    "skin-purple-light",
    "skin-green-light"
  ];

  //Create the new tab
  var tab_pane = $("<div />", {
    "id": "control-sidebar-theme-demo-options-tab",
    "class": "tab-pane active"
  });

  //Create the tab button
  var tab_button = $("<li />", {"class": "active"})
      .html("<a href='#control-sidebar-theme-demo-options-tab' data-toggle='tab'>"
      + "<i class='fa fa-wrench'></i>"
      + "</a>");

  //Add the tab button to the right sidebar tabs
  $("[href='#control-sidebar-home-tab']")
      .parent()
      .before(tab_button);

  //Create the menu
  var demo_settings = $("<div />");

  //Layout options
  demo_settings.append(
      "<h4 class='control-sidebar-heading'>"
      + "Layout Options"
      + "</h4>"
        //Fixed layout
      + "<div class='form-group'>"
      + "<label class='control-sidebar-subheading'>"
      + "<input type='checkbox' data-layout='fixed' class='pull-right'/> "
      + "Fixed layout"
      + "</label>"
      + "<p>Activate the fixed layout. You can't use fixed and boxed layouts together</p>"
      + "</div>"
        //Boxed layout
      + "<div class='form-group'>"
      + "<label class='control-sidebar-subheading'>"
      + "<input type='checkbox' data-layout='layout-boxed'class='pull-right'/> "
      + "Boxed Layout"
      + "</label>"
      + "<p>Activate the boxed layout</p>"
      + "</div>"
        //Sidebar Toggle
      + "<div class='form-group'>"
      + "<label class='control-sidebar-subheading'>"
      + "<input type='checkbox' data-layout='sidebar-collapse' class='pull-right'/> "
      + "Toggle Sidebar"
      + "</label>"
      + "<p>Toggle the left sidebar's state (open or collapse)</p>"
      + "</div>"
        //Sidebar mini expand on hover toggle
      + "<div class='form-group'>"
      + "<label class='control-sidebar-subheading'>"
      + "<input type='checkbox' data-enable='expandOnHover' class='pull-right'/> "
      + "Sidebar Expand on Hover"
      + "</label>"
      + "<p>Let the sidebar mini expand on hover</p>"
      + "</div>"
        //Control Sidebar Toggle
      + "<div class='form-group'>"
      + "<label class='control-sidebar-subheading'>"
      + "<input type='checkbox' data-controlsidebar='control-sidebar-open' class='pull-right'/> "
      + "Toggle Right Sidebar Slide"
      + "</label>"
      + "<p>Toggle between slide over content and push content effects</p>"
      + "</div>"
        //Control Sidebar Skin Toggle
      + "<div class='form-group'>"
      + "<label class='control-sidebar-subheading'>"
      + "<input type='checkbox' data-sidebarskin='toggle' class='pull-right'/> "
      + "Toggle Right Sidebar Skin"
      + "</label>"
      + "<p>Toggle between dark and light skins for the right sidebar</p>"
      + "</div>"
  );
  var skins_list = $("<ul />", {"class": 'list-unstyled clearfix'});

  //Dark sidebar skins
  var skin_blue =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-blue' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px; background: #367fa9;'></span><span class='bg-light-blue' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin'>Blue</p>");
  skins_list.append(skin_blue);
  var skin_black =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-black' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div style='box-shadow: 0 0 2px rgba(0,0,0,0.1)' class='clearfix'><span style='display:block; width: 20%; float: left; height: 7px; background: #fefefe;'></span><span style='display:block; width: 80%; float: left; height: 7px; background: #fefefe;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin'>Black</p>");
  skins_list.append(skin_black);
  var skin_purple =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-purple' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-purple-active'></span><span class='bg-purple' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin'>Purple</p>");
  skins_list.append(skin_purple);
  var skin_green =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-green' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-green-active'></span><span class='bg-green' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin'>Green</p>");
  skins_list.append(skin_green);
  var skin_red =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-red' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-red-active'></span><span class='bg-red' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin'>Red</p>");
  skins_list.append(skin_red);
  var skin_yellow =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-yellow' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-yellow-active'></span><span class='bg-yellow' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin'>Yellow</p>");
  skins_list.append(skin_yellow);

  //Light sidebar skins
  var skin_blue_light =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-blue-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px; background: #367fa9;'></span><span class='bg-light-blue' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin' style='font-size: 12px'>Blue Light</p>");
  skins_list.append(skin_blue_light);
  var skin_black_light =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-black-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div style='box-shadow: 0 0 2px rgba(0,0,0,0.1)' class='clearfix'><span style='display:block; width: 20%; float: left; height: 7px; background: #fefefe;'></span><span style='display:block; width: 80%; float: left; height: 7px; background: #fefefe;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin' style='font-size: 12px'>Black Light</p>");
  skins_list.append(skin_black_light);
  var skin_purple_light =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-purple-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-purple-active'></span><span class='bg-purple' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin' style='font-size: 12px'>Purple Light</p>");
  skins_list.append(skin_purple_light);
  var skin_green_light =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-green-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-green-active'></span><span class='bg-green' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin' style='font-size: 12px'>Green Light</p>");
  skins_list.append(skin_green_light);
  var skin_red_light =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-red-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-red-active'></span><span class='bg-red' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin' style='font-size: 12px'>Red Light</p>");
  skins_list.append(skin_red_light);
  var skin_yellow_light =
      $("<li />", {style: "float:left; width: 33.33333%; padding: 5px;"})
          .append("<a href='javascript:void(0);' data-skin='skin-yellow-light' style='display: block; box-shadow: 0 0 3px rgba(0,0,0,0.4)' class='clearfix full-opacity-hover'>"
          + "<div><span style='display:block; width: 20%; float: left; height: 7px;' class='bg-yellow-active'></span><span class='bg-yellow' style='display:block; width: 80%; float: left; height: 7px;'></span></div>"
          + "<div><span style='display:block; width: 20%; float: left; height: 20px; background: #f9fafc;'></span><span style='display:block; width: 80%; float: left; height: 20px; background: #f4f5f7;'></span></div>"
          + "</a>"
          + "<p class='text-center no-margin' style='font-size: 12px;'>Yellow Light</p>");
  skins_list.append(skin_yellow_light);

  demo_settings.append("<h4 class='control-sidebar-heading'>Skins</h4>");
  demo_settings.append(skins_list);

  tab_pane.append(demo_settings);
  $("#control-sidebar-home-tab").after(tab_pane);

  setup();

  /**
   * Toggles layout classes
   *
   * @param String cls the layout class to toggle
   * @returns void
   */
  function change_layout(cls) {
    $("body").toggleClass(cls);
    AdminLTE.layout.fixSidebar();
    //Fix the problem with right sidebar and layout boxed
    if (cls == "layout-boxed")
      AdminLTE.controlSidebar._fix($(".control-sidebar-bg"));
    if ($('body').hasClass('fixed') && cls == 'fixed') {
      AdminLTE.pushMenu.expandOnHover();
      AdminLTE.layout.activate();
    }
    AdminLTE.controlSidebar._fix($(".control-sidebar-bg"));
    AdminLTE.controlSidebar._fix($(".control-sidebar"));
  }

  /**
   * Replaces the old skin with the new skin
   * @param String cls the new skin class
   * @returns Boolean false to prevent link's default action
   */
  function change_skin(cls) {
    $.each(my_skins, function (i) {
      $("body").removeClass(my_skins[i]);
    });

    $("body").addClass(cls);
    store('skin', cls);
    return false;
  }

  /**
   * Store a new settings in the browser
   *
   * @param String name Name of the setting
   * @param String val Value of the setting
   * @returns void
   */
  function store(name, val) {
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem(name, val);
    } else {
      window.alert('Please use a modern browser to properly view this template!');
    }
  }

  /**
   * Get a prestored setting
   *
   * @param String name Name of of the setting
   * @returns String The value of the setting | null
   */
  function get(name) {
    if (typeof (Storage) !== "undefined") {
      return localStorage.getItem(name);
    } else {
      window.alert('Please use a modern browser to properly view this template!');
    }
  }

  /**
   * Retrieve default settings and apply them to the template
   *
   * @returns void
   */
  function setup() {
    var tmp = get('skin');
    if (tmp && $.inArray(tmp, my_skins))
      change_skin(tmp);

    //Add the change skin listener
    $("[data-skin]").on('click', function (e) {
      if($(this).hasClass('knob'))
        return;
      e.preventDefault();
      change_skin($(this).data('skin'));
    });

    //Add the layout manager
    $("[data-layout]").on('click', function () {
      change_layout($(this).data('layout'));
    });

    $("[data-controlsidebar]").on('click', function () {
      change_layout($(this).data('controlsidebar'));
      var slide = !AdminLTE.options.controlSidebarOptions.slide;
      AdminLTE.options.controlSidebarOptions.slide = slide;
      if (!slide)
        $('.control-sidebar').removeClass('control-sidebar-open');
    });

    $("[data-sidebarskin='toggle']").on('click', function () {
      var sidebar = $(".control-sidebar");
      if (sidebar.hasClass("control-sidebar-dark")) {
        sidebar.removeClass("control-sidebar-dark")
        sidebar.addClass("control-sidebar-light")
      } else {
        sidebar.removeClass("control-sidebar-light")
        sidebar.addClass("control-sidebar-dark")
      }
    });

    $("[data-enable='expandOnHover']").on('click', function () {
      $(this).attr('disabled', true);
      AdminLTE.pushMenu.expandOnHover();
      if (!$('body').hasClass('sidebar-collapse'))
        $("[data-layout='sidebar-collapse']").click();
    });

    // Reset options
    if ($('body').hasClass('fixed')) {
      $("[data-layout='fixed']").attr('checked', 'checked');
    }
    if ($('body').hasClass('layout-boxed')) {
      $("[data-layout='layout-boxed']").attr('checked', 'checked');
    }
    if ($('body').hasClass('sidebar-collapse')) {
      $("[data-layout='sidebar-collapse']").attr('checked', 'checked');
    }

  }
})(jQuery, $.AdminLTE);
