var rabbits = [];

var FRICTION = 0.2;
var HOP_SPEED = 3;

var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 80;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.color = config.color || color(207, 85, 85);
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    if (this.isMouseInside() && mouseIsPressed) {
        fill(255, 255, 255);
    }
    else {
       fill(this.color); 
    }
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(CENTER, CENTER);
    text(this.label, this.x, this.y);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x-this.width/2 &&
           mouseX < (this.x + this.width/2) &&
           mouseY > this.y - this.height/2 &&
           mouseY < (this.y + this.height/2);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

var Rabbit = function(x, y){
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.angle = 90;
    this.steps = 0;
};

Rabbit.prototype.hop = function() {
    this.speed = HOP_SPEED;
};

Rabbit.prototype.update = function() {
    this.y -= this.speed;
    if(this.speed > 0){
        this.speed -= FRICTION;
    }
    else if(this.speed < 0){
        this.speed = 0;
    }
};

Rabbit.prototype.draw = function() {
    ellipseMode(CENTER);
    angleMode = "degrees";
    translate(this.x, this.y);
    rotate(-this.angle-90);
    fill(255, 255, 255);
    noStroke();
    ellipse(0, -7, 2, 5);
    fill(0, 0, 0);
    ellipse(0, 0, 10, 16);
    fill(255, 255, 255);
    ellipse(0, 6, 8, 9);
    fill(0, 0, 0);
    ellipse(0, 9, 6, 8);
    triangle(-3, 8, 0, 8, -1, -1);
    triangle(3, 8, 0, 8, 2, -1);
    fill(255, 255, 255);
    stroke(255, 255, 255);
    triangle(-1, 12, 1, 12, 0, 13);
    resetMatrix();
};

for (var i = 0; i < 4; i++) {
    rabbits.push(new Rabbit(50 + 100 * i, 300));
}

var btn1 = new Button ({
   x: 350,
   y: 350,
   width: 40,
   height: 20,
   color: color(255, 123, 0),
   label: "Push",
   onClick: function() {
       rabbits[rabbits.length-1].hop();
   }
});

mouseClicked = function() {
    btn1.handleMouseClick();
};

draw = function() {
    background(98, 122, 54);
    
    //Draw the finish line
    rectMode(CORNER);
    stroke(0, 0, 0);
    for (var i = 0; i < width - 20; i += 40) {
        fill(0, 0, 0);
        rect(i, 20, 20, 20);
        rect(i + 20, 40, 20, 20);
        fill(255, 255, 255);
        rect(i+20, 20, 20, 20);
        rect(i, 40, 20, 20);
    }
    
    //Draw the racers
    for (var i = 0; i < rabbits.length; i++) {
        rabbits[i].update();
        rabbits[i].draw();
        
        if (i < 3 && frameCount % 15 === 0) {
            if (random(1) < 0.5) {
                rabbits[i].hop();
            }
        }
    }
    
    //Draw the button
    btn1.draw();
};
