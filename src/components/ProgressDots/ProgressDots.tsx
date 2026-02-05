import { FiCheck } from "react-icons/fi";
import styles from "./ProgressDots.module.css";

type ProgressDotsProps = {
  total: number;
  currentIndex: number; // 0-based
};

function ProgressDots({ total, currentIndex }: ProgressDotsProps) {
  const completedCount = Math.min(currentIndex, total); // steps before current are "done"
  const ariaNow = Math.min(currentIndex + 1, total);

  return (
    <div
      className={styles.wrap}
      role="progressbar"
      aria-label="Exercise progress"
      aria-valuemin={1}
      aria-valuemax={total}
      aria-valuenow={ariaNow}
    >
      {Array.from({ length: total }).map((_, i) => {
        const isCompleted = i < completedCount;
        const isActive = i === currentIndex;

        return (
          <div
            key={i}
            className={[
              styles.dot,
              isCompleted ? styles.completed : "",
              isActive ? styles.active : "",
            ].join(" ")}
            aria-label={
              isCompleted
                ? `Step ${i + 1} completed`
                : isActive
                  ? `Step ${i + 1} current`
                  : `Step ${i + 1} upcoming`
            }
          >
            {isCompleted ? <FiCheck aria-hidden="true" /> : null}
          </div>
        );
      })}
    </div>
  );
}

export default ProgressDots;
