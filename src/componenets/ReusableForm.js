import React from 'react';
import PropTypes from 'prop-types';

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
        <button type = 'submit'>{props.buttonText}</button>
      </form>
    </>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;