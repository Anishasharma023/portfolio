import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import log from "../../assets/icons/logo.png";
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import './navbar.style.css';

//for side logo tooltip
const MyNavbar = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Anisha Sharma<br/>
    </Tooltip>
  );

  return (
    <div>
      <Navbar collapseOnSelect expand="md" variant="dark" fixed="top" className="animate-navbar nav-theme justify-content-between">
        <Navbar.Brand href="#home">

        {/*for side logo tooltip*/}
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <img className="logo" src={log} alt="Portfolio Logo"></img>
          </OverlayTrigger>
          {/*for side logo tooltip*/}

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )

}



export default MyNavbar;