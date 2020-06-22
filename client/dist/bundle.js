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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/index.js":
/*!*****************************!*\
  !*** ./client/src/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/client/src/index.js: Unexpected token (7:4)\\n\\n\\u001b[0m \\u001b[90m  5 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  6 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  7 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  8 | \\u001b[39m  document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'search'\\u001b[39m)\\u001b[0m\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m\\u001b[0m\\n    at Parser._raise (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:754:17)\\n    at Parser.raiseWithData (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:747:17)\\n    at Parser.raise (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:741:17)\\n    at Parser.unexpected (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:8844:16)\\n    at Parser.parseExprAtom (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:10167:20)\\n    at Parser.parseExprSubscripts (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:9693:23)\\n    at Parser.parseMaybeUnary (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:9673:21)\\n    at Parser.parseExprOps (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:9543:23)\\n    at Parser.parseMaybeConditional (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:9516:23)\\n    at Parser.parseMaybeAssign (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:9471:21)\\n    at Parser.parseExprListItem (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:10829:18)\\n    at Parser.parseCallExpressionArguments (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:9887:22)\\n    at Parser.parseSubscript (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:9787:31)\\n    at Parser.parseSubscripts (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:9716:19)\\n    at Parser.parseExprSubscripts (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:9699:17)\\n    at Parser.parseMaybeUnary (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:9673:21)\\n    at Parser.parseExprOps (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:9543:23)\\n    at Parser.parseMaybeConditional (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:9516:23)\\n    at Parser.parseMaybeAssign (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:9471:21)\\n    at Parser.parseExpression (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:9423:23)\\n    at Parser.parseStatementContent (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:11322:23)\\n    at Parser.parseStatement (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:11193:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:11768:25)\\n    at Parser.parseBlockBody (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:11754:10)\\n    at Parser.parseTopLevel (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:11124:10)\\n    at Parser.parse (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:12826:10)\\n    at parse (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/parser/lib/index.js:12879:38)\\n    at parser (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzLmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/index.js\n");

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./client/src/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jonathanzurita/Desktop/New SearchBar/Jonathan-SearchBarHeaderFooterServer/client/src/index.js */"./client/src/index.js");


/***/ })

/******/ });