
var pos;
var vel;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	pos = createVector(width / 2, height / 2);
	vel = createVector(0, 0);
}

function draw() {

	background(0);
	let acc = createVector(mouseX, mouseY);
	acc.sub(pos);
	acc.setMag(1);

	vel.add(acc);
	vel.limit(5);

	pos.add(vel);
	ellipse(pos.x, pos.y, 24);

}
