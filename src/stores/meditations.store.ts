import { defineStore } from 'pinia'
import { client } from '@/services/http.ts'
import type { MeditationItem } from '@/interfaces/meditation-item.interface.ts'
import { ref } from 'vue'
import type { SetMoodResponse } from '@/interfaces/mood-type.interface.ts'

export const useMeditationsStore = defineStore('meditations', () => {
  const meditationsList = ref<Array<MeditationItem>>([])

  async function getMeditations() {
    try {
      const { data, status } = await client().get<{
        status: string
        data: { meditations: Array<MeditationItem> }
      }>('/meditations')

      if (data && status == 200) {
        meditationsList.value = [...data.data.meditations]
      }
    } catch (e) {
      console.error(e)
    }
  }

  async function setDailyStat(statKey) {
    try {
      const { data, status } = await client().post<SetMoodResponse>('stats', {
        type: statKey,
        value: 1,
      })
    } catch (e) {
      console.error(e)
    }
  }

  return {
    meditationsList,

    getMeditations,
    setDailyStat,
  }
})
