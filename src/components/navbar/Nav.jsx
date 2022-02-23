import { React, useState, useEffect } from 'react';
import { Navbar , Container, Nav as NavB } from 'react-bootstrap';
import { Link } from "react-scroll";
import './Nav.scss';


function NavHome(){
  return(
  <NavB>

  <Link activeClass="active" to="hero" spy={true} smooth={true} duration={500} className="nav-link">Home</Link>
  <Link href="/#about" activeClass="active" to="about" spy={true} smooth={true} duration={500} className="nav-link">About</Link>
  <Link activeClass="active" to="experience" spy={true} smooth={true} duration={500} className="nav-link">Experience</Link>
  <Link activeClass="active" to="education" spy={true} smooth={true} duration={500} className="nav-link">Education</Link>
  <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} className="nav-link">Projects</Link>
  <Link activeClass="active" to="certificates" spy={true} smooth={true} duration={500} className="nav-link">Certificates</Link>
  <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} className="nav-link">Contact</Link>

  </NavB>
  );
}

function NavProjects(){
  return(
  <NavB>

  <NavB.Link href="/#about">About</NavB.Link>
  <NavB.Link href="/#experience">Experience</NavB.Link>
  <NavB.Link href="/#education">Education</NavB.Link>
  <NavB.Link href="/#projects">Projects</NavB.Link>
  <NavB.Link href="/#certificates">Certificates</NavB.Link>
  <NavB.Link href="/#contact">Contact</NavB.Link>

  </NavB>
  );
}

export default function Nav(props) {

    const [colorChange, setColorchange] = useState(false);

    useEffect(() => {

      const changeNavbarColor = () =>{

        window.scrollY >= 80 ? setColorchange(true) : setColorchange(false);    
     }
 
     window.addEventListener('scroll', changeNavbarColor);

      return () => {

        window.removeEventListener('scroll', changeNavbarColor);
      };
      
    }, []);
    
  return(

    <Navbar id="navbar" className={`fixed-top navbar-light sticky navbar-custom ${colorChange ? 'nav-sticky' : ''}`} expand='sm' variant="dark"> 

      <Container style={{flexDirection:"row-reverse"}}>

      <Navbar.Toggle onBlur={(e)=>{e.target.click()}}/> 

      <Navbar.Collapse  className="justify-content-center"> 
      
      {props?.target === "home" ? <NavHome /> : <NavProjects />}

      </Navbar.Collapse>  

      </Container>

     </Navbar>

  )
;
}
