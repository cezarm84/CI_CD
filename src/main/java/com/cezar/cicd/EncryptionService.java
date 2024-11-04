package com.cezar.cicd;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;
import org.springframework.stereotype.Service;

@Service
public class EncryptionService {

	private static final String ALGORITHM = "AES";
	private static final String SECRET_KEY = "1234567890123456"; // 16-byte key for AES-128

	public String encrypt(String text) throws Exception {
		SecretKeySpec secretKey = new SecretKeySpec(SECRET_KEY.getBytes(), ALGORITHM);
		Cipher cipher = Cipher.getInstance(ALGORITHM);
		cipher.init(Cipher.ENCRYPT_MODE, secretKey);
		byte[] encryptedBytes = cipher.doFinal(text.getBytes());
		return Base64.getEncoder().encodeToString(encryptedBytes);
	}

	public String decrypt(String encryptedText) throws Exception {
		SecretKeySpec secretKey = new SecretKeySpec(SECRET_KEY.getBytes(), ALGORITHM);
		Cipher cipher = Cipher.getInstance(ALGORITHM);
		cipher.init(Cipher.DECRYPT_MODE, secretKey);
		byte[] decodedBytes = Base64.getDecoder().decode(encryptedText);
		byte[] decryptedBytes = cipher.doFinal(decodedBytes);
		return new String(decryptedBytes);
	}
}
