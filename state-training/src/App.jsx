import React from 'react';
import LikeButton from './components/LikeButon';
import Counter from './components/Counter';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';

const App = () => {
    return (
        <div>
            <h1>React Components</h1>
            <LikeButton />
            <Counter />
            <ClickablePicture />
            <Dice />
        </div>
    );
};

export default App;