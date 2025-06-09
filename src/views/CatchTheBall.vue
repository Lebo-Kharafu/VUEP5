<template>
  <section ref="sketchContainer" class="sketch-container"></section>
</template>

<script setup>
const props = defineProps(
  ['wWIDTH', 'wHEIGHT',]
);
import { onMounted, ref } from 'vue';
import p5 from 'p5';

const sketchContainer = ref(null);

onMounted(() => {
  new p5((sketch) => {
    let ballSize = 23;
    let baseLength = ballSize * 4;
    let baseHeight = 5;


    let baseX = (props.wWIDTH / 2) - (baseLength / 2);
    let baseY = 300;
    let ballX = props.wWIDTH / 2;
    let ballY = baseY - (ballSize / 2);

    let speedX = 3.9;
    let speedY = 2.4;

    let pausedLoop = true;
    let score = 0;
    //let disScore = "Bounces caught "+score;
    let disScore = `Bounces caught: ${score}`;


    sketch.setup = () => {
      sketch.createCanvas(props.wWIDTH, props.wHEIGHT);
      sketch.background(200);
      ballX = baseX + (baseLength / 2);
      ballY = baseY - (ballSize / 2);
      speedY = -Math.abs(speedY);
      sketch.textAlign(sketch.CENTER, sketch.TOP);

    };


    sketch.keyPressed = (event) => {
      /*if (sketch.key === sketch.LEFT_ARROW) {
        if(baseX > 0){baseX -= 10;}
      }
      else if (sketch.key === sketch.RIGHT_ARROW) {
        if((baseX + baseLength) < 400){baseX += 10;}
      }*/
      if (sketch.keyCode === 32) {
        if (pausedLoop) {
          pausedLoop = false;
          sketch.loop();

        }
        else {
          pausedLoop = true;
        }
      }
      return false;
    };

    sketch.draw = () => {
      sketch.textSize(28);
      if (pausedLoop) {
        sketch.noLoop();
      }
      else {
        sketch.loop();
      }

      sketch.background(200);
      sketch.fill(0, 0, 0);
      sketch.text(disScore, props.wWIDTH / 2, 50);
      sketch.fill(255, 0, 0);
      sketch.ellipse(ballX, ballY, ballSize);
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

      if ((ballY + ballSize / 2) >= baseY) {

        /*if (((baseX + baseLength) - (ballX + ballSize / 2) <= 0) || (baseX - (ballX + ballSize / 2) <= 0) ) {
          speedY = -speedY;
        }*/
        let ballRad = ballSize / 2;
        if ((baseX > (ballX + ballRad))) {
          speedY = -speedY;
          score++;
          disScore = `Bounces caught: ${score}`;

        }
        if (((baseX + baseLength) > (ballX - ballRad))) {
          speedY = -speedY;
          score++;
          disScore = `Bounces caught: ${score}`;

        }

        if ((ballY + ballSize / 2) > baseY) {
          pausedLoop = true;
          baseX = (props.wWIDTH / 2) - (baseLength / 2);
          ballX = props.wWIDTH / 2;
          ballY = baseY - (ballSize / 2);
          speedY = -Math.abs(speedY);
          score = 0;
        }
      }

      if (sketch.keyIsDown(sketch.LEFT_ARROW)) {
        if (baseX > 0) { baseX -= 10; }
      }
      else if (sketch.keyIsDown(sketch.RIGHT_ARROW)) {
        if ((baseX + baseLength) < props.wWIDTH) { baseX += 10; }
      }

    };
  }, sketchContainer.value);
});
</script>

<style scoped>
.sketch-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
