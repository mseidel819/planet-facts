import Head from "next/head";
import styles from "./index.module.scss";
import Button from "../components/ui/button.component";
import { useRouter } from "next/router";
import { planetArr } from "@/data";

export default function Home() {
  const router = useRouter();

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
        <link rel="icon" href="/assets/favicon-32x32.png" />
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
    </>
  );
}
