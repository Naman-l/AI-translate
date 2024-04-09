import "./App.css";
import Home from "./pages/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import Translate from "./pages/Translate";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Routes>
            <Route path="/translate" element={<Translate/>} />
            <Route path="/contact" element={<ContactUs/>} />

      <Route path="/home" element={<Home/>} />
      <Route path="/*" element={<Navigate to="home" replace />} />
    </Routes>
  );
}

export default App;
