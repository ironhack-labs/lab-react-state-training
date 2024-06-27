// src/App.js
import React from 'react';
import LikeButton from './components/LikeButton'; // Import LikeButton component
import Counter from './components/Counter'; // Import Counter component
import ClickablePicture from './components/ClickablePicture'; // Import ClickablePicture component
import Dice from './components/Dice'; // Import Dice component

const App = () => {
  return (
    <div>
      <h1>React State Training</h1>
      <LikeButton /> {/* Add LikeButton component to the component tree */}
      <Counter /> {/* Add Counter component to the component tree */}
      <ClickablePicture img="path/to/image.jpg" imgClicked="path/to/image-clicked.jpg" /> {/* Add ClickablePicture component to the component tree */}
      <Dice /> {/* Add Dice component to the component tree */}
    </div>
  );
};

export default App;
