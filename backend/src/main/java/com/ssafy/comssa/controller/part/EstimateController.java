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
public class EstimateController {
    @Autowired
    EstimateService estimateService;

    @GetMapping(value = "/cpu")
    public JSONObject findEstimateData() throws ParseException {
        String name = "normal";
        String forReturnString = estimateService.select(name);
        JSONParser parser = new JSONParser();

//        log.info(forReturn);
        return (JSONObject) parser.parse(forReturnString);
    }
}
