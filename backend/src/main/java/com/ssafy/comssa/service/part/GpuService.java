package com.ssafy.comssa.service.part;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.comssa.dto.part.Gpu;
import com.ssafy.comssa.repository.part.GpuRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Slf4j
@Component
@SuppressWarnings("unused")
public class GpuService {

    @Autowired
    GpuRepository gpuRepository;

    public String selectGpu(String name) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            if (gpuRepository.findByPartsID(name)==null){
                return "none";
            }
            return objectMapper.writeValueAsString(gpuRepository.findByPartsID(name));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "ERROR";
        }
    }

}
