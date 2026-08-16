import React, { useState } from 'react'


function Dice() {

   

    //constants
    const emptyDice = "src/assets/images/dice-empty.png"
    const dice1 = "src/assets/images/dice1.png"
    const dice2 = "src/assets/images/dice2.png"
    const dice3 = "src/assets/images/dice3.png"
    const dice4 = "src/assets/images/dice4.png"
    const dice5 = "src/assets/images/dice5.png"
    const dice6 = "src/assets/images/dice6.png"

    const diceArrImages = [dice1, dice2, dice3, dice4, dice5, dice6]


    // states
    const [diceValue, setdiceValue]= useState(emptyDice)


    //functions

    function handleImageDice(){
       // Step A: Immediately change state to the empty dice
        setdiceValue(emptyDice);

        // Step B: Wait 1000 milliseconds (1 second) before picking a random dice
        setTimeout(() => {
      // Pick a random whole number from 0 to 5
      const randomIndex = Math.floor(Math.random() * diceArrImages.length);

      // Update state with the random dice image from our array
      setdiceValue(diceArrImages[randomIndex]);
    }, 1000);
    }



    //JSX return
  return (
    <div>
        <img onClick={handleImageDice} style={{width: "300px"}} src={diceValue} alt="" />
        
    </div>
  )
}

export default Dice