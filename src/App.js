import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import IntroPage from './container/IntroPage';
import LoadingPage from './container/LoadingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={IntroPage} />
            <Route path="/preparing/:url" component={LoadingPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
