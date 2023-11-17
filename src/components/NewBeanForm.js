import React from "react";

function NewBeanForm(props){

  function handleNewBeanFormSubmission(event) {
    event.preventDefault();
  }

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

export default NewBeanForm;