import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CourseList = (props) => {
  const [active, setActive] = useState(false);

  return (
    <div className="courseList">
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button}
              variant="link"
              eventKey="0"
              onClick={() => setActive(!active)}
            >
              {props.title}
              <i className={active ? 'fa-solid fa-caret-up' : 'fa-solid fa-caret-down'} />
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                {props.courses.map((course) => {
                  return (
                    <li key={course}>{course}</li>
                  );
                })}
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default CourseList;
