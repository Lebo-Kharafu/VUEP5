<script setup>
import Navigator from './components/Navigator.vue';
import  BouncingBall  from "./views/BouncingBall.vue";
import  CatchTheBall  from "./views/CatchTheBall.vue";
</script>

<template>
  <h1>Welcome to the Sketches Gallery: Vite + Vue + P5.js</h1>
  <CatchTheBall 
    wWIDTH="600"
    wHEIGHT="400"
  />
  <!-- <Navigator currentSketch="One"/> -->
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
