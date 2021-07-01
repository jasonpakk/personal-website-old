import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';

// import NavBar from './components/navBar';
import Nav from './components/Navbar/Navbar';
import Body from './components/body';

const App = () => {
  return (
    <div>
      <Nav />
      <Body />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));
