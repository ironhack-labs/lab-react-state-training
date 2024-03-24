import React, { useState } from "react";

import "./Dice.css";

function Dice() {
  const [url, setUrl] = useState(
    `./dice${Math.floor(Math.random() * 6 + 1)}.png`
  );

  function handleClick() {
    setUrl(`./dice-empty.png`);
    setTimeout(() => {
      setUrl(`./dice${Math.floor(Math.random() * 6 + 1)}.png`);
    }, 1000);
  }
  return (
    <div>
      <img onClick={handleClick} className="imgs" src={url} alt="" />
    </div>
  );
}

export default Dice;
