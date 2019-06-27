import React from 'react';


const types = {
  h1: (children, style) => <h1 style={{ 'fontSize': '6.8em', ...style }}>{children}</h1>,
  h2: (children, style) => <h2 style={{ 'fontSize': '5.2em', ...style }}>{children}</h2>,
  h3: (children, style) => <h3 style={{ 'fontSize': '4.0em', ...style }}>{children}</h3>,
  h4: (children, style) => <h4 style={{ 'fontSize': '3.2em', ...style }}>{children}</h4>,
  h5: (children, style) => <h5 style={{ 'fontSize': '2.1em', ...style }}>{children}</h5>,
  h6: (children, style) => <h6 style={{ 'fontSize': '1.4em', ...style }}>{children}</h6>,
};

function Hx({ children, style, type }) {
  const heading = types[type](children, style);

  return (heading);
}


export default Hx;
