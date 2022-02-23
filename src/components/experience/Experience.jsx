import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import './Experience.scss';
import { config } from '../../config';

export default function Experience() {
  return (
<section id="experience">
    <div className='container-lg'>
    <h2 className="heading-sec-mb">
          <span className="heading-sec-main">Experience</span>
    </h2>

    <div className="experience-timeline">
        { config.experience.map((item,id)=>{return ( 
        
        <div className="vtimeline-point" key={ id }>
            <div className="vtimeline-icon"><FaMapMarkerAlt/></div>
        
            <div className="vtimeline-block">
            <span className="vtimeline-date">{ item.date }</span>
        
            <div className="vtimeline-content">
            <h4>{ item.employerName }</h4>
            <h5>{ item.jobTitle }</h5>
            <ul>
                { item.jobTasks.map((item,id)=>{return <li key={ id }>{ item }</li>}) }
            </ul>
    </div></div></div>)
        }) }
    </div>
    </div>
  </section>);
}
