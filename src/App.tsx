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

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header />
      <PageContainer>
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
