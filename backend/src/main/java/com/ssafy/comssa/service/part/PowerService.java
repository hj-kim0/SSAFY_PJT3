package com.ssafy.comssa.service.part;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.comssa.repository.part.PowerRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@SuppressWarnings("unused")
public class PowerService {

    @Autowired
    PowerRepository powerRepository;

    public String selectPower(String name) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            if (name.equals("all")){
                return objectMapper.writeValueAsString(powerRepository.findAll());
            }
            if (powerRepository.findByPartsID(name)==null){
                return "none";
            }
            return objectMapper.writeValueAsString(powerRepository.findByPartsID(name));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "ERROR";
        }
    }

}
