import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>🌿 Just Breathe</h1>

      <button
        className={styles.burger}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          onClick={() => setMenuOpen(false)}
        >
          BREATHE
        </NavLink>
        <NavLink
          to="/grounding"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          onClick={() => setMenuOpen(false)}
        >
          GROUND
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
