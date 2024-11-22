import "./App.css";
import Carousel from "./components/carousel/carousel";
import ClickablePicture from "./components/clickable-picture/clickable-picture";
import Counter from "./components/counter/counter";
import Dice from "./components/dice/dice";
import DiscoButton from "./components/disco-button/disco-button";
import LikeButton from "./components/like-button/like-button";

function App() {
  return (
    <div className="App container">
      <h1 className="mb-4"> LAB | React Training</h1>
      <LikeButton />
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
