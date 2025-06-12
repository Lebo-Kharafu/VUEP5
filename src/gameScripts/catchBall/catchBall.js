// ballGame.js
export function createGame(sketch, width, height) {
  let ballSize = 23;
  let baseLength = ballSize * 4;
  let baseHeight = 5;
  let baseX = (width / 2) - (baseLength / 2);
  let baseY = height * 0.75;
  let ballX = width / 2;
  let ballY = baseY - (ballSize / 2);
  let speedX = sketch.random(2.5, 5);
  let speedY = sketch.random(2.5, 5);
  let pausedLoop = true;
  let score = 0;
  let prevScore = 0;
  let disScore = `Bounces caught: ${score}`;

  console.log(`Speed is [${speedX},${speedY}]`);

  const resetGame = () => {
    baseX = (width / 2) - (baseLength / 2);
    ballX = width / 2;
    ballY = baseY - (ballSize / 2);
    speedY = -Math.abs(speedY);
    prevScore = score;
    disScore = `Bounces caught: ${score}`;
    score = 0;
  };

  sketch.setup = () => {
    sketch.createCanvas(width, height);
    sketch.background(200);
    ballX = baseX + (baseLength / 2);
    ballY = baseY - (ballSize / 2);
    speedY = -Math.abs(speedY);
    sketch.textAlign(sketch.CENTER, sketch.TOP);
  };

  sketch.keyPressed = (event) => {
    if (sketch.keyCode === 32) {
      if (pausedLoop) {
        pausedLoop = false;
        sketch.loop();
      } else {
        pausedLoop = true;
      }
    }
    return false;
  };

  sketch.draw = () => {
    sketch.textSize(28);
    
    if (pausedLoop) {
      sketch.noLoop();
    } else {
      sketch.loop();
    }

    sketch.background(200);
    
    // Draw score
    sketch.fill(0, 0, 0);
    sketch.text(disScore, width / 2, 50);
    
    // Draw ball
    sketch.fill(255, 0, 0);
    sketch.ellipse(ballX, ballY, ballSize);
    
    // Draw paddle
    sketch.fill(0, 0, 255);
    sketch.rect(baseX, baseY, baseLength, baseHeight);

    // Update ball position
    ballX += speedX;
    ballY += speedY;

    // Bounce off walls
    if (ballX + ballSize / 2 > sketch.width || ballX - ballSize / 2 < 0) {
      speedX = -speedX;
    }
    if (ballY + ballSize / 2 > sketch.height || ballY - ballSize / 2 < 0) {
      speedY = -speedY;
    }

    // Paddle collision
    if ((ballY + ballSize / 2) >= baseY) {
      let ballRad = ballSize / 2;
      if ((baseX < (ballX + ballRad)) && ((baseX + baseLength) > (ballX - ballRad))) {
        speedY = -speedY;
        score++;
        disScore = `Bounces caught: ${score}`;
      } else {
        pausedLoop = true;
        resetGame();
      }
    }

    // Paddle movement
    if (sketch.keyIsDown(sketch.LEFT_ARROW)) {
      if (baseX > 0) { baseX -= 10; }
    } else if (sketch.keyIsDown(sketch.RIGHT_ARROW)) {
      if ((baseX + baseLength) < width) { baseX += 10; }
    }
  };
};