angleMode = "degrees";
var backgroundColor = color(135, 206, 250);
var sunColor = color(255, 255, 0);
var sunStrokeColor = color(200, 200, 0);
var sunDiameter = 100;
//var sunX = width/2;
//var sunY = height/2;

var drawCloud = function() {
    noStroke();
    fill(255, 255, 255);
    ellipse(0, 0, 126, 97);
    ellipse(60, 0, 70, 60);
    ellipse(-60, 0, 70, 60);
};

var drawSunRay = function() {
    fill(sunColor);
    noStroke();
    triangle(0, 90, -40, 0, 40, 0);
};

var drawSun = function() {
    //draw sun rays
    for (var i = 0; i < 360; i += 45) {
        pushMatrix();
        translate(width/2,height/2);
        rotate(i);
        drawSunRay();
        popMatrix();
    }
    fill(sunColor);
    stroke(sunStrokeColor);
    ellipse(width/2, height/2, sunDiameter, sunDiameter);
};

//draw background
background(backgroundColor);

//draw sun
var scaleF = 1.7;
pushMatrix(); //
//translate((width/2*(1-scaleF)),height/2*(1-scaleF));
//translate(sunX+sunX*-scaleF,sunY+sunY*-scaleF);
translate(width/2-scaleF*width/2,height/2-scaleF*height/2);
//translate((width-width*scaleF)/2,(height-height*scaleF)/2);
//translate(width*0.5-width*scaleF*0.5,height*0.5-height*scaleF*0.5);
scale(scaleF);
drawSun();
popMatrix();

//draw clouds
pushMatrix();
translate(width/2,height/2);
drawCloud();
popMatrix();
