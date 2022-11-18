package com.ssafy.comssa.controller.part;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.ssafy.comssa.service.part.CpuService;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.ArrayList;

@Slf4j
@RestController
@RequestMapping(path = "/findbyothers")
@Controller
public class CpuFindByOthersController extends PartsFindController {

    @PostMapping(value = "/cpuDetail")
    public Object findCpuByOthers (
            @RequestBody JSONObject body
    ) throws ParseException, JsonProcessingException {
        JSONParser parser = new JSONParser();
        ArrayList<Object> fortest = (ArrayList<Object>) body.get("list");
//        cpu.get(socket) == mainboard.specsID
//        cpu.get(memorySocket) == memory.specsID
//        cpu.get(PCIeSocket) in mainboard.get(PCIeSocket)
//        cpu.get(tdp) <= cooler.get(tdp)
//        idx 0~7
//        cpu, mainboard, memory, gpu, ssd, power, cooler,  tower
        ArrayList<String> bodyList = (ArrayList<String>) body.get("list");
//        log.info("메인보드");
        JSONObject mainboardjson = (JSONObject) parser.parse(mainboardService.selectMainboard(bodyList.get(1)));
        JSONObject memoryjson = (JSONObject) parser.parse(memoryService.selectMemory(bodyList.get(2)));
        JSONObject coolerjson = (JSONObject) parser.parse(coolerService.selectCooler(bodyList.get(6)));
        String socket = mainboardjson.get("specsID").toString();
        String memory = memoryjson.get("specsID").toString();
        ArrayList<String> coolersocket = (ArrayList<String>) coolerjson.get("cpusocket");
        int tdp = Integer.parseInt( coolerjson.get("tdp").toString());

        cpuService.selectCpuByOthers(socket,coolersocket,memory,tdp);

        return findMainboardData(bodyList.get(1));
    }

}
