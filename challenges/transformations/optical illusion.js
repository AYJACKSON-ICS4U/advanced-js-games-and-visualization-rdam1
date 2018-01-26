var diameter = 600;
var decreaseAmt = 0.02;
var scaleF = 1.0;

var drawWhiteCircle = function(diameter) {
    fill(255, 255, 255);
    ellipse(0,0,diameter,diameter);
};

var drawBlackCircle = function(diameter) {
    fill(0, 0, 0);
    ellipse(0,0,diameter,diameter);
};

background(255, 255, 255);

while(scaleF > 0.0) {
    //black circles
    pushMatrix();
    translate(width/2,height/2);
    scale(scaleF);
    scaleF -= decreaseAmt;
    drawBlackCircle(diameter);
    popMatrix();
    //white circles
    pushMatrix();
    translate(width/2,height/2);
    scale(scaleF);
    scaleF -= decreaseAmt;
    drawWhiteCircle(diameter);
    popMatrix();
}
