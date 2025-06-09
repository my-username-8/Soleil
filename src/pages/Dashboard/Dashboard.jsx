import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <>
      <header>
        <Link to="/" className={styles.headingWrapper}>
          <h1 className={styles.heading}>Soleil</h1>
        </Link>
        <div>[User]</div>
      </header>

      {/* Main dashboard */}
      <section className={styles.dashboard}>
        <div className={styles.quote}>
          <h2>In process 👷🏻</h2>
        </div>
      </section>
    </>
  );
}
