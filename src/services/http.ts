import axios from 'axios'
import { useAuthStore } from '@/stores/auth.store.ts'

const BASE_URL = 'http://localhost:3000/api'

export function client() {
  const authStore = useAuthStore()

  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${authStore.getToken()}`,
    },
  })
}
