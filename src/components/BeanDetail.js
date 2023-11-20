import React from "react";
import PropTypes from "prop-types";

function BeanDetail(props){
  const { bean, onClickingDelete, onClickingDecrement } = props;

  return (
    <React.Fragment>
      <h2>Bean Detail</h2>
      <h4>Coffee bean name: {bean.name}</h4>
      <h4>Type of roast: {bean.roast}</h4>
      <h4>Price per pound: {bean.price}</h4>
      <h4>Current amount in stock: {bean.lbs}</h4>
      <button onClick={() => onClickingDecrement(bean.id)}>Sell 1 lb!</button>
      <button onClick={ props.onClickingEdit }>Update Bean</button>
      <button onClick={()=> onClickingDelete(bean.id) }>Delete Bean</button>
      <hr/>
    </React.Fragment>
  );
}

BeanDetail.propTypes = {
  bean: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDecrement: PropTypes.func
}; 

export default BeanDetail;