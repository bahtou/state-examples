import React from 'react';

const axStyles = {
  'textDecoration': 'none'
};


function Ax({ children, src }) {
  return (
    <a style={axStyles} href={src}>{children}</a>
  );
}


export default Ax;
