import { Server } from 'socket.io'

let io: Server | null = null!
let activeUsers = 0
export default defineEventHandler((event) => {
  const { req, res } = event.node

  const url = req.url || ''

  if (!url.startsWith('/socket.io')) return

  if (!io) {
    // @ts-ignore
    io = new Server(res.socket.server, {
      path: '/socket.io',
      cors: { origin: '*' },
      transports: ['websocket', 'polling'],
    })

    io.on('connection', (socket) => {
      activeUsers++
      console.log('🟢 Клиент подключился. Всего:', activeUsers)
      io.emit('activeUsers', activeUsers)

      socket.on('disconnect', () => {
        activeUsers--
        console.log('🔴 Клиент отключился. Осталось:', activeUsers)
        io.emit('activeUsers', activeUsers)
      })
    })

    console.log('✅ Socket.io сервер запущен')
  }

  res.end()
})
