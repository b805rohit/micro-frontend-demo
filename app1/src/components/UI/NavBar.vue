<template>
  <header class="relative bg-blue-300 w-full flex justify-center items-center h-[60px] text-xl font-semibold font-sans">
    <div class="absolute left-5">Micro Frontend</div>
    <nav class="flex gap-10">
      <RouterLink active-class="border-b-2 border-gray-500" to="/">Home</RouterLink>
      <RouterLink active-class="border-b-2 border-gray-500" to="/vue_app">Vue App</RouterLink>
      <RouterLink active-class="border-b-2 border-gray-500" to="/react_app">React App</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped></style>
