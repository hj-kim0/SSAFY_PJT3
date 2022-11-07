package com.ssafy.comssa.partService;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.comssa.repository.part.CpuRepository;
import com.ssafy.comssa.repository.part.GpuRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@SuppressWarnings("unused")
public class PartsService {

    @Autowired
    CpuRepository cpuRepository;
    @Autowired
    GpuRepository gpuRepository;

    public String selectCpu(String name) {
        ObjectMapper objectMapper = new ObjectMapper();
        log.info("hello========================================");
        try {
//            log.info(objectMapper.writeValueAsString(cpuRepository.findByPartsID(name)));
            return objectMapper.writeValueAsString(cpuRepository.findAll());
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "ERROR";
        }
    }

    public String selectGpu(String name) {
        ObjectMapper objectMapper = new ObjectMapper();
        log.info("hello========================================");
        try {
            log.info(objectMapper.writeValueAsString(gpuRepository.findByPartsID(name)));
            return objectMapper.writeValueAsString(gpuRepository.findAll());
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
