let dots = [];
let dotLength = 30;
let r = 4;
let c = 0;
let size = 500;
let y = 300;
let noiseX = 0.2;
let speed = 0.002;
function setup() {
	let canvas = createCanvas(windowWidth, windowHeight + 4);
	canvas.parent('slime');

	for (let i = 0; i < dotLength; i++) {
		dots.push({ y: height / 4, noise: speed * i });
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	clear();
	stroke(255, 250, 148);
	strokeWeight(20);
	fill(255);
	beginShape();
	curveVertex(-100, windowHeight * 2);
	curveVertex(-100, windowHeight * 2);
	for (let i = 0; i < dotLength; i++) {
		let dot = dots[i];
		curveVertex(
			((windowWidth + windowWidth) / dotLength) * i - windowWidth / 2,
			noise(noiseX * i, dot.noise) * size + y
		);
		dot.noise += speed;
	}
	curveVertex(windowWidth + 100, windowHeight * 2);
	curveVertex(windowWidth + 100, windowHeight * 2);
	endShape();
}
