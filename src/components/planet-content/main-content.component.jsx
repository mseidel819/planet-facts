import Image from "next/image";
import Button from "../ui/button.component";
import styles from "./main-content.module.css";
import linkIcon from "../../../public/assets/link-icon.svg";
const MainContent = ({ data }) => {
  return (
    <div className={styles.container}>
      <div>
        <Image
          priority
          alt={data.name}
          width="290"
          height="290"
          src={data.images.planet}
        />
      </div>
      <div className={styles.textContent}>
        <h1 className={`header-1 ${styles.title}`}>{data.name}</h1>
        <p className={`body ${styles.para}`}>{data.overview.content}</p>
        <p className={`body ${styles.source}`}>
          Source : &nbsp;
          <a
            target="_blank"
            className={styles.link}
            href={data.overview.source}>
            Wikipedia &nbsp;
            <Image src={linkIcon} height="12" width="12" alt="" />
          </a>
        </p>
        <Button>
          <span className={styles.span}>01</span>
          <p className={styles.buttonText}>Overview</p>
        </Button>
        <Button>
          <span className={styles.span}>02</span>
          <p className={styles.buttonText}>Internal Structure</p>
        </Button>
        <Button>
          <span className={styles.span}>02</span>
          <p className={styles.buttonText}>Surface Geology</p>
        </Button>
      </div>
    </div>
  );
};
export default MainContent;
