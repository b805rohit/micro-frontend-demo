<script setup lang="ts">
import Postmate from "postmate";

const handshake = new Postmate.Model({});

handshake.then((parent) => {
  console.log("Handshake with Parent Complete.");
  const { model } = parent as unknown as { model: { data: number[] } };

  console.log("Parent Data is:", model.data);

  parent.emit("app1Test", "Hello From Child.");
});
</script>

<template>
  <div class="flex justify-center h-screen items-center">
    <h1 class="text-4xl font-semibold">Hello From Child 1</h1>
  </div>
</template>

<style scoped></style>
