<template>
    <article id="game-card">
        <h4 id="game-title">{{ props.title }}</h4>
        <img id="game-image" :src=gameCover :alt=altStr>
        <!-- <p id="game-desc">{{ props.description  }}</p> -->
    </article>
</template>

<script setup>
    import { ref } from 'vue';
    import defaultImage from "../assets/cd.svg";
    const props = defineProps(['title','description','cover-img']);
    const gameCover =  props['cover-img'] || defaultImage;
     const altStr =  `This the game cover of  ${props.title}`;
     console.log(gameCover);
</script>

<style scoped>
    #game-card{
        padding: 0;
        margin: 0;
        display: grid;
        background-color: crimson;
        grid-template-columns: 1fr 2fr;
        grid-template-areas: "game-image game-title";

        border-color: coral;
        border-style: dotted;
      
    }
    
    #game-title{
        grid-area: game-title;
        align-content: center;
    }

    #game-image{
        grid-area: game-image;
        width: 100%;
        height: 100%;
    }

    #game-desc{
        grid-area: game-desc;

    }


</style>