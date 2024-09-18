import "./App.css";
import LikeButton from "./components/LikeButton.jsx"
import Counter from "./components/Counter.jsx"
import ClickablePicture from "./components/ClickablePicture.jsx"
import Dice from "./components/Dice.jsx"
import DiscoButton from "./components/DiscoButton.jsx"
import Carousel from "./components/Carousel.jsx"

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice />
      <DiscoButton />
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
