import styles from "./ForgotPassword.module.css";
import Heading from "../../components/Heading/Heading";
export default function ForgotPassword() {
  return (
    <>
      <section className={styles.content}>
        <div className={styles.info}>
          <Heading />

          <label>
            <div>
              Please enter the code sent to your{" "}
              <div className={styles.highlight}>Registered Email Address</div>
            </div>
            <input type="text" />
          </label>

          <button className={styles.resetBtn}>Reset Password</button>
        </div>
      </section>
    </>
  );
}
