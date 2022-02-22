import { React, useState, useEffect } from 'react';
import { Navbar , Container, Nav as NavB } from 'react-bootstrap';
import './Nav.scss';


export default function Nav() {

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
      
        <NavB>

        <NavB.Link href="/#hero">Home</NavB.Link>
        <NavB.Link href="/#about">About</NavB.Link>
        <NavB.Link href="/#experience">Experience</NavB.Link>
        <NavB.Link href="/#education">Education</NavB.Link>
        <NavB.Link href="/#projects">Projects</NavB.Link>
        <NavB.Link href="/#certificates">Certificates</NavB.Link>
        <NavB.Link href="/#contact">Contact</NavB.Link>

        </NavB> 

      </Navbar.Collapse>  

      </Container>

     </Navbar>

  )
;
}
