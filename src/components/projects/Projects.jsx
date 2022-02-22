import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Laptop from './Laptop';
import './Projects.scss';
import { config } from '../../config';

export default function Projects() {
  const [lastPosition, setLastPosition] = useState(config.projectsLimiter);
  const navigate = useNavigate();

  return (
  
<section id="projects">
      <Container>
        <h2 className="heading-sec-mb">
          <span className="heading-sec-main">Projects</span>
          <span className="heading-sec-sub"> { config.projectsTitleDescription } </span>
        </h2>
        { config.projects.slice(0, lastPosition).map((item,id)=>{ return (
          <div className="projects-row" key={ id }>
            <Laptop data-content={ item.projectTitle } data-src={ item.imageSource } />
            <div className="projects-row-content">
              <h3 className="projects-row-content-title"> { item.projectTitle } </h3>
              <p className="projects-row-content-desc"> { item.projectDescription } </p>
              <a href={`/projects/${ id }`} className="btn btn-custom" target="_blank">Case Study</a>
            </div>
          </div>
        )}) }
        { lastPosition < config.projects.length && <a className="btn btn-custom btn-custom-v2" onClick={ () => { setLastPosition(current => current + config.projectsLimiter) } }>
          Show More
        </a>
        }
      </Container>
    </section>
  
  );
}
