import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <input
          type='text'
          name='name'
          placeholder='Coffee Bean Name' />
        <input
          type='text'
          name='roast'
          placeholder='Roast Type' />
        <input
          type='text'
          name='price'
          placeholder='Price per lb' />
        <input
          type='number'
          name='lbs'
          placeholder='Working amount' />
        <button type='submit'>{props.buttonText}</button>
      </form>

    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;