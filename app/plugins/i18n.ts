import { defineNuxtPlugin, useRequestURL } from '#app'
import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(async (nuxtApp) => {
  const locales = ['en', 'ru', 'uk']
  const messages: Record<string, any> = {}

  for (const locale of locales) {
    messages[locale] = await import(`~/locales/${locale}.json`).then((m) => m.default)
  }

  const i18n = createI18n({
    legacy: false,
    locale: 'ru',
    fallbackLocale: 'en',
    messages,
  })

  nuxtApp.vueApp.use(i18n)

  const url = useRequestURL()
  const lang = url.searchParams.get('lang')

  if (lang && locales.includes(lang)) {
    i18n.global.locale.value = lang
  } else {
    i18n.global.locale.value = 'ru' // дефолт
    const router = useRouter()
    router.replace({
      query: { ...useRoute().query, lang: 'ru' },
    })
  }
})
