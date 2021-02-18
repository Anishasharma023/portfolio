import React from "react";
import MyNavbar from "./components/navbars/navbar.component";
import Carousal from "./components/carousel/carousel.component";
import TitleMsg from "./components/typewriter/typewriter.component";
import Scroll from "./components/scrolldown/scrolldown.component";
import About from "./pages/about/about.component";
import Container from "react-bootstrap/Container";
import './App.css';
import Fade from 'react-reveal/Fade';
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import background from "./assets/img/parallex/background.webp";
import Skills from "./pages/skills/skills.component";
import Experience from "./pages/experience/experience.component";
import Project from "./components/project-timeline/project.timeline.component";
import Contact from "./pages/contact/contact.component";
import Footer from "./components/footer/footer.component";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />

      <Carousal />

      <TitleMsg />

      <Scroll />{/* you can add this to your carousel component if you want to*/}

     {/*about components*/}
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={background}
          bgImageAlt="parallax"
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade left duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>

      {/*skills components*/}
      <Container className="container-box rounded">
        <Fade left duration={500}>
          <hr />
          <Skills />
        </Fade>
      </Container>

       {/*experience components*/}
       <div>
       <Container className="container-box rounded">
        <Slide left duration={500}>
          <hr />
          <Experience />
        </Slide>
      </Container>
      </div>

       {/*project components*/}
       <Container className="container-box rounded">
        <Slide left duration={500}>
          <hr />
          <Project />
        </Slide>
      </Container>


      {/*contact me components*/}
       <Container className="container-box rounded">
        <Slide left duration={500}>
          <hr />
          <Contact />
        </Slide>
      </Container>

      <hr/>
      <Footer />

    </div>
  );
}

export default App;
