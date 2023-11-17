import React from 'react';
import NewBeanForm from './NewBeanForm';
import BeanList from './BeanList';

class BeanControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBeanList: []
    };
  }

  handleAddingNewBeanToList = (newBean) => {
    const newMainBeanList = this.state.mainBeanList.concat(newBean);
    this.setState({
      mainBeanList: newMainBeanList,
      formVisibleOnPage: false 
    });
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
      currentlyVisibleState = <NewBeanForm oneNewBeanCreation={this.handleAddingNewBeanToList} />;
      buttonText = "Return to bean list";
    } else {
      currentlyVisibleState = <BeanList beanList={this.state.mainBeanList} />;
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