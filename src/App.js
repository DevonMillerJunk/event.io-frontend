import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NewEvent from './components/events/NewEvent';
import AuthState from './context/auth/AuthState';
import EventState from './context/event/EventState';

function App() {
  return (
    <div className="App">
      <AuthState>
        <EventState>
          <Router>
            <Fragment>
              <Navbar />
              <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/' component={Home}/>
                <Route exact path='/register' component={Register} />
                <Route exact path='/create' component={NewEvent} />
              </Switch>
            </Fragment>
          </Router>
        </EventState>
      </AuthState>
    </div>
  );
}

export default App;
