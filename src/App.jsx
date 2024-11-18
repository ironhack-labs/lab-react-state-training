
import LikeButton from './components/likeButton/likeButton';
import Counter from './components/counter/counter';
import Dice from './components/dice/dice';
import ClickablePicture from './components/clickablePicture/clickablePicture';
import DiscoButton from "./components/discobutton/discoButton";
import Carousel from "./components/carousel/carousel";


function App() {
  
  return (
    <>
      <div className="border border-dark d-flex  button-group"> 
        <LikeButton />
        <LikeButton />
      </div>

      <div className="border border-dark d-flex p-2"> 
        <Counter />
      </div>

      <div className="border border-dark d-flex p-2">
      <ClickablePicture />
      </div>

      <div className="border border-dark d-flex p-2">
      <Dice />
      </div>

      <div className="border border-dark d-flex p-2">
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

    </>
  );
}

export default App;
