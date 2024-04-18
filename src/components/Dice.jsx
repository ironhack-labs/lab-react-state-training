import { useState } from "react";
import "./Dice.css";

const Dice = () => {
  const [value, setValue] = useState(3);

  return (
    <img
      className="dice"
      onClick={() => {
        setValue(0);
        setTimeout(() => {
          setValue(Math.floor(Math.random() * 6) + 1);
        }, 1000);
      }}
      src={`src/assets/images/dice${value || "-empty"}.png`}
      alt="dice"
    />
  );
};
export default Dice;
