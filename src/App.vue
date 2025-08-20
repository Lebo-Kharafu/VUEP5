<script setup>
  import { ref } from 'vue';
  import screen from './views/screen.vue';

</script>

<template>
  <section id="global-container">
    <header id="header">
      <h1>Welcome to the Game Gallery: Vite + Vue + P5.js</h1>
    </header>
    <screen/>    
    <footer id="footer">
      <p>Since 2025</p>
    </footer>
  </section>
</template>

<style scoped>
 #global-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
}

#header {
  background-color: aquamarine;
}


/* #footer {
} */
</style>
