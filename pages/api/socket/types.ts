import { Server as NetServer } from 'http'
import { Socket as NetSocket } from 'net'
import { Server as SocketIOServer } from 'socket.io'
import { NextApiResponse } from 'next'

export interface SocketServer extends NetServer {
  io?: SocketIOServer
}

export interface SocketWithIO extends NetSocket {
  server: SocketServer
}

export interface NextApiResponseWithSocket extends NextApiResponse {
  socket: SocketWithIO
} 