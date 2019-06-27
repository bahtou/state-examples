import { hot } from 'react-hot-loader/root';
import React, { useEffect, useState } from 'react';

import { Hx } from 'Elements';
import Card from 'Components/Card';
import TodoApp from 'Components/Todo';


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

const footerSyles = {
  'gridColumn': 'center',
  'gridRow': 'footer',
  'display': 'flex',
  'flexFlow': 'row nowrap',
  'justifyContent': 'center'
};

const buttonStyles = {
  'width': '300px',
  'height': '50px',
  'borderRadius': '30px',
  'fontSize': '3em'
};


const Root = () => {
  const [isVisible, setVisibility] = useState(false);

  return (
    <>
      <header style={headerStyles}>
        <Hx type="h1" style={{ 'marginBottom': '0' }}>A minimalist React Applicaition</Hx>
        <Hx type="h1" style={{ 'margin': '0' }}>w/ Webpack</Hx>
      </header>
      <section style={bodyStyles}>
        {isVisible
          ? <TodoApp />
          : <Card />
        }
      </section>
      <footer style={footerSyles}>
        <button style={buttonStyles} onClick={() => setVisibility(!isVisible)}>Todo App</button>
      </footer>
    </>

  );
};


export default hot(Root);
