import { ReactNode } from "react";
import styles from "./mobile-button-bar.module.scss";

type MobileButtonBarProps = {
  color: string;
  active: boolean;
  onClick: () => void;
  children: ReactNode;
};

const MobileButtonBar = ({
  color,
  active,
  onClick,
  children,
}: MobileButtonBarProps) => {
  let activeStyle = "";
  let activeColor = "";
  if (active) {
    activeStyle = styles.active;
    activeColor = `${color}-nav`;
  }

  return (
    <button
      onClick={onClick}
      className={`${styles.item} ${activeColor} ${activeStyle}`}>
      {children}
    </button>
  );
};

export default MobileButtonBar;
