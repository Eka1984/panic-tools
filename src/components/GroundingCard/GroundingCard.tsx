import { useEffect, useRef } from "react";
import styles from "./GroundingCard.module.css";
import type { GroundingStep } from "../groundingSteps";

type GroundingCardProps = {
  step: GroundingStep;
  onNext: () => void;
};

function GroundingCard({ step, onNext }: GroundingCardProps) {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  // Helps keyboard users: focus moves to the new step when it changes
  useEffect(() => {
    headingRef.current?.focus();
  }, [step.id]);

  const { Icon } = step;

  return (
    <div className={styles.card} role="group" aria-label="Grounding step">
      <div className={styles.iconTile} aria-hidden="true">
        <Icon size={22} />
      </div>

      <h1 className={styles.count} tabIndex={-1} ref={headingRef}>
        {step.count}
      </h1>

      <p className={styles.prompt}>{step.prompt}</p>
      <p className={styles.examples}>{step.examples}</p>

      <button
        className={styles.primary}
        onClick={onNext}
        aria-label="Next step"
      >
        Next
      </button>
    </div>
  );
}

export default GroundingCard;
