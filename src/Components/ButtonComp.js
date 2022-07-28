import React from "react";
import "../App.css";

const ButtonComp = (props) => {
  return (
    <>
      <button onClick={() => props.fn()}>{props.children} </button>
    </>
  );
};

export default ButtonComp;