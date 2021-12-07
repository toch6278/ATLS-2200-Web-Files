//applying p5js to a website will be very buggy and slow things down
let diameter = 150;
function setup() {
  //create canvas as a variable
  var myCanvas = createCanvas(400, 400);
  //way for sketch to work in index.html file
  myCanvas.parent("sketch");
}

function draw() {
  diameter = 100 * sin(frameCount/100);
  background(100,0,100);
  fill(100);
  stroke(255,50,150);
  strokeWeight(5);
  circle (frameCount, height/2, diameter); //center of the canvas with diameter of 50
  print(frameCount);
}
