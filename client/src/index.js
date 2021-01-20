import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import store from './redux/store';
import LoginForm from './components/LoginForm';

ReactDOM.render(
  <ReduxProvider store={store}>
    <LoginForm />
  </ReduxProvider>,
  document.getElementById('root')
);
