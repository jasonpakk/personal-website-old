import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import EducationItems from './EducationItems';
import CourseList from './CourseList';

const Education = () => {
  return (
    <section data-index="2" id="education">
      <h2>Education</h2>

      {EducationItems.map((item, index) => {
        return (
          <Fade bottom key={item.school}>
            <div className="educationItem">

              <Flip left>
                <div>
                  <div id={item.logo} className="schoolLogo" />
                </div>
              </Flip>

              <Slide right>
                <div className="schoolText">
                  <p className="schoolName">{item.school}</p>
                  <p className="degreeText">{item.degree}</p>

                  <div className="schoolIcons">
                    <i className="fas fa-map-marker-alt iconDisplay"><p>{item.location}</p></i>
                    <i className="far fa-calendar-alt iconDisplay"><p>{item.time}</p></i>
                  </div>

                  <CourseList title="Relevant Coursework" courses={item.courses} />

                </div>
              </Slide>

            </div>
          </Fade>
        );
      })}

    </section>
  );
};

export default Education;
