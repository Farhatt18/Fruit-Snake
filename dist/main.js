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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n// import Example from \"./scripts/example\";\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  //     const main = document.getElementById(\"main\");\n  //     new Example(main);\n  //     console.log(\"hello world\");\n\n  // const screen = document.getElementById(\"snakeCanvas\");\n  // const ctx = screen.getContext(\"2d\");\n  const game = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  game.draw();\n  console.log(\"Hello Worlds!\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNxQztBQUlyQ0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ3BEO0VBQ0E7RUFDQTs7RUFFRTtFQUNBO0VBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQUlILHdEQUFJLENBQUMsQ0FBQztFQUN2QkcsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQztFQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7QUFFOUIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUuanMnO1xuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuLy8gICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4vLyAgICAgbmV3IEV4YW1wbGUobWFpbik7XG4vLyAgICAgY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZFwiKTtcblxuICAvLyBjb25zdCBzY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNuYWtlQ2FudmFzXCIpO1xuICAvLyBjb25zdCBjdHggPSBzY3JlZW4uZ2V0Q29udGV4dChcIjJkXCIpO1xuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgZ2FtZS5kcmF3KClcbiAgY29uc29sZS5sb2coXCJIZWxsbyBXb3JsZHMhXCIpXG5cbn0pOyBcblxuIl0sIm5hbWVzIjpbIkdhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnYW1lIiwiZHJhdyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/fruits.js":
/*!*******************************!*\
  !*** ./src/scripts/fruits.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Fruit {\n  constructor(ctx, tileSize, type) {\n    this.ctx = ctx;\n    this.tileSize = tileSize;\n    this.type = type;\n  }\n  drawFruit() {\n    this.ctx.fillStyle = this.type === \"good\" ? \"red\" : \"brown\";\n    const [x, y] = this.getRandomPostion();\n    this.ctx.fillRect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);\n  }\n  getRandomPostion() {\n    const x = Math.floor(Math.random() * this.tileSize);\n    const y = Math.floor(Math.random() * this.tileSize);\n    return [x, y];\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fruit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mcnVpdHMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLEtBQUssQ0FBQztFQUNWQyxXQUFXQSxDQUFDQyxHQUFHLEVBQUVDLFFBQVEsRUFBRUMsSUFBSSxFQUFFO0lBQy9CLElBQUksQ0FBQ0YsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7RUFDbEI7RUFFQUMsU0FBU0EsQ0FBQSxFQUFHO0lBQ1YsSUFBSSxDQUFDSCxHQUFHLENBQUNJLFNBQVMsR0FBRyxJQUFJLENBQUNGLElBQUksS0FBSyxNQUFNLEdBQUcsS0FBSyxHQUFHLE9BQU87SUFDM0QsTUFBTSxDQUFDRyxDQUFDLEVBQUVDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQztJQUN0QyxJQUFJLENBQUNQLEdBQUcsQ0FBQ1EsUUFBUSxDQUNmSCxDQUFDLEdBQUcsSUFBSSxDQUFDSixRQUFRLEVBQ2pCSyxDQUFDLEdBQUcsSUFBSSxDQUFDTCxRQUFRLEVBQ2pCLElBQUksQ0FBQ0EsUUFBUSxFQUNiLElBQUksQ0FBQ0EsUUFDUCxDQUFDO0VBQ0g7RUFFQU0sZ0JBQWdCQSxDQUFBLEVBQUc7SUFDakIsTUFBTUYsQ0FBQyxHQUFHSSxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ1YsUUFBUSxDQUFDO0lBQ25ELE1BQU1LLENBQUMsR0FBR0csSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNWLFFBQVEsQ0FBQztJQUNuRCxPQUFPLENBQUNJLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0VBQ2Y7QUFDRjtBQUVBLCtEQUFlUixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcHJvamVjdC8uL3NyYy9zY3JpcHRzL2ZydWl0cy5qcz85MGQ1Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZydWl0IHtcbiAgY29uc3RydWN0b3IoY3R4LCB0aWxlU2l6ZSwgdHlwZSkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMudGlsZVNpemUgPSB0aWxlU2l6ZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZHJhd0ZydWl0KCkge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMudHlwZSA9PT0gXCJnb29kXCIgPyBcInJlZFwiIDogXCJicm93blwiO1xuICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMuZ2V0UmFuZG9tUG9zdGlvbigpO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KFxuICAgICAgeCAqIHRoaXMudGlsZVNpemUsXG4gICAgICB5ICogdGhpcy50aWxlU2l6ZSxcbiAgICAgIHRoaXMudGlsZVNpemUsXG4gICAgICB0aGlzLnRpbGVTaXplXG4gICAgKTtcbiAgfVxuXG4gIGdldFJhbmRvbVBvc3Rpb24oKSB7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudGlsZVNpemUpO1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRpbGVTaXplKTtcbiAgICByZXR1cm4gW3gsIHldO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZydWl0O1xuIl0sIm5hbWVzIjpbIkZydWl0IiwiY29uc3RydWN0b3IiLCJjdHgiLCJ0aWxlU2l6ZSIsInR5cGUiLCJkcmF3RnJ1aXQiLCJmaWxsU3R5bGUiLCJ4IiwieSIsImdldFJhbmRvbVBvc3Rpb24iLCJmaWxsUmVjdCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/fruits.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake */ \"./src/scripts/snake.js\");\n/* harmony import */ var _fruits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fruits */ \"./src/scripts/fruits.js\");\n\n\nclass Game {\n  constructor() {\n    this.screen = document.getElementById(\"snakeCanvas\");\n    this.ctx = this.screen.getContext(\"2d\");\n    this.tileCount = 20;\n    this.tileSize = this.screen.width / this.tileCount - 2;\n    this.snake = new _snake__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.tileCount, this.tileSize);\n    this.goodFruit = new _fruits__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx, this.tileSize, \"good\");\n    this.badFruit = new _fruits__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx, this.tileSize, \"bad\");\n    this.score = 0;\n    this.level = 1;\n  }\n  draw() {\n    // this.snake.fillRect(0,0,screen.width, screen.height);\n    // this.snake.beginPath();\n    // this.snake.rect(20, 20, 150, 100);\n    // this.snake.stroke();\n    this.snake.drawSnake();\n    this.goodFruit.drawFruit();\n    this.badFruit.drawFruit();\n\n    // drawScore();\n  }\n\n  // drawFruit(){\n\n  // }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7OztBQUE0QjtBQUNDO0FBQzdCLE1BQU1FLElBQUksQ0FBQztFQUNUQyxXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDO0lBQ3BELElBQUksQ0FBQ0MsR0FBRyxHQUFHLElBQUksQ0FBQ0gsTUFBTSxDQUFDSSxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ3ZDLElBQUksQ0FBQ0MsU0FBUyxHQUFHLEVBQUU7SUFDbkIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSSxDQUFDTixNQUFNLENBQUNPLEtBQUssR0FBRyxJQUFJLENBQUNGLFNBQVMsR0FBRyxDQUFDO0lBQ3RELElBQUksQ0FBQ0csS0FBSyxHQUFHLElBQUlaLDhDQUFLLENBQUMsSUFBSSxDQUFDTyxHQUFHLEVBQUUsSUFBSSxDQUFDRSxTQUFTLEVBQUUsSUFBSSxDQUFDQyxRQUFRLENBQUM7SUFDL0QsSUFBSSxDQUFDRyxTQUFTLEdBQUcsSUFBSVosK0NBQUssQ0FBQyxJQUFJLENBQUNNLEdBQUcsRUFBRSxJQUFJLENBQUNHLFFBQVEsRUFBRSxNQUFNLENBQUM7SUFDM0QsSUFBSSxDQUFDSSxRQUFRLEdBQUcsSUFBSWIsK0NBQUssQ0FBQyxJQUFJLENBQUNNLEdBQUcsRUFBRSxJQUFJLENBQUNHLFFBQVEsRUFBRSxLQUFLLENBQUM7SUFDekQsSUFBSSxDQUFDSyxLQUFLLEdBQUcsQ0FBQztJQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHLENBQUM7RUFDaEI7RUFFQUMsSUFBSUEsQ0FBQSxFQUFHO0lBQ0w7SUFDQTtJQUNBO0lBQ0E7SUFDQSxJQUFJLENBQUNMLEtBQUssQ0FBQ00sU0FBUyxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDTCxTQUFTLENBQUNNLFNBQVMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQ0wsUUFBUSxDQUFDSyxTQUFTLENBQUMsQ0FBQzs7SUFFekI7RUFDRjs7RUFFQTs7RUFFQTtBQUNGO0FBRUEsK0RBQWVqQixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcHJvamVjdC8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU25ha2UgZnJvbSBcIi4vc25ha2VcIjtcbmltcG9ydCBGcnVpdCBmcm9tIFwiLi9mcnVpdHNcIjtcbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic25ha2VDYW52YXNcIik7XG4gICAgdGhpcy5jdHggPSB0aGlzLnNjcmVlbi5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy50aWxlQ291bnQgPSAyMDtcbiAgICB0aGlzLnRpbGVTaXplID0gdGhpcy5zY3JlZW4ud2lkdGggLyB0aGlzLnRpbGVDb3VudCAtIDI7XG4gICAgdGhpcy5zbmFrZSA9IG5ldyBTbmFrZSh0aGlzLmN0eCwgdGhpcy50aWxlQ291bnQsIHRoaXMudGlsZVNpemUpO1xuICAgIHRoaXMuZ29vZEZydWl0ID0gbmV3IEZydWl0KHRoaXMuY3R4LCB0aGlzLnRpbGVTaXplLCBcImdvb2RcIik7XG4gICAgdGhpcy5iYWRGcnVpdCA9IG5ldyBGcnVpdCh0aGlzLmN0eCwgdGhpcy50aWxlU2l6ZSwgXCJiYWRcIik7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5sZXZlbCA9IDE7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIC8vIHRoaXMuc25ha2UuZmlsbFJlY3QoMCwwLHNjcmVlbi53aWR0aCwgc2NyZWVuLmhlaWdodCk7XG4gICAgLy8gdGhpcy5zbmFrZS5iZWdpblBhdGgoKTtcbiAgICAvLyB0aGlzLnNuYWtlLnJlY3QoMjAsIDIwLCAxNTAsIDEwMCk7XG4gICAgLy8gdGhpcy5zbmFrZS5zdHJva2UoKTtcbiAgICB0aGlzLnNuYWtlLmRyYXdTbmFrZSgpO1xuICAgIHRoaXMuZ29vZEZydWl0LmRyYXdGcnVpdCgpO1xuICAgIHRoaXMuYmFkRnJ1aXQuZHJhd0ZydWl0KCk7XG5cbiAgICAvLyBkcmF3U2NvcmUoKTtcbiAgfVxuXG4gIC8vIGRyYXdGcnVpdCgpe1xuXG4gIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiJdLCJuYW1lcyI6WyJTbmFrZSIsIkZydWl0IiwiR2FtZSIsImNvbnN0cnVjdG9yIiwic2NyZWVuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ0aWxlQ291bnQiLCJ0aWxlU2l6ZSIsIndpZHRoIiwic25ha2UiLCJnb29kRnJ1aXQiLCJiYWRGcnVpdCIsInNjb3JlIiwibGV2ZWwiLCJkcmF3IiwiZHJhd1NuYWtlIiwiZHJhd0ZydWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/snake.js":
