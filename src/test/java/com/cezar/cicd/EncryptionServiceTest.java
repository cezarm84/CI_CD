package com.cezar.cicd;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;


class EncryptionServiceTest {

    private final EncryptionService encryptionService = new EncryptionService();

    @Test
    void testEncryptAndDecrypt() throws Exception {
        String originalText = "Hello, World!";
        String encryptedText = encryptionService.encrypt(originalText);
        String decryptedText = encryptionService.decrypt(encryptedText);

        assertNotEquals(originalText, encryptedText);
        assertEquals(originalText, decryptedText);
    }

    @Test
    void testEncryptEmptyString() throws Exception {
        String encryptedText = encryptionService.encrypt("");
        String decryptedText = encryptionService.decrypt(encryptedText);

        assertEquals("", decryptedText);
    }

    @Test
    void testEncryptSpecialCharacters() throws Exception {
        String specialChars = "!@#$%^&*()";
        String encryptedText = encryptionService.encrypt(specialChars);
        String decryptedText = encryptionService.decrypt(encryptedText);

        assertEquals(specialChars, decryptedText);
    }
}