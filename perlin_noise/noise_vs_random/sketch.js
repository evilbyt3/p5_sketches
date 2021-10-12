var stepRate = 0.02;
var start = 1;
function setup() {
	createCanvas(800, 800);

}

function draw() {
  background(0);

  stroke(255);
  noFill();
  beginShape();


  let xoff = start;
  for(let x = 0; x < width; x++) {

    // Uncomment to see random version
    //y = random(height); 
    
    // Just perlin noise
    //y = map(noise(xoff), 0, 1, 0, height);

    // Sinusoid sprinkled with perlin noise
    // let pn = map(noise(xoff), 0, 1, -50, 50);
    // let sn = map(sin(xoff), -1, 1, 0, height)
    // let y  = pn + sn

    // Vice-versa
    let pn = map(noise(xoff), 0, 1, 0, height);
    let sn = map(sin(xoff), -1, 1, -50, 50);
    let y  = pn + sn

    vertex(x, y);
    xoff += stepRate;
  }
  endShape();

  //noLoop();
  start += stepRate;

}
