import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

/* Modelos de ejemplo, páginas para modelos*/
import Home from "./Home.jsx";
import Platform_car from "./Platform_car.jsx";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Platform_car" element={<Platform_car />} />
        </Routes>
    </Router>
    
  );
};

export default App;
