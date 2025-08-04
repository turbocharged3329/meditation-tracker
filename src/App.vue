<template>
  <div>
    <header class="m-header">
      <MLogo />
      <MNavMenu />
    </header>

    <main class="m-main">
      <MMeditationsList />
    </main>
  </div>
</template>

<script setup lang="ts">
import MNavMenu from '@/components/MNavMenu.vue'
import MLogo from '@/components/MLogo.vue'
import MMeditationsList from '@/components/meditaions-list/MMeditationsList.vue'
</script>

<style scoped>
.m-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 4rem;
}

.m-main {
  padding: 0 4rem;
}
</style>
