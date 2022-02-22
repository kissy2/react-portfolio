import React from 'react';
import './Laptop.scss';

export default function Laptop(props) {

    return (

    <div id="laptop" >
    <div className="laptop">
    <div className="front">
    <div className="webcamera">
        <div className="outer"></div>
        <div className="lens"></div>
    </div>
    <div className="screen" data-content={props['data-content']}>
        <img src={ props["data-src"] } alt="Project Wallpaper" />
    </div>
    
    <div className="line"></div>
    </div>

    <div className="bottom"></div>
    </div>
    </div>

  );
}
