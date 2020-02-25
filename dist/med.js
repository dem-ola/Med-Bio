/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(8);
} else {}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(10)();
}


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(13)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(14);
} else {}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(5);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var h=__webpack_require__(9),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113;n&&Symbol.for("react.suspense_list");
var z=n?Symbol.for("react.memo"):60115,aa=n?Symbol.for("react.lazy"):60116;n&&Symbol.for("react.fundamental");n&&Symbol.for("react.responder");n&&Symbol.for("react.scope");var A="function"===typeof Symbol&&Symbol.iterator;
function B(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,c){this.props=a;this.context=b;this.refs=D;this.updater=c||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(B(85));this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,c){this.props=a;this.context=b;this.refs=D;this.updater=c||C}var H=G.prototype=new F;
H.constructor=G;h(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,l=null;if(null!=b)for(e in void 0!==b.ref&&(l=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var k=Array(f),m=0;m<f;m++)k[m]=arguments[m+2];d.children=k}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:l,props:d,_owner:J.current}}
function ba(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,c,e){if(P.length){var d=P.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var l=0;l<a.length;l++){d=a[l];var f=b+T(d,l);g+=S(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=A&&a[A]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),l=
0;!(d=a.next()).done;)d=d.value,f=b+T(d,l++),g+=S(d,f,c,e);else if("object"===d)throw c=""+a,Error(B(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function U(a,b,c){return null==a?0:S(a,"",b,c)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ca(a,b){a.func.call(a.context,b,a.count++)}
function da(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,e,c,function(a){return a}):null!=a&&(N(a)&&(a=ba(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+c)),e.push(a))}function V(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(O,"$&/")+"/");b=Q(b,g,e,d);U(a,da,b);R(b)}function W(){var a=I.current;if(null===a)throw Error(B(321));return a}
var X={Children:{map:function(a,b,c){if(null==a)return a;var e=[];V(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=Q(null,null,b,c);U(a,ca,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){if(!N(a))throw Error(B(143));return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:x,render:a}},lazy:function(a){return{$$typeof:aa,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
b,c){return W().useImperativeHandle(a,b,c)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,c){return W().useReducer(a,b,c)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,Profiler:u,StrictMode:t,Suspense:y,createElement:M,cloneElement:function(a,b,c){if(null===a||void 0===a)throw Error(B(267,a));var e=h({},a.props),d=a.key,g=a.ref,l=a._owner;
if(null!=b){void 0!==b.ref&&(g=b.ref,l=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(k in b)K.call(b,k)&&!L.hasOwnProperty(k)&&(e[k]=void 0===b[k]&&void 0!==f?f[k]:b[k])}var k=arguments.length-2;if(1===k)e.children=c;else if(1<k){f=Array(k);for(var m=0;m<k;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,key:d,ref:g,props:e,_owner:l}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.12.0",
__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:h}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
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

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
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


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(11);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function z(a){return y(a)===m}
exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./js/setup.jsx


var params = {
  corpName: 'Med Bio Corp.',
  backendhost: 'http://localhost',
  backendport: 3000,
  frontendport: 8080 // clearly not relevant in production

};
var endpoints = {
  // for backend -> expressjs
  // used in front-end jsx scripts to call backend
  // note: duplicated in server.js for expressjs purposes
  // keep in sync
  login: 'login',
  logout: 'logout',
  view: 'view',
  genders: 'genders',
  patients: 'patients',
  users: 'users',
  prescribers: 'prescribers'
};
var routes = {
  // subject, route -> for components;
  'login': "html/login.html",
  'logout': "html/logout.html",
  'view': "html/view.html",
  'users': "html/users.html",
  'users-add': "html/users_add.html",
  'patients-add': "html/patients_add.html",
  'patients': "html/patients.html",
  'prescribers': "html/prescribers.html"
};
var navBar = {
  // subject, route -> for components;
  // note shown in order listed below
  'home': routes['login'],
  'view': routes['view'],
  'users': routes['users'],
  'patients': routes['patients'],
  'prescribers': routes['prescribers'],
  'login': routes['login'],
  'logout': routes['logout']
};
// CONCATENATED MODULE: ./js/lib-funcs.js


var nowDate = new Date();
var curYear = nowDate.getFullYear();
var firstYear = 1900;
var createRange = function createRange(from, to) {
  var arr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  arr.push(from);
  from < to ? createRange(++from, to, arr) : null;
  return arr;
};
var lib_funcs_vars = {
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  dates: createRange(1, 31),
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Devember'],
  years: createRange(firstYear, curYear)
};

function editClassName(elem, cname, action) {
  var cur = elem.className;
  var chg;

  if (action == 'add') {
    chg = cur + ' ' + cname;
  } else {
    //'remove'
    chg = cur.replace(cname, '');
  }

  elem.setAttribute('class', chg);
}

function textToDate(dateText) {
  var reg = dateText.match(/(\d+)-(.*?)-(\d+)/);
  return new Date(reg[3], months.indexOf(reg[2]), reg[1]);
}

function dateToText(date) {
  return date.getDate() + '-' + months[date.getMonth()] + '-' + date.getFullYear();
}

function daysSince(dateText) {
  var fin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (dateText == null || dateText == undefined) return '0d';
  var now = new Date();

  if (fin != null) {
    now = textToDate(fin);
  }

  var then = textToDate(dateText);
  return parseInt((now - then) / (1000 * 60 * 60 * 24)) + 'd';
} // add capitalize method to String prototype


String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

Date.prototype.toCustomString = function () {
  var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'normal';
  var hrs = this.getHours();
  var mins = this.getMinutes();
  var day = lib_funcs_vars.days[this.getDay()] + ',';

  if (format == 'short') {
    // remove time
    hrs = mins = ''; // -> Saturday, 8 November 1946 :
    // need to strip ' :' <- with space before colon!
  }

  if (format == 'very short') {
    hrs = mins = '';
    day = '';
  }

  return [day,, this.getDate(), lib_funcs_vars.months[this.getMonth()], this.getFullYear(), [hrs, mins].map(function (x) {
    return x != '' && x < 10 ? '0' + x : x;
  }).join(':')].join(' ').replace(' :', '');
};

Date.prototype.toDbString = function () {
  var mth = this.getMonth();
  mth = mth < 10 ? '0' + mth : mth;
  return [this.getFullYear(), mth, this.getDate()].join('-');
};

var concatClassName = function concatClassName(standard) {
  var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return !custom ? standard : standard + ' ' + custom;
};
// CONCATENATED MODULE: ./js/lib-doms.jsx
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props) {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _getPrototypeOf(Page).call(this, props));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: this.props.id
      }, this.props.header, this.props.content, this.props.footer);
    }
  }]);

  return Page;
}(React.Component);
var lib_doms_Header =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header(props) {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "header",
        className: "section"
      }, React.createElement("div", {
        id: "head-nav"
      }, this.props.nav), React.createElement("div", {
        id: "head-corp"
      }, params.corpName), React.createElement("hr", {
        className: "divider"
      }), React.createElement("div", {
        id: "head-name"
      }, this.props.name), React.createElement("span", {
        className: "head-clock"
      }, this.props.time), React.createElement("div", {
        id: "head-content"
      }, this.props.content));
    }
  }]);

  return Header;
}(React.Component);
var CustomTable =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(CustomTable, _React$Component3);

  function CustomTable(props) {
    var _this;

    _classCallCheck(this, CustomTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomTable).call(this, props));
    _this.getList = _this.getList.bind(_assertThisInitialized(_this));
    _this.state = {
      headers: [],
      rows: [],
      error: ''
    };
    return _this;
  }

  _createClass(CustomTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getList();
    }
  }, {
    key: "getList",
    value: function getList() {
      var _this2 = this;

      var url = this.props.source;
      var heads = this.props.headers;

      var _records;

      fetch(url, {
        method: 'GET'
      }).then(function (resp) {
        return resp.json();
      }).then(function (records) {
        if (_this2.props.transforms) {
          records.data.map(function (p) {
            var title = p['title'];

            if (title == 'null') {
              p['title'] = '';
            }

            var dob = new Date(p['date_of_birth']);
            dob = dob.toCustomString('very short');
            p['date_of_birth'] = dob;
          });
        }

        _records = records;
        return React.createElement(BuildElems, {
          elem: "row",
          isHeads: false,
          heads: heads,
          data: records.data
        });
      }).then(function (rows) {
        _this2.setState({
          rows: rows
        });
      }).then(function () {
        return React.createElement(BuildElems, {
          elem: "row",
          isHeads: true,
          heads: heads,
          data: _records.data
        });
      }).then(function (headers) {
        _this2.setState({
          headers: headers
        });
      })["catch"](function (err) {
        _this2.setState({
          error: 'Sorry, we could not fetch the list'
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("div", {
        id: "table"
      }, React.createElement("div", {
        id: "table-head-section"
      }, this.state.headers), React.createElement("div", {
        id: "table-row-section"
      }, this.state.rows)), React.createElement("div", {
        className: "feedback"
      }, " ", this.state.error));
    }
  }]);

  return CustomTable;
}(React.Component);
var Content =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Content, _React$Component4);

  function Content(props) {
    _classCallCheck(this, Content);

    return _possibleConstructorReturn(this, _getPrototypeOf(Content).call(this, props));
  }

  _createClass(Content, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "content",
        className: "section"
      }, React.createElement("div", {
        id: "content-title"
      }, this.props.cTitle), React.createElement("div", {
        id: "content-main"
      }, this.props.content));
    }
  }]);

  return Content;
}(React.Component);
var Footer =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(Footer, _React$Component5);

  function Footer(props) {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).call(this, props));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "footer",
        className: "section"
      }, React.createElement("div", {
        className: "foot-content"
      }, this.props.content));
    }
  }]);

  return Footer;
}(React.Component);
var lib_doms_DateInput =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(DateInput, _React$Component6);

  function DateInput(props) {
    _classCallCheck(this, DateInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(DateInput).call(this, props));
  }

  _createClass(DateInput, [{
    key: "render",
    value: function render() {
      var cName = concatClassName('date-input', this.props.className);
      return React.createElement("div", {
        id: this.props.id,
        className: cName
      }, React.createElement("span", null, React.createElement(lib_doms_DropDown, {
        id: "select-date",
        items: lib_funcs_vars.dates,
        onChange: this.props.onChange
      })), React.createElement("span", null, React.createElement(lib_doms_DropDown, {
        id: "select-month",
        items: lib_funcs_vars.months,
        onChange: this.props.onChange
      })), React.createElement("span", null, React.createElement(lib_doms_DropDown, {
        id: "select-year",
        items: lib_funcs_vars.years,
        onChange: this.props.onChange
      })));
    }
  }]);

  return DateInput;
}(React.Component);
var Clock =
/*#__PURE__*/
function (_React$Component7) {
  _inherits(Clock, _React$Component7);

  function Clock(props) {
    var _this3;

    _classCallCheck(this, Clock);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Clock).call(this, props));
    _this3.state = {
      clocked: new Date().toCustomString()
    };
    return _this3;
  }

  _createClass(Clock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      setInterval(function () {
        this.setState({
          clocked: new Date().toCustomString()
        });
      }.bind(this), 1000); // need bind!
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "clock"
      }, this.state.clocked);
    }
  }]);

  return Clock;
}(React.Component);
var Row =
/*#__PURE__*/
function (_React$Component8) {
  _inherits(Row, _React$Component8);

  function Row(props) {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, _getPrototypeOf(Row).call(this, props));
  }

  _createClass(Row, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var r;

      if (this.props.isHeads) {
        r = this.props.heads.map(function (h) {
          var val = h[0].replace(/_/g, ' ');
          var cName = "row-item-head ".concat(h[1]);
          return React.createElement("span", {
            className: cName
          }, val);
        });
        return React.createElement("div", {
          className: "table-row table-row-head"
        }, r);
      } else {
        r = this.props.heads.map(function (h) {
          var val = _this4.props.data[h[0]];
          var cName = "row-item ".concat(h[1]);
          return React.createElement("span", {
            className: cName
          }, val);
        });
        return React.createElement("div", {
          className: "table-row"
        }, r);
      }
    }
  }]);

  return Row;
}(React.Component);
var BuildElems =
/*#__PURE__*/
function (_React$Component9) {
  _inherits(BuildElems, _React$Component9);

  function BuildElems(props) {
    _classCallCheck(this, BuildElems);

    return _possibleConstructorReturn(this, _getPrototypeOf(BuildElems).call(this, props));
  }

  _createClass(BuildElems, [{
    key: "render",
    value: function render() {
      var collection = [];

      switch (this.props.elem) {
        case 'btn':
          for (var _i = 0, _Object$entries = Object.entries(this.props.data); _i < _Object$entries.length; _i++) {
            var e = _Object$entries[_i];
            var label = e[0];
            var txt = e[1][0];
            var id = label + '-name-box';
            collection.push(React.createElement("div", {
              className: "form-item"
            }, React.createElement(lib_doms_Label, {
              id: "label-".concat(id),
              className: "horizontal-label",
              label: label
            }), React.createElement(Btn, {
              id: "btn-".concat(id),
              className: "btn btn-verticals",
              txt: txt,
              onClick: this.props.onClick
            })));
          }

          return React.createElement("div", null, collection);

        case 'input':
          for (var _i2 = 0, _Object$entries2 = Object.entries(this.props.data); _i2 < _Object$entries2.length; _i2++) {
            var _e = _Object$entries2[_i2];
            var _label = _e[0];
            var placeholder = _e[1];

            var _id = _label.replace(' ', '') + '-name-box';

            collection.push(React.createElement("div", {
              className: "form-item"
            }, React.createElement(lib_doms_Label, {
              id: "label-".concat(_id),
              className: "horizontal-label",
              label: _label
            }), React.createElement(InputBox, {
              id: _id,
              className: "input-box std-inbox",
              place: placeholder,
              onKeyUp: this.props.onKeyUp
            })));
          }

          return React.createElement("div", null, collection);

        case 'row':
          var i = 0;
          var isHeads = this.props.isHeads;
          var headers = this.props.heads;
          var data = this.props.data;
          var items = isHeads ? headers : data;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _e2 = _step.value;
              collection.push(React.createElement("div", {
                className: "form-item"
              }, React.createElement(Row, {
                key: i++,
                isHeads: isHeads,
                heads: headers,
                data: _e2
              }))); // since we've passed all the headers through first time
              // we don't need any more loops

              if (isHeads) break;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return React.createElement("div", null, collection);

        case 'navbar':
          for (var _i3 = 0, _Object$entries3 = Object.entries(this.props.data); _i3 < _Object$entries3.length; _i3++) {
            var _e3 = _Object$entries3[_i3];
            var link = "".concat(this.props.baseHttpUrl, "/").concat(_e3[1]);
            collection.push(React.createElement("span", {
              "class": "nav-item-box"
            }, React.createElement("a", {
              "class": "nav-item",
              href: link
            }, _e3[0].toUpperCase())));
          }

          ;
          return React.createElement("div", {
            id: "nav-bar"
          }, collection);
      }
    }
  }]);

  return BuildElems;
}(React.Component);
var InputBox = function InputBox(props) {
  return React.createElement("input", {
    type: "text",
    id: props.id,
    className: props.className,
    placeholder: props.place,
    disabled: props.disabled,
    defaultValue: props.value,
    onKeyUp: props.onKeyUp
  });
};
var NotesBox = function NotesBox(props) {
  return React.createElement("textarea", {
    type: "text",
    id: props.id,
    className: props.className,
    placeholder: props.placeholder,
    maxLength: props.maxlength,
    defaultValue: props.value
  });
};
var Btn = function Btn(props) {
  return React.createElement("button", {
    id: props.id,
    className: props.className,
    onClick: props.onClick,
    disabled: props.disabled
  }, props.txt);
};
var lib_doms_DropDown = function DropDown(props) {
  var i = 0;
  var items = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = props.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var item = _step2.value;
      items.push(React.createElement("option", {
        key: i++,
        className: "opt-item",
        value: item
      }, item));
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var cName = concatClassName('select-box', props.className);
  return React.createElement("select", {
    id: props.id,
    className: cName,
    onChange: props.onChange
  }, items);
};
var CheckBox = function CheckBox(props) {
  if (props.checked == true || props.checked == 'true') {
    return React.createElement("span", null, React.createElement("label", {
      className: props.classNameLabel
    }, "Done =>"), React.createElement("input", {
      className: props.className,
      type: "checkbox",
      checked: true,
      onChange: props.handle
    }));
  } else {
    return React.createElement("span", null, React.createElement("label", {
      className: props.classNameLabel
    }, "Done =>"), React.createElement("input", {
      className: props.className,
      type: "checkbox",
      checked: false,
      onChange: props.handle
    }));
  }
};
var lib_doms_Label = function Label(props) {
  var cName = concatClassName('form-label', props.className);
  return React.createElement("label", {
    className: cName,
    htmlFor: props.id
  }, props.label);
};
// CONCATENATED MODULE: ./js/patients-add.jsx


