import React from 'react';
import './projects.css'; 
import fleet from '../../assets/fleet.png';
import diary from '../../assets/diary.png';
import doctor from '../../assets/doctor.png';
const Projects = () => {
  return (
    <div className="project-container">
      <div class="projects-heading"><h2>Projects</h2></div>
      <div className="projects">
        <div className="project">
          <div className="project-image">
            <img src={fleet} alt="Project 1" className="project-image-inner" />
          </div>
          <div className="project-content">
          <h2 className="project-title1">Fleet Management</h2>
            <div className="description">Fleet management streamlines vehicle operations, improving efficiency and cost-effectiveness through real-time tracking, maintenance scheduling, and performance analytics.</div>
          </div>
        </div>
        <div className="project">
          <div className="project-image">
            <img src={diary} alt="Project 2" className="project-image-inner" />
          </div>
          <div className="project-content">
          <h2 className="project-title1">Dairy Farm shop management system</h2>
             <div className="description">A comprehensive system for managing operations and transactions
             within a dairy farm shop, including inventory, sales, customer relations, and financial tracking</div>
          </div>
        </div>
        <div className="project">
          <div className="project-image">
            <img src={doctor} alt="Project 3" className="project-image-inner" />
          </div>
          <div className="project-content">
            <h2 className="project-title1">HealthHub Schedular</h2>
            <div className="description">A doctor appointment system simplifies scheduling by letting patients book, reschedule, or cancel appointments online, cutting down wait times and administrative work. 
              It helps healthcare providers manage their schedules and keep patient records organized.</div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
