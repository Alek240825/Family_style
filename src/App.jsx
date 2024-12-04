import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import SobreNosotros from "./pages/SobreNosotros";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;