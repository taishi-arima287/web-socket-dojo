import { Server } from 'socket.io'
import { NextApiRequest } from 'next'
import { NextApiResponseWithSocket } from './types'

const SocketHandler = (req: NextApiRequest, res: NextApiResponseWithSocket) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
    res.end()
    return
  }

  const io = new Server(res.socket.server)
  res.socket.server.io = io

  io.on('connection', (socket) => {
    console.log('クライアント接続成功')

    socket.on('send-message', (msg) => {
      io.emit('receive-message', msg)
    })

    socket.on('disconnect', () => {
      console.log('クライアント切断')
    })
  })

  res.end()
}

export default SocketHandler 