<script setup lang="ts">
import { useRoute } from '#app'

const { loggedIn, user, fetch: refreshSession } = useUserSession()
const route = useRoute()

const credentials = reactive({
  email: '',
  password: '',
})

async function login() {
  try {
    await $fetch('/api/login', {
      method: 'POST',
      body: credentials,
    })
    await refreshSession()
    await navigateTo({
      path: '/',
      query: { lang: route.query.lang || 'ru' },
    })
  } catch {
    alert('Bad credentials')
  }
}
</script>

<template>
  <form @submit.prevent="login" class="form-login">
    <div class="form-login__data">
      <p class="password__title">admin@admin.com</p>
      <p class="login__title">iamtheadmin</p>
    </div>

    <div class="form-login__wrapper">
      <input v-model="credentials.email" type="email" placeholder="Email" />
      <input v-model="credentials.password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </div>
  </form>
</template>
<style lang="scss" scoped>
.form-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: left;
  background-color: $scroll-color;

  .form-login__data {
    display: flex;
    flex-direction: column;
    width: 32rem;
    .password__title,
    .login__title {
      margin-bottom: 0.5rem;
      font-size: 1.8rem;
      color: $base-black-title;
    }
  }

  .form-login__wrapper {
    width: 50rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 100%;
    width: 32rem;

    input {
      padding: 0.75rem;
      border: 1px solid $border-grey;
      border-radius: 8px;
      font-size: 1rem;
    }

    button {
      padding: 0.75rem;
      border: none;
      border-radius: 8px;
      background-color: #007aff;
      color: #fff;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: #005bb5;
      }
    }
  }
}
</style>
