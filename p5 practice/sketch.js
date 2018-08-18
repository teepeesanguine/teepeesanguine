function setup() {
  createCanvas(600, 600);
}

var value = 0;
var clicky = 0;



function draw() {
  // ROBOT DRAWING
  background(value,mouseX,mouseY);
  fill(172,191,181);
  triangle(40,140,100,40,160,140);
  fill(191,174,0);
  ellipse(80,90,25,25);
  fill(255,255,255);
  ellipse(80,90,15,15);
  fill(191,174,0);
  ellipse(120,90,20,20);
  fill(116,92,191);
  quad(70,110,70,130,110,130,110,110);
  quad(115,110,125,110,125,130,115,130);

// MOVING VERSION OF ROBOT
  fill(172,191,181);
  triangle(mouseX-70,mouseY+10,mouseX-10,mouseY-90,mouseX+50,mouseY+10);
  fill(116,92,191);
  quad(mouseX,mouseY,mouseX-40,mouseY,mouseX-40,mouseY-20,mouseX,mouseY-20);
  quad(mouseX+5,mouseY,mouseX+15,mouseY,mouseX+15,mouseY-20,mouseX+5,mouseY-20);
  fill(191,174,0);
  ellipse(mouseX+10,mouseY-40,20,20);
  ellipse(mouseX-30,mouseY-40,25,25);
  fill(255,255,255);
  ellipse(mouseX-30,mouseY-40,15,15);

// TEXT STUFF
  textSize(32);
  fill(random(0,255),random(0,255),random(0,255));

  text("HELLO",40,170);
  text("HUMANS",40,185);
}

function mouseMoved() {
  value = value + 10;
  if (value > 255) {
    value = 0;
  }
}

// Trying to make stamps
// function mouseClicked() {
//   if (clicky == 0) {
//     var currentx = mouseX;
//     var currenty = mouseY;
//     function draw {
//     fill(172,191,181);
//     triangle(currentx-70,currenty+10,currentx-10,currenty-90,currentx+50,currenty+10);
//     fill(116,92,191);
//     quad(currentx,currenty,currentx-40,currenty,currentx-40,currenty-20,currentx,currenty-20);
//     quad(currentx+5,currenty,currentx+15,currenty,currentx+15,currenty-20,currentx+5,currenty-20);
//     fill(191,174,0);
//     ellipse(currentx+10,currenty-40,20,20);
//     ellipse(currentx-30,currenty-40,25,25);
//     fill(255,255,255);
//     ellipse(currentx-30,currenty-40,15,15);}
//     value = 255;
//   } else {
//     value = 0;
//   }
// }
