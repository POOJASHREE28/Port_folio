import React from 'react';
import './about.css';
import Profile from '../../assets/profile.png';
import Resume from '../../assets/resume.pdf';
import HTMLLogo from '../../assets/html.png'; // Add paths to your images
import CSSLogo from '../../assets/css.png';
import ReactLogo from '../../assets/reactjs.png';
import NodeJSLogo from '../../assets/nodejs.jpeg';
import MongoDBLogo from '../../assets/mongodb.jpeg';
import SQL from '../../assets/sql.png';
import Cpp from '../../assets/Cpp.png';
import C from '../../assets/C.png';
import Java from '../../assets/Java.png';

const About = ({ animate }) => {
  const handleResumeClick = () => {
    window.open(Resume, '_blank');
  };

  return (
    <section id="about" className={animate ? 'fadeIn' : ''}>
      <div className="header">Who Am I?</div>
      <div className="columns">
        <div className="left-column">
          <h1>About Me</h1>
          <div className="profile-image">
            <img src={Profile} alt="Profile" />
          </div>
          <div className="about-text">
            Hi, I'm Poojashree, a dedicated engineering graduate specialized in Information Science & Engineering with a CGPA of 9.17.
            I'm passionate about technology and driven by a relentless pursuit of knowledge. With a curious and adaptable mindset,
            I embrace challenges as opportunities to grow. As an aspiring computer science engineer, I'm eager to expand my skills 
            and contribute meaningfully to the ever-evolving tech world.
          </div>
          <button className="resume-button" onClick={handleResumeClick}>View Resume</button>
        </div>
        <div className="right-column">
          <h2>My Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <img src={HTMLLogo} alt="HTML" title="HTML" />
            </div>
            <div className="skill-item">
              <img src={CSSLogo} alt="CSS" title="CSS" />
            </div>
            <div className="skill-item">
              <img src={ReactLogo} alt="React" title="React JS" />
            </div>
            <div className="skill-item">
              <img src={NodeJSLogo} alt="Node.js" title="Node JS" />
            </div>
            <div className="skill-item">
              <img src={MongoDBLogo} alt="MongoDB" title="MongoDB" />
            </div>
            <div className="skill-item">
              <img src={SQL} alt="SQL" title="SQL" />
            </div>
            <div className="skill-item">
              <img src={Cpp} alt="C++" title="C++" />
            </div>
            <div className="skill-item">
              <img src={C} alt="C" title="C" />
            </div>
            <div className="skill-item">
              <img src={Java} alt="Java" title="Java" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
