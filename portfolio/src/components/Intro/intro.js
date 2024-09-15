import React, { useState, useEffect } from 'react';
import './intro.css';
import bg from '../../assets/image.png';

const Intro = ({ animate }) => {
  useEffect(() => {
    // Additional logic if needed when the component mounts
  }, []);

  return (
    <section id="intro" className={animate ? 'fadeIn' : ''}>
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Poojashree</span><br/>Ambitious</span>
        {/* <p className="introPara">As a computer science student, I am driven by curiosity and a passion for growth, actively learning through hands-on projects, problem-solving, and collaboration, while prioritizing clean code and knowledge sharing to excel in my development journey.</p> */}
      </div>
      <img src={bg} alt="Profile" className="bg visible" />
    </section>
  );
}

export default Intro;
