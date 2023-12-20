// import Example from "./scripts/example";
import Game from "./scripts/game.js";

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("instruction-modal");
  modal.style.display = "flex";
  const screen = document.getElementById("snakeCanvas");
  const game = new Game(screen);
  const startGameBtn = document.getElementById("start-game--btn");

  startGameBtn.addEventListener("click", function () {
    game.buttonSound.play();
    modal.style.display = "none"; // Hide the instruction modal
    screen.style.display = "block"; // Show the game screen
    game.startGame(); // Start the game
  });
});
