!function(e){function n(e){delete installedChunks[e]}function r(e){var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.src=f.p+""+e+"."+w+".hot-update.js",n.appendChild(r)}function t(){return new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,t=f.p+""+w+".hot-update.json";r.open("GET",t,!0),r.timeout=1e4,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+t+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+t+" failed."));else{try{var o=JSON.parse(r.responseText)}catch(e){return void n(e)}e(o)}}})}function o(e){var n=A[e];if(!n)return f;var r=function(r){return n.hot.active?(A[r]?A[r].parents.indexOf(e)<0&&A[r].parents.push(e):_=[e],n.children.indexOf(r)<0&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),_=[]),g=!1,f(r)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return f[e]},set:function(n){f[e]=n}}};for(var o in f)Object.prototype.hasOwnProperty.call(f,o)&&Object.defineProperty(r,o,t(o));return Object.defineProperty(r,"e",{enumerable:!0,value:function(e){function n(){H--,"prepare"===E&&(P[e]||p(e),0===H&&0===x&&l())}return"ready"===E&&i("prepare"),H++,f.e(e).then(n,function(e){throw n(),e})}}),r}function c(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:g,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:a,apply:u,status:function(e){if(!e)return E;D.push(e)},addStatusHandler:function(e){D.push(e)},removeStatusHandler:function(e){var n=D.indexOf(e);n>=0&&D.splice(n,1)},data:O[e]};return g=!0,n}function i(e){E=e;for(var n=0;n<D.length;n++)D[n].call(null,e)}function d(e){return+e+""===e?+e:e}function a(e){if("idle"!==E)throw new Error("check() is only allowed in idle status");return b=e,i("check"),t().then(function(e){if(!e)return i("idle"),null;I={},P={},k=e.c,m=e.h,i("prepare");var n=new Promise(function(e,n){y={resolve:e,reject:n}});return v={},p(0),"prepare"===E&&0===H&&0===x&&l(),n})}function s(e,n){if(k[e]&&I[e]){I[e]=!1;for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(v[r]=n[r]);0==--x&&0===H&&l()}}function p(e){k[e]?(I[e]=!0,x++,r(e)):P[e]=!0}function l(){i("ready");var e=y;if(y=null,e)if(b)u(b).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in v)Object.prototype.hasOwnProperty.call(v,r)&&n.push(d(r));e.resolve(n)}}function u(r){function t(e){for(var n=[e],r={},t=n.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var c=t.pop(),i=c.id,d=c.chain;if((p=A[i])&&!p.hot._selfAccepted){if(p.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:i};if(p.hot._main)return{type:"unaccepted",chain:d,moduleId:i};for(var a=0;a<p.parents.length;a++){var s=p.parents[a],l=A[s];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:d.concat([s]),moduleId:i,parentId:s};n.indexOf(s)>=0||(l.hot._acceptedDependencies[i]?(r[s]||(r[s]=[]),o(r[s],[i])):(delete r[s],n.push(s),t.push({chain:d.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function o(e,n){for(var r=0;r<n.length;r++){var t=n[r];e.indexOf(t)<0&&e.push(t)}}if("ready"!==E)throw new Error("apply() is only allowed in ready status");r=r||{};var c,a,s,p,l,u={},h=[],y={},b=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var g in v)if(Object.prototype.hasOwnProperty.call(v,g)){l=d(g);var j;j=v[g]?t(l):{type:"disposed",moduleId:g};var D=!1,x=!1,H=!1,P="";switch(j.chain&&(P="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":r.onDeclined&&r.onDeclined(j),r.ignoreDeclined||(D=new Error("Aborted because of self decline: "+j.moduleId+P));break;case"declined":r.onDeclined&&r.onDeclined(j),r.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+P));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(j),r.ignoreUnaccepted||(D=new Error("Aborted because "+l+" is not accepted"+P));break;case"accepted":r.onAccepted&&r.onAccepted(j),x=!0;break;case"disposed":r.onDisposed&&r.onDisposed(j),H=!0;break;default:throw new Error("Unexception type "+j.type)}if(D)return i("abort"),Promise.reject(D);if(x){y[l]=v[l],o(h,j.outdatedModules);for(l in j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,l)&&(u[l]||(u[l]=[]),o(u[l],j.outdatedDependencies[l]))}H&&(o(h,[j.moduleId]),y[l]=b)}var I=[];for(a=0;a<h.length;a++)l=h[a],A[l]&&A[l].hot._selfAccepted&&I.push({module:l,errorHandler:A[l].hot._selfAccepted});i("dispose"),Object.keys(k).forEach(function(e){!1===k[e]&&n(e)});for(var M,U=h.slice();U.length>0;)if(l=U.pop(),p=A[l]){var q={},R=p.hot._disposeHandlers;for(s=0;s<R.length;s++)(c=R[s])(q);for(O[l]=q,p.hot.active=!1,delete A[l],s=0;s<p.children.length;s++){var S=A[p.children[s]];S&&((M=S.parents.indexOf(l))>=0&&S.parents.splice(M,1))}}var N,T;for(l in u)if(Object.prototype.hasOwnProperty.call(u,l)&&(p=A[l]))for(T=u[l],s=0;s<T.length;s++)N=T[s],(M=p.children.indexOf(N))>=0&&p.children.splice(M,1);i("apply"),w=m;for(l in y)Object.prototype.hasOwnProperty.call(y,l)&&(e[l]=y[l]);var C=null;for(l in u)if(Object.prototype.hasOwnProperty.call(u,l)){p=A[l],T=u[l];var L=[];for(a=0;a<T.length;a++)N=T[a],c=p.hot._acceptedDependencies[N],L.indexOf(c)>=0||L.push(c);for(a=0;a<L.length;a++){c=L[a];try{c(T)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:l,dependencyId:T[a],error:e}),r.ignoreErrored||C||(C=e)}}}for(a=0;a<I.length;a++){var X=I[a];l=X.module,_=[l];try{f(l)}catch(e){if("function"==typeof X.errorHandler)try{X.errorHandler(e)}catch(n){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,orginalError:e}),r.ignoreErrored||C||(C=n),C||(C=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:l,error:e}),r.ignoreErrored||C||(C=e)}}return C?(i("fail"),Promise.reject(C)):(i("idle"),Promise.resolve(h))}function f(n){if(A[n])return A[n].exports;var r=A[n]={i:n,l:!1,exports:{},hot:c(n),parents:(j=_,_=[],j),children:[]};return e[n].call(r.exports,r,r.exports,o(n)),r.l=!0,r.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,n){s(e,n),h&&h(e,n)};var y,v,m,b=!0,w="964aa0dc970bbe0db80b",O={},g=!0,_=[],j=[],D=[],E="idle",x=0,H=0,P={},I={},k={},A={};f.m=e,f.c=A,f.i=function(e){return e},f.d=function(e,n,r){f.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},f.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="",f.h=function(){return w},o("./src/app.js")(f.s="./src/app.js")}({"./src/app.js":function(e,n,r){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var o=r("./src/app.scss");t(o);console.log("testing hot module replacements")},"./src/app.scss":function(e,n){}});