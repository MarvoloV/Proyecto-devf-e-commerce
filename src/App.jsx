/* eslint-disable import/no-relative-packages */
import React from 'react';
import AppRouter from './routers/AppRouter';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

const App = () => (
  <div>
    <AppRouter />
  </div>
);

export default App;
