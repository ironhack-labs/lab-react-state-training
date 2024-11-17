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
      {/* Iteration 1 */}
      <LikeButton />
      <LikeButton />

      {/* Iteration 2 */}
      <Counter />

      {/* Iteration 3 */}
      <ClickablePicture />

      {/* Iteration 4 */}
      <Dice />

      {/* Iteration 5 */}
      <DiscoButton />
      <DiscoButton />

      {/* Iteration 6 */}
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
