package com.ssafy.comssa.repository.part;

import com.ssafy.comssa.dto.part.HDD;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

@SuppressWarnings("unused")
public interface HDDRepository extends MongoRepository<HDD,String> {
    List<HDD> findByPartsID(String name);
//    List<HDD> findHDDsByPartsID(String name);

}
