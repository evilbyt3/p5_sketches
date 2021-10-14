class Mover {

	constructor(x, y, m) {
		this.pos = createVector(x, y);
		this.vel = createVector(0, 0);
		this.acc = createVector(0, 0);

		this.mass = m;
		this.r 		= sqrt(this.mass) * 10; // map area to mass
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.set(0, 0);
	}

	friction() {

		// Apply only if it touches the ground
		let diff = height - (this.pos.y + this.r);
		if (diff < 1) {

			// You can also you this little hack
			// this.vel.mult(0.95);
			// which will reduce the vel by 5%
			// However, this approach will not take
			// into account the mass of the obj

			// Determine the direction 
			let friction = this.vel.copy();
			friction.normalize();
			friction.mult(-1);
			// OR let friction = this.vel.copy().normalize().mult(-1);

			// Determine the magnitude
			let normal = this.mass
			friction.setMag(mu * normal);
			this.applyForce(friction);
		}
	}

	applyForce(force) {
		// If you use force.div(this.mass); instead
		// it will change the force in the wider ctx
		// not only the object.So use a static func
		// A = F / M
		let f = p5.Vector.div(force, this.mass) 
		this.acc.add(f); 												
		// this.acc.add(force) // A = F
	}

	show() {
		stroke(255);
		ellipse(this.pos.x, this.pos.y, this.r * 2);
	}

	edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }

    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }
}
