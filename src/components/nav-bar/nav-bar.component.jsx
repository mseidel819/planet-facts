import styles from "./nav-bar.module.css";

const NavBar = () => {
  const planetArr = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];

  return (
    <div className={styles.nav_bar}>
      <h1 className={styles.nav_title}>The Planets</h1>

      <div className={styles.tabs_container}>
        {planetArr.map((planet, i) => {
          return (
            <h2 className={styles.planets} key={i}>
              {planet}
            </h2>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
