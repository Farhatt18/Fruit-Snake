class Snake {
  constructor(ctx, tileSize, grid) {
    this.ctx = ctx;
    this.tileSize = tileSize;
    this.grid = grid;
    this.pos = [{ x: 10, y: 10 }];
  }

  get head() {
    return this.pos[0];
  }

  drawSnake() {
    this.ctx.fillStyle = "green";
    this.pos.forEach((spot) => {
      this.ctx.fillRect(
        spot.x * this.tileSize,
        spot.y * this.tileSize,
        this.grid,
        this.grid
      );
    });
  }

  // move(direction, grid) {
  //   const head = { ...this.head };
  //   switch (direction) {
  //     case "up":
  //       head.y = head.y - (1 % grid);
  //       break;
  //     case "down":
  //       head.y = ((head.y + 1) % grid) + 1;
  //       break;
  //     case "left":
  //       head.x = head.x - (1 % grid);
  //       break;
  //     case "right":
  //       head.x = ((head.x + 1) % grid) + 1;
  //       break;
  //   }
  //   this.pos.unshift(head);
  //   this.pos.pop();
  // }

  move(direction, grid) {
    const head = { ...this.head };
    // this.pos.unshift(head);

    // Update head based on direction
    switch (direction) {
      case "up":
        head.y = (head.y - 1 + grid) % grid;
        break;
      case "down":
        head.y = (head.y + 1) % grid;
        break;
      case "left":
        head.x = (head.x - 1 + grid) % grid;
        break;
      case "right":
        head.x = (head.x + 1) % grid;
        break;
    }
    this.pos.unshift(head);
    this.pos.pop();
  }

  grow() {
    const tail = { ...this.pos[this.pos.length - 1] };
    this.pos.push(tail);
  }
}

export default Snake;
