import React, { useState } from "react";
let Counter = () => {
  const [counter, setCounter] = useState(0);
  const btnStyle = {
    height: "50px",
    width: "80px",
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <p style={{ fontSize: "100px" }}>{counter}</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <button
          style={btnStyle}
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
        <button
          style={btnStyle}
          onClick={() => {
            counter > 0 ? setCounter(counter - 1) : setCounter(0);
          }}
        >
          -
        </button>
      </div>
    </>
  );
};
export default Counter;
