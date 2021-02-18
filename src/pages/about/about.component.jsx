import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import profile from "../../assets/img/profile/profile.jpg";
import './about.style.css';



const About = () => {
    return (
        <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Anisha Sharma</strong>
                <br />A passionate programmer, born and brought up in Raipur from Chhattisgarh. I have One and a half years of experience at Mandate Logistics Systems (MovingNow.in)  as  PHP Developer.
                <br />
                {/*I had done my graduation from PT. Ravishankar University, Raipur. And I had completed my post graduation from MATS University, Raipur.*/}
                <br />
                I am seeking employment with a company where I can use my talents and skills to grow simultaneously with company.
                <br />
                I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  {/*<div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>*/}
                  <div>
                    <a href="https://drive.google.com/file/d/1vGmXUPP8FHB1K56hSIGFv1v714b_pKK2/view" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/Anishasharma023" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/anisha-sharma-107326139" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    )
}

export default About;