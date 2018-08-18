var drawWeight;
var drawColor;
var topPalette;

function setup() {
  createCanvas(600, 600);
  drawWeight=0;
  drawColor=color(255,255,0);
}

function draw() {
  // cursor stuff
  if(0 < mouseX && mouseX < 25){
    if(topPalette < mouseY && mouseY < topPalette + 301){
      cursor(HAND);
    }
  }
  else {cursor(ARROW);}


  // declare variable at top, assign value within function so it consistently runs with given value.
  topPalette = height/6;
  fill(241,242,96);
  strokeWeight(0);
  rect(0,topPalette, 25, 50);

  fill(89,89,78);
  strokeWeight(0);
  rect(0,topPalette+50, 25, 50);

  fill(191,172,95);
  strokeWeight(0);
  rect(0,topPalette+100, 25, 50);

  fill(140,159,199);
  strokeWeight(0);
  rect(0,topPalette+150, 25, 50);

  fill(96,180,242);
  strokeWeight(0);
  rect(0,topPalette+200, 25, 50);

  fill(0);
  textSize(30);
  text("+",5,topPalette+275);
  text("-",5,topPalette+300);


  if(mouseIsPressed){
  stroke(drawColor);
  strokeWeight(drawWeight+1);
  line(mouseX,mouseY,pmouseX,pmouseY);}

  fill(255);
  strokeWeight(0);
  rect(0,0,100,50);
  fill(0);
  textSize(12);
  text(mouseX + ", " + mouseY, 20,20);
}

function keyTyped(){
    if(key == 'c'){
        background(255);
     }
     else if(key =="1"){
        drawColor=color(255,255,0);
     }
     else if(key =="2"){
        drawColor=color(255,0,255);
     }
     else if(key =="3"){
        drawColor=color(0,255,255);
     }
     else if(key =="-"){
       if(drawWeight > 1){
        drawWeight=drawWeight-1;}
     }
     else if(key =="+"){
        drawWeight=drawWeight+1;
     }
}

function mousePressed(){
  topPalette=height/6;
  if(0 < mouseX && mouseX < 25){
    if(topPalette < mouseY && mouseY < topPalette+49) {
        //mouse is over the YELLOW square
        drawColor = color(241,242,96);
    }
    else if(topPalette+50 < mouseY && mouseY < topPalette + 99) {
      drawColor = color(89,89,78);
    }
    else if(topPalette+100 < mouseY && mouseY < topPalette + 149) {
      drawColor = color(191,172,95);
    }
    else if(topPalette+150 < mouseY && mouseY < topPalette + 199) {
      drawColor = color(140,159,199);
    }
    else if(topPalette+200 < mouseY && mouseY < topPalette + 249) {
      drawColor = color(96,180,242);
    }
    else if(topPalette+250 < mouseY && mouseY < topPalette + 280) {
      drawWeight = drawWeight+1;
    }
    else if(topPalette+281 < mouseY && mouseY < topPalette + 301) {
      if(drawWeight > 1){
      drawWeight = drawWeight-1;}
    }

  }

  }
