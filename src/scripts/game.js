import Snake from "./snake";
import Fruit from "./fruits";
class Game {
  constructor() {
    this.screen = document.getElementById("snakeCanvas");
    this.ctx = this.screen.getContext("2d");
    this.tileCount = 20;
    this.tileSize = this.screen.width / this.tileCount - 2;
    this.snake = new Snake(this.ctx, this.tileCount, this.tileSize);
    this.goodFruit = new Fruit(this.ctx, this.tileSize, "good");
    this.badFruit = new Fruit(this.ctx, this.tileSize, "bad");
    this.score = 0;
    this.level = 1;
  }

  draw() {
    // this.snake.fillRect(0,0,screen.width, screen.height);
    // this.snake.beginPath();
    // this.snake.rect(20, 20, 150, 100);
    // this.snake.stroke();
    this.snake.drawSnake();
    this.goodFruit.drawFruit();
    this.badFruit.drawFruit();

    // drawScore();
  }

  // drawFruit(){

  // }
}

export default Game;
