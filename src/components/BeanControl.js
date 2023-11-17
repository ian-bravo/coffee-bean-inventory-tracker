import React from 'react';
import NewBeanForm from './NewBeanForm';
import BeanList from './BeanList';

class BeanControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBeanForm />
    } else {
      currentlyVisibleState = <BeanList />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default BeanControl;