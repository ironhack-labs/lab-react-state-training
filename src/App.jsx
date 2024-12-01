import Counter from "./components/counter/counter";
import LikeButton from "./components/linkButton/linkButton";
import ClickablePicture from "./components/clickablePicture/clickablePicture";
import Dice from "./components/dice/dice";
import DiscoButton from "./components/discoButton/discoButton";
import Carousel from "./components/carousel/carousel";

function App() {
  return (
    <>
    <div className="d-flex p-3 gap-2 text-center">
      <LikeButton className="mb-1" />
      <LikeButton className="mb-1" />
    </div>

    <div className="d-flex p-3 gap-2">
      <Counter />
    </div>

    <div className="container text-center">
      <h1 className="my-4">React Clickable Picture</h1>
      <ClickablePicture
        img="data:image/jpeg;base64,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"
        imgClicked="http://www.stickpng.com/assets/images/584999937b7d4d76317f5ffd.pngttps://via.placeholder.com/200/0000FF"
        className="my-3"
      />
    </div>

    <div className="container text-center">
      <h1 className="my-4">React Dice</h1>
      <Dice className="my-3"/>
    </div>

    <div className="d-flex p-3 gap-2">
        <DiscoButton className="mb-1" />
        <DiscoButton className="mb-1" />
    </div>

    <div className="container text-center my-5">
      <h1 className="mb-4">React Carousel</h1>
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
