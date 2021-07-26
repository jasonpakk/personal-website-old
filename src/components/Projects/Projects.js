import React from 'react';

import ProjectItems from './ProjectItems';

const Projects = () => {
  return (
    <section data-index="4" id="projects">
      <h2>Projects</h2>

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

              <p className="projectDescr">{item.description}</p>

              <div className="projectIcons">
                {item.icons.map((icon) => {
                  return (
                    <a href={icon.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                      key={icon.name}
                    >
                      <i className={icon.name}><p>{icon.text}</p></i>
                    </a>
                  );
                })}
              </div>

            </div>

            <img className="projectImage" src={item.img.src} style={item.img.style} alt="ProjectImage" />
          </div>
        );
      })}

    </section>
  );
};

export default Projects;
