package com.ssafy.comssa.repository.spec;

import com.ssafy.comssa.dto.spec.CpuSpec;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
@SuppressWarnings("unused")
public interface CpuSpecRepository extends MongoRepository<CpuSpec,String> {
    List<CpuSpec> findByPartsID(String name);
}
