var xoff1 = 0;
var xoff2 = 10000;
var stepRate = 0.005;


function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);

	let x = map(noise(xoff1), 0, 1, 0, width);
	let y = map(noise(xoff2), 0, 1, 0, height);

	xoff1 += stepRate;
	xoff2 += stepRate;

	ellipse(x, y, 24, 24);

}
