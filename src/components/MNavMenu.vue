<template>
  <nav class="m-nav-menu">
    <ul class="m-nav-menu-list">
      <RouterLink :to="{ path: '/' }" class="m-nav-menu-list__item">
        <MPlayMenuIcon />
        Медитация
      </RouterLink>
      <RouterLink :to="{ name: 'Statistics' }" class="m-nav-menu-list__item">
        <MStatisticsMenuIcon />
        Статистика
      </RouterLink>
      <a class="m-nav-menu-list__item" @click.prevent="logout">
        <MExitMenuIcon />
        Выход
      </a>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import MPlayMenuIcon from '@/components/icons/menu/MPlayMenuIcon.vue'
import MStatisticsMenuIcon from '@/components/icons/menu/MStatisticsMenuIcon.vue'
import MExitMenuIcon from '@/components/icons/menu/MExitMenuIcon.vue'
import { useAuthStore } from '@/stores/auth.store.ts'
import { useRouter } from 'vue-router'

const router = useRouter()
const { clearToken } = useAuthStore()

function logout() {
  clearToken()
  router.replace({ name: 'Login' })
}
</script>

<style scoped>
.m-nav-menu {
  color: var(--color-primary);
}

.m-nav-menu-list {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 1rem;
}

.m-nav-menu-list__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.375rem;
  gap: 0.2rem;
  opacity: 0.5;
  text-decoration: none;
  color: var(--color-primary);
  width: 200px;
  min-height: 75px;
}

.m-nav-menu-list__item:not(:last-child) {
  border-right: 3px solid #3a5051;
}
</style>
