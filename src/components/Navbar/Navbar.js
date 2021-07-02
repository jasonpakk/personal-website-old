import React, { Component } from 'react';
import MenuItems from './MenuItems';

const gradients = [
  'linear-gradient(to right bottom, #1A2980, #268aad)',
  'linear-gradient(to right bottom, #1d3981, #279db6)',
  'linear-gradient(to right bottom, #204b8e, #27adbe)',
  'linear-gradient(to right bottom, #225d96, #27bdc5)',
  'linear-gradient(to right bottom, #266fa1, #25cecc)',
];

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };
  }

  handleMenuClick = (event) => {
    const sectionName = event.target.getAttribute('data-page');
    const section = document.getElementById(sectionName);
    window.scroll({ top: (section.offsetTop - 90), behavior: 'smooth' });
    // document.getElementById(sectionName).scrollIntoView({ behavior: 'smooth' });
    this.setState(() => ({ clicked: false }));
  }

  handleIconClick = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }));
  }

  handleStyling = (index) => {
    return {
      color: 'white',
      background: gradients[index],
    };
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
          {MenuItems.map((item, index) => {
            return (
              <li className="navLinks"
                style={this.props.active === item.title ? this.handleStyling(index) : null}
                key={item.title}
                data-page={item.title.toLowerCase()}
                onClick={this.handleMenuClick}
              >
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