function patients_add_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { patients_add_typeof = function _typeof(obj) { return typeof obj; }; } else { patients_add_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return patients_add_typeof(obj); }

function patients_add_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function patients_add_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function patients_add_createClass(Constructor, protoProps, staticProps) { if (protoProps) patients_add_defineProperties(Constructor.prototype, protoProps); if (staticProps) patients_add_defineProperties(Constructor, staticProps); return Constructor; }

function patients_add_possibleConstructorReturn(self, call) { if (call && (patients_add_typeof(call) === "object" || typeof call === "function")) { return call; } return patients_add_assertThisInitialized(self); }

function patients_add_getPrototypeOf(o) { patients_add_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return patients_add_getPrototypeOf(o); }

function patients_add_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function patients_add_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) patients_add_setPrototypeOf(subClass, superClass); }

function patients_add_setPrototypeOf(o, p) { patients_add_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return patients_add_setPrototypeOf(o, p); }




var patients_add_DropDown = lib_doms_DropDown;
var patients_add_DateInput = lib_doms_DateInput;
var patients_add_Btn = Btn;
var patients_add_Label = lib_doms_Label;
var patients_add_BuildElems = BuildElems;
var baseUrl = "".concat(params.backendhost, ":").concat(params.backendport);
var fields = {
  'title': 'preferred title',
  'first name': 'first name',
  'last name': 'last name'
};

