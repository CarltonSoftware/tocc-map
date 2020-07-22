import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';

import ToccMap from './components/ToccMap';

ReactDOM.render(
  <ToccMap />,
  document.getElementById('root')
);
