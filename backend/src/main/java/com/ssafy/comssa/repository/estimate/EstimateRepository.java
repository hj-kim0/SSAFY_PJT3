package com.ssafy.comssa.repository.estimate;

import com.ssafy.comssa.dto.estimate.PreEstimate;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;



@SuppressWarnings("unused")
@Repository
public interface EstimateRepository extends MongoRepository<PreEstimate,String> {
//    List<Estimate> findByPartsID(String name);
    PreEstimate findByUse(String name);
}
