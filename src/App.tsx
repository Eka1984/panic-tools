import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Breathing from "./pages/Breathing/Breathing";
import Grounding from "./pages/Grounding";
import Done from "./pages/Done/Done";
import "./styles/app.css";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import PageContainer from "./components/PageContainer/PageContainer";
import styles from "./App.module.css";
import MadeBy from "./components/MadeBy/MadeBy";
import LandingPage from "./pages/LandingPage/LandingPage";

export default function App() {
  const location = useLocation();

  return (
    <div className={styles.app}>
      <ScrollToTop />
      <Header />
      <PageContainer>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/breathing" element={<Breathing />} />
            <Route path="/grounding" element={<Grounding />} />
            <Route path="/done" element={<Done />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </PageContainer>
      <MadeBy />
    </div>
  );
}