var patients_add_AddPatient =
/*#__PURE__*/
function (_React$Component) {
  patients_add_inherits(AddPatient, _React$Component);

  function AddPatient(props) {
    var _this;

    patients_add_classCallCheck(this, AddPatient);

    _this = patients_add_possibleConstructorReturn(this, patients_add_getPrototypeOf(AddPatient).call(this, props));
    _this.getGenders = _this.getGenders.bind(patients_add_assertThisInitialized(_this));
    _this.checkInputs = _this.checkInputs.bind(patients_add_assertThisInitialized(_this));
    _this.handleKeyUp = _this.handleKeyUp.bind(patients_add_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(patients_add_assertThisInitialized(_this));
    _this.submit = _this.submit.bind(patients_add_assertThisInitialized(_this));
    _this.state = {
      genders: [],
      title: null,
      gender: null,
      first_name: '',
      last_name: '',
      dobd: '01',
      dobm: '01',
      doby: firstYear,
      primary_prescriber: null,
      feedback: '',
      checks: ['first_name', 'last_name', 'gender']
    };
    return _this;
  }

  patients_add_createClass(AddPatient, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getGenders(); // here b/c if in render it'll cause an infinite loop
    }
  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(e) {
      var id = e.target.id.split('-')[0];
      var value = e.target.value;

      switch (id) {
        case 'title':
          this.setState({
            title: value
          });
          break;

        case 'firstname':
          this.setState({
            first_name: value
          });
          break;

        case 'lastname':
          this.setState({
            last_name: value
          });
          break;
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var id = e.target.id;
      var value = e.target.value;

      function ifInt(value) {
        if (Number.isInteger(value)) {
          value = value < 10 ? '0' + value : String(value);
        }

        return value;
      }

      switch (id) {
        case 'select-date':
          this.setState({
            dobd: ifInt(value)
          });
          break;

        case 'select-month':
          this.setState({
            dobm: ifInt(vars.months.indexOf(value))
          });
          break;

        case 'select-year':
          this.setState({
            doby: value
          });
          break;

        case 'gender':
          this.setState({
            gender: value
          });
          break;
      }
    }
  }, {
    key: "getGenders",
    value: function getGenders() {
      var _this2 = this;

      var url = "".concat(baseUrl, "/").concat(endpoints.genders);
      fetch(url, {
        method: 'GET'
      }).then(function (response) {
        if (response.status == 200) {
          return response.json();
        } else {
          _this2.setState({
            feedback: 'Server error getting gender names'
          });
        }
      }).then(function (responseJson) {
        var gend = ['SELECT'];

        for (var _i = 0, _Object$entries = Object.entries(responseJson.data); _i < _Object$entries.length; _i++) {
          var item = _Object$entries[_i];
          gend.push(item[1].name);
        }

        _this2.setState({
          genders: gend
        });
      });
    }
  }, {
    key: "checkInputs",
    value: function checkInputs() {
      // simple checks, could be more sophisticated
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.state.checks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var c = _step.value;

          var _c = c.replace('_', ' ').capitalize();

          var minChars = 2;

          if (this.state[c] == null || this.state[c] == undefined) {
            return "Select a value for ".concat(_c);
          }

          if (this.state[c].trim() == '') {
            return "".concat(_c, " cannot be blank");
          }

          if (this.state[c].length < minChars) {
            return "".concat(_c, " must have a minimum ").concat(minChars, " characters");
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return true;
    }
  }, {
    key: "submit",
    value: function submit() {
      var _this3 = this;

      var check = this.checkInputs(); // front-end checks

      if (check == true) {
        var url = "".concat(baseUrl, "/").concat(endpoints.patients, "/add?");
        var dob = "".concat(this.state.doby, "-").concat(this.state.dobm, "-").concat(this.state.dobd);
        url += "&first_name=".concat(this.state.first_name);
        url += "&last_name=".concat(this.state.last_name);
        url += "&title=".concat(this.state.title);
        url += "&date_of_birth=".concat(dob);
        url += "&gender=".concat(this.state.gender);
        url += "&registered_date=" + new Date().toDbString();
        fetch(url, {
          method: 'POST'
        }).then(function (resp) {
          if (resp.status == 200) {
            // feedback and reset
            _this3.setState({
              feedback: 'New patient successfully added',
              first_name: '',
              last_name: '',
              gender: null
            });

            var inputs = document.querySelectorAll('.input-box');
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = inputs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var inp = _step2.value;
                inp.value = '';
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            var genderOption = document.querySelector('#gender');
            genderOption.options[0].selected = "true";
          } else {
            return resp.json();
          }
        }).then(function (respJson) {
          if (respJson.msg) {
            // catch server side errors
            var msg = respJson.msg;

            if (msg.includes('Duplicate entry')) {
              _this3.setState({
                feedback: 'Error: duplicate entry'
              });
            } else if (msg.includes("FOREIGN KEY (`gender`)")) {
              _this3.setState({
                feedback: 'Error: select a Gender option'
              });
            } else {
              _this3.setState({
                feedback: 'Error: record could not be added'
              });
            }
          } else {
            _this3.setState({
              feedback: 'Error: not added - check details'
            });
          }
        });
      } else {
        this.setState({
          feedback: check
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("div", null, React.createElement(patients_add_BuildElems, {
        elem: "input",
        data: fields,
        onKeyUp: this.handleKeyUp
      })), React.createElement("div", {
        className: "form-item"
      }, React.createElement(patients_add_Label, {
        id: "date-birth",
        className: "horizontal-label",
        label: "Date of Birth"
      }), React.createElement(patients_add_DateInput, {
        id: "date-birth",
        className: "date-calendar",
        onChange: this.handleChange
      })), React.createElement("div", {
        className: "form-item"
      }, React.createElement(patients_add_Label, {
        id: "gender-label",
        className: "horizontal-label",
        label: "Gender"
      }), React.createElement(patients_add_DropDown, {
        id: "gender",
        items: this.state.genders,
        onChange: this.handleChange
      })), React.createElement("div", {
        className: "feedback"
      }, this.state.feedback), React.createElement("div", {
        id: "submission"
      }, React.createElement(patients_add_Btn, {
        id: "btn-submit",
        className: "btn",
        txt: "Submit",
        onClick: this.submit
      })));
    }
  }]);

  return AddPatient;
}(React.Component);


ReactDOM.render(React.createElement("div", null), // empty so DidMount will work
document.getElementById('root'));
// CONCATENATED MODULE: ./js/patients.jsx


function patients_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { patients_typeof = function _typeof(obj) { return typeof obj; }; } else { patients_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return patients_typeof(obj); }

function patients_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function patients_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function patients_createClass(Constructor, protoProps, staticProps) { if (protoProps) patients_defineProperties(Constructor.prototype, protoProps); if (staticProps) patients_defineProperties(Constructor, staticProps); return Constructor; }

function patients_possibleConstructorReturn(self, call) { if (call && (patients_typeof(call) === "object" || typeof call === "function")) { return call; } return patients_assertThisInitialized(self); }

function patients_getPrototypeOf(o) { patients_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return patients_getPrototypeOf(o); }

function patients_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function patients_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) patients_setPrototypeOf(subClass, superClass); }

