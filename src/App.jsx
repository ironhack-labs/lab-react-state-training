import Carousel from "./components/carousel/carousel";
import Dice from "./components/dice/dice"
import ClickablePicture from "./components/clickablePicture/clickablePicture";
import Counter from "./components/counter/counter";
import LikeButton from "./components/likeButton/likeButton";
import DiscoButton from "./components/discoButton/discoButton";

function App() {
  return (
    <>
      <div className="d-flex p-3">
        <LikeButton />
        <LikeButton />
      </div>

      <div className="d-flex p-4">
        <Counter />
      </div>

      <div className="d-flex p-4">
        <ClickablePicture />
      </div>

      <div className="d-flex p-4">
        <Dice />
      </div>

      <div className="d-flex p-5">
        <Carousel
          images={[
            "https://randomuser.me/api/portraits/women/1.jpg",
            "https://randomuser.me/api/portraits/men/1.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
            "https://randomuser.me/api/portraits/men/2.jpg"
          ]}
        />
      </div>

      <div className="d-flex p-4">
        <DiscoButton />
        <DiscoButton />
      </div>

    </>
  );
}

export default App;
