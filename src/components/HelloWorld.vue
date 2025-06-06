<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <section class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </section>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
