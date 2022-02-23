import React from "react";
import { useParams } from "react-router-dom";
import Hero from "../hero/Hero";
import Laptop from "../projects/Laptop";
import { Container } from "react-bootstrap";
import "./ProjectsDetails.scss";
import { config } from '../../config';


export default function ProjectsDetails() {
  const { id } = useParams();
  const project = config.projects[id];

  return (
    <>
      <Hero target="project" projectTitle={ project.projectTitle } projectDescription={ project.projectDescription }/>

      <section id="project-details">
        <Laptop data-content={ project.projectTitle } data-src={ project.imageSource } />

        <Container className="project-content">
          <h3 className="project-title">Project Overview</h3>

          <p className="project-desc" dangerouslySetInnerHTML={{ __html: project.projectOverview }}/>

          <div className="project-tools-used">
            <h3 className="project-title">Tools Used</h3>
            <div className="skills">
              { project.skills.map((item,id)=>{ return <div key={ id } className="skill"> { item } </div> }) }
            </div>
          </div>

          <h3 className="project-title">See Live</h3>
          <a href={ project.liveLink } className="btn-custom" target="_blank">
            Live Link
          </a>
          <a href={ project.codeLink } className="btn-custom btn-custom-light" target="_blank" disabled={ true }>
            Code Link
          </a>
        </Container>
      </section>
    </>
  );
}
