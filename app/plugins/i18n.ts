import { defineNuxtPlugin, useRequestURL } from '#app'
import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin((nuxtApp) => {
  const messages = {
    en: { welcome: 'Welcome', date: 'Date', time: 'Time', activeUsers: 'Active Users' },
    ru: {
      welcome: 'Добро пожаловать',
      date: 'Дата',
      time: 'Время',
      activeUsers: 'Активных пользователей',
    },
  }

  const i18n = createI18n({
    legacy: false,
    locale: 'ru',
    fallbackLocale: 'en',
    messages,
  })

  nuxtApp.vueApp.use(i18n)
  nuxtApp.vueApp.config.globalProperties.$t = i18n.global.t
  nuxtApp.vueApp.config.globalProperties.$locale = i18n.global.locale

  // ✅ безопасный способ для SSR + CSR
  const url = useRequestURL()
  const lang = url.searchParams.get('lang')
  if (lang && Object.keys(messages).includes(lang)) {
    i18n.global.locale.value = lang as keyof typeof messages
  }
})
