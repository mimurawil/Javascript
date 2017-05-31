

function setup() {
	createCanvas(800,600);
	background(200);
	strokeWeight(2);
}

var x;

function draw() {

fill(100);

// body
rect(300, 300, 200, 600);
// beginShape();
// 	vertex(300, 300);
// 	vertex(500, 300);
// 	vertex(500, 600);
// 	vertex(300, 600);
// endShape(CLOSE);

// head
rect(350, 200, 100, 100);
// beginShape();
// 	vertex(350, 300);
// 	vertex(450, 300);
// 	vertex(450, 200);
// 	vertex(350, 200);
// endShape(CLOSE);

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
rect(500, 350, 10, 50);
// beginShape();
// 	vertex(500, 350);
// 	vertex(510, 350);
// 	vertex(510, 400);
// 	vertex(500, 400);
// endShape(CLOSE);
fill(255);
rect(510, 360, 40, 30);
rect(550, 200, 40, 190);
// beginShape();
// 	vertex(510, 360);
// 	vertex(550, 360);
// 	vertex(550, 200);
// 	vertex(580, 200);
// 	vertex(580, 390);
// 	vertex(510, 390);
// endShape(CLOSE);

// left arm
fill(0);
rect(290, 350, 10, 50);
// beginShape();
// 	vertex(300, 350);
// 	vertex(290, 350);
// 	vertex(290, 400);
// 	vertex(300, 400);
// endShape(CLOSE);
fill(255);
rect(250, 360, 40, 30);
rect(220, 200, 40, 190);
// beginShape();
// 	vertex(290, 360);
// 	vertex(250, 360);
// 	vertex(250, 200);
// 	vertex(220, 200);
// 	vertex(220, 390);
// 	vertex(290, 390);
// endShape(CLOSE);



}

