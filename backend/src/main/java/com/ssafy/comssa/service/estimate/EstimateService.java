package com.ssafy.comssa.service.estimate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.comssa.repository.estimate.EstimateRepository;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Slf4j
@Component
@SuppressWarnings("unused")
public class EstimateService {

    @Autowired
    EstimateRepository estimateRepository;

    public String select(String name) {
        ObjectMapper objectMapper = new ObjectMapper();
        log.info("hello========================================");
        try {
//            log.info(estimateRepository.findByUse(name).getClass().getName());
            return objectMapper.writeValueAsString(estimateRepository.findByUse(name));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "ERROR";
        }
    }
}
