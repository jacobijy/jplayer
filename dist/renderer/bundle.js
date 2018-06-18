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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/renderer/css/App.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader!./src/renderer/css/App.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml, body, #app, .fill-container {\n    height: 100%;\n    width: 100%;\n    background-color: black;\n}\n\nvideo {\n    display: block;\n}\n\n.hide {\n    opacity: 0;\n}\n\n.circle {\n    width: 20px;\n    height: 20px;\n    border-radius: 12px;\n    border: 2px solid #00b7c3;\n    background-color:black;\n    bottom: -12px;\n    left: -12px;\n    position: absolute;\n    cursor: pointer;\n}\n\n.bottom {\n    bottom: 0;\n    padding-bottom: 10px;\n    width: 100%;\n    position: absolute;\n    background-color:rgba(5, 5, 5, 0.5);\n}\n\n#controller {\n    position: fixed;\n    height: 100%;\n    top: 0;\n    background-color: transparent;\n}\n\n#play-panel {\n    margin-left: calc(50% - 75px);\n    margin-top: 10px;\n}\n\n#play-panel>li {\n    margin-left: 5px;\n    margin-right: 5px;\n    width: 40px;\n    height: 40px;\n    border: 1px solid transparent;\n    display: inline-block;\n}\n\n#play-panel>li:hover {\n    background-color: #555;\n    border-color: #fff;\n}\n\n#play-panel i {\n    color: #fff;\n    font-size: 35px;\n    opacity: 1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/renderer/iconfont/iconfont.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader!./src/renderer/iconfont/iconfont.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@font-face {font-family: \"iconfont\";\n  src: url(" + escape(__webpack_require__(/*! ./iconfont.eot?t=1529159995043 */ "./src/renderer/iconfont/iconfont.eot?t=1529159995043")) + "); /* IE9*/\n  src: url(" + escape(__webpack_require__(/*! ./iconfont.eot?t=1529159995043 */ "./src/renderer/iconfont/iconfont.eot?t=1529159995043")) + "#iefix) format('embedded-opentype'), \n  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),\n  url(" + escape(__webpack_require__(/*! ./iconfont.ttf?t=1529159995043 */ "./src/renderer/iconfont/iconfont.ttf?t=1529159995043")) + ") format('truetype'), \n  url(" + escape(__webpack_require__(/*! ./iconfont.svg?t=1529159995043 */ "./src/renderer/iconfont/iconfont.svg?t=1529159995043")) + "#iconfont) format('svg'); /* iOS 4.1- */\n}\n\n.iconfont {\n  font-family:\"iconfont\" !important;\n  font-size:16px;\n  font-style:normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-volumeall:before { content: \"\\E691\"; }\n\n.icon-volumelow:before { content: \"\\E692\"; }\n\n.icon-volumeoff:before { content: \"\\E694\"; }\n\n.icon-triangle:before { content: \"\\E68F\"; }\n\n.icon-shrink:before { content: \"\\E7E9\"; }\n\n.icon-verticalright:before { content: \"\\E7EA\"; }\n\n.icon-verticalleft:before { content: \"\\E7EB\"; }\n\n.icon-right:before { content: \"\\E7EC\"; }\n\n.icon-left:before { content: \"\\E7ED\"; }\n\n.icon-pause:before { content: \"\\E7FE\"; }\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyObject.js":
/*!**********************************************!*\
  !*** ./node_modules/fbjs/lib/emptyObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (true) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/invariant.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/*!******************************************!*\
  !*** ./node_modules/fbjs/lib/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
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

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js");
  var warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.4.1
 * react.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js");
var emptyObject = __webpack_require__(/*! fbjs/lib/emptyObject */ "./node_modules/fbjs/lib/emptyObject.js");
var warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");
var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.4.1';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_TIMEOUT_TYPE = hasSymbol ? Symbol.for('react.timeout') : 0xead1;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

// Relying on the `invariant()` implementation lets us
// have preserve the format and params in the www builds.

// Exports ReactDOM.createRoot


// Experimental error-boundary API that can recover from errors within a single
// render phase

// Suspense
var enableSuspense = false;
// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


// Warn about legacy context API


// Gather advanced timing metrics for Profiler subtrees.


