import styles from "./Done.module.css";
import { motion } from "framer-motion";

export default function Done() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <main className="page">
        <h1>Well done! </h1>
        <p>
          You’ve just brought your attention back to the present moment. Stay
          here for a breath or two before moving on with your day.
        </p>
        <span className={styles.emoji}>🌿</span>
      </main>
    </motion.div>
  );
}
