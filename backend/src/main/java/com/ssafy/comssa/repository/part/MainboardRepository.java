package com.ssafy.comssa.repository.part;

import com.ssafy.comssa.dto.part.Mainboard;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
@SuppressWarnings("unused")
public interface MainboardRepository extends MongoRepository<Mainboard,String> {
    Mainboard findByPartsID(String name);
//    List<Mainboard> findMainboardsByPartsID(String name);

}
