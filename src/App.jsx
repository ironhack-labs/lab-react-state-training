import Counter from "./components/Counter/Counter";
import LikeButton from "./components/LikeButton/LikeButton";
import ClickablePicture from "./components/ClickablePicture/ClickablePicture";
import Dice from "./components/Dice/Dice";
import DiscoButton from "./components/DiscoButton/DiscoButton";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <>
      <div className="container p-3 d-flex">
        <LikeButton />
        <LikeButton />
      </div>

      <div className="container p-3 d-flex">
        <Counter />
      </div>

      <div className="container p-3">
        <ClickablePicture />
      </div>

      <div className="container p-3">
        <Dice />
      </div>

      <div className="container p-3">
        <DiscoButton />
      </div>

      <div className="container p-3">
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
