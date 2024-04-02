import React from 'react';
import LikeButton from './components/LikeButton';
import Counter from './components/Counter';
import './index.css';
import ClickablePicture from './components/ClickablePicture';


const App = () => {
  return (
    <div>
      <LikeButton />
      <Counter />
      <ClickablePicture/>
    </div>
  );
};

export default App;
