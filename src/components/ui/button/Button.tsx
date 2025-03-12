import styles from "./Button.module.css";

interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  label?: string;
  className?: string;
}

const Button = ({ onClick, children, className = "", label = "" }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${styles.btn} ${className}`}>
      {label ?? children}
    </button>
  );
};

export default Button;
