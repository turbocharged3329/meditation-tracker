<template>
  <div class="m-meditations-list-item">
    <h6 class="m-meditations-list-item__title">{{ itemData.title }}</h6>
    <p class="m-meditations-list-item__desc">{{ itemData.description }}</p>
    <div class="m-meditations-list-item__footer">
      <button class="m-meditations-list-item__start-button">
        Начать
        <MPlayIcon />
      </button>
      <span class="m-meditations-list-item__duration">{{ itemData.duration_min }} мин</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MeditationItem } from '@/interfaces/meditation-item.interface.ts'
import MPlayIcon from '@/components/icons/MPlayIcon.vue'

interface Props {
  itemData: MeditationItem
}

const { itemData } = defineProps<Props>()
</script>

<style scoped>
.m-meditations-list-item {
  background: var(--color-primary);
  border-radius: 20px;
  padding: 1.5rem 1.25rem;
  color: var(--color-secondary);
}

.m-meditations-list-item__title {
  font-size: 1.5rem;
  line-height: 1.2;
}

.m-meditations-list-item__desc {
  font-size: 0.9rem;
}

.m-meditations-list-item__footer {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.m-meditations-list-item__start-button {
  font-size: 0.9375rem;
  border-radius: 0.75rem;
  padding: 0.625rem 0.8rem;
  box-sizing: border-box;
  border: none;
  background-color: var(--color-secondary);
  color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.625rem;
}

.m-meditations-list-item__duration {
  color: rgba(var(--color-secondary), 0.75);
}
</style>
