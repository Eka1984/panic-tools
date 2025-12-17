import { useEffect, useState } from "react";
import styles from "./BreathingCircle.module.css";

const DURATION = 4;
const COUNT_INTERVAL = 1000;

type Phase = "ready" | "in" | "in-hold" | "out" | "out-hold";

export default function BreathingCircle() {
  const [phase, setPhase] = useState<Phase>("ready");
  const [secondsLeft, setSecondsLeft] = useState(DURATION);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (secondsLeft > 1) {
        setSecondsLeft((prev) => prev - 1);
      } else {
        setPhase((prev) => {
          switch (prev) {
            case "ready":
              return "in";
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
        setSecondsLeft(DURATION);
      }
    }, COUNT_INTERVAL);

    return () => clearTimeout(timer);
  }, [secondsLeft]);

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
          {phase === "ready" && "Get ready…"}
          {phase === "in" && "Breathe in"}
          {phase === "out" && "Breathe out"}
          {(phase === "in-hold" || phase === "out-hold") && "Hold"}
        </p>

        <p className={styles.text}>{secondsLeft}</p>
      </div>
    </div>
  );
}
