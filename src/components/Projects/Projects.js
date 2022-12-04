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
          onClick={() => setFilter('web')}
          type="button"
          aria-label="webbutton"
          className={filter === 'web' ? 'selectedButton' : null}
        >WEB
        </button>

        <button
          onClick={() => setFilter('mobile')}
          type="button"
          aria-label="mobilebutton"
          className={filter === 'mobile' ? 'selectedButton' : null}
        >MOBILE
        </button>

        <button
          onClick={() => setFilter('arvr')}
          type="button"
          aria-label="arvrbutton"
          className={filter === 'arvr' ? 'selectedButton' : null}
        >AR & VR
        </button>

        <button
          onClick={() => setFilter('software')}
          type="button"
          aria-label="software"
          className={filter === 'software' ? 'selectedButton' : null}
        >OTHER
        </button>
      </div>

      <div>
        {ProjectItems.filter((proj) => filter === 'all' || proj.filter.includes(filter)).map((item) => {
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
                  <img className={item.mobile ? null : 'projectImage'} src={item.img.src} style={item.img.style} alt="ProjectImage" />
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
