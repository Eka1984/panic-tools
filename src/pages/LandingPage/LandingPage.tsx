import styles from "./LandingPage.module.css";
import WaterSymbol from "../../assets/water.png";

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
    </>
  );
}

export default LandingPage;
