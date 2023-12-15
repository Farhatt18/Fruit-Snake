class Snake {
  constructor(ctx, tileCount, tileSize) {
    this.ctx = ctx;
    this.headX = 10;
    this.headY = 10;
    this.tileCount = tileCount;
    this.tileSize = tileSize;
  }
  drawSnake() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(
      this.headX * this.tileCount,
      this.headY * this.tileCount,
      this.tileSize,
      this.tileSize
    );
  }
}

export default Snake;
