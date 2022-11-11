package com.ssafy.comssa.repository.part;

import com.ssafy.comssa.dto.part.Gpu;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface GpuRepository extends MongoRepository<Gpu,String> {
    Gpu findByPartsID(String name);

}
