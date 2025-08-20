<script setup>
import { ref } from 'vue';
import gameCard from '../components/gameCard.vue';
import BouncingBall from "./BouncingBall.vue";
import CatchTheBall from "./CatchTheBall.vue";
import Snake from "./snake.vue";
let gameTitle = ref('Snake');
let wsize = 600;
let hsize = 400;
</script>

<template>
    <section id="main-grid">
        <aside id="side-bar">
            <gameCard title="Bouncing ball" description="This is a simple Bouncing ball"
                @click="gameTitle = 'Bounce-Ball'" />
            <gameCard title="Snake" description="This is a simple snake game" @click="gameTitle = 'Snake'" />
            <gameCard title="Catch The Ball" description="This is a simple Catching The Ball game"
                @click="gameTitle = 'Catch-Ball'" />
        </aside>
        <section id="frame">
            <h3>Now Playing {{ gameTitle }}</h3>
            <CatchTheBall v-if="gameTitle === 'Catch-Ball'" wWIDTH="600" wHEIGHT="400" />
            <BouncingBall v-else-if="gameTitle === 'Bounce-Ball'" wWIDTH="600" wHEIGHT="400" />
            <Snake v-else-if="gameTitle === 'Snake'" wWIDTH="600" wHEIGHT="400" />
        </section>
        <section id="controls">
            <button @click="gameTitle = 'NO Game'">STOP GAMES</button>
        </section>
    </section>
</template>

<style scoped>
#main-grid {
    display: grid;
    grid-template-areas: "side-bar frame"
        "side-bar frame"
        "side-bar controls";
       flex: 1;
}

#side-bar {
    grid-area: side-bar;
    max-width: 20rem;
    min-width: 180px;
    height: fit-content;
    max-height: calc(100vh - 100px);
    flex: 1; 
    overflow-y: auto;
}

#frame {
    grid-area: frame;
}

#controls {
    grid-area: controls;

}
</style>
