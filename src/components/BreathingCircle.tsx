import { useEffect, useState } from "react";
import styles from "./BreathingCircle.module.css";

const BREATH_DURATION = 4; // seconds to count
const PAUSE_DURATION = 100; // ms to show "Breathe in" or "out"
const COUNT_LENGTH = 1100;

export default function BreathingCircle() {
  const [phase, setPhase] = useState<"in" | "in-hold" | "out" | "out-hold">(
    "out"
  );
  const [step, setStep] = useState<"count" | "show">("count");
  const [secondsLeft, setSecondsLeft] = useState(BREATH_DURATION);

  useEffect(() => {
    const kickstart = setTimeout(() => {
      setPhase("in"); // this will trigger the scale-up animation
    }, 100);

    return () => clearTimeout(kickstart);
  }, []);

  useEffect(() => {
    if (step === "count") {
      if (secondsLeft > 0) {
        const countdown = setTimeout(() => {
          setSecondsLeft((prev) => prev - 1);
        }, COUNT_LENGTH);

        return () => clearTimeout(countdown);
      } else {
        // Countdown finished → show instruction
        setTimeout(() => {
          setStep("show");
        }, COUNT_LENGTH); // show 1 for 1 sec before switching to text
      }
    } else if (step === "show") {
      // After instruction is shown, switch phase and reset
      const timeout = setTimeout(() => {
        setPhase((prev) => {
          switch (prev) {
            case "in":
              return "in-hold";
            case "in-hold":
              return "out";
            case "out":
              return "out-hold";
            case "out-hold":
            default:
              return "in";
          }
        });
        setSecondsLeft(BREATH_DURATION);
        setStep("count");
      }, PAUSE_DURATION);

      return () => clearTimeout(timeout);
    }
  }, [secondsLeft, step]);

  return (
    <div className={styles.circleWrapper}>
      <div
        className={`${styles.circle} ${phase === "in" && styles.inhale} ${
          phase === "out" && styles.exhale
        } ${phase === "in-hold" && styles.inHold} ${
          phase === "out-hold" && styles.outHold
        }`}
      />
      <div className={styles.textWrapper}>
        <p className={styles.text}>
          {" "}
          {phase === "in" && "Inhale"}
          {phase === "out" && "Exhale"}
          {(phase === "in-hold" || phase === "out-hold") && "Hold"}
        </p>
        <p className={styles.text}>{secondsLeft}</p>
      </div>
    </div>
  );
}
