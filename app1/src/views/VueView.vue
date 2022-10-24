<template>
  <div ref="container" class="h-full w-full" />
</template>

<script setup lang="ts">
import Postmate from 'postmate';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const container = ref<HTMLElement>();
const handshake = ref<Postmate>();

onMounted(() => {
  handshake.value = new Postmate({
    container: container.value,
    url: 'http://localhost:5174',
    name: 'parent-iframe',
    model: {
      data: [1, 2, 3, 4, 5],
    },
    classListArray: ['w-full', 'h-full'],
  })
    .then((child) => {
      child.on('app1Test', (data) => {
        console.log(data);
      });
    })
    .catch((error) => {
      console.log(error.message);
    }) as unknown as Postmate;
});

const destroyApp = () => {
  handshake.value?.then((child) => {
    child?.destroy();
  });
};

onBeforeUnmount(() => {
  destroyApp();
});
</script>

<style></style>
