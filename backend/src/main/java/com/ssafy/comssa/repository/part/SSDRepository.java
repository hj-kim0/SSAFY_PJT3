package com.ssafy.comssa.repository.part;

import com.ssafy.comssa.dto.part.SSD;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
@SuppressWarnings("unused")
public interface SSDRepository extends MongoRepository<SSD,String> {
    List<SSD> findByPartsID(String name);
//    List<SSD> findSSDsByPartsID(String name);

}
