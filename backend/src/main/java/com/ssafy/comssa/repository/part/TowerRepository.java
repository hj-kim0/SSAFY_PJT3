package com.ssafy.comssa.repository.part;


import com.ssafy.comssa.dto.part.Tower;
import org.springframework.data.mongodb.repository.MongoRepository;

@SuppressWarnings("unused")
public interface TowerRepository extends MongoRepository<Tower,String> {
    Tower findByPartsID(String name);
//    List<Cpu> findCpusByPartsID(String name);

}
