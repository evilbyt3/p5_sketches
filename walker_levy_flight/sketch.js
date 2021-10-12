// var pos;
// var prev;
// var bigStep 	= 100;
// var smallStep = 2


var walkers = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

	// pos  = createVector(width / 2, height / 2);
	// prev = pos.copy();
	
	let myColors = [color('#aabf12'), color('#33ab12'), color('red'), color('#fe3fa2'), color('#a345cd')];
	for (let col of myColors) {
		walker = new Walker(width / 2, height / 2, 0.01, col);
		walkers.push(walker);
	}
	
	
}

function draw() {
	
	for (let walker of walkers) {
		walker.show();
		walker.update();
		walker.edges();
	}

	// let step = p5.Vector.random2D();
	// let r = random(1);
	// if (r < 0.01) {
		// step.mult(random(0, bigStep));
	// } else {
		// step.setMag(smallStep);
	// }
	// pos.add(step);
	// stroke(200);
	// line(pos.x, pos.y, prev.x, prev.y);
	// prev.set(pos); // instead of prev = pos.copy() which will create multiple instances

}