function patients_setPrototypeOf(o, p) { patients_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return patients_setPrototypeOf(o, p); }



var patients_point = 'patients';
var patients_Btn = Btn;
var Table = CustomTable;
var patients_baseUrl = "".concat(params.backendhost, ":").concat(params.backendport);
var baseHttpUrl = "".concat(params.backendhost, ":").concat(params.frontendport);
var headerCols = [['id', 'col-verynarrow'], ['title', 'col-short-medium'], ['first_name', 'col-medium'], ['last_name', 'col-medium'], ['date_of_birth', 'col-medium']];

var patients_Patients =
/*#__PURE__*/
function (_React$Component) {
  patients_inherits(Patients, _React$Component);

  function Patients(props) {
    var _this;

    patients_classCallCheck(this, Patients);

    _this = patients_possibleConstructorReturn(this, patients_getPrototypeOf(Patients).call(this, props));
    _this.submit = _this.submit.bind(patients_assertThisInitialized(_this));
    return _this;
  }

  patients_createClass(Patients, [{
    key: "submit",
    value: function submit() {
      window.open("".concat(baseHttpUrl, "/").concat(routes['patients-add']), '_self');
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(Table, {
        source: "".concat(patients_baseUrl, "/").concat(endpoints[patients_point]),
        headers: headerCols,
        transforms: true
      }), React.createElement("div", {
        id: "submission"
      }, React.createElement(patients_Btn, {
        id: "btn-submit",
        className: "btn btn-add",
        txt: "Add New Patient",
        onClick: this.submit
      })));
    }
  }]);

  return Patients;
}(React.Component);


// CONCATENATED MODULE: ./js/prescribers.jsx


function prescribers_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { prescribers_typeof = function _typeof(obj) { return typeof obj; }; } else { prescribers_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return prescribers_typeof(obj); }

function prescribers_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function prescribers_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function prescribers_createClass(Constructor, protoProps, staticProps) { if (protoProps) prescribers_defineProperties(Constructor.prototype, protoProps); if (staticProps) prescribers_defineProperties(Constructor, staticProps); return Constructor; }

function prescribers_possibleConstructorReturn(self, call) { if (call && (prescribers_typeof(call) === "object" || typeof call === "function")) { return call; } return prescribers_assertThisInitialized(self); }

function prescribers_getPrototypeOf(o) { prescribers_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return prescribers_getPrototypeOf(o); }

