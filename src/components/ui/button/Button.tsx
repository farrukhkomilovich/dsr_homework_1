import styles from "./Button.module.css";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ onClick, children, className = "" }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${styles.btn} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
