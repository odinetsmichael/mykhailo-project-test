<script setup lang="ts">
import { MenuList } from '@/types/enums'
definePageMeta({
  middleware: ['authenticated'],
})
const { user, clear: clearSession } = useUserSession()

async function logout() {
  await clearSession()
  await navigateTo('/login')
}
</script>

<template>
  <NuxtLayout>
    <SubHeader :title="MenuList.SETTINGS" />
    <button class="button-logout" @click="logout">Logout</button>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.button-logout {
  margin-top: 20rem;
  padding: 1rem 2rem;
  width: 40rem;
  border-radius: $default-br;
  background-color: $danger-color;
  color: white;
}
</style>
