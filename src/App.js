import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import Searchbar from './components/layout/Searchbar';
import Log from './components/logs/Log';

const App = () => {
  useEffect(() => {
    //Initialize Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <Searchbar />
      <Log />
    </Fragment>
  );
};

export default App;
