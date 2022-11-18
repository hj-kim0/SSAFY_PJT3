package com.ssafy.comssa.repository.part;

import com.ssafy.comssa.dto.part.Cpu;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("unused")
public interface CpuRepository extends MongoRepository<Cpu,String> {
    Cpu findByPartsID(String name);
    List<Cpu> findAllBySocketEqualsAndSocketIn(String socket,ArrayList<String> cooler);

//    List<Cpu> findAllBySocketEqualsAndSocketInAndMemorySocketContainingAndTdpLessThan
//            (
//                    String socket,
//                    ArrayList<String> cooler,
//                    String memory,
//                    int tdp
//            );
//    List<Cpu> findCpusByPartsID(String name);
//cpu.get(socket) == mainboard.specsID
//cpu.get(memorySocket) == memory.specsID
//cpu.get(PCIeSocket) in mainboard.get(PCIeSocket)
//cpu.get(tdp) <= cooler.get(tdp)
}
