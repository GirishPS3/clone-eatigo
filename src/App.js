import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegistrationSuccess from "./views/Registration/RegistrationSuccess.js";
import RegistrationActivation from "./views/Registration/RegistrationActivation.js";
import Registration from "./views/Registration/Registration.js";
import CommonPage from "./views/CommonPage/CommonPage.js";
import ViewAll from './views/ViewAll/ViewAll';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/regitration-success" component={RegistrationSuccess} />
        <Route path="/regitration-activate" component={RegistrationActivation} />
        <Route path="/register-user" component={Registration} />
        <Route path="/view-all/:type" component={ViewAll} />
        <Route path="/:category/:id" component={CommonPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
