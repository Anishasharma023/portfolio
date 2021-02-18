import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import MOVING from "../../assets/img/experience/moving1.png";
import Tilt from "react-tilt";
import "./experience.style.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="">
                <Row className="row1 d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize " src={MOVING} alt="Accenture logo" />
                </Row>
                <Row className="row2 d-flex justify-content-center flex-wrap">
                Mandate Logistics Systems Pvt. Ltd.
               </Row>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Associate Software Engineer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">PHP Developer</strong>
                    <br />
                    <strong>Technology:</strong> HTML, CSS, Javascript, Bootstrap, MS-SQL, Codeigniter
                    <br />
                    <strong>Duration:</strong> Feburay 2019 - July 2020
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.</li>
                      <li><strong>Provided</strong> custom front end registration based on different user role.</li>
                      <li><strong>Provided</strong> custom dashboard based on user role.</li>
                      <li><strong>Provided</strong> application maintenance while working. 
                      </li>
                      <li><strong>Performed</strong> CRUD operations on databases to load/ remove data according 
                      to the business requirements.</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
