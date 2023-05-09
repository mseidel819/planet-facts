import { useRouter } from "next/router";
import Head from "next/head";
import { useState, useEffect } from "react";
import { getPlanetByName } from "../data";
import MainContent from "../components/planet-content/main-content.component";
import NumbersContent from "../components/planet-content/numbers-content.component";
import Loader from "../components/ui/loader.component";
import React from "react";
import { Planet } from "@/types";

const PlanetPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, Math.floor(Math.random() * 700));
  }, [router]);

  const { planet } = router.query;

  const planetObj = getPlanetByName(planet as Planet);

  if (loading) {
    return (
      <>
        <Head>
          <title>Planet Facts! | {planet}</title>
          <meta
            name="description"
            content="A bunch of planet facts by frontend mentor"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/assets/favicon-32x32.png" />
        </Head>
        <Loader />
      </>
    );
  } else if (!planetObj) {
    return (
      <>
        <Head>
          <title>Planet not found!</title>
          <meta
            name="description"
            content="A bunch of planet facts by frontend mentor"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/assets/favicon-32x32.png" />
        </Head>
        <h1>PLanet not found!</h1>
      </>
    );
  } else
    return (
      <>
        <Head>
          <title>Planet Facts! | {planet}</title>
          <meta
            name="description"
            content="A bunch of planet facts by frontend mentor"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/assets/favicon-32x32.png" />
        </Head>
        <MainContent data={planetObj} />
        <NumbersContent data={planetObj} />
      </>
    );
};

export default PlanetPage;
