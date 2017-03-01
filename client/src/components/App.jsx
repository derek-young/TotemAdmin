import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../redux/store';
import styles from './Styles.css';

/*  Components  */
import Header from './Header/Header';
import Home from './Home/Home';
import Admin from './AdminPanel/AdminPanel';

const App = ({ user }) => {
  return (
    <div>
      <Header loggedIn={user.isAuthenticated}/>
      <div className={styles.container}>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/admin" component={Admin} />
          <PrivateRoute path="/admin/profile" component={() => <div>Profile</div>} />
          <Route path="/register" component={() => <div>Registration View</div>} />
          <Route path="/signin" component={() => <div>Sign in View</div>} />
          <Route component={() => <div>404</div>} />
        </Switch>
      </div>
    </div>
  );
}

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    true ? React.createElement(component, props) :
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
  )}/>
);

export default connect((store) => {
  return {
    user: store.user
  };
})(App);
