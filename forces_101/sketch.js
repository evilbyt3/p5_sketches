var movers = [];
let mu = 0.1 // coefficient of friction

function setup() {
	createCanvas(windowWidth, windowHeight);

	for (let i = 0; i < 10; i++) {
		movers.push(new Mover(random(50, width-50), 500, random(1, 8)));
	}

}

function draw() {
	background(0);

	let gravity = createVector(0, 0.5);
	let wind = createVector(0.5, 0);

	for (mover of movers) {
		// More accurately than
		// mover.applyForce(gravity);
		// mover2.applyForce(gravity);
		//
		// The weight (gravitaional acceleration) is scaled according to its mass
		// bigger the mass => bigger the force
		// smaller the mass => smaller the force
		let weight = p5.Vector.mult(gravity, mover.mass);
		mover.applyForce(weight);

		// Apply wind force
		if (mouseIsPressed) {
			mover.applyForce(wind);
		}

		// Apply friction
		mover.friction();

		mover.update();
		mover.edges();
		mover.show();

	}
}
