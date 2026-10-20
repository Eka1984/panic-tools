import styles from "./Breathing.module.css";
import BreathingCircle from "../../components/BreathingCircle/BreathingCircle";
import ExerciseIntro from "../../components/ExerciseIntro/ExerciseIntro";
import { FiPlay } from "react-icons/fi";
import { FiPause } from "react-icons/fi";
import { useState } from "react";

export default function Breathing() {
  const [isRunning, setIsRunning] = useState(false);
  const [exerciseStarted, setExerciseStarted] = useState(false);

  function handleToggle() {
    setIsRunning((prev) => !prev);
  }

  function handleStartExercise() {
    setExerciseStarted(true);
  }

  return (
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
  );
}
