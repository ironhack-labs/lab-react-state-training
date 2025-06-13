import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import DiscoButton from "./components/DiscoButton";
import Dice from "./components/Dice";
import Carousel from "./components/Carousel";
function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <br />
      <Counter />
      <br />
      <br />
      <ClickablePicture />
      <br />
      <br />
      <DiscoButton />
      <br />
      <br />
      <Dice />
      <br />
      <br />

      <div>
        <h1>Dice</h1>
        <Carousel
          images={[
            "./assets/images/dice-empty.png",
            "./assets/images/dice1.png",
            "./assets/images/dice2.png",
            "./assets/images/dice3.png",
            "./assets/images/dice4.png",
          ]}
        />
      </div>

      <div>
        <h1>Carousel Demo</h1>
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
