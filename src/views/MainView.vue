<template>
  <div class="m-main-view">
    <section class="m-main-view__left">
      <MUserData />
      <MDailyMoodSelector />
    </section>

    <MMeditationsList />
  </div>
</template>

<script setup lang="ts">
import MMeditationsList from '@/components/meditaions-list/MMeditationsList.vue'
import MUserData from '@/components/MUserData.vue'
import MDailyMoodSelector from '@/components/MDailyMoodSelector.vue'
</script>

<style scoped>
.m-main-view {
  display: flex;
  gap: 7.8vw;
}

.m-main-view__left {
  flex-shrink: 0;
}
</style>
