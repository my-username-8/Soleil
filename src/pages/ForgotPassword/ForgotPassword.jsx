import styles from "./ForgotPassword.module.css";
import Heading from "../../components/Heading/Heading";
import FormLayout from "../../components/FormLayout/FormLayout";
export default function ForgotPassword() {
  return (
    <FormLayout>
      <Heading />
      <form>
        <label>
          <div>
            Please enter the code sent to your{" "}
            <div className={styles.highlight}>Registered Email Address</div>
          </div>
          <input type="text" name="code" autoComplete="off" />
        </label>

        <button className={styles.resetBtn}>Reset Password</button>
      </form>
    </FormLayout>
  );
}
