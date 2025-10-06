export default defineNuxtRouteMiddleware((to) => {
  if (!to.query.lang) {
    const defaultLang = 'ru'
    return navigateTo({
      path: to.path,
      query: { ...to.query, lang: defaultLang },
    })
  }
})
