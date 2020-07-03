import React from 'react';
import PropTypes from 'prop-types';

function Tap(props) {
  return (
    <>
      <div onClick = {() => props.whenTapClicked(props.id)}>
        <h3>{props.name}</h3>
        <h4>{props.brand}</h4>
        <h4>{props.price}</h4>
        <h4>{props.alcoholContent}</h4>
      </div>
    </>
  )
}

name: 'Butter Rum',
    brand: 'Whys the rum gone',
    price: '5 Dabloons',
    alcoholcontent: '20 Proof',
    pints: 