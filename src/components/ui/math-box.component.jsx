import styles from "./math-box.module.scss";

const MathBox = ({ title, data }) => {
  return (
    <div className={styles.container}>
      <h2 className={`body ${styles.title}`}>{title}</h2>
      <p className={`header-2 ${styles.body}`}>{data}</p>
    </div>
  );
};

export default MathBox;
