// fruit.js
class Fruit {
  constructor(ctx, grid, type) {
    this.grid = grid;
    this.ctx = ctx;
    this.type = type;
    this.position = this.getRandomPosition();
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

  getRandomPosition() {
    const x = Math.floor(Math.random() * this.grid);
    const y = Math.floor(Math.random() * this.grid);
    return { x, y };
  }
}

export default Fruit;
