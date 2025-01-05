import styles from "./styles.module.css";

type Message = {
  id: number;
  content: string;
};

type MessageContainerProps = {
  messages: Message[];
};

export const MessageContainer = ({ messages }: MessageContainerProps) => {
  return (
    <div className={styles.container} role="log" aria-label="チャットメッセージ" aria-live="polite">
      {messages.map(msg => (
        <div key={msg.id} className={styles.message} role="article">
          {msg.content}
        </div>
      ))}
    </div>
  );
};
