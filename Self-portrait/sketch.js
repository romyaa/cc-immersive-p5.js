var gif_loadImg, gif_createImg;

function preload() {
  disco_ball = loadImage("disco-ball.gif");
}

function setup(){
    createCanvas(700,700);
}

eyeX = 400;
eyeY = 200;

function draw() {
    background(255);
    // gif_createImg = createImg("disco-ball.gif");
    // gif_createImg.position(350, 350);
    disco_ball.resize(53,53)

    /* right eye start */

    fill(255,255,0);
    beginShape();
    vertex(eyeX,eyeY);
    vertex(eyeX+40,eyeY-40);
    vertex(eyeX+100,eyeY);
    vertex(eyeX+40,eyeY+30);
    endShape(CLOSE);

    image(disco_ball, eyeX+15,eyeY-29);
    /* right eye end */
}