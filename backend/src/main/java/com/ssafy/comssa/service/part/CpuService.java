package com.ssafy.comssa.service.part;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.comssa.dto.part.Cpu;
import com.ssafy.comssa.repository.part.CpuRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Component
@Service
@SuppressWarnings("unused")
public class CpuService {

    @Autowired
    CpuRepository cpuRepository;
    MongoTemplate mongoTemplate;

    public String selectCpu(String name) {
        ObjectMapper objectMapper = new ObjectMapper();
        log.info("hello========================================");
        try {
//            log.info(objectMapper.writeValueAsString(cpuRepository.findByPartsID(name)));
//            log.info("hello========================================");
            if (name.equals("all")){
                return objectMapper.writeValueAsString(cpuRepository.findAll());
            }
            if (cpuRepository.findByPartsID(name)==null){
                return "none";
            }
            return objectMapper.writeValueAsString(cpuRepository.findByPartsID(name));
        } catch (JsonProcessingException e) {
            log.info("hello========================================");
            e.printStackTrace();
            return "ERROR";
        }
    }

    public Object selectCpuByOthers(String socket, ArrayList<String> cooler, String memory, int tdp) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();

        cpuRepository.findAllBySocketEqualsAndSocketIn(socket,cooler);

        log.info("sevice");
        List<Cpu> returnList = cpuRepository.findAllBySocketEqualsAndSocketIn(socket,cooler);

        log.info(objectMapper.writeValueAsString(cpuRepository.findAllBySocketEqualsAndSocketIn(socket,cooler)));
        return objectMapper.writeValueAsString(cpuRepository.findAllBySocketEqualsAndSocketIn(socket,cooler));
    }

}
