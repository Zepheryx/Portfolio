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
              Hello! I’m Mr.G, a dedicated fullstack developer with a strong focus on building 
              seamless and efficient web applications. My journey in technology has fueled my passion 
              for creating intuitive user experiences and delivering high-quality code.
              <br /><br />
              I enjoy exploring modern technologies and continuously seek opportunities to enhance my 
              skills in both front-end and back-end development. When I’m not coding, you’ll often find 
              me immersed in music, reading, or browsing the web.
            </p>
            <a href="./Portfolio/cv.pdf" target="_blank" rel="noreferrer" className="cv">
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
