package com.ssafy.comssa.service.estimate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.comssa.dto.estimate.UserEstimate;
import com.ssafy.comssa.repository.estimate.UserEstimateRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;


@Slf4j
@Component
@SuppressWarnings("unused")
public class UserEstimateService {

    @Autowired
    UserEstimateRepository userEstimateRepository;

    public String select(String name) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        log.info("hello========================================");
        //            log.info(userEstimateRepository.findByUserID(name).toString());
//            log.info(objectMapper.writeValueAsString(cpuRepository.findByPartsID(name)));

        return objectMapper.writeValueAsString(userEstimateRepository.findAllByUserID(name));
    }

    public String insert(UserEstimate estimate){
        userEstimateRepository.insert(estimate);
        return "OK";
    }

//    public void saveUser(String name) {
//
//        Cpu cpu = new Cpu();
////        cpu.setName(name);
////        cpu.setPrice(price);
//
//        if (cpuRepository.findByPartsID(name) != null)
//            log.info("saved!!!");
////            cpu.setId(cpuRepository.findByName(name).getId());
//
//
//        cpuRepository.save(cpu);
//    }

}
