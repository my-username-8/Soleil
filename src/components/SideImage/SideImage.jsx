import styles from "./SideImage.module.css";
import image from "../../assets/getStarted.png";
export default function SideImage() {
  return (
    <div className={styles.imageSection}>
      <img src={image} alt="" />
    </div>
  );
}
