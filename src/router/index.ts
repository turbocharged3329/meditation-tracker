import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { useAuthStore } from '@/stores/auth.store.ts'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (!authStore.getToken() && !['Login', 'Registration'].includes(to.name as string)) {
    next({
      path: '/login',
    })
  }

  next()
})

export default router
