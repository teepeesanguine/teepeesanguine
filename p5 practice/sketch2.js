function setup() {
  createCanvas(600, 600);
}


function draw() {
  strokeWeight(0);
  fill(255,0,0,1);
  ellipse(250,250,100,100);

  fill(0,255,0,1);
  ellipse(300,250,100,100);

  fill(0,0,255,1);
  ellipse(270,300,100,100);

  strokeWeight(1);
  line(275,205,275,150);
  line(320,295,370,340);
  line(223,290,167,338);

  textSize(20);
  text("Magenta",75,346);
  text("255,0,255",72,360);

  text("Cyan",399,341);
  text("0,255,255",379,355);

  text("Yellow",238,135);
  text("255,255,0",222,148);

  textSize(40);
  fill(random(0,255),random(0,255),random(0,255));
  text("ALL ABOUT COLOR",90,80);




  // Display coordinates
  textSize(40);
  fill(255);
  strokeWeight(0);
  rect(0, 500, 200, 200);
  fill(0);
  // text(mouseX,10,500);
  text(mouseX + ", " + mouseY,10,550);
}
