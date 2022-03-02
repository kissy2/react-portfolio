import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.scss";
import Preloader from "./components/preloader/Preloader";
import Nav from "./components/navbar/Nav";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";
import Certificates from "./components/certificates/Certificates";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ProjectsDetails from "./components/projects-details/ProjectsDetails";

function App() {
  return (
    <div className="App">
      <Preloader />

      <Router>
        <Routes>
          <Route
            path="/projects/:id"
            element={
              <>
                <Nav />
                <ProjectsDetails />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Nav target="home" />
                <Hero target="home" />
                <About />
                <Experience />
                <Education />
                <Projects />
                <Certificates />
                <Contact />
              </>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
