import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { useAuthStore } from '@/stores/auth.store.ts'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (!authStore.getToken() && to.name !== 'Login') {
    next({
      path: '/login',
    })
  }

  next()
})

export default router
