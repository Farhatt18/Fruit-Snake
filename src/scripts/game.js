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
  }

  isEatingFruit() {
    const head = this.snake.pos[0];
    const fruit =
      this.goodFruit.type === "good" ? this.goodFruit : this.badFruit;
    return head.x === fruit.position.x && head.y === fruit.position.y;
  }
  // move() {
  //   this.snake.move(this.direction, this.grid + 1);

  //   // debugger;
  //   if (this.isCollision() || this.isOutOfBounds()) {
  //     // debugger;
  //     this.endGame();
  //     return;
  //   }
  //   if (this.isEatingFruit()) {
  //     this.snake.grow();
  //     this.score++;
  //     if (this.score % 5 === 0) {
  //       this.level++;
  //     }
  //     this.goodFruit = this.goodFruit.getRandomFruitPosition();
  //     this.badFruit = this.badFruit.getRandomFruitPosition();
  //   }
  // }

  move() {
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
      }

      this.goodFruit.position = this.goodFruit.getRandomFruitPosition();
      this.badFruit.position = this.badFruit.getRandomFruitPosition();
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
    console.log(head.x, head.y, this.grid);
    if (head.x < 0 || head.x > this.grid || head.y < 0 || head.y > this.grid) {
      return true;
    }
    return false;
  }

  checkCollision() {
    const fruitHead = this.badFruit.position;
    const SnakeHead = this.snake.pos;
    if (fruitHead.x === SnakeHead.x && fruitHead.y === SnakeHead.y) {
      return true;
    }
    return false;
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
    alert(`Game over! Your score: ${this.score}`);
    this.resetGame();
  }

  resetGame() {
    this.level = 1;
    this.score = 0;
    this.direction = "right";
    this.goodfruit = new Fruit(this.ctx, this.grid, this.snake, "good");
    this.badFruit = new Fruit(this.ctx, this.grid, this.snake, "bad");
    this.snake = new Snake(this.ctx, this.tileSize, this.grid);
    clearInterval(this.speedUpInterval);
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

  gameLoop() {
    this.move();
    this.draw();
  }

  startGame() {
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
    this.gameInterval = setInterval(this.gameLoop.bind(this), 150);
    // document.addEventListener("keyup", () => clearInterval(res));

    this.speedUpInterval = setInterval(() => {
      if (this.score > 5) {
        clearInterval(this.gameInterval);
        this.gameInterval = setInterval(this.gameLoop.bind(this), 100);
      }
    }, 1000);
  }
}

export default Game;
