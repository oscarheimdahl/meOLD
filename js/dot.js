class dot {
	constructor(x, y, stepSize, r, c) {
		this.startPos = createVector(x, y);
		this.pos = createVector(x, y);
		this.noiseA = random(1000);
		this.randomY = random(1000);
		this.noiseX = cos(this.noiseA);
		this.noiseY = sin(this.noiseA);
		this.firstNoiseX = 0; //noise(this.noiseX, this.noiseY);
		this.firstNoiseY = 0; //noise(this.noiseX, this.noiseY + this.randomY);
		this.stepSize = stepSize;
		this.r = r;
		this.c = c;
		this.xOff = 0;
		this.yOff = 0;
		this.speed = 5000;
	}

	show() {
		// console.log('x:' + this.pos.x);
		// console.log('y:' + this.pos.y);
		fill(this.c);
		ellipse(this.pos.x + this.xOff, this.pos.y + this.yOff, this.r);
	}

	update() {
		this.shake();
		this.noiseA += (2 * PI) / this.speed;
		this.noiseX = cos(this.noiseA);
		this.noiseY = sin(this.noiseA);
	}

	shake() {
		let xnoise = noise(this.noiseX, this.noiseY) - this.firstNoiseX;
		let ynoise =
			noise(this.noiseX, this.noiseY + this.randomY) - this.firstNoiseY;

		this.pos.x = xnoise * this.stepSize * 2 - this.stepSize + this.startPos.x;
		this.pos.y = ynoise * this.stepSize * 2 - this.stepSize + this.startPos.y;
	}
}
