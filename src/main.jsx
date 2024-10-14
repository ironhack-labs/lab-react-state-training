import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LikeButton from './components/LikeButton';
import Counter from './components/Counter';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import DiscoButton from './components/DiscoButton';
import Carousel from './components/Carousel';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
        <LikeButton />
        <LikeButton />
        <Counter />
        <ClickablePicture />
        <Dice />
        <DiscoButton />
        <Carousel />
    </React.StrictMode>
);
