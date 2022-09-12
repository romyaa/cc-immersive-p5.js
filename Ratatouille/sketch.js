function setup() {
  createCanvas(500,500);
}

function draw() {
  
  if (mouseIsPressed) {
    strokeWeight(1);
    stroke(9);
    fill(random(255), random(100,200), random(100));
    ellipse(mouseX,mouseY,80,80);
  } else {
    strokeWeight(1);
    stroke(255);
    fill(0);
  }
}