// Only used in www builds.

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warning(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var ReactDebugCurrentFrame = {};

{
  // Component that is being worked on
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      return impl();
    }
    return null;
  };
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', ReactDebugCurrentFrame.getStackAddendum()) : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children) {
  return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warning(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    _defaultValue: defaultValue,
    _currentValue: defaultValue,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue2: defaultValue,
    _changedBits: 0,
    _changedBits2: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  context.Consumer = context;

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function forwardRef(render) {
  {
    !(typeof render === 'function') ? warning(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render) : void 0;

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warning(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

var describeComponentFrame = function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
};

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_ASYNC_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_TIMEOUT_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function getComponentName(fiber) {
  var type = fiber.type;

  if (typeof type === 'function') {
    return type.displayName || type.name;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_ASYNC_MODE_TYPE:
      return 'AsyncMode';
    case REACT_CONTEXT_TYPE:
      return 'Context.Consumer';
    case REACT_FRAGMENT_TYPE:
      return 'ReactFragment';
    case REACT_PORTAL_TYPE:
      return 'ReactPortal';
    case REACT_PROFILER_TYPE:
      return 'Profiler(' + fiber.pendingProps.id + ')';
    case REACT_PROVIDER_TYPE:
      return 'Context.Provider';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_TIMEOUT_TYPE:
      return 'Timeout';
  }
  if (typeof type === 'object' && type !== null) {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        var functionName = type.render.displayName || type.render.name || '';
        return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
    }
  }
  return null;
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var currentlyValidatingElement = void 0;
var propTypesMisspellWarningShown = void 0;

var getDisplayName = function () {};
var getStackAddendum = function () {};

{
  currentlyValidatingElement = null;

  propTypesMisspellWarningShown = false;

  getDisplayName = function (element) {
    if (element == null) {
      return '#empty';
    } else if (typeof element === 'string' || typeof element === 'number') {
      return '#text';
    } else if (typeof element.type === 'string') {
      return element.type;
    }

    var type = element.type;
    if (type === REACT_FRAGMENT_TYPE) {
      return 'React.Fragment';
    } else if (typeof type === 'object' && type !== null && type.$$typeof === REACT_FORWARD_REF_TYPE) {
      var functionName = type.render.displayName || type.render.name || '';
      return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
    } else {
      return type.displayName || type.name || 'Unknown';
    }
  };

  getStackAddendum = function () {
    var stack = '';
    if (currentlyValidatingElement) {
      var name = getDisplayName(currentlyValidatingElement);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
    }
    stack += ReactDebugCurrentFrame.getStackAddendum() || '';
    return stack;
  };
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
  }

  currentlyValidatingElement = element;
  {
    warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
  }
  currentlyValidatingElement = null;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var type = element.type;
  var name = void 0,
      propTypes = void 0;
  if (typeof type === 'function') {
    // Class or functional component
    name = type.displayName || type.name;
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && type !== null && type.$$typeof === REACT_FORWARD_REF_TYPE) {
    // ForwardRef
    var functionName = type.render.displayName || type.render.name || '';
    name = functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
    propTypes = type.propTypes;
  } else {
    return;
  }
  if (propTypes) {
    currentlyValidatingElement = element;
    checkPropTypes(propTypes, element.props, 'prop', name, getStackAddendum);
    currentlyValidatingElement = null;
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warning(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warning(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  currentlyValidatingElement = fragment;

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
      break;
    }
  }

  if (fragment.ref !== null) {
    warning(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
  }

  currentlyValidatingElement = null;
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    info += getStackAddendum() || '';

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else {
      typeString = typeof type;
    }

    warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  unstable_AsyncMode: REACT_ASYNC_MODE_TYPE,
  unstable_Profiler: REACT_PROFILER_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: ReactCurrentOwner,
    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
    assign: _assign
  }
};

if (enableSuspense) {
  React.Timeout = REACT_TIMEOUT_TYPE;
}

{
  _assign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3.default ? React$3.default : React$3;

module.exports = react;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var player_1 = __webpack_require__(/*! ./renderer/player */ "./src/renderer/player.tsx");
var controller_1 = __webpack_require__(/*! ./renderer/controller */ "./src/renderer/controller.tsx");
var electron_1 = __webpack_require__(/*! electron */ "electron");
electron_1.ipcRenderer.on('action', function (event, arg) {
    var video = document.querySelector('video');
    switch (arg) {
        case 'open':
            var currentFile = null;
            var files = electron_1.remote.dialog.showOpenDialog(electron_1.remote.getCurrentWindow(), {
                filters: [
                    { name: 'Text Files', extensions: ['mp4', 'mkv', 'flv'] },
                    { name: 'All Files', extensions: ['*'] }
                ],
                properties: ['openFile']
            });
            if (files) {
                currentFile = files[0];
                video.src = "file://" + currentFile;
                // readFile(currentFile, (err: Error, buffer: Buffer) => {
                //     console.log(buffer);
                // });
            }
            break;
        case 'play/pause':
            {
                if (video.paused) {
                    video.play();
                }
                else {
                    video.pause();
                }
            }
            break;
        case 'playforward':
            {
                var time = Math.min(video.duration, video.currentTime + 10);
                video.currentTime = time;
            }
            break;
        case 'playback':
            {
                var time = Math.max(0, video.currentTime - 10);
                video.currentTime = time;
            }
            break;
        case 'volumeup':
            {
                var volume = Math.min(1, video.volume + 0.1);
                video.volume = volume;
            }
            break;
        case 'volumedown':
            {
                var volume = Math.max(0, video.volume - 0.1);
                video.volume = volume;
            }
            break;
        default:
            break;
    }
});
var JPlayer = /** @class */ (function (_super) {
    __extends(JPlayer, _super);
    function JPlayer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            time: 0,
            totalTime: 0,
            playing: false,
            paused: true,
            volume: 50
        };
        return _this;
    }
    JPlayer.prototype.componentDidMount = function () {
        this.video = document.querySelector('video');
    };
    JPlayer.prototype.handlePlaying = function () {
        var _this = this;
        this.setState({
            time: this.state.time ? this.state.time : 0,
            playing: true,
            paused: false,
            totalTime: this.video.duration
        });
        this.timer = window.setInterval(function () {
            _this.setState({
                time: _this.video.currentTime
            });
        }, 1000);
    };
    JPlayer.prototype.handlePause = function () {
        this.setState({
            playing: false,
            paused: true,
            time: this.video.currentTime
        });
        window.clearInterval(this.timer);
    };
    JPlayer.prototype.handleVolumeChange = function (event) {
        this.setState({
            volume: this.video.volume
        });
    };
    JPlayer.prototype.render = function () {
        var _a = this.state, time = _a.time, totalTime = _a.totalTime, playing = _a.playing, _b = _a.paused, paused = _b === void 0 ? false : _b, volume = _a.volume;
        return (React.createElement("div", { className: 'fill-container' },
            React.createElement(player_1.default, { window: { width: 800, height: 600, scale: 1 }, handlePause: this.handlePause.bind(this), handlePlaying: this.handlePlaying.bind(this), handleVolumeChange: this.handleVolumeChange.bind(this) }),
            React.createElement(controller_1.default, { time: time, totalTime: totalTime, playing: playing, paused: paused, volume: volume })));
    };
    return JPlayer;
}(React.Component));
exports.default = JPlayer;


/***/ }),

