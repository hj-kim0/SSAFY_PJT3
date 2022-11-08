package com.ssafy.comssa.repository.part;

import com.ssafy.comssa.dto.part.Cpu;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

@SuppressWarnings("unused")
public interface CpuRepository extends MongoRepository<Cpu,String> {
    List<Cpu> findByPartsID(String name);
//    List<Cpu> findCpusByPartsID(String name);

}
