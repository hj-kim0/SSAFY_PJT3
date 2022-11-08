package com.ssafy.comssa.controller.part;

import com.ssafy.comssa.service.estimate.EstimateService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

@Slf4j
@RestController
@RequestMapping(path = "/estimate")
@Controller
@CrossOrigin(origins="*")
public class EstimateController extends PartsFindController{
    @Autowired
    EstimateService estimateService;


    @GetMapping(value = "/default")
    public JSONObject findEstimateData(
            @RequestParam(value = "program",defaultValue = "normal") String program,
            @RequestParam(value = "budget",defaultValue = "2000000") String budget,
            @RequestParam(value = "cpu",defaultValue = "need") String needCpu,
            @RequestParam(value = "gpu",defaultValue = "need") String needGpu,
            @RequestParam(value = "SSD",defaultValue = "need") String needSSD,
            @RequestParam(value = "power",defaultValue = "need") String needPower,
            @RequestParam(value = "memory",defaultValue = "need") String needMemory,
            @RequestParam(value = "mainboard",defaultValue = "need") String needMainboard
    ) throws ParseException {
        String forReturnString = estimateService.select(program);
        JSONParser parser = new JSONParser();
        JSONObject jsonObject = (JSONObject) parser.parse(forReturnString);
        String cpuCode = jsonObject.get("cpu").toString();
        String gpuCode = jsonObject.get("gpu").toString();
        String mainboardCode=jsonObject.get("mainboard").toString();
        String memoryCode =jsonObject.get("memory").toString();
        String powerCode = jsonObject.get("power").toString();
        if (!needGpu.equals("need")){
            log.info("I DON'T NEED GPU!!~!~!~!~!~!~!~~!~!~!~!~!~!~!");
            gpuCode="false";
        }
        if (!needCpu.equals("need")){
            log.info("I DON'T NEED CPU!!~!~!~!~!~!~!~~!~!~!~!~!~!~!");
            cpuCode="false";
        }
        if (!needMainboard.equals("need")){
            log.info("I DON'T NEED MB!!~!~!~!~!~!~!~~!~!~!~!~!~!~!");
            mainboardCode="false";
        }
        if (!needMemory.equals("need")){
            log.info("I DON'T NEED RAM!!~!~!~!~!~!~!~~!~!~!~!~!~!~!");
            memoryCode="false";
        }
        if (!needPower.equals("need")){
            log.info("I DON'T NEED POWER!!~!~!~!~!~!~!~~!~!~!~!~!~!~!");
            powerCode="false";
        }
        log.info("=================================");
        log.info("=================================");
        log.info(cpuCode);
        log.info(gpuCode);
        log.info(memoryCode);
        log.info(mainboardCode);
        log.info(powerCode);
        log.info("=================================");
        log.info("=================================");

        String cpuFind = findCpuData(cpuCode);
        String gpuFind = findGpuData(gpuCode);
        String mainboardFind = findMainboardData(mainboardCode);
        String memoryFind = findMemoryData(memoryCode);
        String powerFind = findPowerData(powerCode);
        JSONObject cpuJsonObject = (cpuFind.equals("none"))? null : (JSONObject) parser.parse(cpuFind);
        JSONObject gpuJsonObject = (gpuFind.equals("none"))? null : (JSONObject) parser.parse(gpuFind);
        JSONObject mainboardJsonObject = (mainboardFind.equals("none"))?null:(JSONObject) parser.parse(mainboardFind);
        JSONObject memoryJsonObject = (memoryFind.equals("none"))?null:(JSONObject) parser.parse(memoryFind);
        JSONObject powerJsonObject = (powerFind.equals("none"))?null:(JSONObject) parser.parse(powerFind);
//        log.info(gpuFind);
//        log.info(needGpu);
//        log.info(cpuCode);
//        log.info(cpuFind);
        jsonObject.put("cpuDetail",cpuJsonObject);
        jsonObject.put("gpuDetail",gpuJsonObject);
        jsonObject.put("mainboardDetail",mainboardJsonObject);
        jsonObject.put("memoryDetail",memoryJsonObject);
        jsonObject.put("powerDetail",powerJsonObject);
        return jsonObject;
    }

}
