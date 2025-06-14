import { useState } from "react";

const DiscoButton = () => {
  const [num, setNum] = useState(0);
  const colors = ["organe", "yellow", "red", "green", "purple", "blue", "pink"];
  const [curr, setCurr] = useState(0);
  function handleClick() {
    setNum(num + 1);
    setCurr(curr >= 5 ? 0 : curr + 1);
  }
  return (
    <>
      <button onClick={handleClick} style={{ background: colors[curr] }}>
        {num} likes
      </button>
    </>
  );
};

export default DiscoButton;
