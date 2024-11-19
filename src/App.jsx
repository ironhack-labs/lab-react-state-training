import React from 'react';
import LikeButton from './assets/components/LikeButton/LikeButton';
import Counter from './assets/components/counter/counter';
import ClickablePicture from './assets/components/clickablepicture/clickablepicture';
import normal from './assets/images/maxence.png';
import clicked from './assets/images/maxence-glasses.png';
import Dice from './assets/components/dice/dice';
import DiscoButton from './assets/components/discobutton/discobutton';


const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <LikeButton/>
      <LikeButton/>
      <Counter/>
      <ClickablePicture img={normal} imgClicked={clicked} />
      <Dice/>
      <DiscoButton />
    </div>
  );
};

export default App;
