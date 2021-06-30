import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';

import NavBar from './components/navBar';
import Body from './components/body';

const App = () => {
  return (
    <div>
      <NavBar />
      <Body />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));
