import { useState } from "react";
import GroundingItem from "./GroundingItem";
import styles from "./GroundingChecklist.module.css";

type GroundingStep = {
  id: number;
  emoji: string;
  title: string;
  description: string;
};

const groundingSteps: GroundingStep[] = [
  {
    id: 1,
    emoji: "👁️",
    title: "5 things you can see",
    description: "Name them out loud or in your head.",
  },
  {
    id: 2,
    emoji: "✋",
    title: "4 things you can touch",
    description: "Notice their texture and feel.",
  },
  {
    id: 3,
    emoji: "👂",
    title: "3 things you can hear",
    description: "Focus on sounds near or far.",
  },
  {
    id: 4,
    emoji: "👃",
    title: "2 things you can smell",
    description: "Take a slow breath and notice scents.",
  },
  {
    id: 5,
    emoji: "👅",
    title: "1 thing you can taste",
    description: "Pay attention to any taste in your mouth.",
  },
];

function GroundingChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  function toggleItem(id: number) {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  return (
    <div>
      <h1 className={styles.heading}>Ground yourself</h1>

      {groundingSteps.map((step) => (
        <GroundingItem
          key={step.id}
          emoji={step.emoji}
          title={step.title}
          description={step.description}
          checked={!!checkedItems[step.id]}
          onToggle={() => toggleItem(step.id)}
        />
      ))}
    </div>
  );
}

export default GroundingChecklist;
