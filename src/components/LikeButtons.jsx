import { useState } from "react";

export default function LikeButtons() {
  const [num, SetNum] = useState(0);
  return (
    <>
      <button onClick={() => SetNum(num + 1)}>{num} likes</button>
    </>
  );
}
