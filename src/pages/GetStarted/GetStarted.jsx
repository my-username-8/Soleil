import styles from "./GetStarted.module.css";
import Heading from "../../components/Heading/Heading";
import { Link } from "react-router-dom";
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

        <div className={styles.imageSection}>
          <img
            src="https://plus.unsplash.com/premium_vector-1729116751896-fe85c916fdd5?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </section>
    </>
  );
}
