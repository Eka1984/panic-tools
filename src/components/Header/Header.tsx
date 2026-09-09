import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { FiWind, FiMenu, FiX } from "react-icons/fi";
import { TbCircleDot } from "react-icons/tb";
import logoImg from "../../assets/logo.png";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.brand}>
          <img src={logoImg} alt="" className={styles.logoIcon} />
          <span className={styles.logoText}>Just Breathe</span>
        </NavLink>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav
          className={`${styles.nav} ${menuOpen ? styles.open : ""}`}
          aria-label="Main"
        >
          <NavLink
            to="/breathing"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `${styles.pill} ${isActive ? styles.active : ""}`
            }
          >
            <FiWind /> Breathing
          </NavLink>

          <NavLink
            to="/grounding"
            onClick={() => setMenuOpen(false)}
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
