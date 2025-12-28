import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Breathing from "./pages/Breathing";
import Grounding from "./pages/Grounding";
import Done from "./pages/Done";
import "./styles/app.css";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import PageContainer from "./components/PageContainer";
import ProgressTracker from "./components/ProgressTracker";

export default function App() {
  const location = useLocation();

  const stepMap: Record<string, number> = {
    "/": 0,
    "/grounding": 1,
    "/done": 2,
  };

  const currentStep = stepMap[location.pathname];

  return (
    <>
      <ScrollToTop />
      <Header />
      <PageContainer>
        {" "}
        {currentStep !== undefined && (
          <ProgressTracker currentStep={currentStep} />
        )}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Breathing />} />
            <Route path="/grounding" element={<Grounding />} />
            <Route path="/done" element={<Done />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </PageContainer>
    </>
  );
}
