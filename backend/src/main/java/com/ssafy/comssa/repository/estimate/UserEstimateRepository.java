package com.ssafy.comssa.repository.estimate;

import com.ssafy.comssa.dto.estimate.UserEstimate;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@SuppressWarnings("unused")
@Repository
public interface UserEstimateRepository extends MongoRepository<UserEstimate,String> {
    List<UserEstimate> findByUserID(String name);

//    UserEstimate findByUserID(String name);
}
