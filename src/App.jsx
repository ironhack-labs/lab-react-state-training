import LikeButton from "./components/like-button/likeButton";
import Counter from "./components/counter/counter";
import Dice from "./components/dice/dice";
import DiscoButton from "./components/discoButton/discoButton";
import Carousel from "./components/carousel/carousel";

function App() {
  return (
    <>
      <div className="d-flex p-3">
        <LikeButton />
        <LikeButton />
      </div>
      <div className="d-flex p-5">
        <Counter />
      </div>
      <div>
        <Dice />
      </div>
      <DiscoButton />
      <div>
      <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg",
        ]}
      />
      </div>
    </>
  );
}

export default App;
