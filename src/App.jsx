import LikeButton from "./components/like-button";
import Counter from "./components/counter";
import ClickablePicture from "./components/clickable-picture";
import Dice from "./components/dice";
import DiscoButton from "./components/disco-button";
import Carousel from "./components/carousel";

function App() {
  return (
    <div className="App d-flex p-2">
      <div className="row">
        <div className="col-12">
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
      </div>
    </div>
  );
}

export default App;
