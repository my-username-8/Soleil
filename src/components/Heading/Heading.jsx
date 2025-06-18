import { Link } from "react-router-dom";
import styles from "./Heading.module.css";
export default function Heading({ font = "4rem" }) {
  const fontSize = {
    fontSize: font,
  };
  return (
    <Link to="/" className={styles.headingWrapper}>
      <h1 style={fontSize}>Soleil</h1>
    </Link>
  );
}
