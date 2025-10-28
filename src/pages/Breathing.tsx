import styles from "./Breathing.module.css";
import BreathingCircle from "../components/BreathingCircle";
import { Navigate } from "react-router-dom";

export default function Breathing() {
  return (
    <main className={styles.page}>
      <h1>You’re safe. This will pass.</h1>
      <p>Follow the steps below — it will get easier in a few minutes.</p>

      <div className={styles.circlePlaceholder}>
        <BreathingCircle />
      </div>

      <button className={styles.primary}>Next exercise</button>
    </main>
  );
}
