import { useRouter } from "next/router";
import { useState } from "react";

import { data, getPlanetByName } from "../data";
import MainContent from "../components/planet-content/main-content.component";
import NumbersContent from "../components/planet-content/numbers-content.component";

const PlanetPage = () => {
  const router = useRouter();

  const { planet } = router.query;

  const planetObj = getPlanetByName(planet);

  if (!planetObj) {
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <MainContent data={planetObj} />
      <NumbersContent data={planetObj} />
    </>
  );
};

export default PlanetPage;
