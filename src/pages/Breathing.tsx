import styles from "./Breathing.module.css";
import BreathingCircle from "../components/BreathingCircle";
import { useNavigate } from "react-router-dom";

export default function Breathing() {
  const navigate = useNavigate();
  return (
    <main className={styles.page}>
      <h1>You’re safe. This will pass.</h1>
      <p>Follow the steps below — it will get easier in a few minutes.</p>

      <div className={styles.circlePlaceholder}>
        <BreathingCircle />
      </div>

      <button className={styles.primary} onClick={() => navigate("/grounding")}>
        Next exercise
      </button>
    </main>
  );
}
