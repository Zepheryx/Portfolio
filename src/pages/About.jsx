// src/pages/About.js
import React from 'react';
import meImage from '../images/me.jpg';

const About = () => {
  return (
    <div className="container mt-2">
      <div className="row d-flex justify-content-center align-items-center flex-dir-rev">
        <div className="col-lg-8 col-md-12 col-sm-12">
          <div className="big-text">
            <h2>About Me</h2>
            <p>
              Hello! I’m Mohamed Ghiouan. I’m a passionate Fullstack Engineer from Morocco, 
              focused on crafting seamless and efficient web applications. 
              My journey in technology has fueled my passion for building
              intuitive user experiences and writing clean, high-quality code.
              <br /><br />
              I’m constantly exploring modern technologies and seeking opportunities 
              to refine my skills in both front-end and back-end development. 
              When I’m not coding, I enjoy immersing myself in music, reading, 
              or exploring the web for new ideas and inspiration.
            </p>
            <a href="/Portfolio/cv.pdf" target="_blank" rel="noreferrer" className="cv">
              <span>
                <i className='bx bx-down-arrow-alt'></i>Resume
              </span>
              <div className="link-underline"></div>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="me-img">
            <img src={meImage} alt="Mr.G" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
