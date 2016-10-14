
var countTicks = 0;
var fillWords1 = 200;
var fillWords2 = 200;
var fillWords3 = 200;
var fillWords4 = 200;
var fillWords5 = 200;
var fillWords6 = 200;
var fillWords7 = 200;
var fillWords8 = 200;
var posTemp = 200;
function makeWords() {
    noStroke();
    textSize(30);
    
    fill(fillWords1);
    if (countTicks >= 2 && countTicks < 11) {
        if (fillWords1 < 255) {
            fillWords1 = fillWords1 + 0.5;
        }
    } 
    text('So...', 110, 50);
    
    fill(fillWords2);
    if (countTicks >= 4 && countTicks < 11) {
        if (fillWords2 < 255) {
            fillWords2 = fillWords2 + 0.5;
        }
    } 
    text('You arrive at home,', 180, 50);
    
    fill(fillWords3);
    if (countTicks >= 5 && countTicks < 11) {
        if (fillWords3 < 255) {
            fillWords3 = fillWords3 + 0.5;
        }
    } 
    text('prepare yourself a coffee,', 450, 50);
    
    fill(fillWords4);
    if (countTicks >= 6 && countTicks < 11) {
        if (fillWords4 < 255) {
            fillWords4 = fillWords4 + 0.5;
        }
    } 
    text('sit on your favorite chair,', 110, 90);
    
    fill(fillWords5);
    if (countTicks >= 7 && countTicks < 11) {
        if (fillWords5 < 255) {
            fillWords5 = fillWords5 + 0.5;
        }
    } 
    text('turn on your TV on your', 450, 90);
    text('favorite channel...', 110, 130);
    
    fill(fillWords6);
    if (countTicks >= 9 && countTicks < 11) {
        if (fillWords6 < 255) {
            fillWords6 = fillWords6 + 0.5;
        }
    } 
    text('And nobody else\'s there...', 365, 130);
    
    if (countTicks >= 11) {
        if (fillWords1 > 200) {
            fillWords1 = fillWords1 - 0.5;
            fillWords2 = fillWords2 - 0.5;
            fillWords3 = fillWords3 - 0.5;
            fillWords4 = fillWords4 - 0.5;
            fillWords5 = fillWords5 - 0.5;
            fillWords6 = fillWords6 - 0.5;
        }
    } 
    
    fill(fillWords7);
    if (countTicks >= 13) {
        posTemp = 70;
        if (fillWords7 < 255) {
            fillWords7 = fillWords7 + 0.5;
        }
    } 
    text('Is it freedom?', 400, posTemp);
    
    fill(fillWords8);
    if (countTicks >= 15) {
        if (fillWords8 < 255) {
            fillWords8 = fillWords8 + 0.5;
        }
    } 
    text('Or loneliness?', 400, posTemp + 50);
}

var fillSteam = 210;
var increaseFillSteam = false;
var fillTV1 = 255;
var fillTV2 = 240;
function drawBackground() {
    strokeWeight(1);
    
    // floor
    fill(150);
    noStroke();
    rect(0, 350, 800, 600);
    
    // person
    fill(220);
    stroke(0);
    ellipse(153, 340, 25, 35);
    ellipse(188, 397, 15, 10);
    beginShape();
    vertex(150, 350);
    vertex(165, 350);
    vertex(165, 390);
    vertex(185, 390);
    vertex(185, 400);
    vertex(150, 400);
    line(160, 337, 164, 337);
    line(160, 336, 164, 336);
    endShape();

    // couch
    fill(153, 102, 51);
    stroke(0);
    arc(125, 300, 50, 50, PI/2, 2*PI);
    beginShape();
    vertex(150, 300);
    vertex(150, 400);
    vertex(225, 400);
    vertex(225, 475);
    vertex(125, 475);
    vertex(125, 300);
    endShape();
    arc(224, 412, 25, 25, 3*PI/2, PI/2);
    
    // coffee
    fill(100);
    stroke(0);
    beginShape();
    vertex(210, 400);
    vertex(220, 400);
    vertex(220, 380);
    vertex(210, 380);
    endShape(CLOSE);
    fill(150);
    arc(209, 390, 10, 10, PI/2, 3*PI/2);
    arc(209, 390, 9, 9, PI/2, 3*PI/2);
    
    // steam
    fill(fillSteam);
    noStroke();
    arc(216, 365, 10, 10, 1.07*PI/2, 0.96*3*PI/2, OPEN);
    arc(209, 365, 20, 20, 1.1*3*PI/2, 0.6*PI/2, OPEN);
    
    if (increaseFillSteam) {
        fillSteam++;
        if (fillSteam >= 210) {
            increaseFillSteam = false;
            fillTV1 = 250;
            fillTV2 = 220;
            if (countTicks < 250) {
                countTicks++;
            }
        }
    } else {
        fillSteam--;
        if (fillSteam <= 150) {
            increaseFillSteam = true;
            fillTV1 = 220;
            fillTV2 = 240;
        }
    }
    
    // TV
    fill(0);
    stroke(0);
    strokeWeight(4);
    line(450, 375, 475, 335);
    line(525, 375, 500, 335);
    strokeWeight(6);
    line(435, 335, 540, 335);
    strokeWeight(2);
    line(485, 272, 470, 250);
    line(485, 272, 500, 250);
    strokeWeight(1);
    fill(135, 91, 47);
    rect(445, 272, 85, 60);
    fill(fillTV1);
    rect(450, 277, 75, 50, 10);
    fill(fillTV2);
    beginShape();
    vertex(475, 277);
    vertex(470, 297);
    vertex(475, 297);
    vertex(470, 317);
    vertex(475, 317);
    vertex(470, 327);
    vertex(480, 327);
    vertex(485, 317);
    vertex(480, 317);
    vertex(485, 297);
    vertex(480, 297);
    vertex(485, 277);
    endShape(CLOSE);
    strokeWeight(1);
}