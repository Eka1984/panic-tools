import { useReducer } from "react";
import styles from "./GroundingChecklist.module.css";
import { groundingSteps } from "../groundingSteps";
import { groundingReducer, initialGroundingState } from "../groundingReducer";
import ProgressDots from "../ProgressDots/ProgressDots";
import GroundingCard from "../GroundingCard/GroundingCard";
import { VscDebugRestart } from "react-icons/vsc";
import ExerciseIntro from "../ExerciseIntro/ExerciseIntro";

function GroundingChecklist() {
  const [state, dispatch] = useReducer(groundingReducer, initialGroundingState);

  if (state.screen === "intro") {
    return (
      <ExerciseIntro
        title="Grounding"
        description="This technique uses your five senses to bring you back to the present moment."
        onClick={() => dispatch({ type: "BEGIN" })}
      />
    );
  }

  if (state.screen === "done") {
    return (
      <ExerciseIntro
        title="Well done!"
        description="You’ve completed the grounding exercise. Take a moment to notice how you feel now."
        onClick={() => dispatch({ type: "RESTART" })}
        buttonText="Start Over"
      />
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
