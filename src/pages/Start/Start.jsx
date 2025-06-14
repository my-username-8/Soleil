import styles from "./Start.module.css";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
export default function Start() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <Heading />
            <div className={styles.description}>
              <div>Your digital companion</div>
              <div>for mindfulness and</div>
              <div>self-reflection.</div>
            </div>
            <div className={styles.buttons}>
              <Link className={styles.signupButton} to="/getstarted">
                Get started
              </Link>
            </div>
          </div>
          <div className={styles.demo}>
            <div className={styles.box}>
              <div className={styles.gifWrapper}>
                <img src="/src/assets/screenshot.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
