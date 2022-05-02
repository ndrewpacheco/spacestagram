import React from "react";

const CardBtn = ({ handleClick, children, stateVar, stateName }) => {
  return (
    <button onClick={handleClick} className={`button ${stateVar && stateName}`}>
      {children}
    </button>
  );
};

export default CardBtn;
