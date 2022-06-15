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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_custom_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/custom.scss */ \"./src/scss/custom.scss\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _icons_plane_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/plane.png */ \"./src/icons/plane.png\");\n\n\n\nvar today = new Date();\nconsole.log(today);\nvar date = today.getDate();\nvar month = +today.getMonth() + 1;\nvar year = today.getFullYear(); // err.style.display = \"block\";\n\nif (month < 10) {\n  month = '0' + month;\n}\n\nif (date < 10) {\n  date = '0' + date;\n}\n\nconsole.log(month);\nconsole.log(date);\n{\n  var min = \"\".concat(year, \"-\").concat(month, \"-\").concat(date);\n  console.log(min);\n  FlightStart.min = min;\n  hotelStart.min = min;\n  carStart.min = min;\n}\n\nfunction validateFlightStart() {\n  var startDate = FlightStart.value;\n  console.log(startDate);\n  var validDate = startDate.split('');\n  console.log(validDate);\n  var inputYear = '';\n  var inputMonth = '';\n  var inputDate = '';\n\n  for (var i = 0; i < validDate.length; i++) {\n    if (i <= 3) {\n      inputYear += validDate[i];\n    } else if (i === 5 || i === 6) {\n      inputMonth += validDate[i];\n    } else if (i === 8 || i === 9) {\n      inputDate += validDate[i];\n    }\n  }\n\n  console.log(inputYear);\n  console.log(inputMonth);\n  console.log(inputDate);\n\n  if (inputYear < year) {\n    console.log('error');\n  } else if (inputYear == year) {\n    //string and number\n    if (inputMonth < month) {\n      console.log('error');\n    } else if (inputMonth == month) {\n      if (inputDate < date) {\n        console.log('error'); // err.style.display = \"block\"; //здесь не работает, но если вывести за функцию, то работает\n      }\n    }\n  }\n\n  FlightEnd.min = FlightStart.value;\n  FlightEnd.addEventListener('change', function () {\n    var endDate = FlightEnd.value;\n    console.log(endDate);\n    var validEndDate = endDate.split('');\n    console.log(validEndDate);\n    var inputEndYear = '';\n    var inputEndMonth = '';\n    var inputEndDate = '';\n\n    for (var _i = 0; _i < validEndDate.length; _i++) {\n      if (_i <= 3) {\n        inputEndYear += validEndDate[_i];\n      } else if (_i === 5 || _i === 6) {\n        inputEndMonth += validEndDate[_i];\n      } else if (_i === 8 || _i === 9) {\n        inputEndDate += validEndDate[_i];\n      }\n    }\n\n    console.log(inputEndYear);\n    console.log(inputEndMonth);\n    console.log(inputEndDate);\n\n    if (inputEndYear < inputYear) {\n      console.log('error');\n    } else if (inputEndYear === inputYear) {\n      if (inputEndMonth < inputMonth) {\n        console.log('error');\n      } else if (inputEndMonth === inputMonth) {\n        if (inputEndDate < inputDate) {\n          console.log('error');\n        }\n      }\n    }\n  });\n}\n\nvar clearBtn = document.getElementById('clearFlight');\nclearBtn.addEventListener('click', function () {\n  FlightStart.value = '';\n  FlightEnd.value = '';\n});\nvar country = 'https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json';\nfetch(country).then(function (response) {\n  return response.json();\n}).then(function (countries) {\n  for (var key in countries) {\n    getCountryFrom(key);\n    getCountryTo(key);\n    getCountryHotel(key);\n    getCountryCar(key);\n  }\n\n  document.querySelector('#hotelCountry').addEventListener('change', function () {\n    var x = hotelCountry.value;\n    console.log(x);\n    var cities = countries[hotelCountry.value]; //work with selector's name\n\n    hotelCity.length = 1;\n\n    for (var i = 0; i < cities.length; i++) {\n      var city = document.createElement('option');\n      city.innerHTML = cities[i];\n      city.value = cities[i];\n      hotelCity.appendChild(city);\n    }\n  });\n  document.querySelector('#carCountry').addEventListener('change', function () {\n    var x = carCountry.value;\n    console.log(x);\n    var cities = countries[this.value]; //work with this\n\n    carCity.length = 1;\n\n    for (var i = 0; i < cities.length; i++) {\n      var city = document.createElement('option');\n      city.innerHTML = cities[i];\n      city.value = cities[i];\n      carCity.appendChild(city);\n    }\n  });\n});\n\nfunction getCountryFrom(country) {\n  var val = document.createElement('option');\n  val.value = country;\n  val.innerHTML = country;\n  document.querySelector('#FlightFrom').appendChild(val);\n}\n\nfunction getCountryTo(country) {\n  var val = document.createElement('option');\n  val.value = country;\n  val.innerHTML = country;\n  document.querySelector('#FlightTo').appendChild(val);\n}\n\nfunction getCountryHotel(country) {\n  var val = document.createElement('option');\n  val.value = country;\n  val.innerHTML = country;\n  document.querySelector('#hotelCountry').appendChild(val);\n}\n\nfunction getCountryCar(country) {\n  var val = document.createElement('option');\n  val.value = country;\n  val.innerHTML = country;\n  document.querySelector('#carCountry').appendChild(val);\n}\n\nfunction validateHotelStart() {\n  var startDate = hotelStart.value;\n  console.log(startDate);\n  var validDate = startDate.split('');\n  console.log(validDate);\n  var inputYear = '';\n  var inputMonth = '';\n  var inputDate = '';\n\n  for (var i = 0; i < validDate.length; i++) {\n    if (i <= 3) {\n      inputYear += validDate[i];\n    } else if (i === 5 || i === 6) {\n      inputMonth += validDate[i];\n    } else if (i === 8 || i === 9) {\n      inputDate += validDate[i];\n    }\n  }\n\n  console.log(inputYear);\n  console.log(inputMonth);\n  console.log(inputDate);\n\n  if (inputYear < year) {\n    console.log('error');\n  } else if (inputYear == year) {\n    //string and number\n    if (inputMonth < month) {\n      console.log('error');\n    } else if (inputMonth == month) {\n      if (inputDate < date) {\n        console.log('error'); // err.style.display = \"block\"; //здесь не работает, но если вывести за функцию, то работает\n      }\n    }\n  }\n\n  hotelEnd.min = hotelStart.value;\n  hotelEnd.addEventListener('change', function () {\n    var endDate = hotelEnd.value;\n    console.log(endDate);\n    var validEndDate = endDate.split('');\n    console.log(validEndDate);\n    var inputEndYear = '';\n    var inputEndMonth = '';\n    var inputEndDate = '';\n\n    for (var _i2 = 0; _i2 < validEndDate.length; _i2++) {\n      if (_i2 <= 3) {\n        inputEndYear += validEndDate[_i2];\n      } else if (_i2 === 5 || _i2 === 6) {\n        inputEndMonth += validEndDate[_i2];\n      } else if (_i2 === 8 || _i2 === 9) {\n        inputEndDate += validEndDate[_i2];\n      }\n    }\n\n    console.log(inputEndYear);\n    console.log(inputEndMonth);\n    console.log(inputEndDate);\n\n    if (inputEndYear < inputYear) {\n      console.log('error');\n    } else if (inputEndYear === inputYear) {\n      if (inputEndMonth < inputMonth) {\n        console.log('error');\n      } else if (inputEndMonth === inputMonth) {\n        if (inputEndDate < inputDate) {\n          console.log('error');\n        }\n      }\n    }\n  });\n}\n\nvar clearHotel = document.getElementById('clearHotel');\nclearHotel.addEventListener('click', function () {\n  hotelStart.value = '';\n  hotelEnd.value = '';\n});\n\nfunction validateCarStart() {\n  var startDate = carStart.value;\n  console.log(startDate);\n  var validDate = startDate.split('');\n  console.log(validDate);\n  var inputYear = '';\n  var inputMonth = '';\n  var inputDate = '';\n\n  for (var i = 0; i < validDate.length; i++) {\n    if (i <= 3) {\n      inputYear += validDate[i];\n    } else if (i === 5 || i === 6) {\n      inputMonth += validDate[i];\n    } else if (i === 8 || i === 9) {\n      inputDate += validDate[i];\n    }\n  }\n\n  console.log(inputYear);\n  console.log(inputMonth);\n  console.log(inputDate);\n\n  if (inputYear < year) {\n    console.log('error');\n  } else if (inputYear == year) {\n    //string and number\n    if (inputMonth < month) {\n      console.log('error');\n    } else if (inputMonth == month) {\n      if (inputDate < date) {\n        console.log('error'); // err.style.display = \"block\"; //здесь не работает, но если вывести за функцию, то работает\n      }\n    }\n  }\n\n  carEnd.min = carStart.value;\n  carEnd.addEventListener('change', function () {\n    var endDate = carEnd.value;\n    console.log(endDate);\n    var validEndDate = endDate.split('');\n    console.log(validEndDate);\n    var inputEndYear = '';\n    var inputEndMonth = '';\n    var inputEndDate = '';\n\n    for (var _i3 = 0; _i3 < validEndDate.length; _i3++) {\n      if (_i3 <= 3) {\n        inputEndYear += validEndDate[_i3];\n      } else if (_i3 === 5 || _i3 === 6) {\n        inputEndMonth += validEndDate[_i3];\n      } else if (_i3 === 8 || _i3 === 9) {\n        inputEndDate += validEndDate[_i3];\n      }\n    }\n\n    console.log(inputEndYear);\n    console.log(inputEndMonth);\n    console.log(inputEndDate);\n\n    if (inputEndYear < inputYear) {\n      console.log('error');\n    } else if (inputEndYear === inputYear) {\n      if (inputEndMonth < inputMonth) {\n        console.log('error');\n      } else if (inputEndMonth === inputMonth) {\n        if (inputEndDate < inputDate) {\n          console.log('error');\n        }\n      }\n    }\n  });\n}\n\nvar clearCar = document.getElementById('clearCar');\nclearCar.addEventListener('click', function () {\n  carStart.value = '';\n  carEnd.value = '';\n});\n\n//# sourceURL=webpack://searchpage/./src/index.js?");

/***/ }),

/***/ "./src/scss/custom.scss":
/*!******************************!*\
  !*** ./src/scss/custom.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://searchpage/./src/scss/custom.scss?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://searchpage/./src/scss/styles.scss?");

/***/ }),

/***/ "./src/icons/plane.png":
/*!*****************************!*\
  !*** ./src/icons/plane.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b9282484042070784163.png\";\n\n//# sourceURL=webpack://searchpage/./src/icons/plane.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;