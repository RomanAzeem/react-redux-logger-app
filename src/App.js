import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import Searchbar from './components/layout/Searchbar';
import Log from './components/logs/Log';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModel';
import AddTechModal from './components/techs/AddTechModal';

const App = () => {
  useEffect(() => {
    //Initialize Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <Searchbar />
      <AddBtn />
      <AddLogModal />
      <EditLogModal />
      <AddTechModal />
      <Log />
    </Fragment>
  );
};

export default App;
