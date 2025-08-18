<template>
  <div>
    <header class="m-header" v-if="!isAuthPage">
      <MLogo />
      <MNavMenu />
    </header>

    <main class="m-main" :class="{ 'm-main--auth': isAuthPage }">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MNavMenu from '@/components/MNavMenu.vue'
import MLogo from '@/components/MLogo.vue'

const route = useRoute()

const isAuthPage = computed(() => ['Login', 'Registration'].includes(route.name as string))
</script>

<style scoped>
.m-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 4rem;
}

.m-main {
  padding: 0 4rem;
}

.m-main--auth {
  padding: 0;
}
</style>
