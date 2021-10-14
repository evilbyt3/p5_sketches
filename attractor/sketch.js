var mScale = 5;
var particleG  = 0.5;
var attractorG = 1;

var attractor;
var particles = [];
var p;

var particleG_slider;
var attractorG_slider;
var mScale_slider;

function setup() {
	createCanvas(600, 600);
	background(0);

	fr = createP();
	pG = createP("Particle G");
	particleG_slider  = createSlider(0.1, 100, particleG, 0.1);

	aG = createP("Attractor G");
	attractorG_slider = createSlider(0.1, 100, attractorG, 0.1);



	attractor = new Attractor(width / 2, height / 2, 10);
	// print(attractor);

	for (let i = 0; i < 30; i++) {
		particles.push(new Particle(random(100, 500), random(100, 500), random(0.1, 2)));
	}
	print(particles);

}

function draw() {
	background(0, 100);

	// every particle attracts each other
	for (let i = 0; i < particles.length; i++) {
		for (let j = 0; j < particles.length; j++) {
			// Don't attract yourself
			if (i != j) {
				particles[i].attract(particles[j]);
			}
		}
		particles[i].update();
		particles[i].show();
	}

	// you can even try them both
	attractor.show();
	for (particle of particles) {
		attractor.attract(particle);
	}

	// particles attracted by attractors only
	/*
	attractor.show();
	for (particle of particles) {
		attractor.attract(particle);
		particle.update();
		particle.show();
	}
	*/

	particleG  = particleG_slider.value();
	attractorG = attractorG_slider.value();
	pG.html("Particle G : " + particleG);
	aG.html("Attractor G : " + attractorG);
	fr.html(floor(frameRate()));
}
