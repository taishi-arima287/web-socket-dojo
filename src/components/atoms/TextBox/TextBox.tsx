import styles from "./styles.module.css";

type TextBoxProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
};

export const TextBox = ({ value, onChange, placeholder = "", className = "" }: TextBoxProps) => {
  return (
    <input
      type="text"
      role="textbox"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-label={placeholder}
      className={`${styles.module} ${className}`}
    />
  );
};
