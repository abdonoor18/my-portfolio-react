import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Little Lemon',
      description: 'A restaurant with a beautiful looking website and a responsive table booking page. It also includes a sign-up and login page.',
      image: '/assets/images/little-lemon.svg',  // Replace with actual image path for Little Lemon
    },
    {
      title: 'Penny Pal',
      description: 'A personal finance tracking app that allows you to monitor your finances while giving you a visualization of your data.',
      image: '/assets/images/penny-pal.svg',  // Replace with actual image path for Penny Pal
    },
    {
      title: 'Destined For Greatness',
      description: 'A game that decides your fate. Play now and see where your path leads.',
      image: '/assets/images/destined-for-greatness.svg',  // Replace with actual image path for Destined For Greatness
    },
  ];

  return (
    <div className="portfolio-container">
      <h1>My Portfolio</h1>
      <p>Here are some of the projects I have worked on:</p>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.image} alt={project.title} className="portfolio-img" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
