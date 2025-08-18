<template>
  <div class="m-mood-selector">
    <p class="m-mood-selector__title">Как вы сегодня себя чувствуете ?</p>

    <div class="m-mood-selector-list">
      <button
        class="m-mood-selector-list-item"
        v-for="item in MOOD_ITEMS"
        :key="item.id"
        @click="onClickMoodItem(item.id)"
      >
        <component class="m-mood-selector-list-item__icon" :is="item.iconComponent" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useMeditationsStore } from '@/stores/meditations.store.ts'

const MCalmIconComponent = defineAsyncComponent(() => import('./icons/mood/MCalmMoodIcon.vue'))
const MFocusIconComponent = defineAsyncComponent(() => import('./icons/mood/MFocusMoodIcon.vue'))
const MInYanIconComponent = defineAsyncComponent(() => import('./icons/mood/MInYanMoodIcon.vue'))
const MSpiralIconComponent = defineAsyncComponent(() => import('./icons/mood/MSpiralMoodIcon.vue'))

const MOOD_ITEMS = [
  {
    id: 'feeling_calm',
    title: 'Спокойно',
    iconComponent: MInYanIconComponent,
  },
  {
    id: 'feeling_relax',
    title: 'Расслабленно',
    iconComponent: MCalmIconComponent,
  },
  {
    id: 'feeling_focus',
    title: 'Фокусировано',
    iconComponent: MFocusIconComponent,
  },
  {
    id: 'feeling_anxiety',
    title: 'Тревожно',
    iconComponent: MSpiralIconComponent,
  },
]
const { setDailyStat } = useMeditationsStore()

async function onClickMoodItem(moodType: string) {
  await setDailyStat(moodType)
}
</script>

<style scoped>
.m-mood-selector {
  display: flex;
  flex-direction: column;
}

.m-mood-selector__title {
  font-size: 1.375rem;
  opacity: 0.7;
  color: var(--color-primary);
  margin-bottom: 2.25rem;
}

.m-mood-selector-list {
  display: flex;
  gap: 1rem;
}

.m-mood-selector-list-item {
  background-color: var(--color-primary);
  width: 4.8vw;
  height: 5vw;
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.m-mood-selector-item__icon {
  width: 2.5vw;
  height: auto;
}
</style>
