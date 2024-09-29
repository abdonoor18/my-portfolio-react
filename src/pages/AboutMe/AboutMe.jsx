import React from 'react';
import './AboutMe.css';  // Add your styles for the About Me page
import profileImg from '../../assets/images/profile.svg';  // Replace with the actual image path

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src={profileImg} alt="Abdulrahman" />  {/* Fixed alt attribute */}
        </div>
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hi! I’m Abdulrahman, a passionate web developer and tech enthusiast with a focus on building user-friendly web applications.
            I enjoy learning new technologies and solving challenging problems. I’ve worked on various projects, including web development, personal finance apps, and games.
          </p>
          <p>
            I am currently in my last semester of studies and I am excited to explore new opportunities in the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
