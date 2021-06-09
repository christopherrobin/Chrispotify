import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import { Container } from 'reactstrap';
import Fade from './components/Fade';
import LandingPage from './pages/LandingPage';
import Examples from './pages/ExamplePage';
// import Footer from './components/Footer';

import './App.scss';
import './components/Fade.scss';

const App = () => {
  return (
    <Container id="app-container">
      <Helmet>
        <title>React-Starter-Pack</title>
        <style>{'body { background-color: #F3F3F3; }'}</style>
        <meta name="description" content="React-Starter-Pack" />
      </Helmet>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Fade childComponent={<LandingPage />}/>
            </Route>
            <Route path="/examples">
              <Fade childComponent={<Examples />} />
            </Route>
          </Switch>
        </Router>
      </div>
    </Container>
  );
};

export default App;
