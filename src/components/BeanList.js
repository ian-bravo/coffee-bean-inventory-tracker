import React from "react";
import Bean from "./Bean";
import PropTypes from "prop-types";

function BeanList(props){
  return (
    <React.Fragment>
      <hr />
      {props.beanList.map((bean) =>
        <Bean 
          whenBeanClicked = {props.onBeanSelection}
          name={bean.name}
          roast={bean.roast}
          price={bean.price}
          lbs={bean.lbs}
          id={bean.id}
          key={bean.id} />
      )}
    </React.Fragment>
  );
}

BeanList.propTypes = {
  beanList: PropTypes.array,
  onBeanSelection: PropTypes.func
};

export default BeanList;