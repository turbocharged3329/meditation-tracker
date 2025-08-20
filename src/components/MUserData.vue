<template>
  <section class="m-user-data">
    <div class="m-user-data-avatar">
      <img
        src="https://avatars.mds.yandex.net/i?id=d89e4fcb6f7da0ee5abe7f5fdd5b0eca_l-16509647-images-thumbs&n=13"
      />
    </div>
    <h6 class="m-user-data__title">Добро пожаловать, {{ username }}</h6>
  </section>
</template>

<script setup lang="ts">
import { useProfileStore } from '@/stores/profile.store.ts'
import { storeToRefs } from 'pinia'

const profileStore = useProfileStore()
const { getProfile } = profileStore
const { username } = storeToRefs(profileStore)

getProfile()
</script>

<style scoped>
.m-user-data {
  color: var(--color-primary);
}

.m-user-data-avatar {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  overflow: hidden;
  opacity: 0.7;
  margin-bottom: 1.875rem;
}

.m-user-data-avatar img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.m-user-data__title {
  font-size: 1.875rem;
  font-weight: 500;
}
</style>
