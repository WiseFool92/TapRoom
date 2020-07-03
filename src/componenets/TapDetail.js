import React from 'react';
import PropTypes from 'prop-types';

function TapDetail(props) {
  const { tap } = props;
  return (
    <>
      <h2>Tap Details</h2>
      <h3>{tap.name}</h3>
      <h4>{tap.brand}</h4>
      <h4>{tap.price}</h4>
      <h4>{tap.alcoholContent}</h4>
      <h4>{tap.pints}</h4>
      <button onClick = { props.onClickEdit }>Update Tap</button>
      <button onClick = { props.onClickDecrement }>Buy a pint</button>
      <button onClick = {() => props.onClickDelete(tap.id) }>Delete Tap</button>
    </>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  onClickEdit: PropTypes.func
}

export default TapDetail;