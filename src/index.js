import './rhlConfig';

import 'Styles/normalizer.css';
import 'Styles/global.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';


import Root from './Root.js';
render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root-entry')
);
