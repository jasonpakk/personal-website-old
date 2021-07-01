import React, { Component } from 'react';
import MenuItems from './MenuItems';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };
  }

  handleMenuClick = (event) => {
    const sectionName = event.target.getAttribute('data-page');
    document.getElementById(sectionName).scrollIntoView({ behavior: 'smooth' });
  }

  handleIconClick = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }));
  }

  render() {
    return (
      <nav>
        <h1 id="navLogo">
          <div id="faceLogo" />
          Jason Pak
        </h1>
        <div id="hamburgerIcon" role="button" tabIndex={0} onClick={this.handleIconClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={this.state.clicked ? 'navMenu active' : 'navMenu'}>
          {MenuItems.map((item) => {
            return (
              <li className="navLinks" data-page={item.title.toLowerCase()} onClick={this.handleMenuClick}>
                {item.title}
              </li>
            );
          })}

        </ul>
      </nav>
    );
  }
}

export default NavBar;
