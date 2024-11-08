
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import EncryptForm from './components/EncryptForm';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('EncryptForm', () => {
    test('encrypts text when the "Encrypt" button is clicked', async () => {
        // Mock 
        const encryptedResponse = 'encryptedText123';
        mockedAxios.post.mockResolvedValueOnce({ data: encryptedResponse });

        // Render the component
        render(<EncryptForm />);

        // Input text and click "Encrypt"
        fireEvent.change(screen.getByPlaceholderText('Enter text to encrypt'), { target: { value: 'Hello' } });
        fireEvent.click(screen.getByText('Encrypt'));

        // Wait 
        await waitFor(() => expect(screen.getByText(`Encrypted: ${encryptedResponse}`)).toBeInTheDocument());
    });

    test('decrypts text when the "Decrypt" button is clicked', async () => {
        // Mock the decryption API response
        const decryptedResponse = 'Hello';
        mockedAxios.post.mockResolvedValueOnce({ data: { text: decryptedResponse } });

        // Render the component
        render(<EncryptForm />);

        // Input encrypted text and click "Decrypt"
        fireEvent.change(screen.getByPlaceholderText('Enter text to decrypt'), { target: { value: 'encryptedText123' } });
        fireEvent.click(screen.getByText('Decrypt'));

        // Wait 
        await waitFor(() => expect(screen.getByText(`Decrypted: ${decryptedResponse}`)).toBeInTheDocument());
    });

   
});