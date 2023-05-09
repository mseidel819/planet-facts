import { ReactNode } from "react";
import styles from "./mobile-button-bar.module.scss";

type MobileButtonBarProps = {
  color: string;
  active: boolean;
  onClick: () => void;
  children: ReactNode;
};

const MobileButtonBar = ({
  active,
  onClick,
  children,
}: MobileButtonBarProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.item}  ${active ? styles.active : ""}`}>
      {children}
    </button>
  );
};

export default MobileButtonBar;
