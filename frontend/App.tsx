import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';
import BaseStyles from './components/styles/baseStyles';

const App = () => {
  return (
    <Router>
      <BaseStyles>
        <Routes />
      </BaseStyles>
    </Router>
  );
};

export default App;
