package com.ssafy.comssa.service.part;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.comssa.dto.part.Cpu;
import com.ssafy.comssa.repository.part.CpuRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
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
    @Autowired
    MongoTemplate mongoTemplate;

    public String selectCpu(String name) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            if (name.equals("all")){
                return objectMapper.writeValueAsString(cpuRepository.findAll());
            }
            if (cpuRepository.findByPartsID(name)==null){
                return "none";
            }
            return objectMapper.writeValueAsString(cpuRepository.findByPartsID(name));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "ERROR";
        }
    }

    public Object selectCpuByOthers(String socket, ArrayList<String> cooler, String memory, int tdp) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();

        Criteria criteria = new Criteria().andOperator(
                Criteria.where("socket").is(socket),
                new Criteria().andOperator( Criteria.where("socket").in(cooler)),
                new Criteria().andOperator(Criteria.where("memorySocket").all(memory)),
                new Criteria().andOperator(Criteria.where("tdp").lt(tdp))
        );


        Query query = new Query(criteria);

        List<Cpu> returnList = mongoTemplate.find(query,  Cpu.class,"cpu");
        String a = objectMapper.writeValueAsString(returnList);
        return a;
    }

}
