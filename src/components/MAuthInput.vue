<template>
  <input class="m-auth-input" :type :placeholder v-model="model" />
</template>

<script setup lang="ts">
interface Props {
  type?: string
  placeholder?: string
}

const model = defineModel<string>()

const { type = 'text', placeholder = 'Введите' } = defineProps<Props>()
</script>

<style scoped>
.m-auth-input {
  border: none;
  border-bottom: 1px solid var(--color-primary);
  padding: 0.5rem;
  color: var(--color-primary);
  font-size: 1.25rem;
  line-height: 1.2;
  background: transparent;
  width: 100%;
}

.m-auth-input::placeholder {
  color: var(--color-primary);
  opacity: 0.5;
}

.m-auth-input:focus {
  outline: none;
}
</style>
