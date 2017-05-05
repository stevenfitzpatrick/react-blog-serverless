import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import BlogHome from './BlogHome';
import BlogPost from './BlogList';

const Routes = props => (
  <Router {...props}>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>

      <Route exact path="/" component={BlogHome} />
      <Route path="/p/:page" component={BlogHome} />
      <Route path="/post/:slug" component={BlogPost} />
    </div>
  </Router>
);

export default Routes;
