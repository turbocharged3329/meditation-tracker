<template>
  <div class="m-auth-page">
    <form @submit.prevent="onRegister" class="m-auth-page-form">
      <MLogo class="m-auth-page__logo" width="202" height="213" />
      <MAuthInput placeholder="Email" v-model="userData.email" />
      <MAuthInput placeholder="Имя пользователя" v-model="userData.username" />
      <MAuthInput type="password" placeholder="Пароль" v-model="userData.password" />
      <button type="submit" class="m-auth-page-form__submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MLogo from '@/components/MLogo.vue'
import MAuthInput from '@/components/MAuthInput.vue'
import type { AuthInterface } from '@/interfaces/auth.interface.ts'
import { useAuthStore } from '@/stores/auth.store.ts'
import { useRouter } from 'vue-router'

const userData = ref<AuthInterface>({
  email: undefined,
  password: undefined,
  username: undefined,
})

const { register } = useAuthStore()
const router = useRouter()

async function onRegister() {
  const isSuccessfulRegistration = await register(userData.value)

  if (isSuccessfulRegistration) {
    router.push({ name: 'Login' })
  }
}
</script>

<style scoped></style>
