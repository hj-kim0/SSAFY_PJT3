package com.ssafy.comssa.repository.part;

import com.ssafy.comssa.dtoPart.Mainboard;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
@SuppressWarnings("unused")
public interface MainboardRepository extends MongoRepository<Mainboard,String> {
    List<Mainboard> findByPartsID(String name);
//    List<Mainboard> findMainboardsByPartsID(String name);

}
