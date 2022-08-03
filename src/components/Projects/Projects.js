import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';
import ProjectItems from './ProjectItems';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  return (
    <section data-index="4" id="projects">
      <h2>Projects</h2>

      <div id="filterButtons">
        <button
          onClick={() => setFilter('all')}
          type="button"
          aria-label="allbutton"
          className={filter === 'all' ? 'selectedButton' : null}
        >ALL
        </button>

        <button
          onClick={() => setFilter('personal')}
          type="button"
          aria-label="personalbutton"
          className={filter === 'personal' ? 'selectedButton' : null}
        >PERSONAL
        </button>

        <button
          onClick={() => setFilter('team')}
          type="button"
          aria-label="teambutton"
          className={filter === 'team' ? 'selectedButton' : null}
        >TEAM
        </button>

        <button
          onClick={() => setFilter('coursework')}
          type="button"
          aria-label="courseworkbutton"
          className={filter === 'coursework' ? 'selectedButton' : null}
        >COURSEWORK
        </button>
      </div>

      <div>
        {ProjectItems.filter((proj) => filter === 'all' || proj.filter === filter).map((item) => {
          return (
            <div className="projectItem" key={item.project}>
              <div className="projectText">

                <p className="projectTitle">{item.project}</p>

                <div className="projectLanguage">
                  {item.languages.map((language) => {
                    return (
                      <p key={language.name}
                        style={{ background: language.bg, color: language.color }}
                      >
                        {language.name}
                      </p>
                    );
                  })}
                </div>

                <p className="projectDescr">{item.description} {item.description2}</p>

                <div className="projectIcons">
                  {item.icons.map((icon) => {
                    return (
                      <a href={icon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.name}
                        key={icon.text}
                      >
                        <i className={icon.name}><p>{icon.text}</p></i>
                      </a>
                    );
                  })}
                </div>
              </div>

              <Slide right>
                <div>
                  <img className="projectImage" src={item.img.src} style={item.img.style} alt="ProjectImage" />
                </div>
              </Slide>
            </div>

          );
        })}
      </div>

    </section>

  );
};

export default Projects;
