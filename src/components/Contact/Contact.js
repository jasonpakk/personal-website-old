import React from 'react';
import Fade from 'react-reveal/Fade';
import ContactItems from './ContactItems';

const Contact = () => {
  return (
    <section data-index="5" id="contact">
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
      </Fade>
    </section>
  );
};

export default Contact;
