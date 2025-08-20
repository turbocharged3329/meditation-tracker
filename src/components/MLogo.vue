<template>
  <div class="m-logo" :style="{ width: `${width}px`, height: `${height}px` }">
    <img alt="Логотип" src="/logo@3x.png" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  width?: number | string
  height?: number | string
}

const { width = 76, height = 86 } = defineProps<Props>()
</script>

<style scoped>
.m-logo img {
  object-fit: contain;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0px 0px 60px white);
}
</style>
