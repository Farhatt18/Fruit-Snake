/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './game.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n// // import Example from \"./scripts/example\";\n// import Game from \"./scripts/game.js\";\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//   //     const main = document.getElementById(\"main\");\n//   //     new Example(main);\n//   // console.log(\"hello world\");\n//   // const game = new Game();\n//   // game.draw();\n//   const screen = document.getElementById(\"snakeCanvas\");\n//   const game = new Game(screen);\n//   game.startGame();\n// });\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"snakeCanvas\");\n  const gridSize = 20;\n  const game = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './game.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(gridSize, canvas);\n  function gameLoop() {\n    game.move();\n    game.draw();\n\n    // Request the next animation frame\n    requestAnimationFrame(gameLoop);\n  }\n\n  // Start the game loop\n  requestAnimationFrame(gameLoop);\n\n  // Add event listener to handle user input for snake direction\n  document.addEventListener(\"keydown\", event => {\n    switch (event.key) {\n      case \"ArrowUp\":\n        game.move(\"up\");\n        break;\n      case \"ArrowDown\":\n        game.move(\"down\");\n        break;\n      case \"ArrowLeft\":\n        game.move(\"left\");\n        break;\n      case \"ArrowRight\":\n        game.move(\"right\");\n        break;\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVpQztBQUVqQ0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2xELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQ3JELE1BQU1DLFFBQVEsR0FBRyxFQUFFO0VBQ25CLE1BQU1DLElBQUksR0FBRyxJQUFJTix3SUFBSSxDQUFDSyxRQUFRLEVBQUVGLE1BQU0sQ0FBQztFQUV2QyxTQUFTSSxRQUFRQSxDQUFBLEVBQUc7SUFDbEJELElBQUksQ0FBQ0UsSUFBSSxDQUFDLENBQUM7SUFDWEYsSUFBSSxDQUFDRyxJQUFJLENBQUMsQ0FBQzs7SUFFWDtJQUNBQyxxQkFBcUIsQ0FBQ0gsUUFBUSxDQUFDO0VBQ2pDOztFQUVBO0VBQ0FHLHFCQUFxQixDQUFDSCxRQUFRLENBQUM7O0VBRS9CO0VBQ0FOLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFHUyxLQUFLLElBQUs7SUFDOUMsUUFBUUEsS0FBSyxDQUFDQyxHQUFHO01BQ2YsS0FBSyxTQUFTO1FBQ1pOLElBQUksQ0FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNmO01BQ0YsS0FBSyxXQUFXO1FBQ2RGLElBQUksQ0FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqQjtNQUNGLEtBQUssV0FBVztRQUNkRixJQUFJLENBQUNFLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDakI7TUFDRixLQUFLLFlBQVk7UUFDZkYsSUFBSSxDQUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2xCO0lBQ0o7RUFDRixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCI7XG4vLyBpbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWUuanNcIjtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuLy8gICAvLyAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbi8vICAgLy8gICAgIG5ldyBFeGFtcGxlKG1haW4pO1xuLy8gICAvLyBjb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkXCIpO1xuLy8gICAvLyBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbi8vICAgLy8gZ2FtZS5kcmF3KCk7XG4vLyAgIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic25ha2VDYW52YXNcIik7XG4vLyAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShzY3JlZW4pO1xuLy8gICBnYW1lLnN0YXJ0R2FtZSgpO1xuLy8gfSk7XG5cbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lLmpzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbmFrZUNhbnZhc1wiKTtcbiAgY29uc3QgZ3JpZFNpemUgPSAyMDtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGdyaWRTaXplLCBjYW52YXMpO1xuXG4gIGZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICAgIGdhbWUubW92ZSgpO1xuICAgIGdhbWUuZHJhdygpO1xuXG4gICAgLy8gUmVxdWVzdCB0aGUgbmV4dCBhbmltYXRpb24gZnJhbWVcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICB9XG5cbiAgLy8gU3RhcnQgdGhlIGdhbWUgbG9vcFxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBoYW5kbGUgdXNlciBpbnB1dCBmb3Igc25ha2UgZGlyZWN0aW9uXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICBnYW1lLm1vdmUoXCJ1cFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgIGdhbWUubW92ZShcImRvd25cIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICBnYW1lLm1vdmUoXCJsZWZ0XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgIGdhbWUubW92ZShcInJpZ2h0XCIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOlsiR2FtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiZ3JpZFNpemUiLCJnYW1lIiwiZ2FtZUxvb3AiLCJtb3ZlIiwiZHJhdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImV2ZW50Iiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;