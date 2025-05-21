
import LikeButton from './components/LikeButton';
import Counter from './components/Counter';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <hr />
      <LikeButton />
      <hr />
       <Counter />
       <hr />
       <ClickablePicture />
       <hr />
       <h1>Dice Component</h1>
      <Dice />
    </div>
  );
}

export default App;
