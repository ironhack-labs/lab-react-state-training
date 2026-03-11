import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";

import maxence from "./assets/images/maxence.png";
import maxenceGlasses from "./assets/images/maxence-glasses.png";

function App() {
  return (
    <div className="App">
      <h1>LAB | React Training</h1>

      <LikeButton />
      <Counter />

      <ClickablePicture
        img={maxence}
        imgClicked={maxenceGlasses}
      />
    </div>
  );
}

export default App;