import React from 'react';
import EncryptForm from './components/EncryptForm';


const App: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>Encryption App</h1>
            <EncryptForm />
        </div>
    );
};

export default App;

