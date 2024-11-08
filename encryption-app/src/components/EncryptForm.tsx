import React, { useState } from 'react';
import axios from 'axios';

const EncryptForm: React.FC = () => {
    const [text, setText] = useState<string>(''); // Input for text to encrypt
    const [encryptedText, setEncryptedText] = useState<string>(''); // Encrypted text
    const [decryptedText, setDecryptedText] = useState<string>(''); // Decrypted text

    const handleEncrypt = async () => {
        try {
            const response = await axios.post<string>(
                'https://ci-cd-593642826985.europe-west3.run.app/api/encryption/encrypt',
                //'http://localhost:8080/api/encryption/encrypt',
                { text }
            );

           // console.log("Full encryption response:", response);
            //console.log("Encrypted text from response:", response.data);

        
            setEncryptedText(response.data);
            setDecryptedText(''); // Clear decrypted text 
        } catch (error) {
            console.error("Encryption failed", error);
        }
    };

    const handleDecrypt = async () => {
        try {
            console.log("Sending decryption request with payload:", encryptedText);
        
            const response = await axios.post<{ text: string }>(
                'https://ci-cd-593642826985.europe-west3.run.app/api/encryption/decrypt',
                //'http://localhost:8080/api/encryption/decrypt',
                encryptedText,  // Send as plain text
                { headers: { 'Content-Type': 'text/plain' } }
            );
        
            //console.log("Decryption response received:", response.data);
        
            // Check impty string
            if (response.data.text === '') {
                setDecryptedText('Decryption resulted in an empty string');
            } else {
                setDecryptedText(response.data.text);
            }
        } catch (error) {
            console.error("Decryption failed:", error);
            setDecryptedText('Decryption failed');
        }
    };

    return (
        <div>
            <h2>Encrypt Text</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value || '')} 
                placeholder="Enter text to encrypt"
            />
            <button onClick={handleEncrypt}>Encrypt</button>
            {encryptedText && <p>Encrypted: {encryptedText}</p>} 

            <h2>Decrypt Text</h2>
            <input
                type="text"
                value={encryptedText}
                onChange={(e) => setEncryptedText(e.target.value || '')} 
                placeholder="Enter text to decrypt"
            />
            <button onClick={handleDecrypt}>Decrypt</button>
            {decryptedText && <p>Decrypted: {decryptedText}</p>}
        </div>
    );
};

export default EncryptForm;
