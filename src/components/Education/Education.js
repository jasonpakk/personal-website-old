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
          <div className="educationItem" key={item.school}>

            <div>
              <div id={item.logo} className="schoolLogo" />
            </div>

            <Slide right>
              <div className="schoolText">
                <p className="schoolName">{item.school}</p>
                <p className="degreeText">{item.degree}</p>

                <div className="schoolIcons">
                  <i className="fa-solid fa-map-pin iconDisplay"><p>{item.location}</p></i>
                  <i className="fa-regular fa-calendar iconDisplay"><p>{item.time}</p></i>
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
