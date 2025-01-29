import "./App.css";
import Carousel from "./components/Carousel";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <LikeButton />
      <div className="counter-container">
        <Counter />
      </div>
      <div>
        <ClickablePicture />
      </div>
      <div id="dice">
        <Dice />
      </div>
      <div id="disco">
        <DiscoButton />
        <DiscoButton />
      </div>
      <div>
        <Carousel
          images={[
            "https://randomuser.me/api/portraits/women/1.jpg",
            "https://randomuser.me/api/portraits/men/1.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
            "https://randomuser.me/api/portraits/men/2.jpg",
          ]}
        />
      </div>
    </div>
  );
}

export default App;
