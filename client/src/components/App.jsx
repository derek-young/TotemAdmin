import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../redux/store';
import styles from './Styles.css';

/*  Components  */
import Header from './Header/Header';
import Home from './Home/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className={styles.container}>
          <Route exact path="/" component={Home}/>
          <Route path="/admin" component={() => <div>Admin View</div>}/>
          <Route path="/register" component={() => <div>Registration View</div>}/>
          <Route path="/signin" component={() => <div>Sign in View</div>}/>
        </div>
      </div>
    </Router>
  );
}

export default connect((store) => {
  return {
    user: store.user
  };
})(App);
