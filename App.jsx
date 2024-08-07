import React from 'react';
import LikeButton from './LikeButton';
import Counter from './Counter';
import ClickablePicture from './ClickablePicture';
import normalImg from './assets/normal.png';
import sunglassesImg from './assets/sunglasses.png';

import Dice from './Dice';
import dice1 from './assets/dice1.png';
import dice2 from './assets/dice2.png';
import dice3 from './assets/dice3.png';
import dice4 from './assets/dice4.png';
import dice5 from './assets/dice5.png';
import dice6 from './assets/dice6.png';
import diceEmpty from './assets/dice-empty.png';

import DiscoButton from './DiscoButton';


function App() {
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6, diceEmpty];

  return (
    <div>
      <LikeButton />
      <Counter />
      <ClickablePicture 
        img1={normalImg} 
        img2="http://www.stickpng.com/assets/images/584999937b7d4d76317f5ffd.png" 
      />
            <Dice diceImages={diceImages} />


      <DiscoButton />


    </div>
  );
}

export default App;

