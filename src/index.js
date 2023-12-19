// import Example from "./scripts/example";
import Game from "./scripts/game.js";

// document.addEventListener("DOMContentLoaded", () => {
//   //     const main = document.getElementById("main");
//   //     new Example(main);
//   // console.log("hello world");
//   // const game = new Game();
//   // game.draw();
//   // const modal = document.getElementById("instruction-modal");
//   const screen = document.getElementById("snakeCanvas");
//   const game = new Game(screen);
//   // const startGameBtn = document.getElementById("start-game--btn");

//   // startGameBtn.addEventListener("click", function () {
//   //   modal.style.display = "none";
//   //   screen.style.display = "block";
//   //   // Add logic here to start your game

//   // });
//   game.startGame();
// });

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("instruction-modal");
  const screen = document.getElementById("snakeCanvas");
  const game = new Game(screen);
  const startGameBtn = document.getElementById("start-game--btn");

  startGameBtn.addEventListener("click", function () {
    modal.style.display = "none"; // Hide the instruction modal
    screen.style.display = "block"; // Show the game screen
    game.startGame(); // Start the game
  });
});
