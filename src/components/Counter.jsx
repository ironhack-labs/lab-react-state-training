import React from "react";

export const Counter = ({ increment, decrement, value }) => {
  return (
    <>
      <div className="buttonContainer">
        <button onClick={increment}>+</button>
        <h1>{value} </h1>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
};
