import React from 'react';
import './Projects.css';
import comingSoonImg from '../images/coming_soon.jpg';

function Projects() {
  return (
    <section className="projects">
      <h2 className="projects-title">More AI Projects Coming Soon</h2>
      <div className="projects-content">
        <img src={comingSoonImg} alt="Coming Soon" className="coming-soon-img" />
        <p>
          Stay tuned for more exciting AI projects that will demonstrate the power and potential of artificial intelligence in various fields and applications.
        </p>
      </div>
    </section>
  );
}

export default Projects;