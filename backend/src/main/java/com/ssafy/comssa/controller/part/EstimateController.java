package com.ssafy.comssa.controller.part;

import com.ssafy.comssa.service.estimate.EstimateService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.util.ArrayList;


@Slf4j
@RestController
@RequestMapping(path = "/estimate")
@Controller
public class EstimateController extends PartsFindController {
    @Autowired
    EstimateService estimateService;

    @PostMapping(value = "/default")
//    @GetMapping(value = "/default")
    public ArrayList<JSONObject> findEstimateData(
            @RequestBody JSONObject body
    ) throws ParseException {
        JSONParser parser = new JSONParser();

        //리퀘스트 파라미터
        String inputProgram = body.get("purpose_program").toString();
        String inputCpu = body.get("cpu").toString();
        String inputGpu = body.get("gpu").toString();
        String inputMainboard = body.get("mainboard").toString();
        String inputMemory = body.get("memory").toString();
        String inputPower = body.get("power").toString();
        String inputCooler = body.get("cooler").toString();
        String inputCase = body.get("cooler").toString();
        String inputSsd = body.get("cooler").toString();
        // 프로그램 이름 받아서 검색
        String forReturnString = estimateService.select(inputProgram);

        JSONObject jsonObject = (JSONObject) parser.parse(forReturnString);


        String cpuCode = jsonObject.get("cpu").toString();
        String gpuCode = jsonObject.get("gpu").toString();
        String mainboardCode = jsonObject.get("mainboard").toString();
        String memoryCode = jsonObject.get("memory").toString();
        String powerCode = jsonObject.get("power").toString();
        String ssdCode = jsonObject.get("ssd").toString();
        String coolerCode = jsonObject.get("cooler").toString();
        String towerCode = jsonObject.get("tower").toString();


        String cpuFind = findCpuData(cpuCode);
        String gpuFind = findGpuData(gpuCode);
        String mainboardFind = findMainboardData(mainboardCode);
        String memoryFind = findMemoryData(memoryCode);
        String powerFind = findPowerData(powerCode);
        String ssdFind = findSsdData(ssdCode);
        String coolerFind = findCoolerData(coolerCode);
        String towerFind = findTowerData(towerCode);
        JSONObject cpuJsonObject = (cpuFind.equals("none")) || (inputCpu.equals("false")) ? null : (JSONObject) parser.parse(cpuFind);
        JSONObject gpuJsonObject = (gpuFind.equals("none")) || (inputGpu.equals("false")) ? null : (JSONObject) parser.parse(gpuFind);
        JSONObject mainboardJsonObject = (mainboardFind.equals("none")) || (inputMainboard.equals("false")) ? null : (JSONObject) parser.parse(mainboardFind);
        JSONObject memoryJsonObject = (memoryFind.equals("none")) || (inputMemory.equals("false")) ? null : (JSONObject) parser.parse(memoryFind);
        JSONObject powerJsonObject = (powerFind.equals("none")) || (inputPower.equals("false")) ? null : (JSONObject) parser.parse(powerFind);
        JSONObject ssdJsonObject = (ssdFind.equals("none")) || (inputSsd.equals("false")) ? null : (JSONObject) parser.parse(ssdFind);
        JSONObject towerJsonObject = (towerFind.equals("none")) || (inputCase.equals("false")) ? null : (JSONObject) parser.parse(towerFind);
        JSONObject coolerJsonObject = (coolerFind.equals("none")) || (inputCooler.equals("false")) ? null : (JSONObject) parser.parse(coolerFind);
////        log.info(gpuFind);
//        log.info(needGpu);
//        log.info(cpuCode);
//        log.info(cpuFind);
        ArrayList<JSONObject> returnArray = new ArrayList<JSONObject>();
        JSONObject jsonObject0 = new JSONObject();
        jsonObject0.put("idx", 0);
        jsonObject0.put("Detail", cpuJsonObject);
        returnArray.add(jsonObject0);
        JSONObject jsonObject1 = new JSONObject();
        jsonObject1.put("idx", 1);
        jsonObject1.put("Detail", mainboardJsonObject);
        returnArray.add(jsonObject1);
        JSONObject jsonObject2 = new JSONObject();
        jsonObject2.put("idx", 2);
        jsonObject2.put("Detail", memoryJsonObject);
        returnArray.add(jsonObject2);
        JSONObject jsonObject3 = new JSONObject();
        jsonObject3.put("idx", 3);
        jsonObject3.put("Detail", gpuJsonObject);
        returnArray.add(jsonObject3);
        JSONObject jsonObject4 = new JSONObject();
        jsonObject4.put("idx", 4);
        jsonObject4.put("Detail", ssdJsonObject);
        returnArray.add(jsonObject4);
        JSONObject jsonObject5 = new JSONObject();
        jsonObject5.put("idx", 5);
        jsonObject5.put("Detail", powerJsonObject);
        returnArray.add(jsonObject5);
        JSONObject jsonObject6 = new JSONObject();
        jsonObject6.put("idx", 6);
        jsonObject6.put("Detail", coolerJsonObject);
        returnArray.add(jsonObject6);
        JSONObject jsonObject7 = new JSONObject();
        jsonObject7.put("idx", 7);
        jsonObject7.put("Detail", towerJsonObject);
        returnArray.add(jsonObject7);

        return returnArray;
    }

}
