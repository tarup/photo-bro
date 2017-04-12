import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import PhotoView from './components/PhotoView'

ReactDOM.render((
    <Router history={browserHistory}>
    <Route path="/" component={App}>
          <IndexRedirect to="/photo/0"/>
          <Route path="/photo/:id" component={PhotoView}/>
      </Route>
    </Router>
  ),document.getElementById('root')
);
