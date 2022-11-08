package com.ssafy.comssa.controller.part;

import com.ssafy.comssa.service.estimate.EstimateService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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


    @GetMapping(value = "/used")
    public JSONObject findEstimateData() throws ParseException {
        String name = "normal";
        String forReturnString = estimateService.select(name);
        JSONParser parser = new JSONParser();
        JSONObject jsonObject = (JSONObject) parser.parse(forReturnString);
        String cpuCode = jsonObject.get("cpu").toString();
        String gpuCode = jsonObject.get("gpu").toString();
        String mainboardCode=jsonObject.get("mainboard").toString();
        String memory =jsonObject.get("memory").toString();
        String power = jsonObject.get("power").toString();
        String answer = findCpuData("16101083");
        JSONObject cpuJsonObject = (JSONObject) parser.parse(answer);
//        log.info(forReturn);
        jsonObject.put("cpuDetail",cpuJsonObject);
        return jsonObject;
    }
}
