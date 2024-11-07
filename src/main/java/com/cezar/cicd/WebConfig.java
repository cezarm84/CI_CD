package com.cezar.cicd;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/encryption/**")
                .allowedOrigins("http://localhost:5173", "https://cezarm84.github.io",
                        "https://ci-cd-593642826985.europe-west3.run.app")
                .allowedMethods("POST", "GET");
    }
}

