import "./App.css";
import Carousel from "./componets/Carousel/carousel";
import ClickablePicture from "./componets/clickable-picture/clickable-picture";
import Counter from "./componets/counter/counter";
import Dice from "./componets/dice/dice";
import DiscoButton from "./componets/disco-button/disco-button";
import LikeButton from "./componets/like-button";

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
          "https://randomuser.me/api/portraits/men/2.jpg",
        ]}
      />
    </div>
  );
}

export default App;
