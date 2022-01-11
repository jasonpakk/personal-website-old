import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import { useInView } from 'react-intersection-observer';

import Nav from './components/Navbar/Navbar';
import Body from './components/body';

const App = () => {
  const options = {
    threshold: 0.2,
  };

  const [aboRef, aboView] = useInView(options);
  const [eduRef, eduView] = useInView(options);
  const [expRef, expView] = useInView(options);
  const [projRef, projView] = useInView(options);
  const [musRef, musView] = useInView(options);
  const [contRef, contView] = useInView(options);

  const getActive = () => {
    if (aboView) {
      return 'About';
    } else if (eduView) {
      return 'Education';
    } else if (expView) {
      return 'Experience';
    } else if (projView) {
      return 'Projects';
    } else if (musView) {
      return 'Music';
    } else if (contView) {
      return 'Contact';
    } else {
      return 'Home';
    }
  };

  return (
    <div>
      <Nav active={getActive()} />
      <Body
        aboRef={aboRef}
        eduRef={eduRef}
        expRef={expRef}
        projRef={projRef}
        musRef={musRef}
        contRef={contRef}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));
