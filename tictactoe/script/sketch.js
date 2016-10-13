
function setup() {

    createCanvas(800, 600);
    background(200);
}

function draw() {
    background(200);
    
    textSize(35);
    fill(255);
    text('X: ' + mouseX, 10, 200);
    text('Y: ' + mouseY, 10, 250);
    
    boardScreen();
    
    gameRun();
}

