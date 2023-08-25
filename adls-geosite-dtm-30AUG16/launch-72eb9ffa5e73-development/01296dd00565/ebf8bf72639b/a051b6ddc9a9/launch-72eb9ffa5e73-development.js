(function() {
  window._satellite = window._satellite || {};
  window._satellite.container = {
  "buildInfo": {
    "buildDate": "2023-08-25T10:57:56Z",
    "turbineBuildDate": "2023-02-22T20:37:26Z",
    "turbineVersion": "27.5.0"
  },
  "environment": {
    "id": "EN56faf0797166464388ecd6c2b8dd2148",
    "stage": "development"
  },
  "dataElements": {
    "query": {
      "modulePath": "core/src/lib/dataElements/queryStringParameter.js",
      "settings": {
        "name": "email",
        "caseInsensitive": true
      }
    },
    "eVar1": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  try{
  var x = _satellite.getVar("query");
  if(x){
    return x;
  }
}
catch(e){
  
}
}
      }
    },
    "fake event": {
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.version"
      }
    },
    "XDM Core": {
      "modulePath": "adobe-alloy/dist/lib/dataElements/xdmObject/index.js",
      "settings": {
        "data": {
          "web": {
            "webPageDetails": {
              "name": "%pageName%",
              "pageViews": {
                "value": 1
              }
            }
          },
          "eventType": "%Event%",
          "_experience": {
            "analytics": {
              "event1to100": {
                "event1": {
                  "value": 1
                },
                "event2": {
                  "value": 1
                },
                "event3": {
                  "value": 0
                }
              },
              "customDimensions": {
                "eVars": {
                  "eVar1": "apple",
                  "eVar2": "%map check%"
                },
                "lists": {
                  "list1": {
                    "list": [
                      {
                        "value": "a|b|c|d"
                      }
                    ]
                  },
                  "list2": {
                    "list": [
                      {
                        "value": "a,b,c,d"
                      }
                    ]
                  }
                }
              }
            }
          }
        },
        "sandbox": {
          "name": "aep-analytics-enablement"
        }
      }
    },
    "data Stream ID": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var x = window.location.href;
if(x.indexOf("vivo")>-1){
  return "82e46cd8-8cc4-4299-ab09-f4219f89c4d5";
}
else{
  return "a7088fbd-e271-4ea0-80a0-d0531342a043";
}
}
      }
    },
    "pageName": {
      "modulePath": "gcoe-adobe-client-data-layer/src/lib/dataElements/datalayerComputedState.js",
      "settings": {
        "path": "page.pageName"
      }
    },
    "check": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var x = _satellite.getVar("query")||"NA";
if(x.indexOf("@gmail.com")>-1){
  return false;
}
else{
  return true;
}
}
      }
    },
    "Event": {
      "modulePath": "gcoe-adobe-client-data-layer/src/lib/dataElements/datalayerComputedState.js",
      "settings": {
        "path": "event"
      }
    },
    "Vivo XDM": {
      "modulePath": "adobe-alloy/dist/lib/dataElements/xdmObject/index.js",
      "settings": {
        "data": {
          "_aepgdcdevenablement2": {
            "userIdag": "%query%"
          }
        },
        "sandbox": {
          "name": "aep-analytics-enablement"
        }
      }
    },
    "map check": {
      "modulePath": "core/src/lib/dataElements/queryStringParameter.js",
      "settings": {
        "name": "mapcheck",
        "caseInsensitive": true
      }
    },
    "pageView": {
      "modulePath": "gcoe-adobe-client-data-layer/src/lib/dataElements/datalayerComputedState.js",
      "settings": {
        "path": "page.pageView"
      }
    },
    "pageTitle": {
      "modulePath": "core/src/lib/dataElements/pageInfo.js",
      "settings": {
        "attribute": "title"
      }
    },
    "RS": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var pagename = _satellite.getVar("pageTitle");
var rs = "";
if (pagename == "Geometrixx Clothiers Home")
  rs = "aepgdcdevenablement2lumateam4dev";
else if (pagename == "Geometrixx Clothiers Login")
  rs = "zgeo1xxpnwaatest";
else if (pagename == "Geometrixx Clothiers Video")
  rs = "zgeo1xxpnwabracadata";

return rs;
}
      }
    }
  },
  "extensions": {
    "gcoe-adobe-client-data-layer": {
      "displayName": "Adobe Client Data Layer",
      "hostedLibFilesBaseUrl": "https://agastyareddy777.github.io/aglearning/adls-geosite-dtm-30AUG16/selfthostanalytics.js/01296dd00565/ebf8bf72639b/a051b6ddc9a9/hostedLibFiles/EP6e4c031a8b7640d7ac3fab013fa28b17/",
      "settings": {
        "dataLayerName": "adobeDataLayer",
        "injectLibrary": true
      },
      "modules": {
        "gcoe-adobe-client-data-layer/src/lib/dataElements/datalayerComputedState.js": {
          "name": "datalayer-computed-state",
          "displayName": "Data Layer Computed State",
          "script": function(module, exports, require, turbine) {
'use strict';
function index(obj, i) { return obj[i] }
/**
 * Returns the current computed state of the data layer.
 * @param settings Object containing the settings
 * @returns {Object|undefined}
 */
module.exports = function (settings, event) {
    if (typeof settings !== 'undefined' && settings !== null) {
        var dl = getDataLayer();
        if (typeof dl !== 'undefined') {
            if (settings.path !== '') {
                return dl.getState(settings.path);
            } else {
                return dl.getState();
            }
        }
    }
};

var getDataLayer = require('../util/getDataLayer');
          }

        },
        "gcoe-adobe-client-data-layer/src/lib/main.js": {
          "script": function(module, exports, require, turbine) {
var globalSettings = turbine.getExtensionSettings();
var dataLayerName = globalSettings.dataLayerName;
var injectLibrary = globalSettings.injectLibrary;

window.adobeDataLayer = window.adobeDataLayer || [];

/* if adobeDataLayer is not an object - change it */
if ('object' !== typeof (window.adobeDataLayer)) {
    turbine.logger.log('Initializing adobeDataLayer to [] as it isn\'t an object yet.');
    window.adobeDataLayer = [];
}

/* if a new name has been passed, ask adobeDataLayer to use it*/
if ('adobeDataLayer' !== dataLayerName) {
    if(typeof window[dataLayerName] === 'object') {
        turbine.logger.log('Using "' + dataLayerName + '" instead of "adobeDataLayer" as data layer name.');
        window.adobeDataLayer.push(function (dl) {
            // push existing events from window[dataLayerName] to adobeDataLayer
            for (var i = 0; i < window[dataLayerName].length; i++) {
                dl.push(window[dataLayerName][i]);
            }

            // set the reference of the existing data layer object to the new one
            window[dataLayerName] = dl
        });
    } else {
        turbine.logger.warn('Could not use "' + dataLayerName + '" instead of "adobeDataLayer", because the object does not exist!');
    }
}

if(injectLibrary) {
	/* Check if the wrapper ACDL is already loaded or not- check a specific function (getState) - USE CASE : Launch in AEM - AEM already loading ACDL*/
	if ("undefined" === typeof window.adobeDataLayer.getState) {
		turbine.logger.log('Initializing adobeDataLayer as it wasn\'t found during the initialization.');
        "use strict";function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _createForOfIteratorHelper(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=_unsupportedIterableToArray(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,a=!0,i=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){i=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(i)throw o}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function a(i,u,c){function f(e,t){if(!u[e]){if(!i[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(s)return s(e,!0);var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}var o=u[e]={exports:{}};i[e][0].call(o.exports,function(t){return f(i[e][1][t]||t)},o,o.exports,a,i,u,c)}return u[e].exports}for(var s="function"==typeof require&&require,t=0;t<c.length;t++)f(c[t]);return f}({1:[function(t,wn,En){(function(On){(function(){function n(t,e){for(var n=-1,r=null==t?0:t.length,o=0,a=[];++n<r;){var i=t[n];e(i,n,t)&&(a[o++]=i)}return a}function a(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}function f(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}function b(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function o(t,e,n){var r=t.length;for(n+=-1;++n<r;)if(e(t[n],n,t))return n;return-1}function i(t){return t!=t}function t(e){return function(t){return e(t)}}function h(t){var n=-1,r=Array(t.size);return t.forEach(function(t,e){r[++n]=[e,t]}),r}function e(e){var n=Object;return function(t){return e(n(t))}}function v(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}function r(){}function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function s(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function d(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new s;++e<n;)this.add(t[e])}function g(t){this.size=(this.__data__=new c(t)).size}function l(t,e){var n=hn(t),r=!n&&bn(t),o=!n&&!r&&vn(t),a=!n&&!r&&!o&&_n(t);if(n=n||r||o||a){r=t.length;for(var i=String,u=-1,c=Array(r);++u<r;)c[u]=i(u);r=c}else r=[];var f;i=r.length;for(f in t)!e&&!be.call(t,f)||n&&("length"==f||o&&("offset"==f||"parent"==f)||a&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||Q(f,i))||r.push(f);return r}function _(t,e,n){(n===Mt||ft(t[e],n))&&(n!==Mt||e in t)||j(t,e,n)}function y(t,e,n){var r=t[e];be.call(t,e)&&ft(r,n)&&(n!==Mt||e in t)||j(t,e,n)}function p(t,e){for(var n=t.length;n--;)if(ft(t[n][0],e))return n;return-1}function j(t,e,n){"__proto__"==e&&xe?xe(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function m(n,r,o,t,e,a){var i,u=1&r,c=2&r,f=4&r;if(o&&(i=e?o(n,t,e,a):o(n)),i!==Mt)return i;if(!bt(n))return n;if(t=hn(n)){if(i=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&be.call(t,"index")&&(n.index=t.index,n.input=t.input),n}(n),!u)return U(n,i)}else{var s=nn(n),l="[object Function]"==s||"[object GeneratorFunction]"==s;if(vn(n))return M(n,u);if("[object Object]"==s||"[object Arguments]"==s||l&&!e){if(i=c||l?{}:Y(n),!u)return c?function(t,e){return P(t,en(t),e)}(n,function(t,e){return t&&P(e,St(e),t)}(i,n)):function(t,e){return P(t,tn(t),e)}(n,function(t,e){return t&&P(e,Lt(e),t)}(i,n))}else{if(!Kt[s])return e?n:{};i=function(t,e,n){var r=t.constructor;switch(e){case"[object ArrayBuffer]":return z(t);case"[object Boolean]":case"[object Date]":return new r(+t);case"[object DataView]":return e=n?z(t.buffer):t.buffer,new t.constructor(e,t.byteOffset,t.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return C(t,n);case"[object Map]":return new r;case"[object Number]":case"[object String]":return new r(t);case"[object RegExp]":return(e=new t.constructor(t.source,Ht.exec(t))).lastIndex=t.lastIndex,e;case"[object Set]":return new r;case"[object Symbol]":return qe?Object(qe.call(t)):{}}}(n,s,u)}}if(e=(a=a||new g).get(n))return e;if(a.set(n,i),gn(n))return n.forEach(function(t){i.add(m(t,r,o,t,n,a))}),i;if(dn(n))return n.forEach(function(t,e){i.set(e,m(t,r,o,e,n,a))}),i;c=f?c?B:H:c?St:Lt;var p=t?Mt:c(n);return function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););}(p||n,function(t,e){p&&(t=n[e=t]),y(i,e,m(t,r,o,e,n,a))}),i}function A(t,e){for(var n=0,r=(e=F(e,t)).length;null!=t&&n<r;)t=t[nt(e[n++])];return n&&n==r?t:Mt}function O(t,e,n){return e=e(t),hn(t)?e:f(e,n(t))}function w(t){if(null==t)t=t===Mt?"[object Undefined]":"[object Null]";else if(Te&&Te in Object(t)){var e=be.call(t,Te),n=t[Te];try{t[Te]=Mt;var r=!0}catch(t){}var o=ve.call(t);r&&(e?t[Te]=n:delete t[Te]),t=o}else t=ve.call(t);return t}function E(t,e){return null!=t&&be.call(t,e)}function L(t,e){return null!=t&&e in Object(t)}function S(t){return ht(t)&&"[object Arguments]"==w(t)}function T(t,e,n,r,o){if(t===e)e=!0;else if(null==t||null==e||!ht(t)&&!ht(e))e=t!=t&&e!=e;else t:{var a,i,u=hn(t),c=hn(e),f="[object Object]"==(a="[object Arguments]"==(a=u?"[object Array]":nn(t))?"[object Object]":a);c="[object Object]"==(i="[object Arguments]"==(i=c?"[object Array]":nn(e))?"[object Object]":i);if((i=a==i)&&vn(t)){if(!vn(e)){e=!1;break t}f=!(u=!0)}if(i&&!f)o=o||new g,e=u||_n(t)?V(t,e,n,r,T,o):function(t,e,n,r,o,a,i){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)break;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":if(t.byteLength!=e.byteLength||!a(new me(t),new me(e)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return ft(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var u=h;case"[object Set]":if(u=u||v,t.size!=e.size&&!(1&r))break;return(n=i.get(t))?n==e:(r|=2,i.set(t,e),e=V(u(t),u(e),r,o,a,i),i.delete(t),e);case"[object Symbol]":if(qe)return qe.call(t)==qe.call(e)}return!1}(t,e,a,n,r,T,o);else{if(!(1&n)&&(u=f&&be.call(t,"__wrapped__"),a=c&&be.call(e,"__wrapped__"),u||a)){e=T(t=u?t.value():t,e=a?e.value():e,n,r,o=o||new g);break t}if(i)e:if(o=o||new g,u=1&n,a=H(t),c=a.length,i=H(e).length,c==i||u){for(f=c;f--;){var s=a[f];if(!(u?s in e:be.call(e,s))){e=!1;break e}}if((i=o.get(t))&&o.get(e))e=i==e;else{i=!0,o.set(t,e),o.set(e,t);for(var l=u;++f<c;){var p=t[s=a[f]],y=e[s];if(r)var b=u?r(y,p,s,e,t,o):r(p,y,s,t,e,o);if(b===Mt?p!==y&&!T(p,y,n,r,o):!b){i=!1;break}l=l||"constructor"==s}i&&!l&&((n=t.constructor)!=(r=e.constructor)&&"constructor"in t&&"constructor"in e&&!("function"==typeof n&&n instanceof n&&"function"==typeof r&&r instanceof r)&&(i=!1)),o.delete(t),o.delete(e),e=i}}else e=!1;else e=!1}}return e}function x(t){return"function"==typeof t?t:null==t?It:"object"==_typeof(t)?hn(t)?function(n,r){return X(n)&&r==r&&!bt(r)?tt(nt(n),r):function(t){var e=wt(t,n);return e===Mt&&e===r?Et(t,n):T(r,e,3)}}(t[0],t[1]):function(e){var n=function(t){for(var e=Lt(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,o==o&&!bt(o)]}return e}(e);return 1==n.length&&n[0][2]?tt(n[0][0],n[0][1]):function(t){return t===e||function(t,e){var n=e.length,r=n;if(null==t)return!r;for(t=Object(t);n--;){if((o=e[n])[2]?o[1]!==t[o[0]]:!(o[0]in t))return!1}for(;++n<r;){var o,a=(o=e[n])[0],i=t[a],u=o[1];if(o[2]){if(i===Mt&&!(a in t))return!1}else if(o=new g,void 0!==Mt||!T(u,i,3,void 0,o))return!1}return!0}(t,n)}}(t):Nt(t)}function I(t){if(!Z(t))return Ne(t);var e,n=[];for(e in Object(t))be.call(t,e)&&"constructor"!=e&&n.push(e);return n}function k(s,l,p,y,b){s!==l&&Xe(l,function(t,e){if(bt(t)){var n=b=b||new g,r="__proto__"==e?Mt:s[e],o="__proto__"==e?Mt:l[e];if(f=n.get(o))_(s,e,f);else{var a=(f=y?y(r,o,e+"",s,l,n):Mt)===Mt;if(a){var i=hn(o),u=!i&&vn(o),c=!i&&!u&&_n(o),f=o;i||u||c?f=hn(r)?r:lt(r)?U(r):u?M(o,!(a=!1)):c?C(o,!(a=!1)):[]:vt(o)||bn(o)?bn(f=r)?f=At(r):(!bt(r)||p&&pt(r))&&(f=Y(o)):a=!1}a&&(n.set(o,f),k(f,o,p,y,n),n.delete(o)),_(s,e,f)}}else(n=y?y("__proto__"==e?Mt:s[e],t,e+"",s,l,b):Mt)===Mt&&(n=t),_(s,e,n)},St)}function N(t){if("string"==typeof t)return t;if(hn(t))return a(t,N)+"";if(gt(t))return Je?Je.call(t):"";var e=t+"";return"0"==e&&1/t==-zt?"-0":e}function D(t,e){var n;if((e=F(e,t)).length<2)n=t;else{var r=0,o=-1,a=-1,i=(n=e).length;for(r<0&&(r=i<-r?0:i+r),(o=i<o?i:o)<0&&(o+=i),i=o<r?0:o-r>>>0,r>>>=0,o=Array(i);++a<i;)o[a]=n[a+r];n=A(t,o)}null==(t=n)||delete t[nt(it(e))]}function F(t,e){return hn(t)?t:X(t,e)?[t]:ln(Ot(t))}function M(t,e){if(e)return t.slice();var n=t.length;n=Ae?Ae(n):new t.constructor(n);return t.copy(n),n}function z(t){var e=new t.constructor(t.byteLength);return new me(e).set(new me(t)),e}function C(t,e){return new t.constructor(e?z(t.buffer):t.buffer,t.byteOffset,t.length)}function U(t,e){var n=-1,r=t.length;for(e=e||Array(r);++n<r;)e[n]=t[n];return e}function P(t,e,n){var r=!n;n=n||{};for(var o=-1,a=e.length;++o<a;){var i=e[o],u=Mt;u===Mt&&(u=t[i]),r?j(n,i,u):y(n,i,u)}return n}function R(f){return function(t){return sn(et(t,void 0,It),t+"")}(function(t,e){var n,r=-1,o=e.length,a=1<o?e[o-1]:Mt,i=2<o?e[2]:Mt;a=3<f.length&&"function"==typeof a?(o--,a):Mt;if(n=i){n=e[0];var u=e[1];if(bt(i)){var c=_typeof(u);n=!!("number"==c?st(i)&&Q(u,i.length):"string"==c&&u in i)&&ft(i[u],n)}else n=!1}for(n&&(a=o<3?Mt:a,o=1),t=Object(t);++r<o;)(i=e[r])&&f(t,i,r,a);return t})}function $(t){return vt(t)?Mt:t}function V(t,e,n,r,o,a){var i=1&n,u=t.length;if(u!=(c=e.length)&&!(i&&u<c))return!1;if((c=a.get(t))&&a.get(e))return c==e;var c=-1,f=!0,s=2&n?new d:Mt;for(a.set(t,e),a.set(e,t);++c<u;){var l=t[c],p=e[c];if(r)var y=i?r(p,l,c,e,t,a):r(l,p,c,t,e,a);if(y!==Mt){if(y)continue;f=!1;break}if(s){if(!b(e,function(t,e){if(!s.has(e)&&(l===t||o(l,t,n,r,a)))return s.push(e)})){f=!1;break}}else if(l!==p&&!o(l,p,n,r,a)){f=!1;break}}return a.delete(t),a.delete(e),f}function H(t){return O(t,Lt,tn)}function B(t){return O(t,St,en)}function W(t,e){var n=(n=r.iteratee||kt)===kt?x:n;return arguments.length?n(t,e):n}function G(t,e){var n=t.__data__,r=_typeof(e);return("string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e)?n["string"==typeof e?"string":"hash"]:n.map}function q(t,e){var n=null==t?Mt:t[e];return!bt(n)||he&&he in n||!(pt(n)?ge:Gt).test(rt(n))?Mt:n}function J(t,e,n){for(var r=-1,o=(e=F(e,t)).length,a=!1;++r<o;){var i=nt(e[r]);if(!(a=null!=t&&n(t,i)))break;t=t[i]}return a||++r!=o?a:!!(o=null==t?0:t.length)&&yt(o)&&Q(i,o)&&(hn(t)||bn(t))}function Y(t){return"function"!=typeof t.constructor||Z(t)?{}:Ye(Oe(t))}function K(t){return hn(t)||bn(t)||!!(Se&&t&&t[Se])}function Q(t,e){var n=_typeof(t);return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&Jt.test(t))&&-1<t&&0==t%1&&t<e}function X(t,e){if(hn(t))return!1;var n=_typeof(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!gt(t))||Pt.test(t)||!Ut.test(t)||null!=e&&t in Object(e)}function Z(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||le)}function tt(e,n){return function(t){return null!=t&&t[e]===n&&(n!==Mt||e in Object(t))}}function et(o,a,i){return a=De(a===Mt?o.length-1:a,0),function(){for(var t=arguments,e=-1,n=De(t.length-a,0),r=Array(n);++e<n;)r[e]=t[a+e];for(e=-1,n=Array(a+1);++e<a;)n[e]=t[e];return n[a]=i(r),function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}(o,this,n)}}function nt(t){if("string"==typeof t||gt(t))return t;var e=t+"";return"0"==e&&1/t==-zt?"-0":e}function rt(t){if(null==t)return"";try{return ye.call(t)}catch(t){}return t+""}function ot(t,e,n){var r=null==t?0:t.length;return r?((n=null==n?0:jt(n))<0&&(n=De(r+n,0)),o(t,W(e,3),n)):-1}function at(t){return null!=t&&t.length?function t(e,n,r,o,a){var i=-1,u=e.length;for(r=r||K,a=a||[];++i<u;){var c=e[i];0<n&&r(c)?1<n?t(c,n-1,r,o,a):f(a,c):o||(a[a.length]=c)}return a}(t,1):[]}function it(t){var e=null==t?0:t.length;return e?t[e-1]:Mt}function ut(r,o){function a(){var t=arguments,e=o?o.apply(this,t):t[0],n=a.cache;return n.has(e)?n.get(e):(t=r.apply(this,t),a.cache=n.set(e,t)||n,t)}if("function"!=typeof r||null!=o&&"function"!=typeof o)throw new TypeError("Expected a function");return a.cache=new(ut.Cache||s),a}function ct(e){if("function"!=typeof e)throw new TypeError("Expected a function");return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function ft(t,e){return t===e||t!=t&&e!=e}function st(t){return null!=t&&yt(t.length)&&!pt(t)}function lt(t){return ht(t)&&st(t)}function pt(t){return!!bt(t)&&("[object Function]"==(t=w(t))||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t)}function yt(t){return"number"==typeof t&&-1<t&&0==t%1&&t<=9007199254740991}function bt(t){var e=_typeof(t);return null!=t&&("object"==e||"function"==e)}function ht(t){return null!=t&&"object"==_typeof(t)}function vt(t){return!(!ht(t)||"[object Object]"!=w(t))&&(null===(t=Oe(t))||"function"==typeof(t=be.call(t,"constructor")&&t.constructor)&&t instanceof t&&ye.call(t)==de)}function dt(t){return"string"==typeof t||!hn(t)&&ht(t)&&"[object String]"==w(t)}function gt(t){return"symbol"==_typeof(t)||ht(t)&&"[object Symbol]"==w(t)}function _t(t){return t?(t=mt(t))===zt||t===-zt?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}function jt(t){var e=(t=_t(t))%1;return t==t?e?t-e:t:0}function mt(t){if("number"==typeof t)return t;if(gt(t))return Ct;if(bt(t)&&(t=bt(t="function"==typeof t.valueOf?t.valueOf():t)?t+"":t),"string"!=typeof t)return 0===t?t:+t;t=t.replace($t,"");var e=Wt.test(t);return e||qt.test(t)?Xt(t.slice(2),e?2:8):Bt.test(t)?Ct:+t}function At(t){return P(t,St(t))}function Ot(t){return null==t?"":N(t)}function wt(t,e,n){return(t=null==t?Mt:A(t,e))===Mt?n:t}function Et(t,e){return null!=t&&J(t,e,L)}function Lt(t){return st(t)?l(t):I(t)}function St(t){if(st(t))t=l(t,!0);else if(bt(t)){var e,n=Z(t),r=[];for(e in t)("constructor"!=e||!n&&be.call(t,e))&&r.push(e);t=r}else{if(e=[],null!=t)for(n in Object(t))e.push(n);t=e}return t}function Tt(t){return null==t?[]:function(e,t){return a(t,function(t){return e[t]})}(t,Lt(t))}function xt(t){return function(){return t}}function It(t){return t}function kt(t){return x("function"==typeof t?t:m(t,1))}function Nt(t){return X(t)?function(e){return function(t){return null==t?Mt:t[e]}}(nt(t)):function(e){return function(t){return A(t,e)}}(t)}function Dt(){return[]}function Ft(){return!1}var Mt,zt=1/0,Ct=NaN,Ut=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Pt=/^\w*$/,Rt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$t=/^\s+|\s+$/g,Vt=/\\(\\)?/g,Ht=/\w*$/,Bt=/^[-+]0x[0-9a-f]+$/i,Wt=/^0b[01]+$/i,Gt=/^\[object .+?Constructor\]$/,qt=/^0o[0-7]+$/i,Jt=/^(?:0|[1-9]\d*)$/,Yt={};Yt["[object Float32Array]"]=Yt["[object Float64Array]"]=Yt["[object Int8Array]"]=Yt["[object Int16Array]"]=Yt["[object Int32Array]"]=Yt["[object Uint8Array]"]=Yt["[object Uint8ClampedArray]"]=Yt["[object Uint16Array]"]=Yt["[object Uint32Array]"]=!0,Yt["[object Arguments]"]=Yt["[object Array]"]=Yt["[object ArrayBuffer]"]=Yt["[object Boolean]"]=Yt["[object DataView]"]=Yt["[object Date]"]=Yt["[object Error]"]=Yt["[object Function]"]=Yt["[object Map]"]=Yt["[object Number]"]=Yt["[object Object]"]=Yt["[object RegExp]"]=Yt["[object Set]"]=Yt["[object String]"]=Yt["[object WeakMap]"]=!1;var Kt={};Kt["[object Arguments]"]=Kt["[object Array]"]=Kt["[object ArrayBuffer]"]=Kt["[object DataView]"]=Kt["[object Boolean]"]=Kt["[object Date]"]=Kt["[object Float32Array]"]=Kt["[object Float64Array]"]=Kt["[object Int8Array]"]=Kt["[object Int16Array]"]=Kt["[object Int32Array]"]=Kt["[object Map]"]=Kt["[object Number]"]=Kt["[object Object]"]=Kt["[object RegExp]"]=Kt["[object Set]"]=Kt["[object String]"]=Kt["[object Symbol]"]=Kt["[object Uint8Array]"]=Kt["[object Uint8ClampedArray]"]=Kt["[object Uint16Array]"]=Kt["[object Uint32Array]"]=!0,Kt["[object Error]"]=Kt["[object Function]"]=Kt["[object WeakMap]"]=!1;var Qt,Xt=parseInt,Zt="object"==_typeof(On)&&On&&On.Object===Object&&On,te="object"==("undefined"==typeof self?"undefined":_typeof(self))&&self&&self.Object===Object&&self,ee=Zt||te||Function("return this")(),ne="object"==_typeof(En)&&En&&!En.nodeType&&En,re=ne&&"object"==_typeof(wn)&&wn&&!wn.nodeType&&wn,oe=re&&re.exports===ne,ae=oe&&Zt.process;t:{try{Qt=ae&&ae.binding&&ae.binding("util");break t}catch(t){}Qt=void 0}var ie,ue=Qt&&Qt.isMap,ce=Qt&&Qt.isSet,fe=Qt&&Qt.isTypedArray,se=Array.prototype,le=Object.prototype,pe=ee["__core-js_shared__"],ye=Function.prototype.toString,be=le.hasOwnProperty,he=(ie=/[^.]+$/.exec(pe&&pe.keys&&pe.keys.IE_PROTO||""))?"Symbol(src)_1."+ie:"",ve=le.toString,de=ye.call(Object),ge=RegExp("^"+ye.call(be).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_e=oe?ee.Buffer:Mt,je=ee.Symbol,me=ee.Uint8Array,Ae=_e?_e.a:Mt,Oe=e(Object.getPrototypeOf),we=Object.create,Ee=le.propertyIsEnumerable,Le=se.splice,Se=je?je.isConcatSpreadable:Mt,Te=je?je.toStringTag:Mt,xe=function(){try{var t=q(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),Ie=Object.getOwnPropertySymbols,ke=_e?_e.isBuffer:Mt,Ne=e(Object.keys),De=Math.max,Fe=Date.now,Me=q(ee,"DataView"),ze=q(ee,"Map"),Ce=q(ee,"Promise"),Ue=q(ee,"Set"),Pe=q(ee,"WeakMap"),Re=q(Object,"create"),$e=rt(Me),Ve=rt(ze),He=rt(Ce),Be=rt(Ue),We=rt(Pe),Ge=je?je.prototype:Mt,qe=Ge?Ge.valueOf:Mt,Je=Ge?Ge.toString:Mt,Ye=function(t){return bt(t)?we?we(t):(Ke.prototype=t,t=new Ke,Ke.prototype=Mt,t):{}};function Ke(){}u.prototype.clear=function(){this.__data__=Re?Re(null):{},this.size=0},u.prototype.delete=function(t){return t=this.has(t)&&delete this.__data__[t],this.size-=t?1:0,t},u.prototype.get=function(t){var e=this.__data__;return Re?"__lodash_hash_undefined__"===(t=e[t])?Mt:t:be.call(e,t)?e[t]:Mt},u.prototype.has=function(t){var e=this.__data__;return Re?e[t]!==Mt:be.call(e,t)},u.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Re&&e===Mt?"__lodash_hash_undefined__":e,this},c.prototype.clear=function(){this.__data__=[],this.size=0},c.prototype.delete=function(t){var e=this.__data__;return!((t=p(e,t))<0||(t==e.length-1?e.pop():Le.call(e,t,1),--this.size,0))},c.prototype.get=function(t){var e=this.__data__;return(t=p(e,t))<0?Mt:e[t][1]},c.prototype.has=function(t){return-1<p(this.__data__,t)},c.prototype.set=function(t,e){var n=this.__data__,r=p(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},s.prototype.clear=function(){this.size=0,this.__data__={hash:new u,map:new(ze||c),string:new u}},s.prototype.delete=function(t){return t=G(this,t).delete(t),this.size-=t?1:0,t},s.prototype.get=function(t){return G(this,t).get(t)},s.prototype.has=function(t){return G(this,t).has(t)},s.prototype.set=function(t,e){var n=G(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},d.prototype.add=d.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},d.prototype.has=function(t){return this.__data__.has(t)},g.prototype.clear=function(){this.__data__=new c,this.size=0},g.prototype.delete=function(t){var e=this.__data__;return t=e.delete(t),this.size=e.size,t},g.prototype.get=function(t){return this.__data__.get(t)},g.prototype.has=function(t){return this.__data__.has(t)},g.prototype.set=function(t,e){var n=this.__data__;if(n instanceof c){var r=n.__data__;if(!ze||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new s(r)}return n.set(t,e),this.size=n.size,this};var Qe=function(t,e){if(null==t)return t;if(!st(t))return function(t,e){return t&&Xe(t,e,Lt)}(t,e);for(var n=t.length,r=-1,o=Object(t);++r<n&&!1!==e(o[r],r,o););return t},Xe=function(t,e,n){for(var r=-1,o=Object(t),a=(n=n(t)).length;a--;){var i=n[++r];if(!1===e(o[i],i,o))break}return t},Ze=xe?function(t,e){return xe(t,"toString",{configurable:!0,enumerable:!1,value:xt(e),writable:!0})}:It,tn=Ie?function(e){return null==e?[]:(e=Object(e),n(Ie(e),function(t){return Ee.call(e,t)}))}:Dt,en=Ie?function(t){for(var e=[];t;)f(e,tn(t)),t=Oe(t);return e}:Dt,nn=w;(Me&&"[object DataView]"!=nn(new Me(new ArrayBuffer(1)))||ze&&"[object Map]"!=nn(new ze)||Ce&&"[object Promise]"!=nn(Ce.resolve())||Ue&&"[object Set]"!=nn(new Ue)||Pe&&"[object WeakMap]"!=nn(new Pe))&&(nn=function(t){var e=w(t);if(t=(t="[object Object]"==e?t.constructor:Mt)?rt(t):"")switch(t){case $e:return"[object DataView]";case Ve:return"[object Map]";case He:return"[object Promise]";case Be:return"[object Set]";case We:return"[object WeakMap]"}return e});var rn,on,an,un,cn,fn,sn=(un=Ze,fn=cn=0,function(){var t=Fe(),e=16-(t-fn);if(fn=t,0<e){if(800<=++cn)return arguments[0]}else cn=0;return un.apply(Mt,arguments)}),ln=(an=(on=ut(on=function(t){var o=[];return 46===t.charCodeAt(0)&&o.push(""),t.replace(Rt,function(t,e,n,r){o.push(n?r.replace(Vt,"$1"):e||t)}),o},function(t){return 500===an.size&&an.clear(),t})).cache,on),pn=(rn=ot,function(t,e,n){var r=Object(t);if(!st(t)){var o=W(e,3);t=Lt(t),e=function(t){return o(r[t],t,r)}}return-1<(e=rn(t,e,n))?r[o?t[e]:e]:Mt});ut.Cache=s;var yn,bn=S(function(){return arguments}())?S:function(t){return ht(t)&&be.call(t,"callee")&&!Ee.call(t,"callee")},hn=Array.isArray,vn=ke||Ft,dn=ue?t(ue):function(t){return ht(t)&&"[object Map]"==nn(t)},gn=ce?t(ce):function(t){return ht(t)&&"[object Set]"==nn(t)},_n=fe?t(fe):function(t){return ht(t)&&yt(t.length)&&!!Yt[w(t)]},jn=R(function(t,e,n){k(t,e,n)}),mn=R(function(t,e,n,r){k(t,e,n,r)}),An=sn(et(yn=function(e,t){var n={};if(null==e)return n;var r=!1;t=a(t,function(t){return t=F(t,e),r=r||1<t.length,t}),P(e,B(e),n),r&&(n=m(n,7,$));for(var o=t.length;o--;)D(n,t[o]);return n},Mt,at),yn+"");r.constant=xt,r.flatten=at,r.iteratee=kt,r.keys=Lt,r.keysIn=St,r.memoize=ut,r.merge=jn,r.mergeWith=mn,r.negate=ct,r.omit=An,r.property=Nt,r.reject=function(t,e){return(hn(t)?n:function(t,r){var o=[];return Qe(t,function(t,e,n){r(t,e,n)&&o.push(t)}),o})(t,ct(W(e,3)))},r.toPlainObject=At,r.values=Tt,r.cloneDeep=function(t){return m(t,5)},r.cloneDeepWith=function(t,e){return m(t,5,e="function"==typeof e?e:Mt)},r.eq=ft,r.find=pn,r.findIndex=ot,r.get=wt,r.has=function(t,e){return null!=t&&J(t,e,E)},r.hasIn=Et,r.identity=It,r.includes=function(t,e,n,r){if(t=st(t)?t:Tt(t),n=n&&!r?jt(n):0,r=t.length,n<0&&(n=De(r+n,0)),dt(t))t=n<=r&&-1<t.indexOf(e,n);else{if(r=!!r){if(e==e)t:{for(n-=1,r=t.length;++n<r;)if(t[n]===e){t=n;break t}t=-1}else t=o(t,i,n);r=-1<t}t=r}return t},r.isArguments=bn,r.isArray=hn,r.isArrayLike=st,r.isArrayLikeObject=lt,r.isBuffer=vn,r.isEmpty=function(t){if(null==t)return!0;if(st(t)&&(hn(t)||"string"==typeof t||"function"==typeof t.splice||vn(t)||_n(t)||bn(t)))return!t.length;var e=nn(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(Z(t))return!I(t).length;for(var n in t)if(be.call(t,n))return!1;return!0},r.isEqual=function(t,e){return T(t,e)},r.isFunction=pt,r.isLength=yt,r.isMap=dn,r.isNull=function(t){return null===t},r.isObject=bt,r.isObjectLike=ht,r.isPlainObject=vt,r.isSet=gn,r.isString=dt,r.isSymbol=gt,r.isTypedArray=_n,r.last=it,r.stubArray=Dt,r.stubFalse=Ft,r.toFinite=_t,r.toInteger=jt,r.toNumber=mt,r.toString=Ot,r.VERSION="4.17.5",re&&((re.exports=r)._=r,ne._=r)}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(t,e,n){e.exports={itemType:{DATA:"data",FCTN:"fctn",EVENT:"event",LISTENER_ON:"listenerOn",LISTENER_OFF:"listenerOff"},dataLayerEvent:{CHANGE:"adobeDataLayer:change",EVENT:"adobeDataLayer:event"},listenerScope:{PAST:"past",FUTURE:"future",ALL:"all"}}},{}],3:[function(t,e,n){var r=t("../custom-lodash"),c=t("../version.json").version,l=r.cloneDeep,p=r.get,y=t("./item"),b=t("./listener"),h=t("./listenerManager"),v=t("./constants"),d=t("./utils/customMerge");e.exports=function(t){var f,e=t||{},n=[],r=[],o={},a={getState:function(){return o},getDataLayer:function(){return n}};function i(t){o=d(o,t.data)}function u(t){t.valid?{data:function(t){i(t),f.triggerListeners(t)},fctn:function(t){t.config.call(n,n)},event:function(t){t.data&&i(t),f.triggerListeners(t)},listenerOn:function(t){var e=b(t);switch(e.scope){case v.listenerScope.PAST:var n,r=_createForOfIteratorHelper(c(t));try{for(r.s();!(n=r.n()).done;){var o=n.value;f.triggerListener(e,o)}}catch(t){r.e(t)}finally{r.f()}break;case v.listenerScope.FUTURE:f.register(e);break;case v.listenerScope.ALL:if(f.register(e)){var a,i=_createForOfIteratorHelper(c(t));try{for(i.s();!(a=i.n()).done;){var u=a.value;f.triggerListener(e,u)}}catch(t){i.e(t)}finally{i.f()}}}},listenerOff:function(t){f.unregister(b(t))}}[t.type](t):s(t);function c(t){return 0===n.length||t.index>n.length-1?[]:n.slice(0,t.index).map(function(t){return y(t)})}}function s(t){var e="The following item cannot be handled by the data layer because it does not have a valid format: "+JSON.stringify(t.config);console.error(e)}return function(){Array.isArray(e.dataLayer)||(e.dataLayer=[]);r=e.dataLayer.splice(0,e.dataLayer.length),(n=e.dataLayer).version=c,o={},f=h(a)}(),n.push=function(t){var n=arguments,r=arguments;if(Object.keys(n).forEach(function(t){var e=y(n[t]);switch(e.valid||(s(e),delete r[t]),e.type){case v.itemType.DATA:case v.itemType.EVENT:u(e);break;case v.itemType.FCTN:delete r[t],u(e);break;case v.itemType.LISTENER_ON:case v.itemType.LISTENER_OFF:delete r[t]}}),r[0])return Array.prototype.push.apply(this,r)},n.getState=function(t){return t?p(l(o),t):l(o)},n.addEventListener=function(t,e,n){u(y({on:t,handler:e,scope:n&&n.scope,path:n&&n.path}))},n.removeEventListener=function(t,e){u(y({off:t,handler:e}))},function(){for(var t=0;t<r.length;t++)n.push(r[t])}(),a}},{"../custom-lodash":1,"../version.json":14,"./constants":2,"./item":5,"./listener":7,"./listenerManager":8,"./utils/customMerge":10}],4:[function(t,e,n){var r={Manager:t("./dataLayerManager")};window.adobeDataLayer=window.adobeDataLayer||[],window.adobeDataLayer.version?console.warn("Adobe Client Data Layer v".concat(window.adobeDataLayer.version," has already been imported/initialized on this page. You may be erroneously loading it a second time.")):r.Manager({dataLayer:window.adobeDataLayer}),e.exports=r},{"./dataLayerManager":3}],5:[function(t,e,n){var r=t("../custom-lodash"),i=r.isPlainObject,u=r.isEmpty,c=r.omit,f=r.find,s=t("./utils/dataMatchesContraints"),l=t("./itemConstraints"),p=t("./constants");e.exports=function(t,e){var n=t,r=e,o=f(Object.keys(l),function(t){return s(n,l[t])})||"function"==typeof n&&p.itemType.FCTN||i(n)&&p.itemType.DATA,a=function(){var t=c(n,Object.keys(l.event));if(!u(t))return t}();return{config:n,type:o,data:a,valid:!!o,index:r}}},{"../custom-lodash":1,"./constants":2,"./itemConstraints":6,"./utils/dataMatchesContraints":11}],6:[function(t,e,n){e.exports={event:{event:{type:"string"},eventInfo:{optional:!0}},listenerOn:{on:{type:"string"},handler:{type:"function"},scope:{type:"string",values:["past","future","all"],optional:!0},path:{type:"string",optional:!0}},listenerOff:{off:{type:"string"},handler:{type:"function",optional:!0},scope:{type:"string",values:["past","future","all"],optional:!0},path:{type:"string",optional:!0}}}},{}],7:[function(t,e,n){var r=t("./constants");e.exports=function(t){return{event:t.config.on||t.config.off,handler:t.config.handler||null,scope:t.config.scope||t.config.on&&r.listenerScope.ALL||null,path:t.config.path||null}}},{"./constants":2}],8:[function(t,e,n){var u=t("../custom-lodash").cloneDeep,c=t("./constants"),f=t("./utils/listenerMatch"),s=t("./utils/indexOfListener");e.exports=function(t){var o={},r=t,a=s.bind(null,o);function i(t,e){if(f(t,e)){var n=[u(e.config)];t.handler.apply(r.getDataLayer(),n)}}return{register:function(t){var e=t.event;return Object.prototype.hasOwnProperty.call(o,e)?-1===a(t)&&(o[t.event].push(t),!0):(o[t.event]=[t],!0)},unregister:function(t){var e=t.event;if(Object.prototype.hasOwnProperty.call(o,e))if(t.handler||t.scope||t.path){var n=a(t);-1<n&&o[e].splice(n,1)}else o[e]=[]},triggerListeners:function(r){(function(t){var e=[];switch(t.type){case c.itemType.DATA:e.push(c.dataLayerEvent.CHANGE);break;case c.itemType.EVENT:e.push(c.dataLayerEvent.EVENT),t.data&&e.push(c.dataLayerEvent.CHANGE),t.config.event!==c.dataLayerEvent.CHANGE&&e.push(t.config.event)}return e})(r).forEach(function(t){if(Object.prototype.hasOwnProperty.call(o,t)){var e,n=_createForOfIteratorHelper(o[t]);try{for(n.s();!(e=n.n()).done;){i(e.value,r)}}catch(t){n.e(t)}finally{n.f()}}})},triggerListener:function(t,e){i(t,e)}}}},{"../custom-lodash":1,"./constants":2,"./utils/indexOfListener":12,"./utils/listenerMatch":13}],9:[function(t,e,n){var r=t("../../custom-lodash"),o=r.has,a=r.get;e.exports=function(t,e){for(var n=e.substring(0,e.lastIndexOf("."));n;){if(o(t,n)){var r=a(t,n);if(null==r)return!0}n=n.substring(0,n.lastIndexOf("."))}return!1}},{"../../custom-lodash":1}],10:[function(t,e,n){var r=t("../../custom-lodash"),s=r.cloneDeepWith,l=r.isObject,p=r.isArray,y=r.reject,o=r.mergeWith,a=r.isNull;e.exports=function(t,e){return o(t,e,function(t,e,n,r){if(null==e)return null}),t=function(t,e){return s(t,function(f){return function e(t,n,r,o){if(l(t)){if(p(t))return y(t,f).map(function(t){return s(t,e)});for(var a={},i=0,u=Object.keys(t);i<u.length;i++){var c=u[i];f(t[c])||(a[c]=s(t[c],e))}return a}}}(1<arguments.length&&void 0!==e?e:function(t){return!t}))}(t,a)}},{"../../custom-lodash":1}],11:[function(t,e,n){var r=t("../../custom-lodash"),o=r.find,s=r.includes;e.exports=function(c,f){return void 0===o(Object.keys(f),function(t){var e=f[t].type,n=t&&f[t].values,r=!f[t].optional,o=c[t],a=_typeof(o),i=e&&a!==e,u=n&&!s(n,o);return r?!o||i||u:o&&(i||u)})}},{"../../custom-lodash":1}],12:[function(t,e,n){var c=t("../../custom-lodash").isEqual;e.exports=function(t,e){var n=e.event;if(Object.prototype.hasOwnProperty.call(t,n)){var r,o=_createForOfIteratorHelper(t[n].entries());try{for(o.s();!(r=o.n()).done;){var a=_slicedToArray(r.value,2),i=a[0],u=a[1];if(c(u.handler,e.handler))return i}}catch(t){o.e(t)}finally{o.f()}}return-1}},{"../../custom-lodash":1}],13:[function(t,e,n){var r=t("../../custom-lodash").has,a=t("../constants"),o=t("./ancestorRemoved");function i(t,e){return!e.data||!t.path||(r(e.data,t.path)||o(e.data,t.path))}e.exports=function(t,e){var n=t.event,r=e.config,o=!1;return e.type===a.itemType.DATA?n===a.dataLayerEvent.CHANGE&&(o=i(t,e)):e.type===a.itemType.EVENT&&(n!==a.dataLayerEvent.EVENT&&n!==r.event||(o=i(t,e)),e.data&&n===a.dataLayerEvent.CHANGE&&(o=i(t,e))),o}},{"../../custom-lodash":1,"../constants":2,"./ancestorRemoved":9}],14:[function(t,e,n){e.exports={version:"2.0.2"}},{}]},{},[4]);
	}
}
          }

        },
        "gcoe-adobe-client-data-layer/src/lib/util/getDataLayer.js": {
          "script": function(module, exports, require, turbine) {
'use strict';

/**
 * Returns the Adobe Client Data Layer, based on the extension configuration.
 * @returns {Object|undefined}
 */
module.exports = function () {
    var extensionSettings = turbine.getExtensionSettings();
    return window[extensionSettings.dataLayerName];
};
          }

        }
      }
    },
    "core": {
      "displayName": "Core",
      "hostedLibFilesBaseUrl": "https://agastyareddy777.github.io/aglearning/adls-geosite-dtm-30AUG16/selfthostanalytics.js/01296dd00565/ebf8bf72639b/a051b6ddc9a9/hostedLibFiles/EPd22815afd48447aa955be6a3a012e3b5/",
      "modules": {
        "core/src/lib/dataElements/queryStringParameter.js": {
          "name": "query-string-parameter",
          "displayName": "Query String Parameter",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var window = require('@adobe/reactor-window');
var queryString = require('@adobe/reactor-query-string');

/**
 * The query string parameter data element.
 * @param {Object} settings The data element settings object.
 * @param {string} settings.name The query string parameter name.
 * @param {string} [settings.caseInsensitive] Whether casing should be ignored.
 * @returns {string}
 */
module.exports = function (settings) {
  var queryParams = queryString.parse(window.location.search);

  if (settings.caseInsensitive) {
    var lowerCaseName = settings.name.toLowerCase();
    var keys = Object.keys(queryParams);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (key.toLowerCase() === lowerCaseName) {
        return queryParams[key];
      }
    }
  } else {
    return queryParams[settings.name];
  }
};

          }

        },
        "core/src/lib/dataElements/customCode.js": {
          "name": "custom-code",
          "displayName": "Custom Code",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

/**
 * The custom data element.
 * @param {Object} settings The data element settings object.
 * @param {string} settings.source The function that should be called which will return a value.
 * @param {string} event The event (if any) that triggered the evaluation of the data element.
 * @returns {string}
 */
module.exports = function (settings, event) {
  return settings.source(event);
};

          }

        },
        "core/src/lib/dataElements/javascriptVariable.js": {
          "name": "javascript-variable",
          "displayName": "JavaScript Variable",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';
var getObjectProperty = require('../helpers/getObjectProperty.js');

/**
 * The variable data element.
 * @param {Object} settings The data element settings object.
 * @param {string} settings.path The global path to the variable holding the data element value.
 * @returns {string}
 */
module.exports = function (settings) {
  return getObjectProperty(window, settings.path);
};

          }

        },
        "core/src/lib/dataElements/pageInfo.js": {
          "name": "page-info",
          "displayName": "Page Info",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var document = require('@adobe/reactor-document');

/**
 * The page info data element.
 * @param {Object} settings The data element settings object.
 * @param {string} settings.attribute The attribute that should be returned.
 * @returns {string}
 */
module.exports = function (settings) {
  switch (settings.attribute) {
    case 'url':
      return document.location.href;
    case 'hostname':
      return document.location.hostname;
    case 'pathname':
      return document.location.pathname;
    case 'protocol':
      return document.location.protocol;
    case 'referrer':
      return document.referrer;
    case 'title':
      return document.title;
  }
};

          }

        },
        "core/src/lib/events/domReady.js": {
          "name": "dom-ready",
          "displayName": "DOM Ready",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var pageLifecycleEvents = require('./helpers/pageLifecycleEvents');

/**
 * DOM ready event. This event occurs as soon as HTML document has been completely loaded and
 * parsed, without waiting for stylesheets, images, and subframes to finish loading.
 * @param {Object} settings The event settings object.
 * @param {ruleTrigger} trigger The trigger callback.
 */
module.exports = function (settings, trigger) {
  pageLifecycleEvents.registerDomReadyTrigger(trigger);
};

          }

        },
        "core/src/lib/conditions/queryStringParameter.js": {
          "name": "query-string-parameter",
          "displayName": "Query String Parameter",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var window = require('@adobe/reactor-window');
var queryString = require('@adobe/reactor-query-string');
var textMatch = require('../helpers/textMatch');

/**
 * Query string parameter condition. Determines if a query string parameter exists with a name and
 * value that matches the acceptable name and value.
 * @param {Object} settings Condition settings.
 * @param {string} settings.name The name of the query string parameter.
 * @param {string} settings.value An acceptable query string parameter value.
 * @param {boolean} [settings.valueIsRegex=false] Whether <code>settings.value</code> is intended to
 * be a regular expression.
 * @returns {boolean}
 */
module.exports = function (settings) {
  var acceptableValue = settings.valueIsRegex
    ? new RegExp(settings.value, 'i')
    : settings.value;
  var queryParams = queryString.parse(window.location.search);
  return textMatch(queryParams[settings.name], acceptableValue);
};

          }

        },
        "core/src/lib/conditions/pathAndQuerystring.js": {
          "name": "path-and-querystring",
          "displayName": "Path And Query String",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var document = require('@adobe/reactor-document');
var textMatch = require('../helpers/textMatch');

/**
 * Path and query string condition. Provided for legacy reasons. Determines if the actual path +
 * query string matches at least one acceptable path + query string.
 * @param {Object} settings Condition settings.
 * @param {Object[]} settings.paths Acceptable paths.
 * @param {string} settings.paths[].value An acceptable path value.
 * @param {boolean} [settings.paths[].valueIsRegex=false] Whether <code>value</code> on the object
 * instance is intended to be a regular expression.
 * @returns {boolean}
 */
module.exports = function (settings) {
  var path = document.location.pathname + document.location.search;
  return settings.paths.some(function (acceptablePath) {
    var acceptableValue = acceptablePath.valueIsRegex
      ? new RegExp(acceptablePath.value, 'i')
      : acceptablePath.value;
    return textMatch(path, acceptableValue);
  });
};

          }

        },
        "core/src/lib/helpers/getObjectProperty.js": {
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

/**
 * Returns the deep property value of an object.
 * @param obj The object where the property will be searched.
 * @param property The property name to be returned. It can contain dots. (eg. prop.subprop1)
 * @returns {*}
 */
module.exports = function (obj, property) {
  var propertyChain = property.split('.');
  var currentValue = obj;

  for (var i = 0, len = propertyChain.length; i < len; i++) {
    if (currentValue == null) {
      return undefined;
    }

    currentValue = currentValue[propertyChain[i]];
  }

  return currentValue;
};

          }

        },
        "core/src/lib/events/helpers/pageLifecycleEvents.js": {
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * (c) 2018 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

// We need to be able to fire the rules in a specific order, no matter if the library is loaded
// sync or async. The rules are fired in the following order:
// Library loaded rules -> Page bottom rules -> Dom Ready rules -> Window load rules.

var window = require('@adobe/reactor-window');
var document = require('@adobe/reactor-document');

var isIE10 = window.navigator.appVersion.indexOf('MSIE 10') !== -1;
var WINDOW_LOADED = 'WINDOW_LOADED';
var DOM_READY = 'DOM_READY';
var PAGE_BOTTOM = 'PAGE_BOTTOM';

var lifecycleEventsOrder = [PAGE_BOTTOM, DOM_READY, WINDOW_LOADED];

var createSyntheticEvent = function (element, nativeEvent) {
  return {
    element: element,
    target: element,
    nativeEvent: nativeEvent
  };
};

var registry = {};
lifecycleEventsOrder.forEach(function (event) {
  registry[event] = [];
});

var processRegistry = function (lifecycleEvent, nativeEvent) {
  lifecycleEventsOrder
    .slice(0, getLifecycleEventIndex(lifecycleEvent) + 1)
    .forEach(function (lifecycleEvent) {
      processTriggers(nativeEvent, lifecycleEvent);
    });
};

var detectLifecycleEvent = function () {
  if (document.readyState === 'complete') {
    return WINDOW_LOADED;
  } else if (document.readyState === 'interactive') {
    return !isIE10 ? DOM_READY : null;
  }
};

var getLifecycleEventIndex = function (event) {
  return lifecycleEventsOrder.indexOf(event);
};

var processTriggers = function (nativeEvent, lifecycleEvent) {
  registry[lifecycleEvent].forEach(function (triggerData) {
    processTrigger(nativeEvent, triggerData);
  });
  registry[lifecycleEvent] = [];
};

var processTrigger = function (nativeEvent, triggerData) {
  var trigger = triggerData.trigger;
  var syntheticEventFn = triggerData.syntheticEventFn;

  trigger(syntheticEventFn ? syntheticEventFn(nativeEvent) : null);
};

window._satellite = window._satellite || {};
window._satellite.pageBottom = processRegistry.bind(null, PAGE_BOTTOM);

document.addEventListener(
  'DOMContentLoaded',
  processRegistry.bind(null, DOM_READY),
  true
);
window.addEventListener(
  'load',
  processRegistry.bind(null, WINDOW_LOADED),
  true
);

// Depending on the way the Launch library was loaded, none of the registered listeners that
// execute `processRegistry` may fire . We need to execute the `processRegistry` method at
// least once. If this timeout fires before any of the registered listeners, we auto-detect the
// current lifecycle event and fire all the registered triggers in order. We don't care if the
// `processRegistry` is called multiple times for the same lifecycle event. We fire the registered
// triggers for a lifecycle event only once. We used a `setTimeout` here to make sure all the rules
// using Library Loaded are registered and executed synchronously and before rules using any of the
// other lifecycle event types.
window.setTimeout(function () {
  var lifecycleEvent = detectLifecycleEvent();
  if (lifecycleEvent) {
    processRegistry(lifecycleEvent);
  }
}, 0);

module.exports = {
  registerLibraryLoadedTrigger: function (trigger) {
    trigger();
  },
  registerPageBottomTrigger: function (trigger) {
    registry[PAGE_BOTTOM].push({
      trigger: trigger
    });
  },
  registerDomReadyTrigger: function (trigger) {
    registry[DOM_READY].push({
      trigger: trigger,
      syntheticEventFn: createSyntheticEvent.bind(null, document)
    });
  },
  registerWindowLoadedTrigger: function (trigger) {
    registry[WINDOW_LOADED].push({
      trigger: trigger,
      syntheticEventFn: createSyntheticEvent.bind(null, window)
    });
  }
};

          }

        },
        "core/src/lib/helpers/textMatch.js": {
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

/**
 * Performs a string match based on another string or a regex.
 * @param {string} str The string to be evaluate.
 * @param {string|RegExp} pattern The pattern to match against.
 * @returns {boolean} Whether the string matches the pattern.
 */
module.exports = function (str, pattern) {
  if (pattern == null) {
    throw new Error('Illegal Argument: Pattern is not present');
  }
  if (str == null) {
    return false;
  }
  if (typeof pattern === 'string') {
    return str === pattern;
  } else if (pattern instanceof RegExp) {
    return pattern.test(str);
  } else {
    return false;
  }
};

          }

        }
      }
    },
    "adobe-alloy": {
      "displayName": "Adobe Experience Platform Web SDK",
      "hostedLibFilesBaseUrl": "https://agastyareddy777.github.io/aglearning/adls-geosite-dtm-30AUG16/selfthostanalytics.js/01296dd00565/ebf8bf72639b/a051b6ddc9a9/hostedLibFiles/EP2c3bfb5401574cc79b745ce2d762a909/",
      "settings": {
        "instances": [
          {
            "name": "alloy",
            "edgeConfigId": "%data Stream ID%",
            "edgeConfigOverrides": {
              "com_adobe_analytics": {
                "reportSuites": [
                  "%RS%"
                ]
              }
            },
            "stagingEdgeConfigId": "%data Stream ID%",
            "developmentEdgeConfigId": "%data Stream ID%"
          }
        ]
      },
      "modules": {
        "adobe-alloy/dist/lib/dataElements/xdmObject/index.js": {
          "name": "xdm-object",
          "displayName": "XDM object",
          "script": function(module, exports, require, turbine) {
"use strict";

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
module.exports = function (settings) {
  return settings.data;
};
          }

        },
        "adobe-alloy/dist/lib/actions/sendEvent/index.js": {
          "name": "send-event",
          "displayName": "Send event",
          "script": function(module, exports, require, turbine) {
"use strict";

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var createSendEvent = require("./createSendEvent");

var instanceManager = require("../../instanceManager/index");

var sendEventCallbackStorage = require("../../sendEventCallbackStorage");

module.exports = createSendEvent({
  instanceManager: instanceManager,
  sendEventCallbackStorage: sendEventCallbackStorage
});
          }

        },
        "adobe-alloy/dist/lib/instanceManager/index.js": {
          "script": function(module, exports, require, turbine) {
"use strict";

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
// The Adobe Launch bundler doesn't handle requiring npm packages, but this is
// equivalent to require("@adobe/alloy"). We could run our own bundler to do this,
// but this works. If Alloy changed the location of its cjs entry point we would
// need to change the path here.
var _require = require("../alloy"),
    createInstance = _require.createInstance,
    createEventMergeId = _require.createEventMergeId;

var createInstanceManager = require("./createInstanceManager");

var injectWrapOnBeforeEventSend = require("./injectWrapOnBeforeEventSend");

var version = "2.19.0";
var wrapOnBeforeEventSend = injectWrapOnBeforeEventSend({
  version: version
});
module.exports = createInstanceManager({
  turbine: turbine,
  window: window,
  createInstance: createInstance,
  createEventMergeId: createEventMergeId,
  orgId: _satellite.company.orgId,
  wrapOnBeforeEventSend: wrapOnBeforeEventSend
});
          }

        },
        "adobe-alloy/dist/lib/actions/sendEvent/createSendEvent.js": {
          "script": function(module, exports, require, turbine) {
"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var clone = require("../../utils/clone");

module.exports = function (_ref) {
  var instanceManager = _ref.instanceManager,
      sendEventCallbackStorage = _ref.sendEventCallbackStorage;
  return function (settings) {
    var instanceName = settings.instanceName,
        otherSettings = _objectWithoutProperties(settings, ["instanceName"]);

    var instance = instanceManager.getInstance(instanceName);

    if (!instance) {
      throw new Error("Failed to send event for instance \"".concat(instanceName, "\". No matching instance was configured with this name."));
    } // If the customer modifies the xdm or data object (or anything nested in the object) after this action runs,
    // we want to make sure those modifications are not reflected in the data sent to the server. By cloning the
    // objects here, we ensure we use a snapshot that will remain unchanged during the time period between when
    // sendEvent is called and the network request is made.


    if (otherSettings.xdm) {
      otherSettings.xdm = clone(otherSettings.xdm);
    }

    if (otherSettings.data) {
      otherSettings.data = clone(otherSettings.data);
    }

    return instance("sendEvent", otherSettings).then(function (result) {
      sendEventCallbackStorage.triggerEvent(result);
    });
  };
};
          }

        },
        "adobe-alloy/dist/lib/sendEventCallbackStorage.js": {
          "script": function(module, exports, require, turbine) {
"use strict";

/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var sendEventCompleteTriggers = [];
module.exports = {
  add: function add(trigger) {
    sendEventCompleteTriggers.push(trigger);
  },
  triggerEvent: function triggerEvent(result) {
    sendEventCompleteTriggers.forEach(function (trigger) {
      trigger(result);
    });
  }
};
          }

        },
        "adobe-alloy/dist/lib/utils/clone.js": {
          "script": function(module, exports, require, turbine) {
"use strict";

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Clones a value by serializing then deserializing the value.
 * @param {*} value
 * @returns {any}
 */
module.exports = function (value) {
  return JSON.parse(JSON.stringify(value));
};
          }

        },
        "adobe-alloy/dist/lib/alloy.js": {
          "script": function(module, exports, require, turbine) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepAssign = exports.createInstance = exports.createEventMergeId = void 0;

var _reactorObjectAssign = _interopRequireDefault(require("@adobe/reactor-object-assign"));

var _reactorQueryString = _interopRequireDefault(require("@adobe/reactor-query-string"));

var _reactorLoadScript = _interopRequireDefault(require("@adobe/reactor-load-script"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var CHROME = "Chrome";
var EDGE = "Edge";
var EDGE_CHROMIUM = "EdgeChromium";
var FIREFOX = "Firefox";
var IE = "IE";
var SAFARI = "Safari";
var UNKNOWN = "Unknown";
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Determines whether an array includes a certain value.
 * @param {Array} arr Array to search.
 * @param {*} item The item for which to search.
 * @returns {boolean}
 */

var includes = function includes(arr, item) {
  return arr.indexOf(item) !== -1;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
// we don't know. We also assume "unknown" browsers support third-party cookies,
// though we don't really know that either. We're making best guesses.


var browsersSupportingThirdPartyCookie = [CHROME, EDGE, EDGE_CHROMIUM, IE, UNKNOWN];

var areThirdPartyCookiesSupportedByDefault = function areThirdPartyCookiesSupportedByDefault(browser) {
  return includes(browsersSupportingThirdPartyCookie, browser);
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var js_cookie = createCommonjsModule(function (module, exports) {
  (function (factory) {
    var registeredInModuleLoader;
    {
      module.exports = factory();
      registeredInModuleLoader = true;
    }

    if (!registeredInModuleLoader) {
      var OldCookies = window.Cookies;
      var api = window.Cookies = factory();

      api.noConflict = function () {
        window.Cookies = OldCookies;
        return api;
      };
    }
  })(function () {
    function extend() {
      var i = 0;
      var result = {};

      for (; i < arguments.length; i++) {
        var attributes = arguments[i];

        for (var key in attributes) {
          result[key] = attributes[key];
        }
      }

      return result;
    }

    function decode(s) {
      return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }

    function init(converter) {
      function api() {}

      function set(key, value, attributes) {
        if (typeof document === 'undefined') {
          return;
        }

        attributes = extend({
          path: '/'
        }, api.defaults, attributes);

        if (typeof attributes.expires === 'number') {
          attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
        } // We're using "expires" because "max-age" is not supported by IE


        attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

        try {
          var result = JSON.stringify(value);

          if (/^[\{\[]/.test(result)) {
            value = result;
          }
        } catch (e) {}

        value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        key = encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
        var stringifiedAttributes = '';

        for (var attributeName in attributes) {
          if (!attributes[attributeName]) {
            continue;
          }

          stringifiedAttributes += '; ' + attributeName;

          if (attributes[attributeName] === true) {
            continue;
          } // Considers RFC 6265 section 5.2:
          // ...
          // 3.  If the remaining unparsed-attributes contains a %x3B (";")
          //     character:
          // Consume the characters of the unparsed-attributes up to,
          // not including, the first %x3B (";") character.
          // ...


          stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
        }

        return document.cookie = key + '=' + value + stringifiedAttributes;
      }

      function get(key, json) {
        if (typeof document === 'undefined') {
          return;
        }

        var jar = {}; // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all.

        var cookies = document.cookie ? document.cookie.split('; ') : [];
        var i = 0;

        for (; i < cookies.length; i++) {
          var parts = cookies[i].split('=');
          var cookie = parts.slice(1).join('=');

          if (!json && cookie.charAt(0) === '"') {
            cookie = cookie.slice(1, -1);
          }

          try {
            var name = decode(parts[0]);
            cookie = (converter.read || converter)(cookie, name) || decode(cookie);

            if (json) {
              try {
                cookie = JSON.parse(cookie);
              } catch (e) {}
            }

            jar[name] = cookie;

            if (key === name) {
              break;
            }
          } catch (e) {}
        }

        return key ? jar[key] : jar;
      }

      api.set = set;

      api.get = function (key) {
        return get(key, false
        /* read as raw */
        );
      };

      api.getJSON = function (key) {
        return get(key, true
        /* read as json */
        );
      };

      api.remove = function (key, attributes) {
        set(key, '', extend(attributes, {
          expires: -1
        }));
      };

      api.defaults = {};
      api.withConverter = init;
      return api;
    }

    return init(function () {});
  });
});
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var cookieJar = {
  get: js_cookie.get,
  set: js_cookie.set,
  remove: js_cookie.remove,
  withConverter: js_cookie.withConverter
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns true when the value is null.
 * @param {*} value
 * @returns {boolean}
 */

var isNil = function isNil(value) {
  return value == null;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is an object.
 * @param {*} value
 * @returns {boolean}
 */


var isObject = function isObject(value) {
  return !isNil(value) && !Array.isArray(value) && _typeof(value) === "object";
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var deepAssignObject = function deepAssignObject(target, source) {
  Object.keys(source).forEach(function (key) {
    if (isObject(target[key]) && isObject(source[key])) {
      deepAssignObject(target[key], source[key]);
      return;
    }

    target[key] = source[key];
  });
};
/**
 * Recursively copy the values of all enumerable own properties from a source item to a target item if the both items are objects
 * @param {Object} target - a target object
 * @param {...Object} source - an array of source objects
 * @example
 * deepAssign({ a: 'a', b: 'b' }, { b: 'B', c: 'c' });
 * // { a: 'a', b: 'B', c: 'c' }
 */


var deepAssign = function deepAssign(target) {
  if (isNil(target)) {
    throw new TypeError('deepAssign "target" cannot be null or undefined');
  }

  var result = Object(target);

  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  sources.forEach(function (source) {
    return deepAssignObject(result, Object(source));
  });
  return result;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Creates a function that, when passed an object of updates, will merge
 * the updates onto the current value of a payload property.
 * @param {Object} content The base object to modify
 * @param {String } key The property to merge updates into. This
 * can be a dot-notation property path.
 * @returns {Function}
 */


exports.deepAssign = deepAssign;

var createMerger = function createMerger(content, key) {
  return function (updates) {
    var propertyPath = key.split(".");
    var hostObjectForUpdates = propertyPath.reduce(function (obj, propertyName) {
      obj[propertyName] = obj[propertyName] || {};
      return obj[propertyName];
    }, content);
    deepAssign(hostObjectForUpdates, updates);
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Allows callbacks to be registered and then later called. When the
 * callbacks are called, their responses are combined into a single promise.
 */


var createCallbackAggregator = function createCallbackAggregator() {
  var callbacks = [];
  return {
    add: function add(callback) {
      callbacks.push(callback);
    },
    call: function call() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      // While this utility doesn't necessarily need to be doing the
      // Promise.all, it's currently useful everywhere this is used and
      // reduces repetitive code. We can factor it out later if we want
      // to make this utility more "pure".
      return Promise.all(callbacks.map(function (callback) {
        return callback.apply(void 0, args);
      }));
    }
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createLoggingCookieJar = function createLoggingCookieJar(_ref) {
  var logger = _ref.logger,
      cookieJar = _ref.cookieJar;
  return _objectSpread(_objectSpread({}, cookieJar), {}, {
    set: function set(key, value, options) {
      logger.info("Setting cookie", _objectSpread({
        name: key,
        value: value
      }, options));
      cookieJar.set(key, value, options);
    }
  });
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Sequences tasks.
 */


var createTaskQueue = function createTaskQueue() {
  var queueLength = 0;
  var lastPromiseInQueue = Promise.resolve();
  return {
    /**
     * Add a task to the queue. If no task is currenty running,
     * the task will begin immediately.
     * @param {Function} task A function that will be called when
     * the task should be run. If the task it asynchronous, it should
     * return a promise.
     * @returns {Promise} A promise that will be resolved or rejected
     * with whatever value the task resolved or rejects its promise.
     */
    addTask: function addTask(task) {
      queueLength += 1;

      var lastPromiseFulfilledHandler = function lastPromiseFulfilledHandler() {
        return task()["finally"](function () {
          queueLength -= 1;
        });
      };

      lastPromiseInQueue = lastPromiseInQueue.then(lastPromiseFulfilledHandler, lastPromiseFulfilledHandler);
      return lastPromiseInQueue;
    },

    /**
     * How many tasks are in the queue. This includes the task
     * that's currently running.
     * @returns {number}
     */
    get length() {
      return queueLength;
    }

  };
};
/* eslint-disable */

/*
crc32 · JavaScript Function to Calculate CRC32 of a String
Description
  Below is a JavaScript function to calculate CRC32 of a string. 
  The string can be either ASCII or Unicode. 
  Unicode strings will be encoded in UTF-8. 
  The polynomial used in calculation is 0xedb88320. 
  This polynomial is used in Ethernet, Gzip, PNG, SATA and many other technologies.
*/


var crc32 = function () {
  var table = [];

  for (var _i = 0; _i < 256; _i++) {
    var c = _i;

    for (var j = 0; j < 8; j++) {
      c = c & 1 ? 0xedb88320 ^ c >>> 1 : c >>> 1;
    }

    table.push(c);
  }

  return function (str, crc) {
    str = unescape(encodeURIComponent(str));
    if (!crc) crc = 0;
    crc = crc ^ -1;

    for (var _i2 = 0; _i2 < str.length; _i2++) {
      var y = (crc ^ str.charCodeAt(_i2)) & 0xff;
      crc = crc >>> 8 ^ table[y];
    }

    crc = crc ^ -1;
    return crc >>> 0;
  };
}();
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * A simple utility for managing a promise's state outside of
 * the promise's "executor" (the function passed into the constructor).
 */


var defer = function defer() {
  var deferred = {};
  deferred.promise = new Promise(function (resolve, reject) {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Whether a string ends with the characters of a specified string
 * @param {String} str The string to search within.
 * @param {String} suffix The string to search for.
 * @returns {boolean}
 */


var endsWith = function endsWith(str, suffix) {
  return str.substr(-suffix.length) === suffix;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns the first item in the array that satisfies the provided testing function.
 * @param {Array} arr The array to search.
 * @param {Function} predicate Function that will be called for each item. Arguments
 * will be the item, the item index, then the array itself.
 * @returns {*}
 */


var find = function find(arr, predicate) {
  for (var _i3 = 0; _i3 < arr.length; _i3 += 1) {
    var item = arr[_i3];

    if (predicate(item, _i3, arr)) {
      return item;
    }
  }

  return undefined;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var appendNode = function appendNode(parent, node) {
  return parent.appendChild(node);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var populateElementProperties = function populateElementProperties(element, props) {
  Object.keys(props).forEach(function (key) {
    // The following is to support setting style properties to avoid CSP errors.
    if (key === "style" && isObject(props[key])) {
      var styleProps = props[key];
      Object.keys(styleProps).forEach(function (styleKey) {
        element.style[styleKey] = styleProps[styleKey];
      });
    } else {
      element[key] = props[key];
    }
  });
};

var createNode = function createNode(tag) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var children = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var doc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : document;
  var result = doc.createElement(tag);
  Object.keys(attrs).forEach(function (key) {
    // TODO: To highlight CSP problems consider throwing a descriptive error
    //       if nonce is available and key is style.
    result.setAttribute(key, attrs[key]);
  });
  populateElementProperties(result, props);
  children.forEach(function (child) {
    return appendNode(result, child);
  });
  return result;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var BODY = "BODY";
var IFRAME = "IFRAME";
var IMG = "IMG";
var DIV = "DIV";
var STYLE = "STYLE";
var SCRIPT = "SCRIPT";
var HEAD = "HEAD";
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Fires an image pixel from the current document's window.
 * @param {object} currentDocument
 * @param {string} src
 * @returns {Promise}
 */

var fireImageInDocument = function fireImageInDocument(_ref2) {
  var src = _ref2.src,
      _ref2$currentDocument = _ref2.currentDocument,
      currentDocument = _ref2$currentDocument === void 0 ? document : _ref2$currentDocument;
  return new Promise(function (resolve, reject) {
    var attrs = {
      src: src
    };
    var props = {
      onload: resolve,
      onerror: reject,
      onabort: reject
    };
    createNode(IMG, attrs, props, [], currentDocument);
  });
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is a function.
 * @param {*} value
 * @returns {boolean}
 */


var isFunction = function isFunction(value) {
  return typeof value === "function";
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is a non-empty array.
 * @param {*} value
 * @returns {boolean}
 */


var isNonEmptyArray = function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var toArray = function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  if (value == null) {
    return [];
  }

  return [].slice.call(value);
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var SIBLING_PATTERN = /^\s*>/;

var querySelectorAll = function querySelectorAll(context, selector) {
  if (!SIBLING_PATTERN.test(selector)) {
    return toArray(context.querySelectorAll(selector));
  }

  var tag = "alloy-".concat(Date.now()); // We could use a :scope selector here, but we want to be IE compliant
  // so we add a dummy css class to be able to select the children

  try {
    context.classList.add(tag);
    return toArray(context.querySelectorAll(".".concat(tag, " ").concat(selector)));
  } finally {
    context.classList.remove(tag);
  }
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Whether a string starts with the characters of a specified string
 * @param {String} str The string to search within.
 * @param {String} prefix The string to search for.
 * @returns {boolean}
 */


var startsWith = function startsWith(str, prefix) {
  return str.substr(0, prefix.length) === prefix;
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var SHADOW_SEPARATOR = ":shadow";
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var splitWithShadow = function splitWithShadow(selector) {
  return selector.split(SHADOW_SEPARATOR);
};

var transformPrefix = function transformPrefix(parent, selector) {
  var result = selector.trim();
  var hasChildCombinatorPrefix = startsWith(result, ">");

  if (!hasChildCombinatorPrefix) {
    return result;
  } // IE doesn't support :scope


  if (window.document.documentMode) {
    return result.substring(1).trim();
  }

  var prefix = parent instanceof Element || parent instanceof HTMLDocument ? ":scope" : ":host"; // see https://bugs.webkit.org/show_bug.cgi?id=233380

  return "".concat(prefix, " ").concat(result);
};

var selectNodesWithShadow = function selectNodesWithShadow(context, selector) {
  // Shadow DOM should be supported
  if (!window.document.documentElement.attachShadow) {
    return querySelectorAll(context, selector.replace(SHADOW_SEPARATOR, ""));
  }

  var parts = splitWithShadow(selector);

  if (parts.length < 2) {
    return querySelectorAll(context, selector);
  } // split the selector into parts separated by :shadow pseudo-selectors
  // find each subselector element based on the previously selected node's shadowRoot


  var parent = context;

  for (var _i4 = 0; _i4 < parts.length; _i4 += 1) {
    var part = transformPrefix(parent, parts[_i4]);
    var partNode = querySelectorAll(parent, part);

    if (partNode.length === 0 || !partNode[0] || !partNode[0].shadowRoot) {
      return partNode;
    }

    parent = partNode[0].shadowRoot;
  }

  return undefined;
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var isShadowSelector = function isShadowSelector(str) {
  return str.indexOf(SHADOW_SEPARATOR) !== -1;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns an array of matched DOM nodes.
 * @param {String} selector
 * @param {Node} [context=document] defaults to document
 * @returns {Array} an array of DOM nodes
 */


var selectNodes = function selectNodes(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

  if (!isShadowSelector(selector)) {
    return querySelectorAll(context, selector);
  }

  return selectNodesWithShadow(context, selector);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var MUTATION_OBSERVER = "MutationObserver";
var RAF = "requestAnimationFrame";
var MUTATION_OBSERVER_CONFIG = {
  childList: true,
  subtree: true
};
var VISIBILITY_STATE = "visibilityState";
var VISIBLE = "visible";
var DELAY = 100;
var MAX_POLLING_TIMEOUT = 5000;

var createError = function createError(selector) {
  return new Error("Could not find: ".concat(selector));
};

var createPromise = function createPromise(executor) {
  return new Promise(executor);
};

var canUseMutationObserver = function canUseMutationObserver(win) {
  return isFunction(win[MUTATION_OBSERVER]);
};

var awaitUsingMutationObserver = function awaitUsingMutationObserver(win, doc, selector, timeout, selectFunc) {
  return createPromise(function (resolve, reject) {
    var mutationObserver = new win[MUTATION_OBSERVER](function () {
      var nodes = selectFunc(selector);

      if (isNonEmptyArray(nodes)) {
        mutationObserver.disconnect();
        resolve(nodes);
      }
    });
    setTimeout(function () {
      mutationObserver.disconnect();
      reject(createError(selector));
    }, timeout);
    mutationObserver.observe(doc, MUTATION_OBSERVER_CONFIG);
  });
};

var canUseRequestAnimationFrame = function canUseRequestAnimationFrame(doc) {
  return doc[VISIBILITY_STATE] === VISIBLE;
};

var awaitUsingRequestAnimation = function awaitUsingRequestAnimation(win, selector, timeout, selectFunc) {
  return createPromise(function (resolve, reject) {
    var execute = function execute() {
      var nodes = selectFunc(selector);

      if (isNonEmptyArray(nodes)) {
        resolve(nodes);
        return;
      }

      win[RAF](execute);
    };

    execute();
    setTimeout(function () {
      reject(createError(selector));
    }, timeout);
  });
};

var awaitUsingTimer = function awaitUsingTimer(selector, timeout, selectFunc) {
  return createPromise(function (resolve, reject) {
    var execute = function execute() {
      var nodes = selectFunc(selector);

      if (isNonEmptyArray(nodes)) {
        resolve(nodes);
        return;
      }

      setTimeout(execute, DELAY);
    };

    execute();
    setTimeout(function () {
      reject(createError(selector));
    }, timeout);
  });
};

var awaitSelector = function awaitSelector(selector) {
  var selectFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : selectNodes;
  var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MAX_POLLING_TIMEOUT;
  var win = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : window;
  var doc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : document;
  var nodes = selectFunc(selector);

  if (isNonEmptyArray(nodes)) {
    return Promise.resolve(nodes);
  }

  if (canUseMutationObserver(win)) {
    return awaitUsingMutationObserver(win, doc, selector, timeout, selectFunc);
  }

  if (canUseRequestAnimationFrame(doc)) {
    return awaitUsingRequestAnimation(win, selector, timeout, selectFunc);
  }

  return awaitUsingTimer(selector, timeout, selectFunc);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns true if element matches the selector.
 * @param {String} selector
 * @param {Node} [element]
 * @returns {Boolean}
 */


var matchesSelector = function matchesSelector(selector, element) {
  if (element.matches) {
    return element.matches(selector);
  } // Making IE 11 happy


  return element.msMatchesSelector(selector);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var removeNode = function removeNode(node) {
  var parent = node.parentNode;

  if (parent) {
    return parent.removeChild(node);
  }

  return null;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var IFRAME_ATTRS = {
  name: "Adobe Alloy"
};
var IFRAME_PROPS = {
  style: {
    display: "none",
    width: 0,
    height: 0
  }
};

var injectFireReferrerHideableImage = function injectFireReferrerHideableImage() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$appendNode = _ref3.appendNode,
      appendNode$1 = _ref3$appendNode === void 0 ? appendNode : _ref3$appendNode,
      _ref3$awaitSelector = _ref3.awaitSelector,
      awaitSelector$1 = _ref3$awaitSelector === void 0 ? awaitSelector : _ref3$awaitSelector,
      _ref3$createNode = _ref3.createNode,
      createNode$1 = _ref3$createNode === void 0 ? createNode : _ref3$createNode,
      _ref3$fireImage = _ref3.fireImage,
      fireImage = _ref3$fireImage === void 0 ? fireImageInDocument : _ref3$fireImage;

  var fireOnPage = fireImage;
  var hiddenIframe;

  var createIframe = function createIframe() {
    return awaitSelector$1(BODY).then(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 1),
          body = _ref5[0];

      if (hiddenIframe) {
        return hiddenIframe;
      }

      hiddenIframe = createNode$1(IFRAME, IFRAME_ATTRS, IFRAME_PROPS);
      return appendNode$1(body, hiddenIframe);
    });
  };

  var fireInIframe = function fireInIframe(_ref6) {
    var src = _ref6.src;
    return createIframe().then(function (iframe) {
      var currentDocument = iframe.contentWindow.document;
      return fireImage({
        src: src,
        currentDocument: currentDocument
      });
    });
  };

  return function (request) {
    var hideReferrer = request.hideReferrer,
        url = request.url;
    return hideReferrer ? fireInIframe({
      src: url
    }) : fireOnPage({
      src: url
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is an empty object.
 * @param {*} value
 * @returns {boolean}
 */


var isEmptyObject = function isEmptyObject(value) {
  return isObject(value) && Object.keys(value).length === 0;
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Given an object and a function that takes a value and returns a predicate, filter out
 * all non-object deeply nested values that do not pass the predicate.
 *
 * Example: filterObject({ a: 2, b: { c: 6 } }, (val) => val > 5) returns { b { c: 6 } }
 *
 * @param {*} obj
 * @param {* => boolean} predicate a function that takes a value and return a boolean,
 * representing if it should be included in the result object or not.
 * @returns A copy of the original object with the values that fail the predicate, filtered out.
 */


var filterObject = function filterObject(obj, predicate) {
  if (isNil(obj) || !isObject(obj)) {
    return obj;
  }

  return Object.keys(obj).reduce(function (result, key) {
    var value = obj[key];

    if (isObject(value)) {
      // value is object, go deeper
      var filteredValue = filterObject(value, predicate);

      if (isEmptyObject(filteredValue)) {
        return result;
      }

      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, filteredValue));
    } // value is not an object, test predicate


    if (predicate(value)) {
      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, value));
    }

    return result;
  }, {});
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var flatMap = function flatMap(array, mapFunction) {
  return Array.prototype.concat.apply([], array.map(mapFunction));
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var baseNamespace = "com.adobe.alloy.";
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns the last N number of items from an array.
 * @param {Array} arr
 * @param {number} itemCount
 * @returns {Array}
 */

var getLastArrayItems = function getLastArrayItems(arr, itemCount) {
  return arr.slice(-itemCount);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var cookieName = "".concat(baseNamespace, "getTld");
/**
 * Of the current web page's hostname, this is the top-most domain that is
 * not a "public suffix" as outlined in https://publicsuffix.org/. In other
 * words, this is top-most domain that is able to accept cookies.
 * @param {Object} window
 * @param {Object} cookieJar
 * @returns {string}
 */

var getApexDomain = function getApexDomain(window, cookieJar) {
  var topLevelCookieDomain = ""; // If hostParts.length === 1, we may be on localhost.

  var hostParts = window.location.hostname.toLowerCase().split(".");
  var i = 1;

  while (i < hostParts.length && !cookieJar.get(cookieName)) {
    i += 1;
    topLevelCookieDomain = getLastArrayItems(hostParts, i).join(".");
    cookieJar.set(cookieName, cookieName, {
      domain: topLevelCookieDomain
    });
  }

  cookieJar.remove(cookieName, {
    domain: topLevelCookieDomain
  });
  return topLevelCookieDomain;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
// Remember to also incorporate the org ID wherever cookies are read or written.


var COOKIE_NAME_PREFIX = "kndctr";
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var sanitizeOrgIdForCookieName = function sanitizeOrgIdForCookieName(orgId) {
  return orgId.replace("@", "_");
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getNamespacedCookieName = function getNamespacedCookieName(orgId, key) {
  return "".concat(COOKIE_NAME_PREFIX, "_").concat(sanitizeOrgIdForCookieName(orgId), "_").concat(key);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var IDENTITY = "identity";
var CONSENT = "consent";
var CLUSTER = "cluster";
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var injectDoesIdentityCookieExist = function injectDoesIdentityCookieExist(_ref7) {
  var orgId = _ref7.orgId;
  var identityCookieName = getNamespacedCookieName(orgId, IDENTITY);
  /**
   * Returns whether the identity cookie exists.
   */

  return function () {
    return Boolean(cookieJar.get(identityCookieName));
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getStorageByType = function getStorageByType(context, storageType, namespace) {
  // When storage is disabled on Safari, the mere act of referencing
  // window.localStorage or window.sessionStorage throws an error.
  // For this reason, we wrap in a try-catch.
  return {
    /**
     * Reads a value from storage.
     * @param {string} name The name of the item to be read.
     * @returns {string}
     */
    getItem: function getItem(name) {
      try {
        return context[storageType].getItem(namespace + name);
      } catch (e) {
        return null;
      }
    },

    /**
     * Saves a value to storage.
     * @param {string} name The name of the item to be saved.
     * @param {string} value The value of the item to be saved.
     * @returns {boolean} Whether the item was successfully saved to storage.
     */
    setItem: function setItem(name, value) {
      try {
        context[storageType].setItem(namespace + name, value);
        return true;
      } catch (e) {
        return false;
      }
    },

    /**
     * Clear all values in storage that match the namespace.
     */
    clear: function clear() {
      try {
        Object.keys(context[storageType]).forEach(function (key) {
          if (startsWith(key, namespace)) {
            context[storageType].removeItem(key);
          }
        });
        return true;
      } catch (e) {
        return false;
      }
    }
  };
};

var injectStorage = function injectStorage(context) {
  return function (additionalNamespace) {
    var finalNamespace = baseNamespace + additionalNamespace;
    return {
      session: getStorageByType(context, "sessionStorage", finalNamespace),
      persistent: getStorageByType(context, "localStorage", finalNamespace)
    };
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns items that are found within both arrays.
 * @param {Array} a
 * @param {Array} b
 * @returns {Array}
 */


var intersection = function intersection(a, b) {
  return a.filter(function (x) {
    return includes(b, x);
  });
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is a boolean.
 * @param {*} value
 * @returns {boolean}
 */


var isBoolean = function isBoolean(value) {
  return typeof value === "boolean";
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is a number.
 * @param {*} value
 * @returns {boolean}
 */
// eslint-disable-next-line no-restricted-globals


var isNumber = function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is an integer.
 * @param {*} value
 * @returns {boolean}
 */


var isInteger = function isInteger(value) {
  var parsed = parseInt(value, 10);
  return isNumber(parsed) && value === parsed;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Determines whether a cookie name is namespaced according to the contract
 * defined by the server.
 * @param {String} orgId The org ID configured for the Alloy instance.
 * @param {String} name The cookie name.
 * @returns {boolean}
 */


var isNamespacedCookieName = function isNamespacedCookieName(orgId, name) {
  return name.indexOf("".concat(COOKIE_NAME_PREFIX, "_").concat(sanitizeOrgIdForCookieName(orgId), "_")) === 0;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is a string.
 * @param {*} value
 * @returns {boolean}
 */


var isString = function isString(value) {
  return typeof value === "string";
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether the value is a populated string.
 * @param {*} value
 * @returns {boolean}
 */


var isNonEmptyString = function isNonEmptyString(value) {
  return isString(value) && value.length > 0;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Creates a function that memoizes the result of `fn`. If `keyResolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key.
 *
 * @param {Function} fn The function to have its output memoized.
 * @param {Function} [keyResolver] The function to resolve the cache key.
 * @returns {Function} The new memoized function.
 */


var memoize = function memoize(fn, keyResolver) {
  var map = new Map();
  return function () {
    var key = keyResolver ? keyResolver.apply(void 0, arguments) : arguments.length <= 0 ? undefined : arguments[0];

    if (map.has(key)) {
      return map.get(key);
    }

    var result = fn.apply(void 0, arguments);
    map.set(key, result);
    return result;
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * A function that performs no operations.
 */


var noop = function noop() {};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
// adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart


var padStart = function padStart(string, targetLength, padString) {
  var originalString = String(string);
  var repeatedPadString = String(padString);

  if (originalString.length >= targetLength || repeatedPadString.length === 0) {
    return originalString;
  }

  var lengthToAdd = targetLength - originalString.length;

  while (lengthToAdd > repeatedPadString.length) {
    repeatedPadString += repeatedPadString;
  }

  return repeatedPadString.slice(0, lengthToAdd) + originalString;
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
// to be able to add overrides in the future without us needing to make
// any changes to the Web SDK


var prepareConfigOverridesForEdge = function prepareConfigOverridesForEdge(configuration) {
  if (isNil(configuration) || _typeof(configuration) !== "object") {
    return null;
  } // remove entries that are empty strings or arrays


  var configOverrides = filterObject(configuration, function (value) {
    if (isNil(value)) {
      return false;
    }

    if (isBoolean(value)) {
      return true;
    }

    if (isNumber(value)) {
      return true;
    }

    if (isNonEmptyString(value)) {
      return true;
    }

    if (isNonEmptyArray(value)) {
      return true;
    }

    return false;
  });

  if (isEmptyObject(configOverrides)) {
    return null;
  }

  return configOverrides;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Creates and returns a new error using the provided value as a message.
 * If the provided value is already an Error, it will be returned unmodified.
 * @param {*} value
 * @returns {Error}
 */


var toError = function toError(value) {
  return value instanceof Error ? value : new Error(value);
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var updateErrorMessage = function updateErrorMessage(_ref8) {
  var error = _ref8.error,
      message = _ref8.message;

  try {
    error.message = message;
  } catch (e) {// We'll set a new message when we can, but some errors, like DOMException,
    // have a read-only message property, which limits our options.
  }
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Augments an error's message with additional context as it bubbles up the call stack.
 * @param {String} message The message to be added to the error.
 * @param {*} error Optimally, this is an instance of Error. If it is not,
 * this is used as the basis for the message of a newly created Error instance.
 * @returns {*}
 */


var stackError = function stackError(_ref9) {
  var error = _ref9.error,
      message = _ref9.message;
  var errorToStack = toError(error);
  var newMessage = "".concat(message, "\nCaused by: ").concat(errorToStack.message);
  updateErrorMessage({
    error: errorToStack,
    message: newMessage
  });
  return errorToStack;
};
/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var stringToBoolean = function stringToBoolean(str) {
  return isString(str) && str.toLowerCase() === "true";
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/*
 * coerce `value` to a number or return `defaultValue` if it cannot be.
 *
 * The coersion is attempted if value is a number or string.
 */


var toInteger = function toInteger(value, defaultValue) {
  if (isNumber(value) || isString(value)) {
    var n = Math.round(Number(value)); // eslint-disable-next-line no-restricted-globals

    if (!isNaN(n)) {
      return n;
    }
  }

  return defaultValue;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Formats the date into an ISO date-time string in the local timezone
 * @param {Date} date
 * @returns {string}
 */


var toISOStringLocal = function toISOStringLocal(date) {
  var YYYY = date.getFullYear();
  var MM = padStart(date.getMonth() + 1, 2, "0");
  var DD = padStart(date.getDate(), 2, "0");
  var hh = padStart(date.getHours(), 2, "0");
  var mm = padStart(date.getMinutes(), 2, "0");
  var ss = padStart(date.getSeconds(), 2, "0");
  var mmm = padStart(date.getMilliseconds(), 3, "0"); // The time-zone offset is the difference, in minutes, from local time to UTC. Note that this
  // means that the offset is positive if the local timezone is behind UTC and negative if it is
  // ahead. For example, for time zone UTC+10:00, -600 will be returned.

  var timezoneOffset = toInteger(date.getTimezoneOffset(), 0);
  var ts = timezoneOffset > 0 ? "-" : "+";
  var th = padStart(Math.floor(Math.abs(timezoneOffset) / 60), 2, "0");
  var tm = padStart(Math.abs(timezoneOffset) % 60, 2, "0");
  return "".concat(YYYY, "-").concat(MM, "-").concat(DD, "T").concat(hh, ":").concat(mm, ":").concat(ss, ".").concat(mmm).concat(ts).concat(th, ":").concat(tm);
};

var rngBrowser = createCommonjsModule(function (module) {
  // Unique ID creation requires a high quality random # generator.  In the
  // browser this is a little complicated due to unknown quality of Math.random()
  // and inconsistent support for the `crypto` API.  We do the best we can via
  // feature-detection
  // getRandomValues needs to be invoked in a context where "this" is a Crypto
  // implementation. Also, find the complete implementation of crypto on IE11.
  var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);

  if (getRandomValues) {
    // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
    var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

    module.exports = function whatwgRNG() {
      getRandomValues(rnds8);
      return rnds8;
    };
  } else {
    // Math.random()-based (RNG)
    //
    // If all else fails, use Math.random().  It's fast, but is of unspecified
    // quality.
    var rnds = new Array(16);

    module.exports = function mathRNG() {
      for (var i = 0, r; i < 16; i++) {
        if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
        rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
      }

      return rnds;
    };
  }
});
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4

  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
}

var bytesToUuid_1 = bytesToUuid;

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof options == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }

  options = options || {};
  var rnds = options.random || (options.rng || rngBrowser)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid_1(rnds);
}

var v4_1 = v4;
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Chains two validators together.
 *
 * Validators are functions of two parameters (value and path) that return the computed value if
 * the input is valid, or throw an exception if the input is invalid. In most cases the returned
 * value is the same as the input value; however, reference createDefaultValidator.js
 * to see an example where the computed value is different from the input. Additionally, if we ever
 * wanted to coerce types (i.e. parse string values into integers) as part of the validation process
 * we could use the computed value to accomplish that.
 *
 * The path parameter is used to generate informative error messages. It is created by the objectOf, and
 * arrayOf validators so that any error message can describe which key within the object or array is
 * invalid.
 *
 * The validators also have methods to chain additional validation logic. For example, when you call
 * `string()` to start a validator chain, it returns a validator function but it also has methods
 * like `required` and `nonEmpty`. In index.js you can see that these methods are actually calling `chain`.
 * Specifically in this function, the leftValidator is called first and then the return value of that is
 * sent to the rightValidator. For example, when calling `string().nonEmpty().required()` the following
 * chain is built up:
 * ```
 *              *
 *            /   \
 *          *     required
 *        /   \
 *      *     nonEmpty
 *    /   \
 * base   string
 * ```
 * Where every * is a call to chain where the two are combined. The individual validators are called from
 * left to right in the above tree. The base validator is simply the identity function `value => value`,
 * representing an optional value.
 *
 * After combining the validators, the new validator function is then augmented with the methods from the
 * leftValidator and from the additionalMethods parameter. For example, when the string() function is called
 * it chains to the base validator, but also adds additional methods like (`regexp`, `domain`, `nonEmpty`,
 * and `unique`). When `nonEmpty` is called, which calls chain again, the additional methods are carried
 * forward because they are already defined on the leftValidator.
 *
 * The base validator also contains the two methods `required` and `default`, so these can be used anywhere
 * after any of the exposed validator functions are called.
 */

var chain = function chain(leftValidator, rightValidator) {
  var additionalMethods = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  // combine the two validators, calling left first and then right.
  // pass the return value from left into right.
  var combinedValidator = function combinedValidator(value, path) {
    return rightValidator(leftValidator(value, path), path);
  }; // add the methods already defined on the left validator, and the additionalMethods
  // to the new combined validator function.


  (0, _reactorObjectAssign["default"])(combinedValidator, leftValidator, additionalMethods);
  return combinedValidator;
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * This augments `chain` with a null check done before running the rightValidator.
 * See chain for more info.
 *
 * For most validators, we want the validation to be optional (i.e. allow null or
 * undefined values). To accomplish this, the validator needs to have a check
 * at the begining of the function, short circuiting the validation logic and
 * returning value if value is null or undefined. `default` and `required` do not
 * want this null check though. Indeed, `default` should return the default value
 * if value is null, and `required` should throw an error if value is null.
 *
 * So to keep from having to have a null check in front of most validators, this
 * function allows you to chain a rightValidator that needs to have a null check.
 */


var nullSafeChain = function nullSafeChain(leftValidator, rightValidator, additionalMethods) {
  var rightValidatorWithNullCheck = function rightValidatorWithNullCheck(value, path) {
    return value == null ? value : rightValidator(value, path);
  };

  return chain(leftValidator, rightValidatorWithNullCheck, additionalMethods);
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var assertValid = function assertValid(isValid, value, path, message) {
  if (!isValid) {
    throw new Error("'".concat(path, "': Expected ").concat(message, ", but got ").concat(JSON.stringify(value), "."));
  }
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var booleanValidator = function booleanValidator(value, path) {
  assertValid(isBoolean(value), value, path, "true or false");
  return value;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var callbackValidator = function callbackValidator(value, path) {
  assertValid(isFunction(value), value, path, "a function");
  return value;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createArrayOfValidator = function createArrayOfValidator(elementValidator) {
  return function (value, path) {
    assertValid(Array.isArray(value), value, path, "an array");
    var errors = [];
    var validatedArray = value.map(function (subValue, i) {
      try {
        return elementValidator(subValue, "".concat(path, "[").concat(i, "]"));
      } catch (e) {
        errors.push(e.message);
        return undefined;
      }
    });

    if (errors.length) {
      throw new Error(errors.join("\n"));
    }

    return validatedArray;
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createDefaultValidator = function createDefaultValidator(defaultValue) {
  return function (value) {
    if (value == null) {
      return defaultValue;
    }

    return value;
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createLiteralValidator = function createLiteralValidator(literalValue) {
  return function (value, path) {
    assertValid(value === literalValue, value, path, "".concat(literalValue));
    return value;
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createMapOfValuesValidator = function createMapOfValuesValidator(valueValidator) {
  return function (value, path) {
    assertValid(isObject(value), value, path, "an object");
    var errors = [];
    var validatedObject = {};
    Object.keys(value).forEach(function (subKey) {
      var subValue = value[subKey];
      var subPath = path ? "".concat(path, ".").concat(subKey) : subKey;

      try {
        var validatedValue = valueValidator(subValue, subPath);

        if (validatedValue !== undefined) {
          validatedObject[subKey] = validatedValue;
        }
      } catch (e) {
        errors.push(e.message);
      }
    });

    if (errors.length) {
      throw new Error(errors.join("\n"));
    }

    return validatedObject;
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createMinimumValidator = function createMinimumValidator(typeName, minimum) {
  return function (value, path) {
    assertValid(value >= minimum, value, path, "".concat(typeName, " greater than or equal to ").concat(minimum));
    return value;
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createNoUnknownFieldsValidator = function createNoUnknownFieldsValidator(schema) {
  return function (value, path) {
    var errors = [];
    Object.keys(value).forEach(function (subKey) {
      if (!schema[subKey]) {
        var subPath = path ? "".concat(path, ".").concat(subKey) : subKey;
        errors.push("'".concat(subPath, "': Unknown field."));
      }
    });

    if (errors.length) {
      throw new Error(errors.join("\n"));
    }

    return value;
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createNonEmptyValidator = function createNonEmptyValidator(message) {
  return function (value, path) {
    if (isObject(value)) {
      assertValid(!isEmptyObject(value), value, path, message);
    } else {
      assertValid(value.length > 0, value, path, message);
    }

    return value;
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createObjectOfValidator = function createObjectOfValidator(schema) {
  return function (value, path) {
    assertValid(isObject(value), value, path, "an object");
    var errors = [];
    var validatedObject = {};
    Object.keys(schema).forEach(function (subKey) {
      var subValue = value[subKey];
      var subSchema = schema[subKey];
      var subPath = path ? "".concat(path, ".").concat(subKey) : subKey;

      try {
        var validatedValue = subSchema(subValue, subPath);

        if (validatedValue !== undefined) {
          validatedObject[subKey] = validatedValue;
        }
      } catch (e) {
        errors.push(e.message);
      }
    }); // copy over unknown properties

    Object.keys(value).forEach(function (subKey) {
      if (!Object.prototype.hasOwnProperty.call(validatedObject, subKey)) {
        validatedObject[subKey] = value[subKey];
      }
    });

    if (errors.length) {
      throw new Error(errors.join("\n"));
    }

    return validatedObject;
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createAnyOfValidator = function createAnyOfValidator(validators, message) {
  return function (value, path) {
    var valid = find(validators, function (validator) {
      try {
        validator(value, path);
        return true;
      } catch (e) {
        return false;
      }
    });
    assertValid(valid, value, path, message);
    return value;
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createUniqueValidator = function createUniqueValidator() {
  var values = [];
  return function (value, path) {
    assertValid(values.indexOf(value) === -1, value, path, "a unique value across instances");
    values.push(value);
    return value;
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether an array contains unique values.
 * @param {*} value
 * @returns {boolean}
 */


var isUnique = function isUnique(values) {
  var storedVals = Object.create(null);

  for (var _i5 = 0; _i5 < values.length; _i5 += 1) {
    var item = values[_i5];

    if (item in storedVals) {
      return false;
    }

    storedVals[item] = true;
  }

  return true;
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createUniqueItemsValidator = function createUniqueItemsValidator() {
  return function (value, path) {
    assertValid(isUnique(value), value, path, "array values to be unique");
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var DOMAIN_REGEX = /^[a-z0-9.-]{1,}$/i;

var domainValidator = function domainValidator(value, path) {
  assertValid(DOMAIN_REGEX.test(value), value, path, "a valid domain");
  return value;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var integerValidator = function integerValidator(value, path) {
  assertValid(isInteger(value), value, path, "an integer");
  return value;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var numberValidator = function numberValidator(value, path) {
  assertValid(isNumber(value), value, path, "a number");
  return value;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Determines whether the value is a valid regular expression.
 * @param {*} value
 * @returns {boolean}
 */


var isValidRegExp = function isValidRegExp(value) {
  try {
    return new RegExp(value) !== null;
  } catch (e) {
    return false;
  }
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var regexpValidator = function regexpValidator(value, path) {
  assertValid(isValidRegExp(value), value, path, "a regular expression");
  return value;
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var requiredValidator = function requiredValidator(value, path) {
  if (value == null) {
    throw new Error("'".concat(path, "' is a required option"));
  }

  return value;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var stringValidator = function stringValidator(value, path) {
  assertValid(isString(value), value, path, "a string");
  return value;
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var base = function base(value) {
  return value;
}; // The 'default' and 'required' methods are available after any data-type method
// Don't use the nullSafeChain because they need to handle the null or undefined case


base["default"] = function _default(defaultValue) {
  return chain(this, createDefaultValidator(defaultValue));
};

base.required = function required() {
  return chain(this, requiredValidator);
}; // helper validators


var domain = function domain() {
  return nullSafeChain(this, domainValidator);
};

var minimumInteger = function minimumInteger(minValue) {
  return nullSafeChain(this, createMinimumValidator("an integer", minValue));
};

var minimumNumber = function minimumNumber(minValue) {
  return nullSafeChain(this, createMinimumValidator("a number", minValue));
};

var integer = function integer() {
  return nullSafeChain(this, integerValidator, {
    minimum: minimumInteger
  });
};

var nonEmptyString = function nonEmptyString() {
  return nullSafeChain(this, createNonEmptyValidator("a non-empty string"));
};

var nonEmptyArray = function nonEmptyArray() {
  return nullSafeChain(this, createNonEmptyValidator("a non-empty array"));
};

var nonEmptyObject = function nonEmptyObject() {
  return nullSafeChain(this, createNonEmptyValidator("a non-empty object"));
};

var regexp = function regexp() {
  return nullSafeChain(this, regexpValidator);
};

var unique = function createUnique() {
  return nullSafeChain(this, createUniqueValidator());
};

var uniqueItems = function createUniqueItems() {
  return nullSafeChain(this, createUniqueItemsValidator());
}; // top-level validators.  These are the first functions that are called to create a validator.


var anyOf = function anyOf(validators, message) {
  // use chain here because we don't want to accept null or undefined unless at least
  // one of the validators accept null or undefined.
  return chain(this, createAnyOfValidator(validators, message));
};

var anything = function anything() {
  return nullSafeChain(this, base);
};

var arrayOf = function arrayOf(elementValidator) {
  return nullSafeChain(this, createArrayOfValidator(elementValidator), {
    nonEmpty: nonEmptyArray,
    uniqueItems: uniqueItems
  });
};

var _boolean = function _boolean2() {
  return nullSafeChain(this, booleanValidator);
};

var callback = function callback() {
  return nullSafeChain(this, callbackValidator);
};

var literal = function literal(literalValue) {
  return nullSafeChain(this, createLiteralValidator(literalValue));
};

var number = function number() {
  return nullSafeChain(this, numberValidator, {
    minimum: minimumNumber,
    integer: integer,
    unique: unique
  });
};

var mapOfValues = function mapOfValues(valuesValidator) {
  return nullSafeChain(this, createMapOfValuesValidator(valuesValidator), {
    nonEmpty: nonEmptyObject
  });
};

var objectOf = function objectOf(schema) {
  var noUnknownFields = function noUnknownFields() {
    return nullSafeChain(this, createNoUnknownFieldsValidator(schema));
  };

  return nullSafeChain(this, createObjectOfValidator(schema), {
    noUnknownFields: noUnknownFields,
    nonEmpty: nonEmptyObject
  });
};

var string = function string() {
  return nullSafeChain(this, stringValidator, {
    regexp: regexp,
    domain: domain,
    nonEmpty: nonEmptyString,
    unique: unique
  });
};

var boundAnyOf = anyOf.bind(base);
var boundAnything = anything.bind(base);
var boundArrayOf = arrayOf.bind(base);

var boundBoolean = _boolean.bind(base);

var boundCallback = callback.bind(base);
var boundLiteral = literal.bind(base);
number.bind(base);
var boundMapOfValues = mapOfValues.bind(base);
var boundObjectOf = objectOf.bind(base);
var boundString = string.bind(base); // compound validators

var boundEnumOf = function boundEnumOf() {
  for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    values[_key3] = arguments[_key3];
  }

  return boundAnyOf(values.map(boundLiteral), "one of these values: [".concat(JSON.stringify(values), "]"));
};
/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var AMBIGUOUS = "ambiguous";
var AUTHENTICATED = "authenticated";
var LOGGED_OUT = "loggedOut";
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var validateIdentityMap = boundMapOfValues(boundArrayOf(boundObjectOf({
  authenticatedState: boundEnumOf(AMBIGUOUS, AUTHENTICATED, LOGGED_OUT),
  id: boundString(),
  namespace: boundObjectOf({
    code: boundString()
  }).noUnknownFields(),
  primary: boundBoolean(),
  xid: boundString()
}).noUnknownFields()).required());
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var validateConfigOverride = boundObjectOf({});
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var debugQueryParam = "alloy_debug";
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createLogController = function createLogController(_ref10) {
  var console = _ref10.console,
      locationSearch = _ref10.locationSearch,
      createLogger = _ref10.createLogger,
      instanceName = _ref10.instanceName,
      createNamespacedStorage = _ref10.createNamespacedStorage,
      getMonitors = _ref10.getMonitors;

  var parsedQueryString = _reactorQueryString["default"].parse(locationSearch);

  var storage = createNamespacedStorage("instance.".concat(instanceName, "."));
  var debugSessionValue = storage.session.getItem("debug");
  var debugEnabled = debugSessionValue === "true";
  var debugEnabledWritableFromConfig = debugSessionValue === null;

  var getDebugEnabled = function getDebugEnabled() {
    return debugEnabled;
  };

  var setDebugEnabled = function setDebugEnabled(value, _ref11) {
    var fromConfig = _ref11.fromConfig;

    if (!fromConfig || debugEnabledWritableFromConfig) {
      debugEnabled = value;
    }

    if (!fromConfig) {
      // Web storage only allows strings, so we explicitly convert to string.
      storage.session.setItem("debug", value.toString());
      debugEnabledWritableFromConfig = false;
    }
  };

  if (parsedQueryString[debugQueryParam] !== undefined) {
    setDebugEnabled(stringToBoolean(parsedQueryString[debugQueryParam]), {
      fromConfig: false
    });
  }

  return {
    setDebugEnabled: setDebugEnabled,
    logger: createLogger({
      getDebugEnabled: getDebugEnabled,
      context: {
        instanceName: instanceName
      },
      getMonitors: getMonitors,
      console: console
    }),
    createComponentLogger: function createComponentLogger(componentName) {
      return createLogger({
        getDebugEnabled: getDebugEnabled,
        context: {
          instanceName: instanceName,
          componentName: componentName
        },
        getMonitors: getMonitors,
        console: console
      });
    }
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
// TO-DOCUMENT: Lifecycle hooks and their params.


var hookNames = [// Called after all components have been registered.
"onComponentsRegistered", // Called before an event is sent on a data collection request
"onBeforeEvent", // Called before each request is made to the edge.
"onBeforeRequest", // Called after each response is returned from the edge with a successful
// status code
"onResponse", // Called after a network request to the edge fails. Either the request
// didn't make it to the edge, didn't make it to Konductor, or Konductor
// failed to return a regularly-structured response. (In this case { error }
// is passed as the parameter)
// Also called when the respone returns a 400 or 500 error. (In this case
// { response } is passed as the parameter)
"onRequestFailure", // A user clicked on an element.
"onClick"];

var createHook = function createHook(componentRegistry, hookName) {
  return function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return Promise.all(componentRegistry.getLifecycleCallbacks(hookName).map(function (callback) {
      return new Promise(function (resolve) {
        resolve(callback.apply(void 0, args));
      });
    }));
  };
};
/**
 * This ensures that if a component's lifecycle method X
 * attempts to execute lifecycle method Y, that all X methods on all components
 * will have been called before any of their Y methods are called. It does
 * this by kicking the call to the Y method to the next JavaScript tick.
 * @returns {function}
 */


var guardHook = function guardHook(fn) {
  return function () {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    return Promise.resolve().then(function () {
      return fn.apply(void 0, args);
    });
  };
};

var createLifecycle = function createLifecycle(componentRegistry) {
  return hookNames.reduce(function (memo, hookName) {
    memo[hookName] = guardHook(createHook(componentRegistry, hookName));
    return memo;
  }, {});
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var wrapForErrorHandling = function wrapForErrorHandling(fn, stackMessage) {
  return function () {
    var result;

    try {
      result = fn.apply(void 0, arguments);
    } catch (error) {
      throw stackError({
        error: error,
        message: stackMessage
      });
    }

    if (result instanceof Promise) {
      result = result["catch"](function (error) {
        throw stackError({
          error: error,
          message: stackMessage
        });
      });
    }

    return result;
  };
}; // TO-DOCUMENT: All public commands and their signatures.


var createComponentRegistry = function createComponentRegistry() {
  var commandsByName = {};
  var lifecycleCallbacksByName = {};

  var registerComponentCommands = function registerComponentCommands(namespace) {
    var componentCommandsByName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var conflictingCommandNames = intersection(Object.keys(commandsByName), Object.keys(componentCommandsByName));

    if (conflictingCommandNames.length) {
      throw new Error("[ComponentRegistry] Could not register ".concat(namespace, " ") + "because it has existing command(s): ".concat(conflictingCommandNames.join(",")));
    }

    Object.keys(componentCommandsByName).forEach(function (commandName) {
      var command = componentCommandsByName[commandName];
      command.commandName = commandName;
      command.run = wrapForErrorHandling(command.run, "[".concat(namespace, "] An error occurred while executing the ").concat(commandName, " command."));
      commandsByName[commandName] = command;
    });
  };

  var registerLifecycleCallbacks = function registerLifecycleCallbacks(namespace) {
    var componentLifecycleCallbacksByName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Object.keys(componentLifecycleCallbacksByName).forEach(function (hookName) {
      lifecycleCallbacksByName[hookName] = lifecycleCallbacksByName[hookName] || [];
      lifecycleCallbacksByName[hookName].push(wrapForErrorHandling(componentLifecycleCallbacksByName[hookName], "[".concat(namespace, "] An error occurred while executing the ").concat(hookName, " lifecycle hook.")));
    });
  };

  return {
    register: function register(namespace, component) {
      var commands = component.commands,
          lifecycle = component.lifecycle;
      registerComponentCommands(namespace, commands);
      registerLifecycleCallbacks(namespace, lifecycle);
    },
    getCommand: function getCommand(commandName) {
      return commandsByName[commandName];
    },
    getCommandNames: function getCommandNames() {
      return Object.keys(commandsByName);
    },
    getLifecycleCallbacks: function getLifecycleCallbacks(hookName) {
      return lifecycleCallbacksByName[hookName] || [];
    }
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectSendNetworkRequest = function injectSendNetworkRequest(_ref12) {
  var logger = _ref12.logger,
      sendFetchRequest = _ref12.sendFetchRequest,
      sendBeaconRequest = _ref12.sendBeaconRequest,
      isRequestRetryable = _ref12.isRequestRetryable,
      getRequestRetryDelay = _ref12.getRequestRetryDelay;

  /**
   * Send a network request and returns details about the response.
   */
  return function (_ref13) {
    var requestId = _ref13.requestId,
        url = _ref13.url,
        payload = _ref13.payload,
        useSendBeacon = _ref13.useSendBeacon;
    // We want to log raw payload and event data rather than
    // our fancy wrapper objects. Calling payload.toJSON() is
    // insufficient to get all the nested raw data, because it's
    // not recursive (it doesn't call toJSON() on the event objects).
    // Parsing the result of JSON.stringify(), however, gives the
    // fully recursive raw data.
    var stringifiedPayload = JSON.stringify(payload);
    var parsedPayload = JSON.parse(stringifiedPayload);
    logger.logOnBeforeNetworkRequest({
      url: url,
      requestId: requestId,
      payload: parsedPayload
    });

    var executeRequest = function executeRequest() {
      var retriesAttempted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var requestMethod = useSendBeacon ? sendBeaconRequest : sendFetchRequest;
      return requestMethod(url, stringifiedPayload).then(function (response) {
        var requestIsRetryable = isRequestRetryable({
          response: response,
          retriesAttempted: retriesAttempted
        });

        if (requestIsRetryable) {
          var requestRetryDelay = getRequestRetryDelay({
            response: response,
            retriesAttempted: retriesAttempted
          });
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve(executeRequest(retriesAttempted + 1));
            }, requestRetryDelay);
          });
        }

        var parsedBody;

        try {
          parsedBody = JSON.parse(response.body);
        } catch (e) {// Non-JSON. Something went wrong.
        }

        logger.logOnNetworkResponse(_objectSpread(_objectSpread({
          requestId: requestId,
          url: url,
          payload: parsedPayload
        }, response), {}, {
          parsedBody: parsedBody,
          retriesAttempted: retriesAttempted
        }));
        return {
          statusCode: response.statusCode,
          body: response.body,
          parsedBody: parsedBody,
          getHeader: response.getHeader
        };
      });
    };

    return executeRequest()["catch"](function (error) {
      logger.logOnNetworkError({
        requestId: requestId,
        url: url,
        payload: parsedPayload,
        error: error
      });
      throw stackError({
        error: error,
        message: "Network request failed."
      });
    });
  };
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectExtractEdgeInfo = function injectExtractEdgeInfo(_ref14) {
  var logger = _ref14.logger;
  return function (adobeEdgeHeader) {
    if (adobeEdgeHeader) {
      var headerParts = adobeEdgeHeader.split(";");

      if (headerParts.length >= 2 && headerParts[1].length > 0) {
        try {
          var regionId = parseInt(headerParts[1], 10); // eslint recommends using Number.isNaN instead, but this function is
          // not available in Internet Explorer. Number.isNaN is more robust to
          // non-numeric parameters. Since we already know regionId will be an
          // integer, using isNaN is okay.
          // https://github.com/airbnb/javascript#standard-library--isnan
          // eslint-disable-next-line no-restricted-globals

          if (!isNaN(regionId)) {
            return {
              regionId: regionId
            };
          }
        } catch (e) {// No need to do anything. The log statement below will log an error
        }
      }

      logger.warn("Invalid adobe edge: \"".concat(adobeEdgeHeader, "\""));
    }

    return {};
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var IN = "in";
var OUT = "out";
var PENDING = "pending";
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var GENERAL = "general";
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var DECLINED_CONSENT_ERROR_CODE = "declinedConsent";
var CONSENT_SOURCE_DEFAULT = "default";
var CONSENT_SOURCE_INITIAL = "initial";
var CONSENT_SOURCE_NEW = "new";

var createDeclinedConsentError = function createDeclinedConsentError(errorMessage) {
  var error = new Error(errorMessage);
  error.code = DECLINED_CONSENT_ERROR_CODE;
  error.message = errorMessage;
  return error;
};

var createConsentStateMachine = function createConsentStateMachine(_ref15) {
  var logger = _ref15.logger;
  var deferreds = [];

  var runAll = function runAll() {
    while (deferreds.length) {
      deferreds.shift().resolve();
    }
  };

  var discardAll = function discardAll() {
    while (deferreds.length) {
      deferreds.shift().reject(createDeclinedConsentError("The user declined consent."));
    }
  };

  var awaitInitial = function awaitInitial() {
    return Promise.reject(new Error("Consent has not been initialized."));
  };

  var awaitInDefault = function awaitInDefault() {
    return Promise.resolve();
  };

  var awaitIn = function awaitIn() {
    return Promise.resolve();
  };

  var awaitOutDefault = function awaitOutDefault() {
    return Promise.reject(createDeclinedConsentError("No consent preferences have been set."));
  };

  var awaitOut = function awaitOut() {
    return Promise.reject(createDeclinedConsentError("The user declined consent."));
  };

  var awaitPending = function awaitPending(returnImmediately) {
    if (returnImmediately) {
      return Promise.reject(new Error("Consent is pending."));
    }

    var deferred = defer();
    deferreds.push(deferred);
    return deferred.promise;
  };

  return {
    "in": function _in(source) {
      if (source === CONSENT_SOURCE_DEFAULT) {
        this.awaitConsent = awaitInDefault;
      } else {
        if (source === CONSENT_SOURCE_INITIAL) {
          logger.info("Loaded user consent preferences. The user previously consented.");
        } else if (source === CONSENT_SOURCE_NEW && this.awaitConsent !== awaitIn) {
          logger.info("User consented.");
        }

        runAll();
        this.awaitConsent = awaitIn;
      }
    },
    out: function out(source) {
      if (source === CONSENT_SOURCE_DEFAULT) {
        logger.warn("User consent preferences not found. Default consent of out will be used.");
        this.awaitConsent = awaitOutDefault;
      } else {
        if (source === CONSENT_SOURCE_INITIAL) {
          logger.warn("Loaded user consent preferences. The user previously declined consent.");
        } else if (source === CONSENT_SOURCE_NEW && this.awaitConsent !== awaitOut) {
          logger.warn("User declined consent.");
        }

        discardAll();
        this.awaitConsent = awaitOut;
      }
    },
    pending: function pending(source) {
      if (source === CONSENT_SOURCE_DEFAULT) {
        logger.info("User consent preferences not found. Default consent of pending will be used. Some commands may be delayed.");
      }

      this.awaitConsent = awaitPending;
    },
    awaitConsent: awaitInitial,
    withConsent: function withConsent() {
      return this.awaitConsent(true);
    }
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createConsent = function createConsent(_ref16) {
  var generalConsentState = _ref16.generalConsentState,
      logger = _ref16.logger;

  var _setConsent = function setConsent(consentByPurpose, source) {
    switch (consentByPurpose[GENERAL]) {
      case IN:
        generalConsentState["in"](source);
        break;

      case OUT:
        generalConsentState.out(source);
        break;

      case PENDING:
        generalConsentState.pending(source);
        break;

      default:
        logger.warn("Unknown consent value: ".concat(consentByPurpose[GENERAL]));
        break;
    }
  };

  return {
    initializeConsent: function initializeConsent(defaultConsentByPurpose, storedConsentByPurpose) {
      if (storedConsentByPurpose[GENERAL]) {
        _setConsent(storedConsentByPurpose, CONSENT_SOURCE_INITIAL);
      } else {
        _setConsent(defaultConsentByPurpose, CONSENT_SOURCE_DEFAULT);
      }
    },
    setConsent: function setConsent(consentByPurpose) {
      _setConsent(consentByPurpose, CONSENT_SOURCE_NEW);
    },
    suspend: function suspend() {
      generalConsentState.pending();
    },
    awaitConsent: function awaitConsent() {
      return generalConsentState.awaitConsent();
    },
    withConsent: function withConsent() {
      return generalConsentState.withConsent();
    }
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createEvent = function createEvent() {
  var content = {};
  var userXdm;
  var userData;
  var _documentMayUnload = false;
  var isFinalized = false;
  var shouldSendEvent = true;

  var throwIfEventFinalized = function throwIfEventFinalized(methodName) {
    if (isFinalized) {
      throw new Error("".concat(methodName, " cannot be called after event is finalized."));
    }
  };

  var event = {
    setUserXdm: function setUserXdm(value) {
      throwIfEventFinalized("setUserXdm");
      userXdm = value;
    },
    setUserData: function setUserData(value) {
      throwIfEventFinalized("setUserData");
      userData = value;
    },
    mergeXdm: function mergeXdm(xdm) {
      throwIfEventFinalized("mergeXdm");

      if (xdm) {
        deepAssign(content, {
          xdm: xdm
        });
      }
    },
    mergeMeta: function mergeMeta(meta) {
      throwIfEventFinalized("mergeMeta");

      if (meta) {
        deepAssign(content, {
          meta: meta
        });
      }
    },
    mergeQuery: function mergeQuery(query) {
      throwIfEventFinalized("mergeQuery");

      if (query) {
        deepAssign(content, {
          query: query
        });
      }
    },
    documentMayUnload: function documentMayUnload() {
      _documentMayUnload = true;
    },
    finalize: function finalize(onBeforeEventSend) {
      if (isFinalized) {
        return;
      }

      if (userXdm) {
        event.mergeXdm(userXdm);
      }

      if (userData) {
        content.data = userData;
      } // the event should already be considered finalized in case onBeforeEventSend throws an error


      isFinalized = true;

      if (onBeforeEventSend) {
        // assume that the onBeforeEventSend callback will fail (in-case of an error)
        shouldSendEvent = false; // this allows the user to replace the xdm and data properties
        // on the object passed to the callback

        var tempContent = {
          xdm: content.xdm || {},
          data: content.data || {}
        };
        var result = onBeforeEventSend(tempContent);
        shouldSendEvent = result !== false;
        content.xdm = tempContent.xdm || {};
        content.data = tempContent.data || {};

        if (isEmptyObject(content.xdm)) {
          delete content.xdm;
        }

        if (isEmptyObject(content.data)) {
          delete content.data;
        }
      }
    },
    getDocumentMayUnload: function getDocumentMayUnload() {
      return _documentMayUnload;
    },
    isEmpty: function isEmpty() {
      return isEmptyObject(content) && (!userXdm || isEmptyObject(userXdm)) && (!userData || isEmptyObject(userData));
    },
    shouldSend: function shouldSend() {
      return shouldSendEvent;
    },
    getViewName: function getViewName() {
      if (!userXdm || !userXdm.web || !userXdm.web.webPageDetails) {
        return undefined;
      }

      return userXdm.web.webPageDetails.viewName;
    },
    toJSON: function toJSON() {
      if (!isFinalized) {
        throw new Error("toJSON called before finalize");
      }

      return content;
    }
  };
  return event;
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var RETRY_AFTER = "Retry-After";
var ADOBE_EDGE = "x-adobe-edge";
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Creates a representation of a gateway response with the addition of
 * helper methods.
 * @returns Response
 */

var injectCreateResponse = function injectCreateResponse(_ref17) {
  var extractEdgeInfo = _ref17.extractEdgeInfo;
  return function (_ref18) {
    var _ref18$content = _ref18.content,
        content = _ref18$content === void 0 ? {} : _ref18$content,
        getHeader = _ref18.getHeader;
    var _content$handle = content.handle,
        handle = _content$handle === void 0 ? [] : _content$handle,
        _content$errors = content.errors,
        errors = _content$errors === void 0 ? [] : _content$errors,
        _content$warnings = content.warnings,
        warnings = _content$warnings === void 0 ? [] : _content$warnings;
    /**
     * Response object.
     * @typedef {Object} Response
     */

    return {
      /**
       * Returns matching fragments of the response by type.
       * @param {String} type A string with the current format: <namespace:action>
       *
       * @example
       * getPayloadsByType("identity:persist")
       */
      getPayloadsByType: function getPayloadsByType(type) {
        return flatMap(handle.filter(function (fragment) {
          return fragment.type === type;
        }), function (fragment) {
          return fragment.payload;
        });
      },

      /**
       * Returns all errors.
       */
      getErrors: function getErrors() {
        return errors;
      },

      /**
       * Returns all warnings.
       */
      getWarnings: function getWarnings() {
        return warnings;
      },

      /**
       * Returns an object containing the regionId from the x-adobe-edge header
       */
      getEdge: function getEdge() {
        return extractEdgeInfo(getHeader(ADOBE_EDGE));
      },
      toJSON: function toJSON() {
        return content;
      }
    };
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var CONFIGURE = "configure";
var SET_DEBUG = "setDebug";
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var injectExecuteCommand = function injectExecuteCommand(_ref19) {
  var logger = _ref19.logger,
      configureCommand = _ref19.configureCommand,
      setDebugCommand = _ref19.setDebugCommand,
      handleError = _ref19.handleError,
      validateCommandOptions = _ref19.validateCommandOptions;
  var configurePromise;

  var getExecutor = function getExecutor(commandName, options) {
    var executor;

    if (commandName === CONFIGURE) {
      if (configurePromise) {
        throw new Error("The library has already been configured and may only be configured once.");
      }

      executor = function executor() {
        configurePromise = configureCommand(options);
        return configurePromise.then(function () {// Don't expose internals to the user.
        });
      };
    } else {
      if (!configurePromise) {
        throw new Error("The library must be configured first. Please do so by executing the configure command.");
      }

      if (commandName === SET_DEBUG) {
        executor = function executor() {
          return setDebugCommand(options);
        };
      } else {
        executor = function executor() {
          return configurePromise.then(function (componentRegistry) {
            var command = componentRegistry.getCommand(commandName);

            if (!command || !isFunction(command.run)) {
              var commandNames = [CONFIGURE, SET_DEBUG].concat(componentRegistry.getCommandNames()).join(", ");
              throw new Error("The ".concat(commandName, " command does not exist. List of available commands: ").concat(commandNames, "."));
            }

            var validatedOptions = validateCommandOptions({
              command: command,
              options: options
            });
            return command.run(validatedOptions);
          }, function () {
            logger.warn("An error during configuration is preventing the ".concat(commandName, " command from executing.")); // If configuration failed, we prevent the configuration
            // error from bubbling here because we don't want the
            // configuration error to be reported in the console every
            // time any command is executed. Only having it bubble
            // once when the configure command runs is sufficient.
            // Instead, for this command, we'll just return a promise
            // that never gets resolved.

            return new Promise(function () {});
          });
        };
      }
    }

    return executor;
  };

  return function (commandName) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return new Promise(function (resolve) {
      // We have to wrap the getExecutor() call in the promise so the promise
      // will be rejected if getExecutor() throws errors.
      var executor = getExecutor(commandName, options);
      logger.logOnBeforeCommand({
        commandName: commandName,
        options: options
      });
      resolve(executor());
    })["catch"](function (error) {
      return handleError(error, "".concat(commandName, " command"));
    })["catch"](function (error) {
      logger.logOnCommandRejected({
        commandName: commandName,
        options: options,
        error: error
      });
      throw error;
    }).then(function (rawResult) {
      // We should always be returning an object from every command.
      var result = isObject(rawResult) ? rawResult : {};
      logger.logOnCommandResolved({
        commandName: commandName,
        options: options,
        result: result
      });
      return result;
    });
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var COMMAND_DOC_URI = "https://adobe.ly/3sHgQHb";

var validateCommandOptions = function validateCommandOptions(_ref20) {
  var command = _ref20.command,
      options = _ref20.options;
  var commandName = command.commandName,
      _command$documentatio = command.documentationUri,
      documentationUri = _command$documentatio === void 0 ? COMMAND_DOC_URI : _command$documentatio,
      optionsValidator = command.optionsValidator;
  var validatedOptions = options;

  if (optionsValidator) {
    try {
      validatedOptions = optionsValidator(options);
    } catch (validationError) {
      var invalidOptionsMessage = "Invalid ".concat(commandName, " command options:\n\t - ").concat(validationError, " For command documentation see: ").concat(documentationUri);
      throw new Error(invalidOptionsMessage);
    }
  }

  return validatedOptions;
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Verifies user provided event options.
 * @param {*} options The user event options to validate
 * @returns {*} Validated options
 */


var validateUserEventOptions = function validateUserEventOptions(_ref21) {
  var options = _ref21.options;
  var eventOptionsValidator = boundObjectOf({
    type: boundString(),
    xdm: boundObjectOf({
      eventType: boundString(),
      identityMap: validateIdentityMap
    }),
    data: boundObjectOf({}),
    documentUnloading: boundBoolean(),
    renderDecisions: boundBoolean(),
    decisionScopes: boundArrayOf(boundString()).uniqueItems(),
    personalization: boundObjectOf({
      decisionScopes: boundArrayOf(boundString()).uniqueItems(),
      surfaces: boundArrayOf(boundString()).uniqueItems()
    }),
    datasetId: boundString(),
    mergeId: boundString(),
    edgeConfigOverrides: validateConfigOverride
  }).required().noUnknownFields();
  return eventOptionsValidator(options);
};
/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var validateApplyResponse = function validateApplyResponse(_ref22) {
  var options = _ref22.options;
  var validator = boundObjectOf({
    renderDecisions: boundBoolean(),
    responseHeaders: boundMapOfValues(boundString().required()),
    responseBody: boundObjectOf({
      handle: boundArrayOf(boundObjectOf({
        type: boundString().required(),
        payload: boundAnything().required()
      })).required()
    }).required()
  }).noUnknownFields();
  return validator(options);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createDataCollector = function createDataCollector(_ref23) {
  var eventManager = _ref23.eventManager,
      logger = _ref23.logger;
  return {
    commands: {
      sendEvent: {
        documentationUri: "https://adobe.ly/3GQ3Q7t",
        optionsValidator: function optionsValidator(options) {
          return validateUserEventOptions({
            options: options
          });
        },
        run: function run(options) {
          var xdm = options.xdm,
              data = options.data,
              _options$documentUnlo = options.documentUnloading,
              documentUnloading = _options$documentUnlo === void 0 ? false : _options$documentUnlo,
              type = options.type,
              mergeId = options.mergeId,
              _options$renderDecisi = options.renderDecisions,
              renderDecisions = _options$renderDecisi === void 0 ? false : _options$renderDecisi,
              _options$decisionScop = options.decisionScopes,
              decisionScopes = _options$decisionScop === void 0 ? [] : _options$decisionScop,
              _options$personalizat = options.personalization,
              personalization = _options$personalizat === void 0 ? {} : _options$personalizat,
              datasetId = options.datasetId,
              edgeConfigOverrides = options.edgeConfigOverrides;
          var event = eventManager.createEvent();

          if (documentUnloading) {
            event.documentMayUnload();
          }

          event.setUserXdm(xdm);
          event.setUserData(data);

          if (type) {
            event.mergeXdm({
              eventType: type
            });
          }

          if (mergeId) {
            event.mergeXdm({
              eventMergeId: mergeId
            });
          }

          var sendEventOptions = {
            renderDecisions: renderDecisions,
            decisionScopes: decisionScopes,
            personalization: personalization
          };

          if (edgeConfigOverrides) {
            sendEventOptions.edgeConfigOverrides = edgeConfigOverrides;
          }

          if (datasetId) {
            logger.warn("The 'datasetId' option has been deprecated. Please use 'edgeConfigOverrides.experience_platform.datasets.event' instead.");
            sendEventOptions.edgeConfigOverrides = edgeConfigOverrides || {};
            deepAssign(sendEventOptions.edgeConfigOverrides, {
              com_adobe_experience_platform: {
                datasets: {
                  event: {
                    datasetId: datasetId
                  }
                }
              }
            });
          }

          return eventManager.sendEvent(event, sendEventOptions);
        }
      },
      applyResponse: {
        documentationUri: "",
        optionsValidator: function optionsValidator(options) {
          return validateApplyResponse({
            options: options
          });
        },
        run: function run(options) {
          var _options$renderDecisi2 = options.renderDecisions,
              renderDecisions = _options$renderDecisi2 === void 0 ? false : _options$renderDecisi2,
              _options$responseHead = options.responseHeaders,
              responseHeaders = _options$responseHead === void 0 ? {} : _options$responseHead,
              _options$responseBody = options.responseBody,
              responseBody = _options$responseBody === void 0 ? {
            handle: []
          } : _options$responseBody;
          var event = eventManager.createEvent();
          return eventManager.applyResponse(event, {
            renderDecisions: renderDecisions,
            responseHeaders: responseHeaders,
            responseBody: responseBody
          });
        }
      }
    }
  };
};

createDataCollector.namespace = "DataCollector";
createDataCollector.configValidators = {};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createClickHandler = function createClickHandler(_ref24) {
  var eventManager = _ref24.eventManager,
      lifecycle = _ref24.lifecycle,
      handleError = _ref24.handleError;
  return function (clickEvent) {
    // TODO: Consider safeguarding from the same object being clicked multiple times in rapid succession?
    var clickedElement = clickEvent.target;
    var event = eventManager.createEvent(); // this is to make sure a exit link personalization metric use send beacon

    event.documentMayUnload();
    return lifecycle.onClick({
      event: event,
      clickedElement: clickedElement
    }).then(function () {
      if (event.isEmpty()) {
        return Promise.resolve();
      }

      return eventManager.sendEvent(event);
    }) // eventManager.sendEvent() will return a promise resolved to an
    // object and we want to avoid returning any value to the customer
    .then(noop)["catch"](function (error) {
      handleError(error, "click collection");
    });
  };
};

var attachClickActivityCollector = function attachClickActivityCollector(_ref25) {
  var eventManager = _ref25.eventManager,
      lifecycle = _ref25.lifecycle,
      handleError = _ref25.handleError;
  var clickHandler = createClickHandler({
    eventManager: eventManager,
    lifecycle: lifecycle,
    handleError: handleError
  });
  document.addEventListener("click", clickHandler, true);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var configValidators = {
  clickCollectionEnabled: boundBoolean()["default"](true),
  downloadLinkQualifier: boundString().regexp()["default"]("\\.(exe|zip|wav|mp3|mov|mpg|avi|wmv|pdf|doc|docx|xls|xlsx|ppt|pptx)$"),
  onBeforeLinkClickSend: boundCallback()
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createLinkClick = function createLinkClick(_ref26) {
  var getLinkDetails = _ref26.getLinkDetails,
      config = _ref26.config,
      logger = _ref26.logger;
  var clickCollectionEnabled = config.clickCollectionEnabled;

  if (!clickCollectionEnabled) {
    return function () {
      return undefined;
    };
  }

  return function (_ref27) {
    var targetElement = _ref27.targetElement,
        event = _ref27.event;
    var linkDetails = getLinkDetails({
      targetElement: targetElement,
      config: config,
      logger: logger
    });

    if (linkDetails) {
      event.mergeXdm(linkDetails.xdm);
      event.setUserData(linkDetails.data);
    }
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createGetLinkDetails = function createGetLinkDetails(_ref28) {
  var window = _ref28.window,
      getLinkName = _ref28.getLinkName,
      getLinkRegion = _ref28.getLinkRegion,
      getAbsoluteUrlFromAnchorElement = _ref28.getAbsoluteUrlFromAnchorElement,
      findSupportedAnchorElement = _ref28.findSupportedAnchorElement,
      determineLinkType = _ref28.determineLinkType;
  return function (_ref29) {
    var targetElement = _ref29.targetElement,
        config = _ref29.config,
        logger = _ref29.logger;
    var anchorElement = findSupportedAnchorElement(targetElement);

    if (!anchorElement) {
      logger.info("This link click event is not triggered because the HTML element is not an anchor.");
      return undefined;
    }

    var linkUrl = getAbsoluteUrlFromAnchorElement(window, anchorElement);

    if (!linkUrl) {
      logger.info("This link click event is not triggered because the HTML element doesn't have an URL.");
      return undefined;
    }

    var linkType = determineLinkType(window, config, linkUrl, anchorElement);
    var linkRegion = getLinkRegion(anchorElement);
    var linkName = getLinkName(anchorElement);
    var onBeforeLinkClickSend = config.onBeforeLinkClickSend;
    var options = {
      xdm: {
        eventType: "web.webinteraction.linkClicks",
        web: {
          webInteraction: {
            name: linkName,
            region: linkRegion,
            type: linkType,
            URL: linkUrl,
            linkClicks: {
              value: 1
            }
          }
        }
      },
      data: {},
      clickedElement: targetElement
    };

    if (!onBeforeLinkClickSend) {
      return options;
    }

    var shouldEventBeTracked = onBeforeLinkClickSend(options);

    if (shouldEventBeTracked !== false) {
      return options;
    }

    logger.info("This link click event is not triggered because it was canceled in onBeforeLinkClickSend.");
    return undefined;
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var urlStartsWithScheme = function urlStartsWithScheme(url) {
  return url && /^[a-z0-9]+:\/\//i.test(url);
};

var getAbsoluteUrlFromAnchorElement = function getAbsoluteUrlFromAnchorElement(window, element) {
  var loc = window.location;
  var url = element.href ? element.href : "";
  var protocol = element.protocol,
      host = element.host;

  if (!urlStartsWithScheme(url)) {
    if (!protocol) {
      protocol = loc.protocol ? loc.protocol : "";
    }

    protocol = protocol ? "".concat(protocol, "//") : "";

    if (!host) {
      host = loc.host ? loc.host : "";
    }

    var path = "";

    if (url.substring(0, 1) !== "/") {
      var indx = loc.pathname.lastIndexOf("/");
      indx = indx < 0 ? 0 : indx;
      path = loc.pathname.substring(0, indx);
    }

    url = "".concat(protocol).concat(host).concat(path, "/").concat(url);
  }

  return url;
};

var isSupportedAnchorElement = function isSupportedAnchorElement(element) {
  if (element.href && (element.tagName === "A" || element.tagName === "AREA") && (!element.onclick || !element.protocol || element.protocol.toLowerCase().indexOf("javascript") < 0)) {
    return true;
  }

  return false;
};

var isDownloadLink = function isDownloadLink(downloadLinkQualifier, linkUrl, clickedObj) {
  var re = new RegExp(downloadLinkQualifier);
  return clickedObj.download ? true : re.test(linkUrl.toLowerCase());
};

var isExitLink = function isExitLink(window, linkUrl) {
  var currentHostname = window.location.hostname.toLowerCase();

  if (linkUrl.toLowerCase().indexOf(currentHostname) >= 0) {
    return false;
  }

  return true;
};
/**
 * Reduces repeated whitespace within a string. Whitespace surrounding the string
 * is trimmed and any occurrence of whitespace within the string is replaced with
 * a single space.
 * @param {string} str String to be formatted.
 * @returns {string} Formatted string.
 */


var truncateWhiteSpace = function truncateWhiteSpace(str) {
  return str && str.replace(/\s+/g, " ").trim();
};

var determineLinkType = function determineLinkType(window, config, linkUrl, clickedObj) {
  var linkType = "other";

  if (isDownloadLink(config.downloadLinkQualifier, linkUrl, clickedObj)) {
    linkType = "download";
  } else if (isExitLink(window, linkUrl)) {
    linkType = "exit";
  }

  return linkType;
};

var findSupportedAnchorElement = function findSupportedAnchorElement(targetElement) {
  var node = targetElement;

  while (node) {
    if (isSupportedAnchorElement(node)) {
      return node;
    }

    node = node.parentNode;
  }

  return null;
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var unsupportedNodeNames = /^(SCRIPT|STYLE|LINK|CANVAS|NOSCRIPT|#COMMENT)$/i;
/**
 * Determines if a node qualifies as a supported link text node.
 * @param {*} node Node to determine support for.
 * @returns {boolean}
 */

var isSupportedTextNode = function isSupportedTextNode(node) {
  if (node && node.nodeName) {
    if (node.nodeName.match(unsupportedNodeNames)) {
      return false;
    }
  }

  return true;
};
/**
 * Orders and returns specified node and its child nodes in arrays of supported
 * and unsupported nodes.
 * @param {*} node The node to extract supported and unsupported nodes from.
 * @returns {{supportedNodes: Array, includesUnsupportedNodes: boolean}} Node support object.
 */


var extractSupportedNodes = function extractSupportedNodes(node) {
  var supportedNodes = [];
  var includesUnsupportedNodes = false;

  if (isSupportedTextNode(node)) {
    supportedNodes.push(node);

    if (node.childNodes) {
      var childNodes = Array.prototype.slice.call(node.childNodes);
      childNodes.forEach(function (childNode) {
        var nodes = extractSupportedNodes(childNode);
        supportedNodes = supportedNodes.concat(nodes.supportedNodes);
        includesUnsupportedNodes = includesUnsupportedNodes || nodes.includesUnsupportedNodes;
      });
    }
  } else {
    includesUnsupportedNodes = true;
  }

  return {
    supportedNodes: supportedNodes,
    includesUnsupportedNodes: includesUnsupportedNodes
  };
};
/**
 * Returns the value of a node attribute.
 * @param {*} node The node holding the attribute.
 * @param {string} attributeName The name of the attribute.
 * @param {string} nodeName Optional node name constraint.
 * @returns {string} Attribute value or undefined.
 */


var getNodeAttributeValue = function getNodeAttributeValue(node, attributeName, nodeName) {
  var attributeValue;

  if (!nodeName || nodeName === node.nodeName.toUpperCase()) {
    attributeValue = node.getAttribute(attributeName);
  }

  return attributeValue;
};
/**
 * Extracts the children supported nodes attributes map
 * @param {*} nodes The nodes array holding the children nodes.
 * The returned map contains the supported not empty children attributes values.
 * */


var getChildrenAttributes = function getChildrenAttributes(nodes) {
  var attributes = {
    texts: []
  };
  nodes.supportedNodes.forEach(function (supportedNode) {
    if (supportedNode.getAttribute) {
      if (!attributes.alt) {
        attributes.alt = truncateWhiteSpace(supportedNode.getAttribute("alt"));
      }

      if (!attributes.title) {
        attributes.title = truncateWhiteSpace(supportedNode.getAttribute("title"));
      }

      if (!attributes.inputValue) {
        attributes.inputValue = truncateWhiteSpace(getNodeAttributeValue(supportedNode, "value", "INPUT"));
      }

      if (!attributes.imgSrc) {
        attributes.imgSrc = truncateWhiteSpace(getNodeAttributeValue(supportedNode, "src", "IMG"));
      }
    }

    if (supportedNode.nodeValue) {
      attributes.texts.push(supportedNode.nodeValue);
    }
  });
  return attributes;
};
/**
 * Extracts a link-name from a given node.
 *
 * The returned link-name is set to one of the following (in order of priority):
 *
 * 1. Clicked node innerText
 * 2. Clicked node textContent
 * 3. Clicked node and its child nodes nodeValue appended together.
 * 4. Clicked node alt attribute or node descendant alt attribute.
 *    Whichever is found first.
 * 5. Clicked node text attribute or node descendant text attribute.
 *    Whichever is found first.
 * 6. Clicked node INPUT descendant value attribute.
 *    Whichever is found first.
 * 7. Clicked node IMG descendant src attribute.
 *    Whichever is found first.
 *
 * @param {*} node The node to find link text for.
 * @returns {string} link-name or an empty string if not link-name is found.
 */


var getLinkName = function getLinkName(node) {
  var nodeText = truncateWhiteSpace(node.innerText || node.textContent);
  var nodes = extractSupportedNodes(node); // if contains unsupported nodes we want children node attributes

  if (!nodeText || nodes.includesUnsupportedNodes) {
    var attributesMap = getChildrenAttributes(nodes);
    nodeText = truncateWhiteSpace(attributesMap.texts.join(""));

    if (!nodeText) {
      nodeText = attributesMap.alt || attributesMap.title || attributesMap.inputValue || attributesMap.imgSrc;
    }
  }

  return nodeText || "";
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var semanticElements = /^(HEADER|MAIN|FOOTER|NAV)$/i;

var getAriaRegionLabel = function getAriaRegionLabel(node) {
  var regionLabel;

  if (node.role === "region" && isNonEmptyString(node["aria-label"])) {
    regionLabel = node["aria-label"];
  }

  return regionLabel;
};

var getSectionNodeName = function getSectionNodeName(node) {
  var nodeName;

  if (node && node.nodeName) {
    if (node.nodeName.match(semanticElements)) {
      nodeName = node.nodeName;
    }
  }

  return nodeName;
};
/**
 * Extracts a node link-region.
 *
 * The link-region is determined by traversing up the DOM
 * looking for a region that is determined in order of priority:
 *
 * 1. element.id
 * 2. Aria region label
 * 3. Semantic element name
 * 4. BODY (if no other link-region is found).
 *
 * @param {*} node The node to find link region for.
 * @returns {string} link-region.
 */


var getLinkRegion = function getLinkRegion(node) {
  var linkParentNode = node.parentNode;
  var regionName;

  while (linkParentNode) {
    regionName = truncateWhiteSpace(linkParentNode.id || getAriaRegionLabel(linkParentNode) || getSectionNodeName(linkParentNode));

    if (regionName) {
      return regionName;
    }

    linkParentNode = linkParentNode.parentNode;
  }

  return "BODY";
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var _getLinkDetails = createGetLinkDetails({
  window: window,
  getLinkName: getLinkName,
  getLinkRegion: getLinkRegion,
  getAbsoluteUrlFromAnchorElement: getAbsoluteUrlFromAnchorElement,
  findSupportedAnchorElement: findSupportedAnchorElement,
  determineLinkType: determineLinkType
});

var createActivityCollector = function createActivityCollector(_ref30) {
  var config = _ref30.config,
      eventManager = _ref30.eventManager,
      handleError = _ref30.handleError,
      logger = _ref30.logger;
  var linkClick = createLinkClick({
    getLinkDetails: _getLinkDetails,
    config: config,
    logger: logger
  });
  return {
    lifecycle: {
      onComponentsRegistered: function onComponentsRegistered(tools) {
        var lifecycle = tools.lifecycle;
        attachClickActivityCollector({
          eventManager: eventManager,
          lifecycle: lifecycle,
          handleError: handleError
        }); // TODO: createScrollActivityCollector ...
      },
      onClick: function onClick(_ref31) {
        var event = _ref31.event,
            clickedElement = _ref31.clickedElement;
        linkClick({
          targetElement: clickedElement,
          event: event
        });
      }
    }
  };
};

createActivityCollector.namespace = "ActivityCollector";
createActivityCollector.configValidators = configValidators;

createActivityCollector.buildOnInstanceConfiguredExtraParams = function (_ref32) {
  var config = _ref32.config,
      logger = _ref32.logger;
  return {
    getLinkDetails: function getLinkDetails(targetElement) {
      return _getLinkDetails({
        targetElement: targetElement,
        config: config,
        logger: logger
      });
    }
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createResultLogMessage = function createResultLogMessage(idSync, success) {
  return "ID sync ".concat(success ? "succeeded" : "failed", ": ").concat(idSync.spec.url);
};

var injectProcessIdSyncs = function injectProcessIdSyncs(_ref33) {
  var fireReferrerHideableImage = _ref33.fireReferrerHideableImage,
      logger = _ref33.logger;
  return function (idSyncs) {
    var urlIdSyncs = idSyncs.filter(function (idSync) {
      return idSync.type === "url";
    });

    if (!urlIdSyncs.length) {
      return Promise.resolve();
    }

    return Promise.all(urlIdSyncs.map(function (idSync) {
      return fireReferrerHideableImage(idSync.spec).then(function () {
        logger.info(createResultLogMessage(idSync, true));
      })["catch"](function () {
        // We intentionally do not throw an error if id syncs fail. We
        // consider it a non-critical failure and therefore do not want it to
        // reject the promise handed back to the customer.
        logger.error(createResultLogMessage(idSync, false));
      });
    })).then(noop);
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var configValidators$1 = {
  thirdPartyCookiesEnabled: boundBoolean()["default"](true),
  idMigrationEnabled: boundBoolean()["default"](true)
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Verifies user provided event options.
 * @param {*} options The user event options to validate
 * @returns {*} Validated options
 */

var getIdentityOptionsValidator = boundObjectOf({
  namespaces: boundArrayOf(boundLiteral("ECID")).nonEmpty().uniqueItems()["default"](["ECID"]),
  edgeConfigOverrides: validateConfigOverride
}).noUnknownFields()["default"]({
  namespaces: ["ECID"]
});
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Verifies user provided event options.
 * @param {*} options The user event options to validate
 * @returns {*} Validated options
 */

var appendIdentityToUrlOptionsValidator = boundObjectOf({
  url: boundString().required().nonEmpty(),
  edgeConfigOverrides: validateConfigOverride
}).required().noUnknownFields();
/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createComponent = function createComponent(_ref34) {
  var addEcidQueryToPayload = _ref34.addEcidQueryToPayload,
      addQueryStringIdentityToPayload = _ref34.addQueryStringIdentityToPayload,
      ensureSingleIdentity = _ref34.ensureSingleIdentity,
      setLegacyEcid = _ref34.setLegacyEcid,
      handleResponseForIdSyncs = _ref34.handleResponseForIdSyncs,
      getEcidFromResponse = _ref34.getEcidFromResponse,
      getIdentity = _ref34.getIdentity,
      consent = _ref34.consent,
      appendIdentityToUrl = _ref34.appendIdentityToUrl,
      logger = _ref34.logger;
  var ecid;
  var edge = {};
  return {
    lifecycle: {
      onBeforeRequest: function onBeforeRequest(_ref35) {
        var request = _ref35.request,
            onResponse = _ref35.onResponse,
            onRequestFailure = _ref35.onRequestFailure;
        // Querying the ECID on every request to be able to set the legacy cookie, and make it
        // available for the `getIdentity` command.
        addEcidQueryToPayload(request.getPayload());
        addQueryStringIdentityToPayload(request.getPayload());
        return ensureSingleIdentity({
          request: request,
          onResponse: onResponse,
          onRequestFailure: onRequestFailure
        });
      },
      onResponse: function onResponse(_ref36) {
        var response = _ref36.response;

        if (!ecid) {
          ecid = getEcidFromResponse(response); // Only data collection calls will have an ECID in the response.
          // https://jira.corp.adobe.com/browse/EXEG-1234

          if (ecid) {
            setLegacyEcid(ecid);
          }
        } // For sendBeacon requests, getEdge() will return {}, so we are using assign here
        // so that sendBeacon requests don't override the edge info from before.


        edge = (0, _reactorObjectAssign["default"])(edge, response.getEdge());
        return handleResponseForIdSyncs(response);
      }
    },
    commands: {
      getIdentity: {
        optionsValidator: getIdentityOptionsValidator,
        run: function run(options) {
          return consent.awaitConsent().then(function () {
            return ecid ? undefined : getIdentity(options);
          }).then(function () {
            return {
              identity: {
                ECID: ecid
              },
              edge: edge
            };
          });
        }
      },
      appendIdentityToUrl: {
        optionsValidator: appendIdentityToUrlOptionsValidator,
        run: function run(options) {
          return consent.withConsent().then(function () {
            return ecid ? undefined : getIdentity(options);
          }).then(function () {
            return {
              url: appendIdentityToUrl(ecid, options.url)
            };
          })["catch"](function (error) {
            logger.warn("Unable to append identity to url. ".concat(error.message));
            return options;
          });
        }
      }
    }
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Handles migration of ECID to and from Visitor.js.
 */


var createLegacyIdentity = function createLegacyIdentity(_ref37) {
  var config = _ref37.config,
      getEcidFromVisitor = _ref37.getEcidFromVisitor,
      apexDomain = _ref37.apexDomain,
      isPageSsl = _ref37.isPageSsl,
      cookieJar = _ref37.cookieJar;
  var idMigrationEnabled = config.idMigrationEnabled,
      orgId = config.orgId;
  var amcvCookieName = "AMCV_".concat(orgId);

  var getEcidFromLegacyCookies = function getEcidFromLegacyCookies() {
    var ecid = null;
    var secidCookieName = "s_ecid";
    var legacyEcidCookieValue = cookieJar.get(secidCookieName) || cookieJar.get(amcvCookieName);

    if (legacyEcidCookieValue) {
      var reg = /(^|\|)MCMID\|(\d+)($|\|)/;
      var matches = legacyEcidCookieValue.match(reg);

      if (matches) {
        // Destructuring arrays breaks in IE
        ecid = matches[2];
      }
    }

    return ecid;
  };

  return {
    getEcid: function getEcid() {
      if (idMigrationEnabled) {
        var ecid = getEcidFromLegacyCookies();

        if (ecid) {
          return Promise.resolve(ecid);
        }

        return getEcidFromVisitor();
      }

      return Promise.resolve();
    },
    setEcid: function setEcid(ecid) {
      if (idMigrationEnabled && getEcidFromLegacyCookies() !== ecid) {
        var extraOptions = isPageSsl ? {
          sameSite: "none",
          secure: true
        } : {};
        cookieJar.set(amcvCookieName, "MCMID|".concat(ecid), _objectSpread({
          domain: apexDomain,
          // Without `expires` this will be a session cookie.
          expires: 390
        }, extraOptions));
      }
    }
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var awaitVisitorOptIn = function awaitVisitorOptIn(_ref38) {
  var logger = _ref38.logger;
  return new Promise(function (resolve, reject) {
    if (isObject(window.adobe) && isObject(window.adobe.optIn)) {
      var optInOld = window.adobe.optIn;
      logger.info("Delaying request while waiting for legacy opt-in to let Visitor retrieve ECID from server.");
      optInOld.fetchPermissions(function () {
        if (optInOld.isApproved([optInOld.Categories.ECID])) {
          logger.info("Received legacy opt-in approval to let Visitor retrieve ECID from server.");
          resolve();
        } else {
          reject(new Error("Legacy opt-in was declined."));
        }
      }, true);
    } else {
      resolve();
    }
  });
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getVisitor = function getVisitor(window) {
  var Visitor = window.Visitor;
  return isFunction(Visitor) && isFunction(Visitor.getInstance) && Visitor;
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectGetEcidFromVisitor = function injectGetEcidFromVisitor(_ref39) {
  var logger = _ref39.logger,
      orgId = _ref39.orgId,
      awaitVisitorOptIn = _ref39.awaitVisitorOptIn;
  return function () {
    var Visitor = getVisitor(window);

    if (Visitor) {
      // Need to explicitly wait for optIn because visitor will call callback
      // with invalid values prior to optIn being approved
      return awaitVisitorOptIn({
        logger: logger
      }).then(function () {
        logger.info("Delaying request while using Visitor to retrieve ECID from server.");
        return new Promise(function (resolve) {
          var visitor = Visitor.getInstance(orgId, {});
          visitor.getMarketingCloudVisitorID(function (ecid) {
            logger.info("Resuming previously delayed request that was waiting for ECID from Visitor.");
            resolve(ecid);
          }, true);
        });
      })["catch"](function (error) {
        // If consent was denied, get the ECID from experience edge. OptIn and AEP Web SDK
        // consent should operate independently, but during id migration AEP Web SDK needs
        // to wait for optIn object consent resolution so that only one ECID is generated.
        if (error) {
          logger.info("".concat(error.message, ", retrieving ECID from experience edge"));
        } else {
          logger.info("An error occurred while obtaining the ECID from Visitor.");
        }
      });
    }

    return Promise.resolve();
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectHandleResponseForIdSyncs = function injectHandleResponseForIdSyncs(_ref40) {
  var processIdSyncs = _ref40.processIdSyncs;
  return function (response) {
    return processIdSyncs(response.getPayloadsByType("identity:exchange"));
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
// TO-DOCUMENT: We queue subsequent requests until we have an identity cookie.


var injectEnsureSingleIdentity = function injectEnsureSingleIdentity(_ref41) {
  var doesIdentityCookieExist = _ref41.doesIdentityCookieExist,
      setDomainForInitialIdentityPayload = _ref41.setDomainForInitialIdentityPayload,
      addLegacyEcidToPayload = _ref41.addLegacyEcidToPayload,
      awaitIdentityCookie = _ref41.awaitIdentityCookie,
      logger = _ref41.logger;
  var obtainedIdentityPromise;

  var allowRequestToGoWithoutIdentity = function allowRequestToGoWithoutIdentity(request) {
    setDomainForInitialIdentityPayload(request);
    return addLegacyEcidToPayload(request.getPayload());
  };
  /**
   * Ensures that if no identity cookie exists, we only let one request at a
   * time without an identity until its response returns. In the meantime,
   * we queue all other requests, otherwise the requests could result in
   * multiple ECIDs being minted for the user. Once we get an identity
   * cookie, we can let the queued requests be sent all at once, since they
   * will have the newly minted ECID.
   *
   * Konductor should make every effort to return an identity, but in
   * certain scenarios it may not. For example, in cases where the
   * request does not match what Konductor is expecting (ie 400s).
   * In cases where Konductor does not set an identity, there should be
   * no events recorded so we don't need to worry about multiple ECIDs
   * being minted for each user.
   *
   * The reason we allow for multiple sequential requests to be sent without
   * an identity is to prevent a single malformed request causing all other
   * requests to never send.
   */


  return function (_ref42) {
    var request = _ref42.request,
        onResponse = _ref42.onResponse,
        onRequestFailure = _ref42.onRequestFailure;

    if (doesIdentityCookieExist()) {
      request.setIsIdentityEstablished();
      return Promise.resolve();
    }

    if (obtainedIdentityPromise) {
      // We don't have an identity cookie, but at least one request has
      // been sent to get it. Konductor may set the identity cookie in the
      // response. We will hold up this request until the last request
      // requiring identity returns and awaitIdentityCookie confirms the
      // identity was set.
      logger.info("Delaying request while retrieving ECID from server.");
      var previousObtainedIdentityPromise = obtainedIdentityPromise; // This promise resolves when we have an identity cookie. Additional
      // requests are chained together so that only one is sent at a time
      // until we have the identity cookie.

      obtainedIdentityPromise = previousObtainedIdentityPromise["catch"](function () {
        return awaitIdentityCookie({
          onResponse: onResponse,
          onRequestFailure: onRequestFailure
        });
      }); // When this returned promise resolves, the request will go out.

      return previousObtainedIdentityPromise.then(function () {
        logger.info("Resuming previously delayed request.");
        request.setIsIdentityEstablished();
      }) // If Konductor did not set the identity cookie on the previous
      // request, then awaitIdentityCookie will reject its promise.
      // Catch the rejection here and allow this request to go out.
      ["catch"](function () {
        return allowRequestToGoWithoutIdentity(request);
      });
    } // For Alloy+Konductor communication to be as robust as possible and
    // to ensure we don't mint new ECIDs for requests that would otherwise
    // be sent in parallel, we'll let this request go out to fetch the
    // cookie


    obtainedIdentityPromise = awaitIdentityCookie({
      onResponse: onResponse,
      onRequestFailure: onRequestFailure
    });
    return allowRequestToGoWithoutIdentity(request);
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var ecidNamespace = "ECID";
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var addEcidQueryToPayload = function addEcidQueryToPayload(payload) {
  payload.mergeQuery({
    identity: {
      fetch: [ecidNamespace]
    }
  });
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var matchUserAgent = function matchUserAgent(regexs) {
  return function (userAgent) {
    var keys = Object.keys(regexs);

    for (var _i6 = 0; _i6 < keys.length; _i6 += 1) {
      var key = keys[_i6];
      var regex = regexs[key];

      if (regex.test(userAgent)) {
        return key;
      }
    }

    return UNKNOWN;
  };
};

var getBrowser = memoize(function (window) {
  var _matchUserAgent;

  return matchUserAgent((_matchUserAgent = {}, _defineProperty(_matchUserAgent, EDGE, /Edge\/([0-9\._]+)/), _defineProperty(_matchUserAgent, EDGE_CHROMIUM, /Edg\/([0-9\.]+)/), _defineProperty(_matchUserAgent, CHROME, /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/), _defineProperty(_matchUserAgent, FIREFOX, /Firefox\/([0-9\.]+)(?:\s|$)/), _defineProperty(_matchUserAgent, IE, /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/), _defineProperty(_matchUserAgent, SAFARI, /Version\/([0-9\._]+).*Safari/), _matchUserAgent))(window.navigator.userAgent);
});
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var injectSetDomainForInitialIdentityPayload = function injectSetDomainForInitialIdentityPayload(_ref43) {
  var thirdPartyCookiesEnabled = _ref43.thirdPartyCookiesEnabled,
      areThirdPartyCookiesSupportedByDefault = _ref43.areThirdPartyCookiesSupportedByDefault;
  return function (request) {
    if (thirdPartyCookiesEnabled && areThirdPartyCookiesSupportedByDefault(getBrowser(window))) {
      // If third-party cookies are enabled by the customer and
      // supported by the browser, we will send the request to a
      // a third-party identification domain that allows for more accurate
      // identification of the user through use of a third-party cookie.
      // If we have an identity to migrate, we still want to hit the
      // third-party identification domain because the third-party identification
      // domain will use our ECID to set the third-party cookie if the third-party
      // cookie isn't already set, which provides for better cross-domain
      // identification for future requests.
      request.setUseIdThirdPartyDomain();
    }
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectAddLegacyEcidToPayload = function injectAddLegacyEcidToPayload(_ref44) {
  var getLegacyEcid = _ref44.getLegacyEcid,
      addEcidToPayload = _ref44.addEcidToPayload;
  return function (payload) {
    if (payload.hasIdentity(ecidNamespace)) {
      // don't get the legacy identity if we already have the query string identity or if
      // the user specified it in the identity map
      return Promise.resolve();
    }

    return getLegacyEcid().then(function (ecidToMigrate) {
      if (ecidToMigrate) {
        addEcidToPayload(payload, ecidToMigrate);
      }
    });
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var queryStringIdentityParam = "adobe_mc";
/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var LINK_TTL_SECONDS = 300; // 5 minute link time to live

var injectAddQueryStringIdentityToPayload = function injectAddQueryStringIdentityToPayload(_ref45) {
  var locationSearch = _ref45.locationSearch,
      dateProvider = _ref45.dateProvider,
      orgId = _ref45.orgId,
      logger = _ref45.logger;
  return function (payload) {
    if (payload.hasIdentity(ecidNamespace)) {
      // don't overwrite a user provided ecid identity
      return;
    }

    var parsedQueryString = _reactorQueryString["default"].parse(locationSearch);

    var queryStringValue = parsedQueryString[queryStringIdentityParam];

    if (queryStringValue === undefined) {
      return;
    }

    var properties = queryStringValue.split("|").reduce(function (memo, keyValue) {
      var _keyValue$split = keyValue.split("="),
          _keyValue$split2 = _slicedToArray(_keyValue$split, 2),
          key = _keyValue$split2[0],
          value = _keyValue$split2[1];

      memo[key] = value;
      return memo;
    }, {}); // We are using MCMID and MCORGID to be compatible with Visitor.

    var ts = parseInt(properties.TS, 10);
    var mcmid = properties.MCMID;
    var mcorgid = decodeURIComponent(properties.MCORGID);

    if ( // When TS is not specified or not a number, the following inequality returns false.
    // All inequalities with NaN variables are false.
    dateProvider().getTime() / 1000 <= ts + LINK_TTL_SECONDS && mcorgid === orgId && mcmid) {
      logger.info("Found valid ECID identity ".concat(mcmid, " from the adobe_mc query string parameter."));
      payload.addIdentity(ecidNamespace, {
        id: mcmid
      });
    } else {
      logger.info("Detected invalid or expired adobe_mc query string parameter.");
    }
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var addEcidToPayload = function addEcidToPayload(payload, ecid) {
  payload.addIdentity(ecidNamespace, {
    id: ecid
  });
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectAwaitIdentityCookie = function injectAwaitIdentityCookie(_ref46) {
  var doesIdentityCookieExist = _ref46.doesIdentityCookieExist,
      orgId = _ref46.orgId;

  /**
   * Returns a promise that will be resolved once an identity cookie exists.
   * If an identity cookie doesn't already exist, it should always exist after
   * the first response.
   */
  return function (_ref47) {
    var onResponse = _ref47.onResponse,
        onRequestFailure = _ref47.onRequestFailure;
    return new Promise(function (resolve, reject) {
      onResponse(function () {
        if (doesIdentityCookieExist()) {
          resolve();
        } else {
          // This logic assumes that the code setting the cookie is working as expected and that
          // the cookie was missing from the response.
          var noIdentityCookieError = new Error("An identity was not set properly. Please verify that the org ID ".concat(orgId, " configured in Alloy matches the org ID specified in the edge configuration.")); // Rejecting the promise will reject commands that were queued
          // by the Identity component while waiting on the response to
          // the initial request.

          reject(noIdentityCookieError); // Throwing an error will reject the event command that initiated
          // the request.

          throw noIdentityCookieError;
        }
      });
      onRequestFailure(function () {
        if (doesIdentityCookieExist()) {
          resolve();
        } else {
          // The error from the request failure will be logged separately. Rejecting this here
          // will tell ensureSingleIdentity to send the next request without identity
          reject(new Error("No identity was set on response."));
        }
      });
    });
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getEcidFromResponse = function getEcidFromResponse(response) {
  var identityResultPayloads = response.getPayloadsByType("identity:result");
  var ecidPayload = find(identityResultPayloads, function (payload) {
    return payload.namespace && payload.namespace.code === ecidNamespace;
  });
  return ecidPayload ? ecidPayload.id : undefined;
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createGetIdentity = function createGetIdentity(_ref48) {
  var sendEdgeNetworkRequest = _ref48.sendEdgeNetworkRequest,
      createIdentityRequestPayload = _ref48.createIdentityRequestPayload,
      createIdentityRequest = _ref48.createIdentityRequest,
      globalConfigOverrides = _ref48.globalConfigOverrides;
  return function () {
    var _ref49 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        namespaces = _ref49.namespaces,
        localConfigOverrides = _ref49.edgeConfigOverrides;

    var payload = createIdentityRequestPayload(namespaces);
    var request = createIdentityRequest(payload); // merge the configurations, but give preference to the command-local configs

    payload.mergeConfigOverride(globalConfigOverrides);
    payload.mergeConfigOverride(localConfigOverrides);
    return sendEdgeNetworkRequest({
      request: request
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createAddIdentity = function createAddIdentity(content) {
  return function (namespaceCode, identity) {
    content.xdm = content.xdm || {};
    content.xdm.identityMap = content.xdm.identityMap || {};
    content.xdm.identityMap[namespaceCode] = content.xdm.identityMap[namespaceCode] || [];
    content.xdm.identityMap[namespaceCode].push(identity);
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createRequest = function createRequest(options) {
  var payload = options.payload,
      _getAction = options.getAction,
      _getUseSendBeacon = options.getUseSendBeacon;
  var id = v4_1();
  var shouldUseThirdPartyDomain = false;
  var isIdentityEstablished = false;
  return {
    getId: function getId() {
      return id;
    },
    getPayload: function getPayload() {
      return payload;
    },
    getAction: function getAction() {
      return _getAction({
        isIdentityEstablished: isIdentityEstablished
      });
    },
    getUseSendBeacon: function getUseSendBeacon() {
      return _getUseSendBeacon({
        isIdentityEstablished: isIdentityEstablished
      });
    },
    getUseIdThirdPartyDomain: function getUseIdThirdPartyDomain() {
      return shouldUseThirdPartyDomain;
    },
    setUseIdThirdPartyDomain: function setUseIdThirdPartyDomain() {
      shouldUseThirdPartyDomain = true;
    },
    setIsIdentityEstablished: function setIsIdentityEstablished() {
      isIdentityEstablished = true;
    }
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createDataCollectionRequest = function createDataCollectionRequest(dataCollectionRequestPayload) {
  var getUseSendBeacon = function getUseSendBeacon(_ref50) {
    var isIdentityEstablished = _ref50.isIdentityEstablished;
    // When the document may be unloading, we still hit the interact endpoint
    // using fetch if an identity has not been established. If we were instead
    // to hit the collect endpoint using sendBeacon in this case, one of three
    // things would occur:
    //
    // 1. The document ultimately isn't unloaded and Alloy receives an empty
    // response back from the collect endpoint, resulting in an error being
    // thrown by Alloy because we weren't able to establish an identity.
    // This is bad.
    // 2. The document is unloaded, but Alloy receives the empty
    // response back from the collect endpoint before navigation is completed,
    // resulting in an error being thrown by Alloy because we weren't able to
    // establish an identity. This is bad.
    // 3. The document is unloaded and Alloy does not receive the empty response
    // back from the collect endpoint before navigation is completed. No error
    // will be thrown, but no identity was established either. This is okay,
    // though no identity was established.
    //
    // By hitting the interact endpoint using fetch, one of the three things
    // would occur:
    //
    // 1. The document ultimately isn't unloaded and Alloy receives a
    // response with an identity back from the interact endpoint. No
    // error will be thrown and an identity is established. This is good.
    // 2. The document is unloaded and Alloy receives a response with an
    // identity back from the interact endpoint before navigation is completed.
    // No error will be thrown and an identity is established. This is good.
    // 3. The document is unloaded and Alloy does not receive the empty response
    // back from the collect endpoint before navigation is completed. In this
    // case, no error is thrown, but no identity was established and it's
    // more likely that the request never makes it to the server because we're
    // using fetch instead of sendBeacon.
    //
    // The second approach seemed preferable.
    return dataCollectionRequestPayload.getDocumentMayUnload() && isIdentityEstablished;
  };

  return createRequest({
    payload: dataCollectionRequestPayload,
    getAction: function getAction(_ref51) {
      var isIdentityEstablished = _ref51.isIdentityEstablished;
      return getUseSendBeacon({
        isIdentityEstablished: isIdentityEstablished
      }) ? "collect" : "interact";
    },
    getUseSendBeacon: getUseSendBeacon
  });
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
// request payloads share.


var createRequestPayload = function createRequestPayload(options) {
  var content = options.content,
      addIdentity = options.addIdentity,
      hasIdentity = options.hasIdentity;

  var _mergeConfigOverride = createMerger(content, "meta.configOverrides");

  return {
    mergeMeta: createMerger(content, "meta"),
    mergeState: createMerger(content, "meta.state"),
    mergeQuery: createMerger(content, "query"),
    mergeConfigOverride: function mergeConfigOverride(updates) {
      return _mergeConfigOverride(prepareConfigOverridesForEdge(updates));
    },
    addIdentity: addIdentity,
    hasIdentity: hasIdentity,
    toJSON: function toJSON() {
      return content;
    }
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createHasIdentity = function createHasIdentity(content) {
  return function (namespaceCode) {
    return (content.xdm && content.xdm.identityMap && content.xdm.identityMap[namespaceCode]) !== undefined;
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createDataCollectionRequestPayload = function createDataCollectionRequestPayload() {
  var content = {};
  var payload = createRequestPayload({
    content: content,
    addIdentity: createAddIdentity(content),
    hasIdentity: createHasIdentity(content)
  });

  payload.addEvent = function (event) {
    content.events = content.events || [];
    content.events.push(event);
  };

  payload.getDocumentMayUnload = function () {
    return (content.events || []).some(function (event) {
      return event.getDocumentMayUnload();
    });
  };

  return payload;
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var ASSURANCE_VALIDATION_SESSION_URL_PARAM = "adb_validation_sessionid";
var ASSURANCE_VALIDATION_NAMESPACE = "validation.";
var CLIENT_ID = "clientId";

var getOrCreateAssuranceClientId = function getOrCreateAssuranceClientId(storage) {
  var clientId = storage.persistent.getItem(CLIENT_ID);

  if (!clientId) {
    clientId = v4_1();
    storage.persistent.setItem(CLIENT_ID, clientId);
  }

  return clientId;
};

var createGetAssuranceValidationTokenParams = function createGetAssuranceValidationTokenParams(_ref52) {
  var window = _ref52.window,
      createNamespacedStorage = _ref52.createNamespacedStorage;
  var storage = createNamespacedStorage(ASSURANCE_VALIDATION_NAMESPACE);
  return function () {
    var parsedQuery = _reactorQueryString["default"].parse(window.location.search);

    var validationSessionId = parsedQuery[ASSURANCE_VALIDATION_SESSION_URL_PARAM];

    if (!validationSessionId) {
      return "";
    }

    var clientId = getOrCreateAssuranceClientId(storage);
    var validationToken = "".concat(validationSessionId, "|").concat(clientId);
    return "&".concat(_reactorQueryString["default"].stringify({
      adobeAepValidationToken: validationToken
    }));
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createIdentityRequest = function createIdentityRequest(identityRequestPayload) {
  return createRequest({
    payload: identityRequestPayload,
    getAction: function getAction() {
      return "identity/acquire";
    },
    getUseSendBeacon: function getUseSendBeacon() {
      return false;
    }
  });
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createIdentityRequestPayload = function createIdentityRequestPayload(namespaces) {
  var content = {
    query: {
      identity: {
        fetch: namespaces
      }
    }
  };
  return createRequestPayload({
    content: content,
    addIdentity: createAddIdentity(content),
    hasIdentity: createHasIdentity(content)
  });
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var URL_REGEX = /^([^?#]*)(\??[^#]*)(#?.*)$/;

var getSeparator = function getSeparator(queryString) {
  if (queryString === "") {
    return "?";
  }

  if (queryString === "?") {
    return "";
  }

  return "&";
};

var injectAppendIdentityToUrl = function injectAppendIdentityToUrl(_ref53) {
  var dateProvider = _ref53.dateProvider,
      orgId = _ref53.orgId;
  return function (ecid, url) {
    var ts = Math.round(dateProvider().getTime() / 1000);
    var adobemc = encodeURIComponent("TS=".concat(ts, "|MCMID=").concat(ecid, "|MCORGID=").concat(encodeURIComponent(orgId)));

    var _url$match = url.match(URL_REGEX),
        _url$match2 = _slicedToArray(_url$match, 4),
        location = _url$match2[1],
        queryString = _url$match2[2],
        fragment = _url$match2[3];

    var separator = getSeparator(queryString);
    return "".concat(location).concat(queryString).concat(separator, "adobe_mc=").concat(adobemc).concat(fragment);
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createIdentity = function createIdentity(_ref54) {
  var config = _ref54.config,
      logger = _ref54.logger,
      consent = _ref54.consent,
      fireReferrerHideableImage = _ref54.fireReferrerHideableImage,
      sendEdgeNetworkRequest = _ref54.sendEdgeNetworkRequest,
      apexDomain = _ref54.apexDomain;
  var orgId = config.orgId,
      thirdPartyCookiesEnabled = config.thirdPartyCookiesEnabled,
      globalConfigOverrides = config.edgeConfigOverrides;
  var getEcidFromVisitor = injectGetEcidFromVisitor({
    logger: logger,
    orgId: orgId,
    awaitVisitorOptIn: awaitVisitorOptIn
  });
  var loggingCookieJar = createLoggingCookieJar({
    logger: logger,
    cookieJar: cookieJar
  });
  var legacyIdentity = createLegacyIdentity({
    config: config,
    getEcidFromVisitor: getEcidFromVisitor,
    apexDomain: apexDomain,
    cookieJar: loggingCookieJar,
    isPageSsl: window.location.protocol === "https:"
  });
  var doesIdentityCookieExist = injectDoesIdentityCookieExist({
    orgId: orgId
  });
  var getIdentity = createGetIdentity({
    sendEdgeNetworkRequest: sendEdgeNetworkRequest,
    createIdentityRequestPayload: createIdentityRequestPayload,
    createIdentityRequest: createIdentityRequest,
    globalConfigOverrides: globalConfigOverrides
  });
  var setDomainForInitialIdentityPayload = injectSetDomainForInitialIdentityPayload({
    thirdPartyCookiesEnabled: thirdPartyCookiesEnabled,
    areThirdPartyCookiesSupportedByDefault: areThirdPartyCookiesSupportedByDefault
  });
  var addLegacyEcidToPayload = injectAddLegacyEcidToPayload({
    getLegacyEcid: legacyIdentity.getEcid,
    addEcidToPayload: addEcidToPayload
  });
  var addQueryStringIdentityToPayload = injectAddQueryStringIdentityToPayload({
    locationSearch: window.document.location.search,
    dateProvider: function dateProvider() {
      return new Date();
    },
    orgId: orgId,
    logger: logger
  });
  var awaitIdentityCookie = injectAwaitIdentityCookie({
    doesIdentityCookieExist: doesIdentityCookieExist,
    orgId: orgId
  });
  var ensureSingleIdentity = injectEnsureSingleIdentity({
    doesIdentityCookieExist: doesIdentityCookieExist,
    setDomainForInitialIdentityPayload: setDomainForInitialIdentityPayload,
    addLegacyEcidToPayload: addLegacyEcidToPayload,
    awaitIdentityCookie: awaitIdentityCookie,
    logger: logger
  });
  var processIdSyncs = injectProcessIdSyncs({
    fireReferrerHideableImage: fireReferrerHideableImage,
    logger: logger
  });
  var handleResponseForIdSyncs = injectHandleResponseForIdSyncs({
    processIdSyncs: processIdSyncs
  });
  var appendIdentityToUrl = injectAppendIdentityToUrl({
    dateProvider: function dateProvider() {
      return new Date();
    },
    orgId: orgId,
    globalConfigOverrides: globalConfigOverrides
  });
  return createComponent({
    addEcidQueryToPayload: addEcidQueryToPayload,
    addQueryStringIdentityToPayload: addQueryStringIdentityToPayload,
    ensureSingleIdentity: ensureSingleIdentity,
    setLegacyEcid: legacyIdentity.setEcid,
    handleResponseForIdSyncs: handleResponseForIdSyncs,
    getEcidFromResponse: getEcidFromResponse,
    getIdentity: getIdentity,
    consent: consent,
    appendIdentityToUrl: appendIdentityToUrl,
    logger: logger,
    config: config
  });
};

createIdentity.namespace = "Identity";
createIdentity.configValidators = configValidators$1;
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createResultLogMessage$1 = function createResultLogMessage$1(urlDestination, success) {
  return "URL destination ".concat(success ? "succeeded" : "failed", ": ").concat(urlDestination.spec.url);
};

var injectProcessDestinations = function injectProcessDestinations(_ref55) {
  var fireReferrerHideableImage = _ref55.fireReferrerHideableImage,
      logger = _ref55.logger,
      cookieJar = _ref55.cookieJar,
      isPageSsl = _ref55.isPageSsl;
  var extraCookieOptions = isPageSsl ? {
    sameSite: "none",
    secure: true
  } : {};

  var processCookies = function processCookies(destinations) {
    var cookieDestinations = destinations.filter(function (dest) {
      return dest.type === "cookie";
    });
    cookieDestinations.forEach(function (dest) {
      var _dest$spec = dest.spec,
          name = _dest$spec.name,
          value = _dest$spec.value,
          domain = _dest$spec.domain,
          ttlDays = _dest$spec.ttlDays;
      cookieJar.set(name, value || "", _objectSpread({
        domain: domain || "",
        expires: ttlDays || 10
      }, extraCookieOptions));
    });
  };

  var processUrls = function processUrls(destinations) {
    var urlDestinations = destinations.filter(function (dest) {
      return dest.type === "url";
    });
    return Promise.all(urlDestinations.map(function (urlDestination) {
      return fireReferrerHideableImage(urlDestination.spec).then(function () {
        logger.info(createResultLogMessage$1(urlDestination, true));
      })["catch"](function () {// We intentionally do not throw an error if destinations fail. We
        // consider it a non-critical failure and therefore do not want it to
        // reject the promise handed back to the customer.
      });
    })).then(noop);
  };

  return function (destinations) {
    processCookies(destinations);
    return processUrls(destinations);
  };
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectProcessResponse = function injectProcessResponse(_ref56) {
  var processDestinations = _ref56.processDestinations;

  var processPushDestinations = function processPushDestinations(_ref57) {
    var response = _ref57.response;
    var destinations = response.getPayloadsByType("activation:push");
    return processDestinations(destinations);
  };

  var retrievePullDestinations = function retrievePullDestinations(_ref58) {
    var response = _ref58.response;
    return {
      destinations: response.getPayloadsByType("activation:pull")
    };
  };

  return function (_ref59) {
    var response = _ref59.response;
    return processPushDestinations({
      response: response
    }).then(function () {
      return retrievePullDestinations({
        response: response
      });
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createAudiences = function createAudiences(_ref60) {
  var logger = _ref60.logger,
      fireReferrerHideableImage = _ref60.fireReferrerHideableImage;
  // we override the js-cookie converter to encode the cookie value similar on how it is in DIL (PDCL-10238)
  var cookieJarWithEncoding = cookieJar.withConverter({
    write: function write(value) {
      return encodeURIComponent(value);
    }
  });
  var loggingCookieJar = createLoggingCookieJar({
    logger: logger,
    cookieJar: cookieJarWithEncoding
  });
  var processDestinations = injectProcessDestinations({
    fireReferrerHideableImage: fireReferrerHideableImage,
    logger: logger,
    cookieJar: loggingCookieJar,
    isPageSsl: window.location.protocol === "https:"
  });
  var processResponse = injectProcessResponse({
    processDestinations: processDestinations
  });
  return {
    lifecycle: {
      onResponse: processResponse
    },
    commands: {}
  };
};

createAudiences.namespace = "Audiences";
createAudiences.configValidators = {};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var WEB = "web";
var WEBAPP = "webapp";
var SURFACE_TYPE_DELIMITER = "://";
var FRAGMENT_DELIMITER = "#";
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var SURFACE_REGEX = /^(\w+):\/\/([^/#]+)(\/[^#]*)?(#.*)?$/;
var AUTHORITY_REGEX = /^(?:.*@)?(?:[a-z\d\u00a1-\uffff.-]+|\[[a-f\d:]+])(?::\d+)?$/;
var PATH_REGEX = /^\/(?:[/\w\u00a1-\uffff-.~]|%[a-fA-F\d]{2})*$/;
var FRAGMENT_REGEX = /^#(?:[/\w\u00a1-\uffff-.~]|%[a-fA-F\d]{2})+$/;

var normalizePath = function normalizePath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var end = path.length;

  while (end > 0 && "/".indexOf(path.charAt(end - 1)) !== -1) {
    end -= 1;
  }

  return path.substring(0, end) || "/";
};

var getSurfaceType = function getSurfaceType(surfaceTypeMatch) {
  return isNonEmptyString(surfaceTypeMatch) ? surfaceTypeMatch.toLowerCase() : "";
};

var getAuthority = function getAuthority(authorityMatch) {
  return isNonEmptyString(authorityMatch) ? authorityMatch.toLowerCase() : "";
};

var getPath = function getPath(pathMatch) {
  return isNonEmptyString(pathMatch) ? normalizePath(pathMatch) : "/";
};

var parseSurface = function parseSurface(surfaceString) {
  var matched = surfaceString.match(SURFACE_REGEX);
  return matched ? {
    surfaceType: getSurfaceType(matched[1]),
    authority: getAuthority(matched[2]),
    path: getPath(matched[3]),
    fragment: matched[4]
  } : null;
};

var stringifySurface = function stringifySurface(surface) {
  return "".concat(surface.surfaceType).concat(SURFACE_TYPE_DELIMITER).concat(surface.authority).concat(surface.path || "").concat(surface.fragment || "");
};

var buildPageSurface = function buildPageSurface(getPageLocation) {
  var location = getPageLocation();
  var host = location.host.toLowerCase();
  var path = location.pathname;
  return WEB + SURFACE_TYPE_DELIMITER + host + normalizePath(path);
};

var expandFragmentSurface = function expandFragmentSurface(surface, getPageLocation) {
  return startsWith(surface, FRAGMENT_DELIMITER) ? buildPageSurface(getPageLocation) + surface : surface;
};

var validateSurface = function validateSurface(surface, getPageLocation, logger) {
  var invalidateSurface = function invalidateSurface(validationError) {
    logger.warn(validationError);
    return null;
  };

  if (!isNonEmptyString(surface)) {
    return invalidateSurface("Invalid surface: ".concat(surface));
  }

  var expanded = expandFragmentSurface(surface, getPageLocation);
  var parsed = parseSurface(expanded);

  if (parsed === null) {
    return invalidateSurface("Invalid surface: ".concat(surface));
  }

  if (!includes([WEB, WEBAPP], parsed.surfaceType)) {
    return invalidateSurface("Unsupported surface type ".concat(parsed.surfaceType, " in surface: ").concat(surface));
  }

  if (!parsed.authority || !AUTHORITY_REGEX.test(parsed.authority)) {
    return invalidateSurface("Invalid authority ".concat(parsed.authority, " in surface: ").concat(surface));
  }

  if (parsed.path && !PATH_REGEX.test(parsed.path)) {
    return invalidateSurface("Invalid path ".concat(parsed.path, " in surface: ").concat(surface));
  }

  if (parsed.fragment && !FRAGMENT_REGEX.test(parsed.fragment)) {
    return invalidateSurface("Invalid fragment ".concat(parsed.fragment, " in surface: ").concat(surface));
  }

  return parsed;
};

var isPageWideSurface = function isPageWideSurface(scope) {
  return !!scope && scope.indexOf(WEB + SURFACE_TYPE_DELIMITER) === 0 && scope.indexOf(FRAGMENT_DELIMITER) === -1;
};

var normalizeSurfaces = function normalizeSurfaces() {
  var surfaces = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var getPageLocation = arguments.length > 1 ? arguments[1] : undefined;
  var logger = arguments.length > 2 ? arguments[2] : undefined;
  return surfaces.map(function (surface) {
    return validateSurface(surface, getPageLocation, logger);
  }).filter(function (surface) {
    return !isNil(surface);
  }).map(stringifySurface);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var PAGE_WIDE_SCOPE = "__view__";
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var DEFAULT_CONTENT_ITEM = "https://ns.adobe.com/personalization/default-content-item";
var DOM_ACTION = "https://ns.adobe.com/personalization/dom-action";
var HTML_CONTENT_ITEM = "https://ns.adobe.com/personalization/html-content-item";
var JSON_CONTENT_ITEM = "https://ns.adobe.com/personalization/json-content-item";
var REDIRECT_ITEM = "https://ns.adobe.com/personalization/redirect-item";
var MEASUREMENT_SCHEMA = "https://ns.adobe.com/personalization/measurement";
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var addPageWideScope = function addPageWideScope(scopes) {
  if (!includes(scopes, PAGE_WIDE_SCOPE)) {
    scopes.push(PAGE_WIDE_SCOPE);
  }
};

var addPageSurface = function addPageSurface(surfaces, getPageLocation) {
  var pageSurface = buildPageSurface(getPageLocation);

  if (!includes(surfaces, pageSurface)) {
    surfaces.push(pageSurface);
  }
};

var dedupe = function dedupe(array) {
  return array.filter(function (item, pos) {
    return array.indexOf(item) === pos;
  });
};

var createPersonalizationDetails = function createPersonalizationDetails(_ref61) {
  var getPageLocation = _ref61.getPageLocation,
      renderDecisions = _ref61.renderDecisions,
      decisionScopes = _ref61.decisionScopes,
      personalization = _ref61.personalization,
      event = _ref61.event,
      viewCache = _ref61.viewCache,
      logger = _ref61.logger;
  var viewName = event.getViewName();
  return {
    isRenderDecisions: function isRenderDecisions() {
      return renderDecisions;
    },
    getViewName: function getViewName() {
      return viewName;
    },
    hasScopes: function hasScopes() {
      return decisionScopes.length > 0 || isNonEmptyArray(personalization.decisionScopes);
    },
    hasSurfaces: function hasSurfaces() {
      return isNonEmptyArray(personalization.surfaces);
    },
    hasViewName: function hasViewName() {
      return isNonEmptyString(viewName);
    },
    createQueryDetails: function createQueryDetails() {
      var scopes = _toConsumableArray(decisionScopes);

      if (isNonEmptyArray(personalization.decisionScopes)) {
        scopes.push.apply(scopes, _toConsumableArray(personalization.decisionScopes));
      }

      var eventSurfaces = normalizeSurfaces(personalization.surfaces, getPageLocation, logger);

      if (!this.isCacheInitialized()) {
        addPageWideScope(scopes);
        addPageSurface(eventSurfaces, getPageLocation);
      }

      var schemas = [DEFAULT_CONTENT_ITEM, HTML_CONTENT_ITEM, JSON_CONTENT_ITEM, REDIRECT_ITEM];

      if (includes(scopes, PAGE_WIDE_SCOPE)) {
        schemas.push(DOM_ACTION);
      }

      return {
        schemas: schemas,
        decisionScopes: dedupe(scopes),
        surfaces: dedupe(eventSurfaces)
      };
    },
    isCacheInitialized: function isCacheInitialized() {
      return viewCache.isInitialized();
    },
    shouldFetchData: function shouldFetchData() {
      return this.hasScopes() || this.hasSurfaces() || !this.isCacheInitialized();
    },
    shouldUseCachedData: function shouldUseCachedData() {
      return this.hasViewName() && this.isCacheInitialized();
    }
  };
};
/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var AUTHORING_ENABLED = "Rendering is disabled for authoring mode.";
var REDIRECT_EXECUTION_ERROR = "An error occurred while executing the redirect offer.";
/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var EMPTY_PROPOSITIONS = {
  propositions: []
};

var validateApplyPropositionsOptions = function validateApplyPropositionsOptions(_ref62) {
  var logger = _ref62.logger,
      options = _ref62.options;
  var applyPropositionsOptionsValidator = boundObjectOf({
    propositions: boundArrayOf(boundObjectOf(boundAnything())).nonEmpty(),
    metadata: boundObjectOf(boundAnything())
  }).required();

  try {
    return applyPropositionsOptionsValidator(options);
  } catch (e) {
    logger.warn("Invalid options for applyPropositions. No propositions will be applied.", e);
    return EMPTY_PROPOSITIONS;
  }
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createComponent$1 = function createComponent$1(_ref63) {
  var getPageLocation = _ref63.getPageLocation,
      logger = _ref63.logger,
      fetchDataHandler = _ref63.fetchDataHandler,
      viewChangeHandler = _ref63.viewChangeHandler,
      onClickHandler = _ref63.onClickHandler,
      isAuthoringModeEnabled = _ref63.isAuthoringModeEnabled,
      mergeQuery = _ref63.mergeQuery,
      viewCache = _ref63.viewCache,
      showContainers = _ref63.showContainers,
      applyPropositions = _ref63.applyPropositions,
      setTargetMigration = _ref63.setTargetMigration;
  return {
    lifecycle: {
      onBeforeRequest: function onBeforeRequest(_ref64) {
        var request = _ref64.request;
        setTargetMigration(request);
        return Promise.resolve();
      },
      onBeforeEvent: function onBeforeEvent(_ref65) {
        var event = _ref65.event,
            renderDecisions = _ref65.renderDecisions,
            _ref65$decisionScopes = _ref65.decisionScopes,
            decisionScopes = _ref65$decisionScopes === void 0 ? [] : _ref65$decisionScopes,
            _ref65$personalizatio = _ref65.personalization,
            personalization = _ref65$personalizatio === void 0 ? {} : _ref65$personalizatio,
            _ref65$onResponse = _ref65.onResponse,
            onResponse = _ref65$onResponse === void 0 ? noop : _ref65$onResponse,
            _ref65$onRequestFailu = _ref65.onRequestFailure,
            onRequestFailure = _ref65$onRequestFailu === void 0 ? noop : _ref65$onRequestFailu;
        // Include propositions on all responses, overridden with data as needed
        onResponse(function () {
          return {
            propositions: []
          };
        });
        onRequestFailure(function () {
          return showContainers();
        });

        if (isAuthoringModeEnabled()) {
          logger.warn(AUTHORING_ENABLED); // If we are in authoring mode we disable personalization

          mergeQuery(event, {
            enabled: false
          });
          return;
        }

        var personalizationDetails = createPersonalizationDetails({
          getPageLocation: getPageLocation,
          renderDecisions: renderDecisions,
          decisionScopes: decisionScopes,
          personalization: personalization,
          event: event,
          viewCache: viewCache,
          logger: logger
        });

        if (personalizationDetails.shouldFetchData()) {
          var decisionsDeferred = defer();
          viewCache.storeViews(decisionsDeferred.promise);
          onRequestFailure(function () {
            return decisionsDeferred.reject();
          });
          fetchDataHandler({
            decisionsDeferred: decisionsDeferred,
            personalizationDetails: personalizationDetails,
            event: event,
            onResponse: onResponse
          });
          return;
        }

        if (personalizationDetails.shouldUseCachedData()) {
          // eslint-disable-next-line consistent-return
          return viewChangeHandler({
            personalizationDetails: personalizationDetails,
            event: event,
            onResponse: onResponse,
            onRequestFailure: onRequestFailure
          });
        }
      },
      onClick: function onClick(_ref66) {
        var event = _ref66.event,
            clickedElement = _ref66.clickedElement;
        onClickHandler({
          event: event,
          clickedElement: clickedElement
        });
      }
    },
    commands: {
      applyPropositions: {
        optionsValidator: function optionsValidator(options) {
          return validateApplyPropositionsOptions({
            logger: logger,
            options: options
          });
        },
        run: applyPropositions
      }
    }
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createFragment = function createFragment(content) {
  return createNode(DIV, {}, {
    innerHTML: content
  });
};

var css_escape = createCommonjsModule(function (module, exports) {
  (function (root, factory) {
    // https://github.com/umdjs/umd/blob/master/returnExports.js
    {
      // For Node.js.
      module.exports = factory(root);
    }
  })(typeof commonjsGlobal != 'undefined' ? commonjsGlobal : commonjsGlobal, function (root) {
    if (root.CSS && root.CSS.escape) {
      return root.CSS.escape;
    } // https://drafts.csswg.org/cssom/#serialize-an-identifier


    var cssEscape = function cssEscape(value) {
      if (arguments.length == 0) {
        throw new TypeError('`CSS.escape` requires an argument.');
      }

      var string = String(value);
      var length = string.length;
      var index = -1;
      var codeUnit;
      var result = '';
      var firstCodeUnit = string.charCodeAt(0);

      while (++index < length) {
        codeUnit = string.charCodeAt(index); // Note: there’s no need to special-case astral symbols, surrogate
        // pairs, or lone surrogates.
        // If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
        // (U+FFFD).

        if (codeUnit == 0x0000) {
          result += "\uFFFD";
          continue;
        }

        if ( // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
        // U+007F, […]
        codeUnit >= 0x0001 && codeUnit <= 0x001F || codeUnit == 0x007F || // If the character is the first character and is in the range [0-9]
        // (U+0030 to U+0039), […]
        index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039 || // If the character is the second character and is in the range [0-9]
        // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
        index == 1 && codeUnit >= 0x0030 && codeUnit <= 0x0039 && firstCodeUnit == 0x002D) {
          // https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
          result += '\\' + codeUnit.toString(16) + ' ';
          continue;
        }

        if ( // If the character is the first character and is a `-` (U+002D), and
        // there is no second character, […]
        index == 0 && length == 1 && codeUnit == 0x002D) {
          result += '\\' + string.charAt(index);
          continue;
        } // If the character is not handled by one of the above rules and is
        // greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
        // is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
        // U+005A), or [a-z] (U+0061 to U+007A), […]


        if (codeUnit >= 0x0080 || codeUnit == 0x002D || codeUnit == 0x005F || codeUnit >= 0x0030 && codeUnit <= 0x0039 || codeUnit >= 0x0041 && codeUnit <= 0x005A || codeUnit >= 0x0061 && codeUnit <= 0x007A) {
          // the character itself
          result += string.charAt(index);
          continue;
        } // Otherwise, the escaped character.
        // https://drafts.csswg.org/cssom/#escape-a-character


        result += '\\' + string.charAt(index);
      }

      return result;
    };

    if (!root.CSS) {
      root.CSS = {};
    }

    root.CSS.escape = cssEscape;
    return cssEscape;
  });
});
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var EQ_START = ":eq(";
var EQ_PATTERN = /:eq\((\d+)\)/g;

var isNotEqSelector = function isNotEqSelector(str) {
  return str.indexOf(EQ_START) === -1;
};

var splitWithEq = function splitWithEq(selector) {
  return selector.split(EQ_PATTERN).filter(isNonEmptyString);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var CSS_IDENTIFIER_PATTERN = /(#|\.)(-?\w+)/g; // Here we use CSS.escape() to make sure we get
// correct values for ID and CSS class
// Please check:  https://www.w3.org/TR/css-syntax-3/#escaping
// CSS.escape() polyfill can be found here: https://github.com/mathiasbynens/CSS.escape

var replaceIdentifier = function replaceIdentifier(_, $1, $2) {
  return "".concat($1).concat(css_escape($2));
};

var escapeIdentifiersInSelector = function escapeIdentifiersInSelector(selector) {
  return selector.replace(CSS_IDENTIFIER_PATTERN, replaceIdentifier);
};

var parseSelector = function parseSelector(rawSelector) {
  var result = [];
  var selector = escapeIdentifiersInSelector(rawSelector.trim());
  var parts = splitWithEq(selector);
  var length = parts.length;
  var i = 0;

  while (i < length) {
    var sel = parts[i];
    var eq = parts[i + 1];

    if (eq) {
      result.push({
        sel: sel,
        eq: Number(eq)
      });
    } else {
      result.push({
        sel: sel
      });
    }

    i += 2;
  }

  return result;
};
/**
 * Returns an array of matched DOM nodes.
 * @param {String} selector that contains Sizzle "eq(...)" pseudo selector
 * @returns {Array} an array of DOM nodes
 */


var selectNodesWithEq = function selectNodesWithEq(selector) {
  var doc = document;

  if (isNotEqSelector(selector)) {
    return selectNodes(selector, doc);
  }

  var parts = parseSelector(selector);
  var length = parts.length;
  var result = [];
  var context = doc;
  var i = 0;

  while (i < length) {
    var _parts$i = parts[i],
        sel = _parts$i.sel,
        eq = _parts$i.eq;
    var nodes = selectNodes(sel, context);
    var nodesCount = nodes.length;

    if (nodesCount === 0) {
      break;
    }

    if (eq != null && eq > nodesCount - 1) {
      break;
    }

    if (i < length - 1) {
      if (eq == null) {
        var _nodes = _slicedToArray(nodes, 1);

        context = _nodes[0];
      } else {
        context = nodes[eq];
      }
    }

    if (i === length - 1) {
      if (eq == null) {
        result = nodes;
      } else {
        result = [nodes[eq]];
      }
    }

    i += 1;
  }

  return result;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns an array of matched DOM nodes.
 * @param {String} id
 * @param {Node} [context=document] defaults to document
 * @returns {HTMLElement} an element of null
 */


var getElementById = function getElementById(id) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return context.getElementById(id);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var setAttribute = function setAttribute(element, name, value) {
  element.setAttribute(name, value);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getAttribute = function getAttribute(element, name) {
  return element.getAttribute(name);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var removeAttribute = function removeAttribute(element, name) {
  element.removeAttribute(name);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var setStyle = function setStyle(element, name, value, priority) {
  var css;

  if (priority) {
    css = "".concat(name, ":").concat(value, " !").concat(priority, ";");
  } else {
    css = "".concat(name, ":").concat(value, ";");
  }

  element.style.cssText += ";".concat(css);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getParent = function getParent(element) {
  return element.parentNode;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getNextSibling = function getNextSibling(element) {
  return element.nextElementSibling;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var insertAfter = function insertAfter(container, element) {
  if (!container) {
    return;
  }

  var parent = getParent(container);

  if (parent) {
    parent.insertBefore(element, getNextSibling(container));
  }
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var insertBefore = function insertBefore(container, element) {
  if (!container) {
    return;
  }

  var parent = getParent(container);

  if (parent) {
    parent.insertBefore(element, container);
  }
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getChildren = function getChildren(element) {
  var children = element.children;

  if (children) {
    return toArray(children);
  }

  return [];
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getChildNodes = function getChildNodes(element) {
  var childNodes = element.childNodes;

  if (childNodes) {
    return toArray(childNodes);
  }

  return [];
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getFirstChild = function getFirstChild(element) {
  return element.firstElementChild;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var nonce;
/**
 * Returns the nonce if available.
 * @param {Node} [context=document] defaults to document
 * @returns {(String|undefined)} the nonce or undefined if not available
 */

var getNonce = function getNonce() {
  var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

  if (nonce === undefined) {
    var n = context.querySelector("[nonce]"); // NOTE: We're keeping n.getAttribute("nonce") until it is safe to remove:
    //   ref: https://github.com/whatwg/html/issues/2369#issuecomment-280853946

    nonce = n && (n.nonce || n.getAttribute("nonce"));
  }

  return nonce;
}; // This function is only used for testing and removed when library is built (tree-shaking)

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var PREHIDING_ID = "alloy-prehiding";
var HIDING_STYLE_DEFINITION = "{ visibility: hidden }"; // Using global is OK since we have a single DOM
// so storing nodes even for multiple Alloy instances is fine

var styleNodes = {};

var hideElements = function hideElements(prehidingSelector) {
  // if we have different events with the same
  // prehiding selector we don't want to recreate
  // the style tag
  if (styleNodes[prehidingSelector]) {
    return;
  }

  var nonce = getNonce();

  var attrs = _objectSpread({}, nonce && {
    nonce: nonce
  });

  var props = {
    textContent: "".concat(prehidingSelector, " ").concat(HIDING_STYLE_DEFINITION)
  };
  var node = createNode(STYLE, attrs, props);
  appendNode(document.head, node);
  styleNodes[prehidingSelector] = node;
};

var showElements = function showElements(prehidingSelector) {
  var node = styleNodes[prehidingSelector];

  if (node) {
    removeNode(node);
    delete styleNodes[prehidingSelector];
  }
};

var hideContainers = function hideContainers(prehidingStyle) {
  if (!prehidingStyle) {
    return;
  } // If containers prehiding style has been added
  // by customer's prehiding snippet we don't
  // want to add the same node


  var node = getElementById(PREHIDING_ID);

  if (node) {
    return;
  }

  var nonce = getNonce();

  var attrs = _objectSpread({
    id: PREHIDING_ID
  }, nonce && {
    nonce: nonce
  });

  var props = {
    textContent: prehidingStyle
  };
  var styleNode = createNode(STYLE, attrs, props);
  appendNode(document.head, styleNode);
};

var showContainers = function showContainers() {
  // If containers prehiding style exists
  // we will remove it
  var node = getElementById(PREHIDING_ID);

  if (!node) {
    return;
  }

  removeNode(node);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var setText = function setText(container, text) {
  container.textContent = text;
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var SRC = "src";
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var isImage = function isImage(element) {
  return element.tagName === IMG;
};

var loadImage = function loadImage(url) {
  return createNode(IMG, {
    src: url
  });
};

var loadImages = function loadImages(fragment) {
  var images = selectNodes(IMG, fragment);
  images.forEach(function (image) {
    var url = getAttribute(image, SRC);

    if (url) {
      loadImage(url);
    }
  });
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var is = function is(element, tagName) {
  return element.tagName === tagName;
};

var isInlineStyleElement = function isInlineStyleElement(element) {
  return is(element, STYLE) && !getAttribute(element, SRC);
};

var addNonceToInlineStyleElements = function addNonceToInlineStyleElements(fragment) {
  var styleNodes = selectNodes(STYLE, fragment);
  var length = styleNodes.length;
  var nonce = getNonce();

  if (!nonce) {
    return;
  }
  /* eslint-disable no-continue */


  for (var _i7 = 0; _i7 < length; _i7 += 1) {
    var element = styleNodes[_i7];

    if (!isInlineStyleElement(element)) {
      continue;
    }

    element.nonce = nonce;
  }
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var is$1 = function is$1(element, tagName) {
  return !!element && element.tagName === tagName;
};

var isInlineScript = function isInlineScript(element) {
  return is$1(element, SCRIPT) && !getAttribute(element, SRC);
};

var isRemoteScript = function isRemoteScript(element) {
  return is$1(element, SCRIPT) && getAttribute(element, SRC);
};

var getInlineScripts = function getInlineScripts(fragment) {
  var scripts = selectNodes(SCRIPT, fragment);
  var result = [];
  var length = scripts.length;
  var nonce = getNonce();

  var attributes = _objectSpread({}, nonce && {
    nonce: nonce
  });
  /* eslint-disable no-continue */


  for (var _i8 = 0; _i8 < length; _i8 += 1) {
    var element = scripts[_i8];

    if (!isInlineScript(element)) {
      continue;
    }

    var textContent = element.textContent;

    if (!textContent) {
      continue;
    }

    result.push(createNode(SCRIPT, attributes, {
      textContent: textContent
    }));
  }
  /* eslint-enable no-continue */


  return result;
};

var getRemoteScriptsUrls = function getRemoteScriptsUrls(fragment) {
  var scripts = selectNodes(SCRIPT, fragment);
  var result = [];
  var length = scripts.length;
  /* eslint-disable no-continue */

  for (var _i9 = 0; _i9 < length; _i9 += 1) {
    var element = scripts[_i9];

    if (!isRemoteScript(element)) {
      continue;
    }

    var url = getAttribute(element, SRC);

    if (!url) {
      continue;
    }

    result.push(url);
  }
  /* eslint-enable no-continue */


  return result;
};

var executeInlineScripts = function executeInlineScripts(parent, scripts) {
  scripts.forEach(function (script) {
    parent.appendChild(script);
    parent.removeChild(script);
  });
};

var executeRemoteScripts = function executeRemoteScripts(urls) {
  return Promise.all(urls.map(_reactorLoadScript["default"]));
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var appendHtml = function appendHtml(container, html) {
  var fragment = createFragment(html);
  addNonceToInlineStyleElements(fragment);
  var elements = getChildNodes(fragment);
  var scripts = getInlineScripts(fragment);
  var scriptsUrls = getRemoteScriptsUrls(fragment);
  loadImages(fragment);
  elements.forEach(function (element) {
    appendNode(container, element);
  });
  executeInlineScripts(container, scripts);
  return executeRemoteScripts(scriptsUrls);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var clear = function clear(container) {
  // We want to remove ALL nodes, text, comments etc
  var childNodes = getChildNodes(container);
  childNodes.forEach(removeNode);
};

var setHtml = function setHtml(container, html) {
  clear(container);
  appendHtml(container, html);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var prependHtml = function prependHtml(container, html) {
  var fragment = createFragment(html);
  addNonceToInlineStyleElements(fragment);
  var elements = getChildNodes(fragment);
  var scripts = getInlineScripts(fragment);
  var scriptsUrls = getRemoteScriptsUrls(fragment);
  var length = elements.length;
  var i = length - 1; // We have to proactively load images to avoid flicker

  loadImages(fragment); // We are inserting elements in reverse order

  while (i >= 0) {
    var element = elements[i];
    var firstChild = getFirstChild(container);

    if (firstChild) {
      insertBefore(firstChild, element);
    } else {
      appendNode(container, element);
    }

    i -= 1;
  }

  executeInlineScripts(container, scripts);
  return executeRemoteScripts(scriptsUrls);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var insertHtmlBefore = function insertHtmlBefore(container, html) {
  var fragment = createFragment(html);
  addNonceToInlineStyleElements(fragment);
  var elements = getChildNodes(fragment);
  var scripts = getInlineScripts(fragment);
  var scriptsUrls = getRemoteScriptsUrls(fragment);
  loadImages(fragment);
  elements.forEach(function (element) {
    insertBefore(container, element);
  });
  executeInlineScripts(container, scripts);
  return executeRemoteScripts(scriptsUrls);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var replaceHtml = function replaceHtml(container, html) {
  insertHtmlBefore(container, html);
  removeNode(container);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var insertHtmlAfter = function insertHtmlAfter(container, html) {
  var fragment = createFragment(html);
  addNonceToInlineStyleElements(fragment);
  var elements = getChildNodes(fragment);
  var scripts = getInlineScripts(fragment);
  var scriptsUrls = getRemoteScriptsUrls(fragment);
  loadImages(fragment);
  elements.forEach(function (element) {
    insertAfter(container, element);
  });
  executeInlineScripts(container, scripts);
  return executeRemoteScripts(scriptsUrls);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var setStyles = function setStyles(container, styles) {
  var priority = styles.priority,
      style = _objectWithoutProperties(styles, ["priority"]);

  Object.keys(style).forEach(function (key) {
    setStyle(container, key, style[key], priority);
  });
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var setAttributes = function setAttributes(container, attributes) {
  Object.keys(attributes).forEach(function (key) {
    setAttribute(container, key, attributes[key]);
  });
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var swapImage = function swapImage(container, url) {
  if (!isImage(container)) {
    return;
  } // Start downloading the image


  loadImage(url); // Remove "src" so there is no flicker

  removeAttribute(container, SRC); // Replace the image "src"

  setAttribute(container, SRC, url);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var rearrangeChildren = function rearrangeChildren(container, _ref67) {
  var from = _ref67.from,
      to = _ref67.to;
  var children = getChildren(container);
  var elementFrom = children[from];
  var elementTo = children[to];

  if (!elementFrom || !elementTo) {
    // TODO: We will need to add logging
    // to ease troubleshooting
    return;
  }

  if (from < to) {
    insertAfter(elementTo, elementFrom);
  } else {
    insertBefore(elementTo, elementFrom);
  }
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var _click = function click(settings, store) {
  var selector = settings.selector,
      meta = settings.meta;
  store({
    selector: selector,
    meta: meta
  });
  return Promise.resolve();
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var renderContent = function renderContent(elements, content, renderFunc) {
  var executions = elements.map(function (element) {
    return renderFunc(element, content);
  });
  return Promise.all(executions);
};

var createAction = function createAction(renderFunc) {
  return function (settings) {
    var selector = settings.selector,
        prehidingSelector = settings.prehidingSelector,
        content = settings.content,
        meta = settings.meta;
    hideElements(prehidingSelector);
    return awaitSelector(selector, selectNodesWithEq).then(function (elements) {
      return renderContent(elements, content, renderFunc);
    }).then(function () {
      // if everything is OK, show elements
      showElements(prehidingSelector);
      return {
        meta: meta
      };
    }, function (error) {
      // in case of awaiting timing or error, we need to remove the style tag
      // hence showing the pre-hidden elements
      showElements(prehidingSelector);
      return {
        meta: meta,
        error: error
      };
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var initDomActionsModules = function initDomActionsModules(store) {
  return {
    setHtml: createAction(setHtml),
    customCode: createAction(prependHtml),
    setText: createAction(setText),
    setAttribute: createAction(setAttributes),
    setImageSource: createAction(swapImage),
    setStyle: createAction(setStyles),
    move: createAction(setStyles),
    resize: createAction(setStyles),
    rearrange: createAction(rearrangeChildren),
    remove: createAction(removeNode),
    insertAfter: createAction(insertHtmlAfter),
    insertBefore: createAction(insertHtmlBefore),
    replaceHtml: createAction(replaceHtml),
    prependHtml: createAction(prependHtml),
    appendHtml: createAction(appendHtml),
    click: function click(settings) {
      return _click(settings, store);
    },
    defaultContent: function defaultContent(settings) {
      return Promise.resolve({
        meta: settings.meta
      });
    }
  };
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Returns whether a string value is blank. Also returns true if the value is not a string.
 * @param {*} value
 * @returns {boolean}
 */


var isBlankString = function isBlankString(value) {
  return isString(value) ? !value.trim() : true;
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var APPEND_HTML = "appendHtml";
var HEAD_TAGS_SELECTOR = "SCRIPT,LINK,STYLE";

var filterHeadContent = function filterHeadContent(content) {
  var container = createFragment(content);
  var headNodes = selectNodes(HEAD_TAGS_SELECTOR, container);
  return headNodes.map(function (node) {
    return node.outerHTML;
  }).join("");
};

var remapHeadOffers = function remapHeadOffers(action) {
  var result = (0, _reactorObjectAssign["default"])({}, action);
  var content = result.content,
      selector = result.selector;

  if (isBlankString(content)) {
    return result;
  }

  var container = selectNodesWithEq(selector);

  if (!is$1(container[0], HEAD)) {
    return result;
  }

  result.type = APPEND_HTML;
  result.content = filterHeadContent(content);
  return result;
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var ACTION_CUSTOM_CODE = "customCode";
var TARGET_BODY_SELECTOR = "BODY > *:eq(0)";

var remapCustomCodeOffers = function remapCustomCodeOffers(action) {
  var selector = action.selector,
      type = action.type;

  if (type !== ACTION_CUSTOM_CODE) {
    return action;
  }

  if (selector !== TARGET_BODY_SELECTOR) {
    return action;
  }

  return (0, _reactorObjectAssign["default"])({}, action, {
    selector: "BODY"
  });
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var logActionError = function logActionError(logger, action, error) {
  if (logger.enabled) {
    var details = JSON.stringify(action);
    var message = error.message,
        stack = error.stack;
    var errorMessage = "Failed to execute action ".concat(details, ". ").concat(message, " ").concat(stack ? "\n ".concat(stack) : "");
    logger.error(errorMessage);
  }
};

var logActionCompleted = function logActionCompleted(logger, action) {
  if (logger.enabled) {
    var details = JSON.stringify(action);
    logger.info("Action ".concat(details, " executed."));
  }
};

var executeAction = function executeAction(logger, modules, type, args) {
  var execute = modules[type];

  if (!execute) {
    var error = new Error("DOM action \"".concat(type, "\" not found"));
    logActionError(logger, args[0], error);
    throw error;
  }

  return execute.apply(void 0, _toConsumableArray(args));
};

var PREPROCESSORS = [remapHeadOffers, remapCustomCodeOffers];

var preprocess = function preprocess(action) {
  return PREPROCESSORS.reduce(function (processed, fn) {
    return (0, _reactorObjectAssign["default"])(processed, fn(processed));
  }, action);
};

var executeActions = function executeActions(actions, modules, logger) {
  var actionPromises = actions.map(function (action) {
    var processedAction = preprocess(action);
    var type = processedAction.type;
    return executeAction(logger, modules, type, [processedAction]).then(function (result) {
      logActionCompleted(logger, processedAction);
      return result;
    })["catch"](function (error) {
      logActionError(logger, processedAction, error);
      throw error;
    });
  });
  return Promise.all(actionPromises);
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var DISPLAY = "decisioning.propositionDisplay";
var INTERACT = "decisioning.propositionInteract";
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var PropositionEventType = {
  DISPLAY: "display",
  INTERACT: "interact"
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createCollect = function createCollect(_ref68) {
  var eventManager = _ref68.eventManager,
      mergeDecisionsMeta = _ref68.mergeDecisionsMeta;
  // Called when a decision is auto-rendered for the __view__ scope or a SPA view(display and empty display notification)
  return function (_ref69) {
    var _ref69$decisionsMeta = _ref69.decisionsMeta,
        decisionsMeta = _ref69$decisionsMeta === void 0 ? [] : _ref69$decisionsMeta,
        _ref69$documentMayUnl = _ref69.documentMayUnload,
        documentMayUnload = _ref69$documentMayUnl === void 0 ? false : _ref69$documentMayUnl,
        viewName = _ref69.viewName;
    var event = eventManager.createEvent();
    var data = {
      eventType: DISPLAY
    };

    if (viewName) {
      data.web = {
        webPageDetails: {
          viewName: viewName
        }
      };
    }

    if (isNonEmptyArray(decisionsMeta)) {
      mergeDecisionsMeta(event, decisionsMeta, PropositionEventType.DISPLAY);
    }

    event.mergeXdm(data);

    if (documentMayUnload) {
      event.documentMayUnload();
    }

    return eventManager.sendEvent(event);
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var DEFAULT_ACTION_TYPE = "defaultContent";

var identity = function identity(item) {
  return item;
};

var getItemMeta = function getItemMeta(item, decisionMeta) {
  return item.characteristics && item.characteristics.trackingLabel ? (0, _reactorObjectAssign["default"])({
    trackingLabel: item.characteristics.trackingLabel
  }, decisionMeta) : decisionMeta;
};

var buildActions = function buildActions(decision) {
  var decisionMeta = {
    id: decision.id,
    scope: decision.scope,
    scopeDetails: decision.scopeDetails
  };
  return decision.items.map(function (item) {
    return (0, _reactorObjectAssign["default"])({
      type: DEFAULT_ACTION_TYPE
    }, item.data, {
      meta: getItemMeta(item, decisionMeta)
    });
  });
};

var processMetas = function processMetas(logger, actionResults) {
  var results = flatMap(actionResults, identity);
  var finalMetas = [];
  var set = new Set();
  results.forEach(function (item) {
    // for click actions we don't return an item
    if (!item) {
      return;
    }

    if (item.error) {
      logger.warn(item);
      return;
    }

    var meta = item.meta;

    if (set.has(meta.id)) {
      return;
    }

    set.add(meta.id);
    finalMetas.push(meta);
  });
  return finalMetas;
};

var createExecuteDecisions = function createExecuteDecisions(_ref70) {
  var modules = _ref70.modules,
      logger = _ref70.logger,
      executeActions = _ref70.executeActions;
  return function (decisions) {
    var actionResultsPromises = decisions.map(function (decision) {
      var actions = buildActions(decision);
      return executeActions(actions, modules, logger);
    });
    return Promise.all(actionResultsPromises).then(function (results) {
      return processMetas(logger, results);
    })["catch"](function (error) {
      logger.error(error);
    });
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createFetchDataHandler = function createFetchDataHandler(_ref71) {
  var prehidingStyle = _ref71.prehidingStyle,
      responseHandler = _ref71.responseHandler,
      hideContainers = _ref71.hideContainers,
      mergeQuery = _ref71.mergeQuery;
  return function (_ref72) {
    var decisionsDeferred = _ref72.decisionsDeferred,
        personalizationDetails = _ref72.personalizationDetails,
        event = _ref72.event,
        onResponse = _ref72.onResponse;

    if (personalizationDetails.isRenderDecisions()) {
      hideContainers(prehidingStyle);
    }

    mergeQuery(event, personalizationDetails.createQueryDetails());
    onResponse(function (_ref73) {
      var response = _ref73.response;
      return responseHandler({
        decisionsDeferred: decisionsDeferred,
        personalizationDetails: personalizationDetails,
        response: response
      });
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var matchesSelectorWithEq = function matchesSelectorWithEq(selector, element) {
  if (isNotEqSelector(selector)) {
    return matchesSelector(selector, element);
  } // Using node selection vs matches selector, because of :eq()
  // Find all nodes using document as context


  var nodes = selectNodesWithEq(selector);
  var result = false; // Iterate through all the identified elements
  // and reference compare with element

  for (var _i10 = 0; _i10 < nodes.length; _i10 += 1) {
    if (nodes[_i10] === element) {
      result = true;
      break;
    }
  }

  return result;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getMetasIfMatches = function getMetasIfMatches(clickedElement, selector, getClickMetasBySelector) {
  var _document = document,
      documentElement = _document.documentElement;
  var element = clickedElement;
  var i = 0;

  while (element && element !== documentElement) {
    if (matchesSelectorWithEq(selector, element)) {
      var matchedMetas = getClickMetasBySelector(selector);
      var foundMetaWithLabel = matchedMetas.find(function (meta) {
        return meta.trackingLabel;
      });

      if (foundMetaWithLabel) {
        return {
          metas: matchedMetas,
          label: foundMetaWithLabel.trackingLabel,
          weight: i
        };
      }

      return {
        metas: matchedMetas
      };
    }

    element = element.parentNode;
    i += 1;
  }

  return {
    metas: null
  };
};

var cleanMetas = function cleanMetas(metas) {
  return metas.map(function (meta) {
    delete meta.trackingLabel;
    return meta;
  });
};

var dedupMetas = function dedupMetas(metas) {
  return metas.filter(function (meta, index) {
    var stringifiedMeta = JSON.stringify(meta);
    return index === metas.findIndex(function (innerMeta) {
      return JSON.stringify(innerMeta) === stringifiedMeta;
    });
  });
};

var collectClicks = function collectClicks(clickedElement, selectors, getClickMetasBySelector) {
  var result = [];
  var resultLabel = "";
  var resultLabelWeight = Number.MAX_SAFE_INTEGER;
  /* eslint-disable no-continue */

  for (var _i11 = 0; _i11 < selectors.length; _i11 += 1) {
    var _getMetasIfMatches = getMetasIfMatches(clickedElement, selectors[_i11], getClickMetasBySelector),
        metas = _getMetasIfMatches.metas,
        label = _getMetasIfMatches.label,
        weight = _getMetasIfMatches.weight;

    if (!metas) {
      continue;
    }

    if (label && weight <= resultLabelWeight) {
      resultLabel = label;
      resultLabelWeight = weight;
    }

    result.push.apply(result, _toConsumableArray(cleanMetas(metas)));
  }

  return {
    decisionsMeta: dedupMetas(result),
    eventLabel: resultLabel
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var isAuthoringModeEnabled = function isAuthoringModeEnabled() {
  var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  return doc.location.href.indexOf("adobe_authoring_enabled") !== -1;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var EVENT_TYPE_TRUE = 1;
/* eslint-disable no-underscore-dangle */

var mergeDecisionsMeta = function mergeDecisionsMeta(event, decisionsMeta, eventType) {
  var eventLabel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  var xdm = {
    _experience: {
      decisioning: {
        propositions: decisionsMeta,
        propositionEventType: _defineProperty({}, eventType, EVENT_TYPE_TRUE)
      }
    }
  };

  if (eventLabel) {
    xdm._experience.decisioning.propositionAction = {
      label: eventLabel
    };
  }

  event.mergeXdm(xdm);
};

var mergeQuery = function mergeQuery(event, details) {
  event.mergeQuery({
    personalization: _objectSpread({}, details)
  });
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createOnClickHandler = function createOnClickHandler(_ref74) {
  var mergeDecisionsMeta = _ref74.mergeDecisionsMeta,
      collectClicks = _ref74.collectClicks,
      getClickSelectors = _ref74.getClickSelectors,
      getClickMetasBySelector = _ref74.getClickMetasBySelector;
  // Called when an element qualifying for conversion within an offer is clicked.
  return function (_ref75) {
    var event = _ref75.event,
        clickedElement = _ref75.clickedElement;
    var selectors = getClickSelectors();

    if (isNonEmptyArray(selectors)) {
      var _collectClicks = collectClicks(clickedElement, selectors, getClickMetasBySelector),
          decisionsMeta = _collectClicks.decisionsMeta,
          eventLabel = _collectClicks.eventLabel;

      if (isNonEmptyArray(decisionsMeta)) {
        var xdm = {
          eventType: INTERACT
        };
        var scope = decisionsMeta[0].scope;

        if (scope !== PAGE_WIDE_SCOPE) {
          xdm.web = {
            webPageDetails: {
              viewName: scope
            }
          };
        }

        event.mergeXdm(xdm);
        mergeDecisionsMeta(event, decisionsMeta, PropositionEventType.INTERACT, eventLabel);
      }
    }
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createViewCacheManager = function createViewCacheManager() {
  var viewStorage;
  var viewStorageDeferred = defer();

  var storeViews = function storeViews(decisionsPromise) {
    decisionsPromise.then(function (decisions) {
      if (viewStorage === undefined) {
        viewStorage = {};
      }

      (0, _reactorObjectAssign["default"])(viewStorage, decisions);
      viewStorageDeferred.resolve();
    })["catch"](function () {
      if (viewStorage === undefined) {
        viewStorage = {};
      }

      viewStorageDeferred.resolve();
    });
  };

  var getView = function getView(viewName) {
    return viewStorageDeferred.promise.then(function () {
      return viewStorage[viewName] || [];
    });
  };

  var isInitialized = function isInitialized() {
    return !(viewStorage === undefined);
  };

  return {
    storeViews: storeViews,
    getView: getView,
    isInitialized: isInitialized
  };
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var addRenderAttemptedToDecisions = function addRenderAttemptedToDecisions(_ref76) {
  var decisions = _ref76.decisions,
      renderAttempted = _ref76.renderAttempted;
  return decisions.map(function (decision) {
    return (0, _reactorObjectAssign["default"])({
      renderAttempted: renderAttempted
    }, decision);
  });
};
/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var composePersonalizationResultingObject = function composePersonalizationResultingObject() {
  var decisions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var renderDecisions = arguments.length > 1 ? arguments[1] : undefined;
  var resultingObject = {
    propositions: addRenderAttemptedToDecisions({
      decisions: decisions,
      renderAttempted: renderDecisions
    })
  };

  if (!renderDecisions) {
    resultingObject.decisions = decisions;
  }

  return resultingObject;
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createViewChangeHandler = function createViewChangeHandler(_ref77) {
  var mergeDecisionsMeta = _ref77.mergeDecisionsMeta,
      collect = _ref77.collect,
      executeDecisions = _ref77.executeDecisions,
      viewCache = _ref77.viewCache;
  return function (_ref78) {
    var personalizationDetails = _ref78.personalizationDetails,
        event = _ref78.event,
        onResponse = _ref78.onResponse;
    var viewName = personalizationDetails.getViewName();
    return viewCache.getView(viewName).then(function (viewDecisions) {
      if (personalizationDetails.isRenderDecisions()) {
        return executeDecisions(viewDecisions).then(function (decisionsMeta) {
          // if there are decisions to be rendered we render them and attach the result in experience.decisions.propositions
          if (isNonEmptyArray(decisionsMeta)) {
            mergeDecisionsMeta(event, decisionsMeta, PropositionEventType.DISPLAY);
            onResponse(function () {
              return composePersonalizationResultingObject(viewDecisions, true);
            });
            return;
          } // if there are no decisions in cache for this view, we will send a empty notification


          onResponse(function () {
            collect({
              decisionsMeta: [],
              viewName: viewName
            });
            return composePersonalizationResultingObject(viewDecisions, true);
          });
        });
      }

      onResponse(function () {
        return composePersonalizationResultingObject(viewDecisions, false);
      });
      return {};
    });
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var isPageWideScope = function isPageWideScope(scope) {
  return scope === PAGE_WIDE_SCOPE || isPageWideSurface(scope);
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var VIEW_SCOPE_TYPE = "view";
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var splitItems = function splitItems(items, schemas) {
  var matched = [];
  var nonMatched = [];
  items.forEach(function (item) {
    if (includes(schemas, item.schema)) {
      matched.push(item);
    } else {
      nonMatched.push(item);
    }
  });
  return [matched, nonMatched];
};

var createDecision = function createDecision(decision, items) {
  return {
    id: decision.id,
    scope: decision.scope,
    items: items,
    scopeDetails: decision.scopeDetails
  };
};

var splitMergedMetricDecisions = function splitMergedMetricDecisions(decisions) {
  var matchedDecisions = decisions.filter(function (decision) {
    var _decision$items = decision.items,
        items = _decision$items === void 0 ? [] : _decision$items;
    return items.some(function (item) {
      return item.schema === MEASUREMENT_SCHEMA;
    });
  });
  var unmatchedDecisions = decisions.filter(function (decision) {
    return !includes(matchedDecisions, decision);
  });
  return {
    matchedDecisions: matchedDecisions,
    unmatchedDecisions: unmatchedDecisions
  };
};

var splitDecisions = function splitDecisions(decisions) {
  for (var _len6 = arguments.length, schemas = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    schemas[_key6 - 1] = arguments[_key6];
  }

  var matchedDecisions = [];
  var unmatchedDecisions = [];
  decisions.forEach(function (decision) {
    var _decision$items2 = decision.items,
        items = _decision$items2 === void 0 ? [] : _decision$items2;

    var _splitItems = splitItems(items, schemas),
        _splitItems2 = _slicedToArray(_splitItems, 2),
        matchedItems = _splitItems2[0],
        nonMatchedItems = _splitItems2[1];

    if (isNonEmptyArray(matchedItems)) {
      matchedDecisions.push(createDecision(decision, matchedItems));
    }

    if (isNonEmptyArray(nonMatchedItems)) {
      unmatchedDecisions.push(createDecision(decision, nonMatchedItems));
    }
  });
  return {
    matchedDecisions: matchedDecisions,
    unmatchedDecisions: unmatchedDecisions
  };
};

var appendScopeDecision = function appendScopeDecision(scopeDecisions, decision) {
  if (!scopeDecisions[decision.scope]) {
    scopeDecisions[decision.scope] = [];
  }

  scopeDecisions[decision.scope].push(decision);
};

var isViewScope = function isViewScope(scopeDetails) {
  return scopeDetails.characteristics && scopeDetails.characteristics.scopeType && scopeDetails.characteristics.scopeType === VIEW_SCOPE_TYPE;
};

var extractDecisionsByScope = function extractDecisionsByScope(decisions) {
  var pageWideScopeDecisions = [];
  var nonPageWideScopeDecisions = [];
  var viewScopeDecisions = {};

  if (isNonEmptyArray(decisions)) {
    decisions.forEach(function (decision) {
      if (isPageWideScope(decision.scope)) {
        pageWideScopeDecisions.push(decision);
      } else if (isViewScope(decision.scopeDetails)) {
        appendScopeDecision(viewScopeDecisions, decision);
      } else {
        nonPageWideScopeDecisions.push(decision);
      }
    });
  }

  return {
    pageWideScopeDecisions: pageWideScopeDecisions,
    nonPageWideScopeDecisions: nonPageWideScopeDecisions,
    viewScopeDecisions: viewScopeDecisions
  };
};

var groupDecisions = function groupDecisions(unprocessedDecisions) {
  // split redirect decisions
  var decisionsGroupedByRedirectItemSchema = splitDecisions(unprocessedDecisions, REDIRECT_ITEM); // split merged measurement decisions

  var mergedMetricDecisions = splitMergedMetricDecisions(decisionsGroupedByRedirectItemSchema.unmatchedDecisions); // split renderable decisions

  var decisionsGroupedByRenderableSchemas = splitDecisions(mergedMetricDecisions.unmatchedDecisions, DOM_ACTION, DEFAULT_CONTENT_ITEM); // group renderable decisions by scope

  var _extractDecisionsBySc = extractDecisionsByScope(decisionsGroupedByRenderableSchemas.matchedDecisions),
      pageWideScopeDecisions = _extractDecisionsBySc.pageWideScopeDecisions,
      nonPageWideScopeDecisions = _extractDecisionsBySc.nonPageWideScopeDecisions,
      viewScopeDecisions = _extractDecisionsBySc.viewScopeDecisions;

  return {
    redirectDecisions: decisionsGroupedByRedirectItemSchema.matchedDecisions,
    pageWideScopeDecisions: pageWideScopeDecisions,
    viewDecisions: viewScopeDecisions,
    nonAutoRenderableDecisions: [].concat(_toConsumableArray(mergedMetricDecisions.matchedDecisions), _toConsumableArray(decisionsGroupedByRenderableSchemas.unmatchedDecisions), _toConsumableArray(nonPageWideScopeDecisions))
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var DECISIONS_HANDLE = "personalization:decisions";

var createOnResponseHandler = function createOnResponseHandler(_ref79) {
  var autoRenderingHandler = _ref79.autoRenderingHandler,
      nonRenderingHandler = _ref79.nonRenderingHandler,
      groupDecisions = _ref79.groupDecisions,
      handleRedirectDecisions = _ref79.handleRedirectDecisions,
      showContainers = _ref79.showContainers;
  return function (_ref80) {
    var decisionsDeferred = _ref80.decisionsDeferred,
        personalizationDetails = _ref80.personalizationDetails,
        response = _ref80.response;
    var unprocessedDecisions = response.getPayloadsByType(DECISIONS_HANDLE);
    var viewName = personalizationDetails.getViewName(); // if personalization payload is empty return empty decisions array

    if (unprocessedDecisions.length === 0) {
      showContainers();
      decisionsDeferred.resolve({});
      return {
        decisions: [],
        propositions: []
      };
    }

    var _groupDecisions = groupDecisions(unprocessedDecisions),
        redirectDecisions = _groupDecisions.redirectDecisions,
        pageWideScopeDecisions = _groupDecisions.pageWideScopeDecisions,
        viewDecisions = _groupDecisions.viewDecisions,
        nonAutoRenderableDecisions = _groupDecisions.nonAutoRenderableDecisions;

    if (personalizationDetails.isRenderDecisions() && isNonEmptyArray(redirectDecisions)) {
      decisionsDeferred.resolve({});
      return handleRedirectDecisions(redirectDecisions);
    } // save decisions for views in local cache


    decisionsDeferred.resolve(viewDecisions);

    if (personalizationDetails.isRenderDecisions()) {
      return autoRenderingHandler({
        viewName: viewName,
        pageWideScopeDecisions: pageWideScopeDecisions,
        nonAutoRenderableDecisions: nonAutoRenderableDecisions
      });
    }

    return nonRenderingHandler({
      viewName: viewName,
      redirectDecisions: redirectDecisions,
      pageWideScopeDecisions: pageWideScopeDecisions,
      nonAutoRenderableDecisions: nonAutoRenderableDecisions
    });
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var metasToArray = function metasToArray(metas) {
  return Object.keys(metas).map(function (key) {
    return {
      id: key,
      scope: metas[key].scope,
      scopeDetails: metas[key].scopeDetails,
      trackingLabel: metas[key].trackingLabel
    };
  });
};

var createClickStorage = function createClickStorage() {
  var clickStorage = {};

  var storeClickMetrics = function storeClickMetrics(value) {
    if (!clickStorage[value.selector]) {
      clickStorage[value.selector] = {};
    }

    clickStorage[value.selector][value.meta.id] = {
      scope: value.meta.scope,
      scopeDetails: value.meta.scopeDetails,
      trackingLabel: value.meta.trackingLabel
    };
  };

  var getClickSelectors = function getClickSelectors() {
    return Object.keys(clickStorage);
  };

  var getClickMetasBySelector = function getClickMetasBySelector(selector) {
    var metas = clickStorage[selector];

    if (!metas) {
      return {};
    }

    return metasToArray(clickStorage[selector]);
  };

  return {
    storeClickMetrics: storeClickMetrics,
    getClickSelectors: getClickSelectors,
    getClickMetasBySelector: getClickMetasBySelector
  };
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getRedirectDetails = function getRedirectDetails(redirectDecisions) {
  var decision = redirectDecisions[0];
  var items = decision.items,
      id = decision.id,
      scope = decision.scope,
      scopeDetails = decision.scopeDetails;
  var content = items[0].data.content;
  return {
    content: content,
    decisions: [{
      id: id,
      scope: scope,
      scopeDetails: scopeDetails
    }]
  };
};

var createRedirectHandler = function createRedirectHandler(_ref81) {
  var collect = _ref81.collect,
      window = _ref81.window,
      logger = _ref81.logger,
      showContainers = _ref81.showContainers;
  return function (redirectDecisions) {
    var _getRedirectDetails = getRedirectDetails(redirectDecisions),
        content = _getRedirectDetails.content,
        decisions = _getRedirectDetails.decisions;

    var documentMayUnload = true;
    return collect({
      decisionsMeta: decisions,
      documentMayUnload: documentMayUnload
    }).then(function () {
      window.location.replace(content);
    })["catch"](function () {
      showContainers();
      logger.warn(REDIRECT_EXECUTION_ERROR);
    });
  };
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getPropositions = function getPropositions(_ref82) {
  var viewCache = _ref82.viewCache,
      viewName = _ref82.viewName,
      pageWideScopeDecisions = _ref82.pageWideScopeDecisions;

  if (!viewName) {
    return {
      pageWideScopeDecisions: pageWideScopeDecisions,
      viewPropositions: []
    };
  }

  return viewCache.getView(viewName).then(function (viewPropositions) {
    return {
      pageWideScopeDecisions: pageWideScopeDecisions,
      viewPropositions: viewPropositions
    };
  });
};

var createAutorenderingHandler = function createAutorenderingHandler(_ref83) {
  var viewCache = _ref83.viewCache,
      executeDecisions = _ref83.executeDecisions,
      showContainers = _ref83.showContainers,
      collect = _ref83.collect;
  return function (_ref84) {
    var viewName = _ref84.viewName,
        pageWideScopeDecisions = _ref84.pageWideScopeDecisions,
        nonAutoRenderableDecisions = _ref84.nonAutoRenderableDecisions;
    return Promise.resolve(pageWideScopeDecisions).then(function (propositions) {
      return getPropositions({
        viewCache: viewCache,
        viewName: viewName,
        executeDecisions: executeDecisions,
        pageWideScopeDecisions: propositions
      });
    }).then(function (propositions) {
      executeDecisions(propositions.pageWideScopeDecisions).then(function (decisionsMeta) {
        if (isNonEmptyArray(decisionsMeta)) {
          collect({
            decisionsMeta: decisionsMeta
          });
        }
      });

      if (viewName) {
        executeDecisions(propositions.viewPropositions).then(function (decisionsMeta) {
          collect({
            decisionsMeta: decisionsMeta,
            viewName: viewName
          });
        });
      }

      showContainers();
      return [].concat(_toConsumableArray(propositions.pageWideScopeDecisions), _toConsumableArray(propositions.viewPropositions));
    }).then(function (renderablePropositions) {
      return {
        decisions: _toConsumableArray(nonAutoRenderableDecisions),
        propositions: [].concat(_toConsumableArray(addRenderAttemptedToDecisions({
          decisions: renderablePropositions,
          renderAttempted: true
        })), _toConsumableArray(addRenderAttemptedToDecisions({
          decisions: nonAutoRenderableDecisions,
          renderAttempted: false
        })))
      };
    });
  };
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getViewPropositions = function getViewPropositions(_ref85) {
  var viewCache = _ref85.viewCache,
      viewName = _ref85.viewName,
      propositions = _ref85.propositions;

  if (!viewName) {
    return propositions;
  }

  return viewCache.getView(viewName).then(function (viewPropositions) {
    return [].concat(_toConsumableArray(viewPropositions), _toConsumableArray(propositions));
  });
};

var buildFinalResult = function buildFinalResult(_ref86) {
  var propositions = _ref86.propositions;
  return {
    decisions: propositions,
    propositions: addRenderAttemptedToDecisions({
      decisions: propositions,
      renderAttempted: false
    })
  };
};

var createNonRenderingHandler = function createNonRenderingHandler(_ref87) {
  var viewCache = _ref87.viewCache;
  return function (_ref88) {
    var viewName = _ref88.viewName,
        redirectDecisions = _ref88.redirectDecisions,
        pageWideScopeDecisions = _ref88.pageWideScopeDecisions,
        nonAutoRenderableDecisions = _ref88.nonAutoRenderableDecisions;
    var propositions = [].concat(_toConsumableArray(redirectDecisions), _toConsumableArray(pageWideScopeDecisions), _toConsumableArray(nonAutoRenderableDecisions));
    return Promise.resolve(propositions).then(function (items) {
      return getViewPropositions({
        viewCache: viewCache,
        viewName: viewName,
        propositions: items
      });
    }).then(function (items) {
      return buildFinalResult({
        propositions: items
      });
    });
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var SUPPORTED_SCHEMAS = [DOM_ACTION, HTML_CONTENT_ITEM];

var createApplyPropositions = function createApplyPropositions(_ref89) {
  var executeDecisions = _ref89.executeDecisions;

  var filterItemsPredicate = function filterItemsPredicate(item) {
    return SUPPORTED_SCHEMAS.indexOf(item.schema) > -1;
  };

  var updatePropositionItems = function updatePropositionItems(_ref90) {
    var items = _ref90.items,
        metadataForScope = _ref90.metadataForScope;
    return items.filter(filterItemsPredicate).map(function (item) {
      if (item.schema !== HTML_CONTENT_ITEM) {
        return _objectSpread({}, item);
      }

      if (isObject(metadataForScope)) {
        return _objectSpread(_objectSpread({}, item), {}, {
          data: _objectSpread(_objectSpread({}, item.data), {}, {
            selector: metadataForScope.selector,
            type: metadataForScope.actionType
          })
        });
      }

      return undefined;
    }).filter(function (item) {
      return item;
    });
  };

  var filterPropositionsPredicate = function filterPropositionsPredicate(proposition) {
    return !(proposition.scope === PAGE_WIDE_SCOPE && proposition.renderAttempted);
  };

  var preparePropositions = function preparePropositions(_ref91) {
    var propositions = _ref91.propositions,
        metadata = _ref91.metadata;
    return propositions.filter(filterPropositionsPredicate).map(function (proposition) {
      if (isNonEmptyArray(proposition.items)) {
        var id = proposition.id,
            scope = proposition.scope,
            scopeDetails = proposition.scopeDetails;
        return {
          id: id,
          scope: scope,
          scopeDetails: scopeDetails,
          items: updatePropositionItems({
            items: proposition.items,
            metadataForScope: metadata[proposition.scope]
          })
        };
      }

      return proposition;
    }).filter(function (proposition) {
      return isNonEmptyArray(proposition.items);
    });
  };

  var applyPropositions = function applyPropositions(_ref92) {
    var propositions = _ref92.propositions,
        metadata = _ref92.metadata;
    var propositionsToExecute = preparePropositions({
      propositions: propositions,
      metadata: metadata
    });
    return executeDecisions(propositionsToExecute).then(function () {
      return composePersonalizationResultingObject(propositionsToExecute, true);
    });
  };

  return function (_ref93) {
    var propositions = _ref93.propositions,
        _ref93$metadata = _ref93.metadata,
        metadata = _ref93$metadata === void 0 ? {} : _ref93$metadata;

    if (isNonEmptyArray(propositions)) {
      return applyPropositions({
        propositions: propositions,
        metadata: metadata
      });
    }

    return Promise.resolve(EMPTY_PROPOSITIONS);
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createGetPageLocation = function createGetPageLocation(_ref94) {
  var window = _ref94.window;
  return function () {
    return window.location;
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createSetTargetMigration = function createSetTargetMigration(_ref95) {
  var targetMigrationEnabled = _ref95.targetMigrationEnabled;

  if (targetMigrationEnabled) {
    return function (request) {
      request.getPayload().mergeMeta({
        target: {
          migration: true
        }
      });
    };
  }

  return noop;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createPersonalization = function createPersonalization(_ref96) {
  var config = _ref96.config,
      logger = _ref96.logger,
      eventManager = _ref96.eventManager;
  var targetMigrationEnabled = config.targetMigrationEnabled,
      prehidingStyle = config.prehidingStyle;
  var collect = createCollect({
    eventManager: eventManager,
    mergeDecisionsMeta: mergeDecisionsMeta
  });

  var _createClickStorage = createClickStorage(),
      getClickMetasBySelector = _createClickStorage.getClickMetasBySelector,
      getClickSelectors = _createClickStorage.getClickSelectors,
      storeClickMetrics = _createClickStorage.storeClickMetrics;

  var getPageLocation = createGetPageLocation({
    window: window
  });
  var viewCache = createViewCacheManager();
  var modules = initDomActionsModules(storeClickMetrics);
  var executeDecisions = createExecuteDecisions({
    modules: modules,
    logger: logger,
    executeActions: executeActions
  });
  var handleRedirectDecisions = createRedirectHandler({
    collect: collect,
    window: window,
    logger: logger,
    showContainers: showContainers
  });
  var autoRenderingHandler = createAutorenderingHandler({
    viewCache: viewCache,
    executeDecisions: executeDecisions,
    showContainers: showContainers,
    collect: collect
  });
  var applyPropositions = createApplyPropositions({
    executeDecisions: executeDecisions
  });
  var nonRenderingHandler = createNonRenderingHandler({
    viewCache: viewCache
  });
  var responseHandler = createOnResponseHandler({
    autoRenderingHandler: autoRenderingHandler,
    nonRenderingHandler: nonRenderingHandler,
    groupDecisions: groupDecisions,
    handleRedirectDecisions: handleRedirectDecisions,
    showContainers: showContainers
  });
  var fetchDataHandler = createFetchDataHandler({
    prehidingStyle: prehidingStyle,
    responseHandler: responseHandler,
    hideContainers: hideContainers,
    mergeQuery: mergeQuery
  });
  var onClickHandler = createOnClickHandler({
    mergeDecisionsMeta: mergeDecisionsMeta,
    collectClicks: collectClicks,
    getClickSelectors: getClickSelectors,
    getClickMetasBySelector: getClickMetasBySelector
  });
  var viewChangeHandler = createViewChangeHandler({
    mergeDecisionsMeta: mergeDecisionsMeta,
    collect: collect,
    executeDecisions: executeDecisions,
    viewCache: viewCache
  });
  var setTargetMigration = createSetTargetMigration({
    targetMigrationEnabled: targetMigrationEnabled
  });
  return createComponent$1({
    getPageLocation: getPageLocation,
    logger: logger,
    fetchDataHandler: fetchDataHandler,
    viewChangeHandler: viewChangeHandler,
    onClickHandler: onClickHandler,
    isAuthoringModeEnabled: isAuthoringModeEnabled,
    mergeQuery: mergeQuery,
    viewCache: viewCache,
    showContainers: showContainers,
    applyPropositions: applyPropositions,
    setTargetMigration: setTargetMigration
  });
};

createPersonalization.namespace = "Personalization";
createPersonalization.configValidators = {
  prehidingStyle: boundString().nonEmpty(),
  targetMigrationEnabled: boundBoolean()["default"](false)
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var injectWeb = function injectWeb(window) {
  return function (xdm) {
    var web = {
      webPageDetails: {
        URL: window.location.href || window.location
      },
      webReferrer: {
        URL: window.document.referrer
      }
    };
    deepAssign(xdm, {
      web: web
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getScreenOrientationViaProperty = function getScreenOrientationViaProperty(window) {
  var orientation = window.screen.orientation;

  if (orientation == null || orientation.type == null) {
    return null;
  }

  var parts = orientation.type.split("-");

  if (parts.length === 0) {
    return null;
  }

  if (parts[0] !== "portrait" && parts[0] !== "landscape") {
    return null;
  }

  return parts[0];
};

var getScreenOrientationViaMediaQuery = function getScreenOrientationViaMediaQuery(window) {
  if (isFunction(window.matchMedia)) {
    if (window.matchMedia("(orientation: portrait)").matches) {
      return "portrait";
    }

    if (window.matchMedia("(orientation: landscape)").matches) {
      return "landscape";
    }
  }

  return null;
};

var injectDevice = function injectDevice(window) {
  return function (xdm) {
    var _window$screen = window.screen,
        width = _window$screen.width,
        height = _window$screen.height;
    var device = {};
    var screenHeight = toInteger(height);

    if (screenHeight >= 0) {
      device.screenHeight = screenHeight;
    }

    var screenWidth = toInteger(width);

    if (screenWidth >= 0) {
      device.screenWidth = screenWidth;
    }

    var orientation = getScreenOrientationViaProperty(window) || getScreenOrientationViaMediaQuery(window);

    if (orientation) {
      device.screenOrientation = orientation;
    }

    if (Object.keys(device).length > 0) {
      deepAssign(xdm, {
        device: device
      });
    }
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectEnvironment = function injectEnvironment(window) {
  return function (xdm) {
    var _window$document$docu = window.document.documentElement;
    _window$document$docu = _window$document$docu === void 0 ? {} : _window$document$docu;
    var clientWidth = _window$document$docu.clientWidth,
        clientHeight = _window$document$docu.clientHeight;
    var environment = {
      type: "browser"
    };
    var viewportWidth = toInteger(clientWidth);

    if (viewportWidth >= 0) {
      environment.browserDetails = {
        viewportWidth: viewportWidth
      };
    }

    var viewportHeight = toInteger(clientHeight);

    if (viewportHeight >= 0) {
      environment.browserDetails = environment.browserDetails || {};
      environment.browserDetails.viewportHeight = viewportHeight;
    }

    deepAssign(xdm, {
      environment: environment
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectPlaceContext = function injectPlaceContext(dateProvider) {
  return function (xdm) {
    var date = dateProvider();
    var placeContext = {};
    var localTimezoneOffset = toInteger(date.getTimezoneOffset());

    if (localTimezoneOffset !== undefined) {
      placeContext.localTimezoneOffset = localTimezoneOffset;
    } // make sure the timezone offset only uses two digits


    if (localTimezoneOffset === undefined || Math.abs(localTimezoneOffset) < 6000) {
      placeContext.localTime = toISOStringLocal(date);
    }

    deepAssign(xdm, {
      placeContext: placeContext
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectTimestamp = function injectTimestamp(dateProvider) {
  return function (xdm) {
    var timestamp = dateProvider().toISOString();
    deepAssign(xdm, {
      timestamp: timestamp
    });
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var libraryName = "https://ns.adobe.com/experience/alloy";
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
// The __VERSION__ keyword will be replace at alloy build time with the package.json version.
// see babel-plugin-version

var libraryVersion = "2.17.0";
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var implementationDetails = function implementationDetails(xdm) {
  var implementationDetails = {
    name: libraryName,
    version: libraryVersion,
    environment: "browser"
  };
  deepAssign(xdm, {
    implementationDetails: implementationDetails
  });
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createComponent$2 = function createComponent$2(config, logger, optionalContexts, requiredContexts) {
  var configuredContexts = config.context;
  var contexts = flatMap(configuredContexts, function (context, i) {
    if (optionalContexts[context]) {
      return [optionalContexts[context]];
    }

    logger.warn("Invalid context[".concat(i, "]: '").concat(context, "' is not available."));
    return [];
  }).concat(requiredContexts);
  return {
    namespace: "Context",
    lifecycle: {
      onBeforeEvent: function onBeforeEvent(_ref97) {
        var event = _ref97.event;
        var xdm = {};
        return Promise.all(contexts.map(function (context) {
          return Promise.resolve(context(xdm, logger));
        })).then(function () {
          return event.mergeXdm(xdm);
        });
      }
    }
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var highEntropyUserAgentHints = [["architecture", "string"], ["bitness", "string"], ["model", "string"], ["platformVersion", "string"], ["wow64", "boolean"]];
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var browserSupportsUserAgentClientHints = function browserSupportsUserAgentClientHints(navigator) {
  return typeof navigator.userAgentData !== "undefined";
};

var injectHighEntropyUserAgentHints = function injectHighEntropyUserAgentHints(navigator) {
  if (!browserSupportsUserAgentClientHints(navigator)) {
    return noop;
  }

  return function (xdm, logger) {
    try {
      return navigator.userAgentData.getHighEntropyValues(highEntropyUserAgentHints.map(function (hint) {
        return hint[0];
      })).then(function (hints) {
        var userAgentClientHints = {};
        highEntropyUserAgentHints.forEach(function (_ref98) {
          var _ref99 = _slicedToArray(_ref98, 2),
              hintName = _ref99[0],
              hintType = _ref99[1];

          if (Object.prototype.hasOwnProperty.call(hints, hintName) &&
          /* eslint-disable-next-line valid-typeof */
          _typeof(hints[hintName]) === hintType) {
            userAgentClientHints[hintName] = hints[hintName];
          }
        });
        deepAssign(xdm, {
          environment: {
            browserDetails: {
              userAgentClientHints: userAgentClientHints
            }
          }
        });
      });
    } catch (error) {
      logger.warn("Unable to collect user-agent client hints. ".concat(error.message));
      return noop;
    }
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var web = injectWeb(window);
var device = injectDevice(window);
var environment = injectEnvironment(window);
var placeContext = injectPlaceContext(function () {
  return new Date();
});
var timestamp = injectTimestamp(function () {
  return new Date();
});
var highEntropyUserAgentHints$1 = injectHighEntropyUserAgentHints(navigator);
var defaultEnabledContexts = {
  web: web,
  device: device,
  environment: environment,
  placeContext: placeContext
};
var defaultDisabledContexts = {
  highEntropyUserAgentHints: highEntropyUserAgentHints$1
};

var optionalContexts = _objectSpread(_objectSpread({}, defaultEnabledContexts), defaultDisabledContexts);

var requiredContexts = [timestamp, implementationDetails];

var createContext = function createContext(_ref100) {
  var config = _ref100.config,
      logger = _ref100.logger;
  return createComponent$2(config, logger, optionalContexts, requiredContexts);
};

createContext.namespace = "Context";
createContext.configValidators = {
  context: boundArrayOf(boundString())["default"](Object.keys(defaultEnabledContexts))
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createComponent$3 = function createComponent$3(_ref101) {
  var storedConsent = _ref101.storedConsent,
      taskQueue = _ref101.taskQueue,
      defaultConsent = _ref101.defaultConsent,
      consent = _ref101.consent,
      sendSetConsentRequest = _ref101.sendSetConsentRequest,
      validateSetConsentOptions = _ref101.validateSetConsentOptions,
      consentHashStore = _ref101.consentHashStore,
      doesIdentityCookieExist = _ref101.doesIdentityCookieExist;

  var defaultConsentByPurpose = _defineProperty({}, GENERAL, defaultConsent);

  var storedConsentByPurpose = storedConsent.read();
  var identityCookieExists = doesIdentityCookieExist();
  var consentCookieExists = storedConsentByPurpose[GENERAL] !== undefined;

  if (!identityCookieExists || !consentCookieExists) {
    consentHashStore.clear();
  } // If the identity cookie is gone, remove the consent cookie because the
  // consent info is tied to the identity.


  if (!identityCookieExists) {
    storedConsent.clear();
    storedConsentByPurpose = {};
  }

  consent.initializeConsent(defaultConsentByPurpose, storedConsentByPurpose);

  var readCookieIfQueueEmpty = function readCookieIfQueueEmpty() {
    if (taskQueue.length === 0) {
      var storedConsentObject = storedConsent.read(); // Only read cookies when there are no outstanding setConsent
      // requests. This helps with race conditions.

      if (storedConsentObject[GENERAL] !== undefined) {
        consent.setConsent(storedConsentObject);
      }
    }
  };

  return {
    commands: {
      setConsent: {
        optionsValidator: validateSetConsentOptions,
        run: function run(_ref102) {
          var consentOptions = _ref102.consent,
              identityMap = _ref102.identityMap,
              edgeConfigOverrides = _ref102.edgeConfigOverrides;
          consent.suspend();
          var consentHashes = consentHashStore.lookup(consentOptions);
          return taskQueue.addTask(function () {
            if (consentHashes.isNew()) {
              return sendSetConsentRequest({
                consentOptions: consentOptions,
                identityMap: identityMap,
                edgeConfigOverrides: edgeConfigOverrides
              });
            }

            return Promise.resolve();
          }).then(function () {
            return consentHashes.save();
          })["finally"](readCookieIfQueueEmpty);
        }
      }
    },
    lifecycle: {
      // Read the cookie here too because the consent cookie may change on any request
      onResponse: readCookieIfQueueEmpty,
      // Even when we get a failure HTTP status code, the consent cookie can
      // still get updated. This could happen, for example, if the user is
      // opted out in AudienceManager, but no consent cookie exists on the
      // client. The request will be sent and the server will respond with a
      // 403 Forbidden and a consent cookie.
      onRequestFailure: readCookieIfQueueEmpty
    }
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var serialize = function serialize(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (i) {
      return serialize(i);
    });
  }

  if (_typeof(obj) === "object" && obj !== null) {
    return Object.keys(obj).sort().reduce(function (memo, key) {
      memo[key] = serialize(obj[key]);
      return memo;
    }, {});
  }

  return obj;
};

var computeConsentHash = function computeConsentHash(obj) {
  return crc32(JSON.stringify(serialize(obj)));
};
/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var getKey = function getKey(_ref103) {
  var standard = _ref103.standard,
      version = _ref103.version;
  return "".concat(standard, ".").concat(version);
};

var createConsentHashStore = function createConsentHashStore(_ref104) {
  var storage = _ref104.storage;
  return {
    clear: function clear() {
      storage.clear();
    },
    lookup: function lookup(consentObjects) {
      var currentHashes = {};

      var getCurrentHash = function getCurrentHash(consentObject) {
        var key = getKey(consentObject);

        var standard = consentObject.standard,
            version = consentObject.version,
            rest = _objectWithoutProperties(consentObject, ["standard", "version"]);

        if (!currentHashes[key]) {
          currentHashes[key] = computeConsentHash(rest).toString();
        }

        return currentHashes[key];
      };

      return {
        isNew: function isNew() {
          return consentObjects.some(function (consentObject) {
            var key = getKey(consentObject);
            var previousHash = storage.getItem(key);
            return previousHash === null || previousHash !== getCurrentHash(consentObject);
          });
        },
        save: function save() {
          consentObjects.forEach(function (consentObject) {
            var key = getKey(consentObject);
            storage.setItem(key, getCurrentHash(consentObject));
          });
        }
      };
    }
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createConsentRequestPayload = function createConsentRequestPayload() {
  var content = {};
  var payload = createRequestPayload({
    content: content,
    addIdentity: function addIdentity(namespaceCode, identity) {
      content.identityMap = content.identityMap || {};
      content.identityMap[namespaceCode] = content.identityMap[namespaceCode] || [];
      content.identityMap[namespaceCode].push(identity);
    },
    hasIdentity: function hasIdentity(namespaceCode) {
      return (content.identityMap && content.identityMap[namespaceCode]) !== undefined;
    }
  });

  payload.setConsent = function (consent) {
    content.consent = consent;
  };

  return payload;
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createConsentRequest = function createConsentRequest(consentRequestPayload) {
  return createRequest({
    payload: consentRequestPayload,
    getAction: function getAction() {
      return "privacy/set-consent";
    },
    getUseSendBeacon: function getUseSendBeacon() {
      return false;
    }
  });
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createStoredConsent = function createStoredConsent(_ref105) {
  var parseConsentCookie = _ref105.parseConsentCookie,
      orgId = _ref105.orgId,
      cookieJar = _ref105.cookieJar;
  var consentCookieName = getNamespacedCookieName(orgId, CONSENT);
  return {
    read: function read() {
      var cookieValue = cookieJar.get(consentCookieName);
      return cookieValue ? parseConsentCookie(cookieValue) : {};
    },
    clear: function clear() {
      cookieJar.remove(consentCookieName);
    }
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectSendSetConsentRequest = function injectSendSetConsentRequest(_ref106) {
  var createConsentRequestPayload = _ref106.createConsentRequestPayload,
      createConsentRequest = _ref106.createConsentRequest,
      sendEdgeNetworkRequest = _ref106.sendEdgeNetworkRequest,
      globalConfigOverrides = _ref106.edgeConfigOverrides;
  return function (_ref107) {
    var consentOptions = _ref107.consentOptions,
        identityMap = _ref107.identityMap,
        localConfigOverrides = _ref107.edgeConfigOverrides;
    var payload = createConsentRequestPayload();
    payload.setConsent(consentOptions);
    payload.mergeConfigOverride(globalConfigOverrides);
    payload.mergeConfigOverride(localConfigOverrides);

    if (isObject(identityMap)) {
      Object.keys(identityMap).forEach(function (key) {
        identityMap[key].forEach(function (identity) {
          payload.addIdentity(key, identity);
        });
      });
    }

    var request = createConsentRequest(payload);
    return sendEdgeNetworkRequest({
      request: request
    }).then(function () {// Don't let response data disseminate beyond this
      // point unless necessary.
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/**
 * Parses a consent cookie.
 * @param {string} cookieValue Must be in the format a=b;c=d
 * @returns {Object} An object where the keys are purpose names and the values
 * are the consent status for the purpose.
 */


var parseConsentCookie = function parseConsentCookie(cookieValue) {
  var categoryPairs = cookieValue.split(";");
  return categoryPairs.reduce(function (consentByPurpose, categoryPair) {
    var _categoryPair$split = categoryPair.split("="),
        _categoryPair$split2 = _slicedToArray(_categoryPair$split, 2),
        name = _categoryPair$split2[0],
        value = _categoryPair$split2[1];

    consentByPurpose[name] = value;
    return consentByPurpose;
  }, {});
};
/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var validateSetConsentOptions = boundObjectOf({
  consent: boundArrayOf(boundAnything()).required().nonEmpty(),
  identityMap: validateIdentityMap,
  edgeConfigOverrides: validateConfigOverride
}).noUnknownFields().required();
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createPrivacy = function createPrivacy(_ref108) {
  var config = _ref108.config,
      consent = _ref108.consent,
      sendEdgeNetworkRequest = _ref108.sendEdgeNetworkRequest,
      createNamespacedStorage = _ref108.createNamespacedStorage;
  var orgId = config.orgId,
      defaultConsent = config.defaultConsent;
  var storedConsent = createStoredConsent({
    parseConsentCookie: parseConsentCookie,
    orgId: orgId,
    cookieJar: cookieJar
  });
  var taskQueue = createTaskQueue();
  var sendSetConsentRequest = injectSendSetConsentRequest({
    createConsentRequestPayload: createConsentRequestPayload,
    createConsentRequest: createConsentRequest,
    sendEdgeNetworkRequest: sendEdgeNetworkRequest,
    edgeConfigOverrides: config.edgeConfigOverrides
  });
  var storage = createNamespacedStorage("".concat(sanitizeOrgIdForCookieName(orgId), ".consentHashes."));
  var consentHashStore = createConsentHashStore({
    storage: storage.persistent
  });
  var doesIdentityCookieExist = injectDoesIdentityCookieExist({
    orgId: orgId
  });
  return createComponent$3({
    storedConsent: storedConsent,
    taskQueue: taskQueue,
    defaultConsent: defaultConsent,
    consent: consent,
    sendSetConsentRequest: sendSetConsentRequest,
    validateSetConsentOptions: validateSetConsentOptions,
    consentHashStore: consentHashStore,
    doesIdentityCookieExist: doesIdentityCookieExist
  });
};

createPrivacy.namespace = "Privacy";
/*
Copyright 20219 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createEventMergeId = function createEventMergeId() {
  return {
    eventMergeId: v4_1()
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


exports.createEventMergeId = createEventMergeId;

var createComponent$4 = function createComponent$4(_ref109) {
  var createEventMergeId = _ref109.createEventMergeId;
  return {
    commands: {
      createEventMergeId: {
        run: createEventMergeId
      }
    }
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createEventMerge = function createEventMerge() {
  return createComponent$4({
    createEventMergeId: createEventMergeId
  });
};

createEventMerge.namespace = "EventMerge";
createEventMerge.configValidators = {};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var prepareLibraryInfo = function prepareLibraryInfo(_ref110) {
  var config = _ref110.config,
      componentRegistry = _ref110.componentRegistry;
  var allCommands = [].concat(_toConsumableArray(componentRegistry.getCommandNames()), [CONFIGURE, SET_DEBUG]).sort();

  var resultConfig = _objectSpread({}, config);

  Object.keys(config).forEach(function (key) {
    var value = config[key];

    if (typeof value !== "function") {
      return;
    }

    resultConfig[key] = value.toString();
  });
  return {
    version: libraryVersion,
    configs: resultConfig,
    commands: allCommands
  };
};

var createLibraryInfo = function createLibraryInfo(_ref111) {
  var config = _ref111.config,
      componentRegistry = _ref111.componentRegistry;
  var libraryInfo = prepareLibraryInfo({
    config: config,
    componentRegistry: componentRegistry
  });
  return {
    commands: {
      getLibraryInfo: {
        run: function run() {
          return {
            libraryInfo: libraryInfo
          };
        }
      }
    }
  };
};

createLibraryInfo.namespace = "LibraryInfo";
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var processResponse = function processResponse(_ref112) {
  var response = _ref112.response;
  return {
    inferences: response.getPayloadsByType("rtml:inferences")
  };
};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createMachineLearning = function createMachineLearning() {
  return {
    lifecycle: {
      onResponse: processResponse
    },
    commands: {}
  };
};

createMachineLearning.namespace = "MachineLearning";
createMachineLearning.configValidators = {};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
// TODO: Figure out how sub-components will be made available/registered

var componentCreators = [createDataCollector, createActivityCollector, createIdentity, createAudiences, createPersonalization, createContext, createPrivacy, createEventMerge, createLibraryInfo, createMachineLearning];
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var CONFIG_DOC_URI = "https://adobe.ly/3sHh553";

var buildSchema = function buildSchema(coreConfigValidators, componentCreators) {
  var schema = {};
  (0, _reactorObjectAssign["default"])(schema, coreConfigValidators);
  componentCreators.forEach(function (createComponent) {
    var configValidators = createComponent.configValidators;
    (0, _reactorObjectAssign["default"])(schema, configValidators);
  });
  return schema;
};

var transformOptions = function transformOptions(schema, options) {
  try {
    var validator = boundObjectOf(schema).noUnknownFields().required();
    return validator(options);
  } catch (e) {
    throw new Error("Resolve these configuration problems:\n\t - ".concat(e.message.split("\n").join("\n\t - "), "\nFor configuration documentation see: ").concat(CONFIG_DOC_URI));
  }
};

var buildAllOnInstanceConfiguredExtraParams = function buildAllOnInstanceConfiguredExtraParams(config, logger, componentCreators) {
  return componentCreators.reduce(function (memo, _ref113) {
    var buildOnInstanceConfiguredExtraParams = _ref113.buildOnInstanceConfiguredExtraParams;

    if (buildOnInstanceConfiguredExtraParams) {
      (0, _reactorObjectAssign["default"])(memo, buildOnInstanceConfiguredExtraParams({
        config: config,
        logger: logger
      }));
    }

    return memo;
  }, {});
};

var buildAndValidateConfig = function buildAndValidateConfig(_ref114) {
  var options = _ref114.options,
      componentCreators = _ref114.componentCreators,
      coreConfigValidators = _ref114.coreConfigValidators,
      createConfig = _ref114.createConfig,
      logger = _ref114.logger,
      setDebugEnabled = _ref114.setDebugEnabled;
  var schema = buildSchema(coreConfigValidators, componentCreators);
  var config = createConfig(transformOptions(schema, options));
  setDebugEnabled(config.debugEnabled, {
    fromConfig: true
  }); // eslint-disable-next-line no-underscore-dangle

  var extraParams = buildAllOnInstanceConfiguredExtraParams(config, logger, componentCreators);
  logger.logOnInstanceConfigured(_objectSpread(_objectSpread({}, extraParams), {}, {
    config: config
  }));
  return config;
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var initializeComponents = function initializeComponents(_ref115) {
  var componentCreators = _ref115.componentCreators,
      lifecycle = _ref115.lifecycle,
      componentRegistry = _ref115.componentRegistry,
      getImmediatelyAvailableTools = _ref115.getImmediatelyAvailableTools;
  componentCreators.forEach(function (createComponent) {
    var namespace = createComponent.namespace; // TO-DOCUMENT: Helpers that we inject into factories.

    var tools = getImmediatelyAvailableTools(namespace);
    var component;

    try {
      component = createComponent(tools);
    } catch (error) {
      throw stackError({
        error: error,
        message: "[".concat(namespace, "] An error occurred during component creation.")
      });
    }

    componentRegistry.register(namespace, component);
  });
  return lifecycle.onComponentsRegistered({
    lifecycle: lifecycle
  }).then(function () {
    return componentRegistry;
  });
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createConfig = function createConfig(options) {
  return (0, _reactorObjectAssign["default"])({}, options);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var EDGE$1 = "edge.adobedc.net";
var ID_THIRD_PARTY = "adobedc.demdex.net";
/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var EDGE_BASE_PATH = "ee";
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var createCoreConfigs = function createCoreConfigs() {
  return {
    debugEnabled: boundBoolean()["default"](false),
    defaultConsent: boundEnumOf(IN, OUT, PENDING)["default"](IN),
    edgeConfigId: boundString().unique().required(),
    edgeDomain: boundString().domain()["default"](EDGE$1),
    edgeBasePath: boundString().nonEmpty()["default"](EDGE_BASE_PATH),
    orgId: boundString().unique().required(),
    onBeforeEventSend: boundCallback()["default"](noop),
    edgeConfigOverrides: validateConfigOverride
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectHandleError = function injectHandleError(_ref116) {
  var errorPrefix = _ref116.errorPrefix,
      logger = _ref116.logger;
  return function (error, operation) {
    var err = toError(error); // In the case of declined consent, we've opted to not reject the promise
    // returned to the customer, but instead resolve the promise with an
    // empty result object.

    if (err.code === DECLINED_CONSENT_ERROR_CODE) {
      logger.warn("The ".concat(operation, " could not fully complete. ").concat(err.message));
      return {};
    }

    updateErrorMessage({
      error: err,
      message: "".concat(errorPrefix, " ").concat(err.message)
    });
    throw err;
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectSendFetchRequest = function injectSendFetchRequest(_ref117) {
  var fetch = _ref117.fetch;
  return function (url, body) {
    return fetch(url, {
      method: "POST",
      cache: "no-cache",
      credentials: "include",
      // To set the cookie header in the request.
      headers: {
        "Content-Type": "text/plain; charset=UTF-8"
      },
      referrerPolicy: "no-referrer-when-downgrade",
      body: body
    }).then(function (response) {
      return response.text().then(function (responseBody) {
        return {
          statusCode: response.status,
          // We expose headers through a function instead of creating an object
          // with all the headers up front largely because the native
          // request.getResponseHeader method is case-insensitive but also because it prevents
          // us from having to add header parsing logic when using XHR to make requests.
          getHeader: function getHeader(name) {
            return response.headers.get(name);
          },
          body: responseBody
        };
      });
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectSendXhrRequest = function injectSendXhrRequest(_ref118) {
  var XMLHttpRequest = _ref118.XMLHttpRequest;
  return function (url, body) {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();

      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 0) {
            reject(new Error("Request aborted."));
          } else {
            resolve({
              statusCode: request.status,
              // We expose headers through a function instead of creating an object
              // with all the headers up front because:
              // 1. It avoids having to add header parsing code to get all headers.
              // 2. The native request.getResponseHeader method is case-insensitive.
              getHeader: function getHeader(name) {
                return request.getResponseHeader(name);
              },
              body: request.responseText
            });
          }
        }
      };

      request.onloadstart = function () {
        request.responseType = "text";
      };

      request.open("POST", url, true);
      request.setRequestHeader("Content-Type", "text/plain; charset=UTF-8");
      request.withCredentials = true;
      request.onerror = reject;
      request.onabort = reject;
      request.send(body);
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectSendBeaconRequest = function injectSendBeaconRequest(_ref119) {
  var sendBeacon = _ref119.sendBeacon,
      sendFetchRequest = _ref119.sendFetchRequest,
      logger = _ref119.logger;
  return function (url, body) {
    var blob = new Blob([body], {
      type: "text/plain; charset=UTF-8"
    });

    if (!sendBeacon(url, blob)) {
      logger.info("Unable to use `sendBeacon`; falling back to `fetch`.");
      return sendFetchRequest(url, body);
    } // Using sendBeacon, we technically don't get a response back from
    // the server, but we'll resolve the promise with an object to maintain
    // consistency with other network strategies.


    return Promise.resolve({
      statusCode: 204,
      getHeader: function getHeader() {
        return null;
      },
      body: ""
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createLogger = function createLogger(_ref120) {
  var getDebugEnabled = _ref120.getDebugEnabled,
      console = _ref120.console,
      getMonitors = _ref120.getMonitors,
      context = _ref120.context;
  var prefix = "[".concat(context.instanceName, "]");

  if (context.componentName) {
    prefix += " [".concat(context.componentName, "]");
  }

  var notifyMonitors = function notifyMonitors(method, data) {
    var monitors = getMonitors();

    if (monitors.length > 0) {
      var dataWithContext = (0, _reactorObjectAssign["default"])({}, context, data);
      monitors.forEach(function (monitor) {
        if (monitor[method]) {
          monitor[method](dataWithContext);
        }
      });
    }
  };

  var log = function log(level) {
    for (var _len7 = arguments.length, rest = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
      rest[_key7 - 1] = arguments[_key7];
    }

    notifyMonitors("onBeforeLog", {
      level: level,
      arguments: rest
    });

    if (getDebugEnabled()) {
      console[level].apply(console, [prefix].concat(rest));
    }
  };

  return {
    get enabled() {
      return getMonitors().length > 0 || getDebugEnabled();
    },

    logOnInstanceCreated: function logOnInstanceCreated(data) {
      notifyMonitors("onInstanceCreated", data);
      log("info", "Instance initialized.");
    },
    logOnInstanceConfigured: function logOnInstanceConfigured(data) {
      notifyMonitors("onInstanceConfigured", data);
      log("info", "Instance configured. Computed configuration:", data.config);
    },
    logOnBeforeCommand: function logOnBeforeCommand(data) {
      notifyMonitors("onBeforeCommand", data);
      log("info", "Executing ".concat(data.commandName, " command. Options:"), data.options);
    },
    logOnCommandResolved: function logOnCommandResolved(data) {
      notifyMonitors("onCommandResolved", data);
      log("info", "".concat(data.commandName, " command resolved. Result:"), data.result);
    },
    logOnCommandRejected: function logOnCommandRejected(data) {
      notifyMonitors("onCommandRejected", data);
      log("error", "".concat(data.commandName, " command was rejected. Error:"), data.error);
    },
    logOnBeforeNetworkRequest: function logOnBeforeNetworkRequest(data) {
      notifyMonitors("onBeforeNetworkRequest", data);
      log("info", "Request ".concat(data.requestId, ": Sending request."), data.payload);
    },
    logOnNetworkResponse: function logOnNetworkResponse(data) {
      notifyMonitors("onNetworkResponse", data);
      var messagesSuffix = data.parsedBody || data.body ? "response body:" : "no response body.";
      log("info", "Request ".concat(data.requestId, ": Received response with status code ").concat(data.statusCode, " and ").concat(messagesSuffix), data.parsedBody || data.body);
    },
    logOnNetworkError: function logOnNetworkError(data) {
      notifyMonitors("onNetworkError", data);
      log("error", "Request ".concat(data.requestId, ": Network request failed."), data.error);
    },

    /**
     * Outputs informational message to the web console. In some
     * browsers a small "i" icon is displayed next to these items
     * in the web console's log.
     * @param {...*} arg Any argument to be logged.
     */
    info: log.bind(null, "info"),

    /**
     * Outputs a warning message to the web console.
     * @param {...*} arg Any argument to be logged.
     */
    warn: log.bind(null, "warn"),

    /**
     * Outputs an error message to the web console.
     * @param {...*} arg Any argument to be logged.
     */
    error: log.bind(null, "error")
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var EVENT_CANCELLATION_MESSAGE = "Event was canceled because the onBeforeEventSend callback returned false.";

var createEventManager = function createEventManager(_ref121) {
  var config = _ref121.config,
      logger = _ref121.logger,
      lifecycle = _ref121.lifecycle,
      consent = _ref121.consent,
      createEvent = _ref121.createEvent,
      createDataCollectionRequestPayload = _ref121.createDataCollectionRequestPayload,
      createDataCollectionRequest = _ref121.createDataCollectionRequest,
      sendEdgeNetworkRequest = _ref121.sendEdgeNetworkRequest,
      _applyResponse = _ref121.applyResponse;
  var onBeforeEventSend = config.onBeforeEventSend,
      globalConfigOverrides = config.edgeConfigOverrides;
  return {
    createEvent: createEvent,

    /**
     * Sends an event. This includes running the event and payload through
     * the appropriate lifecycle hooks, sending the request to the server,
     * and handling the response.
     * @param {Object} event This will be JSON stringified and used inside
     * the request payload.
     * @param {Object} [options]
     * @param {boolean} [options.renderDecisions=false]
     * @param {Array} [options.decisionScopes] Note: this option will soon
     * be deprecated, please use *personalization.decisionScopes* instead
     * @param {Object} [options.personalization]
     * @param {Object} [options.serverState]
     * This will be passed to components
     * so they can take appropriate action.
     * @returns {*}
     */
    sendEvent: function sendEvent(event) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$renderDecisi3 = options.renderDecisions,
          renderDecisions = _options$renderDecisi3 === void 0 ? false : _options$renderDecisi3,
          decisionScopes = options.decisionScopes,
          localConfigOverrides = options.edgeConfigOverrides,
          personalization = options.personalization;
      var payload = createDataCollectionRequestPayload();
      var request = createDataCollectionRequest(payload);
      var onResponseCallbackAggregator = createCallbackAggregator();
      var onRequestFailureCallbackAggregator = createCallbackAggregator();
      payload.mergeConfigOverride(globalConfigOverrides);
      payload.mergeConfigOverride(localConfigOverrides);
      return lifecycle.onBeforeEvent({
        event: event,
        renderDecisions: renderDecisions,
        decisionScopes: decisionScopes,
        personalization: personalization,
        onResponse: onResponseCallbackAggregator.add,
        onRequestFailure: onRequestFailureCallbackAggregator.add
      }).then(function () {
        payload.addEvent(event);
        return consent.awaitConsent();
      }).then(function () {
        try {
          // NOTE: this calls onBeforeEventSend callback (if configured)
          event.finalize(onBeforeEventSend);
        } catch (error) {
          var throwError = function throwError() {
            throw error;
          };

          onRequestFailureCallbackAggregator.add(lifecycle.onRequestFailure);
          return onRequestFailureCallbackAggregator.call({
            error: error
          }).then(throwError, throwError);
        } // if the callback returns false, the event should not be sent


        if (!event.shouldSend()) {
          onRequestFailureCallbackAggregator.add(lifecycle.onRequestFailure);
          logger.info(EVENT_CANCELLATION_MESSAGE);
          var error = new Error(EVENT_CANCELLATION_MESSAGE);
          return onRequestFailureCallbackAggregator.call({
            error: error
          }).then(function () {// Ensure the promise gets resolved with undefined instead
            // of an array of return values from the callbacks.
          });
        }

        return sendEdgeNetworkRequest({
          request: request,
          runOnResponseCallbacks: onResponseCallbackAggregator.call,
          runOnRequestFailureCallbacks: onRequestFailureCallbackAggregator.call
        });
      });
    },
    applyResponse: function applyResponse(event) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$renderDecisi4 = options.renderDecisions,
          renderDecisions = _options$renderDecisi4 === void 0 ? false : _options$renderDecisi4,
          _options$responseHead2 = options.responseHeaders,
          responseHeaders = _options$responseHead2 === void 0 ? {} : _options$responseHead2,
          _options$responseBody2 = options.responseBody,
          responseBody = _options$responseBody2 === void 0 ? {
        handle: []
      } : _options$responseBody2;
      var payload = createDataCollectionRequestPayload();
      var request = createDataCollectionRequest(payload);
      var onResponseCallbackAggregator = createCallbackAggregator();
      return lifecycle.onBeforeEvent({
        event: event,
        renderDecisions: renderDecisions,
        decisionScopes: [PAGE_WIDE_SCOPE],
        personalization: {},
        onResponse: onResponseCallbackAggregator.add,
        onRequestFailure: noop
      }).then(function () {
        payload.addEvent(event);
        return _applyResponse({
          request: request,
          responseHeaders: responseHeaders,
          responseBody: responseBody,
          runOnResponseCallbacks: onResponseCallbackAggregator.call
        });
      });
    }
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var STATE_STORE_HANDLE_TYPE = "state:store";

var createCookieTransfer = function createCookieTransfer(_ref122) {
  var cookieJar = _ref122.cookieJar,
      shouldTransferCookie = _ref122.shouldTransferCookie,
      apexDomain = _ref122.apexDomain,
      dateProvider = _ref122.dateProvider;
  return {
    /**
     * When sending to a third-party endpoint, the endpoint won't be able to
     * access first-party cookies, therefore we transfer cookies into
     * the request body so they can be read by the server.
     */
    cookiesToPayload: function cookiesToPayload(payload, endpointDomain) {
      var isEndpointFirstParty = endsWith(endpointDomain, apexDomain);
      var state = {
        domain: apexDomain,
        cookiesEnabled: true
      }; // If the endpoint is first-party, there's no need to transfer cookies
      // to the payload since they'll be automatically passed through cookie
      // headers.

      if (!isEndpointFirstParty) {
        var cookies = cookieJar.get();
        var entries = Object.keys(cookies).filter(shouldTransferCookie).map(function (qualifyingCookieName) {
          return {
            key: qualifyingCookieName,
            value: cookies[qualifyingCookieName]
          };
        });

        if (entries.length) {
          state.entries = entries;
        }
      }

      payload.mergeState(state);
    },

    /**
     * When receiving from a third-party endpoint, the endpoint won't be able to
     * write first-party cookies, therefore we write first-party cookies
     * as directed in the response body.
     */
    responseToCookies: function responseToCookies(response) {
      response.getPayloadsByType(STATE_STORE_HANDLE_TYPE).forEach(function (stateItem) {
        var options = {
          domain: apexDomain
        };
        var sameSite = stateItem.attrs && stateItem.attrs.SameSite && stateItem.attrs.SameSite.toLowerCase();

        if (stateItem.maxAge !== undefined) {
          // cookieJar expects "expires" as a date object
          options.expires = new Date(dateProvider().getTime() + stateItem.maxAge * 1000);
        }

        if (sameSite !== undefined) {
          options.sameSite = sameSite;
        } // When sameSite is set to none, the secure flag must be set.
        // Experience edge will not set the secure flag in these cases.


        if (sameSite === "none") {
          options.secure = true;
        }

        cookieJar.set(stateItem.key, stateItem.value, options);
      });
    }
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var MBOX_EDGE_CLUSTER = "mboxEdgeCluster";
var AT_QA_MODE = "at_qa_mode";
var MBOX = "mbox";
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var injectShouldTransferCookie = function injectShouldTransferCookie(_ref123) {
  var orgId = _ref123.orgId,
      targetMigrationEnabled = _ref123.targetMigrationEnabled;
  return function (name) {
    // We have a contract with the server that we will pass
    // all cookies whose names are namespaced according to the
    // logic in isNamespacedCookieName as well as any legacy
    // cookie names (so that the server can handle migrating
    // identities on websites previously using Visitor.js)
    return isNamespacedCookieName(orgId, name) || name === AT_QA_MODE || targetMigrationEnabled && name === MBOX;
  };
};
/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var apiVersion = "v1";
/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var mergeLifecycleResponses = function mergeLifecycleResponses(returnValues) {
  // Merges all returned objects from all `onResponse` callbacks into
  // a single object that can later be returned to the customer.
  var lifecycleOnResponseReturnValues = returnValues.shift() || [];
  var consumerOnResponseReturnValues = returnValues.shift() || [];
  var lifecycleOnBeforeRequestReturnValues = returnValues;
  return _reactorObjectAssign["default"].apply(void 0, [{}].concat(_toConsumableArray(lifecycleOnResponseReturnValues), _toConsumableArray(consumerOnResponseReturnValues), _toConsumableArray(lifecycleOnBeforeRequestReturnValues)));
};
/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var handleRequestFailure = function handleRequestFailure(onRequestFailureCallbackAggregator) {
  return function (error) {
    // Regardless of whether the network call failed, an unexpected status
    // code was returned, or the response body was malformed, we want to call
    // the onRequestFailure callbacks, but still throw the exception.
    var throwError = function throwError() {
      throw error;
    };

    return onRequestFailureCallbackAggregator.call({
      error: error
    }).then(throwError, throwError);
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectSendEdgeNetworkRequest = function injectSendEdgeNetworkRequest(_ref124) {
  var config = _ref124.config,
      lifecycle = _ref124.lifecycle,
      cookieTransfer = _ref124.cookieTransfer,
      sendNetworkRequest = _ref124.sendNetworkRequest,
      createResponse = _ref124.createResponse,
      processWarningsAndErrors = _ref124.processWarningsAndErrors,
      getLocationHint = _ref124.getLocationHint,
      getAssuranceValidationTokenParams = _ref124.getAssuranceValidationTokenParams;
  var edgeDomain = config.edgeDomain,
      edgeBasePath = config.edgeBasePath,
      edgeConfigId = config.edgeConfigId;
  /**
   * Sends a network request that is aware of payload interfaces,
   * lifecycle methods, configured edge domains, response structures, etc.
   */

  return function (_ref125) {
    var request = _ref125.request,
        _ref125$runOnResponse = _ref125.runOnResponseCallbacks,
        runOnResponseCallbacks = _ref125$runOnResponse === void 0 ? noop : _ref125$runOnResponse,
        _ref125$runOnRequestF = _ref125.runOnRequestFailureCallbacks,
        runOnRequestFailureCallbacks = _ref125$runOnRequestF === void 0 ? noop : _ref125$runOnRequestF;
    var onResponseCallbackAggregator = createCallbackAggregator();
    onResponseCallbackAggregator.add(lifecycle.onResponse);
    onResponseCallbackAggregator.add(runOnResponseCallbacks);
    var onRequestFailureCallbackAggregator = createCallbackAggregator();
    onRequestFailureCallbackAggregator.add(lifecycle.onRequestFailure);
    onRequestFailureCallbackAggregator.add(runOnRequestFailureCallbacks);
    return lifecycle.onBeforeRequest({
      request: request,
      onResponse: onResponseCallbackAggregator.add,
      onRequestFailure: onRequestFailureCallbackAggregator.add
    }).then(function () {
      var endpointDomain = request.getUseIdThirdPartyDomain() ? ID_THIRD_PARTY : edgeDomain;
      var locationHint = getLocationHint();
      var edgeBasePathWithLocationHint = locationHint ? "".concat(edgeBasePath, "/").concat(locationHint) : edgeBasePath;
      var url = "https://".concat(endpointDomain, "/").concat(edgeBasePathWithLocationHint, "/").concat(apiVersion, "/").concat(request.getAction(), "?configId=").concat(edgeConfigId, "&requestId=").concat(request.getId()).concat(getAssuranceValidationTokenParams());
      cookieTransfer.cookiesToPayload(request.getPayload(), endpointDomain);
      return sendNetworkRequest({
        requestId: request.getId(),
        url: url,
        payload: request.getPayload(),
        useSendBeacon: request.getUseSendBeacon()
      });
    }).then(function (networkResponse) {
      processWarningsAndErrors(networkResponse);
      return networkResponse;
    })["catch"](handleRequestFailure(onRequestFailureCallbackAggregator)).then(function (_ref126) {
      var parsedBody = _ref126.parsedBody,
          getHeader = _ref126.getHeader;
      // Note that networkResponse.parsedBody may be undefined if it was a
      // 204 No Content response. That's fine.
      var response = createResponse({
        content: parsedBody,
        getHeader: getHeader
      });
      cookieTransfer.responseToCookies(response); // Notice we're calling the onResponse lifecycle method even if there are errors
      // inside the response body. This is because the full request didn't actually fail--
      // only portions of it that are considered non-fatal (a specific, non-critical
      // Konductor plugin, for example).

      return onResponseCallbackAggregator.call({
        response: response
      }).then(mergeLifecycleResponses);
    });
  };
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var NO_CONTENT = 204;
var TOO_MANY_REQUESTS = 429;
var BAD_GATEWAY = 502;
var SERVICE_UNAVAILABLE = 503;
var GATEWAY_TIMEOUT = 504;
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

var MESSAGE_PREFIX = "The server responded with a";

var injectProcessWarningsAndErrors = function injectProcessWarningsAndErrors(_ref127) {
  var logger = _ref127.logger;
  return function (networkResponse) {
    var statusCode = networkResponse.statusCode,
        body = networkResponse.body,
        parsedBody = networkResponse.parsedBody;

    if (statusCode < 200 || statusCode >= 300 || !parsedBody && statusCode !== NO_CONTENT || parsedBody && !Array.isArray(parsedBody.handle)) {
      var bodyToLog = parsedBody ? JSON.stringify(parsedBody, null, 2) : body;
      var messageSuffix = bodyToLog ? "response body:\n".concat(bodyToLog) : "no response body.";
      throw new Error("".concat(MESSAGE_PREFIX, " status code ").concat(statusCode, " and ").concat(messageSuffix));
    }

    if (parsedBody) {
      var _parsedBody$warnings = parsedBody.warnings,
          warnings = _parsedBody$warnings === void 0 ? [] : _parsedBody$warnings,
          _parsedBody$errors = parsedBody.errors,
          errors = _parsedBody$errors === void 0 ? [] : _parsedBody$errors;
      warnings.forEach(function (warning) {
        logger.warn("".concat(MESSAGE_PREFIX, " warning:"), warning);
      });
      errors.forEach(function (error) {
        logger.error("".concat(MESSAGE_PREFIX, " non-fatal error:"), error);
      });
    }
  };
};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var injectGetLocationHint = function injectGetLocationHint(_ref128) {
  var orgId = _ref128.orgId,
      cookieJar = _ref128.cookieJar;
  var clusterCookieName = getNamespacedCookieName(orgId, CLUSTER);

  var fromClusterCookie = function fromClusterCookie() {
    return cookieJar.get(clusterCookieName);
  };

  var fromTarget = function fromTarget() {
    var mboxEdgeCluster = cookieJar.get(MBOX_EDGE_CLUSTER);

    if (mboxEdgeCluster) {
      return "t".concat(mboxEdgeCluster);
    }

    return undefined;
  };

  return function () {
    return fromClusterCookie() || fromTarget();
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var MAX_RETRIES = 3;
var RETRYABLE_STATUS_CODES = [TOO_MANY_REQUESTS, SERVICE_UNAVAILABLE, BAD_GATEWAY, GATEWAY_TIMEOUT]; // These rules are in accordance with
// https://git.corp.adobe.com/pages/experience-edge/konductor/#/apis/errors?id=handling-4xx-and-5xx-responses

var isRequestRetryable = function isRequestRetryable(_ref129) {
  var response = _ref129.response,
      retriesAttempted = _ref129.retriesAttempted;
  return retriesAttempted < MAX_RETRIES && includes(RETRYABLE_STATUS_CODES, response.statusCode);
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var FIRST_DELAY_MILLIS = 1000;
var INCREMENTAL_DELAY_MILLIS = 1000; // When the target delay is randomized, make it within the range of this percentage above or below the target delay.

var MAX_RANDOM_VARIANCE_PERCENTAGE = 0.3;

var calculateRetryDelay = function calculateRetryDelay(retriesAttempted) {
  var targetDelay = FIRST_DELAY_MILLIS + retriesAttempted * INCREMENTAL_DELAY_MILLIS;
  var maxVariance = targetDelay * MAX_RANDOM_VARIANCE_PERCENTAGE;
  var minDelay = targetDelay - maxVariance;
  var maxDelay = targetDelay + maxVariance;
  var randomizedDelayWithinRange = Math.round(minDelay + Math.random() * (maxDelay - minDelay));
  return randomizedDelayWithinRange;
};

var getDelayFromHeader = function getDelayFromHeader(response) {
  // According to the HTTP spec, if the header is defined, its value will be a string that
  // represents either:
  //  * An integer indicating the number of seconds to delay.
  //  * A date after which a retry may occur. The date would be in HTTP-date
  //    format (https://tools.ietf.org/html/rfc7231#section-7.1.1.1). When debugging, it can
  //    be helpful to know that this is the same format that a JavaScript date's
  //    toGMTString() returns.
  var headerValue = response.getHeader(RETRY_AFTER);
  var delayInMillis;

  if (headerValue) {
    var headerValueInt = parseInt(headerValue, 10);

    if (isInteger(headerValueInt)) {
      delayInMillis = headerValueInt * 1000;
    } else {
      delayInMillis = Math.max(0, new Date(headerValue).getTime() - new Date().getTime());
    }
  }

  return delayInMillis;
}; // These rules are in accordance with
// https://git.corp.adobe.com/pages/experience-edge/konductor/#/apis/errors?id=handling-4xx-and-5xx-responses
// For retry delays that don't come from a Retry-After response header, we try to stick with the following best
// practices outlined in https://docs.microsoft.com/en-us/azure/architecture/best-practices/transient-faults:
//  * Incremental retry
//  * Random interval


var getRequestRetryDelay = function getRequestRetryDelay(_ref130) {
  var response = _ref130.response,
      retriesAttempted = _ref130.retriesAttempted;
  // Technically, only 429 or 503 responses should have a Retry-After header, but we'll respect the
  // header if we find it on any response.
  var delayInMillis = getDelayFromHeader(response); // Note that the value of delay may be 0 at this point, which would be a valid delay we want to use
  // and not override, which is why we don't do:
  // if (!delay) { ... }

  if (delayInMillis === undefined) {
    delayInMillis = calculateRetryDelay(retriesAttempted);
  }

  return delayInMillis;
};
/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var HTTP_STATUS_OK = 200;

var injectApplyResponse = function injectApplyResponse(_ref131) {
  var cookieTransfer = _ref131.cookieTransfer,
      lifecycle = _ref131.lifecycle,
      createResponse = _ref131.createResponse,
      processWarningsAndErrors = _ref131.processWarningsAndErrors;
  return function (_ref132) {
    var request = _ref132.request,
        responseHeaders = _ref132.responseHeaders,
        responseBody = _ref132.responseBody,
        _ref132$runOnResponse = _ref132.runOnResponseCallbacks,
        runOnResponseCallbacks = _ref132$runOnResponse === void 0 ? noop : _ref132$runOnResponse,
        _ref132$runOnRequestF = _ref132.runOnRequestFailureCallbacks,
        runOnRequestFailureCallbacks = _ref132$runOnRequestF === void 0 ? noop : _ref132$runOnRequestF;
    var onResponseCallbackAggregator = createCallbackAggregator();
    onResponseCallbackAggregator.add(lifecycle.onResponse);
    onResponseCallbackAggregator.add(runOnResponseCallbacks);
    var onRequestFailureCallbackAggregator = createCallbackAggregator();
    onRequestFailureCallbackAggregator.add(lifecycle.onRequestFailure);
    onRequestFailureCallbackAggregator.add(runOnRequestFailureCallbacks);

    var getHeader = function getHeader(key) {
      return responseHeaders[key];
    };

    return lifecycle.onBeforeRequest({
      request: request,
      onResponse: onResponseCallbackAggregator.add,
      onRequestFailure: onRequestFailureCallbackAggregator.add
    }).then(function () {
      return processWarningsAndErrors({
        statusCode: HTTP_STATUS_OK,
        getHeader: getHeader,
        body: JSON.stringify(responseBody),
        parsedBody: responseBody
      });
    })["catch"](handleRequestFailure(onRequestFailureCallbackAggregator)).then(function () {
      var response = createResponse({
        content: responseBody,
        getHeader: getHeader
      }); // This will clobber any cookies set via HTTP from the server.  So care should be given to remove any state:store handles if that is not desirable

      cookieTransfer.responseToCookies(response);
      return onResponseCallbackAggregator.call({
        response: response
      }).then(mergeLifecycleResponses);
    });
  };
};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var createNamespacedStorage = injectStorage(window);
var _window = window,
    console = _window.console,
    fetch = _window.fetch,
    navigator$1 = _window.navigator,
    XMLHttpRequest = _window.XMLHttpRequest; // set this up as a function so that monitors can be added at anytime

var coreConfigValidators = createCoreConfigs();
var apexDomain = getApexDomain(window, cookieJar);
var sendFetchRequest = isFunction(fetch) ? injectSendFetchRequest({
  fetch: fetch
}) : injectSendXhrRequest({
  XMLHttpRequest: XMLHttpRequest
});
var fireReferrerHideableImage = injectFireReferrerHideableImage();
var getAssuranceValidationTokenParams = createGetAssuranceValidationTokenParams({
  window: window,
  createNamespacedStorage: createNamespacedStorage
});

var createExecuteCommand = function createExecuteCommand(_ref133) {
  var instanceName = _ref133.instanceName,
      _ref133$logController = _ref133.logController,
      setDebugEnabled = _ref133$logController.setDebugEnabled,
      logger = _ref133$logController.logger,
      createComponentLogger = _ref133$logController.createComponentLogger;
  var componentRegistry = createComponentRegistry();
  var lifecycle = createLifecycle(componentRegistry);

  var setDebugCommand = function setDebugCommand(options) {
    setDebugEnabled(options.enabled, {
      fromConfig: false
    });
  };

  var loggingCookieJar = createLoggingCookieJar({
    logger: logger,
    cookieJar: cookieJar
  });

  var configureCommand = function configureCommand(options) {
    var config = buildAndValidateConfig({
      options: options,
      componentCreators: componentCreators,
      coreConfigValidators: coreConfigValidators,
      createConfig: createConfig,
      logger: logger,
      setDebugEnabled: setDebugEnabled
    });
    var orgId = config.orgId,
        targetMigrationEnabled = config.targetMigrationEnabled;
    var shouldTransferCookie = injectShouldTransferCookie({
      orgId: orgId,
      targetMigrationEnabled: targetMigrationEnabled
    });
    var cookieTransfer = createCookieTransfer({
      cookieJar: loggingCookieJar,
      shouldTransferCookie: shouldTransferCookie,
      apexDomain: apexDomain,
      dateProvider: function dateProvider() {
        return new Date();
      }
    });
    var sendBeaconRequest = isFunction(navigator$1.sendBeacon) ? injectSendBeaconRequest({
      // Without the bind(), the browser will complain about an
      // illegal invocation.
      sendBeacon: navigator$1.sendBeacon.bind(navigator$1),
      sendFetchRequest: sendFetchRequest,
      logger: logger
    }) : sendFetchRequest;
    var sendNetworkRequest = injectSendNetworkRequest({
      logger: logger,
      sendFetchRequest: sendFetchRequest,
      sendBeaconRequest: sendBeaconRequest,
      isRequestRetryable: isRequestRetryable,
      getRequestRetryDelay: getRequestRetryDelay
    });
    var processWarningsAndErrors = injectProcessWarningsAndErrors({
      logger: logger
    });
    var extractEdgeInfo = injectExtractEdgeInfo({
      logger: logger
    });
    var createResponse = injectCreateResponse({
      extractEdgeInfo: extractEdgeInfo
    });
    var getLocationHint = injectGetLocationHint({
      orgId: orgId,
      cookieJar: cookieJar
    });
    var sendEdgeNetworkRequest = injectSendEdgeNetworkRequest({
      config: config,
      lifecycle: lifecycle,
      cookieTransfer: cookieTransfer,
      sendNetworkRequest: sendNetworkRequest,
      createResponse: createResponse,
      processWarningsAndErrors: processWarningsAndErrors,
      getLocationHint: getLocationHint,
      getAssuranceValidationTokenParams: getAssuranceValidationTokenParams
    });
    var applyResponse = injectApplyResponse({
      lifecycle: lifecycle,
      cookieTransfer: cookieTransfer,
      createResponse: createResponse,
      processWarningsAndErrors: processWarningsAndErrors
    });
    var generalConsentState = createConsentStateMachine({
      logger: logger
    });
    var consent = createConsent({
      generalConsentState: generalConsentState,
      logger: logger
    });
    var eventManager = createEventManager({
      config: config,
      logger: logger,
      lifecycle: lifecycle,
      consent: consent,
      createEvent: createEvent,
      createDataCollectionRequestPayload: createDataCollectionRequestPayload,
      createDataCollectionRequest: createDataCollectionRequest,
      sendEdgeNetworkRequest: sendEdgeNetworkRequest,
      applyResponse: applyResponse
    });
    return initializeComponents({
      componentCreators: componentCreators,
      lifecycle: lifecycle,
      componentRegistry: componentRegistry,
      getImmediatelyAvailableTools: function getImmediatelyAvailableTools(componentName) {
        var componentLogger = createComponentLogger(componentName);
        return {
          config: config,
          componentRegistry: componentRegistry,
          consent: consent,
          eventManager: eventManager,
          fireReferrerHideableImage: fireReferrerHideableImage,
          logger: componentLogger,
          lifecycle: lifecycle,
          sendEdgeNetworkRequest: sendEdgeNetworkRequest,
          handleError: injectHandleError({
            errorPrefix: "[".concat(instanceName, "] [").concat(componentName, "]"),
            logger: componentLogger
          }),
          createNamespacedStorage: createNamespacedStorage,
          apexDomain: apexDomain
        };
      }
    });
  };

  var handleError = injectHandleError({
    errorPrefix: "[".concat(instanceName, "]"),
    logger: logger
  });
  var executeCommand = injectExecuteCommand({
    logger: logger,
    configureCommand: configureCommand,
    setDebugCommand: setDebugCommand,
    handleError: handleError,
    validateCommandOptions: validateCommandOptions
  });
  return executeCommand;
};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


var _window2 = window,
    console$1 = _window2.console;
var createNamespacedStorage$1 = injectStorage(window);

var createInstance = function createInstance() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var eventOptionsValidator = boundObjectOf({
    name: boundString()["default"]("alloy"),
    monitors: boundArrayOf(boundObjectOf({}))["default"]([])
  }).noUnknownFields();

  var _eventOptionsValidato = eventOptionsValidator(options),
      name = _eventOptionsValidato.name,
      monitors = _eventOptionsValidato.monitors; // this is a function so that window.__alloyMonitors can be set or added to at any time
  // eslint-disable-next-line no-underscore-dangle


  var getMonitors = function getMonitors() {
    return (window.__alloyMonitors || []).concat(monitors);
  };

  var logController = createLogController({
    console: console$1,
    locationSearch: window.location.search,
    createLogger: createLogger,
    instanceName: name,
    createNamespacedStorage: createNamespacedStorage$1,
    getMonitors: getMonitors
  });
  var instance = createExecuteCommand({
    instanceName: name,
    logController: logController
  });
  logController.logger.logOnInstanceCreated({
    instance: instance
  });
  return instance;
};

exports.createInstance = createInstance;
          }

        },
        "adobe-alloy/dist/lib/instanceManager/createInstanceManager.js": {
          "script": function(module, exports, require, turbine) {
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
module.exports = function (_ref) {
  var turbine = _ref.turbine,
      window = _ref.window,
      createInstance = _ref.createInstance,
      _createEventMergeId = _ref.createEventMergeId,
      orgId = _ref.orgId,
      wrapOnBeforeEventSend = _ref.wrapOnBeforeEventSend;

  var _turbine$getExtension = turbine.getExtensionSettings(),
      instancesSettings = _turbine$getExtension.instances;

  var instanceByName = {};
  instancesSettings.forEach(function (_ref2) {
    var name = _ref2.name,
        edgeConfigId = _ref2.edgeConfigId,
        stagingEdgeConfigId = _ref2.stagingEdgeConfigId,
        developmentEdgeConfigId = _ref2.developmentEdgeConfigId,
        onBeforeEventSend = _ref2.onBeforeEventSend,
        options = _objectWithoutProperties(_ref2, ["name", "edgeConfigId", "stagingEdgeConfigId", "developmentEdgeConfigId", "onBeforeEventSend"]);

    var instance = createInstance({
      name: name
    });
    window[name] = instance;
    instanceByName[name] = instance;
    var environment = turbine.environment && turbine.environment.stage;
    var computedEdgeConfigId = environment === "development" && developmentEdgeConfigId || environment === "staging" && stagingEdgeConfigId || edgeConfigId;
    instance("configure", _objectSpread(_objectSpread({}, options), {}, {
      edgeConfigId: computedEdgeConfigId,
      debugEnabled: turbine.debugEnabled,
      orgId: options.orgId || orgId,
      onBeforeEventSend: wrapOnBeforeEventSend(onBeforeEventSend)
    }));
    turbine.onDebugChanged(function (enabled) {
      instance("setDebug", {
        enabled: enabled
      });
    });
  });
  return {
    /**
     * Returns an instance by name.
     * @param name
     * @returns {Function}
     */
    getInstance: function getInstance(name) {
      return instanceByName[name];
    },

    /**
     * Synchronously creates an event merge ID.
     * @returns {string}
     */
    createEventMergeId: function createEventMergeId() {
      return _createEventMergeId();
    }
  };
};
          }

        },
        "adobe-alloy/dist/lib/instanceManager/injectWrapOnBeforeEventSend.js": {
          "script": function(module, exports, require, turbine) {
"use strict";

/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
module.exports = function (_ref) {
  var version = _ref.version;
  return function (onBeforeEventSend) {
    return function (content) {
      content.xdm.implementationDetails.name = "".concat(content.xdm.implementationDetails.name, "/reactor");
      content.xdm.implementationDetails.version = "".concat(content.xdm.implementationDetails.version, "+").concat(version);

      if (onBeforeEventSend) {
        return onBeforeEventSend(content);
      }

      return undefined;
    };
  };
};
          }

        }
      }
    }
  },
  "company": {
    "orgId": "AAE25B8C5D0335630A495C96@AdobeOrg",
    "dynamicCdnEnabled": false
  },
  "property": {
    "name": "Web SDK Agastya",
    "settings": {
      "domains": [
        "www.example.com"
      ],
      "undefinedVarsReturnEmpty": false,
      "ruleComponentSequencingEnabled": true
    },
    "id": "PR8e0f94d215a74e77a7eeef355943175d"
  },
  "rules": [
    {
      "id": "RL8b088f1970914752b5a1c790a9b5c5bf",
      "name": "Web SDK to AA",
      "events": [
        {
          "modulePath": "core/src/lib/events/domReady.js",
          "settings": {
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/queryStringParameter.js",
          "settings": {
            "name": "company",
            "value": "vivo",
            "valueIsRegex": true
          },
          "negate": true,
          "timeout": 2000
        }
      ],
      "actions": [
        {
          "modulePath": "adobe-alloy/dist/lib/actions/sendEvent/index.js",
          "settings": {
            "xdm": "%XDM Core%",
            "data": "%XDM Core%",
            "type": "web.webpagedetails.pageViews",
            "instanceName": "alloy",
            "renderDecisions": true
          },
          "timeout": 2000,
          "delayNext": true
        }
      ]
    },
    {
      "id": "RL8bed48e35a4a42c6a38c382994a5e5e6",
      "name": "Vivo Page Load Rule",
      "events": [
        {
          "modulePath": "core/src/lib/events/domReady.js",
          "settings": {
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/pathAndQuerystring.js",
          "settings": {
            "paths": [
              {
                "value": "company=vivo",
                "valueIsRegex": true
              }
            ]
          },
          "timeout": 2000
        }
      ],
      "actions": [
        {
          "modulePath": "adobe-alloy/dist/lib/actions/sendEvent/index.js",
          "settings": {
            "xdm": "%Vivo XDM%",
            "type": "web.webpagedetails.pageViews",
            "instanceName": "alloy"
          },
          "timeout": 2000,
          "delayNext": true
        }
      ]
    }
  ]
}
})();

var _satellite = (function () {
	'use strict';

	if (!window.atob) { console.warn('Adobe Launch is unsupported in IE 9 and below.'); return; }

	var reactorDocument = document;

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty$1.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	var reactorObjectAssign = objectAssign;

	var reactorWindow = window;

	/***************************************************************************************
	 * (c) 2021 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var createDynamicHostResolver = function (
	  turbineEmbedCode,
	  dynamicCdnEnabled,
	  cdnAllowList,
	  debugController
	) {
	  // A missing list means that we are not trying to dynamic replace (archives,
	  // sftp, no premium CDN option enabled on the company).
	  // even an empty list is flagging to us that we're trying to enforce dynamic
	  var isDynamicEnforced = Boolean(
	    dynamicCdnEnabled && Array.isArray(cdnAllowList)
	  );
	  var shouldAugment = Boolean(isDynamicEnforced && turbineEmbedCode);

	  // using document.createElement('a') because IE10/11 doesn't support new URL()
	  var turbineUrl = document.createElement('a');
	  if (isDynamicEnforced) {
	    var throwUnavailableEmbedCode = function () {
	      var missingEmbedCodeError = new Error(
	        'Unable to find the Library Embed Code for Dynamic Host Resolution.'
	      );
	      missingEmbedCodeError.code = 'dynamic_host_resolver_constructor_error';
	      throw missingEmbedCodeError;
	    };
	    if (turbineEmbedCode) {
	      if (!/^((https?:)?\/\/).+/.test(turbineEmbedCode)) {
	        throwUnavailableEmbedCode();
	      }
	      if (/^\/\/.+/.test(turbineEmbedCode)) {
	        // for IE 10, you must throw on the protocol
	        turbineUrl.href = reactorWindow.location.protocol + turbineEmbedCode;
	      } else {
	        turbineUrl.href = turbineEmbedCode;
	      }
	    }

	    // check URL construction
	    if (!turbineUrl.hostname) {
	      throwUnavailableEmbedCode();
	    }
	    // is this within the allowed list of hosts?
	    if (cdnAllowList.indexOf(turbineUrl.hostname) === -1) {
	      var dynamicDeniedError = new Error(
	        'This library is not authorized for this domain. ' +
	          'Please contact your CSM for more information.'
	      );
	      dynamicDeniedError.code = 'dynamic_host_not_allowed';
	      throw dynamicDeniedError;
	    }
	  }

	  /**
	   * Returns the host of the Turbine embed code, or an empty string if Dynamic Host
	   * is not enabled.
	   * @returns {string}
	   */
	  var memoizedHostResult;
	  var getTurbineHost = function () {
	    if (memoizedHostResult != null) {
	      return memoizedHostResult;
	    }

	    if (shouldAugment) {
	      // be sure we always force https to Adobe managed domains.
	      // IE 10/11 returns the :443 protocol when modern browsers don't, so this replacement
	      // is bringing every browser in line with the same return value
	      var sanitizedHost = turbineUrl.host;
	      if (/:80$/.test(sanitizedHost)) {
	        sanitizedHost = sanitizedHost.replace(':80', '');
	      } else if (/:80\/$/.test(sanitizedHost)) {
	        sanitizedHost = sanitizedHost.replace(':80/', '');
	      } else if (/:443$/.test(sanitizedHost)) {
	        sanitizedHost = sanitizedHost.replace(':443', '');
	      } else if (/:443\/$/.test(sanitizedHost)) {
	        sanitizedHost = sanitizedHost.replace(':443/', '');
	      }

	      memoizedHostResult = turbineUrl.protocol + '//' + sanitizedHost;
	    } else {
	      memoizedHostResult = '';
	    }

	    return memoizedHostResult;
	  };

	  /**
	   * Returns a url decorated with the host of the Turbine embed code. If Dynamic host
	   * is disabled, the original sourceUrl is returned unmodified.
	   * @param sourceUrl
	   * @returns {string|*}
	   */
	  var decorateWithDynamicHost = function (sourceUrl) {
	    if (shouldAugment && typeof sourceUrl === 'string') {
	      var urlParts = [
	        getTurbineHost(),
	        sourceUrl.charAt(0) === '/' ? sourceUrl.slice(1) : sourceUrl
	      ];

	      return urlParts.join('/');
	    }

	    return sourceUrl;
	  };

	  var dynamicHostResolver = {
	    getTurbineHost: getTurbineHost,
	    decorateWithDynamicHost: decorateWithDynamicHost,
	    get isDynamicEnforced() {
	      return isDynamicEnforced;
	    }
	  };

	  if (reactorWindow) {
	    debugController.onDebugChanged(function (isEnabled) {
	      if (isEnabled) {
	        reactorWindow.dynamicHostResolver = dynamicHostResolver;
	      } else {
	        delete reactorWindow.dynamicHostResolver;
	      }
	    });
	  }

	  return dynamicHostResolver;
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	/**
	 * Rules can be ordered by users at the event type level. For example, assume both Rule A and Rule B
	 * use the Library Loaded and Window Loaded event types. Rule A can be ordered to come before Rule B
	 * on Library Loaded but after Rule B on Window Loaded.
	 *
	 * Order values are integers and act more as a priority. In other words, multiple rules can have the
	 * same order value. If they have the same order value, their order of execution should be
	 * considered nondetermistic.
	 *
	 * @param {Array} rules
	 * @returns {Array} An ordered array of rule-event pair objects.
	 */
	var buildRuleExecutionOrder = function (rules) {
	  var ruleEventPairs = [];

	  rules.forEach(function (rule) {
	    if (rule.events) {
	      rule.events.forEach(function (event) {
	        ruleEventPairs.push({
	          rule: rule,
	          event: event
	        });
	      });
	    }
	  });

	  return ruleEventPairs.sort(function (ruleEventPairA, ruleEventPairB) {
	    return ruleEventPairA.event.ruleOrder - ruleEventPairB.event.ruleOrder;
	  });
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var DEBUG_LOCAL_STORAGE_NAME = 'debug';

	var createDebugController = function (localStorage, logger) {
	  var getPersistedDebugEnabled = function () {
	    return localStorage.getItem(DEBUG_LOCAL_STORAGE_NAME) === 'true';
	  };

	  var setPersistedDebugEnabled = function (enabled) {
	    localStorage.setItem(DEBUG_LOCAL_STORAGE_NAME, enabled);
	  };

	  var debugChangedCallbacks = [];
	  var onDebugChanged = function (callback) {
	    debugChangedCallbacks.push(callback);
	  };

	  logger.outputEnabled = getPersistedDebugEnabled();

	  return {
	    onDebugChanged: onDebugChanged,
	    getDebugEnabled: getPersistedDebugEnabled,
	    setDebugEnabled: function (enabled) {
	      if (getPersistedDebugEnabled() !== enabled) {
	        setPersistedDebugEnabled(enabled);
	        logger.outputEnabled = enabled;
	        debugChangedCallbacks.forEach(function (callback) {
	          callback(enabled);
	        });
	      }
	    }
	  };
	};

	/***************************************************************************************
	 * (c) 2018 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	var MODULE_NOT_FUNCTION_ERROR = 'Module did not export a function.';

	var createExecuteDelegateModule = function (
	  moduleProvider,
	  replaceTokens,
	  settingsFileTransformer
	) {
	  return function (moduleDescriptor, syntheticEvent, moduleCallParameters) {
	    moduleCallParameters = moduleCallParameters || [];
	    var moduleExports = moduleProvider.getModuleExports(
	      moduleDescriptor.modulePath
	    );

	    if (typeof moduleExports !== 'function') {
	      throw new Error(MODULE_NOT_FUNCTION_ERROR);
	    }

	    // dynamically replace the host on the module settings
	    var moduleDefinition = moduleProvider.getModuleDefinition(
	      moduleDescriptor.modulePath
	    );

	    // We're transforming URLs in-place to ensure that the developer's settings object reference
	    // is the same object reference as moduleDescriptor.settings. Therefore, we must only transform
	    // the settings one time and save a reference saying that we've done that. We're saving this in
	    // the module descriptor of each event, condition, and action so that we aren't modifying the
	    // settings object.
	    var moduleSettings = moduleDescriptor.settings || {};
	    if (
	      !moduleDescriptor.hasTransformedFilePaths &&
	      moduleDefinition.filePaths
	    ) {
	      settingsFileTransformer(
	        moduleSettings,
	        moduleDefinition.filePaths,
	        moduleDescriptor.modulePath
	      );
	      moduleDescriptor.hasTransformedFilePaths = true;
	    }

	    // replace tokens
	    var moduleDescriptorSettings = replaceTokens(
	      moduleSettings,
	      syntheticEvent
	    );
	    return moduleExports
	      .bind(null, moduleDescriptorSettings)
	      .apply(null, moduleCallParameters);
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	/**
	 * "Cleans" text by trimming the string and removing spaces and newlines.
	 * @param {string} str The string to clean.
	 * @returns {string}
	 */
	var cleanText = function (str) {
	  return typeof str === 'string' ? str.replace(/\s+/g, ' ').trim() : str;
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	/**
	 * Log levels.
	 * @readonly
	 * @enum {string}
	 * @private
	 */
	var levels = {
	  LOG: 'log',
	  INFO: 'info',
	  DEBUG: 'debug',
	  WARN: 'warn',
	  ERROR: 'error'
	};

	/**
	 * Rocket unicode surrogate pair.
	 * @type {string}
	 */
	var ROCKET = '\uD83D\uDE80';

	/**
	 * The user's internet explorer version. If they're not running internet explorer, then it should
	 * be NaN.
	 * @type {Number}
	 */
	var ieVersion = parseInt(
	  (/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1]
	);

	/**
	 * Prefix to use on all messages. The rocket unicode doesn't work on IE 10.
	 * @type {string}
	 */
	var launchPrefix = ieVersion === 10 ? '[Launch]' : ROCKET;

	/**
	 * Whether logged messages should be output to the console.
	 * @type {boolean}
	 */
	var outputEnabled = false;

	/**
	 * Processes a log message.
	 * @param {string} level The level of message to log.
	 * @param {...*} arg Any argument to be logged.
	 * @private
	 */
	var process = function (level) {
	  if (outputEnabled && window.console) {
	    var logArguments = Array.prototype.slice.call(arguments, 1);
	    logArguments.unshift(launchPrefix);
	    // window.debug is unsupported in IE 10
	    if (level === levels.DEBUG && !window.console[level]) {
	      level = levels.INFO;
	    }
	    window.console[level].apply(window.console, logArguments);
	  }
	};

	/**
	 * Outputs a message to the web console.
	 * @param {...*} arg Any argument to be logged.
	 */
	var log = process.bind(null, levels.LOG);

	/**
	 * Outputs informational message to the web console. In some browsers a small "i" icon is
	 * displayed next to these items in the web console's log.
	 * @param {...*} arg Any argument to be logged.
	 */
	var info = process.bind(null, levels.INFO);

	/**
	 * Outputs debug message to the web console. In browsers that do not support
	 * console.debug, console.info is used instead.
	 * @param {...*} arg Any argument to be logged.
	 */
	var debug = process.bind(null, levels.DEBUG);

	/**
	 * Outputs a warning message to the web console.
	 * @param {...*} arg Any argument to be logged.
	 */
	var warn = process.bind(null, levels.WARN);

	/**
	 * Outputs an error message to the web console.
	 * @param {...*} arg Any argument to be logged.
	 */
	var error = process.bind(null, levels.ERROR);

	/**
	 * Outputs a warning message to the web console.
	 * @param {...*} arg Any argument to be logged.
	 */
	var logDeprecation = function () {
	  var wasEnabled = outputEnabled;
	  outputEnabled = true;

	  process.apply(
	    null,
	    Array.prototype.concat(levels.WARN, Array.prototype.slice.call(arguments))
	  );

	  if (!wasEnabled) {
	    outputEnabled = false;
	  }
	};

	var logger = {
	  log: log,
	  info: info,
	  debug: debug,
	  warn: warn,
	  error: error,
	  deprecation: logDeprecation,
	  /**
	   * Whether logged messages should be output to the console.
	   * @type {boolean}
	   */
	  get outputEnabled() {
	    return outputEnabled;
	  },
	  set outputEnabled(value) {
	    outputEnabled = value;
	  },
	  /**
	   * Creates a logging utility that only exposes logging functionality and prefixes all messages
	   * with an identifier.
	   */
	  createPrefixedLogger: function (identifier) {
	    var loggerSpecificPrefix = '[' + identifier + ']';

	    return {
	      log: log.bind(null, loggerSpecificPrefix),
	      info: info.bind(null, loggerSpecificPrefix),
	      debug: debug.bind(null, loggerSpecificPrefix),
	      warn: warn.bind(null, loggerSpecificPrefix),
	      error: error.bind(null, loggerSpecificPrefix)
	    };
	  }
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var NAMESPACE = 'com.adobe.reactor.';

	var getNamespacedStorage = function (storageType, additionalNamespace) {
	  var finalNamespace = NAMESPACE + (additionalNamespace || '');

	  // When storage is disabled on Safari, the mere act of referencing window.localStorage
	  // or window.sessionStorage throws an error. For this reason, we wrap in a try-catch.
	  return {
	    /**
	     * Reads a value from storage.
	     * @param {string} name The name of the item to be read.
	     * @returns {string}
	     */
	    getItem: function (name) {
	      try {
	        return reactorWindow[storageType].getItem(finalNamespace + name);
	      } catch (e) {
	        return null;
	      }
	    },
	    /**
	     * Saves a value to storage.
	     * @param {string} name The name of the item to be saved.
	     * @param {string} value The value of the item to be saved.
	     * @returns {boolean} Whether the item was successfully saved to storage.
	     */
	    setItem: function (name, value) {
	      try {
	        reactorWindow[storageType].setItem(finalNamespace + name, value);
	        return true;
	      } catch (e) {
	        return false;
	      }
	    }
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var DATA_ELEMENTS_NAMESPACE = 'dataElements.';

	var dataElementSessionStorage = getNamespacedStorage(
	  'sessionStorage',
	  DATA_ELEMENTS_NAMESPACE
	);
	var dataElementLocalStorage = getNamespacedStorage(
	  'localStorage',
	  DATA_ELEMENTS_NAMESPACE
	);

	var storageDurations = {
	  PAGEVIEW: 'pageview',
	  SESSION: 'session',
	  VISITOR: 'visitor'
	};

	var pageviewCache = {};

	var serialize = function (value) {
	  var serialized;

	  try {
	    // On some browsers, with some objects, errors will be thrown during serialization. For example,
	    // in Chrome with the window object, it will throw "TypeError: Converting circular structure
	    // to JSON"
	    serialized = JSON.stringify(value);
	    // eslint-disable-next-line no-empty
	  } catch (e) {}

	  return serialized;
	};

	var setValue = function (key, storageDuration, value) {
	  var serializedValue;

	  switch (storageDuration) {
	    case storageDurations.PAGEVIEW:
	      pageviewCache[key] = value;
	      return;
	    case storageDurations.SESSION:
	      serializedValue = serialize(value);
	      if (serializedValue) {
	        dataElementSessionStorage.setItem(key, serializedValue);
	      }
	      return;
	    case storageDurations.VISITOR:
	      serializedValue = serialize(value);
	      if (serializedValue) {
	        dataElementLocalStorage.setItem(key, serializedValue);
	      }
	      return;
	  }
	};

	var getValue = function (key, storageDuration) {
	  var value;

	  // It should consistently return the same value if no stored item was found. We chose null,
	  // though undefined could be a reasonable value as well.
	  switch (storageDuration) {
	    case storageDurations.PAGEVIEW:
	      return pageviewCache.hasOwnProperty(key) ? pageviewCache[key] : null;
	    case storageDurations.SESSION:
	      value = dataElementSessionStorage.getItem(key);
	      return value === null ? value : JSON.parse(value);
	    case storageDurations.VISITOR:
	      value = dataElementLocalStorage.getItem(key);
	      return value === null ? value : JSON.parse(value);
	  }
	};

	var dataElementSafe = {
	  setValue: setValue,
	  getValue: getValue
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var getErrorMessage = function (
	  dataDef,
	  dataElementName,
	  errorMessage,
	  errorStack
	) {
	  return (
	    'Failed to execute data element module ' +
	    dataDef.modulePath +
	    ' for data element ' +
	    dataElementName +
	    '. ' +
	    errorMessage +
	    (errorStack ? '\n' + errorStack : '')
	  );
	};

	var createGetDataElementValue = function (
	  moduleProvider,
	  getDataElementDefinition,
	  replaceTokens,
	  undefinedVarsReturnEmpty,
	  settingsFileTransformer
	) {
	  return function (name, syntheticEvent) {
	    var dataDef = getDataElementDefinition(name);

	    if (!dataDef) {
	      return undefinedVarsReturnEmpty ? '' : undefined;
	    }

	    var storageDuration = dataDef.storageDuration;
	    var moduleExports;
	    var moduleDefinition;

	    try {
	      moduleExports = moduleProvider.getModuleExports(dataDef.modulePath);
	      moduleDefinition = moduleProvider.getModuleDefinition(dataDef.modulePath);
	    } catch (e) {
	      logger.error(getErrorMessage(dataDef, name, e.message, e.stack));
	      return;
	    }

	    if (typeof moduleExports !== 'function') {
	      logger.error(
	        getErrorMessage(dataDef, name, 'Module did not export a function.')
	      );
	      return;
	    }

	    var value;

	    var dataElementSettings = dataDef.settings || {};
	    if (!dataDef.hasTransformedFilePaths && moduleDefinition.filePaths) {
	      settingsFileTransformer(
	        dataElementSettings,
	        moduleDefinition.filePaths,
	        dataDef.modulePath
	      );
	      dataDef.hasTransformedFilePaths = true;
	    }

	    try {
	      value = moduleExports(
	        replaceTokens(dataElementSettings, syntheticEvent),
	        syntheticEvent
	      );
	    } catch (e) {
	      logger.error(getErrorMessage(dataDef, name, e.message, e.stack));
	      return;
	    }

	    if (storageDuration) {
	      if (value != null) {
	        dataElementSafe.setValue(name, storageDuration, value);
	      } else {
	        value = dataElementSafe.getValue(name, storageDuration);
	      }
	    }

	    if (value == null && dataDef.defaultValue != null) {
	      value = dataDef.defaultValue;
	    }

	    if (typeof value === 'string') {
	      if (dataDef.cleanText) {
	        value = cleanText(value);
	      }

	      if (dataDef.forceLowerCase) {
	        value = value.toLowerCase();
	      }
	    }

	    return value;
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var specialPropertyAccessors = {
	  text: function (obj) {
	    return obj.textContent;
	  },
	  cleanText: function (obj) {
	    return cleanText(obj.textContent);
	  }
	};

	/**
	 * This returns the value of a property at a given path. For example, a <code>path<code> of
	 * <code>foo.bar</code> will return the value of <code>obj.foo.bar</code>.
	 *
	 * In addition, if <code>path</code> is <code>foo.bar.getAttribute(unicorn)</code> and
	 * <code>obj.foo.bar</code> has a method named <code>getAttribute</code>, the method will be
	 * called with a value of <code>"unicorn"</code> and the value will be returned.
	 *
	 * Also, if <code>path</code> is <code>foo.bar.@text</code> or other supported properties
	 * beginning with <code>@</code>, a special accessor will be used.
	 *
	 * @param host
	 * @param path
	 * @param supportSpecial
	 * @returns {*}
	 */
	var getObjectProperty = function (host, propChain, supportSpecial) {
	  var value = host;
	  var attrMatch;
	  for (var i = 0, len = propChain.length; i < len; i++) {
	    if (value == null) {
	      return undefined;
	    }
	    var prop = propChain[i];
	    if (supportSpecial && prop.charAt(0) === '@') {
	      var specialProp = prop.slice(1);
	      value = specialPropertyAccessors[specialProp](value);
	      continue;
	    }
	    if (
	      value.getAttribute &&
	      (attrMatch = prop.match(/^getAttribute\((.+)\)$/))
	    ) {
	      var attr = attrMatch[1];
	      value = value.getAttribute(attr);
	      continue;
	    }
	    value = value[prop];
	  }
	  return value;
	};

	/**
	 * Returns the value of a variable.
	 * @param {string} variable
	 * @param {Object} [syntheticEvent] A synthetic event. Only required when using %event... %this...
	 * or %target...
	 * @returns {*}
	 */
	var createGetVar = function (
	  customVars,
	  getDataElementDefinition,
	  getDataElementValue
	) {
	  return function (variable, syntheticEvent) {
	    var value;

	    if (getDataElementDefinition(variable)) {
	      // Accessing nested properties of a data element using dot-notation is unsupported because
	      // users can currently create data elements with periods in the name.
	      value = getDataElementValue(variable, syntheticEvent);
	    } else {
	      var propChain = variable.split('.');
	      var variableHostName = propChain.shift();

	      if (variableHostName === 'this') {
	        if (syntheticEvent) {
	          // I don't know why this is the only one that supports special properties, but that's the
	          // way it was in Satellite.
	          value = getObjectProperty(syntheticEvent.element, propChain, true);
	        }
	      } else if (variableHostName === 'event') {
	        if (syntheticEvent) {
	          value = getObjectProperty(syntheticEvent, propChain);
	        }
	      } else if (variableHostName === 'target') {
	        if (syntheticEvent) {
	          value = getObjectProperty(syntheticEvent.target, propChain);
	        }
	      } else {
	        value = getObjectProperty(customVars[variableHostName], propChain);
	      }
	    }

	    return value;
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	/**
	 * Determines if the provided name is a valid variable, where the variable
	 * can be a data element, element, event, target, or custom var.
	 * @param variableName
	 * @returns {boolean}
	 */
	var createIsVar = function (customVars, getDataElementDefinition) {
	  return function (variableName) {
	    var nameBeforeDot = variableName.split('.')[0];

	    return Boolean(
	      getDataElementDefinition(variableName) ||
	        nameBeforeDot === 'this' ||
	        nameBeforeDot === 'event' ||
	        nameBeforeDot === 'target' ||
	        customVars.hasOwnProperty(nameBeforeDot)
	    );
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	var extractModuleExports = function (script, require, turbine) {
	  var module = {
	    exports: {}
	  };

	  script.call(module.exports, module, module.exports, require, turbine);

	  return module.exports;
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var createModuleProvider = function () {
	  var moduleByReferencePath = {};

	  var getModule = function (referencePath) {
	    var module = moduleByReferencePath[referencePath];

	    if (!module) {
	      throw new Error('Module ' + referencePath + ' not found.');
	    }

	    return module;
	  };

	  var registerModule = function (
	    referencePath,
	    moduleDefinition,
	    extensionName,
	    require,
	    turbine
	  ) {
	    var module = {
	      definition: moduleDefinition,
	      extensionName: extensionName,
	      require: require,
	      turbine: turbine
	    };
	    module.require = require;
	    moduleByReferencePath[referencePath] = module;
	  };

	  var hydrateCache = function () {
	    Object.keys(moduleByReferencePath).forEach(function (referencePath) {
	      try {
	        getModuleExports(referencePath);
	      } catch (e) {
	        var errorMessage =
	          'Error initializing module ' +
	          referencePath +
	          '. ' +
	          e.message +
	          (e.stack ? '\n' + e.stack : '');
	        logger.error(errorMessage);
	      }
	    });
	  };

	  var getModuleExports = function (referencePath) {
	    var module = getModule(referencePath);

	    // Using hasOwnProperty instead of a falsey check because the module could export undefined
	    // in which case we don't want to execute the module each time the exports is requested.
	    if (!module.hasOwnProperty('exports')) {
	      module.exports = extractModuleExports(
	        module.definition.script,
	        module.require,
	        module.turbine
	      );
	    }

	    return module.exports;
	  };

	  var getModuleDefinition = function (referencePath) {
	    return getModule(referencePath).definition;
	  };

	  var getModuleExtensionName = function (referencePath) {
	    return getModule(referencePath).extensionName;
	  };

	  return {
	    registerModule: registerModule,
	    hydrateCache: hydrateCache,
	    getModuleExports: getModuleExports,
	    getModuleDefinition: getModuleDefinition,
	    getModuleExtensionName: getModuleExtensionName
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var warningLogged = false;

	var createNotifyMonitors = function (_satellite) {
	  return function (type, event) {
	    var monitors = _satellite._monitors;

	    if (monitors) {
	      if (!warningLogged) {
	        logger.warn(
	          'The _satellite._monitors API may change at any time and should only ' +
	            'be used for debugging.'
	        );
	        warningLogged = true;
	      }

	      monitors.forEach(function (monitor) {
	        if (monitor[type]) {
	          monitor[type](event);
	        }
	      });
	    }
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	/**
	 * Replacing any variable tokens (%myDataElement%, %this.foo%, etc.) with their associated values.
	 * A new string, object, or array will be created; the thing being processed will never be
	 * modified.
	 * @param {*} thing Thing potentially containing variable tokens. Objects and arrays will be
	 * deeply processed.
	 * @param {HTMLElement} [element] Associated HTML element. Used for special tokens
	 * (%this.something%).
	 * @param {Object} [event] Associated event. Used for special tokens (%event.something%,
	 * %target.something%)
	 * @returns {*} A processed value.
	 */
	var createReplaceTokens = function (isVar, getVar, undefinedVarsReturnEmpty) {
	  var replaceTokensInString;
	  var replaceTokensInObject;
	  var replaceTokensInArray;
	  var replaceTokens;
	  var variablesBeingRetrieved = [];

	  var getVarValue = function (token, variableName, syntheticEvent) {
	    if (!isVar(variableName)) {
	      return token;
	    }

	    variablesBeingRetrieved.push(variableName);
	    var val = getVar(variableName, syntheticEvent);
	    variablesBeingRetrieved.pop();
	    return val == null && undefinedVarsReturnEmpty ? '' : val;
	  };

	  /**
	   * Perform variable substitutions to a string where tokens are specified in the form %foo%.
	   * If the only content of the string is a single data element token, then the raw data element
	   * value will be returned instead.
	   *
	   * @param str {string} The string potentially containing data element tokens.
	   * @param element {HTMLElement} The element to use for tokens in the form of %this.property%.
	   * @param event {Object} The event object to use for tokens in the form of %target.property%.
	   * @returns {*}
	   */
	  replaceTokensInString = function (str, syntheticEvent) {
	    // Is the string a single data element token and nothing else?
	    var result = /^%([^%]+)%$/.exec(str);

	    if (result) {
	      return getVarValue(str, result[1], syntheticEvent);
	    } else {
	      return str.replace(/%(.+?)%/g, function (token, variableName) {
	        return getVarValue(token, variableName, syntheticEvent);
	      });
	    }
	  };

	  replaceTokensInObject = function (obj, syntheticEvent) {
	    var ret = {};
	    var keys = Object.keys(obj);
	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      ret[key] = replaceTokens(value, syntheticEvent);
	    }
	    return ret;
	  };

	  replaceTokensInArray = function (arr, syntheticEvent) {
	    var ret = [];
	    for (var i = 0, len = arr.length; i < len; i++) {
	      ret.push(replaceTokens(arr[i], syntheticEvent));
	    }
	    return ret;
	  };

	  replaceTokens = function (thing, syntheticEvent) {
	    if (typeof thing === 'string') {
	      return replaceTokensInString(thing, syntheticEvent);
	    } else if (Array.isArray(thing)) {
	      return replaceTokensInArray(thing, syntheticEvent);
	    } else if (typeof thing === 'object' && thing !== null) {
	      return replaceTokensInObject(thing, syntheticEvent);
	    }

	    return thing;
	  };

	  return function (thing, syntheticEvent) {
	    // It's possible for a data element to reference another data element. Because of this,
	    // we need to prevent circular dependencies from causing an infinite loop.
	    if (variablesBeingRetrieved.length > 10) {
	      logger.error(
	        'Data element circular reference detected: ' +
	          variablesBeingRetrieved.join(' -> ')
	      );
	      return thing;
	    }

	    return replaceTokens(thing, syntheticEvent);
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	var createSetCustomVar = function (customVars) {
	  return function () {
	    if (typeof arguments[0] === 'string') {
	      customVars[arguments[0]] = arguments[1];
	    } else if (arguments[0]) {
	      // assume an object literal
	      var mapping = arguments[0];
	      for (var key in mapping) {
	        customVars[key] = mapping[key];
	      }
	    }
	  };
	};

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getAugmentedNamespace(n) {
		if (n.__esModule) return n;
		var a = Object.defineProperty({}, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	function createCommonjsModule(fn) {
	  var module = { exports: {} };
		return fn(module, module.exports), module.exports;
	}

	/**
	 * @this {Promise}
	 */
	function finallyConstructor(callback) {
	  var constructor = this.constructor;
	  return this.then(
	    function(value) {
	      // @ts-ignore
	      return constructor.resolve(callback()).then(function() {
	        return value;
	      });
	    },
	    function(reason) {
	      // @ts-ignore
	      return constructor.resolve(callback()).then(function() {
	        // @ts-ignore
	        return constructor.reject(reason);
	      });
	    }
	  );
	}

	// Store setTimeout reference so promise-polyfill will be unaffected by
	// other code modifying setTimeout (like sinon.useFakeTimers())
	var setTimeoutFunc = setTimeout;

	function isArray(x) {
	  return Boolean(x && typeof x.length !== 'undefined');
	}

	function noop() {}

	// Polyfill for Function.prototype.bind
	function bind(fn, thisArg) {
	  return function() {
	    fn.apply(thisArg, arguments);
	  };
	}

	/**
	 * @constructor
	 * @param {Function} fn
	 */
	function Promise$1(fn) {
	  if (!(this instanceof Promise$1))
	    throw new TypeError('Promises must be constructed via new');
	  if (typeof fn !== 'function') throw new TypeError('not a function');
	  /** @type {!number} */
	  this._state = 0;
	  /** @type {!boolean} */
	  this._handled = false;
	  /** @type {Promise|undefined} */
	  this._value = undefined;
	  /** @type {!Array<!Function>} */
	  this._deferreds = [];

	  doResolve(fn, this);
	}

	function handle(self, deferred) {
	  while (self._state === 3) {
	    self = self._value;
	  }
	  if (self._state === 0) {
	    self._deferreds.push(deferred);
	    return;
	  }
	  self._handled = true;
	  Promise$1._immediateFn(function() {
	    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
	    if (cb === null) {
	      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
	      return;
	    }
	    var ret;
	    try {
	      ret = cb(self._value);
	    } catch (e) {
	      reject(deferred.promise, e);
	      return;
	    }
	    resolve(deferred.promise, ret);
	  });
	}

	function resolve(self, newValue) {
	  try {
	    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	    if (newValue === self)
	      throw new TypeError('A promise cannot be resolved with itself.');
	    if (
	      newValue &&
	      (typeof newValue === 'object' || typeof newValue === 'function')
	    ) {
	      var then = newValue.then;
	      if (newValue instanceof Promise$1) {
	        self._state = 3;
	        self._value = newValue;
	        finale(self);
	        return;
	      } else if (typeof then === 'function') {
	        doResolve(bind(then, newValue), self);
	        return;
	      }
	    }
	    self._state = 1;
	    self._value = newValue;
	    finale(self);
	  } catch (e) {
	    reject(self, e);
	  }
	}

	function reject(self, newValue) {
	  self._state = 2;
	  self._value = newValue;
	  finale(self);
	}

	function finale(self) {
	  if (self._state === 2 && self._deferreds.length === 0) {
	    Promise$1._immediateFn(function() {
	      if (!self._handled) {
	        Promise$1._unhandledRejectionFn(self._value);
	      }
	    });
	  }

	  for (var i = 0, len = self._deferreds.length; i < len; i++) {
	    handle(self, self._deferreds[i]);
	  }
	  self._deferreds = null;
	}

	/**
	 * @constructor
	 */
	function Handler(onFulfilled, onRejected, promise) {
	  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	  this.promise = promise;
	}

	/**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asynchrony.
	 */
	function doResolve(fn, self) {
	  var done = false;
	  try {
	    fn(
	      function(value) {
	        if (done) return;
	        done = true;
	        resolve(self, value);
	      },
	      function(reason) {
	        if (done) return;
	        done = true;
	        reject(self, reason);
	      }
	    );
	  } catch (ex) {
	    if (done) return;
	    done = true;
	    reject(self, ex);
	  }
	}

	Promise$1.prototype['catch'] = function(onRejected) {
	  return this.then(null, onRejected);
	};

	Promise$1.prototype.then = function(onFulfilled, onRejected) {
	  // @ts-ignore
	  var prom = new this.constructor(noop);

	  handle(this, new Handler(onFulfilled, onRejected, prom));
	  return prom;
	};

	Promise$1.prototype['finally'] = finallyConstructor;

	Promise$1.all = function(arr) {
	  return new Promise$1(function(resolve, reject) {
	    if (!isArray(arr)) {
	      return reject(new TypeError('Promise.all accepts an array'));
	    }

	    var args = Array.prototype.slice.call(arr);
	    if (args.length === 0) return resolve([]);
	    var remaining = args.length;

	    function res(i, val) {
	      try {
	        if (val && (typeof val === 'object' || typeof val === 'function')) {
	          var then = val.then;
	          if (typeof then === 'function') {
	            then.call(
	              val,
	              function(val) {
	                res(i, val);
	              },
	              reject
	            );
	            return;
	          }
	        }
	        args[i] = val;
	        if (--remaining === 0) {
	          resolve(args);
	        }
	      } catch (ex) {
	        reject(ex);
	      }
	    }

	    for (var i = 0; i < args.length; i++) {
	      res(i, args[i]);
	    }
	  });
	};

	Promise$1.resolve = function(value) {
	  if (value && typeof value === 'object' && value.constructor === Promise$1) {
	    return value;
	  }

	  return new Promise$1(function(resolve) {
	    resolve(value);
	  });
	};

	Promise$1.reject = function(value) {
	  return new Promise$1(function(resolve, reject) {
	    reject(value);
	  });
	};

	Promise$1.race = function(arr) {
	  return new Promise$1(function(resolve, reject) {
	    if (!isArray(arr)) {
	      return reject(new TypeError('Promise.race accepts an array'));
	    }

	    for (var i = 0, len = arr.length; i < len; i++) {
	      Promise$1.resolve(arr[i]).then(resolve, reject);
	    }
	  });
	};

	// Use polyfill for setImmediate for performance gains
	Promise$1._immediateFn =
	  // @ts-ignore
	  (typeof setImmediate === 'function' &&
	    function(fn) {
	      // @ts-ignore
	      setImmediate(fn);
	    }) ||
	  function(fn) {
	    setTimeoutFunc(fn, 0);
	  };

	Promise$1._unhandledRejectionFn = function _unhandledRejectionFn(err) {
	  if (typeof console !== 'undefined' && console) {
	    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
	  }
	};

	var src$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': Promise$1
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(src$1);

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	// For building Turbine we are using Rollup. For running the turbine tests we are using
	// Karma + Webpack. You need to specify the default import when using promise-polyfill`
	// with Webpack 2+. We need `require('promise-polyfill').default` for running the tests
	// and `require('promise-polyfill')` for building Turbine.
	var reactorPromise =
	  (typeof window !== 'undefined' && window.Promise) ||
	  (typeof commonjsGlobal !== 'undefined' && commonjsGlobal.Promise) ||
	  require$$0.default ||
	  require$$0;

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/

	var createAddActionToQueue = function (
	  executeDelegateModule,
	  normalizeRuleComponentError,
	  logActionError
	) {
	  return function (action, rule, syntheticEvent, lastPromiseInQueue) {
	    return lastPromiseInQueue.then(function () {
	      // This module is used when ruleComponentSequencing is enabled.
	      // action.timeout is always supplied to this module as >= 0 when delayNext is true.

	      var delayNextAction = action.delayNext;
	      var actionTimeoutId;

	      return new reactorPromise(function (resolve, reject) {
	        var moduleResult = executeDelegateModule(action, syntheticEvent, [
	          syntheticEvent
	        ]);

	        if (!delayNextAction) {
	          return resolve();
	        }

	        var promiseTimeoutMs = action.timeout;
	        var timeoutPromise = new reactorPromise(function (resolve, reject) {
	          actionTimeoutId = setTimeout(function () {
	            reject(
	              new Error(
	                'A timeout occurred because the action took longer than ' +
	                  promiseTimeoutMs / 1000 +
	                  ' seconds to complete. '
	              )
	            );
	          }, promiseTimeoutMs);
	        });

	        reactorPromise.race([moduleResult, timeoutPromise]).then(resolve, reject);
	      })
	        .catch(function (e) {
	          clearTimeout(actionTimeoutId);
	          e = normalizeRuleComponentError(e);
	          logActionError(action, rule, e);
	          return reactorPromise.reject(e);
	        })
	        .then(function () {
	          clearTimeout(actionTimeoutId);
	        });
	    });
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/

	var createAddConditionToQueue = function (
	  executeDelegateModule,
	  normalizeRuleComponentError,
	  isConditionMet,
	  logConditionError,
	  logConditionNotMet
	) {
	  return function (condition, rule, syntheticEvent, lastPromiseInQueue) {
	    return lastPromiseInQueue.then(function () {
	      // This module is used when ruleComponentSequencing is enabled.
	      // condition.timeout is always supplied to this module as >= 0.
	      // Conditions always assume delayNext = true because we have to know the
	      // condition result before moving on.
	      var conditionTimeoutId;

	      return new reactorPromise(function (resolve, reject) {
	        var moduleResult = executeDelegateModule(condition, syntheticEvent, [
	          syntheticEvent
	        ]);

	        var promiseTimeoutMs = condition.timeout;
	        var timeoutPromise = new reactorPromise(function (resolve, reject) {
	          conditionTimeoutId = setTimeout(function () {
	            reject(
	              new Error(
	                'A timeout occurred because the condition took longer than ' +
	                  promiseTimeoutMs / 1000 +
	                  ' seconds to complete. '
	              )
	            );
	          }, promiseTimeoutMs);
	        });

	        reactorPromise.race([moduleResult, timeoutPromise]).then(resolve, reject);
	      })
	        .catch(function (e) {
	          clearTimeout(conditionTimeoutId);
	          e = normalizeRuleComponentError(e);
	          logConditionError(condition, rule, e);
	          return reactorPromise.reject(e);
	        })
	        .then(function (result) {
	          clearTimeout(conditionTimeoutId);
	          if (!isConditionMet(condition, result)) {
	            logConditionNotMet(condition, rule);
	            return reactorPromise.reject();
	          }
	        });
	    });
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/

	var lastPromiseInQueue = reactorPromise.resolve();

	var createAddRuleToQueue = function (
	  addConditionToQueue,
	  addActionToQueue,
	  logRuleCompleted
	) {
	  return function (rule, syntheticEvent) {
	    if (rule.conditions) {
	      rule.conditions.forEach(function (condition) {
	        lastPromiseInQueue = addConditionToQueue(
	          condition,
	          rule,
	          syntheticEvent,
	          lastPromiseInQueue
	        );
	      });
	    }

	    if (rule.actions) {
	      rule.actions.forEach(function (action) {
	        lastPromiseInQueue = addActionToQueue(
	          action,
	          rule,
	          syntheticEvent,
	          lastPromiseInQueue
	        );
	      });
	    }

	    lastPromiseInQueue = lastPromiseInQueue.then(function () {
	      logRuleCompleted(rule);
	    });

	    // Allows later rules to keep running when an error occurs within this rule.
	    lastPromiseInQueue = lastPromiseInQueue.catch(function () {});

	    return lastPromiseInQueue;
	  };
	};

	var isPromiseLike = function (value) {
	  return Boolean(
	    value && typeof value === 'object' && typeof value.then === 'function'
	  );
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/

	var createEvaluateConditions = function (
	  executeDelegateModule,
	  isConditionMet,
	  logConditionNotMet,
	  logConditionError
	) {
	  return function (rule, syntheticEvent) {
	    var condition;

	    if (rule.conditions) {
	      for (var i = 0; i < rule.conditions.length; i++) {
	        condition = rule.conditions[i];

	        try {
	          var result = executeDelegateModule(condition, syntheticEvent, [
	            syntheticEvent
	          ]);

	          // If the result is promise-like, the extension needs to do something asynchronously,
	          // but the customer does not have rule component sequencing enabled on the property.
	          // If we didn't do this, the condition would always pass because the promise is
	          // considered "truthy".
	          if (isPromiseLike(result)) {
	            throw new Error(
	              'Rule component sequencing must be enabled on the property ' +
	                'for this condition to function properly.'
	            );
	          }

	          if (!isConditionMet(condition, result)) {
	            logConditionNotMet(condition, rule);
	            return false;
	          }
	        } catch (e) {
	          logConditionError(condition, rule, e);
	          return false;
	        }
	      }
	    }

	    return true;
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createExecuteRule = function (evaluateConditions, runActions) {
	  return function (rule, normalizedSyntheticEvent) {
	    if (evaluateConditions(rule, normalizedSyntheticEvent)) {
	      runActions(rule, normalizedSyntheticEvent);
	    }
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createGetModuleDisplayNameByRuleComponent = function (moduleProvider) {
	  return function (ruleComponent) {
	    var moduleDefinition = moduleProvider.getModuleDefinition(
	      ruleComponent.modulePath
	    );
	    return (
	      (moduleDefinition && moduleDefinition.displayName) ||
	      ruleComponent.modulePath
	    );
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createGetSyntheticEventMeta = function (moduleProvider) {
	  return function (ruleEventPair) {
	    var rule = ruleEventPair.rule;
	    var event = ruleEventPair.event;

	    var moduleName = moduleProvider.getModuleDefinition(event.modulePath).name;
	    var extensionName = moduleProvider.getModuleExtensionName(event.modulePath);

	    return {
	      $type: extensionName + '.' + moduleName,
	      $rule: {
	        id: rule.id,
	        name: rule.name
	      }
	    };
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createInitEventModule = function (
	  triggerRule,
	  executeDelegateModule,
	  normalizeSyntheticEvent,
	  getErrorMessage,
	  getSyntheticEventMeta,
	  logger
	) {
	  return function (guardUntilAllInitialized, ruleEventPair) {
	    var rule = ruleEventPair.rule;
	    var event = ruleEventPair.event;
	    event.settings = event.settings || {};

	    try {
	      var syntheticEventMeta = getSyntheticEventMeta(ruleEventPair);

	      executeDelegateModule(event, null, [
	        /**
	         * This is the callback that executes a particular rule when an event has occurred.
	         * @param {Object} [syntheticEvent] An object that contains detail regarding the event
	         * that occurred.
	         */
	        function trigger(syntheticEvent) {
	          // DTM-11871
	          // If we're still in the process of initializing event modules,
	          // we need to queue up any calls to trigger, otherwise if the triggered
	          // rule does something that triggers a different rule whose event module
	          // has not been initialized, that secondary rule will never get executed.
	          // This can be removed if we decide to always use the rule queue, since
	          // conditions and actions will be processed asynchronously, which
	          // would give time for all event modules to be initialized.

	          var normalizedSyntheticEvent = normalizeSyntheticEvent(
	            syntheticEventMeta,
	            syntheticEvent
	          );

	          guardUntilAllInitialized(function () {
	            triggerRule(normalizedSyntheticEvent, rule);
	          });
	        }
	      ]);
	    } catch (e) {
	      logger.error(getErrorMessage(event, rule, e));
	    }
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createLogActionError = function (
	  getRuleComponentErrorMessage,
	  getModuleDisplayNameByRuleComponent,
	  logger,
	  notifyMonitors
	) {
	  return function (action, rule, e) {
	    var actionDisplayName = getModuleDisplayNameByRuleComponent(action);

	    logger.error(getRuleComponentErrorMessage(actionDisplayName, rule.name, e));

	    notifyMonitors('ruleActionFailed', {
	      rule: rule,
	      action: action
	    });
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createLogConditionError = function (
	  getRuleComponentErrorMessage,
	  getModuleDisplayNameByRuleComponent,
	  logger,
	  notifyMonitors
	) {
	  return function (condition, rule, e) {
	    var conditionDisplayName = getModuleDisplayNameByRuleComponent(condition);

	    logger.error(
	      getRuleComponentErrorMessage(conditionDisplayName, rule.name, e)
	    );

	    notifyMonitors('ruleConditionFailed', {
	      rule: rule,
	      condition: condition
	    });
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createLogConditionNotMet = function (
	  getModuleDisplayNameByRuleComponent,
	  logger,
	  notifyMonitors
	) {
	  return function (condition, rule) {
	    var conditionDisplayName = getModuleDisplayNameByRuleComponent(condition);

	    logger.log(
	      'Condition "' +
	        conditionDisplayName +
	        '" for rule "' +
	        rule.name +
	        '" was not met.'
	    );

	    notifyMonitors('ruleConditionFailed', {
	      rule: rule,
	      condition: condition
	    });
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createLogRuleCompleted = function (logger, notifyMonitors) {
	  return function (rule) {
	    logger.log('Rule "' + rule.name + '" fired.');
	    notifyMonitors('ruleCompleted', {
	      rule: rule
	    });
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createRunActions = function (
	  executeDelegateModule,
	  logActionError,
	  logRuleCompleted
	) {
	  return function (rule, syntheticEvent) {
	    var action;

	    if (rule.actions) {
	      for (var i = 0; i < rule.actions.length; i++) {
	        action = rule.actions[i];
	        try {
	          executeDelegateModule(action, syntheticEvent, [syntheticEvent]);
	        } catch (e) {
	          logActionError(action, rule, e);
	          return;
	        }
	      }
	    }

	    logRuleCompleted(rule);
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createTriggerRule = function (
	  ruleComponentSequencingEnabled,
	  executeRule,
	  addRuleToQueue,
	  notifyMonitors
	) {
	  return function (normalizedSyntheticEvent, rule) {
	    notifyMonitors('ruleTriggered', {
	      rule: rule
	    });

	    if (ruleComponentSequencingEnabled) {
	      addRuleToQueue(rule, normalizedSyntheticEvent);
	    } else {
	      executeRule(rule, normalizedSyntheticEvent);
	    }
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var getRuleComponentErrorMessage = function (ruleComponentName, ruleName, error) {
	  return (
	    'Failed to execute "' +
	    ruleComponentName +
	    '" for "' +
	    ruleName +
	    '" rule. ' +
	    error.message +
	    (error.stack ? '\n' + error.stack : '')
	  );
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var isConditionMet = function (condition, result) {
	  return (result && !condition.negate) || (!result && condition.negate);
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var triggerCallQueue = [];
	var eventModulesInitialized = false;

	var guardUntilAllInitialized = function (callback) {
	  if (!eventModulesInitialized) {
	    triggerCallQueue.push(callback);
	  } else {
	    callback();
	  }
	};

	var initRules = function (buildRuleExecutionOrder, rules, initEventModule) {
	  buildRuleExecutionOrder(rules).forEach(function (ruleEventPair) {
	    initEventModule(guardUntilAllInitialized, ruleEventPair);
	  });

	  eventModulesInitialized = true;
	  triggerCallQueue.forEach(function (triggerCall) {
	    triggerCall();
	  });

	  triggerCallQueue = [];
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var normalizeRuleComponentError = function (e) {
	  if (!e) {
	    e = new Error(
	      'The extension triggered an error, but no error information was provided.'
	    );
	  }

	  if (!(e instanceof Error)) {
	    var stringifiedError =
	      typeof e === 'object' ? JSON.stringify(e) : String(e);
	    e = new Error(stringifiedError);
	  }

	  return e;
	};

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */

	var isobject = function isObject(val) {
	  return val != null && typeof val === 'object' && Array.isArray(val) === false;
	};

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */



	function isObjectObject(o) {
	  return isobject(o) === true
	    && Object.prototype.toString.call(o) === '[object Object]';
	}

	var isPlainObject = function isPlainObject(o) {
	  var ctor,prot;

	  if (isObjectObject(o) === false) return false;

	  // If has modified constructor
	  ctor = o.constructor;
	  if (typeof ctor !== 'function') return false;

	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObjectObject(prot) === false) return false;

	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }

	  // Most likely a plain Object
	  return true;
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	/**
	 * Normalizes a synthetic event so that it exists and has at least meta.
	 * @param {Object} syntheticEventMeta
	 * @param {Object} [syntheticEvent]
	 * @returns {Object}
	 */
	var normalizeSyntheticEvent = function (syntheticEventMeta, syntheticEvent) {
	  syntheticEvent = syntheticEvent || {};

	  // This ensures that as the user hands us a synthetic event for multiple rules,
	  // we aren't overwriting a new meta into the same object reference.
	  if (isPlainObject(syntheticEvent)) {
	    syntheticEvent = reactorObjectAssign({}, syntheticEvent, syntheticEventMeta);
	  } else {
	    // When syntheticEvent is not an object, there's nothing we can guarantee
	    // about the ability to "copy". Leave it alone.
	    reactorObjectAssign(syntheticEvent, syntheticEventMeta);
	  }

	  // Remove after some arbitrary time period when we think users have had sufficient chance
	  // to move away from event.type
	  if (!syntheticEvent.hasOwnProperty('type')) {
	    Object.defineProperty(syntheticEvent, 'type', {
	      get: function () {
	        logger.deprecation(
	          'Accessing event.type in Adobe Launch has been deprecated and will be ' +
	            'removed soon. Please use event.$type instead.'
	        );
	        return syntheticEvent.$type;
	      }
	    });
	  }

	  return syntheticEvent;
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	/**
	 * Creates a function that, when called with an extension name and module name, will return the
	 * exports of the respective shared module.
	 *
	 * @param {Object} extensions
	 * @param {Object} moduleProvider
	 * @returns {Function}
	 */
	var createGetSharedModuleExports = function (extensions, moduleProvider) {
	  return function (extensionName, moduleName) {
	    var extension = extensions[extensionName];

	    if (extension) {
	      var modules = extension.modules;
	      if (modules) {
	        var referencePaths = Object.keys(modules);
	        for (var i = 0; i < referencePaths.length; i++) {
	          var referencePath = referencePaths[i];
	          var module = modules[referencePath];
	          if (module.shared && module.name === moduleName) {
	            return moduleProvider.getModuleExports(referencePath);
	          }
	        }
	      }
	    }
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	/**
	 * Creates a function that, when called, will return a configuration object with data element
	 * tokens replaced.
	 *
	 * @param {Object} settings
	 * @returns {Function}
	 */
	var createGetExtensionSettings = function (replaceTokens, settings) {
	  return function () {
	    return settings ? replaceTokens(settings) : {};
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	/**
	 * Creates a function that, when called, will return the full hosted lib file URL.
	 *
	 * @param {string} hostedLibFilesBaseUrl
	 * @returns {Function}
	 */

	var createGetHostedLibFileUrl = function (
	  decorateWithDynamicHost,
	  hostedLibFilesBaseUrl,
	  minified
	) {
	  return function (file) {
	    if (minified) {
	      var fileParts = file.split('.');
	      fileParts.splice(fileParts.length - 1 || 1, 0, 'min');
	      file = fileParts.join('.');
	    }

	    return decorateWithDynamicHost(hostedLibFilesBaseUrl) + file;
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	var JS_EXTENSION = '.js';

	/**
	 * @private
	 * Returns the directory of a path. A limited version of path.dirname in nodejs.
	 *
	 * To keep it simple, it makes the following assumptions:
	 * path has a least one slash
	 * path does not end with a slash
	 * path does not have empty segments (e.g., /src/lib//foo.bar)
	 *
	 * @param {string} path
	 * @returns {string}
	 */
	var dirname = function (path) {
	  return path.substr(0, path.lastIndexOf('/'));
	};

	/**
	 * Determines if a string ends with a certain string.
	 * @param {string} str The string to test.
	 * @param {string} suffix The suffix to look for at the end of str.
	 * @returns {boolean} Whether str ends in suffix.
	 */
	var endsWith = function (str, suffix) {
	  return str.indexOf(suffix, str.length - suffix.length) !== -1;
	};

	/**
	 * Given a starting path and a path relative to the starting path, returns the final path. A
	 * limited version of path.resolve in nodejs.
	 *
	 * To keep it simple, it makes the following assumptions:
	 * fromPath has at least one slash
	 * fromPath does not end with a slash.
	 * fromPath does not have empty segments (e.g., /src/lib//foo.bar)
	 * relativePath starts with ./ or ../
	 *
	 * @param {string} fromPath
	 * @param {string} relativePath
	 * @returns {string}
	 */
	var resolveRelativePath = function (fromPath, relativePath) {
	  // Handle the case where the relative path does not end in the .js extension. We auto-append it.
	  if (!endsWith(relativePath, JS_EXTENSION)) {
	    relativePath = relativePath + JS_EXTENSION;
	  }

	  var relativePathSegments = relativePath.split('/');
	  var resolvedPathSegments = dirname(fromPath).split('/');

	  relativePathSegments.forEach(function (relativePathSegment) {
	    if (!relativePathSegment || relativePathSegment === '.') {
	      return;
	    } else if (relativePathSegment === '..') {
	      if (resolvedPathSegments.length) {
	        resolvedPathSegments.pop();
	      }
	    } else {
	      resolvedPathSegments.push(relativePathSegment);
	    }
	  });

	  return resolvedPathSegments.join('/');
	};

	/*!
	 * JavaScript Cookie v2.2.1
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */

	var js_cookie = createCommonjsModule(function (module, exports) {
	(function (factory) {
		var registeredInModuleLoader;
		{
			module.exports = factory();
			registeredInModuleLoader = true;
		}
		if (!registeredInModuleLoader) {
			var OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = OldCookies;
				return api;
			};
		}
	}(function () {
		function extend () {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[ i ];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}

		function decode (s) {
			return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
		}

		function init (converter) {
			function api() {}

			function set (key, value, attributes) {
				if (typeof document === 'undefined') {
					return;
				}

				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					var result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				value = converter.write ?
					converter.write(value, key) :
					encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

				key = encodeURIComponent(String(key))
					.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
					.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';
				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}

					// Considers RFC 6265 section 5.2:
					// ...
					// 3.  If the remaining unparsed-attributes contains a %x3B (";")
					//     character:
					// Consume the characters of the unparsed-attributes up to,
					// not including, the first %x3B (";") character.
					// ...
					stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
				}

				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			function get (key, json) {
				if (typeof document === 'undefined') {
					return;
				}

				var jar = {};
				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all.
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var i = 0;

				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var cookie = parts.slice(1).join('=');

					if (!json && cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}

					try {
						var name = decode(parts[0]);
						cookie = (converter.read || converter)(cookie, name) ||
							decode(cookie);

						if (json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}

						jar[name] = cookie;

						if (key === name) {
							break;
						}
					} catch (e) {}
				}

				return key ? jar[key] : jar;
			}

			api.set = set;
			api.get = function (key) {
				return get(key, false /* read as raw */);
			};
			api.getJSON = function (key) {
				return get(key, true /* read as json */);
			};
			api.remove = function (key, attributes) {
				set(key, '', extend(attributes, {
					expires: -1
				}));
			};

			api.defaults = {};

			api.withConverter = init;

			return api;
		}

		return init(function () {});
	}));
	});

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/



	// js-cookie has other methods that we haven't exposed here. By limiting the exposed API,
	// we have a little more flexibility to change the underlying implementation later. If clear
	// use cases come up for needing the other methods js-cookie exposes, we can re-evaluate whether
	// we want to expose them here.
	var reactorCookie = {
	  get: js_cookie.get,
	  set: js_cookie.set,
	  remove: js_cookie.remove
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/



	var getPromise = function(url, script) {
	  return new reactorPromise(function(resolve, reject) {
	    script.onload = function() {
	      resolve(script);
	    };

	    script.onerror = function() {
	      reject(new Error('Failed to load script ' + url));
	    };
	  });
	};

	var reactorLoadScript = function(url) {
	  var script = document.createElement('script');
	  script.src = url;
	  script.async = true;

	  var promise = getPromise(url, script);

	  document.getElementsByTagName('head')[0].appendChild(script);
	  return promise;
	};

	// Copyright Joyent, Inc. and other Node contributors.

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	var decode = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};

	// Copyright Joyent, Inc. and other Node contributors.

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	var encode = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};

	var querystring = createCommonjsModule(function (module, exports) {

	exports.decode = exports.parse = decode;
	exports.encode = exports.stringify = encode;
	});

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/



	// We proxy the underlying querystring module so we can limit the API we expose.
	// This allows us to more easily make changes to the underlying implementation later without
	// having to worry about breaking extensions. If extensions demand additional functionality, we
	// can make adjustments as needed.
	var reactorQueryString = {
	  parse: function(string) {
	    //
	    if (typeof string === 'string') {
	      // Remove leading ?, #, & for some leniency so you can pass in location.search or
	      // location.hash directly.
	      string = string.trim().replace(/^[?#&]/, '');
	    }
	    return querystring.parse(string);
	  },
	  stringify: function(object) {
	    return querystring.stringify(object);
	  }
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var CORE_MODULE_PREFIX = '@adobe/reactor-';

	var modules = {
	  cookie: reactorCookie,
	  document: reactorDocument,
	  'load-script': reactorLoadScript,
	  'object-assign': reactorObjectAssign,
	  promise: reactorPromise,
	  'query-string': reactorQueryString,
	  window: reactorWindow
	};

	/**
	 * Creates a function which can be passed as a "require" function to extension modules.
	 *
	 * @param {Function} getModuleExportsByRelativePath
	 * @returns {Function}
	 */
	var createPublicRequire = function (getModuleExportsByRelativePath) {
	  return function (key) {
	    if (key.indexOf(CORE_MODULE_PREFIX) === 0) {
	      var keyWithoutScope = key.substr(CORE_MODULE_PREFIX.length);
	      var module = modules[keyWithoutScope];

	      if (module) {
	        return module;
	      }
	    }

	    if (key.indexOf('./') === 0 || key.indexOf('../') === 0) {
	      return getModuleExportsByRelativePath(key);
	    }

	    throw new Error('Cannot resolve module "' + key + '".');
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var hydrateModuleProvider = function (
	  container,
	  moduleProvider,
	  debugController,
	  replaceTokens,
	  getDataElementValue,
	  settingsFileTransformer,
	  decorateWithDynamicHost
	) {
	  var extensions = container.extensions;
	  var buildInfo = container.buildInfo;
	  var environment = container.environment;
	  var propertySettings = container.property.settings;

	  if (extensions) {
	    var getSharedModuleExports = createGetSharedModuleExports(
	      extensions,
	      moduleProvider
	    );

	    Object.keys(extensions).forEach(function (extensionName) {
	      var extension = extensions[extensionName];
	      var extensionSettings = extension.settings;
	      if (Array.isArray(extension.filePaths)) {
	        extensionSettings = settingsFileTransformer(
	          extensionSettings,
	          extension.filePaths
	        );
	      }
	      var getExtensionSettings = createGetExtensionSettings(
	        replaceTokens,
	        extensionSettings
	      );

	      if (extension.modules) {
	        var prefixedLogger = logger.createPrefixedLogger(extension.displayName);
	        var getHostedLibFileUrl = createGetHostedLibFileUrl(
	          decorateWithDynamicHost,
	          extension.hostedLibFilesBaseUrl,
	          buildInfo.minified
	        );
	        var turbine = {
	          buildInfo: buildInfo,
	          environment: environment,
	          property: {
	            name: container.property.name,
	            id: container.property.id
	          },
	          getDataElementValue: getDataElementValue,
	          getExtensionSettings: getExtensionSettings,
	          getHostedLibFileUrl: getHostedLibFileUrl,
	          getSharedModule: getSharedModuleExports,
	          logger: prefixedLogger,
	          propertySettings: propertySettings,
	          replaceTokens: replaceTokens,
	          onDebugChanged: debugController.onDebugChanged,
	          get debugEnabled() {
	            return debugController.getDebugEnabled();
	          }
	        };

	        Object.keys(extension.modules).forEach(function (referencePath) {
	          var module = extension.modules[referencePath];
	          var getModuleExportsByRelativePath = function (relativePath) {
	            var resolvedReferencePath = resolveRelativePath(
	              referencePath,
	              relativePath
	            );
	            return moduleProvider.getModuleExports(resolvedReferencePath);
	          };
	          var publicRequire = createPublicRequire(
	            getModuleExportsByRelativePath
	          );

	          moduleProvider.registerModule(
	            referencePath,
	            module,
	            extensionName,
	            publicRequire,
	            turbine
	          );
	        });
	      }
	    });

	    // We want to extract the module exports immediately to allow the modules
	    // to run some logic immediately.
	    // We need to do the extraction here in order for the moduleProvider to
	    // have all the modules previously registered. (eg. when moduleA needs moduleB, both modules
	    // must exist inside moduleProvider).
	    moduleProvider.hydrateCache();
	  }
	  return moduleProvider;
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var hydrateSatelliteObject = function (
	  _satellite,
	  container,
	  setDebugEnabled,
	  getVar,
	  setCustomVar
	) {
	  var customScriptPrefixedLogger = logger.createPrefixedLogger('Custom Script');

	  // Will get replaced by the directCall event delegate from the Core extension. Exists here in
	  // case there are no direct call rules (and therefore the directCall event delegate won't get
	  // included) and our customers are still calling the method. In this case, we don't want an error
	  // to be thrown. This method existed before Reactor.
	  _satellite.track = function (identifier) {
	    logger.log(
	      '"' + identifier + '" does not match any direct call identifiers.'
	    );
	  };

	  // Will get replaced by the Marketing Cloud ID extension if installed. Exists here in case
	  // the extension is not installed and our customers are still calling the method. In this case,
	  // we don't want an error to be thrown. This method existed before Reactor.
	  _satellite.getVisitorId = function () {
	    return null;
	  };

	  // container.property also has property settings, but it shouldn't concern the user.
	  // By limiting our API exposure to necessities, we provide more flexibility in the future.
	  _satellite.property = {
	    name: container.property.name,
	    id: container.property.id
	  };

	  _satellite.company = container.company;

	  _satellite.buildInfo = container.buildInfo;

	  _satellite.environment = container.environment;

	  _satellite.logger = customScriptPrefixedLogger;

	  /**
	   * Log a message. We keep this due to legacy baggage.
	   * @param {string} message The message to log.
	   * @param {number} [level] A number that represents the level of logging.
	   * 3=info, 4=warn, 5=error, anything else=log
	   */
	  _satellite.notify = function (message, level) {
	    logger.deprecation(
	      '_satellite.notify is deprecated. Please use the `_satellite.logger` API.'
	    );

	    switch (level) {
	      case 3:
	        customScriptPrefixedLogger.info(message);
	        break;
	      case 4:
	        customScriptPrefixedLogger.warn(message);
	        break;
	      case 5:
	        customScriptPrefixedLogger.error(message);
	        break;
	      default:
	        customScriptPrefixedLogger.log(message);
	    }
	  };

	  _satellite.getVar = getVar;
	  _satellite.setVar = setCustomVar;

	  /**
	   * Writes a cookie.
	   * @param {string} name The name of the cookie to save.
	   * @param {string} value The value of the cookie to save.
	   * @param {number} [days] The number of days to store the cookie. If not specified, the cookie
	   * will be stored for the session only.
	   */
	  _satellite.setCookie = function (name, value, days) {
	    var optionsStr = '';
	    var options = {};

	    if (days) {
	      optionsStr = ', { expires: ' + days + ' }';
	      options.expires = days;
	    }

	    var msg =
	      '_satellite.setCookie is deprecated. Please use ' +
	      '_satellite.cookie.set("' +
	      name +
	      '", "' +
	      value +
	      '"' +
	      optionsStr +
	      ').';

	    logger.deprecation(msg);
	    reactorCookie.set(name, value, options);
	  };

	  /**
	   * Reads a cookie value.
	   * @param {string} name The name of the cookie to read.
	   * @returns {string}
	   */
	  _satellite.readCookie = function (name) {
	    logger.deprecation(
	      '_satellite.readCookie is deprecated. ' +
	        'Please use _satellite.cookie.get("' +
	        name +
	        '").'
	    );
	    return reactorCookie.get(name);
	  };

	  /**
	   * Removes a cookie value.
	   * @param name
	   */
	  _satellite.removeCookie = function (name) {
	    logger.deprecation(
	      '_satellite.removeCookie is deprecated. ' +
	        'Please use _satellite.cookie.remove("' +
	        name +
	        '").'
	    );
	    reactorCookie.remove(name);
	  };

	  _satellite.cookie = reactorCookie;

	  // Will get replaced by the pageBottom event delegate from the Core extension. Exists here in
	  // case the customers are not using core (and therefore the pageBottom event delegate won't get
	  // included) and they are still calling the method. In this case, we don't want an error
	  // to be thrown. This method existed before Reactor.
	  _satellite.pageBottom = function () {};

	  _satellite.setDebug = setDebugEnabled;

	  var warningLogged = false;

	  Object.defineProperty(_satellite, '_container', {
	    get: function () {
	      if (!warningLogged) {
	        logger.warn(
	          '_satellite._container may change at any time and should only ' +
	            'be used for debugging.'
	        );
	        warningLogged = true;
	      }

	      return container;
	    }
	  });
	};

	/***************************************************************************************
	 * (c) 2021 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	function isArrayReference(str) {
	  return (
	    typeof str === 'string' &&
	    str.indexOf('[') !== -1 &&
	    str.indexOf(']') !== -1
	  );
	}
	function sanitizeArrayKey(pathStrSegment) {
	  return pathStrSegment.substr(
	    0,
	    // the name goes up to the start of the array bracket: 'someArrayName[]'
	    pathStrSegment.indexOf('[')
	  );
	}

	/**
	 * Recursive function to loop through settings and look for the setting to transform,
	 * which is the final entry within the pathSegments array. Alters settings in-place.
	 * @param {Array} pathSegments
	 * @param {Object} settings
	 * @param {Function} decorateWithDynamicHost
	 */
	function traverseIntoSettings(pathSegments, settings, decorateWithDynamicHost) {
	  // nothing to do
	  if (!pathSegments.length || !isPlainObject(settings)) {
	    return;
	  }

	  var currentKey = pathSegments[0];

	  // base case
	  if (pathSegments.length === 1) {
	    if (
	      settings.hasOwnProperty(currentKey) &&
	      typeof settings[currentKey] === 'string'
	    ) {
	      settings[currentKey] = decorateWithDynamicHost(settings[currentKey]);
	    }
	    return;
	  }

	  // still more work to do
	  var remainingPathSegments = pathSegments.slice(1);
	  if (isArrayReference(currentKey)) {
	    // 'someArrayReference[]' --> 'someArrayReference'
	    currentKey = sanitizeArrayKey(currentKey);
	    var settingsValue = settings[currentKey];
	    if (Array.isArray(settingsValue)) {
	      settingsValue.forEach(function (arrayEntryObject) {
	        return traverseIntoSettings(
	          remainingPathSegments,
	          arrayEntryObject,
	          decorateWithDynamicHost
	        );
	      });
	    }
	  } else {
	    // object case
	    return traverseIntoSettings(
	      remainingPathSegments,
	      settings[currentKey],
	      decorateWithDynamicHost
	    );
	  }
	}

	/**
	 * Returns a function that when called will attempt to traverse the passed in
	 * settings object to each file path and transform a relative URL to an absolute
	 * URL.
	 *
	 * @param isDynamicEnforced
	 * @param decorateWithDynamicHost
	 * @returns {(function(*=, *=, *=): (*))|*}
	 */
	var createSettingsFileTransformer = function (isDynamicEnforced, decorateWithDynamicHost) {
	  return function (settings, filePaths, moduleReferencePath) {
	    if (
	      !isDynamicEnforced ||
	      !isPlainObject(settings) ||
	      !Object.keys(settings).length ||
	      !Array.isArray(filePaths) ||
	      !filePaths.length
	    ) {
	      return settings;
	    }

	    // pull out the file paths by the module's reference path and loop over each urlPath
	    filePaths.forEach(function (filePathString) {
	      // The custom code action provides the ability to have the source code in the 'source'
	      // variable or to have an external file. Therefore, this module has 2 behaviors.
	      // It also does not provide a value of false for isExternal just as all other extensions
	      // that use fileTransform do not provide an isExternal variable check. Therefore, we need
	      // to treat Adobe's custom code action special, and don't augment the 'source' variable
	      // if isExternal is not also present.
	      var isAdobeCustomCodeAction = Boolean(
	        moduleReferencePath != null &&
	          /^core\/.*actions.*\/customCode\.js$/.test(moduleReferencePath)
	      );
	      if (
	        isAdobeCustomCodeAction &&
	        filePathString === 'source' &&
	        !settings.isExternal
	      ) {
	        return;
	      }

	      // modify the object in place
	      traverseIntoSettings(
	        filePathString.split('.'),
	        settings,
	        decorateWithDynamicHost
	      );
	    });

	    return settings;
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	// DYNAMIC URL













































	var _satellite = window._satellite;

	if (_satellite && !window.__satelliteLoaded) {
	  // If a consumer loads the library multiple times, make sure only the first time is effective.
	  window.__satelliteLoaded = true;

	  var container = _satellite.container;

	  // Remove container in public scope ASAP so it can't be manipulated by extension or user code.
	  delete _satellite.container;

	  /*
	    get rid of container.buildInfo decoration once deprecation is finished of
	    buildInfo.environment string
	   */
	  var buildInfo = reactorObjectAssign({}, container.buildInfo);
	  Object.defineProperty(buildInfo, 'environment', {
	    get: function () {
	      logger.deprecation(
	        'container.buildInfo.environment is deprecated.' +
	          'Please use `container.environment.stage` instead'
	      );
	      return container.environment.stage;
	    }
	  });
	  container.buildInfo = buildInfo;

	  var localStorage = getNamespacedStorage('localStorage');
	  var debugController = createDebugController(localStorage, logger);

	  var currentScriptSource = '';
	  if (reactorDocument.currentScript && reactorDocument.currentScript.getAttribute('src')) {
	    currentScriptSource = reactorDocument.currentScript.getAttribute('src');
	  }
	  var dynamicHostResolver;
	  try {
	    dynamicHostResolver = createDynamicHostResolver(
	      currentScriptSource,
	      Boolean(container.company.dynamicCdnEnabled),
	      container.company.cdnAllowList,
	      debugController
	    );
	  } catch (e) {
	    logger.warn('Please review the following error:');
	    throw e; // We don't want to continue allowing Turbine to start up if we detect an error in here
	  }

	  var settingsFileTransformer = createSettingsFileTransformer(
	    dynamicHostResolver.isDynamicEnforced,
	    dynamicHostResolver.decorateWithDynamicHost
	  );

	  var moduleProvider = createModuleProvider();

	  var replaceTokens;

	  var undefinedVarsReturnEmpty =
	    container.property.settings.undefinedVarsReturnEmpty;
	  var ruleComponentSequencingEnabled =
	    container.property.settings.ruleComponentSequencingEnabled;

	  var dataElements = container.dataElements || {};

	  var getDataElementDefinition = function (name) {
	    return dataElements[name];
	  };

	  // We support data elements referencing other data elements. In order to be able to retrieve a
	  // data element value, we need to be able to replace data element tokens inside its settings
	  // object (which is what replaceTokens is for). In order to be able to replace data element
	  // tokens inside a settings object, we need to be able to retrieve data element
	  // values (which is what getDataElementValue is for). This proxy replaceTokens function solves the
	  // chicken-or-the-egg problem by allowing us to provide a replaceTokens function to
	  // getDataElementValue that will stand in place of the real replaceTokens function until it
	  // can be created. This also means that createDataElementValue should not call the proxy
	  // replaceTokens function until after the real replaceTokens has been created.
	  var proxyReplaceTokens = function () {
	    return replaceTokens.apply(null, arguments);
	  };

	  var getDataElementValue = createGetDataElementValue(
	    moduleProvider,
	    getDataElementDefinition,
	    proxyReplaceTokens,
	    undefinedVarsReturnEmpty,
	    settingsFileTransformer
	  );

	  var customVars = {};
	  var setCustomVar = createSetCustomVar(customVars);

	  var isVar = createIsVar(customVars, getDataElementDefinition);

	  var getVar = createGetVar(
	    customVars,
	    getDataElementDefinition,
	    getDataElementValue
	  );

	  replaceTokens = createReplaceTokens(isVar, getVar, undefinedVarsReturnEmpty);

	  // Important to hydrate satellite object before we hydrate the module provider or init rules.
	  // When we hydrate module provider, we also execute extension code which may be
	  // accessing _satellite.
	  hydrateSatelliteObject(
	    _satellite,
	    container,
	    debugController.setDebugEnabled,
	    getVar,
	    setCustomVar
	  );

	  hydrateModuleProvider(
	    container,
	    moduleProvider,
	    debugController,
	    replaceTokens,
	    getDataElementValue,
	    settingsFileTransformer,
	    dynamicHostResolver.decorateWithDynamicHost
	  );

	  var notifyMonitors = createNotifyMonitors(_satellite);
	  var executeDelegateModule = createExecuteDelegateModule(
	    moduleProvider,
	    replaceTokens,
	    settingsFileTransformer
	  );

	  var getModuleDisplayNameByRuleComponent =
	    createGetModuleDisplayNameByRuleComponent(moduleProvider);
	  var logConditionNotMet = createLogConditionNotMet(
	    getModuleDisplayNameByRuleComponent,
	    logger,
	    notifyMonitors
	  );
	  var logConditionError = createLogConditionError(
	    getRuleComponentErrorMessage,
	    getModuleDisplayNameByRuleComponent,
	    logger,
	    notifyMonitors
	  );
	  var logActionError = createLogActionError(
	    getRuleComponentErrorMessage,
	    getModuleDisplayNameByRuleComponent,
	    logger,
	    notifyMonitors
	  );
	  var logRuleCompleted = createLogRuleCompleted(logger, notifyMonitors);

	  var evaluateConditions = createEvaluateConditions(
	    executeDelegateModule,
	    isConditionMet,
	    logConditionNotMet,
	    logConditionError
	  );
	  var runActions = createRunActions(
	    executeDelegateModule,
	    logActionError,
	    logRuleCompleted
	  );
	  var executeRule = createExecuteRule(evaluateConditions, runActions);

	  var addConditionToQueue = createAddConditionToQueue(
	    executeDelegateModule,
	    normalizeRuleComponentError,
	    isConditionMet,
	    logConditionError,
	    logConditionNotMet
	  );
	  var addActionToQueue = createAddActionToQueue(
	    executeDelegateModule,
	    normalizeRuleComponentError,
	    logActionError
	  );
	  var addRuleToQueue = createAddRuleToQueue(
	    addConditionToQueue,
	    addActionToQueue,
	    logRuleCompleted
	  );

	  var triggerRule = createTriggerRule(
	    ruleComponentSequencingEnabled,
	    executeRule,
	    addRuleToQueue,
	    notifyMonitors
	  );

	  var getSyntheticEventMeta = createGetSyntheticEventMeta(moduleProvider);

	  var initEventModule = createInitEventModule(
	    triggerRule,
	    executeDelegateModule,
	    normalizeSyntheticEvent,
	    getRuleComponentErrorMessage,
	    getSyntheticEventMeta,
	    logger
	  );

	  initRules(buildRuleExecutionOrder, container.rules || [], initEventModule);
	}

	// Rollup's iife option always sets a global with whatever is exported, so we'll set the
	// _satellite global with the same object it already is (we've only modified it).
	var src = _satellite;

	return src;

})();


