import Button from "../Button/Button";
import styles from "./ExerciseIntro.module.css";

type ExerciseIntroProps = {
  onClick: () => void;
  title: string;
  description: string;
  buttonText?: string;
};

function ExerciseIntro({
  onClick,
  title,
  description,
  buttonText,
}: ExerciseIntroProps) {
  return (
    <section className={styles.page}>
      <h1 className={styles.heading}>{title}</h1>
      <p className={styles.subheading}>{description}</p>
      <Button onClick={onClick}>{buttonText || "Begin Exercise"}</Button>
    </section>
  );
}

export default ExerciseIntro;
