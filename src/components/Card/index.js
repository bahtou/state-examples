import React from 'react';

import cardImage from 'Images/react+webpack.jpg';
import { Ax, Hx, Px, Button } from 'Elements';
import Tag from 'Components/Tag';


const cardStyles = {
  'width': '347px',
  'boxShadow': '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
  'backgroundColor': 'steelblue'
};

function Card() {
  const redirect = (event) => {
    window.open('https://webpack.js.org/', '_blank');
  };

  return (
    <div className="card" style={cardStyles}>
      <img className="image" style={{ 'display': 'inherit', 'width': '100%', 'objectFit': 'cover' }} src={cardImage} alt="react+webpack" />
      <div className="body" style={{ 'padding': '16px' }}>
        <header style={{ 'display': 'flex', 'flexFlow': 'column nowrap', 'marginBottom': '12px' }}>
          <Hx type="h3">Web Development</Hx>
          <Tag style={{ 'alignSelf': 'end' }}>Front-end</Tag>
        </header>
        <div className="react" style={{ 'marginBottom': '10px' }}>
          <div>
            <Ax src="https://reactjs.org/">
              <Hx type="h4" style={{ 'color': '#7da3e4' }}>ReactJS</Hx>
            </Ax>
          </div>
          <div>
            <Px>A JavaScript library for building user interfaces</Px>
          </div>
        </div>
        <div className="webpack">
          <div>
            <Button onClick={redirect}>
              <Hx type="h4" style={{ 'color': '#36dfff' }}>Webpack</Hx>
            </Button>
          </div>
          <div>
            <Px>A bundler for javascript and friends. Packs many modules into a few bundled assets.</Px>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Card;