function prescribers_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function prescribers_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) prescribers_setPrototypeOf(subClass, superClass); }

function prescribers_setPrototypeOf(o, p) { prescribers_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return prescribers_setPrototypeOf(o, p); }



var prescribers_point = 'prescribers';
var prescribers_Btn = Btn;
var prescribers_Table = CustomTable;
var prescribers_baseUrl = "".concat(params.backendhost, ":").concat(params.backendport);
var prescribers_baseHttpUrl = "".concat(params.backendhost, ":").concat(params.frontendport);
var prescribers_headerCols = [['id', 'col-verynarrow'], ['first_name', 'col-medium'], ['last_name', 'col-medium'], ['position', 'col-medium']];

var prescribers_Prescribers =
/*#__PURE__*/
function (_React$Component) {
  prescribers_inherits(Prescribers, _React$Component);

  function Prescribers(props) {
    var _this;

    prescribers_classCallCheck(this, Prescribers);

    _this = prescribers_possibleConstructorReturn(this, prescribers_getPrototypeOf(Prescribers).call(this, props));
    _this.submit = _this.submit.bind(prescribers_assertThisInitialized(_this));
    return _this;
  }

  prescribers_createClass(Prescribers, [{
    key: "submit",
    value: function submit() {}
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(prescribers_Table, {
        source: "".concat(prescribers_baseUrl, "/").concat(endpoints[prescribers_point]),
        headers: prescribers_headerCols,
        transforms: false
      }), React.createElement("div", {
        id: "submission"
      }, React.createElement(prescribers_Btn, {
        id: "btn-submit",
        className: "btn btn-add",
        txt: "Add New Prescriber (Not Active)",
        onClick: this.submit
      })));
    }
  }]);

  return Prescribers;
}(React.Component);


// CONCATENATED MODULE: ./js/users.jsx


function users_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { users_typeof = function _typeof(obj) { return typeof obj; }; } else { users_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return users_typeof(obj); }

function users_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function users_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function users_createClass(Constructor, protoProps, staticProps) { if (protoProps) users_defineProperties(Constructor.prototype, protoProps); if (staticProps) users_defineProperties(Constructor, staticProps); return Constructor; }

function users_possibleConstructorReturn(self, call) { if (call && (users_typeof(call) === "object" || typeof call === "function")) { return call; } return users_assertThisInitialized(self); }

function users_getPrototypeOf(o) { users_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return users_getPrototypeOf(o); }

function users_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function users_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) users_setPrototypeOf(subClass, superClass); }

function users_setPrototypeOf(o, p) { users_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return users_setPrototypeOf(o, p); }



var users_point = 'users';
var users_Btn = Btn;
var users_Table = CustomTable;
var users_baseUrl = "".concat(params.backendhost, ":").concat(params.backendport);
var users_baseHttpUrl = "".concat(params.backendhost, ":").concat(params.frontendport);
var users_headerCols = [['id', 'col-verynarrow'], ['username', 'col-medium']];

var users_Prescribers =
/*#__PURE__*/
function (_React$Component) {
  users_inherits(Prescribers, _React$Component);

  function Prescribers(props) {
    var _this;

    users_classCallCheck(this, Prescribers);

    _this = users_possibleConstructorReturn(this, users_getPrototypeOf(Prescribers).call(this, props));
    _this.submit = _this.submit.bind(users_assertThisInitialized(_this));
    return _this;
  }

  users_createClass(Prescribers, [{
    key: "submit",
    value: function submit() {
      window.open("".concat(users_baseHttpUrl, "/").concat(routes['users-add']), '_self');
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(users_Table, {
        source: "".concat(users_baseUrl, "/").concat(endpoints[users_point]),
        headers: users_headerCols,
        transforms: false
      }), React.createElement("div", {
        id: "submission"
      }, React.createElement(users_Btn, {
        id: "btn-submit",
        className: "btn btn-add",
        txt: "Add New User",
        onClick: this.submit
      })));
    }
  }]);

  return Prescribers;
}(React.Component);


// CONCATENATED MODULE: ./js/users-add.jsx


function users_add_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { users_add_typeof = function _typeof(obj) { return typeof obj; }; } else { users_add_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return users_add_typeof(obj); }

function users_add_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function users_add_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function users_add_createClass(Constructor, protoProps, staticProps) { if (protoProps) users_add_defineProperties(Constructor.prototype, protoProps); if (staticProps) users_add_defineProperties(Constructor, staticProps); return Constructor; }

function users_add_possibleConstructorReturn(self, call) { if (call && (users_add_typeof(call) === "object" || typeof call === "function")) { return call; } return users_add_assertThisInitialized(self); }

function users_add_getPrototypeOf(o) { users_add_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return users_add_getPrototypeOf(o); }

function users_add_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function users_add_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) users_add_setPrototypeOf(subClass, superClass); }

function users_add_setPrototypeOf(o, p) { users_add_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return users_add_setPrototypeOf(o, p); }



var users_add_Btn = Btn;
var users_add_BuildElems = BuildElems;
var users_add_baseUrl = "".concat(params.backendhost, ":").concat(params.backendport);
var users_add_fields = {
  'username': 'preferred title',
  'pwhash': 'password'
};

