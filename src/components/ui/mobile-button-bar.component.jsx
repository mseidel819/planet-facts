import styles from "./mobile-button-bar.module.scss";

const MobileButtonBar = ({ color, active, onClick, children }) => {
  let activeStyle = "";
  let activeColor = "";
  if (active) {
    activeStyle = styles.active;
    activeColor = `${color}-nav`;
  }

  console.log(active);
  return (
    <button
      onClick={onClick}
      className={`${styles.item} ${activeColor} ${activeStyle}`}>
      {children}
    </button>
  );
};

export default MobileButtonBar;
