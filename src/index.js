// import Example from "./scripts/example";
import Game from "./scripts/game.js";

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("instruction-modal");
  const screen = document.getElementById("snakeCanvas");
  const game = new Game(screen);
  game.mainSound.play();
  const startGameBtn = document.getElementById("start-game--btn");

  startGameBtn.addEventListener("click", function () {
    modal.style.display = "none"; // Hide the instruction modal
    screen.style.display = "block"; // Show the game screen
    game.startGame(); // Start the game
  });
});
