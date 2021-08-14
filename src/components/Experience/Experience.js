import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import ExperienceItems from './ExperienceItems';
import CourseList from '../Education/CourseList';

const Experience = () => {
  return (
    <section data-index="3" id="experience">
      <h2>Experience</h2>

      {ExperienceItems.map((item) => {
        return (
          <Fade bottom key={item.logo}>
            <div className="experienceItem">

              <Flip left>
                <div>
                  <div id={item.logo} className="experienceLogo" />
                </div>
              </Flip>

              <Slide right>
                <div className="experienceText">
                  <p className="experienceOrg">{item.org}</p>
                  <p className="experienceTitle">{item.title}</p>

                  <div className="experienceIcons">
                    <i className="fas fa-map-marker-alt iconDisplay"><p>{item.location}</p></i>
                    <i className="far fa-calendar-alt iconDisplay"><p>{item.time}</p></i>
                  </div>

                  <CourseList title="Description" courses={item.descrp} />

                </div>
              </Slide>
            </div>
          </Fade>
        );
      })}
    </section>
  );
};

export default Experience;
