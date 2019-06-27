import React from 'react';


const styles = {
  'fontSize': '2.3em'
};

function Px({ children }) {
  return (
    <p style={styles}>{children}</p>
  );

}


export default Px;
