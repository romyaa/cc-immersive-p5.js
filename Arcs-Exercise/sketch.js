function setup() {
  createCanvas(500,220);
}

function draw() {
  background(240);
  angleMode(RADIANS);
  arc(90,60,80,80,0,HALF_PI);
  arc(190,60,80,80,0,PI+HALF_PI);
  arc(290,60,80,80,PI,HALF_PI);
  arc(390,60,80,80,QUARTER_PI,PI+QUARTER_PI);

  angleMode(DEGREES);
  arc(90,160,80,80,0,90);
  arc(190,160,80,80,0,270);
  arc(290,160,80,80,180,90);
  arc(390,160,80,80,45,225);
}