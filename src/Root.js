import { hot } from 'react-hot-loader/root';
import React from 'react';

import { Hx } from 'Elements';
import Card from 'Components/Card';


const headerStyles = {
  'gridColumn': 'center',
  'gridRow': 'header',
  'textAlign': 'center'
};

const bodyStyles = {
  'gridColumn': 'center',
  'gridRow': 'card',
  'display': 'flex',
  'flexFlow': 'column nowrap',
  'alignItems': 'center'
};

const Root = () => {
  return (
    <>
      <header style={headerStyles}>
        <Hx type="h1" style={{ 'marginBottom': '0' }}>A minimalist React Applicaition</Hx>
        <Hx type="h1" style={{ 'margin': '0' }}>w/ Webpack</Hx>
      </header>
      <section style={bodyStyles}>
        <Card />
      </section>
    </>
  );
};


export default hot(Root);
