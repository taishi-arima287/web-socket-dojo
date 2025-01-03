import { useState, useEffect } from 'react'
import io, { Socket } from 'socket.io-client'

// socketをグローバル変数として型付きで定義
let socket: Socket | undefined

export default function Home() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<string[]>([])

  useEffect(() => {
    const initSocket = async () => {
      await fetch('/api/socket')
      socket = io()

      socket.on('receive-message', (msg: string) => {
        setMessages((prev) => [...prev, msg])
      })
    }

    // socketが未初期化の場合のみ初期化
    if (!socket) {
      initSocket()
    }

    // クリーンアップ関数
    return () => {
      if (socket) {
        socket.disconnect()
        socket = undefined
      }
    }
  }, [])

  const sendMessage = () => {
    if (message.trim() && socket) {
      socket.emit('send-message', message)
      setMessage('')
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">WebSocketチャットデモ</h1>
      
      <div className="mb-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 mr-2"
          placeholder="メッセージを入力"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          送信
        </button>
      </div>

      <div className="border p-4">
        {messages.map((msg, i) => (
          <div key={i} className="mb-2">
            {msg}
          </div>
        ))}
      </div>
    </div>
  )
} 