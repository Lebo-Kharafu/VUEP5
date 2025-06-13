<script setup>
  import { ref } from 'vue';
  import Navigator from './components/Navigator.vue';
  import gameCard from './components/gameCard.vue';
  import BouncingBall from "./views/BouncingBall.vue";
  import CatchTheBall from "./views/CatchTheBall.vue";

  let gameTitle = ref('Catch-Ball');
</script>

<template>
  <section id="global-container">
    <header id="header">
      <h1>Welcome to the Game Gallery: Vite + Vue + P5.js</h1>
    </header>
    <main id="main-grid">
      <aside id="menu">
        <gameCard title="Bouncing ball" description="This is a simple Bouncing ball"  @click="gameTitle = 'Bounce-Ball'"/>
        <gameCard title="Catch The Ball" description="This is a simple Catching The Ball game" @click="gameTitle = 'Catch-Ball'" />
      </aside>
      <section id="game-viewer">
        <h3>Now Playing {{ gameTitle }}</h3>
        <CatchTheBall  v-if="gameTitle === 'Catch-Ball'" wWIDTH="600" wHEIGHT="400" />
        <BouncingBall  v-else-if="gameTitle === 'Bounce-Ball'" wWIDTH="600" wHEIGHT="400" />
      </section>
      <section id="controls">
        <p>game-CONTROLS</p>
      </section>
    </main>
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
  height: 100%;
}

#header {
  background-color: aquamarine;
}

#main-grid {
  /* background-color: blueviolet; */
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  grid-template-areas: 
    'menu game-viewer'
    'menu controls';
    flex-grow: 1;
}

#menu {
  background-color: black;
  grid-area: menu;
  max-width: 300px;
  max-height: 515px;
  overflow-y: auto;
}

#game-viewer {
  /* background-color: chocolate; */
  grid-area: game-viewer;

}

#controls {
  background-color: darkslategray;
  grid-area: controls;

}

#footer {
  /* background-color: firebrick; */
}
</style>
