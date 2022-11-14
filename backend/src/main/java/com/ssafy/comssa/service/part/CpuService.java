package com.ssafy.comssa.service.part;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.comssa.repository.part.CpuRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Slf4j
@Component
@Service
@SuppressWarnings("unused")
public class CpuService {

    @Autowired
    CpuRepository cpuRepository;

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
