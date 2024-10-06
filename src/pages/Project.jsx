import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projectData from '../components/projectData'; // Ensure this points to your project data file
import images from '../components/imageLoader'; // Ensure this points to your image loader

const Project = () => {
  const [hoveredElement, setHoveredElement] = useState(null);

  return (
    <div className="container mt-3">
      <div className="row project">
        <div className="col-lg-7 col-md-0 col-sm-12">
          <div className="project-img">
            {projectData.map((project, index) => (
              <img key={index} src={images[project.img]} 
                alt={project.brand}
                style={{
                  opacity: hoveredElement === project ? 1 : 0,
                }}
              />
            ))}
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="header-project">
            <h2>Work</h2>
            <h5>Client</h5>
          </div>
          <div className="project-element">
            {projectData.map((project, index) => (
              <Link
                to={`/project/${project.url}`}
                className="element" key={index}
                onMouseEnter={() => setHoveredElement(project)} // Set hovered project
                onMouseLeave={() => setHoveredElement(null)} // Reset on mouse leave
              >
                <div className="project">
                  <i className="bx bx-right-arrow-alt"></i>
                  <span>{project.brand}</span>
                </div>
                <div className="client">{project.client}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
