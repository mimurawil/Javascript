var fRate = 60;
function setup() {

    createCanvas(800, 600);
    background(200);
    frameRate(fRate);
}

function draw() {
    background(200);

    drawBackground();
    makeWords();
}

