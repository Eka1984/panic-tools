import styles from "./ExerciseCard.module.css";
import { NavLink } from "react-router-dom";

type ExerciseCardProps = {
  image: string;
  title: string;
  description: string;
  route: string;
};

function ExerciseCard({ image, title, description, route }: ExerciseCardProps) {
  return (
    <NavLink to={route} className={styles.card}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </NavLink>
  );
}

export default ExerciseCard;
