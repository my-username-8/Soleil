import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import Heading from "../../components/Heading/Heading";
export default function Dashboard() {
  let [quote, setQuote] = useState("Loading..");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/getQuote`)
      .then((res) => res.json())
      .then((res) => setQuote(res.quote))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.mainDashboard}>
      <header>
        <Heading font="2.5vw" />
        <div>[User]</div>
      </header>

      <section className={styles.dashboard}>
        <div className={styles.quote}>
          <h2>{quote}</h2>
        </div>
      </section>
    </div>
  );
}
