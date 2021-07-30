import React from 'react';
import Fade from 'react-reveal/Fade';
import ExperienceItems from './ExperienceItems';
import CourseList from '../Education/CourseList';

const Experience = () => {
  return (
    <section data-index="3" id="experience">
      <Fade bottom>
        <h2>Experience</h2>
      </Fade>
      {ExperienceItems.map((item) => {
        return (
          <Fade bottom>
            <div className="experienceItem" key={item.logo}>
              <div id={item.logo} className="experienceLogo" />
              <div className="experienceText">
                <p className="experienceOrg">{item.org}</p>
                <p className="experienceTitle">{item.title}</p>

                <div className="experienceIcons">
                  <i className="fas fa-map-marker-alt iconDisplay"><p>{item.location}</p></i>
                  <i className="far fa-calendar-alt iconDisplay"><p>{item.time}</p></i>
                </div>

                <CourseList title="Description" courses={item.descrp} />

              </div>
            </div>
          </Fade>
        );
      })}
    </section>
  );
};

export default Experience;
