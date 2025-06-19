import styles from "./FormLayout.module.css";

export default function FormLayout({ children }) {
  return (
    <section className={styles.content}>
      <div className={styles.info}>{children}</div>
    </section>
  );
}
