import LikeButton from "./components/like-button/likeButton";
import Counter from "./components/counter/counter";
import ClickablePicture from "./components/ClickablePicture/clickablePicture";
import Dice from "./components/dice/dice";
import DiscoButton from "./components/discoButton/discoButton";
import Carousel from "./components/carousel/carousel";
function App() {
  return (
    <div>
      <LikeButton max={5} />
      <LikeButton max={10} />
      <Counter max={12} />
      <ClickablePicture></ClickablePicture>
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
