import { useEffect, useState } from "react";
import styles from "./BreathingCircle.module.css";

const DURATION = 1;
const COUNT_INTERVAL = 1000;
const CYCLE_LENGTH = 4;

const PHASES = {
  READY: "ready",
  IN: "in",
  IN_HOLD: "in-hold",
  OUT: "out",
  OUT_HOLD: "out-hold",
} as const;

type Phase = (typeof PHASES)[keyof typeof PHASES];

const NEXT_PHASE: Record<Phase, Phase> = {
  [PHASES.READY]: PHASES.IN,
  [PHASES.IN]: PHASES.IN_HOLD,
  [PHASES.IN_HOLD]: PHASES.OUT,
  [PHASES.OUT]: PHASES.OUT_HOLD,
  [PHASES.OUT_HOLD]: PHASES.IN,
};

const PHASE_LABEL: Partial<Record<Phase, string>> = {
  [PHASES.READY]: "Get ready…",
  [PHASES.IN]: "Breathe in",
  [PHASES.OUT]: "Breathe out",
  [PHASES.IN_HOLD]: "Hold",
  [PHASES.OUT_HOLD]: "Hold",
};

const PHASE_CLASS: Partial<Record<Phase, string>> = {
  [PHASES.IN]: styles.inhale,
  [PHASES.OUT]: styles.exhale,
  [PHASES.IN_HOLD]: styles.inHold,
  [PHASES.OUT_HOLD]: styles.outHold,
};

export default function BreathingCircle() {
  const [phase, setPhase] = useState<Phase>(PHASES.READY);
  const [secondsLeft, setSecondsLeft] = useState(DURATION);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (secondsLeft < CYCLE_LENGTH) {
        setSecondsLeft((prev) => prev + 1);
      } else {
        setPhase((prev) => NEXT_PHASE[prev]);
        setSecondsLeft(DURATION);
      }
    }, COUNT_INTERVAL);

    return () => clearTimeout(timer);
  }, [secondsLeft]);

  return (
    <div className={styles.circleWrapper}>
      <div className={`${styles.circle} ${PHASE_CLASS[phase] ?? ""}`} />
      <div className={styles.textWrapper}>
        <div className={styles.count}>{secondsLeft}</div>
        <div className={styles.text}>{PHASE_LABEL[phase]}</div>
      </div>
    </div>
  );
}
