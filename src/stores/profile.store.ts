import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { UserProfile, ProfileResponse } from '@/interfaces/profile.interface.ts'
import { client } from '@/services/http.ts'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<UserProfile>()

  const username = computed(() => profile.value?.username)

  async function getProfile() {
    try {
      const { data, status } = await client().get<ProfileResponse>('profile')

      if (data && status == 200) {
        profile.value = data.data.user
      }
    } catch (e) {
      console.log(e)
    }
  }

  return {
    profile,

    username,

    getProfile,
  }
})