var users_add_AddUser =
/*#__PURE__*/
function (_React$Component) {
  users_add_inherits(AddUser, _React$Component);

  function AddUser(props) {
    var _this;

    users_add_classCallCheck(this, AddUser);

    _this = users_add_possibleConstructorReturn(this, users_add_getPrototypeOf(AddUser).call(this, props));
    _this.checkInputs = _this.checkInputs.bind(users_add_assertThisInitialized(_this));
    _this.handleKeyUp = _this.handleKeyUp.bind(users_add_assertThisInitialized(_this));
    _this.submit = _this.submit.bind(users_add_assertThisInitialized(_this));
    _this.state = {
      addUserNote: 'Give new user a temporary password to change on first login',
      username: '',
      pwhash: '',
      feedback: '',
      checks: ['username', 'pwhash']
    };
    return _this;
  }

  users_add_createClass(AddUser, [{
    key: "handleKeyUp",
    value: function handleKeyUp(e) {
      var id = e.target.id.split('-')[0];
      var value = e.target.value;

      switch (id) {
        case 'username':
          this.setState({
            username: value
          });
          break;

        case 'pwhash':
          this.setState({
            pwhash: value
          });
          break;
      }
    }
  }, {
    key: "checkInputs",
    value: function checkInputs() {
      // simple checks, could be more sophisticated
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.state.checks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var c = _step.value;

          var _c = c.replace('_', ' ').capitalize();

          var minChars = 6;

          if (this.state[c] == null || this.state[c] == undefined) {
            return "Select a value for ".concat(_c);
          }

          if (this.state[c].trim() == '') {
            return "".concat(_c, " cannot be blank");
          }

          if (this.state[c].length < minChars) {
            return "".concat(_c, " must have a minimum ").concat(minChars, " characters");
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return true;
    }
  }, {
    key: "submit",
    value: function submit() {
      var _this2 = this;

      var check = this.checkInputs(); // front-end checks

      if (check == true) {
        var url = "".concat(users_add_baseUrl, "/").concat(endpoints.users, "/add?");
        url += "&username=".concat(this.state.username);
        url += "&pwhash=".concat(this.state.pwhash);
        fetch(url, {
          method: 'POST'
        }).then(function (resp) {
          if (resp.status == 200) {
            // feedback and reset
            _this2.setState({
              feedback: 'New user successfully added',
              username: '',
              pwhash: ''
            });

            var inputs = document.querySelectorAll('.input-box');
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = inputs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var inp = _step2.value;
                inp.value = '';
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          } else {
            return resp.json();
          }
        }).then(function (respJson) {
          if (respJson.msg) {
            // catch server side errors
            var msg = respJson.msg;

            if (msg.includes('Duplicate entry')) {
              _this2.setState({
                feedback: 'Error: duplicate entry'
              });
            } else {
              _this2.setState({
                feedback: 'Error: record could not be added'
              });
            }
          } else {
            _this2.setState({
              feedback: 'Error: not added - check details'
            });
          }
        });
      } else {
        this.setState({
          feedback: check
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("div", null, React.createElement(users_add_BuildElems, {
        elem: "input",
        data: users_add_fields,
        onKeyUp: this.handleKeyUp
      })), React.createElement("div", {
        id: "add-user-note"
      }, " ", this.state.addUserNote, " "), React.createElement("div", {
        className: "feedback"
      }, this.state.feedback), React.createElement("div", {
        id: "submission"
      }, React.createElement(users_add_Btn, {
        id: "btn-submit",
        className: "btn",
        txt: "Submit",
        onClick: this.submit
      })));
    }
  }]);

  return AddUser;
}(React.Component);


ReactDOM.render(React.createElement("div", null), // empty so DidMount will work
document.getElementById('root'));
// CONCATENATED MODULE: ./js/login.jsx


function login_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { login_typeof = function _typeof(obj) { return typeof obj; }; } else { login_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return login_typeof(obj); }

function login_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function login_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function login_createClass(Constructor, protoProps, staticProps) { if (protoProps) login_defineProperties(Constructor.prototype, protoProps); if (staticProps) login_defineProperties(Constructor, staticProps); return Constructor; }

function login_possibleConstructorReturn(self, call) { if (call && (login_typeof(call) === "object" || typeof call === "function")) { return call; } return login_assertThisInitialized(self); }

function login_getPrototypeOf(o) { login_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return login_getPrototypeOf(o); }

function login_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function login_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) login_setPrototypeOf(subClass, superClass); }

function login_setPrototypeOf(o, p) { login_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return login_setPrototypeOf(o, p); }



var login_Btn = Btn;
var login_BuildElems = BuildElems;
var login_baseUrl = "".concat(params.backendhost, ":").concat(params.backendport);
var login_baseHttpUrl = "".concat(params.backendhost, ":").concat(params.frontendport);
var login_fields = {
  'username': 'your login username',
  'password': 'your login password'
};

var login_Login =
/*#__PURE__*/
function (_React$Component) {
  login_inherits(Login, _React$Component);

  function Login(props) {
    var _this;

    login_classCallCheck(this, Login);

    _this = login_possibleConstructorReturn(this, login_getPrototypeOf(Login).call(this, props));
    _this.handleKeyUp = _this.handleKeyUp.bind(login_assertThisInitialized(_this));
    _this.submit = _this.submit.bind(login_assertThisInitialized(_this));
    _this.state = {
      uname: null,
      pw: null,
      feeback: ''
    };
    return _this;
  }

  login_createClass(Login, [{
    key: "handleKeyUp",
    value: function handleKeyUp(e) {
      var id = e.target.id.split('-')[0];
      var value = e.target.value;

      switch (id) {
        case 'username':
          this.setState({
            uname: value
          });
          break;

        case 'password':
          this.setState({
            pw: value
          });
          break;
      }
    }
  }, {
    key: "submit",
    value: function submit() {
      var _this2 = this;

      var url = "".concat(login_baseUrl, "/").concat(endpoints.login, "?");
      url += "&username=".concat(this.state.uname);
      url += "&pwhash=".concat(this.state.pw); // we can't open a window from inside a promise 
      // as its outside the calling click's event loop
      // so we store variables to call later

      var newPage = window.open('', '_self');
      var newUrl = "".concat(login_baseHttpUrl, "/").concat(routes['view']);
      fetch(url, {
        method: 'GET'
      }).then(function (resp) {
        if (resp.statusText == 'OK') {
          return resp.json();
        }
      }).then(function (respJson) {
        if (respJson.msg) {
          _this2.setState({
            feedback: respJson.msg
          });
        } else {
          _this2.setState({
            feedback: ''
          });

          newPage.location.href = newUrl;
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("div", null, React.createElement(login_BuildElems, {
        elem: "input",
        data: login_fields,
        onKeyUp: this.handleKeyUp
      })), React.createElement("div", {
        className: "feedback"
      }, this.state.feedback), React.createElement("div", {
        id: "submission"
      }, React.createElement(login_Btn, {
        id: "btn-submit",
        className: "btn",
        txt: "Submit",
        onClick: this.submit
      })));
    }
  }]);

  return Login;
}(React.Component);


// CONCATENATED MODULE: ./js/view.jsx


function view_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { view_typeof = function _typeof(obj) { return typeof obj; }; } else { view_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return view_typeof(obj); }

function view_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function view_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function view_createClass(Constructor, protoProps, staticProps) { if (protoProps) view_defineProperties(Constructor.prototype, protoProps); if (staticProps) view_defineProperties(Constructor, staticProps); return Constructor; }

function view_possibleConstructorReturn(self, call) { if (call && (view_typeof(call) === "object" || typeof call === "function")) { return call; } return view_assertThisInitialized(self); }

function view_getPrototypeOf(o) { view_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return view_getPrototypeOf(o); }

function view_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function view_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) view_setPrototypeOf(subClass, superClass); }

function view_setPrototypeOf(o, p) { view_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return view_setPrototypeOf(o, p); }



var view_BuildElems = BuildElems;
var view_baseHttpUrl = "".concat(params.backendhost, ":").concat(params.frontendport);

var view_View =
/*#__PURE__*/
function (_React$Component) {
  view_inherits(View, _React$Component);

  function View(props) {
    var _this;

    view_classCallCheck(this, View);

    _this = view_possibleConstructorReturn(this, view_getPrototypeOf(View).call(this, props));
    _this.submit = _this.submit.bind(view_assertThisInitialized(_this));
    _this.state = {
      btnLinks: {
        'patients': ['View', 'patients'],
        'prescribers': ['View', 'prescribers'],
        'medicines': ['Not Active', ''],
        'prescriptions': ['Not Active', ''],
        'orders': ['Not Active', '']
      }
    };
    return _this;
  }

  view_createClass(View, [{
    key: "submit",
    value: function submit(e) {
      var subject = e.target.id.split('-')[1]; // return a btnlink key

      var point = subject == 'users' ? 'users' : this.state.btnLinks[subject][1];
      var url = "".concat(view_baseHttpUrl, "/").concat(routes[point]);

      if (!url.endsWith('undefined')) {
        // blanks in btnLinks above
        window.open(url, '_self');
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("div", null, React.createElement(view_BuildElems, {
        elem: "btn",
        data: this.state.btnLinks,
        onClick: this.submit
      })), React.createElement("hr", {
        "class": "medium-line"
      }), React.createElement("div", {
        "class": "line-comment"
      }, "Admin Use Only"), React.createElement("div", null, React.createElement(view_BuildElems, {
        elem: "btn",
        data: {
          'users': ['View', 'users']
        },
        onClick: this.submit
      })));
    }
  }]);

  return View;
}(React.Component);


// CONCATENATED MODULE: ./js/navigation.jsx


function navigation_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { navigation_typeof = function _typeof(obj) { return typeof obj; }; } else { navigation_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return navigation_typeof(obj); }

function navigation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function navigation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function navigation_createClass(Constructor, protoProps, staticProps) { if (protoProps) navigation_defineProperties(Constructor.prototype, protoProps); if (staticProps) navigation_defineProperties(Constructor, staticProps); return Constructor; }

function navigation_possibleConstructorReturn(self, call) { if (call && (navigation_typeof(call) === "object" || typeof call === "function")) { return call; } return navigation_assertThisInitialized(self); }

function navigation_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function navigation_getPrototypeOf(o) { navigation_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return navigation_getPrototypeOf(o); }

function navigation_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) navigation_setPrototypeOf(subClass, superClass); }

