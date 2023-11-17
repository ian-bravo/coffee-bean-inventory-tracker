import React from "react";
import Header from "./Header";
import BeanControl from "./BeanControl";
import BeanList from "./BeanList";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      {/* <BeanControl /> */}
      <BeanList />
    </React.Fragment>
  );
}

export default App;