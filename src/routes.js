import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Home from './pages/home/home';
import NotFound from './pages/notFound/notFound';

const Routes = (props) => (
 <Router { ...props }>
   <Route path="/" component={App}>
       <Route path="/home" component={ Home } />
       <Route path="*" component={ NotFound } />
   </Route>
 </Router>
);
export default Routes;
