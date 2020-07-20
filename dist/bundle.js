(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Alert"] = factory();
	else
		root["Alert"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/icon.svg":
/*!*************************!*\
  !*** ./assets/icon.svg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 20 20\\\" class=\\\"fill-current h-6 w-6\\\" fill=\\\"#000\\\" height=\\\"18\\\" width=\\\"18\\\"><path d=\\\"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z\\\"></path></svg>\"\n\n//# sourceURL=webpack://Alert/./assets/icon.svg?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".cdx-alert {\\n  position: relative;\\n  padding: 10px;\\n  border-radius: 5px;\\n  margin-bottom: 10px;\\n}\\n\\n.cdx-alert__message {\\n  outline: none;\\n}\\n\\n.cdx-alert [contentEditable=\\\"true\\\"][data-placeholder]::before {\\n  position: absolute;\\n  content: attr(data-placeholder);\\n  color: #707684;\\n  font-weight: normal;\\n  opacity: 0;\\n}\\n\\n.cdx-alert [contentEditable=\\\"true\\\"][data-placeholder]:empty::before {\\n  opacity: 1;\\n}\\n\\n.cdx-alert [contentEditable=\\\"true\\\"][data-placeholder]:empty:focus::before {\\n  opacity: 0;\\n}\\n\\n.cdx-alert-primary {\\n  background-color: #ebf8ff;\\n  border: 1px solid #4299e1;\\n  color: #2b6cb0;\\n}\\n\\n.cdx-alert-secondary {\\n  background-color: #f7fafc;\\n  border: 1px solid #cbd5e0;\\n  color: #222731;\\n}\\n\\n.cdx-alert-info {\\n  background-color: #e6fdff;\\n  border: 1px solid #4cd4ce;\\n  color: #00727c;\\n}\\n\\n.cdx-alert-success {\\n  background-color: #f0fff4;\\n  border: 1px solid #68d391;\\n  color: #2f855a;\\n}\\n\\n.cdx-alert-warning {\\n  background-color: #fffaf0;\\n  border: 1px solid #ed8936;\\n  color: #c05621;\\n}\\n\\n.cdx-alert-danger {\\n  background-color: #fff5f5;\\n  border: 1px solid #fc8181;\\n  color: #c53030;\\n}\\n\\n.cdx-alert-light {\\n  background-color: #fff;\\n  border: 1px solid #edf2f7;\\n  color: #1a202c;\\n}\\n\\n.cdx-alert-dark {\\n  background-color: #2d3748;\\n  border: 1px solid #1a202c;\\n  color: #d3d3d3;\\n}\\n\\n.cdx-alert.cdx-settings-button {\\n  margin: 3px;\\n  width: 28px;\\n  height: 28px;\\n  opacity: 0.5;\\n}\\n\\n.cdx-alert.cdx-settings-button:hover {\\n  opacity: 1;\\n}\\n\\n.cdx-alert.cdx-settings-button--active,\\n.cdx-alert.ce-settings__button--focused {\\n  font-weight: bold;\\n  opacity: 0.9;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://Alert/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://Alert/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Alert/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://Alert/./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Alert; });\n/* harmony import */ var _assets_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icon.svg */ \"./assets/icon.svg\");\n/* harmony import */ var _assets_icon_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icon_svg__WEBPACK_IMPORTED_MODULE_0__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * Alert block for the Editor.js.\n *\n * @author Vishal Telangre\n * @license MIT\n */\n\n/**\n * Build styles\n */\n__webpack_require__(/*! ./index.css */ \"./src/index.css\").toString();\n/**\n * Import Tool's icon\n */\n\n\n\n/**\n * @class Alert\n * @classdesc Alert Tool for Editor.js\n * @property {AlertData} data - Alert Tool`s input and output data\n * @property {object} api - Editor.js API instance\n *\n * @typedef {object} AlertData\n * @description Alert Tool`s input and output data\n * @property {string} type - Alert type\n * @property {string} message - Alert message\n *\n * @typedef {object} AlertConfig\n * @description Alert Tool`s initial configuration\n * @property {string} defaultType - default Alert type\n * @property {string} messagePlaceholder - placeholder to show in Alert`s message input\n */\n\nvar Alert = /*#__PURE__*/function () {\n  _createClass(Alert, [{\n    key: \"CSS\",\n\n    /**\n     * Alert Tool`s styles\n     *\n     * @returns {Object}\n     */\n    get: function get() {\n      return {\n        settingsButton: this.api.styles.settingsButton,\n        settingsButtonActive: this.api.styles.settingsButtonActive,\n        wrapper: \"cdx-alert\",\n        wrapperForType: function wrapperForType(type) {\n          return \"cdx-alert-\".concat(type);\n        },\n        message: \"cdx-alert__message\"\n      };\n    }\n    /**\n     * Render plugin`s main Element and fill it with saved data\n     *\n     * @param {AlertData} data — previously saved data\n     * @param {AlertConfig} config — user config for Tool\n     * @param {Object} api - Editor.js API\n     */\n\n  }], [{\n    key: \"toolbox\",\n\n    /**\n     * Get Toolbox settings\n     *\n     * @public\n     * @returns {string}\n     */\n    get: function get() {\n      return {\n        icon: _assets_icon_svg__WEBPACK_IMPORTED_MODULE_0___default.a,\n        title: \"Alert\"\n      };\n    }\n    /**\n     * Allow to press Enter inside the Alert block\n     * @public\n     * @returns {boolean}\n     */\n\n  }, {\n    key: \"enableLineBreaks\",\n    get: function get() {\n      return true;\n    }\n    /**\n     * Default Alert type\n     *\n     * @public\n     * @returns {string}\n     */\n\n  }, {\n    key: \"DEFAULT_TYPE\",\n    get: function get() {\n      return \"info\";\n    }\n    /**\n     * Default placeholder for Alert message\n     *\n     * @public\n     * @returns {string}\n     */\n\n  }, {\n    key: \"DEFAULT_MESSAGE_PLACEHOLDER\",\n    get: function get() {\n      return \"Type here...\";\n    }\n    /**\n     * Supported Alert types\n     *\n     * @public\n     * @returns {array}\n     */\n\n  }, {\n    key: \"ALERT_TYPES\",\n    get: function get() {\n      return [\"primary\", \"secondary\", \"info\", \"success\", \"warning\", \"danger\", \"light\", \"dark\"];\n    }\n  }]);\n\n  function Alert(_ref) {\n    var data = _ref.data,\n        config = _ref.config,\n        api = _ref.api;\n\n    _classCallCheck(this, Alert);\n\n    this.api = api;\n    this.defaultType = config.defaultType || Alert.DEFAULT_TYPE;\n    this.messagePlaceholder = config.messagePlaceholder || Alert.DEFAULT_MESSAGE_PLACEHOLDER;\n    this.data = {\n      type: data.type || \"\",\n      message: data.message || \"\"\n    };\n    this.container = undefined;\n  }\n  /**\n   * Create Alert Tool container\n   *\n   * @returns {Element}\n   */\n\n\n  _createClass(Alert, [{\n    key: \"render\",\n    value: function render() {\n      var containerClasses = [this.CSS.wrapper, this.CSS.wrapperForType(this.data.type)];\n      this.container = this._make(\"div\", containerClasses);\n\n      var messageEl = this._make(\"div\", [this.CSS.message], {\n        contentEditable: true,\n        innerHTML: this.data.message\n      });\n\n      messageEl.dataset.placeholder = this.messagePlaceholder;\n      this.container.appendChild(messageEl);\n      return this.container;\n    }\n    /**\n     * Create Block's settings block\n     *\n     * @returns {HTMLElement}\n     */\n\n  }, {\n    key: \"renderSettings\",\n    value: function renderSettings() {\n      var _this = this;\n\n      var settingsContainer = this._make(\"div\");\n\n      Alert.ALERT_TYPES.forEach(function (type) {\n        var settingsButton = _this._make(\"div\", [_this.CSS.settingsButton, _this.CSS.wrapper, _this.CSS.wrapperForType(type)], {\n          innerHTML: \"A\"\n        });\n\n        if (_this.data.type === type) {\n          // Highlight current type button\n          settingsButton.classList.add(_this.CSS.settingsButtonActive);\n        } // Set up click handler\n\n\n        settingsButton.addEventListener(\"click\", function () {\n          _this._changeAlertType(type); // Un-highlight previous type button\n\n\n          settingsContainer.querySelectorAll(\".\".concat(_this.CSS.settingsButton)).forEach(function (button) {\n            return button.classList.remove(_this.CSS.settingsButtonActive);\n          }); // and highlight the clicked type button\n\n          settingsButton.classList.add(_this.CSS.settingsButtonActive);\n        });\n        settingsContainer.appendChild(settingsButton);\n      });\n      return settingsContainer;\n    }\n    /**\n     * Helper for changing style of Alert block with the selected Alert type\n     *\n     * @param {string} newType - new Alert type to be applied to the block\n     * @private\n     */\n\n  }, {\n    key: \"_changeAlertType\",\n    value: function _changeAlertType(newType) {\n      var _this2 = this;\n\n      // Save new type\n      this.data.type = newType;\n      Alert.ALERT_TYPES.forEach(function (type) {\n        var alertClass = _this2.CSS.wrapperForType(type); // Remove the old Alert type class\n\n\n        _this2.container.classList.remove(alertClass);\n\n        if (newType === type) {\n          // Add an Alert class for the selected Alert type\n          _this2.container.classList.add(alertClass);\n        }\n      });\n    }\n    /**\n     * Extract Alert data from Alert Tool element\n     *\n     * @param {HTMLDivElement} alertElement - element to save\n     * @returns {AlertData}\n     */\n\n  }, {\n    key: \"save\",\n    value: function save(alertElement) {\n      var messageEl = alertElement.querySelector(\".\".concat(this.CSS.message));\n      return _objectSpread(_objectSpread({}, this.data), {}, {\n        message: messageEl.innerHTML\n      });\n    }\n    /**\n     * Helper for making Elements with attributes\n     *\n     * @param  {string} tagName           - new Element tag name\n     * @param  {array|string} classNames  - list or name of CSS classname(s)\n     * @param  {Object} attributes        - any attributes\n     * @returns {Element}\n     * @private\n     */\n\n  }, {\n    key: \"_make\",\n    value: function _make(tagName) {\n      var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      var el = document.createElement(tagName);\n\n      if (Array.isArray(classNames)) {\n        var _el$classList;\n\n        (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classNames));\n      } else if (classNames) {\n        el.classList.add(classNames);\n      }\n\n      for (var attrName in attributes) {\n        el[attrName] = attributes[attrName];\n      }\n\n      return el;\n    }\n    /**\n     * Fill Alert's message with the pasted content\n     *\n     * @param {PasteEvent} event - event with pasted content\n     */\n\n  }, {\n    key: \"onPaste\",\n    value: function onPaste(event) {\n      var data = event.detail.data;\n      this.data = {\n        type: \"info\",\n        message: data.innerHTML || \"\"\n      };\n    }\n    /**\n     * Used by Editor.js paste handling API.\n     * Provides configuration to handle rich HTML tags.\n     *\n     * @returns {{handler: (function(HTMLElement): {text: string}), tags: string[]}}\n     */\n\n  }], [{\n    key: \"pasteConfig\",\n    get: function get() {\n      return {\n        tags: [\"A\", \"BR\", \"STRONG\", \"EM\", \"B\"]\n      };\n    }\n    /**\n     * Allow Alert to be converted to/from other blocks\n     */\n\n  }, {\n    key: \"conversionConfig\",\n    get: function get() {\n      var _this3 = this;\n\n      return {\n        // export Alert's message for other blocks\n        \"export\": function _export(data) {\n          return data.message;\n        },\n        // fill Alert's message from other block's export string\n        \"import\": function _import(string) {\n          return {\n            message: string,\n            type: _this3.DEFAULT_TYPE\n          };\n        }\n      };\n    }\n    /**\n     * Sanitizer config for Alert Tool saved data\n     * @returns {Object}\n     */\n\n  }, {\n    key: \"sanitize\",\n    get: function get() {\n      return {\n        type: {}\n      };\n    }\n  }]);\n\n  return Alert;\n}();\n\n\n\n//# sourceURL=webpack://Alert/./src/index.js?");

/***/ })

/******/ })["default"];
});
