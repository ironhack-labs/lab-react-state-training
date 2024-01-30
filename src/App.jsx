
import React from 'react';
import './App.css';
import LikeButton from './components/LikeButton';
import Counter from './components/Counter';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import DiscoButton from './components/DiscoButton';
import Carousel from './components/Carousel';

function App() {
  const carouselImages = [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg"
  ];

  return (
    <div className="App">
      <h1>React State and Events Exercise</h1>
      
      <section>
        <h2>Like Button</h2>
        <LikeButton />
      </section>

      <section>
        <h2>Counter</h2>
        <Counter />
      </section>

      <section>
        <h2>Clickable Picture</h2>
        <ClickablePicture />
      </section>

      <section>
        <h2>Dice</h2>
        <Dice />
      </section>

      <section>
        <h2>Disco Button</h2>
        <DiscoButton />
      </section>

      <section>
        <h2>Carousel</h2>
        <Carousel images={carouselImages} />
      </section>
    </div>
  );
}

export default App;
