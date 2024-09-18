import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClickAdd = () => {
    setCount(count + 1);
  };
  const handleClickSubstract = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>
        <button disabled={count <= 0 && true} onClick={handleClickSubstract}>
          ➖
        </button>
        <p>{count}</p>
        <button onClick={handleClickAdd}>➕</button>
      </div>
    </>
  );
};
