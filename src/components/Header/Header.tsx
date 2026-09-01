import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { FiWind } from "react-icons/fi";
import { TbCircleDot } from "react-icons/tb";
import logoImg from "../../assets/logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.brand}>
          <img src={logoImg} alt="" className={styles.logoIcon} />
          <span className={styles.logoText}>Just Breathe</span>
        </NavLink>

        <nav className={styles.nav} aria-label="Main">
          <NavLink
            to="/breathing"
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
