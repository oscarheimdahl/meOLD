let x;
let bounce = false;
function setup() {
	let canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('p5');
	x = 0;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(random(200), random(200), random(200));
	rect(x, 10, 10, 10);
	if (bounce) x += 10;
	else {
		x -= 10;
	}
	if (x + 10 > width) bounce = !bounce;
	else if (x < 0) bounce = !bounce;
}
