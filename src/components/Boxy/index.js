import React from 'react';

import { smallSquare, bigSquare } from './styles.css';


function Boxy() {
  return (
    <>
      <footer className="globalColor">footer
        <span className="cheese">im cheese</span>
      </footer>
      <div className={ smallSquare }>small square</div>
      <div className={ bigSquare }>big square</div>
    </>
  );
}


export default Boxy;
