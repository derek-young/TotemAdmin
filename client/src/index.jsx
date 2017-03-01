import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import App from './components/App.jsx';
import store from './redux/store';
import { firebaseConfig } from './firebase'

firebase.initializeApp(firebaseConfig);

const Root = props => (
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('app'));
