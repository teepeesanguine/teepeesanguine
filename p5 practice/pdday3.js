
// array of images
var images = ["derg.jpg", "keke.jpg", "shark.jpg", "snek.jpg"];
var chosenImage;

// array of fonts
var fonts = ["Anton","Cabin Sketch","Luckiest Guy","Freckle Face"]
var captions = ["pwease no steppy", "i heckin warned you", "stahp it!", "i can has?", "what is?"]

function preload(){
  // takes the position of each image and saves it to a variable
// floor rounds DOWN to nearest integer
  var pos = floor(random(images.length));
  // assigns one of the image positions to the variable
  chosenImage = loadImage(images[pos]);
}

function setup() {
  createCanvas(400, 400);
  // pick a random caption
  pos = floor(random(captions.length));
  chosenCaption = captions[pos];

  pos = floor(random(fonts.length));
  chosenFont = fonts[pos];
}

function draw() {
  // Draws your image
  image(chosenImage, 0,0, width, height);

  // draw your text!!! fonts were declared in HTML index.
  textFont(chosenFont);
  textSize(30);
  strokeWeight(random(1,3));
  stroke(random(1,255),random(1,255),random(1,255));
  fill(0);
  text(chosenCaption,20,250,400,400);
}
