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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/app.module */ \"./src/app/app.module.js\");\n\nangular.module('wa', [_src_app_app_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].name, 'wa.templates']);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/app/app.controller.js":
/*!***********************************!*\
  !*** ./src/app/app.controller.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar waAppController = function waAppController($scope) {\n  \"ngInject\";\n\n  $scope.title = 'this is the waApp!';\n};\n\nwaAppController.$inject = [\"$scope\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (waAppController);\n\n//# sourceURL=webpack:///./src/app/app.controller.js?");

/***/ }),

/***/ "./src/app/app.directive.js":
/*!**********************************!*\
  !*** ./src/app/app.directive.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar waApp = function waApp() {\n  return {\n    templateUrl: 'src/app/app.template.html',\n    controller: 'waAppController'\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (waApp);\n\n//# sourceURL=webpack:///./src/app/app.directive.js?");

/***/ }),

/***/ "./src/app/app.module.js":
/*!*******************************!*\
  !*** ./src/app/app.module.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.directive */ \"./src/app/app.directive.js\");\n/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.controller */ \"./src/app/app.controller.js\");\n/* harmony import */ var _counter_counter_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../counter/counter.module */ \"./src/counter/counter.module.js\");\n\n\n\nvar waAppModule = angular.module('wa.app', [_counter_counter_module__WEBPACK_IMPORTED_MODULE_2__[\"default\"].name]).controller('waAppController', _app_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).directive('waApp', _app_directive__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (waAppModule);\n\n//# sourceURL=webpack:///./src/app/app.module.js?");

/***/ }),

/***/ "./src/counter/counter.controller.js":
/*!*******************************************!*\
  !*** ./src/counter/counter.controller.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar waCounterController = function waCounterController($scope) {\n  $scope.count = 0;\n\n  $scope.increment = function () {\n    $scope.count = $scope.count + 1;\n  };\n\n  $scope.decrement = function () {\n    $scope.count = $scope.count - 1;\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (waCounterController);\n\n//# sourceURL=webpack:///./src/counter/counter.controller.js?");

/***/ }),

/***/ "./src/counter/counter.directive.js":
/*!******************************************!*\
  !*** ./src/counter/counter.directive.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar waCounter = function waCounter() {\n  return {\n    templateUrl: 'src/counter/counter.template.html',\n    controller: 'waCounterController'\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (waCounter);\n\n//# sourceURL=webpack:///./src/counter/counter.directive.js?");

/***/ }),

/***/ "./src/counter/counter.module.js":
/*!***************************************!*\
  !*** ./src/counter/counter.module.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _counter_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter.directive */ \"./src/counter/counter.directive.js\");\n/* harmony import */ var _counter_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.controller */ \"./src/counter/counter.controller.js\");\n\n\nvar waCounterModule = angular.module('wa.counter', []).controller('waCounterController', _counter_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).directive('waCounter', _counter_directive__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (waCounterModule);\n\n//# sourceURL=webpack:///./src/counter/counter.module.js?");

/***/ })

/******/ });