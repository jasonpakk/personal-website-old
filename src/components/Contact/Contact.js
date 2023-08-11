import React from 'react';
import Fade from 'react-reveal/Fade';
import ContactItems from './ContactItems';
import resume from '../../img/JasonPak_Resume.pdf';

const Contact = () => {
  return (
    <section data-index="6" id="contact">
      <Fade bottom>
        <h2>Contact</h2>
      </Fade>
      <Fade bottom>
        <div className="contactIcons">
          {ContactItems.map((item) => {
            return (
              <a href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                key={item.name}
              >
                <i className={item.icon} />
              </a>
            );
          })}
        </div>

        <a
          id="resume"
          target="_blank"
          rel="noopener noreferrer"
          href={resume}
        ><i className="fa-solid fa-download" />Resume

        </a>
      </Fade>
    </section>
  );
};

export default Contact;
