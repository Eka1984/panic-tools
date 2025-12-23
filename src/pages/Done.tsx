import styles from "./Done.module.css";

export default function Done() {
  return (
    <main className="page">
      <h1>Well done! </h1>
      <p>
        You’ve just brought your attention back to the present moment. Stay here
        for a breath or two before moving on with your day.
      </p>
      <span className={styles.emoji}>🌿</span>
    </main>
  );
}
