import styles from './styles.module.css'

type TextBoxProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export const TextBox = ({
  value,
  onChange,
  placeholder = '',
  className = ''
}: TextBoxProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${styles.module} ${className}`}
    />
  );
}; 