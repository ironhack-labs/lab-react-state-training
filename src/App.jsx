import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import Carousel from "./components/Carousel";
import DiscoButton from "./components/DiscoButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <br />

      <h2>Iteration 1 | LikeButton </h2>
      <LikeButton />
      <LikeButton />

      <h2>Iteration 2 | State: Counter</h2>
      <Counter />

      <h2>Iteration 3 | State: ClickablePicture</h2>
      <ClickablePicture />

      <h2>Iteration 4 | State: Dice</h2>
      <Dice />

      <h2>Iteration 5 | State: DiscoButton</h2>
      <DiscoButton />
      <DiscoButton />

      <h2>Bonus: Iteration 6 | Carousel</h2>
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