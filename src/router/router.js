import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../views/home'));
const ShopPage = lazy(() => import('../views/shop'));

function Router() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </>
  );
}

export default Router;
