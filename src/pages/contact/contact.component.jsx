import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import './contact.style.css';

const Contact = () => {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                        <div className="m-2">
                            <a href="mailto:websiteanisha@gmail.com" rel="noopener noreferrer" target="_blank">
                                <Button variant="outline-danger" title="websiteanisha@gmail.com">
                                    <i className="fas fa-envelope-square"></i> Email Me
                                </Button>
                            </a>
                        </div>

                        <div className="m-2">
                            <a href="https://www.linkedin.com/in/anisha-sharma-107326139" rel="noopener noreferrer" target="_blank">
                                <Button variant="outline-primary" title="Visit My LinkedIn">
                                    <i className="fab fa-linkedin"></i> LinkedIn
                                </Button>
                            </a>
                        </div>

                        <div className="mt-2">
                            <a href="https://github.com/Anishasharma023" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-dark" title="My other projects">
                                    <i className="fab fa-github-square"></i> GitHub
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
};

export default Contact;