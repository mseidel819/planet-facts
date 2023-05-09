import { useState, useEffect } from "react";
import styles from "./nav-bar.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import hamburgerLogo from "../../../public/assets/hamburger.svg";
import MobileMenu from "../ui/mobile.component";
import { planetArr } from "@/data";
import { RouterQuery } from "@/types";

const NavBar = () => {
  const router = useRouter();
  const [active, setActive] = useState<RouterQuery>();
  const [mobileActive, setMobileActive] = useState(false);
  const [width, setWidth] = useState(0);

  const resizeHandler = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    const { planet } = router.query as RouterQuery;

    setActive(planet as RouterQuery);
    document.documentElement.style.setProperty(
      "--theme-color",
      `var(--${planet?.toLowerCase()})`
    );
  }, [router.query]);

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
  }, []);

  const activeHandler = () => {
    setActive(router.query.planet as RouterQuery);
  };

  const mobileToggler = () => {
    setMobileActive(!mobileActive);
  };

  const routeHandler = (route: string) => {
    router.push(`/${route}`);
    setMobileActive(false);
  };

  if (width && width < 600) {
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
            return (
              <button
                key={i}
                className={`${styles.planets} ${
                  active === planet ? styles.active : ""
                }`}
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
