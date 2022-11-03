package com.ssafy.comssa.repository.part;

import com.ssafy.comssa.dtoPart.Gpu;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface GpuRepository extends MongoRepository<Gpu,String> {
    List<Gpu> findByPartsID(String name);
//    List<Cpu> findCpusByPartsID(String name);

}
