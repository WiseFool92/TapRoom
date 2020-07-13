import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';


function TapList(props) {
  return (
    <>
    <hr />
    {props.availableTaps.map((tap) => 
      <Tap 
        whenTapClicked = {props.onTapSelection}
        whenPintSold = {props.onSellPint}
        name = {tap.name}
        brand = {tap.brand}
        price = {tap.price}
        alcoholContent = {tap.alcoholContent}
        pints = {tap.pints}
        key = {tap.id}
        id = {tap.id}
      />
    )}
    </>
  );
}

TapList.propTypes = {
  availableTaps: PropTypes.array,
  onTapSelection: PropTypes.func,
  onSellPint: PropTypes.func
}

export default TapList;