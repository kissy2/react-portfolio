import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { BiChevronRight } from "react-icons/bi";
import "./Certificates.scss";
import { config } from '../../config';

export default function Certificates() {

  const [lastPosition, setLastPosition] = useState(config.certificatesLimiter);

  return (
    <section id="certificates">
      <Container>
        <h2 className="heading-sec-mb">
          <span className="heading-sec-main">Certificates</span>
          <span className="heading-sec-sub">
          { config.certificatesTitleDescription }
          </span>
        </h2>

        <ul className="grid-list">
           { config.certificates.slice(0, lastPosition).map((item,id)=>{ return (
          <li className="item" key={ id }>
            <div className="screen">
              <div className="bar">
                <h3>{ item.instructor }</h3>
                <i></i>
              </div>
              <div className="main">
                <div className="title">
                  <div className="m-a">
                    <h2>{ item.name }</h2>
                    <a
                      className="custom-button is-rounded"
                      href={ item.link }
                      target="_blank"
                    >
                      <span>Verify Certificate</span>
                      <BiChevronRight />
                    </a>
                  </div>
                </div>
              </div>
              <div className="ribbon ribbon-top-right">
                <span>{ item.issuer }</span>
              </div>
            </div>
          </li>
          )}) }
        </ul>
        { lastPosition < config.certificates.length && <a className="btn btn-custom btn-custom-v2" onClick={ () => { setLastPosition(current => current + config.certificatesLimiter) } }>
          Show More
        </a>
        }
      </Container>
    </section>
  );
}
