import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import NewProducts from './pages/NewProducts';

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        
        <Route path="/profile" component={Profile} />
        <Route path="/products/new" component={NewProducts} />
      </Switch>
    </BrowserRouter>
  )
}
