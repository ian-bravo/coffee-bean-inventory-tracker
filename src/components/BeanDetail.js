import React from "react";
import PropTypes from "prop-types";

function BeanDetail(props){
  const { bean } = props;

  return (
    <React.Fragment>
      <h2>Bean Detail</h2>
      <h3>{bean.name} - {bean.roast}</h3>
      <h4>{bean.price}</h4>
      <hr/>
    </React.Fragment>
  );
}

BeanDetail.propTypes = {
  bean: PropTypes.object
}; 

export default BeanDetail;