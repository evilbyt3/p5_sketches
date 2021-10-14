class Particle {

	constructor(x, y, m) {
		this.pos  = createVector(x, y);
		this.vel  = p5.Vector.random2D();
		//this.vel  = createVector(0, 0);
		this.acc  = createVector(0, 0);
		this.mass = m;
		this.r		= sqrt(this.mass) * mScale;

	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.set(0, 0);
	}

	applyForce(force) {
		let f = p5.Vector.div(force, this.mass);
		this.acc.add(force);
	}

	// function used in every particle attracting each other
	// otherwise this function is used in attractor
	// see sketch.js
	attract(particle) {
		this.G = particleG;
		// what if each particle had a random grav acceleration
		// this.G = random(0.1, 2);

		// Calculate direction
		let gravity  = p5.Vector.sub(this.pos, particle.pos);
		let dist 		 = gravity.mag();
		dist = constrain(dist, 10, 20);
		gravity.normalize();

		// Calculate magnitude
		let strength = this.G * (particle.mass * this.mass) / (dist * dist);
		gravity.setMag(strength);

		particle.applyForce(gravity);
	}

	show() {
		noStroke();
		fill(255, 255, 255, 100);
		ellipse(this.pos.x, this.pos.y, this.r * 2);

		// stroke(200);
		// point(this.pos);
	}

}
