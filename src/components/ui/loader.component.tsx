import styles from "./loader.module.scss";
const Loader = () => {
  return (
    <>
      <div data-js="astro" className={styles.astronaut}>
        <div className={styles.head}></div>
        <div className={`${styles.arm} ${styles.arm_left}`}></div>
        <div className={`${styles.arm} ${styles.arm_right}`}></div>
        <div className={styles.astro_body}>
          <div className={styles.panel}></div>
        </div>
        <div className={`${styles.leg} ${styles.leg_left}`}></div>
        <div className={`${styles.leg} ${styles.leg_right}`}></div>
        <div className={styles.schoolbag}></div>
      </div>

      <div className={styles.textContainer}>
        <h2>...Loading</h2>
      </div>
    </>
  );
};

export default Loader;