/***/ "./src/renderer/components/progress.tsx":
/*!**********************************************!*\
  !*** ./src/renderer/components/progress.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Progress = /** @class */ (function (_super) {
    __extends(Progress, _super);
    function Progress(props) {
        var _this = _super.call(this, props) || this;
        window.addEventListener('mousemove', _this.changeProgress.bind(_this));
        window.addEventListener('mouseup', _this.restoreCircle.bind(_this));
        return _this;
    }
    Progress.prototype.fillCircle = function () {
        this.circleFocused = true;
        this.circle.style.backgroundColor = '#00b7c3';
    };
    Progress.prototype.restoreCircle = function () {
        this.circleFocused = false;
        this.circle.style.backgroundColor = 'black';
    };
    Progress.prototype.changeProgress = function (event) {
        if (!this.circleFocused || event.clientX === 0) {
            return;
        }
        var _a = this.props.length, length = _a === void 0 ? 90 : _a, startX = window.innerWidth * (1 - length / 100) / 2, totalLength = window.innerWidth * length / 100;
        this.circle.style.opacity = '1';
        var clientX = event.clientX, progressLength = clientX - startX;
        progressLength = progressLength >= 0 ? progressLength <= totalLength ? progressLength : totalLength : 0;
        var percent = Math.floor(progressLength * 100 / totalLength);
        this.circle.style.marginLeft = percent + "%";
        this.bar.style.width = percent + "%";
    };
    Progress.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.length, length = _b === void 0 ? 90 : _b, _c = _a.height, height = _c === void 0 ? 3 : _c, icon = _a.icon, _d = _a.backgroudcolor, backgroudcolor = _d === void 0 ? '#5c5c5c' : _d, _e = _a.progresscolor, progresscolor = _e === void 0 ? '#00b7c3' : _e, percent = _a.percent;
        return (React.createElement("div", { className: 'progressbar', style: {
                width: length + "%",
                marginLeft: (100 - length) / 2 + "%",
                height: height + "px",
                backgroundColor: backgroudcolor,
                position: 'absolute'
            } },
            React.createElement("div", { className: 'fill-container', ref: function (ref) { return _this.bar = ref; }, style: {
                    marginLeft: 0,
                    width: Math.floor(percent * 100) + "%",
                    height: height + "px",
                    backgroundColor: progresscolor
                } }),
            React.createElement("div", { className: 'circle', ref: function (ref) { return _this.circle = ref; }, style: { marginLeft: Math.floor(percent * 100) + "%" }, onMouseDown: this.fillCircle.bind(this), onMouseUp: this.restoreCircle.bind(this) })));
    };
    return Progress;
}(React.Component));
exports.default = Progress;


/***/ }),

/***/ "./src/renderer/controller.tsx":
/*!*************************************!*\
  !*** ./src/renderer/controller.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var progress_1 = __webpack_require__(/*! ./components/progress */ "./src/renderer/components/progress.tsx");
var playpanel_1 = __webpack_require__(/*! ./playpanel */ "./src/renderer/playpanel.tsx");
var Controller = /** @class */ (function (_super) {
    __extends(Controller, _super);
    function Controller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Controller.prototype.componentDidMount = function () {
        this.controlPanel = document.querySelector('#controller');
    };
    Controller.prototype.handleMouseOver = function (event) {
        this.controlPanel.className = 'fill-container';
    };
    Controller.prototype.handleMouseOut = function (event) {
        this.controlPanel.className = 'fill-container hide';
    };
    Controller.prototype.render = function () {
        var _a = this.props, time = _a.time, _b = _a.totalTime, totalTime = _b === void 0 ? 0 : _b, playing = _a.playing, paused = _a.paused, volume = _a.volume;
        return (React.createElement("div", { id: 'controller', className: 'fill-container', onMouseOver: this.handleMouseOver.bind(this), onMouseOut: this.handleMouseOut.bind(this) },
            React.createElement("div", { className: 'bottom' },
                React.createElement(progress_1.default, { percent: totalTime === 0 ? 0 : time / totalTime }),
                React.createElement(playpanel_1.default, { paused: paused }))));
    };
    return Controller;
}(React.Component));
exports.default = Controller;


/***/ }),

/***/ "./src/renderer/css/App.css":
/*!**********************************!*\
  !*** ./src/renderer/css/App.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./App.css */ "./node_modules/css-loader/index.js!./src/renderer/css/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/renderer/iconfont/iconfont.css":
/*!********************************************!*\
  !*** ./src/renderer/iconfont/iconfont.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./iconfont.css */ "./node_modules/css-loader/index.js!./src/renderer/iconfont/iconfont.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/renderer/iconfont/iconfont.eot?t=1529159995043":
