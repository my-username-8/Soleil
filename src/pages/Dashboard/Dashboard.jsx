import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
export default function Dashboard() {
  let [quote, setQuote] = useState("Loading..");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/getQuote`)
      .then((res) => res.json())
      .then((res) => setQuote(res.quote))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <header>
        <Link to="/" className={styles.headingWrapper}>
          <h1 className={styles.heading}>Soleil</h1>
        </Link>
        <div>[User]</div>
      </header>

      <section className={styles.dashboard}>
        <div className={styles.quote}>
          <h2>{quote}</h2>
        </div>
      </section>
    </>
  );
}
