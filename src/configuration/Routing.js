import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Signup from '../container/Signup/Signup';
import Login from '../container/Login/Login';
import history from '../history';
// import Home from '../container/Home/Home';
import Navbar from '../container/Navbar/Navbar';
import HomeComp from '../component/HomeComp/HomeComp';

class Routing extends Component {

  render() {
    return (
      <Router history={history}>
        <div>
          <Navbar />
          <Route exact path='/' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/HomeComp' component={HomeComp} />

        </div>
      </Router>
    )
  }
}
export default Routing;