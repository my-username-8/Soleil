import styles from "./Login.module.css";
import Heading from "../../components/Heading/Heading";
import { Link } from "react-router-dom";
import SideImage from "../../components/SideImage/SideImage";
export default function Login() {
  return (
    <>
      <section className={styles.content}>
        <div className={styles.info}>
          <Heading />
          <input placeholder="Enter username: " />
          <input placeholder="Enter password: " />

          <button className={styles.loginBtn}>Login</button>
          <Link className={styles.signupBtn} to="/getstarted">
            Not registered yet? Create an account!
          </Link>
        </div>

        <SideImage />
      </section>
    </>
  );
}
