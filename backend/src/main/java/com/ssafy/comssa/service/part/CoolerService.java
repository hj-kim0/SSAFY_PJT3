package com.ssafy.comssa.service.part;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.comssa.repository.part.CoolerRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Slf4j
@Component
@Service
@SuppressWarnings("unused")
public class CoolerService {

    @Autowired
    CoolerRepository coolerRepository;

    public String selectCooler(String name) {
        ObjectMapper objectMapper = new ObjectMapper();
        log.info("hello========================================");
        try {
//            log.info(objectMapper.writeValueAsString(cpuRepository.findByPartsID(name)));
//            log.info("hello========================================");
            if (name.equals("all")){
                return objectMapper.writeValueAsString(coolerRepository.findAll());
            }
            if (coolerRepository.findByPartsID(name)==null){
                return "none";
            }
            return objectMapper.writeValueAsString(coolerRepository.findByPartsID(name));
        } catch (JsonProcessingException e) {
            log.info("hello========================================");
            e.printStackTrace();
            return "ERROR";
        }
    }


}
