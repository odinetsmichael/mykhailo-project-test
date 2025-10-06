export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn } = useUserSession()

  if (!loggedIn.value) {
    const langQuery = to.query.lang ? { lang: to.query.lang } : { lang: 'ru' }
    return navigateTo({ path: '/login', query: langQuery })
  }
})
