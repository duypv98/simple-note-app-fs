import React, { memo } from 'react';
import { BrowserRouter as Router, Redirect, useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Routes, { publicRoutes } from './pages/routes';
import TopNav from './components/Navs/TopNav';

const AppRoutes = () => {
  const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);
  const { pathname } = useLocation();

  const isForceEnterPublicRoute = isLoggedIn && publicRoutes
    .map(({ path }) => path)
    .includes(pathname);
  const isForceEnterPrivateRoute = !isLoggedIn && pathname === '/';

  let redirectPath: string = '';
  if (isForceEnterPublicRoute) redirectPath = '/';
  if (isForceEnterPrivateRoute) redirectPath = '/login';

  return (
    <>
      <Routes />
      { redirectPath ? <Redirect to={redirectPath} /> : null }
    </>
  );
};

const App = () => (
  <Router>
    <TopNav />
    <AppRoutes />
  </Router>
);

export default memo(App);
