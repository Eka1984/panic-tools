import styles from "./GroundingItem.module.css";

type GroundingItemProps = {
  emoji: string;
  title: string;
  description: string;
  checked: boolean;
  onToggle: () => void;
};

function GroundingItem({
  emoji,
  title,
  description,
  checked,
  onToggle,
}: GroundingItemProps) {
  return (
    <label className={`${styles.item} ${checked ? styles.checked : ""}`}>
      <div className={styles.text}>
        <div className={styles.title}>
          {emoji} {title}
        </div>
        <div className={styles.description}>{description}</div>
      </div>
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className={styles.checkbox}
      />
    </label>
  );
}

export default GroundingItem;
