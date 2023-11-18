import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewBeanForm(props){

  function handleNewBeanFormSubmission(event) {
    event.preventDefault();
    props.onNewBeanCreation({
      name: event.target.name.value,
      roast: event.target.roast.value,
      price: event.target.price.value,
      id: v4()
    });
  };

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewBeanFormSubmission}
        buttonText="Add coffee beans!!" />
    </React.Fragment>
  );
}

NewBeanForm.propTypes = {
  onNewBeanCreation: PropTypes.func
};

export default NewBeanForm;