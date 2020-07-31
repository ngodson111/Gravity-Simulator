function setup() {
  createCanvas(500, 500);
  background("blue");
}
let x = 0;
let direction = "front";
let velocity = 1;
let acceleration = 1;
function draw() {
  background(0);
  noFill();
  stroke(255);
  strokeWeight(2);
  ellipse((width - 20) / 2, x, 50, 50);
  if (x + 25 >= height) {
    velocity = -velocity * 0.92;
  } else {
    velocity += acceleration;
  }
  x += velocity;
}
