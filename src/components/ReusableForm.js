import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function ReusableForm(props) {
  return (
    <>
      <form onSubmit = {props.formSubmissionHandler}>
        <input
          type = 'text'
          name = 'name'
          placeholder = 'Tap Name' />
        <input
          type = 'text'
          name = 'brand'
          placeholder = 'Tap Brand' />
        <input
          type = 'number'
          name = 'price'
          placeholder = 'Tap Price' />
        <input
          type = 'text'
          name = 'alcoholContent'
          placeholder = 'Proof' />
        <input
          type = 'number'
          name = 'pints'
          placeholder = 'Number of Pints available' />
        <Button type = 'submit'>{props.buttonText}</Button>
      </form>
    </>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;