import './rhlConfig';

import 'Styles/normalizer.css';
import 'Styles/global.css';

import React from 'react';
import { render } from 'react-dom';


import Root from './Root.js';
render(
  <Root />,
  document.getElementById('root-entry')
);
