import React from "react";
import "./Homescreen.css";
import profileImg from "../../assets/images/profile.svg";  // Updated import for SVG

const Homescreen = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Hey, I'm Abdulrahmn Mohamednur</h1>
        <h2></h2>
        <p>
          I'm a passionate Software Developer with an insatiable curiosity and a deep love for learning new things. This digital collection is a window into my world, showcasing a range of coding projects and my interests in diverse topics like technology, finance, and games. Join me on this journey of exploration and discovery!
          Featured Projects.
        </p>
        <a href="/contact" className="btn-primary">Get In Touch</a>
      </div>
      <div className="hero-image">
        <img src={profileImg} alt="Profile" />  {/* Use the SVG image */}
      </div>
    </div>
  );
};

export default Homescreen;
