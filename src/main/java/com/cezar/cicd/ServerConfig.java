package com.cezar.cicd;



import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.net.UnknownHostException;

@Configuration
public class ServerConfig {

    @Bean
    public WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> webServerFactoryCustomizer() {
        return factory -> {
            // Get PORT from environment variable, default to 8080 if not set
            String port = System.getenv("PORT");
            int serverPort = port != null ? Integer.parseInt(port) : 8080;

            // Set the port
            factory.setPort(serverPort);

            // Ensure we're binding to all network interfaces
            try {
                factory.setAddress(java.net.InetAddress.getByName("0.0.0.0"));
            } catch (UnknownHostException e) {
                throw new RuntimeException(e);
            }
        };
    }
}