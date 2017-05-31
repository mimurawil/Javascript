

function setup() {
	createCanvas(800,600);
	background(200);
	strokeWeight(2);
	frameRate(60);
}

var angleLeft = 95.3;
var angleRight = 84.7;
var angleRad;
var rightArmRightPointX;
var rightArmRightPointY;
var rightArmLeftPointX;
var rightArmLeftPointY;
var increasing = true;

function draw() {

background(200);

fill(255);

// body
beginShape();
	vertex(300, 300);
	vertex(500, 300);
	vertex(500, 600);
	vertex(300, 600);
endShape(CLOSE);

// head
beginShape();
	vertex(350, 300);
	vertex(450, 300);
	vertex(450, 200);
	vertex(350, 200);
endShape(CLOSE);

// antennas
beginShape();
	vertex(375, 200);
	vertex(350, 150);
endShape();
beginShape();
	vertex(425, 200);
	vertex(450, 150);
endShape();

fill(0);

// eyes and mouth
ellipse (375, 225, 10, 10);
ellipse (425, 225, 10, 10);
beginShape();
	vertex(375, 275);
	vertex(425, 275);
endShape();


// right arm
fill(0);
beginShape();
	vertex(500, 350);
	vertex(510, 350);
	vertex(510, 400);
	vertex(500, 400);
endShape(CLOSE);
fill(255);

rightArmRightPointX = 550;
rightArmRightPointY = 200;
rightArmLeftPointX = 580;
rightArmLeftPointY = 200;

if (increasing) {
	angleRight = angleRight + 0.5;
	angleLeft = angleLeft + 0.5;

	if (angleLeft >= 110) {
		increasing = false;
	}
} else {
	angleRight = angleRight - 0.5;
	angleLeft = angleLeft - 0.5;
	if (angleLeft <= 70) {
		increasing = true;
	}
}

angleRad = angleLeft * PI / 180;
rightArmLeftPointX = 555 + (80 * cos(angleRad));
rightArmLeftPointY = 280 - (80 * sin(angleRad));

angleRad = angleRight * PI / 180;
rightArmRightPointX = 565 + (80 * cos(angleRad));
rightArmRightPointY = 280 - (80 * sin(angleRad));


beginShape();
	vertex(510, 360);
	vertex(550, 360);
	vertex(rightArmLeftPointX, rightArmLeftPointY); // left point
	vertex(rightArmRightPointX, rightArmRightPointY); // right point
	vertex(580, 390);
	vertex(510, 390);
endShape(CLOSE);

// left arm
fill(0);
beginShape();
	vertex(300, 350);
	vertex(290, 350);
	vertex(290, 400);
	vertex(300, 400);
endShape(CLOSE);
fill(255);
beginShape();
	vertex(290, 360);
	vertex(250, 360);
	vertex(250, 200);
	vertex(220, 200);
	vertex(220, 390);
	vertex(290, 390);
endShape(CLOSE);


}

