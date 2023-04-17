import styles from "./nav-bar.module.css";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
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

  const routeHandler = (route) => {
    router.push(`/${route}`);
  };

  return (
    <div className={styles.nav_bar}>
      <button onClick={() => routeHandler("")} className={styles.nav_title}>
        The Planets
      </button>

      <div className={styles.tabs_container}>
        {planetArr.map((planet, i) => {
          return (
            <button
              key={i}
              className={styles.planets}
              onClick={() => routeHandler(planet)}>
              {planet}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
