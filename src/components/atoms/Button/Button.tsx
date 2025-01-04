import styles from './styles.module.css'

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button = ({ 
  children, 
  onClick, 
  disabled = false,
  className = ''
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.module} ${className}`}
    >
      {children}
    </button>
  );
}; 