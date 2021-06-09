import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import { Container } from 'reactstrap';
import Fade from './components/Fade';
import LandingPage from './pages/LandingPage';

import './App.scss';
import './components/Fade.scss';

const App = () => {
  return (
    <Container id="app-container">
      <Helmet>
        <title>Chrispotify</title>
        <style>{'body { background-color: #F3F3F3; }'}</style>
        <meta name="description" content="Chrispotify" />
      </Helmet>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Fade childComponent={<LandingPage />}/>
            </Route>
          </Switch>
        </Router>
      </div>
    </Container>
  );
};

export default App;
