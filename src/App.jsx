// Import React library
import React from "react";
// Import the LikeButton component from the specified path
import LikeButton from "./Components/LikeButton";
import Counter from "./Components/Counter";
import ClickablePicture from "./Components/ClickablePicture";
import Dice from "./Components/Dice";
import "./App.css";

// Define a functional component named App
const App = () => {
  // Return JSX containing the structure of the App component
  return (
    <div>
      {/* H7<eader with a level 1 heading displaying the app title */}
      <h1>Your App Title</h1>

      {/* Render the LikeButton component */}
      <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice />
    </div>
  );
};

// Export the App component as the default export
export default App;
