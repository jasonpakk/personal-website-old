import React, { Component } from 'react';

class NavBar extends Component {
  handleClick = (event) => {
    const sectionName = event.target.getAttribute('data-page');
    document.getElementById(sectionName).scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <header>
        <nav>
          <a href="/" aria-label="Home"><div id="faceLogo" /></a>
          <h1 id="headerTitle">Jason Pak</h1>
          <ul id="normalList">
            <li data-page="about" className="aboutLi" onClick={this.handleClick}>About</li>
            <li data-page="education" className="educationLi" onClick={this.handleClick}>Education</li>
            <li data-page="experience" className="experienceLi" onClick={this.handleClick}>Experience</li>
            <li data-page="projects" className="projectsLi" onClick={this.handleClick}>Projects</li>
            <li data-page="contact" className="contactLi" onClick={this.handleClick}>Contact</li>
          </ul>
          <i id="menuIcon" className="fas fa-bars fa-2x" />
        </nav>
        <div className="hamburgerMenu">
          <ul id="hamburgerList">
            <li data-page="about" className="aboutLi">About</li>
            <li data-page="education" className="educationLi">Education</li>
            <li data-page="experience" className="experienceLi">Experience</li>
            <li data-page="projects" className="projectsLi">Projects</li>
            <li data-page="contact" className="contactLi">Contact</li>
          </ul>
        </div>
      </header>
    );
  }
}

export default NavBar;
