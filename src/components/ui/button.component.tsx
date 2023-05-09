import { ReactNode } from "react";
import styles from "./button.module.scss";

type ButtonProps = {
  color?: string;
  active?: boolean;
  onClick: () => void;
  children: ReactNode;
};

const Button = ({ active = false, onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${active ? styles.active : ""}`}>
      <span className={styles.buttonChildren}>{children}</span>
    </button>
  );
};

export default Button;
