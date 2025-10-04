import { io, type Socket } from 'socket.io-client'

let socket: Socket | null = null
const activeUsers = ref(0)

export function useActiveUsers() {
  if (!socket && process.client) {
    const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws'
    const host = window.location.hostname
    const port = window.location.port ? `:${window.location.port}` : ''
    const url = `${protocol}://${host}${port}`

    socket = io(url, { path: '/socket.io', transports: ['websocket', 'polling'] })
    socket.on('activeUsers', (count: number) => {
      activeUsers.value = count
    })
  }

  return { activeUsers }
}
