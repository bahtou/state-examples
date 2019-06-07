import { hot } from 'react-hot-loader/root';
import React from 'react';

import Boxy from 'Components/Boxy';
import { header, big, env } from 'app.css';


const App = ({ title='getting started' }) => {
  return (
    <header className={ header }>
      <h1>Hola!</h1>
      <h1 className={ big }>{ title }</h1>
      <Boxy />
      <div className={ env }>{ process.env.NODE_ENV }</div>
    </header>
  );
};


export default hot(App);
