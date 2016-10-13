var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var scoreOfX = 0;
var scoreOfO = 0;
var turnXO = 'x';
var didWin = false;
var whoWon = 0;

function boardScreen() {
    
    // Tittle
    stroke(0);
    fill(0);
    rect(0, 0, 800, 100);
    textSize(30);
    text('WoToM', 670, 590);
    textSize(35);
    fill(255);
    text('Tic-Tac-Toe', 100, 70);
    
    // Board
    stroke(0);
    strokeWeight(7);
    line(200, 150, 200, 550);
    line(333, 150, 333, 550);
    line(067, 283, 467, 283);
    line(067, 416, 467, 416);
    
    drawTheX(600, 250);
    drawTheO(600, 450);
    fill(0);
    stroke(0);
    textSize(70);
    text(scoreOfX, 700, 275);
    text(scoreOfO, 700, 475);
    
}

function gameRun() {
    // hightlight the turn
    noFill();
    if (turnXO === 'x') {
        stroke(255, 0, 0);
        rect(530, 175, 250, 150);
    } else {
        stroke(0, 0, 255);
        rect(530, 375, 250, 150);
    }
    
    if (board[0] === 'x') {
        drawTheX(120, 210);
    } else if (board[0] === 'y') {
        drawTheO(120, 210);
    }
    
    if (board[1] === 'x') {
        drawTheX(265, 210);
    } else if (board[1] === 'y') {
        drawTheO(265, 210);
    }

    if (board[2] === 'x') {
        drawTheX(400, 210);
    } else if (board[2] === 'y') {
        drawTheO(400, 210);
    }

    if (board[3] === 'x') {
        drawTheX(120, 350);
    } else if (board[3] === 'y') {
        drawTheO(120, 350);
    }

    if (board[4] === 'x') {
        drawTheX(265, 350);
    } else if (board[4] === 'y') {
        drawTheO(265, 350);
    }

    if (board[5] === 'x') {
        drawTheX(400, 350);
    } else if (board[5] === 'y') {
        drawTheO(400, 350);
    }

    if (board[6] === 'x') {
        drawTheX(120, 485);
    } else if (board[6] === 'y') {
        drawTheO(120, 485);
    }

    if (board[7] === 'x') {
        drawTheX(265, 485);
    } else if (board[7] === 'y') {
        drawTheO(265, 485);
    }

    if (board[8] === 'x') {
        drawTheX(400, 485);
    } else if (board[8] === 'y') {
        drawTheO(400, 485);
    }
    
    if (didWin === true) {
        if (whoWon === 'x') {
            stroke(255, 0, 0);
            fill(255, 0, 0);
        } else if (whoWon === 'y') {
            stroke(0, 0, 255);
            fill(0, 0, 255);
        }
        text('Ohhh Yeahhh', 350, 70);
    }
}

