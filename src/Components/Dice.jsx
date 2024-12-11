import React, { useState } from "react";

function Dice () {

    const [currentDice, setCurrentDice] = useState("src/assets/images/dice3.png");

    function rollDice() {

        //setting the first image to be the blanc dice
        setCurrentDice("src/assets/images/dice-empty.png");

        //setting the timeout (after a second to change to a random dice)
        setTimeout(() => {

            //generate a random number btwn 1-6 
            const randomSide = Math.floor(Math.random() * 6) + 1;

            //setting the side to show. this works because 
            //all the files are named the same
            setCurrentDice(`src/assets/images/dice${randomSide}.png`);
        }, 1000);

    }



    return (
        <div id="diceDiv">
            <img src={currentDice} alt="Dice showing a random side" onClick={rollDice}/>
        </div>
    )
    
}

export default Dice;