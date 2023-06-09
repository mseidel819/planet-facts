const Image = require("next/image");
import { planetArr } from "../../data";

import rightArrow from "../../../public/assets/right-arrow.svg";
import styles from "./mobile.module.scss";

type MobileMenuProps = {
  handler: (planet: string) => void;
};

const MobileMenu = ({ handler }: MobileMenuProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {planetArr.map((planet) => (
          <button
            onClick={() => handler(planet)}
            className={styles.menuItem}
            key={planet}>
            <div className={styles.left}>
              <div className={`${styles.dot} ${planet.toLowerCase()}`}></div>
              <h2 className={styles.name}>{planet}</h2>
            </div>
            <div>
              <Image alt="" height={8} width={4} src={rightArrow} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
