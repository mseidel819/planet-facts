import { ReactNode } from "react";
import styles from "./button.module.scss";

type ButtonProps = {
  color?: string;
  active?: boolean;
  onClick: () => void;
  children: ReactNode;
};

const Button = ({
  color = "",
  active = false,
  onClick,
  children,
}: ButtonProps) => {
  let activeStyle = "";
  let activeColor = "";
  if (active) {
    activeStyle = styles.active;
    activeColor = color;
  }

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${activeStyle} ${activeColor}`}>
      <span className={styles.buttonChildren}>{children}</span>
    </button>
  );
};

export default Button;
