import React, { useState } from "react";

const diceArr = [
  "src/assets/images/dice-empty.png",
  "src/assets/images/dice1.png",
  "src/assets/images/dice2.png",
  "src/assets/images/dice3.png",
  "src/assets/images/dice4.png",
  "src/assets/images/dice5.png",
  "src/assets/images/dice6.png",
];

function randomPic(arr) {
  let arrIndex = Math.floor(Math.random() * arr.length);
  return arr[arrIndex];
}

function RandomDice() {
  const [dice, setDice] = useState(diceArr[0]);

  const handleClick = () => {
    setDice(diceArr[0]); // Display empty picture first
    setTimeout(() => {
      setDice(randomPic(diceArr)); // Display random picture after 1 second
    }, 1000);
  };

  return (
    <div>
      <section>
        <article className="dice">
          <h3>
            <img src={dice} alt="" />
          </h3>
        </article>
        <button onClick={handleClick}>Click</button>
      </section>
    </div>
  );
}

export default RandomDice;
