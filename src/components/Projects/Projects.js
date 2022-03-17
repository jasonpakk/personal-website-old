import React from 'react';
import Slide from 'react-reveal/Slide';
import ProjectItems from './ProjectItems';

const Projects = () => {
  return (
    <section data-index="4" id="projects">
      <h2>Projects</h2>

      <div>
        {ProjectItems.map((item) => {
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
