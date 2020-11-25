import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../views/home'));
const ShopPage = lazy(() => import('../views/shop'));
const CheckoutPage = lazy(() => import('../views/checkout'));
const AuthPage = lazy(() => import('../views/auth'));

function Router() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/auth" component={AuthPage} />
      </Switch>
    </>
  );
}

export default Router;
