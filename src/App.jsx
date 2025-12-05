import LikeButton from "./components/like-button";
import Counter from "./components/counter";
import ClickablePicture from "./components/clickable-picture";
import Dice from "./components/dice";
import DiscoButton from "./components/disco-button";
import Carousel from "./components/carrousel";

import "./App.css";

function App() {
  return (
    <div className="App d-flex flex-column gap-3 ms-3">
      <h1> LAB | React Training</h1>
      <div className="d-flex gap-2">
        <LikeButton></LikeButton>
        <LikeButton></LikeButton>
      </div>
      <Counter></Counter>
      <ClickablePicture></ClickablePicture>
      <Dice></Dice>
      <div  className="d-flex gap-2">
        <DiscoButton></DiscoButton>
        <DiscoButton></DiscoButton>
      </div>
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
