import React from "react";
import PropTypes from "prop-types";

function Bean(props){
  return (
    <React.Fragment>
      <h3>{props.name} - {props.roast}</h3>
      <h4>{props.price}</h4>
      <hr/>
    </React.Fragment>
  );
}

Bean.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  roast: PropTypes.string,
  id: PropTypes.string
};

export default Bean;