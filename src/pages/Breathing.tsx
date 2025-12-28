import styles from "./Breathing.module.css";
import BreathingCircle from "../components/BreathingCircle";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Breathing() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <main className={styles.page}>
        <h1>You’re safe. This will pass</h1>
        <p>Try to breathe together with the circle</p>
        <div className={styles.circlePlaceholder}>
          <BreathingCircle />
        </div>
        <button
          className={styles.primary}
          onClick={() => navigate("/grounding")}
        >
          Next exercise
        </button>
      </main>
    </motion.div>
  );
}
