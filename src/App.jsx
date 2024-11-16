import Carousel from "./components/carousel/carousel";
import ClickablePicture from "./components/clickable-picture/clickable-picture";
import Counter from "./components/counter/counter";
import Dice from "./components/dice/dice";
import DiscoButton from "./components/disco-button/disco-button";
import LikeButton from "./components/like-button/like-button";


function App() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex gap-2 p-5">
        <LikeButton />
        <LikeButton />
      </div>
      
      <Counter className="mb-5" />

      <ClickablePicture className="mb-5" on = "src/assets/images/aitor-glasses.png" off ="src/assets/images/aitor.png" />

      <Dice className="mb-5"/>

      <div className="d-flex gap-2 p-5">
        <DiscoButton />
        <DiscoButton />
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
