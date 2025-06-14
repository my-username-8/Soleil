import styles from "./Heading.module.css";
import SunIcon from "../../assets/sun.svg";
export default function Heading() {
  return (
    <div className={styles.flexContainer}>
      <img src={SunIcon} alt="" />
      <h1 className={styles.heading}>Soleil</h1>
    </div>
  );
}
