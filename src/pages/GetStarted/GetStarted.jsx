import styles from "./GetStarted.module.css";
import Heading from "../../components/Heading/Heading";
import { Link } from "react-router-dom";
import SideImage from "../../components/SideImage/SideImage";
export default function GetStarted() {
  return (
    <>
      <section className={styles.content}>
        <div className={styles.info}>
          <Heading />
          <input placeholder="Your Name: " />
          <input placeholder="Chosen username: " />
          <input placeholder="Chosen password: " />

          <button className={styles.createAccBtn}>Create your account</button>
          <Link className={styles.loginBtn} to="/login">
            Already Registered? Login here!
          </Link>
        </div>

        <SideImage />
      </section>
    </>
  );
}
