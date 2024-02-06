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
      <h1> LikeButton</h1>

      <LikeButton />
      <h1> Counter</h1>
      <Counter />
      <h1>ClickablePicture</h1>
      <ClickablePicture />
      <h1> Dice</h1>

      <Dice />
      <h1>DiscoButton</h1>
      <DiscoButton />
      <h1> Carousel</h1>
      <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg",
        ]}
      />
    </div>
  );
}

export default App;
