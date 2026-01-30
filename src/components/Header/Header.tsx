import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { FiWind } from "react-icons/fi";
import { TbCircleDot } from "react-icons/tb";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <h1 className={styles.logo}>🌿Just Breathe</h1>
          <p className={styles.tagline}>
            You're safe. Take a moment to breathe.
          </p>
        </div>

        <nav className={styles.nav} aria-label="Main">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.pill} ${isActive ? styles.active : ""}`
            }
          >
            <FiWind /> Breathing
          </NavLink>

          <NavLink
            to="/grounding"
            className={({ isActive }) =>
              `${styles.pill} ${isActive ? styles.active : ""}`
            }
          >
            <TbCircleDot /> Grounding
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
