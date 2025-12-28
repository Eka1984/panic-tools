import styles from "./ProgressTracker.module.css";

const steps = ["Breathing", "Grounding", "All done"] as const;

type StepIndex = number;

interface ProgressTrackerProps {
  currentStep: StepIndex;
}

export default function ProgressTracker({ currentStep }: ProgressTrackerProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.progress}>
        {steps.map((_, index) => {
          const isActive = index === currentStep;
          const isDone = index < currentStep;

          const dotClassName = [
            styles.dot,
            isActive && styles.done,
            isDone && styles.done,
          ]
            .filter(Boolean)
            .join(" ");

          return <span key={index} className={dotClassName} />;
        })}
      </div>
    </div>
  );
}
