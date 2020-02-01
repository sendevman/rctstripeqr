import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import HomePage from '../screens/Home';
import QRCodePage from '../screens/QRCode';

import Header from '../components/Header';

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/qrcode" component={QRCodePage} />
      </Switch>
    </Router>
  );
}

export default Routes;