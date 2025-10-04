import { io } from 'socket.io-client'

export function useActiveUsers() {
  const activeUsers = ref(0)

  onMounted(() => {
    const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws'
    const host = window.location.hostname
    const port = window.location.port ? `:${window.location.port}` : ''
    const url = `${protocol}://${host}${port}`

    const socket = io(url, {
      path: '/socket.io',
      transports: ['websocket', 'polling'],
    })

    socket.on('connect', () => console.log('🟢 Socket connected'))
    socket.on('activeUsers', (count: number) => {
      activeUsers.value = count
    })
    socket.on('disconnect', () => console.log('🔴 Socket disconnected'))
  })

  return { activeUsers }
}
