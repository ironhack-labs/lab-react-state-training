import LikeButton from "./components/likeButton/likeButton";
import Counter from "./components/counter/counter";
import ClickablePicture from "./components/clickablePicture/clickablePicture";
import Dice from "./components/dice/dice";
import DiscoButton from "./components/discoButton/discoButton";
import Carousel from "./components/carousel/carousel";

function App() {
  return (
    <>
      <div className="container p-3 d-flex">
        <LikeButton /> 
        <LikeButton />
      </div>
      <div className=" container p-5 d-flex">
        <Counter />
      </div>

      <div className=" container p-5">
        <ClickablePicture />
      </div>

      <div className=" container p-5">
        <Dice />
      </div>
      <div className=" container p-5 d-flex">
        <DiscoButton  />
        <DiscoButton />
      </div>
      <div className="container p-5 d-flex">
        <Carousel images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg"
        ]} />

      </div>
      
    </>
  );
}
export default App;
