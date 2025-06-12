<template>
  <section ref="sketchContainer" class="sketch-container"></section>
</template>

<script setup>
import {createGame} from "../gameScripts/bouncingBall/bouncingBall.js";
import { onMounted, ref } from 'vue';
import p5 from 'p5';

const sketchContainer = ref(null);

const props = defineProps(['wWIDTH','wHEIGHT',]);

onMounted(() => {
  new p5((sketch) => {
    createGame(sketch,props.wWIDTH,props.wHEIGHT);
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
