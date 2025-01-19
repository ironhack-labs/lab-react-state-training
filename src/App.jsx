import LikeButton from "./components/like-button/like-button.jsx";
import Counter from "./components/counter/counter.jsx";
import Carousel from "./components/carousel/carousel.jsx";
import Dice from "./components/dice/dice.jsx";
import ClickablePicture from "./components/clickable-picture/clickable-picture.jsx";
import DiscoButton from "./components/disco-button/disco-button.jsx";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton className="mr-3" />
      <LikeButton />
      <Counter />
      <ClickablePicture />
      <div className="discoButton">
        <DiscoButton />
        <DiscoButton />
      </div>
      <Dice />
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
