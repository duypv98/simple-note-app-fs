import React, { memo } from 'react';
import { Route } from 'react-router-dom';

import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';

export const publicRoutes = [
  {
    path: '/login',
    component: Login,
    exact: false
  },
  {
    path: '/sign-up',
    component: SignUp,
    exact: false
  }
];

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  }
];

const Routes = () => (
  <>
    {[...publicRoutes, ...routes].map(({
      path, component, exact = false, ...rest
    }) => (
      <Route
        key={path}
        exact={exact}
        path={path}
        component={component}
        {...rest}
      />
    ))}
  </>
);

export default memo(Routes);
