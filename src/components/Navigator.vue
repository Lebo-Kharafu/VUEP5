<template>
    <nav class="nav-bar">
        <ul>
            <li><button><img src="../assets/back-arrow.svg" alt="Arrow for moving back to previous sketch"></button></li>
            <li>{{ currentSketch }}</li>
            <li><button><img src="../assets/forward-arrow.svg" alt="Arrow for moving forward to next sketch"></button></li>
        </ul>
    </nav>
</template>

<script setup>
    defineProps({
    currentSketch: String,
    });
</script>

<style scoped>
    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: space-evenly; 
        align-items: center; 
        text-align: center;
    }

    img{
        width: 2rem;
        height: auto;
    }
</style>
