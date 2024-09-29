import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/home/Navbar";  // Corrected path for Navbar
import Homescreen from "./pages/home/Homescreen";  // Corrected path for Homescreen
import Portfolio from "./pages/Portfolio/Portfolio";  // Keep the path as it is
import AboutMe from "./pages/AboutMe/AboutMe";  // Keep the path as it is
import Contact from "./pages/Contact/Contact";  // Keep the path as it is
import NotFound from "./pages/NotFound/NotFound";  // Keep the path as it is

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homescreen />} />  {/* Home route */}
          <Route path="/portfolio" element={<Portfolio />} />  {/* Portfolio route */}
          <Route path="/about" element={<AboutMe />} />  {/* About Me route */}
          <Route path="/contact" element={<Contact />} />  {/* Contact route */}
          <Route path="*" element={<NotFound />} />  {/* 404 Not Found route */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
