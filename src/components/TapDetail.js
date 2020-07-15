import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function TapDetail(props) {
  const { tap } = props;
  return (
    <>
      <h2>Tap Details</h2>
      <h3>{tap.name}</h3>
      <h4>{tap.brand}</h4>
      <h4>{tap.price}</h4>
      <h4>{tap.alcoholContent}</h4>
      <h4>Pints Left:</h4>
      <h4>{tap.pints}</h4>
      <Button onClick = { props.onClickEdit }>Update Tap</Button>
      <Button onClick = {() => props.onClickDelete(tap.id) }>Delete Tap</Button>
    </>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func
}

export default TapDetail;