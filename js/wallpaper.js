let canvas;
let xPositions = [];
let yPositions = [];
let squareWidth = 80;
let xS = (yS = 0);
let xRest;
let yRest;

let sizeSlider;
let colorSlider;
let speedSlider;

let colors = ['#6A449B', '#87489E', '#772B49', '#93606A', '#E9F26D'];

let dots = [];
let dotsS = [];
let goBack = false;

function setup() {
	setCanvas();
	setPositions();
	noStroke();
	addDots();
}

function draw() {
	let off = 5;
	background(78, 214, 156);
	let xOff = map(mouseX, 0, width, -off, off);
	let yOff = map(mouseY, 0, width, -off, off);
	dots.forEach(dot => {
		// dot.xOff = xOff;
		// dot.yOff = yOff;
		dot.r = 14;
		dot.c = 255;
		dot.speed = 5500;
		dot.show();
		dot.update();
	});
}

function addDots() {
	xPositions.forEach(x => {
		yPositions.forEach(y => {
			let xPos = x + xRest;
			let yPos = y + yRest;
			let stepSize = 50;
			let dotSize = random(8, 15);
			let c = random(colors); //color(random(255), random(255), random(255));
			dots.push(new dot(xPos, yPos, stepSize, dotSize, c));
		});
	});
}

function setPositions() {
	while (xS < width) {
		xPositions.push(xS);
		xS += squareWidth;
	}
	xRest = (width - xPositions[xPositions.length - 1]) / 2;
	while (yS < height / 2) {
		yPositions.push(yS);
		yS += squareWidth;
	}
	yRest = (height / 2 - yPositions[yPositions.length - 1]) / 2;
}

function dotComplete() {
	return growStage > growTime;
}

function changeFill() {
	colorMode(HSB);
	fill(map(x, 0, width, 0, 255), 30, 100);
	//fill(random(colors));
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	background('#222');
	dots = [];
	setup();
}

function setCanvas() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', -2);
	canvas.parent('p5');
}

function updateColor() {
	let clr = color(colorSlider.value(), 50, 255).toString();
	$('#secondPage').css('border-color', clr);
	$('.thirdpage').css('border-color', clr);
	$('#contact').css('border-color', clr);
	$('.backButton').css('background', clr);

	$('#colorbackground').css('background', clr);
}
