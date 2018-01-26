noStroke();
background(0, 0, 0);
var r = 255;
var g = 90;
var b = 0;

for(var i = 0; i<360; i+=30){
    fill(r, g, b);
    pushMatrix();
    translate(width/2,height/2);
    rotate(i);
    rect(0, 0, 150, 15);
    popMatrix();
    r-=15;
    g+=10;
    b+=10;
}
