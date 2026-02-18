import type { IconType } from "react-icons";
import { FiEye, FiHeadphones, FiWind, FiCoffee } from "react-icons/fi";
import { PiHand } from "react-icons/pi";

export type GroundingStep = {
  id: "see" | "touch" | "hear" | "smell" | "taste";
  count: 5 | 4 | 3 | 2 | 1;
  title: string;
  prompt: string;
  examples: string;
  Icon: IconType;
};

export const groundingSteps: GroundingStep[] = [
  {
    id: "see",
    count: 5,
    title: "See",
    prompt: "Name 5 things you can see around you",
    examples: "A window, a plant, your hands, a book, a light…",
    Icon: FiEye,
  },
  {
    id: "touch",
    count: 4,
    title: "Touch",
    prompt: "Name 4 things you can feel",
    examples: "Your sweater, the chair, the floor, your phone…",
    Icon: PiHand,
  },
  {
    id: "hear",
    count: 3,
    title: "Hear",
    prompt: "Name 3 things you can hear",
    examples: "A clock, traffic, a fan, distant voices…",
    Icon: FiHeadphones,
  },
  {
    id: "smell",
    count: 2,
    title: "Smell",
    prompt: "Name 2 things you can smell",
    examples: "Fresh air, coffee, your shampoo…",
    Icon: FiWind,
  },
  {
    id: "taste",
    count: 1,
    title: "Taste",
    prompt: "Name 1 thing you can taste",
    examples: "Mint, tea, toothpaste, or just “no taste”",
    Icon: FiCoffee,
  },
];
