import Image from "next/image";
import Button from "../ui/button.component";
import styles from "./main-content.module.css";
import linkIcon from "../../../public/assets/link-icon.svg";
import { useState } from "react";

const MainContent = ({ data }) => {
  const [section, setSection] = useState("overview");
  // const [geoActice, setGeoActive] = useState(false);

  let img = data.images.planet;

  switch (section) {
    case "structure":
      img = data.images.internal;
      // setGeoActive(false);
      break;
    case "geology":
      img = data.images.planet;
      // setGeoActive(true);
      break;
    default:
      img = data.images.planet;
    // setGeoActive(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image priority alt={data.name} width="290" height="290" src={img} />
        {section === "geology" && (
          <Image
            className={styles.imgSpan}
            height="199"
            width="163"
            alt="surface image"
            src={data.images.geology}
          />
        )}
      </div>
      <div className={styles.textContent}>
        <h1 className={`header-1 ${styles.title}`}>{data.name}</h1>
        <p className={`body ${styles.para}`}>{data[section].content}</p>
        <p className={`body ${styles.source}`}>
          Source : &nbsp;
          <a
            target="_blank"
            className={styles.link}
            href={data[section].source}>
            Wikipedia &nbsp;
            <Image src={linkIcon} height="12" width="12" alt="" />
          </a>
        </p>
        <Button onClick={() => setSection("overview")}>
          <span className={styles.span}>01</span>
          <p className={styles.buttonText}>Overview</p>
        </Button>
        <Button onClick={() => setSection("structure")}>
          <span className={styles.span}>02</span>
          <p className={styles.buttonText}>Internal Structure</p>
        </Button>
        <Button onClick={() => setSection("geology")}>
          <span className={styles.span}>02</span>
          <p className={styles.buttonText}>Surface Geology</p>
        </Button>
      </div>
    </div>
  );
};
export default MainContent;
