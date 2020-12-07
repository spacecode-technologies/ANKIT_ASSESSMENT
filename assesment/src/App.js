import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';

import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <>
      <Sidebar />
      <Switch>
        <Route exact path='/login' component={LoginPage} />
      </Switch>
    </>
  );
};

export default App;
