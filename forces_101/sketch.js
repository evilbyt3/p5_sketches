var movers = [];
let mu = 0.1 // coefficient of friction

function setup() {
	createCanvas(600, 600);

	for (let i = 0; i < 2; i++) {
		movers.push(new Mover(random(100, width-100), 100, random(1, 8)));
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
		mover.applyFriction();


		mover.update();
		mover.edges();
		mover.show();

	}
}

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x * 2, vec.y * 2);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() * 2 - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}
