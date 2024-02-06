import { useState } from "react";

function Dice(){
    let [imageSrc, setImageSrc] = useState('./src/assets/images/dice-empty.png');
    const imageArray = ['./src/assets/images/dice-empty.png','./src/assets/images/dice1.png','./src/assets/images/dice2.png',
    './src/assets/images/dice3.png','./src/assets/images/dice4.png','./src/assets/images/dice5.png',
    './src/assets/images/dice6.png']
    function changeImage(){
        let randomImg = imageArray[Math.floor(Math.random() * (imageArray.length))] 
        setImageSrc(randomImg);
    }
return(<>
<img src={imageSrc} onClick={changeImage} />
</>)
}
export default Dice;