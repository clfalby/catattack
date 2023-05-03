var ginger=0;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(133,80,120);
}

//The draw function happens over and over again
function draw() {
   //an RGB color for the canvas' background
  //circle
  stroke(255,255,127); // an RGB color for the circle's border
  strokeWeight(3);
  fill(255,255,127,100); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,100,30); // center of canvas, 20px dia
  rect(ginger,100,50,50);
  fill(126,229,235,ginger);
  stroke(129,251,5);
  strokeWeight(8);
  triangle(20,300,300,100,400,400);
  line(0,50,500,50);
  ellipse(random(width),random(height),50,50);
  textSize(100);
  textFont("Helvetica");
  fill(255,255,127);
  text('Hello',45,ginger);
}

function mousePressed(){
   ginger= ginger+2;
}
