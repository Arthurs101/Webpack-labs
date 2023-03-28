/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/scss/main.scss":
/*!********************************!*\
  !*** ./src/app/scss/main.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpacklab/./src/app/scss/main.scss?");

/***/ }),

/***/ "./src/CustomElements/BookCard/BookCard.html":
/*!***************************************************!*\
  !*** ./src/CustomElements/BookCard/BookCard.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"\\r\\n<div class=\\\"super-container\\\">\\r\\n    <div class=\\\"background\\\"></div>\\r\\n    <div class=\\\"addorn\\\">\\r\\n    </div>\\r\\n    <div class=\\\"data-book\\\">\\r\\n        <a id=\\\"url\\\" href=\\\"\\\">\\r\\n            <h1 id=\\\"title\\\">\\r\\n                Book Title\\r\\n            </h1>\\r\\n        </a>\\r\\n        <hr>\\r\\n        <h2 id=\\\"author\\\">\\r\\n            Book Author\\r\\n        </h2>\\r\\n        <hr>\\r\\n        <p id = \\\"description\\\">\\r\\n            Desc\\r\\n        </p>\\r\\n    </div>\\r\\n</div>\\r\\n\");\n\n//# sourceURL=webpack://webpacklab/./src/CustomElements/BookCard/BookCard.html?");

/***/ }),

/***/ "./src/CustomElements/BookCard/BookCardStyle.css":
/*!*******************************************************!*\
  !*** ./src/CustomElements/BookCard/BookCardStyle.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"a {\\n  background: solid;\\n  position: relative;\\n  height: 600px;\\n  width: 600px;\\n}\\n\\n.super-container {\\n  display: block;\\n  padding: 10px;\\n  height: 600px;\\n  width: 600px;\\n}\\n.super-container .addorn {\\n  position: relative;\\n  top: -595px;\\n  left: 5px;\\n  background: #3b3b3b;\\n  height: 590px;\\n  width: 590px;\\n  border-radius: 5rem;\\n}\\n.super-container .background {\\n  position: relative;\\n  height: 600px;\\n  width: 600px;\\n  background: linear-gradient(120deg, #ff00b3, #007bff, #00f7ff, #00ff55, #33ff00, #e5ff00, #ff0000, #ff00b3);\\n  border-radius: 5rem;\\n  background-size: 400% 400%;\\n  animation-name: spinner;\\n  animation-duration: 10s;\\n  animation-iteration-count: infinite;\\n  animation-timing-function: ease-in-out;\\n}\\n@keyframes spinner {\\n  0%, 100% {\\n    background-position: 0% 400%;\\n  }\\n  50% {\\n    background-position: 400% 0%;\\n  }\\n}\\n.super-container:hover .background {\\n  background: #ff0000;\\n}\\n.super-container .data-book {\\n  position: relative;\\n  top: -1150px;\\n  left: 70px;\\n  max-width: 480px;\\n  max-height: 480px;\\n  overflow-y: auto;\\n}\\n.super-container .data-book hr {\\n  overflow-wrap: break-word;\\n}\\n.super-container .data-book h1 {\\n  color: white;\\n  font-family: \\\"Courier New\\\", Courier, monospace;\\n  overflow-wrap: break-word;\\n}\\n.super-container .data-book h2 {\\n  color: white;\\n  font-family: \\\"Courier New\\\", Courier, monospace;\\n  overflow-wrap: break-word;\\n}\\n.super-container .data-book p {\\n  color: white;\\n  overflow-wrap: break-word;\\n}/*# sourceMappingURL=BookCardStyle.css.map */\");\n\n//# sourceURL=webpack://webpacklab/./src/CustomElements/BookCard/BookCardStyle.css?");

/***/ }),

