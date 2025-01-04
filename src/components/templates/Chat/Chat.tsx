import { useState, useEffect } from 'react'
import io, { Socket } from 'socket.io-client'
import { Button } from '@/components/atoms/Button'
import { TextBox } from '@/components/atoms/TextBox'
import styles from './styles.module.css'

// socketをグローバル変数として型付きで定義
let socket: Socket | undefined

export const Chat = () => {
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
    <div className={styles.container}>
      <h1 className={styles.title}>WebSocketチャットデモ</h1>
      
      <div className={styles.messageContainer}>
        {messages.map((msg, i) => (
          <div 
            key={i} 
            className={styles.message}
          >
            {msg}
          </div>
        ))}
      </div>

      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <TextBox
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="メッセージを入力"
          />
        </div>
        <Button
          onClick={sendMessage}
          className="bg-blue-500 text-white"
        >
          送信
        </Button>
      </div>
    </div>
  )
}