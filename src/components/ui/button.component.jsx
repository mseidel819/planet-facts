import styles from "./button.module.scss";

const Button = ({ onClick, children }) => {
  //   const sectionNum =
  //     section === "overview"
  //       ? "01"
  //       : section === "internal structure"
  //       ? "02"
  //       : "03";

  return (
    <button onClick={onClick} className={styles.button}>
      <div className={styles.buttonChildren}>{children}</div>
    </button>
  );
};

export default Button;
