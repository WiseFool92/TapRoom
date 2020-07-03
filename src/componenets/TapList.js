import React from 'react';
import Tap from './Tap';


function TapList(){
  return (
    <Tap />
  );
}

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

export default TapList;