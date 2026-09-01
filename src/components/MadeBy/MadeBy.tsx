import styles from "./MadeBy.module.css";

export default function MadeBy() {
  return (
    <div className={styles.madeBy}>
      Made by{" "}
      <a
        href="https://eka1984.github.io/Portfolio-web-site/"
        target="_blank"
        rel="noreferrer"
      >
        Ekaterina Korzneva
      </a>
      <div className={styles.disclaimer}>
        Disclaimer: The breathing and grounding exercises on this platform are
        for educational and relaxation purposes only. They are not a substitute
        for professional medical advice, mental health counseling, or
        psychiatric treatment. If you are experiencing severe anxiety, panic, or
        a mental health crisis, please consult a qualified healthcare
        professional or contact an emergency hotline immediately.
      </div>
    </div>
  );
}
