import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  //   const location = useLocation();
  //   const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>🌿 Just Breathe</h1>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          BREATHE
        </NavLink>
        <NavLink
          to="/grounding"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          GROUND
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
