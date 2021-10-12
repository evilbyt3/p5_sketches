class Walker {

	
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	step() {

		// 25% -- left
		// 25% -- right
		// 25% -- up
		// 25% -- down
		/*
		let choice = random(4);
		if (choice == 0) {
			this.x++;
		} else if (choice == 1) {
			this.x--;
		} else if (choice == 2) {
			this.y++;
		} else {
			this.y--;
		}
		*/

		// 40% -- right
		// 10% -- left
		// 30% -- up
		// 20% -- down
		/*
		let choice = random()
		if (choice < 0.4) this.x++
		else if (choice < 0.5) this.x--;
		else if (choice < 0.8) this.y++;
		else this.y--;
		*/

		// 50% of moving in the direction of the mouse
		/*
		let choice = random()
		if (choice < 0.5) {
			let xdir = (mouseX - this.x);
			let ydir = (mouseY - this.y);

			if (xdir != 0) {
        xdir /= abs(xdir);
      } 
      if (ydir != 0) {
        ydir /= abs(ydir);
      }
			console.log(xdir, ydir);
      this.x += xdir;
      this.y += ydir;

		} else {
			let xdir = int(random(-2, 2));
      let ydir = int(random(-2, 2));
      console.log(xdir);
      this.x += xdir;
      this.y += ydir;
		}
		*/

		// Maybe use a gaussian distribution to move around
		// Play around with these values
		/*
		let stddev = 1;
		let mean 	 = 0.3;

		let xdir = randomGaussian(mean, stddev); // OR num = randomGaussian(); xdir = sd * num + mean
		let ydir = randomGaussian(mean, stddev);
		console.log(xdir);
		console.log(ydir);
		this.x += xdir;
		this.y += ydir;
		*/

		// Or a custom distribution of random numberss
		let stepsize = montecarlo();
		let xdir = random(-stepsize, stepsize);
		let ydir = random(-stepsize, stepsize);
		console.log(xdir);
		console.log(ydir);
		this.x += xdir;
		this.y += ydir;


	}

	show() {
		stroke(255);
		point(this.x, this.y);
	}

}

function montecarlo() {


	let found = false;
	while(!found) {
		let r1 		= random(1);
		let r2		= random(1);

		if (r2 < r1) {
			found = true;
			return r1;
		}
	}

	return 0; // just in case
}
