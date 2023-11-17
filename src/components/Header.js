import React from "react";
import beanImage from "./../img/bean.jpg"

function Header(){
  return (
    <React.Fragment>
      <h1>~Coffee Bean Tracker~</h1>
      <img src={beanImage} alt="An image of beans" />
    </React.Fragment>
  );
}

export default Header;