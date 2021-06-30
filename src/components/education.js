import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Education = () => {
  return (
    <section data-index="1" id="education">
      <h2>Education</h2>

      <div className="educationItem">
        <div id="dartLogo" className="schoolLogo" />
        <div className="schoolText">
          <h3>Dartmouth College</h3>
          <div className="schoolIcons">
            <i className="fas fa-map-marker-alt"><p>Hanover, NH</p></i>
            <i className="far fa-calendar-alt"><p>Sep 2020 - Jun 2024</p></i>
          </div>

          <p className="degreeText">Pursuing a B.A. in Computer Science</p>

          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Relevant Coursework
                  <i className="fas fa-caret-down" />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ul>
                    <li>COSC 52: Full-Stack Web Development</li>
                    <li>COSC 50: Software Design and Implementation</li>
                    <li>COSC 10: Object-Oriented Programming</li>
                    <li>ENGS 12: Design Thinking</li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>

      <div className="educationItem">
        <div id="tjLogo" className="schoolLogo" />
        <div className="schoolText">
          <h3>Thomas Jefferson High School for Science and Technology</h3>
          <div className="schoolIcons">
            <i className="fas fa-map-marker-alt"><p>Alexandria, VA</p></i>
            <i className="far fa-calendar-alt"><p>Sep 2016 - Jun 2020</p></i>
          </div>

          <p className="degreeText">Advanced Studies Diploma</p>

          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Relevant Coursework
                  <i className="fas fa-caret-down" />
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ul>
                    <li>AP Computer Science A+</li>
                    <li>Mobile App Development</li>
                    <li>Linear Algebra</li>
                    <li>Multivariable Calculus</li>
                    <li>Automation and Robotics I  II</li>
                    <li>Robotics Senior Research Lab</li>
                    <li>Computer Science Foundations</li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>

    </section>
  );
};

export default Education;
