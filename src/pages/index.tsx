import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.scss";
// import NavBar from "../components/nav-bar/nav-bar.component";
import Button from "../components/ui/button.component";
import { useRouter } from "next/router";

export default function Home() {
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

  const routeHandler = (route: string) => {
    router.push(`/${route}`);
  };
  return (
    <>
      <Head>
        <title>Planet Facts!</title>
        <meta
          name="description"
          content="A bunch of planet facts by frontend mentor"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <h1> Choose your planet</h1>
        <ul className={styles.list}>
          {planetArr.map((planet) => (
            <li key={planet}>
              <Button onClick={() => routeHandler(planet)}>{planet}</Button>
            </li>
          ))}
        </ul>
      </main>
      {/* <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p> */}
    </>
  );
}
