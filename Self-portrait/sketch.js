var gif_loadImg, gif_createImg;

function preload() {
  disco_ball = loadImage("disco-ball.gif");
  dancer1 = loadImage("dancer1.gif");
  dancer2 = loadImage("dancer2.gif");
  checker = loadImage("checker.png");
}

function setup(){
    createCanvas(700,700,WEBGL);
}

var eyeX = 400;
var eyeY = 200;
var noseLightX = eyeX-20;
var noseLightY = eyeY+20;

function draw() {
    background(30);
    translate(-width/2,-height/2,0); //moves our drawing origin to the top left corner
    disco_ball.resize(57,57);
    dancer1.resize(70,70);
    dancer2.resize(60,70);

    /* right eye start */
    stroke(0);
    strokeWeight(2);
    fill(245,218,223);
    beginShape();
    vertex(eyeX,eyeY);
    vertex(eyeX+40,eyeY-40);
    vertex(eyeX+100,eyeY);
    vertex(eyeX+40,eyeY+30);
    endShape(CLOSE);

    image(disco_ball, eyeX+14,eyeY-33);
    /* right eye end */
    stroke(0,255,0)
    line(eyeX+40,eyeY-40,eyeX-130, eyeY+130);
    stroke(255,16,240);
    line(eyeX-130, eyeY+130, noseLightX,eyeY+250);
    stroke(255,95,31);
    line(noseLightX,eyeY+250, eyeX+65, eyeY+180);
    stroke(255, 240, 31);
    line(eyeX+65, eyeY+180,eyeX+100,eyeY);

    /* spot light start */
    strokeWeight();
    fill(255,255,220);
    triangle(noseLightX, noseLightY, noseLightX-50, noseLightY+150, noseLightX+50, noseLightY+150);
    fill(255,255,220,255);
    ellipse(noseLightX,noseLightY+150,100,50);
    
    texture(checker);
    ellipse(noseLightX,noseLightY+150,100,50);
    fill(255,255,220,90);
    ellipse(noseLightX,noseLightY+150,100,50);
    image(dancer1, noseLightX-10,noseLightY+90);
    image(dancer2, noseLightX-50,noseLightY+100);

    /* spot light end */
}