
class Walker {

	constructor(x, y, prob, color) {
		this.pos = createVector(x, y);
		this.vel = p5.Vector.random2D();
		this.prev = this.pos.copy();

		this.color 	= color 	// the color of the walker
		this.prob 	= prob; 	// x% change to take a bigStep
	}

	update() {
		let r = random(1);
		if (r < this.prob) {
			this.vel.mult(random(25, 75));
		} else {
			this.vel.setMag(2);
		}

		this.pos.add(this.vel);
		this.vel = p5.Vector.random2D();
	}

	show() {
		stroke(this.color);
		line(this.pos.x, this.pos.y, this.prev.x, this.prev.y)
		this.prev.set(this.pos);
	}

	edges() {
		// IDK man
	}


}
