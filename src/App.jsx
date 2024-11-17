import ClickableImage from "./components/clickable-image/clickable-image";
import Counter from "./components/counter/counter";
import LikeButton from "./components/like-button/like-button";
import Dice from "./components/dice/dice";
import DiscoButton from "./components/disco-button/disco-button";
import Carousel from "./components/carousel/carousel";

function App() {
  return (
    <div className="container d-flex flex-column align-items-center p-3">
      <h1> LAB | React Training</h1>

      <div className="d-flex mb-2 gap-2">
        <LikeButton className="border-light"></LikeButton>
        <LikeButton className="border-light"></LikeButton>
      </div>

      <Counter min={0} className="mb-2"></Counter>

      <ClickableImage className="mb-2"></ClickableImage>

      <Dice className="mb-2"></Dice>

      <div className="d-flex mb-2 gap-2">
        <DiscoButton className="border-light"></DiscoButton>
        <DiscoButton className="border-light"></DiscoButton>
      </div>

      <Carousel
        className="d-flex gap-2 align-items-center"
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
