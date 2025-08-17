<template>
  <div class="m-statistics-item">
    <span class="m-statistics-item__counter">80</span>
    <span class="m-statistics-item__title">title</span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.m-statistics-item {
  border-radius: 1.25rem;
  color: var(--color-primary);
  min-width: 250px;
  height: 10vw;
  aspect-ratio: 3/2;
  background: url('/statistic-item-bg.png') no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
}

.m-statistics-item--red {
  background-color: rgba(255, 0, 0, 0.5);
}

.m-statistics-item__counter {
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 5rem;
  font-weight: bold;
}

.m-statistics-item__title {
  font-size: 1.125rem;
}
</style>
