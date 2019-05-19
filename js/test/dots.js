let canvas;
let y;
let x;
let r = 0;
let colorIndex = 0;
let colors = ['#F8C885', '#F8C8FB', '#04C8C6', '#01C8FD'];
colors = [
	'#470024',
	'#571737',
	'#682E4B',
	'#79455F',
	'#113153',
	'#264362',
	'#3C5672',
	'#516981',
	'#61D095',
	'#61D095',
	'#61D095',
	'#61D095'
];
colors = ['#0B7A75', '#0D3B66', '#EEEEEE'];
let growTime = 20;
let growStage = 0;
let opy = 'FF';
function setup() {
	setCanvas();
	noStroke();
	smooth();
	background('#222');
	// colorMode(HSB);
	for (let i = 0; i < 1000; i++) {
		draw();
	}
}

function draw() {
	drawDot();
	growDot();
	if (dotComplete()) {
		resetGrowthCounter();
		changePos();
		changeFill();
		changeSize();
	}
	growStage++;
}

function drawDot(amount) {
	ellipse(x, y, r);
}

function changeSize() {
	r = 20;
}

function resetGrowthCounter() {
	growStage = 0;
}

function dotComplete() {
	return growStage > growTime;
}

function growDot() {
	r += random(0.5, 2);
}

function changePos() {
	x = random(width);
	y = random(height / 2);
}

function changeFill() {
	// fill(colors[colorIndex] + opy);
	// colorIndex++;
	// if (colorIndex >= colors.length) colorIndex = 0;

	// fill(map(x, 0, width, 150, 200), 100, 100);
	fill(random(100, 250), random(100, 250), random(100, 250));
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	background('#222');
}

function setCanvas() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', -2);
	canvas.parent('p5');
}
