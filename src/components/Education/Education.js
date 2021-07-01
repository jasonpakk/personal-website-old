import React from 'react';
import Contents from './Contents';
import CourseList from './CourseList';

const Education = () => {
  return (
    <section data-index="1" id="education">
      <h2>Education</h2>

      {Contents.map((item) => {
        return (
          <div className="educationItem" key={item.school}>
            <div id={item.logo} className="schoolLogo" />

            <div className="schoolText">
              <h3>{item.school}</h3>

              <div className="schoolIcons">
                <i className="fas fa-map-marker-alt"><p>{item.location}</p></i>
                <i className="far fa-calendar-alt"><p>{item.time}</p></i>
              </div>

              <p className="degreeText">{item.degree}</p>

              <CourseList courses={item.courses} />
            </div>
          </div>
        );
      })}

    </section>
  );
};

export default Education;
