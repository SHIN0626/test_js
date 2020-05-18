let img;

function preload() {
  img = loadImage('sample1.jpg');
}

function setup() {
  createCanvas(windowWidth, windowdHeight);
  background(0);
  image(img, 0, 0);
}

function keyPressed() {
  if (key === '1') {
    filter(THRESHOLD);
  }
} 
