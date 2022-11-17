package com.ssafy.comssa.controller.part;

import com.ssafy.comssa.dto.estimate.UserEstimate;
import com.ssafy.comssa.service.estimate.EstimateService;
import com.ssafy.comssa.service.estimate.UserEstimateService;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


@Slf4j
@RestController
@RequestMapping(path = "/userestimate")
@Controller
public class UserEstimateController extends PartsFindController {
    @Autowired
    UserEstimateService userEstimateService;

    @PostMapping(value = "/find")
//    @GetMapping(value = "/default")
    public ArrayList<JSONObject> findUserEstimateData(
            @RequestBody JSONObject body
    ) throws ParseException {
        JSONParser parser = new JSONParser();

        String inputUserID = body.get("userID").toString();
        log.info("============userID===========");
        log.info(inputUserID);
        String forReturnString = userEstimateService.select(inputUserID);
        log.info(forReturnString);
        log.info("c=========lear");
        ArrayList<JSONObject> returnArrayList = (JSONArray) parser.parse(forReturnString);

        for (JSONObject j:returnArrayList) {
            log.info(j.toString());
        }
//        JSONObject jsonObject = (JSONObject) parser.parse(forReturnString);

//        log.info(jsonObject.toString());


//        ArrayList<JSONObject> returnArrayList = new ArrayList<>();

        return returnArrayList;
    }

    @PutMapping(value = "/put")
    public String putUserEstimateData(
            @RequestBody JSONObject body
    ) throws ParseException {
        JSONParser parser = new JSONParser();

        String inputUserID = body.get("userID").toString();
        int inputIdx = Integer.parseInt(body.get("idx").toString());
        String inputPartsString = body.get("parts").toString();
        ArrayList<JSONObject> inputParts = (ArrayList<JSONObject>) body.get("parts");
        String inputEstimateNAme = body.get("estimateName").toString();
        UserEstimate userEstimate = new UserEstimate(inputIdx,inputUserID,inputEstimateNAme,inputParts);
        userEstimateService.insert(userEstimate);

        return "hello Fucking Put world";
    }

}
