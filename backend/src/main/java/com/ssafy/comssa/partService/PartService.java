package com.ssafy.comssa.partService;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.comssa.repository.CpuRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class PartService {

    @Autowired
    CpuRepository cpuRepository;

    public String selectUser(String name) {
        ObjectMapper objectMapper = new ObjectMapper();
        log.info("hello========================================");
        try {
//            log.info("[Service] findall : {} not exist!!", name);
//            return objectMapper.writeValueAsString(cpuRepository.findCpusByPartsID(name));
            log.info(objectMapper.writeValueAsString(cpuRepository.findByPartsID(name)));
            return objectMapper.writeValueAsString(cpuRepository.findAll());
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "ERROR";
        }
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