function mouseClicked() {
    //  1 2 3
    //  4 5 6
    //  7 8 9
    
    //position 1
    if (mouseX >= 70 && mouseX <= 180 && mouseY >= 160 && mouseY <= 260 && board[0] === 0) {
        if (turnXO === 'x') {
            turnXO = 'y';
            board[0] = 'x';
                  
        } else {
            turnXO = 'x';
            board[0] = 'y';
        }
    // position 2
    } else if (mouseX >= 210 && mouseX <= 320 && mouseY >= 160 && mouseY <= 260 && board[1] === 0) {
        if (turnXO === 'x') {
            turnXO = 'y';
            board[1] = 'x';
        } else {
            turnXO = 'x';
            board[1] = 'y';
        }
    // position 3
    } else if (mouseX >= 350 && mouseX <= 460 && mouseY >= 160 && mouseY <= 260 && board[2] === 0) {
        if (turnXO === 'x') {
            turnXO = 'y';
            board[2] = 'x';
        } else {
            turnXO = 'x';
            board[2] = 'y';
        }
    //position 4
    } else if (mouseX >= 70 && mouseX <= 180 && mouseY >= 300 && mouseY <= 400 && board[3] === 0) {
        if (turnXO === 'x') {
            turnXO = 'y';
            board[3] = 'x';
                  
        } else {
            turnXO = 'x';
            board[3] = 'y';
        }
    // position 5
    } else if (mouseX >= 210 && mouseX <= 320 && mouseY >= 300 && mouseY <= 400 && board[4] === 0) {
        if (turnXO === 'x') {
            turnXO = 'y';
            board[4] = 'x';
        } else {
            turnXO = 'x';
            board[4] = 'y';
        }
    // position 6
    } else if (mouseX >= 350 && mouseX <= 460 && mouseY >= 300 && mouseY <= 400 && board[5] === 0) {
        if (turnXO === 'x') {
            turnXO = 'y';
            board[5] = 'x';
        } else {
            turnXO = 'x';
            board[5] = 'y';
        }
    //position 7
    } else if (mouseX >= 70 && mouseX <= 180 && mouseY >= 430 && mouseY <= 530 && board[6] === 0) {
        if (turnXO === 'x') {
            turnXO = 'y';
            board[6] = 'x';
                  
        } else {
            turnXO = 'x';
            board[6] = 'y';
        }
    // position 8
    } else if (mouseX >= 210 && mouseX <= 320 && mouseY >= 430 && mouseY <= 530 && board[7] === 0) {
        if (turnXO === 'x') {
            turnXO = 'y';
            board[7] = 'x';
        } else {
            turnXO = 'x';
            board[7] = 'y';
        }
    // position 9
    } else if (mouseX >= 350 && mouseX <= 460 && mouseY >= 430 && mouseY <= 530 && board[8] === 0) {
        if (turnXO === 'x') {
            turnXO = 'y';
            board[8] = 'x';
        } else {
            turnXO = 'x';
            board[8] = 'y';
        }
    }
    
    if (didWin === false) {
        if ((board[0] === 'x' && board[1] === 'x' && board[2] === 'x') || (board[3] === 'x' && board[4] === 'x' && board[5] === 'x') || (board[6] === 'x' && board[7] === 'x' && board[8] === 'x') || (board[0] === 'x' && board[3] === 'x' && board[6] === 'x') || (board[1] === 'x' && board[4] === 'x' && board[7] === 'x') || (board[2] === 'x' && board[5] === 'x' && board[8] === 'x') || (board[0] === 'x' && board[4] === 'x' && board[8] === 'x') || (board[2] === 'x' && board[4] === 'x' && board[6] === 'x')) {
            didWin = true;
            whoWon = 'x';
            scoreOfX++;
        } else if ((board[0] === 'y' && board[1] === 'y' && board[2] === 'y') || (board[3] === 'y' && board[4] === 'y' && board[5] === 'y') || (board[6] === 'y' && board[7] === 'y' && board[8] === 'y') || (board[0] === 'y' && board[3] === 'y' && board[6] === 'y') || (board[1] === 'y' && board[4] === 'y' && board[7] === 'y') || (board[2] === 'y' && board[5] === 'y' && board[8] === 'y') || (board[0] === 'y' && board[4] === 'y' && board[8] === 'y') || (board[2] === 'y' && board[4] === 'y' && board[6] === 'y')) {
            didWin = true;
            whoWon = 'y';
            scoreOfO++;
        }
    } else {
        didWin = false;
        whoWon = 0;
        board[0] = 0;
        board[1] = 0;
        board[2] = 0;
        board[3] = 0;
        board[4] = 0;
        board[5] = 0;
        board[6] = 0;
        board[7] = 0;
        board[8] = 0;
    }
        
}

function drawTheX(xPosition, yPosition) {
    stroke(255, 0, 0);
    strokeWeight(5);
    line(xPosition - 30, yPosition - 30, xPosition + 30, yPosition + 30);
    line(xPosition - 30, yPosition + 30, xPosition + 30, yPosition - 30);
}

function drawTheO(xPosition, yPosition) {
    stroke(0, 0, 255);
    fill(200);
    strokeWeight(5);
    ellipse(xPosition, yPosition, 60);
}
