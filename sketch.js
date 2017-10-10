function setup() {
  createCanvas(600,600);
  noStroke();
  frameRate(35)
  angleMode(DEGREES)
  background(40)
}
function draw() {
  translate(width/2,height/2);
  rotate(frameCount*3);
  
  
  fill(lerpColor(color('#ea0043'), color('#0f34ef'),(frameCount%4000/1500)));
  ellipse(20,150,120,120);
   }