import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import { useInView } from 'react-intersection-observer';

import Nav from './components/Navbar/Navbar';
import Body from './components/body';

const App = () => {
  const options = {
    threshold: 0.3,
  };

  const [homeRef, homeView] = useInView(options);
  const [aboRef, aboView] = useInView(options);
  const [eduRef, eduView] = useInView(options);
  const [expRef, expView] = useInView(options);
  const [projRef, projView] = useInView(options);
  const [contRef, contView] = useInView(options);

  const getActive = () => {
    if (homeView) {
      return 'Home';
    } else if (aboView) {
      return 'About';
    } else if (eduView) {
      return 'Education';
    } else if (expView) {
      return 'Experience';
    } else if (projView) {
      return 'Projects';
    } else if (contView) {
      return 'Contact';
    } else {
      return '';
    }
  };

  return (
    <div>
      <Nav active={getActive()} />
      <Body
        homeRef={homeRef}
        aboRef={aboRef}
        eduRef={eduRef}
        expRef={expRef}
        projRef={projRef}
        contRef={contRef}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));
