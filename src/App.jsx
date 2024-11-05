import "./App.css";
import "./components/LikeButton/LikeButton.jsx"

import Counter from "./components/Counter/Counter.jsx"
import ClickablePicture from "./components/ClickablePicture/ClickablePicture.jsx"
import LikeButton from "./components/LikeButton/LikeButton.jsx";
import Dice from "./components/Dice/Dice.jsx";
import DiscoButton from "./components/DiscoButton/DiscoButton.jsx";
import Carousel from "./components/Carousel/Carousel.jsx";

function App() {
  return (
    <div className="App">

      <div>
        <h1>ButtonLike</h1>
        <LikeButton />
      </div>


      <div>
        <h1>Counter</h1>
        <Counter />
      </div>


      <div>
        <h1>Toggle Sunglasses</h1>
        <ClickablePicture />
      </div>

      <div>
        <h1>Dice</h1>
        <Dice />

      </div>
      <div>

        <h1>
          DiscoButton
        </h1>
        <DiscoButton />
      </div>

      <div>
        <h1>Carousel</h1>

        <Carousel
          images={[
            "https://randomuser.me/api/portraits/women/1.jpg",
            "https://randomuser.me/api/portraits/men/1.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
            "https://randomuser.me/api/portraits/men/2.jpg"
          ]}
        />

      </div>
    </div>


  );
}

export default App;
