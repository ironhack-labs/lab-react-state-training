import "./App.css";
import LikeButton from './components/LikeButton';
import Counter from './components/Counter';
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
    </div>,
    <div>
      <article>
        <LikeButton />
      </article>

      <article>
        <Counter />
      </article>

      <article>
        <ClickablePicture />
      </article>

      <article>
        <Dice />
      </article>
    </div>
  );
}
