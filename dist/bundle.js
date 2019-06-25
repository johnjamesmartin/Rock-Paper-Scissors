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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game/elementConstructor/gameResult.js":
/*!***************************************************!*\
  !*** ./src/game/elementConstructor/gameResult.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ConstructResult; });\n/* harmony import */ var _labels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../labels */ \"./src/labels.js\");\n\n\nfunction ConstructResult(o) {\n  return `<h1 class=\"${o.className}\">${o.title}</h1>\n  <i class=\"${o.icon}\"></i>\n  <p>${_labels__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ui.computerChose} <strong>${o.cpu}</strong></p>`;\n}\n\n\n//# sourceURL=webpack:///./src/game/elementConstructor/gameResult.js?");

/***/ }),

/***/ "./src/game/getComputerChoice.js":
/*!***************************************!*\
  !*** ./src/game/getComputerChoice.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getComputerChoice; });\n/* harmony import */ var _labels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../labels */ \"./src/labels.js\");\n\n\nfunction getComputerChoice() {\n  const rand = Math.random();\n  if (rand < 0.34) {\n    return _labels__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rock;\n  } else if (rand <= 0.67) {\n    return _labels__WEBPACK_IMPORTED_MODULE_0__[\"default\"].paper;\n  } else {\n    return _labels__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scissors;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/game/getComputerChoice.js?");

/***/ }),

/***/ "./src/game/getWinner.js":
/*!*******************************!*\
  !*** ./src/game/getWinner.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getWinner; });\n/* harmony import */ var _labels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../labels */ \"./src/labels.js\");\n\n\nfunction getWinner(p, c) {\n  if (p === c) {\n    return _labels__WEBPACK_IMPORTED_MODULE_0__[\"default\"].draw;\n  } else if (p === _labels__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rock) {\n    return c === _labels__WEBPACK_IMPORTED_MODULE_0__[\"default\"].paper ? _labels__WEBPACK_IMPORTED_MODULE_0__[\"default\"].computer : _labels__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player;\n  } else if (p === _labels__WEBPACK_IMPORTED_MODULE_0__[\"default\"].paper) {\n    return c === _labels__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scissors ? _labels__WEBPACK_IMPORTED_MODULE_0__[\"default\"].computer : _labels__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player;\n  } else if (p === _labels__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scissors) {\n    return c === _labels__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rock ? _labels__WEBPACK_IMPORTED_MODULE_0__[\"default\"].computer : _labels__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/game/getWinner.js?");

/***/ }),

/***/ "./src/game/restart.js":
/*!*****************************!*\
  !*** ./src/game/restart.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return restartGame; });\n/* harmony import */ var _labels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../labels */ \"./src/labels.js\");\n/* harmony import */ var _scoreboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scoreboard */ \"./src/game/scoreboard.js\");\n\n\n\nfunction restartGame() {\n  _scoreboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].player = 0;\n  _scoreboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].computer = 0;\n  score.innerHTML = `\n    <div>${_labels__WEBPACK_IMPORTED_MODULE_0__[\"default\"].player}: 0</div>\n    <div>${_labels__WEBPACK_IMPORTED_MODULE_0__[\"default\"].computer}: 0</div>\n  `;\n}\n\n\n//# sourceURL=webpack:///./src/game/restart.js?");

/***/ }),

/***/ "./src/game/scoreboard.js":
/*!********************************!*\
  !*** ./src/game/scoreboard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst scoreboard = {\n  player: 0,\n  computer: 0\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (scoreboard);\n\n\n//# sourceURL=webpack:///./src/game/scoreboard.js?");

/***/ }),

