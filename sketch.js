let ball;

function setup() {
  createCanvas(400, 400);
  ball = new Ball(width / 2, height / 2, 30);
}

function draw() {
  background(220);
  ball.update();
  ball.display();
}

class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.xSpeed = 5;
    this.ySpeed = 3;
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > width - this.radius || this.x < this.radius) {
      this.xSpeed *= -1;
    }

    if (this.y > height - this.radius || this.y < this.radius) {
      this.ySpeed *= -1;
    }
  }

  display() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }
}
