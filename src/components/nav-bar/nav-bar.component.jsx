import { useState, useEffect } from "react";
import styles from "./nav-bar.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import hamburgerLogo from "../../../public/assets/hamburger.svg";
import MobileMenu from "../ui/mobile.component";
import { planetArr } from "@/data";

const NavBar = () => {
  const router = useRouter();
  const [active, setActive] = useState("");
  const [mobileActive, setMobileActive] = useState(false);
  const [test, setTest] = useState(0);

  let theme = "";

  useEffect(() => {
    setActive(router.query.planet);
  }, [router.query.planet]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setTest(window.innerWidth);
    });
  }, []);

  const activeHandler = () => {
    setActive(router.query.planet);
  };

  const mobileToggler = () => {
    setMobileActive(!mobileActive);
  };

  const routeHandler = (route) => {
    router.push(`/${route}`);
    setMobileActive(false);
  };

  if (test && test < 700) {
    return (
      <>
        <div className={styles.mobile_nav_bar}>
          <button onClick={() => routeHandler("")} className={styles.nav_title}>
            The Planets
          </button>

          <button
            onClick={mobileToggler}
            className={`${styles.hamburger} ${
              mobileActive && styles.activeHamburger
            }`}>
            <Image alt="" src={hamburgerLogo} />
          </button>
        </div>
        {mobileActive && <MobileMenu handler={routeHandler} />}
      </>
    );
  } else
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
