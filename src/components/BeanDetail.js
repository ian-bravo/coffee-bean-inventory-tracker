import React from "react";
import PropTypes from "prop-types";

function BeanDetail(props){
  const { bean, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h2>Bean Detail</h2>
      <h4>{bean.name}</h4>
      <h4>{bean.roast}</h4>
      <h4>{bean.price}</h4>
      <h4>{bean.lbs}</h4>
      <button onClick={ -increment}>Add 1 lb of coffee</button>
      <button onClick={ -decrement }>Add 1 lb of coffee</button>
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