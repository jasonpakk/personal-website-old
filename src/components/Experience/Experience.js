import React from 'react';
import ExperienceItems from './ExperienceItems';
import CourseList from '../Education/CourseList';

const Experience = () => {
  return (
    <section data-index="3" id="experience">
      <h2>Experience</h2>
      {ExperienceItems.map((item) => {
        return (
          <div className="experienceItem" key={item.school}>
            <div id={item.logo} className="experienceLogo" />
            <div className="experienceText">
              <p className="experienceOrg">{item.org}</p>
              <p className="experienceTitle">{item.title}</p>

              <div className="experienceIcons">
                <i className="fas fa-map-marker-alt"><p>{item.location}</p></i>
                <i className="far fa-calendar-alt"><p>{item.time}</p></i>
              </div>

              <CourseList title="Description" courses={item.descrp} />

            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Experience;
