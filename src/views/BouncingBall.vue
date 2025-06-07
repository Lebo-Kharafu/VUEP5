<template>
  <section ref="sketchContainer" class="sketch-container"></section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import p5 from 'p5';

const sketchContainer = ref(null);

onMounted(() => {
  new p5((sketch) => {
    let x = 50;
    let y = 50;
    let speedX = 3.9;
    let speedY = 2.4;
    let ballSize = 23;

    sketch.setup = () => {
      sketch.createCanvas(400, 400);
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
