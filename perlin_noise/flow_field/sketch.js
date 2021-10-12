function setup() {
  createCanvas(800, 800);
  pixelDensity(1);
}


function draw() {

  let stepRate = 0.01;
  let yoff = 0;

  loadPixels()
  for (let y = 0; y < height; y++) {
    let xoff = 0;
    for (let x = 0; x < width; x++) {

      let r = noise(xoff, yoff) * 255;

      let idx = (x + y * width) * 4;
      pixels[idx + 0] = r; // R
      pixels[idx + 1] = r; // G
      pixels[idx + 2] = r; // B
      pixels[idx + 3] = 255; // A
      
      xoff += stepRate;
    }
    yoff += stepRate;
  }

  updatePixels()

}
