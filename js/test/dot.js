let canvas;
let xPositions = [];
let yPositions = [];
let squareWidth = 40;
let xS = yS = 0;
let xRest;
let yRest;

let colors = ['#222000', '#333000', '#444000', '#555000'];

let y;
let x;
let r = 0;
let growTime = 37;
let growStage = 0;

function setup() {
    setCanvas();
    noStroke();
    smooth();
    setPositions();
    changePos()
    changeFill()
    r = 37;
    for (let i = 0; i < 1000; i++) {
        ellipse(x + xRest, y + yRest, r);
        changePos()
        changeFill();
    }
    r = 0;
}

function draw() {
    drawDot();
    growDot();
    if (dotComplete()) {
        resetGrowthCounter();
        changePos()
        changeFill();
        changeSize();
    }
    growStage++;
}

function setPositions() {
    while (xS < width) {
        xPositions.push(xS);
        xS += squareWidth;
    }
    xRest = (width - xPositions[xPositions.length - 1]) / 2;
    while (yS < height) {
        yPositions.push(yS);
        yS += squareWidth;
    }
    yRest = (height - yPositions[yPositions.length - 1]) / 2;
}

function drawDot(amount) {
    ellipse(x + xRest, y + yRest, r);
}

function changeSize() {
    r = 0;
}

function resetGrowthCounter() {
    growStage = 0;
}

function dotComplete() {
    return growStage > growTime;
}

function growDot() {
    r += (growTime - r) / 3;
}

function changePos() {
    x = random(xPositions);
    y = random(yPositions);
}

function changeFill() {
    colorMode(HSB);
    fill(map(x,0,width,150,255), 30, 100);
    //fill(random(colors));
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background('#222');
}

function setCanvas() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', -2);
    canvas.parent('startPage');
}