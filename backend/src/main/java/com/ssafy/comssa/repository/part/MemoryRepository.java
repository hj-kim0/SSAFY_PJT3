package com.ssafy.comssa.repository.part;

import com.ssafy.comssa.dtoPart.Memory;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
@SuppressWarnings("unused")
public interface MemoryRepository extends MongoRepository<Memory,String> {
    List<Memory> findByPartsID(String name);
//    List<Memory> findMemorysByPartsID(String name);

}
