import styles from "./ExerciseCard.module.css";
import { NavLink } from "react-router-dom";

type ExerciseCardProps = {
  image: string;
  title: string;
  description: string;
  route?: string;
  variant?: "borderless";
};

function ExerciseCard({
  image,
  title,
  description,
  route,
  variant,
}: ExerciseCardProps) {
  const className = `${styles.card} ${
    route ? styles.clickable : ""
  } ${variant === "borderless" ? styles.borderless : ""}`;

  const content = (
    <>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );

  return route ? (
    <NavLink to={route} className={className}>
      {content}
    </NavLink>
  ) : (
    <div className={className}>{content}</div>
  );
}

export default ExerciseCard;
