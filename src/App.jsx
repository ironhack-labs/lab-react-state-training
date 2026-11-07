import './App.css';
import LikeButton from './components/LikeButton';
import Counter from './components/Counter';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';

function App() {
  return (
    <div className="App">
     
      <div className="like-buttons-container">
        <LikeButton />
        <LikeButton />
      </div>

  
      <Counter />

  
      <div style={{ marginTop: '30px' }}>
        <ClickablePicture />
      </div>

    
      <div style={{ marginTop: '30px', marginBottom: '50px' }}>
        <Dice />
      </div>
    </div>
  );
}

export default App;
