import { defineStore } from 'pinia'
import http from '@/services/http.ts'
import type { MeditationItem } from '@/interfaces/meditation-item.interface.ts'
import { ref } from 'vue'

export const useMeditationsStore = defineStore('meditations', () => {
  const meditationsList = ref<Array<MeditationItem>>([])

  async function getMeditations() {
    try {
      const { data, status } = await http.get<{
        status: string
        data: { meditations: Array<MeditationItem> }
      }>('/meditations')

      if (data && status == 200) {
        meditationsList.value = [...data.data.meditations]
      }
    } catch (e) {
      console.log(e)
    }
  }

  return {
    meditationsList,

    getMeditations,
  }
})
