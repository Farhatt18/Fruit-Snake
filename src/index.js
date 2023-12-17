// import Example from "./scripts/example";
import Game from "./scripts/game.js";

document.addEventListener("DOMContentLoaded", () => {
  //     const main = document.getElementById("main");
  //     new Example(main);
  // console.log("hello world");
  // const game = new Game();
  // game.draw();
  const screen = document.getElementById("snakeCanvas");
  const game = new Game(screen);
  game.startGame();
});
