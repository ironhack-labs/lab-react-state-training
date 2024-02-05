import {useState} from 'react';

function Dice () {

    const [dice, newDice] = useState('./src/assets/images/dice3.png')

    const rollDice = () => {
        setTimeout(newDice('./src/assets/images/dice-empty.png'),1000);
        const randomNum = Math.floor(Math.random() * 6 + 1)

        switch (randomNum) {
            case 1:
                setTimeout(newDice('./src/assets/images/dice1.png'), 1000);
                break;
            case 2:
                setTimeout(newDice('./src/assets/images/dice2.png'), 1000);
                break;
            case 3:
                setTimeout(newDice('./src/assets/images/dice3.png'), 1000);
                break;
            case 4:
                setTimeout(newDice('./src/assets/images/dice4.png'), 1000);
                break;
            case 5:
                setTimeout(newDice('./src/assets/images/dice5.png'), 1000);
                break;
            case 6:
                setTimeout(newDice('./src/assets/images/dice6.png'), 1000);
                break;
        }


    }

    return(
        <img src={dice} onClick={rollDice}/>
    )

}
export default Dice;