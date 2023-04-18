import { useState, useEffect } from "react";
import styles from "./nav-bar.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import hamburgerLogo from "../../../public/assets/hamburger.svg";
import MobileMenu from "../ui/mobile.component";
import { planetArr } from "@/data";

const NavBar = () => {
  const router = useRouter();
  const [active, setActive] = useState<string>("");
  const [mobileActive, setMobileActive] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setActive(router.query.planet as string);
  }, [router.query.planet]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  const activeHandler = () => {
    setActive(router.query.planet as string);
  };

  const mobileToggler = () => {
    setMobileActive(!mobileActive);
  };

  const routeHandler = (route: string) => {
    router.push(`/${route}`);
    setMobileActive(false);
  };

  if (width && width < 700) {
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
            let activeColor = "";
            if (active === planet) {
              activeColor = `${planet.toLowerCase()}-nav`;
            }

            return (
              <button
                key={i}
                className={`${styles.planets} ${activeColor}`}
                onClick={() => {
                  activeHandler();
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
