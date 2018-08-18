var x = 10;
var y = 60;
var speedX = 0;
var speedY = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);


  x = x + speedX;
  y = y + speedY;

if (y < 0){
      speedX = 0;
      speedY = 1;
    }
if (y > height){
      speedX = 0;
      speedY = -1;
    }
if (x > width) {
      speedX = -1;
      speedY = 0;
    }
if (x < 0){
        speedX = 1;
        speedY = 0;
      }

  //Face
      fill(249,205,173);//rosy beige
      ellipse(x, y, 100, 100);

      //Eye 1
      fill(30);//dark gray
      ellipse(x, y+10, 10, 10);

      //Eye 2
      ellipse(x+15, y+10, 10, 10);

      //Mouth
      fill(252,157,154);//light pink
      arc(x, y+25, 30, 30, 0, radians(180), PIE);
}

function keyPressed() {
  if(key === "J"){
    if (0 <= x && x < width) {
      speedX = -1;
      speedY = 0;
    }
}
  if(key==="L"){
    if(0 <= x && x < width){
      speedX = 1;
      speedY = 0;
    }
  }

  if (key ==="I"){
   if (0 <= y && y < height){
    speedX = 0;
    speedY = -1;
    }
  }

  if (key==="K") {
    if(0 <= y && y < height){
      speedX = 0;
      speedY = 1;
  }
}
}
