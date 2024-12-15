import React from 'react';

const Greetings = ({ lang, children }) => {
    const getGreeting = (language) => {
        switch (language) {
            case 'de':
                return 'Hallo';
            case 'en':
                return 'Hello';
            case 'es':
                return 'Hola';
            case 'fr':
                return 'Bonjour';
            default:
                return 'Hello';
        }
    };

    return (
        <div style={styles.container}>
            {getGreeting(lang)} {children}
        </div>
    );
};

const styles = {
    container: {
        border: '1px solid black',
        padding: '10px',
        margin: '10px 0',
        width: '300px',
        textAlign: 'start',
        fontSize: '18px',
        fontWeight: 'bold',
    },
};

export default Greetings;
