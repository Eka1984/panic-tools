import styles from "./Breathing.module.css";
import BreathingCircle from "../../components/BreathingCircle/BreathingCircle";
import ExerciseIntro from "../../components/ExerciseIntro/ExerciseIntro";
import { motion } from "framer-motion";
import { FiPlay } from "react-icons/fi";
import { FiPause } from "react-icons/fi";
import { useState } from "react";

export default function Breathing() {
  const [isRunning, setIsRunning] = useState(false);
  const [exerciseStarted, setExerciseStarted] = useState(false);

  // const navigate = useNavigate();

  function handleToggle() {
    setIsRunning((prev) => !prev);
  }

  function handleStartExercise() {
    setExerciseStarted(true);
  }

  return (
    <motion.div
      className={styles.motionWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <main className={styles.page}>
        {!exerciseStarted ? (
          <ExerciseIntro
            title="Box Breathing"
            description="Follow the circle’s rhythm: breathe in as it expands, gently hold your breath when it pauses, and breathe out as it becomes smaller."
            onClick={handleStartExercise}
          />
        ) : (
          <section>
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
          </section>
        )}
      </main>
    </motion.div>
  );
}
