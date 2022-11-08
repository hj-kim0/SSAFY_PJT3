package com.ssafy.comssa.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    private final ModelMapper modelMapper = new ModelMapper();

    @Bean
    public ModelMapper modelMapper() {
        modelMapper.getConfiguration()
                .setSkipNullEnabled(true);
        return modelMapper;
    }
}