import styles from "./Login.module.css";
import Heading from "../../components/Heading/Heading";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <section className={styles.content}>
        <div className={styles.info}>
          <Heading />
          <label>
            <div>Your Username</div>
            <input />
          </label>
          <label>
            <div>Your Password</div>
            <input />
          </label>

          <Link to="/dashboard" className={styles.loginWrapper}>
            <button className={styles.loginBtn}>Login</button>
          </Link>
          <Link to="/forgotpassword" className={styles.resetBtn}>
            <div>Forgot Password</div>
          </Link>
          <Link className={styles.signupBtn} to="/getstarted">
            Not registered yet? Create an account!
          </Link>
        </div>
      </section>
    </>
  );
}
