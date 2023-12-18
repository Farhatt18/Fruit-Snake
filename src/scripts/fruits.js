// fruit.js
class Fruit {
  constructor(ctx, grid, snake, type) {
    this.grid = grid;
    this.ctx = ctx;
    this.snake = snake;
    this.type = type;
    this.position = this.getRandomFruitPosition();
    // this.color = this.type === "good" ? "yellow" : "red";
  }
  drawFruit() {
    this.ctx.fillStyle = this.type === "good" ? "yellow" : "red";
    this.ctx.fillRect(
      this.position.x * this.grid,
      this.position.y * this.grid,
      this.grid,
      this.grid
    );
  }

  getRandomFruitPosition() {
    let newPosition;
    do {
      newPosition = {
        x: Math.floor(Math.random() * this.grid),
        y: Math.floor(Math.random() * this.grid),
      };
    } while (this.isPositionOccupied(newPosition));
    return newPosition;
  }

  isPositionOccupied(newPosition) {
    return this.snake.pos.some(
      (spot) => spot.x === newPosition.x && spot.y === newPosition.y
    );
  }
}

export default Fruit;
