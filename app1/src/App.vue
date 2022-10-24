<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from './components/UI/NavBar.vue';
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
</template>

<style>
#app {
  @apply w-full h-screen;
}
main {
  height: calc(100% - 60px);
}
</style>
