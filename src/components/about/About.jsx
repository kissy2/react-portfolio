import React from 'react';
import './About.scss';
import { Container } from 'react-bootstrap';
import { Link } from "react-scroll";
import { config } from '../../config';

export default function About() {
  return (

<section id="about">
      <Container>
        <h2 className="heading-sec-mb">
          <span className="heading-sec-main">About Me</span>
          <span className="heading-sec-sub"> { config.about.titleDescription } </span>
        </h2>
        <div className="about-content">
          <div>
            <h3 className="about-content-title">Get to know me!</h3>
            <div>
              <p className="about-content-details" dangerouslySetInnerHTML={{ __html: config.about.getToKnowMe1 }}/>
              <p className="about-content-details" dangerouslySetInnerHTML={{ __html: config.about.getToKnowMe2 }}/>
            </div>
            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} className="btn btn-custom">Contact</Link>

          </div>
          <div>
            <h3 className="about-content-title">My Skills</h3>
            <div className="skills">
              {config.about.Skills.map((item, id)=>{ return <div key={ id } className="skill"> { item } </div> })}  
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
