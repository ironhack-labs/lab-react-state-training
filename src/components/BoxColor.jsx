import React from 'react';

const BoxColor = ({ r, g, b }) => {
    const rgbColor = `rgb(${r},${g},${b})`;

    // Función para convertir RGB a HEX
    const rgbToHex = (r, g, b) => {
        const toHex = (value) => value.toString(16).padStart(2, '0');
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };

    const hexColor = rgbToHex(r, g, b);

    return (
        <div style={{ ...styles.box, backgroundColor: rgbColor }}>
            <p>{rgbColor}</p>
            <p>{hexColor}</p>
        </div>
    );
};

const styles = {
    box: {
        border: '1px solid black',
        padding: '20px',
        margin: '10px 0',
        textAlign: 'center',
        fontSize: '18px',
        color: 'white',
        width: '400px',
    },
};

export default BoxColor;
