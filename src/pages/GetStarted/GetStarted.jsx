import styles from "./GetStarted.module.css";
import Heading from "../../components/Heading/Heading";
import { Link } from "react-router-dom";
import SideImage from "../../components/SideImage/SideImage";
export default function GetStarted() {
  return (
    <>
      <section className={styles.content}>
        <div className={styles.infoWrapper}>
          <div className={styles.info}>
            <Heading />

            <label>
              <div>Your Name</div>
              <input type="text" />
            </label>
            <label>
              <div>Your Username</div>
              <input type="text" />
            </label>
            <label>
              <div>Your Password</div>
              <input type="password" />
            </label>

            <button className={styles.createAccBtn}>Create your account</button>
            <Link className={styles.loginBtn} to="/login">
              Already Registered? Login here!
            </Link>
          </div>
        </div>

        <SideImage />
      </section>
    </>
  );
}
