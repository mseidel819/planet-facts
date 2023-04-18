import styles from "./loader.module.scss";
const Loader = () => {
  return (
    <>
      <div data-js="astro" className="astronaut">
        <div className="head"></div>
        <div className="arm arm_left"></div>
        <div className="arm arm_right"></div>
        <div className="astro-body">
          <div className="panel"></div>
        </div>
        <div className="leg leg_left"></div>
        <div className="leg leg_right"></div>
        <div className="schoolbag"></div>
      </div>

      <div className={styles.textContainer}>
        <h2>...Loading</h2>
      </div>
    </>
  );
};

export default Loader;
