import Image from "next/image";
import Button from "../ui/button.component";
import styles from "./main-content.module.scss";
import linkIcon from "../../../public/assets/link-icon.svg";
import { useState, useEffect } from "react";
import MobileButtonBar from "../ui/mobile-button-bar.component";
import { Data } from "@/data";

type MainProps = {
  data: Data;
};

const MainContent = ({ data }: MainProps) => {
  const [section, setSection] = useState("overview");
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [view, setView] = useState("mobile");

  const resizeHandler = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeHandler();

    window.addEventListener("resize", resizeHandler);
  }, []);

  useEffect(() => {
    if (width && width < 600) {
      setView("mobile");
    } else if (width && width >= 1000) {
      setView("desktop");
    } else setView("tablet");
  }, [width, setWidth]);

  const toolTip: {
    [key: string]: { height: number; width: number };
  } = {
    desktop: {
      height: 199,
      width: 163,
    },
    tablet: {
      height: 99,
      width: 86,
    },
    mobile: {
      height: 99,
      width: 86,
    },
  };

  let img = data.images.planet;
  if (section === "structure") img = data.images.internal;

  return (
    <>
      {width && width < 700 && (
        <div className={styles.mobileContainer}>
          <MobileButtonBar
            color={data.name.toLowerCase()}
            active={section === "overview"}
            onClick={() => setSection("overview")}>
            Overview
          </MobileButtonBar>
          <MobileButtonBar
            color={data.name.toLowerCase()}
            active={section === "structure"}
            onClick={() => setSection("structure")}>
            Structure
          </MobileButtonBar>
          <MobileButtonBar
            color={data.name.toLowerCase()}
            active={section === "geology"}
            onClick={() => setSection("geology")}>
            Surface
          </MobileButtonBar>
        </div>
      )}
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            priority
            alt={data.name}
            height={data.size[view].height}
            width={data.size[view].width}
            src={img}
            // fill
          />
          {section === "geology" && (
            <Image
              className={styles.imgSpan}
              height={toolTip[view].height}
              width={toolTip[view].width}
              alt="surface image"
              src={data.images.geology}
            />
          )}
        </div>
        <div className={styles.textContent}>
          <div>
            <h1 className={`header-1 ${styles.title}`}>{data.name}</h1>
            <p className={`body ${styles.para}`}>
              {data.section[section].content}
            </p>
            <p className={`body ${styles.source}`}>
              Source : &nbsp;
              <a
                target="_blank"
                className={styles.link}
                href={data.section[section].source}>
                Wikipedia &nbsp;
                <Image src={linkIcon} height="12" width="12" alt="" />
              </a>
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <Button
              color={data.name.toLowerCase()}
              active={section === "overview"}
              onClick={() => setSection("overview")}>
              <span className={styles.span}>01</span>
              <p className={styles.buttonText}>Overview</p>
            </Button>
            <Button
              color={data.name.toLowerCase()}
              active={section === "structure"}
              onClick={() => setSection("structure")}>
              <span className={styles.span}>02</span>
              <p className={styles.buttonText}>Internal Structure</p>
            </Button>
            <Button
              color={data.name.toLowerCase()}
              active={section === "geology"}
              onClick={() => setSection("geology")}>
              <span className={styles.span}>02</span>
              <p className={styles.buttonText}>Surface Geology</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainContent;
