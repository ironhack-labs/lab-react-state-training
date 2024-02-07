
import "./App.css";


import LikeButton from "./components/LikeButton/LikeButton";
import Counter from "./components/Counter/Counter";
import ClickablePicture from "./components/ClickablePicture/ClickablePicture";
import Dice from "./components/Dice/Dice";
import Carousel from "./components/Carousel/Carousel"



function App() {
  return (
    <div className="app">
      <h1> LAB | React Training</h1>

      <LikeButton />

      <Counter />

      <ClickablePicture />

      <Dice />

      <Carousel
         images={[
           "https://randomuser.me/api/portraits/women/1.jpg",
           "https://randomuser.me/api/portraits/men/1.jpg",
           "https://randomuser.me/api/portraits/women/2.jpg",
           "https://randomuser.me/api/portraits/men/2.jpg"
         ]}
            />

    
    </div>
  );
}

export default App;