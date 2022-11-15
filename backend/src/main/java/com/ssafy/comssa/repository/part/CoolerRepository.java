package com.ssafy.comssa.repository.part;

import com.ssafy.comssa.dto.part.Cooler;
import org.springframework.data.mongodb.repository.MongoRepository;

@SuppressWarnings("unused")
public interface CoolerRepository extends MongoRepository<Cooler,String> {
    Cooler findByPartsID(String name);
//    List<Cpu> findCpusByPartsID(String name);

}
