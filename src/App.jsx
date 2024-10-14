import React from "react";
import "./App.css"; // Ensure your styles are correctly linked
import Carousel from "./components/Carousel";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <div className="App">
      <h1>LAB | React Training</h1>
      {/* Add each component here */}
      <h2>Carousel</h2>
      <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg",
        ]}
      />
      <h2>ClickablePicture</h2>
      <ClickablePicture
        img1="/src/assets/image1.png"
        img2="/src/assets/image2.png"
      />
      <h2>Counter</h2>
      <Counter /> {/* Add the Counter component here */}
      <h2>Dice</h2>
      <Dice />
      <h2>DiscoButton</h2>
      <DiscoButton />
      <h2>LikeButton</h2>
      <LikeButton />
    </div>
  );
}

export default App;
