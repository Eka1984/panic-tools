export type GroundingScreen = "intro" | "step" | "done";

export type GroundingState = {
  screen: GroundingScreen;
  activeIndex: number; // 0..4
};

export type GroundingAction =
  | { type: "BEGIN" }
  | { type: "NEXT" }
  | { type: "RESET" }
  | { type: "RESTART" };

export const initialGroundingState: GroundingState = {
  screen: "intro",
  activeIndex: 0,
};

export function groundingReducer(
  state: GroundingState,
  action: GroundingAction,
): GroundingState {
  switch (action.type) {
    case "BEGIN":
      return { screen: "step", activeIndex: 0 };

    case "NEXT": {
      const nextIndex = state.activeIndex + 1;
      if (nextIndex >= 5) return { ...state, screen: "done" };
      return { ...state, activeIndex: nextIndex };
    }

    case "RESET":
      return initialGroundingState;

    case "RESTART":
      return { screen: "step", activeIndex: 0 };

    default:
      return state;
  }
}
