let wave1 = function(p) {
	let dots = [];
	let dotLength = 30;
	let r = 4;
	let c = 0;
	let size = 300;
	let y;
	let noiseX = 0.2;
	let speed = 0.002;
	p.setup = function() {
		p.createCanvas(p.windowWidth, 300 + p.windowWidth / 3);
		y = p.height - 50;

		for (let i = 0; i < dotLength; i++) {
			dots.push({ y: p.height / 4, noise: speed * i });
		}
	};

	p.windowResized = function() {
		y = p.height - 50;
		p.resizeCanvas(p.windowWidth, 300 + p.windowWidth / 3);
	};

	p.draw = function() {
		p.clear();
		p.stroke('#4BE8A8');
		p.strokeWeight(20);
		p.fill('#4BE8A8');
		p.beginShape();
		p.curveVertex(-100, p.windowHeight * 2);
		p.curveVertex(-100, p.windowHeight * 2);
		for (let i = 0; i < dotLength; i++) {
			let dot = dots[i];
			p.curveVertex(
				((p.windowWidth + p.windowWidth) / dotLength) * i - p.windowWidth / 2,
				p.noise(noiseX * i, dot.noise) * -size + y
			);
			dot.noise += speed;
		}
		p.curveVertex(p.windowWidth + 100, p.windowHeight * 2);
		p.curveVertex(p.windowWidth + 100, p.windowHeight * 2);
		p.endShape();
	};
};

let wave2 = function(p) {
	let dots = [];
	let dotLength = 30;
	let r = 4;
	let c = 0;
	let size = 200;
	let y = 50;
	let noiseX = 0.2;
	let speed = 0.002;
	p.setup = function() {
		p.createCanvas(p.windowWidth, p.windowHeight / 3);
		for (let i = 0; i < dotLength; i++) {
			dots.push({ y: p.height / 4, noise: speed * i });
		}
	};

	p.windowResized = function() {
		p.resizeCanvas(p.windowWidth, p.windowHeight / 3);
	};

	p.draw = function() {
		p.background(255);
		p.stroke('#4BE8A8');
		p.strokeWeight(20);
		p.fill('#4BE8A8');
		p.beginShape();
		p.curveVertex(-100, -p.windowHeight * 2);
		p.curveVertex(-100, -p.windowHeight * 2);
		for (let i = 0; i < dotLength; i++) {
			let dot = dots[i];
			p.curveVertex(
				((p.windowWidth + p.windowWidth) / dotLength) * i - p.windowWidth / 2,
				p.noise(noiseX * i, dot.noise) * size + y
			);
			dot.noise += speed;
		}
		p.curveVertex(p.windowWidth + 100, -p.windowHeight * 2);
		p.curveVertex(p.windowWidth + 100, -p.windowHeight * 2);
		p.endShape();
	};
};

var p51 = new p5(wave1, 'wave1');
var p52 = new p5(wave2, 'wave2');
