import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditBeanForm (props) {
  const { bean } = props;

  function handleEditBeanFormSubmission(event) {
    event.preventDefault();
    props.onEditBean({
      name: event.target.name.value,
      roast: event.target.roast.value,
      price: event.target.price.value,
      id: bean.id
    });
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditBeanFormSubmission}
        buttonText="Update coffee beans" />
    </React.Fragment>
  );
}

EditBeanForm.propTypes = {
  bean: PropTypes.object,
  onEditBean: PropTypes.func
};

export default EditBeanForm;