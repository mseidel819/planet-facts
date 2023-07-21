import { Data } from "@/types";
import MathBox from "../ui/math-box.component";
import styles from "./numbers-content.module.scss";

type NumbersProps = {
  data: Data;
};

const NumbersContent = ({ data }: NumbersProps) => {
  return (
    <div className={styles.container}>
      <MathBox title="Rotation Time" data={data.rotation} />
      <MathBox title="Revolution Time" data={data.revolution} />
      <MathBox title="Radius" data={data.radius} />
      <MathBox title="average temp." data={data.temperature} />
    </div>
  );
};

export default NumbersContent;
