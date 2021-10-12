
var walker;

function setup() {
	createCanvas(windowWidth, windowHeight);
	walker = new Walker(width / 2, height / 2);
	background(0);
}

function draw() {
	walker.step();
	walker.show();
}
