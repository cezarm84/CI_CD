package com.cezar.cicd;


import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/encryption")
public class EncryptionController {

    private final EncryptionService encryptionService;

    public EncryptionController(EncryptionService encryptionService) {
        this.encryptionService = encryptionService;
    }

    @PostMapping("/encrypt")
    public String encrypt(@RequestBody String text) throws Exception {
        return encryptionService.encrypt(text);
    }

    @PostMapping("/decrypt")
    public String decrypt(@RequestBody String encryptedText) throws Exception {
        return encryptionService.decrypt(encryptedText);
    }
}
