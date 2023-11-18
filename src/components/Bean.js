import React from "react";
import PropTypes from "prop-types";

function Bean(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBeanClicked(props.id)}>
      <h3>{props.name}</h3>
      <h4>{props.roast}</h4>
      <h4>{props.price}</h4>
      <h4>{props.lbs}</h4>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Bean.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  roast: PropTypes.string,
  lbs: PropTypes.string,
  id: PropTypes.string,
  whenBeanClicked: PropTypes.func
};

export default Bean;