/***/ "./src/Biblioteca/popularBooks.js":
/*!****************************************!*\
  !*** ./src/Biblioteca/popularBooks.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_app_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../src/app/scss/main.scss */ \"./src/app/scss/main.scss\");\n/* harmony import */ var _src_CustomElements_BookCard_BookCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../src/CustomElements/BookCard/BookCard */ \"./src/CustomElements/BookCard/BookCard.js\");\n\r\n\r\n\r\n//define custom elementos\r\ncustomElements.define('book-card', _src_CustomElements_BookCard_BookCard__WEBPACK_IMPORTED_MODULE_1__.Bookcard)\r\nlet books = [{title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes', \r\ndescription: 'El ingenioso hidalgo don Quijote de la Mancha narra las aventuras de Alonso Quijano,  un hidalgo pobre que de tanto leer novelas de caballería acaba enloqueciendo...' \r\n,url: '/dist/Books/Quijote.html'\r\n}\r\n,{\r\n    title: 'Sinsajo', author: 'Suzanne Collins', \r\n    description: ' Después de ser rescatada de la arena en los 75º Juegos del Hambre, Katniss Everdeen, junto con otros dos Vencedores, Beetee y Finnick Odair, son llevados al Distrito 13' ,\r\n    url:'/dist/Books/Sin_Ajo.html'\r\n},{\r\n    title: 'El Mundo de Sofía', author: 'Jostein Gaarder', \r\n    description: 'una niña de 15 años ecibe una carta anónima que le plantea una interrogante existencial.....' ,\r\n    url: '/dist/Books/sofworld.html'\r\n}]\r\n    for (let i = 0; i < 3 ; i++) {\r\n        const book = document.createElement('book-card');\r\n        book.setAttribute('data', JSON.stringify(books[i]))\r\n        const wrap = document.createElement('div')\r\n        wrap.appendChild(book)\r\n        wrap.style.width = '30%';\r\n        wrap.style.height = '30%';\r\n        document.getElementById(\"main-container\").appendChild(wrap);\r\n    }\r\n     \r\n \r\n\r\n\n\n//# sourceURL=webpack://webpacklab/./src/Biblioteca/popularBooks.js?");

/***/ }),

/***/ "./src/CustomElements/BookCard/BookCard.js":
/*!*************************************************!*\
  !*** ./src/CustomElements/BookCard/BookCard.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Bookcard\": () => (/* binding */ Bookcard)\n/* harmony export */ });\n/* harmony import */ var _BookCardStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookCardStyle.css */ \"./src/CustomElements/BookCard/BookCardStyle.css\");\n/* harmony import */ var _BookCard_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookCard.html */ \"./src/CustomElements/BookCard/BookCard.html\");\n\r\n\r\n\r\nclass Bookcard extends HTMLElement{\r\n    constructor(){\r\n        super()\r\n        let shadowDOM = this.attachShadow({ mode: 'open' });\r\n        shadowDOM.innerHTML = _BookCard_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"]    \r\n        const styler = document.createElement('style')\r\n        styler.innerHTML = _BookCardStyle_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n        shadowDOM.appendChild(styler);\r\n    }\r\n    connectedCallback() {\r\n      console.log(\"Custom component element added from page.\");\r\n      let {shadowDOM, shadowRoot} = this;\r\n      if(this.hasAttribute(\"data\")){\r\n        let book = JSON.parse(this.getAttribute(\"data\"))\r\n        let title = shadowRoot.getElementById(\"title\");\r\n        let author = shadowRoot.getElementById(\"author\");\r\n        let description = shadowRoot.getElementById(\"description\");\r\n        let url = shadowRoot.getElementById(\"url\");\r\n        title.innerHTML = book.title;\r\n        author.innerHTML = book.author;\r\n        description.innerHTML = book.description;\r\n        url.href = book.url\r\n\r\n      }\r\n    }\r\n    disconnectedCallback() {\r\n    \r\n      console.log(\"Custom component element removed from page.\");\r\n\r\n    }\r\n\r\n    adoptedCallback() {\r\n      console.log(\"Custom component element moved to new page.\");\r\n    }\r\n\r\n    attributeChangedCallback(name, oldValue, newValue) {\r\n      console.log(\"Custom component element attributes changed.\");\r\n    }\r\n};\r\n    \r\n\r\n\r\n\r\n    \r\n    \r\n    \n\n//# sourceURL=webpack://webpacklab/./src/CustomElements/BookCard/BookCard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Biblioteca/popularBooks.js");
/******/ 	
/******/ })()
;