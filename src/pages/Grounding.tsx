import GroundingChecklist from "../components/GroundingChecklist";
import { motion } from "framer-motion";

export default function Grounding() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <main className="page">
        <GroundingChecklist />
      </main>
    </motion.div>
  );
}
