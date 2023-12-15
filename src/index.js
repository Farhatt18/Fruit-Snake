// import Example from "./scripts/example";
import Game from './scripts/game.js';



document.addEventListener("DOMContentLoaded", () => {
//     const main = document.getElementById("main");
//     new Example(main);
//     console.log("hello world");

  // const screen = document.getElementById("snakeCanvas");
  // const ctx = screen.getContext("2d");
  const game = new Game();
  game.draw()
  console.log("Hello Worlds!")

}); 

