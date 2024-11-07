import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

const EncryptForm: React.FC = () => {
    const [text, setText] = useState<string>(''); // Input for text to encrypt
    const [encryptedText, setEncryptedText] = useState<string>(''); // Encrypted text
    const [decryptedText, setDecryptedText] = useState<string>(''); // Decrypted text

    const handleEncrypt = async () => {
        try {
            const response = await axios.post<{ encryptedText: string }>(
                'http://localhost:8080/api/encryption/encrypt',
                { text }
            );
            console.log("Response received:", response.data);
            setEncryptedText(response.data.encryptedText || ''); 
            setDecryptedText(''); // Clear decrypted text on new 
        } catch (error) {
            console.error("Encryption failed", error);
        }
    };

    const handleDecrypt = async () => {
        
        

        try {
            const response: AxiosResponse<{ text: string }> = await axios.post(
                'http://localhost:8080/api/encryption/decrypt',
                encryptedText, // Send as a string
                {
                    headers: {
                        'Content-Type': 'text/plain',
                    },
                }
            );

            console.log("Decrypted response received:", response.data);
            setDecryptedText(response.data.text || ''); 
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                console.error("Decryption failed:", error.response.data); 
            } else {
                console.error("Decryption failed:", error);
            }
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
