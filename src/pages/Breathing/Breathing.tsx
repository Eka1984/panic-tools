import styles from "./Breathing.module.css";
import BreathingCircle from "../../components/BreathingCircle/BreathingCircle";
// import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiPlay } from "react-icons/fi";
import { FiPause } from "react-icons/fi";
import { useState } from "react";

export default function Breathing() {
  const [isRunning, setIsRunning] = useState(false);

  // const navigate = useNavigate();

  function handleToggle() {
    setIsRunning((prev) => !prev);
  }

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
          <BreathingCircle isRunning={isRunning} />
        </div>
        <button className={styles.primary} onClick={handleToggle}>
          {isRunning ? (
            <>
              <FiPause size={20} /> Stop
            </>
          ) : (
            <>
              <FiPlay size={20} /> Start
            </>
          )}
        </button>
      </main>
    </motion.div>
  );
}
