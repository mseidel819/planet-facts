import { useState } from "react";
import styles from "./button.module.scss";

const Button = ({ color, active, onClick, children }) => {
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
      <div className={styles.buttonChildren}>{children}</div>
    </button>
  );
};

export default Button;
