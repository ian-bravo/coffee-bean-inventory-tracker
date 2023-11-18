import React from "react";
import PropTypes from "prop-types";

function BeanDetail(props){
  const { bean, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h2>Bean Detail</h2>
      <h3>{bean.name} - {bean.roast}</h3>
      <h4>{bean.price}</h4>
      <button onClick={ props.onClickingEdit }>Update Bean</button>
      <button onClick={()=> onClickingDelete(bean.id) }>Delete Bean</button>
      <hr/>
    </React.Fragment>
  );
}

BeanDetail.propTypes = {
  bean: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}; 

export default BeanDetail;