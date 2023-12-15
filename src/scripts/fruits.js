class Fruit {
  constructor(ctx, tileSize, type) {
    this.ctx = ctx;
    this.tileSize = tileSize;
    this.type = type;
  }

  drawFruit() {
    this.ctx.fillStyle = this.type === "good" ? "red" : "brown";
    const [x, y] = this.getRandomPostion();
    this.ctx.fillRect(
      x * this.tileSize,
      y * this.tileSize,
      this.tileSize,
      this.tileSize
    );
  }

  getRandomPostion() {
    const x = Math.floor(Math.random() * this.tileSize);
    const y = Math.floor(Math.random() * this.tileSize);
    return [x, y];
  }
}

export default Fruit;
