import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../redux/store.js';

/*  Components  */
// import NavigationBar from './Nav/Nav.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={() => <div>Hello World</div>}/>
        <Route path="/admin" component={() => <div>Admin View</div>}/>
        <Route path="/register" component={() => <div>Registration View</div>}/>
      </div>
    </Router>
  );
}

export default connect((store) => {
  return {
    user: store.user
  };
})(App);
