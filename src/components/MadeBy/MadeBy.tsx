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
    </div>
  );
}
