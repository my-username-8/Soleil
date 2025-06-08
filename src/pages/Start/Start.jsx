import styles from "./Start.module.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Heading from "../../components/Heading/Heading";
export default function Start() {
  const demoSection = useRef(null);
  function handleClick() {
    demoSection.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.content}>
          <Heading />
          <p className={styles.typing}>Let the day unfold with intention...</p>
          <div className={styles.buttons}>
            <button className={styles.noButton} onClick={handleClick}>
              See how it works!
            </button>
            <Link className={styles.signupButton} to="/getstarted">
              Let's get started
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.demoSection} ref={demoSection}></section>
    </>
  );
}
