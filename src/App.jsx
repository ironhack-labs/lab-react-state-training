import "./App.css";
import Likebutton from "./components/LikeButton";
import Counter from "./components/Counter";
import Clickpic from "./components/ClickablePicture";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div>
        <article>
          <Likebutton />
        </article>
        <article>
          <Counter />
        </article>
        <article>
          <Clickpic />
        </article>
        <article>
          <Dice />
        </article>
      </div>
    </div>
  );
}

export default App;
