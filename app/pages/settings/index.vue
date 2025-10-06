<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { MenuList } from '@/types/enums'
import { useRoute, useRouter } from 'vue-router'

definePageMeta({
  middleware: ['authenticated'],
})

const { locale, t } = useI18n()
const router = useRouter()
const route = useRoute()

const { user, clear: clearSession } = useUserSession()

async function logout() {
  await clearSession()
  await navigateTo('/login')
}

const availableLanguages = [
  { name: 'English', code: 'en' },
  { name: 'Українська', code: 'uk' },
  { name: 'Русский', code: 'ru' },
]

const queryLang = Array.isArray(route.query.lang) ? route.query.lang[0] : route.query.lang
const selectedLanguage = ref<string>(queryLang || locale.value)

function changeLanguage(lang: string) {
  locale.value = lang

  router.replace({
    query: { ...route.query, lang },
  })
}
</script>

<template>
  <NuxtLayout>
    <div class="settings">
      <SubHeader :title="t(MenuList.SETTINGS)" />

      <div class="filter">
        <label class="filter-label"> {{ t('pages.settings.language-label') }}: </label>
        <select
          class="form-select"
          v-model="selectedLanguage"
          @change="changeLanguage(selectedLanguage)"
        >
          <option v-for="lang in availableLanguages" :key="lang.code" :value="lang.code">
            {{ lang.name }}
          </option>
        </select>
      </div>

      <button class="button-logout" @click="logout">
        {{ t('pages.settings.logout-button') }}
      </button>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.settings {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .button-logout {
    padding: 1rem 2rem;
    width: 40rem;
    border-radius: $default-br;
    background-color: $danger-color;
    color: white;
  }

  .filter {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    width: 40rem;
  }
}
</style>
