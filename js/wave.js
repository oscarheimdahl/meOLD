let ringRadiuses = [];
let ringsNR = 10;
function setup() {
	let canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('p5');
	for (let i = 0; i < ringsNR; i++) {
		ringRadiuses.push((windowWidth / 2 / ringsNR) * i);
	}
	noFill();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	stroke(0);
	strokeWeight(1);
	background(78, 214, 156);
	for (let i = 0; i < ringRadiuses.length; i++) {
		ellipse(windowHeight / 2, windowWidth / 2, ringRadiuses[i] * 2);
		ringRadiuses[i]++;
		if (ringRadiuses[i] > windowHeight) ringRadiuses[i] = 0;
	}
}
