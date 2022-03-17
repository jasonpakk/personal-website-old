import React from 'react';
import Slide from 'react-reveal/Slide';
import EducationItems from './EducationItems';
import CourseList from './CourseList';

const Education = () => {
  return (
    <section data-index="2" id="education">
      <h2>Education</h2>

      {EducationItems.map((item, index) => {
        return (
          <div className="educationItem">

            <div>
              <div id={item.logo} className="schoolLogo" />
            </div>

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
        );
      })}

    </section>
  );
};

export default Education;
