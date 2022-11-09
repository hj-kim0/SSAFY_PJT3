package com.ssafy.comssa.repository.estimate;

import com.ssafy.comssa.dto.estimate.Estimate;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;



@SuppressWarnings("unused")
@Repository
public interface EstimateRepository extends MongoRepository<Estimate,String> {
//    List<Estimate> findByPartsID(String name);
    Estimate findByUse(String name);
}
