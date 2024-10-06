import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../components/projectData';
import images from '../components/imageLoader';

const Details = () => {
  const { url } = useParams(); // Get the URL parameter
  const project = projectData.find((project) => project.url === url); // Find the matching project

  // Handle the case where the project is not found
  if (!project) {
    return <p>Project not found.</p>;
  }

  const formatDescription = (text) => {
    return text.split('\n').map((line, index) => (
        <span key={index}>
            {line}
            <br />
        </span>
    ));
  };
  return (
    <div className="container details">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="detail-img">
          <img src={images[project.img]} alt={project.brand} />
        </div>
        <div className="detail-cont">
          <div className="detail-header" style={{ color: project.color }}>
            <h2>Project Info</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              {project.brand && (
                <div className="info">
                  <div className="title" style={{ color: project.color }}>Brand</div>
                  <div className="title-info">{project.brand}</div>
                </div>
              )}
              {project.client && (
                <div className="info">
                  <div className="title" style={{ color: project.color }}>Client</div>
                  <div className="title-info">{project.client}</div>
                </div>
              )}
              {project.year && (
                <div className="info">
                  <div className="title" style={{ color: project.color }}>Year</div>
                  <div className="title-info">{project.year}</div>
                </div>
              )}
              {project.team && (
                <div className="info">
                  <div className="title" style={{ color: project.color }}>Team</div>
                  <div className="title-info">{project.team}</div>
                </div>
              )}
              {project.website && (
                <div className="info">
                  <a href={project.website} target="_blank" rel="noreferrer" className="title-info" id='visit-web'>
                    <span>
                      <i className="bi bi-arrow-up-right"></i>view the website
                    </span>
                    <div className="link-underline"></div>
                  </a>
                </div>
              )}
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              {project.description && (
                <div className="info">
                  <div className="title-info">{formatDescription(project.description)}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        {project.multiImgs.length > 0 && (
          <div className="multi-img">
            <h2 style={{ color: project.color }}>Project Gallery</h2>
            {project.multiImgs.map((image, index) => (
              <img key={index} src={images[image]} // Fetch the correct image from your image loader
                alt={`${project.brand} img ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