/*!************************************************************!*\
  !*** ./src/renderer/iconfont/iconfont.eot?t=1529159995043 ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ }),

/***/ "./src/renderer/iconfont/iconfont.svg?t=1529159995043":
/*!************************************************************!*\
  !*** ./src/renderer/iconfont/iconfont.svg?t=1529159995043 ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPCEtLQoyMDEzLTktMzA6IENyZWF0ZWQuCi0tPgo8c3ZnPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgaWNvbmZvbnQKPC9tZXRhZGF0YT4KPGRlZnM+Cgo8Zm9udCBpZD0iaWNvbmZvbnQiIGhvcml6LWFkdi14PSIxMDI0IiA+CiAgPGZvbnQtZmFjZQogICAgZm9udC1mYW1pbHk9Imljb25mb250IgogICAgZm9udC13ZWlnaHQ9IjUwMCIKICAgIGZvbnQtc3RyZXRjaD0ibm9ybWFsIgogICAgdW5pdHMtcGVyLWVtPSIxMDI0IgogICAgYXNjZW50PSI4OTYiCiAgICBkZXNjZW50PSItMTI4IgogIC8+CiAgICA8bWlzc2luZy1nbHlwaCAvPgogICAgCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ieCIgdW5pY29kZT0ieCIgaG9yaXotYWR2LXg9IjEwMDEiCmQ9Ik0yODEgNTQzcS0yNyAtMSAtNTMgLTFoLTgzcS0xOCAwIC0zNi41IC02dC0zMi41IC0xOC41dC0yMyAtMzJ0LTkgLTQ1LjV2LTc2aDkxMnY0MXEwIDE2IC0wLjUgMzB0LTAuNSAxOHEwIDEzIC01IDI5dC0xNyAyOS41dC0zMS41IDIyLjV0LTQ5LjUgOWgtMTMzdi05N2gtNDM4djk3ek05NTUgMzEwdi01MnEwIC0yMyAwLjUgLTUydDAuNSAtNTh0LTEwLjUgLTQ3LjV0LTI2IC0zMHQtMzMgLTE2dC0zMS41IC00LjVxLTE0IC0xIC0yOS41IC0wLjUKdC0yOS41IDAuNWgtMzJsLTQ1IDEyOGgtNDM5bC00NCAtMTI4aC0yOWgtMzRxLTIwIDAgLTQ1IDFxLTI1IDAgLTQxIDkuNXQtMjUuNSAyM3QtMTMuNSAyOS41dC00IDMwdjE2N2g5MTF6TTE2MyAyNDdxLTEyIDAgLTIxIC04LjV0LTkgLTIxLjV0OSAtMjEuNXQyMSAtOC41cTEzIDAgMjIgOC41dDkgMjEuNXQtOSAyMS41dC0yMiA4LjV6TTMxNiAxMjNxLTggLTI2IC0xNCAtNDhxLTUgLTE5IC0xMC41IC0zN3QtNy41IC0yNXQtMyAtMTV0MSAtMTQuNQp0OS41IC0xMC41dDIxLjUgLTRoMzdoNjdoODFoODBoNjRoMzZxMjMgMCAzNCAxMnQyIDM4cS01IDEzIC05LjUgMzAuNXQtOS41IDM0LjVxLTUgMTkgLTExIDM5aC0zNjh6TTMzNiA0OTh2MjI4cTAgMTEgMi41IDIzdDEwIDIxLjV0MjAuNSAxNS41dDM0IDZoMTg4cTMxIDAgNTEuNSAtMTQuNXQyMC41IC01Mi41di0yMjdoLTMyN3oiIC8+CiAgICAKCiAgICAKICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ2b2x1bWVhbGwiIHVuaWNvZGU9IiYjNTkwMjU7IiBkPSJNMzQyLjAxNzA3NSA2Mi41MDgxNTggMjA4LjM1NzQ2NCAyMzEuOTY5NDUxQzE5OS42ODU0ODcgMjQyLjk2NDI3OCAxODEuMzEwMDQ3IDI1MS44NzczNTEgMTY3LjQ0MDgyNiAyNTEuODc3MzUxTDg4LjQ5MzgyNyAyNTEuODc3MzUxIDg4LjQ5MzgyNyA1MTcuMzU4ODMyIDE2Ny40NDA4MjYgNTE3LjM1ODgzMkMxODEuMzY2NDgxIDUxNy4zNTg4MzIgMTk5LjY1MTYzMSA1MjYuMjI4OTg2IDIwOC4zNDA2MjUgNTM3LjI0NTM4TDM0MS44NTY4NSA3MDYuNTI0ODgxIDM0Mi4wMTcwNzUgNjIuNTA4MTU4IDM0Mi4wMTcwNzUgNjIuNTA4MTU4Wk00MjkuODI3MTYgODM0LjU3NzhDNDI5LjgyNzE2IDkwNC4zNzQxNTggMzk0Ljg2NjUzNiA5MTYuNTIwMjE0IDM1MS42MzA2MTQgODYxLjU2NzIyOUwxNTAuNDM5NTMxIDYwNS44NTI2NTkgNTAuNTEyNjk0IDYwNS44NTI2NTlDMjIuNjE1MzA1IDYwNS44NTI2NTkgMCA1ODMuMzAyMjQ1IDAgNTU1LjMxMTQwN0wwIDIxMy45MjQ3ODhDMCAxODYuMDExNjIzIDIyLjcyNTY3IDE2My40MDU3ODYgNTAuNjU4MTE0IDE2My40MzMxMzFMMTQ5LjYzMDY0NyAxNjMuNTMwMDU3IDM1MS41OTA1NzctOTIuNTI2Mjg5QzM5NC43OTk0NDUtMTQ3LjMwODk2MSA0MjkuODI3MTYtMTM1LjE0NzA5IDQyOS44MjcxNi02NS4zNDE2MDRMNDI5LjgyNzE2IDgzNC41Nzc4IDQyOS44MjcxNiA4MzQuNTc3OFpNNTg3LjUzNDIxIDE5NS44NjQzMzZDNjkzLjY3OTY3MyAzMDIuMDA5Nzk5IDY5My42Nzk2NzMgNDc0LjEwNTYwMyA1ODcuNTM0MjEgNTgwLjI1MTA2NiA1NzAuMjU0NzE1IDU5Ny41MzA1NjEgNTQyLjIzOTExMiA1OTcuNTMwNTYxIDUyNC45NTk2MTggNTgwLjI1MTA2NiA1MDcuNjgwMTIzIDU2Mi45NzE1NzIgNTA3LjY4MDEyMyA1MzQuOTU1OTgxIDUyNC45NTk2MTggNTE3LjY3NjQ4NyA1OTYuNTQ2MDkyIDQ0Ni4wOSA1OTYuNTQ2MDkyIDMzMC4wMjUzOSA1MjQuOTU5NjE4IDI1OC40Mzg5MTUgNTA3LjY4MDEyMyAyNDEuMTU5NDIxIDUwNy42ODAxMjMgMjEzLjE0MzgzIDUyNC45NTk2MTggMTk1Ljg2NDMzNiA1NDIuMjM5MTEyIDE3OC41ODQ4NDEgNTcwLjI1NDcxNSAxNzguNTg0ODQxIDU4Ny41MzQyMSAxOTUuODY0MzM2TDU4Ny41MzQyMSAxOTUuODY0MzM2Wk03MTMuOTUzOTYzIDY5NC4wMjg4NDRDNjk2LjY3NDQ2OCA3MTEuMzA4MzM5IDY2OC42NTg4NjUgNzExLjMwODMzOSA2NTEuMzc5MzcxIDY5NC4wMjg4NDQgNjM0LjA5OTg3NiA2NzYuNzQ5MzUgNjM0LjA5OTg3NiA2NDguNzMzNzU5IDY1MS4zNzkzNzEgNjMxLjQ1NDI2NSA3ODcuMTQ2ODI4IDQ5NS42ODY4MDggNzg3LjE0NjgyOCAyNzUuNTY0MjY2IDY1MS4zNzkzNzEgMTM5Ljc5NjgwOSA2MzQuMDk5ODc2IDEyMi41MTczMTQgNjM0LjA5OTg3NiA5NC41MDE3MTEgNjUxLjM3OTM3MSA3Ny4yMjIyMTcgNjY4LjY1ODg2NSA1OS45NDI3MjIgNjk2LjY3NDQ2OCA1OS45NDI3MjIgNzEzLjk1Mzk2MyA3Ny4yMjIyMTcgODg0LjI4MDM4MyAyNDcuNTQ4NjYzIDg4NC4yODAzODMgNTIzLjcwMjM5OCA3MTMuOTUzOTYzIDY5NC4wMjg4NDRMNzEzLjk1Mzk2MyA2OTQuMDI4ODQ0Wk04NDAuMzczNzE2LTIwLjU4Mjk4MkMxMDY5LjEyNzE3NCAyMDguMTcwNDkgMTA2OS4xMjcxNzQgNTc5LjA1MzE1MSA4NDAuMzczNzE2IDgwNy44MDY2MjIgODIzLjA5NDIyMSA4MjUuMDg2MTE2IDc5NS4wNzg2MTggODI1LjA4NjExNiA3NzcuNzk5MTI0IDgwNy44MDY2MjIgNzYwLjUxOTYyOSA3OTAuNTI3MTI4IDc2MC41MTk2MjkgNzYyLjUxMTUzNyA3NzcuNzk5MTI0IDc0NS4yMzIwNDMgOTcxLjk5MzU2OCA1NTEuMDM3NTYgOTcxLjk5MzU2OCAyMzYuMTg2MDkzIDc3Ny43OTkxMjQgNDEuOTkxNjEgNzYwLjUxOTYyOSAyNC43MTIxMTYgNzYwLjUxOTYyOS0zLjMwMzQ4NyA3NzcuNzk5MTI0LTIwLjU4Mjk4MiA3OTUuMDc4NjE4LTM3Ljg2MjQ3NiA4MjMuMDk0MjIxLTM3Ljg2MjQ3NiA4NDAuMzczNzE2LTIwLjU4Mjk4Mkw4NDAuMzczNzE2LTIwLjU4Mjk4MloiICBob3Jpei1hZHYteD0iMTAyNCIgLz4KCiAgICAKICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ2b2x1bWVsb3ciIHVuaWNvZGU9IiYjNTkwMjY7IiBkPSJNNTE5LjAwNDc5MiA2Mi41MDgxNTggMzg1LjM0NTEwNiAyMzEuOTY5NDUxQzM3Ni42NzMwOSAyNDIuOTY0Mjc4IDM1OC4yOTc3MjYgMjUxLjg3NzM1MSAzNDQuNDI4NDY4IDI1MS44NzczNTFMMjY1LjQ4MTQ4MSAyNTEuODc3MzUxIDI2NS40ODE0ODEgNTE3LjM1ODgzMiAzNDQuNDI4NDY4IDUxNy4zNTg4MzJDMzU4LjM1NDExIDUxNy4zNTg4MzIgMzc2LjYzOTMzNiA1MjYuMjI4OTg2IDM4NS4zMjgyOTIgNTM3LjI0NTM4TDUxOC44NDQ0OTIgNzA2LjUyNDg4MSA1MTkuMDA0NzkyIDYyLjUwODE1OCA1MTkuMDA0NzkyIDYyLjUwODE1OFpNNjA2LjgxNDgxNSA4MzQuNTc3OEM2MDYuODE0ODE1IDkwNC4zNzQxNTggNTcxLjg1NDE5MSA5MTYuNTIwMjE0IDUyOC42MTgyNTYgODYxLjU2NzIyOUwzMjcuNDI3MTYgNjA1Ljg1MjY1OSAyMjcuNTAwMzEgNjA1Ljg1MjY1OUMxOTkuNjAzMDEgNjA1Ljg1MjY1OSAxNzYuOTg3NjU0IDU4My4zMDIyNDUgMTc2Ljk4NzY1NCA1NTUuMzExNDA3TDE3Ni45ODc2NTQgMjEzLjkyNDc4OEMxNzYuOTg3NjU0IDE4Ni4wMTE2MjMgMTk5LjcxMzM3NSAxNjMuNDA1Nzg2IDIyNy42NDU4MTkgMTYzLjQzMzEzMUwzMjYuNjE4MzI3IDE2My41MzAwNTcgNTI4LjU3ODE4MS05Mi41MjYyODlDNTcxLjc4NzA2Mi0xNDcuMzA4OTYxIDYwNi44MTQ4MTUtMTM1LjE0NzA5IDYwNi44MTQ4MTUtNjUuMzQxNjA0TDYwNi44MTQ4MTUgODM0LjU3NzggNjA2LjgxNDgxNSA4MzQuNTc3OFpNNzY0LjUyMTgxMyAxOTUuODY0MzM2Qzg3MC42NjczNzggMzAyLjAwOTc5OSA4NzAuNjY3Mzc4IDQ3NC4xMDU2MDMgNzY0LjUyMTgxMyA1ODAuMjUxMDY2IDc0Ny4yNDIzODIgNTk3LjUzMDU2MSA3MTkuMjI2NzU0IDU5Ny41MzA1NjEgNzAxLjk0NzMyMiA1ODAuMjUxMDY2IDY4NC42Njc3NjUgNTYyLjk3MTU3MiA2ODQuNjY3NzY1IDUzNC45NTU5ODEgNzAxLjk0NzMyMiA1MTcuNjc2NDg3IDc3My41MzM3NzIgNDQ2LjA5IDc3My41MzM3NzIgMzMwLjAyNTM5IDcwMS45NDczMjIgMjU4LjQzODkxNSA2ODQuNjY3NzY1IDI0MS4xNTk0MjEgNjg0LjY2Nzc2NSAyMTMuMTQzODMgNzAxLjk0NzMyMiAxOTUuODY0MzM2IDcxOS4yMjY3NTQgMTc4LjU4NDg0MSA3NDcuMjQyMzgyIDE3OC41ODQ4NDEgNzY0LjUyMTgxMyAxOTUuODY0MzM2TDc2NC41MjE4MTMgMTk1Ljg2NDMzNloiICBob3Jpei1hZHYteD0iMTAyNCIgLz4KCiAgICAKICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ2b2x1bWVvZmYiIHVuaWNvZGU9IiYjNTkwMjg7IiBkPSJNMzU0LjY1OTExMyA2Mi41MDgxNTggMjIwLjk5OTQyNyAyMzEuOTY5NDUxQzIxMi4zMjc0MTEgMjQyLjk2NDI3OCAxOTMuOTUyMDQ3IDI1MS44NzczNTEgMTgwLjA4Mjc4OSAyNTEuODc3MzUxTDEwMS4xMzU4MDIgMjUxLjg3NzM1MSAxMDEuMTM1ODAyIDUxNy4zNTg4MzIgMTgwLjA4Mjc4OSA1MTcuMzU4ODMyQzE5NC4wMDg0MzEgNTE3LjM1ODgzMiAyMTIuMjkzNjU3IDUyNi4yMjg5ODYgMjIwLjk4MjYxMyA1MzcuMjQ1MzhMMzU0LjQ5ODgxMyA3MDYuNTI0ODgxIDM1NC42NTkxMTMgNjIuNTA4MTU4IDM1NC42NTkxMTMgNjIuNTA4MTU4IDM1NC42NTkxMTMgNjIuNTA4MTU4Wk00NDIuNDY5MTM2IDgzNC41Nzc4QzQ0Mi40NjkxMzYgOTA0LjM3NDE1OCA0MDcuNTA4NTEyIDkxNi41MjAyMTQgMzY0LjI3MjU3NyA4NjEuNTY3MjI5TDE2My4wODE0ODEgNjA1Ljg1MjY1OSA2My4xNTQ2MzEgNjA1Ljg1MjY1OUMzNS4yNTczMzEgNjA1Ljg1MjY1OSAxMi42NDE5NzUgNTgzLjMwMjI0NSAxMi42NDE5NzUgNTU1LjMxMTQwN0wxMi42NDE5NzUgMjEzLjkyNDc4OEMxMi42NDE5NzUgMTg2LjAxMTYyMyAzNS4zNjc2OTYgMTYzLjQwNTc4NiA2My4zMDAxNCAxNjMuNDMzMTMxTDE2Mi4yNzI2NDggMTYzLjUzMDA1NyAzNjQuMjMyNTAyLTkyLjUyNjI4OUM0MDcuNDQxMzgzLTE0Ny4zMDg5NjEgNDQyLjQ2OTEzNi0xMzUuMTQ3MDkgNDQyLjQ2OTEzNi02NS4zNDE2MDRMNDQyLjQ2OTEzNiA4MzQuNTc3OCA0NDIuNDY5MTM2IDgzNC41Nzc4Wk03NTguNTE4NTE5IDQyMS45MDg3MzMgNTc5LjczMzkzNCA2MDAuNjkzMjY3IDUxNy4xNTk0NDMgNTM4LjExODY3NSA2OTUuOTQzOTAxIDM1OS4zMzQxNDEgNTE3LjE1OTQ0MyAxODAuNTQ5NjE5IDU3OS43MzM5MzQgMTE3Ljk3NTAyNyA3NTguNTE4NTE5IDI5Ni43NTk1NjEgOTM3LjMwMzEwMyAxMTcuOTc1MDI3IDk5OS44Nzc1OTQgMTgwLjU0OTYxOSA4MjEuMDkzMTM2IDM1OS4zMzQxNDEgOTk5Ljg3NzU5NCA1MzguMTE4Njc1IDkzNy4zMDMxMDMgNjAwLjY5MzI2NyA3NTguNTE4NTE5IDQyMS45MDg3MzMgNzU4LjUxODUxOSA0MjEuOTA4NzMzWiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPgoKICAgIAogICAgPGdseXBoIGdseXBoLW5hbWU9InRyaWFuZ2xlIiB1bmljb2RlPSImIzU5MDIzOyIgZD0iTTI4OCA2NGMtNC44IDAtMTEuMiAxLjYtMTYgNC44LTkuNiA2LjQtMTYgMTYtMTYgMjcuMlY2NzJjMCAxMS4yIDYuNCAyMi40IDE2IDI3LjIgOS42IDYuNCAyMi40IDYuNCAzMiAwbDQ5Ni0yODhjOS42LTYuNCAxNi0xNiAxNi0yNy4ycy02LjQtMjIuNC0xNi0yNy4ybC00OTYtMjg4Yy00LjgtMy4yLTExLjItNC44LTE2LTQuOHogbTMyIDU1MnYtNDY1LjZMNzIwIDM4NCAzMjAgNjE2eiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPgoKICAgIAogICAgPGdseXBoIGdseXBoLW5hbWU9InNocmluayIgdW5pY29kZT0iJiM1OTM2OTsiIGQ9Ik04ODEuNyA3MDguNmwtNDUuMSA0NS4xYy0zLjEgMy4xLTguMiAzLjEtMTEuMyAwTDY2Ny44IDU5Ni4xbC01NC43IDU0LjdjLTQuNyA0LjctMTIuNyAxLjktMTMuNS00LjdMNTc2LjEgNDU3Yy0wLjYtNS4yIDMuNy05LjUgOC45LTguOWwxODkuMiAyMy41YzYuNiAwLjggOS4zIDguOCA0LjcgMTMuNWwtNTQuNyA1NC43IDE1Ny42IDE1Ny42YzMgMyAzIDguMS0wLjEgMTEuMnpNNDM5IDMxOS45bC0xODkuMi0yMy41Yy02LjYtMC44LTkuMy04LjktNC43LTEzLjVsNTQuNy01NC43LTE1Ny41LTE1Ny41Yy0zLjEtMy4xLTMuMS04LjIgMC0xMS4zbDQ1LjEtNDUuMWMzLjEtMy4xIDguMi0zLjEgMTEuMyAwbDE1Ny42IDE1Ny42IDU0LjctNTQuN2M0LjctNC43IDEyLjctMS45IDEzLjUgNC43TDQ0Ny45IDMxMWMwLjcgNS4yLTMuNyA5LjYtOC45IDguOXoiICBob3Jpei1hZHYteD0iMTAyNCIgLz4KCiAgICAKICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ2ZXJ0aWNhbHJpZ2h0IiB1bmljb2RlPSImIzU5MzcwOyIgZD0iTTMyNiA3MzJoLTY0Yy00LjQgMC04LTMuNi04LTh2LTY4OGMwLTQuNCAzLjYtOCA4LThoNjRjNC40IDAgOCAzLjYgOCA4VjcyNGMwIDQuNC0zLjYgOC04IDh6TTc3MCA2NTkuNlY3MzJjMCA2LjgtNy45IDEwLjUtMTMuMSA2LjFMMzM1IDM4NGw0MjEuOS0zNTQuMWM1LjItNC40IDEzLjEtMC43IDEzLjEgNi4xdjcyLjRjMCA5LjQtNC4yIDE4LjQtMTEuNCAyNC41TDQ1OS40IDM4NGwyOTkuMiAyNTEuMWM3LjIgNi4xIDExLjQgMTUuMSAxMS40IDI0LjV6IiAgaG9yaXotYWR2LXg9IjEwMjQiIC8+CgogICAgCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idmVydGljYWxsZWZ0IiB1bmljb2RlPSImIzU5MzcxOyIgZD0iTTc2MiA3MzJoLTY0Yy00LjQgMC04LTMuNi04LTh2LTY4OGMwLTQuNCAzLjYtOCA4LThoNjRjNC40IDAgOCAzLjYgOCA4VjcyNGMwIDQuNC0zLjYgOC04IDh6TTI1NCA3MzJ2LTcyLjRjMC05LjUgNC4yLTE4LjQgMTEuNC0yNC41TDU2NC42IDM4NCAyNjUuNCAxMzIuOWMtNy4yLTYuMS0xMS40LTE1LTExLjQtMjQuNVYzNmMwLTYuOCA3LjktMTAuNSAxMy4xLTYuMUw2ODkgMzg0IDI2Ny4xIDczOC4xYy01LjIgNC40LTEzLjEgMC43LTEzLjEtNi4xeiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPgoKICAgIAogICAgPGdseXBoIGdseXBoLW5hbWU9InJpZ2h0IiB1bmljb2RlPSImIzU5MzcyOyIgZD0iTTc2NS43IDQwOS4yTDMxNC45IDc2MS4zYy01LjMgNC4xLTEyLjkgMC40LTEyLjktNi4zdi03Ny4zYzAtNC45IDIuMy05LjYgNi4xLTEyLjZsMzYwLTI4MS4xLTM2MC0yODEuMWMtMy45LTMtNi4xLTcuNy02LjEtMTIuNlYxM2MwLTYuNyA3LjctMTAuNCAxMi45LTYuM2w0NTAuOCAzNTIuMWMxNi40IDEyLjggMTYuNCAzNy42IDAgNTAuNHoiICBob3Jpei1hZHYteD0iMTAyNCIgLz4KCiAgICAKICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJsZWZ0IiB1bmljb2RlPSImIzU5MzczOyIgZD0iTTcyNCA2NzcuN1Y3NTVjMCA2LjctNy43IDEwLjQtMTIuOSA2LjNMMjYwLjMgNDA5LjJjLTE2LjQtMTIuOC0xNi40LTM3LjUgMC01MC4zbDQ1MC44LTM1Mi4xYzUuMy00LjEgMTIuOS0wLjQgMTIuOSA2LjN2NzcuM2MwIDQuOS0yLjMgOS42LTYuMSAxMi42bC0zNjAgMjgxIDM2MCAyODEuMWMzLjggMyA2LjEgNy43IDYuMSAxMi42eiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPgoKICAgIAogICAgPGdseXBoIGdseXBoLW5hbWU9InBhdXNlIiB1bmljb2RlPSImIzU5MzkwOyIgZD0iTTMwNCA3MjBoODB2LTY3MmgtODB6TTcxMiA3MjBoLTY0Yy00LjQgMC04LTMuNi04LTh2LTY1NmMwLTQuNCAzLjYtOCA4LThoNjRjNC40IDAgOCAzLjYgOCA4VjcxMmMwIDQuNC0zLjYgOC04IDh6IiAgaG9yaXotYWR2LXg9IjEwMjQiIC8+CgogICAgCgoKICA8L2ZvbnQ+CjwvZGVmcz48L3N2Zz4K"

/***/ }),

