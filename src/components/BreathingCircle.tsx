import { useEffect, useState } from "react";
import styles from "./BreathingCircle.module.css";

const BREATH_DURATION = 4; // seconds to count
const PAUSE_DURATION = 1000; // ms to show "Breathe in" or "out"

export default function BreathingCircle() {
  const [phase, setPhase] = useState<"in" | "out">("in");
  const [step, setStep] = useState<"count" | "show">("count");
  const [secondsLeft, setSecondsLeft] = useState(BREATH_DURATION);

  useEffect(() => {
    if (step === "count") {
      if (secondsLeft > 1) {
        const countdown = setTimeout(() => {
          setSecondsLeft((prev) => prev - 1);
        }, 1300);

        return () => clearTimeout(countdown);
      } else {
        // Countdown finished → show instruction
        setTimeout(() => {
          setStep("show");
        }, 1300); // show 1 for 1 sec before switching to text
      }
    } else if (step === "show") {
      // After instruction is shown, switch phase and reset
      const timeout = setTimeout(() => {
        setPhase((prev) => (prev === "in" ? "out" : "in"));
        setSecondsLeft(BREATH_DURATION);
        setStep("count");
      }, PAUSE_DURATION);

      return () => clearTimeout(timeout);
    }
  }, [secondsLeft, step]);

  return (
    <div
      className={`${styles.circle} ${
        phase === "in" ? styles.inhale : styles.exhale
      }`}
    >
      <p className={styles.countdown}>
        {step === "count"
          ? secondsLeft
          : phase === "in"
          ? "Breathe in"
          : "Breathe out"}
      </p>
    </div>
  );
}
