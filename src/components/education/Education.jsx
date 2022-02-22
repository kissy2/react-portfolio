import React from 'react';
import './Education.scss';
import { config } from '../../config';

export default function Education() {
  return (

<section id="education">
    
    <div className='container-lg'>

        <h2 className="heading-sec-mb">
            <span className="heading-sec-main">Education</span>
        </h2>

        {config.education.map((item,id)=>{return (
            <div className="education-block" key={ id }>
                <h3> { item.universityName } </h3>
                <span className="education-date"> { item.date } </span>
                <h4> { item.diplomatName } </h4>
                <p> { item.diplomatDescription } </p>
            </div>);
        })}

    </div>

</section>
  );
}
