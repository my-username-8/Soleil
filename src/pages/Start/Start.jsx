import styles from "./Start.module.css";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import startIllustration from "../../assets/illustration_start.png";
export default function Start() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <Heading />
          <div className={styles.description}>
            Your digital companion
            <br />
            for mindfulness and
            <br />
            self-reflection.
          </div>
          <div className={styles.buttons}>
            <Link className={styles.signupButton} to="/getstarted">
              Get started
            </Link>
          </div>
        </div>
        <div className={styles.demo}>
          <div className={styles.box}>
            <img src={startIllustration} alt="writing the day's tasks" />
          </div>
        </div>
      </div>
    </section>
  );
}
