import styles from "./Login.module.css";
import Heading from "../../components/Heading/Heading";
import { Link } from "react-router-dom";
import FormLayout from "../../components/FormLayout/FormLayout";

export default function Login() {
  return (
    <FormLayout>
      <Heading />

      <form>
        <label>
          <div>Your Username</div>
          <input />
        </label>
        <label>
          <div>Your Password</div>
          <input />
        </label>

        <button className={styles.loginBtn}>Login</button>
      </form>

      <Link to="/forgotpassword" className={styles.goToReset}>
        <div>Forgot Password</div>
      </Link>
      <Link className={styles.goToSignup} to="/getstarted">
        Not registered yet? Create an account!
      </Link>
    </FormLayout>
  );
}
