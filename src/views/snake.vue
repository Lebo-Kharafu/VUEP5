<template>
  <section ref="sketchContainer" class="sketch-container"></section>
</template>

<script setup>

import {createGame} from '../gameScripts/snake/snakeGame.js';
import { onMounted,onUnmounted , ref } from 'vue';
import p5 from 'p5';

const sketchContainer = ref(null);
let p5Instance = null;

const props = defineProps(
  ['wWIDTH', 'wHEIGHT',]
);


onMounted(() => {
  p5Instance = new p5((sketch) => {  
    createGame(sketch,Number(props.wWIDTH) ,Number( props.wHEIGHT));
  }, sketchContainer.value);

});

onUnmounted(() => {
  //alert("Unmounted now deleting backgroud sketch");
  if (p5Instance) {
    p5Instance.remove();
  }
});

</script>

<style scoped>
.sketch-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
}
</style>
