import { useReducer } from "react";
import styles from "./GroundingChecklist.module.css";
import { groundingSteps } from "../groundingSteps";
import { groundingReducer, initialGroundingState } from "../groundingReducer";
import ProgressDots from "../ProgressDots/ProgressDots";
import GroundingCard from "../GroundingCard/GroundingCard";
import { VscDebugRestart } from "react-icons/vsc";

function GroundingChecklist() {
  const [state, dispatch] = useReducer(groundingReducer, initialGroundingState);

  if (state.screen === "intro") {
    return (
      <div className={styles.page}>
        <h1 className={styles.heading}>5-4-3-2-1 Grounding</h1>
        <p className={styles.subheading}>
          This technique uses your five senses to bring you back to the present
          moment.
        </p>

        <button
          className={styles.primary}
          onClick={() => dispatch({ type: "BEGIN" })}
        >
          Begin Exercise
        </button>
      </div>
    );
  }

  if (state.screen === "done") {
    return (
      <div className={styles.page}>
        <h1 className={styles.heading}>Well done</h1>
        <p className={styles.subheading}>
          You’ve completed the grounding exercise. Take a moment to notice how
          you feel now.
        </p>

        <button
          className={styles.primary}
          onClick={() => dispatch({ type: "RESTART" })}
        >
          Start Again
        </button>
      </div>
    );
  }

  const step = groundingSteps[state.activeIndex];

  return (
    <div className={styles.page}>
      <ProgressDots
        total={groundingSteps.length}
        currentIndex={state.activeIndex}
      />

      <GroundingCard step={step} onNext={() => dispatch({ type: "NEXT" })} />
      <button
        className={styles.secondary}
        onClick={() => dispatch({ type: "RESET" })}
      >
        <VscDebugRestart /> Start Over
      </button>
    </div>
  );
}

export default GroundingChecklist;
