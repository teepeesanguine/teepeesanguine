
var picArray = ["p5/allgifs/5southfloorever.gif"]
var thePic;

function preload(){
  thePic = createImg(picArray[0])
  //use this to load your gif
  //This makes an ELEMENT, not an image
  //we will discuss the difference later
}

function setup() {
createCanvas(windowWidth,windowHeight)
rectMode(CENTER)
}

function draw() {
background(255);
ellipse(100,100,50);
thePic.position(width/2,height/2)
}
