package com.ssafy.comssa.repository.part;

import com.ssafy.comssa.dto.part.Power;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
@SuppressWarnings("unused")
public interface PowerRepository extends MongoRepository<Power,String> {
    List<Power> findByPartsID(String name);
//    List<Power> findPowersByPartsID(String name);

}
