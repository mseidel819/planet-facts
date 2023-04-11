import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import NavBar from "../components/nav-bar/nav-bar.component";

export default function Home() {
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
      <main>
        <NavBar></NavBar>
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