/*!******************************!*\
  !*** ./src/scripts/snake.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Snake {\n  constructor(ctx, tileCount, tileSize) {\n    this.ctx = ctx;\n    this.headX = 10;\n    this.headY = 10;\n    this.tileCount = tileCount;\n    this.tileSize = tileSize;\n  }\n  drawSnake() {\n    this.ctx.fillStyle = \"green\";\n    this.ctx.fillRect(this.headX * this.tileCount, this.headY * this.tileCount, this.tileSize, this.tileSize);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Snake);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zbmFrZS5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsS0FBSyxDQUFDO0VBQ1ZDLFdBQVdBLENBQUNDLEdBQUcsRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUU7SUFDcEMsSUFBSSxDQUFDRixHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNHLEtBQUssR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0gsU0FBUyxHQUFHQSxTQUFTO0lBQzFCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0VBQzFCO0VBQ0FHLFNBQVNBLENBQUEsRUFBRztJQUNWLElBQUksQ0FBQ0wsR0FBRyxDQUFDTSxTQUFTLEdBQUcsT0FBTztJQUM1QixJQUFJLENBQUNOLEdBQUcsQ0FBQ08sUUFBUSxDQUNmLElBQUksQ0FBQ0osS0FBSyxHQUFHLElBQUksQ0FBQ0YsU0FBUyxFQUMzQixJQUFJLENBQUNHLEtBQUssR0FBRyxJQUFJLENBQUNILFNBQVMsRUFDM0IsSUFBSSxDQUFDQyxRQUFRLEVBQ2IsSUFBSSxDQUFDQSxRQUNQLENBQUM7RUFDSDtBQUNGO0FBRUEsK0RBQWVKLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvc25ha2UuanM/ZDFiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTbmFrZSB7XG4gIGNvbnN0cnVjdG9yKGN0eCwgdGlsZUNvdW50LCB0aWxlU2l6ZSkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuaGVhZFggPSAxMDtcbiAgICB0aGlzLmhlYWRZID0gMTA7XG4gICAgdGhpcy50aWxlQ291bnQgPSB0aWxlQ291bnQ7XG4gICAgdGhpcy50aWxlU2l6ZSA9IHRpbGVTaXplO1xuICB9XG4gIGRyYXdTbmFrZSgpIHtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoXG4gICAgICB0aGlzLmhlYWRYICogdGhpcy50aWxlQ291bnQsXG4gICAgICB0aGlzLmhlYWRZICogdGhpcy50aWxlQ291bnQsXG4gICAgICB0aGlzLnRpbGVTaXplLFxuICAgICAgdGhpcy50aWxlU2l6ZVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU25ha2U7XG4iXSwibmFtZXMiOlsiU25ha2UiLCJjb25zdHJ1Y3RvciIsImN0eCIsInRpbGVDb3VudCIsInRpbGVTaXplIiwiaGVhZFgiLCJoZWFkWSIsImRyYXdTbmFrZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/snake.js\n");

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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;