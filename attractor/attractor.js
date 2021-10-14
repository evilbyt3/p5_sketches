class Attractor {

	constructor(x, y, m) {
		this.pos  = createVector(x, y);
		this.mass = m;
		this.r 		= sqrt(this.mass) * mScale;
	}


	attract(particle) {
		this.G		= attractorG;

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
		fill(255, 0, 0);
		ellipse(this.pos.x, this.pos.y, this.r * 2);
	}

}
