import React from 'react';
import ContactItems from './ContactItems';

const Contact = () => {
  return (
    <section data-index="4" id="contact">
      <h2>Contact</h2>

      <div className="contactIcons">
        {ContactItems.map((item) => {
          return (
            <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.name}>
              <i className={item.icon} />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
