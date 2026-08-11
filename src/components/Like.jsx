    import { useState } from "react";

function Like() {
  const [counterValue, setCounterValue] = useState(0);

  const counterGoesUp = () => {
    setCounterValue(counterValue + 1);
  };

  return (
    <button onClick={counterGoesUp}>
      {counterValue} Likes
    </button>
  );
}

export default Like;