/***/ "./src/renderer/iconfont/iconfont.ttf?t=1529159995043":
/*!************************************************************!*\
  !*** ./src/renderer/iconfont/iconfont.ttf?t=1529159995043 ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/ttf;base64,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"

/***/ }),

/***/ "./src/renderer/player.tsx":
/*!*********************************!*\
  !*** ./src/renderer/player.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
__webpack_require__(/*! ./css/App.css */ "./src/renderer/css/App.css");
var MainPlayer = /** @class */ (function (_super) {
    __extends(MainPlayer, _super);
    function MainPlayer(props) {
        return _super.call(this, props) || this;
    }
    MainPlayer.prototype.render = function () {
        var _this = this;
        var _a = this.props, handlePlaying = _a.handlePlaying, handlePause = _a.handlePause, handleVolumeChange = _a.handleVolumeChange;
        return (React.createElement("video", { width: '100%', height: '100%', onPlaying: handlePlaying, onPause: handlePause, onVolumeChange: handleVolumeChange, autoPlay: true, poster: 'file://C:\\Users\\aston\\Pictures\\iCloud%20Photos\\Downloads\\539A94D3-EAA6-4C16-9C01-A439C0D9C2D6-9129-000007B58BE705B1_tmp.jpg', ref: function (ref) { return _this.video = ref; } }));
    };
    return MainPlayer;
}(React.Component));
exports.default = MainPlayer;


