import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props, showLbsInput) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <hr />
      <input
          type='text'
          name='name'
          placeholder='Coffee Bean Name' required />
        <br />
        <input
          type='text'
          name='roast'
          placeholder='Roast Type' required />
        <br />
        <input
          type='text'
          name='price'
          placeholder='Price per lb' required />
        <br />
        {showLbsInput && (
          <input 
          type="number" 
          name="lbs" 
          placeholder="Initial amount" 
          min="0"
          required />
        )}
        <br />
        <button type='submit'>{props.buttonText}</button>
        <hr />
      </form>

    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  showLbsInput: PropTypes.bool
};

export default ReusableForm;