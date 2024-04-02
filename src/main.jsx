import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LikeButton from './components/LikeButton';
import Counter from './components/counter';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <LikeButton />
    <Counter />
    <ClickablePicture />
    <Dice />
    <App />
  </React.StrictMode>,
);
