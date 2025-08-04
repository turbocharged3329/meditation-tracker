<template>
  <section class="m-meditations-list" v-if="meditationsList.length">
    <MMeditationsListItem v-for="item in meditationsList" :key="item.id" :item-data="item" />
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMeditationsStore } from '@/stores/meditations.ts'
import MMeditationsListItem from '@/components/meditaions-list/MMeditationsListItem.vue'

const meditationsStore = useMeditationsStore()
const { getMeditations } = meditationsStore
const { meditationsList } = storeToRefs(meditationsStore)

getMeditations()
</script>

<style scoped>
.m-meditations-list {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
</style>
