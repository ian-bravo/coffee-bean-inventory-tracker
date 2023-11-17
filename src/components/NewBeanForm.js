import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

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
      <form onSubmit={handleNewBeanFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Bean name' />
        <input
          type='text'
          name='roast'
          placeholder='Roast type' />
        <input
          type='text'
          name='price'
          placeholder='$/lb.' />
        <button type='submit'>Add</button>
      </form>
    </React.Fragment>
  );
}

NewBeanForm.propTypes = {
  onNewBeanCreation: PropTypes.func
};

export default NewBeanForm;