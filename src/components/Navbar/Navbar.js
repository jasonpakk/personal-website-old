import React, { Component } from 'react';
import MenuItems from './MenuItems';

const gradients = [
  '#03071e',
  'linear-gradient(to bottom, #343a40, #001d3d)',
  'linear-gradient(to bottom, #001d3d, #014f86)',
  'linear-gradient(to bottom, #014f86, #5c677d)',
  'linear-gradient(to bottom, #5c677d, #33415c)',
  'linear-gradient(to bottom, #33415c, #001233)',
];

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };
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
    if (this.props.active === 'Home' && !this.state.clicked) {
      return {
        color: '#f8f9fa',
      };
    } else {
      return {
        color: '#03071e',
      };
    }
  }

  render() {
    return (
      <nav style={this.props.active === 'Home' ? { background: 'transparent' } : { background: '#f8f9fa' }}>
        <h1 id="navLogo" style={this.props.active === 'Home' ? { color: '#f8f9fa' } : { color: '#03071e' }}>
          <a href="/" aria-label="home"><div id="faceLogo" /></a>
          Jason Pak
        </h1>
        <div id="hamburgerIcon" role="button" tabIndex={0} onClick={this.handleIconClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} style={this.props.active === 'Home' ? { color: '#f8f9fa' } : { color: '#03071e' }} />
        </div>
        <ul className={this.state.clicked ? 'navMenu active' : 'navMenu'}>
          {MenuItems.map((item, index) => {
            return (
              <li className="navLinks"
                style={this.props.active === item.title ? this.handleBackgroundStyle(index) : this.handleTextStyle()}
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
