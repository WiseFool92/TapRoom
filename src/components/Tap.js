import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function Tap(props) {
  return (
    <>
      <div onClick = {() => props.whenTapClicked(props.id)}>
        <h3>{props.name}</h3>
        <h4>{props.brand}</h4>
        <h4>{props.price}</h4>
        <h4>{props.alcoholContent}</h4>
        <h4>{props.pints}</h4>
        <hr />
      </div>
      <Button onClick={() => props.whenPintSold({
          name: props.name,
          brand: props.brand,
          price: props.price,
          alcoholContent: props.alcoholContent,
          pints: props.pints,
          id: props.id
        })}>Sell Pint</Button>
    </>
  )
}

Tap.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenTapClicked: PropTypes.func,
  whenPintSold: PropTypes.func
}

export default Tap;