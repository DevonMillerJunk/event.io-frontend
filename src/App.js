import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NewEvent from './components/events/NewEvent';

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/create' component={NewEvent} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
