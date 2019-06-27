import React from 'react';


const styles = {
  'border': 'none',
  'margin': '0',
  'padding': '0',
  'width': 'auto',
  'background': 'transparent',
  'cursor': 'pointer'
};

function Button({ children, onClick }) {
  return (
    <button style={styles} onClick={onClick}>
      {children}
    </button>
  );
}



export default Button;