function navigation_setPrototypeOf(o, p) { navigation_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return navigation_setPrototypeOf(o, p); }



var navigation_BuildElems = BuildElems;
var navigation_baseHttpUrl = "".concat(params.backendhost, ":").concat(params.frontendport);

var Navigation =
/*#__PURE__*/
function (_React$Component) {
  navigation_inherits(Navigation, _React$Component);

  function Navigation(props) {
    navigation_classCallCheck(this, Navigation);

    return navigation_possibleConstructorReturn(this, navigation_getPrototypeOf(Navigation).call(this, props));
  }

  navigation_createClass(Navigation, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("div", null, React.createElement(navigation_BuildElems, {
        elem: "navbar",
        data: this.props.links,
        baseHttpUrl: navigation_baseHttpUrl
      })));
    }
  }]);

  return Navigation;
}(React.Component);


// CONCATENATED MODULE: ./js/logout.jsx


function logout_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { logout_typeof = function _typeof(obj) { return typeof obj; }; } else { logout_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return logout_typeof(obj); }

function logout_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function logout_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function logout_createClass(Constructor, protoProps, staticProps) { if (protoProps) logout_defineProperties(Constructor.prototype, protoProps); if (staticProps) logout_defineProperties(Constructor, staticProps); return Constructor; }

function logout_possibleConstructorReturn(self, call) { if (call && (logout_typeof(call) === "object" || typeof call === "function")) { return call; } return logout_assertThisInitialized(self); }

function logout_getPrototypeOf(o) { logout_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return logout_getPrototypeOf(o); }

function logout_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function logout_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) logout_setPrototypeOf(subClass, superClass); }

function logout_setPrototypeOf(o, p) { logout_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return logout_setPrototypeOf(o, p); }



var logout_Btn = Btn;
var logout_baseUrl = "".concat(params.backendhost, ":").concat(params.backendport);
var logout_baseHttpUrl = "".concat(params.backendhost, ":").concat(params.frontendport);

var Logout =
/*#__PURE__*/
function (_React$Component) {
  logout_inherits(Logout, _React$Component);

  function Logout(props) {
    var _this;

    logout_classCallCheck(this, Logout);

    _this = logout_possibleConstructorReturn(this, logout_getPrototypeOf(Logout).call(this, props));
    _this.submit = _this.submit.bind(logout_assertThisInitialized(_this));
    _this.state = {
      feeback: ''
    };
    return _this;
  }

  logout_createClass(Logout, [{
    key: "submit",
    value: function submit() {}
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("div", {
        className: "feedback"
      }, "This page is under construction"), React.createElement("div", {
        id: "submission"
      }, React.createElement(logout_Btn, {
        id: "btn-submit",
        className: "btn",
        txt: "Logout",
        onClick: this.submit
      })));
    }
  }]);

  return Logout;
}(React.Component);


// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/resolve-pathname/esm/resolve-pathname.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ var resolve_pathname = (resolvePathname);

// CONCATENATED MODULE: ./node_modules/value-equal/esm/value-equal.js
function value_equal_valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = value_equal_valueOf(a);
    var bValue = value_equal_valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ var value_equal = (valueEqual);

// CONCATENATED MODULE: ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ''));
}

/* harmony default export */ var tiny_invariant_esm = (invariant);

