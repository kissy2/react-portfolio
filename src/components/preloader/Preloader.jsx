import React from 'react'
import { useRef, useEffect } from 'react';
import './Preloader.scss'

export default function Preloader() {
  const preloader = useRef(null)

  useEffect(() => {
    window.addEventListener('load',()=>{
      preloader.current.style.display='none';
    })
    return () => {
      window.removeEventListener('load')
    };
  }, []);

  return (
    <div ref={preloader} className="preloader">
    <div className="loader"/>
    </div>
  )
}
