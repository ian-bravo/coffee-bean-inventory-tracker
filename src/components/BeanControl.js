import React from 'react';
import NewBeanForm from './NewBeanForm';
import BeanList from './BeanList';
import BeanDetail from './BeanDetail';
import EditBeanForm from './EditBeanForm';

class BeanControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBeanList: [],
      selectedBean: null
    };
  }

  handleEditingBeanInList = (beanToEdit) => {
    const editedMainBeanList = this.state.mainBeanList
          .filter(bean => bean.id !== this.state.selectedBean.id)
          .concat(beanToEdit);
    this.setState({
      mainBeanList: editedMainBeanList,
      editing: false,
      selectedBean: null
    });
  }

  handleEditClick = () => {
    console.log("edit");
    this.setState({editing: true});
  }

  handleDeletingBean = (id) => {
    const newMainBeanList = this.state.mainBeanList.filter(bean => bean.id != id);
    this.setState({
      mainBeanList: newMainBeanList,
      selectedBean: null,
      editing: false
    });
  }

  handleChangingSelectedBean = (id) => {
    const selectedBean = this.state.mainBeanList.filter(bean => bean.id === id)[0];
    this.setState({selectedBean: selectedBean});
  }

  handleAddingNewBeanToList = (newBean) => {
    const newMainBeanList = this.state.mainBeanList.concat(newBean);
    this.setState({
      mainBeanList: newMainBeanList,
      formVisibleOnPage: false 
    });
  }

  handleClick = () => {
    if (this.state.selectedBean != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBean: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }  

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditBeanForm bean = {this.state.selectedBean} onEditBean = {this.handleEditingBeanInList} />
    } 
    else if(this.state.selectedBean != null) {
      currentlyVisibleState = <BeanDetail bean = {this.state.selectedBean} onClickingDelete = {this.handleDeletingBean} onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to bean list";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBeanForm onNewBeanCreation={this.handleAddingNewBeanToList} />;
      buttonText = "Return to bean list";
    } else {
      currentlyVisibleState = <BeanList beanList={this.state.mainBeanList} onBeanSelection={this.handleChangingSelectedBean} />;
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