
export function createGame(sketch,width,height){

    let x = 50;
    let y = 50;
    let speedX = 3.9;
    let speedY = 2.4;
    let ballSize = 23;

    sketch.setup = () => {
      sketch.createCanvas(Number(width), Number(height));
      sketch.background(200);
    };

    sketch.draw = () => {
      sketch.background(200); // Clear the canvas each frame
      sketch.fill(255, 0, 0);
      sketch.ellipse(x, y, ballSize);

      // Update ball position
      x += speedX;
      y += speedY;

      // Bounce off walls
      if (x + ballSize / 2 > sketch.width || x - ballSize / 2 < 0) {
        speedX = -speedX;
      }
      if (y + ballSize / 2 > sketch.height || y - ballSize / 2 < 0) {
        speedY = -speedY;
      }
    };


};