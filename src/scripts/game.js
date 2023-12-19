import Snake from "./snake.js";
import Fruit from "./fruits.js";

class Game {
  constructor(screen) {
    this.screen = screen;
    this.ctx = screen.getContext("2d");
    this.direction = "right";
    this.score = 0;
    this.level = 1;
    this.tileSize = 24;
    this.grid = screen.width / this.tileSize;
    this.snake = new Snake(this.ctx, this.tileSize, this.grid);
    this.goodFruit = new Fruit(this.ctx, this.grid, this.snake, "good");
    this.badFruit = new Fruit(this.ctx, this.grid, this.snake, "bad");

    this.lastTimestamp = 0;
    this.frameInterval = 200;

    this.mainSound = new Audio("./assets/sounds/music.mp3");
    this.mainSound.volume = 0.5;
    this.mainSound.loop = true;
    this.isMuted = false;

    const muteBtn = document.getElementById("mute");
    const updateMuteBtn = () => {
      muteBtn.src = this.mainSound.muted
        ? "./assets/mute.png"
        : "./assets/unmute.png";
    };
    muteBtn.addEventListener("click", () => {
      this.muteToggle();
      updateMuteBtn();
    });

    updateMuteBtn();
  }

  muteToggle() {
    this.isMuted = !this.isMuted;

    this.mainSound.muted = this.isMuted;
  }

  isEatingFruit() {
    const head = this.snake.pos[0];
    const fruit =
      this.goodFruit.type === "good" ? this.goodFruit : this.badFruit;
    return (
      Math.floor(head.x) === Math.floor(fruit.position.x) &&
      Math.floor(head.y) === Math.floor(fruit.position.y)
    );
  }

  move(timestamp) {
    const elapsed = timestamp - this.lastTimestamp;

    if (elapsed >= this.frameInterval) {
      this.lastTimestamp = timestamp;

      this.snake.move(this.direction, this.grid + 1);
      if (this.isCollision() || this.isOutOfBounds() || this.checkCollision()) {
        this.endGame();
        return;
      }

      if (this.isEatingFruit()) {
        this.snake.grow();
        this.score++;
        if (this.score % 5 === 0) {
          this.level++;
          this.frameInterval = 150;
          if (this.score === 10) {
            this.frameInterval = 100;
          }
        }
        this.goodFruit.position = this.goodFruit.getRandomFruitPosition();
        this.badFruit.position = this.badFruit.getRandomFruitPosition();
      }
    }
  }

  isCollision() {
    const head = this.snake.head;
    return this.snake.pos
      .slice(1)
      .some((spot) => spot.x === head.x && spot.y === head.y);
  }

  isOutOfBounds() {
    const head = this.snake.head;
    if (
      head.x < 0 ||
      head.x >= this.grid ||
      head.y < 0 ||
      head.y >= this.grid
    ) {
      return true;
    }
    return false;
  }

  checkCollision() {
    const head = this.snake.head;
    const fruitHead = this.badFruit.position;
    return (
      Math.floor(head.x) === Math.floor(fruitHead.x) &&
      Math.floor(head.y) === Math.floor(fruitHead.y)
    );
  }
  draw() {
    this.ctx.clearRect(0, 0, this.screen.width, this.screen.height);
    this.snake.drawSnake();
    this.goodFruit.drawFruit();
    this.badFruit.drawFruit();
    this.drawScore();
  }

  drawScore() {
    this.ctx.fillStyle = "white";
    this.ctx.font = "20px Arial";
    this.ctx.fillText(`Score: ${this.score} | Level: ${this.level}`, 10, 20);
  }

  endGame() {
    alert(`Game over! Your score: ${this.score}, Your level: ${this.level}`);
    this.resetGame();
  }

  resetGame() {
    this.level = 1;
    this.score = 0;
    this.direction = "right";
    this.goodFruit = new Fruit(this.ctx, this.grid, this.snake, "good");
    this.badFruit = new Fruit(this.ctx, this.grid, this.snake, "bad");
    this.snake = new Snake(this.ctx, this.tileSize, this.grid);
  }

  handleKeyPress(event) {
    switch (event.key) {
      case "ArrowUp":
        if (this.direction !== "down") {
          this.direction = "up";
        }
        break;
      case "ArrowDown":
        if (this.direction !== "up") {
          this.direction = "down";
        }
        break;
      case "ArrowLeft":
        if (this.direction !== "right") {
          this.direction = "left";
        }
        break;
      case "ArrowRight":
        if (this.direction !== "left") {
          this.direction = "right";
        }
        break;
    }
  }

  gameLoop(timestamp) {
    this.move(timestamp);
    this.draw();
    this.mainSound.play();
    requestAnimationFrame(this.gameLoop.bind(this));
  }

  startGame() {
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
    requestAnimationFrame(this.gameLoop.bind(this));
  }
}

export default Game;