/***/ }),

/***/ "./src/renderer/playpanel.tsx":
/*!************************************!*\
  !*** ./src/renderer/playpanel.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
__webpack_require__(/*! ./iconfont/iconfont.css */ "./src/renderer/iconfont/iconfont.css");
var PlayPanel = /** @class */ (function (_super) {
    __extends(PlayPanel, _super);
    function PlayPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayPanel.prototype.handlePlayOperation = function (index) {
        var video = document.querySelector('video');
        switch (index) {
            case 1:
                {
                    var time = Math.max(0, video.currentTime - 10);
                    video.currentTime = time;
                }
                break;
            case 2:
                {
                    if (video.paused) {
                        video.play();
                    }
                    else {
                        video.pause();
                    }
                }
                break;
            case 3:
                {
                    var time = Math.min(video.duration, video.currentTime + 10);
                    video.currentTime = time;
                }
                break;
            default:
                break;
        }
    };
    PlayPanel.prototype.render = function () {
        var paused = this.props.paused;
        return (React.createElement("ul", { id: 'play-panel' },
            React.createElement("li", { onClick: this.handlePlayOperation.bind(this, 1) },
                React.createElement("i", { className: 'icon iconfont icon-left' })),
            React.createElement("li", { onClick: this.handlePlayOperation.bind(this, 2) },
                React.createElement("i", { className: "icon iconfont " + (paused ? 'icon-triangle' : 'icon-pause') })),
            React.createElement("li", { onClick: this.handlePlayOperation.bind(this, 3) },
                React.createElement("i", { className: 'icon iconfont icon-right' }))));
    };
    return PlayPanel;
}(React.Component));
exports.default = PlayPanel;


/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map