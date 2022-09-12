function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
}

function draw() {
  background(240);
  // arc(90,60,80,80,0,HALF_PI);
  // arc(190,60,80,80,0,PI+HALF_PI);
  // arc(290,60,80,80,PI,HALF_PI);
  // arc(390,60,80,80,QUARTER_PI,PI+QUARTER_PI);

  arc(90,60,80,80,0,90);
  arc(190,60,80,80,0,270);
  arc(290,60,80,80,180,90);
  arc(390,60,80,80,45,225);
}