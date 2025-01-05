import { Button } from "@/components/atoms/Button";
import { TextBox } from "@/components/atoms/TextBox";
import { MessageContainer } from "@/components/molecules/MessageContainer";
import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import styles from "./styles.module.css";

// socketをグローバル変数として型付きで定義
let socket: Socket | undefined;

export const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const initSocket = async () => {
      await fetch("/api/socket");
      socket = io();

      socket.on("receive-message", (msg: string) => {
        setMessages(prev => [...prev, msg]);
      });
    };

    if (!socket) {
      initSocket();
    }

    return () => {
      if (socket) {
        socket.disconnect();
        socket = undefined;
      }
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() && socket) {
      socket.emit("send-message", message);
      setMessage("");
    }
  };

  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.title}>WebSocketチャットデモ</h1>
        <MessageContainer messages={messages.map((content, id) => ({ id, content }))} />

        <div className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <TextBox
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="メッセージを入力"
            />
          </div>
          <Button onClick={sendMessage} className="bg-blue-500 text-white">
            送信
          </Button>
        </div>
      </div>
    </main>
  );
};
