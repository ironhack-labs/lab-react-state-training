import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <h2>Hello World</h2>

      <h2>Iteration 1 - LikeButton</h2>
      <LikeButton />

      <h2>Iteration 2 - Counter</h2>
      <Counter />

      <h2>Iteration 3 - ClickablePicture</h2>
      <ClickablePicture />

      <h2>Iteration 4 - Dice</h2>
      <Dice />

      <h2>Bonus: Iteration 5 - DiscoButton</h2>
      <DiscoButton />

      <h2>Bonus: Iteration 6 - Carousel</h2>
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