// CONCATENATED MODULE: ./node_modules/history/esm/history.js






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && value_equal(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     false ? undefined : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           false ? undefined : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? undefined : tiny_invariant_esm(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     false ? undefined : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? undefined : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? undefined : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? undefined : tiny_invariant_esm(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     false ? undefined : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         false ? undefined : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     false ? undefined : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     false ? undefined : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     false ? undefined : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}



// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(3);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/gud/index.js
var gud = __webpack_require__(6);
var gud_default = /*#__PURE__*/__webpack_require__.n(gud);

// CONCATENATED MODULE: ./node_modules/mini-create-react-context/dist/esm/index.js






var MAX_SIGNED_31_BIT_INT = 1073741823;

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + gud_default()() + '__';

  var Provider =
  /*#__PURE__*/
  function (_Component) {
    inheritsLoose_default()(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (false) {}

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react["Component"]);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = prop_types_default.a.object.isRequired, _Provider$childContex);

  var Consumer =
  /*#__PURE__*/
  function (_Component2) {
    inheritsLoose_default()(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react["Component"]);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = prop_types_default.a.object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var esm_index = react_default.a.createContext || createReactContext;

/* harmony default export */ var esm = (esm_index);

// EXTERNAL MODULE: ./node_modules/path-to-regexp/index.js
var path_to_regexp = __webpack_require__(4);
var path_to_regexp_default = /*#__PURE__*/__webpack_require__.n(path_to_regexp);

// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(7);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// CONCATENATED MODULE: ./node_modules/react-router/esm/react-router.js













// TODO: Replace with React.createContext once we can assume React 16+

var react_router_createNamedContext = function createNamedContext(name) {
  var context = esm();
  context.displayName = name;
  return context;
};

var react_router_context =
/*#__PURE__*/
react_router_createNamedContext("Router");

/**
 * The public API for putting history on context.
 */

var react_router_Router =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  };

  _proto.render = function render() {
    return react_default.a.createElement(react_router_context.Provider, {
      children: this.props.children || null,
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    });
  };

  return Router;
}(react_default.a.Component);

if (false) {}

/**
 * The public API for a <Router> that stores location in memory.
 */

var react_router_MemoryRouter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createMemoryHistory(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return react_default.a.createElement(react_router_Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(react_default.a.Component);

if (false) {}

var react_router_Lifecycle =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(react_default.a.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return react_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return react_default.a.createElement(react_router_Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (false) { var messageType; }

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp_default.a.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return react_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : _extends({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return react_default.a.createElement(react_router_Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = createLocation(prevProps.to);

        if (!locationsAreEqual(prevLocation, _extends({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (false) {}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp_default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react_default.a.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   false ? undefined : void 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var react_router_Route =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return react_default.a.createElement(react_router_context.Consumer, null, function (context$1) {
      !context$1 ?  false ? undefined : tiny_invariant_esm(false) : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = _extends({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }

      return react_default.a.createElement(react_router_context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  false ? undefined : children(props) : children : component ? react_default.a.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  false ? undefined : children(props) : null);
    });
  };

  return Route;
}(react_default.a.Component);

if (false) {}

function react_router_addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return _extends({}, location, {
    pathname: react_router_addLeadingSlash(basename) + location.pathname
  });
}

function react_router_stripBasename(basename, location) {
  if (!basename) return location;
  var base = react_router_addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : createPath(location);
}

function staticHandler(methodName) {
  return function () {
      false ? undefined : tiny_invariant_esm(false) ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var react_router_StaticRouter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, createLocation(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return react_router_addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: react_router_stripBasename(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return react_default.a.createElement(react_router_Router, _extends({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(react_default.a.Component);

if (false) {}

/**
 * The public API for rendering the first <Route> that matches.
 */

var react_router_Switch =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return react_default.a.createElement(react_router_context.Consumer, null, function (context) {
      !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react_default.a.Children.forEach(_this.props.children, function (child) {
        if (match == null && react_default.a.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, _extends({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? react_default.a.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(react_default.a.Component);

if (false) {}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutPropertiesLoose(props, ["wrappedComponentRef"]);

    return react_default.a.createElement(react_router_context.Consumer, null, function (context) {
      !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
      return react_default.a.createElement(Component, _extends({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (false) {}

  return hoist_non_react_statics_cjs_default()(C, Component);
}

var useContext = react_default.a.useContext;
function useHistory() {
  if (false) {}

  return useContext(react_router_context).history;
}
function useLocation() {
  if (false) {}

  return useContext(react_router_context).location;
}
function useParams() {
  if (false) {}

  var match = useContext(react_router_context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (false) {}

  return path ? matchPath(useLocation().pathname, path) : useContext(react_router_context).match;
}

if (false) { var secondaryBuildName, initialBuildName, buildNames, react_router_key, global; }


//# sourceMappingURL=react-router.js.map

// CONCATENATED MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var react_router_dom_BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createBrowserHistory(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return react_default.a.createElement(react_router_Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react_default.a.Component);

if (false) {}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var react_router_dom_HashRouter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createHashHistory(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return react_default.a.createElement(react_router_Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react_default.a.Component);

if (false) {}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var react_router_dom_normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? createLocation(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react_default.a.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = _objectWithoutPropertiesLoose(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = _extends({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }

  return react_default.a.createElement("a", props);
});

if (false) {}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = _objectWithoutPropertiesLoose(_ref2, ["component", "replace", "to", "innerRef"]);

  return react_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
    var history = context.history;
    var location = react_router_dom_normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = _extends({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var method = replace ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react_default.a.createElement(component, props);
  });
});

if (false) { var refType, toType; }

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react_default.a.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = _objectWithoutPropertiesLoose(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "strict", "style", "to", "innerRef"]);

  return react_default.a.createElement(react_router_context.Consumer, null, function (context) {
    !context ?  false ? undefined : tiny_invariant_esm(false) : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = react_router_dom_normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? matchPath(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? _extends({}, styleProp, {}, activeStyle) : styleProp;

    var props = _extends({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react_default.a.createElement(Link, props);
  });
});

if (false) { var ariaCurrentType; }


//# sourceMappingURL=react-router-dom.js.map

// CONCATENATED MODULE: ./js/index.jsx


function js_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { js_typeof = function _typeof(obj) { return typeof obj; }; } else { js_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return js_typeof(obj); }

function js_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function js_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function js_createClass(Constructor, protoProps, staticProps) { if (protoProps) js_defineProperties(Constructor.prototype, protoProps); if (staticProps) js_defineProperties(Constructor, staticProps); return Constructor; }

function js_possibleConstructorReturn(self, call) { if (call && (js_typeof(call) === "object" || typeof call === "function")) { return call; } return js_assertThisInitialized(self); }

function js_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function js_getPrototypeOf(o) { js_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return js_getPrototypeOf(o); }

function js_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) js_setPrototypeOf(subClass, superClass); }

function js_setPrototypeOf(o, p) { js_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return js_setPrototypeOf(o, p); }













var js_Page = Page;
var js_Header = lib_doms_Header;
var js_Content = Content;
var js_Footer = Footer;
var js_Clock = Clock;
var js_routes = {
  // + route: component, page name for frontend -> react-router; 
  "/html/login.html": [React.createElement(login_Login, null), 'Login'],
  "/html/view.html": [React.createElement(view_View, null), 'View'],
  "/html/users.html": [React.createElement(users_Prescribers, null), 'Users'],
  "/html/users_add.html": [React.createElement(users_add_AddUser, null), 'Add New User'],
  "/html/patients_add.html": [React.createElement(patients_add_AddPatient, null), 'Add New Patient'],
  "/html/patients.html": [React.createElement(patients_Patients, null), 'Patients'],
  "/html/prescribers.html": [React.createElement(prescribers_Prescribers, null), 'Prescribers'],
  "/html/logout.html": [React.createElement(Logout, null), 'Logout']
}; // get route from location and then page name/title

var js_location = window.location.pathname;
var js_baseUrl = "".concat(params.backendhost, ":").concat(params.backendport);
var theRoute = js_location.replace(js_baseUrl, '');
var pageName = js_routes[theRoute][1];
var js_component = js_routes[theRoute][0];
var navBarLinks = navBar;

var js_App =
/*#__PURE__*/
function (_React$Component) {
  js_inherits(App, _React$Component);

  function App(props) {
    var _this;

    js_classCallCheck(this, App);

    _this = js_possibleConstructorReturn(this, js_getPrototypeOf(App).call(this, props));
    _this.state = {
      loggedIn: null
    };
    return _this;
  }

  js_createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(js_Page, {
        id: "page-wrap",
        header: React.createElement(js_Header, {
          name: pageName,
          time: React.createElement(js_Clock, null),
          nav: React.createElement(Navigation, {
            links: navBarLinks
          }),
          content: null
        }),
        content: React.createElement(js_Content, {
          content: React.createElement(react_router_dom_BrowserRouter, null, React.createElement("div", null, React.createElement(react_router_Route, {
            path: theRoute
          }, js_component)))
        }),
        footer: React.createElement(js_Footer, {
          content: null
        })
      });
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(js_App, null), document.getElementById('root'));

/***/ })
/******/ ]);