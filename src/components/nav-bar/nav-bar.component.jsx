import { useState, useEffect } from "react";
import styles from "./nav-bar.module.css";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const [active, setActive] = useState("");
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

  let theme = "";
  console.log(router.query.planet);

  useEffect(() => {
    setActive(router.query.planet);
  }, [router.query.planet]);

  const activeHandler = () => {
    setActive(router.query.planet);
  };
  // console.log(active);

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
          switch (planet) {
            case "Mercury":
              theme = "mercury-nav";
              break;
            case "Venus":
              theme = "venus-nav";
              break;
            case "Earth":
              theme = "earth-nav";
              break;
            case "Mars":
              theme = "mars-nav";
              break;
            case "Jupiter":
              theme = "jupiter-nav";
              break;
            case "Saturn":
              theme = "saturn-nav";
              break;
            case "Uranus":
              theme = "uranus-nav";
              break;
            case "Neptune":
              theme = "neptune-nav";
              break;
            default:
              theme = "";
          }
          return (
            <button
              key={i}
              className={`${styles.planets} ${theme} ${
                active === planet ? styles.active : ""
              }`}
              onClick={() => {
                activeHandler(planet);
                routeHandler(planet);
              }}>
              {planet}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
