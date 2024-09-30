import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/home/Navbar";  
import Homescreen from "./pages/home/Homescreen";  
import Portfolio from "./pages/Portfolio/Portfolio";  
import AboutMe from "./pages/AboutMe/AboutMe"; 
import Contact from "./pages/Contact/Contact";  
import NotFound from "./pages/NotFound/NotFound"; 

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homescreen />} />  {}
          <Route path="/portfolio" element={<Portfolio />} />  {}
          <Route path="/about" element={<AboutMe />} />  {}
          <Route path="/contact" element={<Contact />} />  {}
          <Route path="*" element={<NotFound />} />  {}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
