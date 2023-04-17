import { useRouter } from "next/router";
import { data, getPlanetByName } from "../data";
import MainContent from "../components/planet-content/main-content.component";

const PlanetPage = () => {
  const router = useRouter();

  const { planet } = router.query;

  const planetObj = getPlanetByName(planet);

  console.log(getPlanetByName(planet));

  return (
    <>
      <MainContent data={planetObj} />
    </>
  );
};

export default PlanetPage;
