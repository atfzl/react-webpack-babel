// @flow

import React from 'react';
import s from './app.scss';

const App = () => (
  <div>
    <h1>It Works!</h1>
    <p>This React project just works including
      <span className={s.redBg}>module</span>
      local styles.
    </p>
    <p>Enjoy!</p>
  </div>
);

export default App;
