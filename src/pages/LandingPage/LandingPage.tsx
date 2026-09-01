import styles from "./LandingPage.module.css";
import WaterSymbol from "../../assets/water.png";
import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import LungsSymbol from "../../assets/lungs.png";
import BrainSymbol from "../../assets/brain.png";
import MeditationSymbol from "../../assets/meditation.png";

function LandingPage() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Find your calm. <br /> One breath at a time.
        </h1>
        <p>
          Breathing and grounding exercises to help you manage stress, anxiety
          and panic in the moment.
        </p>
        <img className={styles.heroLogo} src={WaterSymbol} alt="Water Symbol" />
      </section>
      <section className={styles.ChooseExercise}>
        <h2>Choose an exercise </h2>
        <div className={styles.cardContainer}>
          <ExerciseCard
            image={LungsSymbol}
            title="Breathing"
            description="A guided breathing exercise to calm your mind and body."
            route="/breathing"
          />
          <ExerciseCard
            image={BrainSymbol}
            title="Grounding"
            description="A simple grounding exercise to help you stay present."
            route="/grounding"
          />
        </div>
      </section>
      <section className={styles.howToUse}>
        <img
          className={styles.howToUseImg}
          src={MeditationSymbol}
          alt="Meditation Symbol"
        />

        <div className={styles.howToUseText}>
          <h3>How to Use</h3>
          <p>
            Find a quiet place, take a few momemnts for yourself, and choose the
            exercise you need right now or better do both of them. There's no
            right or wrong way - just what helps you.
          </p>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
