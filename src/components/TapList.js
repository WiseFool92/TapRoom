import React from 'react';
import Tap from './Tap';
import PropTypes from 'prop-types';


function TapList(props) {
  return (
    <>
    <hr />
    {props.availableTaps.map((tap) => 
      <Tap 
        whenTapClicked = { props.onTapSelection }
        name = { tap.name }
        brand = { tap.brand }
        price = { tap.price }
        alcoholContent = { tap.alcoholContent }
        pints = { tap.pints }
        key = { tap.id }
        id = { tap.id }
      />
    )}
    </>
  );
}

TapList.propTypes = {
  availableTaps: PropTypes.array,
  onTapSelection: PropTypes.func
}

export default TapList;

// Likely Won't actually use
const HardTapList = [
  {
    name: 'Butter Rum',
    brand: 'Whys the rum gone',
    price: '5 Dabloons',
    alcoholContent: '20 Proof',
    pints: 124
  },
  {
    name: 'Mead',
    brand: 'Mutton & Mead',
    price: '6 Dabloons',
    alcoholContent: '30 proof',
    pints: 124
  },
  {
    name: 'Ale',
    brand: 'A Days Work',
    price: '2 Dabloons',
    alcoholContent: '7 proof',
    pints: 124
  },
  {
    name: 'FireWater',
    brand: 'Hairy Chest',
    price: '15 Dabloons',
    alcoholContent: '160 Proof',
    shots: 100 
  },
  {
    name: 'Wine',
    brand: 'Royal Reds',
    price: '8 Dabloons',
    alcoholContent: '25 Proof',
    pints: 124
  }
]
