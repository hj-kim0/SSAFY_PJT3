package com.ssafy.comssa.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    private final long MAX_AGE_SECS = 3600;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*") // 외부에서 들어오는 모든 url 들을 허용
                .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS") // 모든 메소드를 허용
                .allowedHeaders("*") // 허용되는 헤더를 정의
                .allowCredentials(true) // 자격증명을 허용
                .maxAge(MAX_AGE_SECS); // maxAge 는 최대 1시간 허용
    }
}