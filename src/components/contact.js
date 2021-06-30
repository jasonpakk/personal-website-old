import React from 'react';

const Contact = () => {
  return (
    <section data-index="4" id="contact">
      <h2>Contact</h2>
      <div className="contactIcons">
        <a href="mailto:jaeyoung.pak8@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email"><i className="fas fa-envelope fa-5x" /></a>
        <a href="https://github.com/JY2452" target="_blank" rel="noopener noreferrer" aria-label="Github"><i className="fab fa-github fa-5x" /></a>
        <a href="https://www.facebook.com/jason.pak0" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook fa-5x" /></a>
        <a href="https://www.instagram.com/jasonpakk/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram fa-5x" /></a>
      </div>
    </section>
  );
};

export default Contact;
