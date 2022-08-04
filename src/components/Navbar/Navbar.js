import React, { Component } from 'react';
import MenuItems from './MenuItems';

const gradients = [
  'linear-gradient(to bottom, #343a40, #001d3d)',
  'linear-gradient(to bottom, #001d3d, #014f86)',
  'linear-gradient(to bottom, #014f86, #5c677d)',
  'linear-gradient(to bottom, #5c677d, #33415c)',
  'linear-gradient(to bottom, #33415c, #001233)',
  'linear-gradient(to bottom, #001233, #03071e)',
];

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }

  handleMenuClick = (event) => {
    const sectionName = event.target.getAttribute('data-page');
    document.getElementById(sectionName).scrollIntoView({ behavior: 'smooth' });
    this.setState(() => ({ clicked: false }));
  }

  handleIconClick = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }));
  }

  handleBackgroundStyle = (index) => {
    return {
      color: '#f8f9fa',
      background: gradients[index],
    };
  }

  handleTextStyle = () => {
    return {
      color: '#03071e',
    };
  }

  render() {
    console.log(this.props.active);
    if (this.props.active === 'Home') {
      return null;
    } else {
      return (
        <nav style={{ background: '#f8f9fa' }}>
          <h1 id="navLogo"
            style={{ color: '#03071e' }}
          >
            <a href="/" aria-label="home"><div id="faceLogo" /></a>
            Jason Pak
          </h1>
          <div id="hamburgerIcon" role="button" tabIndex={0} onClick={this.handleIconClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
              style={{ color: '#03071e' }}
            />
          </div>
          <ul className={this.state.clicked ? 'navMenu active' : 'navMenu'}>
            {MenuItems.map((item, index) => {
              return (
                <li className="navLinks"
                  style={this.props.active === item ? this.handleBackgroundStyle(index) : this.handleTextStyle()}
                  key={item}
                  data-page={item.toLowerCase()}
                  onClick={this.handleMenuClick}
                >
                  {item}
                </li>
              );
            })}

          </ul>
        </nav>
      );
    }
  }
}

export default NavBar;
