import { useRoute } from '#app'

export const useLangRoute = () => {
  const route = useRoute()
  return (path: string) => ({
    path,
    query: { ...route.query },
  })
}
