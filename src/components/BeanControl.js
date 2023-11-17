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

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }  

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBeanForm />
      buttonText = "Return to bean list";
    } else {
      currentlyVisibleState = <BeanList />
      buttonText = "Add your beans!!!";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default BeanControl;