var gif_loadImg, gif_createImg;

function preload() {
  disco_ball = loadImage("media/disco-ball.gif");
  dancer1 = loadImage("media/dancer1.gif");
  dancer2 = loadImage("media/dancer2.gif");
  checker = loadImage("media/checker.png");
}

function setup(){
    createCanvas(540,600,WEBGL); // WEBGL for texture map on line 142
    colors = [];
    colors[0] = color(77, 77, 255); // dark blue
    colors[1] = color(176, 38, 255); // purple
    colors[2] = color(175,238,238); // pale blue
    colors[3] = color(255,16,240); // pink
    colors[4] = color(24,217,255); // blue
    colors[5] = color(0,255,0); // green
    colors[6] = color(219,62,177); // fushia
    colors[7] = color(104,71,141); // royal purple

    frameRate(3);
}

var eyeX = 270;
var eyeY = 200;
var noseLightX = eyeX-20;
var noseLightY = eyeY+20;
var BACKGROUND_COLOR = 30;

function draw() {
    background(BACKGROUND_COLOR);
    // WEBGL shifts canvas to center, I want to shift back to top right
    translate(-width/2,-height/2,0);
    disco_ball.resize(57,57);
    dancer1.resize(70,70);
    dancer2.resize(60,70);

    /* right eye */
    noStroke();
    strokeWeight(2);
    fill(245,218,223);
    beginShape();
    vertex(eyeX,eyeY);
    vertex(eyeX+40,eyeY-40);
    vertex(eyeX+100,eyeY);
    vertex(eyeX+40,eyeY+30);
    endShape(CLOSE);
    image(disco_ball, eyeX+14,eyeY-33);

    /* left eye */
    beginShape();
    fill(245,218,223);
    vertex(eyeX+40,eyeY-40);
    vertex(eyeX-130, eyeY+130);
    vertex(eyeX-130, eyeY);
    endShape();

    /* shape 1 */
    beginShape();
    fill(255);
    vertex(eyeX+40,eyeY+30);
    vertex(eyeX+65, eyeY+180);
    vertex(noseLightX+44,noseLightY+160);
    endShape();

    /* shape 2 */
    beginShape();
    fill(255);
    vertex(eyeX-130, eyeY+130);
    vertex(noseLightX,eyeY+250);
    vertex(noseLightX,noseLightY+100);
    endShape();

    /* shape 3 */
    beginShape();
    fill(colors[random([0,1,2,3,4,5,6,7])]);
    vertex(eyeX-130, eyeY+130);
    vertex(noseLightX,noseLightY);
    vertex(noseLightX,noseLightY+100);
    endShape();

    /* shape 4 */
    beginShape();
    fill(colors[random([0,1,2,3,4,5,6,7])]);
    vertex(eyeX,eyeY);
    vertex(eyeX+40,eyeY+30);
    vertex(noseLightX+46,noseLightY+140);
    vertex(noseLightX, noseLightY);
    endShape();

    /* shape 5 */
    beginShape();
    fill(colors[random([0,1,2,3,4,5,6,7])]);
    vertex(noseLightX,eyeY+250);
    vertex(noseLightX,noseLightY+150);
    vertex(eyeX+65, eyeY+180);
    endShape();

    /* shape 6 */
    beginShape();
    fill(245,218,223,180);
    vertex(eyeX+65, eyeY+180);
    vertex(noseLightX,noseLightY+150);
    vertex(eyeX+40,eyeY+30);
    endShape();

    /* shape 7 */
    beginShape();
    fill(colors[random([0,1,2,3,4,5,6,7])]);
    vertex(eyeX+65, eyeY+180);
    vertex(eyeX+100,eyeY);
    vertex(eyeX+40,eyeY+30);
    endShape();

    /* shape 8 */
    beginShape();
    fill(colors[random([0,1,2,3,4,5,6,7])]);
    vertex(eyeX+40,eyeY-40);
    vertex(eyeX-100,eyeY-90);
    vertex(eyeX-130, eyeY);
    endShape();

    /* shape 9 */
    beginShape();
    fill(0);
    vertex(eyeX+40,eyeY-40);
    vertex(eyeX-100,eyeY-90);
    vertex(eyeX+70, eyeY-110);
    endShape();

    /* shape 10 */
    beginShape();
    fill(colors[random([0,1,2,3,4,5,6,7])]);
    vertex(eyeX+40,eyeY-40);
    vertex(eyeX+70, eyeY-110);
    vertex(eyeX+100,eyeY);
    endShape();

    /* spotlight nose/mouth */
    fill(245,218,223,180);
    triangle(noseLightX, noseLightY, noseLightX-50, noseLightY+150, noseLightX+50, noseLightY+150);

    texture(checker);
    ellipse(noseLightX,noseLightY+150,100,50);
    fill(245,218,223,85);
    ellipse(noseLightX,noseLightY+150,100,50);

    image(dancer1, noseLightX-10,noseLightY+90);
    image(dancer2, noseLightX-50,noseLightY+100);
    ellipse(noseLightX,noseLightY+150,100,50);
}