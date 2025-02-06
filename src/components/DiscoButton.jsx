import { useState } from 'react';

export default function DiscoButton() {
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
    const [disco, setDisco] = useState(0);
    const [color, setColor] = useState(0);

    const colorRandom = () => setColor(prevColor => (prevColor + 1) % colors.length);

    return (
        <div>
            <button
                onClick={() => {
                    setDisco(disco + 1);
                    colorRandom();
                }}
                style={{ backgroundColor: colors[color] }}
            >
                {disco} Likes
            </button>
        </div>
    );
}
