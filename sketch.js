function setup() {
  createCanvas(640, 400);
  noStroke();
}

function draw() {
  background(0);
  let c = map(mouseX, 100, width, 0, 700);
  let d = map(mouseX, 550, width, 0,1200);
  fill(205, c, 80);
  ellipse(mouseX, mouseY, 30, 30);
}
