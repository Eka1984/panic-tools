import { Routes, Route } from "react-router-dom";
import Breathing from "./pages/Breathing";
import Grounding from "./pages/Grounding";
import Done from "./pages/Done";
import "./styles/app.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Breathing />} />
      <Route path="/grounding" element={<Grounding />} />
      <Route path="/done" element={<Done />} />
    </Routes>
  );
}
