<script setup>
import Navigator from './components/Navigator.vue';
import BouncingBall from "./views/BouncingBall.vue";
import CatchTheBall from "./views/CatchTheBall.vue";

let gameTitle = 'Catch-Ball';
</script>

<template>
  <section id="global-container">
    <header id="header">
      <h1>Welcome to the Game Gallery: Vite + Vue + P5.js</h1>
    </header>
    <main id="main-grid">
      <aside id="menu">

      </aside>
      <section id="game-viewer">
        <h3>Now Playing {{ gameTitle }}</h3>
        <CatchTheBall wWIDTH="600" wHEIGHT="400" />
      </section>
      <section id="controls">
        <p>game-CONTROLS</p>
      </section>
    </main>
    <footer id="footer">
      <p>rand-FOOTER STUFF</p>
    </footer>
  </section>
</template>

<style scoped>
#global-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
}

#header {
  background-color: aquamarine;
}

#main-grid {
  background-color: blueviolet;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-template-areas: 
    'menu game-viewer'
    'menu controls';
    flex-grow: 1;
}

#menu {
  background-color: black;
  grid-area: menu;
  max-width: 250px;
}

#game-viewer {
  background-color: chocolate;
  grid-area: game-viewer;

}

#controls {
  background-color: chartreuse;
  grid-area: controls;

}

#footer {
  background-color: firebrick;
}
</style>
