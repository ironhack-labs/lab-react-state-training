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
    {/**  the line below handles the first picture to be displayed  */}
    setDice(diceArr[0]);
    {/** we use a "setTimeeout" to wait 1sec until the second picture is displayed */}
    setTimeout(() => {
      {/** we print out/return a random picture using the newly created function to perform this task */}
      setDice(randomPic(diceArr)); 
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
