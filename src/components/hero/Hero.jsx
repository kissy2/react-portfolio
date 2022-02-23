import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import "./Hero.scss";
import { Container } from "react-bootstrap";
import Particles from "react-tsparticles";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-scroll";
import { config } from "../../config";

function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: config.hero.typeWriter,
      startDelay: 300,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 3000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: " 🚀",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const tsPartclesOptions = {
    fullScreen: {
      enable: false,
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
  };

  return (
    <>
      <Container>
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 align-items-center text-center">
            <div className="title-heading mt-4 mb-3">
              <img className="rounded-circle" alt="" />
              <h1 className="mt-4">{config.hero.name}</h1>
              <h6 className="mb-3">
                {config.hero.preTypeWriter} <span ref={el}></span>
              </h6>
              <div className="mt-4 pt-2">
                <Link activeClass="active" to={ config.hero.btn1Link } spy={true} smooth={true} duration={500} className="btn btn-primary rounded me-2 mb-2">{config.hero.btn1}</Link>

                <a className="btn btn-primary rounded mb-2" href={ config.hero.btn2Link } target="_blank" rel="noopener noreferrer" download>
                  {config.hero.btn2}
                  <FiDownload />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Particles
        style={{ position: "absolute", top: 0, left: 0 }}
        id="tsparticles"
        options={tsPartclesOptions}
      />
    </>
  );
}

function HomeProject(props) {
  return (
    <Container>
      <div className="row justify-content-center">
        <div className="col-lg-12 col-md-12 align-items-center text-center">
          <div className="projects-heading title-heading mt-4 mb-3">
            <h1 className="mt-4">{ props.projectTitle }</h1>
            <h6 className="mb-5 mt-5">{ props.projectDescription }</h6>
            <a href="#project-details" className="scroll">
              <HiOutlineChevronDoubleDown />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default function Hero(props) {
  return (
    <div className="position-relative" id="hero">
      <div className="bg-overlay"></div>
      {props?.target === "home" ? <Home /> : <HomeProject {...props} />};
    </div>
  );
}