/***/ "./src/game/showWinner.js":
/*!********************************!*\
  !*** ./src/game/showWinner.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return showWinner; });\n/* harmony import */ var _labels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../labels */ \"./src/labels.js\");\n/* harmony import */ var _scoreboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scoreboard */ \"./src/game/scoreboard.js\");\n/* harmony import */ var _elementConstructor_gameResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementConstructor/gameResult */ \"./src/game/elementConstructor/gameResult.js\");\n\n\n\n\nconst modal = document.querySelector('.modal');\n\nfunction showWinner(winner, computerChoice) {\n  if (winner === 'player') {\n    _scoreboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].player++;\n    result.innerHTML = Object(_elementConstructor_gameResult__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      title: 'You Win',\n      className: 'text-win',\n      icon: `fas fa-hand-${computerChoice} fa-10x`,\n      cpu: computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)\n    });\n  } else if (winner === _labels__WEBPACK_IMPORTED_MODULE_0__[\"default\"].computer) {\n    _scoreboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].computer++;\n    result.innerHTML = Object(_elementConstructor_gameResult__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      title: 'You Lose',\n      className: 'text-lose',\n      icon: `fas fa-hand-${computerChoice} fa-10x`,\n      cpu: computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)\n    });\n  } else {\n    result.innerHTML = Object(_elementConstructor_gameResult__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      title: \"It's a Draw!\",\n      className: '',\n      icon: `fas fa-hand-${computerChoice} fa-10x`,\n      cpu: computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)\n    });\n  }\n\n  /* Update score width by percentage:\n   *******************************************/\n  let a = _scoreboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].player;\n  let b = _scoreboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].computer;\n  let playerPercentage = (a / (a + b)) * 100;\n  let computerPercentage = (b / (a + b)) * 100;\n  score.innerHTML = `\n    <div style=\"width:${playerPercentage}%;\">Player: ${_scoreboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].player}</div>\n    <div style=\"width:${computerPercentage}%;\">Computer: ${\n    _scoreboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].computer\n  }</div>\n    `;\n\n  modal.style.display = 'block';\n}\n\n\n//# sourceURL=webpack:///./src/game/showWinner.js?");

/***/ }),

/***/ "./src/game/takeTurn.js":
/*!******************************!*\
  !*** ./src/game/takeTurn.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return takeTurn; });\n/* harmony import */ var _getComputerChoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputerChoice */ \"./src/game/getComputerChoice.js\");\n/* harmony import */ var _getWinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWinner */ \"./src/game/getWinner.js\");\n/* harmony import */ var _showWinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showWinner */ \"./src/game/showWinner.js\");\n\n\n\n\nfunction takeTurn(e) {\n  restart.style.display = 'inline-block';\n  const playerChoice = e.target.id;\n  const computerChoice = Object(_getComputerChoice__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const winner = Object(_getWinner__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(playerChoice, computerChoice);\n  Object(_showWinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(winner, computerChoice);\n}\n\n\n//# sourceURL=webpack:///./src/game/takeTurn.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_takeTurn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/takeTurn */ \"./src/game/takeTurn.js\");\n/* harmony import */ var _modal_clear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/clear */ \"./src/modal/clear.js\");\n/* harmony import */ var _game_restart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/restart */ \"./src/game/restart.js\");\n\n\n\n\nconst choices = document.querySelectorAll('.choice');\nconst restart = document.getElementById('restart');\n\n/* Event listeners:\n *******************************************/\nchoices.forEach(choice => choice.addEventListener('click', _game_takeTurn__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\nwindow.addEventListener('click', _modal_clear__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nrestart.addEventListener('click', _game_restart__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/labels.js":
/*!***********************!*\
  !*** ./src/labels.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst labels = {\n  computer: 'computer',\n  player: 'player',\n  rock: 'rock',\n  paper: 'paper',\n  scissors: 'scissors',\n  draw: 'draw',\n  ui: {\n    computerChose: 'Computer Chose'\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (labels);\n\n\n//# sourceURL=webpack:///./src/labels.js?");

/***/ }),

/***/ "./src/modal/clear.js":
/*!****************************!*\
  !*** ./src/modal/clear.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return clearModal; });\nconst modal = document.querySelector('.modal');\n\nfunction clearModal(e) {\n  if (e.target == modal) {\n    modal.style.display = 'none';\n  }\n}\n\n\n//# sourceURL=webpack:///./src/modal/clear.js?");

/***/ })

/******/ });