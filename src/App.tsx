import { Routes, Route } from "react-router-dom";
import Breathing from "./pages/Breathing";
import Grounding from "./pages/Grounding";
import Done from "./pages/Done";
import "./styles/app.css";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import PageContainer from "./components/PageContainer";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <PageContainer>
        <Routes>
          <Route path="/" element={<Breathing />} />
          <Route path="/grounding" element={<Grounding />} />
          <Route path="/done" element={<Done />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageContainer>
    </>
  );
}
